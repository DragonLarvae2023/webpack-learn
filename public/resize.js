/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
const para = document.createElement("p");
const arr = document.querySelector("body").appendChild(para);

let timer;
function resizeWindow(e) {
  clearTimeout(timer);
   timer = setTimeout(
    function (){
      const width = window.innerWidth;
      const height = window.innerHeight;
      console.log(width, height);
      para.innerHTML = `width:${width} height:${height}`;
    },
    100
  );
}
window.addEventListener("resize", resizeWindow);

/******/ })()
;