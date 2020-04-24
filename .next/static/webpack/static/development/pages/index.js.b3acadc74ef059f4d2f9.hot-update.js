webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SCList.js":
/*!******************************!*\
  !*** ./components/SCList.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _FetchUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FetchUser */ "./components/FetchUser.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");








var _jsxFileName = "/Users/jasonnolfi/lofisoul/components/SCList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var SCList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SCList, _Component);

  var _super = _createSuper(SCList);

  function SCList() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SCList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      isFetching: false,
      doneFetching: false,
      fiveTracks: null,
      randomTracksFromUsers: null,
      isModalOpen: true,
      username: '',
      user: null,
      fetchErrorMsg: ''
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "soundCloudResolveUser", function _callee(user) {
      var userToResolve, errorMsg;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(SC.resolve("https://soundcloud.com/".concat(user)));

            case 3:
              userToResolve = _context.sent;

              _this.initTrack(userToResolve);

              _this.setState({
                user: userToResolve,
                isModalOpen: false
              });

              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              errorMsg = _context.t0.status === 404 ? "Whoops! That user doesn't exist!" : _context.t0.message;

              _this.setState({
                fetchErrorMsg: errorMsg
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]], Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "saveToState", function (e) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onSubmit", function (e) {
      e.preventDefault();

      _this.soundCloudResolveUser(_this.state.username);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "initTrack", function _callee3(user) {
      var response, sortedTracks, randomPlaylist;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              //initialize SC
              _this.setState({
                isFetching: true
              });

              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(SC.get("/users/".concat(user.id, "/favorites"), {
                limit: 1000,
                linked_partitioning: 1
              }));

            case 3:
              response = _context3.sent;
              sortedTracks = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_13__["shuffle"])(response.collection, 5); //run logic for getting random song based on users that liked 5 sorted tracks

              _context3.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(sortedTracks.map(function _callee2(item) {
                var newItem;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this.generateRandomPlaylist(item));

                      case 2:
                        newItem = _context2.sent;
                        return _context2.abrupt("return", newItem);

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, null, null, null, Promise);
              })));

            case 7:
              randomPlaylist = _context3.sent;

              _this.setState({
                isFetching: false,
                fiveTracks: sortedTracks,
                randomTracksFromUsers: randomPlaylist
              });

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "generateRandomPlaylist", function _callee4(track) {
      var usersWhoLiked, userArr, arrayUsersFaves, randomUser, userFaves, randomTrack, randomObj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(SC.get("/tracks/".concat(track.id, "/favoriters"), {
                limit: 1000,
                linked_partitioning: 1
              }));

            case 2:
              usersWhoLiked = _context4.sent;
              userArr = usersWhoLiked.collection;
              arrayUsersFaves = userArr.filter(function (user) {
                return user.public_favorites_count > 0;
              }); //sort users without playlists
              //TODO::need to figure out a way to filter out user

              randomUser = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_13__["shuffle"])(arrayUsersFaves, 1)[0]; //get first list of random users

              _context4.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(SC.get("/users/".concat(randomUser.id, "/favorites"), {
                limit: 1000,
                linked_partitioning: 1
              }));

            case 8:
              userFaves = _context4.sent;
              randomTrack = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_13__["shuffle"])(userFaves.collection, 1)[0];
              randomObj = {
                referral: track,
                user: randomUser,
                track: randomTrack
              };
              return _context4.abrupt("return", randomObj);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "componentDidMount", function () {
      SC.initialize({
        client_id: _config__WEBPACK_IMPORTED_MODULE_12__["scAppId"],
        redirect_uri: 'http://jambox.thatdudeartoo.com/callback.html'
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SCList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isFetching = _this$state.isFetching,
          fiveTracks = _this$state.fiveTracks,
          randomTracksFromUsers = _this$state.randomTracksFromUsers,
          isModalOpen = _this$state.isModalOpen,
          username = _this$state.username,
          fetchErrorMsg = _this$state.fetchErrorMsg,
          doneFetching = _this$state.doneFetching,
          user = _this$state.user;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      }, __jsx(_FetchUser__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      }), isFetching ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 32
        }
      }, "Fetching...") : __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(_User__WEBPACK_IMPORTED_MODULE_11__["default"], {
        user: user,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }
      }, fiveTracks ? fiveTracks.map(function (track) {
        return __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 32
          }
        }, __jsx("p", {
          key: track.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 37
          }
        }, __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 55
          }
        }, track.user.username), __jsx("br", {
          __self: _this2,
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
          src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/".concat(track.id),
          __self: _this2,
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
      }, randomTracksFromUsers ? randomTracksFromUsers.map(function (item) {
        return __jsx("div", {
          key: item.track.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 32
          }
        }, __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 29
          }
        }, __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 32
          }
        }, "User:"), " ", item.user.username), __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 29
          }
        }, "Song: ", item.track.title), __jsx("p", {
          __self: _this2,
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
          src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/".concat(item.track.id),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 29
          }
        }));
      }) : '')));
    }
  }]);

  return SCList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/jasonnolfi/lofisoul/components/User.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var User = function User(props) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "Welcome ", props.user.username));
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

})
//# sourceMappingURL=index.js.b3acadc74ef059f4d2f9.hot-update.js.map