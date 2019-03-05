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



var tabWidth = 100;
var tabWidthMobile = 60;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "TabBar__Container",
  componentId: "sc-3x34ht-0"
})(["margin:0 auto 100px;"]);
var TabRow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "TabBar__TabRow",
  componentId: "sc-3x34ht-1"
})(["display:flex;flex-direction:row;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "TabBar__Button",
  componentId: "sc-3x34ht-2"
})(["align-items:center;cursor:pointer;font-size:0.9em;display:flex;height:35px;justify-content:center;letter-spacing:0.1em;text-align:center;text-transform:uppercase;width:", "px;@media (max-width:525px){width:", "px;}"], tabWidth, tabWidthMobile);
var ActiveLine = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "TabBar__ActiveLine",
  componentId: "sc-3x34ht-3"
})(["height:2px;width:", "px;background:", ";transition:all 0.15s ease-in-out;@media (max-width:525px){display:none;}"], tabWidth, function (props) {
  return props.theme.blue;
});

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
      lineNumber: 48
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
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
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
        lineNumber: 59
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ActiveLine, {
    style: {
      backgroundColor: tabs[activeTab].color,
      transform: "translateX(".concat(activeTab * tabWidth, "px)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TabBar);

/***/ })

})
//# sourceMappingURL=index.js.be96804de305bfe3c7ba.hot-update.js.map