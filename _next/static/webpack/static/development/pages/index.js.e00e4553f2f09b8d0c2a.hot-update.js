webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Champion/Brust.js":
/*!**************************************!*\
  !*** ./components/Champion/Brust.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/Champion/Brust.js";


var Burst = function Burst() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 10 8.4",
    style: "enable-background:new 0 0 10 8.4;",
    xmlSpace: "preserve",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "1.34,1.38 3.01,2.28 2.79,0 4.35,1.79 4.82,0.04 5.61,1.79 6.75,0.3 6.56,2.04 7.9,1.16 7.48,2.57 9.55,2.48 \n8,3.51 10,4.07 8.07,4.5 9.69,5.68 7.58,5.48 8.33,6.87 6.88,6.57 7.08,8.03 5.65,6.82 4.82,8.4 4.38,6.75 3.25,8.14 3.19,6.64 \n1.59,7.29 2.28,5.87 0.45,5.96 1.85,4.71 0,4.38 1.61,3.73 0.31,2.77 2.31,2.88 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Burst);

/***/ }),

/***/ "./components/Champion/Match.js":
false,

/***/ "./components/Champion/index.js":
/*!**************************************!*\
  !*** ./components/Champion/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Brust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Brust */ "./components/Champion/Brust.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Title */ "./components/Title.js");
/* harmony import */ var _data_players__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/players */ "./data/players.js");
/* harmony import */ var _data_daily_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/daily_match */ "./data/daily_match.js");
var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/Champion/index.js";






var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "Champion__Container",
  componentId: "vbtpxd-0"
})(["background:url(\"/static/karen-pattern.webp\") repeat,radial-gradient(60vw at 50% 56.73%,#4fb0aa 0%,#334d90 100%);clip-path:polygon(0 0,100% 0,100% 100%,0 calc(100% - 4vw));overflow:hidden;padding:200px 15px;position:relative;z-index:400;.no-webp &{background:url(\"/static/karen-pattern.png\") repeat,radial-gradient(50vw at 50% 56.73%,#4fb0aa 0%,#334d90 100%);}"]);
var Matches = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Champion__Matches",
  componentId: "vbtpxd-1"
})(["align-items:center;display:flex;flex-direction:row;justify-content:center;@media (max-width:973px){flex-direction:column;}"]);
var TitleYellow = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Title__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "Champion__TitleYellow",
  componentId: "vbtpxd-2"
})(["color:", ";"], function (props) {
  return props.theme.yellow;
});

var DailyMatch = function DailyMatch(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleYellow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Which is the best ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "MLP:FiM"), " episode?"));
};

/* harmony default export */ __webpack_exports__["default"] = (DailyMatch);

/***/ })

})
//# sourceMappingURL=index.js.e00e4553f2f09b8d0c2a.hot-update.js.map