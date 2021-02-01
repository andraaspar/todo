(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r,o=n(1),a=n(0),l=n.n(a),i=n(20),c=n.n(i),u=n(9),d=n(2);!function(e){e.NEW="NEW",e.DONE="DONE",e.FAILED="FAILED"}(r||(r={}));var s=[r.NEW,r.DONE,r.FAILED],f=n(11),v=n(21),p=n(13),b=n(40),O="TodoStore",h=new p.a(function(){var e=j();try{var t=JSON.parse(localStorage.getItem(O));t&&t.todoOrder.length&&(e=t)}catch(n){console.error(n)}return e}());h.subscribe((function(e){return e}),(function(e,t,n){m()}));var m=Object(v.throttle)((function(){try{localStorage.setItem(O,JSON.stringify(h.getRawState()))}catch(e){console.error(e),alert(e)}}),600);function j(){var e=Object(b.a)();return{todosById:Object(f.a)({},e,{id:e,name:"",state:r.NEW}),todoOrder:[e]}}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=a.createElement("path",{fillRule:"evenodd",d:"M4.646 7.646a.5.5 0 01.708 0L8 10.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z",clipRule:"evenodd"}),x=a.createElement("path",{fillRule:"evenodd",d:"M8 4.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z",clipRule:"evenodd"});function E(e,t){var n=e.title,r=e.titleId,o=y(e,["title","titleId"]);return a.createElement("svg",g({className:"bi bi-arrow-down-short",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,w,x)}var I=a.forwardRef(E);n.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var R=a.createElement("path",{fillRule:"evenodd",d:"M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z",clipRule:"evenodd"}),B=a.createElement("path",{fillRule:"evenodd",d:"M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z",clipRule:"evenodd"});function N(e,t){var n=e.title,r=e.titleId,o=k(e,["title","titleId"]);return a.createElement("svg",S({className:"bi bi-arrow-left-short",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,R,B)}var A=a.forwardRef(N);n.p;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var D=a.createElement("path",{fillRule:"evenodd",d:"M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z",clipRule:"evenodd"}),C=a.createElement("path",{fillRule:"evenodd",d:"M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z",clipRule:"evenodd"});function z(e,t){var n=e.title,r=e.titleId,o=P(e,["title","titleId"]);return a.createElement("svg",M({className:"bi bi-arrow-right-short",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,D,C)}var L=a.forwardRef(z);n.p;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var V=a.createElement("path",{fillRule:"evenodd",d:"M11 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z",clipRule:"evenodd"}),F=a.createElement("path",{fillRule:"evenodd",d:"M10.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L11 3.707 8.354 6.354a.5.5 0 11-.708-.708l3-3zm-9 7a.5.5 0 01.708 0L5 12.293l2.646-2.647a.5.5 0 11.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z",clipRule:"evenodd"}),H=a.createElement("path",{fillRule:"evenodd",d:"M5 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z",clipRule:"evenodd"});function U(e,t){var n=e.title,r=e.titleId,o=W(e,["title","titleId"]);return a.createElement("svg",T({className:"bi bi-arrow-up-down",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,V,F,H)}var q=a.forwardRef(U);n.p;n.p;function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var K=a.createElement("path",{fillRule:"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"});function $(e,t){var n=e.title,r=e.titleId,o=_(e,["title","titleId"]);return a.createElement("svg",J({width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-check-circle-fill",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,K)}var G=a.forwardRef($);n.p;n.p;function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Y=a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z",clipRule:"evenodd"});function Z(e,t){var n=e.title,r=e.titleId,o=X(e,["title","titleId"]);return a.createElement("svg",Q({className:"bi bi-circle",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,Y)}var ee=a.forwardRef(Z);n.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var re=a.createElement("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),oe=a.createElement("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"});function ae(e,t){var n=e.title,r=e.titleId,o=ne(e,["title","titleId"]);return a.createElement("svg",te({width:16,height:16,fill:"currentColor",className:"bi bi-clipboard",viewBox:"0 0 16 16",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,re,oe)}var le=a.forwardRef(ae);n.p;n.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ue=a.createElement("path",{d:"M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"}),de=a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z",clipRule:"evenodd"});function se(e,t){var n=e.title,r=e.titleId,o=ce(e,["title","titleId"]);return a.createElement("svg",ie({className:"bi bi-trash",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,ue,de)}var fe=a.forwardRef(se);n.p;function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var be=a.createElement("path",{fillRule:"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"});function Oe(e,t){var n=e.title,r=e.titleId,o=pe(e,["title","titleId"]);return a.createElement("svg",ve({width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-x-circle-fill",fill:"currentColor",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,be)}var he=a.forwardRef(Oe);n.p;function me(e){switch(e){case r.NEW:return ee;case r.DONE:return G;case r.FAILED:return he}}function je(e){return Object(o.jsx)("i",{className:"to-icon",children:Object(a.createElement)(e.icon)})}function ge(e){var t=h.useState((function(t){return t.todosById[e.id]})),n=Object(d.f)();return Object(o.jsx)("button",{className:"to-todo__delete",type:"button",onClick:function(t){h.update((function(t,o){if(1===t.todoOrder.length){var a=t.todosById[e.id];a.name="",a.state=r.NEW,n.goBack()}else delete t.todosById[e.id],t.todoOrder=o.todoOrder.filter((function(t){return t!==e.id}))}))},children:Object(o.jsxs)("div",{className:"to-todo--name",children:[Object(o.jsx)(je,{icon:fe})," ",Object(o.jsx)(je,{icon:me(t.state)})," ",t.name]})})}function ye(e){var t=Object(d.f)(),n=h.useState((function(e){return e.todoOrder}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"to-title",children:"Delete TODOs"}),Object(o.jsxs)("div",{className:"to-buttons",children:[Object(o.jsx)("button",{type:"button",onClick:function(){t.goBack()},children:Object(o.jsx)(je,{icon:A})}),Object(o.jsxs)("button",{type:"button",onClick:function(){h.update((function(e,t){e.todoOrder=t.todoOrder.filter((function(n){return t.todosById[n].state!==r.DONE||(delete e.todosById[n],!1)}))})),we(),t.goBack()},children:["Delete done ",Object(o.jsx)(je,{icon:G})]}),Object(o.jsxs)("button",{type:"button",onClick:function(){h.update((function(e,t){e.todoOrder=t.todoOrder.filter((function(n){return t.todosById[n].state!==r.FAILED||(delete e.todosById[n],!1)}))})),we(),t.goBack()},children:["Delete failed ",Object(o.jsx)(je,{icon:he})]}),Object(o.jsx)("button",{type:"button",onClick:function(){h.update((function(e){return j()})),t.goBack()},children:"Delete all"})]}),n.map((function(e){return Object(o.jsx)(ge,{id:e},e)}))]})}function we(){0===h.getRawState().todoOrder.length&&h.update((function(e){return j()}))}var xe=new p.a({reorderId:null});function Ee(e){var t=h.useState((function(t){return t.todosById[e.id]})),n=xe.useState((function(e){return e.reorderId}));return Object(o.jsx)("button",{className:"to-todo__reorder",type:"button",onClick:function(t){null==n?xe.update((function(t){t.reorderId=e.id})):(h.update((function(t,r){var o=r.todoOrder.indexOf(n),a=r.todoOrder.indexOf(e.id)+1;a>o&&a--,t.todoOrder.splice(o,1),t.todoOrder.splice(a,0,n)})),xe.update((function(e){e.reorderId=null})))},children:Object(o.jsxs)("div",{className:"to-todo--name",children:[Object(o.jsx)(je,{icon:null==n?L:I})," ",Object(o.jsx)(je,{icon:me(t.state)})," ",t.name]})})}function Ie(e){var t=h.useState((function(e){return e.todoOrder})),n=xe.useState((function(e){return e.reorderId})),r=Object(d.f)();return Object(a.useEffect)((function(){return function(){xe.update((function(e){e.reorderId=null}))}}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"to-title",children:"Reorder TODOs"}),Object(o.jsx)("div",{className:"to-buttons",children:Object(o.jsx)("button",{type:"button",onClick:function(){r.goBack()},children:Object(o.jsx)(je,{icon:A})})}),t.filter((function(e){return e!==n})).map((function(e){return Object(o.jsx)(Ee,{id:e},e)}))]})}function Se(e){var t=Object(a.useRef)(!1),n=Object(a.useRef)(!1),l=h.useState((function(t){return t.todosById[e.id]}));return Object(o.jsxs)("form",{className:"to-todo",onSubmit:function(t){t.preventDefault();var n=document.activeElement;if(n instanceof HTMLInputElement&&n.classList.contains("to-todo--name")){var o,a,l,i,c=n.value.slice(0,Math.min(null!==(o=n.selectionStart)&&void 0!==o?o:0,null!==(a=n.selectionEnd)&&void 0!==a?a:n.value.length)),u=n.value.slice(Math.max(null!==(l=n.selectionStart)&&void 0!==l?l:0,null!==(i=n.selectionEnd)&&void 0!==i?i:n.value.length),n.value.length),d=n.id.replace(/^input-/,""),s=Object(b.a)();h.update((function(t){t.todosById[d].name=c,t.todosById[s]={id:s,name:u,state:r.NEW},t.todoOrder.splice(e.index+1,0,s)})),requestAnimationFrame((function(){var e=document.getElementById("input-".concat(s));e instanceof HTMLInputElement&&(e.focus(),e.setSelectionRange(0,0))}))}},children:[Object(o.jsx)("button",{type:"button",onClick:function(t){h.update((function(t){var n=t.todosById[e.id],r=(s.indexOf(n.state)+1)%s.length;n.state=s[r]}))},children:Object(o.jsx)(je,{icon:me(l.state)})}),Object(o.jsx)("input",{id:"input-".concat(l.id),className:"to-todo--name",value:l.name,autoComplete:"off",onChange:function(t){h.update((function(n){n.todosById[e.id].name=t.currentTarget.value}))},onBeforeInput:function(t){var n=t.nativeEvent.data;if("string"===typeof n&&n.length>1&&/\n|\r/.test(n)){t.preventDefault();var o=n.split(/[\r\n]+/g),a=void 0;h.update((function(n){var l,i,c,u,d=n.todosById[e.id],s=Math.min(null!==(l=t.currentTarget.selectionStart)&&void 0!==l?l:0,null!==(i=t.currentTarget.selectionEnd)&&void 0!==i?i:0),f=Math.max(null!==(c=t.currentTarget.selectionStart)&&void 0!==c?c:d.name.length,null!==(u=t.currentTarget.selectionEnd)&&void 0!==u?u:d.name.length),v=d.name.slice(f);d.name=d.name.slice(0,s)+o[0];for(var p=1;p<o.length;p++){var O=p+1===o.length?o[p]+v:o[p];a=o[p].length;var h=e.index+p,m=Object(b.a)();n.todoOrder.splice(h,0,m),n.todosById[m]={id:m,name:O,state:r.NEW}}})),requestAnimationFrame((function(){requestAnimationFrame((function(){ke(e.index+o.length-1,a,a)}))}))}},onKeyDown:function(e){var r,o;if(t.current=""===e.currentTarget.value,"Backspace"===e.key)n.current=0===Math.max(null!==(r=e.currentTarget.selectionStart)&&void 0!==r?r:0,null!==(o=e.currentTarget.selectionEnd)&&void 0!==o?o:e.currentTarget.value.length),n.current&&e.preventDefault();else if("Delete"===e.key){var a,l;n.current=Math.min(null!==(a=e.currentTarget.selectionStart)&&void 0!==a?a:0,null!==(l=e.currentTarget.selectionEnd)&&void 0!==l?l:e.currentTarget.value.length)===e.currentTarget.value.length,n.current&&e.preventDefault()}else("ArrowUp"===e.key||"ArrowDown"===e.key)&&e.preventDefault()},onKeyUp:function(t){if("Backspace"===t.key){if(n.current){var r=void 0;h.update((function(t,n){var o=n.todoOrder.indexOf(l.id);if(o>0){var a=t.todosById[t.todoOrder[o-1]];r=a.name.length,a.name+=l.name,delete t.todosById[l.id],t.todoOrder.splice(e.index,1)}})),requestAnimationFrame((function(){ke(e.index-1,r,r)}))}}else if("Delete"===t.key){if(n.current){var o=void 0;h.update((function(e,t){var n=t.todoOrder.indexOf(l.id);if(n<t.todoOrder.length-1){var r=e.todosById[e.todoOrder[n+1]];o=l.name.length,e.todosById[l.id].name+=r.name,delete e.todosById[r.id],e.todoOrder.splice(n+1,1)}})),requestAnimationFrame((function(){ke(e.index,o,o)}))}}else if("ArrowUp"===t.key){var a;t.preventDefault();var i=null!==(a=t.currentTarget.selectionStart)&&void 0!==a?a:0;ke(e.index-1,i,i)}else if("ArrowDown"===t.key){var c;t.preventDefault();var u=null!==(c=t.currentTarget.selectionEnd)&&void 0!==c?c:t.currentTarget.value.length;ke(e.index+1,u,u)}}})]})}function ke(e,t,n){var r=h.getRawState().todoOrder[e];if(null!=r){var o=document.getElementById("input-".concat(r));o instanceof HTMLInputElement&&(o.focus(),null!=t&&null!=n&&o.setSelectionRange(t,n))}}function Re(e){var t=h.useState((function(e){return e.todoOrder})),n=Object(d.f)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"to-buttons",children:[Object(o.jsx)("button",{type:"button",onClick:function(){n.push("/delete")},children:Object(o.jsx)(je,{icon:fe})}),Object(o.jsx)("button",{type:"button",onClick:function(){n.push("/reorder")},children:Object(o.jsx)(je,{icon:q})}),Object(o.jsx)("button",{type:"button",onClick:function(){var e=h.getRawState();navigator.clipboard.writeText(e.todoOrder.map((function(t){return e.todosById[t].name})).join("\n"))},children:Object(o.jsx)(je,{icon:le})}),Object(o.jsx)("button",{type:"button",style:{marginLeft:"auto"},onClick:function(){h.update((function(e,t){for(var n=0,o=Object.values(e.todosById);n<o.length;n++){o[n].state=r.NEW}}))},children:"Reset all"})]}),t.map((function(e,t){return Object(o.jsx)(Se,{id:e,index:t},e)}))]})}function Be(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{path:"/delete",component:ye}),Object(o.jsx)(d.a,{path:"/reorder",component:Ie}),Object(o.jsx)(d.a,{path:"/",component:Re})]})})}n(38);var Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(u.a,{children:Object(o.jsx)(Be,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todo","/service-worker.js");Ne?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ae(t,e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.08d8fd08.chunk.js.map