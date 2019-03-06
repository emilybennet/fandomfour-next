webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Modal/index.js":
/*!***********************************!*\
  !*** ./components/Modal/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _EpisodeId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EpisodeId */ "./components/EpisodeId.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _data_players__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/players */ "./data/players.js");

var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/Modal/index.js";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Modal__Container",
  componentId: "ki55yo-0"
})(["align-items:center;background:rgba(0,0,0,0.85);display:flex;display:none;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:1000;"]);
var ModalBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "Modal__ModalBox",
  componentId: "ki55yo-1"
})(["background:", ";border-radius:3px;color:", ";max-height:760px;max-width:900px;overflow-y:scroll;position:relative;width:900px;@media (max-height:850px){max-height:100vh;height:100vh;}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.white;
});
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header.withConfig({
  displayName: "Modal__Header",
  componentId: "ki55yo-2"
})(["align-items:flex-end;border-radius:3px 3px 0px 0px;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;flex-direction:column;justify-content:flex-end;height:275px;overflow:hidden;width:100%;picture,h2,> div{grid-column-start:1;grid-row-start:1;width:100%;}picture,> div{height:275px;}picture{display:flex;align-items:center;}"]);
var HeaderGradient = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Modal__HeaderGradient",
  componentId: "ki55yo-3"
})(["background:linear-gradient(180deg,rgba(0,0,0,0) 0%,#000000 91.71%);"]);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].footer.withConfig({
  displayName: "Modal__Footer",
  componentId: "ki55yo-4"
})(["align-items:center;display:flex;flex-direction:row;justify-content:center;padding:40px;& > a{margin:0 20px;}@media (max-width:700px){flex-direction:column;& > a{margin:0 0 20px;}}"]);
var WatchButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Modal__WatchButton",
  componentId: "ki55yo-5"
})(["padding:0 20px;"]);
var Name = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Modal__Name",
  componentId: "ki55yo-6"
})(["align-content:flex-end;color:", ";display:flex;font-family:", ";font-size:1.66em;font-weight:900;height:auto;padding:0 50px;"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.poppins;
});
var Synopsis = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Modal__Synopsis",
  componentId: "ki55yo-7"
})(["font-family ", ";font-size:1.11em;line-height:1.8;margin:20px 50px 40px;"], function (props) {
  return props.theme.poppins;
});
var Metrics = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Modal__Metrics",
  componentId: "ki55yo-8"
})(["display:grid;color:", ";font-size:0.83em;grid-template-columns:120px 1fr;grid-gap:20px 0;margin:0 50px;"], function (props) {
  return props.theme.white;
});
var MetricLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "Modal__MetricLabel",
  componentId: "ki55yo-9"
})(["color:", ";"], function (props) {
  return props.theme.yellow;
});

var Metric = function Metric(_ref) {
  var label = _ref.label,
      value = _ref.value;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MetricLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, value));
};

var CloseShape = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "Modal__CloseShape",
  componentId: "ki55yo-10"
})(["align-items:center;background:rgba(0,0,0,0.3);border-radius:15px;cursor:pointer;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;height:30px;justify-items:center;position:absolute;right:5px;top:5px;transition:background 0.15s;width:30px;&:hover{background:rgba(0,0,0,0.6);}div{background:", ";grid-column-start:1;grid-row-start:1;height:1px;width:21px;&:first-child{transform:rotate(45deg);}&:last-child{transform:rotate(-45deg);}}"], function (props) {
  return props.theme.white;
});

var CloseBtn = function CloseBtn(_ref2) {
  var action = _ref2.action;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CloseShape, {
    onClick: function onClick() {
      return action();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }));
};

var Modal = function Modal(_ref3) {
  var showModal = _ref3.showModal,
      toggleModal = _ref3.toggleModal,
      contentId = _ref3.contentId,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["showModal", "toggleModal", "contentId"]);

  var show = showModal ? "flex" : "none";
  var p = _data_players__WEBPACK_IMPORTED_MODULE_5__["default"][contentId] ? _data_players__WEBPACK_IMPORTED_MODULE_5__["default"][contentId] : {
    id: null,
    name: null,
    season: 0,
    episode: 0,
    director: null,
    writer: null,
    released: null,
    watchNetflix: null,
    watchYouTube: null,
    synopsis: null
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    style: {
      display: show
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CloseBtn, {
    action: toggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/thumbs/".concat(p.id, ".jpg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderGradient, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EpisodeId__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: p.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }), p.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Synopsis, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, p.synopsis), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Metrics, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Metric, {
    label: "Season",
    value: p.season,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Metric, {
    label: "Episode",
    value: p.episode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Metric, {
    label: "Directed By",
    value: p.director,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Metric, {
    label: "Written By",
    value: p.writer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Metric, {
    label: "Released",
    value: p.released,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Watch on Netflix",
    url: p.watchNetflix,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Watch on YouTube",
    url: p.watchYouTube,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ })

})
//# sourceMappingURL=index.js.58b9fbb51293cbcf70fb.hot-update.js.map