webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tournament/Bracket.js":
/*!******************************************!*\
  !*** ./components/Tournament/Bracket.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Match */ "./components/Tournament/Match.js");
/* harmony import */ var _data_players__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/players */ "./data/players.js");


var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/Tournament/Bracket.js";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Bracket__Container",
  componentId: "kzmh6t-0"
})(["display:grid;grid-template-columns:265px 10px 265px 10px 265px;grid-gap:20px;justify-content:center;overflow-x:scroll;@media (max-width:900px){justify-content:flex-start;}"]);
var ContainerTwoRounds = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(Container).withConfig({
  displayName: "Bracket__ContainerTwoRounds",
  componentId: "kzmh6t-1"
})(["grid-template-columns:265px 10px 265px;background:red;"]);
var BraceColumn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Bracket__BraceColumn",
  componentId: "kzmh6t-2"
})(["display:flex;flex-direction:column;justify-content:space-around;"]);
var Brace = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Bracket__Brace",
  componentId: "kzmh6t-3"
})(["border-top:1px solid;border-right:1px solid;border-bottom:1px solid;height:calc(57px + 50px);width:9px;&:not(:last-child){margin-bottom:50px;}"]);
var BraceLevel1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(Brace).withConfig({
  displayName: "Bracket__BraceLevel1",
  componentId: "kzmh6t-4"
})(["height:calc(57px + 50px);"]);
var BraceLevel2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(Brace).withConfig({
  displayName: "Bracket__BraceLevel2",
  componentId: "kzmh6t-5"
})(["height:calc(57px + 155px);"]);
var RoundColumn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Bracket__RoundColumn",
  componentId: "kzmh6t-6"
})(["display:flex;flex-direction:column;justify-content:space-around;"]);

var Round = function Round(_ref) {
  var matches = _ref.matches,
      color = _ref.color;
  var unknownId = 0;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RoundColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, matches.map(function (m) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Match__WEBPACK_IMPORTED_MODULE_4__["default"], {
      playerA: _data_players__WEBPACK_IMPORTED_MODULE_5__["default"][m.playerA],
      playerB: _data_players__WEBPACK_IMPORTED_MODULE_5__["default"][m.playerB],
      color: color,
      key: m.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    });
  }));
};

var TwoRounds = function TwoRounds(_ref2) {
  var round1 = _ref2.round1,
      round2 = _ref2.round2,
      round3 = _ref2.round3,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? null : _ref2$color,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["round1", "round2", "round3", "color"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContainerTwoRounds, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Round, {
    matches: round1,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BraceColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BraceLevel1, {
    style: {
      borderColor: color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Round, {
    matches: round2,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }));
};

var ThreeRounds = function ThreeRounds(_ref3) {
  var round1 = _ref3.round1,
      round2 = _ref3.round2,
      round3 = _ref3.round3,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? null : _ref3$color,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["round1", "round2", "round3", "color"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Round, {
    matches: round1,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BraceColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BraceLevel1, {
    style: {
      borderColor: color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BraceLevel1, {
    style: {
      borderColor: color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Round, {
    matches: round2,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BraceColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BraceLevel2, {
    style: {
      borderColor: color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Round, {
    matches: round3,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }));
};

var Bracket = function Bracket(props) {
  if (props.round3) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThreeRounds, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }));
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TwoRounds, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Bracket);

/***/ })

})
//# sourceMappingURL=index.js.70b3379b422a956d6ac8.hot-update.js.map