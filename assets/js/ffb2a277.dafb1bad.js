"use strict";(self.webpackChunkarpit_blog=self.webpackChunkarpit_blog||[]).push([[617],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8264:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={},c=void 0,l={unversionedId:"DSA/Graphs",id:"DSA/Graphs",title:"Graphs",description:"A graph is a data structure that consists of the following two components:",source:"@site/docs/DSA/5. Graphs.md",sourceDirName:"DSA",slug:"/DSA/Graphs",permalink:"/docs/DSA/Graphs",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Trees",permalink:"/docs/DSA/Trees"},next:{title:"Vulnerabilities",permalink:"/docs/Security"}},p={},d=[],u={toc:d};function h(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A graph is a data structure that consists of the following two components: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A finite set of vertices also called as nodes. "),(0,i.kt)("li",{parentName:"ol"},"A finite set of ordered pair of the form (u, v) called as edge.")),(0,i.kt)("p",null,"A binary tree is a graph - limitation it can point to only 2 nodes"),(0,i.kt)("p",null,"Linked List are trees and trees are graphs , meaning linked list is also a graph"),(0,i.kt)("p",null,"Graphs are used to represent many real-life applications: Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook. For example, in Facebook, each person is represented with a vertex(or node)."),(0,i.kt)("p",null,"The following two are the most commonly used representations of a graph. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Adjacency Matrix\n",(0,i.kt)("img",{loading:"lazy",alt:"adj matrix",src:n(6843).Z,width:"695",height:"291"})),(0,i.kt)("h4",{parentName:"li",id:"storing-things-in-adjacency-matrix-is-not-very-efficient-due-to-huge-number-of-zeros-to-be-stored-when-it-goes-large-hence-lets-see-adj-list"},"Storing things in Adjacency matrix is ",(0,i.kt)("em",{parentName:"h4"},"not")," very efficient due to huge number of zeros to be stored when it goes large, hence lets see Adj list:")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Adjacency List\n",(0,i.kt)("img",{loading:"lazy",alt:"adj list",src:n(6555).Z,width:"692",height:"331"})))),(0,i.kt)("p",null,"Let's get to code it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'class Graph {\n    constructor() {\n        this.adjacencyList = {}\n    }\n\n    addVertex(vertex) {\n        if(!this.adjacencyList[vertex]) {\n            this.adjacencyList[vertex] = []\n            return true\n        }\n        return false\n    }\n\n    addEdge(vertex1, vertex2) {\n        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {\n            this.adjacencyList[vertex1].push(vertex2)\n            this.adjacencyList[vertex2].push(vertex1)\n            return true\n        }\n        return false\n    }\n\n    removeEdge(vertex1, vertex2) {\n        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {\n            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]\n                .filter(v => v !== vertex2)\n            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]\n                .filter(v => v !== vertex1)\n            return true\n        }\n        return false\n    }\n\n    removeVertex(vertex) {\n        if (!this.adjacencyList[vertex]) return undefined\n        while(this.adjacencyList[vertex].length) {\n            let temp = this.adjacencyList[vertex].pop()\n            this.removeEdge(vertex, temp)\n        }  \n        delete this.adjacencyList[vertex] \n        return this\n    }\n}\n\n\nlet myGraph = new Graph()\n\nmyGraph.addVertex("A")\nmyGraph.addVertex("B")\nmyGraph.addVertex("C")\nmyGraph.addVertex("D")\nmyGraph.addEdge("A", "B")\nmyGraph.addEdge("A", "C")\nmyGraph.addEdge("A", "D")\nmyGraph.addEdge("B", "D")\nmyGraph.addEdge("C", "D")\n\n')))}h.isMDXComponent=!0},6555:function(e,t,n){t.Z=n.p+"assets/images/adjacency-list-600ed0d7c0396b1108779c8f865897ec.png"},6843:function(e,t,n){t.Z=n.p+"assets/images/adjacency-matrix-8613763678345b936b7a24fe305e2f87.png"}}]);