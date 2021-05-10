import $ivy.`com.lihaoyi::mill-contrib-bloop:$MILL_VERSION`
import $ivy.`io.get-coursier::coursier-launcher:2.0.16`
import $file.project.deps, deps.{Deps, Scala, graalVmVersion}
import $file.project.ghreleaseassets, ghreleaseassets.upload
import $file.project.nativeimage, nativeimage.generateNativeImage
import $file.project.publish, publish.{ghOrg, ghName, ScalaCliPublishModule}
import $file.project.settings, settings.cs

import mill._, scalalib.{publish => _, _}

import scala.util.Properties


object cli extends Cross[Cli](defaultCliScalaVersion)
object `jvm-tests` extends JvmTests
object `native-tests` extends NativeTests
object stubs extends JavaModule with ScalaCliPublishModule
object runner extends Cross[Runner](Scala.all: _*)
object `test-runner` extends Cross[TestRunner](Scala.all: _*)
object bloopgun extends Cross[Bloopgun](Scala.allScala2: _*)

def defaultCliScalaVersion = Scala.scala212

class Cli(val crossScalaVersion: String) extends CrossSbtModule with ScalaCliPublishModule {
  def moduleDeps = Seq(
    bloopgun(),
    `test-runner`()
  )
  def ivyDeps = Agg(
    Deps.ammCompiler,
    Deps.asm,
    Deps.bloopConfig,
    Deps.bsp4j,
    Deps.caseApp,
    Deps.coursierJvm
      // scalaJsEnvNodeJs brings a guava version that conflicts with this
      .exclude(("com.google.collections", "google-collections")),
    Deps.coursierLauncher,
    Deps.jimfs, // scalaJsEnvNodeJs pulls jimfs:1.1, whose class path seems borked (bin compat issue with the guava version it depends on)
    Deps.jniUtils,
    Deps.nativeTestRunner,
    Deps.nativeTools,
    Deps.scalaJsEnvNodeJs,
    Deps.scalaJsLinker,
    Deps.scalaJsTestAdapter,
    Deps.scalaparse,
    Deps.svmSubs,
    Deps.swoval
  )
  def compileIvyDeps = Agg(
    Deps.svm
  )
  def mainClass = Some("scala.cli.ScalaCli")

  def constantsFile = T{
    val dest = T.dest / "Constants.scala"
    val code =
      s"""package scala.cli.internal
         |
         |/** Build-time constants. Generated by mill. */
         |object Constants {
         |  def version = "${publishVersion()}"
         |
         |  def bloopVersion = "${Deps.bloopConfig.dep.version}"
         |  def bspVersion = "${Deps.bsp4j.dep.version}"
         |  def scalaJsVersion = "${Deps.scalaJsLinker.dep.version}"
         |  def scalaNativeVersion = "${Deps.nativeTools.dep.version}"
         |
         |  def stubsOrganization = "${stubs.pomSettings().organization}"
         |  def stubsModuleName = "${stubs.artifactName()}"
         |  def stubsVersion = "${stubs.publishVersion()}"
         |
         |  def testRunnerOrganization = "${`test-runner`(defaultCliScalaVersion).pomSettings().organization}"
         |  def testRunnerModuleName = "${`test-runner`(defaultCliScalaVersion).artifactName()}"
         |  def testRunnerVersion = "${`test-runner`(defaultCliScalaVersion).publishVersion()}"
         |  def testRunnerMainClass = "${`test-runner`(defaultCliScalaVersion).mainClass().getOrElse(sys.error("No main class defined for test-runner"))}"
         |
         |  def runnerOrganization = "${runner(defaultCliScalaVersion).pomSettings().organization}"
         |  def runnerModuleName = "${runner(defaultCliScalaVersion).artifactName()}"
         |  def runnerVersion = "${runner(defaultCliScalaVersion).publishVersion()}"
         |  def runnerMainClass = "${runner(defaultCliScalaVersion).mainClass().getOrElse(sys.error("No main class defined for runner"))}"
         |}
         |""".stripMargin
    os.write(dest, code)
    PathRef(dest)
  }
  def generatedSources = super.generatedSources() ++ Seq(constantsFile())

  def nativeImage = T{
    val cp = runClasspath().map(_.path)
    val mainClass0 = mainClass().getOrElse(sys.error("Don't know what main class to use"))
    val dest = T.ctx().dest / "scala"
    val actualDest = T.ctx().dest / s"scala$extension"

    generateNativeImage(graalVmVersion, cp, mainClass0, dest)

    PathRef(actualDest)
  }

  def runWithAssistedConfig(args: String*) = T.command {
    val cp = (jar() +: upstreamAssemblyClasspath().toSeq).map(_.path).mkString(java.io.File.pathSeparator)
    val mainClass0 = mainClass().getOrElse(sys.error("No main class"))
    val graalVmHome = Option(System.getenv("GRAALVM_HOME")).getOrElse {
      import sys.process._
      Seq(cs, "java-home", "--jvm", s"graalvm-java11:$graalVmVersion", "--jvm-index", "cs").!!.trim
    }
    val outputDir = T.ctx().dest / "config"
    val command = Seq(
      s"$graalVmHome/bin/java",
      s"-agentlib:native-image-agent=config-output-dir=$outputDir",
      "-cp", cp,
      mainClass0
    ) ++ args
    os.proc(command.map(x => x: os.Shellable): _*).call(
      stdin = os.Inherit,
      stdout = os.Inherit,
      stderr = os.Inherit
    )
    T.log.outputStream.println(s"Config generated in ${outputDir.relativeTo(os.pwd)}")
  }

  def runFromJars(args: String*) = T.command {
    val cp = (jar() +: upstreamAssemblyClasspath().toSeq).map(_.path).mkString(java.io.File.pathSeparator)
    val mainClass0 = mainClass().getOrElse(sys.error("No main class"))
    val command = Seq("java", "-cp", cp, mainClass0) ++ args
    os.proc(command.map(x => x: os.Shellable): _*).call(
      stdin = os.Inherit,
      stdout = os.Inherit,
      stderr = os.Inherit
    )
  }

  def launcher = T{
    import coursier.launcher.{AssemblyGenerator, BootstrapGenerator, ClassPathEntry, Parameters, Preamble}
    import scala.util.Properties.isWin
    val cp = (jar() +: upstreamAssemblyClasspath().toSeq).map(_.path)
    val mainClass0 = mainClass().getOrElse(sys.error("No main class"))

    val dest = T.ctx().dest / (if (isWin) "launcher.bat" else "launcher")

    val preamble = Preamble()
      .withOsKind(isWin)
      .callsItself(isWin)
    val entries = cp.map(path => ClassPathEntry.Url(path.toNIO.toUri.toASCIIString))
    val loaderContent = coursier.launcher.ClassLoaderContent(entries)
    val params = Parameters.Bootstrap(Seq(loaderContent), mainClass0)
      .withDeterministic(true)
      .withPreamble(preamble)

    BootstrapGenerator.generate(params, dest.toNIO)

    PathRef(dest)
  }

  object test extends Tests {
    def ivyDeps = Agg(
      Deps.expecty,
      Deps.munit
    )
    def testFrameworks = Seq("munit.Framework")
  }
}

trait CliTests extends SbtModule with ScalaCliPublishModule {
  def scalaVersion = sv
  def testLauncher: T[PathRef]
  def isNative = T{ false }

  def sv = Scala.scala213

  private def mainArtifactName = T{ artifactName() }
  object test extends Tests {
    def ivyDeps = Agg(
      Deps.expecty,
      Deps.munit,
      Deps.osLib,
      Deps.pprint
    )
    def testFrameworks = Seq("munit.Framework")
    def forkEnv = super.forkEnv() ++ Seq(
      "SCALA_CLI" -> testLauncher().path.toString,
      "IS_NATIVE_SCALA_CLI" -> isNative().toString
    )
    def sources = T.sources {
      val name = mainArtifactName()
      super.sources().map { ref =>
        PathRef(os.Path(ref.path.toString.replace(name, "cli-tests")))
      }
    }
  }
}

trait NativeTests extends CliTests {
  def testLauncher = cli(defaultCliScalaVersion).nativeImage()
  def isNative = true
}

trait JvmTests extends CliTests {
  def testLauncher = cli(defaultCliScalaVersion).launcher()
}

class Runner(val crossScalaVersion: String) extends CrossSbtModule with ScalaCliPublishModule {
  def mainClass = Some("scala.cli.runner.Runner")
  def ivyDeps =
    if (crossScalaVersion == "3.0.0-RC2")
      Agg(Deps.stacktraceBuddy)
    else
      Agg.empty[mill.scalalib.Dep]
}

class TestRunner(val crossScalaVersion: String) extends CrossSbtModule with ScalaCliPublishModule {
  def ivyDeps = Agg(
    Deps.asm,
    Deps.testInterface
  )
  def mainClass = Some("scala.cli.testrunner.DynamicTestRunner")
}

class Bloopgun(val crossScalaVersion: String) extends CrossSbtModule with ScalaCliPublishModule {
  def ivyDeps = Agg(
    Deps.coursierInterface,
    Deps.snailgun
  )
  def mainClass = Some("scala.cli.bloop.bloopgun.Bloopgun")

  def constantsFile = T{
    val dest = T.dest / "Constants.scala"
    val code =
      s"""package scala.cli.bloop.bloopgun.internal
         |
         |/** Build-time constants. Generated by mill. */
         |object Constants {
         |  def bloopVersion = "${Deps.bloopConfig.dep.version}"
         |}
         |""".stripMargin
    os.write(dest, code)
    PathRef(dest)
  }
  def generatedSources = super.generatedSources() ++ Seq(constantsFile())
}


def publishSonatype(tasks: mill.main.Tasks[PublishModule.PublishData]) =
  T.command {
    import scala.concurrent.duration._
    val timeout = 10.minutes
    val credentials = sys.env("SONATYPE_USERNAME") + ":" + sys.env("SONATYPE_PASSWORD")
    val pgpPassword = sys.env("PGP_PASSWORD")
    val data = define.Task.sequence(tasks.value)()

    publish.publishSonatype(
      credentials = credentials,
      pgpPassword = pgpPassword,
      data = data,
      timeout = timeout,
      log = T.ctx().log
    )
  }


def platformSuffix = {
  val arch = sys.props("os.arch").toLowerCase(java.util.Locale.ROOT) match {
    case "amd64" => "x86_64"
    case other => other
  }
  val os =
    if (Properties.isWin) "pc-win32"
    else if (Properties.isLinux) "pc-linux"
    else if (Properties.isMac) "apple-darwin"
    else sys.error(s"Unrecognized OS: ${sys.props("os.name")}")
  s"$arch-$os"
}

def extension =
  if (Properties.isWin) ".exe"
  else ""

def copyLauncher(directory: String = "artifacts") = T.command {
  val path = os.Path(java.nio.file.Paths.get(directory).toAbsolutePath)
  val nativeLauncher = cli(defaultCliScalaVersion).nativeImage().path
  val name = s"scala-$platformSuffix$extension"
  os.copy(nativeLauncher, path / name, createFolders = true, replaceExisting = true)
}

def uploadLaunchers(directory: String = "artifacts") = T.command {
  val path = os.Path(java.nio.file.Paths.get(directory).toAbsolutePath)
  val launchers = os.list(path).filter(os.isFile(_)).map { path =>
    path.toNIO -> path.last
  }
  val ghToken = Option(System.getenv("UPLOAD_GH_TOKEN")).getOrElse {
    sys.error("UPLOAD_GH_TOKEN not set")
  }
  val (tag, overwriteAssets) = {
    val ver = cli(defaultCliScalaVersion).publishVersion()
    if (ver.endsWith("-SNAPSHOT")) ("latest", true)
    else ("v" + ver, false)
  }
  upload(ghOrg, ghName, ghToken, tag, dryRun = false, overwrite = overwriteAssets)(launchers: _*)
}
