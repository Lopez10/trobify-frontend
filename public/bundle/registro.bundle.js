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

/***/ "./src/components/usuarios/registro.ts":
/*!*********************************************!*\
  !*** ./src/components/usuarios/registro.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Registro = void 0;\nclass Registro {\n    constructor() {\n        this.obtenerParametrosRegistro();\n    }\n    obtenerParametrosRegistro() {\n        let loginForm = document.querySelector('#formSignUp') || document.createElement('form');\n        loginForm.onsubmit = () => {\n            const formData = new FormData(loginForm);\n            let name = formData.get('name');\n            let lastname = formData.get('lastName');\n            let mayor = formData.get('adult');\n            let mail = formData.get('email');\n            let repeatMail = formData.get('repeatMail');\n            let phone = formData.get('phone');\n            let password = formData.get('password');\n            let repeatPassword = formData.get('repeatPassword');\n            let role = formData.get('role');\n            console.log(mayor);\n            console.log(mail, repeatMail);\n            console.log(password, repeatPassword);\n            if (mail == repeatMail && password == repeatPassword && mayor == '1') {\n                let usuario = {\n                    nombre: name,\n                    apellidos: lastname,\n                    mail: mail,\n                    telefono: phone,\n                    contrasena: password,\n                    id_rol: role,\n                };\n                console.log(usuario);\n            }\n            return false;\n        };\n    }\n}\nexports.Registro = Registro;\nlet registro = new Registro();\n\n\n//# sourceURL=webpack://trobify-frontend/./src/components/usuarios/registro.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/components/usuarios/registro.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;