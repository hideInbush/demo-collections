!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){e.exports=n(1)(1)},function(e,t){e.exports=_dll_react},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=r(n(0)),o=r(n(4));n(5);var a=r(n(6));o.default.render(i.default.createElement(a.default,null),document.getElementById("react-content"))},function(e,t,n){e.exports=n(1)(35)},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(r=o)&&r.__esModule?r:{default:r};n(7);var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={works:[{id:1,text:"Splash Transition",imgSrc:"splashTransition.gif",link:"https://hideinbush.github.io/demo-collections/src/views/copycat/splashTransition/index.html"},{id:2,text:"Slice Revealer",imgSrc:"sliceRevealer.gif",link:"https://hideinbush.github.io/demo-collections/src/views/copycat/sliceRevealer/index.html"},{id:3,text:"Ripple",imgSrc:"ripple.gif",link:"https://hideinbush.github.io/demo-collections/src/views/copycat/ripple/index.html"}]},e.onWorkItemClick=e.onWorkItemClick.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),i(t,[{key:"onWorkItemClick",value:function(e){var t=e.target.getAttribute("data-link");t&&window.open(t)}},{key:"render",value:function(){var e=this.state.works;return a.default.createElement("div",{className:"landingPage"},a.default.createElement("div",{role:"none",className:"workContainer",onClick:this.onWorkItemClick},e.map(function(e){return a.default.createElement("div",{className:"work-item",key:e.id,"data-link":e.link,title:e.text},a.default.createElement("img",{src:n(8)("./"+e.imgSrc)}),a.default.createElement("span",null,e.text))})))}}]),t}();t.default=l},function(e,t){},function(e,t,n){function r(e){return n(i(e))}function i(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./ripple.gif":9,"./sliceRevealer.gif":10,"./splashTransition.gif":11};r.keys=function(){return Object.keys(o)},r.resolve=i,(e.exports=r).id=8},function(e,t){e.exports="./assets/image/image/ripple.gif"},function(e,t){e.exports="./assets/image/image/sliceRevealer.gif"},function(e,t){e.exports="./assets/image/image/splashTransition.gif"}]);