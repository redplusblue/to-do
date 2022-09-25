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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.png */ "./src/bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Lobster';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    display: grid;\r\n    grid-template-rows: 1fr 10fr;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\nhtml, body {\r\n    position:fixed;\r\n    top:0;\r\n    bottom:0;\r\n    left:0;\r\n    right:0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nheader {\r\n    background: #f1f1f1e8;\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    color: #333;\r\n    font-family: 'Lobster', cursive;\r\n    cursor: default;\r\n}\r\n\r\n#wrapper {\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n}\r\n\r\n\r\n#nav {\r\n    background: rgba(51, 51, 51, 0.900);\r\n    color: #f1f1f1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 10px;\r\n}\r\n\r\n#nav > button {\r\n  appearance: none;\r\n  background-color: #FFFFFF;\r\n  border-radius: 40em;\r\n  border-style: none;\r\n  box-shadow: #ADCFFF 0 -12px 6px inset;\r\n  box-sizing: border-box;\r\n  color: #000000;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: -apple-system,sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  letter-spacing: -.24px;\r\n  outline: none;\r\n  margin: 0;\r\n  padding: 1rem 1.3rem;\r\n  quotes: auto;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: all .15s;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n#nav > button:hover {\r\n  background-color: #FFC229;\r\n  box-shadow: #FF6314 0 -6px 8px inset;\r\n  transform: scale(1.125);\r\n}\r\n\r\n#nav > button:active {\r\n  transform: scale(1.025);\r\n}\r\n\r\n\r\n#new-task-heading, #heading {\r\n    cursor: default;\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 3rem;\r\n    color: whitesmoke;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    margin: 2rem;\r\n}\r\n\r\n#form-buttons { \r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n#form-buttons > button {\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\n#new-task-button, #delete-all, #submit-button, #cancel-button, #delete-completed-button, #delete-project {\r\n    display: inline-block;\r\n    outline: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    border-radius: 15px;\r\n    transition-property: background-color,border-color,color,box-shadow,filter;\r\n    transition-duration: .3s;\r\n    border: 1px solid transparent;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    white-space: normal;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    padding: 14px;\r\n    color: #fff;\r\n    background-color: #3b49df;\r\n}\r\n\r\n#new-task-button:hover, #submit-button:hover {\r\n    background-color: #1db954;\r\n}\r\n\r\n#delete-all, #cancel-button, #delete-completed-button, #delete-project {\r\n    opacity: 70%;\r\n    background-color: #e53935;\r\n}\r\n\r\n#delete-all:hover, #cancel-button:hover, #delete-completed-button:hover, #delete-project:hover {\r\n    opacity: 100%;\r\n}\r\n\r\n#new-task-form, #new-project-form > form {\r\n    border-radius: 15px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    width: max-content;\r\n    height: max-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1rem;\r\n    gap: 1rem;\r\n    align-items: center;\r\n    background: rgba(0,0,0,0.500);\r\n}\r\n\r\n#new-task-form > input, #new-project-form > form > input, #new-project-description {\r\n    text-align: center;\r\n    font-family: Lobster, cursive;\r\n    width: 100%;\r\n    border-radius: 15px;\r\n    background: rgb(249, 250, 250);\r\n    border: 1px solid rgb(181, 189, 196);\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    padding: 7px 8px;\r\n    color: rgb(8, 9, 10);\r\n    box-shadow: none;\r\n}\r\n\r\n#new-project-description {\r\n   height: 50px; \r\n}\r\n\r\n#new-project-description:focus{\r\n    outline: none;\r\n    border-color: #3b49df;\r\n    box-shadow: 1px 1px 0 #3b49df;\r\n}\r\n\r\n#new-task-form > input:focus, #new-project-form > form > input:focus {\r\n    background-color: #fff;\r\n    outline: none;\r\n    border-color: #3b49df;\r\n    box-shadow: 1px 1px 0 #3b49df;\r\n}\r\n\r\n#project-description {\r\n    grid-column: 1/3;\r\n    border-radius: 15px;\r\n    font-size: 18px;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    color: white;\r\n    position: relative;\r\n    margin: -1rem -1rem 0 -1rem;\r\n    padding: 1rem;\r\n    background: rgba(0, 0, 0, 0.450);\r\n}\r\n\r\np {\r\n    margin: 0%;\r\n}\r\n\r\n.checked {\r\n    text-decoration: line-through;\r\n    opacity: 50%;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n.task {\r\n    background: #3b49df;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    width: 30vw;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.task:hover {\r\n    width: max-content;\r\n    background-color: rgba(0, 0, 0, 0.350);\r\n    color: whitesmoke;\r\n}\r\n\r\n.task:hover > p {\r\n    display: inherit;\r\n    width: max-content;\r\n}\r\n\r\n.task-name {\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.task-due-date {\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n    align-self: right;\r\n}\r\n\r\n\r\n.task-description {\r\n    display: none;\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.task-priority {\r\n    color: #e53935;\r\n    display: none;\r\n    font-family: monospace;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'Lobster';\r\n    src: url(./Lobster.ttf);\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    display: grid;\r\n    grid-template-rows: 1fr 10fr;\r\n    background-image: url(./bg.png);\r\n}\r\n\r\nhtml, body {\r\n    position:fixed;\r\n    top:0;\r\n    bottom:0;\r\n    left:0;\r\n    right:0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nheader {\r\n    background: #f1f1f1e8;\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    color: #333;\r\n    font-family: 'Lobster', cursive;\r\n    cursor: default;\r\n}\r\n\r\n#wrapper {\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n}\r\n\r\n\r\n#nav {\r\n    background: rgba(51, 51, 51, 0.900);\r\n    color: #f1f1f1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 10px;\r\n}\r\n\r\n#nav > button {\r\n  appearance: none;\r\n  background-color: #FFFFFF;\r\n  border-radius: 40em;\r\n  border-style: none;\r\n  box-shadow: #ADCFFF 0 -12px 6px inset;\r\n  box-sizing: border-box;\r\n  color: #000000;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: -apple-system,sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  letter-spacing: -.24px;\r\n  outline: none;\r\n  margin: 0;\r\n  padding: 1rem 1.3rem;\r\n  quotes: auto;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: all .15s;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n#nav > button:hover {\r\n  background-color: #FFC229;\r\n  box-shadow: #FF6314 0 -6px 8px inset;\r\n  transform: scale(1.125);\r\n}\r\n\r\n#nav > button:active {\r\n  transform: scale(1.025);\r\n}\r\n\r\n\r\n#new-task-heading, #heading {\r\n    cursor: default;\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 3rem;\r\n    color: whitesmoke;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    margin: 2rem;\r\n}\r\n\r\n#form-buttons { \r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n#form-buttons > button {\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\n#new-task-button, #delete-all, #submit-button, #cancel-button, #delete-completed-button, #delete-project {\r\n    display: inline-block;\r\n    outline: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    border-radius: 15px;\r\n    transition-property: background-color,border-color,color,box-shadow,filter;\r\n    transition-duration: .3s;\r\n    border: 1px solid transparent;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    white-space: normal;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    padding: 14px;\r\n    color: #fff;\r\n    background-color: #3b49df;\r\n}\r\n\r\n#new-task-button:hover, #submit-button:hover {\r\n    background-color: #1db954;\r\n}\r\n\r\n#delete-all, #cancel-button, #delete-completed-button, #delete-project {\r\n    opacity: 70%;\r\n    background-color: #e53935;\r\n}\r\n\r\n#delete-all:hover, #cancel-button:hover, #delete-completed-button:hover, #delete-project:hover {\r\n    opacity: 100%;\r\n}\r\n\r\n#new-task-form, #new-project-form > form {\r\n    border-radius: 15px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    width: max-content;\r\n    height: max-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1rem;\r\n    gap: 1rem;\r\n    align-items: center;\r\n    background: rgba(0,0,0,0.500);\r\n}\r\n\r\n#new-task-form > input, #new-project-form > form > input, #new-project-description {\r\n    text-align: center;\r\n    font-family: Lobster, cursive;\r\n    width: 100%;\r\n    border-radius: 15px;\r\n    background: rgb(249, 250, 250);\r\n    border: 1px solid rgb(181, 189, 196);\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    padding: 7px 8px;\r\n    color: rgb(8, 9, 10);\r\n    box-shadow: none;\r\n}\r\n\r\n#new-project-description {\r\n   height: 50px; \r\n}\r\n\r\n#new-project-description:focus{\r\n    outline: none;\r\n    border-color: #3b49df;\r\n    box-shadow: 1px 1px 0 #3b49df;\r\n}\r\n\r\n#new-task-form > input:focus, #new-project-form > form > input:focus {\r\n    background-color: #fff;\r\n    outline: none;\r\n    border-color: #3b49df;\r\n    box-shadow: 1px 1px 0 #3b49df;\r\n}\r\n\r\n#project-description {\r\n    grid-column: 1/3;\r\n    border-radius: 15px;\r\n    font-size: 18px;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    color: white;\r\n    position: relative;\r\n    margin: -1rem -1rem 0 -1rem;\r\n    padding: 1rem;\r\n    background: rgba(0, 0, 0, 0.450);\r\n}\r\n\r\np {\r\n    margin: 0%;\r\n}\r\n\r\n.checked {\r\n    text-decoration: line-through;\r\n    opacity: 50%;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n.task {\r\n    background: #3b49df;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    width: 30vw;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.task:hover {\r\n    width: max-content;\r\n    background-color: rgba(0, 0, 0, 0.350);\r\n    color: whitesmoke;\r\n}\r\n\r\n.task:hover > p {\r\n    display: inherit;\r\n    width: max-content;\r\n}\r\n\r\n.task-name {\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.task-due-date {\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n    align-self: right;\r\n}\r\n\r\n\r\n.task-description {\r\n    display: none;\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.task-priority {\r\n    color: #e53935;\r\n    display: none;\r\n    font-family: monospace;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/bg.png":
/*!********************!*\
  !*** ./src/bg.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d697f19f14f7494004b7.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZ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QTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGtCQUFrQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxrQkFBa0I7QUFDekU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxhQUFhO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0xvYnN0ZXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9iZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICB0b3A6MDtcXHJcXG4gICAgYm90dG9tOjA7XFxyXFxuICAgIGxlZnQ6MDtcXHJcXG4gICAgcmlnaHQ6MDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxZTg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4jd3JhcHBlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbmF2IHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MSwgNTEsIDUxLCAwLjkwMCk7XFxyXFxuICAgIGNvbG9yOiAjZjFmMWYxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b24ge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0MGVtO1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogI0FEQ0ZGRiAwIC0xMnB4IDZweCBpbnNldDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLS4yNHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMS4zcmVtO1xcclxcbiAgcXVvdGVzOiBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIC4xNXM7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMjI5O1xcclxcbiAgYm94LXNoYWRvdzogI0ZGNjMxNCAwIC02cHggOHB4IGluc2V0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyNSk7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXRhc2staGVhZGluZywgI2hlYWRpbmcge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIG1hcmdpbjogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tYnV0dG9ucyB7IFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNmb3JtLWJ1dHRvbnMgPiBidXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWJ1dHRvbiwgI2RlbGV0ZS1hbGwsICNzdWJtaXQtYnV0dG9uLCAjY2FuY2VsLWJ1dHRvbiwgI2RlbGV0ZS1jb21wbGV0ZWQtYnV0dG9uLCAjZGVsZXRlLXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLGJvcmRlci1jb2xvcixjb2xvcixib3gtc2hhZG93LGZpbHRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxNHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNDlkZjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWJ1dHRvbjpob3ZlciwgI3N1Ym1pdC1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRiOTU0O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlLWFsbCwgI2NhbmNlbC1idXR0b24sICNkZWxldGUtY29tcGxldGVkLWJ1dHRvbiwgI2RlbGV0ZS1wcm9qZWN0IHtcXHJcXG4gICAgb3BhY2l0eTogNzAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzOTM1O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlLWFsbDpob3ZlciwgI2NhbmNlbC1idXR0b246aG92ZXIsICNkZWxldGUtY29tcGxldGVkLWJ1dHRvbjpob3ZlciwgI2RlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWZvcm0sICNuZXctcHJvamVjdC1mb3JtID4gZm9ybSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWZvcm0gPiBpbnB1dCwgI25ldy1wcm9qZWN0LWZvcm0gPiBmb3JtID4gaW5wdXQsICNuZXctcHJvamVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IExvYnN0ZXIsIGN1cnNpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ5LCAyNTAsIDI1MCk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODEsIDE4OSwgMTk2KTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgcGFkZGluZzogN3B4IDhweDtcXHJcXG4gICAgY29sb3I6IHJnYig4LCA5LCAxMCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgaGVpZ2h0OiA1MHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWRlc2NyaXB0aW9uOmZvY3Vze1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMzYjQ5ZGY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMCAjM2I0OWRmO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2stZm9ybSA+IGlucHV0OmZvY3VzLCAjbmV3LXByb2plY3QtZm9ybSA+IGZvcm0gPiBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzNiNDlkZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAwICMzYjQ5ZGY7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogLTFyZW0gLTFyZW0gMCAtMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1MCk7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICBtYXJnaW46IDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBvcGFjaXR5OiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzNiNDlkZjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAwLjA0KSAwcHggMXB4IDBweCAwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAzMHZ3O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUwKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVyID4gcCB7XFxyXFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbmFtZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZHVlLWRhdGUge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLXByaW9yaXR5IHtcXHJcXG4gICAgY29sb3I6ICNlNTM5MzU7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLHlEQUErQjtBQUNuQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxLQUFLO0lBQ0wsUUFBUTtJQUNSLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7O0FBR0E7SUFDSSxtQ0FBbUM7SUFDbkMsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0kscUdBQXFHO0FBQ3pHOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwwRUFBMEU7SUFDMUUsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7R0FDRyxZQUFZO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHFHQUFxRztJQUNyRyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxyXFxuICAgIHNyYzogdXJsKC4vTG9ic3Rlci50dGYpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9iZy5wbmcpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxyXFxuICAgIHRvcDowO1xcclxcbiAgICBib3R0b206MDtcXHJcXG4gICAgbGVmdDowO1xcclxcbiAgICByaWdodDowO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjFlODtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbiN3cmFwcGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUxLCA1MSwgNTEsIDAuOTAwKTtcXHJcXG4gICAgY29sb3I6ICNmMWYxZjE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiA+IGJ1dHRvbiB7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDQwZW07XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAjQURDRkZGIDAgLTEycHggNnB4IGluc2V0O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtLjI0cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMXJlbSAxLjNyZW07XFxyXFxuICBxdW90ZXM6IGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2ID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMyMjk7XFxyXFxuICBib3gtc2hhZG93OiAjRkY2MzE0IDAgLTZweCA4cHggaW5zZXQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTI1KTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiA+IGJ1dHRvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNuZXctdGFzay1oZWFkaW5nLCAjaGVhZGluZyB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1idXR0b25zIHsgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tYnV0dG9ucyA+IGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2stYnV0dG9uLCAjZGVsZXRlLWFsbCwgI3N1Ym1pdC1idXR0b24sICNjYW5jZWwtYnV0dG9uLCAjZGVsZXRlLWNvbXBsZXRlZC1idXR0b24sICNkZWxldGUtcHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsYm9yZGVyLWNvbG9yLGNvbG9yLGJveC1zaGFkb3csZmlsdGVyO1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I0OWRmO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2stYnV0dG9uOmhvdmVyLCAjc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZGI5NTQ7XFxyXFxufVxcclxcblxcclxcbiNkZWxldGUtYWxsLCAjY2FuY2VsLWJ1dHRvbiwgI2RlbGV0ZS1jb21wbGV0ZWQtYnV0dG9uLCAjZGVsZXRlLXByb2plY3Qge1xcclxcbiAgICBvcGFjaXR5OiA3MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XFxyXFxufVxcclxcblxcclxcbiNkZWxldGUtYWxsOmhvdmVyLCAjY2FuY2VsLWJ1dHRvbjpob3ZlciwgI2RlbGV0ZS1jb21wbGV0ZWQtYnV0dG9uOmhvdmVyLCAjZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2stZm9ybSwgI25ldy1wcm9qZWN0LWZvcm0gPiBmb3JtIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41MDApO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2stZm9ybSA+IGlucHV0LCAjbmV3LXByb2plY3QtZm9ybSA+IGZvcm0gPiBpbnB1dCwgI25ldy1wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogTG9ic3RlciwgY3Vyc2l2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigyNDksIDI1MCwgMjUwKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MSwgMTg5LCAxOTYpO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiA3cHggOHB4O1xcclxcbiAgICBjb2xvcjogcmdiKDgsIDksIDEwKTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICBoZWlnaHQ6IDUwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtZGVzY3JpcHRpb246Zm9jdXN7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzNiNDlkZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAwICMzYjQ5ZGY7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzay1mb3JtID4gaW5wdXQ6Zm9jdXMsICNuZXctcHJvamVjdC1mb3JtID4gZm9ybSA+IGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjM2I0OWRmO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDAgIzNiNDlkZjtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtZGVzY3JpcHRpb24ge1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAtMXJlbSAtMXJlbSAwIC0xcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUwKTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIG1hcmdpbjogMCU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2VkIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICAgIG9wYWNpdHk6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjM2I0OWRmO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIDAuMDQpIDBweCAxcHggMHB4IDBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDMwdnc7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXIge1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNTApO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXIgPiBwIHtcXHJcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1uYW1lIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kdWUtZGF0ZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stcHJpb3JpdHkge1xcclxcbiAgICBjb2xvcjogI2U1MzkzNTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVMYXlvdXQgfSBmcm9tICcuL3RvZG8nO1xyXG5cclxuY3JlYXRlTGF5b3V0KCk7XHJcbiIsImNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVMYXlvdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5pZCA9ICdoZWFkZXInO1xyXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9ICdUbyBEbyc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyLmlkID0gJ3dyYXBwZXInO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2LmlkID0gJ25hdic7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG5hdik7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnPGRpdiBpZD1cInByb2plY3QtZGVzY3JpcHRpb25cIj48Yj5DcmVhdGUgYSBwcm9qZWN0IHRvIGdldCBzdGFydGVkITwvYj48L2Rpdj4nO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIHByb2plY3RQYWdlKCk7XHJcbn1cclxuXHJcbmNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gKCgpID0+IHtcclxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IG51bGw7XHJcbiAgICBjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IGN1cnJlbnRQcm9qZWN0O1xyXG4gICAgY29uc3Qgc2V0Q3VycmVudFByb2plY3QgPSAocHJvamVjdCkgPT4gY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgcmV0dXJuIHtnZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3R9O1xyXG59KSgpOyBcclxuXHJcbmNvbnN0IHByb2plY3RQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBhZGRDaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZENoZWNrbGlzdC5pZCA9ICdhZGQtY2hlY2tsaXN0JztcclxuICAgIGFkZENoZWNrbGlzdC5pbm5lclRleHQgPSAnKyc7XHJcbiAgICBjb25zdCB1cGRhdGVOYXYgPSAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKTtcclxuICAgICAgICBuYXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlYWRpbmcuaWQgPSAnaGVhZGluZyc7XHJcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSAnUHJvamVjdHMnO1xyXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpO1xyXG4gICAgICAgIHByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdC5pZCA9ICdjaGVja2xpc3QnO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QuZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uaWQgPSAncHJvamVjdC1kZXNjcmlwdGlvbic7XHJcbiAgICAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgdGFza1BhZ2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3QuY2xpY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgfSkoKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChhZGRDaGVja2xpc3QpO1xyXG4gICAgYWRkQ2hlY2tsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1mb3JtJykpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1mb3JtJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3UHJvamVjdFBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmKHByb2plY3RMaXN0LmdldFByb2plY3RzKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRhc2tQYWdlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJzxkaXYgaWQ9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+PGI+Q3JlYXRlIGEgcHJvamVjdCB0byBnZXQgc3RhcnRlZCE8L2I+PC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWNoZWNrbGlzdCcpLmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG5ld1Byb2plY3RQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5pZCA9ICduZXctcHJvamVjdC1mb3JtJztcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRpbmcuaWQgPSAnaGVhZGluZyc7XHJcbiAgICBoZWFkaW5nLmlubmVyVGV4dCA9ICdOZXcgUHJvamVjdCc7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGl0bGUudHlwZSA9ICd0ZXh0JztcclxuICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gJ1Byb2plY3QgVGl0bGUnO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgZGVzY3JpcHRpb24uaWQgPSAnbmV3LXByb2plY3QtZGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBEZXNjcmlwdGlvbic7XHJcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0JztcclxuICAgIHN1Ym1pdC52YWx1ZSA9ICdTdWJtaXQnO1xyXG4gICAgc3VibWl0LmlkID0gJ3N1Ym1pdC1idXR0b24nO1xyXG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWwudHlwZSA9ICdidXR0b24nO1xyXG4gICAgY2FuY2VsLmlkID0gJ2NhbmNlbC1idXR0b24nO1xyXG4gICAgY2FuY2VsLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9ucy5pZCA9ICdmb3JtLWJ1dHRvbnMnO1xyXG4gICAgXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoc3VibWl0KTtcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIFxyXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRpdGxlLnZhbHVlLmxlbmd0aCA+PSAzICYmIGRlc2NyaXB0aW9uLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgIHByb2plY3RQYWdlKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1mb3JtJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRpdGxlLnZhbHVlLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1RpdGxlIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmchJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGRlc2NyaXB0aW9uLnZhbHVlLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0Rlc2NyaXB0aW9uIG11c3QgYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIgbG9uZyEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCB0YXNrTGlzdCA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xyXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcclxuICAgICAgICB0YXNrcy5zcGxpY2UodGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB0YXNrcztcclxuICAgIGNvbnN0IGdldEZpbmlzaGVkVGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICAgICAgY29uc3QgdGFza3MgPSBnZXRUYXNrc0J5UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICBjb25zdCBmaW5pc2hlZFRhc2tzID0gW107XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGZpbmlzaGVkVGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmaW5pc2hlZFRhc2tzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNsZWFyVGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICAgICAgY29uc3QgdGFza3MgPSBnZXRUYXNrc0J5UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICByZW1vdmVUYXNrKHRhc2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFRhc2tzQnlQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrc0J5UHJvamVjdCA9IFtdO1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhc2sucHJvamVjdCA9PT0gcHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGFza3NCeVByb2plY3QucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0YXNrc0J5UHJvamVjdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4geyBhZGRUYXNrLCByZW1vdmVUYXNrLCBnZXRUYXNrcywgZ2V0RmluaXNoZWRUYXNrcywgY2xlYXJUYXNrcywgZ2V0VGFza3NCeVByb2plY3QgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IHRhc2tQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b25zLmlkID0gJ2Zvcm0tYnV0dG9ucyc7XHJcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkICE9IGNvbnRlbnQubGFzdENoaWxkKSB7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3QuZ2V0Q3VycmVudFByb2plY3QoKTtcclxuICAgIGNvbnN0IHRhc2tzID0gdGFza0xpc3QuZ2V0VGFza3NCeVByb2plY3QocHJvamVjdCk7XHJcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNoZWNrZWQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgICAgY2hlY2tlZC5pZCA9ICdjaGVja2JveCc7XHJcbiAgICAgICAgY2hlY2tlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja2VkLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja2VkKTtcclxuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcclxuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcclxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJyk7XHJcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlOiAnICsgdGFzay5kdWVEYXRlO1xyXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJyArIHRhc2suZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eScpO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJyArIHRhc2sucHJpb3JpdHk7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHknKTtcclxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgICAgICAgdGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzayk7XHJcbiAgICAgICAgICAgIGNoZWNrZWQuY2hlY2tlZCA9ICFjaGVja2VkLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xyXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICBjaGVja2VkLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICBjaGVja2VkLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG5ld1Rhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xyXG4gICAgbmV3VGFza0J1dHRvbi5pZCA9ICduZXctdGFzay1idXR0b24nO1xyXG4gICAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stZm9ybScpKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stZm9ybScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tQYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pO1xyXG4gICAgY29uc3QgZGVsZXRlQ29tcGxldGVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVDb21wbGV0ZWRCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIEZpbmlzaGVkIFRhc2tzJztcclxuICAgIGRlbGV0ZUNvbXBsZXRlZEJ1dHRvbi5pZCA9ICdkZWxldGUtY29tcGxldGVkLWJ1dHRvbic7XHJcbiAgICBkZWxldGVDb21wbGV0ZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmluaXNoZWRUYXNrcyA9IHRhc2tMaXN0LmdldEZpbmlzaGVkVGFza3MoKTtcclxuICAgICAgICBmaW5pc2hlZFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgdGFza0xpc3QucmVtb3ZlVGFzayh0YXNrKTtcclxuICAgICAgICAgICAgdGFza1BhZ2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChkZWxldGVDb21wbGV0ZWRCdXR0b24pO1xyXG4gICAgY29uc3QgZGVsZXRlQWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBjdXJyUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBkZWxldGVBbGwudGV4dENvbnRlbnQgPSAnRGVsZXRlIEFsbCBUYXNrcyc7XHJcbiAgICBkZWxldGVBbGwuaWQgPSAnZGVsZXRlLWFsbCc7XHJcbiAgICBkZWxldGVBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHRhc2tzIGluICR7Y3VyclByb2plY3QudGl0bGV9P2ApKSB7XHJcbiAgICAgICAgICAgIHRhc2tMaXN0LmNsZWFyVGFza3MoKTtcclxuICAgICAgICAgICAgdGFza1BhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQWxsKTtcclxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xyXG4gICAgZGVsZXRlUHJvamVjdC5pZCA9ICdkZWxldGUtcHJvamVjdCc7XHJcbiAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7Y3VyclByb2plY3QudGl0bGV9P2ApKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnJlbW92ZVByb2plY3QoY3VyclByb2plY3QpO1xyXG4gICAgICAgICAgICBwcm9qZWN0UGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stZm9ybScpKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay1mb3JtJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBuZXdUYXNrUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBuZXdUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ldy10YXNrLWZvcm0nKTtcclxuICAgIG5ld1Rhc2tGb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ2luZGV4Lmh0bWwnKTtcclxuICAgIG5ld1Rhc2tGb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ1BPU1QnKTtcclxuXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcclxuICAgIGhlYWRpbmcuaWQgPSAnbmV3LXRhc2staGVhZGluZyc7XHJcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XHJcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2Ryb3Bkb3duJyk7XHJcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1ByaW9yaXR5Jyk7XHJcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbGlzdCcsICdwcmlvcml0eS1saXN0Jyk7XHJcbiAgICBjb25zdCBwcmlvcml0eUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xyXG4gICAgcHJpb3JpdHlMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktbGlzdCcpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIHByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XHJcbiAgICBjb25zdCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgcHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdNZWRpdW0nKTtcclxuICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgcHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xyXG4gICAgcHJpb3JpdHlMaXN0LmFwcGVuZENoaWxkKHByaW9yaXR5TG93KTtcclxuICAgIHByaW9yaXR5TGlzdC5hcHBlbmRDaGlsZChwcmlvcml0eU1lZGl1bSk7XHJcbiAgICBwcmlvcml0eUxpc3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoKTtcclxuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMaXN0KTtcclxuXHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b25zLmlkID0gJ2Zvcm0tYnV0dG9ucyc7XHJcblxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWwtYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGFza1BhZ2UoKTsgfSk7XHJcblxyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3QuZ2V0Q3VycmVudFByb2plY3QoKTtcclxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XHJcbiAgICAgICAgdGFza0xpc3QuYWRkVGFzayh0YXNrKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcclxuICAgICAgICB0YXNrUGFnZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcclxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcclxuICAgIGNvbnN0IGdldFByb2plY3RCeURlc2NyaXB0aW9uPSAoZGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocHJvamVjdC5kZXNjcmlwdGlvbiA9PT0gZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAvL2lmKGRlc2NyaXB0aW9uID09PSAnRGVmYXVsdCcpIHtcclxuICAgICAgIC8vICAgIHJldHVybiBwcm9qZWN0c1swXTtcclxuICAgICAgIC8vfSAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFyUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKDAsIHByb2plY3RzLmxlbmd0aCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZ2V0UHJvamVjdHMsIGdldFByb2plY3RCeURlc2NyaXB0aW9uLCBjbGVhclByb2plY3RzIH07XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=