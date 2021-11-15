"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3232],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return p}});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=l.createContext({}),o=function(e){var a=l.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=o(e.components);return l.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},d=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=o(t),p=n,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return t?l.createElement(h,s(s({ref:a},u),{},{components:t})):l.createElement(h,s({ref:a},u))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=d;var r={};for(var c in a)hasOwnProperty.call(a,c)&&(r[c]=a[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var o=2;o<i;o++)s[o]=t[o];return l.createElement.apply(null,s)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,a,t){var l=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},5064:function(e,a,t){t.d(a,{Z:function(){return d}});var l=t(7462),n=t(7294),i=t(2389),s=t(9443);var r=function(){var e=(0,n.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(3039),o=t(6010),u="tabItem_1uMI";function m(e){var a,t,l,i=e.lazy,s=e.block,m=e.defaultValue,d=e.values,p=e.groupId,h=e.className,b=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),f=(0,c.lx)(v,(function(e,a){return e.value===a.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(a=null!=m?m:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(l=b[0])?void 0:l.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=r(),w=k.tabGroupChoices,N=k.setTabGroupChoices,x=(0,n.useState)(g),y=x[0],T=x[1],E=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var Z=w[p];null!=Z&&Z!==y&&v.some((function(e){return e.value===Z}))&&T(Z)}var C=function(e){var a=e.currentTarget,t=E.indexOf(a),l=v[t].value;l!==y&&(I(a),T(l),null!=p&&N(p,l))},S=function(e){var a,t=null;switch(e.key){case"ArrowRight":var l=E.indexOf(e.currentTarget)+1;t=E[l]||E[0];break;case"ArrowLeft":var n=E.indexOf(e.currentTarget)-1;t=E[n]||E[E.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},h)},v.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,className:(0,o.Z)("tabs__item",u,{"tabs__item--active":y===a}),key:a,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:C,onClick:C},null!=t?t:a)}))),i?(0,n.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}function d(e){var a=(0,i.Z)();return n.createElement(m,(0,l.Z)({key:String(a)},e))}},1657:function(e,a,t){t.d(a,{Z:function(){return o}});var l=t(7294),n=t(5064),i=t(8215),s=t(2389);var r=function(e){var a=e.children,t=e.fallback;return(0,s.Z)()&&null!=a?l.createElement(l.Fragment,null,a()):t||null},c=t(1417);function o(e){return l.createElement(r,null,(function(){return l.createElement("div",null,l.createElement(n.Z,{groupId:"operating-systems",defaultValue:(0,c.l)(),values:[{label:"Windows",value:"windows"},{label:"macOS",value:"mac"},{label:"Linux",value:"linux"}]},l.createElement(i.Z,{value:"windows"},l.createElement("a",{className:"no_monospace",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-win32.msi"},"Download Scala CLI for Windows")),l.createElement(i.Z,{value:"linux"},l.createElement("p",null,"Run the following one-line command in your terminal:"),l.createElement("code",null,"curl -sSLf https://virtuslab.github.io/scala-cli-packages/scala-setup.sh | sh")),l.createElement(i.Z,{value:"mac"},l.createElement("p",null,"Run the following one-line command in your terminal:"),l.createElement("code",null,"brew install Virtuslab/scala-cli/scala-cli"))))}))}},1434:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294);function n(e){return l.createElement("div",{className:"col col--"+e.colsize},l.createElement("h1",{className:"section-title"+(e.promptsign?" with-before":"")},e.title))}},2051:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294);function n(e){return l.createElement("div",{className:"section-features__item col col--4"},l.createElement("div",{className:"section-features__item-wrapper"},l.createElement("div",{className:"icon"},e.icon?l.createElement("img",{src:e.icon,alt:e.title}):""),l.createElement("div",{className:"title"},e.title),l.createElement("div",{className:"desc"},e.children)))}},1260:function(e,a,t){t.d(a,{Z:function(){return i}});var l=t(7294),n=t(8465);function i(e){return l.createElement("div",{className:"section-image-box__row row "},l.createElement("div",{className:"section-image-box__row-text col col--1 left-margin-stub"}),l.createElement("div",{className:"section-image-box__row-text col col--5 "},l.createElement("div",{className:"section-image-box__row-text-wrapper"},l.createElement("h3",null,e.title),l.createElement("div",{className:"content"},e.children))),l.createElement("div",{className:"section-image-box__row-image col col--6 "},l.createElement("div",{className:"section-image-box__row-image-wrapper"},e.image?l.createElement("div",{className:"green_border"},l.createElement(n.Z,{alt:e.image,sources:{light:"/img/"+e.image,dark:"/img/dark/"+e.image}})):"")),l.createElement("div",{className:"section-image-box__row-text col col--1 right-margin-stub"}))}},9882:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294);function n(e){return l.createElement("section",{className:"section "+e.className},e.children)}},115:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294);function n(e){var a=e.title.toLowerCase().split(" ").join("-"),t=l.createElement("a",{href:"#"+a},">_");return l.createElement("div",{className:"section-about__wrapper row",id:a},l.createElement("div",{className:"col col--1 big-title pre-title"},t),l.createElement("div",{className:"col col--3 big-title"},l.createElement("span",{className:"pre-title-mobile"},t)," ",e.title),l.createElement("div",{className:"col col--8 description"},e.children))}},2740:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294);function n(e){return l.createElement("div",{className:"section__header"},l.createElement("h2",null,e.title),l.createElement("div",{className:"section__header-description"},e.children))}},2994:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294);function n(e){return!!e.slug?l.createElement("a",{href:"/"+e.slug,className:"col col--4 use-box-wrapper"},l.createElement("div",{className:"use-box"},l.createElement("div",{className:"icon-wrapper"},l.createElement("img",{src:"img/ico-"+e.slug+".png",alt:e.slug+" icon"})),l.createElement("h3",null,e.title),l.createElement("p",null,e.description),l.createElement("div",{className:"read-more-wrap"},l.createElement("div",{className:"read-more with-before"},"Read more")))):l.createElement("div",{className:"col col--4 use-box-wrapper"},l.createElement("div",{className:"use-box your-case"},l.createElement("div",{className:"icon-wrapper"},l.createElement("img",{className:"light-theme",src:"img/ico-yours.png",alt:"your use case icon"}),l.createElement("img",{className:"dark-theme",src:"img/ico-yours-dark.png",alt:"your use case icon"})),l.createElement("h3",null,e.title),l.createElement("p",null,e.description)))}},1417:function(e,a,t){t.d(a,{l:function(){return l}});var l=function(){var e=function(e){return"undefined"!=typeof window&&-1!==window.navigator.userAgent.indexOf(e)};return e("Win")?"windows":e("Mac")?"mac":"linux"}},7792:function(e,a,t){t.r(a),t.d(a,{default:function(){return N}});var l=t(7294),n=t(2263),i=t(6823),s=t(9882),r=(t(1260),t(2740),t(2051),t(115)),c=(t(2994),t(1434)),o=t(1657),u=t(5064),m=t(7462),d=t(3366),p=t(3905),h=t(8215);var b=t(1721),v=function(e){function a(a){var t;return(t=e.call(this,a)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}(0,b.Z)(a,e);var t=a.prototype;return t.handleClick=function(e){window.location.href=this.props.href},t.render=function(){return l.createElement("button",{class:"button button--danger button--outline",onClick:this.handleClick},this.props.desc)},a}(l.Component),f=t(1417),g=["components"],k={toc:[]};function w(e){var a=e.components,t=(0,d.Z)(e,g);return(0,p.kt)("wrapper",(0,m.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)(r.Z,{title:"Advanced Installation",mdxType:"SectionAbout"},(0,p.kt)("div",{className:"margin--lg"}),(0,p.kt)(u.Z,{groupId:"operating-systems-specific",defaultValue:(0,f.l)(),values:[{label:"Windows",value:"windows"},{label:"MacOs",value:"mac"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,p.kt)(h.Z,{value:"windows",mdxType:"TabItem"}),(0,p.kt)(h.Z,{value:"mac",mdxType:"TabItem"}),(0,p.kt)(h.Z,{value:"linux",mdxType:"TabItem"}))),(0,p.kt)("div",{className:"row"},(0,p.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,p.kt)("p",null,"Pick the installation method:"),(0,p.kt)(u.Z,{groupId:"operating-systems-specific",defaultValue:(0,f.l)(),values:[{label:"Windows",value:"windows"},{label:"MacOs",value:"mac"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,p.kt)(h.Z,{value:"linux",mdxType:"TabItem"},(0,p.kt)(u.Z,{groupId:"linux",defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Apt",value:"apt"},{label:"Deb",value:"deb"},{label:"Yum",value:"yum"},{label:"Rpm",value:"rpm"},{label:"Alpine",value:"alpine"},{label:"Nix",value:"nix"}],mdxType:"Tabs"},(0,p.kt)(h.Z,{value:"manual",mdxType:"TabItem"},(0,p.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-linux.gz | gzip -d > scala-cli\nchmod +x scala-cli\nsudo mv scala-cli /usr/local/bin/scala-cli\n")),(0,p.kt)("p",null,"Check that it runs fine by running its ",(0,p.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n"))),(0,p.kt)(h.Z,{value:"apt",mdxType:"TabItem"},(0,p.kt)("p",null,"Scala CLI can be installed via ",(0,p.kt)("a",{parentName:"p",href:"https://wiki.debian.org/Apt"},"apt")," packager tool."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s --compressed "https://virtuslab.github.io/scala-cli-packages/KEY.gpg" | sudo apt-key add -\nsudo curl -s --compressed -o /etc/apt/sources.list.d/scala_cli_packages.list "https://virtuslab.github.io/scala-cli-packages/debian/scala_cli_packages.list"\nsudo apt update\nsudo apt install scala-cli\n'))),(0,p.kt)(h.Z,{value:"deb",mdxType:"TabItem"},(0,p.kt)("p",null,"The Debian package can be downloaded at ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-linux.deb"},"this address"),"."),(0,p.kt)("p",null,"Alternatively, you can download it and install it manually with:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fLo scala-cli.deb https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-linux.deb\nsudo dpkg -i scala-cli.deb\n"))),(0,p.kt)(h.Z,{value:"yum",mdxType:"TabItem"},(0,p.kt)("p",null,"Scala CLI can be installed via ",(0,p.kt)("a",{parentName:"p",href:"http://yum.baseurl.org"},"yum")," packager tool."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cat > /etc/yum.repos.d/virtuslab.repo << EOF\n[virtuslab-repo]\nname=VirtusLab Repo\nbaseurl=https://virtuslab.github.io/scala-cli-packages/CentOS/Packages\nenabled=1\ngpgcheck=1\ngpgkey=https://virtuslab.github.io/scala-cli-packages/KEY.gpg\nEOF\nsudo yum repo-pkgs virtuslab-repo list\nsudo yum install scala-cli\n"))),(0,p.kt)(h.Z,{value:"rpm",mdxType:"TabItem"},(0,p.kt)("p",null,"The RPM package can be downloaded at ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-linux.rpm"},"this address"),"."),(0,p.kt)("p",null,"Alternatively, you can download it and install it manually with:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fLo scala-cli.rpm https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-linux.rpm\nsudo rpm -i scala-cli.rpm\n"))),(0,p.kt)(h.Z,{value:"alpine",mdxType:"TabItem"},(0,p.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q -O scala-cli.gz  https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-linux-static.gz && gunzip scala-cli.gz\nchmod +x scala-cli\nmv scala-cli /usr/bin/\n")),(0,p.kt)("p",null,"Check that it runs fine by running its ",(0,p.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n"))),(0,p.kt)(h.Z,{value:"nix",mdxType:"TabItem"},(0,p.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"This method is provided and supported by the community, not the core team of Scala CLI"))),(0,p.kt)("p",null,"Scala CLI can be installed with ",(0,p.kt)("a",{parentName:"p",href:"https://nixos.org"},"Nix")," with"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"nix-env -if https://github.com/NixOS/nixpkgs/archive/refs/heads/master.tar.gz -A scala-cli\n"))))),(0,p.kt)(h.Z,{value:"windows",mdxType:"TabItem"},(0,p.kt)(u.Z,{groupId:"windows",defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Installer",value:"installer"}],mdxType:"Tabs"},(0,p.kt)(h.Z,{value:"manual",mdxType:"TabItem"},(0,p.kt)("p",null,"Note that the Windows manual installation requires ",(0,p.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0"},"Visual C++ redistributable"),"\nto be installed. See below for how to install it."),(0,p.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fLo scala-cli.zip https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-win32.zip\ntar -xf scala-cli.zip\n")),(0,p.kt)("p",null,"Check that it runs fine by running its ",(0,p.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n")),(0,p.kt)("p",null,"If you get an error about ",(0,p.kt)("inlineCode",{parentName:"p"},"MSVCR100.dll")," being missing, you have to install\n",(0,p.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0"},"Visual C++ redistributable"),". A valid version is distributed with the Scala CLI launchers.\nYou can download it ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/vc_redist.x64.exe"},"here"),",\nand install it by double-clicking on it. Once the Visual C++ redistributable runtime is installed,\ncheck that the Scala CLI runs fine by running its ",(0,p.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n")),(0,p.kt)("p",null,"Note that the commands above don't put the ",(0,p.kt)("inlineCode",{parentName:"p"},"scala-cli")," command in the ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),". For that, you can create a directory, move the\nlauncher there, and add the directory to the ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH")," with"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'md "%USERPROFILE%/scala-cli"\nscala-cli add-path "%USERPROFILE%/scala-cli"\nmove scala-cli.exe "%USERPROFILE%/scala-cli"\n'))),(0,p.kt)(h.Z,{value:"installer",mdxType:"TabItem"},(0,p.kt)("p",null,"Download MSI installer with Scala CLI for Windows"),(0,p.kt)(v,{desc:"Scala CLI for Windows",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-win32.msi",width:"190px",mdxType:"DownloadButton"})))),(0,p.kt)(h.Z,{value:"mac",mdxType:"TabItem"},(0,p.kt)(u.Z,{groupId:"mac",defaultValue:"brew",values:[{label:"Manual",value:"manual"},{label:"Installer",value:"installer"},{label:"Brew",value:"brew"},{label:"Nix",value:"nix"}],mdxType:"Tabs"},(0,p.kt)(h.Z,{value:"manual",mdxType:"TabItem"},(0,p.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-apple-darwin.gz | gzip -d > scala-cli\nchmod +x scala-cli\nmv scala-cli /usr/local/bin/scala-cli\n")),(0,p.kt)("p",null,"Check that it runs fine by running its ",(0,p.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n"))),(0,p.kt)(h.Z,{value:"installer",mdxType:"TabItem"},(0,p.kt)("p",null,"Download PKG installer with Scala CLI for MacOS"),(0,p.kt)(v,{desc:"Scala CLI for MacOS",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-apple-darwin.pkg",mdxType:"DownloadButton"}),(0,p.kt)("br",null),(0,p.kt)("br",null),(0,p.kt)("p",null,"Once downloaded, right-click on ",(0,p.kt)("inlineCode",{parentName:"p"},"scala-cli-x86_64-apple-darwin.pkg"),' from Finder, and choose "Open".')),(0,p.kt)(h.Z,{value:"brew",mdxType:"TabItem"},(0,p.kt)("p",null,"Scala CLI can be installed via ",(0,p.kt)("a",{parentName:"p",href:"https://brew.sh"},"homebrew")," with"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"brew install Virtuslab/scala-cli/scala-cli\n"))),(0,p.kt)(h.Z,{value:"nix",mdxType:"TabItem"},(0,p.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"This method is provided and supported by the community, not the core team of Scala CLI"))),(0,p.kt)("p",null,"Scala CLI can be installed with ",(0,p.kt)("a",{parentName:"p",href:"https://nixos.org"},"Nix")," with"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"nix-env -if https://github.com/NixOS/nixpkgs/archive/refs/heads/master.tar.gz -A scala-cli\n")))))))),(0,p.kt)(r.Z,{title:"Standalone launcher",mdxType:"SectionAbout"},(0,p.kt)("div",{className:"margin--lg"}),(0,p.kt)(u.Z,{defaultValue:"windows"==(0,f.l)()?"windows":"macOS/Linux",groupId:"specific-standalone-launcher",values:[{label:"macOS/Linux",value:"macOS/Linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,p.kt)(h.Z,{value:"macOS/Linux",mdxType:"TabItem"}),(0,p.kt)(h.Z,{value:"windows",mdxType:"TabItem"}))),(0,p.kt)("div",{className:"row"},(0,p.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,p.kt)("p",null,"Script to automatically download and cache standalone ",(0,p.kt)("inlineCode",{parentName:"p"},"scala-cli")," launcher."),(0,p.kt)(u.Z,{groupId:"specific-standalone-launcher",defaultValue:"macOS/Linux",values:[{label:"macOS/Linux",value:"macOS/Linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,p.kt)(h.Z,{value:"macOS/Linux",mdxType:"TabItem"},(0,p.kt)(v,{desc:"ScalaCLI launcher for macOs/Linux",href:"https://github.com/VirtusLab/scala-cli/blob/master/scala-cli.sh",width:"250px",mdxType:"DownloadButton"})),(0,p.kt)(h.Z,{value:"windows",mdxType:"TabItem"},(0,p.kt)(v,{desc:"ScalaCLI launcher for Windows",href:"https://github.com/VirtusLab/scala-cli/blob/master/scala-cli.bat",width:"250px",mdxType:"DownloadButton"}))))),(0,p.kt)(r.Z,{title:"Shell completions",mdxType:"SectionAbout"},(0,p.kt)("div",{className:"margin--lg"}),(0,p.kt)(u.Z,{defaultValue:"mac"==(0,f.l)()?"zsh":"bash",groupId:"shell-specific",values:[{label:"Bash",value:"bash"},{label:"zsh",value:"zsh"}],mdxType:"Tabs"},(0,p.kt)(h.Z,{value:"bash",mdxType:"TabItem"}),(0,p.kt)(h.Z,{value:"zsh",mdxType:"TabItem"}))),(0,p.kt)("div",{className:"row"},(0,p.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,p.kt)("p",null,"Try the completions with"),(0,p.kt)(u.Z,{groupId:"shell-specific",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"zsh",value:"zsh"}],mdxType:"Tabs"},(0,p.kt)(h.Z,{value:"bash",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'eval "$(scala-cli install completions --env --shell bash)"\nscala-cli --<TAB>\n'))),(0,p.kt)(h.Z,{value:"zsh",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'eval "$(scala-cli install completions --env --shell zsh)"\nscala-cli --<TAB>\n')))),(0,p.kt)("p",null,"Install them on your system with"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli install completions\n")),(0,p.kt)("p",null,"If any of the ",(0,p.kt)("inlineCode",{parentName:"p"},"scala-cli install completions")," command complained that your shell cannot be determined, specify it\nwith ",(0,p.kt)("inlineCode",{parentName:"p"},"--shell")),(0,p.kt)(u.Z,{groupId:"shell-specific",values:[{label:"Bash",value:"bash"},{label:"zsh",value:"zsh"}],mdxType:"Tabs"},(0,p.kt)(h.Z,{value:"bash",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli install completions --shell bash\n"))),(0,p.kt)(h.Z,{value:"zsh",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli install completions --shell zsh\n")))))),(0,p.kt)("div",{id:"scala-js"}),(0,p.kt)(r.Z,{title:"Scala JS",mdxType:"SectionAbout"}),(0,p.kt)("div",{className:"row"},(0,p.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,p.kt)("p",null,"To run Scala JS applications ",(0,p.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," needs to be installed. Scala CLI at this moment does not manage Node.js however it may change in the future."))),(0,p.kt)("div",{id:"scala-native"}),(0,p.kt)(r.Z,{title:"Scala Native",mdxType:"SectionAbout"}),(0,p.kt)("div",{className:"row"},(0,p.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://llvm.org/docs/GettingStarted.html#requirements"},"Clang")," is required to compile and run Scala Native applications. Using some functionalities known from JDK (like using ",(0,p.kt)("inlineCode",{parentName:"p"},"java.util.zip")," package) require additional packages to be installed."),(0,p.kt)("p",null,"Scala Native page contains detailed ",(0,p.kt)("a",{parentName:"p",href:"https://scala-native.readthedocs.io/en/latest/user/setup.html#installing-clang-and-runtime-dependencies"},"installation guide"),"."))))}w.isMDXComponent=!0;var N=function(e){(0,n.Z)().siteConfig;return l.createElement(i.Z,{title:"Install Scala CLI",description:"How to install Scala CLI"},l.createElement("div",{className:"container content"},l.createElement(s.Z,{className:"section-install-cli"},l.createElement("div",{className:"row"},l.createElement(c.Z,{title:"Quick start",colsize:"4",promptsign:!0}),l.createElement("div",{className:"col col--8"},l.createElement(o.Z,null)))),l.createElement(s.Z,{className:"section-about advanced-install"},l.createElement(w,null))))}}}]);