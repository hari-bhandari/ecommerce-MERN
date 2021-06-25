module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "0zej":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowNext; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ArrowNext = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z",
      fill: "currentColor",
      stroke: "currentColor"
    })
  });
};

/***/ }),

/***/ "3HDo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/components/Layout/search-box/search-box.style.tsx
var search_box_style = __webpack_require__("E4aE");

// EXTERNAL MODULE: ./src/assets/icons/SearchIcon.tsx
var SearchIcon = __webpack_require__("J7Kp");

// EXTERNAL MODULE: ./src/components/Layout/popover/popover.tsx + 1 modules
var popover = __webpack_require__("JMs0");

// CONCATENATED MODULE: ./src/assets/icons/MenuDown.tsx


const MenuDown = ({
  color = 'currentColor',
  width = '12px',
  height = '6px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 6",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      id: "Path_2897",
      "data-name": "Path 2897",
      d: "M0,63.75l6,6,6-6Z",
      transform: "translate(0 -63.75)",
      fill: color
    })
  });
};
// EXTERNAL MODULE: ./src/hooks/useFetch.ts + 1 modules
var useFetch = __webpack_require__("N44y");

// EXTERNAL MODULE: ./src/components/Layout/header/menu/left-menu/LeftMenuStyle.tsx
var LeftMenuStyle = __webpack_require__("sARW");

// EXTERNAL MODULE: ./src/utils/config.ts
var config = __webpack_require__("SC9r");

// CONCATENATED MODULE: ./src/components/Layout/header/menu/left-menu/CategorySearchSwitcher.tsx








const CategoryIcon = ({
  link,
  height,
  width
}) => {
  // @ts-ignore
  return link ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: link,
    alt: "Icon",
    style: {
      width: width,
      height: height
    }
  }) : null;
};

const CategoryMenu = ({
  onClick,
  data,
  isLoading
}) => {
  if (isLoading) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: "Loading..."
    });
  }

  const handleOnClick = item => {
    onClick(item);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    children: data.data.map(item => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LeftMenuStyle["e" /* MenuItem */], {
      onClick: () => handleOnClick({
        id: item.id,
        name: item.name,
        image: item.image
      }),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CategoryIcon, {
        link: item.image,
        height: "20px",
        width: "20px"
      }), item.name]
    }, item.id))
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {});
};

const CategorySearch = ({
  category,
  setCategory
}) => {
  // const router=useRouter()
  const [data, isLoading] = Object(useFetch["a" /* default */])(`${config["a" /* API_BASE_URL */]}/api/v1/category/`);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(LeftMenuStyle["d" /* MainMenu */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(popover["a" /* default */], {
      className: "right",
      handler: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LeftMenuStyle["f" /* SelectedItem */], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: [category && /*#__PURE__*/Object(jsx_runtime_["jsx"])(LeftMenuStyle["b" /* Icon */], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CategoryIcon, {
              link: category === null || category === void 0 ? void 0 : category.image,
              height: "16px",
              width: "16px"
            })
          }), category ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: category === null || category === void 0 ? void 0 : category.name
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "Filter by Category"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LeftMenuStyle["a" /* Arrow */], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuDown, {})
        })]
      }),
      content: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CategoryMenu, {
        onClick: setCategory,
        data: data,
        isLoading: isLoading
      })
    })
  });
};

/* harmony default export */ var CategorySearchSwitcher = (CategorySearch);
// EXTERNAL MODULE: ./src/components/Layout/popover/useOnClickOutside.js
var useOnClickOutside = __webpack_require__("Dr0C");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/Layout/header/search/popup.style.ts


const PopoverWrapper = external_styled_components_default.a.div`
  ${Object(external_styled_components_["css"])({
  flexGrow: 1,
  fontSize: 'base',
  px: 20,
  height: 38,
  color: 'text.regular',
  backgroundColor: 'inherit'
})}
  position: relative;
  cursor: pointer;
  //flex-grow: 100;
  .popover-handler {
    width: 100%;
    display: inline-block;
    flex-grow: 1;
    cursor: pointer;
  }

  .popover-content {
    left: 0px;
    top: calc(100% + 15px);
    display: block;
    min-width: 100%;
    padding: 15px 20px;
    position: absolute;
    border-radius: ${Object(theme_get_["themeGet"])('radii.base', '6px')};
    background-color: ${Object(theme_get_["themeGet"])('colors.white', '#ffffff')};
    box-shadow: 0 3px 20px rgba(142, 142, 142, 0.14);
    z-index: 99;

    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 9px 8px;
      border-color: transparent transparent ${Object(theme_get_["themeGet"])('colors.white', '#ffffff')} transparent;
      top: -8px;
      left: 15px;
      box-shadow: -4px -4px 8px -3px rgba(142, 142, 142, 0.14);
      pointer-events: none;
    }
  }

  /* If direction prop set to right */

  &.right {
    .popover-content {
      left: auto;
      right: 0px;

      &:before {
        left: auto;
        right: 15px;
      }
    }
  }
`;
/* harmony default export */ var popup_style = (PopoverWrapper);
// CONCATENATED MODULE: ./src/components/Layout/header/search/suggestionPopup.tsx






const SuggestionPopup = ({
  className,
  handler,
  content,
  direction
}) => {
  // Popover State
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(false); // Ref

  const ref = Object(external_react_["useRef"])(); // Add all classs to an array

  const addAllClasses = ['popover-wrapper']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Add direction class on popover content


  if (direction) {
    addAllClasses.push(direction);
  } // Toggle Popover content


  const handleToggle = e => {
    e.stopPropagation();
    setState(state => !state);
  }; // Handle document click


  const handleDocumentClick = e => {
    e.stopPropagation();

    if (state) {
      handleToggle(e);
    }
  }; // Handle window event listener


  Object(external_react_["useEffect"])(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  }); // Close popover on click outside

  Object(useOnClickOutside["a" /* default */])(ref, () => setState(state => false));
  return (
    /*#__PURE__*/
    // @ts-ignore
    Object(jsx_runtime_["jsxs"])(popup_style, {
      className: addAllClasses.join(' '),
      ref: ref,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "popover-handler",
        onClick: handleToggle,
        children: handler
      }), state && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "popover-content",
        children: content && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "inner-wrap",
          onClick: handleToggle,
          children: content
        })
      })]
    })
  );
};

/* harmony default export */ var suggestionPopup = (SuggestionPopup);
// EXTERNAL MODULE: ./src/components/Layout/header/menu/currency-switcher/CurrencySwitcherStyles.tsx
var CurrencySwitcherStyles = __webpack_require__("d75t");

// EXTERNAL MODULE: ./src/components/Layout/header/menu/left-menu/LeftMenu.tsx
var LeftMenu = __webpack_require__("UxYT");

// CONCATENATED MODULE: ./src/components/Layout/search-box/search-box.tsx











 // @ts-ignore

const ItemsMenu = ({
  onClick,
  text,
  category
}) => {
  const textQuery = text === '' ? `text=${text}` : '';
  const categoryQuery = category ? `category=${category}` : '';
  const [data, isLoading, error, reFetch] = Object(useFetch["a" /* default */])(`${config["a" /* API_BASE_URL */]}/api/v1/products/autocomplete/?${textQuery}&${categoryQuery}`);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: data === null || data === void 0 ? void 0 : data.map(item => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CurrencySwitcherStyles["c" /* MenuItem */], {
      onClick: onClick,
      value: item.id,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LeftMenu["a" /* CategoryIcon */], {
          link: item.thumbImage,
          height: "25px",
          width: "25px"
        })
      }), item.name]
    }, item._id))
  });
};

const SearchBox = props => {
  const {
    0: search,
    1: setSearch
  } = Object(external_react_["useState"])('');
  const {
    0: category,
    1: setCategory
  } = Object(external_react_["useState"])(null);
  const {
    name,
    minimal,
    buttonText,
    className,
    showButtonText = true,
    shadow
  } = props;

  const handleOnChange = e => {
    const {
      value
    } = e.target;
    setSearch(value);
  };

  const onSearch = e => {
    e.preventDefault();
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_box_style["a" /* StyledForm */], {
    onSubmit: () => {},
    className: className,
    boxShadow: shadow,
    minimal: minimal,
    children: minimal ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CategorySearchSwitcher, {
        setCategory: setCategory,
        category: category
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(suggestionPopup, {
        content: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ItemsMenu, {
          onClick: () => {},
          text: search,
          category: category === null || category === void 0 ? void 0 : category.name
        }),
        handler: /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_box_style["b" /* StyledInput */], {
          type: "search",
          onChange: handleOnChange,
          value: search,
          name: name,
          autoComplete: 'off'
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchIcon["a" /* SearchIcon */], {
        style: {
          marginLeft: 16,
          marginRight: 16
        }
      })]
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(search_box_style["b" /* StyledInput */], {
        type: "search",
        onChange: handleOnChange,
        value: search,
        name: name
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(search_box_style["c" /* StyledSearchButton */], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchIcon["a" /* SearchIcon */], {
          style: {
            marginRight: 10
          }
        }), showButtonText && buttonText]
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/components/Layout/header/search/search.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Search = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBox, _objectSpread({
    name: "search",
    placeholder: "Search your products from here",
    buttonText: "Search"
  }, props));
};

/* harmony default export */ var search_search = __webpack_exports__["a"] = (Search);

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QeBL");


/***/ }),

/***/ "40cp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-6e7c67f4d42bcf948fe721c1e4a9a2f9.svg";

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4fft":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useLoginForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useLoginForm = () => {
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => _objectSpread(_objectSpread({}, inputs), {}, {
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleInputChange,
    inputs
  };
};



/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6ISp":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI4MTAiIGhlaWdodD0iNTQwIj48ZGVzYz5FdXJvcGVhbiBmbGFnPC9kZXNjPg0KPGRlZnM+PGcgaWQ9InMiPjxnIGlkPSJjIj48cGF0aCBpZD0idCIgZD0iTTAsMHYxaDAuNXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTEpcm90YXRlKDE4KSIvPjx1c2UgeGxpbms6aHJlZj0iI3QiIHRyYW5zZm9ybT0ic2NhbGUoLTEsMSkiLz48L2c+PGcgaWQ9ImEiPjx1c2UgeGxpbms6aHJlZj0iI2MiIHRyYW5zZm9ybT0icm90YXRlKDcyKSIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz48L2c+PHVzZSB4bGluazpocmVmPSIjYSIgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIvPjwvZz48L2RlZnM+DQo8cmVjdCBmaWxsPSIjMDM5IiB3aWR0aD0iODEwIiBoZWlnaHQ9IjU0MCIvPjxnIGZpbGw9IiNmYzAiIHRyYW5zZm9ybT0ic2NhbGUoMzApdHJhbnNsYXRlKDEzLjUsOSkiPjx1c2UgeGxpbms6aHJlZj0iI3MiIHk9Ii02Ii8+PHVzZSB4bGluazpocmVmPSIjcyIgeT0iNiIvPjxnIGlkPSJsIj48dXNlIHhsaW5rOmhyZWY9IiNzIiB4PSItNiIvPjx1c2UgeGxpbms6aHJlZj0iI3MiIHRyYW5zZm9ybT0icm90YXRlKDE1MCl0cmFuc2xhdGUoMCw2KXJvdGF0ZSg2NikiLz48dXNlIHhsaW5rOmhyZWY9IiNzIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApdHJhbnNsYXRlKDAsNilyb3RhdGUoMjQpIi8+PHVzZSB4bGluazpocmVmPSIjcyIgdHJhbnNmb3JtPSJyb3RhdGUoNjApdHJhbnNsYXRlKDAsNilyb3RhdGUoMTIpIi8+PHVzZSB4bGluazpocmVmPSIjcyIgdHJhbnNmb3JtPSJyb3RhdGUoMzApdHJhbnNsYXRlKDAsNilyb3RhdGUoNDIpIi8+PC9nPjx1c2UgeGxpbms6aHJlZj0iI2wiIHRyYW5zZm9ybT0ic2NhbGUoLTEsMSkiLz48L2c+DQo8L3N2Zz4="

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7f0m":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/offer-1-e96d904b90c7e0bf3e74574a6e5aa684.png";

/***/ }),

/***/ "8+XV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEO; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);




const SEO = ({
  title,
  description,
  canonical,
  css,
  js,
  image
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
    children: title
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "description",
    content: description
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "viewport",
    content: "width=device-width,minimum-scale=1,initial-scale=1"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "og:title",
    property: "og:title",
    content: title
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "og:description",
    property: "og:description",
    content: description
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:site_name",
    content: "Proper Noun"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:url",
    content: `${canonical}`
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:description",
    content: description
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:site",
    content: "@propernounco"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:creator",
    content: "@propernounco"
  }), css && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]("link", {
    rel: "stylesheet",
    href: `${css}`
  }), image ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:image",
    content: `${image}`
  }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:image",
    content: "https://www.propernoun.co/static/images/proper-noun-social.png"
  }), image && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:image",
    content: `${image}`
  }), canonical && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]("link", {
    rel: "canonical",
    href: `${canonical}`
  }), js && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
    type: "text/javascript",
    src: `${js}`
  })]
});

/***/ }),

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CkS3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// CONCATENATED MODULE: ./src/components/Layout/logo/logo.style.tsx


const LogoBox = external_styled_components_default.a.span(css_default()({
  color: 'text.bold',
  fontSize: 26,
  fontWeight: 'bold',
  cursor: 'pointer',
  mr: [0, 20, 40],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const LogoImage = external_styled_components_default.a.img({
  display: 'block',
  backfaceVisibility: 'hidden',
  maxWidth: 150
});
// CONCATENATED MODULE: ./src/components/Layout/logo/logo.tsx




const Logo = ({
  imageUrl,
  alt,
  onClick
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(LogoBox, {
    onClick: onClick,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LogoImage, {
      src: imageUrl,
      alt: alt
    })
  });
};

/* harmony default export */ var logo = __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "Dr0C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useOnClickOutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useOnClickOutside(ref, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, // Add ref and handler to effect dependencies
  // It's worth noting that because passed in handler is a new ...
  // ... function on every render that will cause this effect ...
  // ... callback/cleanup to run every render. It's not a big deal ...
  // ... but to optimize you can wrap handler in useCallback before ...
  // ... passing it into this hook.
  [ref, handler]);
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "E4aE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyledForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StyledInput; });
/* unused harmony export StyledCategoryName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StyledSearchButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 'base',
  width: props.minimal ? '100%' : 700,
  color: 'text.regular',
  backgroundColor: props.minimal ? 'gray.400' : 'white'
}), styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]);
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  flexGrow: 1,
  fontSize: 'base',
  px: 20,
  height: 38,
  color: 'text.regular',
  backgroundColor: 'inherit'
}), {
  border: 0,
  '&:focus': {
    outline: 0
  },
  '&::-webkit-input-placeholder, &::-moz-placeholder, &::-moz-placeholder, &::-ms-input-placeholder': {
    fontSize: 'base',
    color: 'text.regular',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: "100%"
  }
});
const StyledCategoryName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  fontSize: 14,
  fontWeight: 'bold',
  lineHeight: '38px',
  px: 15,
  color: 'primary.regular',
  backgroundColor: 'gray.200',
  borderRadius: 'base'
}), {
  margin: '5px',
  whiteSpace: 'nowrap',
  textTransform: 'capitalize'
});
const StyledSearchButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  backgroundColor: 'grey',
  color: 'white',
  fontSize: 'base',
  fontWeight: 'bold'
}), {
  display: 'flex',
  height: 38,
  alignItems: 'center',
  border: 0,
  outline: 0,
  paddingLeft: 10,
  paddingRight: 10,
  cursor: 'pointer',
  flexShrink: 0
});

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "ExBD":
/***/ (function(module, exports) {

module.exports = require("@styled-system/css");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "F6Pp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Products

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/Product/grid/ProductGrid.tsx


const ProductsRow = external_styled_components_default.a.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  background-color: ${Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7')};
  position: relative;
  z-index: 1;
  margin: 0 -15px;
  @media (max-width: 768px) {
    margin-left: -7.5px;
    margin-right: -7.5px;
    margin-top: 15px;
  }
`;
const ButtonWrapper = external_styled_components_default.a.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const ProductsCol = external_styled_components_default.a.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
  .book-card {
    border-radius: 0;
  }
  &.food-col {
    flex: 0 0 25%;
    max-width: 25%;
  }
  @media (min-width: 1501px) {
    &:nth-child(5n + 1) {
      .book-card {
        border-radius: 6px 0 0 6px;
      }
    }
    &:nth-child(5n) {
      .book-card {
        border-radius: 0 6px 6px 0;
      }
    }
  }
  @media (min-width: 1301px) and (max-width: 1500px) {
    flex: 0 0 25%;
    max-width: 25%;
    &.food-col {
      flex: 0 0 33.333%;
      max-width: 33.333%;
    }
    &:nth-child(4n + 1) {
      .book-card {
        border-radius: 6px 0 0 6px;
      }
    }
    &:nth-child(4n) {
      .book-card {
        border-radius: 0 6px 6px 0;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1300px) {
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
    &.food-col {
      flex: 0 0 33.3333333%;
      max-width: 33.3333333%;
      padding-left: 7.5px;
      padding-right: 7.5px;
      margin-bottom: 15px;
    }
    &:nth-child(3n + 1) {
      .book-card {
        border-radius: 6px 0 0 6px;
      }
    }
    &:nth-child(3n) {
      .book-card {
        border-radius: 0 6px 6px 0;
      }
    }
  }
  @media (max-width: 1199px) and (min-width: 991px) {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    &.food-col {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  @media (max-width: 768px) {
    padding-left: 7.5px;
    padding-right: 7.5px;
    margin-bottom: 15px;
  }
  @media (max-width: 767px) {
    flex: 0 0 50%;
    max-width: 50%;
    &.food-col {
      flex: 0 0 50%;
      max-width: 50%;
    }
    &:nth-child(2n + 1) {
      .book-card {
        border-radius: 6px 0 0 6px;
      }
    }
    &:nth-child(2n) {
      .book-card {
        border-radius: 0 6px 6px 0;
      }
    }
  }
`;
const MedicineCol = external_styled_components_default.a.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
  @media (max-width: 1300px) {
    flex: 0 0 25%;
    max-width: 25%;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (max-width: 1099px) and (min-width: 1025px) {
    flex: 0 0 33.333%;
    max-width: 33.333%;
  }
  @media (max-width: 767px) {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 30px;
  }
  @media (max-width: 560px) {
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 7.5px;
    padding-right: 7.5px;
    margin-bottom: 20px;
  }
`;
const NoResult = external_styled_components_default.a.div`
  width: 100%;
  padding: 100px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${Object(theme_get_["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(theme_get_["themeGet"])('fontSizes.lg', '21')}px;
  font-weight: ${Object(theme_get_["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136')};
`;
const LoaderWrapper = external_styled_components_default.a.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;
const LoaderItem = external_styled_components_default.a.div`
  width: 25%;
  padding: 0 15px;
  margin-bottom: 30px;
`;
const ProductCardWrapper = external_styled_components_default.a.div`
  height: 100%;
  > div {
    height: 100%;
  }
`;
// EXTERNAL MODULE: ./src/components/Others/placeholder/placeholder.tsx
var placeholder = __webpack_require__("tTxw");

// EXTERNAL MODULE: ./src/components/Others/no-result/no-result.svg
var no_result = __webpack_require__("wzlw");
var no_result_default = /*#__PURE__*/__webpack_require__.n(no_result);

// CONCATENATED MODULE: ./src/components/Others/no-result/no-result.style.tsx


const NoResultWrapper = external_styled_components_default.a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;

  h3 {
    font-size: ${Object(theme_get_["themeGet"])('fontSizes.xl', '24')}px;
    font-weight: ${Object(theme_get_["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136')};
    margin: 0 0 15px;
  }

  p {
    font-size: calc(${Object(theme_get_["themeGet"])('fontSizes.base', '15')}px + 1px);
    font-weight: ${Object(theme_get_["themeGet"])('fontWeights.regular', '400')};
    color: ${Object(theme_get_["themeGet"])('colors.text.regular', '#77798C')};
    margin: 0;
  }
`;
const ImageWrapper = external_styled_components_default.a.div`
  margin-top: 50px;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;
const no_result_style_ButtonWrapper = external_styled_components_default.a.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;
const Button = external_styled_components_default.a.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${Object(theme_get_["themeGet"])('colors.white', '#ffffff')};
  background-color: ${Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f')};
  height: 50px;
  border-radius: ${Object(theme_get_["themeGet"])('radii.base', '6px')};
  font-family: ${Object(theme_get_["themeGet"])('fonts.body', 'sans-serif')};
  font-size: calc(${Object(theme_get_["themeGet"])('fontSizes.base', '15')}px + 1px);
  font-weight: ${Object(theme_get_["themeGet"])('fontWeights.bold', '700')};
  text-decoration: none;
  text-transform: capitalize;
  padding: 0 30px;
  border: 0;
  transition: all 0.3s ease;
`;
// EXTERNAL MODULE: ./src/assets/icons/ArrowPrev.tsx
var ArrowPrev = __webpack_require__("KclG");

// EXTERNAL MODULE: ./src/components/Others/button/button.tsx
var button_button = __webpack_require__("fq6S");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./src/components/Others/no-result/no-result.tsx







 // import { SearchContext } from 'contexts/search/search.context';



const NoResultFound = ({
  id
}) => {
  const router = Object(router_["useRouter"])(); // const { dispatch } = React.useContext(SearchContext);

  function onClickButton() {
    // dispatch({
    //   type: 'RESET',
    // });
    const href = router.pathname;
    router.push(href, href, {
      shallow: true
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NoResultWrapper, {
    id: id,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
        id: "noResultFound",
        defaultMessage: "Sorry, No result found :("
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ImageWrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: no_result_default.a,
        alt: "No Result"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(no_result_style_ButtonWrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        onClick: onClickButton,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(button_button["a" /* Button */], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowPrev["a" /* ArrowPrev */], {}), " Go Back"]
        })
      })
    })]
  });
};

/* harmony default export */ var no_result_no_result = (NoResultFound);
// EXTERNAL MODULE: external "axios-hooks"
var external_axios_hooks_ = __webpack_require__("qUDc");
var external_axios_hooks_default = /*#__PURE__*/__webpack_require__.n(external_axios_hooks_);

// EXTERNAL MODULE: ./src/utils/config.ts
var config = __webpack_require__("SC9r");

// CONCATENATED MODULE: ./src/components/Product/grid/productGrid.style.tsx











const ErrorMessage = dynamic_default()(() => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, "vEnh")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("vEnh")],
    modules: ["../components/Product/grid/productGrid.style.tsx -> " + '@/components/Others/error-message/error-message']
  }
});
const GeneralCard = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "OZOA")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("OZOA")],
    modules: ["../components/Product/grid/productGrid.style.tsx -> " + '../card/ProductItem']
  }
});
const Products = ({
  deviceType
}) => {
  const router = Object(router_["useRouter"])();
  const [{
    data,
    loading,
    error
  }] = external_axios_hooks_default()(`${config["a" /* API_BASE_URL */]}/api/v1/products/similar/sas`);
  if (error) return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ErrorMessage, {
    message: error
  });

  if (loading) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LoaderWrapper, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LoaderItem, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(placeholder["f" /* default */], {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoaderItem, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(placeholder["f" /* default */], {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoaderItem, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(placeholder["f" /* default */], {})
      })]
    });
  }

  if (!data) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(no_result_no_result, {});
  }

  const renderCard = props => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(GeneralCard, {
      title: props.title,
      image: props.thumbImage,
      currency: "£",
      description: props.description,
      price: props.price,
      product: props
    }, props._id);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProductsRow, {
      children: data.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProductsCol, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProductCardWrapper, {
          children: renderCard(item)
        })
      }, index))
    })
  });
};
/* harmony default export */ var productGrid_style = __webpack_exports__["a"] = (Products);

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "IOt9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);







const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span`
  min-width: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink = ({
  href,
  label,
  intlId,
  router,
  icon,
  className,
  onClick,
  iconClass,
  dynamic
}) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    onClick: onClick,
    className: className ? className : '',
    children: dynamic ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: '/[type]',
      as: href,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
        className: isCurrentPath ? ' current-page' : '',
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [icon ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Icon, {
          className: iconClass,
          children: icon
        }) : '', /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "label",
          children: intlId ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: intlId ? intlId : 'defaultNavLinkId',
            defaultMessage: label
          }) : label
        })]
      })
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
        className: isCurrentPath ? ' current-page' : '',
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [icon ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Icon, {
          className: iconClass,
          children: icon
        }) : '', /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "label",
          children: label
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(NavLink));

/***/ }),

/***/ "J4Ja":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setSort */
/* unused harmony export setSubCategory */
/* unused harmony export setCategory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setDeliveryAddress; });
/* unused harmony export setBilling */
/* unused harmony export setCARD */
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aLks");

const setSort = sortType => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__[/* SHOP */ "e"].SET_SORT,
  sortType
});
const setSubCategory = subCategory => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__[/* SHOP */ "e"].SET_SUBCATEGORY,
  subCategory
});
const setCategory = category => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__[/* SHOP */ "e"].SET_CATEGORY,
  category
});
const setCurrency = currency => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__[/* SHOP */ "e"].SET_CURRENCY,
  currency
});
const setDeliveryAddress = address => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__[/* SHOP */ "e"].SET_ADDRESS,
  address
});
const setBilling = billing => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__[/* SHOP */ "e"].SET_BILLING,
  billing
});
const setCARD = card => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__[/* SHOP */ "e"].SET_BILLING,
  card
});

/***/ }),

/***/ "J7Kp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchIcon; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const SearchIcon = (_ref) => {
  let {
    color = 'currentColor',
    width = '14px',
    height = '14px'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["color", "width", "height"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M14.771,12.752,11.32,9.286a5.519,5.519,0,0,0,1.374-3.634A5.763,5.763,0,0,0,6.839,0,5.763,5.763,0,0,0,.984,5.652,5.763,5.763,0,0,0,6.839,11.3a5.936,5.936,0,0,0,3.354-1.023l3.477,3.492a.783.783,0,0,0,1.08.02A.72.72,0,0,0,14.771,12.752ZM6.839,1.475a4.259,4.259,0,0,1,4.327,4.178A4.259,4.259,0,0,1,6.839,9.83,4.259,4.259,0,0,1,2.511,5.652,4.259,4.259,0,0,1,6.839,1.475Z",
      transform: "translate(-0.984)",
      fill: color
    })
  }));
};

/***/ }),

/***/ "JMs0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/components/Layout/popover/useOnClickOutside.js
var useOnClickOutside = __webpack_require__("Dr0C");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/Layout/popover/popover.style.tsx


const PopoverWrapper = external_styled_components_default.a.div`
  position: relative;
  cursor: pointer;

  .popover-handler {
    display: inline-block;
    cursor: pointer;
  }

  .popover-content {
    left: 0px;
    top: calc(100% + 15px);
    display: block;
    min-width: 200px;
    width:100%;
    padding: 15px 20px;
    position: absolute;
    border-radius: ${Object(theme_get_["themeGet"])('radii.base', '6px')};
    background-color: ${Object(theme_get_["themeGet"])('colors.white', '#ffffff')};
    box-shadow: 0 3px 20px rgba(142, 142, 142, 0.14);
    z-index: 99;
    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 9px 8px;
      border-color: transparent transparent
        ${Object(theme_get_["themeGet"])('colors.white', '#ffffff')} transparent;
      top: -8px;
      left: 15px;
      box-shadow: -4px -4px 8px -3px rgba(142, 142, 142, 0.14);
      pointer-events: none;
    }
  }

  
`;
/* harmony default export */ var popover_style = (PopoverWrapper);
// CONCATENATED MODULE: ./src/components/Layout/popover/popover.tsx






const Popover = ({
  className,
  handler,
  content,
  direction
}) => {
  // Popover State
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(false); // Ref

  const ref = Object(external_react_["useRef"])(); // Add all classs to an array

  const addAllClasses = ['popover-wrapper']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Add direction class on popover content


  if (direction) {
    addAllClasses.push(direction);
  } // Toggle Popover content


  const handleToggle = e => {
    e.stopPropagation();
    setState(state => !state);
  }; // Handle document click


  const handleDocumentClick = e => {
    e.stopPropagation();

    if (state) {
      handleToggle(e);
    }
  }; // Handle window event listener


  Object(external_react_["useEffect"])(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  }); // Close popover on click outside

  Object(useOnClickOutside["a" /* default */])(ref, () => setState(state => false));
  return (
    /*#__PURE__*/
    // @ts-ignore
    Object(jsx_runtime_["jsxs"])(popover_style, {
      className: addAllClasses.join(' '),
      ref: ref,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "popover-handler",
        onClick: handleToggle,
        children: handler
      }), state && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "popover-content",
        children: content && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "inner-wrap",
          onClick: handleToggle,
          children: content
        })
      })]
    })
  );
};

/* harmony default export */ var popover = __webpack_exports__["a"] = (Popover);

/***/ }),

/***/ "KclG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowPrev; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ArrowPrev = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z",
      fill: "currentColor",
      stroke: "currentColor"
    })
  });
};

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "N44y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/hooks/httpInstance.ts

const instance = external_axios_default.a.create({
  baseURL: '/'
});

const requestHandler = config => {
  // Modify config here
  // if (auth.getToken()) {
  //   // config.headers['Authorization'] = `Bearer ${auth.getToken()}`;
  // }
  config.timeout = 30000;
  return config;
};

instance.interceptors.request.use(requestHandler);
instance.interceptors.response.use(undefined, error => {
  var _error$response, _error$response$data;

  // handle error
  if (external_axios_default.a.isCancel(error)) {
    console.log(`request cancelled`);
  }

  return Promise.reject((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error);
});
/* harmony default export */ var httpInstance = (instance);
// CONCATENATED MODULE: ./src/hooks/useFetch.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const memStore = {};

const useFetch = (url, props = {}, axiosOptions = {}) => {
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(null);
  const {
    0: shouldRefetch,
    1: reFetch
  } = Object(external_react_["useState"])({});
  Object(external_react_["useEffect"])(() => {
    let unmounted = false;
    let source = external_axios_default.a.CancelToken.source();

    const getData = async () => {
      setIsLoading(true);

      try {
        let httpConfig = _objectSpread(_objectSpread({
          method: 'GET',
          url: url
        }, axiosOptions), {}, {
          cancelToken: source.token
        });

        let res = await httpInstance(httpConfig);

        if (!unmounted) {
          setIsLoading(false);
          setData(res.data);
          if (props.cache) memStore[url] = res.data;
        }
      } catch (err) {
        if (!unmounted) {
          console.log(err);
          setIsLoading(false);
          setError(err);
        }
      }
    };

    if (memStore[url] && !unmounted) {
      setIsLoading(false);
      setData(memStore[url]);
    } else {
      getData();
    }

    return () => {
      unmounted = true;
      source.cancel(`${url} canceled`);
    };
  }, [url, shouldRefetch]);
  return [data, isLoading, error, reFetch];
};

/* harmony default export */ var hooks_useFetch = __webpack_exports__["a"] = (useFetch);

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "OBDI":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/user-df391b87bdca9d6104a12a80fb0912ea.jpg";

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P9Nz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SearchWrapper; });
/* unused harmony export HeaderLeftSide */
/* unused harmony export HeaderRightSide */
/* unused harmony export MainMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MobileHeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MobileHeaderInnerWrapper; });
/* unused harmony export SelectedType */
/* unused harmony export DropDownArrow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DrawerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HamburgerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DrawerContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DrawerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LogoutView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LoginView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return UserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return UserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DrawerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DrawerMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return UserOptionMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SearchModalWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SearchModalClose; });
/* unused harmony export Flag */
/* unused harmony export TypeIcon */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const positionAnim = styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    opacity: 0;
    transition: all 0.3s ease;
  }
`;
const hideSearch = styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
  from {
    display: none;
  }

  to {
    display: flex;
  }
`;
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 5px;
  cursor: pointer;
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  svg {
    display: block;
    width: 17px;
    height: auto;
  }

  @media only screen and (min-width: 991px) and (max-width: 1366px) {
    opacity: 0;
  }
`;
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header`
  /* padding: 30px 60px; */
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.', '#ff0000')};
  box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
  transition: all 0.3s ease;
  &.home {
    position: absolute;
    background-color: transparent;
    box-shadow: none;
  }

  @media (min-width: 1600px) {
    padding: 25px 40px;
  }

  @media (max-width: 990px) {
    display: none;
  }

  .headerSearch {
    input {
      width: 100%;
    }
    margin: 0 30px;

    @media only screen and (min-width: 991px) and (max-width: 1200px) {
      margin: 0 15px;

      input {
        width: 100%;
      }

      .buttonText {
        display: none;
      }
    }
  }

  &.unSticky {
    animation: ${positionAnim} 0.3s ease;
    .headerSearch {
      animation: ${hideSearch} 0.3s ease;
      display: none;
    }
  }

  &.sticky {
    background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.nav.background', '#ff7474')};
    position: fixed;
    box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
    padding-top: 20px;
    padding-bottom: 20px;

    @media (max-width: 1400px) {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .headerSearch {
      display: flex;

      form {
        background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.nav.button', '#F3F3F3')};

        input {
          background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.nav.button', '#F3F3F3')};
        }
      }

      @media only screen and (min-width: 991px) and (max-width: 1200px) {
        .buttonText {
          display: none;
        }
      }
    }
  }

  .popover-wrapper {
    .popover-content {
      padding: 20px 0;

      .menu-item {
        a {
          margin: 0;
          padding: 12px 30px;
          border-bottom: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7')};
          cursor: pointer;
          white-space: nowrap;

          &:last-child {
            border-bottom: 0;
          }
          &:hover {
            color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
          }
          &.current-page {
            color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
          }

          .menu-item-icon {
            margin-right: 15px;
          }
        }
      }
    }
  }

  .headerSearch {
    input {
      @media (max-width: 1400px) {
        padding: 0 15px;
        font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
      }

      @media only screen and (min-width: 991px) and (max-width: 1200px) {
      }
    }
    button {
      @media (max-width: 1400px) {
        padding: 0 15px;
        font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
      }
    }
  }
`;
const HeaderLeftSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`;
const HeaderRightSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  .menu-icon {
    min-width: 14px;
    margin-right: 7px;
  }

  .menu-item {
    a {
      font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
      font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
      font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
      color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
      line-height: 1.2em;
      display: block;
      transition: 0.15s ease-in-out;
      display: flex;
      align-items: center;
      margin-right: 45px;

      @media (max-width: 1400px) {
        margin-right: 35px;
        font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
      }
      &:hover {
        color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
      }
      &.current-page {
        color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
      }
    }
  }

  .user-pages-dropdown {
    .popover-handler {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: block;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .popover-content {
      .inner-wrap {
        /* padding: ; */
      }
    }
  }
`;
const MainMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;

  .popover-wrapper {
    .popover-content {
      .menu-item {
        font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
        a {
          font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
          font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
          color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
          line-height: 1.2em;
          display: block;
          padding: 15px 30px;
          border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
          transition: 0.15s ease-in-out;
          display: flex;
          align-items: center;
          @media (max-width: 1400px) {
            margin-right: 10px;
            font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
          }

          @media only screen and (min-width: 991px) and (max-width: 1200px) {
            padding: 15px 30px;
          }

          &:hover {
            color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
          }
          &.current-page {
            color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
            background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
          }
        }
      }
    }
  }
`;
const MobileHeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  @media (min-width: 991px) {
    .desktop {
      display: none;
    }
  }
`;
const MobileHeaderInnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  transition: 0.25s ease-in-out;

  &.home {
    position: absolute;
    background-color: transparent;
    box-shadow: none;
  }

  &.unSticky:not(.home) {
    background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.nav.background', '#ffffff')};
    box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
  }

  &.sticky {
    position: fixed;
    background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.nav.background', '#ffffff')};
    box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};

    @media only screen and (min-width: 991px) and (max-width: 1366px) {
      .searchIconWrapper {
        opacity: 1;
      }
    }
  }
`;
const SelectedType = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  width: auto;
  height: 38px;
  display: flex;
  align-items: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  border: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1')};
  padding: 0 15px;
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
  outline: 0;
  min-width: 150px;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
    text-decoration: none;

    &:first-child {
      margin-right: auto;
    }
  }
`;
const DropDownArrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  width: 12px;
  margin-left: 16px;
`;
const DrawerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div``;
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-left: auto;
  margin-right: auto;

  img {
    display: block;
  }
`;
const HamburgerIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 26px;
  cursor: pointer;
  display: block;
  position: relative;
  > span {
    display: block;
    background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
    border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
    height: 2px;
    margin-bottom: 6px;

    transition: 0.2s ease-in-out;
    &:nth-child(1) {
      width: 26px;
    }
    &:nth-child(2) {
      width: 12px;
    }
    &:nth-child(3) {
      width: 22px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &:hover {
    > span {
      &:nth-child(1) {
        width: 12px;
      }
      &:nth-child(2) {
        width: 22px;
      }
      &:nth-child(3) {
        width: 26px;
      }
    }
  }
`;
const DrawerContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding-top: 60px;
`;
const DrawerClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: block;
  position: absolute;
  left: 35px;
  top: 14px;
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};
  cursor: pointer;
  padding: 10px;
  z-index: 1;
  svg {
    display: block;
    width: 12px;
    height: auto;
  }
`;
const DrawerProfile = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7')};
  padding: 45px;
`;
const LogoutView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .sign_in {
    /* background: transparent; */
    border: 0;
    padding-left: 0;
    padding-right: 25px;
  }
  .sign_in,
  .sign_up {
    height: 36px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;
const LoginView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
`;
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
const UserDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  h3 {
    font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base' + 'px', '15px')} - 1px);
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
    margin-bottom: 10px;
    line-height: 1.2;
  }
  span {
    display: block;
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.xs', '12')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  }
`;
const DrawerMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 40px 0;
`;
const DrawerMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  &:last-child {
    .drawer_menu_item {
      margin-bottom: 0;
    }
  }
  .drawer_menu_item {
    a,
    .logoutBtn {
      display: block;
      padding: 5px 45px;
      font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15px')} - 1px);
      font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
      color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
      margin-bottom: 19px;
      position: relative;
      transition: 0.15s ease-in-out;

      &:hover {
        color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: transparent;
      }
      &.current-page {
        color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
        font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
        &:before {
          background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
        }
      }
    }
  }
`;
const UserOptionMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 45px 0;
  border-top: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.700', '#e6e6e6')};
`;
const SearchModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  display: flex;
  width: 100%;

  .header-modal-search {
    width: calc(100% - 60px);

    @media (max-width: 420px) {
      input {
        width: 150px;
      }
    }

    button {
      background: transparent;
      color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
      padding-left: 15px;
      padding-right: 15px;
    }
    input {
      color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;
const SearchModalClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  border: 0;
  background: transparent;
  display: block;
  padding: 0 15px;
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    display: block;
    width: 20px;
    height: auto;
  }
`;
const Flag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-right: 7px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  overflow: hidden;
  svg {
    width: 20px;
    height: auto;
  }
`;
const TypeIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
`;
/* harmony default export */ __webpack_exports__["s"] = (HeaderWrapper);

/***/ }),

/***/ "QeBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: ./src/components/Layout/popover/popover.tsx + 1 modules
var popover = __webpack_require__("JMs0");

// CONCATENATED MODULE: ./src/assets/icons/ArrowDropDown.tsx


const ArrowDropDown = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "5",
    viewBox: "0 0 10 5",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      "data-name": "Path 2030",
      d: "M0,63.75l5,5,5-5Z",
      transform: "translate(0 -63.75)",
      fill: "currentColor"
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/CategoryIcon.tsx


const CategoryIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      "data-name": "Path 2029",
      d: "M13.563,7.876H8.313a.437.437,0,0,0-.437.437v5.25A.437.437,0,0,0,8.313,14h5.25A.437.437,0,0,0,14,13.564V8.314A.437.437,0,0,0,13.563,7.876Zm0-7.875H8.313a.437.437,0,0,0-.437.437v5.25a.437.437,0,0,0,.437.437h5.25A.437.437,0,0,0,14,5.688V.438A.437.437,0,0,0,13.563,0ZM5.687,0H.437A.438.438,0,0,0,0,.438v5.25a.437.437,0,0,0,.437.437h5.25a.437.437,0,0,0,.437-.437V.438A.438.438,0,0,0,5.687,0Zm0,7.875H.437A.437.437,0,0,0,0,8.314v5.25A.437.437,0,0,0,.437,14h5.25a.437.437,0,0,0,.437-.437V8.314A.437.437,0,0,0,5.687,7.876Z",
      transform: "translate(0 -0.001)",
      fill: "currentColor"
    })
  });
};
// EXTERNAL MODULE: ./src/components/Others/placeholder/placeholder.tsx
var placeholder = __webpack_require__("tTxw");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/Layout/header/sidebar/sidebar.style.tsx


const Fade = external_styled_components_["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const PopoverWrapper = external_styled_components_default.a.div`
  @media (min-width: 991px) {
    display: none;
  }

  .popover-handler {
    display: block;
    padding: 15px;
    cursor: pointer;
  }
  .popover-content {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    border-radius: 0;
    box-shadow: none;
    padding: 25px 35px;
    border-top: 1px solid ${Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1')};

    &::before {
      display: none;
    }
    .category-dropdown {
      animation: ${Fade} 0.6s;
    }
    @media (max-width: 990px) {
      padding: 25px;
    }
  }
`;
const RequestMedicine = external_styled_components_default.a.span`

`;
const SidebarWrapper = external_styled_components_default.a.div`
  max-height: 100vh;
  padding: 35px 0 45px 0px;

  @media (max-width: 1199px) {
    padding: 40px 0 40px 0px;
  }

  @media (max-width: 990px) {
    display: none;
    padding: 0;
  }
`;
const CategoryWrapper = external_styled_components_default.a.div`
  flex:0.3;

  position: relative;
  width: 100%;
`;
const TreeWrapper = external_styled_components_default.a.div`
  padding-left: 50px;
  padding-right: 20px;
`;
const PopoverHandler = external_styled_components_default.a.div`
  font-size: calc(${Object(theme_get_["themeGet"])('fontSizes.base', '15px')} - 1px);
  font-weight: ${Object(theme_get_["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136')};
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    &:first-child {
      flex-grow: 1;
      svg {
        margin-right: 10px;
      }
    }
    &:last-child {
      color: ${Object(theme_get_["themeGet"])('colors.text.regular', '#77798c')};
    }
  }
`;
const Loading = external_styled_components_default.a.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${Object(theme_get_["themeGet"])('fontSizes.base', '15px')} - 1px);
  color: ${Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136')};
`;
// EXTERNAL MODULE: external "resize-observer-polyfill"
var external_resize_observer_polyfill_ = __webpack_require__("ocwR");
var external_resize_observer_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_resize_observer_polyfill_);

// CONCATENATED MODULE: ./src/assets/hooks.tsx


function usePrevious(value) {
  const ref = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => void (ref.current = value), [value]);
  return ref.current;
}
function useMeasure() {
  const ref = Object(external_react_["useRef"])();
  const {
    0: bounds,
    1: set
  } = Object(external_react_["useState"])({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  });
  const {
    0: ro
  } = Object(external_react_["useState"])(() => new external_resize_observer_polyfill_default.a(([entry]) => set(entry.contentRect)));
  Object(external_react_["useEffect"])(() => {
    if (ref.current) {
      // @ts-ignore
      ro.observe(ref.current);
    }

    return () => ro.disconnect();
  }, []);
  return [{
    ref
  }, bounds];
}
// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__("KwCx");

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// CONCATENATED MODULE: ./src/components/Layout/tree-menu/tree-menu.style.tsx



const Header = external_styled_components_default.a.header(props => css_default()({
  fontSize: props.depth === 'parent' ? ['base'] : ['sm'],
  fontWeight: 'medium',
  display: 'flex',
  alignItems: 'center',
  marginBottom: props.depth === 'parent' ? 12 : 0,
  color: props.depth === 'parent' ? props.open ? 'primary.regular' : 'text.bold' : props.open ? 'primary.regular' : 'text.regular',
  cursor: 'pointer',
  transition: '0.15s ease-in-out',
  padding: props.depth === 'parent' ? '5px 0' : '5px 10px',
  marginLeft: props.depth === 'child' ? '-10px' : null,
  borderRadius: props.depth === 'child' ? 'base' : null,
  backgroundColor: props.depth === 'child' ? props.open && 'gray.200' : null,
  '.toggleButton': {
    color: props.open ? 'primary.regular' : 'text.bold',
    padding: '0 5px',
    marginLeft: 'auto',
    height: 'auto',
    transition: 'transform 0.3s',
    transform: props.open ? 'rotate(90deg)' : ''
  },
  '&:hover': {
    color: 'primary.regular',
    '.toggleButton': {
      color: 'primary.regular'
    }
  }
}), {
  outline: 0
});
const IconWrapper = external_styled_components_default.a.div(props => css_default()({
  width: props.depth === 'child' ? 10 : 30,
  height: 'auto',
  marginRight: props.depth === 'child' ? '8px' : 15,
  svg: {
    maxWidth: '100%',
    maxHeight: 30,
    height: props.depth === 'child' ? '2px' : 'auto'
  },
  img: {
    maxWidth: '100%',
    maxHeight: 30,
    height: props.depth === 'child' ? '2px' : 'auto'
  }
}), {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  flexShrink: 0
});
const Title = external_styled_components_default.a.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align:middle ;
  overflow: hidden;
  font-size: ${props => props.depth === 'child' ? '16px' : "18px"};
`;
const Content = external_styled_components_default()(external_react_spring_["animated"].div)({
  willChange: 'transform, opacity, height',
  borderLeft: 0,
  overflow: 'hidden'
});
const Frame = external_styled_components_default.a.div(props => css_default()({
  marginBottom: props.depth === 'parent' ? 15 : 10,
  paddingLeft: props.depth === 'child' ? 32 : 0
}), {
  position: 'relative',
  overflowX: 'hidden'
});
// EXTERNAL MODULE: ./src/components/Others/button/button.tsx
var button_button = __webpack_require__("fq6S");

// EXTERNAL MODULE: ./src/assets/icons/ArrowNext.tsx
var ArrowNext = __webpack_require__("0zej");

// EXTERNAL MODULE: ./src/components/Layout/header/menu/left-menu/LeftMenu.tsx
var LeftMenu = __webpack_require__("UxYT");

// CONCATENATED MODULE: ./src/components/Layout/tree-menu/tree-menu.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Tree = /*#__PURE__*/external_react_default.a.memo(({
  children,
  name,
  icon,
  // isOpen,
  onClick,
  dropdown,
  depth,
  defaultOpen = false
}) => {
  const {
    0: isOpen,
    1: setOpen
  } = Object(external_react_["useState"])(defaultOpen);
  Object(external_react_["useEffect"])(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);
  const previous = usePrevious(isOpen);
  const [bind, {
    height: viewHeight
  }] = useMeasure();
  const {
    height,
    opacity,
    transform
  } = Object(external_react_spring_["useSpring"])({
    from: {
      height: 0,
      opacity: 0,
      transform: 'translate3d(20px,0,0)'
    },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
    }
  }); // const Icon = icon ? Icons[icon] : depth === 'child' ? Icons['Minus'] : null;
  // @ts-ignore

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Frame, {
    depth: depth,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Header, {
      open: isOpen,
      depth: depth,
      className: depth,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IconWrapper, {
        depth: depth,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LeftMenu["a" /* CategoryIcon */], {
          link: icon,
          height: "25px",
          width: "25px"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
        onClick: onClick,
        depth: depth,
        children: name
      }), dropdown === true && /*#__PURE__*/Object(jsx_runtime_["jsx"])(button_button["a" /* Button */], {
        onClick: () => setOpen(!isOpen),
        variant: "text",
        className: "toggleButton",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowNext["a" /* ArrowNext */], {})
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Content, {
      style: {
        opacity,
        height: isOpen && previous === isOpen ? 'auto' : height
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_spring_["animated"].div, _objectSpread(_objectSpread({
        style: {
          transform
        }
      }, bind), {}, {
        children: children
      }))
    })]
  });
});
const TreeMenu = ({
  data,
  className,
  onClick,
  active
}) => {
  const handler = children => {
    return children.map(subOption => {
      if (!subOption.subCategory) {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tree, {
          name: subOption.name,
          icon: subOption === null || subOption === void 0 ? void 0 : subOption.image,
          depth: "child",
          onClick: () => onClick(subOption.id),
          defaultOpen: active === subOption.id
        }, subOption._id);
      }

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tree, {
        name: subOption.name,
        icon: subOption.image,
        dropdown: !subOption.subCategory.length ? false : true,
        depth: "parent",
        onClick: () => onClick(subOption.id),
        defaultOpen: active === subOption.id || subOption.subCategory.some(item => item.id === active),
        children: handler(subOption.subCategory)
      }, subOption._id);
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: handler(data === null || data === void 0 ? void 0 : data.data)
  });
};
// EXTERNAL MODULE: ./src/hooks/useFetch.ts + 1 modules
var useFetch = __webpack_require__("N44y");

// EXTERNAL MODULE: ./src/utils/config.ts
var config = __webpack_require__("SC9r");

// CONCATENATED MODULE: ./src/components/Layout/header/sidebar/sidebar.tsx




function sidebar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function sidebar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sidebar_ownKeys(Object(source), true).forEach(function (key) { sidebar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sidebar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function sidebar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const SidebarCategory = ({
  deviceType: {
    mobile,
    tablet,
    desktop
  }
}) => {
  const router = Object(router_["useRouter"])();
  const [data, isLoading] = Object(useFetch["a" /* default */])(`${config["a" /* API_BASE_URL */]}/api/v1/category/sub`);
  const {
    pathname,
    query
  } = router;
  const selectedQueries = query.category;

  if (isLoading) {
    if (mobile || tablet) {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(placeholder["e" /* SidebarMobileLoader */], {});
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(placeholder["d" /* SidebarLoader */], {});
  }

  if (isLoading) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(placeholder["d" /* SidebarLoader */], {});
  }

  const onCategoryClick = slug => {
    const {
      type
    } = query,
          rest = _objectWithoutProperties(query, ["type"]);

    if (type) {
      router.push({
        pathname,
        query: sidebar_objectSpread(sidebar_objectSpread({}, rest), {}, {
          category: slug
        })
      }, {
        pathname: `/${type}`,
        query: sidebar_objectSpread(sidebar_objectSpread({}, rest), {}, {
          category: slug
        })
      });
    } else {
      router.push({
        pathname,
        query: sidebar_objectSpread(sidebar_objectSpread({}, rest), {}, {
          category: slug
        })
      });
    }
  };

  const isSidebarSticky = true;

  if (!data) {
    if (mobile || tablet) {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(placeholder["e" /* SidebarMobileLoader */], {});
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(placeholder["d" /* SidebarLoader */], {});
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CategoryWrapper, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PopoverWrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(popover["a" /* default */], {
        handler: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(PopoverHandler, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CategoryIcon, {}), "Select your Category"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowDropDown, {})
          })]
        }),
        className: "category-popover",
        content: /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TreeMenu, {
            data: data,
            onClick: onCategoryClick,
            active: selectedQueries
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SidebarWrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_stickynode_default.a, {
        enabled: isSidebarSticky,
        top: 110,
        className: "leftSideBar",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_custom_scrollbars_["Scrollbars"], {
          universal: true,
          autoHide: true,
          autoHeight: true,
          autoHeightMax: 1000,
          renderView: props => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", sidebar_objectSpread(sidebar_objectSpread({}, props), {}, {
            style: sidebar_objectSpread(sidebar_objectSpread({}, props.style), {}, {
              marginLeft: props.style.marginRight,
              marginRight: props.style.marginRight
            })
          })),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TreeWrapper, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TreeMenu, {
              data: data,
              onClick: onCategoryClick,
              active: selectedQueries
            })
          })
        })
      })
    })]
  });
};

/* harmony default export */ var sidebar = (SidebarCategory);
// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__("99J/");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);

// EXTERNAL MODULE: ./src/assets/icons/ArrowPrev.tsx
var ArrowPrev = __webpack_require__("KclG");

// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__("VLDe");

// CONCATENATED MODULE: ./src/components/Others/carousel/carousel.tsx




function carousel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function carousel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { carousel_ownKeys(Object(source), true).forEach(function (key) { carousel_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { carousel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function carousel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function carousel_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = carousel_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function carousel_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const ButtonPrev = external_styled_components_default()('button')`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Object(theme_get_["themeGet"])('colors.white', '#ffffff')};
  color: ${Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F')};
  padding: 0;
  border-radius: 20px;
  box-shadow: ${Object(theme_get_["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 40px;
  margin-top: -20px;
  z-index: 99;
`;
const ButtonNext = external_styled_components_default()('button')`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: ${Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F')};
  padding: 0;
  border-radius: 20px;
  box-shadow: ${Object(theme_get_["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 40px;
  margin-top: -20px;
  z-index: 99;
`;
const ButtonGroupWrapper = external_styled_components_default()('div')``;

const PrevButton = ({
  onClick,
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonPrev, {
    onClick: e => {
      e.preventDefault();
      onClick();
    },
    className: "prevButton",
    children: children
  });
};

const NextButton = ({
  onClick,
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonNext, {
    onClick: e => {
      e.preventDefault();
      onClick();
    },
    className: "nextButton",
    children: children
  });
};

const ButtonGroup = ({
  next,
  previous
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonGroupWrapper, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PrevButton, {
        onClick: () => previous(),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowPrev["a" /* ArrowPrev */], {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NextButton, {
        onClick: () => next(),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowNext["a" /* ArrowNext */], {})
      })]
    })
  });
};

function CustomCarousel(_ref) {
  let {
    data,
    deviceType,
    component,
    autoPlay = false,
    infinite = true,
    customLeftArrow,
    customRightArrow,
    itemClass,
    isRtl,
    mobile,
    desktop,
    tablet,
    children
  } = _ref,
      props = carousel_objectWithoutProperties(_ref, ["data", "deviceType", "component", "autoPlay", "infinite", "customLeftArrow", "customRightArrow", "itemClass", "isRtl", "mobile", "desktop", "tablet", "children"]);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 10000,
        min: 1232
      },
      items: desktop
    },
    tablet: {
      breakpoint: {
        max: 1232,
        min: 464
      },
      items: tablet
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: mobile
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    dir: "ltr",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_multi_carousel_default.a, carousel_objectSpread(carousel_objectSpread({
      arrows: false,
      responsive: responsive,
      showDots: false,
      slidesToSlide: 1,
      infinite: infinite,
      containerClass: "container-with-dots",
      itemClass: itemClass,
      autoPlay: autoPlay,
      autoPlaySpeed: 3000,
      renderButtonGroupOutside: true,
      additionalTransfrom: 0,
      customButtonGroup: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonGroup, {})
    }, props), {}, {
      children: // @ts-ignore
      data.map((item, index) => {
        if (children) return children;
        if (component) return component(item);
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            padding: '0 15px',
            overflow: 'hidden'
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: item.link,
            style: {
              display: 'flex',
              cursor: 'pointer'
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: item.imgSrc,
              alt: item.alt,
              style: {
                width: '100%',
                height: '100%',
                display: 'block',
                position: 'relative'
              }
            }, item.id)
          })
        }, index);
      })
    }))
  });
}
// CONCATENATED MODULE: ./styles/pages.style.tsx


const MobileCarouselDropdown = external_styled_components_default.a.div`
  @media (min-width: 990px) {
    display: none;
  }
  margin-top: 72px;
`;
const HeaderSection = external_styled_components_default.a.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
  background-color: ${Object(theme_get_["themeGet"])('colors.gray.300', '#f4f4f4')};
`;
const MainContentArea = external_styled_components_default.a.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: ${Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7')};
  padding-right: 0;
  transition: padding-right 0.35s ease-in-out;
`;
const SidebarSection = external_styled_components_default.a.div`
  background-color: ${Object(theme_get_["themeGet"])('colors.white', '#ffffff')};
  width: 280px;

  @media (max-width: 990px) {
    display: none;
  }
`;
const ContentSection = external_styled_components_default.a.div`
  width: calc(100% - 280px);
  height: auto;
  min-height: 100vh;
  padding: 30px 30px 50px;
  
  @media (max-width: 768px) {
    padding: 30px 7.5px 100px;
  }

  @media (max-width: 1199px) and (min-width: 991px) {
    padding: 15px 30px 50px;
  }

  @media (max-width: 1367px) and (min-width: 1200px) {
    padding: 15px 30px 50px;
  }

  @media (max-width: 990px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding-top: 15px;
    min-height: auto;
  }

  .offer-slider {
    padding: 0 0 30px 30px;
  }
`;
const OfferSection = external_styled_components_default.a.div`
  width: 100%;
  display: block;
  padding:   ${props => props.lessPadding ? "30px 60px 0 60px" : "60px 60px 0 60px"};
background-color: ${Object(theme_get_["themeGet"])('colors.white', '#ffffff')};
  position: relative;
  border-bottom: 1px solid ${Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1')};

  @media (max-width: 1199px) and (min-width: 991px) {
    padding: 20px 15px;
    .prevButton {
      left: 0;
    }

    .nextButton {
      right: 0;
    }
  }
  @media (max-width: 990px) {
    padding: 15px;

    .prevButton {
      left: 5px;
    }

    .nextButton {
      right: 5px;
    }
  }

  .react-multi-carousel-list {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
`;
const Heading = external_styled_components_default.a.h2`
  font-size: ${Object(theme_get_["themeGet"])('fontSizes.xl', '24')}px;
  font-weight: ${Object(theme_get_["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f')};
  padding: 0px 20px 20px;
  margin: 50px 10px 20px;
  border-bottom: 2px solid ${Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f')};
  width: auto;
  display: inline-block;
`;
const ProductsRow = external_styled_components_default.a.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  background-color: ${Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7')};

  @media (max-width: 768px) {
    margin-left: -7.5px;
    margin-right: -7.5px;
    margin-top: 15px;
  }
`;
const ProductsCol = external_styled_components_default.a.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;

  @media (max-width: 1650px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
  @media (max-width: 1300px) {
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
  }
  @media (max-width: 1199px) and (min-width: 900px) {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 899px) and (min-width: 769px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 768px) {
    padding-left: 7.5px;
    padding-right: 7.5px;
    margin-bottom: 15px;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: 490px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

// EXTERNAL MODULE: ./src/assets/images/promotion/offer-1.png
var offer_1 = __webpack_require__("7f0m");
var offer_1_default = /*#__PURE__*/__webpack_require__.n(offer_1);

// EXTERNAL MODULE: ./src/assets/images/promotion/offer-3.png
var offer_3 = __webpack_require__("hz1c");
var offer_3_default = /*#__PURE__*/__webpack_require__.n(offer_3);

// EXTERNAL MODULE: ./src/assets/images/promotion/offer-2.png
var offer_2 = __webpack_require__("eIFp");
var offer_2_default = /*#__PURE__*/__webpack_require__.n(offer_2);

// CONCATENATED MODULE: ./src/siteOffers.ts



const siteOffers = [{
  id: '1',
  imgSrc: offer_1_default.a,
  alt: 'Offer 1'
}, {
  id: '2',
  imgSrc: offer_2_default.a,
  alt: 'Offer 2'
}, {
  id: '3',
  imgSrc: offer_3_default.a,
  alt: 'Offer 3'
}, {
  id: '1',
  imgSrc: offer_1_default.a,
  alt: 'Offer 1'
}, {
  id: '2',
  imgSrc: offer_2_default.a,
  alt: 'Offer 2'
}, {
  id: '3',
  imgSrc: offer_3_default.a,
  alt: 'Offer 3'
}];
// EXTERNAL MODULE: ./src/components/Layout/header/site-navigation.ts
var site_navigation = __webpack_require__("QqhS");

// CONCATENATED MODULE: ./src/components/Layout/store-nav/store-nav.style.tsx


const StoreNavWrapper = external_styled_components_default.a.div`
  width: 100%;
  overflow: hidden;
  z-index: 1;
  position: relative;
  background-color: ${Object(theme_get_["themeGet"])('colors.white', '#ffffff')};
  height: 55px;
`;
const StoreNavLinks = external_styled_components_default.a.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  height: 80px;
  overflow-y: hidden;
  overflow-x: auto;
  padding-top: 15px;
  padding-bottom: 25px;
  padding-left: 15px;
  padding-right: 15px;
  .store-nav-link {
    margin-right: 10px;

    a {
      display: flex;
      align-items: center;
      font-size: calc(${Object(theme_get_["themeGet"])('fontSizes.base', '15px')} - 1px);
      font-weight: ${Object(theme_get_["themeGet"])('fontWeights.bold', '700')};
      color: ${Object(theme_get_["themeGet"])('colors.text.regular', '#77798C')};
      padding: 5px 9px;
      border-radius: ${Object(theme_get_["themeGet"])('radii.base', '6px')};
      line-height: 1.2;
      white-space: nowrap;

      svg {
        margin-right: 5px;
        flex-shrink: 0;
      }

      &.current-page {
        color: ${Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F')};
        background-color: ${Object(theme_get_["themeGet"])('colors.gray.100', '#f9f9f9')};
      }
    }
  }
`;
/* harmony default export */ var store_nav_style = (StoreNavWrapper);
// EXTERNAL MODULE: ./src/components/Layout/nav-link/nav-link.tsx
var nav_link = __webpack_require__("IOt9");

// CONCATENATED MODULE: ./src/components/Layout/store-nav/store-nav.tsx








const StoreNav = ({
  className,
  items = []
}) => {
  const [data, isLoading] = Object(useFetch["a" /* default */])(`${config["a" /* API_BASE_URL */]}/api/v1/category/`);

  if (isLoading) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(placeholder["a" /* CategoryMobile */], {});
  }

  if (!isLoading) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(store_nav_style, {
      className: className,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(StoreNavLinks, {
        children: data === null || data === void 0 ? void 0 : data.data.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(nav_link["a" /* default */], {
          className: "store-nav-link",
          href: item.id,
          label: item.name,
          intlId: item.id,
          dynamic: true
        }, index))
      })
    });
  }
};

/* harmony default export */ var store_nav = (StoreNav);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "axios-hooks"
var external_axios_hooks_ = __webpack_require__("qUDc");
var external_axios_hooks_default = /*#__PURE__*/__webpack_require__.n(external_axios_hooks_);

// CONCATENATED MODULE: ./src/components/Others/Featured/Featured.tsx










const ProductCard = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "OZOA")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("OZOA")],
    modules: ["../components/Others/Featured/Featured.tsx -> " + "../../Product/card/ProductItem"]
  }
});

const Featured = ({
  deviceType,
  title
}) => {
  const [{
    data,
    loading,
    error
  }] = external_axios_hooks_default()(`${config["a" /* API_BASE_URL */]}/api/v1/products/top`);

  if (loading) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        style: {
          paddingLeft: "30px"
        },
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(placeholder["b" /* FeaturedLoading */], {
        deviceType: deviceType
      })]
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      style: {
        paddingLeft: "30px"
      },
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomCarousel, {
      deviceType: deviceType,
      data: siteOffers,
      mobile: 2,
      tablet: 3,
      desktop: 4,
      children: data.map(product => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProductCard, {
        title: product.title,
        image: product.thumbImage,
        currency: "£",
        description: product.description,
        price: product.price,
        product: product
      }, product._id))
    })]
  });
};

/* harmony default export */ var Featured_Featured = (Featured);
// EXTERNAL MODULE: ./src/components/Layout/layout.tsx + 8 modules
var layout = __webpack_require__("sNzC");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/actions/globalActions.ts + 1 modules
var globalActions = __webpack_require__("lHkW");

// EXTERNAL MODULE: ./src/components/Product/grid/productGrid.style.tsx + 3 modules
var productGrid_style = __webpack_require__("F6Pp");

// EXTERNAL MODULE: ./src/components/Others/seo.tsx
var seo = __webpack_require__("8+XV");

// CONCATENATED MODULE: ./src/pages/index.tsx




 // @ts-ignore














const CartPopUp = dynamic_default()(() => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, "gZAk")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("gZAk")],
    modules: ["index.tsx -> " + "../features/carts/cart-popup"]
  }
});

const Home = ({
  deviceType
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(globalActions["a" /* loadUser */])());
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(seo["a" /* SEO */], {
      description: "Best place to find all the goods.",
      title: "WiseCat-Shopping online has never been easier"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(reuse_modal_["Modal"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(layout["a" /* default */], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(MobileCarouselDropdown, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(store_nav, {
            items: site_navigation["b" /* CATEGORY_MENU_ITEMS */]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sidebar, {
            deviceType: deviceType
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MainContentArea, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SidebarSection, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(sidebar, {
              deviceType: deviceType
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentSection, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(OfferSection, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                style: {
                  margin: '20px -10px'
                },
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomCarousel, {
                  deviceType: deviceType,
                  data: siteOffers,
                  mobile: 1,
                  tablet: 2,
                  desktop: 3
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(OfferSection, {
              lessPadding: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Featured_Featured, {
                  deviceType: deviceType,
                  title: "Top products"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(OfferSection, {
              lessPadding: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Featured_Featured, {
                  deviceType: deviceType,
                  title: "Featured Items"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(OfferSection, {
              lessPadding: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                  style: {
                    paddingLeft: "30px"
                  },
                  children: "More Products"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(productGrid_style["a" /* default */], {
                  deviceType: deviceType
                })]
              })
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CartPopUp, {
          deviceType: deviceType
        })]
      })
    })]
  });
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "QqhS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HOME_PAGE */
/* unused harmony export GROCERY_PAGE */
/* unused harmony export MAKEUP_PAGE */
/* unused harmony export CLOTHING_PAGE */
/* unused harmony export BAGS_PAGE */
/* unused harmony export BOOK_PAGE */
/* unused harmony export FURNITURE_PAGE */
/* unused harmony export MEDICINE_PAGE */
/* unused harmony export RESTAURANT_PAGE */
/* unused harmony export REQUEST_MEDICINE_PAGE */
/* unused harmony export CHECKOUT_PAGE */
/* unused harmony export CHECKOUT_PAGE_TWO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PROFILE_PAGE; });
/* unused harmony export YOUR_ORDER_PAGE */
/* unused harmony export ORDER_RECEIVED_PAGE */
/* unused harmony export OFFER_PAGE */
/* unused harmony export HELP_PAGE */
/* unused harmony export TERMS_AND_SERVICES_PAGE */
/* unused harmony export PRIVACY_POLICY_PAGE */
/* unused harmony export HOME_MENU_ITEM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HELP_MENU_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return OFFER_MENU_ITEM; });
/* unused harmony export ORDER_MENU_ITEM */
/* unused harmony export REQUEST_MEDICINE_MENU_ITEM */
/* unused harmony export PROFILE_MENU_ITEM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHORIZED_MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CATEGORY_MENU_ITEMS; });
/* unused harmony export SIDEBAR_DATA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MOBILE_DRAWER_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CURRENCY_MENU; });
const HOME_PAGE = '/';
const GROCERY_PAGE = '/grocery';
const MAKEUP_PAGE = '/makeup';
const CLOTHING_PAGE = '/clothing';
const BAGS_PAGE = '/bags';
const BOOK_PAGE = '/book';
const FURNITURE_PAGE = '/furniture';
const MEDICINE_PAGE = '/medicine';
const RESTAURANT_PAGE = '/restaurant';
const REQUEST_MEDICINE_PAGE = '/request-medicine';
const CHECKOUT_PAGE = '/checkout';
const CHECKOUT_PAGE_TWO = '/checkout-alternative';
const PROFILE_PAGE = '/profile';
const YOUR_ORDER_PAGE = '/order';
const ORDER_RECEIVED_PAGE = '/order-received';
const OFFER_PAGE = '/offer';
const HELP_PAGE = '/help';
const TERMS_AND_SERVICES_PAGE = '/terms';
const PRIVACY_POLICY_PAGE = '/privacy'; // Mobile Drawer Menus

const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE
};
const HELP_MENU_ITEM = {
  id: 'nav.help',
  defaultMessage: 'Help',
  href: HELP_PAGE
};
const OFFER_MENU_ITEM = {
  id: 'nav.offer',
  defaultMessage: 'Offer',
  href: OFFER_PAGE
};
const ORDER_MENU_ITEM = {
  id: 'nav.order',
  href: YOUR_ORDER_PAGE,
  defaultMessage: 'Order'
};
const REQUEST_MEDICINE_MENU_ITEM = {
  id: 'nav.request_medicine',
  defaultMessage: 'Request Medicine',
  href: REQUEST_MEDICINE_PAGE
};
const PROFILE_MENU_ITEM = {
  id: 'nav.profile',
  defaultMessage: 'Profile',
  href: PROFILE_PAGE
};
const AUTHORIZED_MENU_ITEMS = [PROFILE_MENU_ITEM, {
  id: 'nav.checkout',
  defaultMessage: 'Checkout',
  href: CHECKOUT_PAGE
}, {
  id: 'nav.checkout_two',
  href: CHECKOUT_PAGE_TWO,
  defaultMessage: 'Checkout Alternative'
}, ORDER_MENU_ITEM, {
  id: 'nav.order_received',
  href: ORDER_RECEIVED_PAGE,
  defaultMessage: 'Order invoice'
}, {
  id: 'nav.terms_and_services',
  defaultMessage: 'Terms and Services',
  href: TERMS_AND_SERVICES_PAGE
}, {
  id: 'nav.privacy_policy',
  defaultMessage: 'Privacy Policy',
  href: PRIVACY_POLICY_PAGE
}]; // category menu items for header navigation

const CATEGORY_MENU_ITEMS = [{
  id: 'nav.grocery',
  href: GROCERY_PAGE,
  defaultMessage: 'Grocery',
  icon: 'FruitsVegetable',
  dynamic: true
}, {
  id: 'nav.makeup',
  defaultMessage: 'Makeup',
  href: MAKEUP_PAGE,
  icon: 'FacialCare',
  dynamic: true
}, {
  id: 'nav.bags',
  defaultMessage: 'Bags',
  href: BAGS_PAGE,
  icon: 'Handbag',
  dynamic: true
}, {
  id: 'nav.clothing',
  defaultMessage: 'Clothing',
  href: CLOTHING_PAGE,
  icon: 'DressIcon',
  dynamic: true
}, {
  id: 'nav.furniture',
  defaultMessage: 'Furniture',
  href: FURNITURE_PAGE,
  icon: 'FurnitureIcon',
  dynamic: true
}, {
  id: 'nav.book',
  defaultMessage: 'Book',
  href: BOOK_PAGE,
  icon: 'BookIcon',
  dynamic: true
}, {
  id: 'nav.medicine',
  defaultMessage: 'Medicine',
  href: MEDICINE_PAGE,
  icon: 'MedicineIcon',
  dynamic: true
}, {
  id: 'nav.foods',
  defaultMessage: 'Foods',
  href: RESTAURANT_PAGE,
  icon: 'Restaurant'
}];
const SIDEBAR_DATA = [{
  "id": 48,
  "title": "Snacks",
  "slug": "snacks",
  "icon": "Snacks",
  "children": [{
    "id": 49,
    "title": "Biscuits",
    "slug": "biscuits",
    "__typename": "Category"
  }, {
    "id": 50,
    "title": "Chocolates",
    "slug": "chocolates",
    "__typename": "Category"
  }, {
    "id": 51,
    "title": "Crisps",
    "slug": "crisps",
    "__typename": "Category"
  }, {
    "id": 52,
    "title": "Noodles",
    "slug": "noodles",
    "__typename": "Category"
  }, {
    "id": 53,
    "title": "Nuts",
    "slug": "nuts",
    "__typename": "Category"
  }, {
    "id": 54,
    "title": "Pasta",
    "slug": "pasta",
    "__typename": "Category"
  }, {
    "id": 55,
    "title": "Sauce",
    "slug": "sauce",
    "__typename": "Category"
  }, {
    "id": 56,
    "title": "Soup",
    "slug": "soup",
    "__typename": "Category"
  }]
}, {
  "id": 57,
  "title": "Pet Care",
  "slug": "petcare",
  "icon": "PetCare",
  "children": [{
    "id": 58,
    "title": "Cat Food",
    "slug": "catfood",
    "__typename": "Category"
  }, {
    "id": 59,
    "title": "Dog Food",
    "slug": "dogfood",
    "__typename": "Category"
  }, {
    "id": 60,
    "title": "KItten Food",
    "slug": "kittenfood",
    "__typename": "Category"
  }, {
    "id": 61,
    "title": "Pet Accessories",
    "slug": "petaccessories",
    "__typename": "Category"
  }],
  "__typename": "Category"
}, {
  "id": 62,
  "title": "Home & Cleaning",
  "slug": "home-cleaning",
  "icon": "HomeCleaning",
  "children": [{
    "id": 63,
    "title": "Air Freshener",
    "slug": "air_freshner",
    "__typename": "Category"
  }, {
    "id": 64,
    "title": "Cleaning Products",
    "slug": "cleaning_products",
    "__typename": "Category"
  }, {
    "id": 65,
    "title": "Dishwasher",
    "slug": "dishwasher",
    "__typename": "Category"
  }, {
    "id": 66,
    "title": "Kitchen Accessories",
    "slug": "kitchen_accessories",
    "__typename": "Category"
  }, {
    "id": 67,
    "title": "Laundry",
    "slug": "laundry",
    "__typename": "Category"
  }, {
    "id": 68,
    "title": "Pest Control",
    "slug": "Pest_control",
    "__typename": "Category"
  }],
  "__typename": "Category"
}, {
  "id": 76,
  "title": "Cooking",
  "slug": "cooking",
  "icon": "Cooking",
  "children": [{
    "id": 77,
    "title": "Oil",
    "slug": "oil",
    "__typename": "Category"
  }, {
    "id": 78,
    "title": "Rice",
    "slug": "rice",
    "__typename": "Category"
  }, {
    "id": 79,
    "title": "Salt & Sugar",
    "slug": "Salt_sugar",
    "__typename": "Category"
  }, {
    "id": 80,
    "title": "Spices",
    "slug": "milk_cream",
    "__typename": "Category"
  }]
}, {
  "id": 90,
  "title": "Beverage",
  "slug": "beverage",
  "icon": "Beverage",
  "children": [{
    "id": 91,
    "title": "Coffee",
    "slug": "coffee",
    "__typename": "Category"
  }, {
    "id": 92,
    "title": "Energy Drinks",
    "slug": "energy_drinks",
    "__typename": "Category"
  }, {
    "id": 93,
    "title": "Juice",
    "slug": "juice",
    "__typename": "Category"
  }, {
    "id": 94,
    "title": "Fizzy Drinks",
    "slug": "fizzy_drinks",
    "__typename": "Category"
  }, {
    "id": 95,
    "title": "Syrup & powder",
    "slug": "syrup_powder",
    "__typename": "Category"
  }, {
    "id": 96,
    "title": "Tea",
    "slug": "tea",
    "__typename": "Category"
  }, {
    "id": 97,
    "title": "Water",
    "slug": "water",
    "__typename": "Category"
  }],
  "__typename": "Category"
}, {
  "id": 98,
  "title": "Beauty & Health",
  "slug": "health_beauty",
  "icon": "BeautyHealth",
  "children": [{
    "id": 99,
    "title": "Bath",
    "slug": "bath",
    "__typename": "Category"
  }, {
    "id": 100,
    "title": "Cream",
    "slug": "cream",
    "__typename": "Category"
  }, {
    "id": 101,
    "title": "Deodorant",
    "slug": "deodorant",
    "__typename": "Category"
  }, {
    "id": 102,
    "title": "Face Care",
    "slug": "face_care",
    "__typename": "Category"
  }, {
    "id": 105,
    "title": "Oral Care",
    "slug": "Oral_care",
    "__typename": "Category"
  }, {
    "id": 106,
    "title": "Shaving Needs",
    "slug": "shaving_needs",
    "__typename": "Category"
  }]
}];
const MOBILE_DRAWER_MENU = [HOME_MENU_ITEM, ...AUTHORIZED_MENU_ITEMS, HELP_MENU_ITEM, OFFER_MENU_ITEM];
const CURRENCY_MENU = [{
  id: 'GBP',
  defaultMessage: '£ Pounds',
  icon: 'UKFlag'
}, {
  id: 'USD',
  defaultMessage: '$ Dollars',
  icon: 'USFlag'
}, {
  id: 'JPY',
  defaultMessage: '¥ Yen',
  icon: 'JPFlag'
}, {
  id: 'eur',
  defaultMessage: '€ Euro',
  icon: 'EURFlag'
}];

/***/ }),

/***/ "SC9r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_BASE_URL; });
/* unused harmony export transformCloudinaryImage */
const API_BASE_URL = 'http://localhost:5000';
const transformCloudinaryImage = (url, width, height) => {
  // https://res.cloudinary.com/wisecart/image/upload/w_150,h_300,c_fill/v1617441971/re3lf0beoxdrw4hdqbeb.png
  const [first, last] = url.split('/upload/');
  return first + `/upload/w_${width},h_${height},c_fill/` + last;
};

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UxYT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LeftMenu; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CkS3");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LeftMenuStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sARW");





const CategoryIcon = ({
  link,
  height,
  width
}) => {
  // @ts-ignore
  return link ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    src: link,
    alt: "Icon",
    style: {
      width: width,
      height: height
    }
  }) : null;
};
const LeftMenu = ({
  logo
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_LeftMenuStyle__WEBPACK_IMPORTED_MODULE_4__[/* LeftMenuBox */ "c"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_logo_logo__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      imageUrl: logo,
      alt: 'Shop Logo',
      onClick: () => router.push('/')
    })
  });
};

/***/ }),

/***/ "VLDe":
/***/ (function(module, exports) {



/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "aLks":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GLOBAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CART; });
/* unused harmony export WISHLIST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH; });
const GLOBAL = {
  SET_LANGUAGE: "SET_LANGUAGE",
  SET_CURRENCY: "SET_CURRENCY",
  SET_CATEGORY: "SET_CATEGORY",
  SET_SEARCH: "SET_SEARCH"
};
const CART = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
  DECREASE_QUANTITY_CART: "DECREASE_QUANTITY_CART",
  INCREASE_QUANTITY_CART: "INCREASE_QUANTITY_CART"
};
const WISHLIST = {
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST"
};
const SHOP = {
  SET_SORT: "SET_SORT",
  SET_SUBCATEGORY: "SET_SUBCATEGORY",
  SET_CATEGORY: "SET_CATEGORY",
  SET_CURRENCY: "SET_CURRENCY",
  SET_ADDRESS: "SET_ADDRESS",
  SET_BILLING: "SET_BILLING",
  SET_CARD: "SET_CARD"
};
const FORM = {
  SET_CURRENT_FORM: "SET_CURRENT_FORM"
};
const AUTH = {
  LOG_IN: "LOG_IN",
  LOG_IN_ERROR: "LOG_IN_ERROR",
  SIGN_UP_ERROR: "SIGN_UP_ERROR",
  SIGN_UP: "SIGN_UP",
  LOG_OUT: "LOG_OUT",
  LOAD_USER: "LOAD_USER",
  LOAD_USER_FAIL: "LOAD_USER_FAIL",
  ORDER_SUCCESS: "ORDER_SUCCESS",
  ORDER_SUCCESS_FAIL: "ORDER_SUCCESS_FAIL"
};

/***/ }),

/***/ "bYH+":
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "d75t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SelectedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Flag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MenuItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-right: 20px;

  .popover-wrapper.right {
    .popover-content {
      padding: 15px 0;
    }
  }

  @media (max-width: 767px) {
    margin-right: 10px;
  }
`;
const SelectedItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  width: auto;
  height: 38px;
  display: flex;
  align-items: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  border: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1')};
  padding: 0 10px;
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
  outline: 0;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
    text-decoration: none;

    &:first-child {
      margin-right: auto;
    }
  }
`;
const Flag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-right: 7px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  overflow: hidden;
  svg {
    width: 20px;
    height: auto;
  }
`;
const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  width: 100%;
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  line-height: 1.2em;
  display: block;
  padding: 15px 30px;
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
  transition: 0.15s ease-in-out;
  display: flex;
  align-items: center;
  border: 0;
  border-bottom: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1')};
  border-radius: 0;
  background-color: transparent;
  outline: 0;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 1400px) {
    margin-right: 10px;
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  }

  @media only screen and (min-width: 991px) and (max-width: 1200px) {
    padding: 15px 30px;
  }

  span {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 15px;

    svg {
      display: block;
      width: 20px;
      height: auto;
    }
  }
`;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eIFp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/offer-2-faf9b41cfc68dcc6eea2a6d7cd3517b6.png";

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fq6S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StyledButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_4___default()({
  px: '15px',
  py: 0,
  fontSize: ['base'],
  fontWeight: 'bold',
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  color: props.disabled ? 'text.light' : 'white',
  bg: props.disabled ? 'gray.500' : 'primary.regular',
  transition: 'all 0.3s ease',
  borderRadius: 'base',
  '&:hover': {
    color: props.disabled ? 'text.light' : 'white',
    bg: props.disabled ? 'gray.500' : 'primary.hover'
  }
}), {
  appearance: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  textAlign: 'center',
  height: '38px',
  textDecoration: 'none',
  fontFamily: 'inherit',
  border: 0,
  '&:focus': {
    outline: 'none'
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_5__["variant"])({
  variants: {
    outlined: {
      color: 'primary.regular',
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray.500',
      '&:hover': {
        borderColor: 'primary.regular',
        color: 'primary.regular',
        bg: 'white'
      }
    },
    primary: {
      color: 'white',
      bg: 'primary.regular',
      '&:hover': {
        bg: 'primary.hover'
      }
    },
    secondary: {
      color: 'primary.regular',
      bg: 'white',
      border: '2px solid',
      borderColor: 'gray.500',
      '&:hover': {
        color: 'white',
        bg: 'primary.regular',
        borderColor: 'primary.regular'
      }
    },
    text: {
      color: 'primary.regular',
      bg: 'transparent',
      '&:hover': {
        bg: 'transparent',
        color: 'primary.hover'
      }
    },
    select: {
      width: 26,
      height: 26,
      lineHeight: 1,
      flexShrink: 0,
      border: '1px solid',
      borderColor: 'text.regular',
      borderRadius: 13,
      padding: 0,
      color: 'text.bold',
      bg: 'transparent',
      '&.selected': {
        bg: 'primary.regular',
        color: 'white',
        borderColor: 'primary.regular'
      },
      '&:hover:not(.selected)': {
        bg: 'transparent',
        color: 'primary.regular',
        borderColor: 'primary.regular'
      }
    }
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_5__["variant"])({
  prop: 'size',
  variants: {
    big: {
      height: '48px',
      px: 30
    },
    small: {
      height: '30px',
      fontSize: 14
    }
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_5__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["layout"]));
const rotate = styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  border: 3px solid #ffffff;
  border-top: 3px solid
    ${props => props.color ? props.color : Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('primary.regular', '#009E7F')};
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`; // const Spinner = styled.div((props) =>
//   css({
//     width: 18,
//     height: 18,
//     marginLeft: 10,
//     border: '3px solid white',
//     borderTop: `3px solid ${props.color ? props.color : 'primary.regular'}`,
//     borderRadius: '50%',
//     transitionProperty: 'transform',
//     animationName: `${rotate}`,
//     animationDuration: '1.2s',
//     animationIterationCount: 'infinite',
//     animationTimingFunction: 'linear',
//   })
// );

const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((_ref, ref) => {
  let {
    children,
    disabled,
    loading = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "loading"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(StyledButton, _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    disabled: disabled,
    children: [children, loading && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Spinner, {})]
  }));
});

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hz1c":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/offer-3-65564ae66b27b4bdda17f941dd7e0aa4.png";

/***/ }),

/***/ "ik7d":
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "kp67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// EXTERNAL MODULE: ./src/components/Others/button/button.tsx
var button_button = __webpack_require__("fq6S");

// CONCATENATED MODULE: ./src/features/authentication-form/authentication-form.style.tsx




const IconWrapper = external_styled_components_default.a.div`
  display: flex;
  margin-right: 6px;
`;
const Wrapper = external_styled_components_default.a.div`
  text-align: center;
  background-color: ${Object(theme_get_["themeGet"])('colors.white', '#ffffff')};
  max-width: 450px;
`;
const Container = external_styled_components_default.a.div`
  padding: 40px 60px 0;

  @media (max-width: 768px) {
    padding: 40px 30px 0;
  }
`;
const LogoWrapper = external_styled_components_default.a.div`
  margin-bottom: 30px;

  img {
    max-width: 160px;
  }
`;
const Heading = external_styled_components_default.a.h3`
  margin-bottom: 10px;
  font-family: ${Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif')};
  font-size: ${Object(theme_get_["themeGet"])('fontSizes.lg', '21')}px;
  font-weight: ${Object(theme_get_["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f')};
`;
const SubHeading = external_styled_components_default.a.span`
  margin-bottom: 30px;
  font-family: ${Object(theme_get_["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(theme_get_["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(theme_get_["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(theme_get_["themeGet"])('colors.text.regular', '#77798c')};
  display: block;
`;
const OfferSection = external_styled_components_default.a.div`
  padding: 20px;
  background-color: ${Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7')};
  color: ${Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Offer = external_styled_components_default.a.p`
  font-family: ${Object(theme_get_["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(theme_get_["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(theme_get_["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(theme_get_["themeGet"])('colors.text.regular', '#77798c')};
  margin: 0;
`;
const HelperText = external_styled_components_default.a.p`
  font-family: ${Object(theme_get_["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(theme_get_["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(theme_get_["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(theme_get_["themeGet"])('colors.text.regular', '#77798c')};
  margin: 0;
  text-align: center;
  width: 100%;

  a {
    font-weight: ${Object(theme_get_["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(theme_get_["themeGet"])('colors.blue.link', '#4285f4')};
    text-decoration: underline;
  }
`; // export const Input = styled.input`
//   width: 100%;
//   height: 48px;
//   border-radius: ${themeGet('radii.base', '6px')};
//   background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
//   border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
//   font-family: ${themeGet('fonts.body', 'Lato')};
//   font-size: ${themeGet('fontSizes.base', '15')}px;
//   font-weight: ${themeGet('fontWeights.regular', '400')};
//   color: ${themeGet('colors.text.bold', '#0D1136')};
//   line-height: 19px;
//   padding: 0 18px;
//   box-sizing: border-box;
//   transition: border-color 0.25s ease;
//   margin-bottom: 10px;
//   &:hover,
//   &:focus {
//     outline: 0;
//   }
//   &:focus {
//     border-color: ${themeGet('colors.primary.regular', '#009e7f')};
//   }
//   &::placeholder {
//     color: ${themeGet('colors.text.regular', '#77798c')};
//     font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
//   }
//   &::-webkit-inner-spin-button,
//   &::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//   &.disabled {
//     .inner-wrap {
//       cursor: not-allowed;
//       opacity: 0.6;
//     }
//   }
// `;

const Divider = external_styled_components_default.a.div`
  padding: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    font-family: ${Object(theme_get_["themeGet"])('fonts.body', 'Lato')};
    font-size: ${Object(theme_get_["themeGet"])('fontSizes.base', '15')}px;
    font-weight: ${Object(theme_get_["themeGet"])('fontWeights.regular', '400')};
    color: ${Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136')};
    line-height: 1;
    background-color: ${Object(theme_get_["themeGet"])('colors.white', '#ffffff')};
    z-index: 1;
    position: relative;
    padding: 0 10px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1')};
    position: absolute;
    top: 50%;
  }
`;
const LinkButton = external_styled_components_default.a.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  box-shadow: none;
  padding: 0;
  font-size: calc(${Object(theme_get_["themeGet"])('fontSizes.base', '15')}px - 1px);
  font-weight: ${Object(theme_get_["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f')};
  text-decoration: underline;
  cursor: pointer;
`;
// CONCATENATED MODULE: ./src/assets/icons/Facebook.tsx


const Facebook = ({
  color = 'currentColor',
  width = '17px',
  height = '17px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 17 17",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      "data-name": "_ionicons_svg_logo-facebook (1)",
      d: "M80.061,64H64.939a.939.939,0,0,0-.939.939V80.061a.939.939,0,0,0,.939.939H72.5V74.271H70.468V71.792H72.5V69.959a3.23,3.23,0,0,1,3.484-3.391c.939,0,1.948.071,2.183.1v2.293H76.6c-1.067,0-1.271.5-1.271,1.248v1.58h2.541l-.332,2.479H75.333V81h4.728A.939.939,0,0,0,81,80.061V64.939A.939.939,0,0,0,80.061,64Z",
      transform: "translate(-64 -64)",
      fill: color
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/Google.tsx


const Google = ({
  color = 'currentColor',
  width = '17px',
  height = '17px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16.677 17",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M68.579,55.29l-.086-.364H60.584v3.348h4.725a4.73,4.73,0,0,1-4.627,3.556,5.533,5.533,0,0,1-3.724-1.484,5.316,5.316,0,0,1-1.586-3.752,5.483,5.483,0,0,1,1.557-3.748,5.3,5.3,0,0,1,3.7-1.447,4.825,4.825,0,0,1,3.147,1.226l2.379-2.367a8.417,8.417,0,0,0-5.6-2.158A8.391,8.391,0,0,0,52,56.6,8.541,8.541,0,0,0,54.326,62.5a8.873,8.873,0,0,0,6.4,2.6,7.891,7.891,0,0,0,5.747-2.416,8.486,8.486,0,0,0,2.207-5.878,9.788,9.788,0,0,0-.1-1.516Z",
      transform: "translate(-52 -48.1)",
      fill: color
    })
  });
};
// EXTERNAL MODULE: ./src/components/Others/forms/input.tsx
var input = __webpack_require__("qteV");

// EXTERNAL MODULE: ./src/hooks/useLoginForm.ts
var useLoginForm = __webpack_require__("4fft");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/actions/globalActions.ts + 1 modules
var globalActions = __webpack_require__("lHkW");

// CONCATENATED MODULE: ./src/features/authentication-form/login.tsx





 // @ts-ignore






const SignInModal = ({
  setCurrentForm
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const toggleSignUpForm = () => {
    setCurrentForm('signUp');
  };

  const toggleForgotPassForm = () => {
    setCurrentForm('forgotPass');
  };

  const {
    inputs,
    handleInputChange
  } = Object(useLoginForm["a" /* useLoginForm */])();

  const loginCallback = e => {
    e.preventDefault();
    dispatch(Object(globalActions["b" /* login */])(inputs.email, inputs.password));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Wrapper, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading, {
        children: "Welcome Back"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SubHeading, {
        children: "Login with your email & password"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: loginCallback,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          type: "email",
          placeholder: "Email Address",
          name: "email",
          onChange: handleInputChange,
          value: inputs.email,
          required: true,
          height: "48px"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          type: "password",
          placeholder: "Password (min 6 characters)",
          name: "password",
          onChange: handleInputChange,
          value: inputs.password,
          required: true,
          height: "48px"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(button_button["a" /* Button */], {
          variant: "primary",
          size: "big",
          style: {
            width: '100%'
          },
          type: "submit",
          children: "Continue          "
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Divider, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "or"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(button_button["a" /* Button */], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%',
          backgroundColor: '#4267b2',
          marginBottom: 10
        },
        onClick: loginCallback,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IconWrapper, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Facebook, {})
        }), "Continue with Facebook"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(button_button["a" /* Button */], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%',
          backgroundColor: '#4285f4'
        },
        onClick: loginCallback,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IconWrapper, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Google, {})
        }), "Continue with Google"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Offer, {
        style: {
          padding: '20px 0'
        },
        children: ["Don't have any account?", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkButton, {
          onClick: toggleSignUpForm,
          children: "Sign Up"
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(OfferSection, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Offer, {
        children: ["Forgot your password?", /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkButton, {
          onClick: toggleForgotPassForm,
          children: "Reset It"
        })]
      })
    })]
  });
};

/* harmony default export */ var login = (SignInModal);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/features/authentication-form/register.tsx












const SignupModal = ({
  setCurrentForm
}) => {
  const toggleSignInForm = () => {
    setCurrentForm('signIn');
  };

  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    inputs,
    handleInputChange
  } = Object(useLoginForm["a" /* useLoginForm */])();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(Object(globalActions["c" /* register */])(inputs.firstName, inputs.lastName, inputs.email, inputs.password, 'user'));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Wrapper, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading, {
        children: "Sign Up"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SubHeading, {
        children: "Every fill is required in sign up"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          type: "text",
          placeholder: "First name",
          height: "48px",
          backgroundColor: "#F7F7F7",
          mb: "10px",
          name: "firstName",
          onChange: handleInputChange,
          value: inputs.firstName
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          type: "text",
          placeholder: "Last name",
          height: "48px",
          backgroundColor: "#F7F7F7",
          mb: "10px",
          name: "lastName",
          onChange: handleInputChange,
          value: inputs.lastName
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          type: "email",
          placeholder: "Email Address",
          height: "48px",
          backgroundColor: "#F7F7F7",
          mb: "10px",
          name: "email",
          onChange: handleInputChange,
          value: inputs.email
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
          type: "password",
          placeholder: "Password (min 6 characters)",
          height: "48px",
          backgroundColor: "#F7F7F7",
          mb: "10px",
          name: "password",
          onChange: handleInputChange,
          value: inputs.password
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HelperText, {
          style: {
            padding: '20px 0 30px'
          },
          children: ["By signing up, you agree to \xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Terms & Condition"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(button_button["a" /* Button */], {
          variant: "primary",
          size: "big",
          width: "100%",
          type: "submit",
          children: "Continue"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Divider, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "or"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(button_button["a" /* Button */], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%',
          backgroundColor: '#4267b2',
          marginBottom: 10
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IconWrapper, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Facebook, {})
        }), "Continue with Facebook"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(button_button["a" /* Button */], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%',
          backgroundColor: '#4285f4'
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IconWrapper, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Google, {})
        }), "Continue with Google"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Offer, {
        style: {
          padding: '20px 0'
        },
        children: ["Already have an account?", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkButton, {
          onClick: toggleSignInForm,
          children: "Login"
        })]
      })]
    })
  });
};

/* harmony default export */ var register = (SignupModal);
// CONCATENATED MODULE: ./src/features/authentication-form/forgot-password.tsx






const ForgotPasswordModal = ({
  setCurrentForm
}) => {
  const toggleSignInForm = () => {
    setCurrentForm('signIn');
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Wrapper, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
      style: {
        paddingBottom: 30
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Heading, {
        children: "Forgot Password"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SubHeading, {
        children: "We'll send you a link to reset your password"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
        type: "text",
        placeholder: "Email Address or Contact No.",
        height: "48px",
        backgroundColor: "#F7F7F7",
        mb: "10px"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(button_button["a" /* Button */], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%'
        },
        type: "submit",
        children: "Reset Password"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Offer, {
        style: {
          padding: '20px 0 0'
        },
        children: ["Back to", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkButton, {
          onClick: toggleSignInForm,
          children: "Login"
        })]
      })]
    })
  });
};

/* harmony default export */ var forgot_password = (ForgotPasswordModal);
// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// CONCATENATED MODULE: ./src/features/authentication-form/index.tsx






 // @ts-ignore



const AuthenticationForm = () => {
  const {
    isAuthenticated
  } = Object(external_react_redux_["useSelector"])(state => state.globalReducer);
  const {
    0: currentForm,
    1: setCurrentForm
  } = Object(external_react_["useState"])('signUp');
  Object(external_react_["useEffect"])(() => {
    if (isAuthenticated) {
      Object(reuse_modal_["closeModal"])();
    }
  }, [isAuthenticated]);

  if (currentForm === 'signIn') {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(login, {
      setCurrentForm: setCurrentForm
    });
  }

  if (currentForm === 'signUp') {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(register, {
      setCurrentForm: setCurrentForm
    });
  }

  if (currentForm === 'forgotPass') {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(forgot_password, {
      setCurrentForm: setCurrentForm
    });
  }
};

/* harmony default export */ var authentication_form = __webpack_exports__["a"] = (AuthenticationForm);

/***/ }),

/***/ "kz6H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: ./src/assets/icons/flags.ts
var flags_namespaceObject = {};
__webpack_require__.r(flags_namespaceObject);
__webpack_require__.d(flags_namespaceObject, "EURFlag", function() { return EURFlag; });
__webpack_require__.d(flags_namespaceObject, "UKFlag", function() { return UKFlag; });
__webpack_require__.d(flags_namespaceObject, "USFlag", function() { return USFlag; });
__webpack_require__.d(flags_namespaceObject, "JPFlag", function() { return JPFlag; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/components/Layout/header/menu/currency-switcher/CurrencySwitcherStyles.tsx
var CurrencySwitcherStyles = __webpack_require__("d75t");

// EXTERNAL MODULE: ./src/components/Layout/popover/popover.tsx + 1 modules
var popover = __webpack_require__("JMs0");

// EXTERNAL MODULE: ./src/assets/icons/eu.svg
var eu = __webpack_require__("6ISp");
var eu_default = /*#__PURE__*/__webpack_require__.n(eu);

// CONCATENATED MODULE: ./src/assets/icons/EUFlag.tsx



const EURFlag = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: eu_default.a,
    alt: "",
    width: "20px",
    height: "15px"
  });
};
// CONCATENATED MODULE: ./src/assets/icons/UKFlag.tsx



const UKFlag = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 60 30",
    width: "20px",
    height: "15px",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
      id: "a",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M0 0v30h60V0z"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
      id: "b",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M30 15h30v15zv15H0zH0V0zV0h30z"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      clipPath: "url(#a)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M0 0v30h60V0z",
        fill: "#012169"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M0 0l60 30m0-30L0 30",
        stroke: "#fff",
        strokeWidth: "6"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M0 0l60 30m0-30L0 30",
        clipPath: "url(#b)",
        stroke: "#C8102E",
        strokeWidth: "4"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M30 0v30M0 15h60",
        stroke: "#fff",
        strokeWidth: "10"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M30 0v30M0 15h60",
        stroke: "#C8102E",
        strokeWidth: "6"
      })]
    })]
  });
};
// CONCATENATED MODULE: ./src/assets/icons/USFlag.tsx



const USFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-us",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      fillRule: "evenodd",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
        strokeWidth: "1pt",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fill: "#bd3d44",
          d: "M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z",
          transform: "scale(.9375)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fill: "#fff",
          d: "M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z",
          transform: "scale(.9375)"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#192f5d",
        d: "M0 0h389.1v275.7H0z",
        transform: "scale(.9375)"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z",
        transform: "scale(.9375)"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/JPFlag.tsx



const JPFlag = ({
  width = '100%',
  height = '100%'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600",
    height: height,
    width: width,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M0 0h900v600H0z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
      fill: "#bc002d",
      cx: "450",
      cy: "300",
      r: "180"
    })]
  });
};
// CONCATENATED MODULE: ./src/assets/icons/flags.ts




// EXTERNAL MODULE: ./src/components/Layout/header/site-navigation.ts
var site_navigation = __webpack_require__("QqhS");

// EXTERNAL MODULE: ./src/redux/actions/shopActions.ts
var shopActions = __webpack_require__("J4Ja");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./src/components/Layout/header/menu/currency-switcher/CurrencySwitcher.tsx











const FlagIcon = ({
  name
}) => {
  // @ts-ignore
  const TagName = flags_namespaceObject[name];
  return !!TagName ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(TagName, {}) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
    children: ["Invalid icon ", name]
  });
}; // @ts-ignore


const LanguageMenu = ({
  onClick
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: site_navigation["c" /* CURRENCY_MENU */].map(item => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CurrencySwitcherStyles["c" /* MenuItem */], {
      onClick: onClick,
      value: item.id,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FlagIcon, {
          name: item.icon
        })
      }), item.defaultMessage]
    }, item.id))
  });
};

const CurrencySwitcher = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    currency
  } = Object(external_react_redux_["useSelector"])(state => state.shopReducer);

  const languageChangeHandler = e => {
    const item = site_navigation["c" /* CURRENCY_MENU */].filter(item => item.id === e.target.value);
    dispatch(Object(shopActions["a" /* setCurrency */])(item[0]));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(CurrencySwitcherStyles["a" /* Box */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(popover["a" /* default */], {
      className: "right",
      handler: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CurrencySwitcherStyles["d" /* SelectedItem */], {
        id: currency.id,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CurrencySwitcherStyles["b" /* Flag */], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FlagIcon, {
            name: currency.icon
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: currency.defaultMessage
        })]
      }),
      content: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LanguageMenu, {
        onClick: languageChangeHandler
      })
    })
  });
};

/* harmony default export */ var currency_switcher_CurrencySwitcher = __webpack_exports__["a"] = (CurrencySwitcher);

/***/ }),

/***/ "lHkW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ login; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ loadUser; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ register; });

// UNUSED EXPORTS: setGlobalCurrency, setGlobalCategory, setCurrentForm, setGlobalSearch, logout, createOrder

// EXTERNAL MODULE: ./src/redux/defines.ts
var defines = __webpack_require__("aLks");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/redux/setAuthToken.ts


const setAuthToken = token => {
  if (token) {
    //adding token to the headers
    external_axios_default.a.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    //removing token from the headers
    delete external_axios_default.a.defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ var redux_setAuthToken = (setAuthToken);
// EXTERNAL MODULE: ./src/utils/config.ts
var utils_config = __webpack_require__("SC9r");

// CONCATENATED MODULE: ./src/redux/actions/globalActions.ts




const setGlobalCurrency = cur => ({
  type: defines["d" /* GLOBAL */].SET_CURRENCY,
  cur
});
const setGlobalCategory = category => ({
  type: defines["d" /* GLOBAL */].SET_CATEGORY,
  category
});
const setCurrentForm = form => ({
  type: defines["c" /* FORM */].SET_CURRENT_FORM,
  form
});
const setGlobalSearch = keyword => ({
  type: defines["d" /* GLOBAL */].SET_SEARCH,
  keyword
});
const login = (email, password) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const {
      data
    } = await external_axios_default.a.post(`${utils_config["a" /* API_BASE_URL */]}/api/v1/auth/login`, {
      email,
      password
    }, config);
    dispatch({
      type: defines["a" /* AUTH */].LOG_IN,
      payload: data
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
    localStorage.setItem('token', JSON.stringify(data.token));
    await loadUser();
  } catch (error) {
    dispatch({
      type: defines["a" /* AUTH */].LOG_IN_ERROR,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
const logout = () => dispatch => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('persist:root');
  localStorage.removeItem('shippingAddress');
  localStorage.removeItem('paymentMethod');
  localStorage.removeItem('token');
  dispatch({
    type: defines["a" /* AUTH */].LOG_OUT
  });
  document.location.href = '/';
};
const loadUser = () => async dispatch => {
  if (localStorage.token) {
    const token = localStorage.token.replaceAll('"', ''); //sending token to headers

    redux_setAuthToken(token);
  }

  try {
    const res = await external_axios_default.a.get(`${utils_config["a" /* API_BASE_URL */]}/api/v1/auth/me`);
    dispatch({
      type: defines["a" /* AUTH */].LOAD_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: defines["a" /* AUTH */].LOAD_USER_FAIL,
      payload: err.response.data.error
    });
  }
};
const createOrder = order => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const {
      data
    } = await external_axios_default.a.post(`${utils_config["a" /* API_BASE_URL */]}/api/orders`, order, config);
    dispatch({
      type: defines["a" /* AUTH */].ORDER_SUCCESS,
      payload: data
    });
    localStorage.removeItem('cartItems');
    localStorage.removeItem('persist:root');
  } catch (error) {
    const messages = error.response && error.response.data.message ? error.response.data.message : error.message;

    if (messages === 'Not authorized, token failed') {
      dispatch(logout());
    }
  }
};
const register = (firstName, lastName, email, password, role) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const {
      data
    } = await external_axios_default.a.post(`${utils_config["a" /* API_BASE_URL */]}/api/v1/auth/register`, {
      firstName,
      lastName,
      email,
      password,
      role
    }, config);
    dispatch({
      type: defines["a" /* AUTH */].SIGN_UP,
      payload: data
    });
    await loadUser();
    localStorage.setItem('userInfo', JSON.stringify(data));
    localStorage.setItem('token', JSON.stringify(data.token));
  } catch (error) {
    error.response && error.response.data.message ? error.response.data.message : error.message;
    dispatch({
      type: defines["a" /* AUTH */].SIGN_UP_ERROR,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "ocwR":
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "qUDc":
/***/ (function(module, exports) {

module.exports = require("axios-hooks");

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "qteV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  display: 'block',
  width: '100%',
  p: '0 18px',
  appearance: 'none',
  fontFamily: 'body',
  fontSize: 'base',
  lineHeight: 'inherit',
  border: '1px solid',
  borderColor: 'gray.500',
  borderRadius: 'base',
  backgroundColor: 'white',
  color: 'text.bold',
  height: '48px',
  transition: 'all 0.25s ease',
  // mb: 3,
  '&:focus': {
    borderColor: 'primary.regular'
  }
}), {
  '&:hover,&:focus': {
    outline: 0
  },
  '&::placeholder': {
    color: ''
  },
  '&::-webkit-inner-spin-button,&::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },
  '&.disabled': {
    cursor: 'not-allowed',
    opacity: 0.6
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"]));

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sARW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LeftMenuBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MainMenu; });
/* unused harmony export IconWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SelectedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Arrow; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const LeftMenuBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`;
const MainMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
`;
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  margin-right: 15px;
`;
const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  line-height: 1.2em;
  display: block;
  padding: 12px 30px;
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
  transition: 0.15s ease-in-out;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;

  svg {
    min-width: 15px;
    max-width: 20px;
    max-height: 19px;
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }

  @media (max-width: 1400px) {
    margin-right: 10px;
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  }

  @media only screen and (min-width: 991px) and (max-width: 1200px) {
    padding: 15px 30px;
  }

  &:hover {
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
  }
  &.current-page {
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
    background-color: #fff;
  }
`;
const SelectedItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: auto;
  height: 38px;
  display: flex;
  align-items: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('z', '#ffffff')};
  border: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1')};
  padding: 0 15px;
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
  outline: 0;
  min-width: 150px;
  cursor: pointer;

  svg {
    height: 19px;
  }

  span {
    display: flex;
    align-items: center;
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: #4f4f56;
    text-decoration: none;
    &:first-child {
      margin-right: auto;
    }
  }
`;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
`;
const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  width: 12px;
  margin-left: 16px;
`;

/***/ }),

/***/ "sNzC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: LayoutWrapper

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./src/components/Layout/nav-link/nav-link.tsx
var nav_link = __webpack_require__("IOt9");

// EXTERNAL MODULE: ./src/components/Layout/header/site-navigation.ts
var site_navigation = __webpack_require__("QqhS");

// EXTERNAL MODULE: ./src/components/Layout/header/menu/currency-switcher/CurrencySwitcher.tsx + 5 modules
var CurrencySwitcher = __webpack_require__("kz6H");

// CONCATENATED MODULE: ./src/assets/icons/HelpIcon.tsx


const HelpIcon = ({
  color = 'currentColor',
  width = '14px',
  height = '14px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      id: "Path_111",
      "data-name": "Path 111",
      d: "M269.443,404.312a7,7,0,1,0,7,7,6.98,6.98,0,0,0-7-7Zm.635,10.818a.3.3,0,0,1-.319.319h-.635a.3.3,0,0,1-.319-.319v-.635a.3.3,0,0,1,.319-.319h.635a.3.3,0,0,1,.319.319Zm.859-2.832c-.446.382-.763.637-.859.987a.308.308,0,0,1-.319.255h-.635a.309.309,0,0,1-.319-.35,2.988,2.988,0,0,1,1.336-1.876c.574-.446.892-.732.892-1.274a1.591,1.591,0,1,0-3.182,0v.191a.3.3,0,0,1-.224.351l-.6.189a.318.318,0,0,1-.414-.253,2.363,2.363,0,0,1-.033-.479,2.864,2.864,0,0,1,5.729,0,2.792,2.792,0,0,1-1.369,2.259Zm0,0",
      transform: "translate(-262.442 -404.312)",
      fill: color
    })
  });
};
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/Layout/header/menu/right-menu/RightMenuStyle.tsx


const RightMenuBox = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  .menu-icon {
    min-width: 14px;
    margin-right: 7px;
  }

  .menu-item {
    a {
      font-family: ${Object(theme_get_["themeGet"])('fonts.body', 'Lato')};
      font-size: ${Object(theme_get_["themeGet"])('fontSizes.base', '15')}px;
      font-weight: ${Object(theme_get_["themeGet"])('fontWeights.bold', '700')};
      color: ${Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136')};
      line-height: 1.2em;
      display: block;
      transition: 0.15s ease-in-out;
      display: flex;
      align-items: center;
      margin-right: 45px;

      @media (max-width: 1400px) {
        margin-right: 35px;
        font-size: ${Object(theme_get_["themeGet"])('fontSizes.base', '15')}px;
      }
      &:hover {
        color: ${Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f')};
      }
      &.current-page {
        color: ${Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f')};
      }
    }
  }

  .user-pages-dropdown {
    .popover-handler {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: block;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .popover-content {
      .inner-wrap {
        /* padding: ; */
      }
    }
  }
`;
// CONCATENATED MODULE: ./src/components/Layout/header/menu/right-menu/RightMenu.tsx









const AuthMenu = dynamic_default()(() => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, "Jxol")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Jxol")],
    modules: ["../components/Layout/header/menu/right-menu/RightMenu.tsx -> " + '../auth-menu']
  }
});
const RightMenu = ({
  onLogout,
  avatar,
  isAuthenticated,
  onJoin
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(RightMenuBox, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(nav_link["a" /* default */], {
      className: "menu-item",
      href: site_navigation["f" /* OFFER_MENU_ITEM */].href,
      label: site_navigation["f" /* OFFER_MENU_ITEM */].defaultMessage,
      intlId: site_navigation["f" /* OFFER_MENU_ITEM */].id
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(nav_link["a" /* default */], {
      className: "menu-item",
      href: site_navigation["d" /* HELP_MENU_ITEM */].href,
      label: site_navigation["d" /* HELP_MENU_ITEM */].defaultMessage,
      intlId: site_navigation["d" /* HELP_MENU_ITEM */].id,
      iconClass: "menu-icon",
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HelpIcon, {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CurrencySwitcher["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AuthMenu, {
      avatar: avatar,
      onJoin: onJoin,
      onLogout: onLogout,
      isAuthenticated: isAuthenticated
    })]
  });
};
// EXTERNAL MODULE: ./src/components/Layout/header/menu/left-menu/LeftMenu.tsx
var LeftMenu = __webpack_require__("UxYT");

// EXTERNAL MODULE: ./src/components/Layout/header/header.style.tsx
var header_style = __webpack_require__("P9Nz");

// EXTERNAL MODULE: ./src/assets/images/logo.svg
var logo = __webpack_require__("40cp");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./src/assets/images/user.jpg
var user = __webpack_require__("OBDI");
var user_default = /*#__PURE__*/__webpack_require__.n(user);

// EXTERNAL MODULE: ./src/components/Layout/header/search/search.tsx + 5 modules
var search = __webpack_require__("3HDo");

// EXTERNAL MODULE: ./src/features/authentication-form/index.tsx + 6 modules
var authentication_form = __webpack_require__("kp67");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./src/components/Layout/header/header.tsx



 // @ts-ignore











const Header = ({
  className
}) => {
  const {
    isAuthenticated
  } = Object(external_react_redux_["useSelector"])(state => state.globalReducer);

  const handleLogout = () => {
    if (false) {}
  };

  const handleJoin = () => {
    Object(reuse_modal_["openModal"])({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: authentication_form["a" /* default */],
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto'
      }
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(header_style["s" /* default */], {
    className: className,
    id: "layout-header",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LeftMenu["b" /* LeftMenu */], {
      logo: logo_default.a
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search["a" /* default */], {
      minimal: true,
      className: "headerSearch"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RightMenu, {
      isAuthenticated: isAuthenticated,
      onJoin: handleJoin,
      onLogout: handleLogout,
      avatar: user_default.a
    })]
  });
};

/* harmony default export */ var header = (Header);
// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// CONCATENATED MODULE: ./src/components/Layout/Footer/Footer.style.ts


const Container = external_styled_components_default.a.div`
  padding: 20px 60px;
  background-color: #0c1a34;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
const Wrapper = external_styled_components_default.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;
const Row = external_styled_components_default.a.div`
  display: grid;
  grid-template-columns: 25% 25% 50%;
  grid-template-rows: 1fr;
  column-gap: 25px;
  grid-template-areas:
    "footer-1 footer-2 subscribe";

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 14px 22px;
    grid-template-areas:
    "footer-1 footer-2"
    "subscribe subscribe";
  }

  .form {
    display: flex;
  }

  .column {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
  }

  .footer-1 {
    grid-area: footer-1;
  }

  .footer-2 {
    grid-area: footer-2;
  }

  .subscribe {
    grid-area: subscribe;
  }
`;
const Link = external_styled_components_default.a.a`
  color: #fff;
  margin-bottom: 7px;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: ${Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F')};
    transition: 200ms ease-in;
  }
`;
const Title = external_styled_components_default.a.p`
font-size: 18px;
  color: #fff;
  margin-bottom: 12px;
  font-weight: bold;
`;
// CONCATENATED MODULE: ./src/components/Layout/Footer/FooterComponents.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Footer(_ref) {
  let {
    children
  } = _ref,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
}

Footer.Wrapper = function FooterWrapper(_ref2) {
  let {
    children
  } = _ref2,
      restProps = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Wrapper, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Footer.Row = function FooterRow(_ref3) {
  let {
    children
  } = _ref3,
      restProps = _objectWithoutProperties(_ref3, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Row, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Footer.Link = function FooterLink(_ref4) {
  let {
    children
  } = _ref4,
      restProps = _objectWithoutProperties(_ref4, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

Footer.Title = function FooterTitle(_ref5) {
  let {
    children
  } = _ref5,
      restProps = _objectWithoutProperties(_ref5, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};
// EXTERNAL MODULE: ./src/components/Others/forms/input.tsx
var input = __webpack_require__("qteV");

// EXTERNAL MODULE: ./src/components/Others/button/button.tsx
var button_button = __webpack_require__("fq6S");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./src/utils/config.ts
var utils_config = __webpack_require__("SC9r");

// CONCATENATED MODULE: ./src/components/Layout/Footer/newsletter form/Newsletter.tsx









const NewsletterContainer = external_styled_components_default.a.div`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #0c1a34;
  border: none;
  margin: 10px 0;
  width: 100%;
`;

const Newsletter = () => {
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])('');

  const addToSubscription = async e => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const {
        data
      } = await external_axios_default.a.post(`${utils_config["a" /* API_BASE_URL */]}/api/v1/newsletter/subscribe`, {
        email
      }, config);
      console.log(data.email);
    } catch (error) {}
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NewsletterContainer, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer.Title, {
      children: "Sign up for a newsletter"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
      onSubmit: addToSubscription,
      className: "form",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], {
        type: "email",
        placeholder: "Email Address",
        name: "email",
        onChange: e => {
          setEmail(e.target.value);
        },
        value: email,
        required: true,
        height: "38px",
        width: "100%"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(button_button["a" /* Button */], {
        type: "submit",
        children: "Submit"
      })]
    })]
  });
};

/* harmony default export */ var newsletter_form_Newsletter = (Newsletter);
// CONCATENATED MODULE: ./src/components/Layout/Footer/Footer.tsx





function FooterComponent() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer.Wrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Footer.Row, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "column footer-1",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer.Title, {
            children: "About Us"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer.Link, {
            href: "#",
            children: "Story"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer.Link, {
            href: "#",
            children: "Clients"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer.Link, {
            href: "#",
            children: "Testimonials"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "column footer-2",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer.Title, {
            children: "Services"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer.Link, {
            href: "#",
            children: "Marketing"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer.Link, {
            href: "#",
            children: "Consulting"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer.Link, {
            href: "#",
            children: "Development"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer.Link, {
            href: "#",
            children: "Design"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "column subscribe",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(newsletter_form_Newsletter, {})
        })]
      })
    })
  });
}
// CONCATENATED MODULE: ./src/components/Layout/layout.tsx









const MobileHeader = dynamic_default()(() => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, "yxqB")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("yxqB")],
    modules: ["../components/Layout/layout.tsx -> " + '@/components/Layout/header/MobileHeader']
  }
}); // @ts-ignore

const LayoutWrapper = external_styled_components_default.a.div`
  background-color: ${Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7')};

  @media (max-width: 990px) {
    background-color: ${Object(theme_get_["themeGet"])('colors.white', '#ffffff')};
  }

  .reuseModalHolder {
    padding: 0;
    overflow: auto;
    border-radius: ${Object(theme_get_["themeGet"])('radii.small', '3px')}
    ${Object(theme_get_["themeGet"])('radii.small', '3px')} 0 0;
    border: 0;
  }
`;
const layout_Container = external_styled_components_default.a.div`
  //margin-top: 90px;
`;

const Layout = ({
  className,
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LayoutWrapper, {
    className: `layoutWrapper ${className}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_stickynode_default.a, {
      enabled: false,
      innerZ: 1001,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MobileHeader, {
        className: `sticky home desktop`
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(header, {
        className: 'sticky home desktop'
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout_Container, {
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterComponent, {})]
  });
};

/* harmony default export */ var layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "tTxw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FeaturedLoading; });
/* unused harmony export Category */
/* unused harmony export CategoryLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SidebarMobileLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SidebarLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ItemLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryMobile; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EGWi");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const FeaturedLoading = ({
  deviceType
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, {
  viewBox: "0 0 1000 300",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "30",
    y: "20",
    rx: "8",
    ry: "8",
    width: "200",
    height: "200"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "30",
    y: "250",
    rx: "0",
    ry: "0",
    width: "200",
    height: "18"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "30",
    y: "275",
    rx: "0",
    ry: "0",
    width: "120",
    height: "20"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "250",
    y: "20",
    rx: "8",
    ry: "8",
    width: "200",
    height: "200"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "250",
    y: "250",
    rx: "0",
    ry: "0",
    width: "200",
    height: "18"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "250",
    y: "275",
    rx: "0",
    ry: "0",
    width: "120",
    height: "20"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "470",
    y: "20",
    rx: "8",
    ry: "8",
    width: "200",
    height: "200"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "470",
    y: "250",
    rx: "0",
    ry: "0",
    width: "200",
    height: "18"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "470",
    y: "275",
    rx: "0",
    ry: "0",
    width: "120",
    height: "20"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "690",
    y: "20",
    rx: "8",
    ry: "8",
    width: "200",
    height: "200"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "690",
    y: "250",
    rx: "0",
    ry: "0",
    width: "200",
    height: "18"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "690",
    y: "275",
    rx: "0",
    ry: "0",
    width: "120",
    height: "20"
  })]
});

const PostLoader = props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
  height: 350,
  width: 245,
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), {}, {
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "2",
    y: "2",
    rx: "0",
    ry: "0",
    width: "240",
    height: "197"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "15",
    y: "220",
    rx: "0",
    ry: "0",
    width: "140",
    height: "25"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "15",
    y: "254",
    rx: "0",
    ry: "0",
    width: "65",
    height: "15"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "15",
    y: "300",
    rx: "0",
    ry: "0",
    width: "67",
    height: "20"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "170",
    y: "300",
    rx: "0",
    ry: "0",
    width: "60",
    height: "20"
  })]
}));

const Category = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, {
  height: 46,
  width: 400,
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "58",
    y: "10",
    rx: "0",
    ry: "0",
    width: "287",
    height: "26"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "364",
    y: "10",
    rx: "0",
    ry: "0",
    width: "26",
    height: "26"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "16",
    y: "10",
    rx: "0",
    ry: "0",
    width: "26",
    height: "26"
  })]
});
const CategoryLoader = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, {
  height: 46,
  width: 400,
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "58",
    y: "10",
    rx: "0",
    ry: "0",
    width: "58",
    height: "26"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "364",
    y: "10",
    rx: "0",
    ry: "0",
    width: "58",
    height: "26"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "16",
    y: "10",
    rx: "0",
    ry: "0",
    width: "58",
    height: "26"
  })]
});
const SidebarMobileLoader = props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
  speed: 4,
  width: 974,
  height: 58,
  viewBox: "0 0 974 58",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), {}, {
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "0",
    y: "0",
    rx: "26",
    ry: "26",
    width: "974",
    height: "58"
  })
}));
const SidebarLoader = props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
  height: 400,
  width: "calc(100% - 30px)",
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), {}, {
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "376",
    y: "22",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "27",
    y: "50",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "69",
    y: "50",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "27",
    y: "89",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "69",
    y: "89",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "27",
    y: "128",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "69",
    y: "128",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "27",
    y: "167",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "69",
    y: "167",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "27",
    y: "206",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "69",
    y: "206",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "27",
    y: "245",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "69",
    y: "245",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "27",
    y: "284",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "69",
    y: "284",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "27",
    y: "323",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "69",
    y: "323",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  })]
}));
const ItemLoader = props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
  width: "100%",
  height: 600,
  viewBox: "0 0 700 300",
  backgroundColor: "#f5f5f5",
  foregroundColor: "#dbdbdb"
}, props), {}, {
  speed: 2,
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
    cx: "472",
    cy: "159",
    r: "7"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "487",
    y: "154",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
    cx: "472",
    cy: "190",
    r: "7"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "487",
    y: "184",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
    cx: "472",
    cy: "219",
    r: "7"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "487",
    y: "214",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
    cx: "472",
    cy: "249",
    r: "7"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "487",
    y: "244",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "64",
    y: "18",
    rx: "0",
    ry: "0",
    width: "346",
    height: "300"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "294",
    y: "336",
    rx: "0",
    ry: "0",
    width: "40",
    height: "44"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "218",
    y: "335",
    rx: "0",
    ry: "0",
    width: "40",
    height: "44"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "142",
    y: "334",
    rx: "0",
    ry: "0",
    width: "40",
    height: "44"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "70",
    y: "333",
    rx: "0",
    ry: "0",
    width: "40",
    height: "44"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "470",
    y: "18",
    rx: "0",
    ry: "0",
    width: "300",
    height: "25"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "470",
    y: "58",
    rx: "0",
    ry: "0",
    width: "300",
    height: "6"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "470",
    y: "68",
    rx: "0",
    ry: "0",
    width: "300",
    height: "6"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "470",
    y: "78",
    rx: "0",
    ry: "0",
    width: "300",
    height: "6"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "470",
    y: "99",
    rx: "0",
    ry: "0",
    width: "70",
    height: "30"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "560",
    y: "99",
    rx: "0",
    ry: "0",
    width: "70",
    height: "30"
  })]
}));
const CategoryMobile = props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
  speed: 2,
  width: 974,
  height: 58,
  viewBox: "0 0 974 58",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), {}, {
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "388",
    y: "198",
    rx: "0",
    ry: "0",
    width: "26",
    height: "6"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "166",
    y: "267",
    rx: "0",
    ry: "0",
    width: "0",
    height: "1"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "16",
    y: "12",
    rx: "0",
    ry: "0",
    width: "90",
    height: "36"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "125",
    y: "13",
    rx: "0",
    ry: "0",
    width: "90",
    height: "36"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "485",
    y: "12",
    rx: "0",
    ry: "0",
    width: "90",
    height: "36"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "362",
    y: "12",
    rx: "0",
    ry: "0",
    width: "90",
    height: "36"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
    x: "249",
    y: "12",
    rx: "0",
    ry: "0",
    width: "90",
    height: "36"
  })]
}));
/* harmony default export */ __webpack_exports__["f"] = (PostLoader);

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wzlw":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/no-result-903ca85d899dbad46d6efd5325bac360.svg";

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });