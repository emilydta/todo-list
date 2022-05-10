/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    background: black;\n    overflow-x: hidden;\n}\n\n#main-header {\n    display: flex;\n    position: sticky;\n    top: 0;\n    justify-content: space-between;\n    align-items: center;\n    background: black;\n    color: white;\n    width: 100%;\n    padding-left: 40px;\n    padding-right: 40px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    z-index: 5;\n}\n\n#all-todos {\n    margin-bottom: 1em;\n    cursor: pointer;\n}\n\n#folders-container > li, #todo-list-container > div, #add-new-todo, #create-new-folder, #cancel-new-todo {\n    cursor: pointer;\n}\n\n#body-container {\n    display: flex;\n    background: whitesmoke;\n}\n\n#sidebar {\n    display: flex;\n    position: sticky;\n    flex-direction: column;\n    align-items: center;\n    list-style-type: none;\n    min-height: 100vh;\n    min-width: 10vw;\n    padding-left: 4em;\n    padding-right: 2em;\n    overflow: hidden;\n    z-index: 5;\n}\n\n#todo-list-container {\n    display: flex;\n    flex-direction: column;\n    background: whitesmoke;\n    min-width: 80vw;\n    \n    padding: 20px;\n    \n   \n}\n\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    padding: 10px;\n    margin: 10px;\n    border: 1px solid white;\n    border-radius: 1em;\n    background: white;\n}\n\n#todo-expander {\n    display: flex;\n}\n\n.todo-key, .todo-value {\n    display: flex;\n    margin-right: 1em;\n    margin-top: 1em;\n    flex-wrap: wrap;\n}\n\n.todo-key {\n    font-weight: bold;\n}\n\n#overlay {\n    position: fixed; \n    display: none; \n    width: 100%; \n    height: 100%; \n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 7;\n}\n\n#todo-screen {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 1em;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    z-index: 10;\n    width: 500px;\n    max-width: 80%;\n    height: 200px;\n    padding-bottom: 15px;\n}\n\n#add-new-todo {\n    margin-right: 5em;\n    padding: 0.8em;\n    background: white;\n    color: black;\n    border-radius: 1.5em;\n}\n\n#folders-heading {\n    font-size: 1.3em;\n}\n\n#create-new-folder {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 2em;\n    background: black;\n    color: white;\n    padding: 0.7em;\n    border-radius: 1.5em;\n    font-size: 0.9rem;\n}\n\n#folders-container > li {\n    padding-bottom: 1em;\n}\n\n#folders-container {\n    position: fixed;\n    padding: 2em;\n}\n\n#cancel-new-todo {\n    display: flex;\n    justify-content: flex-end;\n    min-width: 95%;\n}\n\n#new-todo-form {\n    display: flex;\n    flex-direction: column;\n}\n\n.edit {\n    margin-right: 1em;\n}\n\n.button-container {\n    display: flex;\n    align-items: center;\n    margin-top: 2em;\n    font-weight: 600;\n}\n\n.remove {\n    background: red;\n    color: white;\n    padding: 0.5em;\n    border-radius: 1.5em;\n}\n\n#all-todos {\n    font-size: 1.2em;\n}\n\n.active {\n    font-weight: bold;\n}\n\n#new-folder-container {\n    display: flex;\n    position: fixed;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1em;\n    margin-top: 1em;\n}\n\n#new-folder-input {\n    width: 10em;\n}\n\n#add-new-folder:hover {\n    cursor: pointer;\n    background: black;\n    color: white;\n    border-radius: 40%;\n    padding: 0.2em;\n}\n\n.hide {\n    display: none !important;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,MAAM;IACN,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,eAAe;;IAEf,aAAa;;;AAGjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,WAAW;IACX,YAAY;IACZ,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,iCAAiC;IACjC,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,cAAc;IACd,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,iBAAiB;IACjB,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,cAAc;IACd,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,2BAA2B;IAC3B,mBAAmB;IACnB,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":["\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    background: black;\n    overflow-x: hidden;\n}\n\n#main-header {\n    display: flex;\n    position: sticky;\n    top: 0;\n    justify-content: space-between;\n    align-items: center;\n    background: black;\n    color: white;\n    width: 100%;\n    padding-left: 40px;\n    padding-right: 40px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    z-index: 5;\n}\n\n#all-todos {\n    margin-bottom: 1em;\n    cursor: pointer;\n}\n\n#folders-container > li, #todo-list-container > div, #add-new-todo, #create-new-folder, #cancel-new-todo {\n    cursor: pointer;\n}\n\n#body-container {\n    display: flex;\n    background: whitesmoke;\n}\n\n#sidebar {\n    display: flex;\n    position: sticky;\n    flex-direction: column;\n    align-items: center;\n    list-style-type: none;\n    min-height: 100vh;\n    min-width: 10vw;\n    padding-left: 4em;\n    padding-right: 2em;\n    overflow: hidden;\n    z-index: 5;\n}\n\n#todo-list-container {\n    display: flex;\n    flex-direction: column;\n    background: whitesmoke;\n    min-width: 80vw;\n    \n    padding: 20px;\n    \n   \n}\n\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    padding: 10px;\n    margin: 10px;\n    border: 1px solid white;\n    border-radius: 1em;\n    background: white;\n}\n\n#todo-expander {\n    display: flex;\n}\n\n.todo-key, .todo-value {\n    display: flex;\n    margin-right: 1em;\n    margin-top: 1em;\n    flex-wrap: wrap;\n}\n\n.todo-key {\n    font-weight: bold;\n}\n\n#overlay {\n    position: fixed; \n    display: none; \n    width: 100%; \n    height: 100%; \n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 7;\n}\n\n#todo-screen {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 1em;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    z-index: 10;\n    width: 500px;\n    max-width: 80%;\n    height: 200px;\n    padding-bottom: 15px;\n}\n\n#add-new-todo {\n    margin-right: 5em;\n    padding: 0.8em;\n    background: white;\n    color: black;\n    border-radius: 1.5em;\n}\n\n#folders-heading {\n    font-size: 1.3em;\n}\n\n#create-new-folder {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 2em;\n    background: black;\n    color: white;\n    padding: 0.7em;\n    border-radius: 1.5em;\n    font-size: 0.9rem;\n}\n\n#folders-container > li {\n    padding-bottom: 1em;\n}\n\n#folders-container {\n    position: fixed;\n    padding: 2em;\n}\n\n#cancel-new-todo {\n    display: flex;\n    justify-content: flex-end;\n    min-width: 95%;\n}\n\n#new-todo-form {\n    display: flex;\n    flex-direction: column;\n}\n\n.edit {\n    margin-right: 1em;\n}\n\n.button-container {\n    display: flex;\n    align-items: center;\n    margin-top: 2em;\n    font-weight: 600;\n}\n\n.remove {\n    background: red;\n    color: white;\n    padding: 0.5em;\n    border-radius: 1.5em;\n}\n\n#all-todos {\n    font-size: 1.2em;\n}\n\n.active {\n    font-weight: bold;\n}\n\n#new-folder-container {\n    display: flex;\n    position: fixed;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1em;\n    margin-top: 1em;\n}\n\n#new-folder-input {\n    width: 10em;\n}\n\n#add-new-folder:hover {\n    cursor: pointer;\n    background: black;\n    color: white;\n    border-radius: 40%;\n    padding: 0.2em;\n}\n\n.hide {\n    display: none !important;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/createNewTodo.js":
/*!**************************************!*\
  !*** ./src/modules/createNewTodo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewTodo": () => (/* binding */ createNewTodo),
/* harmony export */   "newTodoTemplate": () => (/* binding */ newTodoTemplate)
/* harmony export */ });
/* harmony import */ var _todoFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFunctions */ "./src/modules/todoFunctions.js");
/* harmony import */ var _masterFolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masterFolder */ "./src/modules/masterFolder.js");



const newTodoTemplate = (Title, Description, Priority, Date, Time, Folder, idNumber) => {
    return { Title, Description, Priority, Date, Time, Folder, idNumber }
}

const createNewTodo = (newTodo) => { 
    const useFunction = (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.todoFunctions)();
    newTodo = newTodoTemplate(
        `${useFunction.titleInput.value}`, 
        `${useFunction.descriptionInput.value}`, 
        `${useFunction.priorityDropdown.value}`, 
        `${useFunction.dateInput.value}`, `${useFunction.timeInput.value}`, 
        `${useFunction.folderDropdown.value}`, `${useFunction.createIdNumber()}`
        );
    _masterFolder__WEBPACK_IMPORTED_MODULE_1__.masterFolder.todos.push(newTodo);
}








/***/ }),

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDisplay": () => (/* binding */ createDisplay)
/* harmony export */ });
/* harmony import */ var _createNewTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewTodo */ "./src/modules/createNewTodo.js");
/* harmony import */ var _todoFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFunctions */ "./src/modules/todoFunctions.js");



const createDisplay = () => {
    const useFunction = (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_1__.todoFunctions)();
    const overlay = document.getElementById('overlay');
    const newTodoScreen = document.getElementById('todo-screen');

    const createMainHeader = (mainFolder) => {
        const mainHeader = document.createElement('div');
        const mainHeaderText = document.createElement('h1');
        const newTodoButton = document.createElement('div');
        mainHeader.setAttribute('id', 'main-header');
        newTodoButton.setAttribute('id', 'add-new-todo');
        mainHeaderText.innerText = "TODO App";
        newTodoButton.innerText = "Add New Todo";
        mainHeader.appendChild(mainHeaderText);
        mainHeader.appendChild(newTodoButton);
        document.body.appendChild(mainHeader);

        mainHeader.addEventListener('click', (e) => {
            if (e.target.id == "add-new-todo") {
                createNewTodoScreen(mainFolder);
            }
        })
    }

    const createTodoListDisplay = (todoFolderName, todoFolder, mainFolder) => {
        if (document.getElementById('todo-list-container')) {
            return;
        }
        //hideTodoScreen();
        const bodyContainer = document.getElementById('body-container');

        // Creates todo container and heading
        const todoDisplay = document.createElement('div');
        todoDisplay.setAttribute('id', 'todo-list-container');
        todoDisplay.setAttribute('class', `${todoFolderName}`);

        const todoDisplayHeading = document.createElement('h2');
        todoDisplayHeading.setAttribute('id', 'container-heading');
        todoDisplayHeading.innerText = todoFolderName;
        todoDisplay.appendChild(todoDisplayHeading);

        // Creates todo containers and attached buttons/features
        todoFolder.forEach(todo => {
            const todoContainer = document.createElement('div');
            const todoData = document.createElement('div');
            todoData.setAttribute('id', `${todo.idNumber}`);
            todoContainer.setAttribute('class', `todo-container ${todo.idNumber}`);

            const todoExpander = document.createElement('div');
            todoExpander.setAttribute('class', `todo-expander`);
            todoExpander.style.display = 'none';
            todoExpander.style.flexWrap = 'wrap';
            Object.keys(todo).forEach(key => {
                if (key == "idNumber") {
                    return;
                }
                const todoKeys = document.createElement('div');
                const todoValues = document.createElement('div');
                todoKeys.setAttribute('class', `todo-key`)
                todoValues.setAttribute('class', `todo-value`);
                todoKeys.innerText = `${key}:`;
                if (!todo[key]) {
                    todoValues.innerText = '-';
                } else 
                todoValues.innerText = todo[key];
                todoExpander.appendChild(todoKeys);
                todoExpander.appendChild(todoValues);
            })
            todoData.innerText = `${todo.Title} - ${todo.Date} ${todo.Time}`;

            const buttonContainer = document.createElement('div');
            buttonContainer.setAttribute('class', 'button-container');

            const editButton = document.createElement('div');
            editButton.setAttribute('class', `edit ${todo.idNumber}`);
            editButton.innerText = "Edit";

            const removeButton = document.createElement('div');
            removeButton.setAttribute('class', `remove ${todo.idNumber}`);
            removeButton.innerText = "Remove";
            
            todoContainer.appendChild(todoData);
            todoContainer.appendChild(todoExpander);
            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(removeButton);
            todoContainer.appendChild(buttonContainer);
            todoDisplay.appendChild(todoContainer); 

            todoData.addEventListener("click", (e) => {
                if (e.target.id == todo.idNumber) {
                    if (todoExpander.style.display == "flex") {
                        todoExpander.style.display = "none";
                    } else 
                    todoExpander.style.display = "flex";
                }
            })        

            buttonContainer.addEventListener('click', (e) => {
                if (e.target.classList[0] == 'remove') {
                    const todoContainer = document.getElementById('todo-list-container');
                    mainFolder.todos.forEach((todo, index) => {
                        if (e.target.classList[1] == todo.idNumber) {
                            mainFolder.todos.splice(index, 1);
                            if (todoContainer.classList[0] == "All") {
                                todoContainer.remove();
                                createTodoListDisplay('All Todos', mainFolder.todos, mainFolder);
                            } else {
                                displayTodos(mainFolder, todo.Folder);
                            }
                        }
                    })  
                }
                if (e.target.classList[0] == 'edit') {
                    mainFolder.todos.forEach(todo => {
                        if (e.target.classList[1] == todo.idNumber) {
                            createEditScreen(todo, mainFolder);
                            const editButton = document.getElementById('confirm-edit');
                            if (editButton.classList.length >= 2) {
                                editButton.classList.remove();
                                editButton.setAttribute('class', 'todo-action-button');
                                editButton.classList.add(todo.idNumber); 
                            }
                            else {
                                editButton.classList.add(todo.idNumber);
                            }
                        }
                    }) 
                }
            })
        })

        bodyContainer.appendChild(todoDisplay);  
    }

    const getFolderHeadings = (mainFolder) => {
        let folders = [];
        mainFolder.todos.forEach((todo => {
            Object.keys(todo).forEach(key => {
                if (key == "Folder") {
                    folders.push(todo[key]);
                }
            })
        })) 
        const uniqueFolders = [...new Set(folders)];
        return uniqueFolders
    }

    const getSidebarFolders = () => {
        let folders = [];
        const sidebarFolders = document.getElementById('folders-container');
        sidebarFolders.childNodes.forEach(listing => {
            if (listing.tagName == 'LI') {
                folders.push(listing.innerText);
            }
        })
        return folders;
    }

    const getAllFolders = (mainFolder) => {
        const todoFolders = getFolderHeadings(mainFolder);
        const sidebarFolders = getSidebarFolders();
        const combinedFolders = sidebarFolders.concat(todoFolders);
        const uniqueFolders = [...new Set(combinedFolders)];
        return uniqueFolders;
    }

    const displayTodos = (mainFolder, folder) => {
        const todoListContainer = document.getElementById('todo-list-container');
        const sidebarFolders = document.getElementById('folders-container');
        todoListContainer.remove();

        let todoList = [];
        let folderName = '';
        sidebarFolders.childNodes.forEach(folder => {
            if (folder.classList == 'active') {
                folderName = folder.id;
            }
        });

        mainFolder.todos.forEach((todo => {
            if (todo.Folder == folder) {
                todoList.push(todo);
            }
        }));
        createTodoListDisplay(folderName, todoList, mainFolder);
    }

    const createSidebar = (mainFolder) => {
        const bodyContainer = document.createElement('div');
        bodyContainer.setAttribute('id', 'body-container');
        document.body.appendChild(bodyContainer);

        const sidebar = document.createElement('div');
        sidebar.setAttribute('id', 'sidebar');

        const foldersContainer = document.createElement('div');
        foldersContainer.setAttribute('id', 'folders-container');

        const foldersContainerHeading = document.createElement('h2');
        foldersContainerHeading.setAttribute('id', 'folders-heading');
        foldersContainerHeading.innerText = "Folders";
        foldersContainer.appendChild(foldersContainerHeading);

        const allTodosContainer = document.createElement('div');
        allTodosContainer.setAttribute('id', 'all-todos');
        allTodosContainer.innerText = "All Todos";
        foldersContainer.appendChild(allTodosContainer);

        const createNewFolderButton = document.createElement('div');
        createNewFolderButton.setAttribute('id', 'create-new-folder');
        createNewFolderButton.innerText = "Add Folder";
        
        const uniqueFolders = getFolderHeadings(mainFolder);  

        uniqueFolders.forEach(folder => {
            const folderListing = document.createElement('li');
            folderListing.setAttribute('id', folder);
            folderListing.innerText = folder;
            foldersContainer.appendChild(folderListing);
        })

        foldersContainer.appendChild(createNewFolderButton);
        sidebar.appendChild(foldersContainer);
        bodyContainer.appendChild(sidebar); 
    }

    const hideTodoScreen = () => {
        overlay.style.display = "none";
        newTodoScreen.style.display = "none";
    }
    
    const showTodoScreen = () => {
        overlay.style.display = "flex";
        newTodoScreen.style.display = "flex";
    }

    const populateFolderDropdown = (mainFolder) => {
        const uniqueFolders = getAllFolders(mainFolder);
        const folderDropdown = document.getElementById('folder-dropdown');
        folderDropdown.innerHTML = "";
        uniqueFolders.forEach(folder => {
            const newFolderListing = document.createElement(`option`);
            newFolderListing.innerText = folder;
            newFolderListing.value = folder;
            folderDropdown.appendChild(newFolderListing);
        })
    }

    const addNewSidebarFolder = (mainFolder) => {
        const uniqueFolders = getAllFolders(mainFolder);
        const newFolderInput = document.getElementById('new-folder-input')
        let newFolderExists = false;
        uniqueFolders.forEach(folder => {
            if (newFolderInput.value == folder) {
                alert("Folder already exists.");
                newFolderExists = true;
            }  
        })
        if (newFolderExists == false) {
            uniqueFolders.push(newFolderInput.value);
            const newFolderButton = document.getElementById('create-new-folder');
            const folderListing = document.createElement('li');
            const foldersContainer = document.getElementById('folders-container');
            const newFolderScreen = document.getElementById('new-folder-container');
            folderListing.setAttribute('id', newFolderInput.value);
            folderListing.innerText = newFolderInput.value;
            foldersContainer.insertBefore(folderListing, newFolderButton);
            newFolderScreen.classList = "hide";
        }
    }

    const createNewTodoScreen = (mainFolder) => {
        useFunction.resetInputValues();
        let confirmTodo = document.getElementsByClassName('todo-action-button');
        confirmTodo[0].setAttribute('id', 'confirm-todo');
        confirmTodo[0].innerText = 'Add Todo';
        showTodoScreen();
        populateFolderDropdown(mainFolder);
    }

    const createNewFolderScreen = (mainFolder) => {
        const foldersContainer = document.getElementById('folders-container');
        
        const newFolderScreen = document.createElement('div');
        newFolderScreen.setAttribute('id', 'new-folder-container');
        newFolderScreen.setAttribute('class', 'hide');

        const newFolderInput = document.createElement('input');
        newFolderInput.setAttribute('id', 'new-folder-input');
        newFolderInput.setAttribute('placeholder', "Folder");

        const addFolder = document.createElement('div');
        addFolder.setAttribute('id', 'add-new-folder');
        addFolder.innerText = "+";

        newFolderScreen.appendChild(newFolderInput);
        newFolderScreen.appendChild(addFolder);
        foldersContainer.appendChild(newFolderScreen);

        foldersContainer.addEventListener('click', (e) => {
            if (e.target.id == "create-new-folder") {
                if (newFolderScreen.classList == 'active') {
                    newFolderScreen.classList = 'hide'
                } else newFolderScreen.classList = "active";
            }
            if (e.target.id == "add-new-folder") {
                if (!newFolderInput.value) {
                    return;
                }
                addNewSidebarFolder(mainFolder);
            }
        })
    }

    const createEditScreen = (todo, mainFolder) => {
        useFunction.editTodoInputData(todo);
        let confirmEdit = document.getElementsByClassName('todo-action-button');
        confirmEdit[0].setAttribute('id', 'confirm-edit');
        confirmEdit[0].innerText = 'Edit';
        populateFolderDropdown(mainFolder);
        showTodoScreen();
    }

    const eventListeners = (mainFolder) => {
        document.addEventListener('click', (e) => {
            if (e.target.id == "confirm-todo") {
                if (!useFunction.titleInput.value || !useFunction.folderDropdown.value) {
                    return alert ("Please add a Title and Folder for your todo.")
                } 
                (0,_createNewTodo__WEBPACK_IMPORTED_MODULE_0__.createNewTodo)();
                const foldersContainer = document.getElementById('folders-container');
                foldersContainer.childNodes.forEach(listing => {
                    if (listing.id == "all-todos") {
                        hideTodoScreen();
                        const todoListContainer = document.getElementById('todo-list-container');
                        todoListContainer?.remove();
                        createTodoListDisplay('All Todos', mainFolder.todos, mainFolder);

                    }
                    else if (listing.classList == 'active') {
                        hideTodoScreen();
                        displayTodos(mainFolder, listing.id);
                    }
                })
            }
            if (e.target.id == "cancel-new-todo") {
                hideTodoScreen();
            }
            const foldersContainer = document.getElementById('folders-container');
            const uniqueFolders = getAllFolders(mainFolder);
            if (e.target.id == "all-todos") {
                foldersContainer.childNodes.forEach((listing) => {
                    listing.classList.remove('active');
                });
                const todoListContainer = document.getElementById('todo-list-container');
                todoListContainer?.remove();
                createTodoListDisplay('All Todos', mainFolder.todos, mainFolder);
            }

            uniqueFolders.forEach(folder => {
                if (e.target.id == 'all-todos') {
                    foldersContainer.childNodes.forEach((listing) => {
                        listing.classList.remove('active');
                    });
                }
                if (e.target.id == folder) {
                    foldersContainer.childNodes.forEach((listing) => {
                        listing.classList.remove('active');
                    });
                    e.target.classList.add('active');
                    displayTodos(mainFolder, folder);
                }
                if (e.target.id == "confirm-edit") {
                    mainFolder.todos.forEach(todo => {
                        if (e.target.classList[1] == todo.idNumber) {
                            useFunction.editTodo(todo);
                            hideTodoScreen();
                            const todoContainer = document.getElementById('todo-list-container');
                            const containerHeading = document.getElementById('container-heading');
                            if (todoContainer.classList[0] == "All") {
                                todoContainer.remove();
                                createTodoListDisplay('All Todos', mainFolder.todos, mainFolder);
                            } else if (todoContainer.classList[0] !== todo.Folder) {
                                displayTodos(mainFolder, todoContainer.classList[0]);
                            } else {
                                displayTodos(mainFolder, todo.Folder);
                            }
                        }
                    })
                    
                }
            }) 
        })
    }

    return {
        createMainHeader,
        createTodoListDisplay,
        createSidebar,
        createNewFolderScreen,
        eventListeners,
    }
}



/***/ }),

/***/ "./src/modules/masterFolder.js":
/*!*************************************!*\
  !*** ./src/modules/masterFolder.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "masterFolder": () => (/* binding */ masterFolder)
/* harmony export */ });
const masterFolder = { 
    todos: [{
        Title: "Test",
        Description: "blah blah blah",
        Priority: "High",
        Date: "29/Apr/2022",
        Time: "21:00",
        Folder: "Folder",
        idNumber: "123",
    },
    {
        Title: "Test2",
        Description: "blah blah blah",
        Priority: "Low",
        Date: "22/Jul/2022",
        Time: "10:00",
        Folder: "Project",
        idNumber: "199",
    },
    {
        Title: "Test3",
        Description: "blah blah blah",
        Priority: "High",
        Date: "29/Apr/2022",
        Time: "21:00",
        Folder: "Project",
        idNumber: "129",
    },],
};




/***/ }),

/***/ "./src/modules/todoFunctions.js":
/*!**************************************!*\
  !*** ./src/modules/todoFunctions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoFunctions": () => (/* binding */ todoFunctions)
/* harmony export */ });
const todoFunctions = () => {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const priorityDropdown = document.getElementById('priority-dropdown');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');
    const folderDropdown = document.getElementById('folder-dropdown');

    const createIdNumber = () => {
        let idNumber = + new Date();
        return idNumber
    }

    const editTodoInputData = (todo) => {
        titleInput.value = todo.Title;
        descriptionInput.value = todo.Description;
        dateInput.value = todo.Date;
        timeInput.value = todo.Time;
        priorityDropdown.value = todo.Priority;
        folderDropdown.value = todo.FolderId
    }

    const editTodo = (todo) => {
        if (!folderDropdown.value || !titleInput.value) {
            return alert("Please add a Folder and Title for your todo.");
        }
        todo.Title = titleInput.value;
        todo.Description = descriptionInput.value;
        todo.Date = dateInput.value;
        todo.Time = timeInput.value;
        todo.Priority = priorityDropdown.value;
        todo.Folder = folderDropdown.value;
    }

    const resetInputValues = () => {
        titleInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
        priorityDropdown.value = '';
        folderDropdown.value = '';
    }

    return {
        createIdNumber,
        editTodoInputData,
        editTodo,
        resetInputValues,
        titleInput,
        descriptionInput,
        dateInput,
        timeInput,
        priorityDropdown,
        folderDropdown,
    }
}



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
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/interface */ "./src/modules/interface.js");
/* harmony import */ var _modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/masterFolder */ "./src/modules/masterFolder.js");




const display = (0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.createDisplay)();
display.createMainHeader(_modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder);
display.createSidebar(_modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder);
display.createTodoListDisplay('All Todos', _modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder.todos, _modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder);
display.createNewFolderScreen(_modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder);
display.eventListeners(_modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDTnFCO0FBQytCO0FBQ0U7O0FBRXRELGdCQUFnQixpRUFBYTtBQUM3Qix5QkFBeUIsK0RBQVk7QUFDckMsc0JBQXNCLCtEQUFZO0FBQ2xDLDJDQUEyQyxxRUFBa0IsRUFBRSwrREFBWTtBQUMzRSw4QkFBOEIsK0RBQVk7QUFDMUMsdUJBQXVCLCtEQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZU5ld1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21hc3RlckZvbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI21haW4taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuI2FsbC10b2RvcyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZm9sZGVycy1jb250YWluZXIgPiBsaSwgI3RvZG8tbGlzdC1jb250YWluZXIgPiBkaXYsICNhZGQtbmV3LXRvZG8sICNjcmVhdGUtbmV3LWZvbGRlciwgI2NhbmNlbC1uZXctdG9kbyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2JvZHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwdnc7XFxuICAgIHBhZGRpbmctbGVmdDogNGVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbiN0b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG4gICAgbWluLXdpZHRoOiA4MHZ3O1xcbiAgICBcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgXFxuICAgXFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbiN0b2RvLWV4cGFuZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8ta2V5LCAudG9kby12YWx1ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRvZG8ta2V5IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXG4gICAgZGlzcGxheTogbm9uZTsgXFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIHotaW5kZXg6IDc7XFxufVxcblxcbiN0b2RvLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbiNhZGQtbmV3LXRvZG8ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVlbTtcXG4gICAgcGFkZGluZzogMC44ZW07XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcbn1cXG5cXG4jZm9sZGVycy1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuI2NyZWF0ZS1uZXctZm9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC43ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI2ZvbGRlcnMtY29udGFpbmVyID4gbGkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4jZm9sZGVycy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG59XFxuXFxuI2NhbmNlbC1uZXctdG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG1pbi13aWR0aDogOTUlO1xcbn1cXG5cXG4jbmV3LXRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5lZGl0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucmVtb3ZlIHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjVlbTtcXG59XFxuXFxuI2FsbC10b2RvcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI25ldy1mb2xkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbiNuZXctZm9sZGVyLWlucHV0IHtcXG4gICAgd2lkdGg6IDEwZW07XFxufVxcblxcbiNhZGQtbmV3LWZvbGRlcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDAlO1xcbiAgICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZUFBZTs7SUFFZixhQUFhOzs7QUFHakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI21haW4taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuI2FsbC10b2RvcyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZm9sZGVycy1jb250YWluZXIgPiBsaSwgI3RvZG8tbGlzdC1jb250YWluZXIgPiBkaXYsICNhZGQtbmV3LXRvZG8sICNjcmVhdGUtbmV3LWZvbGRlciwgI2NhbmNlbC1uZXctdG9kbyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2JvZHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwdnc7XFxuICAgIHBhZGRpbmctbGVmdDogNGVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbiN0b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG4gICAgbWluLXdpZHRoOiA4MHZ3O1xcbiAgICBcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgXFxuICAgXFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbiN0b2RvLWV4cGFuZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8ta2V5LCAudG9kby12YWx1ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRvZG8ta2V5IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXG4gICAgZGlzcGxheTogbm9uZTsgXFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIHotaW5kZXg6IDc7XFxufVxcblxcbiN0b2RvLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbiNhZGQtbmV3LXRvZG8ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVlbTtcXG4gICAgcGFkZGluZzogMC44ZW07XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcbn1cXG5cXG4jZm9sZGVycy1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuI2NyZWF0ZS1uZXctZm9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC43ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI2ZvbGRlcnMtY29udGFpbmVyID4gbGkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4jZm9sZGVycy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG59XFxuXFxuI2NhbmNlbC1uZXctdG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG1pbi13aWR0aDogOTUlO1xcbn1cXG5cXG4jbmV3LXRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5lZGl0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucmVtb3ZlIHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjVlbTtcXG59XFxuXFxuI2FsbC10b2RvcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI25ldy1mb2xkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbiNuZXctZm9sZGVyLWlucHV0IHtcXG4gICAgd2lkdGg6IDEwZW07XFxufVxcblxcbiNhZGQtbmV3LWZvbGRlcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDAlO1xcbiAgICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdG9kb0Z1bmN0aW9ucyB9IGZyb20gXCIuL3RvZG9GdW5jdGlvbnNcIjtcbmltcG9ydCB7IG1hc3RlckZvbGRlciB9IGZyb20gJy4vbWFzdGVyRm9sZGVyJztcblxuY29uc3QgbmV3VG9kb1RlbXBsYXRlID0gKFRpdGxlLCBEZXNjcmlwdGlvbiwgUHJpb3JpdHksIERhdGUsIFRpbWUsIEZvbGRlciwgaWROdW1iZXIpID0+IHtcbiAgICByZXR1cm4geyBUaXRsZSwgRGVzY3JpcHRpb24sIFByaW9yaXR5LCBEYXRlLCBUaW1lLCBGb2xkZXIsIGlkTnVtYmVyIH1cbn1cblxuY29uc3QgY3JlYXRlTmV3VG9kbyA9IChuZXdUb2RvKSA9PiB7IFxuICAgIGNvbnN0IHVzZUZ1bmN0aW9uID0gdG9kb0Z1bmN0aW9ucygpO1xuICAgIG5ld1RvZG8gPSBuZXdUb2RvVGVtcGxhdGUoXG4gICAgICAgIGAke3VzZUZ1bmN0aW9uLnRpdGxlSW5wdXQudmFsdWV9YCwgXG4gICAgICAgIGAke3VzZUZ1bmN0aW9uLmRlc2NyaXB0aW9uSW5wdXQudmFsdWV9YCwgXG4gICAgICAgIGAke3VzZUZ1bmN0aW9uLnByaW9yaXR5RHJvcGRvd24udmFsdWV9YCwgXG4gICAgICAgIGAke3VzZUZ1bmN0aW9uLmRhdGVJbnB1dC52YWx1ZX1gLCBgJHt1c2VGdW5jdGlvbi50aW1lSW5wdXQudmFsdWV9YCwgXG4gICAgICAgIGAke3VzZUZ1bmN0aW9uLmZvbGRlckRyb3Bkb3duLnZhbHVlfWAsIGAke3VzZUZ1bmN0aW9uLmNyZWF0ZUlkTnVtYmVyKCl9YFxuICAgICAgICApO1xuICAgIG1hc3RlckZvbGRlci50b2Rvcy5wdXNoKG5ld1RvZG8pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVOZXdUb2RvLCBuZXdUb2RvVGVtcGxhdGUgfVxuXG5cblxuXG4iLCJpbXBvcnQgeyBjcmVhdGVOZXdUb2RvIH0gZnJvbSBcIi4vY3JlYXRlTmV3VG9kb1wiO1xuaW1wb3J0IHsgdG9kb0Z1bmN0aW9ucyB9IGZyb20gXCIuL3RvZG9GdW5jdGlvbnNcIjtcblxuY29uc3QgY3JlYXRlRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VGdW5jdGlvbiA9IHRvZG9GdW5jdGlvbnMoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbiAgICBjb25zdCBuZXdUb2RvU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tc2NyZWVuJyk7XG5cbiAgICBjb25zdCBjcmVhdGVNYWluSGVhZGVyID0gKG1haW5Gb2xkZXIpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBtYWluSGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4taGVhZGVyJyk7XG4gICAgICAgIG5ld1RvZG9CdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtbmV3LXRvZG8nKTtcbiAgICAgICAgbWFpbkhlYWRlclRleHQuaW5uZXJUZXh0ID0gXCJUT0RPIEFwcFwiO1xuICAgICAgICBuZXdUb2RvQnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkIE5ldyBUb2RvXCI7XG4gICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQobWFpbkhlYWRlclRleHQpO1xuICAgICAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKG5ld1RvZG9CdXR0b24pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuXG4gICAgICAgIG1haW5IZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IFwiYWRkLW5ldy10b2RvXCIpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvU2NyZWVuKG1haW5Gb2xkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG9MaXN0RGlzcGxheSA9ICh0b2RvRm9sZGVyTmFtZSwgdG9kb0ZvbGRlciwgbWFpbkZvbGRlcikgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdC1jb250YWluZXInKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vaGlkZVRvZG9TY3JlZW4oKTtcbiAgICAgICAgY29uc3QgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIC8vIENyZWF0ZXMgdG9kbyBjb250YWluZXIgYW5kIGhlYWRpbmdcbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0Rpc3BsYXkuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWxpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIHRvZG9EaXNwbGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHt0b2RvRm9sZGVyTmFtZX1gKTtcblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICB0b2RvRGlzcGxheUhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXItaGVhZGluZycpO1xuICAgICAgICB0b2RvRGlzcGxheUhlYWRpbmcuaW5uZXJUZXh0ID0gdG9kb0ZvbGRlck5hbWU7XG4gICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZENoaWxkKHRvZG9EaXNwbGF5SGVhZGluZyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlcyB0b2RvIGNvbnRhaW5lcnMgYW5kIGF0dGFjaGVkIGJ1dHRvbnMvZmVhdHVyZXNcbiAgICAgICAgdG9kb0ZvbGRlci5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdG9kb0RhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvZG9EYXRhLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0b2RvLmlkTnVtYmVyfWApO1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRvZG8tY29udGFpbmVyICR7dG9kby5pZE51bWJlcn1gKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb0V4cGFuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvRXhwYW5kZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0b2RvLWV4cGFuZGVyYCk7XG4gICAgICAgICAgICB0b2RvRXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRvZG9FeHBhbmRlci5zdHlsZS5mbGV4V3JhcCA9ICd3cmFwJztcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRvZG8pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IFwiaWROdW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9LZXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb1ZhbHVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZG9LZXlzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdG9kby1rZXlgKVxuICAgICAgICAgICAgICAgIHRvZG9WYWx1ZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0b2RvLXZhbHVlYCk7XG4gICAgICAgICAgICAgICAgdG9kb0tleXMuaW5uZXJUZXh0ID0gYCR7a2V5fTpgO1xuICAgICAgICAgICAgICAgIGlmICghdG9kb1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9WYWx1ZXMuaW5uZXJUZXh0ID0gJy0nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBcbiAgICAgICAgICAgICAgICB0b2RvVmFsdWVzLmlubmVyVGV4dCA9IHRvZG9ba2V5XTtcbiAgICAgICAgICAgICAgICB0b2RvRXhwYW5kZXIuYXBwZW5kQ2hpbGQodG9kb0tleXMpO1xuICAgICAgICAgICAgICAgIHRvZG9FeHBhbmRlci5hcHBlbmRDaGlsZCh0b2RvVmFsdWVzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0b2RvRGF0YS5pbm5lclRleHQgPSBgJHt0b2RvLlRpdGxlfSAtICR7dG9kby5EYXRlfSAke3RvZG8uVGltZX1gO1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYGVkaXQgJHt0b2RvLmlkTnVtYmVyfWApO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5pbm5lclRleHQgPSBcIkVkaXRcIjtcblxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsIGByZW1vdmUgJHt0b2RvLmlkTnVtYmVyfWApO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmlubmVyVGV4dCA9IFwiUmVtb3ZlXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RhdGEpO1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRXhwYW5kZXIpO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTsgXG5cbiAgICAgICAgICAgIHRvZG9EYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSB0b2RvLmlkTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9PSBcImZsZXhcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0V4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIFxuICAgICAgICAgICAgICAgICAgICB0b2RvRXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pICAgICAgICBcblxuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzBdID09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICBtYWluRm9sZGVyLnRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzFdID09IHRvZG8uaWROdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluRm9sZGVyLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9Db250YWluZXIuY2xhc3NMaXN0WzBdID09IFwiQWxsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVG9kb0xpc3REaXNwbGF5KCdBbGwgVG9kb3MnLCBtYWluRm9sZGVyLnRvZG9zLCBtYWluRm9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VG9kb3MobWFpbkZvbGRlciwgdG9kby5Gb2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzBdID09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgICAgICBtYWluRm9sZGVyLnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzFdID09IHRvZG8uaWROdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVFZGl0U2NyZWVuKHRvZG8sIG1haW5Gb2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybS1lZGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVkaXRCdXR0b24uY2xhc3NMaXN0Lmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kby1hY3Rpb24tYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0b2RvLmlkTnVtYmVyKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodG9kby5pZE51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rpc3BsYXkpOyAgXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Rm9sZGVySGVhZGluZ3MgPSAobWFpbkZvbGRlcikgPT4ge1xuICAgICAgICBsZXQgZm9sZGVycyA9IFtdO1xuICAgICAgICBtYWluRm9sZGVyLnRvZG9zLmZvckVhY2goKHRvZG8gPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModG9kbykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gXCJGb2xkZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBmb2xkZXJzLnB1c2godG9kb1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSkgXG4gICAgICAgIGNvbnN0IHVuaXF1ZUZvbGRlcnMgPSBbLi4ubmV3IFNldChmb2xkZXJzKV07XG4gICAgICAgIHJldHVybiB1bmlxdWVGb2xkZXJzXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2lkZWJhckZvbGRlcnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBmb2xkZXJzID0gW107XG4gICAgICAgIGNvbnN0IHNpZGViYXJGb2xkZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlcnMtY29udGFpbmVyJyk7XG4gICAgICAgIHNpZGViYXJGb2xkZXJzLmNoaWxkTm9kZXMuZm9yRWFjaChsaXN0aW5nID0+IHtcbiAgICAgICAgICAgIGlmIChsaXN0aW5nLnRhZ05hbWUgPT0gJ0xJJykge1xuICAgICAgICAgICAgICAgIGZvbGRlcnMucHVzaChsaXN0aW5nLmlubmVyVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmb2xkZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEFsbEZvbGRlcnMgPSAobWFpbkZvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCB0b2RvRm9sZGVycyA9IGdldEZvbGRlckhlYWRpbmdzKG1haW5Gb2xkZXIpO1xuICAgICAgICBjb25zdCBzaWRlYmFyRm9sZGVycyA9IGdldFNpZGViYXJGb2xkZXJzKCk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkRm9sZGVycyA9IHNpZGViYXJGb2xkZXJzLmNvbmNhdCh0b2RvRm9sZGVycyk7XG4gICAgICAgIGNvbnN0IHVuaXF1ZUZvbGRlcnMgPSBbLi4ubmV3IFNldChjb21iaW5lZEZvbGRlcnMpXTtcbiAgICAgICAgcmV0dXJuIHVuaXF1ZUZvbGRlcnM7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRvZG9zID0gKG1haW5Gb2xkZXIsIGZvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJGb2xkZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlcnMtY29udGFpbmVyJyk7XG4gICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgIGxldCB0b2RvTGlzdCA9IFtdO1xuICAgICAgICBsZXQgZm9sZGVyTmFtZSA9ICcnO1xuICAgICAgICBzaWRlYmFyRm9sZGVycy5jaGlsZE5vZGVzLmZvckVhY2goZm9sZGVyID0+IHtcbiAgICAgICAgICAgIGlmIChmb2xkZXIuY2xhc3NMaXN0ID09ICdhY3RpdmUnKSB7XG4gICAgICAgICAgICAgICAgZm9sZGVyTmFtZSA9IGZvbGRlci5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFpbkZvbGRlci50b2Rvcy5mb3JFYWNoKCh0b2RvID0+IHtcbiAgICAgICAgICAgIGlmICh0b2RvLkZvbGRlciA9PSBmb2xkZXIpIHtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIGNyZWF0ZVRvZG9MaXN0RGlzcGxheShmb2xkZXJOYW1lLCB0b2RvTGlzdCwgbWFpbkZvbGRlcik7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU2lkZWJhciA9IChtYWluRm9sZGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9keUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JvZHktY29udGFpbmVyJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9keUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlYmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2lkZWJhcicpO1xuXG4gICAgICAgIGNvbnN0IGZvbGRlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9sZGVyc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZvbGRlcnMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgZm9sZGVyc0NvbnRhaW5lckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBmb2xkZXJzQ29udGFpbmVySGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZvbGRlcnMtaGVhZGluZycpO1xuICAgICAgICBmb2xkZXJzQ29udGFpbmVySGVhZGluZy5pbm5lclRleHQgPSBcIkZvbGRlcnNcIjtcbiAgICAgICAgZm9sZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb2xkZXJzQ29udGFpbmVySGVhZGluZyk7XG5cbiAgICAgICAgY29uc3QgYWxsVG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWxsVG9kb3NDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhbGwtdG9kb3MnKTtcbiAgICAgICAgYWxsVG9kb3NDb250YWluZXIuaW5uZXJUZXh0ID0gXCJBbGwgVG9kb3NcIjtcbiAgICAgICAgZm9sZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhbGxUb2Rvc0NvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlTmV3Rm9sZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWF0ZU5ld0ZvbGRlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NyZWF0ZS1uZXctZm9sZGVyJyk7XG4gICAgICAgIGNyZWF0ZU5ld0ZvbGRlckJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBGb2xkZXJcIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVuaXF1ZUZvbGRlcnMgPSBnZXRGb2xkZXJIZWFkaW5ncyhtYWluRm9sZGVyKTsgIFxuXG4gICAgICAgIHVuaXF1ZUZvbGRlcnMuZm9yRWFjaChmb2xkZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9sZGVyTGlzdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBmb2xkZXJMaXN0aW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBmb2xkZXIpO1xuICAgICAgICAgICAgZm9sZGVyTGlzdGluZy5pbm5lclRleHQgPSBmb2xkZXI7XG4gICAgICAgICAgICBmb2xkZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvbGRlckxpc3RpbmcpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGZvbGRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3Rm9sZGVyQnV0dG9uKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChmb2xkZXJzQ29udGFpbmVyKTtcbiAgICAgICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKTsgXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZVRvZG9TY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBuZXdUb2RvU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc2hvd1RvZG9TY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBuZXdUb2RvU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3B1bGF0ZUZvbGRlckRyb3Bkb3duID0gKG1haW5Gb2xkZXIpID0+IHtcbiAgICAgICAgY29uc3QgdW5pcXVlRm9sZGVycyA9IGdldEFsbEZvbGRlcnMobWFpbkZvbGRlcik7XG4gICAgICAgIGNvbnN0IGZvbGRlckRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1kcm9wZG93bicpO1xuICAgICAgICBmb2xkZXJEcm9wZG93bi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB1bmlxdWVGb2xkZXJzLmZvckVhY2goZm9sZGVyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZvbGRlckxpc3RpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBvcHRpb25gKTtcbiAgICAgICAgICAgIG5ld0ZvbGRlckxpc3RpbmcuaW5uZXJUZXh0ID0gZm9sZGVyO1xuICAgICAgICAgICAgbmV3Rm9sZGVyTGlzdGluZy52YWx1ZSA9IGZvbGRlcjtcbiAgICAgICAgICAgIGZvbGRlckRyb3Bkb3duLmFwcGVuZENoaWxkKG5ld0ZvbGRlckxpc3RpbmcpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1NpZGViYXJGb2xkZXIgPSAobWFpbkZvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCB1bmlxdWVGb2xkZXJzID0gZ2V0QWxsRm9sZGVycyhtYWluRm9sZGVyKTtcbiAgICAgICAgY29uc3QgbmV3Rm9sZGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWZvbGRlci1pbnB1dCcpXG4gICAgICAgIGxldCBuZXdGb2xkZXJFeGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdW5pcXVlRm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgICAgICBpZiAobmV3Rm9sZGVySW5wdXQudmFsdWUgPT0gZm9sZGVyKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGb2xkZXIgYWxyZWFkeSBleGlzdHMuXCIpO1xuICAgICAgICAgICAgICAgIG5ld0ZvbGRlckV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKG5ld0ZvbGRlckV4aXN0cyA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdW5pcXVlRm9sZGVycy5wdXNoKG5ld0ZvbGRlcklucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtbmV3LWZvbGRlcicpO1xuICAgICAgICAgICAgY29uc3QgZm9sZGVyTGlzdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlcnMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdGb2xkZXJTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWZvbGRlci1jb250YWluZXInKTtcbiAgICAgICAgICAgIGZvbGRlckxpc3Rpbmcuc2V0QXR0cmlidXRlKCdpZCcsIG5ld0ZvbGRlcklucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGZvbGRlckxpc3RpbmcuaW5uZXJUZXh0ID0gbmV3Rm9sZGVySW5wdXQudmFsdWU7XG4gICAgICAgICAgICBmb2xkZXJzQ29udGFpbmVyLmluc2VydEJlZm9yZShmb2xkZXJMaXN0aW5nLCBuZXdGb2xkZXJCdXR0b24pO1xuICAgICAgICAgICAgbmV3Rm9sZGVyU2NyZWVuLmNsYXNzTGlzdCA9IFwiaGlkZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTmV3VG9kb1NjcmVlbiA9IChtYWluRm9sZGVyKSA9PiB7XG4gICAgICAgIHVzZUZ1bmN0aW9uLnJlc2V0SW5wdXRWYWx1ZXMoKTtcbiAgICAgICAgbGV0IGNvbmZpcm1Ub2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9kby1hY3Rpb24tYnV0dG9uJyk7XG4gICAgICAgIGNvbmZpcm1Ub2RvWzBdLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29uZmlybS10b2RvJyk7XG4gICAgICAgIGNvbmZpcm1Ub2RvWzBdLmlubmVyVGV4dCA9ICdBZGQgVG9kbyc7XG4gICAgICAgIHNob3dUb2RvU2NyZWVuKCk7XG4gICAgICAgIHBvcHVsYXRlRm9sZGVyRHJvcGRvd24obWFpbkZvbGRlcik7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTmV3Rm9sZGVyU2NyZWVuID0gKG1haW5Gb2xkZXIpID0+IHtcbiAgICAgICAgY29uc3QgZm9sZGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXJzLWNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3Rm9sZGVyU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0ZvbGRlclNjcmVlbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ldy1mb2xkZXItY29udGFpbmVyJyk7XG4gICAgICAgIG5ld0ZvbGRlclNjcmVlbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hpZGUnKTtcblxuICAgICAgICBjb25zdCBuZXdGb2xkZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5ld0ZvbGRlcklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LWZvbGRlci1pbnB1dCcpO1xuICAgICAgICBuZXdGb2xkZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJGb2xkZXJcIik7XG5cbiAgICAgICAgY29uc3QgYWRkRm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZEZvbGRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1uZXctZm9sZGVyJyk7XG4gICAgICAgIGFkZEZvbGRlci5pbm5lclRleHQgPSBcIitcIjtcblxuICAgICAgICBuZXdGb2xkZXJTY3JlZW4uYXBwZW5kQ2hpbGQobmV3Rm9sZGVySW5wdXQpO1xuICAgICAgICBuZXdGb2xkZXJTY3JlZW4uYXBwZW5kQ2hpbGQoYWRkRm9sZGVyKTtcbiAgICAgICAgZm9sZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdGb2xkZXJTY3JlZW4pO1xuXG4gICAgICAgIGZvbGRlcnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IFwiY3JlYXRlLW5ldy1mb2xkZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChuZXdGb2xkZXJTY3JlZW4uY2xhc3NMaXN0ID09ICdhY3RpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZvbGRlclNjcmVlbi5jbGFzc0xpc3QgPSAnaGlkZSdcbiAgICAgICAgICAgICAgICB9IGVsc2UgbmV3Rm9sZGVyU2NyZWVuLmNsYXNzTGlzdCA9IFwiYWN0aXZlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJhZGQtbmV3LWZvbGRlclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdGb2xkZXJJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZE5ld1NpZGViYXJGb2xkZXIobWFpbkZvbGRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRWRpdFNjcmVlbiA9ICh0b2RvLCBtYWluRm9sZGVyKSA9PiB7XG4gICAgICAgIHVzZUZ1bmN0aW9uLmVkaXRUb2RvSW5wdXREYXRhKHRvZG8pO1xuICAgICAgICBsZXQgY29uZmlybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvLWFjdGlvbi1idXR0b24nKTtcbiAgICAgICAgY29uZmlybUVkaXRbMF0uc2V0QXR0cmlidXRlKCdpZCcsICdjb25maXJtLWVkaXQnKTtcbiAgICAgICAgY29uZmlybUVkaXRbMF0uaW5uZXJUZXh0ID0gJ0VkaXQnO1xuICAgICAgICBwb3B1bGF0ZUZvbGRlckRyb3Bkb3duKG1haW5Gb2xkZXIpO1xuICAgICAgICBzaG93VG9kb1NjcmVlbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gKG1haW5Gb2xkZXIpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IFwiY29uZmlybS10b2RvXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZUZ1bmN0aW9uLnRpdGxlSW5wdXQudmFsdWUgfHwgIXVzZUZ1bmN0aW9uLmZvbGRlckRyb3Bkb3duLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCAoXCJQbGVhc2UgYWRkIGEgVGl0bGUgYW5kIEZvbGRlciBmb3IgeW91ciB0b2RvLlwiKVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kbygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvbGRlcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVycy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBmb2xkZXJzQ29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChsaXN0aW5nID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RpbmcuaWQgPT0gXCJhbGwtdG9kb3NcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVRvZG9TY3JlZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0Q29udGFpbmVyPy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG9MaXN0RGlzcGxheSgnQWxsIFRvZG9zJywgbWFpbkZvbGRlci50b2RvcywgbWFpbkZvbGRlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsaXN0aW5nLmNsYXNzTGlzdCA9PSAnYWN0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVRvZG9TY3JlZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUb2RvcyhtYWluRm9sZGVyLCBsaXN0aW5nLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJjYW5jZWwtbmV3LXRvZG9cIikge1xuICAgICAgICAgICAgICAgIGhpZGVUb2RvU2NyZWVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmb2xkZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlcnMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCB1bmlxdWVGb2xkZXJzID0gZ2V0QWxsRm9sZGVycyhtYWluRm9sZGVyKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImFsbC10b2Rvc1wiKSB7XG4gICAgICAgICAgICAgICAgZm9sZGVyc0NvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goKGxpc3RpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3RDb250YWluZXI/LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG9MaXN0RGlzcGxheSgnQWxsIFRvZG9zJywgbWFpbkZvbGRlci50b2RvcywgbWFpbkZvbGRlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXF1ZUZvbGRlcnMuZm9yRWFjaChmb2xkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSAnYWxsLXRvZG9zJykge1xuICAgICAgICAgICAgICAgICAgICBmb2xkZXJzQ29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaCgobGlzdGluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGluZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBmb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9sZGVyc0NvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goKGxpc3RpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RpbmcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVRvZG9zKG1haW5Gb2xkZXIsIGZvbGRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImNvbmZpcm0tZWRpdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5Gb2xkZXIudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMV0gPT0gdG9kby5pZE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUZ1bmN0aW9uLmVkaXRUb2RvKHRvZG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVUb2RvU2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVySGVhZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItaGVhZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvQ29udGFpbmVyLmNsYXNzTGlzdFswXSA9PSBcIkFsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG9MaXN0RGlzcGxheSgnQWxsIFRvZG9zJywgbWFpbkZvbGRlci50b2RvcywgbWFpbkZvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b2RvQ29udGFpbmVyLmNsYXNzTGlzdFswXSAhPT0gdG9kby5Gb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVRvZG9zKG1haW5Gb2xkZXIsIHRvZG9Db250YWluZXIuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VG9kb3MobWFpbkZvbGRlciwgdG9kby5Gb2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlTWFpbkhlYWRlcixcbiAgICAgICAgY3JlYXRlVG9kb0xpc3REaXNwbGF5LFxuICAgICAgICBjcmVhdGVTaWRlYmFyLFxuICAgICAgICBjcmVhdGVOZXdGb2xkZXJTY3JlZW4sXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLFxuICAgIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlRGlzcGxheSB9OyIsImNvbnN0IG1hc3RlckZvbGRlciA9IHsgXG4gICAgdG9kb3M6IFt7XG4gICAgICAgIFRpdGxlOiBcIlRlc3RcIixcbiAgICAgICAgRGVzY3JpcHRpb246IFwiYmxhaCBibGFoIGJsYWhcIixcbiAgICAgICAgUHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgICAgICBEYXRlOiBcIjI5L0Fwci8yMDIyXCIsXG4gICAgICAgIFRpbWU6IFwiMjE6MDBcIixcbiAgICAgICAgRm9sZGVyOiBcIkZvbGRlclwiLFxuICAgICAgICBpZE51bWJlcjogXCIxMjNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgVGl0bGU6IFwiVGVzdDJcIixcbiAgICAgICAgRGVzY3JpcHRpb246IFwiYmxhaCBibGFoIGJsYWhcIixcbiAgICAgICAgUHJpb3JpdHk6IFwiTG93XCIsXG4gICAgICAgIERhdGU6IFwiMjIvSnVsLzIwMjJcIixcbiAgICAgICAgVGltZTogXCIxMDowMFwiLFxuICAgICAgICBGb2xkZXI6IFwiUHJvamVjdFwiLFxuICAgICAgICBpZE51bWJlcjogXCIxOTlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgVGl0bGU6IFwiVGVzdDNcIixcbiAgICAgICAgRGVzY3JpcHRpb246IFwiYmxhaCBibGFoIGJsYWhcIixcbiAgICAgICAgUHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgICAgICBEYXRlOiBcIjI5L0Fwci8yMDIyXCIsXG4gICAgICAgIFRpbWU6IFwiMjE6MDBcIixcbiAgICAgICAgRm9sZGVyOiBcIlByb2plY3RcIixcbiAgICAgICAgaWROdW1iZXI6IFwiMTI5XCIsXG4gICAgfSxdLFxufTtcblxuXG5leHBvcnQgeyBtYXN0ZXJGb2xkZXIgfTsiLCJjb25zdCB0b2RvRnVuY3Rpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgcHJpb3JpdHlEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eS1kcm9wZG93bicpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWlucHV0Jyk7XG4gICAgY29uc3QgdGltZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUtaW5wdXQnKTtcbiAgICBjb25zdCBmb2xkZXJEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItZHJvcGRvd24nKTtcblxuICAgIGNvbnN0IGNyZWF0ZUlkTnVtYmVyID0gKCkgPT4ge1xuICAgICAgICBsZXQgaWROdW1iZXIgPSArIG5ldyBEYXRlKCk7XG4gICAgICAgIHJldHVybiBpZE51bWJlclxuICAgIH1cblxuICAgIGNvbnN0IGVkaXRUb2RvSW5wdXREYXRhID0gKHRvZG8pID0+IHtcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG8uVGl0bGU7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b2RvLkRlc2NyaXB0aW9uO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0b2RvLkRhdGU7XG4gICAgICAgIHRpbWVJbnB1dC52YWx1ZSA9IHRvZG8uVGltZTtcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi52YWx1ZSA9IHRvZG8uUHJpb3JpdHk7XG4gICAgICAgIGZvbGRlckRyb3Bkb3duLnZhbHVlID0gdG9kby5Gb2xkZXJJZFxuICAgIH1cblxuICAgIGNvbnN0IGVkaXRUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgaWYgKCFmb2xkZXJEcm9wZG93bi52YWx1ZSB8fCAhdGl0bGVJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGFkZCBhIEZvbGRlciBhbmQgVGl0bGUgZm9yIHlvdXIgdG9kby5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdG9kby5UaXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgIHRvZG8uRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgICB0b2RvLkRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICAgIHRvZG8uVGltZSA9IHRpbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgdG9kby5Qcmlvcml0eSA9IHByaW9yaXR5RHJvcGRvd24udmFsdWU7XG4gICAgICAgIHRvZG8uRm9sZGVyID0gZm9sZGVyRHJvcGRvd24udmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRJbnB1dFZhbHVlcyA9ICgpID0+IHtcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB0aW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi52YWx1ZSA9ICcnO1xuICAgICAgICBmb2xkZXJEcm9wZG93bi52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUlkTnVtYmVyLFxuICAgICAgICBlZGl0VG9kb0lucHV0RGF0YSxcbiAgICAgICAgZWRpdFRvZG8sXG4gICAgICAgIHJlc2V0SW5wdXRWYWx1ZXMsXG4gICAgICAgIHRpdGxlSW5wdXQsXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgICAgIGRhdGVJbnB1dCxcbiAgICAgICAgdGltZUlucHV0LFxuICAgICAgICBwcmlvcml0eURyb3Bkb3duLFxuICAgICAgICBmb2xkZXJEcm9wZG93bixcbiAgICB9XG59XG5cbmV4cG9ydCB7IHRvZG9GdW5jdGlvbnMgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZURpc3BsYXkgfSBmcm9tICcuL21vZHVsZXMvaW50ZXJmYWNlJztcbmltcG9ydCB7IG1hc3RlckZvbGRlciB9IGZyb20gJy4vbW9kdWxlcy9tYXN0ZXJGb2xkZXInO1xuXG5jb25zdCBkaXNwbGF5ID0gY3JlYXRlRGlzcGxheSgpO1xuZGlzcGxheS5jcmVhdGVNYWluSGVhZGVyKG1hc3RlckZvbGRlcik7XG5kaXNwbGF5LmNyZWF0ZVNpZGViYXIobWFzdGVyRm9sZGVyKTtcbmRpc3BsYXkuY3JlYXRlVG9kb0xpc3REaXNwbGF5KCdBbGwgVG9kb3MnLCBtYXN0ZXJGb2xkZXIudG9kb3MsIG1hc3RlckZvbGRlcik7XG5kaXNwbGF5LmNyZWF0ZU5ld0ZvbGRlclNjcmVlbihtYXN0ZXJGb2xkZXIpO1xuZGlzcGxheS5ldmVudExpc3RlbmVycyhtYXN0ZXJGb2xkZXIpO1xuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==