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
/******/ 	__webpack_require__.p = "\\us\\ngo\\oll\\_document\\v2\\js\\";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/_document/js/readerLite.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../core__front-end/v2/_document/js/components/feedback/Feedback.js":
/*!****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/components/feedback/Feedback.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"../../../../../node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n\n\n\n\n\n\nvar Feedback =\n/*#__PURE__*/\nfunction () {\n  function Feedback(namespace, el) {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Feedback);\n\n    this._nsPrefix = 'ns__document__';\n    this._ns = this._nsPrefix + namespace;\n    this._el = el;\n  } // Getters and setters\n  // -------------------\n  // Default\n\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Feedback, [{\n    key: \"template\",\n    // Functions\n    // ---------\n    // Component template\n    value: function template() {\n      this._template = \"\\n<section id=\\\"area__feedback\\\" class=\\\"\".concat(this._ns, \"\\\" role=\\\"region\\\" aria-label=\\\"Your Feedback\\\">\\n\\t<div class=\\\"feedback\\\">\\n\\t\\t<div class=\\\"feedback__buttons\\\">\\n\\t\\t\\t<a href=\\\"mailto:\").concat(this._emailReport, \"?subject=[ERROR]+/\\\" class=\\\"button button--outline\\\" role=\\\"button\\\">\\n\\t\\t\\t\\t<span class=\\\"text\\\">Report Error</span>\\n\\t\\t\\t</a>\\n\\t\\t\\t<a href=\\\"mailto:\").concat(this._emailFeedback, \"?subject=[FEEDBACK]+/\\\" class=\\\"button button--outline\\\" role=\\\"button\\\">\\n\\t\\t\\t\\t<span class=\\\"text\\\">Website Feedback</span>\\n\\t\\t\\t</a>\\n\\t\\t</div>\\n\\t\\t<p>We cannot respond to questions regarding the law.</p>\\n\\t</div>\\n</section>\\n\");\n      return this._template;\n    } // Insert template into DOM\n\n  }, {\n    key: \"run\",\n    value: function run() {\n      try {\n        var area = document.querySelector(this._el);\n        area.insertAdjacentHTML('beforeend', this.template());\n      } catch (error) {\n        console.log('Unable to attach Feedback widget: ', error);\n      }\n    }\n  }, {\n    key: \"namespace\",\n    get: function get() {\n      return this._namespace;\n    },\n    set: function set(value) {\n      this._namespace = value;\n    }\n  }, {\n    key: \"el\",\n    get: function get() {\n      return this._el;\n    },\n    set: function set(value) {\n      this._el = value;\n    } // Component specific getters and setters\n\n  }, {\n    key: \"emailReport\",\n    get: function get() {\n      return this._emailReport;\n    },\n    set: function set(value) {\n      this._emailReport = value;\n    }\n  }, {\n    key: \"emailFeedback\",\n    get: function get() {\n      return this._emailFeedback;\n    },\n    set: function set(value) {\n      this._emailFeedback = value;\n    }\n  }]);\n\n  return Feedback;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feedback);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/components/feedback/Feedback.js?");

/***/ }),

/***/ "../../../../../core__front-end/v2/_document/js/components/historical-versions/HistoricalVersions.js":
/*!*************************************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/components/historical-versions/HistoricalVersions.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"../../../../../node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"../../../../../node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes */ \"../../../../../node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"../../../../../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes */ \"../../../../../node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"../../../../../node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"../../../../../node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"../../../../../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar HistoricalVersions =\n/*#__PURE__*/\nfunction () {\n  function HistoricalVersions(namespace, el) {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, HistoricalVersions);\n\n    this._nsPrefix = 'ns__document__';\n    this._ns = this._nsPrefix + namespace;\n    this._el = el;\n    this._api = \"/_api/versions\".concat(window.location.pathname);\n    this._currentDate = '';\n    this._selected = {\n      'history': ''\n    };\n  } // Getters and setters\n  // -------------------\n\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(HistoricalVersions, [{\n    key: \"_filterApiCall\",\n    // Functions\n    // ---------\n    // Return correct path for API call\n    value: function _filterApiCall(apiCall) {\n      // Removes htm(l) extension from the end of the URL string\n      this._apiCallFiltered = apiCall.replace(/\\.htm(l)?$/gm, ''); // Removes `/_date/xxxx-xx-xx` from URL string. `x` is a number\n\n      this._apiCallFiltered = this._apiCallFiltered.replace(/\\/_date\\/\\d{4}-\\d{2}-\\d{2}/gm, ''); // Removes `/_compare/xxxx-xx-xx/xxxx-xx-xx` from URL string. `x` is a number\n\n      this._apiCallFiltered = this._apiCallFiltered.replace(/\\/_compare\\/\\d{4}-\\d{2}-\\d{2}\\/\\d{4}-\\d{2}-\\d{2}/gm, '');\n      return this._apiCallFiltered;\n    } // Return current date\n\n  }, {\n    key: \"_getCurrentDate\",\n    value: function _getCurrentDate(data) {\n      var _this = this;\n\n      this._internalDate = '';\n      data.forEach(function (el) {\n        if (el.display.includes('(current)')) {\n          _this._internalDate = el.date;\n        }\n      });\n\n      if (this._internalDate !== '') {\n        return this._internalDate;\n      }\n\n      return false;\n    } // TEMPLATE\n    // --------\n    // Template for select form\n\n  }, {\n    key: \"_templateHistoryOptions\",\n    value: function _templateHistoryOptions(data) {\n      var _this2 = this;\n\n      // Template markup\n      this._template_history_select = ''; // Build options for select menu\n\n      data.forEach(function (el) {\n        _this2._selectedOption = '';\n        _this2._selectedOption = _this2._api === \"/_api/versions/_date/\".concat(el.date, \"/\").concat(el.path) ? 'selected=\"selected\"' : '';\n        _this2._description = typeof el.display !== 'undefined' ? el.display : el.date;\n\n        if (!el.date.includes('Current')) {\n          _this2._template_history_select += \"<option data-path=\\\"/_date/\".concat(el.date, \"/\").concat(el.path, \"\\\" data-date=\\\"\").concat(el.date, \"\\\" \").concat(_this2._selectedOption, \">\").concat(_this2._description, \"</option>\");\n        } else {\n          _this2._template_history_select += \"<option data-path=\\\"/\".concat(el.path, \"\\\" data-date=\\\"\").concat(_this2._getCurrentDate(data), \"\\\">\").concat(_this2._description, \"</option>\");\n        }\n      });\n      return this._template_history_select;\n    }\n  }, {\n    key: \"_templateHistoryForm\",\n    value: function _templateHistoryForm(data) {\n      return \"\\n<div class=\\\"history-wrap\\\">\\n\\t<select id=\\\"historyForm\\\" name=\\\"historyForm\\\">\\n\\t\\t\".concat(this._templateHistoryOptions(data), \"\\n\\t</select>\\n\\t<button id=\\\"historyBtn\\\" class=\\\"button button--icon\\\" type=\\\"submit\\\" aria-label=\\\"Open historical version\\\"><span class=\\\"icon icon-search\\\"></span></button>\\n</div>\");\n    } // Final template with wrapper\n\n  }, {\n    key: \"_templateHistory\",\n    value: function _templateHistory(data) {\n      return \"\\n<section id=\\\"area__history\\\" class=\\\"\".concat(this._ns, \"\\\" role=\\\"region\\\" aria-label=\\\"Historical versions\\\">\\n\\t<label for=\\\"historyForm\\\" class=\\\"h__ui\\\">Historical Versions</label>\\n\\t\").concat(this._templateHistoryForm(data), \"\\n</section>\");\n    } // Event listeners and interactivity\n\n  }, {\n    key: \"_addInteractivityForHistoryForm\",\n    value: function _addInteractivityForHistoryForm() {\n      var _this3 = this;\n\n      // Add event listener for form and button\n      this.historySelect = document.querySelector('#historyForm');\n      this.historyButton = document.querySelector('#historyBtn'); // Populated `_selected` object\n\n      this._selected.history = this.historySelect.selectedOptions[0]; // Add listeners\n\n      this.historySelect.addEventListener('change', function (e) {\n        _this3._selected.history = _this3.historySelect.selectedOptions[0]; // console.log(`History selected: ${this._selected.history.value}`)\n      }); // Navigate to element on button click\n\n      this.historyButton.addEventListener('click', function (e) {\n        window.location.href = _this3.historySelect.selectedOptions[0].getAttribute('data-path');\n      });\n    } // Final markup application\n    // ------------------------\n\n  }, {\n    key: \"_applyHistoricalVersionsUI\",\n    value: function _applyHistoricalVersionsUI(data, area) {\n      area.insertAdjacentHTML('beforeend', this._templateHistory(data)); // Add interactivity\n\n      this._addInteractivityForHistoryForm();\n    } // Run everything\n    // --------------\n\n  }, {\n    key: \"run\",\n    value: function run() {\n      var _this4 = this;\n\n      return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(this._filterApiCall(this._api)).then(function (response) {\n        return response.data;\n      }).then(function (data) {\n        if (data.versions.length > 0 && data.features['historical-versions']) {\n          try {\n            // Apply markup\n            _this4._area = document.querySelector(_this4._el);\n\n            _this4._applyHistoricalVersionsUI(data.versions, _this4._area);\n          } catch (error) {\n            console.log('Unable to attach Historical versions widget: ', error);\n          }\n        }\n      })[\"catch\"](function (err) {\n        // If API Is not present - do nothing, but reply with server status\n        console.info(\"Historical Versions API: status \".concat(err.response.status));\n      });\n    }\n  }, {\n    key: \"namespace\",\n    get: function get() {\n      return this._namespace;\n    },\n    set: function set(value) {\n      this._namespace = value;\n    }\n  }, {\n    key: \"el\",\n    get: function get() {\n      return this._el;\n    },\n    set: function set(value) {\n      this._el = value;\n    }\n  }]);\n\n  return HistoricalVersions;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HistoricalVersions);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/components/historical-versions/HistoricalVersions.js?");

/***/ }),

/***/ "../../../../../core__front-end/v2/_document/js/components/historical-versions/HistoricalVersionsCompare.js":
/*!********************************************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/components/historical-versions/HistoricalVersionsCompare.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"../../../../../node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"../../../../../node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes */ \"../../../../../node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes */ \"../../../../../node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"../../../../../node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/inherits */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"../../../../../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _HistoricalVersions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HistoricalVersions */ \"../../../../../core__front-end/v2/_document/js/components/historical-versions/HistoricalVersions.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar HistoricalVersionsCompare =\n/*#__PURE__*/\nfunction (_HistoricalVersions) {\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(HistoricalVersionsCompare, _HistoricalVersions);\n\n  function HistoricalVersionsCompare() {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, HistoricalVersionsCompare);\n\n    return Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(HistoricalVersionsCompare).apply(this, arguments));\n  }\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(HistoricalVersionsCompare, [{\n    key: \"_templateCompareOptions\",\n    // TEMPLATE\n    // --------\n    // Template for select form\n    value: function _templateCompareOptions(data) {\n      var _this = this;\n\n      // Template markup\n      this._template_compare_select = ''; // Build options for select menu\n\n      data.forEach(function (el) {\n        _this._disabledOption = ''; // this._disabledOption = (this._api === `/_api/versions/_date/${el.date}/${el.path}`) ? 'disabled=\"disabled\"' : ''\n\n        _this._description = typeof el.display !== 'undefined' ? el.display : el.date; // We don't include `Current` option without date for comparison\n        // Instead we use all other options\n\n        if (!el.date.includes('Current')) {\n          _this._template_compare_select += \"<option data-path=\\\"/_date/\".concat(el.date, \"/\").concat(el.path, \"\\\" data-date=\\\"\").concat(el.date, \"\\\">\").concat(_this._description, \"</option>\");\n        }\n      });\n      return this._template_compare_select;\n    }\n  }, {\n    key: \"_templateCompareForm\",\n    value: function _templateCompareForm(data) {\n      return \"\\n<div class=\\\"compare-wrap\\\">\\n\\t<select id=\\\"compareForm\\\" name=\\\"compareForm\\\">\\n\\t\\t\".concat(this._templateCompareOptions(data), \"\\n\\t</select>\\n\\t<button id=\\\"compareBtn\\\" class=\\\"button button--icon\\\" type=\\\"submit\\\" aria-label=\\\"Compare documents\\\"><span class=\\\"icon icon-arrows-crossed\\\"></span></button>\\n</div>\");\n    } // Template for comparison extends history form\n\n  }, {\n    key: \"_templateCompare\",\n    value: function _templateCompare(data) {\n      return \"\\n<section id=\\\"area__history\\\" class=\\\"\".concat(this._ns, \"\\\" role=\\\"region\\\" aria-label=\\\"Historical versions\\\">\\n\\t<label for=\\\"historyForm\\\" class=\\\"h__ui\\\">Historical Versions</label>\\n\\t\").concat(this._templateHistoryForm(data), \"\\n\\n\\t<label for=\\\"compareForm\\\" class=\\\"h__ui--small\\\">Compare to</label>\\n\\t\").concat(this._templateCompareForm(data), \"\\n</section>\");\n    } // Compare dates and return new path\n\n  }, {\n    key: \"_comparePath\",\n    value: function _comparePath() {\n      this._date1 = this._selected.history.getAttribute('data-date');\n      this._date2 = this._selected.compare.getAttribute('data-date');\n      return \"/_compare/\".concat(this._date1, \"/\").concat(this._date2).concat(this._filterApiCall(this._selected.compare.getAttribute('data-path')));\n    } // Event listeners and interactivity\n\n  }, {\n    key: \"_addInteractivityForCompareForm\",\n    value: function _addInteractivityForCompareForm() {\n      var _this2 = this;\n\n      // Add event listener for form and button\n      this.compareSelect = document.querySelector('#compareForm');\n      this.compareButton = document.querySelector('#compareBtn'); // Populate selected object\n\n      this._selected.compare = this.compareSelect.selectedOptions[0]; // On history change, show history selected option\n\n      this.compareSelect.addEventListener('change', function (e) {\n        _this2._selected.compare = _this2.compareSelect.selectedOptions[0]; // console.log(`Compare selected: ${this._selected.compare.value}`)\n      });\n      this.compareButton.addEventListener('click', function (e) {\n        window.location.href = _this2._comparePath();\n      });\n    } // Final markup application\n    // ------------------------\n\n  }, {\n    key: \"_applyDocumentCompareUI\",\n    value: function _applyDocumentCompareUI(data, area) {\n      area.insertAdjacentHTML('beforeend', this._templateCompare(data)); // Add interactivity\n\n      this._addInteractivityForHistoryForm();\n\n      this._addInteractivityForCompareForm();\n    } // Run everything\n    // --------------\n\n  }, {\n    key: \"run\",\n    value: function run() {\n      var _this3 = this;\n\n      return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(this._filterApiCall(this._api)).then(function (response) {\n        return response.data;\n      }).then(function (data) {\n        if (data.versions.length > 0) {\n          // API response exists, check which UI will be applied\n          _this3._area = document.querySelector(_this3._el); // Historical versions are enabled, but document comparison isn't\n\n          if (data.features['historical-versions'] && !data.features.compare) {\n            try {\n              _this3._applyHistoricalVersionsUI(data.versions, _this3._area);\n            } catch (error) {\n              console.log('Unable to attach Historical versions widget: ', error);\n            }\n          } // Document comparison is enabled\n\n\n          if (data.features['historical-versions'] && data.features.compare) {\n            // Document has candidates for comparison\n            if (data.versions.length > 2) {\n              try {\n                _this3._applyDocumentCompareUI(data.versions, _this3._area);\n              } catch (error) {\n                console.log('Unable to attach Document comparison widget: ', error);\n              }\n            } // Document doesn't have candidates for comparison\n            else {\n                try {\n                  _this3._applyHistoricalVersionsUI(data.versions, _this3._area);\n                } catch (error) {\n                  console.log('Unable to attach Historical versions widget: ', error);\n                }\n              }\n          }\n        }\n      })[\"catch\"](function (err) {\n        // If API Is not present - do nothing, but reply with server status\n        console.info(\"Historical Versions API: status \".concat(err.response.status));\n      });\n    }\n  }]);\n\n  return HistoricalVersionsCompare;\n}(_HistoricalVersions__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HistoricalVersionsCompare);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/components/historical-versions/HistoricalVersionsCompare.js?");

/***/ }),

/***/ "../../../../../core__front-end/v2/_document/js/components/lightbox/Lightbox.js":
/*!****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/components/lightbox/Lightbox.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"../../../../../node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n\n\n\n\n\n\nvar Lightbox =\n/*#__PURE__*/\nfunction () {\n  function Lightbox(namespace) {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Lightbox);\n\n    this._namespace = namespace;\n    this._el = '#area__content'; // Elements on which lightbox will work\n\n    this._initialized = false;\n  }\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Lightbox, [{\n    key: \"_getNamespaceClass\",\n    value: function _getNamespaceClass() {\n      // This method gets the document namespace before applying the lightbox to\n      // element\n      if (this._namespace === '' || this._namespace === undefined) {\n        this._ns = document.querySelector('#grid').className;\n      } else {\n        this._ns = 'ns__document__' + this._namespace;\n      }\n\n      return this._ns;\n    }\n  }, {\n    key: \"_attachLightbox\",\n    value: function _attachLightbox() {\n      this._lightboxWrap = \"\\n<div id=\\\"lightbox\\\" class=\\\"\".concat(this._getNamespaceClass(), \" lightbox--hidden\\\" aria-hidden=\\\"true\\\">\\n\\t<div class=\\\"lightbox__close\\\">\\n\\t\\t<button class=\\\"button button--lightbox\\\">Close</button>\\n\\t</div>\\n\\t<div class=\\\"lightbox__image lightbox__image--hide\\\"></div>\\n</div>\"); // Attach Lightbox wrapper\n\n      document.querySelector('body').insertAdjacentHTML('beforeend', this._lightboxWrap);\n      document.querySelector('html').classList.add('reader-lightbox');\n    }\n  }, {\n    key: \"_attachImage\",\n    value: function _attachImage(el) {\n      if (!this._initialized) {\n        this._initialized = true;\n        this._imageTemplate = \"<img src=\\\"\".concat(el.src, \"\\\" width=\\\"\").concat(el.width, \"\\\" />\"); // Attach image to wrapper\n\n        document.querySelector('#lightbox .lightbox__image').insertAdjacentHTML('beforeend', this._imageTemplate);\n      } else {\n        this._image = document.querySelector('#lightbox .lightbox__image img');\n        this._image.src = el.src;\n      }\n    }\n  }, {\n    key: \"_displayLightbox\",\n    value: function _displayLightbox(visibility) {\n      this._lightbox = document.querySelector('#lightbox');\n      this._lightboxImage = document.querySelector('#lightbox .lightbox__image');\n\n      if (visibility) {\n        this._lightbox.classList.remove('lightbox--hidden');\n\n        this._lightboxImage.classList.remove('lightbox__image--hide');\n      } else {\n        this._lightbox.classList.add('lightbox--hidden');\n\n        this._lightboxImage.classList.add('lightbox__image--hide');\n      }\n    }\n  }, {\n    key: \"_listenForImage\",\n    value: function _listenForImage() {\n      var _this = this;\n\n      this._element = document.querySelector(this._el);\n\n      this._element.addEventListener('click', function (e) {\n        if (e.target.tagName === 'IMG') {\n          _this._attachImage(e.target);\n\n          _this._displayLightbox(true);\n        }\n      });\n    }\n  }, {\n    key: \"_listenForClose\",\n    value: function _listenForClose() {\n      var _this2 = this;\n\n      this._buttonClose = document.querySelector('#lightbox .lightbox__close button');\n\n      this._buttonClose.addEventListener('click', function (e) {\n        _this2._displayLightbox(false);\n      });\n    }\n  }, {\n    key: \"run\",\n    value: function run() {\n      this._getNamespaceClass();\n\n      this._attachLightbox();\n\n      this._listenForClose();\n\n      this._listenForImage();\n    }\n  }]);\n\n  return Lightbox;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lightbox);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/components/lightbox/Lightbox.js?");

/***/ }),

/***/ "../../../../../core__front-end/v2/_document/js/components/login/Login.js":
/*!**********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/components/login/Login.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"../../../../../node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"../../../../../node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ \"../../../../../node_modules/core-js/modules/es.date.to-string.js\");\n/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"../../../../../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"../../../../../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"../../../../../node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"../../../../../node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"../../../../../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_messages_PopupUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/messages/PopupUtil */ \"../../../../../core__front-end/v2/_document/js/utils/messages/PopupUtil.js\");\n/* eslint-disable class-methods-use-this */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Login =\n/*#__PURE__*/\nfunction () {\n  function Login(namespace, el, duration) {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, Login);\n\n    this._nsPrefix = 'ns__document__';\n    this._ns = this._nsPrefix + namespace;\n    this._el = el;\n    this._loginEnabled = false;\n    this._duration = duration || 6000;\n    this.popupManager = new _utils_messages_PopupUtil__WEBPACK_IMPORTED_MODULE_10__[\"default\"](namespace);\n  } // Constants\n\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Login, [{\n    key: \"fetchUserData\",\n    // Methods\n    // ---------\n    value: function fetchUserData() {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        var userFetchUrl = _this.USER_URL + (/\\?/.test(_this.USER_URL) ? '&' : '?') + new Date().getTime();\n        axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(userFetchUrl, {\n          withCredentials: true,\n          timeout: 2000\n        }).then(function (response) {\n          var user = response.data; // If user is not logged in, set login link on login button and display messages\n\n          if (user.login_urls) {\n            _this._displayUserData(user);\n          } else {\n            // Display Logout button if user is logged in\n            var loginButton = document.querySelector('#area__login button');\n            var logout_url = user.logout_endpoint;\n            loginButton.setAttribute('data-url', logout_url);\n            loginButton.setAttribute('data-role', 'logout');\n            loginButton.querySelector('span.text').innerText = 'Logout';\n            loginButton.setAttribute('title', 'Log out');\n\n            _this._displayMessages(user);\n          }\n\n          if (document.getElementById('area__login')) {\n            _this._loginEnabled = true;\n          }\n\n          _this._applyClassList();\n\n          _this.handleLoginBtn();\n\n          resolve(user);\n        })[\"catch\"](function (error) {\n          console.log('Error fetching user data.');\n          console.error(error);\n          _this._loginEnabled = false;\n\n          _this._applyClassList();\n\n          reject(error);\n        });\n      });\n    }\n  }, {\n    key: \"fetchAndDisplayAnnotations\",\n    value: function fetchAndDisplayAnnotations(userData) {\n      var _this2 = this;\n\n      if (userData.authenticated !== false) {\n        var annotationsUrl = this.ANNOTATIONS_URL + '?url=' + encodeURIComponent(window.location.pathname) + '&' + new Date().getTime();\n        axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(annotationsUrl, {\n          withCredentials: true\n        }).then(function (response) {\n          var annotations = response.data;\n\n          if (annotations && annotations.length > 0) {\n            for (var i = 0; i < annotations.length; i++) {\n              var annotation = annotations[i];\n              var url = annotation.url;\n\n              var annotatedSpan = _this2._findAnnotatedSpan(url);\n\n              if (annotatedSpan) {\n                var parentParagraph = annotatedSpan.parentElement;\n                var marginalia = document.createElement('aside');\n                var bodyhtml = annotation.body_html;\n                marginalia.innerHTML = bodyhtml.slice(3, bodyhtml.length - 4); // remove the <p> wrapper.\n\n                marginalia.classList.add('marginalia', 'user-generated');\n                marginalia.setAttribute('title', \"Created by \".concat(annotation.author.first_name, \" \").concat(annotation.author.last_name, \"\\nOn \").concat(annotation.created));\n                parentParagraph.parentElement.insertBefore(marginalia, parentParagraph);\n              }\n            }\n          }\n        })[\"catch\"](function (error) {\n          console.log('Error fetching user annotations');\n          console.error(error);\n        });\n      }\n    }\n  }, {\n    key: \"handleLoginBtn\",\n    value: function handleLoginBtn() {\n      var _this3 = this;\n\n      // Redirect to login/logout url on button click\n      var loginButton = document.querySelector('#area__login button');\n\n      if (loginButton) {\n        loginButton.addEventListener('click', function () {\n          var url = loginButton.getAttribute('data-url');\n          var role = loginButton.getAttribute('data-role'); // 'data-role' attribute determines the button's function\n\n          if (role === 'login') {\n            window.location.href = url + '?next=' + window.location.pathname + window.location.hash;\n          } else {\n            // On Logout click, send logout request and setup UI\n            var logoutUrl = _this3.LOGOUT_URL + '?d=' + new Date().getTime();\n            axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(logoutUrl, {\n              withCredentials: true\n            }).then(function (response) {\n              var user = response.data;\n\n              _this3._displayUserData(user);\n            });\n          }\n        });\n      }\n\n      ;\n    } // Private methods\n    // Sets up UI elements for users that are NOT signed in\n\n  }, {\n    key: \"_displayUserData\",\n    value: function _displayUserData(userJSON) {\n      var name = userJSON.login_urls[0][0];\n      var url = userJSON.login_urls[0][1];\n      var loginButton = document.querySelector('#area__login button'); // Setup Login button\n\n      if (loginButton) {\n        loginButton.querySelector('span.text').innerText = 'Login';\n        loginButton.setAttribute('data-url', url);\n        loginButton.setAttribute('title', 'Login using ' + name);\n        loginButton.setAttribute('data-role', 'login');\n      }\n\n      this._displayMessages(userJSON); // remove private annotations\n\n\n      var privateAnnos = document.querySelectorAll('p.user-generated');\n\n      for (var i = 0; i < privateAnnos.length; i++) {\n        var privateAnno = privateAnnos[i];\n        privateAnno.remove();\n      }\n    }\n  }, {\n    key: \"_displayMessages\",\n    value: function _displayMessages(userJSON) {\n      // Display eventual messages\n      if (userJSON._messages && userJSON._messages.length > 0) {\n        for (var i = 0; i < userJSON._messages.length; i++) {\n          var message = userJSON._messages[i];\n          this.popupManager.show(message.message, message.level, message.tags, true, this.MESSAGE_TIMEOUT);\n        }\n      }\n    } // Find the <span> associated with the annotation\n    // eslint-disable-next-line class-methods-use-this\n\n  }, {\n    key: \"_findAnnotatedSpan\",\n    value: function _findAnnotatedSpan(url) {\n      var hash = url.split('#')[1]; // First, try finding it within the container page (id should be equal to the full annotation url)\n\n      var annotatedSpan = document.getElementById(url.replace('.html', '')) || document.getElementById(hash); // TODO: remove .html hack once all elements\n\n      while (annotatedSpan && annotatedSpan.tagName === 'span') {\n        // have id hash values instead of urls\n        annotatedSpan = annotatedSpan.parentElement;\n      }\n\n      return annotatedSpan;\n    } // Applies specific classes to grid element based on wether login section\n    // should be displayed or not\n\n  }, {\n    key: \"_applyClassList\",\n    value: function _applyClassList() {\n      var elem = document.querySelector(this._el);\n\n      if (elem) {\n        if (this._loginEnabled) {\n          // Unhide Login\n          var login_area = document.getElementById('area__login');\n\n          if (login_area) {\n            login_area.style.display = 'flex';\n          }\n        }\n      }\n    } // Component template\n\n  }, {\n    key: \"template\",\n    value: function template() {\n      this._template = \"\\n\\t\\t\\t<section id=\\\"area__login\\\" class=\\\"\".concat(this._ns, \"\\\" role=\\\"region\\\" aria-label=\\\"Login\\\">\\n\\t\\t\\t\\t<button class=\\\"button\\\">\\n\\t\\t\\t\\t\\t<span class=\\\"icon icon-sign-in\\\"></span>\\n\\t\\t\\t\\t\\t<span class=\\\"text\\\">Login</span>\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</section>\\n\\t\\t\\t\");\n      return this._template;\n    } // Insert template into DOM\n\n  }, {\n    key: \"run\",\n    value: function run() {\n      var _this4 = this;\n\n      try {\n        var area = document.querySelector(this._el);\n        area.insertAdjacentHTML('beforeend', this.template()); // First apply default classes (no login)\n\n        this._applyClassList(); // This will fetch logged user data\n        // And eventually correct grid if there is no user endpoint\n        // or portal cannot be reached\n\n\n        this.fetchUserData().then(function (userData) {\n          _this4.fetchAndDisplayAnnotations(userData);\n        });\n      } catch (error) {\n        console.log('Unable to attach Login widget: ', error);\n      }\n    }\n  }, {\n    key: \"ORIGIN\",\n    get: function get() {\n      return location.origin;\n    }\n  }, {\n    key: \"PORTAL_API\",\n    get: function get() {\n      return this.ORIGIN + '/_portal/api';\n    }\n  }, {\n    key: \"ANNOTATIONS_URL\",\n    get: function get() {\n      return this.PORTAL_API + '/annotations';\n    }\n  }, {\n    key: \"USER_URL\",\n    get: function get() {\n      return this.PORTAL_API + '/user';\n    }\n  }, {\n    key: \"LOGOUT_URL\",\n    get: function get() {\n      return this.PORTAL_API + '/user/logout';\n    }\n  }, {\n    key: \"MESSAGE_TIMEOUT\",\n    get: function get() {\n      return this._duration;\n    } // Getters and setters\n    // -------------------\n    // Default\n\n  }, {\n    key: \"namespace\",\n    get: function get() {\n      return this._namespace;\n    },\n    set: function set(value) {\n      this._namespace = value;\n    }\n  }, {\n    key: \"el\",\n    get: function get() {\n      return this._el;\n    },\n    set: function set(value) {\n      this._el = value;\n    }\n  }]);\n\n  return Login;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/components/login/Login.js?");

/***/ }),

/***/ "../../../../../core__front-end/v2/_document/js/components/search/Search.js":
/*!************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/components/search/Search.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"../../../../../node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n\n\n\n\n\n\nvar Search =\n/*#__PURE__*/\nfunction () {\n  function Search(namespace, el, searchHost, searchQuery, searchMethod) {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Search);\n\n    this._nsPrefix = 'ns__document__';\n    this._ns = this._nsPrefix + namespace;\n    this._el = el;\n    this._searchScript = '/_reader/js/vendor/main.js';\n    this._searchHost = searchHost;\n    this._searchQuery = searchQuery;\n    this._searchMethod = searchMethod;\n  } // Getters and setters\n  // -------------------\n  // Default\n\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Search, [{\n    key: \"template\",\n    // Functions\n    // ---------\n    // Component template\n    value: function template() {\n      this._template = \"\\n<section id=\\\"area__search\\\" class=\\\"\".concat(this._ns, \"\\\" role=\\\"application\\\" aria-label=\\\"Search widget\\\" data-search-host=\\\"\").concat(this._searchHost, \"\\\" data-search-query=\\\"\").concat(this._searchQuery, \"\\\" data-search-method=\\\"\").concat(this._searchMethod, \"\\\">\\n\\t<div id=\\\"search\\\"></div>\\n</section>\\n\");\n      return this._template;\n    }\n  }, {\n    key: \"addVendor\",\n    value: function addVendor() {\n      document.head.appendChild(document.createElement('script')).src = this._searchScript;\n    } // Insert template into DOM\n\n  }, {\n    key: \"run\",\n    value: function run() {\n      try {\n        var area = document.querySelector(this._el); // Add Area to document\n\n        area.insertAdjacentHTML('beforeend', this.template()); // Attach old vendor search\n\n        this.addVendor();\n      } catch (error) {\n        console.log('Unable to attach Search widget: ', error);\n      }\n    }\n  }, {\n    key: \"namespace\",\n    get: function get() {\n      return this._namespace;\n    },\n    set: function set(value) {\n      this._namespace = value;\n    }\n  }, {\n    key: \"el\",\n    get: function get() {\n      return this._el;\n    },\n    set: function set(value) {\n      this._el = value;\n    }\n  }, {\n    key: \"searchScript\",\n    get: function get() {\n      return this._searchScript;\n    },\n    set: function set(value) {\n      this._searchScript = value;\n    }\n  }, {\n    key: \"searchHost\",\n    get: function get() {\n      return this._searchHost;\n    },\n    set: function set(value) {\n      this._searchHost = value;\n    }\n  }, {\n    key: \"searchQuery\",\n    get: function get() {\n      return this._searchQuery;\n    },\n    set: function set(value) {\n      this._searchQuery = value;\n    }\n  }, {\n    key: \"searchMethod\",\n    get: function get() {\n      return this._searchMethod;\n    },\n    set: function set(value) {\n      this._searchMethod = value;\n    }\n  }]);\n\n  return Search;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/components/search/Search.js?");

/***/ }),

/***/ "../../../../../core__front-end/v2/_document/js/misc/polyfills.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/misc/polyfills.js ***!
  \**************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ \"../../../../../node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"../../../../../node_modules/core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ \"../../../../../node_modules/core-js/modules/es.string.starts-with.js\");\n/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n/* eslint-disable init-declarations */\n\n/* eslint-disable prefer-rest-params */\n\n/* eslint-disable no-bitwise */\n__webpack_require__(/*! es6-promise */ \"../../../../../node_modules/es6-promise/dist/es6-promise.js\").polyfill();\n\n__webpack_require__(/*! es6-object-assign */ \"../../../../../node_modules/es6-object-assign/index.js\").polyfill(); // needed for `vue-mq`\n// NOTE:  All polyfills should be taken from MDN\n//        Example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill\n\n\nif (!Array.prototype.find) {\n  Array.prototype.find = function (predicate) {\n    if (this === null) {\n      throw new TypeError('Array.prototype.find called on null or undefined');\n    }\n\n    if (typeof predicate !== 'function') {\n      throw new TypeError('predicate must be a function');\n    }\n\n    var list = Object(this);\n    var length = list.length >>> 0;\n    var thisArg = arguments[1];\n    var value;\n\n    for (var i = 0; i < length; i++) {\n      value = list[i];\n\n      if (predicate.call(thisArg, value, i, list)) {\n        return value;\n      }\n    }\n\n    return undefined;\n  };\n}\n\nif (!String.prototype.startsWith) {\n  String.prototype.startsWith = function (searchString, position) {\n    position = position || 0;\n    return this.indexOf(searchString, position) === position;\n  };\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/misc/polyfills.js?");

/***/ }),

/***/ "../../../../../core__front-end/v2/_document/js/utils/ajax/FullHtmlFetch.js":
/*!************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/utils/ajax/FullHtmlFetch.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"../../../../../node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"../../../../../node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"../../../../../node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"../../../../../node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"../../../../../node_modules/core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"../../../../../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"../../../../../node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"../../../../../node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"../../../../../node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"../../../../../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n/* eslint-disable consistent-return */\n\n/* eslint-disable class-methods-use-this */\n// eslint-disable-next-line no-unused-expressions\n\"use strict\";\n\n\n/**\n * Class for fetching proper part of `x.full.html` content for the given container.\n */\n\nvar FullHtmlFetch =\n/*#__PURE__*/\nfunction () {\n  function FullHtmlFetch(contentEl, articleEl) {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, FullHtmlFetch);\n\n    this._content = contentEl;\n    this._article = articleEl;\n  } // Getters and setters\n  // -------------------\n  // Default\n\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(FullHtmlFetch, [{\n    key: \"meta\",\n    value: function meta(itemProp) {\n      return document.querySelector(\"meta[itemprop='\".concat(itemProp, \"']\"));\n    }\n  }, {\n    key: \"metaContent\",\n    value: function metaContent(itemProp) {\n      return this.meta(itemProp) ? this.meta(itemProp).content : '';\n    }\n  }, {\n    key: \"isChild\",\n    value: function isChild(order, parentOrder) {\n      return order.indexOf(parentOrder) === 0 && order !== parentOrder;\n    }\n  }, {\n    key: \"getParas\",\n    value: function getParas(parentOrder, paras) {\n      var out = [];\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = paras[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var p = _step.value;\n\n          try {\n            var order = p.getAttribute('data-order');\n\n            if (this.isChild(order, parentOrder)) {\n              // and it is a child of our target\n              out.push(p); // start adding paras to our output\n            } else if (out.length) {\n              // if it isn't a child and there is output\n              return out; // then we're done, so return output\n            }\n          } catch (error) {\n            if (out.length) {\n              // if the para doesn't have order data but there is already output\n              out.push(p); // add this para to output (because it belongs to last-seen para with order data)\n            }\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return out;\n    }\n  }, {\n    key: \"run\",\n    value: function run() {\n      var _this = this;\n\n      if (!this.metaContent('full-html') || this.metaContent('doc-type') === 'section') {\n        return Promise.reject(new Error('Page not suitable for full html fetch.'));\n      }\n\n      return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(this.metaContent('full-html')).then(function (response) {\n        var responseDoc = new DOMParser().parseFromString(response.data, 'text/html');\n        var sourceContentNode = responseDoc.querySelector(_this._article);\n        var targetContentNode = document.querySelector(_this._article);\n\n        var parentOrder = _this.metaContent('order');\n\n        var allParas = sourceContentNode.childNodes;\n\n        var filteredParas = _this.getParas(parentOrder, allParas);\n\n        var readerLiteContainer = document.createElement('div');\n        readerLiteContainer.setAttribute('class', 'readerlite-content');\n        targetContentNode.parentElement.appendChild(readerLiteContainer);\n        filteredParas.forEach(function (p) {\n          readerLiteContainer.appendChild(p);\n        });\n      });\n    }\n  }, {\n    key: \"content\",\n    get: function get() {\n      return this._content;\n    },\n    set: function set(value) {\n      this._content = value;\n    }\n  }, {\n    key: \"article\",\n    get: function get() {\n      return this._article;\n    },\n    set: function set(value) {\n      this._article = value;\n    }\n  }]);\n\n  return FullHtmlFetch;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullHtmlFetch);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/utils/ajax/FullHtmlFetch.js?");

/***/ }),

/***/ "../../../../../core__front-end/v2/_document/js/utils/ajax/HeadingReorder.js":
/*!*************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/utils/ajax/HeadingReorder.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"../../../../../node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of */ \"../../../../../node_modules/core-js/modules/es.array.last-index-of.js\");\n/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int */ \"../../../../../node_modules/core-js/modules/es.parse-int.js\");\n/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n\n\n\n\n\n\n/* eslint-disable consistent-return */\n\n/* eslint-disable class-methods-use-this */\n// eslint-disable-next-line no-unused-expressions\n\"use strict\";\n/**\n * Utility class for reordering `h` elements on page.\n */\n\n\nvar HeadingReorder =\n/*#__PURE__*/\nfunction () {\n  function HeadingReorder(contentEl) {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, HeadingReorder);\n\n    this._content = contentEl;\n  } // Getters and setters\n  // -------------------\n  // Default\n\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(HeadingReorder, [{\n    key: \"reorderHeadlines\",\n    // Functions\n    // ---------\n    value: function reorderHeadlines() {\n      var headingsQuery = '';\n\n      for (var i = 1; i <= 6; i++) {\n        headingsQuery += \"\".concat(this._content, \" h\").concat(i, \", \");\n      }\n\n      headingsQuery = headingsQuery.substr(0, headingsQuery.lastIndexOf(', '));\n      var headings = document.querySelectorAll(headingsQuery);\n\n      for (var _i = 1; _i < headings.length; _i++) {\n        var current = headings[_i];\n        var previous = headings[_i - 1];\n        var currentLevel = parseInt(current.nodeName.substr(1), 10);\n        var prevLevel = parseInt(previous.nodeName.substr(1), 10);\n        var diff = currentLevel - prevLevel;\n\n        if (diff > 1 && current.parentNode) {\n          var newHeading = document.createElement('h' + (prevLevel + 1));\n          newHeading.innerHTML = current.innerHTML;\n          current.parentNode.replaceChild(newHeading, current); // console.log('\\t' + current.nodeName + ' --> ' + newHeading.nodeName);\n\n          this.reorderHeadlines();\n        }\n      }\n\n      return true;\n    }\n  }, {\n    key: \"run\",\n    value: function run() {\n      this.reorderHeadlines();\n    }\n  }, {\n    key: \"content\",\n    get: function get() {\n      return this._content;\n    },\n    set: function set(value) {\n      this._content = value;\n    }\n  }]);\n\n  return HeadingReorder;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeadingReorder);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/utils/ajax/HeadingReorder.js?");

/***/ }),

/***/ "../../../../../core__front-end/v2/_document/js/utils/messages/MessageUtil.js":
/*!**************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/utils/messages/MessageUtil.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"../../../../../node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers */ \"../../../../../node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n/* eslint-disable class-methods-use-this */\n\n/**\n * Message utility class that handles look and display of the messages.\n * Supported popup `type`s: (`default`, `info`, `success`,`warning`, `error`).\n * Note that `defaut` type doesn't support headline, if specified will be ignored.\n */\n\n\n\n\n\n\nvar MessageUtil =\n/*#__PURE__*/\nfunction () {\n  function MessageUtil(namespaceSuffix) {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, MessageUtil);\n\n    this.namespaceSuffix = namespaceSuffix;\n  }\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(MessageUtil, [{\n    key: \"show\",\n    value: function show(text, type, headline, showCloseBtn) {\n      var duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n      var insertPoint = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.defaultInsertPoint;\n      var insertAtElement = document.querySelector(insertPoint);\n\n      var popupHtml = this._messageTemplate(text, type, headline, showCloseBtn);\n\n      insertAtElement.insertAdjacentHTML('beforeend', popupHtml);\n      var newMessageEl = insertAtElement.lastElementChild;\n      var newMessageElCloseBtn = newMessageEl.querySelector('.button--message-close');\n      newMessageElCloseBtn.onclick = this.removeMessageHandler;\n\n      if (duration && !isNaN(duration)) {\n        this.removeMessage(newMessageEl, insertAtElement, duration);\n      }\n    } // eslint-disable-next-line class-methods-use-this\n\n  }, {\n    key: \"_messageTemplate\",\n    value: function _messageTemplate(text) {\n      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';\n      var headline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n      var showCloseBtn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n      var traceText = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';\n      return \"\\n\\t\\t\\t<div class=\\\"message \".concat(type !== 'default' ? \"message--\".concat(type) : '', \"\\\" role=\\\"region\\\" tabindex=\\\"0\\\">\\n\\t\\t\\t\\t\").concat(type !== 'default' && headline ? \"<div class=\\\"h__message\\\">\".concat(headline, \"</div>\") : '', \"\\n\\t\\t\\t\\t<p>\").concat(text, \"</p>\\n\\t\\t\\t\\t\").concat(showCloseBtn ? \"<button class=\\\"button--message-close\\\" aria-label=\\\"Close message\\\"><span class=\\\"icon icon-x\\\"></span></button>\" : '', \"\\n\\t\\t\\t\\t\").concat(traceText ? \"<div class=\\\"message__response\\\">\".concat(traceText, \"</div>\") : '', \"\\n\\t\\t\\t</div>\\n\\t\\t\\t\");\n    }\n  }, {\n    key: \"_messageContainerTemplate\",\n    value: function _messageContainerTemplate(namespaceSuffix) {\n      return \"\\n\\t\\t\\t<div id=\\\"message_container\\\" class=\\\"ns__document__\".concat(namespaceSuffix, \"\\\">\\n\\t\\t\\t\\t<div id=\\\"message_container__live\\\" aria-live=\\\"polite\\\" aria-atomic=\\\"true\\\"></div>\\n\\t\\t\\t</div>\\n\\t\\t\\t\");\n    }\n  }, {\n    key: \"removeMessage\",\n    value: function removeMessage(newMessageEl, parentEl) {\n      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n      setTimeout(function () {\n        if (parentEl && parentEl.contains(newMessageEl)) {\n          parentEl.removeChild(newMessageEl);\n        }\n      }, duration);\n    }\n  }, {\n    key: \"removeMessageHandler\",\n    value: function removeMessageHandler(event) {\n      var messageEl = event.currentTarget.parentElement;\n      messageEl.parentElement.removeChild(messageEl);\n    }\n  }, {\n    key: \"run\",\n    value: function run() {\n      document.body.insertAdjacentHTML('afterbegin', this._messageContainerTemplate(this.namespaceSuffix));\n    }\n  }, {\n    key: \"defaultInsertPoint\",\n    get: function get() {\n      return '#area__content';\n    }\n  }]);\n\n  return MessageUtil;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageUtil);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/utils/messages/MessageUtil.js?");

/***/ }),

/***/ "../../../../../core__front-end/v2/_document/js/utils/messages/PopupUtil.js":
/*!************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/utils/messages/PopupUtil.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/get */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/get.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/inherits */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js\");\n/* harmony import */ var _MessageUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MessageUtil */ \"../../../../../core__front-end/v2/_document/js/utils/messages/MessageUtil.js\");\n/* eslint-disable class-methods-use-this */\n\n\n\n\n\n\n\n\n\n/**\n * PopupUtil utility class that handles look and display of the popups. By default\n * it will insert all popup messages to predefined popup container.\n */\n\nvar PopupUtil =\n/*#__PURE__*/\nfunction (_MessageUtil) {\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(PopupUtil, _MessageUtil);\n\n  function PopupUtil() {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, PopupUtil);\n\n    return Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(PopupUtil).apply(this, arguments));\n  }\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PopupUtil, [{\n    key: \"show\",\n    value: function show(text, type, headline, showCloseBtn) {\n      var duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n      var insertPoint = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.defaultInsertPoint;\n\n      Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(PopupUtil.prototype), \"show\", this).call(this, text, type, headline, showCloseBtn, duration, insertPoint);\n\n      var accessibilityContainerEl = document.querySelector(this.defaultAccessibilityContainer);\n      var accessibilityText = \"\".concat(text);\n      accessibilityContainerEl.innerHTML = accessibilityText;\n    }\n  }, {\n    key: \"defaultInsertPoint\",\n    get: function get() {\n      return '#message_container';\n    }\n  }, {\n    key: \"defaultAccessibilityContainer\",\n    get: function get() {\n      return '#message_container__live';\n    }\n  }]);\n\n  return PopupUtil;\n}(_MessageUtil__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopupUtil);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/_document/js/utils/messages/PopupUtil.js?");

/***/ }),

/***/ "../../../../../core__front-end/v2/build-process/configuration/.modernizrrc":
/*!************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/build-process/configuration/.modernizrrc ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(";(function(window){\nvar hadGlobal = 'Modernizr' in window;\nvar oldGlobal = window.Modernizr;\n/*! modernizr 3.8.0 (Custom Build) | MIT *\n * https://modernizr.com/download/?-es6array-es6object-pointerevents-promises-touchevents-domprefixes-hasevent-mq-setclasses-shiv-testallprops-testprop !*/\n!function(e,t,n){function r(e,t){return typeof e===t}function o(){return\"function\"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,\"http://www.w3.org/2000/svg\",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||(e=o(S?\"svg\":\"body\"),e.fake=!0),e}function a(e,n,r,a){var s,l,u,c,f=\"modernizr\",d=o(\"div\"),p=i();if(parseInt(r,10))for(;r--;)u=o(\"div\"),u.id=a?a[r]:f+(r+1),d.appendChild(u);return s=o(\"style\"),s.type=\"text/css\",s.id=\"s\"+f,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background=\"\",p.style.overflow=\"hidden\",c=C.style.overflow,C.style.overflow=\"hidden\",C.appendChild(p)),l=n(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=c,C.offsetHeight):d.parentNode.removeChild(d),!!l}function s(e,t){return!!~(\"\"+e).indexOf(t)}function l(e){return e.replace(/([A-Z])/g,function(e,t){return\"-\"+t.toLowerCase()}).replace(/^ms-/,\"-ms-\")}function u(t,n,r){var o;if(\"getComputedStyle\"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?\"error\":\"log\";i[a].call(i,\"getComputedStyle returning null, its possible modernizr test results are inaccurate\")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function c(t,r){var o=t.length;if(\"CSS\"in e&&\"supports\"in e.CSS){for(;o--;)if(e.CSS.supports(l(t[o]),r))return!0;return!1}if(\"CSSSupportsRule\"in e){for(var i=[];o--;)i.push(\"(\"+l(t[o])+\":\"+r+\")\");return i=i.join(\" or \"),a(\"@supports (\"+i+\") { #modernizr { position: absolute; } }\",function(e){return\"absolute\"===u(e,null,\"position\")})}return n}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,\"\")}function d(e,t,i,a){function l(){d&&(delete j.style,delete j.modElem)}if(a=!r(a,\"undefined\")&&a,!r(i,\"undefined\")){var u=c(e,i);if(!r(u,\"undefined\"))return u}for(var d,p,m,h,v,y=[\"modernizr\",\"tspan\",\"samp\"];!j.style&&y.length;)d=!0,j.modElem=o(y.shift()),j.style=j.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],v=j.style[h],s(h,\"-\")&&(h=f(h)),j.style[h]!==n){if(a||r(i,\"undefined\"))return l(),\"pfx\"!==t||h;try{j.style[h]=i}catch(e){}if(j.style[h]!==v)return l(),\"pfx\"!==t||h}return l(),!1}function p(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var o;for(var i in e)if(e[i]in t)return!1===n?e[i]:(o=t[e[i]],r(o,\"function\")?p(o,n||t):o);return!1}function h(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+\" \"+P.join(a+\" \")+a).split(\" \");return r(t,\"string\")||r(t,\"undefined\")?d(s,t,o,i):(s=(e+\" \"+w.join(a+\" \")+a).split(\" \"),m(s,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var y=[],g={_version:\"3.8.0\",_config:{classPrefix:\"\",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr;var b=[],C=t.documentElement,S=\"svg\"===C.nodeName.toLowerCase(),E=\"Moz O ms Webkit\",w=g._config.usePrefixes?E.toLowerCase().split(\" \"):[];g._domPrefixes=w;var x=function(){function e(e,r){var i;return!!e&&(r&&\"string\"!=typeof r||(r=o(r||\"div\")),e=\"on\"+e,i=e in r,!i&&t&&(r.setAttribute||(r=o(\"div\")),r.setAttribute(e,\"\"),i=\"function\"==typeof r[e],r[e]!==n&&(r[e]=n),r.removeAttribute(e)),i)}var t=!(\"onblur\"in C);return e}();g.hasEvent=x;var _=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return a(\"@media \"+t+\" { #modernizr { position: absolute; } }\",function(t){n=\"absolute\"===(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();g.mq=_;var P=g._config.usePrefixes?E.split(\" \"):[];g._cssomPrefixes=P;var A={elem:o(\"modernizr\")};Modernizr._q.push(function(){delete A.elem});var j={style:A.elem.style};Modernizr._q.unshift(function(){delete j.style}),g.testAllProps=h,g.testAllProps=v;g.testProp=function(e,t,r){return d([e],n,t,r)};S||function(e,t){function n(e,t){var n=e.createElement(\"p\"),r=e.getElementsByTagName(\"head\")[0]||e.documentElement;return n.innerHTML=\"x<style>\"+t+\"</style>\",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return\"string\"==typeof e?e.split(\" \"):e}function o(e,t){var n=g.elements;\"string\"!=typeof n&&(n=n.join(\" \")),\"string\"!=typeof e&&(e=e.join(\" \")),g.elements=n+\" \"+e,u(t)}function i(e){var t=y[e[h]];return t||(t={},v++,e[h]=v,y[v]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;a<l;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function(\"h,f\",\"return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(\"+r().join().replace(/[\\w\\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c(\"'+e+'\")'})+\");return n}\")(g,t.frag)}function u(e){e||(e=t);var r=i(e);return!g.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,\"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}\")),f||l(e,r),e}var c,f,d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h=\"_html5shiv\",v=0,y={};!function(){try{var e=t.createElement(\"a\");e.innerHTML=\"<xyz></xyz>\",c=\"hidden\"in e,f=1==e.childNodes.length||function(){t.createElement(\"a\");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){c=!0,f=!0}}();var g={elements:d.elements||\"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video\",version:\"3.7.3\",shivCSS:!1!==d.shivCSS,supportsUnknownElements:f,shivMethods:!1!==d.shivMethods,type:\"default\",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=g,u(t), true&&module.exports&&(module.exports=g)}(void 0!==e?e:this,t);var T=g._config.usePrefixes?\" -webkit- -moz- -o- -ms- \".split(\" \"):[\"\",\"\"];g._prefixes=T,Modernizr.addTest(\"touchevents\",function(){if(\"ontouchstart\"in e||e.TouchEvent||e.DocumentTouch&&t instanceof DocumentTouch)return!0;var n=[\"(\",T.join(\"touch-enabled),(\"),\"heartz\",\")\"].join(\"\");return _(n)});var N=[\"\"].concat(w);g._domPrefixesAll=N,Modernizr.addTest(\"pointerevents\",function(){for(var e=0,t=N.length;e<t;e++)if(x(N[e]+\"pointerdown\"))return!0;return!1}),Modernizr.addTest(\"es6array\",!!(Array.prototype&&Array.prototype.copyWithin&&Array.prototype.fill&&Array.prototype.find&&Array.prototype.findIndex&&Array.prototype.keys&&Array.prototype.entries&&Array.prototype.values&&Array.from&&Array.of)),Modernizr.addTest(\"es6object\",!!(Object.assign&&Object.is&&Object.setPrototypeOf)),Modernizr.addTest(\"promises\",function(){return\"Promise\"in e&&\"resolve\"in e.Promise&&\"reject\"in e.Promise&&\"all\"in e.Promise&&\"race\"in e.Promise&&function(){var t;return new e.Promise(function(e){t=e}),\"function\"==typeof t}()}),function(){var e,t,n,o,i,a,s;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,\"function\")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split(\".\"),1===s.length?Modernizr[s[0]]=o:(Modernizr[s[0]]&&(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean)||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),b.push((o?\"\":\"no-\")+s.join(\"-\"))}}(),function(e){var t=C.className,n=Modernizr._config.classPrefix||\"\";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp(\"(^|\\\\s)\"+n+\"no-js(\\\\s|$)\");t=t.replace(r,\"$1\"+n+\"js$2\")}Modernizr._config.enableClasses&&(e.length>0&&(t+=\" \"+n+e.join(\" \"+n)),S?C.className.baseVal=t:C.className=t)}(b),delete g.addTest,delete g.addAsyncTest;for(var z=0;z<Modernizr._q.length;z++)Modernizr._q[z]();e.Modernizr=Modernizr}(window,document);\nmodule.exports = window.Modernizr;\nif (hadGlobal) { window.Modernizr = oldGlobal; }\nelse { delete window.Modernizr; }\n})(window);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/build-process/configuration/.modernizrrc?");

/***/ }),

/***/ "../../../../../core__front-end/v2/shared/js/utils/FindThemeDir.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/core__front-end/v2/shared/js/utils/FindThemeDir.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"../../../../../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n\n\n\n\n\n\nvar FindThemeDir =\n/*#__PURE__*/\nfunction () {\n  function FindThemeDir(elem) {\n    Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, FindThemeDir);\n\n    this._elem = elem; // Finds path + _document + version number, starting with `v` + any digit\n\n    this._pattern = /^((?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])*?)_document\\/v[0-9]*/gmi;\n  } // Getters and Setters\n\n\n  Object(D_workspace_OLL_platform_publish_client_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(FindThemeDir, [{\n    key: \"documentUrl\",\n    // Functions\n    value: function documentUrl() {\n      return this._pattern.exec(this._elem)[0];\n    }\n  }, {\n    key: \"themeUrl\",\n    value: function themeUrl() {\n      return this._pattern.exec(this._elem)[1];\n    }\n  }, {\n    key: \"elem\",\n    get: function get() {\n      return this._elem;\n    },\n    set: function set(value) {\n      this._elem = value;\n    }\n  }]);\n\n  return FindThemeDir;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FindThemeDir);\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/core__front-end/v2/shared/js/utils/FindThemeDir.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/core-js/object/create.js":
/*!*************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/object/create.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/create */ \"../../../../../node_modules/core-js-pure/features/object/create.js\");\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/object/create.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js":
/*!**********************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/object/define-property.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/define-property */ \"../../../../../node_modules/core-js-pure/features/object/define-property.js\");\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/object/define-property.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-descriptor.js":
/*!**********************************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-descriptor.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/get-own-property-descriptor */ \"../../../../../node_modules/core-js-pure/features/object/get-own-property-descriptor.js\");\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js":
/*!***********************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/get-prototype-of */ \"../../../../../node_modules/core-js-pure/features/object/get-prototype-of.js\");\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js":
/*!***********************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/set-prototype-of */ \"../../../../../node_modules/core-js-pure/features/object/set-prototype-of.js\");\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/core-js/reflect/get.js":
/*!***********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/reflect/get.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/reflect/get */ \"../../../../../node_modules/core-js-pure/features/reflect/get.js\");\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/reflect/get.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/core-js/symbol.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/symbol.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/symbol */ \"../../../../../node_modules/core-js-pure/features/symbol/index.js\");\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/symbol.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js":
/*!***************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/symbol/iterator */ \"../../../../../node_modules/core-js-pure/features/symbol/iterator.js\");\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js":
/*!*************************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _assertThisInitialized; });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js":
/*!******************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _classCallCheck; });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js":
/*!***************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _createClass; });\n/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ \"../../../../../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js\");\n/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n\n    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/get.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/get.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _get; });\n/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ \"../../../../../node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-descriptor.js\");\n/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/reflect/get */ \"../../../../../node_modules/@babel/runtime-corejs3/core-js/reflect/get.js\");\n/* harmony import */ var _core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _superPropBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./superPropBase */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/superPropBase.js\");\n\n\n\nfunction _get(target, property, receiver) {\n  if (typeof Reflect !== \"undefined\" && _core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1___default.a) {\n    _get = _core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1___default.a;\n  } else {\n    _get = function _get(target, property, receiver) {\n      var base = Object(_superPropBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, property);\n      if (!base) return;\n\n      var desc = _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(base, property);\n\n      if (desc.get) {\n        return desc.get.call(receiver);\n      }\n\n      return desc.value;\n    };\n  }\n\n  return _get(target, property, receiver || target);\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/get.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js":
/*!******************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _getPrototypeOf; });\n/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ \"../../../../../node_modules/@babel/runtime-corejs3/core-js/object/get-prototype-of.js\");\n/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ \"../../../../../node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js\");\n/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {\n    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js":
/*!************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _inherits; });\n/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ \"../../../../../node_modules/@babel/runtime-corejs3/core-js/object/create.js\");\n/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js\");\n\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js":
/*!*****************************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _possibleConstructorReturn; });\n/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js\");\n/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self);\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js":
/*!******************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _setPrototypeOf; });\n/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ \"../../../../../node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js\");\n/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/superPropBase.js":
/*!*****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/superPropBase.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _superPropBase; });\n/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf */ \"../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js\");\n\nfunction _superPropBase(object, property) {\n  while (!Object.prototype.hasOwnProperty.call(object, property)) {\n    object = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(object);\n    if (object === null) break;\n  }\n\n  return object;\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/superPropBase.js?");

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js":
/*!**********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _typeof; });\n/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ \"../../../../../node_modules/@babel/runtime-corejs3/core-js/symbol/iterator.js\");\n/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ \"../../../../../node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === \"function\" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === \"function\" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === \"function\" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === \"function\" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/index.js":
/*!****************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"../../../../../node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/index.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/adapters/xhr.js":
/*!***************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/adapters/xhr.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../../../../../node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"../../../../../node_modules/axios/lib/core/settle.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"../../../../../node_modules/axios/lib/helpers/buildURL.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"../../../../../node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"../../../../../node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"../../../../../node_modules/axios/lib/core/createError.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password || '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request.onreadystatechange = function handleLoad() {\n      if (!request || request.readyState !== 4) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(createError('Request aborted', config, 'ECONNABORTED', request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      var cookies = __webpack_require__(/*! ./../helpers/cookies */ \"../../../../../node_modules/axios/lib/helpers/cookies.js\");\n\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (config.withCredentials) {\n      request.withCredentials = true;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (requestData === undefined) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/axios.js":
/*!********************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/axios.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"../../../../../node_modules/axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"../../../../../node_modules/axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"../../../../../node_modules/axios/lib/core/Axios.js\");\nvar mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ \"../../../../../node_modules/axios/lib/core/mergeConfig.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"../../../../../node_modules/axios/lib/defaults.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"../../../../../node_modules/axios/lib/cancel/Cancel.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"../../../../../node_modules/axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"../../../../../node_modules/axios/lib/cancel/isCancel.js\");\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"../../../../../node_modules/axios/lib/helpers/spread.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/cancel/Cancel.js":
/*!****************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/cancel/Cancel.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/cancel/CancelToken.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/cancel/CancelToken.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"../../../../../node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/cancel/isCancel.js":
/*!******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/cancel/isCancel.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/core/Axios.js":
/*!*************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/Axios.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../../../../../node_modules/axios/lib/utils.js\");\nvar buildURL = __webpack_require__(/*! ../helpers/buildURL */ \"../../../../../node_modules/axios/lib/helpers/buildURL.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"../../../../../node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"../../../../../node_modules/axios/lib/core/dispatchRequest.js\");\nvar mergeConfig = __webpack_require__(/*! ./mergeConfig */ \"../../../../../node_modules/axios/lib/core/mergeConfig.js\");\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = arguments[1] || {};\n    config.url = arguments[0];\n  } else {\n    config = config || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n  config.method = config.method ? config.method.toLowerCase() : 'get';\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/core/InterceptorManager.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/InterceptorManager.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../../../../../node_modules/axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/core/createError.js":
/*!*******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/createError.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"../../../../../node_modules/axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/core/dispatchRequest.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/dispatchRequest.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../../../../../node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"../../../../../node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"../../../../../node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"../../../../../node_modules/axios/lib/defaults.js\");\nvar isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ \"../../../../../node_modules/axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ \"../../../../../node_modules/axios/lib/helpers/combineURLs.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Support baseURL config\n  if (config.baseURL && !isAbsoluteURL(config.url)) {\n    config.url = combineURLs(config.baseURL, config.url);\n  }\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers || {}\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/core/enhanceError.js":
/*!********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/enhanceError.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n\n  error.request = request;\n  error.response = response;\n  error.isAxiosError = true;\n\n  error.toJSON = function() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code\n    };\n  };\n  return error;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/core/mergeConfig.js":
/*!*******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/mergeConfig.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"../../../../../node_modules/axios/lib/utils.js\");\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {\n    if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    }\n  });\n\n  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {\n    if (utils.isObject(config2[prop])) {\n      config[prop] = utils.deepMerge(config1[prop], config2[prop]);\n    } else if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    } else if (utils.isObject(config1[prop])) {\n      config[prop] = utils.deepMerge(config1[prop]);\n    } else if (typeof config1[prop] !== 'undefined') {\n      config[prop] = config1[prop];\n    }\n  });\n\n  utils.forEach([\n    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',\n    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',\n    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',\n    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',\n    'socketPath'\n  ], function defaultToConfig2(prop) {\n    if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    } else if (typeof config1[prop] !== 'undefined') {\n      config[prop] = config1[prop];\n    }\n  });\n\n  return config;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/mergeConfig.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/core/settle.js":
/*!**************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/settle.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! ./createError */ \"../../../../../node_modules/axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/core/transformData.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/transformData.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../../../../../node_modules/axios/lib/utils.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/defaults.js":
/*!***********************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/defaults.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nvar utils = __webpack_require__(/*! ./utils */ \"../../../../../node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"../../../../../node_modules/axios/lib/helpers/normalizeHeaderName.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  // Only Node.JS has a process variable that is of [[Class]] process\n  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ./adapters/http */ \"../../../../../node_modules/axios/lib/adapters/xhr.js\");\n  } else if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"../../../../../node_modules/axios/lib/adapters/xhr.js\");\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"../../../../../node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/helpers/bind.js":
/*!***************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/bind.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/helpers/buildURL.js":
/*!*******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/buildURL.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../../../../../node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%40/gi, '@').\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/helpers/combineURLs.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/combineURLs.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/helpers/cookies.js":
/*!******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/cookies.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../../../../../node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../../../../../node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"../../../../../node_modules/axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/helpers/parseHeaders.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"../../../../../node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/helpers/spread.js":
/*!*****************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/spread.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "../../../../../node_modules/axios/lib/utils.js":
/*!********************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/utils.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"../../../../../node_modules/axios/lib/helpers/bind.js\");\nvar isBuffer = __webpack_require__(/*! is-buffer */ \"../../../../../node_modules/is-buffer/index.js\");\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (typeof result[key] === 'object' && typeof val === 'object') {\n      result[key] = merge(result[key], val);\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Function equal to merge with the difference being that no reference\n * to original objects is kept.\n *\n * @see merge\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction deepMerge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (typeof result[key] === 'object' && typeof val === 'object') {\n      result[key] = deepMerge(result[key], val);\n    } else if (typeof val === 'object') {\n      result[key] = deepMerge({}, val);\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  deepMerge: deepMerge,\n  extend: extend,\n  trim: trim\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/es/object/create.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/object/create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.create */ \"../../../../../node_modules/core-js-pure/modules/es.object.create.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../../../../../node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nmodule.exports = function create(P, D) {\n  return Object.create(P, D);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/object/create.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/es/object/define-property.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/object/define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.define-property */ \"../../../../../node_modules/core-js-pure/modules/es.object.define-property.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../../../../../node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nvar defineProperty = module.exports = function defineProperty(it, key, desc) {\n  return Object.defineProperty(it, key, desc);\n};\n\nif (Object.defineProperty.sham) defineProperty.sham = true;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/object/define-property.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/es/object/get-own-property-descriptor.js":
/*!*******************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.get-own-property-descriptor */ \"../../../../../node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../../../../../node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nvar getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {\n  return Object.getOwnPropertyDescriptor(it, key);\n};\n\nif (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/es/object/get-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/object/get-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.get-prototype-of */ \"../../../../../node_modules/core-js-pure/modules/es.object.get-prototype-of.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../../../../../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.getPrototypeOf;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/object/get-prototype-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/es/object/set-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/object/set-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.set-prototype-of */ \"../../../../../node_modules/core-js-pure/modules/es.object.set-prototype-of.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../../../../../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.setPrototypeOf;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/object/set-prototype-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/es/reflect/get.js":
/*!********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/reflect/get.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.reflect.get */ \"../../../../../node_modules/core-js-pure/modules/es.reflect.get.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../../../../../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Reflect.get;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/reflect/get.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/es/symbol/index.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/symbol/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.array.concat */ \"../../../../../node_modules/core-js-pure/modules/es.array.concat.js\");\n__webpack_require__(/*! ../../modules/es.object.to-string */ \"../../../../../node_modules/core-js-pure/modules/es.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es.symbol */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.js\");\n__webpack_require__(/*! ../../modules/es.symbol.async-iterator */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es.symbol.description */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.description.js\");\n__webpack_require__(/*! ../../modules/es.symbol.has-instance */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.has-instance.js\");\n__webpack_require__(/*! ../../modules/es.symbol.is-concat-spreadable */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js\");\n__webpack_require__(/*! ../../modules/es.symbol.iterator */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.iterator.js\");\n__webpack_require__(/*! ../../modules/es.symbol.match */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.match.js\");\n__webpack_require__(/*! ../../modules/es.symbol.match-all */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.match-all.js\");\n__webpack_require__(/*! ../../modules/es.symbol.replace */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.replace.js\");\n__webpack_require__(/*! ../../modules/es.symbol.search */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.search.js\");\n__webpack_require__(/*! ../../modules/es.symbol.species */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.species.js\");\n__webpack_require__(/*! ../../modules/es.symbol.split */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.split.js\");\n__webpack_require__(/*! ../../modules/es.symbol.to-primitive */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.to-primitive.js\");\n__webpack_require__(/*! ../../modules/es.symbol.to-string-tag */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.to-string-tag.js\");\n__webpack_require__(/*! ../../modules/es.symbol.unscopables */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.unscopables.js\");\n__webpack_require__(/*! ../../modules/es.math.to-string-tag */ \"../../../../../node_modules/core-js-pure/modules/es.math.to-string-tag.js\");\n__webpack_require__(/*! ../../modules/es.json.to-string-tag */ \"../../../../../node_modules/core-js-pure/modules/es.json.to-string-tag.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../../../../../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Symbol;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/symbol/index.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/es/symbol/iterator.js":
/*!************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/symbol/iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.symbol.iterator */ \"../../../../../node_modules/core-js-pure/modules/es.symbol.iterator.js\");\n__webpack_require__(/*! ../../modules/es.string.iterator */ \"../../../../../node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"../../../../../node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar WrappedWellKnownSymbolModule = __webpack_require__(/*! ../../internals/wrapped-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js\");\n\nmodule.exports = WrappedWellKnownSymbolModule.f('iterator');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/es/symbol/iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/features/object/create.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/object/create.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/object/create */ \"../../../../../node_modules/core-js-pure/es/object/create.js\");\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/object/create.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/features/object/define-property.js":
/*!*************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/object/define-property.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/object/define-property */ \"../../../../../node_modules/core-js-pure/es/object/define-property.js\");\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/object/define-property.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/features/object/get-own-property-descriptor.js":
/*!*************************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/object/get-own-property-descriptor.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/object/get-own-property-descriptor */ \"../../../../../node_modules/core-js-pure/es/object/get-own-property-descriptor.js\");\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/features/object/get-prototype-of.js":
/*!**************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/object/get-prototype-of.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/object/get-prototype-of */ \"../../../../../node_modules/core-js-pure/es/object/get-prototype-of.js\");\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/object/get-prototype-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/features/object/set-prototype-of.js":
/*!**************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/object/set-prototype-of.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/object/set-prototype-of */ \"../../../../../node_modules/core-js-pure/es/object/set-prototype-of.js\");\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/object/set-prototype-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/features/reflect/get.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/reflect/get.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/reflect/get */ \"../../../../../node_modules/core-js-pure/es/reflect/get.js\");\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/reflect/get.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/features/symbol/index.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/symbol/index.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/symbol */ \"../../../../../node_modules/core-js-pure/es/symbol/index.js\");\n\n__webpack_require__(/*! ../../modules/esnext.symbol.async-dispose */ \"../../../../../node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.dispose */ \"../../../../../node_modules/core-js-pure/modules/esnext.symbol.dispose.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.observable */ \"../../../../../node_modules/core-js-pure/modules/esnext.symbol.observable.js\");\n__webpack_require__(/*! ../../modules/esnext.symbol.pattern-match */ \"../../../../../node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js\");\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../../modules/esnext.symbol.replace-all */ \"../../../../../node_modules/core-js-pure/modules/esnext.symbol.replace-all.js\");\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/symbol/index.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/features/symbol/iterator.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/symbol/iterator.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/symbol/iterator */ \"../../../../../node_modules/core-js-pure/es/symbol/iterator.js\");\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/features/symbol/iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/a-function.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/a-function.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/a-function.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/a-possible-prototype.js":
/*!************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/a-possible-prototype.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!**********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/add-to-unscopables.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/an-object.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/an-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/array-includes.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/array-includes.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js-pure/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"../../../../../node_modules/core-js-pure/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/array-includes.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/array-iteration.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/array-iteration.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/bind-context */ \"../../../../../node_modules/core-js-pure/internals/bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../../../../../node_modules/core-js-pure/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../../../node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js-pure/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../../../../../node_modules/core-js-pure/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else if (IS_EVERY) return false;  // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/array-iteration.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/array-method-has-species-support.js":
/*!************************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js-pure/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ \"../../../../../node_modules/core-js-pure/internals/v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/array-species-create.js":
/*!************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/array-species-create.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js-pure/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../../../../node_modules/core-js-pure/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/array-species-create.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/bind-context.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/bind-context.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"../../../../../node_modules/core-js-pure/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/bind-context.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/classof-raw.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/classof-raw.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/classof-raw.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/classof.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/classof.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"../../../../../node_modules/core-js-pure/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/classof.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/correct-prototype-getter.js":
/*!****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/create-iterator-constructor.js":
/*!*******************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"../../../../../node_modules/core-js-pure/internals/iterators-core.js\").IteratorPrototype;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"../../../../../node_modules/core-js-pure/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../../../node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../../../node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../../../node_modules/core-js-pure/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!**********************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../../../node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!******************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/create-property-descriptor.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/create-property.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/create-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../../../node_modules/core-js-pure/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../../../node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/create-property.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/define-iterator.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/define-iterator.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js-pure/internals/export.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"../../../../../node_modules/core-js-pure/internals/create-iterator-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../../../../../node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"../../../../../node_modules/core-js-pure/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../../../node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../../../node_modules/core-js-pure/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../../../node_modules/core-js-pure/internals/is-pure.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../../../node_modules/core-js-pure/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"../../../../../node_modules/core-js-pure/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n    defaultIterator = function values() { return nativeIterator.call(this); };\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);\n  }\n  Iterators[NAME] = defaultIterator;\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  return methods;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/define-iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js":
/*!****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/define-well-known-symbol.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"../../../../../node_modules/core-js-pure/internals/path.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js-pure/internals/has.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js-pure/internals/object-define-property.js\").f;\n\nmodule.exports = function (NAME) {\n  var Symbol = path.Symbol || (path.Symbol = {});\n  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {\n    value: wrappedWellKnownSymbolModule.f(NAME)\n  });\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/define-well-known-symbol.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/descriptors.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/descriptors.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js-pure/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/descriptors.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/document-create-element.js":
/*!***************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/document-create-element.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js-pure/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/document-create-element.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/dom-iterables.js":
/*!*****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/dom-iterables.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/dom-iterables.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!*****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/enum-bug-keys.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/export.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/export.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js-pure/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../../../../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"../../../../../node_modules/core-js-pure/internals/is-forced.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"../../../../../node_modules/core-js-pure/internals/path.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"../../../../../node_modules/core-js-pure/internals/bind-context.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js-pure/internals/has.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof NativeConstructor) {\n      switch (arguments.length) {\n        case 0: return new NativeConstructor();\n        case 1: return new NativeConstructor(a);\n        case 2: return new NativeConstructor(a, b);\n      } return new NativeConstructor(a, b, c);\n    } return NativeConstructor.apply(this, arguments);\n  };\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n\n  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;\n\n  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});\n  var targetPrototype = target.prototype;\n\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contains in native\n    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);\n\n    targetProperty = target[key];\n\n    if (USE_NATIVE) if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key];\n\n    // export native or implementation\n    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];\n\n    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;\n\n    // bind timers to global for call from export context\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);\n    // wrap global constructors for prevent changs in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);\n    // make static versions for prototype methods\n    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);\n    // default case\n    else resultProperty = sourceProperty;\n\n    // add a flag to not completely full polyfills\n    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(resultProperty, 'sham', true);\n    }\n\n    target[key] = resultProperty;\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n      if (!has(path, VIRTUAL_PROTOTYPE)) {\n        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});\n      }\n      // export virtual prototype methods\n      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;\n      // export real prototype methods\n      if (options.real && targetPrototype && !targetPrototype[key]) {\n        createNonEnumerableProperty(targetPrototype, key, sourceProperty);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/export.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/fails.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/fails.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/fails.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/function-to-string.js":
/*!**********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/function-to-string.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"../../../../../node_modules/core-js-pure/internals/shared.js\");\n\nmodule.exports = shared('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/function-to-string.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/get-built-in.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/get-built-in.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"../../../../../node_modules/core-js-pure/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js-pure/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/get-built-in.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/global.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/global.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"../../../../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/global.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/has.js":
/*!*******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/has.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/has.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/hidden-keys.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/hidden-keys.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/hidden-keys.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/html.js":
/*!********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/html.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../../../node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/html.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js-pure/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"../../../../../node_modules/core-js-pure/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/ie8-dom-define.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/indexed-object.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/indexed-object.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../../../../node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/indexed-object.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/internal-state.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/internal-state.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"../../../../../node_modules/core-js-pure/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js-pure/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js-pure/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../../../node_modules/core-js-pure/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../../../node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/internal-state.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/is-array.js":
/*!************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/is-array.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../../../../node_modules/core-js-pure/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/is-array.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/is-forced.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/is-forced.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js-pure/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/is-object.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/is-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/is-object.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/is-pure.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/is-pure.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/is-pure.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/iterators-core.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/iterators-core.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../../../../../node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js-pure/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../../../node_modules/core-js-pure/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () { return this; };\n\n// `%IteratorPrototype%` object\n// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nif (IteratorPrototype == undefined) IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\nif (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {\n  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/iterators-core.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/iterators.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/iterators.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/iterators.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/native-symbol.js":
/*!*****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/native-symbol.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/native-symbol.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/native-weak-map.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/native-weak-map.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js-pure/internals/global.js\");\nvar nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ \"../../../../../node_modules/core-js-pure/internals/function-to-string.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/native-weak-map.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-create.js":
/*!*****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-create.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js-pure/internals/an-object.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"../../../../../node_modules/core-js-pure/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../../../../../node_modules/core-js-pure/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../../../node_modules/core-js-pure/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"../../../../../node_modules/core-js-pure/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"../../../../../node_modules/core-js-pure/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../../../node_modules/core-js-pure/internals/shared-key.js\");\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar PROTOTYPE = 'prototype';\nvar Empty = function () { /* empty */ };\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var length = enumBugKeys.length;\n  var lt = '<';\n  var script = 'script';\n  var gt = '>';\n  var js = 'java' + script + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  iframe.src = String(js);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];\n  return createDict();\n};\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-create.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-define-properties.js":
/*!****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-define-properties.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js-pure/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js-pure/internals/an-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"../../../../../node_modules/core-js-pure/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperties\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-define-properties.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-define-property.js":
/*!**************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-define-property.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"../../../../../node_modules/core-js-pure/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js-pure/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../../../node_modules/core-js-pure/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-define-property.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!**************************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"../../../../../node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../../../node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../../../node_modules/core-js-pure/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js-pure/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"../../../../../node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-get-own-property-names-external.js":
/*!******************************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-get-own-property-names-external.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"../../../../../node_modules/core-js-pure/internals/object-get-own-property-names.js\").f;\n\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return nativeGetOwnPropertyNames(it);\n  } catch (error) {\n    return windowNames.slice();\n  }\n};\n\n// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]'\n    ? getWindowNames(it)\n    : nativeGetOwnPropertyNames(toIndexedObject(it));\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-get-own-property-names-external.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-get-own-property-names.js":
/*!*********************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-get-own-property-names.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"../../../../../node_modules/core-js-pure/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../../../../../node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-get-own-property-symbols.js":
/*!***********************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-get-own-property-symbols.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-get-prototype-of.js":
/*!***************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js-pure/internals/has.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../../../node_modules/core-js-pure/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../../../node_modules/core-js-pure/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"../../../../../node_modules/core-js-pure/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar ObjectPrototype = Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-keys-internal.js":
/*!************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js-pure/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"../../../../../node_modules/core-js-pure/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../../../node_modules/core-js-pure/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-keys-internal.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-keys.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-keys.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"../../../../../node_modules/core-js-pure/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../../../../../node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-keys.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!*********************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-set-prototype-of.js":
/*!***************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js-pure/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"../../../../../node_modules/core-js-pure/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/object-to-string.js":
/*!********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-to-string.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar classof = __webpack_require__(/*! ../internals/classof */ \"../../../../../node_modules/core-js-pure/internals/classof.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\n// `Object.prototype.toString` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nmodule.exports = String(test) !== '[object z]' ? function toString() {\n  return '[object ' + classof(this) + ']';\n} : test.toString;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/object-to-string.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/path.js":
/*!********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/path.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/path.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/redefine.js":
/*!************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/redefine.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (target, key, value, options) {\n  if (options && options.enumerable) target[key] = value;\n  else createNonEnumerableProperty(target, key, value);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/redefine.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/require-object-coercible.js":
/*!****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/set-global.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/set-global.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js-pure/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/set-global.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/set-to-string-tag.js":
/*!*********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js-pure/internals/has.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"../../../../../node_modules/core-js-pure/internals/object-to-string.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar METHOD_REQUIRED = toString !== ({}).toString;\n\nmodule.exports = function (it, TAG, STATIC, SET_METHOD) {\n  if (it) {\n    var target = STATIC ? it : it.prototype;\n    if (!has(target, TO_STRING_TAG)) {\n      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });\n    }\n    if (SET_METHOD && METHOD_REQUIRED) {\n      createNonEnumerableProperty(target, 'toString', toString);\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/set-to-string-tag.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/shared-key.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/shared-key.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"../../../../../node_modules/core-js-pure/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../../../../node_modules/core-js-pure/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/shared-key.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/shared-store.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/shared-store.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js-pure/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../../../../../node_modules/core-js-pure/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/shared-store.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/shared.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/shared.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../../../node_modules/core-js-pure/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"../../../../../node_modules/core-js-pure/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.4.0',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/shared.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/string-multibyte.js":
/*!********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/string-multibyte.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../../../node_modules/core-js-pure/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js-pure/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/string-multibyte.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/to-absolute-index.js":
/*!*********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../../../node_modules/core-js-pure/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/to-absolute-index.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/to-indexed-object.js":
/*!*********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../../../../../node_modules/core-js-pure/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/to-integer.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/to-integer.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/to-integer.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/to-length.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/to-length.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../../../node_modules/core-js-pure/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/to-length.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/to-object.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/to-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js-pure/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/to-object.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/to-primitive.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/to-primitive.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js-pure/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/uid.js":
/*!*******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/uid.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/uid.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/user-agent.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/user-agent.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../../../node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/user-agent.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/v8-version.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/v8-version.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js-pure/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/user-agent */ \"../../../../../node_modules/core-js-pure/internals/user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/v8-version.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/well-known-symbol.js":
/*!*********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js-pure/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"../../../../../node_modules/core-js-pure/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../../../../node_modules/core-js-pure/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../../../../../node_modules/core-js-pure/internals/native-symbol.js\");\n\nvar Symbol = global.Symbol;\nvar store = shared('wks');\n\nmodule.exports = function (name) {\n  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]\n    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/well-known-symbol.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js":
/*!*****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/wrapped-well-known-symbol.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/internals/wrapped-well-known-symbol.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.array.concat.js":
/*!*****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.array.concat.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js-pure/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js-pure/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../../../../node_modules/core-js-pure/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js-pure/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../../../node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js-pure/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"../../../../../node_modules/core-js-pure/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../../../../../node_modules/core-js-pure/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../../../../../node_modules/core-js-pure/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ \"../../../../../node_modules/core-js-pure/internals/v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  concat: function concat(arg) { // eslint-disable-line no-unused-vars\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.array.concat.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.array.iterator.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"../../../../../node_modules/core-js-pure/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../../../node_modules/core-js-pure/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../../../node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"../../../../../node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.github.io/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return { value: undefined, done: true };\n  }\n  if (kind == 'keys') return { value: index, done: false };\n  if (kind == 'values') return { value: target[index], done: false };\n  return { value: [index, target[index]], done: false };\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject\nIterators.Arguments = Iterators.Array;\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.array.iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.json.to-string-tag.js":
/*!***********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.json.to-string-tag.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js-pure/internals/global.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../../../node_modules/core-js-pure/internals/set-to-string-tag.js\");\n\n// JSON[@@toStringTag] property\n// https://tc39.github.io/ecma262/#sec-json-@@tostringtag\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.json.to-string-tag.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.math.to-string-tag.js":
/*!***********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.math.to-string-tag.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../../../node_modules/core-js-pure/internals/set-to-string-tag.js\");\n\n// Math[@@toStringTag] property\n// https://tc39.github.io/ecma262/#sec-math-@@tostringtag\nsetToStringTag(Math, 'Math', true);\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.math.to-string-tag.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.object.create.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.object.create.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"../../../../../node_modules/core-js-pure/internals/object-create.js\");\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\n$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {\n  create: create\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.object.create.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.object.define-property.js":
/*!***************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.object.define-property.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js-pure/internals/object-define-property.js\");\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\n$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {\n  defineProperty: objectDefinePropertyModile.f\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.object.define-property.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js":
/*!***************************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js-pure/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js-pure/internals/fails.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../../../../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js-pure/internals/descriptors.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });\nvar FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\n$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {\n    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);\n  }\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.object.get-prototype-of.js":
/*!****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.object.get-prototype-of.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js-pure/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js-pure/internals/fails.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../../../node_modules/core-js-pure/internals/to-object.js\");\nvar nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../../../../../node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"../../../../../node_modules/core-js-pure/internals/correct-prototype-getter.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {\n  getPrototypeOf: function getPrototypeOf(it) {\n    return nativeGetPrototypeOf(toObject(it));\n  }\n});\n\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.object.get-prototype-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.object.set-prototype-of.js":
/*!****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.object.set-prototype-of.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js-pure/internals/export.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"../../../../../node_modules/core-js-pure/internals/object-set-prototype-of.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n$({ target: 'Object', stat: true }, {\n  setPrototypeOf: setPrototypeOf\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.object.set-prototype-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.object.to-string.js":
/*!*********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.object.to-string.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.object.to-string.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.reflect.get.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.reflect.get.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js-pure/internals/export.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js-pure/internals/is-object.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js-pure/internals/an-object.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js-pure/internals/has.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../../../../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../../../../../node_modules/core-js-pure/internals/object-get-prototype-of.js\");\n\n// `Reflect.get` method\n// https://tc39.github.io/ecma262/#sec-reflect.get\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var descriptor, prototype;\n  if (anObject(target) === receiver) return target[propertyKey];\n  if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value')\n    ? descriptor.value\n    : descriptor.get === undefined\n      ? undefined\n      : descriptor.get.call(receiver);\n  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);\n}\n\n$({ target: 'Reflect', stat: true }, {\n  get: get\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.reflect.get.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.string.iterator.js":
/*!********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"../../../../../node_modules/core-js-pure/internals/string-multibyte.js\").charAt;\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../../../node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"../../../../../node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: String(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return { value: undefined, done: true };\n  point = charAt(string, index);\n  state.index += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.string.iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.async-iterator.js":
/*!**************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.async-iterator.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.asyncIterator` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.asynciterator\ndefineWellKnownSymbol('asyncIterator');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.async-iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.description.js":
/*!***********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.description.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.description.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.has-instance.js":
/*!************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.has-instance.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.hasInstance` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.hasinstance\ndefineWellKnownSymbol('hasInstance');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.has-instance.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js":
/*!********************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.isConcatSpreadable` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable\ndefineWellKnownSymbol('isConcatSpreadable');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.iterator.js":
/*!********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.iterator` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.iterator\ndefineWellKnownSymbol('iterator');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js-pure/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../../../node_modules/core-js-pure/internals/get-built-in.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../../../node_modules/core-js-pure/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../../../../../node_modules/core-js-pure/internals/native-symbol.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js-pure/internals/fails.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js-pure/internals/has.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../../../../node_modules/core-js-pure/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js-pure/internals/is-object.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js-pure/internals/an-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../../../node_modules/core-js-pure/internals/to-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../../../node_modules/core-js-pure/internals/to-primitive.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../../../node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ \"../../../../../node_modules/core-js-pure/internals/object-create.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"../../../../../node_modules/core-js-pure/internals/object-keys.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"../../../../../node_modules/core-js-pure/internals/object-get-own-property-names.js\");\nvar getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"../../../../../node_modules/core-js-pure/internals/object-get-own-property-names-external.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"../../../../../node_modules/core-js-pure/internals/object-get-own-property-symbols.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../../../../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js-pure/internals/object-define-property.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"../../../../../node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../../../node_modules/core-js-pure/internals/redefine.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"../../../../../node_modules/core-js-pure/internals/shared.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../../../node_modules/core-js-pure/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../../../node_modules/core-js-pure/internals/hidden-keys.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../../../../node_modules/core-js-pure/internals/uid.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/wrapped-well-known-symbol.js\");\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../../../node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../../../node_modules/core-js-pure/internals/internal-state.js\");\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"../../../../../node_modules/core-js-pure/internals/array-iteration.js\").forEach;\n\nvar HIDDEN = sharedKey('hidden');\nvar SYMBOL = 'Symbol';\nvar PROTOTYPE = 'prototype';\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(SYMBOL);\nvar ObjectPrototype = Object[PROTOTYPE];\nvar $Symbol = global.Symbol;\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;\nvar nativePropertyIsEnumerable = propertyIsEnumerableModule.f;\nvar AllSymbols = shared('symbols');\nvar ObjectPrototypeSymbols = shared('op-symbols');\nvar StringToSymbolRegistry = shared('string-to-symbol-registry');\nvar SymbolToStringRegistry = shared('symbol-to-string-registry');\nvar WellKnownSymbolsStore = shared('wks');\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDescriptor = DESCRIPTORS && fails(function () {\n  return nativeObjectCreate(nativeDefineProperty({}, 'a', {\n    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (O, P, Attributes) {\n  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);\n  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];\n  nativeDefineProperty(O, P, Attributes);\n  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {\n    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);\n  }\n} : nativeDefineProperty;\n\nvar wrap = function (tag, description) {\n  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);\n  setInternalState(symbol, {\n    type: SYMBOL,\n    tag: tag,\n    description: description\n  });\n  if (!DESCRIPTORS) symbol.description = description;\n  return symbol;\n};\n\nvar isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return Object(it) instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(O, P, Attributes) {\n  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);\n  anObject(O);\n  var key = toPrimitive(P, true);\n  anObject(Attributes);\n  if (has(AllSymbols, key)) {\n    if (!Attributes.enumerable) {\n      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));\n      O[HIDDEN][key] = true;\n    } else {\n      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;\n      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });\n    } return setSymbolDescriptor(O, key, Attributes);\n  } return nativeDefineProperty(O, key, Attributes);\n};\n\nvar $defineProperties = function defineProperties(O, Properties) {\n  anObject(O);\n  var properties = toIndexedObject(Properties);\n  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));\n  $forEach(keys, function (key) {\n    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);\n  });\n  return O;\n};\n\nvar $create = function create(O, Properties) {\n  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);\n};\n\nvar $propertyIsEnumerable = function propertyIsEnumerable(V) {\n  var P = toPrimitive(V, true);\n  var enumerable = nativePropertyIsEnumerable.call(this, P);\n  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;\n  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;\n};\n\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {\n  var it = toIndexedObject(O);\n  var key = toPrimitive(P, true);\n  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;\n  var descriptor = nativeGetOwnPropertyDescriptor(it, key);\n  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {\n    descriptor.enumerable = true;\n  }\n  return descriptor;\n};\n\nvar $getOwnPropertyNames = function getOwnPropertyNames(O) {\n  var names = nativeGetOwnPropertyNames(toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);\n  });\n  return result;\n};\n\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(O) {\n  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;\n  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {\n      result.push(AllSymbols[key]);\n    }\n  });\n  return result;\n};\n\n// `Symbol` constructor\n// https://tc39.github.io/ecma262/#sec-symbol-constructor\nif (!NATIVE_SYMBOL) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');\n    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var tag = uid(description);\n    var setter = function (value) {\n      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));\n    };\n    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });\n    return wrap(tag, description);\n  };\n\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return getInternalState(this).tag;\n  });\n\n  propertyIsEnumerableModule.f = $propertyIsEnumerable;\n  definePropertyModule.f = $defineProperty;\n  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;\n  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;\n  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS) {\n    // https://github.com/tc39/proposal-Symbol-description\n    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {\n      configurable: true,\n      get: function description() {\n        return getInternalState(this).description;\n      }\n    });\n    if (!IS_PURE) {\n      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });\n    }\n  }\n\n  wrappedWellKnownSymbolModule.f = function (name) {\n    return wrap(wellKnownSymbol(name), name);\n  };\n}\n\n$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {\n  Symbol: $Symbol\n});\n\n$forEach(objectKeys(WellKnownSymbolsStore), function (name) {\n  defineWellKnownSymbol(name);\n});\n\n$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Symbol.for` method\n  // https://tc39.github.io/ecma262/#sec-symbol.for\n  'for': function (key) {\n    var string = String(key);\n    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];\n    var symbol = $Symbol(string);\n    StringToSymbolRegistry[string] = symbol;\n    SymbolToStringRegistry[symbol] = string;\n    return symbol;\n  },\n  // `Symbol.keyFor` method\n  // https://tc39.github.io/ecma262/#sec-symbol.keyfor\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');\n    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];\n  },\n  useSetter: function () { USE_SETTER = true; },\n  useSimple: function () { USE_SETTER = false; }\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {\n  // `Object.create` method\n  // https://tc39.github.io/ecma262/#sec-object.create\n  create: $create,\n  // `Object.defineProperty` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperty\n  defineProperty: $defineProperty,\n  // `Object.defineProperties` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperties\n  defineProperties: $defineProperties,\n  // `Object.getOwnPropertyDescriptor` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Object.getOwnPropertyNames` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // `Object.getOwnPropertySymbols` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\n$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return getOwnPropertySymbolsModule.f(toObject(it));\n  }\n});\n\n// `JSON.stringify` method behavior with symbols\n// https://tc39.github.io/ecma262/#sec-json.stringify\nif ($stringify) {\n  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {\n    var symbol = $Symbol();\n    // MS Edge converts symbol values to JSON as {}\n    return $stringify([symbol]) != '[null]'\n      // WebKit converts symbol values to JSON as null\n      || $stringify({ a: symbol }) != '{}'\n      // V8 throws on boxed symbols\n      || $stringify(Object(symbol)) != '{}';\n  });\n\n  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {\n    // eslint-disable-next-line no-unused-vars\n    stringify: function stringify(it, replacer, space) {\n      var args = [it];\n      var index = 1;\n      var $replacer;\n      while (arguments.length > index) args.push(arguments[index++]);\n      $replacer = replacer;\n      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n      if (!isArray(replacer)) replacer = function (key, value) {\n        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n        if (!isSymbol(value)) return value;\n      };\n      args[1] = replacer;\n      return $stringify.apply(null, args);\n    }\n  });\n}\n\n// `Symbol.prototype[@@toPrimitive]` method\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive\nif (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {\n  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n}\n// `Symbol.prototype[@@toStringTag]` property\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag\nsetToStringTag($Symbol, SYMBOL);\n\nhiddenKeys[HIDDEN] = true;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.match-all.js":
/*!*********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.match-all.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.matchAll` well-known symbol\ndefineWellKnownSymbol('matchAll');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.match-all.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.match.js":
/*!*****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.match.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.match` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.match\ndefineWellKnownSymbol('match');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.match.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.replace.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.replace.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.replace` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.replace\ndefineWellKnownSymbol('replace');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.replace.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.search.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.search.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.search` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.search\ndefineWellKnownSymbol('search');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.search.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.species.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.species.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.species` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.species\ndefineWellKnownSymbol('species');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.species.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.split.js":
/*!*****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.split.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.split` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.split\ndefineWellKnownSymbol('split');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.split.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.to-primitive.js":
/*!************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.to-primitive.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.toPrimitive` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.toprimitive\ndefineWellKnownSymbol('toPrimitive');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.to-primitive.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.to-string-tag.js":
/*!*************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.to-string-tag.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.toStringTag` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.tostringtag\ndefineWellKnownSymbol('toStringTag');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.to-string-tag.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/es.symbol.unscopables.js":
/*!***********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.unscopables.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.unscopables` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.unscopables\ndefineWellKnownSymbol('unscopables');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/es.symbol.unscopables.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js":
/*!*****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.asyncDispose` well-known symbol\n// https://github.com/tc39/proposal-using-statement\ndefineWellKnownSymbol('asyncDispose');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/esnext.symbol.dispose.js":
/*!***********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/esnext.symbol.dispose.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.dispose` well-known symbol\n// https://github.com/tc39/proposal-using-statement\ndefineWellKnownSymbol('dispose');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/esnext.symbol.dispose.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/esnext.symbol.observable.js":
/*!**************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/esnext.symbol.observable.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.observable` well-known symbol\n// https://github.com/tc39/proposal-observable\ndefineWellKnownSymbol('observable');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/esnext.symbol.observable.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js":
/*!*****************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\n// `Symbol.patternMatch` well-known symbol\n// https://github.com/tc39/proposal-pattern-matching\ndefineWellKnownSymbol('patternMatch');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/esnext.symbol.replace-all.js":
/*!***************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/esnext.symbol.replace-all.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: remove from `core-js@4`\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\ndefineWellKnownSymbol('replaceAll');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/esnext.symbol.replace-all.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js-pure/modules/web.dom-collections.iterator.js":
/*!******************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es.array.iterator */ \"../../../../../node_modules/core-js-pure/modules/es.array.iterator.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"../../../../../node_modules/core-js-pure/internals/dom-iterables.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js-pure/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../../../node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  if (CollectionPrototype && !CollectionPrototype[TO_STRING_TAG]) {\n    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n  }\n  Iterators[COLLECTION_NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js-pure/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/a-function.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/a-function.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/a-possible-prototype.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/a-possible-prototype.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/a-possible-prototype.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/add-to-unscopables.js":
/*!*****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/add-to-unscopables.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"../../../../../node_modules/core-js/internals/object-create.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar UNSCOPABLES = wellKnownSymbol('unscopables');\nvar ArrayPrototype = Array.prototype;\n\n// Array.prototype[@@unscopables]\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\nif (ArrayPrototype[UNSCOPABLES] == undefined) {\n  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, create(null));\n}\n\n// add a key to Array.prototype[@@unscopables]\nmodule.exports = function (key) {\n  ArrayPrototype[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/add-to-unscopables.js?");

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

/***/ "../../../../../node_modules/core-js/internals/array-for-each.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-for-each.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"../../../../../node_modules/core-js/internals/array-iteration.js\").forEach;\nvar sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ \"../../../../../node_modules/core-js/internals/sloppy-array-method.js\");\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\nmodule.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-for-each.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/array-includes.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-includes.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"../../../../../node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/array-iteration.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-iteration.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/bind-context */ \"../../../../../node_modules/core-js/internals/bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../../../../../node_modules/core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../../../node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../../../../../node_modules/core-js/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else if (IS_EVERY) return false;  // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-iteration.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/array-last-index-of.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-last-index-of.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../../../node_modules/core-js/internals/to-integer.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js/internals/to-length.js\");\nvar sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ \"../../../../../node_modules/core-js/internals/sloppy-array-method.js\");\n\nvar min = Math.min;\nvar nativeLastIndexOf = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;\nvar SLOPPY_METHOD = sloppyArrayMethod('lastIndexOf');\n\n// `Array.prototype.lastIndexOf` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof\nmodule.exports = (NEGATIVE_ZERO || SLOPPY_METHOD) ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n  // convert -0 to +0\n  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;\n  var O = toIndexedObject(this);\n  var length = toLength(O.length);\n  var index = length - 1;\n  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));\n  if (index < 0) index = length + index;\n  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;\n  return -1;\n} : nativeLastIndexOf;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-last-index-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/array-method-has-species-support.js":
/*!*******************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-method-has-species-support.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ \"../../../../../node_modules/core-js/internals/v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/array-species-create.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-species-create.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../../../../node_modules/core-js/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/bind-context.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/bind-context.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"../../../../../node_modules/core-js/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/bind-context.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/classof-raw.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/classof-raw.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/classof.js":
/*!******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/classof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"../../../../../node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/classof.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/copy-constructor-properties.js":
/*!**************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"../../../../../node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../../../../node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!**********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\nmodule.exports = function (METHOD_NAME) {\n  var regexp = /./;\n  try {\n    '/./'[METHOD_NAME](regexp);\n  } catch (e) {\n    try {\n      regexp[MATCH] = false;\n      return '/./'[METHOD_NAME](regexp);\n    } catch (f) { /* empty */ }\n  } return false;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/correct-is-regexp-logic.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/correct-prototype-getter.js":
/*!***********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/create-iterator-constructor.js":
/*!**************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"../../../../../node_modules/core-js/internals/iterators-core.js\").IteratorPrototype;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"../../../../../node_modules/core-js/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../../../node_modules/core-js/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../../../node_modules/core-js/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../../../node_modules/core-js/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/create-iterator-constructor.js?");

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

/***/ "../../../../../node_modules/core-js/internals/create-property.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/create-property.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../../../node_modules/core-js/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../../../node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/create-property.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/define-iterator.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/define-iterator.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"../../../../../node_modules/core-js/internals/create-iterator-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../../../../../node_modules/core-js/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"../../../../../node_modules/core-js/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../../../node_modules/core-js/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../../../node_modules/core-js/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../../../node_modules/core-js/internals/is-pure.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../../../node_modules/core-js/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"../../../../../node_modules/core-js/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n    defaultIterator = function values() { return nativeIterator.call(this); };\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);\n  }\n  Iterators[NAME] = defaultIterator;\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  return methods;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/define-iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/define-well-known-symbol.js":
/*!***********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/define-well-known-symbol.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"../../../../../node_modules/core-js/internals/path.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ \"../../../../../node_modules/core-js/internals/wrapped-well-known-symbol.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js/internals/object-define-property.js\").f;\n\nmodule.exports = function (NAME) {\n  var Symbol = path.Symbol || (path.Symbol = {});\n  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {\n    value: wrappedWellKnownSymbolModule.f(NAME)\n  });\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/define-well-known-symbol.js?");

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

/***/ "../../../../../node_modules/core-js/internals/dom-iterables.js":
/*!************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/dom-iterables.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/dom-iterables.js?");

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

/***/ "../../../../../node_modules/core-js/internals/function-to-string.js":
/*!*****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/function-to-string.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"../../../../../node_modules/core-js/internals/shared.js\");\n\nmodule.exports = shared('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/function-to-string.js?");

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

/***/ "../../../../../node_modules/core-js/internals/html.js":
/*!***************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/html.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../../../node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/html.js?");

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

/***/ "../../../../../node_modules/core-js/internals/internal-state.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/internal-state.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"../../../../../node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../../../node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../../../node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/is-array.js":
/*!*******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/is-array.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../../../../node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/is-array.js?");

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

/***/ "../../../../../node_modules/core-js/internals/is-regexp.js":
/*!********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/is-regexp.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../../../../node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.github.io/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/is-regexp.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/iterators-core.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/iterators-core.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../../../../../node_modules/core-js/internals/object-get-prototype-of.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../../../node_modules/core-js/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () { return this; };\n\n// `%IteratorPrototype%` object\n// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nif (IteratorPrototype == undefined) IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\nif (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {\n  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/iterators-core.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/iterators.js":
/*!********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/iterators.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/iterators.js?");

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

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ \"../../../../../node_modules/core-js/internals/function-to-string.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/not-a-regexp.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/not-a-regexp.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"../../../../../node_modules/core-js/internals/is-regexp.js\");\n\nmodule.exports = function (it) {\n  if (isRegExp(it)) {\n    throw TypeError(\"The method doesn't accept regular expressions\");\n  } return it;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/not-a-regexp.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/object-create.js":
/*!************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-create.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"../../../../../node_modules/core-js/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../../../../../node_modules/core-js/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../../../node_modules/core-js/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"../../../../../node_modules/core-js/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"../../../../../node_modules/core-js/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../../../node_modules/core-js/internals/shared-key.js\");\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar PROTOTYPE = 'prototype';\nvar Empty = function () { /* empty */ };\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var length = enumBugKeys.length;\n  var lt = '<';\n  var script = 'script';\n  var gt = '>';\n  var js = 'java' + script + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  iframe.src = String(js);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];\n  return createDict();\n};\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-create.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/object-define-properties.js":
/*!***********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-define-properties.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"../../../../../node_modules/core-js/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperties\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-define-properties.js?");

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

/***/ "../../../../../node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!*************************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"../../../../../node_modules/core-js/internals/object-get-own-property-names.js\").f;\n\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return nativeGetOwnPropertyNames(it);\n  } catch (error) {\n    return windowNames.slice();\n  }\n};\n\n// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]'\n    ? getWindowNames(it)\n    : nativeGetOwnPropertyNames(toIndexedObject(it));\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-get-own-property-names-external.js?");

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

/***/ "../../../../../node_modules/core-js/internals/object-get-prototype-of.js":
/*!**********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../../../node_modules/core-js/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../../../node_modules/core-js/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"../../../../../node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar ObjectPrototype = Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/object-keys-internal.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-keys-internal.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"../../../../../node_modules/core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../../../node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/object-keys.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-keys.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"../../../../../node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../../../../../node_modules/core-js/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-keys.js?");

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

/***/ "../../../../../node_modules/core-js/internals/object-set-prototype-of.js":
/*!**********************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"../../../../../node_modules/core-js/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/object-to-string.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-to-string.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar classof = __webpack_require__(/*! ../internals/classof */ \"../../../../../node_modules/core-js/internals/classof.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\n// `Object.prototype.toString` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nmodule.exports = String(test) !== '[object z]' ? function toString() {\n  return '[object ' + classof(this) + ']';\n} : test.toString;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/object-to-string.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/own-keys.js":
/*!*******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/own-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../../../node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"../../../../../node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"../../../../../node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/parse-int.js":
/*!********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/parse-int.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar trim = __webpack_require__(/*! ../internals/string-trim */ \"../../../../../node_modules/core-js/internals/string-trim.js\").trim;\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"../../../../../node_modules/core-js/internals/whitespaces.js\");\n\nvar nativeParseInt = global.parseInt;\nvar hex = /^[+-]?0[Xx]/;\nvar FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;\n\n// `parseInt` method\n// https://tc39.github.io/ecma262/#sec-parseint-string-radix\nmodule.exports = FORCED ? function parseInt(string, radix) {\n  var S = trim(String(string));\n  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));\n} : nativeParseInt;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/parse-int.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/path.js":
/*!***************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/path.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/redefine.js":
/*!*******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/redefine.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"../../../../../node_modules/core-js/internals/shared.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../../../../../node_modules/core-js/internals/set-global.js\");\nvar nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ \"../../../../../node_modules/core-js/internals/function-to-string.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../../../node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(nativeFunctionToString).split('toString');\n\nshared('inspectSource', function (it) {\n  return nativeFunctionToString.call(it);\n});\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/redefine.js?");

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

/***/ "../../../../../node_modules/core-js/internals/same-value.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/same-value.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `SameValue` abstract operation\n// https://tc39.github.io/ecma262/#sec-samevalue\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/same-value.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/set-global.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/set-global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/set-to-string-tag.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/set-to-string-tag.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js/internals/object-define-property.js\").f;\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC) {\n  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {\n    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });\n  }\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/set-to-string-tag.js?");

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

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../../../node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"../../../../../node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.4.0',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/sloppy-array-method.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/sloppy-array-method.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !method || !fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/sloppy-array-method.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/species-constructor.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/species-constructor.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../../../../../node_modules/core-js/internals/a-function.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `SpeciesConstructor` abstract operation\n// https://tc39.github.io/ecma262/#sec-speciesconstructor\nmodule.exports = function (O, defaultConstructor) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/species-constructor.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/string-multibyte.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/string-multibyte.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../../../node_modules/core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/string-multibyte.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/string-trim.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/string-trim.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js/internals/require-object-coercible.js\");\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"../../../../../node_modules/core-js/internals/whitespaces.js\");\n\nvar whitespace = '[' + whitespaces + ']';\nvar ltrim = RegExp('^' + whitespace + whitespace + '*');\nvar rtrim = RegExp(whitespace + whitespace + '*$');\n\n// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation\nvar createMethod = function (TYPE) {\n  return function ($this) {\n    var string = String(requireObjectCoercible($this));\n    if (TYPE & 1) string = string.replace(ltrim, '');\n    if (TYPE & 2) string = string.replace(rtrim, '');\n    return string;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.{ trimLeft, trimStart }` methods\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart\n  start: createMethod(1),\n  // `String.prototype.{ trimRight, trimEnd }` methods\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend\n  end: createMethod(2),\n  // `String.prototype.trim` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trim\n  trim: createMethod(3)\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/string-trim.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/to-absolute-index.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-absolute-index.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../../../node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-absolute-index.js?");

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

/***/ "../../../../../node_modules/core-js/internals/to-object.js":
/*!********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-object.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/to-object.js?");

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

/***/ "../../../../../node_modules/core-js/internals/user-agent.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/user-agent.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../../../node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/user-agent.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/v8-version.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/v8-version.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/user-agent */ \"../../../../../node_modules/core-js/internals/user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/v8-version.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/well-known-symbol.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/well-known-symbol.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"../../../../../node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../../../../node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../../../../../node_modules/core-js/internals/native-symbol.js\");\n\nvar Symbol = global.Symbol;\nvar store = shared('wks');\n\nmodule.exports = function (name) {\n  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]\n    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/whitespaces.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/whitespaces.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// a string of all valid unicode whitespaces\n// eslint-disable-next-line max-len\nmodule.exports = '\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u00A0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/whitespaces.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/internals/wrapped-well-known-symbol.js":
/*!************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/wrapped-well-known-symbol.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/internals/wrapped-well-known-symbol.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.array.concat.js":
/*!************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.concat.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../../../../node_modules/core-js/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../../../node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"../../../../../node_modules/core-js/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../../../../../node_modules/core-js/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../../../../../node_modules/core-js/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ \"../../../../../node_modules/core-js/internals/v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  concat: function concat(arg) { // eslint-disable-line no-unused-vars\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.concat.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.array.find.js":
/*!**********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.find.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar $find = __webpack_require__(/*! ../internals/array-iteration */ \"../../../../../node_modules/core-js/internals/array-iteration.js\").find;\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"../../../../../node_modules/core-js/internals/add-to-unscopables.js\");\n\nvar FIND = 'find';\nvar SKIPS_HOLES = true;\n\n// Shouldn't skip holes\nif (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });\n\n// `Array.prototype.find` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.find\n$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables(FIND);\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.find.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.array.for-each.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.for-each.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"../../../../../node_modules/core-js/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.for-each.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.array.includes.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.includes.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar $includes = __webpack_require__(/*! ../internals/array-includes */ \"../../../../../node_modules/core-js/internals/array-includes.js\").includes;\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"../../../../../node_modules/core-js/internals/add-to-unscopables.js\");\n\n// `Array.prototype.includes` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.includes\n$({ target: 'Array', proto: true }, {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('includes');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.includes.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.array.index-of.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.index-of.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar $indexOf = __webpack_require__(/*! ../internals/array-includes */ \"../../../../../node_modules/core-js/internals/array-includes.js\").indexOf;\nvar sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ \"../../../../../node_modules/core-js/internals/sloppy-array-method.js\");\n\nvar nativeIndexOf = [].indexOf;\n\nvar NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;\nvar SLOPPY_METHOD = sloppyArrayMethod('indexOf');\n\n// `Array.prototype.indexOf` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? nativeIndexOf.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.index-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.array.iterator.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.iterator.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"../../../../../node_modules/core-js/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../../../node_modules/core-js/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../../../node_modules/core-js/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"../../../../../node_modules/core-js/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.github.io/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return { value: undefined, done: true };\n  }\n  if (kind == 'keys') return { value: index, done: false };\n  if (kind == 'values') return { value: target[index], done: false };\n  return { value: [index, target[index]], done: false };\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject\nIterators.Arguments = Iterators.Array;\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.array.last-index-of.js":
/*!*******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.last-index-of.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ \"../../../../../node_modules/core-js/internals/array-last-index-of.js\");\n\n// `Array.prototype.lastIndexOf` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof\n$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {\n  lastIndexOf: lastIndexOf\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.last-index-of.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.array.slice.js":
/*!***********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.slice.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../../../../node_modules/core-js/internals/is-array.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"../../../../../node_modules/core-js/internals/to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js/internals/to-length.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"../../../../../node_modules/core-js/internals/create-property.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../../../../../node_modules/core-js/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar nativeSlice = [].slice;\nvar max = Math.max;\n\n// `Array.prototype.slice` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.slice\n// fallback for not array-like ES3 strings and DOM objects\n$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {\n  slice: function slice(start, end) {\n    var O = toIndexedObject(this);\n    var length = toLength(O.length);\n    var k = toAbsoluteIndex(start, length);\n    var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible\n    var Constructor, result, n;\n    if (isArray(O)) {\n      Constructor = O.constructor;\n      // cross-realm fallback\n      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {\n        Constructor = undefined;\n      } else if (isObject(Constructor)) {\n        Constructor = Constructor[SPECIES];\n        if (Constructor === null) Constructor = undefined;\n      }\n      if (Constructor === Array || Constructor === undefined) {\n        return nativeSlice.call(O, k, fin);\n      }\n    }\n    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));\n    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);\n    result.length = n;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.array.slice.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.date.to-string.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.date.to-string.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../../../node_modules/core-js/internals/redefine.js\");\n\nvar DatePrototype = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar nativeDateToString = DatePrototype[TO_STRING];\nvar getTime = DatePrototype.getTime;\n\n// `Date.prototype.toString` method\n// https://tc39.github.io/ecma262/#sec-date.prototype.tostring\nif (new Date(NaN) + '' != INVALID_DATE) {\n  redefine(DatePrototype, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? nativeDateToString.call(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.date.to-string.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.object.to-string.js":
/*!****************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.object.to-string.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../../../node_modules/core-js/internals/redefine.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"../../../../../node_modules/core-js/internals/object-to-string.js\");\n\nvar ObjectPrototype = Object.prototype;\n\n// `Object.prototype.toString` method\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nif (toString !== ObjectPrototype.toString) {\n  redefine(ObjectPrototype, 'toString', toString, { unsafe: true });\n}\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.object.to-string.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.parse-int.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.parse-int.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ \"../../../../../node_modules/core-js/internals/parse-int.js\");\n\n// `parseInt` method\n// https://tc39.github.io/ecma262/#sec-parseint-string-radix\n$({ global: true, forced: parseInt != parseIntImplementation }, {\n  parseInt: parseIntImplementation\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.parse-int.js?");

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

/***/ "../../../../../node_modules/core-js/modules/es.string.includes.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.includes.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"../../../../../node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"../../../../../node_modules/core-js/internals/correct-is-regexp-logic.js\");\n\n// `String.prototype.includes` method\n// https://tc39.github.io/ecma262/#sec-string.prototype.includes\n$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~String(requireObjectCoercible(this))\n      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.includes.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.string.iterator.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.iterator.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"../../../../../node_modules/core-js/internals/string-multibyte.js\").charAt;\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../../../node_modules/core-js/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"../../../../../node_modules/core-js/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: String(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return { value: undefined, done: true };\n  point = charAt(string, index);\n  state.index += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.string.replace.js":
/*!**************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.replace.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"../../../../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../../../node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js/internals/to-length.js\");\nvar toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../../../node_modules/core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js/internals/require-object-coercible.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"../../../../../node_modules/core-js/internals/advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"../../../../../node_modules/core-js/internals/regexp-exec-abstract.js\");\n\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&'`]|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&'`]|\\d\\d?)/g;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// @@replace logic\nfixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = requireObjectCoercible(this);\n      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];\n      return replacer !== undefined\n        ? replacer.call(searchValue, O, replaceValue)\n        : nativeReplace.call(String(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace\n    function (regexp, replaceValue) {\n      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n\n      var functionalReplace = typeof replaceValue === 'function';\n      if (!functionalReplace) replaceValue = String(replaceValue);\n\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n\n        results.push(result);\n        if (!global) break;\n\n        var matchStr = String(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n\n        var matched = String(result[0]);\n        var position = max(min(toInteger(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = [matched].concat(captures, position, S);\n          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n          var replacement = String(replaceValue.apply(undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + S.slice(nextSourcePosition);\n    }\n  ];\n\n  // https://tc39.github.io/ecma262/#sec-getsubstitution\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n    return nativeReplace.call(replacement, symbols, function (match, ch) {\n      var capture;\n      switch (ch.charAt(0)) {\n        case '$': return '$';\n        case '&': return matched;\n        case '`': return str.slice(0, position);\n        case \"'\": return str.slice(tailPos);\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n        default: // \\d\\d?\n          var n = +ch;\n          if (n === 0) return match;\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n          capture = captures[n - 1];\n      }\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.replace.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.string.search.js":
/*!*************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.search.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"../../../../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js/internals/require-object-coercible.js\");\nvar sameValue = __webpack_require__(/*! ../internals/same-value */ \"../../../../../node_modules/core-js/internals/same-value.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"../../../../../node_modules/core-js/internals/regexp-exec-abstract.js\");\n\n// @@search logic\nfixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {\n  return [\n    // `String.prototype.search` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.search\n    function search(regexp) {\n      var O = requireObjectCoercible(this);\n      var searcher = regexp == undefined ? undefined : regexp[SEARCH];\n      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n    },\n    // `RegExp.prototype[@@search]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search\n    function (regexp) {\n      var res = maybeCallNative(nativeSearch, regexp, this);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n\n      var previousLastIndex = rx.lastIndex;\n      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n      var result = regExpExec(rx, S);\n      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n      return result === null ? -1 : result.index;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.search.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.string.split.js":
/*!************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.split.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"../../../../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"../../../../../node_modules/core-js/internals/is-regexp.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js/internals/require-object-coercible.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"../../../../../node_modules/core-js/internals/species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"../../../../../node_modules/core-js/internals/advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js/internals/to-length.js\");\nvar callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"../../../../../node_modules/core-js/internals/regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"../../../../../node_modules/core-js/internals/regexp-exec.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js/internals/fails.js\");\n\nvar arrayPush = [].push;\nvar min = Math.min;\nvar MAX_UINT32 = 0xFFFFFFFF;\n\n// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError\nvar SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });\n\n// @@split logic\nfixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'.split(/(b)*/)[1] == 'c' ||\n    'test'.split(/(?:)/, -1).length != 4 ||\n    'ab'.split(/(?:ab)*/).length != 2 ||\n    '.'.split(/(.?)(.?)/).length != 4 ||\n    '.'.split(/()()/).length > 1 ||\n    ''.split(/.?/).length\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = String(requireObjectCoercible(this));\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (separator === undefined) return [string];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) {\n        return nativeSplit.call(string, separator, lim);\n      }\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy.lastIndex;\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));\n          lastLength = match[0].length;\n          lastLastIndex = lastIndex;\n          if (output.length >= lim) break;\n        }\n        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string.length) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output.length > lim ? output.slice(0, lim) : output;\n    };\n  // Chakra, V8\n  } else if ('0'.split(undefined, 0).length) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);\n    };\n  } else internalSplit = nativeSplit;\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = requireObjectCoercible(this);\n      var splitter = separator == undefined ? undefined : separator[SPLIT];\n      return splitter !== undefined\n        ? splitter.call(separator, O, limit)\n        : internalSplit.call(String(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (regexp, limit) {\n      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (SUPPORTS_Y ? 'y' : 'g');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = SUPPORTS_Y ? q : 0;\n        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));\n        var e;\n        if (\n          z === null ||\n          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          A.push(S.slice(p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            A.push(z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      A.push(S.slice(p));\n      return A;\n    }\n  ];\n}, !SUPPORTS_Y);\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.split.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.string.starts-with.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.starts-with.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../../../node_modules/core-js/internals/to-length.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"../../../../../node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../../../node_modules/core-js/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"../../../../../node_modules/core-js/internals/correct-is-regexp-logic.js\");\n\nvar nativeStartsWith = ''.startsWith;\nvar min = Math.min;\n\n// `String.prototype.startsWith` method\n// https://tc39.github.io/ecma262/#sec-string.prototype.startswith\n$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('startsWith') }, {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = String(requireObjectCoercible(this));\n    notARegExp(searchString);\n    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return nativeStartsWith\n      ? nativeStartsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.string.starts-with.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.symbol.description.js":
/*!******************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.symbol.description.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// `Symbol.prototype.description` getter\n// https://tc39.github.io/ecma262/#sec-symbol.prototype.description\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js/internals/descriptors.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js/internals/is-object.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js/internals/object-define-property.js\").f;\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"../../../../../node_modules/core-js/internals/copy-constructor-properties.js\");\n\nvar NativeSymbol = global.Symbol;\n\nif (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||\n  // Safari 12 bug\n  NativeSymbol().description !== undefined\n)) {\n  var EmptyStringDescriptionStore = {};\n  // wrap Symbol constructor for correct work with undefined description\n  var SymbolWrapper = function Symbol() {\n    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var result = this instanceof SymbolWrapper\n      ? new NativeSymbol(description)\n      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'\n      : description === undefined ? NativeSymbol() : NativeSymbol(description);\n    if (description === '') EmptyStringDescriptionStore[result] = true;\n    return result;\n  };\n  copyConstructorProperties(SymbolWrapper, NativeSymbol);\n  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;\n  symbolPrototype.constructor = SymbolWrapper;\n\n  var symbolToString = symbolPrototype.toString;\n  var native = String(NativeSymbol('test')) == 'Symbol(test)';\n  var regexp = /^Symbol\\((.*)\\)[^)]+$/;\n  defineProperty(symbolPrototype, 'description', {\n    configurable: true,\n    get: function description() {\n      var symbol = isObject(this) ? this.valueOf() : this;\n      var string = symbolToString.call(symbol);\n      if (has(EmptyStringDescriptionStore, symbol)) return '';\n      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');\n      return desc === '' ? undefined : desc;\n    }\n  });\n\n  $({ global: true, forced: true }, {\n    Symbol: SymbolWrapper\n  });\n}\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.symbol.description.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.symbol.iterator.js":
/*!***************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.symbol.iterator.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.iterator` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.iterator\ndefineWellKnownSymbol('iterator');\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.symbol.iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/es.symbol.js":
/*!******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.symbol.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../../../node_modules/core-js/internals/get-built-in.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../../../node_modules/core-js/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../../../node_modules/core-js/internals/descriptors.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../../../../../node_modules/core-js/internals/native-symbol.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../../../node_modules/core-js/internals/fails.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../../../node_modules/core-js/internals/has.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../../../../node_modules/core-js/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../../../node_modules/core-js/internals/is-object.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../../../node_modules/core-js/internals/an-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../../../node_modules/core-js/internals/to-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../../../node_modules/core-js/internals/to-primitive.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../../../node_modules/core-js/internals/create-property-descriptor.js\");\nvar nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ \"../../../../../node_modules/core-js/internals/object-create.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"../../../../../node_modules/core-js/internals/object-keys.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"../../../../../node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"../../../../../node_modules/core-js/internals/object-get-own-property-names-external.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"../../../../../node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../../../../node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../../../node_modules/core-js/internals/object-define-property.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"../../../../../node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../../../node_modules/core-js/internals/redefine.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"../../../../../node_modules/core-js/internals/shared.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../../../node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../../../node_modules/core-js/internals/hidden-keys.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../../../../node_modules/core-js/internals/uid.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ \"../../../../../node_modules/core-js/internals/wrapped-well-known-symbol.js\");\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"../../../../../node_modules/core-js/internals/define-well-known-symbol.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../../../node_modules/core-js/internals/set-to-string-tag.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../../../node_modules/core-js/internals/internal-state.js\");\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"../../../../../node_modules/core-js/internals/array-iteration.js\").forEach;\n\nvar HIDDEN = sharedKey('hidden');\nvar SYMBOL = 'Symbol';\nvar PROTOTYPE = 'prototype';\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(SYMBOL);\nvar ObjectPrototype = Object[PROTOTYPE];\nvar $Symbol = global.Symbol;\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;\nvar nativePropertyIsEnumerable = propertyIsEnumerableModule.f;\nvar AllSymbols = shared('symbols');\nvar ObjectPrototypeSymbols = shared('op-symbols');\nvar StringToSymbolRegistry = shared('string-to-symbol-registry');\nvar SymbolToStringRegistry = shared('symbol-to-string-registry');\nvar WellKnownSymbolsStore = shared('wks');\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDescriptor = DESCRIPTORS && fails(function () {\n  return nativeObjectCreate(nativeDefineProperty({}, 'a', {\n    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (O, P, Attributes) {\n  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);\n  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];\n  nativeDefineProperty(O, P, Attributes);\n  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {\n    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);\n  }\n} : nativeDefineProperty;\n\nvar wrap = function (tag, description) {\n  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);\n  setInternalState(symbol, {\n    type: SYMBOL,\n    tag: tag,\n    description: description\n  });\n  if (!DESCRIPTORS) symbol.description = description;\n  return symbol;\n};\n\nvar isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return Object(it) instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(O, P, Attributes) {\n  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);\n  anObject(O);\n  var key = toPrimitive(P, true);\n  anObject(Attributes);\n  if (has(AllSymbols, key)) {\n    if (!Attributes.enumerable) {\n      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));\n      O[HIDDEN][key] = true;\n    } else {\n      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;\n      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });\n    } return setSymbolDescriptor(O, key, Attributes);\n  } return nativeDefineProperty(O, key, Attributes);\n};\n\nvar $defineProperties = function defineProperties(O, Properties) {\n  anObject(O);\n  var properties = toIndexedObject(Properties);\n  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));\n  $forEach(keys, function (key) {\n    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);\n  });\n  return O;\n};\n\nvar $create = function create(O, Properties) {\n  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);\n};\n\nvar $propertyIsEnumerable = function propertyIsEnumerable(V) {\n  var P = toPrimitive(V, true);\n  var enumerable = nativePropertyIsEnumerable.call(this, P);\n  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;\n  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;\n};\n\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {\n  var it = toIndexedObject(O);\n  var key = toPrimitive(P, true);\n  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;\n  var descriptor = nativeGetOwnPropertyDescriptor(it, key);\n  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {\n    descriptor.enumerable = true;\n  }\n  return descriptor;\n};\n\nvar $getOwnPropertyNames = function getOwnPropertyNames(O) {\n  var names = nativeGetOwnPropertyNames(toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);\n  });\n  return result;\n};\n\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(O) {\n  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;\n  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {\n      result.push(AllSymbols[key]);\n    }\n  });\n  return result;\n};\n\n// `Symbol` constructor\n// https://tc39.github.io/ecma262/#sec-symbol-constructor\nif (!NATIVE_SYMBOL) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');\n    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var tag = uid(description);\n    var setter = function (value) {\n      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));\n    };\n    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });\n    return wrap(tag, description);\n  };\n\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return getInternalState(this).tag;\n  });\n\n  propertyIsEnumerableModule.f = $propertyIsEnumerable;\n  definePropertyModule.f = $defineProperty;\n  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;\n  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;\n  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS) {\n    // https://github.com/tc39/proposal-Symbol-description\n    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {\n      configurable: true,\n      get: function description() {\n        return getInternalState(this).description;\n      }\n    });\n    if (!IS_PURE) {\n      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });\n    }\n  }\n\n  wrappedWellKnownSymbolModule.f = function (name) {\n    return wrap(wellKnownSymbol(name), name);\n  };\n}\n\n$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {\n  Symbol: $Symbol\n});\n\n$forEach(objectKeys(WellKnownSymbolsStore), function (name) {\n  defineWellKnownSymbol(name);\n});\n\n$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Symbol.for` method\n  // https://tc39.github.io/ecma262/#sec-symbol.for\n  'for': function (key) {\n    var string = String(key);\n    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];\n    var symbol = $Symbol(string);\n    StringToSymbolRegistry[string] = symbol;\n    SymbolToStringRegistry[symbol] = string;\n    return symbol;\n  },\n  // `Symbol.keyFor` method\n  // https://tc39.github.io/ecma262/#sec-symbol.keyfor\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');\n    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];\n  },\n  useSetter: function () { USE_SETTER = true; },\n  useSimple: function () { USE_SETTER = false; }\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {\n  // `Object.create` method\n  // https://tc39.github.io/ecma262/#sec-object.create\n  create: $create,\n  // `Object.defineProperty` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperty\n  defineProperty: $defineProperty,\n  // `Object.defineProperties` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperties\n  defineProperties: $defineProperties,\n  // `Object.getOwnPropertyDescriptor` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Object.getOwnPropertyNames` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // `Object.getOwnPropertySymbols` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\n$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return getOwnPropertySymbolsModule.f(toObject(it));\n  }\n});\n\n// `JSON.stringify` method behavior with symbols\n// https://tc39.github.io/ecma262/#sec-json.stringify\nif ($stringify) {\n  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {\n    var symbol = $Symbol();\n    // MS Edge converts symbol values to JSON as {}\n    return $stringify([symbol]) != '[null]'\n      // WebKit converts symbol values to JSON as null\n      || $stringify({ a: symbol }) != '{}'\n      // V8 throws on boxed symbols\n      || $stringify(Object(symbol)) != '{}';\n  });\n\n  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {\n    // eslint-disable-next-line no-unused-vars\n    stringify: function stringify(it, replacer, space) {\n      var args = [it];\n      var index = 1;\n      var $replacer;\n      while (arguments.length > index) args.push(arguments[index++]);\n      $replacer = replacer;\n      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n      if (!isArray(replacer)) replacer = function (key, value) {\n        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n        if (!isSymbol(value)) return value;\n      };\n      args[1] = replacer;\n      return $stringify.apply(null, args);\n    }\n  });\n}\n\n// `Symbol.prototype[@@toPrimitive]` method\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive\nif (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {\n  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n}\n// `Symbol.prototype[@@toStringTag]` property\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag\nsetToStringTag($Symbol, SYMBOL);\n\nhiddenKeys[HIDDEN] = true;\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/es.symbol.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!*************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"../../../../../node_modules/core-js/internals/dom-iterables.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"../../../../../node_modules/core-js/internals/array-for-each.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!*************************************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"../../../../../node_modules/core-js/internals/dom-iterables.js\");\nvar ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ \"../../../../../node_modules/core-js/modules/es.array.iterator.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar ArrayValues = ArrayIteratorMethods.values;\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  if (CollectionPrototype) {\n    // some Chrome versions have non-configurable methods on DOMTokenList\n    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {\n      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);\n    } catch (error) {\n      CollectionPrototype[ITERATOR] = ArrayValues;\n    }\n    if (!CollectionPrototype[TO_STRING_TAG]) {\n      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n    }\n    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {\n      // some Chrome versions have non-configurable methods on DOMTokenList\n      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {\n        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);\n      } catch (error) {\n        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "../../../../../node_modules/core-js/modules/web.timers.js":
/*!*******************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/web.timers.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../../../../node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../../../node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/user-agent */ \"../../../../../node_modules/core-js/internals/user-agent.js\");\n\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\n\nvar wrap = function (scheduler) {\n  return function (handler, timeout /* , ...arguments */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : undefined;\n    return scheduler(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);\n    } : handler, timeout);\n  };\n};\n\n// ie9- setTimeout & setInterval additional parameters fix\n// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers\n$({ global: true, bind: true, forced: MSIE }, {\n  // `setTimeout` method\n  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout\n  setTimeout: wrap(global.setTimeout),\n  // `setInterval` method\n  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ "../../../../../node_modules/es6-object-assign/index.js":
/*!****************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/es6-object-assign/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Code refactored from Mozilla Developer Network:\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign\n */\n\n\n\nfunction assign(target, firstSource) {\n  if (target === undefined || target === null) {\n    throw new TypeError('Cannot convert first argument to object');\n  }\n\n  var to = Object(target);\n  for (var i = 1; i < arguments.length; i++) {\n    var nextSource = arguments[i];\n    if (nextSource === undefined || nextSource === null) {\n      continue;\n    }\n\n    var keysArray = Object.keys(Object(nextSource));\n    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {\n      var nextKey = keysArray[nextIndex];\n      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);\n      if (desc !== undefined && desc.enumerable) {\n        to[nextKey] = nextSource[nextKey];\n      }\n    }\n  }\n  return to;\n}\n\nfunction polyfill() {\n  if (!Object.assign) {\n    Object.defineProperty(Object, 'assign', {\n      enumerable: false,\n      configurable: true,\n      writable: true,\n      value: assign\n    });\n  }\n}\n\nmodule.exports = {\n  assign: assign,\n  polyfill: polyfill\n};\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/es6-object-assign/index.js?");

/***/ }),

/***/ "../../../../../node_modules/es6-promise/dist/es6-promise.js":
/*!*********************************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/es6-promise/dist/es6-promise.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process, global) {/*!\n * @overview es6-promise - a tiny implementation of Promises/A+.\n * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)\n * @license   Licensed under MIT license\n *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE\n * @version   v4.2.8+1e68dce6\n */\n\n(function (global, factory) {\n\t true ? module.exports = factory() :\n\tundefined;\n}(this, (function () { 'use strict';\n\nfunction objectOrFunction(x) {\n  var type = typeof x;\n  return x !== null && (type === 'object' || type === 'function');\n}\n\nfunction isFunction(x) {\n  return typeof x === 'function';\n}\n\n\n\nvar _isArray = void 0;\nif (Array.isArray) {\n  _isArray = Array.isArray;\n} else {\n  _isArray = function (x) {\n    return Object.prototype.toString.call(x) === '[object Array]';\n  };\n}\n\nvar isArray = _isArray;\n\nvar len = 0;\nvar vertxNext = void 0;\nvar customSchedulerFn = void 0;\n\nvar asap = function asap(callback, arg) {\n  queue[len] = callback;\n  queue[len + 1] = arg;\n  len += 2;\n  if (len === 2) {\n    // If len is 2, that means that we need to schedule an async flush.\n    // If additional callbacks are queued before the queue is flushed, they\n    // will be processed by this flush that we are scheduling.\n    if (customSchedulerFn) {\n      customSchedulerFn(flush);\n    } else {\n      scheduleFlush();\n    }\n  }\n};\n\nfunction setScheduler(scheduleFn) {\n  customSchedulerFn = scheduleFn;\n}\n\nfunction setAsap(asapFn) {\n  asap = asapFn;\n}\n\nvar browserWindow = typeof window !== 'undefined' ? window : undefined;\nvar browserGlobal = browserWindow || {};\nvar BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;\nvar isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';\n\n// test for web worker but not in IE10\nvar isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';\n\n// node\nfunction useNextTick() {\n  // node version 0.10.x displays a deprecation warning when nextTick is used recursively\n  // see https://github.com/cujojs/when/issues/410 for details\n  return function () {\n    return process.nextTick(flush);\n  };\n}\n\n// vertx\nfunction useVertxTimer() {\n  if (typeof vertxNext !== 'undefined') {\n    return function () {\n      vertxNext(flush);\n    };\n  }\n\n  return useSetTimeout();\n}\n\nfunction useMutationObserver() {\n  var iterations = 0;\n  var observer = new BrowserMutationObserver(flush);\n  var node = document.createTextNode('');\n  observer.observe(node, { characterData: true });\n\n  return function () {\n    node.data = iterations = ++iterations % 2;\n  };\n}\n\n// web worker\nfunction useMessageChannel() {\n  var channel = new MessageChannel();\n  channel.port1.onmessage = flush;\n  return function () {\n    return channel.port2.postMessage(0);\n  };\n}\n\nfunction useSetTimeout() {\n  // Store setTimeout reference so es6-promise will be unaffected by\n  // other code modifying setTimeout (like sinon.useFakeTimers())\n  var globalSetTimeout = setTimeout;\n  return function () {\n    return globalSetTimeout(flush, 1);\n  };\n}\n\nvar queue = new Array(1000);\nfunction flush() {\n  for (var i = 0; i < len; i += 2) {\n    var callback = queue[i];\n    var arg = queue[i + 1];\n\n    callback(arg);\n\n    queue[i] = undefined;\n    queue[i + 1] = undefined;\n  }\n\n  len = 0;\n}\n\nfunction attemptVertx() {\n  try {\n    var vertx = Function('return this')().require('vertx');\n    vertxNext = vertx.runOnLoop || vertx.runOnContext;\n    return useVertxTimer();\n  } catch (e) {\n    return useSetTimeout();\n  }\n}\n\nvar scheduleFlush = void 0;\n// Decide what async method to use to triggering processing of queued callbacks:\nif (isNode) {\n  scheduleFlush = useNextTick();\n} else if (BrowserMutationObserver) {\n  scheduleFlush = useMutationObserver();\n} else if (isWorker) {\n  scheduleFlush = useMessageChannel();\n} else if (browserWindow === undefined && \"function\" === 'function') {\n  scheduleFlush = attemptVertx();\n} else {\n  scheduleFlush = useSetTimeout();\n}\n\nfunction then(onFulfillment, onRejection) {\n  var parent = this;\n\n  var child = new this.constructor(noop);\n\n  if (child[PROMISE_ID] === undefined) {\n    makePromise(child);\n  }\n\n  var _state = parent._state;\n\n\n  if (_state) {\n    var callback = arguments[_state - 1];\n    asap(function () {\n      return invokeCallback(_state, child, callback, parent._result);\n    });\n  } else {\n    subscribe(parent, child, onFulfillment, onRejection);\n  }\n\n  return child;\n}\n\n/**\n  `Promise.resolve` returns a promise that will become resolved with the\n  passed `value`. It is shorthand for the following:\n\n  ```javascript\n  let promise = new Promise(function(resolve, reject){\n    resolve(1);\n  });\n\n  promise.then(function(value){\n    // value === 1\n  });\n  ```\n\n  Instead of writing the above, your code now simply becomes the following:\n\n  ```javascript\n  let promise = Promise.resolve(1);\n\n  promise.then(function(value){\n    // value === 1\n  });\n  ```\n\n  @method resolve\n  @static\n  @param {Any} value value that the returned promise will be resolved with\n  Useful for tooling.\n  @return {Promise} a promise that will become fulfilled with the given\n  `value`\n*/\nfunction resolve$1(object) {\n  /*jshint validthis:true */\n  var Constructor = this;\n\n  if (object && typeof object === 'object' && object.constructor === Constructor) {\n    return object;\n  }\n\n  var promise = new Constructor(noop);\n  resolve(promise, object);\n  return promise;\n}\n\nvar PROMISE_ID = Math.random().toString(36).substring(2);\n\nfunction noop() {}\n\nvar PENDING = void 0;\nvar FULFILLED = 1;\nvar REJECTED = 2;\n\nfunction selfFulfillment() {\n  return new TypeError(\"You cannot resolve a promise with itself\");\n}\n\nfunction cannotReturnOwn() {\n  return new TypeError('A promises callback cannot return that same promise.');\n}\n\nfunction tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {\n  try {\n    then$$1.call(value, fulfillmentHandler, rejectionHandler);\n  } catch (e) {\n    return e;\n  }\n}\n\nfunction handleForeignThenable(promise, thenable, then$$1) {\n  asap(function (promise) {\n    var sealed = false;\n    var error = tryThen(then$$1, thenable, function (value) {\n      if (sealed) {\n        return;\n      }\n      sealed = true;\n      if (thenable !== value) {\n        resolve(promise, value);\n      } else {\n        fulfill(promise, value);\n      }\n    }, function (reason) {\n      if (sealed) {\n        return;\n      }\n      sealed = true;\n\n      reject(promise, reason);\n    }, 'Settle: ' + (promise._label || ' unknown promise'));\n\n    if (!sealed && error) {\n      sealed = true;\n      reject(promise, error);\n    }\n  }, promise);\n}\n\nfunction handleOwnThenable(promise, thenable) {\n  if (thenable._state === FULFILLED) {\n    fulfill(promise, thenable._result);\n  } else if (thenable._state === REJECTED) {\n    reject(promise, thenable._result);\n  } else {\n    subscribe(thenable, undefined, function (value) {\n      return resolve(promise, value);\n    }, function (reason) {\n      return reject(promise, reason);\n    });\n  }\n}\n\nfunction handleMaybeThenable(promise, maybeThenable, then$$1) {\n  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {\n    handleOwnThenable(promise, maybeThenable);\n  } else {\n    if (then$$1 === undefined) {\n      fulfill(promise, maybeThenable);\n    } else if (isFunction(then$$1)) {\n      handleForeignThenable(promise, maybeThenable, then$$1);\n    } else {\n      fulfill(promise, maybeThenable);\n    }\n  }\n}\n\nfunction resolve(promise, value) {\n  if (promise === value) {\n    reject(promise, selfFulfillment());\n  } else if (objectOrFunction(value)) {\n    var then$$1 = void 0;\n    try {\n      then$$1 = value.then;\n    } catch (error) {\n      reject(promise, error);\n      return;\n    }\n    handleMaybeThenable(promise, value, then$$1);\n  } else {\n    fulfill(promise, value);\n  }\n}\n\nfunction publishRejection(promise) {\n  if (promise._onerror) {\n    promise._onerror(promise._result);\n  }\n\n  publish(promise);\n}\n\nfunction fulfill(promise, value) {\n  if (promise._state !== PENDING) {\n    return;\n  }\n\n  promise._result = value;\n  promise._state = FULFILLED;\n\n  if (promise._subscribers.length !== 0) {\n    asap(publish, promise);\n  }\n}\n\nfunction reject(promise, reason) {\n  if (promise._state !== PENDING) {\n    return;\n  }\n  promise._state = REJECTED;\n  promise._result = reason;\n\n  asap(publishRejection, promise);\n}\n\nfunction subscribe(parent, child, onFulfillment, onRejection) {\n  var _subscribers = parent._subscribers;\n  var length = _subscribers.length;\n\n\n  parent._onerror = null;\n\n  _subscribers[length] = child;\n  _subscribers[length + FULFILLED] = onFulfillment;\n  _subscribers[length + REJECTED] = onRejection;\n\n  if (length === 0 && parent._state) {\n    asap(publish, parent);\n  }\n}\n\nfunction publish(promise) {\n  var subscribers = promise._subscribers;\n  var settled = promise._state;\n\n  if (subscribers.length === 0) {\n    return;\n  }\n\n  var child = void 0,\n      callback = void 0,\n      detail = promise._result;\n\n  for (var i = 0; i < subscribers.length; i += 3) {\n    child = subscribers[i];\n    callback = subscribers[i + settled];\n\n    if (child) {\n      invokeCallback(settled, child, callback, detail);\n    } else {\n      callback(detail);\n    }\n  }\n\n  promise._subscribers.length = 0;\n}\n\nfunction invokeCallback(settled, promise, callback, detail) {\n  var hasCallback = isFunction(callback),\n      value = void 0,\n      error = void 0,\n      succeeded = true;\n\n  if (hasCallback) {\n    try {\n      value = callback(detail);\n    } catch (e) {\n      succeeded = false;\n      error = e;\n    }\n\n    if (promise === value) {\n      reject(promise, cannotReturnOwn());\n      return;\n    }\n  } else {\n    value = detail;\n  }\n\n  if (promise._state !== PENDING) {\n    // noop\n  } else if (hasCallback && succeeded) {\n    resolve(promise, value);\n  } else if (succeeded === false) {\n    reject(promise, error);\n  } else if (settled === FULFILLED) {\n    fulfill(promise, value);\n  } else if (settled === REJECTED) {\n    reject(promise, value);\n  }\n}\n\nfunction initializePromise(promise, resolver) {\n  try {\n    resolver(function resolvePromise(value) {\n      resolve(promise, value);\n    }, function rejectPromise(reason) {\n      reject(promise, reason);\n    });\n  } catch (e) {\n    reject(promise, e);\n  }\n}\n\nvar id = 0;\nfunction nextId() {\n  return id++;\n}\n\nfunction makePromise(promise) {\n  promise[PROMISE_ID] = id++;\n  promise._state = undefined;\n  promise._result = undefined;\n  promise._subscribers = [];\n}\n\nfunction validationError() {\n  return new Error('Array Methods must be provided an Array');\n}\n\nvar Enumerator = function () {\n  function Enumerator(Constructor, input) {\n    this._instanceConstructor = Constructor;\n    this.promise = new Constructor(noop);\n\n    if (!this.promise[PROMISE_ID]) {\n      makePromise(this.promise);\n    }\n\n    if (isArray(input)) {\n      this.length = input.length;\n      this._remaining = input.length;\n\n      this._result = new Array(this.length);\n\n      if (this.length === 0) {\n        fulfill(this.promise, this._result);\n      } else {\n        this.length = this.length || 0;\n        this._enumerate(input);\n        if (this._remaining === 0) {\n          fulfill(this.promise, this._result);\n        }\n      }\n    } else {\n      reject(this.promise, validationError());\n    }\n  }\n\n  Enumerator.prototype._enumerate = function _enumerate(input) {\n    for (var i = 0; this._state === PENDING && i < input.length; i++) {\n      this._eachEntry(input[i], i);\n    }\n  };\n\n  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {\n    var c = this._instanceConstructor;\n    var resolve$$1 = c.resolve;\n\n\n    if (resolve$$1 === resolve$1) {\n      var _then = void 0;\n      var error = void 0;\n      var didError = false;\n      try {\n        _then = entry.then;\n      } catch (e) {\n        didError = true;\n        error = e;\n      }\n\n      if (_then === then && entry._state !== PENDING) {\n        this._settledAt(entry._state, i, entry._result);\n      } else if (typeof _then !== 'function') {\n        this._remaining--;\n        this._result[i] = entry;\n      } else if (c === Promise$1) {\n        var promise = new c(noop);\n        if (didError) {\n          reject(promise, error);\n        } else {\n          handleMaybeThenable(promise, entry, _then);\n        }\n        this._willSettleAt(promise, i);\n      } else {\n        this._willSettleAt(new c(function (resolve$$1) {\n          return resolve$$1(entry);\n        }), i);\n      }\n    } else {\n      this._willSettleAt(resolve$$1(entry), i);\n    }\n  };\n\n  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {\n    var promise = this.promise;\n\n\n    if (promise._state === PENDING) {\n      this._remaining--;\n\n      if (state === REJECTED) {\n        reject(promise, value);\n      } else {\n        this._result[i] = value;\n      }\n    }\n\n    if (this._remaining === 0) {\n      fulfill(promise, this._result);\n    }\n  };\n\n  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {\n    var enumerator = this;\n\n    subscribe(promise, undefined, function (value) {\n      return enumerator._settledAt(FULFILLED, i, value);\n    }, function (reason) {\n      return enumerator._settledAt(REJECTED, i, reason);\n    });\n  };\n\n  return Enumerator;\n}();\n\n/**\n  `Promise.all` accepts an array of promises, and returns a new promise which\n  is fulfilled with an array of fulfillment values for the passed promises, or\n  rejected with the reason of the first passed promise to be rejected. It casts all\n  elements of the passed iterable to promises as it runs this algorithm.\n\n  Example:\n\n  ```javascript\n  let promise1 = resolve(1);\n  let promise2 = resolve(2);\n  let promise3 = resolve(3);\n  let promises = [ promise1, promise2, promise3 ];\n\n  Promise.all(promises).then(function(array){\n    // The array here would be [ 1, 2, 3 ];\n  });\n  ```\n\n  If any of the `promises` given to `all` are rejected, the first promise\n  that is rejected will be given as an argument to the returned promises's\n  rejection handler. For example:\n\n  Example:\n\n  ```javascript\n  let promise1 = resolve(1);\n  let promise2 = reject(new Error(\"2\"));\n  let promise3 = reject(new Error(\"3\"));\n  let promises = [ promise1, promise2, promise3 ];\n\n  Promise.all(promises).then(function(array){\n    // Code here never runs because there are rejected promises!\n  }, function(error) {\n    // error.message === \"2\"\n  });\n  ```\n\n  @method all\n  @static\n  @param {Array} entries array of promises\n  @param {String} label optional string for labeling the promise.\n  Useful for tooling.\n  @return {Promise} promise that is fulfilled when all `promises` have been\n  fulfilled, or rejected if any of them become rejected.\n  @static\n*/\nfunction all(entries) {\n  return new Enumerator(this, entries).promise;\n}\n\n/**\n  `Promise.race` returns a new promise which is settled in the same way as the\n  first passed promise to settle.\n\n  Example:\n\n  ```javascript\n  let promise1 = new Promise(function(resolve, reject){\n    setTimeout(function(){\n      resolve('promise 1');\n    }, 200);\n  });\n\n  let promise2 = new Promise(function(resolve, reject){\n    setTimeout(function(){\n      resolve('promise 2');\n    }, 100);\n  });\n\n  Promise.race([promise1, promise2]).then(function(result){\n    // result === 'promise 2' because it was resolved before promise1\n    // was resolved.\n  });\n  ```\n\n  `Promise.race` is deterministic in that only the state of the first\n  settled promise matters. For example, even if other promises given to the\n  `promises` array argument are resolved, but the first settled promise has\n  become rejected before the other promises became fulfilled, the returned\n  promise will become rejected:\n\n  ```javascript\n  let promise1 = new Promise(function(resolve, reject){\n    setTimeout(function(){\n      resolve('promise 1');\n    }, 200);\n  });\n\n  let promise2 = new Promise(function(resolve, reject){\n    setTimeout(function(){\n      reject(new Error('promise 2'));\n    }, 100);\n  });\n\n  Promise.race([promise1, promise2]).then(function(result){\n    // Code here never runs\n  }, function(reason){\n    // reason.message === 'promise 2' because promise 2 became rejected before\n    // promise 1 became fulfilled\n  });\n  ```\n\n  An example real-world use case is implementing timeouts:\n\n  ```javascript\n  Promise.race([ajax('foo.json'), timeout(5000)])\n  ```\n\n  @method race\n  @static\n  @param {Array} promises array of promises to observe\n  Useful for tooling.\n  @return {Promise} a promise which settles in the same way as the first passed\n  promise to settle.\n*/\nfunction race(entries) {\n  /*jshint validthis:true */\n  var Constructor = this;\n\n  if (!isArray(entries)) {\n    return new Constructor(function (_, reject) {\n      return reject(new TypeError('You must pass an array to race.'));\n    });\n  } else {\n    return new Constructor(function (resolve, reject) {\n      var length = entries.length;\n      for (var i = 0; i < length; i++) {\n        Constructor.resolve(entries[i]).then(resolve, reject);\n      }\n    });\n  }\n}\n\n/**\n  `Promise.reject` returns a promise rejected with the passed `reason`.\n  It is shorthand for the following:\n\n  ```javascript\n  let promise = new Promise(function(resolve, reject){\n    reject(new Error('WHOOPS'));\n  });\n\n  promise.then(function(value){\n    // Code here doesn't run because the promise is rejected!\n  }, function(reason){\n    // reason.message === 'WHOOPS'\n  });\n  ```\n\n  Instead of writing the above, your code now simply becomes the following:\n\n  ```javascript\n  let promise = Promise.reject(new Error('WHOOPS'));\n\n  promise.then(function(value){\n    // Code here doesn't run because the promise is rejected!\n  }, function(reason){\n    // reason.message === 'WHOOPS'\n  });\n  ```\n\n  @method reject\n  @static\n  @param {Any} reason value that the returned promise will be rejected with.\n  Useful for tooling.\n  @return {Promise} a promise rejected with the given `reason`.\n*/\nfunction reject$1(reason) {\n  /*jshint validthis:true */\n  var Constructor = this;\n  var promise = new Constructor(noop);\n  reject(promise, reason);\n  return promise;\n}\n\nfunction needsResolver() {\n  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');\n}\n\nfunction needsNew() {\n  throw new TypeError(\"Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.\");\n}\n\n/**\n  Promise objects represent the eventual result of an asynchronous operation. The\n  primary way of interacting with a promise is through its `then` method, which\n  registers callbacks to receive either a promise's eventual value or the reason\n  why the promise cannot be fulfilled.\n\n  Terminology\n  -----------\n\n  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.\n  - `thenable` is an object or function that defines a `then` method.\n  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).\n  - `exception` is a value that is thrown using the throw statement.\n  - `reason` is a value that indicates why a promise was rejected.\n  - `settled` the final resting state of a promise, fulfilled or rejected.\n\n  A promise can be in one of three states: pending, fulfilled, or rejected.\n\n  Promises that are fulfilled have a fulfillment value and are in the fulfilled\n  state.  Promises that are rejected have a rejection reason and are in the\n  rejected state.  A fulfillment value is never a thenable.\n\n  Promises can also be said to *resolve* a value.  If this value is also a\n  promise, then the original promise's settled state will match the value's\n  settled state.  So a promise that *resolves* a promise that rejects will\n  itself reject, and a promise that *resolves* a promise that fulfills will\n  itself fulfill.\n\n\n  Basic Usage:\n  ------------\n\n  ```js\n  let promise = new Promise(function(resolve, reject) {\n    // on success\n    resolve(value);\n\n    // on failure\n    reject(reason);\n  });\n\n  promise.then(function(value) {\n    // on fulfillment\n  }, function(reason) {\n    // on rejection\n  });\n  ```\n\n  Advanced Usage:\n  ---------------\n\n  Promises shine when abstracting away asynchronous interactions such as\n  `XMLHttpRequest`s.\n\n  ```js\n  function getJSON(url) {\n    return new Promise(function(resolve, reject){\n      let xhr = new XMLHttpRequest();\n\n      xhr.open('GET', url);\n      xhr.onreadystatechange = handler;\n      xhr.responseType = 'json';\n      xhr.setRequestHeader('Accept', 'application/json');\n      xhr.send();\n\n      function handler() {\n        if (this.readyState === this.DONE) {\n          if (this.status === 200) {\n            resolve(this.response);\n          } else {\n            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));\n          }\n        }\n      };\n    });\n  }\n\n  getJSON('/posts.json').then(function(json) {\n    // on fulfillment\n  }, function(reason) {\n    // on rejection\n  });\n  ```\n\n  Unlike callbacks, promises are great composable primitives.\n\n  ```js\n  Promise.all([\n    getJSON('/posts'),\n    getJSON('/comments')\n  ]).then(function(values){\n    values[0] // => postsJSON\n    values[1] // => commentsJSON\n\n    return values;\n  });\n  ```\n\n  @class Promise\n  @param {Function} resolver\n  Useful for tooling.\n  @constructor\n*/\n\nvar Promise$1 = function () {\n  function Promise(resolver) {\n    this[PROMISE_ID] = nextId();\n    this._result = this._state = undefined;\n    this._subscribers = [];\n\n    if (noop !== resolver) {\n      typeof resolver !== 'function' && needsResolver();\n      this instanceof Promise ? initializePromise(this, resolver) : needsNew();\n    }\n  }\n\n  /**\n  The primary way of interacting with a promise is through its `then` method,\n  which registers callbacks to receive either a promise's eventual value or the\n  reason why the promise cannot be fulfilled.\n   ```js\n  findUser().then(function(user){\n    // user is available\n  }, function(reason){\n    // user is unavailable, and you are given the reason why\n  });\n  ```\n   Chaining\n  --------\n   The return value of `then` is itself a promise.  This second, 'downstream'\n  promise is resolved with the return value of the first promise's fulfillment\n  or rejection handler, or rejected if the handler throws an exception.\n   ```js\n  findUser().then(function (user) {\n    return user.name;\n  }, function (reason) {\n    return 'default name';\n  }).then(function (userName) {\n    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it\n    // will be `'default name'`\n  });\n   findUser().then(function (user) {\n    throw new Error('Found user, but still unhappy');\n  }, function (reason) {\n    throw new Error('`findUser` rejected and we're unhappy');\n  }).then(function (value) {\n    // never reached\n  }, function (reason) {\n    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.\n    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.\n  });\n  ```\n  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.\n   ```js\n  findUser().then(function (user) {\n    throw new PedagogicalException('Upstream error');\n  }).then(function (value) {\n    // never reached\n  }).then(function (value) {\n    // never reached\n  }, function (reason) {\n    // The `PedgagocialException` is propagated all the way down to here\n  });\n  ```\n   Assimilation\n  ------------\n   Sometimes the value you want to propagate to a downstream promise can only be\n  retrieved asynchronously. This can be achieved by returning a promise in the\n  fulfillment or rejection handler. The downstream promise will then be pending\n  until the returned promise is settled. This is called *assimilation*.\n   ```js\n  findUser().then(function (user) {\n    return findCommentsByAuthor(user);\n  }).then(function (comments) {\n    // The user's comments are now available\n  });\n  ```\n   If the assimliated promise rejects, then the downstream promise will also reject.\n   ```js\n  findUser().then(function (user) {\n    return findCommentsByAuthor(user);\n  }).then(function (comments) {\n    // If `findCommentsByAuthor` fulfills, we'll have the value here\n  }, function (reason) {\n    // If `findCommentsByAuthor` rejects, we'll have the reason here\n  });\n  ```\n   Simple Example\n  --------------\n   Synchronous Example\n   ```javascript\n  let result;\n   try {\n    result = findResult();\n    // success\n  } catch(reason) {\n    // failure\n  }\n  ```\n   Errback Example\n   ```js\n  findResult(function(result, err){\n    if (err) {\n      // failure\n    } else {\n      // success\n    }\n  });\n  ```\n   Promise Example;\n   ```javascript\n  findResult().then(function(result){\n    // success\n  }, function(reason){\n    // failure\n  });\n  ```\n   Advanced Example\n  --------------\n   Synchronous Example\n   ```javascript\n  let author, books;\n   try {\n    author = findAuthor();\n    books  = findBooksByAuthor(author);\n    // success\n  } catch(reason) {\n    // failure\n  }\n  ```\n   Errback Example\n   ```js\n   function foundBooks(books) {\n   }\n   function failure(reason) {\n   }\n   findAuthor(function(author, err){\n    if (err) {\n      failure(err);\n      // failure\n    } else {\n      try {\n        findBoooksByAuthor(author, function(books, err) {\n          if (err) {\n            failure(err);\n          } else {\n            try {\n              foundBooks(books);\n            } catch(reason) {\n              failure(reason);\n            }\n          }\n        });\n      } catch(error) {\n        failure(err);\n      }\n      // success\n    }\n  });\n  ```\n   Promise Example;\n   ```javascript\n  findAuthor().\n    then(findBooksByAuthor).\n    then(function(books){\n      // found books\n  }).catch(function(reason){\n    // something went wrong\n  });\n  ```\n   @method then\n  @param {Function} onFulfilled\n  @param {Function} onRejected\n  Useful for tooling.\n  @return {Promise}\n  */\n\n  /**\n  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same\n  as the catch block of a try/catch statement.\n  ```js\n  function findAuthor(){\n  throw new Error('couldn't find that author');\n  }\n  // synchronous\n  try {\n  findAuthor();\n  } catch(reason) {\n  // something went wrong\n  }\n  // async with promises\n  findAuthor().catch(function(reason){\n  // something went wrong\n  });\n  ```\n  @method catch\n  @param {Function} onRejection\n  Useful for tooling.\n  @return {Promise}\n  */\n\n\n  Promise.prototype.catch = function _catch(onRejection) {\n    return this.then(null, onRejection);\n  };\n\n  /**\n    `finally` will be invoked regardless of the promise's fate just as native\n    try/catch/finally behaves\n  \n    Synchronous example:\n  \n    ```js\n    findAuthor() {\n      if (Math.random() > 0.5) {\n        throw new Error();\n      }\n      return new Author();\n    }\n  \n    try {\n      return findAuthor(); // succeed or fail\n    } catch(error) {\n      return findOtherAuther();\n    } finally {\n      // always runs\n      // doesn't affect the return value\n    }\n    ```\n  \n    Asynchronous example:\n  \n    ```js\n    findAuthor().catch(function(reason){\n      return findOtherAuther();\n    }).finally(function(){\n      // author was either found, or not\n    });\n    ```\n  \n    @method finally\n    @param {Function} callback\n    @return {Promise}\n  */\n\n\n  Promise.prototype.finally = function _finally(callback) {\n    var promise = this;\n    var constructor = promise.constructor;\n\n    if (isFunction(callback)) {\n      return promise.then(function (value) {\n        return constructor.resolve(callback()).then(function () {\n          return value;\n        });\n      }, function (reason) {\n        return constructor.resolve(callback()).then(function () {\n          throw reason;\n        });\n      });\n    }\n\n    return promise.then(callback, callback);\n  };\n\n  return Promise;\n}();\n\nPromise$1.prototype.then = then;\nPromise$1.all = all;\nPromise$1.race = race;\nPromise$1.resolve = resolve$1;\nPromise$1.reject = reject$1;\nPromise$1._setScheduler = setScheduler;\nPromise$1._setAsap = setAsap;\nPromise$1._asap = asap;\n\n/*global self*/\nfunction polyfill() {\n  var local = void 0;\n\n  if (typeof global !== 'undefined') {\n    local = global;\n  } else if (typeof self !== 'undefined') {\n    local = self;\n  } else {\n    try {\n      local = Function('return this')();\n    } catch (e) {\n      throw new Error('polyfill failed because global object is unavailable in this environment');\n    }\n  }\n\n  var P = local.Promise;\n\n  if (P) {\n    var promiseToString = null;\n    try {\n      promiseToString = Object.prototype.toString.call(P.resolve());\n    } catch (e) {\n      // silently ignored\n    }\n\n    if (promiseToString === '[object Promise]' && !P.cast) {\n      return;\n    }\n  }\n\n  local.Promise = Promise$1;\n}\n\n// Strange compat..\nPromise$1.polyfill = polyfill;\nPromise$1.Promise = Promise$1;\n\nreturn Promise$1;\n\n})));\n\n\n\n//# sourceMappingURL=es6-promise.map\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"../../../../../node_modules/process/browser.js\"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"../../../../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/es6-promise/dist/es6-promise.js?");

/***/ }),

/***/ "../../../../../node_modules/is-buffer/index.js":
/*!********************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/is-buffer/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\nmodule.exports = function isBuffer (obj) {\n  return obj != null && obj.constructor != null &&\n    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/is-buffer/index.js?");

/***/ }),

/***/ "../../../../../node_modules/process/browser.js":
/*!********************************************************************************!*\
  !*** D:/workspace/OLL/platform/publish-client/node_modules/process/browser.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///D:/workspace/OLL/platform/publish-client/node_modules/process/browser.js?");

/***/ }),

/***/ "../../../../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/_document/js/config/settings.json":
/*!***********************************************!*\
  !*** ./src/_document/js/config/settings.json ***!
  \***********************************************/
/*! exports provided: general, publish, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"general\\\":{\\\"libraryName\\\":\\\"City of San Mateo Law Library\\\",\\\"language\\\":\\\"en-US\\\",\\\"gitProviderURL\\\":\\\"https://github.com\\\",\\\"gitOrgName\\\":\\\"cityofsanmateo\\\",\\\"liveSite\\\":\\\"https://sanmateo.ca.us.open.law/\\\",\\\"displayName\\\":\\\"City of San Mateo, California\\\",\\\"entityId\\\":\\\"us/ca/cities/san-mateo\\\"},\\\"publish\\\":{\\\"themeVersion\\\":\\\"v2\\\",\\\"favicon\\\":\\\"/images/favicons/favicon.ico\\\",\\\"themeId\\\":\\\"/us/ngo/oll\\\",\\\"style\\\":{\\\"namespaceSuffix\\\":\\\"oll-core\\\"},\\\"logo\\\":{\\\"name\\\":\\\"San Mateo Law Library\\\",\\\"libraryLogo\\\":{\\\"image\\\":\\\"\\\",\\\"srcset\\\":[]},\\\"header\\\":{\\\"image\\\":\\\"/images/logo/logo.png\\\",\\\"srcset\\\":[\\\"/images/logo/logo.png 1x\\\",\\\"/images/logo/logo@2x.png 2x\\\"]},\\\"footer\\\":{\\\"image\\\":\\\"\\\",\\\"srcset\\\":[]}},\\\"fonts\\\":[\\\"/biticons/biticons.css\\\",\\\"/fonts/ananda/ananda.css\\\",\\\"/fonts/roboto-condensed/roboto-condensed.css\\\"],\\\"feature\\\":{\\\"reader\\\":true,\\\"openGraph\\\":true,\\\"pwa\\\":true},\\\"pwa\\\":{\\\"name\\\":\\\"San Mateo Law Library\\\",\\\"short_name\\\":\\\"SMC Law Library\\\",\\\"description\\\":\\\"San Mateo Law library contains latest official version of laws, ordinances, city charter and code.\\\",\\\"theme_color\\\":\\\"#0078EF\\\",\\\"background_color\\\":\\\"#FFFFFF\\\",\\\"display\\\":\\\"standalone\\\",\\\"start_url\\\":\\\"/\\\",\\\"scope\\\":\\\"/\\\",\\\"orientation\\\":\\\"portrait-primary\\\",\\\"dir\\\":\\\"ltr\\\"},\\\"msapp\\\":{\\\"tileColor\\\":\\\"#FFFFFF\\\"},\\\"search\\\":{\\\"searchHost\\\":\\\"https://sanmateo.ca.us.open.law\\\",\\\"queryUrl\\\":\\\"/v1/search\\\",\\\"method\\\":\\\"POST\\\"},\\\"openGraph\\\":{\\\"libraryName\\\":\\\"Open Law Library\\\",\\\"defaultDescription\\\":\\\"San Mateo Law library contains latest official version of laws, ordinances, city charter and code.\\\",\\\"defaultImage\\\":\\\"/images/og/og_image.png\\\"},\\\"contact\\\":{\\\"email\\\":\\\"help@openlawlib.org\\\"},\\\"analytics\\\":{\\\"trackingPixel\\\":\\\"/_analytics/pixel.png\\\",\\\"trackingSite\\\":\\\"2\\\"}}}\");\n\n//# sourceURL=webpack:///./src/_document/js/config/settings.json?");

/***/ }),

/***/ "./src/_document/js/readerLite.js":
/*!****************************************!*\
  !*** ./src/_document/js/readerLite.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"../../../../../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"../../../../../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search */ \"../../../../../node_modules/core-js/modules/es.string.search.js\");\n/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_settings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/settings.json */ \"./src/_document/js/config/settings.json\");\nvar _config_settings_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config/settings.json */ \"./src/_document/js/config/settings.json\", 1);\n/* harmony import */ var modernizr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modernizr */ \"../../../../../core__front-end/v2/build-process/configuration/.modernizrrc\");\n/* harmony import */ var modernizr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(modernizr__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var Core_components_feedback_Feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Core/components/feedback/Feedback */ \"../../../../../core__front-end/v2/_document/js/components/feedback/Feedback.js\");\n/* harmony import */ var Core_components_login_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Core/components/login/Login */ \"../../../../../core__front-end/v2/_document/js/components/login/Login.js\");\n/* harmony import */ var Core_components_search_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Core/components/search/Search */ \"../../../../../core__front-end/v2/_document/js/components/search/Search.js\");\n/* harmony import */ var Core_utils_ajax_FullHtmlFetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Core/utils/ajax/FullHtmlFetch */ \"../../../../../core__front-end/v2/_document/js/utils/ajax/FullHtmlFetch.js\");\n/* harmony import */ var Core_utils_ajax_HeadingReorder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Core/utils/ajax/HeadingReorder */ \"../../../../../core__front-end/v2/_document/js/utils/ajax/HeadingReorder.js\");\n/* harmony import */ var Shared_utils_FindThemeDir__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Shared/utils/FindThemeDir */ \"../../../../../core__front-end/v2/shared/js/utils/FindThemeDir.js\");\n/* harmony import */ var Core_utils_messages_MessageUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Core/utils/messages/MessageUtil */ \"../../../../../core__front-end/v2/_document/js/utils/messages/MessageUtil.js\");\n/* harmony import */ var Core_components_lightbox_Lightbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Core/components/lightbox/Lightbox */ \"../../../../../core__front-end/v2/_document/js/components/lightbox/Lightbox.js\");\n/* harmony import */ var Core_components_historical_versions_HistoricalVersionsCompare__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Core/components/historical-versions/HistoricalVersionsCompare */ \"../../../../../core__front-end/v2/_document/js/components/historical-versions/HistoricalVersionsCompare.js\");\n // Use this file as starting point to develop Document specific App\n// (Reader-lite version)\n// IMPORTS\n// -------------------------------------------------------------------\n// Import shared settings\n\n\n\n\n // Import components\n\n\n\n\n\n\n\n\n\n\n // Find theme root\n\nvar cssFile = document.querySelector('head link[rel=\"stylesheet\"]').getAttribute('href');\nvar DOCROOT = new Shared_utils_FindThemeDir__WEBPACK_IMPORTED_MODULE_10__[\"default\"](cssFile).documentUrl(); // Load polyfills if browser requires it\n// All modernizr options https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json\n\nif (!modernizr__WEBPACK_IMPORTED_MODULE_4___default.a.promises || !modernizr__WEBPACK_IMPORTED_MODULE_4___default.a.es6object || !modernizr__WEBPACK_IMPORTED_MODULE_4___default.a.es6array) {\n  __webpack_require__(/*! Core/misc/polyfills.js */ \"../../../../../core__front-end/v2/_document/js/misc/polyfills.js\");\n} // Load components when DOM is ready\n\n\nwindow.onload = function () {\n  // SCRIPT LOADING\n  // ---------------------------------------------------------------------------\n  // Attach other scripts and styles here\n  // Scripts that require CSS should execute after CSS is loaded\n  // COMPONENTS\n  // ---------------------------------------------------------------------------\n  // Feedback component\n  // ------------------\n  var WIDGET_FEEDBACK = new Core_components_feedback_Feedback__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_config_settings_json__WEBPACK_IMPORTED_MODULE_3__.publish.style.namespaceSuffix, '#section__content__inner');\n  WIDGET_FEEDBACK.emailFeedback = _config_settings_json__WEBPACK_IMPORTED_MODULE_3__.publish.contact.email;\n  WIDGET_FEEDBACK.emailReport = _config_settings_json__WEBPACK_IMPORTED_MODULE_3__.publish.contact.email;\n  WIDGET_FEEDBACK.run(); // Search component (old one)\n  // --------------------------\n\n  var searchHost = _config_settings_json__WEBPACK_IMPORTED_MODULE_3__.publish.search.searchHost;\n  var searchQuery = _config_settings_json__WEBPACK_IMPORTED_MODULE_3__.publish.search.queryUrl;\n  var searchMethod = _config_settings_json__WEBPACK_IMPORTED_MODULE_3__.publish.search.method;\n  var WIDGET_SEARCH = new Core_components_search_Search__WEBPACK_IMPORTED_MODULE_7__[\"default\"](_config_settings_json__WEBPACK_IMPORTED_MODULE_3__.publish.style.namespaceSuffix, '#section__header__inner', searchHost, searchQuery, searchMethod);\n  WIDGET_SEARCH.searchScript = \"\".concat(DOCROOT, \"/js/vendor/main.js\"); // Old search location\n\n  WIDGET_SEARCH.run(); // Login component\n  // ---------------\n\n  var WIDGET_LOGIN = new Core_components_login_Login__WEBPACK_IMPORTED_MODULE_6__[\"default\"](_config_settings_json__WEBPACK_IMPORTED_MODULE_3__.publish.style.namespaceSuffix, '#section__content__inner'); // Heading reordering utility\n  // ------------------\n\n  var HEADING_REORDER_UTIL = new Core_utils_ajax_HeadingReorder__WEBPACK_IMPORTED_MODULE_9__[\"default\"]('#area__content'); // Full html fetcher\n  // -----------------\n\n  var FULL_HTML_FETCH = new Core_utils_ajax_FullHtmlFetch__WEBPACK_IMPORTED_MODULE_8__[\"default\"]('#area__content', 'article.content div.tuf-authenticate');\n  FULL_HTML_FETCH.run().then(function () {\n    HEADING_REORDER_UTIL.run();\n  })[\"catch\"](function () {// console.log('error occurred while fetching full html');\n  })[\"finally\"](function () {\n    WIDGET_LOGIN.run();\n  }); // Messages\n  // --------\n\n  var MESSAGE_UTIL = new Core_utils_messages_MessageUtil__WEBPACK_IMPORTED_MODULE_11__[\"default\"](_config_settings_json__WEBPACK_IMPORTED_MODULE_3__.publish.style.namespaceSuffix);\n  MESSAGE_UTIL.run(); // Image lightbox\n  // --------------\n\n  var LIGHTBOX = new Core_components_lightbox_Lightbox__WEBPACK_IMPORTED_MODULE_12__[\"default\"](_config_settings_json__WEBPACK_IMPORTED_MODULE_3__.publish.style.namespaceSuffix);\n  LIGHTBOX.run(); // Document history and comparison\n  // -------------------------------\n\n  var HISTORY = new Core_components_historical_versions_HistoricalVersionsCompare__WEBPACK_IMPORTED_MODULE_13__[\"default\"](_config_settings_json__WEBPACK_IMPORTED_MODULE_3__.publish.style.namespaceSuffix, '#section__content__inner');\n  HISTORY.run();\n};\n\n//# sourceURL=webpack:///./src/_document/js/readerLite.js?");

/***/ })

/******/ });