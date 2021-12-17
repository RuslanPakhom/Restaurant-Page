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

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Contact{\n    constructor(page){\n        this.page = page\n    }\n\n    render(){\n        const section = document.createElement('section')\n        section.classList.add(\"contact\")\n        const h2 = document.createElement(\"h2\");\n        h2.textContent = \"OUR ADDRESS:\"\n        const cafeName = document.createElement(\"p\")\n        cafeName.textContent = \"PROCAFFÉ SPA CAFFÈ BRISTOT CAFE\"\n\n        const addr = document.createElement(\"p\")\n        addr.textContent = \"Italy, Bergamo, Miranchuk A. street 59\"\n\n        const tel = document.createElement(\"p\")\n        tel.textContent = \"Call us: +39 (1234) 999111\"\n\n        const txt = document.createElement(\"p\")\n        txt.textContent = \"We are glad to see you!\"\n\n        const img = document.createElement('img')\n        img.src = \"/images/map.png\"\n        img.alt = \"Map\"\n\n        section.appendChild(h2)\n        section.appendChild(cafeName)\n        section.appendChild(addr)\n        section.appendChild(tel)\n        section.appendChild(txt)\n        section.appendChild(img)\n\n        this.page.appendChild(section)\n\n\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n//# sourceURL=webpack://restaurant-page/./src/Contact.js?");

/***/ }),

/***/ "./src/Footer.js":
/*!***********************!*\
  !*** ./src/Footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Footer{\n    constructor(page){\n        this.page = page\n    }\n    render(){\n        const footer = document.createElement('footer')\n        const p_footer_1 = document.createElement('p')\n        p_footer_1.textContent = \"Procaffé cafe\"\n        const p_footer_2 = document.createElement('p')\n        p_footer_2.textContent = \"Bergamo, Miranchuk A. street 59\"\n        footer.appendChild(p_footer_1)\n        footer.appendChild(p_footer_2)\n        this.page.appendChild(footer)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://restaurant-page/./src/Footer.js?");

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Header{\n    constructor(page){\n        this.page = page\n        this.MENU = [\"home\", \"menu\", \"contact\"]\n    }\n    render(){\n        const header = document.createElement('header')\n        const logo = document.createElement('img')\n        logo.src = \"../images/logo.svg\"\n        logo.alt = \"Logo\"\n\n        const ul = document.createElement('ul');\n        ul.classList.add(\"menu\")\n\n        for(let i=0; i<this.MENU.length; i++){\n            const li = document.createElement('li')\n            li.id = this.MENU[i] + \"_page\"\n            const a = document.createElement('a')\n            a.href = \"#\"\n            a.textContent = this.MENU[i].toUpperCase()\n            li.classList.add('menu-item')\n            li.appendChild(a)\n            ul.appendChild(li)\n        }\n\n        header.appendChild(logo)\n        header.appendChild(ul)\n        this.page.appendChild(header)\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://restaurant-page/./src/Header.js?");

/***/ }),

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Main{\n    constructor(page){\n        this.page = page\n    }\n    render(){\n        const section = document.createElement('section')\n        section.classList.add(\"main\")\n\n        const h2 = document.createElement('h2')\n        h2.textContent = \"BRISTOT COFFEE\"\n        const p_top = document.createElement('p')\n        p_top.textContent = \"Born more than 100 years ago at the foot of the dolomites, we are a community united by a single passion: for coffee.\"\n        const img_coffee = document.createElement('img')\n        img_coffee.src = \"../images/coffee.png\"\n        img_coffee.alt = \"Coffee\"\n\n        const p_bottom = document.createElement('p')\n        p_bottom.textContent = \"We look for the perfect in every detail\"\n\n        section.appendChild(h2)\n        section.appendChild(p_top)\n        section.appendChild(img_coffee)\n        section.appendChild(p_bottom)       \n        this.page.appendChild(section)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n//# sourceURL=webpack://restaurant-page/./src/Main.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Menu{\n    constructor(page){\n        this.page = page;\n        this.coffee = []\n        this.coffee.push({name: \"Espresso\", link: \"/images/espresso.png\", price:\"0.99$\"})\n        this.coffee.push({name: \"Ristretto\", link: \"/images/ristretto.png\", price:\"1.49$\"})\n        this.coffee.push({name: \"Lungo\", link: \"/images/lungo.png\", price:\"1.99$\"})\n        this.coffee.push({name: \"Americano\", link: \"/images/americano.png\", price:\"0.99$\"})\n        this.coffee.push({name: \"Capuccino\", link: \"/images/cappucino.png\", price:\"0.79$\"})\n        this.coffee.push({name: \"Latte Machiatto\", link: \"/images/mochiatto.png\", price:\"1.99$\"})\n        this.coffee.push({name: \"Raf\", link: \"/images/raf.png\", price:\"1.49$\"})\n        this.coffee.push({name: \"Irish Coffee\", link: \"/images/irish.png\", price:\"1.99$\"})\n\n    }\n\n    render(){\n        const section = document.createElement(\"section\")\n        const coffe_menu = document.createElement(\"div\")\n        coffe_menu.classList.add(\"coffe-menu\");\n\n        for(let i=0; i<this.coffee.length; i++){\n            const item = document.createElement(\"div\")\n            item.classList.add(\"coffe-item\");\n            const p_name = document.createElement(\"p\")\n            const img = document.createElement(\"img\")\n            const p_price = document.createElement(\"p\")\n\n            p_name.textContent = this.coffee[i].name\n            img.src = this.coffee[i].link\n            img.alt = this.coffee[i].name\n            p_price.textContent = this.coffee[i].price\n\n            item.appendChild(p_name)\n            item.appendChild(img)\n            item.appendChild(p_price)\n\n            coffe_menu.appendChild(item)\n        }\n\n        section.appendChild(coffe_menu)\n        this.page.appendChild(section)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://restaurant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/Page.js":
/*!*********************!*\
  !*** ./src/Page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ \"./src/Main.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact */ \"./src/Contact.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ \"./src/Footer.js\");\n\n\n\n\n\n\n\nclass Page{\n    constructor(page){\n        this.page = page\n    }\n    render(module){\n\n        \n\n        const header = new _Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.page)\n        header.render()\n\n        this.handleEvents()\n\n        if(module === 'main'){\n             const main = new _Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.page)\n             main.render()\n        }\n\n        if(module === 'menu'){\n            const menu = new _Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.page)\n            menu.render()\n        }  \n        \n        if(module === 'contact'){\n            const contact = new _Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.page)\n            contact.render()\n        }   \n\n        const footer = new _Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.page)\n        footer.render()\n    }\n\n    handleEvents(){\n        const main = document.getElementById('home_page')\n        const menu = document.getElementById('menu_page')\n        const contact = document.getElementById('contact_page')\n\n        main.addEventListener('click', (e) => {     \n            e.preventDefault()\n            this.page.innerHTML = ''\n            this.render('main')\n        })\n\n        menu.addEventListener('click', (e) => {\n            e.preventDefault()\n            this.page.innerHTML = ''\n            this.render('menu')\n        })\n\n        contact.addEventListener('click', (e) => {\n            e.preventDefault()\n            this.page.innerHTML = ''\n            this.render('contact')\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n//# sourceURL=webpack://restaurant-page/./src/Page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ \"./src/Page.js\");\n\n\n(function(){\n    const content = document.getElementById('content')\n    const page = new _Page__WEBPACK_IMPORTED_MODULE_0__[\"default\"](content)\n    page.render('main')\n})()\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;