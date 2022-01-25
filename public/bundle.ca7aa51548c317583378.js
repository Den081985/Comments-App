(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"/**\n * Body CSS\n */\nhtml,\nbody {\n  height: 100%;\n}\n\nhtml,\nbody,\ninput,\ntextarea,\nbutton {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\n\n/**\n  * Sidebar CSS\n  */\n#sidebar {\n  background-color: #e57373;\n  padding: 15px;\n}\n\n@media (min-width: 768px) {\n  #sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 180px;\n    height: 100%;\n    padding-top: 30px;\n  }\n}\n\n/**\n  * Content CSS\n  */\n@media (min-width: 768px) {\n  #content {\n    margin-left: 180px;\n  }\n}\n.floatBtn {\n  position: fixed;\n  bottom: 60px;\n  right: 60px;\n}\n.secondFloatBtn {\n  position: fixed;\n  bottom: 60px;\n  right: 200px;\n}\n.modal {\n  max-width: 500px;\n  max-height: 400px;\n  background-color: #fff;\n  margin: 100px auto;\n  overflow-y: auto;\n}\n\n.modal .modal-title {\n  text-align: center;\n  padding: 1rem;\n}\n\n.modal .modal-content {\n  padding: 1rem;\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],l=o.base?d[0]+o.base:d[0],c=a[l]||0,u="".concat(l," ").concat(c);a[l]=c+1;var m=n(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=o(e,r),l=0;l<a.length;l++){var c=n(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),s=n(565),d=n.n(s),l=n(216),c=n.n(l),u=n(589),m=n.n(u),p=n(28),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;class v{static create(e){return fetch("https://comments-app-1bb46-default-rtdb.firebaseio.com/comments.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>(e.id=t.name,e))).then(h).then(v.render)}static render(){const e=y(),t=e.length?e.map(b).join(""):'<div class="mui--text-dark-secondary mui--text-body2">\n        НЕТ КОММЕНТАРИЕВ\n      </div>';document.getElementById("comment-list").innerHTML=t}static fetch(e){return e?fetch(`https://comments-app-1bb46-default-rtdb.firebaseio.com/comments.json?auth=${e}`).then((e=>e.json())).then((e=>e&&e.error?`<p class='comment-error'>${e.error}</p>`:e?Object.keys(e).map((t=>({...e[t],id:t}))):[])):Promise.resolve("<p class='comment-error'>Отсутствует Авторизация</p>")}static listHTML(e){return e.length?`<ul>${e.map((e=>`<li>${e.comment}</li>`)).join("")}</ul>`:"<p>КОММЕНТАРИЕВ НЕТ</p>"}}function h(e){const t=y();t.push(e),localStorage.setItem("comments",JSON.stringify(t))}function y(){return JSON.parse(localStorage.getItem("comments")||"[]")}function b(e){return`\n    <div class="mui--text-headline">${e.theme}</div>\n    <div class="mui--text-dark-secondary">\n        ${new Date(e.date).toLocaleDateString()}\n        ${new Date(e.date).toLocaleTimeString()}\n    </div>\n    <div>${e.comment}</div>\n    \n    `}function g(e){return e.length>=4}function x(e,t){let n=document.createElement("div");n.classList.add("modal");const o=`\n    <div class = "modal-title">${e}</div>\n    <div class = "modal-content">${t}</div>\n  \n  `;n.innerHTML=o,mui.overlay("on",n)}function S(e){let t=document.createElement("div");t.classList.add("modal");const n=`\n  <div class = "modal-title">ПОЗДРАВЛЯЕМ! ВЫ ЗАРЕГИСТРИРОВАНЫ!</div>\n  <div class = "modal-content">Ваш Uid: ${e}</div>\n  `;t.innerHTML=n,mui.overlay("on",t)}const w=document.getElementById("comment-form"),E=w.querySelector("#comment-input"),T=w.querySelector("#comment-btn"),L=w.querySelector("#comment-area"),I=document.getElementById("modalBtn1"),j=document.getElementById("modalBtn2");function k(e){e.preventDefault();const t=e.target.querySelector("#email").value,n=e.target.querySelector("#password").value,o=(e.target.querySelector("#name").value,e.target.querySelector("button"));o.disabled=!0,function(e,t,n){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCoTMEZUBN6EV8wj8oOGwZkzwyydXR8P0Q",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.localId))}(t,n).then(S).then((()=>o.disabled=!1))}function C(e){e.preventDefault();const t=e.target.querySelector("#email").value,n=e.target.querySelector("#password").value,o=e.target.querySelector("button");o.disabled=!0,function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCoTMEZUBN6EV8wj8oOGwZkzwyydXR8P0Q",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(t,n).then(v.fetch).then(M).then((()=>o.disabled=!1))}function M(e){"string"==typeof e?x("ОШИБКА",e):x("КОММЕНТАРИИ",v.listHTML(e))}w.addEventListener("submit",(function(e){if(e.preventDefault(),g(L.value)){const e={theme:E.value.trim(),comment:L.value.trim(),date:(new Date).toJSON()};T.disabled=!0,v.create(e).then((()=>{E.value="",E.className="",L.value="",L.className="",T.disabled=!1}))}})),L.addEventListener("input",(()=>{T.disabled=!g(L.value)})),I.addEventListener("click",(function(){x("АВТОРИЗАЦИЯ",'\n        <form class="mui-form" id="auth-form">\n        <div class="mui-textfield mui-textfield--float-label">\n          <input type="text" id="name" required>\n          <label for="name">ФИО</label>\n        </div>\n        <div class="mui-textfield mui-textfield--float-label">\n          <input type="email" id="email" required>\n          <label for="email">EMAIL</label>\n        </div>\n        <div class="mui-textfield mui-textfield--float-label">\n          <input type="password" id="password"required>\n          <label for="password">ПАРОЛЬ</label>\n        </div>\n        <button type="submit" class="mui-btn mui-btn--raised">Отправить</button>\n        </form>\n    \n    '),document.getElementById("auth-form").addEventListener("submit",k,{once:!0})})),j.addEventListener("click",(function(){x("ВХОД",'\n  <form class="mui-form" id="enter-form">\n    <div class="mui-textfield mui-textfield--float-label">\n      <input type="email" id="email" required>\n      <label for="email">EMAIL</label>\n    </div>\n    <div class="mui-textfield mui-textfield--float-label">\n      <input type="password" id="password"required>\n      <label for="password">ПАРОЛЬ</label>\n    </div>\n    <button type="submit" class="mui-btn mui-btn--raised">Войти</button>\n  </form>\n  \n  '),document.getElementById("enter-form").addEventListener("submit",C)})),window.addEventListener("load",v.render)})()})();