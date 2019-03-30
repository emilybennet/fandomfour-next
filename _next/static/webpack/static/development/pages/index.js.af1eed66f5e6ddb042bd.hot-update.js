webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Champion/Match.js":
/*!**************************************!*\
  !*** ./components/Champion/Match.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./components/Button.js");

var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/Champion/Match.js";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "Match__Container",
  componentId: "x2uk1y-0"
})(["text-align:center;max-width:385px;width:100%;&:first-of-type{.player:first-of-type .player-nameplate,.player:first-of-type .player-name{transform:rotate(4deg);}.player:last-of-type .player-nameplate,.player:last-of-type .player-name{transform:rotate(-4deg);}}&:last-of-type{.player:first-of-type .player-nameplate,.player:first-of-type .player-name{transform:rotate(-4deg);}.player:last-of-type .player-nameplate,.player:last-of-type .player-name{transform:rotate(4deg);}}"]);
var Versus = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Match__Versus",
  componentId: "x2uk1y-1"
})(["color:", ";display:block;font-family:", ";font-size:1.66em;font-style:italic;font-weight:900;letter-spacing:0.15em;margin:20px 0;text-transform:uppercase;"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.poppins;
});
var PlayerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Match__PlayerContainer",
  componentId: "x2uk1y-2"
})(["align-items:center;cursor:pointer;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;height:110px;justify-content:center;max-width:385px;width:100%;"]);
var PlayerName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Match__PlayerName",
  componentId: "x2uk1y-3"
})(["color:", ";font-family:", ";font-size:1.66em;font-weight:600;grid-row-start:1;grid-row-end:auto;grid-column-start:1;grid-column-end:auto;position:relative;z-index:10;"], function (props) {
  return props.theme.yellow;
}, function (props) {
  return props.theme.poppins;
});
var PlayerNameplate = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Match__PlayerNameplate",
  componentId: "x2uk1y-4"
})(["align-self:stretch;background:", ";grid-column-start:1;grid-column-end:auto;grid-row-start:1;grid-row-end:auto;mix-blend-mode:overlay;position:relative;opacity:0.5;width:100%;z-index:5;"], function (props) {
  return props.theme.white;
});
var MatchActions = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].footer.withConfig({
  displayName: "Match__MatchActions",
  componentId: "x2uk1y-5"
})(["margin-top:70px;"]);

var Player = function Player(_ref) {
  var player = _ref.player,
      _ref$rotate = _ref.rotate,
      rotate = _ref$rotate === void 0 ? 0 : _ref$rotate,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["player", "rotate"]);

  if (player.id === "???") return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayerContainer, {
    className: "player",
    style: {
      cursor: "default"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayerNameplate, {
    className: "player-nameplate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayerName, {
    className: "player-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "???"));
  var playerStyles = {};

  if (player.eliminated) {
    playerStyles.opacity = 0.4;
    playerStyles.textDecoration = "line-through";
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayerContainer, {
    className: "player",
    onClick: function onClick() {
      return props.toggleModal(player.id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayerNameplate, {
    className: "player-nameplate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayerName, {
    className: "player-name",
    style: playerStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, player.name));
};

var VoteBtn = function VoteBtn(_ref2) {
  var _ref2$voteUrl = _ref2.voteUrl,
      voteUrl = _ref2$voteUrl === void 0 ? null : _ref2$voteUrl,
      _ref2$voteTime = _ref2.voteTime,
      voteTime = _ref2$voteTime === void 0 ? null : _ref2$voteTime,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["voteUrl", "voteTime"]);

  if (voteUrl) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "Vote Now",
    url: voteUrl,
    style: {
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  });
  return (// <Button text={`Voting Opens @ ${voteTime || "???"}`} disabled={true} />
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Voting Complete",
      disabled: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    })
  );
};

var Match = function Match(_ref3) {
  var playerA = _ref3.playerA,
      playerB = _ref3.playerB,
      _ref3$url = _ref3.url,
      url = _ref3$url === void 0 ? false : _ref3$url,
      _ref3$voteUrl = _ref3.voteUrl,
      voteUrl = _ref3$voteUrl === void 0 ? null : _ref3$voteUrl,
      _ref3$voteTime = _ref3.voteTime,
      voteTime = _ref3$voteTime === void 0 ? null : _ref3$voteTime,
      toggleModal = _ref3.toggleModal,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["playerA", "playerB", "url", "voteUrl", "voteTime", "toggleModal"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    player: playerA,
    rotate: 4,
    toggleModal: toggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Versus, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Versus"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    player: playerB,
    rotate: -4,
    toggleModal: toggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MatchActions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VoteBtn, {
    voteUrl: voteUrl,
    voteTime: voteTime,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Match);

/***/ }),

/***/ "./components/Champion/index.js":
/*!**************************************!*\
  !*** ./components/Champion/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Match */ "./components/Champion/Match.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Title */ "./components/Title.js");
/* harmony import */ var _data_players__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/players */ "./data/players.js");
/* harmony import */ var _data_daily_match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/daily_match */ "./data/daily_match.js");

var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/Champion/index.js";






var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "Champion__Container",
  componentId: "vbtpxd-0"
})(["background:url(\"/static/karen-pattern.webp\") repeat,radial-gradient(60vw at 50% 56.73%,#4fb0aa 0%,#334d90 100%);clip-path:polygon(0 0,100% 0,100% 100%,0 calc(100% - 4vw));overflow:hidden;padding:200px 15px;position:relative;z-index:400;.no-webp &{background:url(\"/static/karen-pattern.png\") repeat,radial-gradient(50vw at 50% 56.73%,#4fb0aa 0%,#334d90 100%);}"]);
var Matches = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Champion__Matches",
  componentId: "vbtpxd-1"
})(["align-items:center;display:flex;flex-direction:row;justify-content:center;@media (max-width:973px){flex-direction:column;}"]);
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Champion__Divider",
  componentId: "vbtpxd-2"
})(["align-self:stretch;background:", ";margin:0 100px;width:3px;@media (max-width:973px){height:3px;margin:100px auto;width:80%;}"], function (props) {
  return props.theme.yellow;
});
var TitleYellow = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Title__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Champion__TitleYellow",
  componentId: "vbtpxd-3"
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
      lineNumber: 55
    },
    __self: this
  }, "Which is the best ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "MLP:FiM"), " episode?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Matches, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Match__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _data_daily_match__WEBPACK_IMPORTED_MODULE_6__["default"][0], {
    playerA: _data_players__WEBPACK_IMPORTED_MODULE_5__["default"][_data_daily_match__WEBPACK_IMPORTED_MODULE_6__["default"][0].playerA],
    playerB: _data_players__WEBPACK_IMPORTED_MODULE_5__["default"][_data_daily_match__WEBPACK_IMPORTED_MODULE_6__["default"][0].playerB],
    toggleModal: props.toggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DailyMatch);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_DailyMatch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/DailyMatch */ "./components/DailyMatch/index.js");
/* harmony import */ var _components_Champion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Champion */ "./components/Champion/index.js");
/* harmony import */ var _components_Tournament__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Tournament */ "./components/Tournament/index.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal/index.js");







var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/pages/index.js";









var HomePage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HomePage, _React$Component);

  function HomePage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomePage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      modalContentId: null,
      showModal: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleModal", function () {
      var modalContentId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      document.body.style.overflow = _this.state.showModal ? "unset" : "hidden";

      _this.setState(function (prevState) {
        return {
          showModal: !prevState.showModal,
          modalContentId: modalContentId
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_DailyMatch__WEBPACK_IMPORTED_MODULE_11__["default"], {
        toggleModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Tournament__WEBPACK_IMPORTED_MODULE_13__["default"], {
        toggleModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        showModal: this.state.showModal,
        toggleModal: this.toggleModal,
        contentId: this.state.modalContentId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.af1eed66f5e6ddb042bd.hot-update.js.map