(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(81),r=n.n(o),l=n(645),i=n.n(l),s=n(667),a=n.n(s),c=new URL(n(442),n.b),d=new URL(n(477),n.b),p=i()(r()),u=a()(c),m=a()(d);p.push([e.id,`@font-face {\n    font-family: 'robotoBold';\n    src: url(${u}) format('truetype'), \n        url(${m}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n\n\n\n\n\n\n\nbody {\n    background-color: white;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    margin: 0;\n    display: flex;\n    flex-direction: column-reverse;\n}\n\nhtml, body{\n  height: 100%;\n}\n\n.navbar { \n    display: flex;\n    justify-content: space-evenly;\n    border-bottom: 2.3px solid black;\n    align-items: center;\n    \n}\n\n.navbar button {\n        align-items: center;\n        background-color: #fff;\n        border: 2px solid #000;\n        box-sizing: border-box;\n        color: #000;\n        cursor: pointer;\n        display: inline-flex;\n        fill: #000;\n        font-size: 16px;\n        font-weight: 600;\n        height: 48px;\n        justify-content: center;\n        letter-spacing: -.8px;\n        line-height: 24px;\n        min-width: 140px;\n        outline: 0;\n        padding: 0 17px;\n        text-align: center;\n        text-decoration: none;\n        transition: all .3s;\n        user-select: none;\n        -webkit-user-select: none;\n        touch-action: manipulation;\n}\n\nbutton:focus  {\n    color: #171e29;\n  }\n  \n    button:hover {\n      border-color: #06f;\n      color: #06f;\n      fill: #06f;\n    }\n    \n    button:active {\n      border-color: #06f;\n      color: #06f;\n      fill: #06f;\n    }\n  \n  .submitBtn:hover {\n    border-color: #06f;\n    color: #06f;\n    fill: #06f;\n  }\n  \n  .submitBtn:active {\n    border-color: #06f;\n    color: #06f;\n    fill: #06f;\n  }\n  \n  \n  .submitBtn:focus  {\n      color: #171e29;\n    }\n    \n  \n  @media (min-width: 768px) {\n     button {\n      min-width: 170px;\n    }\n     button {\n      min-width: 170px;\n    }\n  }\n\n.buttonContainer {\n    display: flex;\n    gap: 10px;\n}\n\n\n.sideBarContainer {\n  display: flex;\n  flex-direction: column;\n  border: 2.3px solid black;\n  align-items: center;\n  justify-content: space-around;\n  flex-basis: 10%;\n  margin: 20px;\n}\n\n.itemsContainer {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 20px;\n \n}\n.projectText {\n   border-bottom: 2px dotted black;\n   \n}\n\n.sideBarProject {\n  background-color: white;\n  border: none;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 1rem;\n  \n  \n  \n}\n\n.active  {\n  border-bottom: 2px dotted #06f;\n}\n\n\n#contentContainer {\n  display: flex;\n  flex: 1;\n  \n}\n\n.newProjectForm {\n  min-width: 25%;\n  height: 20%;\n  position: absolute;\n  top: 30%;\n  left: 40%;\n  background-color: white;\n  border: 2.3px solid black;\n  flex-direction: column;\n  gap: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n.newProjectcloseBTN {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 40px;\n  cursor: pointer;\n}\n\n.projectContainer {\n  margin-top: 50px;\n  margin-right: 200px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  gap: 10px;\n}\n\n\n.toDoContainer {\n  border: 2px solid black;\n  display: flex;\n  gap: 10px;\n  min-width: 60%;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.toDoForm {\n  border: 2.3px solid black;\n  background-color: white;\n  min-width: 10%;\n  height: 30%;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 30%;\n  left: 47.5%;\n  gap: 10px;\n  \n}\n\n\n\n.toDoForm img {\n  width: 40px;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n  \n}\n\n.radioBTN1, .radioBTN2, .radioBTN3 {\n  cursor: pointer;\n  /* whoever made radio buttons so annoying to style deserves a special place in hell*/\n  \n}\n.radioBTN1:checked::after {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  top: -2px;\n  left: -1px;\n  position: relative;\n  background-color: green;\n  content: '';\n  display: inline-block;\n  visibility: visible;\n  border: 2px solid white;\n  \n}\n\n.radioBTN2:checked::after {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  top: -2px;\n  left: -1px;\n  position: relative;\n  background-color: orange;\n  content: '';\n  display: inline-block;\n  visibility: visible;\n  border: 2px solid white;\n \n}\n\n.radioBTN3:checked::after {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  top: -2px;\n  left: -1px;\n  position: relative;\n  background-color: red;\n  content: '';\n  display: inline-block;\n  visibility: visible;\n  border: 2px solid white;\n \n}\n\n\n\n\n.flexContainer {\n  display: flex;\n  gap: 20px;\n}\n\n.flexContainer2 {\n  display: flex;\n  gap: 30px;\n}\n\n.highPriority, .mediumPriority, .lowPriority {\n  width: 10px;\n  \n}\n\n.highPriority {\n  background-color: red;\n  \n}\n.mediumPriority {\n  background-color: orange;\n}\n.lowPriority {\n  background-color: green;\n}\n\n\n .deleteBTN, .editBTN {\n  border: none;\n  cursor: pointer;\n  width: 40px;\n \n}\n\n\n.completeBTN, .detailsBTN {\n  border: 2.3px solid black;\n  background-color: white;\n  min-width: 50px;\n  cursor: pointer;\n  \n  \n}\n\n.detailsBTN {\n  min-width: 100px;\n}\n\n\n\n.deleteBTN:hover {\n  background-color: red;\n  \n}\n\n.editBTN:hover {\n  background-color:#06f;\n}\n\n\n.incomplete {\n  background: none;\n}\n\n.complete {\n  background-color: white;\n}\n\n\n\n\n\n.detailsContainer {\n  position: absolute;\n  background-color: white;\n  border: 2.3px solid black;\n  padding: 20px;\n  top: 33%;\n  left: 27%;\n  margin: -25px 0 0 -25px;\n  box-shadow: 1px -1px 48px 8px rgba(0,0,0,0.75);\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  \n}\n\n.detailsContainer img {\n  width: 40px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none;\n  cursor: pointer;\n}\n\n\n\n\n.detailsBold {\n  font-weight: bold;\n  \n}`,""]);const y=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,l){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&i[d[0]]||(void 0!==l&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=l),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var l={},i=[],s=0;s<e.length;s++){var a=e[s],c=o.base?a[0]+o.base:a[0],d=l[c]||0,p="".concat(c," ").concat(d);l[c]=d+1;var u=n(p),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var y=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:y,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var l=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<l.length;i++){var s=n(l[i]);t[s].references--}for(var a=o(e,r),c=0;c<l.length;c++){var d=n(l[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}l=a}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var l=n.sourceMap;l&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},442:(e,t,n)=>{e.exports=n.p+"f80816a5455d171f948d.ttf"},477:(e,t,n)=>{e.exports=n.p+"87d61cea6fe1d235d4a8.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={id:o,exports:{}};return e[o](l,l.exports,n),l.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var o={};(()=>{n.d(o,{o9:()=>N});var e=n(379),t=n.n(e),r=n(795),l=n.n(r),i=n(569),s=n.n(i),a=n(565),c=n.n(a),d=n(216),p=n.n(d),u=n(589),m=n.n(u),y=n(426),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=p(),t()(y.Z,f),y.Z&&y.Z.locals&&y.Z.locals;const h=n.p+"de0bb67a90c508546224.svg",g=n.p+"ae589010d8b937c5a909.svg",b=n.p+"6d179acdee772aa5ecda.svg",v=n.p+"ddce2e1e5ef60024f029.svg";function x(e){const t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("button");o.onclick=()=>{const e=document.getElementById("contentContainer");e.style.filter="blur(4px)",e.style.pointerEvents="none",e.style.userSelect="none",t.style.filter="blur(4px)",t.style.pointerEvents="none",t.style.userSelect="none",l.style.display="flex",c.checked=!1,d.checked=!1,p.checked=!1,f.style.display="none"};const r=document.createElement("button"),l=document.createElement("form");l.classList.add("toDoForm");const i=document.createElement("input");i.type="text",i.name="title",i.placeholder="Title...";const s=document.createElement("input");s.type="text",s.name="description",s.placeholder="Description...";const a=document.createElement("input");a.type="date",a.name="inputDate";const c=document.createElement("input");c.type="radio",c.value="low",c.name="priorityINPUT",c.classList.add("radioBTN1");const d=document.createElement("input");d.type="radio",d.value="medium",d.name="priorityINPUT",d.classList.add("radioBTN2");const p=document.createElement("input");p.type="radio",p.value="high",p.name="priorityINPUT",p.classList.add("radioBTN3");const u=document.createElement("div");u.append(c,d,p);const m=document.createElement("input");m.type="button",m.value="Submit";const y=document.getElementsByClassName("sideBarProject");m.style.backgroundColor="white",m.style.border="2.3px solid black",m.style.cursor="pointer";const f=document.createElement("p");f.textContent="Please input all areas",m.onclick=n=>{const o=document.querySelector('input[name="priorityINPUT"]:checked');if(null==o||""==i.value||""==s.value||""==a.value)return void(f.style.display="block");const r=document.getElementById("contentContainer");let c;r.style.filter="blur(0px)",r.style.pointerEvents="auto",r.style.userSelect="auto",t.style.filter="blur(0px)",t.style.pointerEvents="auto",t.style.userSelect="auto";for(let e=0;e<y.length;e++)if(y[e].classList.contains("active")){c=e;break}e[c].addNewtoDo(i.value,a.value,o.value,s.value),console.log(e[c]),l.style.display="none",i.value="",s.value="",a.value="",w(e,c),n.preventDefault()};const h=document.createElement("img");h.src=b,h.textContent="Close",h.onclick=e=>{const n=document.getElementById("contentContainer");n.style.filter="blur(0px)",n.style.pointerEvents="auto",n.style.userSelect="auto",t.style.filter="blur(0px)",t.style.pointerEvents="auto",t.style.userSelect="auto",l.style.display="none",l.style.display="none",i.value="",s.value="",a.value="",e.preventDefault()},l.append(i,s,a,u,f,m,h),document.body.append(l),l.style.display="none";const g=document.createElement("div");t.classList.add("navbar"),n.classList.add("title"),o.classList.add("newtoDoBTN"),r.classList.add("newProjectBTN"),g.classList.add("buttonContainer"),n.textContent="toDo List",o.textContent="New To do",r.textContent="New Project",r.onclick=()=>{const e=document.getElementById("contentContainer");e.style.filter="blur(4px)",e.style.pointerEvents="none",e.style.userSelect="none",t.style.filter="blur(4px)",t.style.pointerEvents="none",t.style.userSelect="none",v.style.display="flex",C.value="",C.style.backgroundColor="white",C.placeholder="Project title..."};const v=document.createElement("form");v.classList.add("newProjectForm");const x=document.createElement("h1");x.textContent="New project name?";const C=document.createElement("input");C.type="text",C.value="",C.title="title",C.style.border="2.3px solid black",C.placeholder="Project title...";const k=document.createElement("img");k.src=b,k.classList.add("newProjectcloseBTN"),k.onclick=e=>{const n=document.getElementById("contentContainer");v.style.display="none",n.style.filter="blur(0px)",n.style.pointerEvents="auto",n.style.userSelect="auto",t.style.filter="blur(0px)",t.style.pointerEvents="auto",t.style.userSelect="auto",C.value="",e.preventDefault()};const B=document.createElement("input");B.type="button",B.value="Submit",B.style.border="2.3px solid black",B.style.backgroundColor="white",B.style.cursor="pointer",B.onclick=n=>{const o=document.getElementById("contentContainer");if(""==C.value)return C.placeholder="Please input something!",void(C.style.backgroundColor="red");if(o.style.filter="blur(0px)",o.style.pointerEvents="auto",o.style.userSelect="auto",t.style.filter="blur(0px)",t.style.pointerEvents="auto",t.style.userSelect="auto",n.preventDefault(),"home"==C.value)return w(e,0),void(v.style.display="none");N(C.value,e),v.style.display="none";let r=e.length-1;console.log(r),E(e),w(e,r),C.value=""},v.append(x,C,k,B),v.style.display="none",document.body.append(v),g.append(o,r),t.append(n,g),document.body.append(t)}function E(e){const t=document.getElementsByClassName("sideBarContainer");for(let e=0;e<t.length;e++)t[0].parentNode.removeChild(t[0]);const n=document.getElementById("contentContainer"),o=document.createElement("div"),r=document.createElement("div"),l=document.createElement("h1");l.textContent="Projects",r.append(l),l.classList.add("projectText"),o.classList.add("itemsContainer"),r.classList.add("sideBarContainer");for(let t=0;t<e.length;t++){const n=document.createElement("button");n.textContent=e[t].title,n.classList.add("sideBarProject"),n.onclick=function(){w(e,t)},o.append(n)}r.append(o),n.append(r)}function w(e,t){const n=document.getElementsByClassName("sideBarProject");for(let e=0;e<n.length;e++)n[e].classList.remove("active");n[t].classList.add("active");const o=document.getElementsByClassName("projectContainer");for(let e=0;e<o.length;e++)o[0].parentNode.removeChild(o[0]);const r=document.getElementById("contentContainer"),l=e[t].gettoDos();if(0==l.length&&"home"==e[t].title||0==l.length&&"Today"==e[t].title){const e=document.createElement("div");return e.classList.add("projectContainer"),e.textContent="I'm empty :( Fill me up with some to dos!",void r.append(e)}if(0==l.length){const n=document.createElement("div");n.classList.add("projectContainer"),n.textContent="I'm empty. Delete me. Or add stuff to me maybe :)";const o=document.createElement("button");return o.textContent="Delete",o.style.width="50px",o.style.height="50px",o.style.cursor="pointer",o.style.backgroundColor="white",o.style.border="2.3px solid black",o.onclick=()=>{e.splice(t,1),document.getElementsByClassName("sideBarContainer")[0].remove(),n.remove(),E(e),w(e,0)},n.append(o),void r.append(n)}const i=document.createElement("div");let s;for(let n=0;n<l.length;n++){s=l[n].getInfo();const o=document.createElement("div"),a=document.createElement("p");a.textContent=s[0];const c=document.createElement("p");c.textContent=s[2];const d=document.createElement("div");"high"==s[3]?d.classList.add("highPriority"):"medium"==s[3]?d.classList.add("mediumPriority"):"low"==s[3]&&d.classList.add("lowPriority");const p=document.createElement("button");p.textContent="Details",p.classList.add("detailsBTN"),p.onclick=()=>{s=l[n].getInfo();const e=document.createElement("p");e.textContent=s[0],e.style.fontSize="50px",e.style.fontWeight="bold";const t=document.createElement("p");t.innerHTML=`<p> <span class = "detailsBold">Due: </span>${s[2]}</p>`;const o=document.createElement("p");o.innerHTML=`<p> <span class = "detailsBold">Priority: </span>${s[3]}</p>`;const i=document.createElement("div"),a=document.createElement("p");a.innerHTML=`<p> <span class = "detailsBold">Description: </span>${s[1]}</p>`;const c=document.createElement("p");c.innerHTML=`<p> <span class = "detailsBold">Status: </span>${s[4]}</p>`,i.classList.add("detailsContainer"),r.style.filter="blur(4px)",r.style.pointerEvents="none",r.style.userSelect="none";const d=document.getElementsByClassName("navbar");d[0].style.filter="blur(4px)",d[0].style.pointerEvents="none",d[0].style.userSelect="none";const p=document.createElement("img");p.src=b;const u=document.createElement("div");u.classList.add("textContainer"),u.append(e,t,o,c,a),p.onclick=()=>{r.style.filter="blur(0)",r.style.pointerEvents="auto",r.style.userSelect="auto",d[0].style.filter="blur(0)",d[0].style.pointerEvents="auto",d[0].style.userSelect="auto",i.remove()},i.append(u,p),document.body.append(i)};const u=document.createElement("img");u.src=h,u.classList.add("deleteBTN"),u.onclick=()=>{e[t].deletetoDo(n),o.remove(),i.remove(),w(e,t)};const m=document.createElement("img");m.src=g,m.classList.add("editBTN"),m.onclick=()=>{const o=document.getElementById("contentContainer"),r=document.getElementsByClassName("navbar")[0];o.style.filter="blur(4px)",o.style.pointerEvents="none",o.style.userSelect="none",r.style.filter="blur(4px)",r.style.pointerEvents="none",r.style.userSelect="none";const l=e[t].gettoDos(),i=l[n],s=l[n].getInfo(),a=document.createElement("form");a.classList.add("toDoForm");const c=document.createElement("input");c.type="text",c.name="title",c.placeholder="Title...",c.value=s[0];const d=document.createElement("input");d.type="text",d.name="description",d.value=s[1],d.placeholder="Description...";const p=document.createElement("input");p.type="date",p.value=s[2],p.name="inputDate";const u=document.createElement("input");u.type="radio",u.value="low",u.classList.add("radioBTN1"),u.name="priorityINPUT2";const m=document.createElement("input");m.type="radio",m.value="medium",m.name="priorityINPUT2",m.classList.add("radioBTN2");const y=document.createElement("input");y.type="radio",y.value="high",y.name="priorityINPUT2",y.classList.add("radioBTN3");const f=document.createElement("div");f.append(u,m,y),a.style.display="flex","low"===s[3]?u.defaultChecked=!0:"medium"===s[3]?m.defaultChecked=!0:"high"===s[3]&&(y.defaultChecked=!0);const h=document.createElement("input");h.style.backgroundColor="white",h.style.border="2.3px solid black",h.style.cursor="pointer",h.type="button",h.value="Edit";const g=document.createElement("p");g.textContent="Please input all areas.",g.style.display="none",h.onclick=()=>{if(""==c.value||""==d.value||""==p.value)return void(g.style.display="block");const n=document.getElementById("contentContainer"),o=document.getElementsByClassName("navbar")[0];n.style.filter="blur(0px)",n.style.pointerEvents="auto",n.style.userSelect="auto",o.style.filter="blur(0px)",o.style.pointerEvents="auto",o.style.userSelect="auto";const r=document.querySelector('input[name="priorityINPUT2"]:checked').value;i.changeTitle(c.value),i.changeDescription(d.value),i.changedueDate(p.value),i.changePriority(r),a.remove(),w(e,t)};const v=document.createElement("img");v.src=b,v.textContent="Close",v.onclick=e=>{const t=document.getElementById("contentContainer"),n=document.getElementsByClassName("navbar")[0];t.style.filter="blur(0px)",t.style.pointerEvents="auto",t.style.userSelect="auto",n.style.filter="blur(0px)",n.style.pointerEvents="auto",n.style.userSelect="auto",a.remove(),e.preventDefault()},a.append(c,d,p,f,g,h,v),document.body.append(a)};const y=document.createElement("button"),f=e[t].gettoDos()[n].getInfo()[4];if(y.onclick=()=>{const r=e[t].gettoDos(),l=r[n];if("complete"==r[n].getInfo()[4])l.changetoinComplete(),document.getElementsByClassName(`tickIMG${n}`)[0].remove(),y.classList.remove("complete"),y.classList.add("incomplete"),o.style.opacity="1",a.style.textDecoration="none";else{l.changetoComplete();const e=document.createElement("img");e.classList.add(`tickIMG${n}`),e.src=v,e.style.zIndex="7",y.append(e),y.classList.remove("incomplete"),y.classList.add("complete"),o.style.opacity="0.5",a.style.textDecoration="line-through"}},y.classList.add(f,"completeBTN"),"complete"==f){o.style.opacity="0.5",a.style.textDecoration="line-through";const e=document.createElement("img");e.classList.add(`tickIMG${n}`),e.src=v,y.append(e)}const x=document.createElement("div");x.append(d,y,a);const E=document.createElement("div");E.append(p,c,m,u),x.classList.add("flexContainer"),E.classList.add("flexContainer2"),o.classList.add("toDoContainer"),i.classList.add("projectContainer"),o.append(x,E),i.append(o),r.append(i)}}class C{constructor(e,t,n,o=" ",r="incomplete"){this.title=e,this.description=o,this.dueDate=t,this.priority=n,this.complete=r}getInfo(){return[this.title,this.description,this.dueDate,this.priority,this.complete]}changetoComplete(){return this.complete="complete"}changetoinComplete(){return this.complete="incomplete"}changePriority(e){return this.priority=e}changeTitle(e){return this.title=e}changeDescription(e){return this.description=e}changedueDate(e){return this.dueDate=e}}class k{constructor(e,t=[]){this.title=e,this.array=t}addNewtoDo(e,t,n,o){const r=new C(e,t,n,o);this.array.push(r)}deletetoDo(e){return this.array.splice(e,1)}newProjectPrint(){console.log(this.title),console.log(this.array)}gettoDos(){return this.array}}function N(e,t){const n=new k(e);t.push(n)}function B(){let e=[];return N("home",e),N("Today",e),N("Example project",e),e[0].addNewtoDo("Go to the gym!","2023-01-11","medium","Lose some weight fatty!"),e[0].addNewtoDo("Touch grass","2025-05-19","low","Too hard :("),e[0].addNewtoDo("Start drinking more water","2024-01-19","high","mmm yummy water"),e[1].addNewtoDo("Go to the gym!","2023-01-11","medium","Lose some weight fatty!"),e[1].addNewtoDo("Play fortnite","2025-05-19","low","petter griffin"),e[1].addNewtoDo("Start drinking","2024-01-19","high","mmm yummy"),e}if(function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()){let e;localStorage.getItem("projects")?(e=JSON.parse(localStorage.getItem("projects")),console.log("This is a second time load!")):(localStorage.setItem("projects",JSON.stringify(B())),e=JSON.parse(localStorage.projects),console.log("This is a first time load!"),console.log(e));let t=[];for(let n=0;n<e.length;n++){let o=new k(e[n].title,e[n].array);t.push(o);let r=t[n].gettoDos();for(let e=0;e<r.length;e++){let t=r[e],[n,o,l,i,s]=Object.values(t),a=new C(n,l,i,o,s);r[e]=a,console.log(r)}}e=t,window.onbeforeunload=function(){localStorage.setItem("projects",JSON.stringify(e))},x(e),E(e),document.getElementsByClassName("sideBarProject")[0].click(),console.log(e),console.log(B())}else{console.log("Damn that sucks. This page is gonna forget everything you put in once you refresh because of how old it is! Get a better browser man.");let e=[];e[0].addNewtoDo("Update your browser.","2023-01-11","medium","Locabrowser storage isn't supported, so this is gonna forget everything on refresh."),x(e),E(e)}})()})();