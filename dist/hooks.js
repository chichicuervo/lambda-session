!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.hooks=r():(e["@jbelich"]=e["@jbelich"]||{},e["@jbelich"]["lambda-session"]=e["@jbelich"]["lambda-session"]||{},e["@jbelich"]["lambda-session"].hooks=r())}(global,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=11)}([function(e,r){e.exports=require("jsonwebtoken")},function(e,r){e.exports=require("react")},function(e,r,t){"use strict";t.d(r,"d",(function(){return a}));var n=t(0),o=t.n(n);function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],0<=r.indexOf(t)||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(0<=r.indexOf(t))&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r,t=1;t<arguments.length;t++)r=null==arguments[t]?{}:arguments[t],t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,"c",(function(){return n.TokenExpiredError})),t.d(r,"a",(function(){return n.JsonWebTokenError})),t.d(r,"b",(function(){return n.NotBeforeError}));class a{constructor(e,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};this.private=e,this.public=r,this.options=t||{}}sign(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=s({},this.options,{},r);return o.a.sign(e,this.private,t)}verify(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},{verify:t,validator:n}=r,{verify:u,validator:c}=(i(r,["verify","validator"]),this.options);t=u&&s({},u,{},t)||t,n=n||c;var a=o.a.verify(e,this.public,t);if(n){if(!(n instanceof Function))throw new Error("Invalid Payload Validator Function");if(!n(a))throw new Error("Invalid Payload")}return a}refresh(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},{jwtid:t}=r,n=i(r,["jwtid"]),u=this.verify(e,n);return delete u.iat,delete u.exp,delete u.nbf,delete u.jti,o.a.sign(u,this.private,t&&s({},this.options,{jwtid:t})||this.options)}}r.e=a},function(e,r,t){"use strict";var n=t(2);t.d(r,"a",(function(){return n.a})),t.d(r,"b",(function(){return n.b})),t.d(r,"c",(function(){return n.c})),t.d(r,"d",(function(){return n.d}))},function(e,r){e.exports=require("react-use")},function(e,r){e.exports=require("core-js/modules/es.array.iterator")},function(e,r){e.exports=require("core-js/modules/web.dom-collections.iterator")},,,function(e,r){e.exports=require("core-js/modules/es.string.split")},function(e,r){e.exports=require("core-js/modules/es.string.starts-with")},function(e,r,t){"use strict";t.r(r);t(5),t(6);var n=t(1),o=t.n(n),i=t(4),u=function(e,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=3<arguments.length?arguments[3]:void 0,[u,s]=Object(i.useSessionStorage)(e,t,o);return Object(n.useReducer)((e,t)=>(e=r(e,t),s(e),e),u)},s=u;function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r,t=1;t<arguments.length;t++)r=null==arguments[t]?{}:arguments[t],t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],0<=r.indexOf(t)||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(0<=r.indexOf(t))&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=Object(n.createContext)(),d={isInitialized:!1},b=e=>({error:!0,errorDetails:e}),O=()=>({}),y=e=>{var{useStorage:r=!0,keyName:t="session-data",initialState:i={},children:u}=e,c=f(e,["useStorage","keyName","initialState","children"]),l=(e=>{var{authenticate:r=O,invalidate:t=O,error:n=b}=e;f(e,["authenticate","invalidate","error"]);return(e,o)=>{try{switch(o.type){case"INITIALIZE":return a({},e,{isInitialized:!0});case"AUTHENTICATE":return a({},e,{isAuthenticated:!0},r(o.payload));case"INVALIDATE":return a({},e,{isAuthenticated:!1},t(o.payload));case"ERROR":return a({},e,{},n(o.payload));case"TERMINATE":return d;default:return e}}catch(e){return console.log(e),a({},d,{},b(e))}}})(c),[y,v]=r?s(t,l,i):Object(n.useReducer)(l,i);return o.a.createElement(p.Provider,{value:a({state:y,dispatch:v},c)},u)},v=()=>{var e=Object(n.useContext)(p),{dispatch:r,state:{isInitialized:t}}=e;return t||r({type:"INITIALIZE"}),e},j=()=>{var{dispatch:e}=Object(n.useContext)(p);e({type:"TERMINATE"})};t(9),t(10);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function w(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],0<=r.indexOf(t)||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(0<=r.indexOf(t))&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m="Bearer ";class P{constructor(e){var{logger:r=console.log,debug:t}=e,n=w(e,["logger","debug"]);this.props=function(e){for(var r,t=1;t<arguments.length;t++)r=null==arguments[t]?{}:arguments[t],t%2?g(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}({},n,{debug:t||!1,log:r||console.log})}get inject(){var{request:e,requestBearer:r,token:t}=this.props;return()=>({[e]:"".concat(r&&m).concat(t)})}get authenticate(){var{response:e,responseBearer:r,token:t,setToken:n,log:o,debug:i}=this.props;return u=>{var{headers:s}=u;if(!s.get)throw new Error("Invalid response object. missing headers.get");var c=s.get(e);if(r){if(!c.startsWith(m))throw new Error("Invalid session header.  Bearer required");c=c.split(" ")[1]}if(!c||!c.length)throw new Error("Invalid session header.");return i&&o("Session Token:",c),n(c),{token:t}}}get invalidate(){return()=>({token:void 0})}}var E=function(){var{token:e,sessionName:r="session-token",requestBearer:t=!0,request:n="Authorization",responseBearer:o=!1,response:u="X-Session-Token"}=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},[s,c]=Object(i.useSessionStorage)(r,e),a=new P({token:s,setToken:c,requestBearer:t,request:n,responseBearer:o,response:u});return{token:s,inject:a.inject,authenticate:a.authenticate,invalidate:a.invalidate}},S=t(3);t.d(r,"SessionProvider",(function(){return y})),t.d(r,"useSessionContext",(function(){return v})),t.d(r,"closeSessionContext",(function(){return j})),t.d(r,"useHeaderSession",(function(){return E})),t.d(r,"useStoredReducer",(function(){return u})),t.d(r,"TokenExpiredError",(function(){return S.c})),t.d(r,"JsonWebTokenError",(function(){return S.a})),t.d(r,"NotBeforeError",(function(){return S.b})),t.d(r,"WebTokenHandler",(function(){return S.d}))}])}));