/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/inmueble/hipoteca/hipoteca.ts":
/*!******************************************************!*\
  !*** ./src/components/inmueble/hipoteca/hipoteca.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Hipoteca = void 0;\nconst construccionDOM = __webpack_require__(/*! ../../../../public/js/hipoteca.js */ \"./public/js/hipoteca.js\");\nclass Hipoteca {\n    constructor() {\n        this.precio = this.obtenerPrecio() || 0;\n        console.log(this.precio);\n    }\n    calculoAhorro(precio, ahorro) {\n        return precio - ahorro;\n    }\n    calculoInteres(interes, variable, ahorro) {\n        let interesFijo = 1.75;\n        let valorInteres;\n        if (interes == 'fijo') {\n            valorInteres = (interesFijo * ahorro) / 100;\n        }\n        else {\n            valorInteres = (variable * ahorro) / 100;\n        }\n        return valorInteres;\n    }\n    calculoCondicion(condicion) {\n        return condicion == 'segundaMano' ? 0.995 : 1.0005;\n    }\n    calculoTotal(valorInteres, valorAhorro, anos, condicion) {\n        return (valorAhorro += valorInteres * anos) * condicion;\n    }\n    calculoCuotaMensual(valorTotal, anos) {\n        return valorTotal / (anos * 12);\n    }\n    obtenerPrecio() {\n        let queryString = window.location.search;\n        let urlParams = new URLSearchParams(queryString);\n        let precio = urlParams.get('precio');\n        if (precio)\n            return +precio;\n    }\n}\nexports.Hipoteca = Hipoteca;\nlet hipoteca = new Hipoteca();\nconstruccionDOM.hipotecaDom(hipoteca);\n\n\n//# sourceURL=webpack://trobify-frontend/./src/components/inmueble/hipoteca/hipoteca.ts?");

/***/ }),

/***/ "./public/js/hipoteca.js":
/*!*******************************!*\
  !*** ./public/js/hipoteca.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hipotecaDom\": () => (/* binding */ hipotecaDom)\n/* harmony export */ });\nfunction hipotecaDom(hipoteca) {\n\tlet hipotecaForm = document.querySelector('#formularioHipoteca');\n\tdocument.getElementById('precio').value = hipoteca.precio;\n\n\thipotecaForm.onsubmit = () => {\n\t\tconst formData = new FormData(hipotecaForm);\n\n\t\tlet condicionHipoteca = formData.get('condicion');\n\t\tlet precio = formData.get('precio');\n\t\tlet ahorro = formData.get('ahorro');\n\t\tlet plazo = formData.get('plazo');\n\t\tlet valorVariable = formData.get('valorVariable');\n\t\tlet interes = formData.get('interes');\n\n\t\tlet valorCondicionHipoteca = hipoteca.calculoCondicion(condicionHipoteca);\n\t\tlet calculoAhorro = hipoteca.calculoAhorro(+precio, ahorro);\n\t\tlet calculoInteres = hipoteca.calculoInteres(interes, valorVariable, calculoAhorro);\n\t\tlet total = hipoteca.calculoTotal(\n\t\t\tcalculoInteres,\n\t\t\tcalculoAhorro,\n\t\t\tplazo,\n\t\t\t+valorCondicionHipoteca\n\t\t);\n\t\tlet cuotaMensual = hipoteca.calculoCuotaMensual(total, plazo);\n\t\tconsole.log(interes, total, cuotaMensual);\n\t\tlet totalDom = document.getElementById('total');\n\t\ttotal = Math.round(total);\n\t\tif (totalDom != null) totalDom.textContent = total.toString();\n\t\tlet cuotaMensualDom = document.getElementById('cuotaMensual');\n\t\tcuotaMensual = Math.round(cuotaMensual);\n\t\tif (cuotaMensualDom != null) cuotaMensualDom.textContent = cuotaMensual.toString();\n\t\treturn false;\n\t};\n}\n\n\n//# sourceURL=webpack://trobify-frontend/./public/js/hipoteca.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/inmueble/hipoteca/hipoteca.ts");
/******/ 	
/******/ })()
;