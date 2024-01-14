(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>h});var o=n(81),r=n.n(o),i=n(645),a=n.n(i),c=n(667),s=n.n(c),l=new URL(n(442),n.b),d=new URL(n(477),n.b),u=a()(r()),p=s()(l),f=s()(d);u.push([t.id,`@font-face {\n    font-family: 'robotoBold';\n    src: url(${p}) format('truetype'), \n        url(${f}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n\n\n\n\n\n\n\nbody {\n    background-color: white;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.navbar { \n    display: flex;\n    justify-content: space-evenly;\n    border-bottom: 2.3px solid black;\n    align-items: center;\n}\n\n.navbar button {\n        align-items: center;\n        background-color: #fff;\n        border: 2px solid #000;\n        box-sizing: border-box;\n        color: #000;\n        cursor: pointer;\n        display: inline-flex;\n        fill: #000;\n        font-size: 16px;\n        font-weight: 600;\n        height: 48px;\n        justify-content: center;\n        letter-spacing: -.8px;\n        line-height: 24px;\n        min-width: 140px;\n        outline: 0;\n        padding: 0 17px;\n        text-align: center;\n        text-decoration: none;\n        transition: all .3s;\n        user-select: none;\n        -webkit-user-select: none;\n        touch-action: manipulation;\n}\n\nbutton:focus  {\n    color: #171e29;\n  }\n  \n    button:hover {\n      border-color: #06f;\n      color: #06f;\n      fill: #06f;\n    }\n    \n    button:active {\n      border-color: #06f;\n      color: #06f;\n      fill: #06f;\n    }\n  \n  .submitBtn:hover {\n    border-color: #06f;\n    color: #06f;\n    fill: #06f;\n  }\n  \n  .submitBtn:active {\n    border-color: #06f;\n    color: #06f;\n    fill: #06f;\n  }\n  \n  \n  .submitBtn:focus  {\n      color: #171e29;\n    }\n    \n  \n  @media (min-width: 768px) {\n     button {\n      min-width: 170px;\n    }\n     button {\n      min-width: 170px;\n    }\n  }\n\n.buttonContainer {\n    display: flex;\n    gap: 10px;\n}\n\n\n.sideBarContainer {\n  /* yeah this is annoying and gay */\n  display: flex;\n  flex-direction: column;\n  width: 10%;\n  flex-grow: 1;\n  height: 90vh;\n  justify-content: space-around;\n  \n}\n\n.projectContainer {\n  \n}`,""]);const h=u},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=o(t,r),l=0;l<i.length;l++){var d=n(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},442:(t,e,n)=>{t.exports=n.p+"f80816a5455d171f948d.ttf"},477:(t,e,n)=>{t.exports=n.p+"87d61cea6fe1d235d4a8.ttf"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),s=n.n(c),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),h={};function m(t,e){const n=t[e].gettoDos(),o=document.createElement("div");let r;for(let t=0;t<n.length;t++){r=n[t].getInfo();const e=document.createElement("div"),i=document.createElement("p");i.textContent=r[0];const a=document.createElement("p");a.textContent=r[2];const c=document.createElement("p");c.textContent=r[3],e.style.backgroundColor="#"+Math.floor(16777215*Math.random()).toString(16),e.classList.add("toDoContainer"),o.classList.add("projectContainer"),e.append(i,a,c),o.append(e),document.body.append(o)}}h.styleTagTransform=p(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;class v{constructor(t,e,n,o=" "){this.title=t,this.description=o,this.dueDate=e,this.priority=n,this.complete="incomplete"}getInfo(){return[this.title,this.description,this.dueDate,this.priority,this.complete]}changetoComplete(){return this.complete="complete"}changetoinComplete(){return this.complete="incomplete"}changePriority(t){return this.priotity=t}changeTitle(t){return this.title=t}changeDescription(t){return this.description=t}changedueDate(t){return this.dueDate=t}}class y{constructor(t){this.title=t,this.array=[]}addNewtoDo(t,e,n,o){const r=new v(t,e,n,o);this.array.push(r)}deletetoDo(t){return this.array.splice(t,1)}newProjectPrint(){console.log(this.title),console.log(this.array)}gettoDos(){return this.array}}function b(t,e){const n=new y(t);e.push(n)}let g=[];!function(){const t=document.createElement("div"),e=document.createElement("h1"),n=document.createElement("button"),o=document.createElement("button"),r=document.createElement("div");t.classList.add("navbar"),e.classList.add("title"),n.classList.add("newtoDoBTN"),o.classList.add("newProjectBTN"),r.classList.add("buttonContainer"),e.textContent="toDo List",n.textContent="New To do",o.textContent="New Project",r.append(n,o),t.append(e,r),document.body.append(t)}(),b("home",g),b("Today",g),b("A project",g),function(t){const e=document.createElement("div");e.classList.add("sideBarContainer");for(let n=0;n<t.length;n++){const o=document.createElement("button");o.textContent=t[n].title,o.classList.add("sideBarProject"),o.onclick=function(){m(t,n)},e.append(o)}document.body.append(e)}(g),g[0].addNewtoDo("title","dueDate","priority","Description"),g[0].addNewtoDo("title2","dueDate2","priority2","Description2"),g[0].addNewtoDo("title3","dueDate3","priority3","Description3")})()})();