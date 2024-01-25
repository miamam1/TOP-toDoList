(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(81),r=n.n(o),i=n(645),a=n.n(i),c=n(667),l=n.n(c),s=new URL(n(442),n.b),d=new URL(n(477),n.b),u=a()(r()),p=l()(s),m=l()(d);u.push([e.id,`@font-face {\n    font-family: 'robotoBold';\n    src: url(${p}) format('truetype'), \n        url(${m}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n\n\n\n\n\n\n\nbody {\n    background-color: white;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    margin: 0;\n    display: flex;\n    flex-direction: column-reverse;\n}\n\nhtml, body{\n  height: 100%;\n}\n\n.navbar { \n    display: flex;\n    justify-content: space-evenly;\n    border-bottom: 2.3px solid black;\n    align-items: center;\n    \n}\n\n.navbar button {\n        align-items: center;\n        background-color: #fff;\n        border: 2px solid #000;\n        box-sizing: border-box;\n        color: #000;\n        cursor: pointer;\n        display: inline-flex;\n        fill: #000;\n        font-size: 16px;\n        font-weight: 600;\n        height: 48px;\n        justify-content: center;\n        letter-spacing: -.8px;\n        line-height: 24px;\n        min-width: 140px;\n        outline: 0;\n        padding: 0 17px;\n        text-align: center;\n        text-decoration: none;\n        transition: all .3s;\n        user-select: none;\n        -webkit-user-select: none;\n        touch-action: manipulation;\n}\n\nbutton:focus  {\n    color: #171e29;\n  }\n  \n    button:hover {\n      border-color: #06f;\n      color: #06f;\n      fill: #06f;\n    }\n    \n    button:active {\n      border-color: #06f;\n      color: #06f;\n      fill: #06f;\n    }\n  \n  .submitBtn:hover {\n    border-color: #06f;\n    color: #06f;\n    fill: #06f;\n  }\n  \n  .submitBtn:active {\n    border-color: #06f;\n    color: #06f;\n    fill: #06f;\n  }\n  \n  \n  .submitBtn:focus  {\n      color: #171e29;\n    }\n    \n  \n  @media (min-width: 768px) {\n     button {\n      min-width: 170px;\n    }\n     button {\n      min-width: 170px;\n    }\n  }\n\n.buttonContainer {\n    display: flex;\n    gap: 10px;\n}\n\n\n.sideBarContainer {\n  display: flex;\n  flex-direction: column;\n  border: 2.3px solid black;\n  align-items: center;\n  justify-content: space-around;\n  flex-basis: 10%;\n  margin: 20px;\n}\n\n.itemsContainer {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 20px;\n \n}\n.projectText {\n   border-bottom: 2px dotted black;\n}\n\n.sideBarProject {\n  background-color: white;\n  border: none;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 1rem;\n  \n  \n  \n}\n\n.active  {\n  border-bottom: 2px dotted #06f;\n}\n\n\n#contentContainer {\n  display: flex;\n  flex: 1;\n  \n}\n.projectContainer {\n  margin-top: 50px;\n  margin-right: 200px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  gap: 10px;\n}\n\n\n.toDoContainer {\n  border: 2px solid black;\n  display: flex;\n  gap: 10px;\n  min-width: 60%;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n\n.flexContainer {\n  display: flex;\n  gap: 20px;\n}\n\n.flexContainer2 {\n  display: flex;\n  gap: 30px;\n}\n\n.highPriority, .mediumPriority, .lowPriority {\n  width: 10px;\n  \n}\n\n.highPriority {\n  background-color: red;\n  \n}\n.mediumPriority {\n  background-color: orange;\n}\n.lowPriority {\n  background-color: green;\n}\n\n\n .deleteBTN, .editBTN {\n  border: none;\n  cursor: pointer;\n  width: 40px;\n \n}\n\n\n.completeBTN, .detailsBTN {\n  border: 2.3px solid black;\n  background-color: white;\n  min-width: 50px;\n  cursor: pointer;\n  \n  \n}\n\n.detailsBTN {\n  min-width: 100px;\n}\n\n\n\n.deleteBTN:hover {\n  background-color: red;\n  \n}\n\n.editBTN:hover {\n  background-color:#06f;\n}\n\n\n\n\n\n\n.incomplete {\n  background: none;\n}\n\n.complete {\n  background-color: black;\n}\n\n\n\n\n.detailsContainer {\n  position: absolute;\n  background-color: white;\n  border: 2.3px solid black;\n  padding: 20px;\n  top: 33%;\n  left: 27%;\n  margin: -25px 0 0 -25px;\n  box-shadow: 1px -1px 48px 8px rgba(0,0,0,0.75);\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n\n}\n\n.detailsContainer button {\n  background-color: white;\n  border: 2.3 solid black;\n  align-self: flex-start;\n}\n`,""]);const f=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],s=o.base?l[0]+o.base:l[0],d=i[s]||0,u="".concat(s," ").concat(d);i[s]=d+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var l=o(e,r),s=0;s<i.length;s++){var d=n(i[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},442:(e,t,n)=>{e.exports=n.p+"f80816a5455d171f948d.ttf"},477:(e,t,n)=>{e.exports=n.p+"87d61cea6fe1d235d4a8.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var o={};(()=>{n.d(o,{o9:()=>C});var e=n(379),t=n.n(e),r=n(795),i=n.n(r),a=n(569),c=n.n(a),l=n(565),s=n.n(l),d=n(216),u=n.n(d),p=n(589),m=n.n(p),f=n(426),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const y=n.p+"de0bb67a90c508546224.svg",g=n.p+"ae589010d8b937c5a909.svg";function v(e){const t=document.getElementsByClassName("sideBarContainer");for(let e=0;e<t.length;e++)t[0].parentNode.removeChild(t[0]);const n=document.getElementById("contentContainer"),o=document.createElement("div"),r=document.createElement("div"),i=document.createElement("h1");i.textContent="Projects",r.append(i),i.classList.add("projectText"),o.classList.add("itemsContainer"),r.classList.add("sideBarContainer");for(let t=0;t<e.length;t++){const n=document.createElement("button");n.textContent=e[t].title,n.classList.add("sideBarProject"),n.onclick=function(){b(e,t)},o.append(n)}r.append(o),n.append(r)}function b(e,t){const n=document.getElementsByClassName("sideBarProject");for(let e=0;e<n.length;e++)n[e].classList.remove("active");n[t].classList.add("active");const o=document.getElementsByClassName("projectContainer");for(let e=0;e<o.length;e++)o[0].parentNode.removeChild(o[0]);const r=document.getElementById("contentContainer"),i=e[t].gettoDos();if(0==i.length&&"home"==e[t].title||0==i.length&&"Today"==e[t].title){const e=document.createElement("div");return e.classList.add("projectContainer"),e.textContent="I'm empty :( Fill me up with some to dos!",void r.append(e)}if(0==i.length){const n=document.createElement("div");n.classList.add("projectContainer"),n.textContent="I'm empty. Delete me. Or add stuff to me maybe :)";const o=document.createElement("button");return o.textContent="Delete",o.style.width="50px",o.style.height="50px",o.style.cursor="pointer",o.style.backgroundColor="white",o.style.border="2.3px solid black",o.onclick=()=>{e.splice(t,1),document.getElementsByClassName("sideBarContainer")[0].remove(),n.remove(),v(e),b(e,0)},n.append(o),void r.append(n)}const a=document.createElement("div");let c;for(let n=0;n<i.length;n++){c=i[n].getInfo();const o=document.createElement("div"),l=document.createElement("p");l.textContent=c[0];const s=document.createElement("p");s.textContent=c[2];const d=document.createElement("div");"high"==c[3]?d.classList.add("highPriority"):"medium"==c[3]?d.classList.add("mediumPriority"):"low"==c[3]&&d.classList.add("lowPriority");const u=document.createElement("button");u.textContent="Details",u.classList.add("detailsBTN"),u.onclick=()=>{c=i[n].getInfo();const e=document.createElement("p");e.textContent="Title: "+c[0];const t=document.createElement("p");t.textContent="Due date: "+c[2];const o=document.createElement("p");o.textContent="Priority: "+c[3];const a=document.createElement("div"),l=document.createElement("p");l.textContent="Description: "+c[1];const s=document.createElement("p");s.textContent="Status: "+c[4],a.classList.add("detailsContainer"),r.style.filter="blur(4px)",r.style.pointerEvents="none",r.style.userSelect="none";const d=document.getElementsByClassName("navbar");d[0].style.filter="blur(4px)",d[0].style.pointerEvents="none",d[0].style.userSelect="none";const u=document.createElement("button");u.textContent="Exit",u.onclick=()=>{r.style.filter="blur(0)",r.style.pointerEvents="auto",r.style.userSelect="auto",d[0].style.filter="blur(0)",d[0].style.pointerEvents="auto",d[0].style.userSelect="auto",a.remove()},a.append(e,t,o,s,l,u),document.body.append(a)};const p=document.createElement("img");p.src=y,p.classList.add("deleteBTN"),p.onclick=()=>{e[t].deletetoDo(n),o.remove(),a.remove(),b(e,t)};const m=document.createElement("img");m.src=g,m.classList.add("editBTN"),m.onclick=()=>{const o=e[t].gettoDos(),r=o[n],i=o[n].getInfo(),a=document.createElement("form"),c=document.createElement("input");c.type="text",c.name="title",c.placeholder="Title...",c.value=i[0];const l=document.createElement("input");l.type="text",l.name="description",l.value=i[1],l.placeholder="Description...";const s=document.createElement("input");s.type="date",s.value=i[2],s.name="inputDate";const d=document.createElement("input");d.type="radio",d.value="low",d.name="priorityINPUT2";const u=document.createElement("input");u.type="radio",u.value="medium",u.name="priorityINPUT2";const p=document.createElement("input");p.type="radio",p.value="high",p.name="priorityINPUT2","low"===i[3]?d.defaultChecked=!0:"medium"===i[3]?u.defaultChecked=!0:"high"===i[3]&&(p.defaultChecked=!0);const m=document.createElement("input");m.type="button",m.value="Edit",m.onclick=()=>{const n=document.querySelector('input[name="priorityINPUT2"]:checked').value;r.changeTitle(c.value),r.changeDescription(l.value),r.changedueDate(s.value),r.changePriority(n),a.remove(),b(e,t)};const f=document.createElement("button");f.textContent="Close",f.onclick=e=>{a.remove(),e.preventDefault()},a.append(c,l,s,d,u,p,m,f),document.body.append(a)};const f=document.createElement("button"),h=e[t].gettoDos()[n].getInfo()[4];f.onclick=()=>{const r=e[t].gettoDos(),i=r[n];"complete"==r[n].getInfo()[4]?(i.changetoinComplete(),f.classList.remove("complete"),f.classList.add("incomplete"),o.style.opacity="1",l.style.textDecoration="none"):(i.changetoComplete(),f.classList.remove("incomplete"),f.classList.add("complete"),o.style.opacity="0.5",l.style.textDecoration="line-through")},f.classList.add(h,"completeBTN"),"complete"==h&&(o.style.opacity="0.5",l.style.textDecoration="line-through");const v=document.createElement("div");v.append(d,f,l);const x=document.createElement("div");x.append(u,s,m,p),v.classList.add("flexContainer"),x.classList.add("flexContainer2"),o.classList.add("toDoContainer"),a.classList.add("projectContainer"),o.append(v,x),a.append(o),r.append(a)}}class x{constructor(e,t,n,o=" "){this.title=e,this.description=o,this.dueDate=t,this.priority=n,this.complete="incomplete"}getInfo(){return[this.title,this.description,this.dueDate,this.priority,this.complete]}changetoComplete(){return this.complete="complete"}changetoinComplete(){return this.complete="incomplete"}changePriority(e){return this.priority=e}changeTitle(e){return this.title=e}changeDescription(e){return this.description=e}changedueDate(e){return this.dueDate=e}}class E{constructor(e){this.title=e,this.array=[]}addNewtoDo(e,t,n,o){const r=new x(e,t,n,o);this.array.push(r)}deletetoDo(e){return this.array.splice(e,1)}newProjectPrint(){console.log(this.title),console.log(this.array)}gettoDos(){return this.array}}function C(e,t){const n=new E(e);t.push(n)}let w=[];!function(e){const t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("button");o.onclick=()=>{i.style.display="block"};const r=document.createElement("button"),i=document.createElement("form"),a=document.createElement("input");a.type="text",a.name="title",a.placeholder="Title...";const c=document.createElement("input");c.type="text",c.name="description",c.placeholder="Description...";const l=document.createElement("input");l.type="date",l.name="inputDate";const s=document.createElement("input");s.type="radio",s.value="low",s.name="priorityINPUT";const d=document.createElement("input");d.type="radio",d.value="medium",d.name="priorityINPUT";const u=document.createElement("input");u.type="radio",u.value="high",u.name="priorityINPUT";const p=document.createElement("input");p.type="button",p.value="Submit";const m=document.getElementsByClassName("sideBarProject");p.onclick=t=>{let n;for(let e=0;e<m.length;e++)if(m[e].classList.contains("active")){n=e;break}const o=document.querySelector('input[name="priorityINPUT"]:checked').value;e[n].addNewtoDo(a.value,l.value,o,c.value),console.log(e[n]),i.style.display="none",a.value="",c.value="",l.value="",b(e,n),t.preventDefault()};const f=document.createElement("button");f.textContent="Close",f.onclick=e=>{i.style.display="none",i.style.display="none",a.value="",c.value="",l.value="",e.preventDefault()},i.append(a,c,l,s,d,u,p,f),document.body.append(i),i.style.display="none";const h=document.createElement("div");t.classList.add("navbar"),n.classList.add("title"),o.classList.add("newtoDoBTN"),r.classList.add("newProjectBTN"),h.classList.add("buttonContainer"),n.textContent="toDo List",o.textContent="New To do",r.textContent="New Project",r.onclick=()=>{y.style.display="block"};const y=document.createElement("form"),g=document.createElement("input");g.type="text",g.value="",g.title="title",g.placeholder="Project title...";const x=document.createElement("button");x.textContent="Close",x.onclick=e=>{y.style.display="none",g.value="",e.preventDefault()};const E=document.createElement("input");E.type="button",E.value="Submit",E.onclick=t=>{C(g.value,e),y.style.display="none";let n=e.length-1;console.log(n),v(e),b(e,n),g.value="",t.preventDefault()},y.append(g,x,E),y.style.display="none",document.body.append(y),h.append(o,r),t.append(n,h),document.body.append(t)}(w),C("home",w),C("Today",w),C("A project",w),v(w),w[0].addNewtoDo("titleB","2023-01-11","high","DescriptionB"),w[0].addNewtoDo("titleB2","2025-05-19","medium","DescriptionB2"),w[0].addNewtoDo("titleB3","2024-01-19","low","DescriptionB3"),w[1].addNewtoDo("titleB","2023-01-11","high","DescriptionB"),w[1].addNewtoDo("titleB2","2025-05-19","medium","DescriptionB2"),w[1].addNewtoDo("titleB3","2024-01-19","low","DescriptionB3"),w[2].addNewtoDo("titleB","2023-01-11","high","DescriptionB"),w[2].addNewtoDo("titleB2","2025-05-19","medium","DescriptionB2"),w[1].addNewtoDo("titleB3","2024-01-19","low","DescriptionB3"),document.getElementsByClassName("sideBarProject")[0].click()})()})();