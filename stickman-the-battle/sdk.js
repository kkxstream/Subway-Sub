!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o=new(function(){function e(){this.gameFrame=null}return e.prototype.init=function(e){this.gameFrame=this.getGameframe(),"1.0.0"!==e.version?this.gameFrame.init(e):this.initLegacy(e)},e.prototype.requestAd=function(e){this.gameFrame?this.gameFrame.requestAd(e):console.error("[CrazySDK Legacy] call init first")},e.prototype.getGameframe=function(){var e=window.Crazygames;if(!e)throw new Error("[CrazySDK Legacy] gameframe not found?");return e},e.prototype.initLegacy=function(e){if(!this.gameFrame)throw new Error("[CrazySDK Legacy] gameframe not found?");this.gameFrame.init(n({},e,{sdkType:"unity5.6"}))},e}());window.CrazySDK=o}]);