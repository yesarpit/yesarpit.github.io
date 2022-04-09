"use strict";(self.webpackChunkarpit_blog=self.webpackChunkarpit_blog||[]).push([[881],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1644:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),c=["components"],a={},s="Vulnerabilities",l={unversionedId:"Security",id:"Security",title:"Vulnerabilities",description:"Cross Site Scritpting",source:"@site/docs/Security.md",sourceDirName:".",slug:"/Security",permalink:"/docs/Security",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced JS",permalink:"/docs/JS Adv/Advanced JS"}},u={},p=[{value:"It Allows attacker to introduce malicious script into webpages.",id:"it-allows-attacker-to-introduce-malicious-script-into-webpages",level:4},{value:"Types of XSS:",id:"types-of-xss",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vulnerabilities"},"Vulnerabilities"),(0,o.kt)("p",null,"##Cross Site Scritpting"),(0,o.kt)("h4",{id:"it-allows-attacker-to-introduce-malicious-script-into-webpages"},"It Allows attacker to introduce malicious script into webpages."),(0,o.kt)("h3",{id:"types-of-xss"},"Types of XSS:"),(0,o.kt)("p",null,"1) Stored XSS",(0,o.kt)("br",{parentName:"p"}),"\n","2) Reflected XSS\n3) Dom based XSS"),(0,o.kt)("p",null,"1) Stored XSS: This is usually a ",(0,o.kt)("script",null," abc ")," written in form, so that when the form is submitted, this malicious script is triggered/stored in db - its called as stored becacuse malicious script is stored by web application and later presented to unsuspecting victim"),(0,o.kt)("p",null,"2) Reflected XSS: (also called a non-persistent XSS attack)\nattacker can make user click on a link which takes to search engine with the malicious script appended in url. result of which user will get ticked to believe that content is coming from serch engine and hence this is reflected xss."),(0,o.kt)("p",null,"[url=https://ibb.co/SJPYyCX][img]",(0,o.kt)("a",{parentName:"p",href:"https://i.ibb.co/0Qc42bj/reflected-cross-site-scripting.jpg%5B/img%5D%5B/url%5D"},"https://i.ibb.co/0Qc42bj/reflected-cross-site-scripting.jpg[/img][/url]")),(0,o.kt)("p",null,"3) DOM Based XSS:\nIn both the above types backend in impacted, however in below server is not reached and attack happens in the browser , server never knows about it.\nModern framework doesnt trigger a page relaod hence this attack make use of it and insert malicious content into dom."))}f.isMDXComponent=!0}}]);