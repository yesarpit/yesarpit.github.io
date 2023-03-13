"use strict";(self.webpackChunkarpit_blog=self.webpackChunkarpit_blog||[]).push([[6423],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2489:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),l=["components"],i={},s=void 0,u={unversionedId:"DSA/Trees",id:"DSA/Trees",title:"Trees",description:"So what is a tree?",source:"@site/docs/DSA/4. Trees.md",sourceDirName:"DSA",slug:"/DSA/Trees",permalink:"/docs/DSA/Trees",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stacks & Queues",permalink:"/docs/DSA/Stacks & Queues"},next:{title:"Graphs",permalink:"/docs/DSA/Graphs"}},p={},c=[{value:"So what is a tree?",id:"so-what-is-a-tree",level:3},{value:"Full Tree",id:"full-tree",level:3},{value:"Perfect Tree",id:"perfect-tree",level:3},{value:"Complete tree",id:"complete-tree",level:3},{value:"Degenerate Binary Tree",id:"degenerate-binary-tree",level:3},{value:"Balance Binary Tree",id:"balance-binary-tree",level:3},{value:"BST - Binary Search Tree",id:"bst---binary-search-tree",level:2}],f={toc:c};function d(e){var n=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n                                               \n                  v .   ._, |_  .,\n            `-._\\/  .  \\ /    |/_\n                   \\\\  _\\, y | \\//\n            _\\_.___\\\\, \\\\/ -.\\||\n               `7-,--.`._||  / / ,\n             /'     `-. `./ / |/_.'\n                        |    |//\n                        |_    /\n                        |-   |\n                        |   =|\n                        |    |\n    -------------------/ ,  . \\--------._\n\n")),(0,o.kt)("h3",{id:"so-what-is-a-tree"},"So what is a tree?"),(0,o.kt)("p",null,"A tree a linked list that doesn't fork."),(0,o.kt)("p",null,"A tree can be binary :  only left and right"),(0,o.kt)("p",null,"Can be ternary or 10's nary"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Binary Tree Types",src:t(941).Z,width:"410",height:"123"})),(0,o.kt)("h3",{id:"full-tree"},"Full Tree"),(0,o.kt)("p",null,"A tree with nodes has either 0 or 2 items"),(0,o.kt)("h3",{id:"perfect-tree"},"Perfect Tree"),(0,o.kt)("p",null,"A tree with all nodes having 2 items"),(0,o.kt)("h3",{id:"complete-tree"},"Complete tree"),(0,o.kt)("p",null,"All the levels of the tree are completely filled, the last level of the binary tree may or may not be completely filled, but in the last level of the node, each node should be at the leftmost position"),(0,o.kt)("h3",{id:"degenerate-binary-tree"},"Degenerate Binary Tree"),(0,o.kt)("p",null,"Each node has only one child. It can be left children or right children"),(0,o.kt)("h3",{id:"balance-binary-tree"},"Balance Binary Tree"),(0,o.kt)("p",null,"Here the height of binary is log2 of the total number of nodes in that binary tree."),(0,o.kt)("p",null,"Let the h is the height of the tree and n is the number of nodes of the tree. Then h = log(n)."),(0,o.kt)("h2",{id:"bst---binary-search-tree"},"BST - Binary Search Tree"),(0,o.kt)("p",null,"Binary search tree is different from tree, all the nodes lesser than parent node comes on left and greater than comes on right. "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Linked List"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Binary Tree"),(0,o.kt)("th",{parentName:"tr",align:null},"Operation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"o(1)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"o(Log n)"),(0,o.kt)("td",{parentName:"tr",align:null},"Insert")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"o(n)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"o(Log n)"),(0,o.kt)("td",{parentName:"tr",align:null},"Lookup")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"o(n)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"o(Log n)"),(0,o.kt)("td",{parentName:"tr",align:null},"Remove")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Javascript"},"class Node {\n    constructor(value) {\n        this.value = value\n        this.left = null\n        this.right = null\n    }\n}\n\nclass BST {\n    constructor() {\n        this.root = null\n    }\n\n    insert(value) {\n        const newNode = new Node(value)\n        if (this.root === null) {\n            this.root = newNode\n            return this\n        }\n        let temp = this.root\n        while (true) {\n            if (newNode.value === temp.value)\n                return undefined\n            if (newNode.value < temp.value) {\n                if (temp.left === null) {\n                    temp.left = newNode\n                    return this\n                }\n                temp = temp.left\n            } else {\n                if (temp.right === null) {\n                    temp.right = newNode\n                    return this\n                }\n                temp = temp.right\n            }\n        }\n    }\n\n    contains(value) {\n        if (this.root === null)\n            return false\n        let temp = this.root\n        while (temp) {\n            if (value < temp.value) {\n                temp = temp.left\n            } else if (value > temp.value) {\n                temp = temp.right\n            } else {\n                return true\n            }\n        }\n        return false\n    }\n\n    min() {\n        if (this.root === null)\n            return false\n        let min = this.root;\n\n        while (min.left) {\n            min = min.left\n        }\n\n        return min;\n    }\n\n    BFS() {\n        let queue = [];\n        let result = [];\n\n        queue.push(this.root)\n        while (queue.length) {\n            var node = queue.shift();\n            result.push(node.value)\n            if (node.left)\n                queue.push(node.left)\n            if (node.right)\n                queue.push(node.right)\n        }\n\n        return result;\n\n    }\n\n\n    DFSInOrder(){\n\n        let results = [];\n        function traverse(node) {\n            if(node.left) traverse(node.left);\n            results.push(node.value)\n            if(node.right) traverse(node.right);\n        }\n        traverse(this.root)\n        return results;\n    }\n\n    //only difference is sequence being pushed\n\n     DFSpostOrder(){\n\n        let results = [];\n        function traverse(node) {\n            if(node.left) traverse(node.left);\n            if(node.right) traverse(node.right);\n            results.push(node.value)\n        }\n        traverse(this.root)\n        return results;\n    }\n\n    //only difference is sequence being pushed\n\n     DFSpreOrder(){\n\n        let results = [];\n        function traverse(node) {\n             results.push(node.value)\n            if(node.left) traverse(node.left);\n            if(node.right) traverse(node.right);\n           \n        }\n        traverse(this.root)\n        return results;\n    }\n\n    \n}\n\nlet myTree = new BST();\nmyTree.insert(47);\nmyTree.insert(21);\nmyTree.insert(76);\nmyTree.insert(18);\nmyTree.insert(52);\nmyTree.insert(82);\nmyTree.BFS();\n\n//(6)\xa0[47, 21, 76, 18, 52, 82]\nmyTree.DFSpreOrder();\n//[47, 21, 18, 76, 52, 82]\nmyTree.DFSInOrder();\n//\xa0[18, 21, 47, 52, 76, 82]\nmyTree.DFSpostOrder();\n//[18, 21, 52, 82, 76, 47]\n\n\n\n")))}d.isMDXComponent=!0},941:function(e,n){n.Z="data:image/png;base64,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"}}]);