"use strict";
(self["webpackChunkto_do"] = self["webpackChunkto_do"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Lobster.ttf */ "./src/Lobster.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Lobster';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    background-color: rgba(0, 0, 0, 0.100);\r\n    display: grid;\r\n    grid-template-rows: 1fr 10fr;\r\n}\r\n\r\nhtml, body {\r\n    position:fixed;\r\n    top:0;\r\n    bottom:0;\r\n    left:0;\r\n    right:0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nheader {\r\n    background: #f1f1f1;\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    color: #333;\r\n    font-family: 'Lobster', cursive;\r\n    cursor: default;\r\n}\r\n\r\n#wrapper {\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n}\r\n\r\n\r\n#nav {\r\n    background: #333;\r\n    color: #f1f1f1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 10px;\r\n}\r\n\r\n#nav > button {\r\n  appearance: none;\r\n  background-color: #FFFFFF;\r\n  border-radius: 40em;\r\n  border-style: none;\r\n  box-shadow: #ADCFFF 0 -12px 6px inset;\r\n  box-sizing: border-box;\r\n  color: #000000;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: -apple-system,sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  letter-spacing: -.24px;\r\n  outline: none;\r\n  margin: 0;\r\n  padding: 1rem 1.3rem;\r\n  quotes: auto;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: all .15s;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n#nav > button:hover {\r\n  background-color: #FFC229;\r\n  box-shadow: #FF6314 0 -6px 8px inset;\r\n  transform: scale(1.125);\r\n}\r\n\r\n#nav > button:active {\r\n  transform: scale(1.025);\r\n}\r\n\r\n\r\n#new-task-heading, #heading {\r\n    cursor: default;\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 3rem;\r\n    color: whitesmoke;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    margin: 2rem;\r\n}\r\n\r\n#form-buttons { \r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n#form-buttons > button {\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\n#new-task-button, #delete-all, #submit-button, #cancel-button, #delete-completed-button, #delete-project {\r\n    display: inline-block;\r\n    outline: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    border-radius: 15px;\r\n    transition-property: background-color,border-color,color,box-shadow,filter;\r\n    transition-duration: .3s;\r\n    border: 1px solid transparent;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    white-space: normal;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    padding: 14px;\r\n    color: #fff;\r\n    background-color: #3b49df;\r\n}\r\n\r\n#new-task-button:hover, #submit-button:hover {\r\n    background-color: #1db954;\r\n}\r\n\r\n#delete-all, #cancel-button, #delete-completed-button, #delete-project {\r\n    opacity: 70%;\r\n    background-color: #e53935;\r\n}\r\n\r\n#delete-all:hover, #cancel-button:hover, #delete-completed-button:hover, #delete-project:hover {\r\n    opacity: 100%;\r\n}\r\n\r\n#new-task-form, #new-project-form > form {\r\n    border-radius: 15px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    width: max-content;\r\n    height: max-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1rem;\r\n    gap: 1rem;\r\n    align-items: center;\r\n    background: rgba(0,0,0,0.350);\r\n}\r\n\r\n#new-task-form > input, #new-project-form > form > input, #new-project-description {\r\n    text-align: center;\r\n    font-family: Lobster, cursive;\r\n    width: 100%;\r\n    border-radius: 15px;\r\n    background: rgb(249, 250, 250);\r\n    border: 1px solid rgb(181, 189, 196);\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    padding: 7px 8px;\r\n    color: rgb(8, 9, 10);\r\n    box-shadow: none;\r\n}\r\n\r\n#new-project-description {\r\n   height: 50px; \r\n}\r\n\r\n#new-project-description:focus{\r\n    outline: none;\r\n    border-color: #3b49df;\r\n    box-shadow: 1px 1px 0 #3b49df;\r\n}\r\n\r\n#new-task-form > input:focus, #new-project-form > form > input:focus {\r\n    background-color: #fff;\r\n    outline: none;\r\n    border-color: #3b49df;\r\n    box-shadow: 1px 1px 0 #3b49df;\r\n}\r\n\r\n#project-description {\r\n    grid-column: 1/3;\r\n    border-radius: 15px;\r\n    font-size: 18px;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    color: white;\r\n    position: relative;\r\n    margin: -1rem -1rem 0 -1rem;\r\n    padding: 1rem;\r\n    background: rgba(0, 0, 0, 0.350);\r\n}\r\n\r\np {\r\n    margin: 0%;\r\n}\r\n\r\n.checked {\r\n    text-decoration: line-through;\r\n    opacity: 50%;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n.task {\r\n    background: #3b49df;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    width: 30vw;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.task:hover {\r\n    width: max-content;\r\n    background-color: rgba(0, 0, 0, 0.350);\r\n    color: whitesmoke;\r\n}\r\n\r\n.task:hover > p {\r\n    display: inherit;\r\n    width: max-content;\r\n}\r\n\r\n.task-name {\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.task-due-date {\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n    align-self: right;\r\n}\r\n\r\n\r\n.task-description {\r\n    display: none;\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.task-priority {\r\n    color: #e53935;\r\n    display: none;\r\n    font-family: monospace;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'Lobster';\r\n    src: url(./Lobster.ttf);\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    background-color: rgba(0, 0, 0, 0.100);\r\n    display: grid;\r\n    grid-template-rows: 1fr 10fr;\r\n}\r\n\r\nhtml, body {\r\n    position:fixed;\r\n    top:0;\r\n    bottom:0;\r\n    left:0;\r\n    right:0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nheader {\r\n    background: #f1f1f1;\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    color: #333;\r\n    font-family: 'Lobster', cursive;\r\n    cursor: default;\r\n}\r\n\r\n#wrapper {\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n}\r\n\r\n\r\n#nav {\r\n    background: #333;\r\n    color: #f1f1f1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 10px;\r\n}\r\n\r\n#nav > button {\r\n  appearance: none;\r\n  background-color: #FFFFFF;\r\n  border-radius: 40em;\r\n  border-style: none;\r\n  box-shadow: #ADCFFF 0 -12px 6px inset;\r\n  box-sizing: border-box;\r\n  color: #000000;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: -apple-system,sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  letter-spacing: -.24px;\r\n  outline: none;\r\n  margin: 0;\r\n  padding: 1rem 1.3rem;\r\n  quotes: auto;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: all .15s;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n#nav > button:hover {\r\n  background-color: #FFC229;\r\n  box-shadow: #FF6314 0 -6px 8px inset;\r\n  transform: scale(1.125);\r\n}\r\n\r\n#nav > button:active {\r\n  transform: scale(1.025);\r\n}\r\n\r\n\r\n#new-task-heading, #heading {\r\n    cursor: default;\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 3rem;\r\n    color: whitesmoke;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    margin: 2rem;\r\n}\r\n\r\n#form-buttons { \r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n#form-buttons > button {\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\n#new-task-button, #delete-all, #submit-button, #cancel-button, #delete-completed-button, #delete-project {\r\n    display: inline-block;\r\n    outline: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    border-radius: 15px;\r\n    transition-property: background-color,border-color,color,box-shadow,filter;\r\n    transition-duration: .3s;\r\n    border: 1px solid transparent;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    white-space: normal;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    padding: 14px;\r\n    color: #fff;\r\n    background-color: #3b49df;\r\n}\r\n\r\n#new-task-button:hover, #submit-button:hover {\r\n    background-color: #1db954;\r\n}\r\n\r\n#delete-all, #cancel-button, #delete-completed-button, #delete-project {\r\n    opacity: 70%;\r\n    background-color: #e53935;\r\n}\r\n\r\n#delete-all:hover, #cancel-button:hover, #delete-completed-button:hover, #delete-project:hover {\r\n    opacity: 100%;\r\n}\r\n\r\n#new-task-form, #new-project-form > form {\r\n    border-radius: 15px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    width: max-content;\r\n    height: max-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1rem;\r\n    gap: 1rem;\r\n    align-items: center;\r\n    background: rgba(0,0,0,0.350);\r\n}\r\n\r\n#new-task-form > input, #new-project-form > form > input, #new-project-description {\r\n    text-align: center;\r\n    font-family: Lobster, cursive;\r\n    width: 100%;\r\n    border-radius: 15px;\r\n    background: rgb(249, 250, 250);\r\n    border: 1px solid rgb(181, 189, 196);\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    padding: 7px 8px;\r\n    color: rgb(8, 9, 10);\r\n    box-shadow: none;\r\n}\r\n\r\n#new-project-description {\r\n   height: 50px; \r\n}\r\n\r\n#new-project-description:focus{\r\n    outline: none;\r\n    border-color: #3b49df;\r\n    box-shadow: 1px 1px 0 #3b49df;\r\n}\r\n\r\n#new-task-form > input:focus, #new-project-form > form > input:focus {\r\n    background-color: #fff;\r\n    outline: none;\r\n    border-color: #3b49df;\r\n    box-shadow: 1px 1px 0 #3b49df;\r\n}\r\n\r\n#project-description {\r\n    grid-column: 1/3;\r\n    border-radius: 15px;\r\n    font-size: 18px;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    color: white;\r\n    position: relative;\r\n    margin: -1rem -1rem 0 -1rem;\r\n    padding: 1rem;\r\n    background: rgba(0, 0, 0, 0.350);\r\n}\r\n\r\np {\r\n    margin: 0%;\r\n}\r\n\r\n.checked {\r\n    text-decoration: line-through;\r\n    opacity: 50%;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n.task {\r\n    background: #3b49df;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    width: 30vw;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.task:hover {\r\n    width: max-content;\r\n    background-color: rgba(0, 0, 0, 0.350);\r\n    color: whitesmoke;\r\n}\r\n\r\n.task:hover > p {\r\n    display: inherit;\r\n    width: max-content;\r\n}\r\n\r\n.task-name {\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.task-due-date {\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n    align-self: right;\r\n}\r\n\r\n\r\n.task-description {\r\n    display: none;\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.task-priority {\r\n    color: #e53935;\r\n    display: none;\r\n    font-family: monospace;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



(0,_todo__WEBPACK_IMPORTED_MODULE_1__.createLayout)();


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLayout": () => (/* binding */ createLayout)
/* harmony export */ });
class Task {
    constructor(name, description, dueDate, priority, project) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
        this.project = project;
    }
}

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

const createLayout = () => {
    const header = document.createElement('header');
    header.id = 'header';
    header.innerText = 'To Do';
    document.body.appendChild(header);
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    document.body.appendChild(wrapper);
    const nav = document.createElement('nav');
    nav.id = 'nav';
    wrapper.appendChild(nav);
    const content = document.createElement('div');
    content.id = 'content';
    content.innerHTML = '<div id="project-description"><b>Create a project to get started!</b></div>';
    wrapper.appendChild(content);
    projectPage();
}

const currentProject = (() => {
    let currentProject = null;
    const getCurrentProject = () => currentProject;
    const setCurrentProject = (project) => currentProject = project;
    return {getCurrentProject, setCurrentProject};
})(); 

const projectPage = () => {
    const content = document.getElementById('content');
    const addChecklist = document.createElement('button');
    addChecklist.id = 'add-checklist';
    addChecklist.innerText = '+';
    const updateNav = (() => {
        const nav = document.getElementById('nav');
        nav.innerHTML = '';
        const heading = document.createElement('div');
        heading.id = 'heading';
        heading.innerText = 'Projects';
        nav.appendChild(heading);
        const projectsList = projectList.getProjects();
        projectsList.forEach((project) => {
            const newProject = document.createElement('button');
            newProject.id = 'checklist';
            newProject.textContent = project.title;
            nav.appendChild(newProject);
            newProject.addEventListener('click', () => {
               currentProject.setCurrentProject(project);
               console.log(currentProject.getCurrentProject());
               content.innerHTML = '';
               const projectDescription = document.createElement('div');
               projectDescription.id = 'project-description';
               projectDescription.textContent = project.description;
               content.appendChild(projectDescription);
               taskPage();
            });
            newProject.click();
        })
    })();
    nav.appendChild(addChecklist);
    addChecklist.addEventListener('click', () => {
        if (document.body.contains(document.getElementById('new-project-form'))) {
            document.getElementById('new-project-form').classList.toggle('hidden');
        } else {
            newProjectPage();
        }
    });
    if(projectList.getProjects().length > 0) {
        taskPage();
    } else {
        content.innerHTML = '<div id="project-description"><b>Create a project to get started!</b></div>';
        document.getElementById('add-checklist').click();
    }
}

const newProjectPage = () => {
    const content = document.createElement('div');
    content.id = 'new-project-form';
    const heading = document.createElement('div');
    heading.id = 'heading';
    heading.innerText = 'New Project';
    const form = document.createElement('form');
    const title = document.createElement('input');
    title.type = 'text';
    title.placeholder = 'Project Title';
    const description = document.createElement('textarea');
    description.id = 'new-project-description';
    description.placeholder = 'Project Description';
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Submit';
    submit.id = 'submit-button';
    const cancel = document.createElement('button');
    cancel.type = 'button';
    cancel.id = 'cancel-button';
    cancel.innerText = 'Cancel';
    const buttons = document.createElement('div');
    buttons.id = 'form-buttons';
    
    form.appendChild(heading);
    form.appendChild(title);
    form.appendChild(description);
    buttons.appendChild(submit);
    buttons.appendChild(cancel);
    form.appendChild(buttons);
    content.appendChild(form);
    document.body.appendChild(content);
    
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (title.value.length >= 3 && description.value.length > 0) {
            const project = new Project(title.value, description.value);
            projectList.addProject(project);
            projectPage();
            document.getElementById('new-project-form').classList.toggle('hidden');
        } else if(title.value.length < 3) {
            alert('Title must be at least 3 characters long!');
        } else if(description.value.length < 1) {
            alert('Description must be at least 1 character long!');
        } else {
            alert('Something went wrong!');
        }
    });
    cancel.addEventListener('click', () => {
        content.classList.add('hidden');
    });
}

const taskList = (() => {
    const tasks = [];
    const addTask = (task) => {
        tasks.push(task);
    };
    const removeTask = (task) => {
        tasks.splice(tasks.indexOf(task), 1);
    };
    const getTasks = () => tasks;
    const getFinishedTasks = () => {
        const project = currentProject.getCurrentProject();
        const tasks = getTasksByProject(project);
        const finishedTasks = [];
        tasks.forEach((task) => {
            if (task.completed === true) {
                finishedTasks.push(task);
            }
        });
        return finishedTasks;
    };
    const clearTasks = () => {
        const project = currentProject.getCurrentProject();
        const tasks = getTasksByProject(project);
        console.log(tasks);
        tasks.forEach((task) => {
            removeTask(task);
        });
    };
    const getTasksByProject = (project) => {
        const tasksByProject = [];
        tasks.forEach((task) => {
            if (task.project === project) {
                tasksByProject.push(task);
            }
        });
        return tasksByProject;
    };
    return { addTask, removeTask, getTasks, getFinishedTasks, clearTasks, getTasksByProject };
})();

const taskPage = () => {
    const content = document.getElementById('content');
    const buttons = document.createElement('div');
    buttons.id = 'form-buttons';
    while (content.firstChild != content.lastChild) {
        content.removeChild(content.lastChild);
    }
    const project = currentProject.getCurrentProject();
    const tasks = taskList.getTasksByProject(project);
    tasks.forEach((task) => {
        const taskDiv = document.createElement('div');
        const checked = document.createElement('input');
        checked.type = 'checkbox';
        checked.id = 'checkbox';
        checked.addEventListener('click', () => {
            if (!checked.checked) {
                checked.checked = true;
                task.completed = true;
                taskDiv.classList.toggle('checked');
            } else {
                checked.checked = false;
                task.completed = false;
                taskDiv.classList.toggle('checked');
            }
        });
        taskDiv.appendChild(checked);
        taskDiv.classList.add('task');
        const taskName = document.createElement('p');
        taskName.classList.add('task-name');
        taskName.textContent = task.name;
        taskDiv.appendChild(taskName);
        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        taskDueDate.textContent = 'Due: ' + task.dueDate;
        taskDiv.appendChild(taskDueDate);
        const taskDescription = document.createElement('p');
        taskDescription.classList.add('task-description');
        taskDescription.textContent = 'Description: ' + task.description;
        taskDiv.appendChild(taskDescription);
        const taskPriority = document.createElement('p');
        taskPriority.classList.add('task-priority');
        taskPriority.textContent = 'Priority: ' + task.priority;
        taskPriority.classList.add('task-priority');
        taskDiv.appendChild(taskPriority);
        taskDiv.addEventListener('click', () => {
            console.log(task);
            checked.checked = !checked.checked;
            if (checked.checked == true) {
                taskDiv.classList.add('checked');
                task.completed = true;
            } else {
                taskDiv.classList.remove('checked');
                task.completed = false;
            }
        });
        content.appendChild(taskDiv);
        if (task.completed == true) {
            taskDiv.classList.add('checked');
            checked.checked = true;
        } else {
            taskDiv.classList.remove('checked');
            checked.checked = false;
        }
    });
    const newTaskButton = document.createElement('button');
    newTaskButton.textContent = 'New Task';
    newTaskButton.id = 'new-task-button';
    newTaskButton.addEventListener('click', () => {
        if (document.body.contains(document.getElementById('new-task-form'))) {
            document.getElementById('new-task-form').classList.toggle('hidden');
        } else {
            newTaskPage();
        }
    });
    buttons.appendChild(newTaskButton);
    const deleteCompletedButton = document.createElement('button');
    deleteCompletedButton.textContent = 'Delete Finished Tasks';
    deleteCompletedButton.id = 'delete-completed-button';
    deleteCompletedButton.addEventListener('click', () => {
        const finishedTasks = taskList.getFinishedTasks();
        finishedTasks.forEach((task) => {
            taskList.removeTask(task);
            taskPage();
        });
    });
    buttons.appendChild(deleteCompletedButton);
    const deleteAll = document.createElement('button');
    const currProject = currentProject.getCurrentProject();
    deleteAll.textContent = 'Delete All Tasks';
    deleteAll.id = 'delete-all';
    deleteAll.addEventListener('click', () => {
        if (confirm(`Are you sure you want to delete all tasks in ${currProject.title}?`)) {
            taskList.clearTasks();
            taskPage();
        }
    });
    buttons.appendChild(deleteAll);
    const deleteProject = document.createElement('button');
    deleteProject.textContent = 'Delete Project';
    deleteProject.id = 'delete-project';
    deleteProject.addEventListener('click', () => {
        if (confirm(`Are you sure you want to delete ${currProject.title}?`)) {
            projectList.removeProject(currProject);
            projectPage();
        }
    });
    buttons.appendChild(deleteProject);
    content.appendChild(buttons);
    if (document.body.contains(document.getElementById('new-task-form'))) {
        document.getElementById('new-task-form').classList.toggle('hidden');
    }
};

const newTaskPage = () => {
    const content = document.getElementById('content');
    const newTaskForm = document.createElement('form');
    newTaskForm.setAttribute('id', 'new-task-form');
    newTaskForm.setAttribute('action', 'index.html');
    newTaskForm.setAttribute('method', 'POST');

    const heading = document.createElement('div');
    heading.textContent = 'New Task';
    heading.id = 'new-task-heading';
    newTaskForm.appendChild(heading);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('placeholder', 'Title');

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('placeholder', 'Description');

    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('name', 'dueDate');

    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('type', 'dropdown');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('placeholder', 'Priority');
    priorityInput.setAttribute('list', 'priority-list');
    const priorityList = document.createElement('datalist');
    priorityList.setAttribute('id', 'priority-list');
    const priorityLow = document.createElement('option');
    priorityLow.setAttribute('value', 'Low');
    const priorityMedium = document.createElement('option');
    priorityMedium.setAttribute('value', 'Medium');
    const priorityHigh = document.createElement('option');
    priorityHigh.setAttribute('value', 'High');
    priorityList.appendChild(priorityLow);
    priorityList.appendChild(priorityMedium);
    priorityList.appendChild(priorityHigh);
    priorityInput.appendChild(priorityList);

    const buttons = document.createElement('div');
    buttons.id = 'form-buttons';

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit-button');
    submitButton.textContent = 'Add Task';

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.setAttribute('id', 'cancel-button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => { taskPage(); });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const title = titleInput.value;
        const description = descriptionInput.value;
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;
        const project = currentProject.getCurrentProject();
        const task = new Task(title, description, dueDate, priority, project);
        taskList.addTask(task);
        console.log(task);
        taskPage();
    });

    buttons.appendChild(submitButton);
    buttons.appendChild(cancelButton);
    newTaskForm.appendChild(titleInput);
    newTaskForm.appendChild(descriptionInput);
    newTaskForm.appendChild(dueDateInput);
    newTaskForm.appendChild(priorityInput);
    newTaskForm.appendChild(buttons);
    content.appendChild(newTaskForm);
    document.getElementById('wrapper').appendChild(content);
}

const projectList = (() => {
    const projects = [];
    const addProject = (project) => {
        projects.push(project);
    };
    const removeProject = (project) => {
        projects.splice(projects.indexOf(project), 1);
    };
    const getProjects = () => projects;
    const getProjectByDescription= (description) => {
       projects.forEach((project) => {
              if (project.description === description) {
                    return project;
                }
            });
       //if(description === 'Default') {
       //    return projects[0];
       //}    
    }
    const clearProjects = () => {
        projects.splice(0, projects.length);
    };
    return { addProject, removeProject, getProjects, getProjectByDescription, clearProjects };
})();









/***/ }),

/***/ "./src/Lobster.ttf":
/*!*************************!*\
  !*** ./src/Lobster.ttf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03c38496322925fec242.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZ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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0Usa0JBQWtCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGtCQUFrQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGFBQWE7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vTG9ic3Rlci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTAwKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICB0b3A6MDtcXHJcXG4gICAgYm90dG9tOjA7XFxyXFxuICAgIGxlZnQ6MDtcXHJcXG4gICAgcmlnaHQ6MDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuI3dyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25hdiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMzM7XFxyXFxuICAgIGNvbG9yOiAjZjFmMWYxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b24ge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0MGVtO1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogI0FEQ0ZGRiAwIC0xMnB4IDZweCBpbnNldDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLS4yNHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMS4zcmVtO1xcclxcbiAgcXVvdGVzOiBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIC4xNXM7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMjI5O1xcclxcbiAgYm94LXNoYWRvdzogI0ZGNjMxNCAwIC02cHggOHB4IGluc2V0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyNSk7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXRhc2staGVhZGluZywgI2hlYWRpbmcge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIG1hcmdpbjogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tYnV0dG9ucyB7IFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNmb3JtLWJ1dHRvbnMgPiBidXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWJ1dHRvbiwgI2RlbGV0ZS1hbGwsICNzdWJtaXQtYnV0dG9uLCAjY2FuY2VsLWJ1dHRvbiwgI2RlbGV0ZS1jb21wbGV0ZWQtYnV0dG9uLCAjZGVsZXRlLXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLGJvcmRlci1jb2xvcixjb2xvcixib3gtc2hhZG93LGZpbHRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxNHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNDlkZjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWJ1dHRvbjpob3ZlciwgI3N1Ym1pdC1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRiOTU0O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlLWFsbCwgI2NhbmNlbC1idXR0b24sICNkZWxldGUtY29tcGxldGVkLWJ1dHRvbiwgI2RlbGV0ZS1wcm9qZWN0IHtcXHJcXG4gICAgb3BhY2l0eTogNzAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzOTM1O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlLWFsbDpob3ZlciwgI2NhbmNlbC1idXR0b246aG92ZXIsICNkZWxldGUtY29tcGxldGVkLWJ1dHRvbjpob3ZlciwgI2RlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWZvcm0sICNuZXctcHJvamVjdC1mb3JtID4gZm9ybSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMzUwKTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWZvcm0gPiBpbnB1dCwgI25ldy1wcm9qZWN0LWZvcm0gPiBmb3JtID4gaW5wdXQsICNuZXctcHJvamVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IExvYnN0ZXIsIGN1cnNpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ5LCAyNTAsIDI1MCk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODEsIDE4OSwgMTk2KTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgcGFkZGluZzogN3B4IDhweDtcXHJcXG4gICAgY29sb3I6IHJnYig4LCA5LCAxMCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgaGVpZ2h0OiA1MHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWRlc2NyaXB0aW9uOmZvY3Vze1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMzYjQ5ZGY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMCAjM2I0OWRmO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2stZm9ybSA+IGlucHV0OmZvY3VzLCAjbmV3LXByb2plY3QtZm9ybSA+IGZvcm0gPiBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzNiNDlkZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAwICMzYjQ5ZGY7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogLTFyZW0gLTFyZW0gMCAtMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM1MCk7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICBtYXJnaW46IDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBvcGFjaXR5OiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzNiNDlkZjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAwLjA0KSAwcHggMXB4IDBweCAwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAzMHZ3O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUwKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVyID4gcCB7XFxyXFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbmFtZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZHVlLWRhdGUge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLXByaW9yaXR5IHtcXHJcXG4gICAgY29sb3I6ICNlNTM5MzU7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxLQUFLO0lBQ0wsUUFBUTtJQUNSLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0kscUdBQXFHO0FBQ3pHOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwwRUFBMEU7SUFDMUUsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7R0FDRyxZQUFZO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHFHQUFxRztJQUNyRyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxyXFxuICAgIHNyYzogdXJsKC4vTG9ic3Rlci50dGYpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTAwKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICB0b3A6MDtcXHJcXG4gICAgYm90dG9tOjA7XFxyXFxuICAgIGxlZnQ6MDtcXHJcXG4gICAgcmlnaHQ6MDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuI3dyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI25hdiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMzM7XFxyXFxuICAgIGNvbG9yOiAjZjFmMWYxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b24ge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0MGVtO1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogI0FEQ0ZGRiAwIC0xMnB4IDZweCBpbnNldDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLS4yNHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMS4zcmVtO1xcclxcbiAgcXVvdGVzOiBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIC4xNXM7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMjI5O1xcclxcbiAgYm94LXNoYWRvdzogI0ZGNjMxNCAwIC02cHggOHB4IGluc2V0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyNSk7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXRhc2staGVhZGluZywgI2hlYWRpbmcge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIG1hcmdpbjogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tYnV0dG9ucyB7IFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNmb3JtLWJ1dHRvbnMgPiBidXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWJ1dHRvbiwgI2RlbGV0ZS1hbGwsICNzdWJtaXQtYnV0dG9uLCAjY2FuY2VsLWJ1dHRvbiwgI2RlbGV0ZS1jb21wbGV0ZWQtYnV0dG9uLCAjZGVsZXRlLXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLGJvcmRlci1jb2xvcixjb2xvcixib3gtc2hhZG93LGZpbHRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxNHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNDlkZjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWJ1dHRvbjpob3ZlciwgI3N1Ym1pdC1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRiOTU0O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlLWFsbCwgI2NhbmNlbC1idXR0b24sICNkZWxldGUtY29tcGxldGVkLWJ1dHRvbiwgI2RlbGV0ZS1wcm9qZWN0IHtcXHJcXG4gICAgb3BhY2l0eTogNzAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzOTM1O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlLWFsbDpob3ZlciwgI2NhbmNlbC1idXR0b246aG92ZXIsICNkZWxldGUtY29tcGxldGVkLWJ1dHRvbjpob3ZlciwgI2RlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWZvcm0sICNuZXctcHJvamVjdC1mb3JtID4gZm9ybSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMzUwKTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWZvcm0gPiBpbnB1dCwgI25ldy1wcm9qZWN0LWZvcm0gPiBmb3JtID4gaW5wdXQsICNuZXctcHJvamVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IExvYnN0ZXIsIGN1cnNpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ5LCAyNTAsIDI1MCk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODEsIDE4OSwgMTk2KTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgcGFkZGluZzogN3B4IDhweDtcXHJcXG4gICAgY29sb3I6IHJnYig4LCA5LCAxMCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgaGVpZ2h0OiA1MHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWRlc2NyaXB0aW9uOmZvY3Vze1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMzYjQ5ZGY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMCAjM2I0OWRmO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2stZm9ybSA+IGlucHV0OmZvY3VzLCAjbmV3LXByb2plY3QtZm9ybSA+IGZvcm0gPiBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzNiNDlkZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAwICMzYjQ5ZGY7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogLTFyZW0gLTFyZW0gMCAtMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM1MCk7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICBtYXJnaW46IDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBvcGFjaXR5OiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzNiNDlkZjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAwLjA0KSAwcHggMXB4IDBweCAwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAzMHZ3O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUwKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVyID4gcCB7XFxyXFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbmFtZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZHVlLWRhdGUge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLXByaW9yaXR5IHtcXHJcXG4gICAgY29sb3I6ICNlNTM5MzU7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlTGF5b3V0IH0gZnJvbSAnLi90b2RvJztcclxuXHJcbmNyZWF0ZUxheW91dCgpO1xyXG4iLCJjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTGF5b3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSAnVG8gRG8nO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd3JhcHBlci5pZCA9ICd3cmFwcGVyJztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5pZCA9ICduYXYnO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5pZCA9ICdjb250ZW50JztcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJzxkaXYgaWQ9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+PGI+Q3JlYXRlIGEgcHJvamVjdCB0byBnZXQgc3RhcnRlZCE8L2I+PC9kaXY+JztcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICBwcm9qZWN0UGFnZSgpO1xyXG59XHJcblxyXG5jb25zdCBjdXJyZW50UHJvamVjdCA9ICgoKSA9PiB7XHJcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBudWxsO1xyXG4gICAgY29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiBjdXJyZW50UHJvamVjdDtcclxuICAgIGNvbnN0IHNldEN1cnJlbnRQcm9qZWN0ID0gKHByb2plY3QpID0+IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIHJldHVybiB7Z2V0Q3VycmVudFByb2plY3QsIHNldEN1cnJlbnRQcm9qZWN0fTtcclxufSkoKTsgXHJcblxyXG5jb25zdCBwcm9qZWN0UGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgYWRkQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRDaGVja2xpc3QuaWQgPSAnYWRkLWNoZWNrbGlzdCc7XHJcbiAgICBhZGRDaGVja2xpc3QuaW5uZXJUZXh0ID0gJysnO1xyXG4gICAgY29uc3QgdXBkYXRlTmF2ID0gKCgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2Jyk7XHJcbiAgICAgICAgbmF2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWFkaW5nLmlkID0gJ2hlYWRpbmcnO1xyXG4gICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ1Byb2plY3RzJztcclxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdHMoKTtcclxuICAgICAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3QuaWQgPSAnY2hlY2tsaXN0JztcclxuICAgICAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgY3VycmVudFByb2plY3Quc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LmdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLmlkID0gJ3Byb2plY3QtZGVzY3JpcHRpb24nO1xyXG4gICAgICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgIHRhc2tQYWdlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0LmNsaWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pKCk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYWRkQ2hlY2tsaXN0KTtcclxuICAgIGFkZENoZWNrbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtZm9ybScpKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtZm9ybScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3RQYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZihwcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0YXNrUGFnZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICc8ZGl2IGlkPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPjxiPkNyZWF0ZSBhIHByb2plY3QgdG8gZ2V0IHN0YXJ0ZWQhPC9iPjwvZGl2Pic7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1jaGVja2xpc3QnKS5jbGljaygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBuZXdQcm9qZWN0UGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuaWQgPSAnbmV3LXByb2plY3QtZm9ybSc7XHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkaW5nLmlkID0gJ2hlYWRpbmcnO1xyXG4gICAgaGVhZGluZy5pbm5lclRleHQgPSAnTmV3IFByb2plY3QnO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRpdGxlLnR5cGUgPSAndGV4dCc7XHJcbiAgICB0aXRsZS5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IFRpdGxlJztcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGRlc2NyaXB0aW9uLmlkID0gJ25ldy1wcm9qZWN0LWRlc2NyaXB0aW9uJztcclxuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gJ1Byb2plY3QgRGVzY3JpcHRpb24nO1xyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICBzdWJtaXQudmFsdWUgPSAnU3VibWl0JztcclxuICAgIHN1Ym1pdC5pZCA9ICdzdWJtaXQtYnV0dG9uJztcclxuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNhbmNlbC5pZCA9ICdjYW5jZWwtYnV0dG9uJztcclxuICAgIGNhbmNlbC5pbm5lclRleHQgPSAnQ2FuY2VsJztcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbnMuaWQgPSAnZm9ybS1idXR0b25zJztcclxuICAgIFxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKHN1Ym1pdCk7XHJcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICBcclxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aXRsZS52YWx1ZS5sZW5ndGggPj0gMyAmJiBkZXNjcmlwdGlvbi52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICBwcm9qZWN0UGFnZSgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtZm9ybScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aXRsZS52YWx1ZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdUaXRsZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycyBsb25nIScpO1xyXG4gICAgICAgIH0gZWxzZSBpZihkZXNjcmlwdGlvbi52YWx1ZS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdEZXNjcmlwdGlvbiBtdXN0IGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyIGxvbmchJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgdGFza0xpc3QgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXTtcclxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xyXG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICAgICAgdGFza3Muc3BsaWNlKHRhc2tzLmluZGV4T2YodGFzayksIDEpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3M7XHJcbiAgICBjb25zdCBnZXRGaW5pc2hlZFRhc2tzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdC5nZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3NCeVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgY29uc3QgZmluaXNoZWRUYXNrcyA9IFtdO1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5pc2hlZFRhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmluaXNoZWRUYXNrcztcclxuICAgIH07XHJcbiAgICBjb25zdCBjbGVhclRhc2tzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdC5nZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3NCeVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza3MpO1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgcmVtb3ZlVGFzayh0YXNrKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRUYXNrc0J5UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza3NCeVByb2plY3QgPSBbXTtcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrLnByb2plY3QgPT09IHByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tzQnlQcm9qZWN0LnB1c2godGFzayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGFza3NCeVByb2plY3Q7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHsgYWRkVGFzaywgcmVtb3ZlVGFzaywgZ2V0VGFza3MsIGdldEZpbmlzaGVkVGFza3MsIGNsZWFyVGFza3MsIGdldFRhc2tzQnlQcm9qZWN0IH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCB0YXNrUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9ucy5pZCA9ICdmb3JtLWJ1dHRvbnMnO1xyXG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCAhPSBjb250ZW50Lmxhc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBjb25zdCB0YXNrcyA9IHRhc2tMaXN0LmdldFRhc2tzQnlQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjaGVja2VkLnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgIGNoZWNrZWQuaWQgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgIGNoZWNrZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tlZC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY2hlY2tlZCk7XHJcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XHJcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XHJcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XHJcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGF0ZScpO1xyXG4gICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gJ0R1ZTogJyArIHRhc2suZHVlRGF0ZTtcclxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKTtcclxuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICcgKyB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcclxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHknKTtcclxuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICcgKyB0YXNrLnByaW9yaXR5O1xyXG4gICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5Jyk7XHJcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gICAgICAgIHRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xyXG4gICAgICAgICAgICBjaGVja2VkLmNoZWNrZWQgPSAhY2hlY2tlZC5jaGVja2VkO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcclxuICAgICAgICBpZiAodGFzay5jb21wbGV0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgY2hlY2tlZC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgY2hlY2tlZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBuZXdUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcclxuICAgIG5ld1Rhc2tCdXR0b24uaWQgPSAnbmV3LXRhc2stYnV0dG9uJztcclxuICAgIG5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrLWZvcm0nKSkpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrLWZvcm0nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdUYXNrUGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uKTtcclxuICAgIGNvbnN0IGRlbGV0ZUNvbXBsZXRlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZGVsZXRlQ29tcGxldGVkQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBGaW5pc2hlZCBUYXNrcyc7XHJcbiAgICBkZWxldGVDb21wbGV0ZWRCdXR0b24uaWQgPSAnZGVsZXRlLWNvbXBsZXRlZC1idXR0b24nO1xyXG4gICAgZGVsZXRlQ29tcGxldGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbmlzaGVkVGFza3MgPSB0YXNrTGlzdC5nZXRGaW5pc2hlZFRhc2tzKCk7XHJcbiAgICAgICAgZmluaXNoZWRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIHRhc2tMaXN0LnJlbW92ZVRhc2sodGFzayk7XHJcbiAgICAgICAgICAgIHRhc2tQYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQ29tcGxldGVkQnV0dG9uKTtcclxuICAgIGNvbnN0IGRlbGV0ZUFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgY3VyclByb2plY3QgPSBjdXJyZW50UHJvamVjdC5nZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgZGVsZXRlQWxsLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBBbGwgVGFza3MnO1xyXG4gICAgZGVsZXRlQWxsLmlkID0gJ2RlbGV0ZS1hbGwnO1xyXG4gICAgZGVsZXRlQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGFsbCB0YXNrcyBpbiAke2N1cnJQcm9qZWN0LnRpdGxlfT9gKSkge1xyXG4gICAgICAgICAgICB0YXNrTGlzdC5jbGVhclRhc2tzKCk7XHJcbiAgICAgICAgICAgIHRhc2tQYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGRlbGV0ZUFsbCk7XHJcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0JztcclxuICAgIGRlbGV0ZVByb2plY3QuaWQgPSAnZGVsZXRlLXByb2plY3QnO1xyXG4gICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke2N1cnJQcm9qZWN0LnRpdGxlfT9gKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVQcm9qZWN0KGN1cnJQcm9qZWN0KTtcclxuICAgICAgICAgICAgcHJvamVjdFBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrLWZvcm0nKSkpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stZm9ybScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgbmV3VGFza1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgbmV3VGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICduZXctdGFzay1mb3JtJyk7XHJcbiAgICBuZXdUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdpbmRleC5odG1sJyk7XHJcbiAgICBuZXdUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdQT1NUJyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XHJcbiAgICBoZWFkaW5nLmlkID0gJ25ldy10YXNrLWhlYWRpbmcnO1xyXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xyXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJyk7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkcm9wZG93bicpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcclxuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcmlvcml0eScpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2xpc3QnLCAncHJpb3JpdHktbGlzdCcpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGF0YWxpc3QnKTtcclxuICAgIHByaW9yaXR5TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LWxpc3QnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBwcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0xvdycpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIHByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTWVkaXVtJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIHByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0hpZ2gnKTtcclxuICAgIHByaW9yaXR5TGlzdC5hcHBlbmRDaGlsZChwcmlvcml0eUxvdyk7XHJcbiAgICBwcmlvcml0eUxpc3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlNZWRpdW0pO1xyXG4gICAgcHJpb3JpdHlMaXN0LmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaCk7XHJcbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5TGlzdCk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9ucy5pZCA9ICdmb3JtLWJ1dHRvbnMnO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC1idXR0b24nKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsLWJ1dHRvbicpO1xyXG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRhc2tQYWdlKCk7IH0pO1xyXG5cclxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xyXG4gICAgICAgIHRhc2tMaXN0LmFkZFRhc2sodGFzayk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFzayk7XHJcbiAgICAgICAgdGFza1BhZ2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcclxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChidXR0b25zKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxufVxyXG5cclxuY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YocHJvamVjdCksIDEpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XHJcbiAgICBjb25zdCBnZXRQcm9qZWN0QnlEZXNjcmlwdGlvbj0gKGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHByb2plY3QuZGVzY3JpcHRpb24gPT09IGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgLy9pZihkZXNjcmlwdGlvbiA9PT0gJ0RlZmF1bHQnKSB7XHJcbiAgICAgICAvLyAgICByZXR1cm4gcHJvamVjdHNbMF07XHJcbiAgICAgICAvL30gICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhclByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLnNwbGljZSgwLCBwcm9qZWN0cy5sZW5ndGgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldFByb2plY3RzLCBnZXRQcm9qZWN0QnlEZXNjcmlwdGlvbiwgY2xlYXJQcm9qZWN0cyB9O1xyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9