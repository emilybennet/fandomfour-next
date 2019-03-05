webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _data_conference_sun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/conference_sun */ "./data/conference_sun.js");
/* harmony import */ var _data_conference_moon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/conference_moon */ "./data/conference_moon.js");
/* harmony import */ var _data_conference_stars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/conference_stars */ "./data/conference_stars.js");
/* harmony import */ var _data_conference_chaos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/conference_chaos */ "./data/conference_chaos.js");
/* harmony import */ var _data_conference_finals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/conference_finals */ "./data/conference_finals.js");

var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Fandom Four 2019/fandomfour-next/components/Tournament/index.js";




 // conferences






var TABS = ["Sun", "Moon", "Stars", "Chaos", "Finals"];
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "Tournament__Container",
  componentId: "sc-18cwlee-0"
})(["padding:100px 15px;"]);

var Tournament = function Tournament(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      marginBottom: "0.5em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Tournament Bracket"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TabBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Bracket__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Conference, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Tournament);

/***/ }),

/***/ "./data/conference_chaos.js":
/*!**********************************!*\
  !*** ./data/conference_chaos.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const match = {
//   playerA: "xx",
//   playerB: "xx",
//   voteUrl: null,
//   voteTime: null,
//   meta: {
//     text: null,
//     url: null
//   }
// };
//
// C H A O S
//
/* harmony default export */ __webpack_exports__["default"] = ({
  color: "#87C88C",
  round1: [{
    playerA: "1×25",
    playerB: "5×10",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "chaos-r1-m1"
  }, {
    playerA: "1×26",
    playerB: "2×11",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "chaos-r1-m2"
  }, {
    playerA: "4×12",
    playerB: "2×24",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "chaos-r1-m3"
  }, {
    playerA: "5×18",
    playerB: "2×14",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "chaos-r1-m4"
  }],
  round2: [{
    playerA: "unknown",
    playerB: "unknown",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "chaos-r2-m1"
  }, {
    playerA: "unknown",
    playerB: "unknown",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "chaos-r2-m2"
  }],
  round3: [{
    playerA: "unknown",
    playerB: "unknown",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "chaos-r3-m1"
  }]
});

/***/ }),

/***/ "./data/conference_finals.js":
/*!***********************************!*\
  !*** ./data/conference_finals.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const match = {
//   playerA: "xx",
//   playerB: "xx",
//   voteUrl: null,
//   voteTime: null,
//   meta: {
//     text: null,
//     url: null
//   }
// };
//
// F I N A L S
//
/* harmony default export */ __webpack_exports__["default"] = ({
  round1: [{
    playerA: "unknown",
    playerB: "unknown",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "final-r1-m1"
  }, {
    playerA: "unknown",
    playerB: "unknown",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "final-r1-m2"
  }],
  round2: [{
    playerA: "unknown",
    playerB: "unknown",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "final-r2-m1"
  }]
});

/***/ }),

/***/ "./data/conference_stars.js":
/*!**********************************!*\
  !*** ./data/conference_stars.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const match = {
//   playerA: "xx",
//   playerB: "xx",
//   voteUrl: null,
//   voteTime: null,
//   meta: {
//     text: null,
//     url: null
//   }
// };
//
// S T A R S
//
/* harmony default export */ __webpack_exports__["default"] = ({
  color: "#FFC30F",
  round1: [{
    playerA: "2×3",
    playerB: "2×8",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "stars-r1-m1"
  }, {
    playerA: "2×4",
    playerB: "3×6",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "stars-r1-m2"
  }, {
    playerA: "5×12",
    playerB: "5×7",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "stars-r1-m3"
  }, {
    playerA: "1×14",
    playerB: "4×8",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "stars-r1-m4"
  }],
  round2: [{
    playerA: "unknown",
    playerB: "unknown",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "stars-r2-m1"
  }, {
    playerA: "unknown",
    playerB: "unknown",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "stars-r2-m2"
  }],
  round3: [{
    playerA: "unknown",
    playerB: "unknown",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "stars-r3-m1"
  }]
});

/***/ }),

/***/ "./data/conference_sun.js":
/*!********************************!*\
  !*** ./data/conference_sun.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const match = {
//   playerA: "xx",
//   playerB: "xx",
//   voteUrl: null,
//   voteTime: null,
//   meta: {
//     text: null,
//     url: null
//   }
// };
//
// S U N
//
/* harmony default export */ __webpack_exports__["default"] = ({
  color: "#F0641E",
  round1: [{
    playerA: "7×13",
    playerB: "4×9",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "sun-r1-m1"
  }, {
    playerA: "8×23",
    playerB: "3×3",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "sun-r1-m2"
  }, {
    playerA: "1×16",
    playerB: "2×16",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "sun-r1-m3"
  }, {
    playerA: "2×20",
    playerB: "4×21",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "sun-r1-m4"
  }],
  round2: [{
    playerA: "unknown",
    playerB: "unknown",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "sun-r2-m1"
  }, {
    playerA: "unknown",
    playerB: "unknown",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "sun-r2-m2"
  }],
  round3: [{
    playerA: "unknown",
    playerB: "unknown",
    voteUrl: null,
    voteTime: null,
    meta: false,
    id: "sun-r3-m1"
  }]
});

/***/ })

})
//# sourceMappingURL=index.js.b176d07019a6e7238227.hot-update.js.map