!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(1),a=n.n(o);(function(){var t=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;if(t>e)document.querySelector("#navvy").style.top="0";else{var n=document.querySelector("#navvy").getBoundingClientRect().height;document.querySelector("#navvy").style.top="-".concat(n)}t=e}})();var c,u=0,l="Travel corp!";!function t(){//! duration of effect
u<l.length&&(document.querySelector("#name").innerHTML+=l.charAt(u),u++),setTimeout(t,100)}(),c=!0,setInterval((function(){c?(document.getElementById("cursor").style.opacity=0,c=!1):(document.getElementById("cursor").style.opacity=.5,c=!0)}),650),//! init on DOMLoad
document.addEventListener("DOMContentLoaded",(//! our function
function(){var t=document.querySelector(".txt-type"),e=JSON.parse(t.getAttribute("data-words")),n=t.getAttribute("data-wait");new s(t,e,n)}));var s=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3;i()(this,t),this.txtElement=e,this.words=n,this.txt="",this.wordIndex=0,this.wait=parseInt(r,10),this.type(),this.isDeleting=!1}return a()(t,[{key:"type",value:function(){var t=this,e=this.wordIndex%this.words.length,n=this.words[e];this.isDeleting?this.txt=n.substring(0,this.txt.length-1):this.txt=n.substring(0,this.txt.length+1),this.txtElement.innerHTML='<span class="txt">'.concat(this.txt,"</span>");var r=100;this.isDeleting&&(r/=2),this.isDeleting||this.txt!==n?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,r=500):(r=this.wait,this.isDeleting=!0),setTimeout((function(){return t.type()}),r)}}]),t}();!function(t){for(var e=document.querySelector(".gallery"),n=function(n){fetch("https://picsum.photos/600/480").then((function(t){var n=document.createElement("div");n.classList.add("fetched-div"),n.innerHTML='<img class="gallery-image" src="'.concat(t.url,'" alt="gallery image" />'),e.appendChild(n)})).then((function(){n==t-1&&$(".loading-fullpage").fadeOut(1e3)})).catch((function(t){console.error(t);var n=document.createElement("div");n.classList.add("fetched-div");n.innerHTML='<img class="gallery-image" src='.concat("../img/default.jpg",' alt="gallery image" />'),e.appendChild(n)})).then((function(){n==t-1&&$(".loading-fullpage").fadeOut(100)}))},r=0;r<t;r++)n(r)}(8),document.addEventListener("DOMContentLoaded",(function(){var t=this;document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(t.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))}))}]);