webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tournament/TabBar.js":
/*!*****************************************!*\
  !*** ./components/Tournament/TabBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/Tournament/TabBar.js";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "TabBar__Container",
  componentId: "sc-3x34ht-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-gap:10px;margin:0 auto 100px;max-width:650px;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "TabBar__Button",
  componentId: "sc-3x34ht-1"
})(["border:1px solid yellow;text-align:center;"]);

var Tab = function Tab(_ref) {
  var text = _ref.text,
      index = _ref.index,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["text", "index"]);

  console.log(index);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    onClick: function onClick(index) {
      return props.switchTab("hi");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, text);
};

var TabBar = function TabBar(_ref2) {
  var tabs = _ref2.tabs,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["tabs"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, tabs.map(function (t, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tab, {
      text: t,
      index: i,
      switchTab: props.switchTab,
      key: t,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TabBar);

/***/ })

})
//# sourceMappingURL=index.js.9808dc8e661a57c66102.hot-update.js.map