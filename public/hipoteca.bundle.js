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

/***/ "./src/inmueble/hipoteca/dom.hipoteca.ts":
/*!***********************************************!*\
  !*** ./src/inmueble/hipoteca/dom.hipoteca.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.hipotecaDom = void 0;\nconst hipoteca_1 = __webpack_require__(/*! ./hipoteca */ \"./src/inmueble/hipoteca/hipoteca.ts\");\nfunction hipotecaDom() {\n    let hipotecaForm = document.querySelector('#formularioHipoteca') || document.createElement('form');\n    let localizacion = 'Valencia';\n    hipotecaForm.onsubmit = () => {\n        const formData = new FormData(hipotecaForm);\n        let condicionHipoteca = formData.get('condicion');\n        let precio = formData.get('precio');\n        let ahorro = formData.get('ahorro');\n        let plazo = formData.get('plazo');\n        let valorVariable = formData.get('valorVariable');\n        let interes = formData.get('interes');\n        console.log(condicionHipoteca, precio, ahorro, plazo, interes);\n        let hipoteca = new hipoteca_1.Hipoteca(precio, localizacion);\n        let valorCondicionHipoteca = hipoteca.calculoCondicion(condicionHipoteca);\n        let calculoAhorro = hipoteca.calculoAhorro(ahorro);\n        let calculoInteres = hipoteca.calculoInteres(interes, valorVariable, calculoAhorro);\n        let total = hipoteca.calculoTotal(calculoInteres, calculoAhorro, plazo);\n        let cuotaMensual = hipoteca.calculoCuotaMensual(total, plazo);\n        console.log(total, hipoteca.calculoCuotaMensual(total, plazo));\n        let totalDom = document.getElementById('total');\n        total = Math.round(total);\n        if (totalDom != null)\n            totalDom.textContent = total.toString();\n        let cuotaMensualDom = document.getElementById('cuotaMensual');\n        cuotaMensual = Math.round(cuotaMensual);\n        if (cuotaMensualDom != null)\n            cuotaMensualDom.textContent = cuotaMensual.toString();\n        return false;\n    };\n}\nexports.hipotecaDom = hipotecaDom;\n\n\n//# sourceURL=webpack://trobify-frontend/./src/inmueble/hipoteca/dom.hipoteca.ts?");

/***/ }),

/***/ "./src/inmueble/hipoteca/hipoteca.ts":
/*!*******************************************!*\
  !*** ./src/inmueble/hipoteca/hipoteca.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Hipoteca = void 0;\nclass Hipoteca {\n    constructor(precio, localizacion) {\n        this.precio = precio;\n        this.localizacion = localizacion;\n    }\n    calculoAhorro(ahorro) {\n        return this.precio - ahorro;\n    }\n    calculoInteres(interes, variable, ahorro) {\n        let interesFijo = 1.75;\n        let valorInteres;\n        if (interes == 'fijo') {\n            valorInteres = (interesFijo * ahorro) / 100;\n        }\n        else {\n            valorInteres = (variable * ahorro) / 100;\n        }\n        return valorInteres;\n    }\n    calculoCondicion(condicion) {\n        if (condicion == 'segundaMano') {\n            this.precio = this.precio * 0.995;\n        }\n        else {\n            this.precio = this.precio * 1.0005;\n        }\n    }\n    calculoTotal(valorInteres, valorAhorro, anos) {\n        return (valorAhorro += valorInteres * anos);\n    }\n    calculoCuotaMensual(valorTotal, anos) {\n        return valorTotal / (anos * 12);\n    }\n}\nexports.Hipoteca = Hipoteca;\n\n\n//# sourceURL=webpack://trobify-frontend/./src/inmueble/hipoteca/hipoteca.ts?");

/***/ }),

/***/ "./src/inmueble/hipoteca/index.hipoteca.ts":
/*!*************************************************!*\
  !*** ./src/inmueble/hipoteca/index.hipoteca.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst dom_hipoteca_1 = __webpack_require__(/*! ./dom.hipoteca */ \"./src/inmueble/hipoteca/dom.hipoteca.ts\");\ndom_hipoteca_1.hipotecaDom();\n\n\n//# sourceURL=webpack://trobify-frontend/./src/inmueble/hipoteca/index.hipoteca.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/inmueble/hipoteca/index.hipoteca.ts");
/******/ 	
/******/ })()
;