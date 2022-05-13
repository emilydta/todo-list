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
    localStorage.setItem("masterFolderStore", JSON.stringify(_masterFolder__WEBPACK_IMPORTED_MODULE_1__.masterFolder));
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
                localStorage.setItem("masterFolderStore", JSON.stringify(mainFolder));
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
        if (localStorage.getItem("folderHeadings")) {
            return JSON.parse(localStorage.getItem("folderHeadings"));
        } else {
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
    }

    const getSidebarFolders = () => {
        if (localStorage.getItem("folderHeadings")) {
            return JSON.parse(localStorage.getItem("folderHeadings"));
        } else {
            let folders = [];
            const sidebarFolders = document.getElementById('folders-container');
            sidebarFolders.childNodes.forEach(listing => {
                if (listing.tagName == 'LI') {
                    folders.push(listing.innerText);
                }
            })
            return folders;
        }
    }

    const getAllFolders = (mainFolder) => {
        if (localStorage.getItem("folderHeadings")) {
            return JSON.parse(localStorage.getItem("folderHeadings"));
        } else {
            const todoFolders = getFolderHeadings(mainFolder);
            const sidebarFolders = getSidebarFolders();
            const combinedFolders = sidebarFolders.concat(todoFolders);
            const uniqueFolders = [...new Set(combinedFolders)];
            localStorage.setItem("folderHeadings", JSON.stringify(uniqueFolders));
            return uniqueFolders;
        }
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
            localStorage.setItem("folderHeadings", JSON.stringify(uniqueFolders));
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
        populateFolderDropdown(mainFolder);
        useFunction.editTodoInputData(todo);
        let confirmEdit = document.getElementsByClassName('todo-action-button');
        confirmEdit[0].setAttribute('id', 'confirm-edit');
        confirmEdit[0].innerText = 'Edit';
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
                    localStorage.setItem("masterFolderStore", JSON.stringify(mainFolder)); 
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
let masterFolder = {};
if (localStorage.getItem('masterFolderStore')) {
    masterFolder = JSON.parse(localStorage.getItem("masterFolderStore")); 
} else {
    masterFolder = { 
        todos: [],
    };
}



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
        folderDropdown.value = todo.Folder
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




localStorage.setItem("masterFolderStore", JSON.stringify(_modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder));

const display = (0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.createDisplay)();
display.createMainHeader(_modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder);
display.createSidebar(_modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder);
display.createTodoListDisplay('All Todos', _modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder.todos, _modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder);
display.createNewFolderScreen(_modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder);
display.eventListeners(_modules_masterFolder__WEBPACK_IMPORTED_MODULE_2__.masterFolder);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkRBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwYUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDdkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUMrQjtBQUNFOztBQUV0RCx5REFBeUQsK0RBQVk7O0FBRXJFLGdCQUFnQixpRUFBYTtBQUM3Qix5QkFBeUIsK0RBQVk7QUFDckMsc0JBQXNCLCtEQUFZO0FBQ2xDLDJDQUEyQyxxRUFBa0IsRUFBRSwrREFBWTtBQUMzRSw4QkFBOEIsK0RBQVk7QUFDMUMsdUJBQXVCLCtEQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZU5ld1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21hc3RlckZvbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI21haW4taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuI2FsbC10b2RvcyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZm9sZGVycy1jb250YWluZXIgPiBsaSwgI3RvZG8tbGlzdC1jb250YWluZXIgPiBkaXYsICNhZGQtbmV3LXRvZG8sICNjcmVhdGUtbmV3LWZvbGRlciwgI2NhbmNlbC1uZXctdG9kbyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2JvZHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwdnc7XFxuICAgIHBhZGRpbmctbGVmdDogNGVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbiN0b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG4gICAgbWluLXdpZHRoOiA4MHZ3O1xcbiAgICBcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgXFxuICAgXFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbiN0b2RvLWV4cGFuZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8ta2V5LCAudG9kby12YWx1ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRvZG8ta2V5IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXG4gICAgZGlzcGxheTogbm9uZTsgXFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIHotaW5kZXg6IDc7XFxufVxcblxcbiN0b2RvLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbiNhZGQtbmV3LXRvZG8ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVlbTtcXG4gICAgcGFkZGluZzogMC44ZW07XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcbn1cXG5cXG4jZm9sZGVycy1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuI2NyZWF0ZS1uZXctZm9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC43ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI2ZvbGRlcnMtY29udGFpbmVyID4gbGkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4jZm9sZGVycy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG59XFxuXFxuI2NhbmNlbC1uZXctdG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG1pbi13aWR0aDogOTUlO1xcbn1cXG5cXG4jbmV3LXRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5lZGl0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucmVtb3ZlIHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjVlbTtcXG59XFxuXFxuI2FsbC10b2RvcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI25ldy1mb2xkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbiNuZXctZm9sZGVyLWlucHV0IHtcXG4gICAgd2lkdGg6IDEwZW07XFxufVxcblxcbiNhZGQtbmV3LWZvbGRlcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDAlO1xcbiAgICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZUFBZTs7SUFFZixhQUFhOzs7QUFHakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI21haW4taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuI2FsbC10b2RvcyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZm9sZGVycy1jb250YWluZXIgPiBsaSwgI3RvZG8tbGlzdC1jb250YWluZXIgPiBkaXYsICNhZGQtbmV3LXRvZG8sICNjcmVhdGUtbmV3LWZvbGRlciwgI2NhbmNlbC1uZXctdG9kbyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2JvZHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwdnc7XFxuICAgIHBhZGRpbmctbGVmdDogNGVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbiN0b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG4gICAgbWluLXdpZHRoOiA4MHZ3O1xcbiAgICBcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgXFxuICAgXFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbiN0b2RvLWV4cGFuZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8ta2V5LCAudG9kby12YWx1ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRvZG8ta2V5IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXG4gICAgZGlzcGxheTogbm9uZTsgXFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIHotaW5kZXg6IDc7XFxufVxcblxcbiN0b2RvLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbiNhZGQtbmV3LXRvZG8ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVlbTtcXG4gICAgcGFkZGluZzogMC44ZW07XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcbn1cXG5cXG4jZm9sZGVycy1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuI2NyZWF0ZS1uZXctZm9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC43ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI2ZvbGRlcnMtY29udGFpbmVyID4gbGkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4jZm9sZGVycy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG59XFxuXFxuI2NhbmNlbC1uZXctdG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG1pbi13aWR0aDogOTUlO1xcbn1cXG5cXG4jbmV3LXRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5lZGl0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucmVtb3ZlIHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjVlbTtcXG59XFxuXFxuI2FsbC10b2RvcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI25ldy1mb2xkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbiNuZXctZm9sZGVyLWlucHV0IHtcXG4gICAgd2lkdGg6IDEwZW07XFxufVxcblxcbiNhZGQtbmV3LWZvbGRlcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDAlO1xcbiAgICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdG9kb0Z1bmN0aW9ucyB9IGZyb20gXCIuL3RvZG9GdW5jdGlvbnNcIjtcbmltcG9ydCB7IG1hc3RlckZvbGRlciB9IGZyb20gJy4vbWFzdGVyRm9sZGVyJztcblxuY29uc3QgbmV3VG9kb1RlbXBsYXRlID0gKFRpdGxlLCBEZXNjcmlwdGlvbiwgUHJpb3JpdHksIERhdGUsIFRpbWUsIEZvbGRlciwgaWROdW1iZXIpID0+IHtcbiAgICByZXR1cm4geyBUaXRsZSwgRGVzY3JpcHRpb24sIFByaW9yaXR5LCBEYXRlLCBUaW1lLCBGb2xkZXIsIGlkTnVtYmVyIH1cbn1cblxuY29uc3QgY3JlYXRlTmV3VG9kbyA9IChuZXdUb2RvKSA9PiB7IFxuICAgIGNvbnN0IHVzZUZ1bmN0aW9uID0gdG9kb0Z1bmN0aW9ucygpO1xuICAgIG5ld1RvZG8gPSBuZXdUb2RvVGVtcGxhdGUoXG4gICAgICAgIGAke3VzZUZ1bmN0aW9uLnRpdGxlSW5wdXQudmFsdWV9YCwgXG4gICAgICAgIGAke3VzZUZ1bmN0aW9uLmRlc2NyaXB0aW9uSW5wdXQudmFsdWV9YCwgXG4gICAgICAgIGAke3VzZUZ1bmN0aW9uLnByaW9yaXR5RHJvcGRvd24udmFsdWV9YCwgXG4gICAgICAgIGAke3VzZUZ1bmN0aW9uLmRhdGVJbnB1dC52YWx1ZX1gLCBgJHt1c2VGdW5jdGlvbi50aW1lSW5wdXQudmFsdWV9YCwgXG4gICAgICAgIGAke3VzZUZ1bmN0aW9uLmZvbGRlckRyb3Bkb3duLnZhbHVlfWAsIGAke3VzZUZ1bmN0aW9uLmNyZWF0ZUlkTnVtYmVyKCl9YFxuICAgICAgICApO1xuICAgIG1hc3RlckZvbGRlci50b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWFzdGVyRm9sZGVyU3RvcmVcIiwgSlNPTi5zdHJpbmdpZnkobWFzdGVyRm9sZGVyKSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5ld1RvZG8sIG5ld1RvZG9UZW1wbGF0ZSB9XG5cblxuXG5cbiIsImltcG9ydCB7IGNyZWF0ZU5ld1RvZG8gfSBmcm9tIFwiLi9jcmVhdGVOZXdUb2RvXCI7XG5pbXBvcnQgeyB0b2RvRnVuY3Rpb25zIH0gZnJvbSBcIi4vdG9kb0Z1bmN0aW9uc1wiO1xuXG5jb25zdCBjcmVhdGVEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZUZ1bmN0aW9uID0gdG9kb0Z1bmN0aW9ucygpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgIGNvbnN0IG5ld1RvZG9TY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1zY3JlZW4nKTtcblxuICAgIGNvbnN0IGNyZWF0ZU1haW5IZWFkZXIgPSAobWFpbkZvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG1haW5IZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluSGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi1oZWFkZXInKTtcbiAgICAgICAgbmV3VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1uZXctdG9kbycpO1xuICAgICAgICBtYWluSGVhZGVyVGV4dC5pbm5lclRleHQgPSBcIlRPRE8gQXBwXCI7XG4gICAgICAgIG5ld1RvZG9CdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgTmV3IFRvZG9cIjtcbiAgICAgICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChtYWluSGVhZGVyVGV4dCk7XG4gICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0J1dHRvbik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG5cbiAgICAgICAgbWFpbkhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJhZGQtbmV3LXRvZG9cIikge1xuICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1RvZG9TY3JlZW4obWFpbkZvbGRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kb0xpc3REaXNwbGF5ID0gKHRvZG9Gb2xkZXJOYW1lLCB0b2RvRm9sZGVyLCBtYWluRm9sZGVyKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0LWNvbnRhaW5lcicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy9oaWRlVG9kb1NjcmVlbigpO1xuICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHktY29udGFpbmVyJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlcyB0b2RvIGNvbnRhaW5lciBhbmQgaGVhZGluZ1xuICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgdG9kb0Rpc3BsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke3RvZG9Gb2xkZXJOYW1lfWApO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRvZG9EaXNwbGF5SGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lci1oZWFkaW5nJyk7XG4gICAgICAgIHRvZG9EaXNwbGF5SGVhZGluZy5pbm5lclRleHQgPSB0b2RvRm9sZGVyTmFtZTtcbiAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb0Rpc3BsYXlIZWFkaW5nKTtcblxuICAgICAgICAvLyBDcmVhdGVzIHRvZG8gY29udGFpbmVycyBhbmQgYXR0YWNoZWQgYnV0dG9ucy9mZWF0dXJlc1xuICAgICAgICB0b2RvRm9sZGVyLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0b2RvRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdG9kb0RhdGEuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RvZG8uaWROdW1iZXJ9YCk7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdG9kby1jb250YWluZXIgJHt0b2RvLmlkTnVtYmVyfWApO1xuXG4gICAgICAgICAgICBjb25zdCB0b2RvRXhwYW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvZG9FeHBhbmRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRvZG8tZXhwYW5kZXJgKTtcbiAgICAgICAgICAgIHRvZG9FeHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdG9kb0V4cGFuZGVyLnN0eWxlLmZsZXhXcmFwID0gJ3dyYXAnO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModG9kbykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gXCJpZE51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0tleXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvVmFsdWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdG9kb0tleXMuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0b2RvLWtleWApXG4gICAgICAgICAgICAgICAgdG9kb1ZhbHVlcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRvZG8tdmFsdWVgKTtcbiAgICAgICAgICAgICAgICB0b2RvS2V5cy5pbm5lclRleHQgPSBgJHtrZXl9OmA7XG4gICAgICAgICAgICAgICAgaWYgKCF0b2RvW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1ZhbHVlcy5pbm5lclRleHQgPSAnLSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIFxuICAgICAgICAgICAgICAgIHRvZG9WYWx1ZXMuaW5uZXJUZXh0ID0gdG9kb1trZXldO1xuICAgICAgICAgICAgICAgIHRvZG9FeHBhbmRlci5hcHBlbmRDaGlsZCh0b2RvS2V5cyk7XG4gICAgICAgICAgICAgICAgdG9kb0V4cGFuZGVyLmFwcGVuZENoaWxkKHRvZG9WYWx1ZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRvZG9EYXRhLmlubmVyVGV4dCA9IGAke3RvZG8uVGl0bGV9IC0gJHt0b2RvLkRhdGV9ICR7dG9kby5UaW1lfWA7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgZWRpdCAke3RvZG8uaWROdW1iZXJ9YCk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmlubmVyVGV4dCA9IFwiRWRpdFwiO1xuXG4gICAgICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHJlbW92ZSAke3RvZG8uaWROdW1iZXJ9YCk7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24uaW5uZXJUZXh0ID0gXCJSZW1vdmVcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGF0YSk7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FeHBhbmRlcik7XG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpOyBcblxuICAgICAgICAgICAgdG9kb0RhdGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IHRvZG8uaWROdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9FeHBhbmRlci5zdHlsZS5kaXNwbGF5ID09IFwiZmxleFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvRXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgXG4gICAgICAgICAgICAgICAgICAgIHRvZG9FeHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgICAgICAgIFxuXG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIG1haW5Gb2xkZXIudG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMV0gPT0gdG9kby5pZE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Gb2xkZXIudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0NvbnRhaW5lci5jbGFzc0xpc3RbMF0gPT0gXCJBbGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVUb2RvTGlzdERpc3BsYXkoJ0FsbCBUb2RvcycsIG1haW5Gb2xkZXIudG9kb3MsIG1haW5Gb2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUb2RvcyhtYWluRm9sZGVyLCB0b2RvLkZvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSAgXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtYXN0ZXJGb2xkZXJTdG9yZVwiLCBKU09OLnN0cmluZ2lmeShtYWluRm9sZGVyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5Gb2xkZXIudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMV0gPT0gdG9kby5pZE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUVkaXRTY3JlZW4odG9kbywgbWFpbkZvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLWVkaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWRpdEJ1dHRvbi5jbGFzc0xpc3QubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvLWFjdGlvbi1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRvZG8uaWROdW1iZXIpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0b2RvLmlkTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGlzcGxheSk7ICBcbiAgICB9XG5cbiAgICBjb25zdCBnZXRGb2xkZXJIZWFkaW5ncyA9IChtYWluRm9sZGVyKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvbGRlckhlYWRpbmdzXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvbGRlckhlYWRpbmdzXCIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmb2xkZXJzID0gW107XG4gICAgICAgICAgICBtYWluRm9sZGVyLnRvZG9zLmZvckVhY2goKHRvZG8gPT4ge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRvZG8pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PSBcIkZvbGRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJzLnB1c2godG9kb1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSkgXG4gICAgICAgICAgICBjb25zdCB1bmlxdWVGb2xkZXJzID0gWy4uLm5ldyBTZXQoZm9sZGVycyldO1xuICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZUZvbGRlcnNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFNpZGViYXJGb2xkZXJzID0gKCkgPT4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb2xkZXJIZWFkaW5nc1wiKSkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb2xkZXJIZWFkaW5nc1wiKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZm9sZGVycyA9IFtdO1xuICAgICAgICAgICAgY29uc3Qgc2lkZWJhckZvbGRlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVycy1jb250YWluZXInKTtcbiAgICAgICAgICAgIHNpZGViYXJGb2xkZXJzLmNoaWxkTm9kZXMuZm9yRWFjaChsaXN0aW5nID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGluZy50YWdOYW1lID09ICdMSScpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9sZGVycy5wdXNoKGxpc3RpbmcuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIGZvbGRlcnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRBbGxGb2xkZXJzID0gKG1haW5Gb2xkZXIpID0+IHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9sZGVySGVhZGluZ3NcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9sZGVySGVhZGluZ3NcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdG9kb0ZvbGRlcnMgPSBnZXRGb2xkZXJIZWFkaW5ncyhtYWluRm9sZGVyKTtcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJGb2xkZXJzID0gZ2V0U2lkZWJhckZvbGRlcnMoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkRm9sZGVycyA9IHNpZGViYXJGb2xkZXJzLmNvbmNhdCh0b2RvRm9sZGVycyk7XG4gICAgICAgICAgICBjb25zdCB1bmlxdWVGb2xkZXJzID0gWy4uLm5ldyBTZXQoY29tYmluZWRGb2xkZXJzKV07XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZvbGRlckhlYWRpbmdzXCIsIEpTT04uc3RyaW5naWZ5KHVuaXF1ZUZvbGRlcnMpKTtcbiAgICAgICAgICAgIHJldHVybiB1bmlxdWVGb2xkZXJzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRvZG9zID0gKG1haW5Gb2xkZXIsIGZvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJGb2xkZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlcnMtY29udGFpbmVyJyk7XG4gICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgIGxldCB0b2RvTGlzdCA9IFtdO1xuICAgICAgICBsZXQgZm9sZGVyTmFtZSA9ICcnO1xuICAgICAgICBzaWRlYmFyRm9sZGVycy5jaGlsZE5vZGVzLmZvckVhY2goZm9sZGVyID0+IHtcbiAgICAgICAgICAgIGlmIChmb2xkZXIuY2xhc3NMaXN0ID09ICdhY3RpdmUnKSB7XG4gICAgICAgICAgICAgICAgZm9sZGVyTmFtZSA9IGZvbGRlci5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFpbkZvbGRlci50b2Rvcy5mb3JFYWNoKCh0b2RvID0+IHtcbiAgICAgICAgICAgIGlmICh0b2RvLkZvbGRlciA9PSBmb2xkZXIpIHtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIGNyZWF0ZVRvZG9MaXN0RGlzcGxheShmb2xkZXJOYW1lLCB0b2RvTGlzdCwgbWFpbkZvbGRlcik7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU2lkZWJhciA9IChtYWluRm9sZGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9keUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JvZHktY29udGFpbmVyJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9keUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlYmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2lkZWJhcicpO1xuXG4gICAgICAgIGNvbnN0IGZvbGRlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9sZGVyc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZvbGRlcnMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgZm9sZGVyc0NvbnRhaW5lckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBmb2xkZXJzQ29udGFpbmVySGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZvbGRlcnMtaGVhZGluZycpO1xuICAgICAgICBmb2xkZXJzQ29udGFpbmVySGVhZGluZy5pbm5lclRleHQgPSBcIkZvbGRlcnNcIjtcbiAgICAgICAgZm9sZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb2xkZXJzQ29udGFpbmVySGVhZGluZyk7XG5cbiAgICAgICAgY29uc3QgYWxsVG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWxsVG9kb3NDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhbGwtdG9kb3MnKTtcbiAgICAgICAgYWxsVG9kb3NDb250YWluZXIuaW5uZXJUZXh0ID0gXCJBbGwgVG9kb3NcIjtcbiAgICAgICAgZm9sZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhbGxUb2Rvc0NvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlTmV3Rm9sZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWF0ZU5ld0ZvbGRlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NyZWF0ZS1uZXctZm9sZGVyJyk7XG4gICAgICAgIGNyZWF0ZU5ld0ZvbGRlckJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBGb2xkZXJcIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVuaXF1ZUZvbGRlcnMgPSBnZXRGb2xkZXJIZWFkaW5ncyhtYWluRm9sZGVyKTsgIFxuXG4gICAgICAgIHVuaXF1ZUZvbGRlcnMuZm9yRWFjaChmb2xkZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9sZGVyTGlzdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBmb2xkZXJMaXN0aW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBmb2xkZXIpO1xuICAgICAgICAgICAgZm9sZGVyTGlzdGluZy5pbm5lclRleHQgPSBmb2xkZXI7XG4gICAgICAgICAgICBmb2xkZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvbGRlckxpc3RpbmcpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGZvbGRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3Rm9sZGVyQnV0dG9uKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChmb2xkZXJzQ29udGFpbmVyKTtcbiAgICAgICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKTsgXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZVRvZG9TY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBuZXdUb2RvU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc2hvd1RvZG9TY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBuZXdUb2RvU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3B1bGF0ZUZvbGRlckRyb3Bkb3duID0gKG1haW5Gb2xkZXIpID0+IHtcbiAgICAgICAgY29uc3QgdW5pcXVlRm9sZGVycyA9IGdldEFsbEZvbGRlcnMobWFpbkZvbGRlcik7XG4gICAgICAgIGNvbnN0IGZvbGRlckRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1kcm9wZG93bicpO1xuICAgICAgICBmb2xkZXJEcm9wZG93bi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB1bmlxdWVGb2xkZXJzLmZvckVhY2goZm9sZGVyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZvbGRlckxpc3RpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBvcHRpb25gKTtcbiAgICAgICAgICAgIG5ld0ZvbGRlckxpc3RpbmcuaW5uZXJUZXh0ID0gZm9sZGVyO1xuICAgICAgICAgICAgbmV3Rm9sZGVyTGlzdGluZy52YWx1ZSA9IGZvbGRlcjtcbiAgICAgICAgICAgIGZvbGRlckRyb3Bkb3duLmFwcGVuZENoaWxkKG5ld0ZvbGRlckxpc3RpbmcpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1NpZGViYXJGb2xkZXIgPSAobWFpbkZvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCB1bmlxdWVGb2xkZXJzID0gZ2V0QWxsRm9sZGVycyhtYWluRm9sZGVyKTtcbiAgICAgICAgY29uc3QgbmV3Rm9sZGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWZvbGRlci1pbnB1dCcpXG4gICAgICAgIGxldCBuZXdGb2xkZXJFeGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdW5pcXVlRm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgICAgICBpZiAobmV3Rm9sZGVySW5wdXQudmFsdWUgPT0gZm9sZGVyKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGb2xkZXIgYWxyZWFkeSBleGlzdHMuXCIpO1xuICAgICAgICAgICAgICAgIG5ld0ZvbGRlckV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKG5ld0ZvbGRlckV4aXN0cyA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdW5pcXVlRm9sZGVycy5wdXNoKG5ld0ZvbGRlcklucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZm9sZGVySGVhZGluZ3NcIiwgSlNPTi5zdHJpbmdpZnkodW5pcXVlRm9sZGVycykpO1xuICAgICAgICAgICAgY29uc3QgbmV3Rm9sZGVyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1uZXctZm9sZGVyJyk7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXJMaXN0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVycy1jb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZvbGRlclNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZm9sZGVyLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZm9sZGVyTGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgbmV3Rm9sZGVySW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgZm9sZGVyTGlzdGluZy5pbm5lclRleHQgPSBuZXdGb2xkZXJJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGZvbGRlcnNDb250YWluZXIuaW5zZXJ0QmVmb3JlKGZvbGRlckxpc3RpbmcsIG5ld0ZvbGRlckJ1dHRvbik7XG4gICAgICAgICAgICBuZXdGb2xkZXJTY3JlZW4uY2xhc3NMaXN0ID0gXCJoaWRlXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVOZXdUb2RvU2NyZWVuID0gKG1haW5Gb2xkZXIpID0+IHtcbiAgICAgICAgdXNlRnVuY3Rpb24ucmVzZXRJbnB1dFZhbHVlcygpO1xuICAgICAgICBsZXQgY29uZmlybVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvLWFjdGlvbi1idXR0b24nKTtcbiAgICAgICAgY29uZmlybVRvZG9bMF0uc2V0QXR0cmlidXRlKCdpZCcsICdjb25maXJtLXRvZG8nKTtcbiAgICAgICAgY29uZmlybVRvZG9bMF0uaW5uZXJUZXh0ID0gJ0FkZCBUb2RvJztcbiAgICAgICAgc2hvd1RvZG9TY3JlZW4oKTtcbiAgICAgICAgcG9wdWxhdGVGb2xkZXJEcm9wZG93bihtYWluRm9sZGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVOZXdGb2xkZXJTY3JlZW4gPSAobWFpbkZvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCBmb2xkZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlcnMtY29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdGb2xkZXJTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3Rm9sZGVyU2NyZWVuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LWZvbGRlci1jb250YWluZXInKTtcbiAgICAgICAgbmV3Rm9sZGVyU2NyZWVuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGlkZScpO1xuXG4gICAgICAgIGNvbnN0IG5ld0ZvbGRlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmV3Rm9sZGVySW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduZXctZm9sZGVyLWlucHV0Jyk7XG4gICAgICAgIG5ld0ZvbGRlcklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIkZvbGRlclwiKTtcblxuICAgICAgICBjb25zdCBhZGRGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkRm9sZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLW5ldy1mb2xkZXInKTtcbiAgICAgICAgYWRkRm9sZGVyLmlubmVyVGV4dCA9IFwiK1wiO1xuXG4gICAgICAgIG5ld0ZvbGRlclNjcmVlbi5hcHBlbmRDaGlsZChuZXdGb2xkZXJJbnB1dCk7XG4gICAgICAgIG5ld0ZvbGRlclNjcmVlbi5hcHBlbmRDaGlsZChhZGRGb2xkZXIpO1xuICAgICAgICBmb2xkZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0ZvbGRlclNjcmVlbik7XG5cbiAgICAgICAgZm9sZGVyc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJjcmVhdGUtbmV3LWZvbGRlclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZvbGRlclNjcmVlbi5jbGFzc0xpc3QgPT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Rm9sZGVyU2NyZWVuLmNsYXNzTGlzdCA9ICdoaWRlJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSBuZXdGb2xkZXJTY3JlZW4uY2xhc3NMaXN0ID0gXCJhY3RpdmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImFkZC1uZXctZm9sZGVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5ld0ZvbGRlcklucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkTmV3U2lkZWJhckZvbGRlcihtYWluRm9sZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVFZGl0U2NyZWVuID0gKHRvZG8sIG1haW5Gb2xkZXIpID0+IHtcbiAgICAgICAgcG9wdWxhdGVGb2xkZXJEcm9wZG93bihtYWluRm9sZGVyKTtcbiAgICAgICAgdXNlRnVuY3Rpb24uZWRpdFRvZG9JbnB1dERhdGEodG9kbyk7XG4gICAgICAgIGxldCBjb25maXJtRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG8tYWN0aW9uLWJ1dHRvbicpO1xuICAgICAgICBjb25maXJtRWRpdFswXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbmZpcm0tZWRpdCcpO1xuICAgICAgICBjb25maXJtRWRpdFswXS5pbm5lclRleHQgPSAnRWRpdCc7XG4gICAgICAgIHNob3dUb2RvU2NyZWVuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSAobWFpbkZvbGRlcikgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJjb25maXJtLXRvZG9cIikge1xuICAgICAgICAgICAgICAgIGlmICghdXNlRnVuY3Rpb24udGl0bGVJbnB1dC52YWx1ZSB8fCAhdXNlRnVuY3Rpb24uZm9sZGVyRHJvcGRvd24udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0IChcIlBsZWFzZSBhZGQgYSBUaXRsZSBhbmQgRm9sZGVyIGZvciB5b3VyIHRvZG8uXCIpXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9sZGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXJzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGZvbGRlcnNDb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKGxpc3RpbmcgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGluZy5pZCA9PSBcImFsbC10b2Rvc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlVG9kb1NjcmVlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3RDb250YWluZXI/LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVG9kb0xpc3REaXNwbGF5KCdBbGwgVG9kb3MnLCBtYWluRm9sZGVyLnRvZG9zLCBtYWluRm9sZGVyKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpc3RpbmcuY2xhc3NMaXN0ID09ICdhY3RpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlVG9kb1NjcmVlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVRvZG9zKG1haW5Gb2xkZXIsIGxpc3RpbmcuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImNhbmNlbC1uZXctdG9kb1wiKSB7XG4gICAgICAgICAgICAgICAgaGlkZVRvZG9TY3JlZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvbGRlcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVycy1jb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHVuaXF1ZUZvbGRlcnMgPSBnZXRBbGxGb2xkZXJzKG1haW5Gb2xkZXIpO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IFwiYWxsLXRvZG9zXCIpIHtcbiAgICAgICAgICAgICAgICBmb2xkZXJzQ29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaCgobGlzdGluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaXN0aW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdENvbnRhaW5lcj8ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgY3JlYXRlVG9kb0xpc3REaXNwbGF5KCdBbGwgVG9kb3MnLCBtYWluRm9sZGVyLnRvZG9zLCBtYWluRm9sZGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pcXVlRm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09ICdhbGwtdG9kb3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbGRlcnNDb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKChsaXN0aW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0aW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IGZvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICBmb2xkZXJzQ29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaCgobGlzdGluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGluZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VG9kb3MobWFpbkZvbGRlciwgZm9sZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IFwiY29uZmlybS1lZGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbkZvbGRlci50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFsxXSA9PSB0b2RvLmlkTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlRnVuY3Rpb24uZWRpdFRvZG8odG9kbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVRvZG9TY3JlZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJIZWFkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1oZWFkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9Db250YWluZXIuY2xhc3NMaXN0WzBdID09IFwiQWxsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVG9kb0xpc3REaXNwbGF5KCdBbGwgVG9kb3MnLCBtYWluRm9sZGVyLnRvZG9zLCBtYWluRm9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvZG9Db250YWluZXIuY2xhc3NMaXN0WzBdICE9PSB0b2RvLkZvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VG9kb3MobWFpbkZvbGRlciwgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3RbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUb2RvcyhtYWluRm9sZGVyLCB0b2RvLkZvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1hc3RlckZvbGRlclN0b3JlXCIsIEpTT04uc3RyaW5naWZ5KG1haW5Gb2xkZXIpKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlTWFpbkhlYWRlcixcbiAgICAgICAgY3JlYXRlVG9kb0xpc3REaXNwbGF5LFxuICAgICAgICBjcmVhdGVTaWRlYmFyLFxuICAgICAgICBjcmVhdGVOZXdGb2xkZXJTY3JlZW4sXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLFxuICAgIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlRGlzcGxheSB9OyIsImxldCBtYXN0ZXJGb2xkZXIgPSB7fTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWFzdGVyRm9sZGVyU3RvcmUnKSkge1xuICAgIG1hc3RlckZvbGRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtYXN0ZXJGb2xkZXJTdG9yZVwiKSk7IFxufSBlbHNlIHtcbiAgICBtYXN0ZXJGb2xkZXIgPSB7IFxuICAgICAgICB0b2RvczogW10sXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgbWFzdGVyRm9sZGVyIH07IiwiY29uc3QgdG9kb0Z1bmN0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHByaW9yaXR5RHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktZHJvcGRvd24nKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpO1xuICAgIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lLWlucHV0Jyk7XG4gICAgY29uc3QgZm9sZGVyRHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLWRyb3Bkb3duJyk7XG5cbiAgICBjb25zdCBjcmVhdGVJZE51bWJlciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlkTnVtYmVyID0gKyBuZXcgRGF0ZSgpO1xuICAgICAgICByZXR1cm4gaWROdW1iZXJcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0VG9kb0lucHV0RGF0YSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0b2RvLlRpdGxlO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdG9kby5EZXNjcmlwdGlvbjtcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gdG9kby5EYXRlO1xuICAgICAgICB0aW1lSW5wdXQudmFsdWUgPSB0b2RvLlRpbWU7XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24udmFsdWUgPSB0b2RvLlByaW9yaXR5O1xuICAgICAgICBmb2xkZXJEcm9wZG93bi52YWx1ZSA9IHRvZG8uRm9sZGVyXG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICBpZiAoIWZvbGRlckRyb3Bkb3duLnZhbHVlIHx8ICF0aXRsZUlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2UgYWRkIGEgRm9sZGVyIGFuZCBUaXRsZSBmb3IgeW91ciB0b2RvLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0b2RvLlRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgdG9kby5EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgIHRvZG8uRGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgdG9kby5UaW1lID0gdGltZUlucHV0LnZhbHVlO1xuICAgICAgICB0b2RvLlByaW9yaXR5ID0gcHJpb3JpdHlEcm9wZG93bi52YWx1ZTtcbiAgICAgICAgdG9kby5Gb2xkZXIgPSBmb2xkZXJEcm9wZG93bi52YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldElucHV0VmFsdWVzID0gKCkgPT4ge1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHRpbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBwcmlvcml0eURyb3Bkb3duLnZhbHVlID0gJyc7XG4gICAgICAgIGZvbGRlckRyb3Bkb3duLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlSWROdW1iZXIsXG4gICAgICAgIGVkaXRUb2RvSW5wdXREYXRhLFxuICAgICAgICBlZGl0VG9kbyxcbiAgICAgICAgcmVzZXRJbnB1dFZhbHVlcyxcbiAgICAgICAgdGl0bGVJbnB1dCxcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICAgICAgZGF0ZUlucHV0LFxuICAgICAgICB0aW1lSW5wdXQsXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24sXG4gICAgICAgIGZvbGRlckRyb3Bkb3duLFxuICAgIH1cbn1cblxuZXhwb3J0IHsgdG9kb0Z1bmN0aW9ucyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRGlzcGxheSB9IGZyb20gJy4vbW9kdWxlcy9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgbWFzdGVyRm9sZGVyIH0gZnJvbSAnLi9tb2R1bGVzL21hc3RlckZvbGRlcic7XG5cbmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWFzdGVyRm9sZGVyU3RvcmVcIiwgSlNPTi5zdHJpbmdpZnkobWFzdGVyRm9sZGVyKSk7XG5cbmNvbnN0IGRpc3BsYXkgPSBjcmVhdGVEaXNwbGF5KCk7XG5kaXNwbGF5LmNyZWF0ZU1haW5IZWFkZXIobWFzdGVyRm9sZGVyKTtcbmRpc3BsYXkuY3JlYXRlU2lkZWJhcihtYXN0ZXJGb2xkZXIpO1xuZGlzcGxheS5jcmVhdGVUb2RvTGlzdERpc3BsYXkoJ0FsbCBUb2RvcycsIG1hc3RlckZvbGRlci50b2RvcywgbWFzdGVyRm9sZGVyKTtcbmRpc3BsYXkuY3JlYXRlTmV3Rm9sZGVyU2NyZWVuKG1hc3RlckZvbGRlcik7XG5kaXNwbGF5LmV2ZW50TGlzdGVuZXJzKG1hc3RlckZvbGRlcik7XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9