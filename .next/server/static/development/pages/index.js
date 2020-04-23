module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SCList.js":
/*!******************************!*\
  !*** ./components/SCList.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");
var _jsxFileName = "/Users/jasonnolfi/lofisoul/components/SCList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SCList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isFetching: false,
      fiveTracks: null,
      randomTracksFromUsers: null
    });

    _defineProperty(this, "initTrack", async () => {
      //initialize SC
      this.setState({
        isFetching: true
      });
      const response = await SC.get(`/users/${_config__WEBPACK_IMPORTED_MODULE_2__["scUser"].id}/favorites`, {
        limit: 1000,
        linked_partitioning: 1
      });
      const sortedTracks = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["shuffle"])(response.collection, 5); //run logic for getting random song based on users that liked 5 sorted tracks

      let randomPlaylist = await Promise.all(sortedTracks.map(async item => {
        let newItem = await this.generateRandomPlaylist(item);
        return newItem;
      }));
      this.setState({
        isFetching: false,
        fiveTracks: sortedTracks,
        randomTracksFromUsers: randomPlaylist
      });
      const track = response.collection[27];
      const trackSrc = `${track.stream_url}?client_id=${_config__WEBPACK_IMPORTED_MODULE_2__["scAppId"]}`;
      this.audio = new Audio();
      this.audio.crossOrigin = "anonymous";
      this.audio.src = trackSrc;
      this.context = new (window.AudioContext || window.webkitAudioContext)();
      this.source = this.context.createMediaElementSource(this.audio);
      this.analyser = this.context.createAnalyser();
      this.source.connect(this.analyser);
      this.analyser.connect(this.context.destination);
      this.frequency_array = new Uint8Array(this.analyser.frequencyBinCount);
    });

    _defineProperty(this, "generateRandomPlaylist", async track => {
      const usersWhoLiked = await SC.get(`/tracks/${track.id}/favoriters`, {
        limit: 1000,
        linked_partitioning: 1
      });
      let userArr = usersWhoLiked.collection;
      const arrayUsersFaves = userArr.filter(user => user.public_favorites_count > 0); //sort users without playlists
      //TODO::need to figure out a way to filter out user

      let randomUser = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["shuffle"])(arrayUsersFaves, 1)[0]; //get first list of random users

      const userFaves = await SC.get(`/users/${randomUser.id}/favorites`, {
        limit: 1000,
        linked_partitioning: 1
      });
      const randomTrack = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["shuffle"])(userFaves.collection, 1)[0];
      const randomObj = {
        referral: track,
        user: randomUser,
        track: randomTrack
      };
      return randomObj;
    });

    _defineProperty(this, "componentDidMount", () => {
      SC.initialize({
        client_id: _config__WEBPACK_IMPORTED_MODULE_2__["scAppId"],
        redirect_uri: 'http://jambox.thatdudeartoo.com/callback.html'
      });
      this.initTrack();
    });
  }

  render() {
    const {
      isFetching,
      fiveTracks,
      randomTracksFromUsers
    } = this.state;

    if (isFetching) {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 20
        }
      }, "Fetching...");
    }

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        borderBottom: '1px solid gray',
        paddingBottom: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, fiveTracks ? fiveTracks.map(track => {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 28
        }
      }, __jsx("p", {
        key: track.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 33
        }
      }, __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 51
        }
      }, track.user.username), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 89
        }
      }), ": ", track.title), __jsx("iframe", {
        width: "100%",
        height: "166",
        scrolling: "no",
        frameborder: "no",
        allow: "autoplay",
        src: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.id}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }
      }));
    }) : ''), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, randomTracksFromUsers ? randomTracksFromUsers.map(item => {
      return __jsx("div", {
        key: item.track.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 28
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 25
        }
      }, __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 28
        }
      }, "User:"), " ", item.user.username), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }
      }, "Song: ", item.track.title), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }
      }, "Referral: ", item.referral.title), __jsx("iframe", {
        width: "100%",
        height: "166",
        scrolling: "no",
        frameborder: "no",
        allow: "autoplay",
        src: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${item.track.id}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }
      }));
    }) : 'Error'));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SCList);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: scAppId, scUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scAppId", function() { return scAppId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scUser", function() { return scUser; });
const scAppId = '41aceb0d516e657897a0eb7ab22c9f99';
const scUser = {
  name: 'lofisoul',
  id: 63317612
};

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
const shuffle = (arr, n) => {
  let currentIndex = arr.length,
      randomIndex,
      tempValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = tempValue;
  }

  return arr.slice(0, n);
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SCList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SCList */ "./components/SCList.js");
var _jsxFileName = "/Users/jasonnolfi/lofisoul/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Home = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_SCList__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jasonnolfi/lofisoul/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map