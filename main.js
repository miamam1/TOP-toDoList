(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(81),r=n.n(o),i=n(645),a=n.n(i),c=n(667),s=n.n(c),l=new URL(n(442),n.b),d=new URL(n(477),n.b),u=a()(r()),p=s()(l),m=s()(d);u.push([e.id,`@font-face {\n    font-family: 'robotoBold';\n    src: url(${p}) format('truetype'), \n        url(${m}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n\n\n\n\n\n\n\nbody {\n    background-color: white;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    margin: 0;\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n.navbar { \n    display: flex;\n    justify-content: space-evenly;\n    border-bottom: 2.3px solid black;\n    align-items: center;\n}\n\n.navbar button {\n        align-items: center;\n        background-color: #fff;\n        border: 2px solid #000;\n        box-sizing: border-box;\n        color: #000;\n        cursor: pointer;\n        display: inline-flex;\n        fill: #000;\n        font-size: 16px;\n        font-weight: 600;\n        height: 48px;\n        justify-content: center;\n        letter-spacing: -.8px;\n        line-height: 24px;\n        min-width: 140px;\n        outline: 0;\n        padding: 0 17px;\n        text-align: center;\n        text-decoration: none;\n        transition: all .3s;\n        user-select: none;\n        -webkit-user-select: none;\n        touch-action: manipulation;\n}\n\nbutton:focus  {\n    color: #171e29;\n  }\n  \n    button:hover {\n      border-color: #06f;\n      color: #06f;\n      fill: #06f;\n    }\n    \n    button:active {\n      border-color: #06f;\n      color: #06f;\n      fill: #06f;\n    }\n  \n  .submitBtn:hover {\n    border-color: #06f;\n    color: #06f;\n    fill: #06f;\n  }\n  \n  .submitBtn:active {\n    border-color: #06f;\n    color: #06f;\n    fill: #06f;\n  }\n  \n  \n  .submitBtn:focus  {\n      color: #171e29;\n    }\n    \n  \n  @media (min-width: 768px) {\n     button {\n      min-width: 170px;\n    }\n     button {\n      min-width: 170px;\n    }\n  }\n\n.buttonContainer {\n    display: flex;\n    gap: 10px;\n}\n\n\n.sideBarContainer {\n  /* yeah this is annoying and gay */\n  display: flex;\n  flex-direction: column;\n  width: 10%;\n  height: 90vh;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.sideBarProject {\n  background-color: white;\n  background-color: none;\n  border: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 1rem;\n  height: 100px;\n  \n}\n\n.active  {\n  border-color: #06f\n}\n\n\n#contentContainer {\n  display: flex;\n  gap: 250px;\n  \n}\n.projectContainer {\n  margin: 85px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.toDoContainer {\n  display: flex;\n  width: 1000px;\n  justify-content: space-between;\n}\n\n.highPriority, .mediumPriority, .lowPriority {\n  width: 10px;\n}\n\n.highPriority {\n  background-color: red;\n  \n}\n\n.mediumPriority {\n  background-color: orange;\n}\n\n.lowPriority {\n  background-color: green;\n}\n\n.detailsContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  \n}`,""]);const f=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},442:(e,t,n)=>{e.exports=n.p+"f80816a5455d171f948d.ttf"},477:(e,t,n)=>{e.exports=n.p+"87d61cea6fe1d235d4a8.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),s=n.n(c),l=n(216),d=n.n(l),u=n(589),p=n.n(u),m=n(426),f={};function h(e){const t=document.getElementById("contentContainer"),n=document.createElement("div");n.classList.add("sideBarContainer");for(let t=0;t<e.length;t++){const o=document.createElement("button");o.textContent=e[t].title,o.classList.add("sideBarProject"),o.onclick=function(){y(e,t);const n=document.getElementsByClassName("active");if(console.log(n.length),0==n.length)o.classList.add("active");else for(let e=0;e<n.length;e++)n[0].classList.remove("active"),o.classList.add("active")},n.append(o)}t.append(n)}function y(e,t){const n=document.getElementsByClassName("projectContainer");for(let e=0;e<n.length;e++)n[0].parentNode.removeChild(n[0]);const o=document.getElementById("contentContainer"),r=e[t].gettoDos();if(0==r.length&&"home"==e[t].title){const e=document.createElement("div");return e.classList.add("projectContainer"),e.textContent="I'm empty :( Fill me up with some to dos!",void o.append(e)}if(0==r.length){const n=document.createElement("div");n.classList.add("projectContainer"),n.textContent="I'm empty. Delete me. Or add stuff to me maybe :)";const r=document.createElement("button");return r.textContent="Delete",r.onclick=()=>{e.splice(t,1),document.getElementsByClassName("sideBarContainer")[0].remove(),n.remove(),h(e)},n.append(r),void o.append(n)}const i=document.createElement("div");let a;for(let n=0;n<r.length;n++){a=r[n].getInfo();const c=document.createElement("div"),s=document.createElement("p");s.textContent=a[0];const l=document.createElement("p");l.textContent=a[2];const d=document.createElement("div");"high"==a[3]?d.classList.add("highPriority"):"medium"==a[3]?d.classList.add("mediumPriority"):"low"==a[3]&&d.classList.add("lowPriority");const u=document.createElement("button");u.textContent="Details",u.onclick=()=>{a=r[n].getInfo();const e=document.createElement("p");e.textContent=a[0];const t=document.createElement("p");t.textContent=a[2];const i=document.createElement("p");i.textContent=a[3];const c=document.createElement("div"),s=document.createElement("p");s.textContent=a[1];const l=document.createElement("p");l.textContent=a[4],c.classList.add("detailsContainer");const d=document.createElement("button");d.textContent="Exit",d.onclick=()=>{c.remove()},c.append(e,t,i,s,l,d),o.append(c)};const p=document.createElement("button");p.textContent="delete",p.onclick=()=>{e[t].deletetoDo(n),c.remove(),i.remove(),y(e,t)},c.style.backgroundColor="#"+Math.floor(16777215*Math.random()).toString(16),c.classList.add("toDoContainer"),i.classList.add("projectContainer"),c.append(d,s,l,p,u),i.append(c),o.append(i)}}f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;class v{constructor(e,t,n,o=" "){this.title=e,this.description=o,this.dueDate=t,this.priority=n,this.complete="incomplete"}getInfo(){return[this.title,this.description,this.dueDate,this.priority,this.complete]}changetoComplete(){return this.complete="complete"}changetoinComplete(){return this.complete="incomplete"}changePriority(e){return this.priotity=e}changeTitle(e){return this.title=e}changeDescription(e){return this.description=e}changedueDate(e){return this.dueDate=e}}class g{constructor(e){this.title=e,this.array=[]}addNewtoDo(e,t,n,o){const r=new v(e,t,n,o);this.array.push(r)}deletetoDo(e){return this.array.splice(e,1)}newProjectPrint(){console.log(this.title),console.log(this.array)}gettoDos(){return this.array}}function b(e,t){const n=new g(e);t.push(n)}let x=[];!function(e){const t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("button");o.onclick=()=>{i.style.display="block"};const r=document.createElement("button"),i=document.createElement("form"),a=document.createElement("input");a.type="text",a.name="title",a.placeholder="Title...";const c=document.createElement("input");c.type="text",c.name="description",c.placeholder="Description...";const s=document.createElement("input");s.type="date",s.name="inputDate";const l=document.createElement("input");l.type="radio",l.value="low",l.name="priorityINPUT";const d=document.createElement("input");d.type="radio",d.value="medium",d.name="priorityINPUT";const u=document.createElement("input");u.type="radio",u.value="high",u.name="priorityINPUT";const p=document.createElement("input");p.type="button",p.value="Submit";const m=document.getElementsByClassName("sideBarProject");p.onclick=t=>{let n;for(let e=0;e<m.length;e++)if(m[e].classList.contains("active")){n=e;break}const o=document.querySelector('input[name="priorityINPUT"]:checked').value;e[n].addNewtoDo(a.value,s.value,o,c.value),console.log(e[n]),i.style.display="none",a.value="",c.value="",s.value="",y(e,n),t.preventDefault()};const f=document.createElement("button");f.textContent="Close",f.onclick=e=>{i.style.display="none",e.preventDefault()},i.append(a,c,s,l,d,u,p,f),document.body.append(i),i.style.display="none";const h=document.createElement("div");t.classList.add("navbar"),n.classList.add("title"),o.classList.add("newtoDoBTN"),r.classList.add("newProjectBTN"),h.classList.add("buttonContainer"),n.textContent="toDo List",o.textContent="New To do",r.textContent="New Project",h.append(o,r),t.append(n,h),document.body.append(t)}(x),b("home",x),b("Today",x),b("A project",x),h(x),x[1].addNewtoDo("titleB","dueDateB","high","DescriptionB"),x[1].addNewtoDo("titleB2","dueDateB2","medium","DescriptionB2"),x[1].addNewtoDo("titleB3","dueDateB3","low","DescriptionB3"),document.getElementsByClassName("sideBarProject")[0].click()})()})();