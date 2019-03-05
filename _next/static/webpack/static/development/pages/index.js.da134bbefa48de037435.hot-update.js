webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tournament/TabBar.js":
/*!*****************************************!*\
  !*** ./components/Tournament/TabBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/Tournament/TabBar.js";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "TabBar__Container",
  componentId: "sc-3x34ht-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-gap:10px;margin:0 auto 100px;max-width:650px;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "TabBar__Button",
  componentId: "sc-3x34ht-1"
})(["border-bottom:1px solid yellow;cursor:pointer;text-align:center;width:125px;"]);

var Tab = function Tab(_ref) {
  var text = _ref.text,
      color = _ref.color,
      index = _ref.index,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["text", "color", "index"]);

  // console.log(tabId);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    onClick: function onClick() {
      return props.switchTab(index);
    },
    style: {
      color: color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, text);
};

var TabBar = function TabBar(_ref2) {
  var tabs = _ref2.tabs,
      activeTab = _ref2.activeTab,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["tabs", "activeTab"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, tabs.map(function (t, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tab, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, t, {
      index: i,
      switchTab: props.switchTab,
      active: activeTab === i,
      key: t.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TabBar);

/***/ })

})
//# sourceMappingURL=index.js.da134bbefa48de037435.hot-update.js.map