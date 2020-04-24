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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svgs_lofisoul_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svgs/lofisoul.svg */ "./svgs/lofisoul.svg");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jasonnolfi/lofisoul/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "uge6kj-0"
})(["padding:1rem 3rem;background-color:#fff;box-shadow:0px 3px 5px 0px rgba(0,0,0,.07);"]);
const StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "Header__StyledLogo",
  componentId: "uge6kj-1"
})(["margin:0;line-height:0;svg{width:100px;height:auto;}"]);

const Header = () => __jsx(StyledHeader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}, __jsx(StyledLogo, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 19
  }
}, __jsx(_svgs_lofisoul_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 31
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jasonnolfi/lofisoul/components/Meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Meta = () => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}), __jsx("meta", {
  charSet: "utf-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, "Lofi Soul"), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600;800&display=swap",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "https://connect.soundcloud.com/sdk/sdk-3.3.2.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var _jsxFileName = "/Users/jasonnolfi/lofisoul/components/Page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const theme = {
  greenDark: '#004445',
  greenMed: '#2c7873',
  greenLight: '#6fb98f',
  yellow: '#ffd800',
  sky: '#82B8D6',
  red: '#ED1C24',
  black: '#222',
  gray: '#555',
  lightGray: '#e7e7e7',
  offWhite: '#f1f1f1',
  maxWidth: '1200px',
  bs: '0 12px 24px 0 rgba(0,0,0,.09)',
  bp: '1300px'
};
const StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "p75law-0"
})([""]);
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "p75law-1"
})(["max-width:", ";margin:0 auto;padding:2rem;"], props => props.theme.maxWidth);
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
    html,body {
        height:100%;
    }
    html{
        box-sizing:border-box;
        font-size:10px;
    }

    *,*:before, *:after {
        box-sizing: inherit;
    }

    h1,h2,h3,h4,h5,h6 {margin:0;}

    body {
        padding:0;
        margin:0;
        font-size:1.5rem;
        line-height:2;
        background-color:${props => props.theme.offWhite};
        color:${props => props.theme.black};
        font-family:'Fira Sans', sans-serif;
    }

    a {
        text-decoration:none;
        color: ${theme.black}
    }
`;

class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
      theme: theme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, __jsx(StyledPage, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }), __jsx(GlobalStyle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }
    }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }), __jsx(Inner, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, this.props.children)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
var _jsxFileName = "/Users/jasonnolfi/lofisoul/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./svgs/lofisoul.svg":
/*!***************************!*\
  !*** ./svgs/lofisoul.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "none",
  d: "M-354.9-175.2h1600v1200h-1600z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#333"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M592.4 524.7c-67.8 33.9-122.5 61.5-184 92.5-63.5 32.1-82-.1-82-.1l-10.7 5.6c6.1 48.5 51.5 81.3 117.7 47.8 51.5-26.1 130-64.5 182.9-91.3 63.2-32 72.5 1.8 72.5 1.8l10-5.5c-4.3-38.1-42.7-82.6-106.4-50.8zM266.5 462.1c49.9 0 91.9-42 96.2-84 18.1-15 22.3-27.2 22.3-27.2v45l-19 10.9v15l204-101.2v-16.1l-20 10.4-.1-93.4-9.6-5.1c-9.3 11.3-26.8 18.9-44.8 18.9-19.5 0-34.5-6.6-40.5-13v-70.8c0-25.3 14.5-38.4 30.4-38.4 17.6 0 34.6 12.8 38.1 30.9 0 0-6-3-11.7-3-18.9 0-35.2 15.3-36.5 34.1-1.3 18.9 12.9 34.1 31.8 34.1s35.9-16.9 35.9-36.8c0-45.8-25.7-72.8-66.7-72.8-41.9 0-91 38.8-91 97.9l-.1 55.4-22 11V280l22-11v43.8c0 12.6-9.7 32.8-22.8 44.2-5.1-33.6-33.1-58.2-70.8-58.2-46 0-88.8 36.5-95.7 81.5-7 45.3 24.7 81.8 70.6 81.8zm188.6-219.9c7 3.9 18 7.6 27 7.7V348l-27 13.7zM267.5 381.1c0-29.5 4.4-67.8 17.3-67.8 13 0 12.8 38.3 12.8 67.8s-4.4 67.8-17.3 67.8-12.8-38.3-12.8-67.8z",
  className: "lofisoul_svg__st0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M159.9 489.3c15.5-14.8 35.7-24.1 56.7-26.3-21.5-13-35.3-38-35.3-61.9l-10.1 5.6c0 39-35.2 109.6-66.2 126.1V298.4l35-17.9v-16.1L0 334.7v16.1l35-17.2v233.7L0 584.8v16l133.2-66.5c4.6-17.2 13.8-32.6 26.7-45z",
  className: "lofisoul_svg__st0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M194.8 529.3c0-26 17.6-42 38.9-42 14.4 0 27.6 5.6 37 15.7 2.2 2.4 4.2 5 5.9 7.7-3.3-1.2-7-1.9-10.8-1.9-17.9 0-33.4 14.5-34.6 32.4-1.2 17.9 11.9 32.4 29.7 32.4 19.2 0 34.7-15.3 34.7-35.7 0-34.2-26.2-62.5-61.9-62.5h-1c-44.3 0-86.9 35.3-86.9 88.6 0 85.9 115.6 118.1 115.6 192.6 0 43-32.4 73.6-76.4 73.6-40.2 0-83.5-36.1-83.5-89.7 0-1.8.1-4 .1-4 3.9 9.9 17.1 19.4 31.7 19.4 22.4 0 41.8-18.1 43.3-40.5 1.6-22.4-15.3-40.5-37.7-40.5-29.3 0-51 30.4-51 66.9 0 59.2 48.5 104.3 108.8 104.3 64.5 0 125.8-51 125.8-123 .1-89.7-127.7-128.2-127.7-193.8zM682.6 372.7c0 18.7-8.1 49.3-19.9 49.3-5.1 0-7.9-4.5-7.9-9.2V301.9L563.7 348v16.1l20.8-10.6v77.2c0 16.3-10 42.3-20.2 42.3-5.1 0-7.9-4.5-7.9-9.2V351.4l-91.3 46.3v16.1l20.8-10.6v84c0 26.7 17 41.9 39.8 41.9 29.1 0 56-31.1 63.7-68.5 6.7 12.7 19.4 18.9 34.7 18.9 31.3 0 54.2-34.1 61.3-72.3z",
  className: "lofisoul_svg__st0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M842.3 365c-19.8 0-35.5 14.6-36.8 33.6-1.3 19 13 33.6 32 33.6 17.6 0 32.2-13.2 35.5-30.2 9.7 15.6 13.4 31.8 12.1 51.3-3.5 50.6-46.2 94.2-94.8 94.2-26.1 0-37.6-16.5-37.6-42.2V108.7l-12.2-5.2c-12 24.6-36.9 40.5-63.5 40.5-17.3 0-33.1-6.7-44.4-18.9-11.4-12.2-17-28.5-15.8-45.9 2.5-36.2 34.1-66.4 70.3-66.4 4.8 0 9.4.5 13.9 1.5-11.9 5.5-20.6 18-21.5 31.6-1.3 18.9 13 34.3 31.9 34.3s36.7-16.1 36.7-35c0-25.6-26.7-45.2-61-45.2-43.2 0-80.7 35.1-83.8 78.3-1.5 21.1 5.4 41.1 19.4 56 13.9 14.9 33.2 23.2 54.3 23.2 1.8 0 3.6-.1 5.4-.2V449c0 68.7 42.8 113.1 100.7 113.1 60.3 0 115.7-50.8 115.7-115.6 0-48.4-31.5-81.5-56.5-81.5zM475.3 489.2c-5.1-33.6-33.1-58.2-70.8-58.2-46 0-88.8 36.5-95.7 81.5-6.9 45 24.8 81.5 70.8 81.5 49.9 0 91.9-42 96.2-84 18.1-15 22.3-27.2 22.3-27.2v-37.9c0 12.7-9.7 32.9-22.8 44.3zm-64.7 23.9c0 29.5-4.4 67.8-17.3 67.8s-12.8-38.3-12.8-67.8 4.4-67.8 17.3-67.8c13 0 12.8 38.4 12.8 67.8z",
  className: "lofisoul_svg__st0"
}));

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(-354.9 -175.2)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M737.6 843.5c-13.9 0-26-4.6-34.9-13.2-3.1-3-5.8-6.3-8.1-10.1 5.5 1.7 11.9 2.9 19.4 2.9 16.6 0 35.7-5.5 56.6-16.1l9-4.6c56.8-28.7 110.5-55.8 174.9-88 12.2-6.1 23.7-9.2 34.1-9.2 16.8 0 27.8 8.1 34.2 14.9 1.7 1.8 3.2 3.7 4.7 5.7-3.2-.6-6.7-.9-10.5-.9-14.8 0-32.6 5.2-52.9 15.5-26.5 13.4-60 30-92.4 46.1-31.9 15.8-64.8 32.2-90.5 45.2-15.7 7.8-30.3 11.8-43.6 11.8zM606 560.3c0-40.4 6.1-59.2 7.1-62.3-6.6 3.2-47.6 23.5-47.6 72.5 0 32.8 28.8 49.5 47.3 51.2-1.6-4.5-6.8-24.7-6.8-61.4zm95.5-16c0-30.2-18.1-46.3-38.3-51.9.7 2.2 5.8 20.5 5.8 57.9 0 43.3-5.4 57.7-5.6 58.4 15.3-8 38.1-31 38.1-64.4zm54.5 17.5l38-18.9V326.8c0-9.5 2-19 5.8-27.3-6.7 3.6-13 8.2-18.7 13.8-16.1 15.7-25 36.9-25 59.7zm97-48.2l36-17.9-.1-78.8c-10.6 5.8-23.1 9.2-35.9 9.6zm28.9-165.8c0-6.2-.4-9.2-.4-9.2s-6.3-6.3-14.7-6.3c-10.4 0-20.4 7.7-20.4 19.9 0 9.6 7.9 16.4 15.6 16.4 10.2-.1 19.9-10.2 19.9-20.8zM406 732.6l38-19V483l-38 19.1zm221.9 242.3c21.7-20.2 33.6-47.4 33.6-76.8 0-41.1-33.6-71.4-66-100.6-31.7-28.6-61.7-55.6-61.7-93 0-5.1.6-10.1 1.6-14.9-12.1 13.2-18.7 30.6-18.7 49.5 0 37.7 27.2 64.2 56.1 92.1 29.3 28.4 59.6 57.8 59.6 100.4 0 19.8-5.9 38.2-16.7 53.1 4.2-2.9 8.3-6.2 12.2-9.8zM515.2 888c0-14.7-11.7-22-21.2-22-12.8 0-26.3 10.5-30.3 25.5 1.2 9.2 10.7 23.2 25.3 23.2 14.1 0 26.2-12.8 26.2-26.7zm119.3-183.9s-4.1-4.5-13.6-4.5-18.9 9-18.9 18.5c0 8.4 5.7 14.6 13.8 14.6 16.8 0 20.7-17.3 18.7-28.6zm456.5-23.5V311c-10.7 10.2-23.8 17.7-38 21.4v291.8c0 40.7 16.8 72.1 44.3 87.2-4.2-8.6-6.3-18.9-6.3-30.8zm-175.2-16.5c-11.9-1.5-20.8-12-20.8-25v-86.3L857 572v88c0 18 9.8 28.3 23.7 28.3 12.5.1 25.5-9.5 35.1-24.2zm97.2-51.3c-11.1-2.2-19-12.1-19-24.8v-84.8L955 523v89c0 18 10.2 26.7 24 26.7 17.5.1 28.8-15.7 34-25.9zm201.1-48.7c-3.4-3.9-11.2-7.8-16.9-7.8-11.3 0-20.7 9.3-20.7 20.4 0 8.7 6.4 14.9 15.8 14.9 16.2-.1 21.8-19.2 21.8-27.5zm-127.2-343.6c0-8.3-5.4-15.9-14.1-21.2 0 0-21.2 6.6-21.2 24.1 0 9.4 7.8 15.8 15.4 15.8 10.6-.1 19.9-8.9 19.9-18.7zM719 691.3c0-40.4 6.1-59.2 7.1-62.3-6.6 3.2-47.6 23.5-47.6 72.5 0 32.8 28.8 49.5 47.3 51.2-1.6-4.5-6.8-24.7-6.8-61.4zm95.5-16c0-30.2-18.1-46.3-38.3-51.9.7 2.2 5.8 20.5 5.8 57.9 0 43.3-5.4 57.7-5.6 58.4 15.3-8 38.1-31 38.1-64.4z",
  id: "lofisoul_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", {
  id: "lofisoul_svg__b"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
  height: "100%",
  width: "100%",
  xlinkHref: "#lofisoul_svg__a",
  overflow: "visible"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  clipPath: "url(#lofisoul_svg__b)",
  className: "lofisoul_svg__st1"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  className: "lofisoul_svg__st2",
  d: "M352.2 448.1l921.9-467.7M352.2 481.1l921.9-467.6M352.2 514.2l921.9-467.6M352.2 547.3l921.9-467.7M352.2 580.3l921.9-467.6M352.2 613.4l921.9-467.7M352.2 646.4l921.9-467.6M352.2 679.5l921.9-467.7M352.2 712.6l921.9-467.7M352.2 745.6L1274.1 278M352.2 778.7L1274.1 311M352.2 811.7l921.9-467.6M352.2 844.8l921.9-467.7M352.2 877.8l921.9-467.6M352.2 910.9l921.9-467.7M352.2 944l921.9-467.7M352.2 977l921.9-467.6M352.2 1010.1l921.9-467.7M352.2 1043.1l921.9-467.6M352.2 1076.2l921.9-467.7M352.2 1109.2l921.9-467.6M352.2 1142.3l921.9-467.6M352.2 1175.4l921.9-467.7M352.2 1208.4l921.9-467.6M352.2 464.6L1274.1-3M352.2 497.7L1274.1 30M352.2 530.7l921.9-467.6M352.2 563.8l921.9-467.7M352.2 596.8l921.9-467.6M352.2 629.9l921.9-467.6M352.2 663l921.9-467.7M352.2 696l921.9-467.6M352.2 729.1l921.9-467.7M352.2 762.1l921.9-467.6M352.2 795.2l921.9-467.7M352.2 828.3l921.9-467.7M352.2 861.3l921.9-467.6M352.2 894.4l921.9-467.7M352.2 927.4l921.9-467.6M352.2 960.5l921.9-467.7M352.2 993.5l921.9-467.6M352.2 1026.6L1274.1 559M352.2 1059.7L1274.1 592M352.2 1092.7l921.9-467.6M352.2 1125.8l921.9-467.7M352.2 1158.8l921.9-467.6M352.2 1191.9l921.9-467.7M352.2 1224.9l921.9-467.6"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  clipPath: "url(#lofisoul_svg__b)",
  className: "lofisoul_svg__st1"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  className: "lofisoul_svg__st3",
  d: "M352.2 436.2l921.9-466.9M352.2 469.3L1274.1 2.4M352.2 502.3l921.9-466.8M352.2 535.4l921.9-466.9M352.2 568.4l921.9-466.8M352.2 601.5l921.9-466.9M352.2 634.6l921.9-466.9M352.2 667.6l921.9-466.9M352.2 700.7l921.9-466.9M352.2 733.7l921.9-466.8M352.2 766.8l921.9-466.9M352.2 799.8L1274.1 333M352.2 832.9L1274.1 366M352.2 866l921.9-466.9M352.2 899l921.9-466.9M352.2 932.1l921.9-466.9M352.2 965.1l921.9-466.8M352.2 998.2l921.9-466.9M352.2 1031.2l921.9-466.8M352.2 1064.3l921.9-466.9M352.2 1097.4l921.9-466.9M352.2 1130.4l921.9-466.9M352.2 1163.5l921.9-466.9M352.2 1196.5l921.9-466.8M352.2 452.7l921.9-466.8M352.2 485.8l921.9-466.9M352.2 518.9L1274.1 52M352.2 551.9L1274.1 85M352.2 585l921.9-466.9M352.2 618l921.9-466.8M352.2 651.1l921.9-466.9M352.2 684.1l921.9-466.8M352.2 717.2l921.9-466.9M352.2 750.3l921.9-466.9M352.2 783.3l921.9-466.9M352.2 816.4l921.9-466.9M352.2 849.4l921.9-466.8M352.2 882.5l921.9-466.9M352.2 915.5l921.9-466.8M352.2 948.6l921.9-466.9M352.2 981.7l921.9-466.9M352.2 1014.7l921.9-466.9M352.2 1047.8l921.9-466.9M352.2 1080.8L1274.1 614M352.2 1113.9L1274.1 647M352.2 1146.9l921.9-466.8M352.2 1180l921.9-466.9M352.2 1213.1l921.9-466.9"
})));

function SvgLofisoul(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    height: 846.1,
    width: 898.8,
    viewBox: "0 0 898.8 846.1"
  }, props), _ref, _ref2, _ref3);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgLofisoul);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=_app.js.map