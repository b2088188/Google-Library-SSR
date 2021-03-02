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

/***/ "./client/App.js":
/*!***********************!*\
  !*** ./client/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./client/components/Header.js\");\n/* harmony import */ var _design_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./design/GlobalStyle */ \"./client/design/GlobalStyle.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n //import { fetchCurrentUser } from './actions';\n// The route contains collection of components that we need to render\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_design_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, null), (0,react_router_config__WEBPACK_IMPORTED_MODULE_3__.renderRoutes)(route.routes)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: App\n});\n\n//# sourceURL=webpack://react-ssr/./client/App.js?");

/***/ }),

/***/ "./client/Routes.js":
/*!**************************!*\
  !*** ./client/Routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App */ \"./client/App.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Home */ \"./client/pages/Home.js\");\n/* harmony import */ var _pages_search_SearchResults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/search/SearchResults */ \"./client/pages/search/SearchResults.js\");\n/* harmony import */ var _pages_book_BookInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/book/BookInfo */ \"./client/pages/book/BookInfo.js\");\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default())) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default())) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }\n\n\n\n\n\nvar Routes = [_objectSpread(_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_9__.default), {}, {\n  routes: [_objectSpread(_objectSpread({}, _pages_Home__WEBPACK_IMPORTED_MODULE_10__.default), {}, {\n    path: '/',\n    exact: true\n  }), _objectSpread(_objectSpread({}, _pages_search_SearchResults__WEBPACK_IMPORTED_MODULE_11__.default), {}, {\n    path: '/results'\n  }), _objectSpread(_objectSpread({}, _pages_book_BookInfo__WEBPACK_IMPORTED_MODULE_12__.default), {}, {\n    path: '/book/:bookId'\n  })]\n})];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);\n\n//# sourceURL=webpack://react-ssr/./client/Routes.js?");

/***/ }),

/***/ "./client/components/Header.js":
/*!*************************************!*\
  !*** ./client/components/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n\n\n\n\nvar _StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"header\").withConfig({\n  displayName: \"Header___StyledHeader\",\n  componentId: \"nz4mdl-0\"\n})([\"height:10rem;display:flex;position:relative;\"]);\n\nvar _StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"form\").withConfig({\n  displayName: \"Header___StyledForm\",\n  componentId: \"nz4mdl-1\"\n})([\"margin-left:30rem;margin-top:2.5rem;width:50%;display:flex;\"]);\n\nvar _StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"input\").withConfig({\n  displayName: \"Header___StyledInput\",\n  componentId: \"nz4mdl-2\"\n})([\"padding:0 2rem;height:5rem;width:30rem;display:inline-block;border:none;border-radius:3rem 0 0 3rem;font-size:1.7rem;font-weight:600;font-family:inherit;line-height:1.7;color:inherit;&:focus{outline:none;}&::-moz-placeholder{color:$color-grey-dark-2;}&:-ms-input-placeholder{color:$color-grey-dark-2;}&::placeholder{color:$color-grey-dark-2;}\"]);\n\nvar _StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"button\").withConfig({\n  displayName: \"Header___StyledButton\",\n  componentId: \"nz4mdl-3\"\n})([\"background-image:linear-gradient( to right,var(--color-tiffany-default),var(--color-sky-blue) );color:var(--color-white);padding:1rem;transform:translateX(-7rem);display:inline-block;width:20rem;height:5rem;border:none;border-radius:3rem;transition:all 0.3s;&:hover{box-shadow:0 1rem 1.5rem rgba(var(--color-black),0.2);}span{font-size:2rem;font-weight:200;}\"]);\n\nvar _StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"nav\").withConfig({\n  displayName: \"Header___StyledNav\",\n  componentId: \"nz4mdl-4\"\n})([\"-ms-grid-row-align:stretch;align-self:stretch;\"]);\n\nvar _StyledUl = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"ul\").withConfig({\n  displayName: \"Header___StyledUl\",\n  componentId: \"nz4mdl-5\"\n})([\"list-style:none;display:flex;height:100%;\"]);\n\nvar Header = function Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledForm, {\n    onSubmit: function onSubmit() {\n      return console.log('submit');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledInput, {\n    type: \"text\",\n    placeholder: \"Please Search a Book Name\",\n    name: \"searchfield\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, \"Search\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledNav, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledUl, null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://react-ssr/./client/components/Header.js?");

/***/ }),

/***/ "./client/components/Message.js":
/*!**************************************!*\
  !*** ./client/components/Message.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nvar _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"div\").withConfig({\n  displayName: \"Message___StyledDiv\",\n  componentId: \"sc-1ylm4xb-0\"\n})([\"max-width:50rem;margin:0 auto;padding:5rem 4rem;display:flex;\"]);\n\nvar _StyledP = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"p\").withConfig({\n  displayName: \"Message___StyledP\",\n  componentId: \"sc-1ylm4xb-1\"\n})([\"margin-left:1.5rem;font-size:1.8rem;line-height:1.5;font-weight:600;\"]);\n\nvar Message = function Message(_ref) {\n  var text = _ref.text,\n      icon = _ref.icon;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledDiv, null, icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledP, null, text));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);\n\n//# sourceURL=webpack://react-ssr/./client/components/Message.js?");

/***/ }),

/***/ "./client/design/GlobalStyle.js":
/*!**************************************!*\
  !*** ./client/design/GlobalStyle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/taggedTemplateLiteral */ \"@babel/runtime-corejs3/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _templateObject;\n\n\nvar GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(_templateObject || (_templateObject = _babel_runtime_corejs3_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n:root {\\n  --color-primary: #55c57a;\\n  --color-primary-light: #7ed56f;\\n  --color-primary-dark: #28b485;\\n  --color-grey-light-1: #f7f7f7;\\n  --color-grey-light-2: #eee;\\n  --color-grey-dark: #777;\\n  --color-grey-dark-2: #ddd;\\n  --color-grey-dark-3: #333;\\n  --color-white: #fff;\\n  --color-black: #000;\\n  --color-secondary-light: #ffb900;\\n  --color-secondary-dark: #ff7730;\\n  --color-tertiary-light: #2998ff;\\n  --color-tertiary-dark: #5643fa;\\n  --color-tiffany-default: #0abab5;\\n  --color-sky-blue: #99ccff;\\n}\\n\\t*,\\n*::before,\\n*::after{\\n    margin: 0;\\n    padding: 0;\\n    list-style: none;\\n    box-sizing: inherit;\\n}\\n\\nhtml{\\n    font-size: 62.5%;\\n}\\nbody{\\n    box-sizing: border-box;      \\n    background-image: linear-gradient(\\n    to right bottom,\\n    #0abab5,\\n    #5643fa\\n  );\\n   background-size: cover;\\n   min-height: 100vh;\\n     font-family:'Lato',sans-serif;\\n    font-weight: 400;\\n    line-height: 1.7;\\n    color:var(--color-grey-dark);\\n}\\n\\n.container{\\n    max-width:120rem;\\n    min-height: 50rem;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--color-grey-light-2);\\n    margin: 0 auto;\\n    margin-top: 8rem;\\n    border-radius:.3rem;\\n}\\n\\n\\n.row{\\n   display: flex;\\n   height: 100%;\\n}\\n\"])));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);\n\n//# sourceURL=webpack://react-ssr/./client/design/GlobalStyle.js?");

/***/ }),

/***/ "./client/pages/Home.js":
/*!******************************!*\
  !*** ./client/pages/Home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Message */ \"./client/components/Message.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Please begin your search journey~\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: Home\n});\n\n//# sourceURL=webpack://react-ssr/./client/pages/Home.js?");

/***/ }),

/***/ "./client/pages/book/BookInfo.js":
/*!***************************************!*\
  !*** ./client/pages/book/BookInfo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"div\").withConfig({\n  displayName: \"BookInfo___StyledDiv\",\n  componentId: \"sc-1njenuq-0\"\n})([\"height:100%;display:flex;flex-wrap:wrap;background-color:var(--color-grey-light-1);\"]);\n\nvar _StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"div\").withConfig({\n  displayName: \"BookInfo___StyledDiv2\",\n  componentId: \"sc-1njenuq-1\"\n})([\"margin:1.5rem 5rem;perspective:150rem;-moz-perspective:150rem;height:52rem;width:40rem;position:relative;\"]);\n\nvar _StyledDiv3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"div\").withConfig({\n  displayName: \"BookInfo___StyledDiv3\",\n  componentId: \"sc-1njenuq-2\"\n})([\"position:absolute;top:0;left:0;height:52rem;width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:0.3rem;box-shadow:0 1.5rem 4rem rgba($color-black,0.15);transition:all 0.8s ease;\"]);\n\nvar _StyledFigure = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"figure\").withConfig({\n  displayName: \"BookInfo___StyledFigure\",\n  componentId: \"sc-1njenuq-3\"\n})([\"height:100%;width:100%;\"]);\n\nvar _StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"img\").withConfig({\n  displayName: \"BookInfo___StyledImg\",\n  componentId: \"sc-1njenuq-4\"\n})([\"transform:translate(-4rem,-1.5rem);width:100%;height:100%;\"]);\n\nvar _StyledDiv4 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"div\").withConfig({\n  displayName: \"BookInfo___StyledDiv4\",\n  componentId: \"sc-1njenuq-5\"\n})([\"width:50rem;position:relative;margin-top:1.5rem;margin-left:5rem;text-align:center;\"]);\n\nvar _StyledH = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"h1\").withConfig({\n  displayName: \"BookInfo___StyledH\",\n  componentId: \"sc-1njenuq-6\"\n})([\"margin:0 auto;width:37rem;text-align:center;color:var(--color-white);padding:0 2rem;font-size:3rem;background-image:linear-gradient( to right,var(--color-tiffany-default),var(--color-sky-blue) );transform:skewX(-13deg);margin-bottom:2.5rem;\"]);\n\nvar _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"span\").withConfig({\n  displayName: \"BookInfo___StyledSpan\",\n  componentId: \"sc-1njenuq-7\"\n})([\"transform:skewX(13deg);\"]);\n\nvar _StyledSpan2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"span\").withConfig({\n  displayName: \"BookInfo___StyledSpan2\",\n  componentId: \"sc-1njenuq-8\"\n})([\"font-size:2.5rem;\"]);\n\nvar _StyledH2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"h2\").withConfig({\n  displayName: \"BookInfo___StyledH2\",\n  componentId: \"sc-1njenuq-9\"\n})([\"font-size:3rem;background-image:linear-gradient( to right,var(--color-tiffany-default),var(--color-sky-blue) );color:transparent;-webkit-background-clip:text;background-clip:text;\"]);\n\nvar _StyledSpan3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"span\").withConfig({\n  displayName: \"BookInfo___StyledSpan3\",\n  componentId: \"sc-1njenuq-10\"\n})([\"font-size:2.5rem;\"]);\n\nvar _StyledH3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"h2\").withConfig({\n  displayName: \"BookInfo___StyledH3\",\n  componentId: \"sc-1njenuq-11\"\n})([\"font-size:3rem;background-image:linear-gradient( to right,var(--color-tiffany-default),var(--color-sky-blue) );color:transparent;-webkit-background-clip:text;background-clip:text;\"]);\n\nvar _StyledSpan4 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"span\").withConfig({\n  displayName: \"BookInfo___StyledSpan4\",\n  componentId: \"sc-1njenuq-12\"\n})([\"font-size:2.5rem;\"]);\n\nvar _StyledH4 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"h2\").withConfig({\n  displayName: \"BookInfo___StyledH4\",\n  componentId: \"sc-1njenuq-13\"\n})([\"font-size:3rem;background-image:linear-gradient( to right,var(--color-tiffany-default),var(--color-sky-blue) );color:transparent;-webkit-background-clip:text;background-clip:text;\"]);\n\nvar _StyledSpan5 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"span\").withConfig({\n  displayName: \"BookInfo___StyledSpan5\",\n  componentId: \"sc-1njenuq-14\"\n})([\"font-size:2.5rem;\"]);\n\nvar _StyledH5 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"h2\").withConfig({\n  displayName: \"BookInfo___StyledH5\",\n  componentId: \"sc-1njenuq-15\"\n})([\"font-size:3rem;background-image:linear-gradient( to right,var(--color-tiffany-default),var(--color-sky-blue) );color:transparent;-webkit-background-clip:text;background-clip:text;\"]);\n\nvar _StyledDiv5 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"div\").withConfig({\n  displayName: \"BookInfo___StyledDiv5\",\n  componentId: \"sc-1njenuq-16\"\n})([\"margin:0 auto;transform:translate(1rem,5rem);width:75rem;height:70rem;\"]);\n\nvar _StyledH6 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"h1\").withConfig({\n  displayName: \"BookInfo___StyledH6\",\n  componentId: \"sc-1njenuq-17\"\n})([\"margin:0 auto;width:37rem;text-align:center;color:var(--color-white);padding:0 2rem;font-size:3rem;background-image:linear-gradient( to right,var(--color-tiffany-default),var(--color-sky-blue) );transform:skewX(-13deg);margin-bottom:2.5rem;\"]);\n\nvar _StyledSpan6 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"span\").withConfig({\n  displayName: \"BookInfo___StyledSpan6\",\n  componentId: \"sc-1njenuq-18\"\n})([\"transform:skewX(13deg);\"]);\n\nvar BookInfo = function BookInfo() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/\"\n  }, \"Back\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledDiv2, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledDiv3, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledFigure, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledImg, {\n    src: \"https://books.google.com/books/content/images/frontcover/DKcWE3WXoj8C?fife=w600-h500\",\n    alt: \"Image Test\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledDiv4, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledH, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledSpan, null, \"Harry Potter and International Relations\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledSpan2, null, \"Author\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledH2, null, \"Daniel H. NexonIver B. Neumann\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledSpan3, null, \"\\u2605Rating\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledH3, null, \"3.5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledSpan4, null, \"Publisher\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledH4, null, \"Rowman & Littlefield\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledSpan5, null, \"Publisher Date\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledH5, null, \"Unknown\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledDiv5, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledH6, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledSpan6, null, \"Description\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, \"Why not take seriously the claim that Harry Potter's world intertwines with our own?\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: BookInfo\n});\n\n//# sourceURL=webpack://react-ssr/./client/pages/book/BookInfo.js?");

/***/ }),

/***/ "./client/pages/search/SearchResults.js":
/*!**********************************************!*\
  !*** ./client/pages/search/SearchResults.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"div\").withConfig({\n  displayName: \"SearchResults___StyledDiv\",\n  componentId: \"sc-1tylv96-0\"\n})([\"background-color:var(--color-white);height:auto;position:relative;\"]);\n\nvar _StyledLi = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"li\").withConfig({\n  displayName: \"SearchResults___StyledLi\",\n  componentId: \"sc-1tylv96-1\"\n})([\"border:solid 0.1rem rgba(30,30,30,0.3);border-radius:0.3rem;margin:0 auto;width:80%;height:16rem;position:relative;\"]);\n\nvar _StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link).withConfig({\n  displayName: \"SearchResults___StyledLink\",\n  componentId: \"sc-1tylv96-2\"\n})([\"text-decoration:none;display:flex;height:100%;background-image:linear-gradient( 120deg,transparent 0%,transparent 50%,var(--color-sky-blue) 50% );background-size:250%;transition:all 0.7s;&:hover,&:active{background-position:100%;}&--active{background-color:var(--color-sky-blue);}\"]);\n\nvar _StyledFigure = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"figure\").withConfig({\n  displayName: \"SearchResults___StyledFigure\",\n  componentId: \"sc-1tylv96-3\"\n})([\"height:100%;width:20%;background-color:var(--color-grey-light-2);transform:translateY(-1.5rem);-webkit-clip-path:circle(45% at 50% 50%);clip-path:circle(45% at 50% 50%);position:relative;\"]);\n\nvar _StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"img\").withConfig({\n  displayName: \"SearchResults___StyledImg\",\n  componentId: \"sc-1tylv96-4\"\n})([\"width:50%;height:80%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);\"]);\n\nvar _StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"div\").withConfig({\n  displayName: \"SearchResults___StyledDiv2\",\n  componentId: \"sc-1tylv96-5\"\n})([\"width:70%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;\"]);\n\nvar _StyledH = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"h4\").withConfig({\n  displayName: \"SearchResults___StyledH\",\n  componentId: \"sc-1tylv96-6\"\n})([\"margin-top:2rem;color:var(--color-tiffany-default);font-size:1.7rem;\"]);\n\nvar _StyledP = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"p\").withConfig({\n  displayName: \"SearchResults___StyledP\",\n  componentId: \"sc-1tylv96-7\"\n})([\"color:var(--color-grey-dark);font-size:1.5rem;letter-spacing:0.1rem;\"]);\n\nvar SearchResults = function SearchResults() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"ul\", {\n    className: \"results\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledLi, {\n    key: 123\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledLink, {\n    to: \"/result/123\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledFigure, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledImg, {\n    src: \"http://books.google.com/books/content?id=DwACAAAAQAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api\",\n    alt: \"Image Test\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledDiv2, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledH, null, \"Harry Blount\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_StyledP, null, \"Philip Gilbert Hamerton\"))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: SearchResults\n});\n\n//# sourceURL=webpack://react-ssr/./client/pages/search/SearchResults.js?");

/***/ }),

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/renderer */ \"./server/utils/renderer.js\");\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static('public'));\napp.get('*', function (req, res) {\n  var content = (0,_utils_renderer__WEBPACK_IMPORTED_MODULE_1__.default)(req);\n  res.status(200).send(content);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://react-ssr/./server/app.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./server/app.js\");\n\n_app__WEBPACK_IMPORTED_MODULE_0__.default.listen(3000, function () {\n  console.log('Listening on port 3000');\n});\n\n//# sourceURL=webpack://react-ssr/./server/server.js?");

/***/ }),

/***/ "./server/utils/renderer.js":
/*!**********************************!*\
  !*** ./server/utils/renderer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"@babel/runtime-corejs3/core-js-stable/instance/concat\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client/Routes */ \"./client/Routes.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_design_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client/design/GlobalStyle */ \"./client/design/GlobalStyle.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n //import { Provider } from 'react-redux';\n//import serialize from 'serialize-javascript';\n\nfunction renderer(req) {\n  var _context;\n\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_7__.ServerStyleSheet();\n  var template = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n    location: req.path,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_7__.StyleSheetManager, {\n    sheet: sheet.instance\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_client_design_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.renderRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_4__.default))))));\n  var styleTags = sheet.getStyleTags();\n  sheet.seal();\n  return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = \"<html>\\n\\t<head>\\t\\n\\t<link href=\\\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900\\\" rel=\\\"stylesheet\\\">\\n\\t</head>\\n\\t\".concat(styleTags, \"\\n\\t<body>\\n\\t\\t<div id = 'root'>\")).call(_context, template, \"</div>\\n\\t\\t<script src = 'bundle.js'>\\n\\t\\t</script>\\n\\t\\t<script src=\\\"https://unpkg.com/styled-components/dist/styled-components.min.js\\\"></script>\\n\\t</body> \\n\\t</html>\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);\n\n//# sourceURL=webpack://react-ssr/./server/utils/renderer.js?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/concat":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/concat" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/concat");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/filter":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/filter" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/filter");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/for-each":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/for-each" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-properties":
/*!*********************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-properties" ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-property":
/*!*******************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-property" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/define-property");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor":
/*!*******************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor" ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors":
/*!********************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors" ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols":
/*!****************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols" ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/keys":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/keys" ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/keys");;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/defineProperty":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/defineProperty" ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/helpers/defineProperty");;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/taggedTemplateLiteral":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/taggedTemplateLiteral" ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral");;

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	
/******/ })()
;