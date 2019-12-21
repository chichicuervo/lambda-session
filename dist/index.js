!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.index=r():(e["@jbelich"]=e["@jbelich"]||{},e["@jbelich"]["lambda-session"]=e["@jbelich"]["lambda-session"]||{},e["@jbelich"]["lambda-session"].index=r())}(global,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=12)}([function(e,r){e.exports=require("jsonwebtoken")},,function(e,r,t){"use strict";t.d(r,"d",(function(){return c}));var n=t(0),o=t.n(n);function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],0<=r.indexOf(t)||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(0<=r.indexOf(t))&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r,t=1;t<arguments.length;t++)r=null==arguments[t]?{}:arguments[t],t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,"c",(function(){return n.TokenExpiredError})),t.d(r,"a",(function(){return n.JsonWebTokenError})),t.d(r,"b",(function(){return n.NotBeforeError}));class c{constructor(e,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};this.private=e,this.public=r,this.options=t||{}}sign(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=u({},this.options,{},r);return o.a.sign(e,this.private,t)}verify(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},{verify:t,validator:n}=r,{verify:a,validator:s}=(i(r,["verify","validator"]),this.options);t=a&&u({},a,{},t)||t,n=n||s;var c=o.a.verify(e,this.public,t);if(n){if(!(n instanceof Function))throw new Error("Invalid Payload Validator Function");if(!n(c))throw new Error("Invalid Payload")}return c}refresh(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},{jwtid:t}=r,n=i(r,["jwtid"]),a=this.verify(e,n);return delete a.iat,delete a.exp,delete a.nbf,delete a.jti,o.a.sign(a,this.private,t&&u({},this.options,{jwtid:t})||this.options)}}r.e=c},function(e,r,t){"use strict";var n=t(2);t.d(r,"a",(function(){return n.a})),t.d(r,"b",(function(){return n.b})),t.d(r,"c",(function(){return n.c})),t.d(r,"d",(function(){return n.d}))},,,,function(e,r){e.exports=require("@jbelich/lambda-api")},function(e,r){e.exports=require("core-js/modules/es.promise")},,,,function(e,r,t){"use strict";t.r(r);t(8);var n=t(7),o=t(2);function i(e,r,t,n,o,i,a){try{var u=e[i](a),s=u.value}catch(e){return void t(e)}u.done?r(s):Promise.resolve(s).then(n,o)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],0<=r.indexOf(t)||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(0<=r.indexOf(t))&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r,t=1;t<arguments.length;t++)r=null==arguments[t]?{}:arguments[t],t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var l="X-Session-Token";class f extends n.ApiMiddleware{constructor(e,r,t){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};return super(e,r,t,s({noHandle:!0},n)),Object.defineProperty(e,n.payloadName||"session",{get:()=>{var r=this.payload;return e.log.debug("getPayload",r),r},set:r=>{e.log.debug("setPayload",r),this.payload=r},enumerable:!0}),this.handler}get generator(){var e=this.log,r=this.options,{secret:t,publicKey:n,privateKey:i}=r,u=a(r,["secret","publicKey","privateKey"]);return this.set("generator",()=>(e.trace("Session:generator"),new o.e(t||i,t||n,s({algorithm:"HS256",expiresIn:"12h"},u))))}get authToken(){var e=this.log,r=this.request;this.response;return this.set("authToken",()=>{e.trace("Session:authToken");var{type:t,value:n}=r.auth;if(e.debug("Session:authToken",{type:t,value:n}),"Bearer"===t&&n&&"undefined"!==n)return n})}set header(e){var{header:r}=this.options;this.log.debug("Session:setHeader",{header:r||l,token:e}),this.response.header(r||l,e)}get payload(){var e=this.log;return this.set("payload",()=>{e.trace("Session:payload");try{var r=this.authToken;if(r){var t=this.generator.verify(r),{iat:n,exp:o,nbf:i,jti:u}=t,s=a(t,["iat","exp","nbf","jti"]);return e.info("Session:payload/value",s),s}e.debug("Session:payload/NoPayload")}catch(e){switch(e.name){case"TokenExpiredError":case"NotBeforeError":return{error:e};default:throw e}}})}set payload(e){var r=this.generator.sign(e);r&&(this.header=r,this.store.set("payload",e))}resolve(){var e=this;return function(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){function a(e){i(s,n,o,a,u,"next",e)}function u(e){i(s,n,o,a,u,"throw",e)}var s=e.apply(r,t);a(void 0)}))}}((function*(){e.log.trace("Session:resolve");try{if(!e.authToken)throw new Error("Invalid Authorization token");var r=e.generator.refresh(e.authToken);r&&(e.header=r)}catch(r){e.log.debug("Session:resolve/Auth Error",r),e.payload={}}}))()}}var d=f,p=t(3);t.d(r,"Session",(function(){return f})),t.d(r,"TokenExpiredError",(function(){return p.c})),t.d(r,"JsonWebTokenError",(function(){return p.a})),t.d(r,"NotBeforeError",(function(){return p.b})),t.d(r,"WebTokenHandler",(function(){return p.d}));r.default=d}])}));