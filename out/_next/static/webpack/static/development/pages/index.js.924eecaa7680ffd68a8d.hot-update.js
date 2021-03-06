webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DailyMatch/index.js":
/*!****************************************!*\
  !*** ./components/DailyMatch/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Match */ "./components/DailyMatch/Match.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Title */ "./components/Title.js");
/* harmony import */ var _data_players__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/players */ "./data/players.js");
/* harmony import */ var _data_daily_match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/daily_match */ "./data/daily_match.js");

var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/DailyMatch/index.js";






var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "DailyMatch__Container",
  componentId: "sc-7bvmbn-0"
})(["background:url(\"/static/karen-pattern.webp\") repeat,radial-gradient(60vw at 50% 56.73%,#4fb0aa 0%,#334d90 100%);clip-path:polygon(0 0,100% 0,100% 100%,0 calc(100% - 4vw));overflow:hidden;padding:200px 15px;position:relative;z-index:400;.no-webp &{background:url(\"/static/karen-pattern.png\") repeat,radial-gradient(50vw at 50% 56.73%,#4fb0aa 0%,#334d90 100%);}"]);
var Matches = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DailyMatch__Matches",
  componentId: "sc-7bvmbn-1"
})(["align-items:center;display:flex;flex-direction:row;justify-content:center;@media (max-width:973px){flex-direction:column;}"]);
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DailyMatch__Divider",
  componentId: "sc-7bvmbn-2"
})(["align-self:stretch;background:", ";margin:0 100px;width:3px;@media (max-width:973px){height:3px;margin:100px auto;width:80%;}"], function (props) {
  return props.theme.yellow;
});
var TitleYellow = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Title__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "DailyMatch__TitleYellow",
  componentId: "sc-7bvmbn-3"
})(["color:", ";"], function (props) {
  return props.theme.yellow;
});

var DailyMatch = function DailyMatch(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleYellow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Which is the best ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "MLP:FiM"), " episode?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Matches, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Match__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _data_daily_match__WEBPACK_IMPORTED_MODULE_6__["default"][0], {
    playerA: _data_players__WEBPACK_IMPORTED_MODULE_5__["default"][_data_daily_match__WEBPACK_IMPORTED_MODULE_6__["default"][0].playerA],
    playerB: _data_players__WEBPACK_IMPORTED_MODULE_5__["default"][_data_daily_match__WEBPACK_IMPORTED_MODULE_6__["default"][0].playerB],
    toggleModal: props.toggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Match__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _data_daily_match__WEBPACK_IMPORTED_MODULE_6__["default"][1], {
    playerA: _data_players__WEBPACK_IMPORTED_MODULE_5__["default"][_data_daily_match__WEBPACK_IMPORTED_MODULE_6__["default"][1].playerA],
    playerB: _data_players__WEBPACK_IMPORTED_MODULE_5__["default"][_data_daily_match__WEBPACK_IMPORTED_MODULE_6__["default"][1].playerB],
    toggleModal: props.toggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DailyMatch);

/***/ })

})
//# sourceMappingURL=index.js.924eecaa7680ffd68a8d.hot-update.js.map