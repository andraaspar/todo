(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r,o=n(1),l=n(0),i=n.n(l),a=n(20),c=n.n(a),u=n(9),d=n(2);!function(e){e.NEW="NEW",e.DONE="DONE",e.FAILED="FAILED"}(r||(r={}));var s=[r.NEW,r.DONE,r.FAILED],f=n(11),b=n(21),p=n(13),O=n(40),v="TodoStore",h=new p.a(function(){var e=m();try{var t=JSON.parse(localStorage.getItem(v));t&&t.todoOrder.length&&(e=t)}catch(n){console.error(n)}return e}());h.subscribe((function(e){return e}),(function(e,t,n){j()}));var j=Object(b.throttle)((function(){try{localStorage.setItem(v,JSON.stringify(h.getRawState()))}catch(e){console.error(e),alert(e)}}),600);function m(){var e=Object(O.a)();return{todosById:Object(f.a)({},e,{id:e,name:"",state:r.NEW}),todoOrder:[e]}}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=l.createElement("path",{fillRule:"evenodd",d:"M4.646 7.646a.5.5 0 01.708 0L8 10.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z",clipRule:"evenodd"}),x=l.createElement("path",{fillRule:"evenodd",d:"M8 4.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z",clipRule:"evenodd"});function E(e,t){var n=e.title,r=e.titleId,o=g(e,["title","titleId"]);return l.createElement("svg",y({className:"bi bi-arrow-down-short",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,w,x)}var I=l.forwardRef(E);n.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S=l.createElement("path",{fillRule:"evenodd",d:"M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z",clipRule:"evenodd"}),N=l.createElement("path",{fillRule:"evenodd",d:"M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z",clipRule:"evenodd"});function B(e,t){var n=e.title,r=e.titleId,o=k(e,["title","titleId"]);return l.createElement("svg",R({className:"bi bi-arrow-left-short",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,S,N)}var P=l.forwardRef(B);n.p;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var L=l.createElement("path",{fillRule:"evenodd",d:"M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z",clipRule:"evenodd"}),A=l.createElement("path",{fillRule:"evenodd",d:"M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z",clipRule:"evenodd"});function D(e,t){var n=e.title,r=e.titleId,o=z(e,["title","titleId"]);return l.createElement("svg",C({className:"bi bi-arrow-right-short",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,L,A)}var M=l.forwardRef(D);n.p;function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var V=l.createElement("path",{fillRule:"evenodd",d:"M11 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z",clipRule:"evenodd"}),T=l.createElement("path",{fillRule:"evenodd",d:"M10.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L11 3.707 8.354 6.354a.5.5 0 11-.708-.708l3-3zm-9 7a.5.5 0 01.708 0L5 12.293l2.646-2.647a.5.5 0 11.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z",clipRule:"evenodd"}),H=l.createElement("path",{fillRule:"evenodd",d:"M5 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z",clipRule:"evenodd"});function U(e,t){var n=e.title,r=e.titleId,o=F(e,["title","titleId"]);return l.createElement("svg",W({className:"bi bi-arrow-up-down",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,V,T,H)}var J=l.forwardRef(U);n.p;n.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var q=l.createElement("path",{fillRule:"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"});function $(e,t){var n=e.title,r=e.titleId,o=K(e,["title","titleId"]);return l.createElement("svg",_({width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-check-circle-fill",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,q)}var G=l.forwardRef($);n.p;n.p;function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Y=l.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z",clipRule:"evenodd"});function Z(e,t){var n=e.title,r=e.titleId,o=X(e,["title","titleId"]);return l.createElement("svg",Q({className:"bi bi-circle",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,Y)}var ee=l.forwardRef(Z);n.p;n.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var re=l.createElement("path",{d:"M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"}),oe=l.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z",clipRule:"evenodd"});function le(e,t){var n=e.title,r=e.titleId,o=ne(e,["title","titleId"]);return l.createElement("svg",te({className:"bi bi-trash",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,re,oe)}var ie=l.forwardRef(le);n.p;function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ue=l.createElement("path",{fillRule:"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"});function de(e,t){var n=e.title,r=e.titleId,o=ce(e,["title","titleId"]);return l.createElement("svg",ae({width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-x-circle-fill",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,ue)}var se=l.forwardRef(de);n.p;function fe(e){switch(e){case r.NEW:return ee;case r.DONE:return G;case r.FAILED:return se}}function be(e){return Object(o.jsx)("i",{className:"to-icon",children:Object(l.createElement)(e.icon)})}function pe(e){var t=h.useState((function(t){return t.todosById[e.id]})),n=Object(d.f)();return Object(o.jsx)("button",{className:"to-todo__delete",type:"button",onClick:function(t){h.update((function(t,o){if(1===t.todoOrder.length){var l=t.todosById[e.id];l.name="",l.state=r.NEW,n.goBack()}else delete t.todosById[e.id],t.todoOrder=o.todoOrder.filter((function(t){return t!==e.id}))}))},children:Object(o.jsxs)("div",{className:"to-todo--name",children:[Object(o.jsx)(be,{icon:ie})," ",Object(o.jsx)(be,{icon:fe(t.state)})," ",t.name]})})}function Oe(e){var t=Object(d.f)(),n=h.useState((function(e){return e.todoOrder}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"to-title",children:"Delete TODOs"}),Object(o.jsxs)("div",{className:"to-buttons",children:[Object(o.jsx)("button",{type:"button",onClick:function(){t.goBack()},children:Object(o.jsx)(be,{icon:P})}),Object(o.jsxs)("button",{type:"button",onClick:function(){h.update((function(e,t){e.todoOrder=t.todoOrder.filter((function(n){return t.todosById[n].state!==r.DONE||(delete e.todosById[n],!1)}))})),ve(),t.goBack()},children:["Delete done ",Object(o.jsx)(be,{icon:G})]}),Object(o.jsxs)("button",{type:"button",onClick:function(){h.update((function(e,t){e.todoOrder=t.todoOrder.filter((function(n){return t.todosById[n].state!==r.FAILED||(delete e.todosById[n],!1)}))})),ve(),t.goBack()},children:["Delete failed ",Object(o.jsx)(be,{icon:se})]}),Object(o.jsx)("button",{type:"button",onClick:function(){h.update((function(e){return m()})),t.goBack()},children:"Delete all"})]}),n.map((function(e){return Object(o.jsx)(pe,{id:e},e)}))]})}function ve(){0===h.getRawState().todoOrder.length&&h.update((function(e){return m()}))}var he=new p.a({reorderId:null});function je(e){var t=h.useState((function(t){return t.todosById[e.id]})),n=he.useState((function(e){return e.reorderId}));return Object(o.jsx)("button",{className:"to-todo__reorder",type:"button",onClick:function(t){null==n?he.update((function(t){t.reorderId=e.id})):(h.update((function(t,r){var o=r.todoOrder.indexOf(n),l=r.todoOrder.indexOf(e.id)+1;l>o&&l--,t.todoOrder.splice(o,1),t.todoOrder.splice(l,0,n)})),he.update((function(e){e.reorderId=null})))},children:Object(o.jsxs)("div",{className:"to-todo--name",children:[Object(o.jsx)(be,{icon:null==n?M:I})," ",Object(o.jsx)(be,{icon:fe(t.state)})," ",t.name]})})}function me(e){var t=h.useState((function(e){return e.todoOrder})),n=he.useState((function(e){return e.reorderId})),r=Object(d.f)();return Object(l.useEffect)((function(){return function(){he.update((function(e){e.reorderId=null}))}}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"to-title",children:"Reorder TODOs"}),Object(o.jsx)("div",{className:"to-buttons",children:Object(o.jsx)("button",{type:"button",onClick:function(){r.goBack()},children:Object(o.jsx)(be,{icon:P})})}),t.filter((function(e){return e!==n})).map((function(e){return Object(o.jsx)(je,{id:e},e)}))]})}function ye(e){var t=Object(l.useRef)(!1),n=h.useState((function(t){return t.todosById[e.id]}));return Object(o.jsxs)("form",{className:"to-todo",onSubmit:function(t){t.preventDefault();var n=Object(O.a)();h.update((function(t){t.todosById[n]={id:n,name:"",state:r.NEW},t.todoOrder.splice(e.index+1,0,n)})),requestAnimationFrame((function(){var e;null===(e=document.getElementById("input-".concat(n)))||void 0===e||e.focus()}))},children:[Object(o.jsx)("button",{type:"button",onClick:function(t){h.update((function(t){var n=t.todosById[e.id],r=(s.indexOf(n.state)+1)%s.length;n.state=s[r]}))},children:Object(o.jsx)(be,{icon:fe(n.state)})}),Object(o.jsx)("input",{id:"input-".concat(n.id),className:"to-todo--name",value:n.name,onChange:function(t){h.update((function(n){n.todosById[e.id].name=t.currentTarget.value}))},onKeyDown:function(e){t.current=""===e.currentTarget.value},onKeyUp:function(r){"Backspace"===r.key&&t.current&&e.index>0?(h.update((function(t){delete t.todosById[n.id],t.todoOrder.splice(e.index,1)})),ge(e.index-1)):"ArrowUp"===r.key?ge(e.index-1):"ArrowDown"===r.key&&ge(e.index+1)},onFocus:function(e){e.currentTarget.setSelectionRange(0,e.currentTarget.value.length)}})]})}function ge(e){var t=h.getRawState().todoOrder[e];if(null!=t){var n=document.getElementById("input-".concat(t));null===n||void 0===n||n.focus()}}function we(e){var t=h.useState((function(e){return e.todoOrder})),n=Object(d.f)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"to-buttons",children:[Object(o.jsx)("button",{type:"button",onClick:function(){n.push("/delete")},children:Object(o.jsx)(be,{icon:ie})}),Object(o.jsx)("button",{type:"button",onClick:function(){n.push("/reorder")},children:Object(o.jsx)(be,{icon:J})}),Object(o.jsx)("button",{type:"button",style:{marginLeft:"auto"},onClick:function(){h.update((function(e,t){for(var n=0,o=Object.values(e.todosById);n<o.length;n++){o[n].state=r.NEW}}))},children:"Reset all"})]}),t.map((function(e,t){return Object(o.jsx)(ye,{id:e,index:t},e)}))]})}function xe(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{path:"/delete",component:Oe}),Object(o.jsx)(d.a,{path:"/reorder",component:me}),Object(o.jsx)(d.a,{path:"/",component:we})]})})}n(38);var Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(u.a,{children:Object(o.jsx)(xe,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todo","/service-worker.js");Ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ie(t,e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.b72cd5ed.chunk.js.map