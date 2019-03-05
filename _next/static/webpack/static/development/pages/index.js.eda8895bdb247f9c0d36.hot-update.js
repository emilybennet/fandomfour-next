webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tournament/TabBar.js":
/*!*****************************************!*\
  !*** ./components/Tournament/TabBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/Tournament/TabBar.js";


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TabBar__Container",
  componentId: "sc-3x34ht-0"
})(["display:grid;grid-template-columns:repeat(1fr,4) justify-content:center;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TabBar__Button",
  componentId: "sc-3x34ht-1"
})(["border:1px solid yellow;"]);

var TabBar = function TabBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Butt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Butt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Butt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Butt"));
};

/* harmony default export */ __webpack_exports__["default"] = (TabBar);

/***/ }),

/***/ "./components/Tournament/index.js":
/*!****************************************!*\
  !*** ./components/Tournament/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Title */ "./components/Title.js");
/* harmony import */ var _TabBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabBar */ "./components/Tournament/TabBar.js");
/* harmony import */ var _Bracket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Bracket */ "./components/Tournament/Bracket.js");
/* harmony import */ var _data_conference_moon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/conference_moon */ "./data/conference_moon.js");

var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/Tournament/index.js";




 // conferences


var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "Tournament__Container",
  componentId: "sc-18cwlee-0"
})(["padding:100px 15px;"]);

var Tournament = function Tournament(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Tournament Bracket"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TabBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Bracket__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _data_conference_moon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Tournament);

/***/ })

})
//# sourceMappingURL=index.js.eda8895bdb247f9c0d36.hot-update.js.map