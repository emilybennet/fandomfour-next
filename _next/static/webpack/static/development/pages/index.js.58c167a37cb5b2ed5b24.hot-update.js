webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DailyMatch/Match.js":
/*!****************************************!*\
  !*** ./components/DailyMatch/Match.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./components/Button.js");

var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/DailyMatch/Match.js";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "Match__Container",
  componentId: "sc-1x6kl6x-0"
})(["text-align:center;max-width:385px;width:100%;&:first-of-type{.player:first-of-type .player-nameplate,.player:first-of-type .player-name{transform:rotate(4deg);}.player:last-of-type .player-nameplate,.player:last-of-type .player-name{transform:rotate(-4deg);}}&:last-of-type{.player:first-of-type .player-nameplate,.player:first-of-type .player-name{transform:rotate(-4deg);}.player:last-of-type .player-nameplate,.player:last-of-type .player-name{transform:rotate(4deg);}}"]);
var Versus = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Match__Versus",
  componentId: "sc-1x6kl6x-1"
})(["color:", ";display:block;font-family:", ";font-size:1.66em;font-style:italic;font-weight:900;letter-spacing:0.15em;margin:20px 0;text-transform:uppercase;"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.poppins;
});
var PlayerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Match__PlayerContainer",
  componentId: "sc-1x6kl6x-2"
})(["align-items:center;cursor:pointer;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;height:110px;justify-content:center;max-width:385px;width:100%;"]);
var PlayerName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Match__PlayerName",
  componentId: "sc-1x6kl6x-3"
})(["color:", ";font-family:", ";font-size:1.66em;font-weight:600;grid-row-start:1;grid-row-end:auto;grid-column-start:1;grid-column-end:auto;position:relative;z-index:10;"], function (props) {
  return props.theme.yellow;
}, function (props) {
  return props.theme.poppins;
});
var PlayerNameplate = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Match__PlayerNameplate",
  componentId: "sc-1x6kl6x-4"
})(["align-self:stretch;background:", ";grid-column-start:1;grid-column-end:auto;grid-row-start:1;grid-row-end:auto;mix-blend-mode:overlay;position:relative;opacity:0.5;width:100%;z-index:5;"], function (props) {
  return props.theme.white;
});
var MatchActions = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].footer.withConfig({
  displayName: "Match__MatchActions",
  componentId: "sc-1x6kl6x-5"
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

/***/ })

})
//# sourceMappingURL=index.js.58c167a37cb5b2ed5b24.hot-update.js.map