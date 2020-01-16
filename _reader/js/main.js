/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_reader/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/_reader/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../core__front-end/v2/shared/js/utils/Append2Head.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/shared/js/utils/Append2Head.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"../../../../../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match */ \"../../../../../node_modules/core-js/modules/es.string.match.js\");\n/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n/*\n\tClass used to attach FILE or a SCRIPT to the head of HTML\n\t---------------------------------------------------------\n\tFirst parameter can be:\n\t\t- `script`\n\t\t- `style`\n\n\tSecond parameter can be:\n\t\t- Link to a file that starts with `http://`, `https://`, `//` or `/`\n\t\t- Inline script, JS or CSS\n\n\n\tExample usage\n\t-------------\n\t// Attaching a file\n\t```js\n\timport Append2Head from 'Core/utils/Append2Head';\n\tvar file = '/_analytics/stats.js';\n\tvar a2h = new Append2Head('script', file);\n\n\ta2h.run();\n\t```\n\n\t// Attaching a script\n\t```js\n\timport Append2Head from 'Core/utils/Append2Head';\n\tvar code = `\n\t\tconsole.log('this is dummy JS');\n\t`;\n\tvar a2h = new Append2Head('script', code);\n\t```\n*/\n\n\n\n\n\n\nvar Append2Head =\n/*#__PURE__*/\nfunction () {\n  function Append2Head(elemType, content) {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Append2Head);\n\n    this._elemType = elemType;\n    this._content = content;\n    this._attachment = '';\n    this._urlPattern = /(^http:\\/\\/)|(^http[s\\u017F]:\\/\\/)|(^\\/\\/)|(^\\/)/gmi;\n  } // Getters and setters\n\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Append2Head, [{\n    key: \"isLink\",\n    // Functions\n    value: function isLink() {\n      if (this._content.match(this._urlPattern)) {\n        return true;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"run\",\n    value: function run() {\n      if (this.isLink()) {\n        // This is a link\n        if (this._elemType === 'script') {\n          this._attachment = document.createElement('script');\n          this._attachment.src = this._content;\n          this._attachment.type = 'text/javascript';\n        } else if (this._elemType === 'style') {\n          this._attachment = document.createElement('link');\n          this._attachment.href = this._content;\n          this._attachment.type = 'text/css';\n          this._attachment.rel = 'stylesheet';\n        }\n      } else {\n        // This is a script\n        if (this._elemType === 'script') {\n          this._attachment = document.createElement(this._elemType);\n          this._attachment.type = 'text/javascript';\n          this._attachment.innerHTML = this._content;\n        } else if (this._elemType === 'style') {\n          this._attachment = document.createElement(this._elemType);\n          this._attachment.type = 'text/css';\n\n          if (this._attachment.styleSheet) {\n            this._attachment.styleSheet.cssText = this._content;\n          } else {\n            this._attachment.appendChild(document.createTextNode(this._content));\n          }\n        }\n      } // Attach content to head\n\n\n      (document.head || document.getElementsByTagName('head')[0]).appendChild(this._attachment);\n    }\n  }, {\n    key: \"elemType\",\n    get: function get() {\n      return this._elemType;\n    },\n    set: function set(value) {\n      this._elemType = value;\n    }\n  }, {\n    key: \"content\",\n    get: function get() {\n      return this._content;\n    },\n    set: function set(value) {\n      this._content = value;\n    }\n  }]);\n\n  return Append2Head;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Append2Head);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/shared/js/utils/Append2Head.js?");

/***/ }),

/***/ "../../../../../core__front-end/v2/shared/js/utils/FindThemeDir.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/shared/js/utils/FindThemeDir.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"../../../../../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\n\n\n\nvar FindThemeDir =\n/*#__PURE__*/\nfunction () {\n  function FindThemeDir(elem) {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, FindThemeDir);\n\n    this._elem = elem; // Finds path + _document + version number, starting with `v` + any digit\n\n    this._pattern = /^((?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])*?)_document\\/v[0-9]*/gmi;\n  } // Getters and Setters\n\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(FindThemeDir, [{\n    key: \"documentUrl\",\n    // Functions\n    value: function documentUrl() {\n      return this._pattern.exec(this._elem)[0];\n    }\n  }, {\n    key: \"themeUrl\",\n    value: function themeUrl() {\n      return this._pattern.exec(this._elem)[1];\n    }\n  }, {\n    key: \"elem\",\n    get: function get() {\n      return this._elem;\n    },\n    set: function set(value) {\n      this._elem = value;\n    }\n  }]);\n\n  return FindThemeDir;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FindThemeDir);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/shared/js/utils/FindThemeDir.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!**********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _classCallCheck; });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _createClass; });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/advance-string-index.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/advance-string-index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"../../../../../node_modules/core-js/internals/string-multibyte.js\").charAt;\n\n// `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? charAt(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/advance-string-index.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/an-object.js":
/*!********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/an-object.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/array-includes.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-includes.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"../../../../../node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/classof-raw.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/classof-raw.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/copy-constructor-properties.js":
/*!**************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"../../../../../node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../../../../node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!*****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../../../node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/create-property-descriptor.js":
/*!*************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/create-property-descriptor.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/descriptors.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/descriptors.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/document-create-element.js":
/*!**********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/document-create-element.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/enum-bug-keys.js":
/*!************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/enum-bug-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/export.js":
/*!*****************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/export.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../../../../node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../../../node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../../../../../node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"../../../../../node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"../../../../../node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/fails.js":
/*!****************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/fails.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!*********************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../../../node_modules/core-js/internals/redefine.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"../../../../../node_modules/core-js/internals/regexp-exec.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\n// Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n// Weex JS has frozen built-in prototypes, so use try / catch wrapper\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';\n});\n\nmodule.exports = function (KEY, length, exec, sham) {\n  var SYMBOL = wellKnownSymbol(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n\n    if (KEY === 'split') {\n      // We can't use real regex here since it causes deoptimization\n      // and serious performance degradation in V8\n      // https://github.com/zloirock/core-js/issues/306\n      re = {};\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n      re.flags = '';\n      re[SYMBOL] = /./[SYMBOL];\n    }\n\n    re.exec = function () { execCalled = true; return null; };\n\n    re[SYMBOL]('');\n    return !execCalled;\n  });\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {\n      if (regexp.exec === regexpExec) {\n        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n          // The native String method already delegates to @@method (this\n          // polyfilled function), leasing to infinite recursion.\n          // We avoid it by directly calling the native @@method method.\n          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n        }\n        return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n      }\n      return { done: false };\n    });\n    var stringMethod = methods[0];\n    var regexMethod = methods[1];\n\n    redefine(String.prototype, KEY, stringMethod);\n    redefine(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return regexMethod.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return regexMethod.call(string, this); }\n    );\n    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);\n  }\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/get-built-in.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/get-built-in.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"../../../../../node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/global.js":
/*!*****************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/global.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"../../../../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/has.js":
/*!**************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/has.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/hidden-keys.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/hidden-keys.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/ie8-dom-define.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/ie8-dom-define.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"../../../../../node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/indexed-object.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/indexed-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../../../../node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/inspect-source.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/inspect-source.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"../../../../../node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/internal-state.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/internal-state.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"../../../../../node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../../../node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../../../node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/is-forced.js":
/*!********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/is-forced.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/is-object.js":
/*!********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/is-object.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/is-pure.js":
/*!******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/is-pure.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/native-symbol.js":
/*!************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/native-symbol.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/native-weak-map.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/native-weak-map.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"../../../../../node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/object-define-property.js":
/*!*********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-define-property.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"../../../../../node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../../../node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*********************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"../../../../../node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../../../node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../../../node_modules/core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"../../../../../node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/object-get-own-property-names.js":
/*!****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"../../../../../node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../../../../../node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!******************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/object-keys-internal.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-keys-internal.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"../../../../../node_modules/core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../../../node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/own-keys.js":
/*!*******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/own-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../../../node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"../../../../../node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"../../../../../node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/path.js":
/*!***************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/path.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/redefine.js":
/*!*******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/redefine.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../../../../../node_modules/core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"../../../../../node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../../../node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/regexp-exec-abstract.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./classof-raw */ \"../../../../../node_modules/core-js/internals/classof-raw.js\");\nvar regexpExec = __webpack_require__(/*! ./regexp-exec */ \"../../../../../node_modules/core-js/internals/regexp-exec.js\");\n\n// `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n\n  if (classof(R) !== 'RegExp') {\n    throw TypeError('RegExp#exec called on incompatible receiver');\n  }\n\n  return regexpExec.call(R, S);\n};\n\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/regexp-exec-abstract.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/regexp-exec.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/regexp-exec.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar regexpFlags = __webpack_require__(/*! ./regexp-flags */ \"../../../../../node_modules/core-js/internals/regexp-flags.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/;\n  var re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1.lastIndex !== 0 || re2.lastIndex !== 0;\n})();\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;\n\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/regexp-exec.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/regexp-flags.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/regexp-flags.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\n\n// `RegExp.prototype.flags` getter implementation\n// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.dotAll) result += 's';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/regexp-flags.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/require-object-coercible.js":
/*!***********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/require-object-coercible.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/set-global.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/set-global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/shared-key.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/shared-key.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"../../../../../node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../../../../node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/shared-store.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/shared-store.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../../../../../node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/shared.js":
/*!*****************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/shared.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../../../node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"../../../../../node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.5.0',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/string-multibyte.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/string-multibyte.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../../../node_modules/core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/string-multibyte.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/to-absolute-index.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-absolute-index.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../../../node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/to-indexed-object.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-indexed-object.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../../../../../node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/to-integer.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-integer.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/to-length.js":
/*!********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-length.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../../../node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/to-primitive.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-primitive.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/uid.js":
/*!**************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/uid.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../../../../../node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  // eslint-disable-next-line no-undef\n  && !Symbol.sham\n  // eslint-disable-next-line no-undef\n  && typeof Symbol() == 'symbol';\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/well-known-symbol.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/well-known-symbol.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"../../../../../node_modules/core-js/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../../../../node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../../../../../node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"../../../../../node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];\n    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.regexp.exec.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.regexp.exec.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar exec = __webpack_require__(/*! ../internals/regexp-exec */ \"../../../../../node_modules/core-js/internals/regexp-exec.js\");\n\n$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {\n  exec: exec\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.regexp.exec.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.string.match.js":
/*!************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.match.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"../../../../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js/internals/to-length.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js/internals/require-object-coercible.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"../../../../../node_modules/core-js/internals/advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"../../../../../node_modules/core-js/internals/regexp-exec-abstract.js\");\n\n// @@match logic\nfixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = requireObjectCoercible(this);\n      var matcher = regexp == undefined ? undefined : regexp[MATCH];\n      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match\n    function (regexp) {\n      var res = maybeCallNative(nativeMatch, regexp, this);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n\n      if (!rx.global) return regExpExec(rx, S);\n\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = String(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.match.js?");

/***/ }),

/***/ "../../../../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/_reader/js/main.js":
/*!********************************!*\
  !*** ./src/_reader/js/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Shared_utils_Append2Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/utils/Append2Head */ \"../../../../../core__front-end/v2/shared/js/utils/Append2Head.js\");\n/* harmony import */ var Shared_utils_FindThemeDir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/utils/FindThemeDir */ \"../../../../../core__front-end/v2/shared/js/utils/FindThemeDir.js\");\n // Reader Lite entry file\n// -----------------------------------------------------------------------------\n// This file is used to load latest version of reader lite from `_document`\n// directory and to attach analytics for the current domain. Correct analytics\n// file will be proxied by nginx server\n// Import utilities\n\n\n // Function 1 - ATTACH READER LITE\n// -----------------------------------------------------------------------------\n// Find location of `readerLite.js` and attach it to HEAD\n\nvar cssFile = document.querySelector('head link[rel=\"stylesheet\"]').getAttribute('href');\nvar docUrl = new Shared_utils_FindThemeDir__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cssFile).documentUrl();\nvar readerLiteJs = docUrl + '/js/readerLite.js';\nvar appendReaderLite = new Shared_utils_Append2Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('script', readerLiteJs);\nappendReaderLite.run(); // Function 2 - ATTACH ANALYTICS\n// -----------------------------------------------------------------------------\n// Attach analytics code to the HEAD of the document\n// Example of attaching code. Write code in template literal style.\n\n/*\n\tvar code = `\n\t\tconsole.log('this is dummy JS')\n\t`\n\tvar a2h = new Append2Head('script', code)\n*/\n// Attaching a file\n\nvar file = '/_analytics/stats.js';\nvar a2h = new Shared_utils_Append2Head__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('script', file);\na2h.run();\n\n//# sourceURL=webpack:///./src/_reader/js/main.js?");

/***/ })

/******/ });