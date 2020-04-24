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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FetchUser.js":
/*!*********************************!*\
  !*** ./components/FetchUser.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _styles_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Modal */ "./components/styles/Modal.js");
var _jsxFileName = "/Users/jasonnolfi/lofisoul/components/FetchUser.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FetchUser = props => {
  return __jsx(_styles_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isModalOpen: props.isModalOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-dialog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "error-msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, props.fetchErrorMsg), __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSubmit: props.onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, __jsx("fieldset", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 29
    }
  }, "Setup Your Experience"), __jsx("label", {
    htmlFor: "username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 29
    }
  }, "Enter A Username", __jsx("input", {
    type: "text",
    name: "username",
    value: props.username,
    placeholder: "",
    onChange: props.saveToState,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }))), __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "Launch \uD83D\uDE80")))));
};

/* harmony default export */ __webpack_exports__["default"] = (FetchUser);

/***/ }),

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
/* harmony import */ var _FetchUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetchUser */ "./components/FetchUser.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");
var _jsxFileName = "/Users/jasonnolfi/lofisoul/components/SCList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class SCList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isFetching: false,
      doneFetching: false,
      fiveTracks: null,
      randomTracksFromUsers: null,
      isModalOpen: true,
      username: '',
      user: null,
      fetchErrorMsg: ''
    });

    _defineProperty(this, "soundCloudResolveUser", async user => {
      try {
        const userToResolve = await SC.resolve(`https://soundcloud.com/${user}`);
        this.initTrack(userToResolve);
        this.setState({
          user: userToResolve,
          isModalOpen: false
        });
      } catch (e) {
        const errorMsg = e.status === 404 ? `Whoops! That user doesn't exist!` : e.message;
        this.setState({
          fetchErrorMsg: errorMsg
        });
      }
    });

    _defineProperty(this, "saveToState", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    _defineProperty(this, "onSubmit", e => {
      e.preventDefault();
      this.soundCloudResolveUser(this.state.username);
    });

    _defineProperty(this, "initTrack", async user => {
      //initialize SC
      this.setState({
        isFetching: true
      });
      const response = await SC.get(`/users/${user.id}/favorites`, {
        limit: 1000,
        linked_partitioning: 1
      });
      const sortedTracks = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["shuffle"])(response.collection, 5); //run logic for getting random song based on users that liked 5 sorted tracks

      let randomPlaylist = await Promise.all(sortedTracks.map(async item => {
        let newItem = await this.generateRandomPlaylist(item);
        return newItem;
      }));
      this.setState({
        isFetching: false,
        fiveTracks: sortedTracks,
        randomTracksFromUsers: randomPlaylist
      });
    });

    _defineProperty(this, "generateRandomPlaylist", async track => {
      const usersWhoLiked = await SC.get(`/tracks/${track.id}/favoriters`, {
        limit: 1000,
        linked_partitioning: 1
      });
      let userArr = usersWhoLiked.collection;
      const arrayUsersFaves = userArr.filter(user => user.public_favorites_count > 0); //sort users without playlists
      //TODO::need to figure out a way to filter out user

      let randomUser = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["shuffle"])(arrayUsersFaves, 1)[0]; //get first list of random users

      const userFaves = await SC.get(`/users/${randomUser.id}/favorites`, {
        limit: 1000,
        linked_partitioning: 1
      });
      const randomTrack = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["shuffle"])(userFaves.collection, 1)[0];
      const randomObj = {
        referral: track,
        user: randomUser,
        track: randomTrack
      };
      return randomObj;
    });

    _defineProperty(this, "componentDidMount", () => {
      SC.initialize({
        client_id: _config__WEBPACK_IMPORTED_MODULE_4__["scAppId"],
        redirect_uri: 'http://jambox.thatdudeartoo.com/callback.html'
      });
    });
  }

  render() {
    const {
      isFetching,
      fiveTracks,
      randomTracksFromUsers,
      isModalOpen,
      username,
      fetchErrorMsg,
      doneFetching,
      user
    } = this.state;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, __jsx(_FetchUser__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: this.onSubmit,
      isModalOpen: isModalOpen,
      username: username,
      saveToState: this.saveToState,
      fetchErrorMsg: fetchErrorMsg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }), user ? __jsx(_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 27
      }
    }) : '', isFetching ? __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 32
      }
    }, "Fetching...") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, fiveTracks ? fiveTracks.map(track => {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 32
        }
      }, __jsx("p", {
        key: track.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 37
        }
      }, __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 55
        }
      }, track.user.username), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 93
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
          lineNumber: 108,
          columnNumber: 25
        }
      }));
    }) : ''), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }, randomTracksFromUsers ? randomTracksFromUsers.map(item => {
      return __jsx("div", {
        key: item.track.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 32
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 29
        }
      }, __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 32
        }
      }, "User:"), " ", item.user.username), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 29
        }
      }, "Song: ", item.track.title), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 29
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
          lineNumber: 118,
          columnNumber: 29
        }
      }));
    }) : '')));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SCList);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jasonnolfi/lofisoul/components/User.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const UserWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
display:flex;
align-items:center;
`;
const UserImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
height:40px;
margin-left:2rem;
border-radius:50%;
`;

const User = props => {
  return __jsx(UserWrap, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Welcome, ", props.user.username), __jsx(UserImage, {
    src: props.user.avatar_url,
    alt: props.user.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1krt96e-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], props => props.theme.red, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/styles/Modal.js":
/*!************************************!*\
  !*** ./components/styles/Modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Modal = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Modal",
  componentId: "ubqnco-0"
})(["position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);opacity:", ";visibility:", ";transform:", ";transition:visibility 0s linear 0.25s,opacity 0.25s 0s,transform 0.25s;.modal-dialog{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:400px;width:100%;}.modal-content{position:relative;width:100%;pointer-events:auto;background-color:#fff;outline:0;max-width:400px;padding:3rem 2rem;}"], props => props.isModalOpen ? 1 : 0, props => props.isModalOpen ? 'visible' : 'hidden', props => props.isModalOpen ? `scale(1)` : `scale(1.1)`);
/* harmony default export */ __webpack_exports__["default"] = (Modal);

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

/***/ 4:
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