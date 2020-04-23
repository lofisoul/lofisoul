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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");








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
      fiveTracks: null,
      randomTracksFromUsers: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "initTrack", function _callee2() {
      var response, sortedTracks, randomPlaylist, track, trackSrc;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              //initialize SC
              _this.setState({
                isFetching: true
              });

              _context2.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(SC.get("/users/".concat(_config__WEBPACK_IMPORTED_MODULE_10__["scUser"].id, "/favorites"), {
                limit: 1000,
                linked_partitioning: 1
              }));

            case 3:
              response = _context2.sent;
              sortedTracks = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_11__["shuffle"])(response.collection, 5); //run logic for getting random song based on users that liked 5 sorted tracks

              _context2.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(sortedTracks.map(function _callee(item) {
                var newItem;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this.generateRandomPlaylist(item));

                      case 2:
                        newItem = _context.sent;
                        return _context.abrupt("return", newItem);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, null, null, null, Promise);
              })));

            case 7:
              randomPlaylist = _context2.sent;

              _this.setState({
                isFetching: false,
                fiveTracks: sortedTracks,
                randomTracksFromUsers: randomPlaylist
              });

              track = response.collection[27];
              trackSrc = "".concat(track.stream_url, "?client_id=").concat(_config__WEBPACK_IMPORTED_MODULE_10__["scAppId"]);
              _this.audio = new Audio();
              _this.audio.crossOrigin = "anonymous";
              _this.audio.src = trackSrc;
              _this.context = new (window.AudioContext || window.webkitAudioContext)();
              _this.source = _this.context.createMediaElementSource(_this.audio);
              _this.analyser = _this.context.createAnalyser();

              _this.source.connect(_this.analyser);

              _this.analyser.connect(_this.context.destination);

              _this.frequency_array = new Uint8Array(_this.analyser.frequencyBinCount);

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "generateRandomPlaylist", function _callee3(track) {
      var usersWhoLiked, userArr, arrayUsersFaves, randomUser, userFaves, randomTrack, randomObj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(SC.get("/tracks/".concat(track.id, "/favoriters"), {
                limit: 1000,
                linked_partitioning: 1
              }));

            case 2:
              usersWhoLiked = _context3.sent;
              userArr = usersWhoLiked.collection;
              arrayUsersFaves = userArr.filter(function (user) {
                return user.public_favorites_count > 0;
              }); //sort users without playlists

              randomUser = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_11__["shuffle"])(arrayUsersFaves, 1)[0]; //get first list of random users

              _context3.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(SC.get("/users/".concat(randomUser.id, "/favorites"), {
                limit: 1000,
                linked_partitioning: 1
              }));

            case 8:
              userFaves = _context3.sent;
              randomTrack = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_11__["shuffle"])(userFaves.collection, 1)[0];
              randomObj = {
                referral: track,
                user: randomUser,
                track: randomTrack
              };
              return _context3.abrupt("return", randomObj);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "componentDidMount", function () {
      SC.initialize({
        client_id: _config__WEBPACK_IMPORTED_MODULE_10__["scAppId"],
        redirect_uri: 'http://jambox.thatdudeartoo.com/callback.html'
      });

      _this.initTrack();
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
          randomTracksFromUsers = _this$state.randomTracksFromUsers;

      if (isFetching) {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 20
          }
        }, "Fetching...");
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
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
          lineNumber: 86,
          columnNumber: 17
        }
      }, fiveTracks ? fiveTracks.map(function (track) {
        return __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 28
          }
        }, __jsx("p", {
          key: track.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 33
          }
        }, __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 51
          }
        }, track.user.username), __jsx("br", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 89
          }
        }), ": ", track.title), __jsx("iframe", {
          width: "100%",
          height: "166",
          scrolling: "no",
          frameborder: "no",
          allow: "autoplay",
          src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/".concat(item.id),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }
        }));
      }) : ''), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }
      }, randomTracksFromUsers ? randomTracksFromUsers.map(function (item) {
        return __jsx("div", {
          key: item.track.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 28
          }
        }, __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }
        }, __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 28
          }
        }, "User:"), " ", item.user.username), __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }
        }, "Song: ", item.track.title), __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }
        }, "Referral: ", item.referral.title), __jsx("iframe", {
          width: "100%",
          height: "166",
          scrolling: "no",
          frameborder: "no",
          allow: "autoplay",
          src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/".concat(item.id),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }
        }));
      }) : 'Error'));
    }
  }]);

  return SCList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SCList);

/***/ })

})
//# sourceMappingURL=index.js.57739b570a85eedac747.hot-update.js.map