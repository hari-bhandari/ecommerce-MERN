module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
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
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

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

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
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
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

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

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
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

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

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
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

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
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

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

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

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

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

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

    if (true) {
      return;
    }

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

    if (false) {}

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
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

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
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
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/overlayscrollbars/css/OverlayScrollbars.css":
/*!******************************************************************!*\
  !*** ./node_modules/overlayscrollbars/css/OverlayScrollbars.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/hooks.tsx":
/*!******************************!*\
  !*** ./src/assets/hooks.tsx ***!
  \******************************/
/*! exports provided: usePrevious, useMeasure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return usePrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeasure", function() { return useMeasure; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "resize-observer-polyfill");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__);


function usePrevious(value) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => void (ref.current = value), [value]);
  return ref.current;
}
function useMeasure() {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: bounds,
    1: set
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  });
  const {
    0: ro
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a(([entry]) => set(entry.contentRect)));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

/***/ }),

/***/ "./src/assets/icons/ArrowDropDown.tsx":
/*!********************************************!*\
  !*** ./src/assets/icons/ArrowDropDown.tsx ***!
  \********************************************/
/*! exports provided: ArrowDropDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDropDown", function() { return ArrowDropDown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\ArrowDropDown.tsx";

const ArrowDropDown = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "5",
    viewBox: "0 0 10 5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      "data-name": "Path 2030",
      d: "M0,63.75l5,5,5-5Z",
      transform: "translate(0 -63.75)",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/ArrowNext.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/ArrowNext.tsx ***!
  \****************************************/
/*! exports provided: ArrowNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowNext", function() { return ArrowNext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\ArrowNext.tsx";

const ArrowNext = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z",
      fill: "currentColor",
      stroke: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/ArrowPrev.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/ArrowPrev.tsx ***!
  \****************************************/
/*! exports provided: ArrowPrev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowPrev", function() { return ArrowPrev; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\ArrowPrev.tsx";

const ArrowPrev = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z",
      fill: "currentColor",
      stroke: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/CartIcon.tsx":
/*!***************************************!*\
  !*** ./src/assets/icons/CartIcon.tsx ***!
  \***************************************/
/*! exports provided: CartIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartIcon", function() { return CartIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Others_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Others/svg */ "./src/components/Others/svg.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\CartIcon.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const CartIcon = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_svg__WEBPACK_IMPORTED_MODULE_1__["Svg"], _objectSpread(_objectSpread({}, props), {}, {
  width: "14.4",
  height: "12",
  viewBox: "0 0 14.4 12",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
    "data-name": "Group 120",
    transform: "translate(-288 -413.89)",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      "data-name": "Path 154",
      fill: "currentColor",
      d: "M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined)
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/assets/icons/CategoryIcon.tsx":
/*!*******************************************!*\
  !*** ./src/assets/icons/CategoryIcon.tsx ***!
  \*******************************************/
/*! exports provided: CategoryIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryIcon", function() { return CategoryIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\CategoryIcon.tsx";

const CategoryIcon = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      "data-name": "Path 2029",
      d: "M13.563,7.876H8.313a.437.437,0,0,0-.437.437v5.25A.437.437,0,0,0,8.313,14h5.25A.437.437,0,0,0,14,13.564V8.314A.437.437,0,0,0,13.563,7.876Zm0-7.875H8.313a.437.437,0,0,0-.437.437v5.25a.437.437,0,0,0,.437.437h5.25A.437.437,0,0,0,14,5.688V.438A.437.437,0,0,0,13.563,0ZM5.687,0H.437A.438.438,0,0,0,0,.438v5.25a.437.437,0,0,0,.437.437h5.25a.437.437,0,0,0,.437-.437V.438A.438.438,0,0,0,5.687,0Zm0,7.875H.437A.437.437,0,0,0,0,8.314v5.25A.437.437,0,0,0,.437,14h5.25a.437.437,0,0,0,.437-.437V8.314A.437.437,0,0,0,5.687,7.876Z",
      transform: "translate(0 -0.001)",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/PlusMinus.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/PlusMinus.tsx ***!
  \****************************************/
/*! exports provided: Plus, Minus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return Plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minus", function() { return Minus; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\PlusMinus.tsx";
 // SVG plus icon

const Plus = ({
  color = 'currentColor',
  width = '12px',
  height = '12px'
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 12",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      id: "Group_3351",
      "data-name": "Group 3351",
      transform: "translate(-1367 -190)",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        "data-name": "Rectangle 520",
        width: "12",
        height: "2",
        rx: "1",
        transform: "translate(1367 195)",
        fill: color
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        "data-name": "Rectangle 521",
        width: "12",
        height: "2",
        rx: "1",
        transform: "translate(1374 190) rotate(90)",
        fill: color
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
}; // SVG minus icon

const Minus = ({
  color = 'currentColor',
  width = '12px',
  height = '2px'
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
      "data-name": "Rectangle 522",
      width: "12",
      height: "2",
      rx: "1",
      fill: color
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/Star.tsx":
/*!***********************************!*\
  !*** ./src/assets/icons/Star.tsx ***!
  \***********************************/
/*! exports provided: StarIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarIcon", function() { return StarIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\Star.tsx";

const StarIcon = ({
  className
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "star",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    className: className,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      fill: "currentColor",
      d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (StarIcon);

/***/ }),

/***/ "./src/assets/images/promotion/offer-1.png":
/*!*************************************************!*\
  !*** ./src/assets/images/promotion/offer-1.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/offer-1-e96d904b90c7e0bf3e74574a6e5aa684.png";

/***/ }),

/***/ "./src/assets/images/promotion/offer-2.png":
/*!*************************************************!*\
  !*** ./src/assets/images/promotion/offer-2.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/offer-2-faf9b41cfc68dcc6eea2a6d7cd3517b6.png";

/***/ }),

/***/ "./src/assets/images/promotion/offer-3.png":
/*!*************************************************!*\
  !*** ./src/assets/images/promotion/offer-3.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/offer-3-65564ae66b27b4bdda17f941dd7e0aa4.png";

/***/ }),

/***/ "./src/components/Layout/header/menu/left-menu/LeftMenu.tsx":
/*!******************************************************************!*\
  !*** ./src/components/Layout/header/menu/left-menu/LeftMenu.tsx ***!
  \******************************************************************/
/*! exports provided: CategoryIcon, LeftMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryIcon", function() { return CategoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenu", function() { return LeftMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logo/logo */ "./src/components/Layout/logo/logo.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LeftMenuStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LeftMenuStyle */ "./src/components/Layout/header/menu/left-menu/LeftMenuStyle.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Layout\\header\\menu\\left-menu\\LeftMenu.tsx";




const CategoryIcon = ({
  link,
  height,
  width
}) => {
  // @ts-ignore
  return link ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    src: link,
    alt: "Icon",
    style: {
      width: width,
      height: height
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 18
  }, undefined) : null;
};
const LeftMenu = ({
  logo
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LeftMenuStyle__WEBPACK_IMPORTED_MODULE_4__["LeftMenuBox"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logo_logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
      imageUrl: logo,
      alt: 'Shop Logo',
      onClick: () => router.push('/')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/Layout/header/menu/left-menu/LeftMenuStyle.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/Layout/header/menu/left-menu/LeftMenuStyle.tsx ***!
  \***********************************************************************/
/*! exports provided: LeftMenuBox, MainMenu, IconWrapper, MenuItem, SelectedItem, Icon, Arrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenuBox", function() { return LeftMenuBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenu", function() { return MainMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedItem", function() { return SelectedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
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

/***/ "./src/components/Layout/header/sidebar/CategorySidebar.style.tsx":
/*!************************************************************************!*\
  !*** ./src/components/Layout/header/sidebar/CategorySidebar.style.tsx ***!
  \************************************************************************/
/*! exports provided: PopoverWrapper, RequestMedicine, SidebarWrapper, CategoryWrapper, TreeWrapper, PopoverHandler, Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverWrapper", function() { return PopoverWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMedicine", function() { return RequestMedicine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarWrapper", function() { return SidebarWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryWrapper", function() { return CategoryWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeWrapper", function() { return TreeWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverHandler", function() { return PopoverHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const Fade = styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const PopoverWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
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
    border-top: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1')};

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
const RequestMedicine = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`

`;
const SidebarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
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
const CategoryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  flex:0.3;

  position: relative;
  width: 100%;
`;
const TreeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding-left: 50px;
  padding-right: 20px;
`;
const PopoverHandler = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15px')} - 1px);
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
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
      color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};
    }
  }
`;
const Loading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15px')} - 1px);
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
`;

/***/ }),

/***/ "./src/components/Layout/header/sidebar/CategorySidebar.tsx":
/*!******************************************************************!*\
  !*** ./src/components/Layout/header/sidebar/CategorySidebar.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_popover_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout/popover/popover */ "./src/components/Layout/popover/popover.tsx");
/* harmony import */ var _assets_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/icons/ArrowDropDown */ "./src/assets/icons/ArrowDropDown.tsx");
/* harmony import */ var _assets_icons_CategoryIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/icons/CategoryIcon */ "./src/assets/icons/CategoryIcon.tsx");
/* harmony import */ var _components_Others_placeholder_placeholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Others/placeholder/placeholder */ "./src/components/Others/placeholder/placeholder.tsx");
/* harmony import */ var _CategorySidebar_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CategorySidebar.style */ "./src/components/Layout/header/sidebar/CategorySidebar.style.tsx");
/* harmony import */ var _components_Layout_tree_menu_tree_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Layout/tree-menu/tree-menu */ "./src/components/Layout/tree-menu/tree-menu.tsx");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/hooks/useFetch */ "./src/hooks/useFetch.ts");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/config */ "./src/utils/config.ts");
/* harmony import */ var _components_Scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/Scrollbar */ "./src/components/Scrollbar.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/redux/actions/shopActions */ "./src/redux/actions/shopActions.ts");


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Layout\\header\\sidebar\\CategorySidebar.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















const SidebarCategory = ({
  deviceType: {
    mobile,
    tablet,
    desktop
  }
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const [data, isLoading] = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_10__["default"])(`${_utils_config__WEBPACK_IMPORTED_MODULE_11__["API_BASE_URL"]}/api/v1/category/sub`);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (data !== null) {
      dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_14__["setCategoryData"])(data.data));
    }
  }, [data]);
  const {
    pathname,
    query
  } = router;
  const selectedQueries = {
    category: query.category,
    subCategory: query.subCategory
  };

  if (isLoading) {
    if (mobile || tablet) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_placeholder_placeholder__WEBPACK_IMPORTED_MODULE_7__["SidebarMobileLoader"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 14
      }, undefined);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_placeholder_placeholder__WEBPACK_IMPORTED_MODULE_7__["SidebarLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 14
    }, undefined);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_placeholder_placeholder__WEBPACK_IMPORTED_MODULE_7__["SidebarLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 16
    }, undefined);
  }

  const onCategoryClick = (slug, parent) => {
    const {
      type
    } = query,
          rest = _objectWithoutProperties(query, ["type"]);

    if (parent) {
      if (type) {
        router.push({
          pathname,
          query: {
            category: parent,
            subCategory: slug
          }
        }, {
          pathname: `/${type}`,
          query: {
            category: parent,
            subCategory: slug
          }
        });
      } else {
        router.push({
          pathname,
          query: {
            category: parent,
            subCategory: slug
          }
        });
      }
    } else {
      if (type) {
        if (parent) {
          router.push({
            pathname,
            query: {
              category: slug
            }
          }, {
            pathname: `/${type}`,
            query: {
              category: slug
            }
          });
        }
      } else {
        router.push({
          pathname,
          query: {
            category: slug
          }
        });
      }
    }

    ;
  };

  if (!data) {
    if (mobile || tablet) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_placeholder_placeholder__WEBPACK_IMPORTED_MODULE_7__["SidebarMobileLoader"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 14
      }, undefined);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_placeholder_placeholder__WEBPACK_IMPORTED_MODULE_7__["SidebarLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CategorySidebar_style__WEBPACK_IMPORTED_MODULE_8__["CategoryWrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CategorySidebar_style__WEBPACK_IMPORTED_MODULE_8__["PopoverWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_popover_popover__WEBPACK_IMPORTED_MODULE_4__["default"], {
        handler: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CategorySidebar_style__WEBPACK_IMPORTED_MODULE_8__["PopoverHandler"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_CategoryIcon__WEBPACK_IMPORTED_MODULE_6__["CategoryIcon"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 21
            }, undefined), "Select your Category"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__["ArrowDropDown"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }, undefined),
        className: "category-popover",
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_tree_menu_tree_menu__WEBPACK_IMPORTED_MODULE_9__["TreeMenu"], {
            data: data,
            onClick: onCategoryClick,
            active: selectedQueries
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 19
          }, undefined)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CategorySidebar_style__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
        enabled: true,
        top: 110,
        className: "leftSideBar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Scrollbar__WEBPACK_IMPORTED_MODULE_12__["Scrollbar"], {
          className: "sidebar-scrollbar",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CategorySidebar_style__WEBPACK_IMPORTED_MODULE_8__["TreeWrapper"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_tree_menu_tree_menu__WEBPACK_IMPORTED_MODULE_9__["TreeMenu"], {
              data: data,
              onClick: onCategoryClick,
              active: selectedQueries
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarCategory);

/***/ }),

/***/ "./src/components/Layout/logo/logo.style.tsx":
/*!***************************************************!*\
  !*** ./src/components/Layout/logo/logo.style.tsx ***!
  \***************************************************/
/*! exports provided: LogoBox, LogoImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoBox", function() { return LogoBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoImage", function() { return LogoImage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);


const LogoBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  color: 'text.bold',
  fontSize: 26,
  fontWeight: 'bold',
  cursor: 'pointer',
  mr: [0, 20, 40],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`
  display:block;
  backface-visibility: hidden;
  max-width: 150px;
  @media only screen and (max-width: 428px){
    max-width: 120px;
  }
  @media only screen and (max-width: 428px){
    max-width: 110px;
  }
`;

/***/ }),

/***/ "./src/components/Layout/logo/logo.tsx":
/*!*********************************************!*\
  !*** ./src/components/Layout/logo/logo.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.style */ "./src/components/Layout/logo/logo.style.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Layout\\logo\\logo.tsx";




const Logo = ({
  imageUrl,
  alt,
  onClick
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logo_style__WEBPACK_IMPORTED_MODULE_3__["LogoBox"], {
    onClick: onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: '/',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logo_style__WEBPACK_IMPORTED_MODULE_3__["LogoImage"], {
        src: imageUrl,
        alt: alt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/Layout/nav-link/nav-link.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Layout/nav-link/nav-link.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Layout\\nav-link\\nav-link.tsx";




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
  router,
  icon,
  className,
  onClick,
  iconClass,
  dynamic
}) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    onClick: onClick,
    className: className ? className : '',
    children: dynamic ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: '/[type]',
      as: href,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: isCurrentPath ? ' current-page' : '',
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [icon ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
          className: iconClass,
          children: icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "label",
          children: label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: isCurrentPath ? ' current-page' : '',
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [icon ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
          className: iconClass,
          children: icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "label",
          children: label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(NavLink));

/***/ }),

/***/ "./src/components/Layout/popover/popover.style.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Layout/popover/popover.style.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const PopoverWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
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
    width: 100%;
    padding: 15px 20px;
    position: absolute;
    border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
    background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
    box-shadow: 0 3px 20px rgba(142, 142, 142, 0.14);
    z-index: 99;

    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 9px 8px;
      border-color: transparent transparent ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')} transparent;
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
/* harmony default export */ __webpack_exports__["default"] = (PopoverWrapper);

/***/ }),

/***/ "./src/components/Layout/popover/popover.tsx":
/*!***************************************************!*\
  !*** ./src/components/Layout/popover/popover.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useOnClickOutside */ "./src/components/Layout/popover/useOnClickOutside.js");
/* harmony import */ var _popover_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.style */ "./src/components/Layout/popover/popover.style.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Layout\\popover\\popover.tsx";




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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // Ref

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // Add all classs to an array

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


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  }); // Close popover on click outside

  Object(_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"])(ref, () => setState(state => false));
  return (
    /*#__PURE__*/
    // @ts-ignore
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_popover_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: addAllClasses.join(' '),
      ref: ref,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "popover-handler",
        onClick: handleToggle,
        children: handler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), state && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "popover-content",
        children: content && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "inner-wrap",
          onClick: handleToggle,
          children: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Popover);

/***/ }),

/***/ "./src/components/Layout/popover/useOnClickOutside.js":
/*!************************************************************!*\
  !*** ./src/components/Layout/popover/useOnClickOutside.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useOnClickOutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ "./src/components/Layout/store-nav/store-nav.style.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Layout/store-nav/store-nav.style.tsx ***!
  \*************************************************************/
/*! exports provided: StoreNavLinks, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreNavLinks", function() { return StoreNavLinks; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const StoreNavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  overflow: hidden;
  z-index: 1;
  position: relative;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  height: 55px;
`;
const StoreNavLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
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
      font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15px')} - 1px);
      font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
      color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798C')};
      padding: 5px 9px;
      border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
      line-height: 1.2;
      white-space: nowrap;

      svg {
        margin-right: 5px;
        flex-shrink: 0;
      }

      &.current-page {
        color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009E7F')};
        background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.100', '#f9f9f9')};
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StoreNavWrapper);

/***/ }),

/***/ "./src/components/Layout/store-nav/store-nav.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Layout/store-nav/store-nav.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_nav_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store-nav.style */ "./src/components/Layout/store-nav/store-nav.style.tsx");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useFetch */ "./src/hooks/useFetch.ts");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/config */ "./src/utils/config.ts");
/* harmony import */ var _components_Layout_nav_link_nav_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Layout/nav-link/nav-link */ "./src/components/Layout/nav-link/nav-link.tsx");
/* harmony import */ var _components_Others_placeholder_placeholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Others/placeholder/placeholder */ "./src/components/Others/placeholder/placeholder.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Layout\\store-nav\\store-nav.tsx";







const StoreNav = ({
  className
}) => {
  const [data, isLoading] = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__["default"])(`${_utils_config__WEBPACK_IMPORTED_MODULE_4__["API_BASE_URL"]}/api/v1/category/`);

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_placeholder_placeholder__WEBPACK_IMPORTED_MODULE_6__["CategoryMobile"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 20
    }, undefined);
  }

  console.log(data);

  if (!isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_store_nav_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: className,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_store_nav_style__WEBPACK_IMPORTED_MODULE_2__["StoreNavLinks"], {
        children: data === null || data === void 0 ? void 0 : data.data.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_nav_link_nav_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "store-nav-link",
          href: item.id,
          label: item.name,
          dynamic: true
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (StoreNav);

/***/ }),

/***/ "./src/components/Layout/tree-menu/tree-menu.style.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Layout/tree-menu/tree-menu.style.tsx ***!
  \*************************************************************/
/*! exports provided: Header, IconWrapper, Title, Content, Frame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return Frame; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);



const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
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
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
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
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align:middle ;
  overflow: hidden;
  font-size: ${props => props.depth === 'child' ? '16px' : "18px"};
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div)({
  willChange: 'transform, opacity, height',
  borderLeft: 0,
  overflow: 'hidden'
});
const Frame = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  marginBottom: props.depth === 'parent' ? 15 : 10,
  paddingLeft: props.depth === 'child' ? 32 : 0
}), {
  position: 'relative',
  overflowX: 'hidden'
});

/***/ }),

/***/ "./src/components/Layout/tree-menu/tree-menu.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Layout/tree-menu/tree-menu.tsx ***!
  \*******************************************************/
/*! exports provided: TreeMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeMenu", function() { return TreeMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/hooks */ "./src/assets/hooks.tsx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tree_menu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree-menu.style */ "./src/components/Layout/tree-menu/tree-menu.style.tsx");
/* harmony import */ var _components_Others_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Others/button/button */ "./src/components/Others/button/button.tsx");
/* harmony import */ var _assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/icons/ArrowNext */ "./src/assets/icons/ArrowNext.tsx");
/* harmony import */ var _components_Layout_header_menu_left_menu_LeftMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Layout/header/menu/left-menu/LeftMenu */ "./src/components/Layout/header/menu/left-menu/LeftMenu.tsx");


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Layout\\tree-menu\\tree-menu.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Tree = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(({
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultOpen);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);
  const previous = Object(_assets_hooks__WEBPACK_IMPORTED_MODULE_2__["usePrevious"])(isOpen);
  const [bind, {
    height: viewHeight
  }] = Object(_assets_hooks__WEBPACK_IMPORTED_MODULE_2__["useMeasure"])();
  const {
    height,
    opacity,
    transform
  } = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_4__["Frame"], {
    depth: depth,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      open: isOpen,
      depth: depth,
      className: depth,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_4__["IconWrapper"], {
        depth: depth,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_header_menu_left_menu_LeftMenu__WEBPACK_IMPORTED_MODULE_7__["CategoryIcon"], {
          link: icon,
          height: "25px",
          width: "25px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_4__["Title"], {
        onClick: onClick,
        depth: depth,
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }, undefined), dropdown === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_button_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        onClick: () => setOpen(!isOpen),
        variant: "text",
        className: "toggleButton",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_6__["ArrowNext"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_4__["Content"], {
      style: {
        opacity,
        height: isOpen && previous === isOpen ? 'auto' : height
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, _objectSpread(_objectSpread({
        style: {
          transform
        }
      }, bind), {}, {
        children: children
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }, undefined);
});
const TreeMenu = ({
  data,
  className,
  onClick,
  active
}) => {
  const handler = (children, category) => {
    return children.map(subOption => {
      if (!subOption.subCategory) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tree, {
          name: subOption.name,
          icon: subOption === null || subOption === void 0 ? void 0 : subOption.image,
          depth: "child",
          onClick: () => onClick(subOption.id, category),
          defaultOpen: active.subCategory === subOption.id
        }, subOption._id, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, undefined);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tree, {
        name: subOption.name,
        icon: subOption.image,
        dropdown: !subOption.subCategory.length ? false : true,
        depth: "parent",
        onClick: () => onClick(subOption.id),
        defaultOpen: active.category === subOption.id,
        children: handler(subOption.subCategory, subOption.id)
      }, subOption._id, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, undefined);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: handler(data === null || data === void 0 ? void 0 : data.data)
  }, void 0, false);
};

/***/ }),

/***/ "./src/components/Others/Featured/Featured.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Others/Featured/Featured.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carousel_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carousel/carousel */ "./src/components/Others/carousel/carousel.tsx");
/* harmony import */ var _siteOffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/siteOffers */ "./src/siteOffers.ts");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios-hooks */ "axios-hooks");
/* harmony import */ var axios_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/config */ "./src/utils/config.ts");
/* harmony import */ var _components_Others_placeholder_placeholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Others/placeholder/placeholder */ "./src/components/Others/placeholder/placeholder.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Others\\Featured\\Featured.tsx";








const ProductCard = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../Product/card/ProductItem */ "./src/components/Product/card/ProductItem.tsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../Product/card/ProductItem */ "./src/components/Product/card/ProductItem.tsx")],
    modules: ["..\\components\\Others\\Featured\\Featured.tsx -> " + "../../Product/card/ProductItem"]
  }
});

const Featured = ({
  deviceType,
  title
}) => {
  const {
    currency: {
      symbol
    }
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.shopReducer);
  const [{
    data,
    loading,
    error
  }] = axios_hooks__WEBPACK_IMPORTED_MODULE_5___default()(`${_utils_config__WEBPACK_IMPORTED_MODULE_6__["API_BASE_URL"]}/api/v1/products/top`);

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        style: {
          paddingLeft: "30px"
        },
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_placeholder_placeholder__WEBPACK_IMPORTED_MODULE_7__["FeaturedLoading"], {
        deviceType: deviceType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      style: {
        paddingLeft: "30px"
      },
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_carousel_carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
      deviceType: deviceType,
      data: _siteOffers__WEBPACK_IMPORTED_MODULE_3__["siteOffers"],
      mobile: 1.5,
      tablet: 3,
      desktop: 4.5,
      tv: 5.5,
      laptop: 4,
      miniTablet: 2,
      children: data.data.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProductCard, {
        title: product.title,
        image: product.thumbImage,
        price: product.price,
        product: product
      }, product._id, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Featured);

/***/ }),

/***/ "./src/components/Others/box.tsx":
/*!***************************************!*\
  !*** ./src/components/Others/box.tsx ***!
  \***************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div({
  boxSizing: 'border-box',
  minWidth: 0,
  margin: 0
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"]));

/***/ }),

/***/ "./src/components/Others/button/button.tsx":
/*!*************************************************!*\
  !*** ./src/components/Others/button/button.tsx ***!
  \*************************************************/
/*! exports provided: StyledButton, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Others\\button\\button.tsx";

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledButton, _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    disabled: disabled,
    children: [children, loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 19
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./src/components/Others/carousel/carousel.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Others/carousel/carousel.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomCarousel; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/ArrowNext */ "./src/assets/icons/ArrowNext.tsx");
/* harmony import */ var _assets_icons_ArrowPrev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/icons/ArrowPrev */ "./src/assets/icons/ArrowPrev.tsx");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Others\\carousel\\carousel.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const ButtonPrev = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('button')`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__["themeGet"])('colors.white', '#ffffff')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__["themeGet"])('colors.primary.regular', '#009E7F')};
  padding: 0;
  border-radius: 20px;
  box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 40px;
  margin-top: -20px;
  z-index: 99;
`;
const ButtonNext = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('button')`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__["themeGet"])('colors.primary.regular', '#009E7F')};
  padding: 0;
  border-radius: 20px;
  box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 40px;
  margin-top: -20px;
  z-index: 99;
`;
const ButtonGroupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('div')``;

const PrevButton = ({
  onClick,
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonPrev, {
    onClick: e => {
      e.preventDefault();
      onClick();
    },
    className: "prevButton",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, undefined);
};

const NextButton = ({
  onClick,
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonNext, {
    onClick: e => {
      e.preventDefault();
      onClick();
    },
    className: "nextButton",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, undefined);
};

const ButtonGroup = ({
  next,
  previous
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonGroupWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PrevButton, {
        onClick: () => previous(),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_ArrowPrev__WEBPACK_IMPORTED_MODULE_6__["ArrowPrev"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NextButton, {
        onClick: () => next(),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_5__["ArrowNext"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, undefined);
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
    children,
    laptop,
    tv,
    miniTablet
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data", "deviceType", "component", "autoPlay", "infinite", "customLeftArrow", "customRightArrow", "itemClass", "isRtl", "mobile", "desktop", "tablet", "children", "laptop", "tv", "miniTablet"]);

  const responsive = {
    tv: {
      breakpoint: {
        max: 10000,
        min: 2200
      },
      items: tv
    },
    desktop: {
      breakpoint: {
        max: 2200,
        min: 1723
      },
      items: desktop
    },
    laptop: {
      breakpoint: {
        max: 1723,
        min: 1282
      },
      items: laptop
    },
    tablet: {
      breakpoint: {
        max: 1282,
        min: 617
      },
      items: tablet
    },
    miniTablet: {
      breakpoint: {
        max: 617,
        min: 439
      },
      items: miniTablet
    },
    mobile: {
      breakpoint: {
        max: 439,
        min: 0
      },
      items: mobile
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    dir: "ltr",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
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
      customButtonGroup: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonGroup, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 28
      }, this)
    }, props), {}, {
      children: // @ts-ignore
      data.map((item, index) => {
        if (children) return children;
        if (component) return component(item);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            padding: '0 15px',
            overflow: 'hidden'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: item.link,
            style: {
              display: 'flex',
              cursor: 'pointer'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: item.imgSrc,
              alt: item.alt,
              style: {
                width: '100%',
                height: '100%',
                display: 'block',
                position: 'relative'
              }
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 15
          }, this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }, this);
      })
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Others/image/image.tsx":
/*!***********************************************!*\
  !*** ./src/components/Others/image/image.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _product_placeholder_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-placeholder.png */ "./src/components/Others/image/product-placeholder.png");
/* harmony import */ var _product_placeholder_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_product_placeholder_png__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Others\\image\\image.tsx";




const Placeholder = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
  src: _product_placeholder_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "product img loader"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 27
}, undefined);

function Image({
  url,
  alt = 'placeholder',
  unloader,
  loader,
  className,
  style
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_image__WEBPACK_IMPORTED_MODULE_2__["Img"], {
    draggable: false,
    style: style,
    src: url,
    alt: alt,
    loader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Placeholder, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }, this),
    unloader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Placeholder, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }, this),
    className: className
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Others/image/product-placeholder.png":
/*!*************************************************************!*\
  !*** ./src/components/Others/image/product-placeholder.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/Others/placeholder/placeholder.tsx":
/*!***********************************************************!*\
  !*** ./src/components/Others/placeholder/placeholder.tsx ***!
  \***********************************************************/
/*! exports provided: SuggestionLoading, FeaturedLoading, Category, CategoryLoader, SidebarMobileLoader, SidebarLoader, ItemLoader, CategoryMobile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionLoading", function() { return SuggestionLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedLoading", function() { return FeaturedLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryLoader", function() { return CategoryLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMobileLoader", function() { return SidebarMobileLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLoader", function() { return SidebarLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemLoader", function() { return ItemLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryMobile", function() { return CategoryMobile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Others\\placeholder\\placeholder.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const SuggestionLoading = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
  speed: 2,
  width: 600,
  height: 200,
  viewBox: "0 0 600 200",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), {}, {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "151",
    y: "11",
    rx: "5",
    ry: "5",
    width: "421",
    height: "41"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "65",
    y: "10",
    rx: "5",
    ry: "5",
    width: "55",
    height: "41"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "153",
    y: "69",
    rx: "5",
    ry: "5",
    width: "421",
    height: "41"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "67",
    y: "68",
    rx: "5",
    ry: "5",
    width: "55",
    height: "41"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "153",
    y: "134",
    rx: "5",
    ry: "5",
    width: "421",
    height: "41"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "67",
    y: "133",
    rx: "5",
    ry: "5",
    width: "55",
    height: "41"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, undefined)]
}), void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 12,
  columnNumber: 5
}, undefined);
const FeaturedLoading = ({
  deviceType
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, {
  viewBox: "0 0 1000 300",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "30",
    y: "20",
    rx: "8",
    ry: "8",
    width: "200",
    height: "200"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "30",
    y: "250",
    rx: "0",
    ry: "0",
    width: "200",
    height: "18"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "30",
    y: "275",
    rx: "0",
    ry: "0",
    width: "120",
    height: "20"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "250",
    y: "20",
    rx: "8",
    ry: "8",
    width: "200",
    height: "200"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "250",
    y: "250",
    rx: "0",
    ry: "0",
    width: "200",
    height: "18"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "250",
    y: "275",
    rx: "0",
    ry: "0",
    width: "120",
    height: "20"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "470",
    y: "20",
    rx: "8",
    ry: "8",
    width: "200",
    height: "200"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "470",
    y: "250",
    rx: "0",
    ry: "0",
    width: "200",
    height: "18"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "470",
    y: "275",
    rx: "0",
    ry: "0",
    width: "120",
    height: "20"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "690",
    y: "20",
    rx: "8",
    ry: "8",
    width: "200",
    height: "200"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "690",
    y: "250",
    rx: "0",
    ry: "0",
    width: "200",
    height: "18"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "690",
    y: "275",
    rx: "0",
    ry: "0",
    width: "120",
    height: "20"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 31,
  columnNumber: 5
}, undefined);

const PostLoader = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
  height: 350,
  width: 245,
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), {}, {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "2",
    y: "2",
    rx: "0",
    ry: "0",
    width: "240",
    height: "197"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "15",
    y: "220",
    rx: "0",
    ry: "0",
    width: "140",
    height: "25"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "15",
    y: "254",
    rx: "0",
    ry: "0",
    width: "65",
    height: "15"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "15",
    y: "300",
    rx: "0",
    ry: "0",
    width: "67",
    height: "20"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "170",
    y: "300",
    rx: "0",
    ry: "0",
    width: "60",
    height: "20"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined)]
}), void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 49,
  columnNumber: 3
}, undefined);

const Category = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, {
  height: 46,
  width: 400,
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "58",
    y: "10",
    rx: "0",
    ry: "0",
    width: "287",
    height: "26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "364",
    y: "10",
    rx: "0",
    ry: "0",
    width: "26",
    height: "26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "16",
    y: "10",
    rx: "0",
    ry: "0",
    width: "26",
    height: "26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 65,
  columnNumber: 3
}, undefined);
const CategoryLoader = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, {
  height: 46,
  width: 400,
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "58",
    y: "10",
    rx: "0",
    ry: "0",
    width: "58",
    height: "26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "364",
    y: "10",
    rx: "0",
    ry: "0",
    width: "58",
    height: "26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "16",
    y: "10",
    rx: "0",
    ry: "0",
    width: "58",
    height: "26"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 78,
  columnNumber: 5
}, undefined);
const SidebarMobileLoader = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
  speed: 4,
  width: 974,
  height: 58,
  viewBox: "0 0 974 58",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), {}, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "0",
    y: "0",
    rx: "26",
    ry: "26",
    width: "974",
    height: "58"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 9
  }, undefined)
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 91,
  columnNumber: 5
}, undefined);
const SidebarLoader = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
  height: 400,
  width: "calc(100% - 30px)",
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), {}, {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "376",
    y: "22",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "27",
    y: "50",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "69",
    y: "50",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "27",
    y: "89",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "69",
    y: "89",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "27",
    y: "128",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "69",
    y: "128",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "27",
    y: "167",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "69",
    y: "167",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "27",
    y: "206",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "69",
    y: "206",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "27",
    y: "245",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "69",
    y: "245",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "27",
    y: "284",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "69",
    y: "284",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "27",
    y: "323",
    rx: "0",
    ry: "0",
    width: "24",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "69",
    y: "323",
    rx: "0",
    ry: "0",
    width: "260",
    height: "24"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 5
  }, undefined)]
}), void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 104,
  columnNumber: 3
}, undefined);
const ItemLoader = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
  width: "100%",
  height: 600,
  viewBox: "0 0 700 300",
  backgroundColor: "#f5f5f5",
  foregroundColor: "#dbdbdb"
}, props), {}, {
  speed: 2,
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
    cx: "472",
    cy: "159",
    r: "7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "487",
    y: "154",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
    cx: "472",
    cy: "190",
    r: "7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "487",
    y: "184",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
    cx: "472",
    cy: "219",
    r: "7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "487",
    y: "214",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
    cx: "472",
    cy: "249",
    r: "7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "487",
    y: "244",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "64",
    y: "18",
    rx: "0",
    ry: "0",
    width: "346",
    height: "300"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "294",
    y: "336",
    rx: "0",
    ry: "0",
    width: "40",
    height: "44"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "218",
    y: "335",
    rx: "0",
    ry: "0",
    width: "40",
    height: "44"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "142",
    y: "334",
    rx: "0",
    ry: "0",
    width: "40",
    height: "44"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "70",
    y: "333",
    rx: "0",
    ry: "0",
    width: "40",
    height: "44"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "470",
    y: "18",
    rx: "0",
    ry: "0",
    width: "300",
    height: "25"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "470",
    y: "58",
    rx: "0",
    ry: "0",
    width: "300",
    height: "6"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "470",
    y: "68",
    rx: "0",
    ry: "0",
    width: "300",
    height: "6"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 163,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "470",
    y: "78",
    rx: "0",
    ry: "0",
    width: "300",
    height: "6"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "470",
    y: "99",
    rx: "0",
    ry: "0",
    width: "70",
    height: "30"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 165,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "560",
    y: "99",
    rx: "0",
    ry: "0",
    width: "70",
    height: "30"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 9
  }, undefined)]
}), void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 139,
  columnNumber: 5
}, undefined);
const CategoryMobile = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
  speed: 2,
  width: 974,
  height: 58,
  viewBox: "0 0 974 58",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), {}, {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "388",
    y: "198",
    rx: "0",
    ry: "0",
    width: "26",
    height: "6"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "166",
    y: "267",
    rx: "0",
    ry: "0",
    width: "0",
    height: "1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 180,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "16",
    y: "12",
    rx: "0",
    ry: "0",
    width: "90",
    height: "36"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "125",
    y: "13",
    rx: "0",
    ry: "0",
    width: "90",
    height: "36"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "485",
    y: "12",
    rx: "0",
    ry: "0",
    width: "90",
    height: "36"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "362",
    y: "12",
    rx: "0",
    ry: "0",
    width: "90",
    height: "36"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 184,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
    x: "249",
    y: "12",
    rx: "0",
    ry: "0",
    width: "90",
    height: "36"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 9
  }, undefined)]
}), void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 170,
  columnNumber: 5
}, undefined);
/* harmony default export */ __webpack_exports__["default"] = (PostLoader);

/***/ }),

/***/ "./src/components/Others/seo.tsx":
/*!***************************************!*\
  !*** ./src/components/Others/seo.tsx ***!
  \***************************************/
/*! exports provided: SEO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEO", function() { return SEO; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Others\\seo.tsx";


const SEO = ({
  title,
  description,
  canonical,
  css,
  js,
  image
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "description",
    content: description
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "viewport",
    content: "width=device-width,minimum-scale=1,initial-scale=1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    property: "og:type",
    content: "website"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "og:title",
    property: "og:title",
    content: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "og:description",
    property: "og:description",
    content: description
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    property: "og:site_name",
    content: "Wise Cart"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    property: "og:url",
    content: `${canonical}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "twitter:card",
    content: "summary"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "twitter:title",
    content: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "twitter:description",
    content: description
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "twitter:site",
    content: "@wisecart"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "twitter:creator",
    content: "@wisecart"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined), css && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "stylesheet",
    href: `${css}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }, undefined), image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    property: "og:image",
    content: `${image}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    property: "og:image",
    content: "https://res.cloudinary.com/wisecart/image/upload/v1616709850/gnfkfnm1c9rczncp5c5t.png"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 7
  }, undefined), image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "twitter:image",
    content: `${image}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 15
  }, undefined), canonical && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "canonical",
    href: `${canonical}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 19
  }, undefined), js && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
    type: "text/javascript",
    src: `${js}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 12
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 21,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/components/Others/svg.tsx":
/*!***************************************!*\
  !*** ./src/components/Others/svg.tsx ***!
  \***************************************/
/*! exports provided: Svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Svg", function() { return Svg; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box */ "./src/components/Others/box.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Others\\svg.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const Svg = (_ref) => {
  let {
    size = 18
  } = _ref,
      props = _objectWithoutProperties(_ref, ["size"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_box__WEBPACK_IMPORTED_MODULE_1__["Box"], _objectSpread({
    as: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: size + '',
    height: size + '',
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./src/components/Product/StarRating.tsx":
/*!***********************************************!*\
  !*** ./src/components/Product/StarRating.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_Star__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/Star */ "./src/assets/icons/Star.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Product\\StarRating.tsx";



const RatingContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    margin-top: 15px !important;
    svg {
      padding-right: 5px;
      width: 22px;

     
    }
  .active {
    color: #54C5C6;
  }

  .inActive {
    color: black;
  }
`;

const StarRating = ({
  rating
}) => {
  let active = Array.apply(null, {
    length: rating
  });
  let inActive = Array.apply(null, {
    length: 5 - rating
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RatingContainer, {
    children: [active.map(num => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_Star__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: 'active'
    }, num, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }, undefined)), inActive.map(num => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_Star__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: 'inActive'
    }, num, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 35
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StarRating);

/***/ }),

/***/ "./src/components/Product/card/ProductItem.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Product/card/ProductItem.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Others_image_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Others/image/image */ "./src/components/Others/image/image.tsx");
/* harmony import */ var _components_Others_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/button/button */ "./src/components/Others/button/button.tsx");
/* harmony import */ var _product_card_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-card.style */ "./src/components/Product/card/product-card.style.tsx");
/* harmony import */ var _cart_counter_counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cart/counter/counter */ "./src/components/cart/counter/counter.tsx");
/* harmony import */ var _assets_icons_CartIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/icons/CartIcon */ "./src/assets/icons/CartIcon.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/redux/actions/cartActions */ "./src/redux/actions/cartActions.ts");
/* harmony import */ var _utils_cartUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/cartUtils */ "./src/utils/cartUtils.ts");
/* harmony import */ var _components_Product_StarRating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Product/StarRating */ "./src/components/Product/StarRating.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _convertCurrency__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/convertCurrency */ "./src/convertCurrency.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Product\\card\\ProductItem.tsx";














const ProductCard = ({
  title,
  image,
  price,
  salePrice,
  discountInPercent,
  onClick,
  product
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.cartReducer);

  const handleAddClick = e => {
    e.stopPropagation();
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_8__["addToCart"])(product, 1));
  };

  const {
    currency: {
      symbol,
      id
    },
    currencyDetails
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.shopReducer);

  const handleRemoveClick = e => {
    e.stopPropagation();
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_8__["addToCart"])(product, -1));
  };

  const cartQuantity = Object(_utils_cartUtils__WEBPACK_IMPORTED_MODULE_9__["getItemCartQty"])(cartState, product.id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_product_card_style__WEBPACK_IMPORTED_MODULE_4__["ProductCardWrapper"], {
    onClick: onClick,
    className: "product-card",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      href: '/product/[slug]',
      as: `/product/${product.id}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_product_card_style__WEBPACK_IMPORTED_MODULE_4__["ProductImageWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_image_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
          url: image,
          className: "product-image",
          style: {
            position: 'relative'
          },
          alt: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_product_card_style__WEBPACK_IMPORTED_MODULE_4__["ProductInfo"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "product-title",
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_StarRating__WEBPACK_IMPORTED_MODULE_10__["default"], {
        rating: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "product-meta",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "productPriceWrapper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "product-price",
            children: [symbol, Object(_convertCurrency__WEBPACK_IMPORTED_MODULE_12__["default"])(currencyDetails, price, 'GBP', id)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, undefined), !cartQuantity ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_button_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          className: "cart-button",
          variant: "secondary",
          borderRadius: 100,
          onClick: handleAddClick,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_CartIcon__WEBPACK_IMPORTED_MODULE_6__["CartIcon"], {
            mr: 2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_product_card_style__WEBPACK_IMPORTED_MODULE_4__["ButtonText"], {
            children: "Cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_counter_counter__WEBPACK_IMPORTED_MODULE_5__["Counter"], {
          value: cartQuantity ? cartQuantity : 0,
          onDecrement: handleRemoveClick,
          onIncrement: handleAddClick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ }),

/***/ "./src/components/Product/card/product-card.style.tsx":
/*!************************************************************!*\
  !*** ./src/components/Product/card/product-card.style.tsx ***!
  \************************************************************/
/*! exports provided: ProductCardWrapper, ProductImageWrapper, SaleTag, DiscountPercent, ProductInfo, ButtonText, BookImageWrapper, BookInfo, ProductName, AuthorInfo, PriceWrapper, Price, DiscountedPrice, BookCardWrapper, FoodCardWrapper, FoodImageWrapper, ProductMeta, DeliveryOpt, Category, Duration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardWrapper", function() { return ProductCardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImageWrapper", function() { return ProductImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleTag", function() { return SaleTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountPercent", function() { return DiscountPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfo", function() { return ProductInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonText", function() { return ButtonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookImageWrapper", function() { return BookImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookInfo", function() { return BookInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductName", function() { return ProductName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorInfo", function() { return AuthorInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceWrapper", function() { return PriceWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Price", function() { return Price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountedPrice", function() { return DiscountedPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCardWrapper", function() { return BookCardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCardWrapper", function() { return FoodCardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodImageWrapper", function() { return FoodImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMeta", function() { return ProductMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOpt", function() { return DeliveryOpt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Duration", function() { return Duration; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);



const StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  py: [30, 50],
  px: ['1rem', 0]
}), {
  width: '100%'
});
const ProductCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  height: '100%',
  width: '100%',
  backgroundColor: 'white',
  position: 'relative',
  fontFamily: 'inherit',
  borderRadius: 'base',
  cursor: 'pointer'
}));
const ProductImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: 240px;
  padding: 5px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
  }
  @media (max-width: 767px) {
    height: 145px;
  }
`;
const SaleTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.regular', '#FFAD5E')};
  padding: 0 10px;
  line-height: 24px;
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.medium', '12px')};
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
`;
const DiscountPercent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  line-height: 24px;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.regular', '#FFAD5E')};
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 15px;
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.medium', '12px')};
  z-index: 2;
`;
const ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 20px 25px 30px;
  @media (max-width: 767px) {
    padding: 15px 20px;
    min-height: 123px;
  }
  .product-title {
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
    margin: 0 0 7px 0;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 767px) {
      font-size: 14px;
      margin: 0 0 5px 0;
    }
  }
  .product-weight {
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};
    @media (max-width: 767px) {
      font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.xs', '12')}px;
    }
  }
  .product-meta {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 767px) {
      min-height: 32px;
    }
    .productPriceWrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .product-price {
        font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
        font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
        font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
        color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009E7F')};
        @media (max-width: 767px) {
          font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px - 1px);
        }
      }
      .discountedPrice {
        font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
        font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
        font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
        color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.hover', '#FBB979')};
        font-style: italic;
        padding: 0 5px;
        position: relative;
        overflow: hidden;
        position: absolute;
        top: -20px;
        left: -4px;
        &:before {
          content: '';
          width: 100%;
          height: 1px;
          display: inline-block;
          background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.hover', '#FBB979')};
          position: absolute;
          top: 50%;
          left: 0;
        }
      }
    }
    .cart-button {
      border: 2px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#f7f7f7')};
      border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.big', '18px')};
      height: 36px;
      padding-left: 17px;
      padding-right: 17px;
      font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
      font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
      @media (max-width: 767px) {
        width: 36px;
        height: 36px;
        padding: 0;
        border-radius: 50%;
      }
      .btn-text {
        padding: 0 0 0 6px;
        @media (max-width: 767px) {
          display: none;
        }
      }
      &:hover {
        color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
        background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
        border-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
      }
      svg {
        fill: currentColor;
        @media (max-width: 767px) {
          margin: 0;
        }
      }
    }
    @media (max-width: 767px) {
      .quantity {
        width: 32px;
        height: 90px;
        display: block;
        flex-shrink: 0;
        position: absolute;
        bottom: 15px;
        right: 15px;
        z-index: 1;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
      }
      button {
        width: 100%;
        height: 27px;
      }
      .incBtn {
        top: 0;
        justify-content: center;
      }
      .decBtn {
        top: auto;
        bottom: 0;
        justify-content: center;
      }
      input[type='number'] {
        left: 0;
        font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px - 1px);
        height: calc(100% - 54px);
        position: absolute;
        top: 27px;
        width: 100%;
        color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
      }
    }
  }
`;
const ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  @media (max-width: 767px) {
    display: none;
  }
`;
const BookImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: 275px;
  padding: 0;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
  }
  @media (max-width: 767px) {
    height: 215px;
  }
  ${DiscountPercent} {
    top: 0;
    right: 0;
  }
`;
const BookInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    padding: 15px 0px 0px;
  }
`;
const ProductName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  margin: 0 0 7px 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  display: block;
  &:only-child {
    margin: 0;
  }
  @media (max-width: 767px) {
    font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px - 1px);
    margin: 0 0 5px 0;
  }
`;
const AuthorInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};
  @media (max-width: 767px) {
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  }
`; // export const AddCartBox = styled.div`
//   width: calc(100% - 40px);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   border-radius: 6px;
//   background-color: #ffffff;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   opacity: 0;
//   transition: all 0.3s;
//   .cart-button {
//     border-radius: 18px;
//     height: 36px;
//     padding-left: 17px;
//     padding-right: 17px;
//     font-size: ${themeGet('fontSizes.1', '13')} px;
//     font-weight: ${themeGet('fontWeights.bold', '700')};
//     @media (max-width: 767px) {
//       width: 32px;
//       height: 32px;
//       padding: 0;
//       border-radius: 50%;
//     }
//     .btn-text {
//       padding: 0 0 0 6px;
//       @media (max-width: 767px) {
//         display: none;
//       }
//     }
//     &:hover {
//       color: #fff;
//       background-color: ${themeGet('colors.primary.regular', '#009e7f')};
//       border-color: #009e7f;
//     }
//     svg {
//       fill: currentColor;
//     }
//   }
// `;

const PriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
`;
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009E7F')};
  @media (max-width: 767px) {
    font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px - 1px);
  }
`;
const DiscountedPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')} px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.regular', '#FFAD5E')};
  font-style: italic;
  padding: 0 5px;
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;
  margin-left: -4px;
  z-index: 2;
  &:before {
    content: '';
    width: 100%;
    height: 1px;
    display: inline-block;
    background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.regular', '#FFAD5E')};
    position: absolute;
    top: 50%;
    left: 0;
  }
`;
const BookCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: 100%;
  width: 100%;
  padding: 30px;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  position: relative;
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
  cursor: pointer;
  @media (max-width: 767px) {
    padding: 15px;
  }
`;
const FoodCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  position: relative;
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
const FoodImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: 230px;
  padding: 0;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  @media (max-width: 767px) {
    height: 145px;
  }
`;
const ProductMeta = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DeliveryOpt = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  white-space: nowrap;
`;
const Category = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};
`;
const Duration = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009E7F')};
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.big', '18px')};
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
  height: 36px;
  width: auto;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

/***/ }),

/***/ "./src/components/Product/grid/ProductGrid.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Product/grid/ProductGrid.tsx ***!
  \*****************************************************/
/*! exports provided: ProductGrid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGrid", function() { return ProductGrid; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card_ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/ProductItem */ "./src/components/Product/card/ProductItem.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loadmore_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadmore-button */ "./src/components/Product/grid/loadmore-button.tsx");
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./box */ "./src/components/Product/grid/box.tsx");
/* harmony import */ var _ProductGridStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductGridStyles */ "./src/components/Product/grid/ProductGridStyles.tsx");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/config */ "./src/utils/config.ts");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/hooks/useFetch */ "./src/hooks/useFetch.ts");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Product\\grid\\ProductGrid.tsx";




 // import { Button } from './button';




const ProductGrid = ({
  style,
  loadMore = true,
  fetchLimit = 16
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const url = () => {
    const {
      category,
      subCategory,
      query
    } = router.query;

    if (query) {
      if (category) {
        const categoryQuery = category ? `category=${category}` : '';
        return `${_utils_config__WEBPACK_IMPORTED_MODULE_7__["API_BASE_URL"]}/api/v1/products/search?query=${query}&${categoryQuery}`;
      } else {
        return `${_utils_config__WEBPACK_IMPORTED_MODULE_7__["API_BASE_URL"]}/api/v1/products/search?query=${query}`;
      }
    }

    if (category) {
      const categoryQuery = category ? `category=${category}` : '';
      const subcategoryQuery = subCategory ? `subCategory=${subCategory}` : '';
      return `${_utils_config__WEBPACK_IMPORTED_MODULE_7__["API_BASE_URL"]}/api/v1/products/?${categoryQuery}&${subcategoryQuery}`;
    } else {
      return `${_utils_config__WEBPACK_IMPORTED_MODULE_7__["API_BASE_URL"]}/api/v1/products/similar/sas`;
    }
  };

  const [data, isLoading] = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_8__["default"])(url()); // const { data, error } = useProducts({
  //     type,
  //     text: router.query.text,
  //     category: router.query.category,
  //     offset: 0,
  //     limit: fetchLimit,
  // });

  if (!data) return null;

  const handleLoadMore = async () => {
    setLoading(true); // await fetchMore(Number(data.length), fetchLimit);

    setLoading(false);
  };

  const renderCard = props => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_card_ProductItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: props.title,
      image: props.thumbImage,
      price: props.price,
      product: props
    }, props._id, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined);
  }; // const { items, hasMore } = data.products;


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductGridStyles__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      style: style,
      children: data.data.map((product, idx) => renderCard(product))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, undefined), loadMore && (data === null || data === void 0 ? void 0 : data.hasMore) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_box__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      style: {
        textAlign: 'center'
      },
      mt: '2rem',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_loadmore_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: handleLoadMore,
        loading: loading,
        variant: "secondary",
        style: {
          fontSize: 14,
          display: 'inline-flex'
        },
        border: "1px solid #f1f1f1",
        children: "Load More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (ProductGrid);

/***/ }),

/***/ "./src/components/Product/grid/ProductGridStyles.tsx":
/*!***********************************************************!*\
  !*** ./src/components/Product/grid/ProductGridStyles.tsx ***!
  \***********************************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);

 // @ts-nocheck

const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: 'repeat(1, minmax(180px, 1fr))',
  '@media screen and (min-width: 440px)': {
    gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))'
  },
  '@media screen and (min-width: 768px)': {
    gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
    gridGap: '20px'
  },
  '@media screen and (min-width: 991px)': {
    gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
    gridGap: '30px'
  },
  '@media screen and (min-width: 1100px)': {
    gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))'
  },
  '@media screen and (min-width: 1700px)': {
    gridTemplateColumns: 'repeat(4, minmax(240px, 1fr))'
  },
  '@media screen and (min-width: 2200px)': {
    gridTemplateColumns: 'repeat(5, minmax(240px, 1fr))'
  }
}));

/***/ }),

/***/ "./src/components/Product/grid/box.tsx":
/*!*********************************************!*\
  !*** ./src/components/Product/grid/box.tsx ***!
  \*********************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div({
  boxSizing: 'border-box',
  minWidth: 0,
  margin: 0
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"]));

/***/ }),

/***/ "./src/components/Product/grid/loadmore-button.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Product/grid/loadmore-button.tsx ***!
  \*********************************************************/
/*! exports provided: StyledButton, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Product\\grid\\loadmore-button.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default()({
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
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["variant"])({
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
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["variant"])({
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
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_4__["border"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["layout"]));
const rotate = styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default()({
  width: 18,
  height: 18,
  marginLeft: 10,
  border: '3px solid white',
  borderTop: `3px solid ${props.color ? props.color : 'primary.regular'}`,
  borderRadius: '50%',
  transitionProperty: 'transform'
}), styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
    animation: ${rotate} 1.2s infinite linear;
  `);
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((_ref, ref) => {
  let {
    children,
    disabled,
    loading = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "loading"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledButton, _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    disabled: disabled,
    role: "button",
    children: [children, loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spinner, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./src/components/Scrollbar.tsx":
/*!**************************************!*\
  !*** ./src/components/Scrollbar.tsx ***!
  \**************************************/
/*! exports provided: Scrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrollbar", function() { return Scrollbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! overlayscrollbars-react */ "overlayscrollbars-react");
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var overlayscrollbars_css_OverlayScrollbars_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! overlayscrollbars/css/OverlayScrollbars.css */ "./node_modules/overlayscrollbars/css/OverlayScrollbars.css");
/* harmony import */ var overlayscrollbars_css_OverlayScrollbars_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars_css_OverlayScrollbars_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Scrollbar.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Scrollbar = (_ref) => {
  let {
    children,
    className,
    options,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "options", "style"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_1__["OverlayScrollbarsComponent"], _objectSpread(_objectSpread({
    options: _objectSpread({
      className: `${className} os-theme-thin`,
      scrollbars: {
        autoHide: 'leave'
      }
    }, options),
    style: style
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/cart/counter/counter.style.tsx":
/*!*******************************************************!*\
  !*** ./src/components/cart/counter/counter.style.tsx ***!
  \*******************************************************/
/*! exports provided: CounterBox, CounterButton, CounterValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterBox", function() { return CounterBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterButton", function() { return CounterButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterValue", function() { return CounterValue; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



const CounterBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  display: 'flex',
  backgroundColor: 'primary.regular',
  color: 'white',
  fontSize: 'base',
  fontWeight: 'bold'
}), {
  borderRadius: 200,
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  flexShrink: 0,
  '&:focus': {
    outline: 'none'
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["variant"])({
  variants: {
    horizontal: {
      width: 80,
      height: 36
    },
    vertical: {
      width: 30,
      height: 90,
      flexDirection: 'column-reverse'
    },
    lightHorizontal: {
      width: 104,
      height: 36,
      backgroundColor: 'gray.200',
      color: 'text.bold'
    },
    lightVertical: {
      width: 30,
      height: 90,
      flexDirection: 'column-reverse',
      backgroundColor: 'gray.200',
      color: 'text.bold'
    }
  }
}));
const CounterButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button({
  border: 'none',
  backgroundColor: 'transparent',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: 10,
  cursor: 'pointer',
  '&:hover, &:focus': {
    outline: 'none'
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["variant"])({
  variants: {
    lightHorizontal: {
      color: 'text.regular'
    },
    lightVertical: {
      color: 'text.regular'
    }
  }
}));
const CounterValue = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span({
  pointerEvents: 'none'
});
CounterValue.displayName = 'CounterValue';
CounterButton.displayName = 'CounterButton';
CounterBox.displayName = 'CounterBox';
CounterBox.defaultProps = {
  variant: 'horizontal'
};

/***/ }),

/***/ "./src/components/cart/counter/counter.tsx":
/*!*************************************************!*\
  !*** ./src/components/cart/counter/counter.tsx ***!
  \*************************************************/
/*! exports provided: Counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return Counter; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_PlusMinus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/icons/PlusMinus */ "./src/assets/icons/PlusMinus.tsx");
/* harmony import */ var _counter_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter.style */ "./src/components/cart/counter/counter.style.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\cart\\counter\\counter.tsx";



const Counter = ({
  onDecrement,
  onIncrement,
  value,
  variant,
  className
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_counter_style__WEBPACK_IMPORTED_MODULE_3__["CounterBox"], {
    variant: variant,
    className: className,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_counter_style__WEBPACK_IMPORTED_MODULE_3__["CounterButton"], {
      onClick: onDecrement,
      variant: variant,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_PlusMinus__WEBPACK_IMPORTED_MODULE_2__["Minus"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_counter_style__WEBPACK_IMPORTED_MODULE_3__["CounterValue"], {
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_counter_style__WEBPACK_IMPORTED_MODULE_3__["CounterButton"], {
      onClick: onIncrement,
      variant: variant,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_PlusMinus__WEBPACK_IMPORTED_MODULE_2__["Plus"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/convertCurrency.tsx":
/*!*********************************!*\
  !*** ./src/convertCurrency.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ConvertCurrency = (data, price, from = 'GBP', to) => {
  let convertedPrice = 0;

  if (to === 'GBP') {
    convertedPrice = price;
  } else {
    const param = 'GBP/' + to;
    const currencyData = data[param];
    convertedPrice = price * currencyData.rate;
  }

  return convertedPrice.toFixed(2);
};

/* harmony default export */ __webpack_exports__["default"] = (ConvertCurrency);

/***/ }),

/***/ "./src/hooks/httpInstance.ts":
/*!***********************************!*\
  !*** ./src/hooks/httpInstance.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
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
  if (axios__WEBPACK_IMPORTED_MODULE_0___default.a.isCancel(error)) {
    console.log(`request cancelled`);
  }

  return Promise.reject((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error);
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/hooks/useFetch.ts":
/*!*******************************!*\
  !*** ./src/hooks/useFetch.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _httpInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpInstance */ "./src/hooks/httpInstance.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const memStore = {};

const useFetch = (url, props = {}, axiosOptions = {}) => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: shouldRefetch,
    1: reFetch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let unmounted = false;
    let source = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken.source();

    const getData = async () => {
      setIsLoading(true);

      try {
        let httpConfig = _objectSpread(_objectSpread({
          method: 'GET',
          url: url
        }, axiosOptions), {}, {
          cancelToken: source.token
        });

        let res = await Object(_httpInstance__WEBPACK_IMPORTED_MODULE_1__["default"])(httpConfig);

        if (!unmounted) {
          setIsLoading(false);
          setData(res.data);
          if (props.cache) memStore[url] = res.data;
        }
      } catch (err) {
        if (!unmounted) {
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

/* harmony default export */ __webpack_exports__["default"] = (useFetch);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_header_sidebar_CategorySidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/header/sidebar/CategorySidebar */ "./src/components/Layout/header/sidebar/CategorySidebar.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Others_carousel_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Others/carousel/carousel */ "./src/components/Others/carousel/carousel.tsx");
/* harmony import */ var _styles_pages_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/pages.style */ "./styles/pages.style.tsx");
/* harmony import */ var _siteOffers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/siteOffers */ "./src/siteOffers.ts");
/* harmony import */ var _components_Layout_store_nav_store_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Layout/store-nav/store-nav */ "./src/components/Layout/store-nav/store-nav.tsx");
/* harmony import */ var _components_Others_Featured_Featured__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Others/Featured/Featured */ "./src/components/Others/Featured/Featured.tsx");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Product_grid_ProductGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Product/grid/ProductGrid */ "./src/components/Product/grid/ProductGrid.tsx");
/* harmony import */ var _components_Others_seo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Others/seo */ "./src/components/Others/seo.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Layout_header_menu_left_menu_LeftMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/Layout/header/menu/left-menu/LeftMenu */ "./src/components/Layout/header/menu/left-menu/LeftMenu.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/assets/icons/ArrowNext */ "./src/assets/icons/ArrowNext.tsx");


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\pages\\index.tsx";

 // @ts-ignore











const CartPopUp = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../features/cart/cart-popup */ "./src/features/cart/cart-popup.tsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../features/cart/cart-popup */ "./src/features/cart/cart-popup.tsx")],
    modules: ["index.tsx -> " + "../features/cart/cart-popup"]
  }
});




const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_15___default.a.div`
  display: flex;

  h3 {
    margin-left: 15px;
  }
  h4{
    margin-left: 10px;
  }
`;

const Home = ({
  deviceType
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  const {
    categoryData
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"])(state => state.shopReducer);

  const ProductsGridText = () => {
    const {
      category,
      subCategory,
      query
    } = router.query;

    if (query) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Showing results for: ", query]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 20
      }, undefined);
    }

    if (category) {
      if (categoryData !== null) {
        const categoryObject = categoryData.find(data => data.id === category);

        const SubCategory = () => {
          if (subCategory) {
            if (categoryObject.subCategory) {
              const subCategoryObject = categoryObject.subCategory.find(data => data.id === subCategory);
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_16__["ArrowNext"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 33
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  children: subCategoryObject.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 33
                }, undefined)]
              }, void 0, true);
            }
          }
        };

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TitleContainer, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_header_menu_left_menu_LeftMenu__WEBPACK_IMPORTED_MODULE_14__["CategoryIcon"], {
            link: categoryObject.image,
            height: '50px',
            width: '50px'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: categoryObject.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, undefined), SubCategory()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 24
        }, undefined);
      }

      return 'Hey';
    }

    return 'Hi';
  };

  const isQuerying = router.query.category || router.query.query ? true : false;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_seo__WEBPACK_IMPORTED_MODULE_11__["SEO"], {
      description: "Best place to find all the goods.",
      title: "WiseCat-Shopping online has never been easier"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_pages_style__WEBPACK_IMPORTED_MODULE_5__["MobileCarouselDropdown"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_store_nav_store_nav__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_header_sidebar_CategorySidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
          deviceType: deviceType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_pages_style__WEBPACK_IMPORTED_MODULE_5__["MainContentArea"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_pages_style__WEBPACK_IMPORTED_MODULE_5__["SidebarSection"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_header_sidebar_CategorySidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
            deviceType: deviceType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_pages_style__WEBPACK_IMPORTED_MODULE_5__["ContentSection"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_pages_style__WEBPACK_IMPORTED_MODULE_5__["OfferSection"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: '20px -10px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_carousel_carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
                data: _siteOffers__WEBPACK_IMPORTED_MODULE_6__["siteOffers"],
                deviceType: deviceType,
                mobile: 1,
                tablet: 2,
                desktop: 3,
                laptop: 3,
                tv: 3.5,
                miniTablet: 1.5,
                autoPlay: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 29
          }, undefined), !isQuerying && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_pages_style__WEBPACK_IMPORTED_MODULE_5__["OfferSection"], {
              lessPadding: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_Featured_Featured__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  deviceType: deviceType,
                  title: "Top products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_pages_style__WEBPACK_IMPORTED_MODULE_5__["OfferSection"], {
              lessPadding: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_Featured_Featured__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  deviceType: deviceType,
                  title: "Featured Items"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 33
            }, undefined)]
          }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_pages_style__WEBPACK_IMPORTED_MODULE_5__["OfferSection"], {
            lessPadding: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                style: {
                  paddingLeft: "30px"
                },
                children: ProductsGridText()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 37
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_grid_ProductGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartPopUp, {
        deviceType: deviceType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/redux/actions/cartActions.ts":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.ts ***!
  \******************************************/
/*! exports provided: addToCart, removeFromCart, removeAllFromCart, decreaseQuantityCart, increaseQuantityCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllFromCart", function() { return removeAllFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseQuantityCart", function() { return decreaseQuantityCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseQuantityCart", function() { return increaseQuantityCart; });
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.ts");

const addToCart = (product, quantity, color, size) => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].ADD_TO_CART,
  product,
  quantity,
  color,
  size
});
const removeFromCart = cartId => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].REMOVE_FROM_CART,
  cartId
});
const removeAllFromCart = () => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].REMOVE_ALL_FROM_CART
});
const decreaseQuantityCart = cartId => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].DECREASE_QUANTITY_CART,
  cartId
});
const increaseQuantityCart = cartId => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].INCREASE_QUANTITY_CART,
  cartId
});

/***/ }),

/***/ "./src/redux/actions/shopActions.ts":
/*!******************************************!*\
  !*** ./src/redux/actions/shopActions.ts ***!
  \******************************************/
/*! exports provided: setSort, setSubCategory, setCategory, setCurrency, setDeliveryAddress, setBilling, setCARD, setCurrencyData, setCategoryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSort", function() { return setSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSubCategory", function() { return setSubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCategory", function() { return setCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrency", function() { return setCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeliveryAddress", function() { return setDeliveryAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBilling", function() { return setBilling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCARD", function() { return setCARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrencyData", function() { return setCurrencyData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCategoryData", function() { return setCategoryData; });
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const setSort = sortType => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_SORT,
  sortType
});
const setSubCategory = subCategory => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_SUBCATEGORY,
  subCategory
});
const setCategory = category => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_CATEGORY,
  category
});
const setCurrency = currency => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_CURRENCY,
  currency
});
const setDeliveryAddress = address => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_ADDRESS,
  address
});
const setBilling = billing => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_BILLING,
  billing
});
const setCARD = card => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_CARD,
  card
});
const setCurrencyData = () => async dispatch => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.twelvedata.com/exchange_rate?symbol=GBP/JPY,GBP/USD,GBP/EUR&apikey=5162d440a3334c558c253d678ed4802b`);
    dispatch({
      type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_CURRENCY_DATA,
      data: data
    });
  } catch (err) {
    console.log(err);
  }
};
const setCategoryData = data => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_CATEGORY_DATA,
  data: data
});

/***/ }),

/***/ "./src/redux/defines.ts":
/*!******************************!*\
  !*** ./src/redux/defines.ts ***!
  \******************************/
/*! exports provided: GLOBAL, CART, WISHLIST, SHOP, FORM, AUTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM", function() { return FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH", function() { return AUTH; });
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
  SET_CATEGORY_DATA: "SET_CATEGORY_DATA",
  SET_CURRENCY: "SET_CURRENCY",
  SET_ADDRESS: "SET_ADDRESS",
  SET_BILLING: "SET_BILLING",
  SET_CARD: "SET_CARD",
  SET_CURRENCY_DATA: "SET_CURRENCY_DATA"
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

/***/ "./src/siteOffers.ts":
/*!***************************!*\
  !*** ./src/siteOffers.ts ***!
  \***************************/
/*! exports provided: siteOffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteOffers", function() { return siteOffers; });
/* harmony import */ var _assets_images_promotion_offer_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/promotion/offer-1.png */ "./src/assets/images/promotion/offer-1.png");
/* harmony import */ var _assets_images_promotion_offer_1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_promotion_offer_1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_promotion_offer_3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/promotion/offer-3.png */ "./src/assets/images/promotion/offer-3.png");
/* harmony import */ var _assets_images_promotion_offer_3_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_promotion_offer_3_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_promotion_offer_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/promotion/offer-2.png */ "./src/assets/images/promotion/offer-2.png");
/* harmony import */ var _assets_images_promotion_offer_2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_promotion_offer_2_png__WEBPACK_IMPORTED_MODULE_2__);



const siteOffers = [{
  id: '1',
  imgSrc: _assets_images_promotion_offer_1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  alt: 'Offer 1'
}, {
  id: '2',
  imgSrc: _assets_images_promotion_offer_2_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: 'Offer 2'
}, {
  id: '3',
  imgSrc: _assets_images_promotion_offer_3_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: 'Offer 3'
}, {
  id: '1',
  imgSrc: _assets_images_promotion_offer_1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  alt: 'Offer 1'
}, {
  id: '2',
  imgSrc: _assets_images_promotion_offer_2_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: 'Offer 2'
}, {
  id: '3',
  imgSrc: _assets_images_promotion_offer_3_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: 'Offer 3'
}];

/***/ }),

/***/ "./src/utils/cartUtils.ts":
/*!********************************!*\
  !*** ./src/utils/cartUtils.ts ***!
  \********************************/
/*! exports provided: calculateTotalPrice, isInCart, getItemCartQty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTotalPrice", function() { return calculateTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInCart", function() { return isInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemCartQty", function() { return getItemCartQty; });
const calculateTotalPrice = arr => {
  let total = 0;
  arr.forEach(item => {
    if (item.discount) {
      total += item.cartQuantity ? (item.price - item.discount) * item.cartQuantity : item.price - item.discount;
    } else {
      total += item.cartQuantity ? item.price * item.cartQuantity : item.price;
    }
  });
  return total;
};
const isInCart = (arr, id) => {
  return arr.some(item => item.id === id);
};
const getItemCartQty = (arr, id) => {
  const item = arr.find(item => item.id === id);
  return item !== null && item !== void 0 && item.cartQuantity ? item.cartQuantity : null;
};

/***/ }),

/***/ "./src/utils/config.ts":
/*!*****************************!*\
  !*** ./src/utils/config.ts ***!
  \*****************************/
/*! exports provided: API_BASE_URL, transformCloudinaryImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformCloudinaryImage", function() { return transformCloudinaryImage; });
const API_BASE_URL = 'http://localhost:5000';
const transformCloudinaryImage = (url, width, height) => {
  // https://res.cloudinary.com/wisecart/image/upload/w_150,h_300,c_fill/v1617441971/re3lf0beoxdrw4hdqbeb.png
  const [first, last] = url.split('/upload/');
  return first + `/upload/w_${width},h_${height},c_fill/` + last;
};

/***/ }),

/***/ "./styles/pages.style.tsx":
/*!********************************!*\
  !*** ./styles/pages.style.tsx ***!
  \********************************/
/*! exports provided: MobileCarouselDropdown, ProductsRow, HeaderSection, MainContentArea, SidebarSection, ContentSection, OfferSection, Heading, ProductsCol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileCarouselDropdown", function() { return MobileCarouselDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRow", function() { return ProductsRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSection", function() { return HeaderSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentArea", function() { return MainContentArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarSection", function() { return SidebarSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferSection", function() { return OfferSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCol", function() { return ProductsCol; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const MobileCarouselDropdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  @media (min-width: 990px) {
    display: none;
  }
  margin-top: 72px;
`;
const HeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.300', '#f4f4f4')};
`;
const MainContentArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#f7f7f7')};
  padding-right: 0;
  transition: padding-right 0.35s ease-in-out;
`;
const SidebarSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  width: 280px;

  @media (max-width: 990px) {
    display: none;
  }
`;
const ContentSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
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
const OfferSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  display: block;
  padding:   ${props => props.lessPadding ? "30px 60px 0 60px" : "60px 60px 0 60px"};
background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  position: relative;
  border-bottom: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1')};

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
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2`
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.xl', '24')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
  padding: 0px 20px 20px;
  margin: 50px 10px 20px;
  border-bottom: 2px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
  width: auto;
  display: inline-block;
`;
const ProductsRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#f7f7f7')};

  @media (max-width: 768px) {
    margin-left: -7.5px;
    margin-right: -7.5px;
    margin-top: 15px;
  }
`;
const ProductsCol = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
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


/***/ }),

/***/ "@redq/reuse-modal":
/*!************************************!*\
  !*** external "@redq/reuse-modal" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "@styled-system/css":
/*!*************************************!*\
  !*** external "@styled-system/css" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/css");

/***/ }),

/***/ "@styled-system/theme-get":
/*!*******************************************!*\
  !*** external "@styled-system/theme-get" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "axios-hooks":
/*!******************************!*\
  !*** external "axios-hooks" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios-hooks");

/***/ }),

/***/ "light-toast":
/*!******************************!*\
  !*** external "light-toast" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("light-toast");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "overlayscrollbars-react":
/*!******************************************!*\
  !*** external "overlayscrollbars-react" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "react-image":
/*!******************************!*\
  !*** external "react-image" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "resize-observer-polyfill":
/*!*******************************************!*\
  !*** external "resize-observer-polyfill" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ob29rcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9BcnJvd0Ryb3BEb3duLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL0Fycm93TmV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9BcnJvd1ByZXYudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvQ2FydEljb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvQ2F0ZWdvcnlJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL1BsdXNNaW51cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9TdGFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9tb3Rpb24vb2ZmZXItMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvbW90aW9uL29mZmVyLTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3Byb21vdGlvbi9vZmZlci0zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL21lbnUvbGVmdC1tZW51L0xlZnRNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL21lbnUvbGVmdC1tZW51L0xlZnRNZW51U3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9oZWFkZXIvc2lkZWJhci9zaWRlYmFyLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL3NpZGViYXIvQ2F0ZWdvcnlTaWRlYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvbG9nby9sb2dvLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvbG9nby9sb2dvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvbmF2LWxpbmsvbmF2LWxpbmsudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9wb3BvdmVyL3BvcG92ZXIuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9wb3BvdmVyL3BvcG92ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9wb3BvdmVyL3VzZU9uQ2xpY2tPdXRzaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9zdG9yZS1uYXYvc3RvcmUtbmF2LnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvc3RvcmUtbmF2L3N0b3JlLW5hdi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L3RyZWUtbWVudS90cmVlLW1lbnUuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC90cmVlLW1lbnUvdHJlZS1tZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PdGhlcnMvRmVhdHVyZWQvRmVhdHVyZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9ib3gudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9idXR0b24vYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PdGhlcnMvY2Fyb3VzZWwvY2Fyb3VzZWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9pbWFnZS9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3RoZXJzL2ltYWdlL3Byb2R1Y3QtcGxhY2Vob2xkZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3RoZXJzL3Nlby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3RoZXJzL3N2Zy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9TdGFyUmF0aW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2NhcmQvUHJvZHVjdEl0ZW0udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvY2FyZC9wcm9kdWN0LWNhcmQuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvZ3JpZC9Qcm9kdWN0R3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9ncmlkL1Byb2R1Y3RHcmlkU3R5bGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2dyaWQvYm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2dyaWQvbG9hZG1vcmUtYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TY3JvbGxiYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvY291bnRlci9jb3VudGVyLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NvdW50ZXIvY291bnRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRDdXJyZW5jeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL2h0dHBJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlRmV0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvZGVmaW5lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2l0ZU9mZmVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2FydFV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3BhZ2VzLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkcS9yZXVzZS1tb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHlsZWQtc3lzdGVtL2Nzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3MtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsaWdodC10b2FzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib3ZlcmxheXNjcm9sbGJhcnMtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvbnRlbnQtbG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdGlja3lub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVzaXplLW9ic2VydmVyLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtc3lzdGVtXCIiXSwibmFtZXMiOlsicHJlZmV0Y2hlZCIsInJvdXRlciIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwiY29uc29sZSIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJwYWdlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJzaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsInVzZVByZXZpb3VzIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInVzZU1lYXN1cmUiLCJib3VuZHMiLCJ1c2VTdGF0ZSIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsInJvIiwiUmVzaXplT2JzZXJ2ZXIiLCJjb250ZW50UmVjdCIsImRpc2Nvbm5lY3QiLCJBcnJvd0Ryb3BEb3duIiwiQXJyb3dOZXh0IiwiQXJyb3dQcmV2IiwiQ2FydEljb24iLCJDYXRlZ29yeUljb24iLCJQbHVzIiwiY29sb3IiLCJNaW51cyIsIlN0YXJJY29uIiwiY2xhc3NOYW1lIiwiTGVmdE1lbnUiLCJsb2dvIiwidXNlUm91dGVyIiwiTGVmdE1lbnVCb3giLCJzdHlsZWQiLCJkaXYiLCJNYWluTWVudSIsIkljb25XcmFwcGVyIiwic3BhbiIsIk1lbnVJdGVtIiwiYnV0dG9uIiwidGhlbWVHZXQiLCJTZWxlY3RlZEl0ZW0iLCJJY29uIiwiQXJyb3ciLCJGYWRlIiwia2V5ZnJhbWVzIiwiUG9wb3ZlcldyYXBwZXIiLCJSZXF1ZXN0TWVkaWNpbmUiLCJTaWRlYmFyV3JhcHBlciIsIkNhdGVnb3J5V3JhcHBlciIsIlRyZWVXcmFwcGVyIiwiUG9wb3ZlckhhbmRsZXIiLCJMb2FkaW5nIiwiU2lkZWJhckNhdGVnb3J5IiwiZGV2aWNlVHlwZSIsIm1vYmlsZSIsInRhYmxldCIsImRlc2t0b3AiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaXNMb2FkaW5nIiwidXNlRmV0Y2giLCJBUElfQkFTRV9VUkwiLCJzZXRDYXRlZ29yeURhdGEiLCJzZWxlY3RlZFF1ZXJpZXMiLCJjYXRlZ29yeSIsInN1YkNhdGVnb3J5Iiwib25DYXRlZ29yeUNsaWNrIiwic2x1ZyIsInBhcmVudCIsInR5cGUiLCJyZXN0IiwiTG9nb0JveCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImN1cnNvciIsIm1yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIkxvZ29JbWFnZSIsImltZyIsIkxvZ28iLCJpbWFnZVVybCIsImFsdCIsIk5hdkxpbmsiLCJsYWJlbCIsImljb24iLCJpY29uQ2xhc3MiLCJkeW5hbWljIiwiaXNDdXJyZW50UGF0aCIsIndpdGhSb3V0ZXIiLCJQb3BvdmVyIiwiZGlyZWN0aW9uIiwic2V0U3RhdGUiLCJhZGRBbGxDbGFzc2VzIiwiaGFuZGxlVG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlRG9jdW1lbnRDbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlT25DbGlja091dHNpZGUiLCJqb2luIiwibGlzdGVuZXIiLCJjb250YWlucyIsIlN0b3JlTmF2V3JhcHBlciIsIlN0b3JlTmF2TGlua3MiLCJTdG9yZU5hdiIsImxvZyIsImluZGV4IiwiSGVhZGVyIiwiaGVhZGVyIiwiZGVwdGgiLCJtYXJnaW5Cb3R0b20iLCJvcGVuIiwidHJhbnNpdGlvbiIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNmb3JtIiwib3V0bGluZSIsIm1hcmdpblJpZ2h0Iiwic3ZnIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsImZsZXhTaHJpbmsiLCJUaXRsZSIsIkNvbnRlbnQiLCJhbmltYXRlZCIsIndpbGxDaGFuZ2UiLCJib3JkZXJMZWZ0IiwiRnJhbWUiLCJwYWRkaW5nTGVmdCIsInBvc2l0aW9uIiwib3ZlcmZsb3dYIiwiVHJlZSIsIm1lbW8iLCJkcm9wZG93biIsImRlZmF1bHRPcGVuIiwiaXNPcGVuIiwic2V0T3BlbiIsInByZXZpb3VzIiwiYmluZCIsInZpZXdIZWlnaHQiLCJvcGFjaXR5IiwidXNlU3ByaW5nIiwiZnJvbSIsInRvIiwiVHJlZU1lbnUiLCJhY3RpdmUiLCJzdWJPcHRpb24iLCJpbWFnZSIsIl9pZCIsImxlbmd0aCIsIlByb2R1Y3RDYXJkIiwic3NyIiwiRmVhdHVyZWQiLCJ0aXRsZSIsImN1cnJlbmN5Iiwic3ltYm9sIiwidXNlU2VsZWN0b3IiLCJzaG9wUmVkdWNlciIsImxvYWRpbmciLCJ1c2VBeGlvcyIsInNpdGVPZmZlcnMiLCJwcm9kdWN0IiwidGh1bWJJbWFnZSIsInByaWNlIiwiQm94IiwiYm94U2l6aW5nIiwibWluV2lkdGgiLCJtYXJnaW4iLCJjb21wb3NlIiwic3BhY2UiLCJsYXlvdXQiLCJTdHlsZWRCdXR0b24iLCJweCIsInB5IiwiYmciLCJhcHBlYXJhbmNlIiwidGV4dEFsaWduIiwidGV4dERlY29yYXRpb24iLCJmb250RmFtaWx5IiwiYm9yZGVyIiwidmFyaWFudCIsInZhcmlhbnRzIiwib3V0bGluZWQiLCJib3JkZXJDb2xvciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJzZWxlY3QiLCJsaW5lSGVpZ2h0IiwicHJvcCIsImJpZyIsInNtYWxsIiwicm90YXRlIiwiU3Bpbm5lciIsIkJ1dHRvbiIsImZvcndhcmRSZWYiLCJCdXR0b25QcmV2IiwiQnV0dG9uTmV4dCIsIkJ1dHRvbkdyb3VwV3JhcHBlciIsIlByZXZCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsIk5leHRCdXR0b24iLCJCdXR0b25Hcm91cCIsIm5leHQiLCJDdXN0b21DYXJvdXNlbCIsImF1dG9QbGF5IiwiaW5maW5pdGUiLCJjdXN0b21MZWZ0QXJyb3ciLCJjdXN0b21SaWdodEFycm93IiwiaXRlbUNsYXNzIiwiaXNSdGwiLCJsYXB0b3AiLCJ0diIsIm1pbmlUYWJsZXQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiaW1nU3JjIiwiUGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlciIsIkltYWdlIiwidW5sb2FkZXIiLCJsb2FkZXIiLCJzdHlsZSIsIlN1Z2dlc3Rpb25Mb2FkaW5nIiwiRmVhdHVyZWRMb2FkaW5nIiwiUG9zdExvYWRlciIsIkNhdGVnb3J5IiwiQ2F0ZWdvcnlMb2FkZXIiLCJTaWRlYmFyTW9iaWxlTG9hZGVyIiwiU2lkZWJhckxvYWRlciIsIkl0ZW1Mb2FkZXIiLCJDYXRlZ29yeU1vYmlsZSIsIlNFTyIsImRlc2NyaXB0aW9uIiwiY2Fub25pY2FsIiwianMiLCJTdmciLCJzaXplIiwiUmF0aW5nQ29udGFpbmVyIiwiU3RhclJhdGluZyIsInJhdGluZyIsImFwcGx5IiwiaW5BY3RpdmUiLCJudW0iLCJzYWxlUHJpY2UiLCJkaXNjb3VudEluUGVyY2VudCIsImNhcnRTdGF0ZSIsImNhcnRSZWR1Y2VyIiwiaGFuZGxlQWRkQ2xpY2siLCJhZGRUb0NhcnQiLCJjdXJyZW5jeURldGFpbHMiLCJoYW5kbGVSZW1vdmVDbGljayIsImNhcnRRdWFudGl0eSIsImdldEl0ZW1DYXJ0UXR5IiwiQ29udmVydEN1cnJlbmN5IiwiU3R5bGVkQm94IiwiUHJvZHVjdENhcmRXcmFwcGVyIiwiUHJvZHVjdEltYWdlV3JhcHBlciIsIlNhbGVUYWciLCJEaXNjb3VudFBlcmNlbnQiLCJQcm9kdWN0SW5mbyIsIkJ1dHRvblRleHQiLCJCb29rSW1hZ2VXcmFwcGVyIiwiQm9va0luZm8iLCJQcm9kdWN0TmFtZSIsIkF1dGhvckluZm8iLCJQcmljZVdyYXBwZXIiLCJQcmljZSIsIkRpc2NvdW50ZWRQcmljZSIsIkJvb2tDYXJkV3JhcHBlciIsIkZvb2RDYXJkV3JhcHBlciIsIkZvb2RJbWFnZVdyYXBwZXIiLCJQcm9kdWN0TWV0YSIsIkRlbGl2ZXJ5T3B0IiwiRHVyYXRpb24iLCJQcm9kdWN0R3JpZCIsImxvYWRNb3JlIiwiZmV0Y2hMaW1pdCIsInNldExvYWRpbmciLCJjYXRlZ29yeVF1ZXJ5Iiwic3ViY2F0ZWdvcnlRdWVyeSIsImhhbmRsZUxvYWRNb3JlIiwicmVuZGVyQ2FyZCIsImhhc01vcmUiLCJHcmlkIiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJmbGV4Ym94Iiwic3lzdGVtQ3NzIiwiYm9yZGVyVG9wIiwidHJhbnNpdGlvblByb3BlcnR5IiwiU2Nyb2xsYmFyIiwic2Nyb2xsYmFycyIsImF1dG9IaWRlIiwiQ291bnRlckJveCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImZsZXhEaXJlY3Rpb24iLCJsaWdodEhvcml6b250YWwiLCJsaWdodFZlcnRpY2FsIiwiQ291bnRlckJ1dHRvbiIsIkNvdW50ZXJWYWx1ZSIsInBvaW50ZXJFdmVudHMiLCJkaXNwbGF5TmFtZSIsImRlZmF1bHRQcm9wcyIsIkNvdW50ZXIiLCJvbkRlY3JlbWVudCIsIm9uSW5jcmVtZW50IiwiY29udmVydGVkUHJpY2UiLCJjdXJyZW5jeURhdGEiLCJyYXRlIiwidG9GaXhlZCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInJlcXVlc3RIYW5kbGVyIiwiY29uZmlnIiwidGltZW91dCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJyZXNwb25zZSIsInVuZGVmaW5lZCIsImlzQ2FuY2VsIiwibWVtU3RvcmUiLCJheGlvc09wdGlvbnMiLCJzZXREYXRhIiwic2V0SXNMb2FkaW5nIiwic2V0RXJyb3IiLCJzaG91bGRSZWZldGNoIiwicmVGZXRjaCIsInVubW91bnRlZCIsInNvdXJjZSIsIkNhbmNlbFRva2VuIiwiZ2V0RGF0YSIsImh0dHBDb25maWciLCJjYW5jZWxUb2tlbiIsInRva2VuIiwiaHR0cCIsImNhY2hlIiwiQ2FydFBvcFVwIiwiVGl0bGVDb250YWluZXIiLCJIb21lIiwiY2F0ZWdvcnlEYXRhIiwiUHJvZHVjdHNHcmlkVGV4dCIsImNhdGVnb3J5T2JqZWN0IiwiZmluZCIsIlN1YkNhdGVnb3J5Iiwic3ViQ2F0ZWdvcnlPYmplY3QiLCJpc1F1ZXJ5aW5nIiwicXVhbnRpdHkiLCJDQVJUIiwiQUREX1RPX0NBUlQiLCJyZW1vdmVGcm9tQ2FydCIsImNhcnRJZCIsIlJFTU9WRV9GUk9NX0NBUlQiLCJyZW1vdmVBbGxGcm9tQ2FydCIsIlJFTU9WRV9BTExfRlJPTV9DQVJUIiwiZGVjcmVhc2VRdWFudGl0eUNhcnQiLCJERUNSRUFTRV9RVUFOVElUWV9DQVJUIiwiaW5jcmVhc2VRdWFudGl0eUNhcnQiLCJJTkNSRUFTRV9RVUFOVElUWV9DQVJUIiwic2V0U29ydCIsInNvcnRUeXBlIiwiU0hPUCIsIlNFVF9TT1JUIiwic2V0U3ViQ2F0ZWdvcnkiLCJTRVRfU1VCQ0FURUdPUlkiLCJzZXRDYXRlZ29yeSIsIlNFVF9DQVRFR09SWSIsInNldEN1cnJlbmN5IiwiU0VUX0NVUlJFTkNZIiwic2V0RGVsaXZlcnlBZGRyZXNzIiwiYWRkcmVzcyIsIlNFVF9BRERSRVNTIiwic2V0QmlsbGluZyIsImJpbGxpbmciLCJTRVRfQklMTElORyIsInNldENBUkQiLCJjYXJkIiwiU0VUX0NBUkQiLCJzZXRDdXJyZW5jeURhdGEiLCJTRVRfQ1VSUkVOQ1lfREFUQSIsIlNFVF9DQVRFR09SWV9EQVRBIiwiR0xPQkFMIiwiU0VUX0xBTkdVQUdFIiwiU0VUX1NFQVJDSCIsIldJU0hMSVNUIiwiQUREX1RPX1dJU0hMSVNUIiwiUkVNT1ZFX0ZST01fV0lTSExJU1QiLCJGT1JNIiwiU0VUX0NVUlJFTlRfRk9STSIsIkFVVEgiLCJMT0dfSU4iLCJMT0dfSU5fRVJST1IiLCJTSUdOX1VQX0VSUk9SIiwiU0lHTl9VUCIsIkxPR19PVVQiLCJMT0FEX1VTRVIiLCJMT0FEX1VTRVJfRkFJTCIsIk9SREVSX1NVQ0NFU1MiLCJPUkRFUl9TVUNDRVNTX0ZBSUwiLCJPZmZlck9uZSIsIk9mZmVyVHdvIiwiT2ZmZXJUaHJlZSIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJhcnIiLCJ0b3RhbCIsImZvckVhY2giLCJkaXNjb3VudCIsImlzSW5DYXJ0Iiwic29tZSIsInRyYW5zZm9ybUNsb3VkaW5hcnlJbWFnZSIsImZpcnN0IiwibGFzdCIsInNwbGl0IiwiTW9iaWxlQ2Fyb3VzZWxEcm9wZG93biIsIkhlYWRlclNlY3Rpb24iLCJNYWluQ29udGVudEFyZWEiLCJtYWluIiwiU2lkZWJhclNlY3Rpb24iLCJDb250ZW50U2VjdGlvbiIsIk9mZmVyU2VjdGlvbiIsImxlc3NQYWRkaW5nIiwi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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLmFzUGF0aCkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbik6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgICAudGhlbigoeyBzY3JpcHRzLCBjc3MgfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICAgICAgXSBhcyBjb25zdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KSA9PiAoe1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV0sXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigoeyBlbnRyeXBvaW50LCBzdHlsZXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgICAgPih7IHN0eWxlczogc3R5bGVzISB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiZcbiAgICAgIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXJcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHxcbiAgICAgICAgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcilcbiAgICAgID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgK1xuICAgICAgICAgIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgbGV0IGJhc2U6IFVSTFxuXG4gIHRyeSB7XG4gICAgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJylcbiAgfVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIuYXNQYXRoLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIuYXNQYXRoLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKFdyYXBBcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmXG4gICAgICAgICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJlxuICAgICAgICAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUylcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgKG9wdGlvbnMgYXMgYW55KS5faFxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55XG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IFByZXZpZXdEYXRhIH0gZnJvbSAnbmV4dC90eXBlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IChzdHJpbmcgfCBudW1iZXIpW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBsb2NhbGVcbiAgICovXG4gIGxvY2FsZT86IHN0cmluZ1xuICAvKipcbiAgICogQWxsIGNvbmZpZ3VyZWQgbG9jYWxlc1xuICAgKi9cbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIC8qKlxuICAgKiBUaGUgY29uZmlndXJlZCBkZWZhdWx0IGxvY2FsZVxuICAgKi9cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IHN0cmluZ1tdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgYWZ0ZXJJbnRlcmFjdGl2ZT86IHN0cmluZ1tdOyBiZWZvcmVJbnRlcmFjdGl2ZT86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nPzogYm9vbGVhblxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBQcmV2aWV3RGF0YVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSBcInJlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlOiBhbnkpIHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4gdm9pZCAocmVmLmN1cnJlbnQgPSB2YWx1ZSksIFt2YWx1ZV0pO1xyXG4gIHJldHVybiByZWYuY3VycmVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lYXN1cmUoKSB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW2JvdW5kcywgc2V0XSA9IHVzZVN0YXRlPGFueT4oeyBsZWZ0OiAwLCB0b3A6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7XHJcbiAgY29uc3QgW3JvXSA9IHVzZVN0YXRlKFxyXG4gICAgKCkgPT4gbmV3IFJlc2l6ZU9ic2VydmVyKChbZW50cnldKSA9PiBzZXQoZW50cnkuY29udGVudFJlY3QpKVxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZWYuY3VycmVudCkgeyAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHJvLm9ic2VydmUocmVmLmN1cnJlbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHJvLmRpc2Nvbm5lY3QoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIFt7IHJlZiB9LCBib3VuZHNdO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBBcnJvd0Ryb3BEb3duID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgd2lkdGg9JzEwJ1xyXG4gICAgICBoZWlnaHQ9JzUnXHJcbiAgICAgIHZpZXdCb3g9JzAgMCAxMCA1J1xyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGRhdGEtbmFtZT0nUGF0aCAyMDMwJ1xyXG4gICAgICAgIGQ9J00wLDYzLjc1bDUsNSw1LTVaJ1xyXG4gICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAgLTYzLjc1KSdcclxuICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgQXJyb3dOZXh0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPScyMCc+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD0nTTI5NC4xIDI1NkwxNjcgMTI5Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOXMyNC42LTkuMyAzNCAwTDM0NSAyMzljOS4xIDkuMSA5LjMgMjMuNy43IDMzLjFMMjAxLjEgNDE3Yy00LjcgNC43LTEwLjkgNy0xNyA3cy0xMi4zLTIuMy0xNy03Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWwxMjctMTI3LjF6J1xyXG4gICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBBcnJvd1ByZXYgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzIwJz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPSdNMjE3LjkgMjU2TDM0NSAxMjljOS40LTkuNCA5LjQtMjQuNiAwLTMzLjktOS40LTkuNC0yNC42LTkuMy0zNCAwTDE2NyAyMzljLTkuMSA5LjEtOS4zIDIzLjctLjcgMzMuMUwzMTAuOSA0MTdjNC43IDQuNyAxMC45IDcgMTcgN3MxMi4zLTIuMyAxNy03YzkuNC05LjQgOS40LTI0LjYgMC0zMy45TDIxNy45IDI1NnonXHJcbiAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgU3ZnIH0gZnJvbSAnQC9jb21wb25lbnRzL090aGVycy9zdmcnO1xyXG5leHBvcnQgY29uc3QgQ2FydEljb24gPSAocHJvcHM6IEpTWC5JbnRyaW5zaWNBdHRyaWJ1dGVzICYgeyBbeDogc3RyaW5nXTogYW55OyBzaXplPzogbnVtYmVyIHwgdW5kZWZpbmVkOyB9KSA9PiAoXHJcbiAgPFN2ZyB7Li4ucHJvcHN9IHdpZHRoPVwiMTQuNFwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxNC40IDEyXCI+XHJcbiAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAxMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI4OCAtNDEzLjg5KVwiPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTU0XCJcclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICBkPVwiTTI5OC43LDQxOC4yODlsLTIuOTA2LTQuMTQ4YS44MzUuODM1LDAsMCwwLS41MjgtLjI1MS42MDcuNjA3LDAsMCwwLS41MjkuMjUxbC0yLjkwNSw0LjE0OGgtMy4xN2EuNjA5LjYwOSwwLDAsMC0uNjYxLjYyNXYuMTkxbDEuNjUxLDUuODRhMS4zMzYsMS4zMzYsMCwwLDAsMS4yNTUuOTQ1aDguNTg4YTEuMjYxLDEuMjYxLDAsMCwwLDEuMjU0LS45NDVsMS42NTEtNS44NHYtLjE5MWEuNjA5LjYwOSwwLDAsMC0uNjYxLS42MjVabS01LjQxOSwwLDEuOTg0LTIuNzY3LDEuOTgsMi43NjdabTEuOTg0LDUuMDI0YTEuMjU4LDEuMjU4LDAsMSwxLDEuMzE5LTEuMjU4LDEuMywxLjMsMCwwLDEtMS4zMTksMS4yNThabTAsMFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2c+XHJcbiAgPC9Tdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeUljb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICB3aWR0aD0nMTQnXHJcbiAgICAgIGhlaWdodD0nMTQnXHJcbiAgICAgIHZpZXdCb3g9JzAgMCAxNCAxNCdcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkYXRhLW5hbWU9J1BhdGggMjAyOSdcclxuICAgICAgICBkPSdNMTMuNTYzLDcuODc2SDguMzEzYS40MzcuNDM3LDAsMCwwLS40MzcuNDM3djUuMjVBLjQzNy40MzcsMCwwLDAsOC4zMTMsMTRoNS4yNUEuNDM3LjQzNywwLDAsMCwxNCwxMy41NjRWOC4zMTRBLjQzNy40MzcsMCwwLDAsMTMuNTYzLDcuODc2Wm0wLTcuODc1SDguMzEzYS40MzcuNDM3LDAsMCwwLS40MzcuNDM3djUuMjVhLjQzNy40MzcsMCwwLDAsLjQzNy40MzdoNS4yNUEuNDM3LjQzNywwLDAsMCwxNCw1LjY4OFYuNDM4QS40MzcuNDM3LDAsMCwwLDEzLjU2MywwWk01LjY4NywwSC40MzdBLjQzOC40MzgsMCwwLDAsMCwuNDM4djUuMjVhLjQzNy40MzcsMCwwLDAsLjQzNy40MzdoNS4yNWEuNDM3LjQzNywwLDAsMCwuNDM3LS40MzdWLjQzOEEuNDM4LjQzOCwwLDAsMCw1LjY4NywwWm0wLDcuODc1SC40MzdBLjQzNy40MzcsMCwwLDAsMCw4LjMxNHY1LjI1QS40MzcuNDM3LDAsMCwwLC40MzcsMTRoNS4yNWEuNDM3LjQzNywwLDAsMCwuNDM3LS40MzdWOC4zMTRBLjQzNy40MzcsMCwwLDAsNS42ODcsNy44NzZaJ1xyXG4gICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAgLTAuMDAxKSdcclxuICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBTVkcgcGx1cyBpY29uXHJcbmV4cG9ydCBjb25zdCBQbHVzID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIHdpZHRoID0gJzEycHgnLFxyXG4gIGhlaWdodCA9ICcxMnB4JyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDEyIDEyXCJcclxuICAgID5cclxuICAgICAgPGdcclxuICAgICAgICBpZD1cIkdyb3VwXzMzNTFcIlxyXG4gICAgICAgIGRhdGEtbmFtZT1cIkdyb3VwIDMzNTFcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTM2NyAtMTkwKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8cmVjdFxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDUyMFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjEyXCJcclxuICAgICAgICAgIGhlaWdodD1cIjJcIlxyXG4gICAgICAgICAgcng9XCIxXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzY3IDE5NSlcIlxyXG4gICAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cmVjdFxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDUyMVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjEyXCJcclxuICAgICAgICAgIGhlaWdodD1cIjJcIlxyXG4gICAgICAgICAgcng9XCIxXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzc0IDE5MCkgcm90YXRlKDkwKVwiXHJcbiAgICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG5cclxuLy8gU1ZHIG1pbnVzIGljb25cclxuZXhwb3J0IGNvbnN0IE1pbnVzID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIHdpZHRoID0gJzEycHgnLFxyXG4gIGhlaWdodCA9ICcycHgnLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTIgMlwiXHJcbiAgICA+XHJcbiAgICAgIDxyZWN0XHJcbiAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDUyMlwiXHJcbiAgICAgICAgd2lkdGg9XCIxMlwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMlwiXHJcbiAgICAgICAgcng9XCIxXCJcclxuICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBTdGFySWNvbjpSZWFjdC5GQzx7Y2xhc3NOYW1lOnN0cmluZ30+ID0gKHtjbGFzc05hbWV9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXHJcbiAgICAgICAgICAgIGRhdGEtaWNvbj1cInN0YXJcIlxyXG4gICAgICAgICAgICByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU5LjMgMTcuOEwxOTQgMTUwLjIgNDcuOSAxNzEuNWMtMjYuMiAzLjgtMzYuNyAzNi4xLTE3LjcgNTQuNmwxMDUuNyAxMDMtMjUgMTQ1LjVjLTQuNSAyNi4zIDIzLjIgNDYgNDYuNCAzMy43TDI4OCA0MzkuNmwxMzAuNyA2OC43YzIzLjIgMTIuMiA1MC45LTcuNCA0Ni40LTMzLjdsLTI1LTE0NS41IDEwNS43LTEwM2MxOS0xOC41IDguNS01MC44LTE3LjctNTQuNkwzODIgMTUwLjIgMzE2LjcgMTcuOGMtMTEuNy0yMy42LTQ1LjYtMjMuOS01Ny40IDB6XCI+XHJcblxyXG4gICAgICAgICAgICA8L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdGFySWNvbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9vZmZlci0xLWU5NmQ5MDRiOTBjN2UwYmYzZTc0NTc0YTZlNWFhNjg0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9vZmZlci0yLWZhZjliNDFjZmM2OGRjYzZlZWEyYTZkN2NkMzUxN2I2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9vZmZlci0zLTY1NTY0YWU2NmIyN2I0YmRkYTE3Zjk0MWRkN2UwYWE0LnBuZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uLy4uL2xvZ28vbG9nbyc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICAgIExlZnRNZW51Qm94LFxyXG59IGZyb20gJy4vTGVmdE1lbnVTdHlsZSc7XHJcbmltcG9ydCBDYXRlZ29yeVNlYXJjaFN3aXRjaGVyIGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0L2hlYWRlci9tZW51L2xlZnQtbWVudS9DYXRlZ29yeVNlYXJjaFN3aXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlJY29uOlJlYWN0LkZDPHtsaW5rOnN0cmluZyxoZWlnaHQ6c3RyaW5nLHdpZHRoOnN0cmluZ30+ID0gKHsgbGluayxoZWlnaHQsd2lkdGggfSkgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgcmV0dXJuIGxpbms/IDxpbWcgc3JjPXtsaW5rfSBhbHQ9XCJJY29uXCIgc3R5bGU9e3t3aWR0aDp3aWR0aCxoZWlnaHQ6aGVpZ2h0fX0vPiA6IG51bGw7XHJcbn07XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgbG9nbzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExlZnRNZW51OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBsb2dvIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMZWZ0TWVudUJveD5cclxuICAgICAgICAgICAgPExvZ29cclxuICAgICAgICAgICAgICAgIGltYWdlVXJsPXtsb2dvfVxyXG4gICAgICAgICAgICAgICAgYWx0PXsnU2hvcCBMb2dvJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MZWZ0TWVudUJveD5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcblxyXG5leHBvcnQgY29uc3QgTGVmdE1lbnVCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbk1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZC5zcGFuYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMjRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudUl0ZW0gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XHJcbiAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgc3ZnIHtcclxuICAgIG1pbi13aWR0aDogMTVweDtcclxuICAgIG1heC13aWR0aDogMjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDE5cHg7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIH1cclxuICAmLmN1cnJlbnQtcGFnZSB7XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWxlY3RlZEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogMzhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgneicsICcjZmZmZmZmJyl9O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjUwMCcsICcjZjFmMWYxJyl9O1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iYXNlJywgJzZweCcpfTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBzdmcge1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogIzRmNGY1NjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMTZweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEFycm93ID0gc3R5bGVkLnNwYW5gXHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmNvbnN0IEZhZGUgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3BvdmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnBvcG92ZXItaGFuZGxlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5wb3BvdmVyLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDM1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuNTAwJywgJyNmMWYxZjEnKX07XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jYXRlZ29yeS1kcm9wZG93biB7XHJcbiAgICAgIGFuaW1hdGlvbjogJHtGYWRlfSAwLjZzO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RNZWRpY2luZSA9IHN0eWxlZC5zcGFuYFxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlYmFyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMzVweCAwIDQ1cHggMHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDAgNDBweCAwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6MC4zO1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvcG92ZXJIYW5kbGVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTVweCcpfSAtIDFweCk7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBzdmcge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9hZGluZyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1cHgnKX0gLSAxcHgpO1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XHJcbmltcG9ydCBQb3BvdmVyIGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQvcG9wb3Zlci9wb3BvdmVyJztcclxuaW1wb3J0IHsgQXJyb3dEcm9wRG93biB9IGZyb20gJ0AvYXNzZXRzL2ljb25zL0Fycm93RHJvcERvd24nO1xyXG5pbXBvcnQgeyBDYXRlZ29yeUljb24gfSBmcm9tICdAL2Fzc2V0cy9pY29ucy9DYXRlZ29yeUljb24nO1xyXG5pbXBvcnQge1xyXG4gIFNpZGViYXJNb2JpbGVMb2FkZXIsXHJcbiAgU2lkZWJhckxvYWRlcixcclxufSBmcm9tICdAL2NvbXBvbmVudHMvT3RoZXJzL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyJztcclxuaW1wb3J0IHtcclxuICBDYXRlZ29yeVdyYXBwZXIsXHJcbiAgVHJlZVdyYXBwZXIsXHJcbiAgUG9wb3ZlckhhbmRsZXIsXHJcbiAgUG9wb3ZlcldyYXBwZXIsXHJcbiAgU2lkZWJhcldyYXBwZXIsXHJcbn0gZnJvbSAnLi9DYXRlZ29yeVNpZGViYXIuc3R5bGUnO1xyXG5pbXBvcnQgeyBUcmVlTWVudSB9IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQvdHJlZS1tZW51L3RyZWUtbWVudSc7XHJcbmltcG9ydCB1c2VGZXRjaCBmcm9tIFwiQC9ob29rcy91c2VGZXRjaFwiO1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCB7U2Nyb2xsYmFyfSBmcm9tIFwiQC9jb21wb25lbnRzL1Njcm9sbGJhclwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZXRDYXRlZ29yeURhdGF9IGZyb20gXCJAL3JlZHV4L2FjdGlvbnMvc2hvcEFjdGlvbnNcIjtcclxuXHJcbnR5cGUgU2lkZWJhckNhdGVnb3J5UHJvcHMgPSB7XHJcbiAgZGV2aWNlVHlwZToge1xyXG4gICAgbW9iaWxlOiBib29sZWFuO1xyXG4gICAgdGFibGV0OiBib29sZWFuO1xyXG4gICAgZGVza3RvcDogYm9vbGVhbjtcclxuICB9O1xyXG59O1xyXG5pbnRlcmZhY2Ugc2VsZWN0ZWRRdWVyeXtcclxuICAgIGNhdGVnb3J5OnN0cmluZ1tdfHN0cmluZztcclxuICAgIHN1YkNhdGVnb3J5OnN0cmluZ1tdfHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBTaWRlYmFyQ2F0ZWdvcnk6IFJlYWN0LkZDPFNpZGViYXJDYXRlZ29yeVByb3BzPiA9ICh7ZGV2aWNlVHlwZTogeyBtb2JpbGUsIHRhYmxldCwgZGVza3RvcCB9fSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2RhdGEsIGlzTG9hZGluZ10gPSB1c2VGZXRjaChgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9jYXRlZ29yeS9zdWJgKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoZGF0YSE9PW51bGwpe1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRDYXRlZ29yeURhdGEoZGF0YS5kYXRhKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbZGF0YV0pXHJcblxyXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSByb3V0ZXI7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkUXVlcmllczpzZWxlY3RlZFF1ZXJ5PXtcclxuICAgICAgY2F0ZWdvcnk6cXVlcnkuY2F0ZWdvcnksXHJcbiAgICAgIHN1YkNhdGVnb3J5OnF1ZXJ5LnN1YkNhdGVnb3J5XHJcbiAgfTtcclxuICBpZihpc0xvYWRpbmcpe1xyXG4gICAgICBpZihtb2JpbGV8fHRhYmxldCl7XHJcbiAgICAgIHJldHVybiA8U2lkZWJhck1vYmlsZUxvYWRlci8+XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIDxTaWRlYmFyTG9hZGVyIC8+O1xyXG4gIH1cclxuXHJcbiAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIDxTaWRlYmFyTG9hZGVyIC8+O1xyXG4gICAgfVxyXG4gIGNvbnN0IG9uQ2F0ZWdvcnlDbGljayA9IChzbHVnOiBzdHJpbmcscGFyZW50OnN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgeyB0eXBlLCAuLi5yZXN0IH0gPSBxdWVyeTtcclxuICAgICAgaWYgKHBhcmVudCl7XHJcbiAgICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge2NhdGVnb3J5OnBhcmVudCxzdWJDYXRlZ29yeTpzbHVnIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgLyR7dHlwZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7Y2F0ZWdvcnk6cGFyZW50LHN1YkNhdGVnb3J5OnNsdWcgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICBwYXRobmFtZSxcclxuICAgICAgICAgIHF1ZXJ5OiB7Y2F0ZWdvcnk6cGFyZW50LHN1YkNhdGVnb3J5OnNsdWcgfSxcclxuICAgICAgfSk7XHJcbiAgICB9fVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgICAgICBpZiAocGFyZW50KXtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgIGNhdGVnb3J5OiBzbHVnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgLyR7dHlwZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7ICBjYXRlZ29yeTogc2x1ZyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7ICBjYXRlZ29yeTogc2x1ZyB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgaWYgKG1vYmlsZSB8fCB0YWJsZXQpIHtcclxuICAgICAgcmV0dXJuIDxTaWRlYmFyTW9iaWxlTG9hZGVyIC8+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxTaWRlYmFyTG9hZGVyLz5cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgICAgPENhdGVnb3J5V3JhcHBlcj5cclxuICAgICAgICA8UG9wb3ZlcldyYXBwZXI+XHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgIGhhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJIYW5kbGVyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICBTZWxlY3QgeW91ciBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyb3dEcm9wRG93biAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3ZlckhhbmRsZXI+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhdGVnb3J5LXBvcG92ZXJcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPFRyZWVNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DYXRlZ29yeUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtzZWxlY3RlZFF1ZXJpZXN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvUG9wb3ZlcldyYXBwZXI+XHJcblxyXG4gICAgICAgIDxTaWRlYmFyV3JhcHBlcj5cclxuICAgICAgICAgIDxTdGlja3kgZW5hYmxlZD17dHJ1ZX0gdG9wPXsxMTB9IGNsYXNzTmFtZT17XCJsZWZ0U2lkZUJhclwifT5cclxuICAgICAgICAgICAgICA8U2Nyb2xsYmFyIGNsYXNzTmFtZT0nc2lkZWJhci1zY3JvbGxiYXInPlxyXG4gICAgICAgICAgICAgIDxUcmVlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgPFRyZWVNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DYXRlZ29yeUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtzZWxlY3RlZFF1ZXJpZXN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9UcmVlV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9TY3JvbGxiYXI+XHJcbiAgICAgICAgICA8L1N0aWNreT5cclxuICAgICAgICA8L1NpZGViYXJXcmFwcGVyPlxyXG4gICAgICA8L0NhdGVnb3J5V3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckNhdGVnb3J5O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xyXG5leHBvcnQgY29uc3QgTG9nb0JveCA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBjb2xvcjogJ3RleHQuYm9sZCcsXHJcbiAgICBmb250U2l6ZTogMjYsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIG1yOiBbMCwgMjAsIDQwXSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nb0ltYWdlID0gc3R5bGVkLmltZ2BcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI4cHgpe1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjhweCl7XHJcbiAgICBtYXgtd2lkdGg6IDExMHB4O1xyXG4gIH1cclxuYFxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2dvQm94LCBMb2dvSW1hZ2UgfSBmcm9tICcuL2xvZ28uc3R5bGUnO1xyXG5pbnRlcmZhY2UgTG9nb1Byb3BzIHtcclxuICBpbWFnZVVybDogc3RyaW5nO1xyXG4gIGFsdDogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBMb2dvOiBSZWFjdC5GQzxMb2dvUHJvcHM+ID0gKHsgaW1hZ2VVcmwsIGFsdCwgb25DbGljayB9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9nb0JveCBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgPExpbmsgaHJlZj17Jy8nfSA+XHJcbiAgICAgIDxMb2dvSW1hZ2Ugc3JjPXtpbWFnZVVybH0gYWx0PXthbHR9IC8+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvTG9nb0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG50eXBlIE5hdkxpbmtQcm9wcyA9IHtcclxuICByb3V0ZXI6IGFueTtcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBpY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBpY29uQ2xhc3M/OiBzdHJpbmc7XHJcbiAgZHluYW1pYz86IGJvb2xlYW47XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbn07XHJcbmNvbnN0IEljb24gPSBzdHlsZWQuc3BhbmBcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IE5hdkxpbms6IFJlYWN0LlNGQzxOYXZMaW5rUHJvcHM+ID0gKHtcclxuICBocmVmLFxyXG4gIGxhYmVsLFxyXG4gIHJvdXRlcixcclxuICBpY29uLFxyXG4gIGNsYXNzTmFtZSxcclxuICBvbkNsaWNrLFxyXG4gIGljb25DbGFzcyxcclxuICBkeW5hbWljLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaXNDdXJyZW50UGF0aCA9IHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZiB8fCByb3V0ZXIuYXNQYXRoID09PSBocmVmO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9PlxyXG4gICAgICB7ZHluYW1pYyA/IChcclxuICAgICAgICA8TGluayBocmVmPXsnL1t0eXBlXSd9IGFzPXtocmVmfT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aXNDdXJyZW50UGF0aCA/ICcgY3VycmVudC1wYWdlJyA6ICcnfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpY29uID8gPEljb24gY2xhc3NOYW1lPXtpY29uQ2xhc3N9PntpY29ufTwvSWNvbj4gOiAnJ31cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5cclxuICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2lzQ3VycmVudFBhdGggPyAnIGN1cnJlbnQtcGFnZScgOiAnJ31cclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aWNvbiA/IDxJY29uIGNsYXNzTmFtZT17aWNvbkNsYXNzfT57aWNvbn08L0ljb24+IDogJyd9XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKE5hdkxpbmspO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHt0aGVtZUdldH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmNvbnN0IFBvcG92ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAucG9wb3Zlci1oYW5kbGVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5wb3BvdmVyLWNvbnRlbnQge1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiBjYWxjKDEwMCUgKyAxNXB4KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDIwcHggcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjE0KTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwIDhweCA5cHggOHB4O1xyXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9IHRyYW5zcGFyZW50O1xyXG4gICAgICB0b3A6IC04cHg7XHJcbiAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IC00cHggLTRweCA4cHggLTNweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMTQpO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIElmIGRpcmVjdGlvbiBwcm9wIHNldCB0byByaWdodCAqL1xyXG5cclxuICAmLnJpZ2h0IHtcclxuICAgIC5wb3BvdmVyLWNvbnRlbnQge1xyXG4gICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICByaWdodDogMHB4O1xyXG5cclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJXcmFwcGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlT25DbGlja091dHNpZGUgZnJvbSAnLi91c2VPbkNsaWNrT3V0c2lkZSc7XHJcbmltcG9ydCBQb3BvdmVyV3JhcHBlciBmcm9tICcuL3BvcG92ZXIuc3R5bGUnO1xyXG5cclxudHlwZSBQb3BvdmVyUHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGhhbmRsZXI6IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgZGlyZWN0aW9uPzogJ2xlZnQnIHwgJ3JpZ2h0JztcclxuICBoYW5kbGVUb2dnbGU/OiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgUG9wb3ZlcjogUmVhY3QuRkM8UG9wb3ZlclByb3BzPiA9ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgLy8gUG9wb3ZlciBTdGF0ZVxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBSZWZcclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gQWRkIGFsbCBjbGFzc3MgdG8gYW4gYXJyYXlcclxuICBjb25zdCBhZGRBbGxDbGFzc2VzOiBzdHJpbmdbXSA9IFsncG9wb3Zlci13cmFwcGVyJ107XHJcblxyXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nXHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgZGlyZWN0aW9uIGNsYXNzIG9uIHBvcG92ZXIgY29udGVudFxyXG4gIGlmIChkaXJlY3Rpb24pIHtcclxuICAgIGFkZEFsbENsYXNzZXMucHVzaChkaXJlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gVG9nZ2xlIFBvcG92ZXIgY29udGVudFxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IChlOmFueSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gIXN0YXRlKTtcclxuICB9O1xyXG5cclxuICAvLyBIYW5kbGUgZG9jdW1lbnQgY2xpY2tcclxuICBjb25zdCBoYW5kbGVEb2N1bWVudENsaWNrID0gKGU6IHsgc3RvcFByb3BhZ2F0aW9uOiAoKSA9PiB2b2lkOyB9KSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgIGhhbmRsZVRvZ2dsZShlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBIYW5kbGUgd2luZG93IGV2ZW50IGxpc3RlbmVyXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURvY3VtZW50Q2xpY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRG9jdW1lbnRDbGljayk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICAvLyBDbG9zZSBwb3BvdmVyIG9uIGNsaWNrIG91dHNpZGVcclxuICB1c2VPbkNsaWNrT3V0c2lkZShyZWYsICgpID0+IHNldFN0YXRlKChzdGF0ZSkgPT4gZmFsc2UpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG5cclxuICAgICAgPFBvcG92ZXJXcmFwcGVyIGNsYXNzTmFtZT17YWRkQWxsQ2xhc3Nlcy5qb2luKCcgJyl9IHJlZj17cmVmfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcG92ZXItaGFuZGxlclwiIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XHJcbiAgICAgICAgICB7aGFuZGxlcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c3RhdGUgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcG92ZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIHtjb250ZW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci13cmFwXCIgb25DbGljaz17aGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Qb3BvdmVyV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU9uQ2xpY2tPdXRzaWRlKHJlZiwgaGFuZGxlcikge1xyXG4gIHVzZUVmZmVjdChcclxuICAgICgpID0+IHtcclxuICAgICAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGNsaWNraW5nIHJlZidzIGVsZW1lbnQgb3IgZGVzY2VuZGVudCBlbGVtZW50c1xyXG4gICAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFuZGxlcihldmVudCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIC8vIEFkZCByZWYgYW5kIGhhbmRsZXIgdG8gZWZmZWN0IGRlcGVuZGVuY2llc1xyXG4gICAgLy8gSXQncyB3b3J0aCBub3RpbmcgdGhhdCBiZWNhdXNlIHBhc3NlZCBpbiBoYW5kbGVyIGlzIGEgbmV3IC4uLlxyXG4gICAgLy8gLi4uIGZ1bmN0aW9uIG9uIGV2ZXJ5IHJlbmRlciB0aGF0IHdpbGwgY2F1c2UgdGhpcyBlZmZlY3QgLi4uXHJcbiAgICAvLyAuLi4gY2FsbGJhY2svY2xlYW51cCB0byBydW4gZXZlcnkgcmVuZGVyLiBJdCdzIG5vdCBhIGJpZyBkZWFsIC4uLlxyXG4gICAgLy8gLi4uIGJ1dCB0byBvcHRpbWl6ZSB5b3UgY2FuIHdyYXAgaGFuZGxlciBpbiB1c2VDYWxsYmFjayBiZWZvcmUgLi4uXHJcbiAgICAvLyAuLi4gcGFzc2luZyBpdCBpbnRvIHRoaXMgaG9vay5cclxuICAgIFtyZWYsIGhhbmRsZXJdXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgU3RvcmVOYXZXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGhlaWdodDogNTVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yZU5hdkxpbmtzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDogODBweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAuc3RvcmUtbmF2LWxpbmsge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTVweCcpfSAtIDFweCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4QycpfTtcclxuICAgICAgcGFkZGluZzogNXB4IDlweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICBzdmcge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmN1cnJlbnQtcGFnZSB7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4xMDAnLCAnI2Y5ZjlmOScpfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlTmF2V3JhcHBlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0b3JlTmF2V3JhcHBlciwgeyBTdG9yZU5hdkxpbmtzIH0gZnJvbSAnLi9zdG9yZS1uYXYuc3R5bGUnO1xyXG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSBcIkAvaG9va3MvdXNlRmV0Y2hcIjtcclxuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgTmF2TGluayBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dC9uYXYtbGluay9uYXYtbGlua1wiO1xyXG5pbXBvcnQge0NhdGVnb3J5TW9iaWxlfSBmcm9tIFwiQC9jb21wb25lbnRzL090aGVycy9wbGFjZWhvbGRlci9wbGFjZWhvbGRlclwiO1xyXG5cclxudHlwZSBTdG9yZU5hdlByb3BzID0ge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBpdGVtcz86IGFueVtdO1xyXG59O1xyXG5cclxuY29uc3QgU3RvcmVOYXY6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFN0b3JlTmF2UHJvcHM+ID0gKHtcclxuICBjbGFzc05hbWV9KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgaXNMb2FkaW5nXT11c2VGZXRjaChgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9jYXRlZ29yeS9gKVxyXG4gICAgaWYoaXNMb2FkaW5nKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxDYXRlZ29yeU1vYmlsZS8+XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgaWYoIWlzTG9hZGluZyl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFN0b3JlTmF2V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8U3RvcmVOYXZMaW5rcz5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YT8uZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdG9yZS1uYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TdG9yZU5hdkxpbmtzPlxyXG4gICAgICAgICAgICA8L1N0b3JlTmF2V3JhcHBlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVOYXY7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XHJcbmltcG9ydCB7IGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXI8YW55PihcclxuICAgIChwcm9wcykgPT5cclxuICAgICAgICBjc3Moe1xyXG4gICAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGVwdGggPT09ICdwYXJlbnQnID8gWydiYXNlJ10gOiBbJ3NtJ10sXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdtZWRpdW0nLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IHByb3BzLmRlcHRoID09PSAncGFyZW50JyA/IDEyIDogMCxcclxuICAgICAgICAgICAgY29sb3I6XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5kZXB0aCA9PT0gJ3BhcmVudCdcclxuICAgICAgICAgICAgICAgICAgICA/IHByb3BzLm9wZW5cclxuICAgICAgICAgICAgICAgICAgICA/ICdwcmltYXJ5LnJlZ3VsYXInXHJcbiAgICAgICAgICAgICAgICAgICAgOiAndGV4dC5ib2xkJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogcHJvcHMub3BlblxyXG4gICAgICAgICAgICAgICAgICAgID8gJ3ByaW1hcnkucmVndWxhcidcclxuICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LnJlZ3VsYXInLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJzAuMTVzIGVhc2UtaW4tb3V0JyxcclxuICAgICAgICAgICAgcGFkZGluZzogcHJvcHMuZGVwdGggPT09ICdwYXJlbnQnID8gJzVweCAwJyA6ICc1cHggMTBweCcsXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHByb3BzLmRlcHRoID09PSAnY2hpbGQnID8gJy0xMHB4JyA6IG51bGwsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogcHJvcHMuZGVwdGggPT09ICdjaGlsZCcgPyAnYmFzZScgOiBudWxsLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5kZXB0aCA9PT0gJ2NoaWxkJyA/IHByb3BzLm9wZW4gJiYgJ2dyYXkuMjAwJyA6IG51bGwsXHJcblxyXG4gICAgICAgICAgICAnLnRvZ2dsZUJ1dHRvbic6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5vcGVuID8gJ3ByaW1hcnkucmVndWxhcicgOiAndGV4dC5ib2xkJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDVweCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4zcycsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHByb3BzLm9wZW4gPyAncm90YXRlKDkwZGVnKScgOiAnJyxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG5cclxuICAgICAgICAgICAgICAgICcudG9nZ2xlQnV0dG9uJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZC5kaXY8YW55PihcclxuICAgIChwcm9wcykgPT5cclxuICAgICAgICBjc3Moe1xyXG4gICAgICAgICAgICB3aWR0aDogcHJvcHMuZGVwdGggPT09ICdjaGlsZCcgPyAxMCA6IDMwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IHByb3BzLmRlcHRoID09PSAnY2hpbGQnID8gJzhweCcgOiAxNSxcclxuXHJcbiAgICAgICAgICAgIHN2Zzoge1xyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogMzAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHByb3BzLmRlcHRoID09PSAnY2hpbGQnID8gJzJweCcgOiAnYXV0bycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGltZzoge1xyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogMzAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHByb3BzLmRlcHRoID09PSAnY2hpbGQnID8gJzJweCcgOiAnYXV0bycsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0pLFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuc3Bhbjx7ZGVwdGg6YW55fT5gXHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGUgO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1zaXplOiAke3Byb3BzPT5wcm9wcy5kZXB0aD09PSdjaGlsZCc/JzE2cHgnOlwiMThweFwifTtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkKGFuaW1hdGVkLmRpdikoe1xyXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSwgb3BhY2l0eSwgaGVpZ2h0JyxcclxuICAgIGJvcmRlckxlZnQ6IDAsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZyYW1lID0gc3R5bGVkLmRpdjxhbnk+KFxyXG4gICAgKHByb3BzKSA9PlxyXG4gICAgICAgIGNzcyh7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogcHJvcHMuZGVwdGggPT09ICdwYXJlbnQnID8gMTUgOiAxMCxcclxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHByb3BzLmRlcHRoID09PSAnY2hpbGQnID8gMzIgOiAwLFxyXG4gICAgICAgIH0pLFxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG5cclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgfVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUHJldmlvdXMsIHVzZU1lYXN1cmV9IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9ob29rcyc7XHJcbmltcG9ydCB7dXNlU3ByaW5nLCBhbmltYXRlZH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcclxuaW1wb3J0IHtGcmFtZSwgVGl0bGUsIENvbnRlbnQsIEhlYWRlciwgSWNvbldyYXBwZXJ9IGZyb20gJy4vdHJlZS1tZW51LnN0eWxlJztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ0AvY29tcG9uZW50cy9PdGhlcnMvYnV0dG9uL2J1dHRvbic7XHJcbmltcG9ydCB7QXJyb3dOZXh0fSBmcm9tICdAL2Fzc2V0cy9pY29ucy9BcnJvd05leHQnO1xyXG5cclxuaW1wb3J0IHtDYXRlZ29yeUljb259IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0L2hlYWRlci9tZW51L2xlZnQtbWVudS9MZWZ0TWVudVwiO1xyXG5cclxuY29uc3QgVHJlZSA9IFJlYWN0Lm1lbW8oXHJcbiAgICAoe1xyXG4gICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICAgbmFtZSxcclxuICAgICAgICAgaWNvbixcclxuICAgICAgICAgLy8gaXNPcGVuLFxyXG4gICAgICAgICBvbkNsaWNrLFxyXG4gICAgICAgICBkcm9wZG93bixcclxuICAgICAgICAgZGVwdGgsXHJcbiAgICAgICAgIGRlZmF1bHRPcGVuID0gZmFsc2UsXHJcbiAgICAgfTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShkZWZhdWx0T3Blbik7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0T3BlbihkZWZhdWx0T3Blbik7XHJcbiAgICAgICAgfSwgW2RlZmF1bHRPcGVuXSk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSB1c2VQcmV2aW91cyhpc09wZW4pO1xyXG4gICAgICAgIGNvbnN0IFtiaW5kLCB7aGVpZ2h0OiB2aWV3SGVpZ2h0fV0gPSB1c2VNZWFzdXJlKCk7XHJcbiAgICAgICAgY29uc3Qge2hlaWdodCwgb3BhY2l0eSwgdHJhbnNmb3JtfSA9IHVzZVNwcmluZzxhbnk+KHtcclxuICAgICAgICAgICAgZnJvbToge2hlaWdodDogMCwgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMjBweCwwLDApJ30sXHJcbiAgICAgICAgICAgIHRvOiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGlzT3BlbiA/IHZpZXdIZWlnaHQgOiAwLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaXNPcGVuID8gMSA6IDAsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke2lzT3BlbiA/IDAgOiAyMH1weCwwLDApYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zdCBJY29uID0gaWNvbiA/IEljb25zW2ljb25dIDogZGVwdGggPT09ICdjaGlsZCcgPyBJY29uc1snTWludXMnXSA6IG51bGw7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFtZSBkZXB0aD17ZGVwdGh9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBvcGVuPXtpc09wZW59IGRlcHRoPXtkZXB0aH0gY2xhc3NOYW1lPXtkZXB0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25XcmFwcGVyIGRlcHRoPXtkZXB0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUljb24gbGluaz17aWNvbn0gaGVpZ2h0PXtcIjI1cHhcIn0gd2lkdGg9e1wiMjVweFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIG9uQ2xpY2s9e29uQ2xpY2t9IGRlcHRoPXtkZXB0aH0+e25hbWV9PC9UaXRsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2Ryb3Bkb3duID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbighaXNPcGVuKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RvZ2dsZUJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd05leHQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaXNPcGVuICYmIHByZXZpb3VzID09PSBpc09wZW4gPyAnYXV0bycgOiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXt7dHJhbnNmb3JtfX0gey4uLmJpbmR9IGNoaWxkcmVuPXtjaGlsZHJlbn0vPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICA8L0ZyYW1lPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbik7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lPzogYW55O1xyXG4gICAgZGF0YTogYW55O1xyXG4gICAgb25DbGljazogKHNsdWc6IHN0cmluZyxwYXJlbnQ/OnN0cmluZykgPT4gdm9pZDtcclxuICAgIGFjdGl2ZT86IHtcclxuICAgICAgICBjYXRlZ29yeTpzdHJpbmdbXXxzdHJpbmcsXHJcbiAgICAgICAgc3ViQ2F0ZWdvcnk6c3RyaW5nW118c3RyaW5nXHJcbiAgICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgVHJlZU1lbnU6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IChjaGlsZHJlbjogYW55LGNhdGVnb3J5PzpzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW4ubWFwKChzdWJPcHRpb246IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1Yk9wdGlvbi5zdWJDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8VHJlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Yk9wdGlvbi5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3N1Yk9wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtzdWJPcHRpb24/LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aD0nY2hpbGQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soc3ViT3B0aW9uLmlkLGNhdGVnb3J5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wZW49e2FjdGl2ZS5zdWJDYXRlZ29yeSA9PT0gc3ViT3B0aW9uLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VHJlZVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17c3ViT3B0aW9uLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtzdWJPcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtzdWJPcHRpb24uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249eyFzdWJPcHRpb24uc3ViQ2F0ZWdvcnkubGVuZ3RoID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoPSdwYXJlbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhzdWJPcHRpb24uaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRPcGVuPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlLmNhdGVnb3J5ID09PSBzdWJPcHRpb24uaWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2hhbmRsZXIoc3ViT3B0aW9uLnN1YkNhdGVnb3J5LHN1Yk9wdGlvbi5pZCl9XHJcbiAgICAgICAgICAgICAgICA8L1RyZWU+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIDw+e2hhbmRsZXIoZGF0YT8uZGF0YSl9PC8+O1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uL2Nhcm91c2VsL2Nhcm91c2VsXCI7XHJcbmltcG9ydCB7c2l0ZU9mZmVyc30gZnJvbSBcIkAvc2l0ZU9mZmVyc1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB1c2VBeGlvcyBmcm9tIFwiYXhpb3MtaG9va3NcIjtcclxuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xyXG5pbXBvcnQge0ZlYXR1cmVkTG9hZGluZ30gZnJvbSBcIkAvY29tcG9uZW50cy9PdGhlcnMvcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXJcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0Q2FyZCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vUHJvZHVjdC9jYXJkL1Byb2R1Y3RJdGVtXCIpLCB7XHJcbiAgICBzc3I6IGZhbHNlLFxyXG59KTtcclxudHlwZSBQcm9wcyA9IHtcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBkZXZpY2VUeXBlOiB7XHJcbiAgICAgICAgbW9iaWxlOiBib29sZWFuO1xyXG4gICAgICAgIHRhYmxldDogYm9vbGVhbjtcclxuICAgICAgICBkZXNrdG9wOiBib29sZWFuO1xyXG4gICAgfTtcclxuICAgIHByb3BzPzogYW55O1xyXG59O1xyXG5jb25zdCBGZWF0dXJlZDogUmVhY3QuRkM8UHJvcHM+ID0gKHtkZXZpY2VUeXBlLCB0aXRsZX0pID0+IHtcclxuICAgIGNvbnN0IHtjdXJyZW5jeTp7c3ltYm9sfX0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5zaG9wUmVkdWNlcik7XHJcblxyXG4gICAgY29uc3QgW3tkYXRhLCBsb2FkaW5nLCBlcnJvcn1dID0gdXNlQXhpb3MoXHJcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvcHJvZHVjdHMvdG9wYFxyXG4gICAgKVxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPGgzIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMzBweFwifX0+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxGZWF0dXJlZExvYWRpbmcgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX0vPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMyBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjMwcHhcIn19Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX0gZGF0YT17c2l0ZU9mZmVyc30gbW9iaWxlPXsxLjV9IHRhYmxldD17M30gZGVza3RvcD17NC41fSB0dj17NS41fSBsYXB0b3A9ezR9IG1pbmlUYWJsZXQ9ezJ9ID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGEubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCB0aXRsZT17cHJvZHVjdC50aXRsZX0gaW1hZ2U9e3Byb2R1Y3QudGh1bWJJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfSBrZXk9e3Byb2R1Y3QuX2lkfSBwcm9kdWN0PXtwcm9kdWN0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgY29tcG9zZSwgc3BhY2UsIGNvbG9yLCBsYXlvdXQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcclxuXHJcbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2PGFueT4oXHJcbiAge1xyXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICBtaW5XaWR0aDogMCxcclxuICAgIG1hcmdpbjogMCxcclxuICB9LFxyXG4gIGNvbXBvc2Uoc3BhY2UsIGNvbG9yLCBsYXlvdXQpXHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcclxuaW1wb3J0IHsgY29tcG9zZSwgdmFyaWFudCwgYm9yZGVyLCBzcGFjZSwgbGF5b3V0IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbihcclxuICAocHJvcHMpID0+XHJcbiAgICBjc3Moe1xyXG4gICAgICBweDogJzE1cHgnLFxyXG4gICAgICBweTogMCxcclxuICAgICAgZm9udFNpemU6IFsnYmFzZSddLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIGN1cnNvcjogcHJvcHMuZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInLFxyXG4gICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyAndGV4dC5saWdodCcgOiAnd2hpdGUnLFxyXG4gICAgICBiZzogcHJvcHMuZGlzYWJsZWQgPyAnZ3JheS41MDAnIDogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnYmFzZScsXHJcblxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyAndGV4dC5saWdodCcgOiAnd2hpdGUnLFxyXG4gICAgICAgIGJnOiBwcm9wcy5kaXNhYmxlZCA/ICdncmF5LjUwMCcgOiAncHJpbWFyeS5ob3ZlcicsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICB7XHJcbiAgICBhcHBlYXJhbmNlOiAnbm9uZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnMzhweCcsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxyXG4gICAgYm9yZGVyOiAwLFxyXG5cclxuICAgICcmOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdmFyaWFudCh7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICBvdXRsaW5lZDoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICBiZzogJ3doaXRlJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAnZ3JheS41MDAnLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGJnOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIGJnOiAncHJpbWFyeS5ob3ZlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdncmF5LjUwMCcsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgIGJnOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB0ZXh0OiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnkuaG92ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIHdpZHRoOiAyNixcclxuICAgICAgICBoZWlnaHQ6IDI2LFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAndGV4dC5yZWd1bGFyJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEzLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICcmLnNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgYmc6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJjpob3Zlcjpub3QoLnNlbGVjdGVkKSc6IHtcclxuICAgICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIHZhcmlhbnQoe1xyXG4gICAgcHJvcDogJ3NpemUnLFxyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgYmlnOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnNDhweCcsXHJcbiAgICAgICAgcHg6IDMwLFxyXG4gICAgICB9LFxyXG4gICAgICBzbWFsbDoge1xyXG4gICAgICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSksXHJcbiAgY29tcG9zZShib3JkZXIsIHNwYWNlLCBsYXlvdXQpXHJcbik7XHJcbmNvbnN0IHJvdGF0ZSA9IGtleWZyYW1lc2BcclxuICBmcm9tIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XHJcbiAgdG8ge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxyXG5gO1xyXG5cclxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmZmZmY7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkXHJcbiAgICAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6IHRoZW1lR2V0KCdwcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiAke3JvdGF0ZX07XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjJzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuYDtcclxuXHJcbi8vIGNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2KChwcm9wcykgPT5cclxuLy8gICBjc3Moe1xyXG4vLyAgICAgd2lkdGg6IDE4LFxyXG4vLyAgICAgaGVpZ2h0OiAxOCxcclxuLy8gICAgIG1hcmdpbkxlZnQ6IDEwLFxyXG4vLyAgICAgYm9yZGVyOiAnM3B4IHNvbGlkIHdoaXRlJyxcclxuLy8gICAgIGJvcmRlclRvcDogYDNweCBzb2xpZCAke3Byb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiAncHJpbWFyeS5yZWd1bGFyJ31gLFxyXG4vLyAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuLy8gICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ3RyYW5zZm9ybScsXHJcbi8vICAgICBhbmltYXRpb25OYW1lOiBgJHtyb3RhdGV9YCxcclxuLy8gICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4ycycsXHJcbi8vICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJyxcclxuLy8gICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcclxuLy8gICB9KVxyXG4vLyApO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGxvYWRpbmc/OiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB0eXBlOiAnc3VibWl0JyB8ICdidXR0b24nO1xyXG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XHJcbn07XHJcbmV4cG9ydCB0eXBlIFJlZiA9IEhUTUxCdXR0b25FbGVtZW50O1xyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFByb3BzPihcclxuICAoeyBjaGlsZHJlbiwgZGlzYWJsZWQsIGxvYWRpbmcgPSBmYWxzZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgICA8U3R5bGVkQnV0dG9uIHJlZj17cmVmfSB7Li4ucHJvcHN9IGRpc2FibGVkPXtkaXNhYmxlZH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAge2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcbiAgICA8L1N0eWxlZEJ1dHRvbj5cclxuICApXHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmltcG9ydCB7IEFycm93TmV4dCB9IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9BcnJvd05leHQnO1xyXG5pbXBvcnQgeyBBcnJvd1ByZXYgfSBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvQXJyb3dQcmV2JztcclxuaW1wb3J0ICdyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcyc7XHJcbmNvbnN0IEJ1dHRvblByZXYgPSBzdHlsZWQoJ2J1dHRvbicpYFxyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogJHt0aGVtZUdldCgnc2hhZG93cy5iYXNlJywgJzAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNDBweDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICB6LWluZGV4OiA5OTtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbk5leHQgPSBzdHlsZWQoJ2J1dHRvbicpYFxyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAke3RoZW1lR2V0KCdzaGFkb3dzLmJhc2UnLCAnMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICB6LWluZGV4OiA5OTtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbkdyb3VwV3JhcHBlciA9IHN0eWxlZCgnZGl2JylgYDtcclxuXHJcbmNvbnN0IFByZXZCdXR0b24gPSAoeyBvbkNsaWNrLCBjaGlsZHJlbiB9OiBhbnkpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblByZXZcclxuICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgb25DbGljaygpO1xyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9J3ByZXZCdXR0b24nXHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uUHJldj5cclxuICApO1xyXG59O1xyXG5jb25zdCBOZXh0QnV0dG9uID0gKHsgb25DbGljaywgY2hpbGRyZW4gfTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25OZXh0XHJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG9uQ2xpY2soKTtcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPSduZXh0QnV0dG9uJ1xyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvbk5leHQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEJ1dHRvbkdyb3VwID0gKHsgbmV4dCwgcHJldmlvdXMgfTogYW55KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uR3JvdXBXcmFwcGVyPlxyXG5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFByZXZCdXR0b24gb25DbGljaz17KCkgPT4gcHJldmlvdXMoKX0+XHJcbiAgICAgICAgICAgIDxBcnJvd1ByZXYgLz5cclxuICAgICAgICAgIDwvUHJldkJ1dHRvbj5cclxuICAgICAgICAgIDxOZXh0QnV0dG9uIG9uQ2xpY2s9eygpID0+IG5leHQoKX0+XHJcbiAgICAgICAgICAgIDxBcnJvd05leHQgLz5cclxuICAgICAgICAgIDwvTmV4dEJ1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgIDwvQnV0dG9uR3JvdXBXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGRhdGE/OiBhbnlbXSB8IHVuZGVmaW5lZDtcclxuICBkZXZpY2VUeXBlOiB7XHJcbiAgICBtb2JpbGU6IGJvb2xlYW47XHJcbiAgICB0YWJsZXQ6IGJvb2xlYW47XHJcbiAgICBkZXNrdG9wOiBib29sZWFuO1xyXG4gIH07XHJcbiAgcHJvcHM/OiBhbnk7XHJcbiAgY29tcG9uZW50PzogYW55O1xyXG4gIGF1dG9QbGF5PzogYm9vbGVhbjtcclxuICBpbmZpbml0ZT86IGJvb2xlYW47XHJcbiAgaXNSdGw/OiBib29sZWFuO1xyXG4gIGN1c3RvbUxlZnRBcnJvdz86IFJlYWN0LlJlYWN0RWxlbWVudDtcclxuICBjdXN0b21SaWdodEFycm93PzogUmVhY3QuUmVhY3RFbGVtZW50O1xyXG4gIGl0ZW1DbGFzcz86IHN0cmluZztcclxuICBtb2JpbGU6bnVtYmVyO1xyXG4gIGRlc2t0b3A6bnVtYmVyO1xyXG4gIHRhYmxldDpudW1iZXI7XHJcbiAgY2hpbGRyZW4/OmFueTtcclxuICB0djpudW1iZXI7XHJcbiAgbGFwdG9wOm51bWJlcixcclxuICBtaW5pVGFibGV0Om51bWJlclxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUNhcm91c2VsKHtcclxuICBkYXRhLFxyXG4gIGRldmljZVR5cGUsXHJcbiAgY29tcG9uZW50LFxyXG4gIGF1dG9QbGF5ID0gZmFsc2UsXHJcbiAgaW5maW5pdGUgPSB0cnVlLFxyXG4gIGN1c3RvbUxlZnRBcnJvdyxcclxuICBjdXN0b21SaWdodEFycm93LFxyXG4gIGl0ZW1DbGFzcyxcclxuICBpc1J0bCxtb2JpbGUsZGVza3RvcCx0YWJsZXQsY2hpbGRyZW4sbGFwdG9wLHR2LG1pbmlUYWJsZXQsXHJcbiAgLi4ucHJvcHNcclxufTogUHJvcHMpIHtcclxuICBjb25zdCByZXNwb25zaXZlID0ge1xyXG4gICAgdHY6IHtcclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMDAwLCBtaW46IDIyMDAgfSxcclxuICAgICAgaXRlbXM6IHR2LFxyXG4gICAgfSxcclxuICAgIGRlc2t0b3A6IHtcclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDIyMDAsIG1pbjogMTcyMyB9LFxyXG4gICAgICBpdGVtczogZGVza3RvcCxcclxuICAgIH0sXHJcbiAgICBsYXB0b3A6IHtcclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDE3MjMsIG1pbjogMTI4MiB9LFxyXG4gICAgICBpdGVtczogbGFwdG9wLFxyXG4gICAgfSxcclxuICAgIHRhYmxldDoge1xyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogMTI4MiwgbWluOiA2MTcgfSxcclxuICAgICAgaXRlbXM6dGFibGV0LFxyXG4gICAgfSxcclxuICAgIG1pbmlUYWJsZXQ6e1xyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogNjE3LCBtaW46IDQzOSB9LFxyXG4gICAgICBpdGVtczptaW5pVGFibGV0LFxyXG4gICAgfSxcclxuICAgIG1vYmlsZToge1xyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogNDM5LCBtaW46IDAgfSxcclxuICAgICAgaXRlbXM6IG1vYmlsZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBkaXI9J2x0cic+XHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cclxuICAgICAgICBzaG93RG90cz17ZmFsc2V9XHJcbiAgICAgICAgc2xpZGVzVG9TbGlkZT17MX1cclxuICAgICAgICBpbmZpbml0ZT17aW5maW5pdGV9XHJcbiAgICAgICAgY29udGFpbmVyQ2xhc3M9J2NvbnRhaW5lci13aXRoLWRvdHMnXHJcbiAgICAgICAgaXRlbUNsYXNzPXtpdGVtQ2xhc3N9XHJcbiAgICAgICAgYXV0b1BsYXk9e2F1dG9QbGF5fVxyXG4gICAgICAgIGF1dG9QbGF5U3BlZWQ9ezMwMDB9XHJcbiAgICAgICAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlPXt0cnVlfVxyXG4gICAgICAgIGFkZGl0aW9uYWxUcmFuc2Zyb209ezB9XHJcbiAgICAgICAgY3VzdG9tQnV0dG9uR3JvdXA9ezxCdXR0b25Hcm91cCAvPn1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7ICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICBkYXRhLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNoaWxkcmVuKSByZXR1cm4gY2hpbGRyZW5cclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkgcmV0dXJuIGNvbXBvbmVudChpdGVtKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzAgMTVweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEltZyB9IGZyb20gJ3JlYWN0LWltYWdlJztcclxuaW1wb3J0IHBsYWNlaG9sZGVyIGZyb20gJy4vcHJvZHVjdC1wbGFjZWhvbGRlci5wbmcnO1xyXG5jb25zdCBQbGFjZWhvbGRlciA9ICgpID0+IDxpbWcgc3JjPXtwbGFjZWhvbGRlcn0gYWx0PVwicHJvZHVjdCBpbWcgbG9hZGVyXCIgLz47XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcclxuICB1cmwsXHJcbiAgYWx0ID0gJ3BsYWNlaG9sZGVyJyxcclxuICB1bmxvYWRlcixcclxuICBsb2FkZXIsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHN0eWxlLFxyXG59OiB7XHJcbiAgdXJsPzogc3RyaW5nIHwgW3N0cmluZ107XHJcbiAgYWx0Pzogc3RyaW5nO1xyXG4gIHVubG9hZGVyPzogc3RyaW5nO1xyXG4gIGxvYWRlcj86IHN0cmluZztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgc3R5bGU/OiBhbnk7XHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEltZ1xyXG4gICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxyXG4gICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgIHNyYz17dXJsfVxyXG4gICAgICBhbHQ9e2FsdH1cclxuICAgICAgbG9hZGVyPXs8UGxhY2Vob2xkZXIgLz59XHJcbiAgICAgIHVubG9hZGVyPXs8UGxhY2Vob2xkZXIgLz59XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVE0QUFBRHdDQVlBQUFEeFhvcDRBQUFIUEVsRVFWUjRYdTNkMjNMYTJCYUdVUkVPUHBUZi8wbU53WUNzdnRoRnRvTWRpeCtXeEJJWjQ2cXJzanB4dXRwZk5PWGxtVm5YZFYwREVQalZkd0RnbEhBQU1lRUFZc0lCeElRRGlBa0hFQk1PSUNZY1FFdzRnSmh3QURIaEFHTENBY1NFQTRnSkJ4QVREaUFtSEVCTU9JQ1ljQUF4NFFCaXdnSEVoQU9JQ1FjUUV3NGdKaHhBVERpQW1IQUFNZUVBWXNJQnhJUURpQWtIRUJNT0lDWWNRRXc0Z0pod0FESGhBR0xDQWNTRUE0Z0pCeEFURGlBbUhFQk1PSUNZY0FBeDRRQml3Z0hFaEFPSUNRY1FFdzRnSmh4QVREaUFtSEFBTWVFQVlzSUJ4SVFEaUFrSEVCTU9JQ1ljUUV3NGdKaHdBREhoQUdMQ0FjU0VBNGdKQnhBVERpQW1IRUJNT0lDWWNBQXg0UUJpd2dIRWhBT0lDUWNRRXc0Z0poeEFURGlBbUhBQU1lRUFZc0lCeElRRGlBa0hFQk1PSUNZY1FFdzRnSmh3QURIaEFHTENBY1FXZlFjbzUzQTQvUDduK1h6ZXpHYXpIODlEcllSalFGM1hOYnZkcnRudGRrM2J0bDkrZkQ2Zk40dkZvbmw4ZkJRUkptWFdkVjNYZDRqY2ZyOXYzdDdlbW5QKzg4NW1zK2JoNGFGNWZIenNPd3BWRUk0QmJEYWI1djM5dmUvWUY4dmxzbmwrZnZiMFFmVzhIQzNzMG1nMG41NVNvSGJDVWRCK3Y3ODRHa2Y3L2I3WmJyZDl4K0NtaEtPZ3pXYlRkK1FzNysvdlo3MGJnVnNSamtKMnUxM3o4ZkhSZCt3c1hkZDU2cUJxd2xISWZyL3ZPeElwL2ZOQlNjSlJTT2xQOUkrUEQrTUsxUktPaW4xM2FReHFJQndGZURMNDArZXI5ZHduNFNqQWhhMy9hOXUyV2EvWDdxUGNPZUVvWkloNHpPZnp2aU5WNmJydTl6WDc0L2ZvY0orRW81RGxjdGwzSkRMRjc1NWRyOWQvdkpkNWUzc3p0dHdwNFNpa2REaFdxMVhma2Fwc05wdHZJN0ZlcjR2ZGI2RWV3bEhJY3Jrc05sck1ack5KaFdPMzIvMzFxbjNYZGMxNnZmWUMrYzRJUjBGUFQwOTlSODd5OVBRMG1UR2xiZHZlcS9ibm5HRmFoS09neFdMUlBEOC85eDM3MFdxMW1zelRSdGQxemV2cjYxbFBFN3ZkempYNk95SWNoYTFXcTR2ajhmRHdjUEcvZXd2blJ1Tm91OTBXdjJITGJWamtNNURENGRCc05wdXpibi8rK3ZXcmVYcDZLdjZDZFVodmIyOFhmYmwxTnBzMUx5OHZ4ZDRIY1J2Q01iRGRidGNjRG9kbXY5OS8rZE41dVZ3MnkrVnlNcVBKMFc2M3UrcUMxM3crYjE1ZVhpYnpIb2V2aEdOa2JkdE8ray9idytIUXZMNis5aDNydFZnc21wZVhsNzVqVk1vN2pwRk5PUm9mSHgvTmVyM3VPM2FXNHlqSE5Ba0haeG5pUHNiNysvdEY3MG00UGVHb1dNbFAwbXVkKzZJM05kVFB5N0NFbzFLbDNpV1VzTjF1QjNzeVNPNkNVQS9ocU5EeHUwemJ0cjM1cGFreHRxNGY0OEYwQ0VlRnR0dnQ3MjhNMjI2M04zdVViOXYycWkrN0pzYjh0YmllY0ZUbWNEaDgrWWF4VzN4Q2ZkNnRNUlk3UEtaRE9DcHkvR1E5ZFl1UjVYUzN4bGpzOEpnRzRhakk1eEhsdXg4YjZ4UDViN3MxeG1LSFIvMkVveExmalNpbnhoaFpmdHF0TVpZaDdveFFsbkJVNEc4anlxbWhSNWFhOW1iVTlMSHdsWEJVNEtjUjVkUlFJMHVOOXluczhLaVhjTnpZT1NQS3FYT2VUbEsxUmVQSURvODZDY2NOblR1aW5DbzlzaHd2bTlXcTlvL3ZYeVFjTjVTTUtLZEtqU3hUdUR0eGl6c2wvRXc0YnVTU0VlWFVKVThybngwT2g2dC9qckVjLzRZNDZpQWNOM0RwaUhMcW1wR2w1RzZOc2RqaFVRL2h1SUZyUnBSVGw0d3NVNzRuWVlkSEhZUmpaQ1ZHbEZQcDA4dlVkMkJNL2VPL0I4SXhvbElqeXFsa1pCbHl0OFpZYXJ4ejhxOFJqaEdWSEZGT25UT3lqTEZiWXl4MmVOeVdjSXlrYmR2aUk4cXBuNTVtN25IZnhUMytucVpDT0VZeXh2L2dmeHRaN3ZrZXhCVHVvZHdqNFJqQk9XTkVLZC85V3JmYXJURVdPenpHSnh3RFMxNWNsdkw1NmViV3V6WEdZb2ZIdUlSallHT01LS2VPc2FwaHQ4WllwbnczWllyOEZaQUQybTYzb3o5dGZEYWJ6ZjY1VDZUVmF0VThQei8zSGVOS25qZ0djb3NSNWRTL0ZvM0dEby9SQ01kQWJqR2k4RDkyZUF4UE9BWXc1bGRSK0o0ZEhzTVNqc0pxR0ZHNDc3c3JOUkNPd293bzliRERZempDVVpBUnBUNTJlQXhET0FveG90VExEby95aEtNUUkwcmQ3UEFvU3pnS01LTFV6dzZQc29UalNrYVU2YkREb3h6aHVKSVJaVnJzOENoRE9LNWdSSmttT3p5dUp4d1hNcUpNbXgwZTF4R09DM25jblQ0N1BDNG5IQmN3b3R3SE96d3VKeHdoSThwOWFkdld6ZElMQ0VmSWlISi83UERJQ1VmQWlISy83UERJTFBvTzhLZkh4OGUrSTB5VUY2WG5zM01VaUJsVmdKaHdBREhoQUdMQ0FjU0VBNGdKQnhBVERpQW1IRUJNT0lDWWNBQXg0UUJpd2dIRWhBT0lDUWNRRXc0Z0poeEFURGlBbUhBQU1lRUFZc0lCeElRRGlBa0hFQk1PSUNZY1FFdzRnSmh3QURIaEFHTENBY1NFQTRnSkJ4QVREaUFtSEVCTU9JQ1ljQUF4NFFCaXdnSEVoQU9JQ1FjUUV3NGdKaHhBVERpQW1IQUFNZUVBWXNJQnhJUURpQWtIRUJNT0lDWWNRRXc0Z0pod0FESGhBR0xDQWNTRUE0Z0pCeEFURGlBbUhFQk1PSUNZY0FBeDRRQml3Z0hFaEFPSUNRY1FFdzRnSmh4QVREaUFtSEFBTWVFQVlzSUJ4SVFEaUFrSEVCTU9JQ1ljUUV3NGdKaHdBREhoQUdMQ0FjU0VBNGdKQnhBVERpQW1IRUJNT0lDWWNBQXg0UUJpd2dIRWhBT0kvUWUwZ3lvVHpFTVdaUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRlbnRMb2FkZXIgZnJvbSAncmVhY3QtY29udGVudC1sb2FkZXInO1xyXG50eXBlIFByb3BzID0ge1xyXG4gICAgZGV2aWNlVHlwZToge1xyXG4gICAgICAgIG1vYmlsZTogYm9vbGVhbjtcclxuICAgICAgICB0YWJsZXQ6IGJvb2xlYW47XHJcbiAgICAgICAgZGVza3RvcDogYm9vbGVhbjtcclxuICAgIH07XHJcbiAgICBwcm9wcz8gOiBhbnk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBTdWdnZXN0aW9uTG9hZGluZz0gKHByb3BzKSA9PiAoXHJcbiAgICA8Q29udGVudExvYWRlclxyXG4gICAgICAgIHNwZWVkPXsyfVxyXG4gICAgICAgIHdpZHRoPXs2MDB9XHJcbiAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgdmlld0JveD1cIjAgMCA2MDAgMjAwXCJcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjZjNmM2YzXCJcclxuICAgICAgICBmb3JlZ3JvdW5kQ29sb3I9XCIjZWNlYmViXCJcclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgICAgPHJlY3QgeD1cIjE1MVwiIHk9XCIxMVwiIHJ4PVwiNVwiIHJ5PVwiNVwiIHdpZHRoPVwiNDIxXCIgaGVpZ2h0PVwiNDFcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCI2NVwiIHk9XCIxMFwiIHJ4PVwiNVwiIHJ5PVwiNVwiIHdpZHRoPVwiNTVcIiBoZWlnaHQ9XCI0MVwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjE1M1wiIHk9XCI2OVwiIHJ4PVwiNVwiIHJ5PVwiNVwiIHdpZHRoPVwiNDIxXCIgaGVpZ2h0PVwiNDFcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCI2N1wiIHk9XCI2OFwiIHJ4PVwiNVwiIHJ5PVwiNVwiIHdpZHRoPVwiNTVcIiBoZWlnaHQ9XCI0MVwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjE1M1wiIHk9XCIxMzRcIiByeD1cIjVcIiByeT1cIjVcIiB3aWR0aD1cIjQyMVwiIGhlaWdodD1cIjQxXCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiNjdcIiB5PVwiMTMzXCIgcng9XCI1XCIgcnk9XCI1XCIgd2lkdGg9XCI1NVwiIGhlaWdodD1cIjQxXCIgLz5cclxuICAgIDwvQ29udGVudExvYWRlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGZWF0dXJlZExvYWRpbmc6UmVhY3QuRkM8UHJvcHM+ID0gKHtkZXZpY2VUeXBlfSkgPT4gKFxyXG4gICAgPENvbnRlbnRMb2FkZXIgdmlld0JveD1cIjAgMCAxMDAwIDMwMFwiID5cclxuXHJcbiAgICAgIDxyZWN0IHg9XCIzMFwiIHk9XCIyMFwiIHJ4PVwiOFwiIHJ5PVwiOFwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjMwXCIgeT1cIjI1MFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMThcIiAvPlxyXG4gICAgICA8cmVjdCB4PVwiMzBcIiB5PVwiMjc1XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCIyMFwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCIyNTBcIiB5PVwiMjBcIiByeD1cIjhcIiByeT1cIjhcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCIyNTBcIiB5PVwiMjUwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIxOFwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCIyNTBcIiB5PVwiMjc1XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCIyMFwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCI0NzBcIiB5PVwiMjBcIiByeD1cIjhcIiByeT1cIjhcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCI0NzBcIiB5PVwiMjUwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIxOFwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCI0NzBcIiB5PVwiMjc1XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCIyMFwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCI2OTBcIiB5PVwiMjBcIiByeD1cIjhcIiByeT1cIjhcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCI2OTBcIiB5PVwiMjUwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIxOFwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCI2OTBcIiB5PVwiMjc1XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCIyMFwiIC8+XHJcbiAgICA8L0NvbnRlbnRMb2FkZXI+XHJcbilcclxuXHJcbmNvbnN0IFBvc3RMb2FkZXIgPSAocHJvcHM6IEpTWC5JbnRyaW5zaWNBdHRyaWJ1dGVzKSA9PiAoXHJcbiAgPENvbnRlbnRMb2FkZXJcclxuICAgIGhlaWdodD17MzUwfVxyXG4gICAgd2lkdGg9ezI0NX1cclxuICAgIHNwZWVkPXsyfVxyXG4gICAgYmFja2dyb3VuZENvbG9yPVwiI2YzZjNmM1wiXHJcbiAgICBmb3JlZ3JvdW5kQ29sb3I9XCIjZWNlYmViXCJcclxuICAgIHsuLi5wcm9wc31cclxuICA+XHJcbiAgICA8cmVjdCB4PVwiMlwiIHk9XCIyXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNDBcIiBoZWlnaHQ9XCIxOTdcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjE1XCIgeT1cIjIyMFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMTQwXCIgaGVpZ2h0PVwiMjVcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjE1XCIgeT1cIjI1NFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNjVcIiBoZWlnaHQ9XCIxNVwiIC8+XHJcbiAgICA8cmVjdCB4PVwiMTVcIiB5PVwiMzAwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI2N1wiIGhlaWdodD1cIjIwXCIgLz5cclxuICAgIDxyZWN0IHg9XCIxNzBcIiB5PVwiMzAwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI2MFwiIGhlaWdodD1cIjIwXCIgLz5cclxuICA8L0NvbnRlbnRMb2FkZXI+XHJcbik7XHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9ICgpID0+IChcclxuICA8Q29udGVudExvYWRlclxyXG4gICAgaGVpZ2h0PXs0Nn1cclxuICAgIHdpZHRoPXs0MDB9XHJcbiAgICBzcGVlZD17Mn1cclxuICAgIGJhY2tncm91bmRDb2xvcj1cIiNmM2YzZjNcIlxyXG4gICAgZm9yZWdyb3VuZENvbG9yPVwiI2VjZWJlYlwiXHJcbiAgPlxyXG4gICAgPHJlY3QgeD1cIjU4XCIgeT1cIjEwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyODdcIiBoZWlnaHQ9XCIyNlwiIC8+XHJcbiAgICA8cmVjdCB4PVwiMzY0XCIgeT1cIjEwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgLz5cclxuICAgIDxyZWN0IHg9XCIxNlwiIHk9XCIxMFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCIyNlwiIC8+XHJcbiAgPC9Db250ZW50TG9hZGVyPlxyXG4pO1xyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlMb2FkZXIgPSAoKSA9PiAoXHJcbiAgICA8Q29udGVudExvYWRlclxyXG4gICAgICAgIGhlaWdodD17NDZ9XHJcbiAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICBzcGVlZD17Mn1cclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjZjNmM2YzXCJcclxuICAgICAgICBmb3JlZ3JvdW5kQ29sb3I9XCIjZWNlYmViXCJcclxuICAgID5cclxuICAgICAgICA8cmVjdCB4PVwiNThcIiB5PVwiMTBcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjU4XCIgaGVpZ2h0PVwiMjZcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCIzNjRcIiB5PVwiMTBcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjU4XCIgaGVpZ2h0PVwiMjZcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCIxNlwiIHk9XCIxMFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNThcIiBoZWlnaHQ9XCIyNlwiIC8+XHJcbiAgICA8L0NvbnRlbnRMb2FkZXI+XHJcbik7XHJcbmV4cG9ydCBjb25zdCBTaWRlYmFyTW9iaWxlTG9hZGVyID0gKHByb3BzOiBKU1guSW50cmluc2ljQXR0cmlidXRlcykgPT4gKFxyXG4gICAgPENvbnRlbnRMb2FkZXJcclxuICAgICAgICBzcGVlZD17NH1cclxuICAgICAgICB3aWR0aD17OTc0fVxyXG4gICAgICAgIGhlaWdodD17NTh9XHJcbiAgICAgICAgdmlld0JveD1cIjAgMCA5NzQgNThcIlxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNmM2YzZjNcIlxyXG4gICAgICAgIGZvcmVncm91bmRDb2xvcj1cIiNlY2ViZWJcIlxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgcng9XCIyNlwiIHJ5PVwiMjZcIiB3aWR0aD1cIjk3NFwiIGhlaWdodD1cIjU4XCIgLz5cclxuICAgIDwvQ29udGVudExvYWRlcj5cclxuKTtcclxuZXhwb3J0IGNvbnN0IFNpZGViYXJMb2FkZXIgPSAocHJvcHM6IEpTWC5JbnRyaW5zaWNBdHRyaWJ1dGVzKSA9PiAoXHJcbiAgPENvbnRlbnRMb2FkZXJcclxuICAgIGhlaWdodD17NDAwfVxyXG4gICAgd2lkdGg9XCJjYWxjKDEwMCUgLSAzMHB4KVwiXHJcbiAgICBzcGVlZD17Mn1cclxuICAgIGJhY2tncm91bmRDb2xvcj1cIiNmM2YzZjNcIlxyXG4gICAgZm9yZWdyb3VuZENvbG9yPVwiI2VjZWJlYlwiXHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgPlxyXG4gICAgPHJlY3QgeD1cIjM3NlwiIHk9XCIyMlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjI3XCIgeT1cIjUwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cclxuICAgIDxyZWN0IHg9XCI2OVwiIHk9XCI1MFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjYwXCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG5cclxuICAgIDxyZWN0IHg9XCIyN1wiIHk9XCI4OVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIC8+XHJcbiAgICA8cmVjdCB4PVwiNjlcIiB5PVwiODlcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI2MFwiIGhlaWdodD1cIjI0XCIgLz5cclxuXHJcbiAgICA8cmVjdCB4PVwiMjdcIiB5PVwiMTI4XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cclxuICAgIDxyZWN0IHg9XCI2OVwiIHk9XCIxMjhcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI2MFwiIGhlaWdodD1cIjI0XCIgLz5cclxuXHJcbiAgICA8cmVjdCB4PVwiMjdcIiB5PVwiMTY3XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cclxuICAgIDxyZWN0IHg9XCI2OVwiIHk9XCIxNjdcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI2MFwiIGhlaWdodD1cIjI0XCIgLz5cclxuXHJcbiAgICA8cmVjdCB4PVwiMjdcIiB5PVwiMjA2XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cclxuICAgIDxyZWN0IHg9XCI2OVwiIHk9XCIyMDZcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI2MFwiIGhlaWdodD1cIjI0XCIgLz5cclxuXHJcbiAgICA8cmVjdCB4PVwiMjdcIiB5PVwiMjQ1XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cclxuICAgIDxyZWN0IHg9XCI2OVwiIHk9XCIyNDVcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI2MFwiIGhlaWdodD1cIjI0XCIgLz5cclxuXHJcbiAgICA8cmVjdCB4PVwiMjdcIiB5PVwiMjg0XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cclxuICAgIDxyZWN0IHg9XCI2OVwiIHk9XCIyODRcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI2MFwiIGhlaWdodD1cIjI0XCIgLz5cclxuXHJcbiAgICA8cmVjdCB4PVwiMjdcIiB5PVwiMzIzXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cclxuICAgIDxyZWN0IHg9XCI2OVwiIHk9XCIzMjNcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI2MFwiIGhlaWdodD1cIjI0XCIgLz5cclxuICA8L0NvbnRlbnRMb2FkZXI+XHJcbik7XHJcbmV4cG9ydCBjb25zdCBJdGVtTG9hZGVyID0ocHJvcHM6IEpTWC5JbnRyaW5zaWNBdHRyaWJ1dGVzKSA9PiAoXHJcbiAgICA8Q29udGVudExvYWRlclxyXG4gICAgICAgIHdpZHRoPXtcIjEwMCVcIn1cclxuICAgICAgICBoZWlnaHQ9ezYwMH1cclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDcwMCAzMDBcIlxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNmNWY1ZjVcIlxyXG4gICAgICAgIGZvcmVncm91bmRDb2xvcj1cIiNkYmRiZGJcIlxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICBzcGVlZD17Mn1cclxuICAgID5cclxuICAgICAgICA8Y2lyY2xlIGN4PVwiNDcyXCIgY3k9XCIxNTlcIiByPVwiN1wiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjQ4N1wiIHk9XCIxNTRcIiByeD1cIjVcIiByeT1cIjVcIiB3aWR0aD1cIjIyMFwiIGhlaWdodD1cIjEwXCIgLz5cclxuICAgICAgICA8Y2lyY2xlIGN4PVwiNDcyXCIgY3k9XCIxOTBcIiByPVwiN1wiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjQ4N1wiIHk9XCIxODRcIiByeD1cIjVcIiByeT1cIjVcIiB3aWR0aD1cIjIyMFwiIGhlaWdodD1cIjEwXCIgLz5cclxuICAgICAgICA8Y2lyY2xlIGN4PVwiNDcyXCIgY3k9XCIyMTlcIiByPVwiN1wiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjQ4N1wiIHk9XCIyMTRcIiByeD1cIjVcIiByeT1cIjVcIiB3aWR0aD1cIjIyMFwiIGhlaWdodD1cIjEwXCIgLz5cclxuICAgICAgICA8Y2lyY2xlIGN4PVwiNDcyXCIgY3k9XCIyNDlcIiByPVwiN1wiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjQ4N1wiIHk9XCIyNDRcIiByeD1cIjVcIiByeT1cIjVcIiB3aWR0aD1cIjIyMFwiIGhlaWdodD1cIjEwXCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiNjRcIiB5PVwiMThcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjM0NlwiIGhlaWdodD1cIjMwMFwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjI5NFwiIHk9XCIzMzZcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDRcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCIyMThcIiB5PVwiMzM1XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQ0XCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiMTQyXCIgeT1cIjMzNFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0NFwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjcwXCIgeT1cIjMzM1wiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0NFwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjQ3MFwiIHk9XCIxOFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMjVcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCI0NzBcIiB5PVwiNThcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjZcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCI0NzBcIiB5PVwiNjhcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjZcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCI0NzBcIiB5PVwiNzhcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjZcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCI0NzBcIiB5PVwiOTlcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiMzBcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCI1NjBcIiB5PVwiOTlcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiMzBcIiAvPlxyXG4gICAgPC9Db250ZW50TG9hZGVyPlxyXG4pXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeU1vYmlsZSA9IChwcm9wcykgPT4gKFxyXG4gICAgPENvbnRlbnRMb2FkZXJcclxuICAgICAgICBzcGVlZD17Mn1cclxuICAgICAgICB3aWR0aD17OTc0fVxyXG4gICAgICAgIGhlaWdodD17NTh9XHJcbiAgICAgICAgdmlld0JveD1cIjAgMCA5NzQgNThcIlxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNmM2YzZjNcIlxyXG4gICAgICAgIGZvcmVncm91bmRDb2xvcj1cIiNlY2ViZWJcIlxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgICA8cmVjdCB4PVwiMzg4XCIgeT1cIjE5OFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCI2XCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiMTY2XCIgeT1cIjI2N1wiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjFcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCIxNlwiIHk9XCIxMlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiOTBcIiBoZWlnaHQ9XCIzNlwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjEyNVwiIHk9XCIxM1wiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiOTBcIiBoZWlnaHQ9XCIzNlwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjQ4NVwiIHk9XCIxMlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiOTBcIiBoZWlnaHQ9XCIzNlwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjM2MlwiIHk9XCIxMlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiOTBcIiBoZWlnaHQ9XCIzNlwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjI0OVwiIHk9XCIxMlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiOTBcIiBoZWlnaHQ9XCIzNlwiIC8+XHJcbiAgICA8L0NvbnRlbnRMb2FkZXI+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxudHlwZSBTZW9Qcm9wcyA9IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgY2Fub25pY2FsPzogc3RyaW5nO1xyXG4gIGNzcz86IHN0cmluZztcclxuICBqcz86IHN0cmluZztcclxuICBpbWFnZT86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTRU86IFJlYWN0LkZDPFNlb1Byb3BzPiA9ICh7XHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgY2Fub25pY2FsLFxyXG4gIGNzcyxcclxuICBqcyxcclxuICBpbWFnZSxcclxufSkgPT4gKFxyXG4gIDxIZWFkPlxyXG4gICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICA8bWV0YVxyXG4gICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxyXG4gICAgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgIDxtZXRhXHJcbiAgICAgIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICBjb250ZW50PXtkZXNjcmlwdGlvbn1cclxuICAgIC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJXaXNlIENhcnRcIiAvPlxyXG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtjYW5vbmljYWx9YH0gLz5cclxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQHdpc2VjYXJ0XCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQHdpc2VjYXJ0XCIgLz5cclxuICAgIHtjc3MgJiYgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2Ake2Nzc31gfSAvPn1cclxuICAgIHtpbWFnZSA/IChcclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake2ltYWdlfWB9IC8+XHJcbiAgICApIDogKFxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93aXNlY2FydC9pbWFnZS91cGxvYWQvdjE2MTY3MDk4NTAvZ25ma2ZubTFjOXJjem5jcDVjNXQucG5nXCJcclxuICAgICAgLz5cclxuICAgICl9XHJcbiAgICB7aW1hZ2UgJiYgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtgJHtpbWFnZX1gfSAvPn1cclxuICAgIHtjYW5vbmljYWwgJiYgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7Y2Fub25pY2FsfWB9IC8+fVxyXG4gICAge2pzICYmIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz17YCR7anN9YH0+PC9zY3JpcHQ+fVxyXG4gIDwvSGVhZD5cclxuKTtcclxuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSAnLi9ib3gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN2ZyA9ICh7IHNpemUgPSAxOCwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxCb3hcclxuICAgIGFzPVwic3ZnXCJcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgd2lkdGg9e3NpemUgKyAnJ31cclxuICAgIGhlaWdodD17c2l6ZSArICcnfVxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgU3Rhckljb24gZnJvbSBcIkAvYXNzZXRzL2ljb25zL1N0YXJcIjtcclxuY29uc3QgUmF0aW5nQ29udGFpbmVyPXN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBzdmcge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIHdpZHRoOiAyMnB4O1xyXG5cclxuICAgICBcclxuICAgIH1cclxuICAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjNTRDNUM2O1xyXG4gIH1cclxuXHJcbiAgLmluQWN0aXZlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbmBcclxuY29uc3QgU3RhclJhdGluZzpSZWFjdC5GQzx7cmF0aW5nOm51bWJlcn0+ID0gKHtyYXRpbmd9KSA9PiB7XHJcbiAgICBsZXQgYWN0aXZlID0gQXJyYXkuYXBwbHkobnVsbCwge2xlbmd0aDogcmF0aW5nfSlcclxuICAgIGxldCBpbkFjdGl2ZSA9IEFycmF5LmFwcGx5KG51bGwsIHtsZW5ndGg6IDUtcmF0aW5nfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSYXRpbmdDb250YWluZXI+XHJcbiAgICAgICAgICAgIHthY3RpdmUubWFwKChudW0pPT4gPFN0YXJJY29uIGNsYXNzTmFtZT17J2FjdGl2ZSd9IGtleT17bnVtfS8+KX1cclxuICAgICAgICAgICAge2luQWN0aXZlLm1hcCgobnVtKT0+IDxTdGFySWNvbiBjbGFzc05hbWU9eydpbkFjdGl2ZSd9IGtleT17bnVtfS8+KX1cclxuICAgICAgICA8L1JhdGluZ0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFyUmF0aW5nOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAL2NvbXBvbmVudHMvT3RoZXJzL2ltYWdlL2ltYWdlJztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ0AvY29tcG9uZW50cy9PdGhlcnMvYnV0dG9uL2J1dHRvbic7XHJcbmltcG9ydCB7XHJcbiAgICBQcm9kdWN0Q2FyZFdyYXBwZXIsXHJcbiAgICBQcm9kdWN0SW1hZ2VXcmFwcGVyLFxyXG4gICAgUHJvZHVjdEluZm8sXHJcbiAgICBCdXR0b25UZXh0LFxyXG59IGZyb20gJy4vcHJvZHVjdC1jYXJkLnN0eWxlJztcclxuaW1wb3J0IHtDb3VudGVyfSBmcm9tICcuLi8uLi9jYXJ0L2NvdW50ZXIvY291bnRlcic7XHJcbmltcG9ydCB7Q2FydEljb259IGZyb20gJ0AvYXNzZXRzL2ljb25zL0NhcnRJY29uJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7YWRkVG9DYXJ0fSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7Z2V0SXRlbUNhcnRRdHl9IGZyb20gXCJAL3V0aWxzL2NhcnRVdGlsc1wiO1xyXG5cclxudHlwZSBQcm9kdWN0Q2FyZFByb3BzID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGltYWdlOiBhbnk7XHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgc2FsZVByaWNlPzogbnVtYmVyO1xyXG4gICAgZGlzY291bnRJblBlcmNlbnQ/OiBudW1iZXI7XHJcbiAgICBvbkNsaWNrPzogKGU6IGFueSkgPT4gdm9pZDtcclxuICAgIHByb2R1Y3Q6IGFueVxyXG59O1xyXG5cclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdC9TdGFyUmF0aW5nXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDb252ZXJ0Q3VycmVuY3kgZnJvbSBcIkAvY29udmVydEN1cnJlbmN5XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0Q2FyZDogUmVhY3QuRkM8UHJvZHVjdENhcmRQcm9wcz4gPSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudEluUGVyY2VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgICBjb25zdCBoYW5kbGVBZGRDbGljayA9IChlOiB7IHN0b3BQcm9wYWdhdGlvbjogKCkgPT4gdm9pZDsgfSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3QsIDEpKVxyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCB7Y3VycmVuY3k6IHtzeW1ib2wsaWR9LGN1cnJlbmN5RGV0YWlsc30gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuc2hvcFJlZHVjZXIpO1xyXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlQ2xpY2sgPSAoZTogeyBzdG9wUHJvcGFnYXRpb246ICgpID0+IHZvaWQ7IH0pID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0LCAtMSkpXHJcblxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNhcnRRdWFudGl0eSA9IGdldEl0ZW1DYXJ0UXR5KGNhcnRTdGF0ZSwgcHJvZHVjdC5pZClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb2R1Y3RDYXJkV3JhcHBlciBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9kdWN0L1tzbHVnXSd9IGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0SW1hZ2VXcmFwcGVyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUHJvZHVjdEltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPFByb2R1Y3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8U3RhclJhdGluZyByYXRpbmc9ezR9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UHJpY2VXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q29udmVydEN1cnJlbmN5KGN1cnJlbmN5RGV0YWlscyxwcmljZSwnR0JQJyxpZCl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFjYXJ0UXVhbnRpdHkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcnQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRJY29uIG1yPXsyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvblRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2FydFF1YW50aXR5ID8gY2FydFF1YW50aXR5IDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVjcmVtZW50PXtoYW5kbGVSZW1vdmVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5jcmVtZW50PXtoYW5kbGVBZGRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgPC9Qcm9kdWN0Q2FyZFdyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcclxuXHJcbmNvbnN0IFN0eWxlZEJveCA9IHN0eWxlZC5kaXYoXHJcbiAgY3NzKHtcclxuICAgIHB5OiBbMzAsIDUwXSxcclxuICAgIHB4OiBbJzFyZW0nLCAwXSxcclxuICB9KSxcclxuICB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0Q2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2KFxyXG4gIGNzcyh7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxuICAgIGJvcmRlclJhZGl1czogJ2Jhc2UnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0SW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBoZWlnaHQ6IDE0NXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTYWxlVGFnID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnllbGxvdy5yZWd1bGFyJywgJyNGRkFENUUnKX07XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLm1lZGl1bScsICcxMnB4Jyl9O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpc2NvdW50UGVyY2VudCA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy55ZWxsb3cucmVndWxhcicsICcjRkZBRDVFJyl9O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5tZWRpdW0nLCAnMTJweCcpfTtcclxuICB6LWluZGV4OiAyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RJbmZvID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEyM3B4O1xyXG4gIH1cclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuICAgIG1hcmdpbjogMCAwIDdweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcm9kdWN0LXdlaWdodCB7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMueHMnLCAnMTInKX1weDtcclxuICAgIH1cclxuICB9XHJcbiAgLnByb2R1Y3QtbWV0YSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgbWluLWhlaWdodDogMzJweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0UHJpY2VXcmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgLnByb2R1Y3QtcHJpY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgICAgICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggLSAxcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGlzY291bnRlZFByaWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMueWVsbG93LmhvdmVyJywgJyNGQkI5NzknKX07XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnllbGxvdy5ob3ZlcicsICcjRkJCOTc5Jyl9O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcnQtYnV0dG9uIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuMjAwJywgJyNmN2Y3ZjcnKX07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJpZycsICcxOHB4Jyl9O1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTdweDtcclxuICAgICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMCA2cHg7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgICB9XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIC5xdWFudGl0eSB7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbmNCdG4ge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZGVjQnRuIHtcclxuICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0W3R5cGU9J251bWJlciddIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4IC0gMXB4KTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU0cHgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDI3cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvblRleHQgPSBzdHlsZWQuc3BhbmBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvb2tJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMjc1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGhlaWdodDogMjE1cHg7XHJcbiAgfVxyXG4gICR7RGlzY291bnRQZXJjZW50fSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQm9va0luZm8gPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3ROYW1lID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgbWFyZ2luOiAwIDAgN3B4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAmOm9ubHktY2hpbGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4IC0gMXB4KTtcclxuICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRob3JJbmZvID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgQWRkQ2FydEJveCA9IHN0eWxlZC5kaXZgXHJcbi8vICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIHBhZGRpbmc6IDIwcHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiA1MCU7XHJcbi8vICAgbGVmdDogNTAlO1xyXG4vLyAgIG9wYWNpdHk6IDA7XHJcbi8vICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblxyXG4vLyAgIC5jYXJ0LWJ1dHRvbiB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAzNnB4O1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogMTdweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLjEnLCAnMTMnKX0gcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbi8vICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuLy8gICAgICAgd2lkdGg6IDMycHg7XHJcbi8vICAgICAgIGhlaWdodDogMzJweDtcclxuLy8gICAgICAgcGFkZGluZzogMDtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmJ0bi10ZXh0IHtcclxuLy8gICAgICAgcGFkZGluZzogMCAwIDAgNnB4O1xyXG4vLyAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAmOmhvdmVyIHtcclxuLy8gICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuLy8gICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5ZTdmO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgc3ZnIHtcclxuLy8gICAgICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmljZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmljZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggLSAxcHgpO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXNjb3VudGVkUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9IHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnllbGxvdy5yZWd1bGFyJywgJyNGRkFENUUnKX07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tbGVmdDogLTRweDtcclxuICB6LWluZGV4OiAyO1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy55ZWxsb3cucmVndWxhcicsICcjRkZBRDVFJyl9O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCb29rQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb2RDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb2RJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMjMwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGhlaWdodDogMTQ1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RNZXRhID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsaXZlcnlPcHQgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEdXJhdGlvbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iaWcnLCAnMThweCcpfTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0Q2FyZCAgZnJvbSAnLi4vY2FyZC9Qcm9kdWN0SXRlbSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9sb2FkbW9yZS1idXR0b24nO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuL2JveCc7XHJcblxyXG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2J1dHRvbic7XHJcblxyXG5pbXBvcnQge0dyaWR9IGZyb20gJy4vUHJvZHVjdEdyaWRTdHlsZXMnXHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSBmcm9tIFwiQC91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IHVzZUZldGNoIGZyb20gXCJAL2hvb2tzL3VzZUZldGNoXCI7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsb2FkTW9yZT86IGJvb2xlYW47XHJcbiAgICBmZXRjaExpbWl0PzogbnVtYmVyO1xyXG4gICAgc3R5bGU/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0R3JpZCA9ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmUgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoTGltaXQgPSAxNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHVybD0oKT0+e1xyXG4gICAgICAgIGNvbnN0IHtjYXRlZ29yeSxzdWJDYXRlZ29yeSxxdWVyeX09cm91dGVyLnF1ZXJ5XHJcbiAgICAgICAgaWYocXVlcnkpe1xyXG4gICAgICAgICAgICBpZihjYXRlZ29yeSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeVF1ZXJ5PWNhdGVnb3J5P2BjYXRlZ29yeT0ke2NhdGVnb3J5fWA6JydcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9wcm9kdWN0cy9zZWFyY2g/cXVlcnk9JHtxdWVyeX0mJHtjYXRlZ29yeVF1ZXJ5fWBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvcHJvZHVjdHMvc2VhcmNoP3F1ZXJ5PSR7cXVlcnl9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2F0ZWdvcnkpe1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeVF1ZXJ5PWNhdGVnb3J5P2BjYXRlZ29yeT0ke2NhdGVnb3J5fWA6JydcclxuICAgICAgICAgICAgY29uc3Qgc3ViY2F0ZWdvcnlRdWVyeT1zdWJDYXRlZ29yeT9gc3ViQ2F0ZWdvcnk9JHtzdWJDYXRlZ29yeX1gOicnXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9wcm9kdWN0cy8/JHtjYXRlZ29yeVF1ZXJ5fSYke3N1YmNhdGVnb3J5UXVlcnl9YFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvcHJvZHVjdHMvc2ltaWxhci9zYXNgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgW2RhdGEsIGlzTG9hZGluZ109dXNlRmV0Y2godXJsKCkpXHJcblxyXG4gICAgLy8gY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlUHJvZHVjdHMoe1xyXG4gICAgLy8gICAgIHR5cGUsXHJcbiAgICAvLyAgICAgdGV4dDogcm91dGVyLnF1ZXJ5LnRleHQsXHJcbiAgICAvLyAgICAgY2F0ZWdvcnk6IHJvdXRlci5xdWVyeS5jYXRlZ29yeSxcclxuICAgIC8vICAgICBvZmZzZXQ6IDAsXHJcbiAgICAvLyAgICAgbGltaXQ6IGZldGNoTGltaXQsXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgaGFuZGxlTG9hZE1vcmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAvLyBhd2FpdCBmZXRjaE1vcmUoTnVtYmVyKGRhdGEubGVuZ3RoKSwgZmV0Y2hMaW1pdCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVuZGVyQ2FyZCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UHJvZHVjdENhcmRcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX0gaW1hZ2U9e3Byb3BzLnRodW1iSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBwcmljZT17cHJvcHMucHJpY2V9IGtleT17cHJvcHMuX2lkfSBwcm9kdWN0PXtwcm9wc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgeyBpdGVtcywgaGFzTW9yZSB9ID0gZGF0YS5wcm9kdWN0cztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxHcmlkIHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5kYXRhLm1hcCgocHJvZHVjdCwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2FyZChwcm9kdWN0KVxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIHtsb2FkTW9yZSAmJiBkYXRhPy5oYXNNb3JlICYmIChcclxuICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBtdD17JzJyZW0nfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvYWRNb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdzZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9JzFweCBzb2xpZCAjZjFmMWYxJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZCBNb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0R3JpZCIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIkBzdHlsZWQtc3lzdGVtL2Nzc1wiO1xyXG5cclxuLy8gQHRzLW5vY2hlY2tcclxuZXhwb3J0IGNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2KFxyXG4gICAgY3NzKHtcclxuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgZ3JpZEdhcDogJzEwcHgnLFxyXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMSwgbWlubWF4KDE4MHB4LCAxZnIpKScsXHJcblxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NDBweCknOiB7XHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMiwgbWlubWF4KDE4MHB4LCAxZnIpKScsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSc6IHtcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgzLCBtaW5tYXgoMTgwcHgsIDFmcikpJyxcclxuICAgICAgICAgICAgZ3JpZEdhcDogJzIwcHgnLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCknOiB7XHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMiwgbWlubWF4KDE4MHB4LCAxZnIpKScsXHJcbiAgICAgICAgICAgIGdyaWRHYXA6ICczMHB4JyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSc6IHtcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgzLCBtaW5tYXgoMTgwcHgsIDFmcikpJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTcwMHB4KSc6IHtcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCg0LCBtaW5tYXgoMjQwcHgsIDFmcikpJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjIwMHB4KSc6IHtcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCg1LCBtaW5tYXgoMjQwcHgsIDFmcikpJyxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBjb21wb3NlLFxuICBzcGFjZSxcbiAgY29sb3IsXG4gIGxheW91dCxcbiAgZmxleGJveCxcbiAgcG9zaXRpb24sXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdjxhbnk+KFxuICB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgbWluV2lkdGg6IDAsXG4gICAgbWFyZ2luOiAwLFxuICB9LFxuICBjb21wb3NlKHNwYWNlLCBjb2xvciwgbGF5b3V0LCBmbGV4Ym94LCBwb3NpdGlvbilcbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMsIGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBzeXN0ZW1Dc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcbmltcG9ydCB7IGNvbXBvc2UsIHZhcmlhbnQsIGJvcmRlciwgc3BhY2UsIGxheW91dCB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmRpdjxhbnk+KFxuICAocHJvcHMpID0+XG4gICAgc3lzdGVtQ3NzKHtcbiAgICAgIHB4OiAnMTVweCcsXG4gICAgICBweTogMCxcbiAgICAgIGZvbnRTaXplOiBbJ2Jhc2UnXSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGN1cnNvcjogcHJvcHMuZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gJ3RleHQubGlnaHQnIDogJ3doaXRlJyxcbiAgICAgIGJnOiBwcm9wcy5kaXNhYmxlZCA/ICdncmF5LjUwMCcgOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcbiAgICAgIGJvcmRlclJhZGl1czogJ2Jhc2UnLFxuXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gJ3RleHQubGlnaHQnIDogJ3doaXRlJyxcbiAgICAgICAgYmc6IHByb3BzLmRpc2FibGVkID8gJ2dyYXkuNTAwJyA6ICdwcmltYXJ5LmhvdmVyJyxcbiAgICAgIH0sXG4gICAgfSksXG4gIHtcbiAgICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMzhweCcsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgYm9yZGVyOiAwLFxuXG4gICAgJyY6Zm9jdXMnOiB7XG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbiAgdmFyaWFudCh7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIG91dGxpbmVkOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgYmc6ICd3aGl0ZScsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnZ3JheS41MDAnLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICAgIGJnOiAnd2hpdGUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJnOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgYmc6ICdwcmltYXJ5LmhvdmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICBiZzogJ3doaXRlJyxcbiAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdncmF5LjUwMCcsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGJnOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGV4dDoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnkuaG92ZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICB3aWR0aDogMjYsXG4gICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAndGV4dC5yZWd1bGFyJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxuICAgICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgJyYuc2VsZWN0ZWQnOiB7XG4gICAgICAgICAgYmc6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgfSxcbiAgICAgICAgJyY6aG92ZXI6bm90KC5zZWxlY3RlZCknOiB7XG4gICAgICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIHZhcmlhbnQoe1xuICAgIHByb3A6ICdzaXplJyxcbiAgICB2YXJpYW50czoge1xuICAgICAgYmlnOiB7XG4gICAgICAgIGhlaWdodDogJzQ4cHgnLFxuICAgICAgICBweDogMzAsXG4gICAgICB9LFxuICAgICAgc21hbGw6IHtcbiAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIGNvbXBvc2UoYm9yZGVyLCBzcGFjZSwgbGF5b3V0KVxuKTtcbmNvbnN0IHJvdGF0ZSA9IGtleWZyYW1lc2BcbiAgZnJvbSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxuICB0byB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG5gO1xuXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdihcbiAgKHByb3BzKSA9PlxuICAgIHN5c3RlbUNzcyh7XG4gICAgICB3aWR0aDogMTgsXG4gICAgICBoZWlnaHQ6IDE4LFxuICAgICAgbWFyZ2luTGVmdDogMTAsXG4gICAgICBib3JkZXI6ICczcHggc29saWQgd2hpdGUnLFxuICAgICAgYm9yZGVyVG9wOiBgM3B4IHNvbGlkICR7cHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6ICdwcmltYXJ5LnJlZ3VsYXInfWAsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiAndHJhbnNmb3JtJyxcbiAgICB9KSxcbiAgY3NzYFxuICAgIGFuaW1hdGlvbjogJHtyb3RhdGV9IDEuMnMgaW5maW5pdGUgbGluZWFyO1xuICBgXG4pO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICB0eXBlOiAnc3VibWl0JyB8ICdidXR0b24nO1xuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufTtcbmV4cG9ydCB0eXBlIFJlZiA9IEhUTUxEaXZFbGVtZW50O1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBQcm9wcz4oXG4gICh7IGNoaWxkcmVuLCBkaXNhYmxlZCwgbG9hZGluZyA9IGZhbHNlLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgICA8U3R5bGVkQnV0dG9uIHJlZj17cmVmfSB7Li4ucHJvcHN9IGRpc2FibGVkPXtkaXNhYmxlZH0gcm9sZT1cImJ1dHRvblwiPlxuICAgICAge2NoaWxkcmVufVxuICAgICAge2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XG4gICAgPC9TdHlsZWRCdXR0b24+XG4gIClcbik7XG4iLCJpbXBvcnQgeyBPdmVybGF5U2Nyb2xsYmFyc0NvbXBvbmVudCB9IGZyb20gJ292ZXJsYXlzY3JvbGxiYXJzLXJlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgJ292ZXJsYXlzY3JvbGxiYXJzL2Nzcy9PdmVybGF5U2Nyb2xsYmFycy5jc3MnO1xyXG5cclxudHlwZSBTY3JvbGxiYXJQcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBvcHRpb25zPzogYW55O1xyXG4gICAgc3R5bGU/OiBhbnk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2Nyb2xsYmFyOiBSZWFjdC5GQzxTY3JvbGxiYXJQcm9wcz4gPSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxPdmVybGF5U2Nyb2xsYmFyc0NvbXBvbmVudFxyXG4gICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzTmFtZX0gb3MtdGhlbWUtdGhpbmAsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0hpZGU6ICdsZWF2ZScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9PdmVybGF5U2Nyb2xsYmFyc0NvbXBvbmVudD5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XHJcbmltcG9ydCB7IHZhcmlhbnQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcclxuZXhwb3J0IGNvbnN0IENvdW50ZXJCb3ggPSBzdHlsZWQuZGl2PGFueT4oXHJcbiAgY3NzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiAnYmFzZScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSksXHJcbiAgICB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDIwMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHZhcmlhbnQoe1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgaG9yaXpvbnRhbDoge1xyXG4gICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICBoZWlnaHQ6IDM2LFxyXG4gICAgICB9LFxyXG4gICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgIHdpZHRoOiAzMCxcclxuICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpZ2h0SG9yaXpvbnRhbDoge1xyXG4gICAgICAgIHdpZHRoOiAxMDQsXHJcbiAgICAgICAgaGVpZ2h0OiAzNixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5LjIwMCcsXHJcbiAgICAgICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgICB9LFxyXG4gICAgICBsaWdodFZlcnRpY2FsOiB7XHJcbiAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5LjIwMCcsXHJcbiAgICAgICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50ZXJCdXR0b24gPSBzdHlsZWQuYnV0dG9uPGFueT4oXHJcbiAge1xyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiAxMCxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgJyY6aG92ZXIsICY6Zm9jdXMnOiB7XHJcbiAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB2YXJpYW50KHtcclxuICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgIGxpZ2h0SG9yaXpvbnRhbDoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dC5yZWd1bGFyJyxcclxuICAgICAgfSxcclxuICAgICAgbGlnaHRWZXJ0aWNhbDoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dC5yZWd1bGFyJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudGVyVmFsdWUgPSBzdHlsZWQuc3Bhbih7XHJcbiAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxyXG59KTtcclxuQ291bnRlclZhbHVlLmRpc3BsYXlOYW1lID0gJ0NvdW50ZXJWYWx1ZSc7XHJcbkNvdW50ZXJCdXR0b24uZGlzcGxheU5hbWUgPSAnQ291bnRlckJ1dHRvbic7XHJcbkNvdW50ZXJCb3guZGlzcGxheU5hbWUgPSAnQ291bnRlckJveCc7XHJcbkNvdW50ZXJCb3guZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6ICdob3Jpem9udGFsJyxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUGx1cywgTWludXMgfSBmcm9tICdAL2Fzc2V0cy9pY29ucy9QbHVzTWludXMnO1xyXG5pbXBvcnQgeyBDb3VudGVyQm94LCBDb3VudGVyQnV0dG9uLCBDb3VudGVyVmFsdWUgfSBmcm9tICcuL2NvdW50ZXIuc3R5bGUnO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIG9uRGVjcmVtZW50OiAoZTogRXZlbnQpID0+IHZvaWQ7XHJcbiAgb25JbmNyZW1lbnQ6IChlOiBFdmVudCkgPT4gdm9pZDtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG4gIHZhcmlhbnQ/OiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBvbkRlY3JlbWVudCxcclxuICBvbkluY3JlbWVudCxcclxuICB2YWx1ZSxcclxuICB2YXJpYW50LFxyXG4gIGNsYXNzTmFtZSxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q291bnRlckJveCB2YXJpYW50PXt2YXJpYW50fSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIDxDb3VudGVyQnV0dG9uIG9uQ2xpY2s9e29uRGVjcmVtZW50fSB2YXJpYW50PXt2YXJpYW50fT5cclxuICAgICAgICA8TWludXMgLz5cclxuICAgICAgPC9Db3VudGVyQnV0dG9uPlxyXG4gICAgICA8Q291bnRlclZhbHVlPnt2YWx1ZX08L0NvdW50ZXJWYWx1ZT5cclxuICAgICAgPENvdW50ZXJCdXR0b24gb25DbGljaz17b25JbmNyZW1lbnR9IHZhcmlhbnQ9e3ZhcmlhbnR9PlxyXG4gICAgICAgIDxQbHVzIC8+XHJcbiAgICAgIDwvQ291bnRlckJ1dHRvbj5cclxuICAgIDwvQ291bnRlckJveD5cclxuICApO1xyXG59O1xyXG4iLCJjb25zdCBDb252ZXJ0Q3VycmVuY3k9KGRhdGEscHJpY2UsZnJvbT0nR0JQJyx0byk9PntcclxuICAgIGxldCBjb252ZXJ0ZWRQcmljZT0wXHJcbiAgICBpZih0bz09PSdHQlAnKXtcclxuICAgICAgICBjb252ZXJ0ZWRQcmljZT1wcmljZVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zdCBwYXJhbT0nR0JQLycrdG9cclxuICAgICAgICBjb25zdCBjdXJyZW5jeURhdGE9ZGF0YVtwYXJhbVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgY29udmVydGVkUHJpY2U9cHJpY2UqY3VycmVuY3lEYXRhLnJhdGVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29udmVydGVkUHJpY2UudG9GaXhlZCgyKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb252ZXJ0Q3VycmVuY3k7IiwiXHJcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlLCBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBpbnN0YW5jZTogQXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnLycsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVxdWVzdEhhbmRsZXIgPSAoY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcpID0+IHtcclxuICAgIC8vIE1vZGlmeSBjb25maWcgaGVyZVxyXG4gICAgLy8gaWYgKGF1dGguZ2V0VG9rZW4oKSkge1xyXG4gICAgLy8gICAvLyBjb25maWcuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke2F1dGguZ2V0VG9rZW4oKX1gO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbmZpZy50aW1lb3V0ID0gMzAwMDA7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59O1xyXG5cclxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHJlcXVlc3RIYW5kbGVyKTtcclxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSh1bmRlZmluZWQsIChlcnJvcjogQXhpb3NFcnJvcikgPT4ge1xyXG4gICAgLy8gaGFuZGxlIGVycm9yXHJcbiAgICBpZiAoYXhpb3MuaXNDYW5jZWwoZXJyb3IpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHJlcXVlc3QgY2FuY2VsbGVkYCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IucmVzcG9uc2U/LmRhdGE/LmVycm9yKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBodHRwIGZyb20gJy4vaHR0cEluc3RhbmNlJztcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJztcclxuXHJcbmludGVyZmFjZSBtZW1TdG9yZVR5cGVzIHtcclxuICAgIFt4OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuY29uc3QgbWVtU3RvcmU6IG1lbVN0b3JlVHlwZXMgPSB7fTtcclxuXHJcbmludGVyZmFjZSB1c2VGZXRjaFByb3BzIHtcclxuICAgIChcclxuICAgICAgICB1cmw6IHN0cmluZyxcclxuICAgICAgICBwcm9wcz86IHtcclxuICAgICAgICAgICAgY2FjaGU/OiBib29sZWFuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXhpb3NPcHRpb25zPzogQXhpb3NSZXF1ZXN0Q29uZmlnXHJcbiAgICApOiBbYW55LCBib29sZWFuLCBhbnksIFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHt9Pj5dO1xyXG59XHJcblxyXG5jb25zdCB1c2VGZXRjaDogdXNlRmV0Y2hQcm9wcyA9ICh1cmwsIHByb3BzID0ge30sIGF4aW9zT3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8YW55PihudWxsKTtcclxuICAgIGNvbnN0IFtzaG91bGRSZWZldGNoLCByZUZldGNoXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCB1bm1vdW50ZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc291cmNlID0gYXhpb3MuQ2FuY2VsVG9rZW4uc291cmNlKCk7XHJcbiAgICAgICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGh0dHBDb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmF4aW9zT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlLnRva2VuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGh0dHAoaHR0cENvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXVubW91bnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLmNhY2hlKSBtZW1TdG9yZVt1cmxdID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1bm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobWVtU3RvcmVbdXJsXSAmJiAhdW5tb3VudGVkKSB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldERhdGEobWVtU3RvcmVbdXJsXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdW5tb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc291cmNlLmNhbmNlbChgJHt1cmx9IGNhbmNlbGVkYCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1cmwsIHNob3VsZFJlZmV0Y2hdKTtcclxuXHJcbiAgICByZXR1cm4gW2RhdGEsIGlzTG9hZGluZywgZXJyb3IsIHJlRmV0Y2hdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRmV0Y2g7XHJcbiIsImltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9oZWFkZXIvc2lkZWJhci9DYXRlZ29yeVNpZGViYXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7TW9kYWx9IGZyb20gJ0ByZWRxL3JldXNlLW1vZGFsJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCIuLi9jb21wb25lbnRzL090aGVycy9jYXJvdXNlbC9jYXJvdXNlbFwiO1xyXG5pbXBvcnQge1xyXG4gICAgTWFpbkNvbnRlbnRBcmVhLFxyXG4gICAgU2lkZWJhclNlY3Rpb24sXHJcbiAgICBDb250ZW50U2VjdGlvbixcclxuICAgIE9mZmVyU2VjdGlvbixcclxuICAgIE1vYmlsZUNhcm91c2VsRHJvcGRvd24sXHJcbn0gZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzLnN0eWxlJztcclxuaW1wb3J0IHtzaXRlT2ZmZXJzfSBmcm9tIFwiQC9zaXRlT2ZmZXJzXCI7XHJcbmltcG9ydCBTdG9yZU5hdiBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dC9zdG9yZS1uYXYvc3RvcmUtbmF2XCI7XHJcbmltcG9ydCBGZWF0dXJlZCBmcm9tIFwiQC9jb21wb25lbnRzL090aGVycy9GZWF0dXJlZC9GZWF0dXJlZFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9sYXlvdXRcIjtcclxuXHJcbnR5cGUgU2lkZWJhckNhdGVnb3J5UHJvcHMgPSB7XHJcbiAgICBkZXZpY2VUeXBlOiB7XHJcbiAgICAgICAgbW9iaWxlOiBib29sZWFuO1xyXG4gICAgICAgIHRhYmxldDogYm9vbGVhbjtcclxuICAgICAgICBkZXNrdG9wOiBib29sZWFuO1xyXG4gICAgfTtcclxufTtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0L2dyaWQvUHJvZHVjdEdyaWRcIjtcclxuaW1wb3J0IHtTRU99IGZyb20gXCJAL2NvbXBvbmVudHMvT3RoZXJzL3Nlb1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBDYXJ0UG9wVXAgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2ZlYXR1cmVzL2NhcnQvY2FydC1wb3B1cFwiKSwge1xyXG4gICAgc3NyOiBmYWxzZSxcclxufSk7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge0NhdGVnb3J5SWNvbn0gZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL21lbnUvbGVmdC1tZW51L0xlZnRNZW51XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7QXJyb3dOZXh0fSBmcm9tIFwiQC9hc3NldHMvaWNvbnMvQXJyb3dOZXh0XCI7XHJcblxyXG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIGg0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPFNpZGViYXJDYXRlZ29yeVByb3BzPiA9ICh7ZGV2aWNlVHlwZX0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2NhdGVnb3J5RGF0YX0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuc2hvcFJlZHVjZXIpO1xyXG4gICAgY29uc3QgUHJvZHVjdHNHcmlkVGV4dCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7Y2F0ZWdvcnksIHN1YkNhdGVnb3J5LHF1ZXJ5fSA9IHJvdXRlci5xdWVyeVxyXG4gICAgICAgIGlmKHF1ZXJ5KXtcclxuICAgICAgICAgICAgcmV0dXJuIDxoMz5cclxuICAgICAgICAgICAgICAgIFNob3dpbmcgcmVzdWx0cyBmb3I6IHtxdWVyeX1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnlEYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeU9iamVjdCA9IGNhdGVnb3J5RGF0YS5maW5kKGRhdGEgPT4gZGF0YS5pZCA9PT0gY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBTdWJDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5T2JqZWN0LnN1YkNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJDYXRlZ29yeU9iamVjdCA9IGNhdGVnb3J5T2JqZWN0LnN1YkNhdGVnb3J5LmZpbmQoZGF0YSA9PiBkYXRhLmlkID09PSBzdWJDYXRlZ29yeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd05leHQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57c3ViQ2F0ZWdvcnlPYmplY3QubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlJY29uIGxpbms9e2NhdGVnb3J5T2JqZWN0LmltYWdlfSBoZWlnaHQ9eyc1MHB4J30gd2lkdGg9eyc1MHB4J30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57Y2F0ZWdvcnlPYmplY3QubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtTdWJDYXRlZ29yeSgpfVxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ0hleSdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdIaSdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc1F1ZXJ5aW5nID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5IHx8IHJvdXRlci5xdWVyeS5xdWVyeSA/IHRydWUgOiBmYWxzZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U0VPIGRlc2NyaXB0aW9uPXtcIkJlc3QgcGxhY2UgdG8gZmluZCBhbGwgdGhlIGdvb2RzLlwifVxyXG4gICAgICAgICAgICAgICAgIHRpdGxlPXtcIldpc2VDYXQtU2hvcHBpbmcgb25saW5lIGhhcyBuZXZlciBiZWVuIGVhc2llclwifS8+XHJcbiAgICAgICAgICAgIDxNb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICA8TW9iaWxlQ2Fyb3VzZWxEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0b3JlTmF2Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9iaWxlQ2Fyb3VzZWxEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpbkNvbnRlbnRBcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhclNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhciBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhclNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPZmZlclNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogJzIwcHggLTEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBkYXRhPXtzaXRlT2ZmZXJzfSBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfSBtb2JpbGU9ezF9IHRhYmxldD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A9ezN9IGxhcHRvcD17M30gdHY9ezMuNX0gbWluaVRhYmxldD17MS41fSBhdXRvUGxheT17ZmFsc2V9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT2ZmZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1F1ZXJ5aW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T2ZmZXJTZWN0aW9uIGxlc3NQYWRkaW5nPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZCBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfSB0aXRsZT17XCJUb3AgcHJvZHVjdHNcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09mZmVyU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T2ZmZXJTZWN0aW9uIGxlc3NQYWRkaW5nPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZCBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfSB0aXRsZT17XCJGZWF0dXJlZCBJdGVtc1wifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT2ZmZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T2ZmZXJTZWN0aW9uIGxlc3NQYWRkaW5nPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3twYWRkaW5nTGVmdDogXCIzMHB4XCJ9fT57UHJvZHVjdHNHcmlkVGV4dCgpfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0cy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09mZmVyU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5Db250ZW50QXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FydFBvcFVwIGRldmljZVR5cGU9e2RldmljZVR5cGV9Lz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IHsgQ0FSVCB9IGZyb20gXCIuLi9kZWZpbmVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3Q6YW55LCBxdWFudGl0eTpudW1iZXIsIGNvbG9yPzpzdHJpbmcsIHNpemU/OnN0cmluZykgPT4gKHtcclxuICB0eXBlOiBDQVJULkFERF9UT19DQVJULFxyXG4gIHByb2R1Y3QsXHJcbiAgcXVhbnRpdHksXHJcbiAgY29sb3IsXHJcbiAgc2l6ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoY2FydElkOnN0cmluZykgPT4gKHtcclxuICB0eXBlOiBDQVJULlJFTU9WRV9GUk9NX0NBUlQsXHJcbiAgY2FydElkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVBbGxGcm9tQ2FydCA9ICgpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5SRU1PVkVfQUxMX0ZST01fQ0FSVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVjcmVhc2VRdWFudGl0eUNhcnQgPSAoY2FydElkOnN0cmluZykgPT4gKHtcclxuICB0eXBlOiBDQVJULkRFQ1JFQVNFX1FVQU5USVRZX0NBUlQsXHJcbiAgY2FydElkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbmNyZWFzZVF1YW50aXR5Q2FydCA9IChjYXJ0SWQ6c3RyaW5nKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVCxcclxuICBjYXJ0SWQsXHJcbn0pO1xyXG4iLCJpbXBvcnQge0FVVEgsIFNIT1B9IGZyb20gXCIuLi9kZWZpbmVzXCI7XHJcbmltcG9ydCB1c2VGZXRjaCBmcm9tIFwiQC9ob29rcy91c2VGZXRjaFwiO1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNldEF1dGhUb2tlbiBmcm9tIFwiQC9yZWR1eC9zZXRBdXRoVG9rZW5cIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0U29ydCA9IChzb3J0VHlwZTpzdHJpbmcpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5TRVRfU09SVCxcclxuICBzb3J0VHlwZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0U3ViQ2F0ZWdvcnkgPSAoc3ViQ2F0ZWdvcnk6b2JqZWN0KSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX1NVQkNBVEVHT1JZLFxyXG4gIHN1YkNhdGVnb3J5LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHNldENhdGVnb3J5ID0gKGNhdGVnb3J5Om9iamVjdCkgPT4gKHtcclxuICB0eXBlOiBTSE9QLlNFVF9DQVRFR09SWSxcclxuICBjYXRlZ29yeSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW5jeSA9IChjdXJyZW5jeTpvYmplY3QpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5TRVRfQ1VSUkVOQ1ksXHJcbiAgY3VycmVuY3ksXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc2V0RGVsaXZlcnlBZGRyZXNzID0gKGFkZHJlc3M6b2JqZWN0KSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX0FERFJFU1MsXHJcbiAgYWRkcmVzcyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzZXRCaWxsaW5nID0gKGJpbGxpbmc6b2JqZWN0KSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX0JJTExJTkcsXHJcbiAgYmlsbGluZyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzZXRDQVJEID0gKGNhcmQ6b2JqZWN0KSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX0NBUkQsXHJcbiAgY2FyZCxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbmN5RGF0YSA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDphbnkpID0+IHtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkudHdlbHZlZGF0YS5jb20vZXhjaGFuZ2VfcmF0ZT9zeW1ib2w9R0JQL0pQWSxHQlAvVVNELEdCUC9FVVImYXBpa2V5PTUxNjJkNDQwYTMzMzRjNTU4YzI1M2Q2NzhlZDQ4MDJiYCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFNIT1AuU0VUX0NVUlJFTkNZX0RBVEEsXHJcbiAgICAgIGRhdGE6ZGF0YSxcclxuICAgIH0pXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDYXRlZ29yeURhdGEgPSAoZGF0YTpvYmplY3QpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5TRVRfQ0FURUdPUllfREFUQSxcclxuICBkYXRhOmRhdGEsXHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgR0xPQkFMID0ge1xyXG4gIFNFVF9MQU5HVUFHRTogXCJTRVRfTEFOR1VBR0VcIixcclxuICBTRVRfQ1VSUkVOQ1k6IFwiU0VUX0NVUlJFTkNZXCIsXHJcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxyXG4gIFNFVF9TRUFSQ0g6IFwiU0VUX1NFQVJDSFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENBUlQgPSB7XHJcbiAgQUREX1RPX0NBUlQ6IFwiQUREX1RPX0NBUlRcIixcclxuICBSRU1PVkVfRlJPTV9DQVJUOiBcIlJFTU9WRV9GUk9NX0NBUlRcIixcclxuICBSRU1PVkVfQUxMX0ZST01fQ0FSVDogXCJSRU1PVkVfQUxMX0ZST01fQ0FSVFwiLFxyXG4gIERFQ1JFQVNFX1FVQU5USVRZX0NBUlQ6IFwiREVDUkVBU0VfUVVBTlRJVFlfQ0FSVFwiLFxyXG4gIElOQ1JFQVNFX1FVQU5USVRZX0NBUlQ6IFwiSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdJU0hMSVNUID0ge1xyXG4gIEFERF9UT19XSVNITElTVDogXCJBRERfVE9fV0lTSExJU1RcIixcclxuICBSRU1PVkVfRlJPTV9XSVNITElTVDogXCJSRU1PVkVfRlJPTV9XSVNITElTVFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNIT1AgPSB7XHJcbiAgU0VUX1NPUlQ6IFwiU0VUX1NPUlRcIixcclxuICBTRVRfU1VCQ0FURUdPUlk6IFwiU0VUX1NVQkNBVEVHT1JZXCIsXHJcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxyXG4gIFNFVF9DQVRFR09SWV9EQVRBOiBcIlNFVF9DQVRFR09SWV9EQVRBXCIsXHJcbiAgU0VUX0NVUlJFTkNZOiBcIlNFVF9DVVJSRU5DWVwiLFxyXG4gIFNFVF9BRERSRVNTOiBcIlNFVF9BRERSRVNTXCIsXHJcbiAgU0VUX0JJTExJTkc6IFwiU0VUX0JJTExJTkdcIixcclxuICBTRVRfQ0FSRDogXCJTRVRfQ0FSRFwiLFxyXG4gIFNFVF9DVVJSRU5DWV9EQVRBOiBcIlNFVF9DVVJSRU5DWV9EQVRBXCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBGT1JNID0ge1xyXG4gIFNFVF9DVVJSRU5UX0ZPUk06IFwiU0VUX0NVUlJFTlRfRk9STVwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgQVVUSCA9IHtcclxuICBMT0dfSU46IFwiTE9HX0lOXCIsXHJcbiAgTE9HX0lOX0VSUk9SOiBcIkxPR19JTl9FUlJPUlwiLFxyXG4gIFNJR05fVVBfRVJST1I6XCJTSUdOX1VQX0VSUk9SXCIsXHJcbiAgU0lHTl9VUDpcIlNJR05fVVBcIixcclxuICBMT0dfT1VUOlwiTE9HX09VVFwiLFxyXG4gIExPQURfVVNFUjpcIkxPQURfVVNFUlwiLFxyXG4gIExPQURfVVNFUl9GQUlMOlwiTE9BRF9VU0VSX0ZBSUxcIixcclxuICBPUkRFUl9TVUNDRVNTOlwiT1JERVJfU1VDQ0VTU1wiLFxyXG4gIE9SREVSX1NVQ0NFU1NfRkFJTDpcIk9SREVSX1NVQ0NFU1NfRkFJTFwiLFxyXG59O1xyXG5leHBvcnQgaW50ZXJmYWNlIENhcnRBY3Rpb25PYmplY3Qge1xyXG4gIHR5cGU6c3RyaW5nLFxyXG4gIHByb2R1Y3Q6c3RyaW5nLFxyXG4gIHF1YW50aXR5Ok51bWJlcixcclxuICBjb2xvcjpzdHJpbmcsXHJcbiAgc2l6ZTpzdHJpbmcsXHJcblxyXG59XHJcbiIsImltcG9ydCBPZmZlck9uZSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvcHJvbW90aW9uL29mZmVyLTEucG5nJztcclxuaW1wb3J0IE9mZmVyVGhyZWUgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3Byb21vdGlvbi9vZmZlci0zLnBuZyc7XHJcbmltcG9ydCBPZmZlclR3byBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvcHJvbW90aW9uL29mZmVyLTIucG5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBzaXRlT2ZmZXJzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgaW1nU3JjOiBPZmZlck9uZSxcclxuICAgICAgICBhbHQ6ICdPZmZlciAxJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcyJyxcclxuICAgICAgICBpbWdTcmM6IE9mZmVyVHdvLFxyXG4gICAgICAgIGFsdDogJ09mZmVyIDInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzMnLFxyXG4gICAgICAgIGltZ1NyYzogT2ZmZXJUaHJlZSxcclxuICAgICAgICBhbHQ6ICdPZmZlciAzJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICBpbWdTcmM6IE9mZmVyT25lLFxyXG4gICAgICAgIGFsdDogJ09mZmVyIDEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzInLFxyXG4gICAgICAgIGltZ1NyYzogT2ZmZXJUd28sXHJcbiAgICAgICAgYWx0OiAnT2ZmZXIgMicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMycsXHJcbiAgICAgICAgaW1nU3JjOiBPZmZlclRocmVlLFxyXG4gICAgICAgIGFsdDogJ09mZmVyIDMnLFxyXG4gICAgfSxcclxuXTtcclxuIiwiXHJcblxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlVG90YWxQcmljZSA9IChhcnI6W2FueV0pID0+IHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmRpc2NvdW50KSB7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGl0ZW0uY2FydFF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICA/IChpdGVtLnByaWNlIC0gaXRlbS5kaXNjb3VudCkgKiBpdGVtLmNhcnRRdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgOiBpdGVtLnByaWNlIC0gaXRlbS5kaXNjb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eSA/IGl0ZW0ucHJpY2UgKiBpdGVtLmNhcnRRdWFudGl0eSA6IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdG90YWw7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBpc0luQ2FydD0oYXJyOlthbnldLGlkKT0+e1xyXG4gICAgcmV0dXJuIGFyci5zb21lKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldEl0ZW1DYXJ0UXR5ID0gKGFycjpbYW55XSxpZDpzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGl0ZW09YXJyLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcclxuICAgIHJldHVybiBpdGVtPy5jYXJ0UXVhbnRpdHk/aXRlbS5jYXJ0UXVhbnRpdHk6bnVsbFxyXG59OyIsImV4cG9ydCBjb25zdCBBUElfQkFTRV9VUkw9J2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCdcclxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybUNsb3VkaW5hcnlJbWFnZT0odXJsLHdpZHRoLGhlaWdodCk9PntcclxuICAgIC8vIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dpc2VjYXJ0L2ltYWdlL3VwbG9hZC93XzE1MCxoXzMwMCxjX2ZpbGwvdjE2MTc0NDE5NzEvcmUzbGYwYmVveGRydzRoZHFiZWIucG5nXHJcbiAgICBjb25zdFtmaXJzdCxsYXN0XT11cmwuc3BsaXQoJy91cGxvYWQvJylcclxuICAgIHJldHVybiBmaXJzdCtgL3VwbG9hZC93XyR7d2lkdGh9LGhfJHtoZWlnaHR9LGNfZmlsbC9gK2xhc3RcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge3RoZW1lR2V0fSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vYmlsZUNhcm91c2VsRHJvcGRvd24gPSBzdHlsZWQuZGl2YFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTBweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgbWFyZ2luLXRvcDogNzJweDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjMwMCcsICcjZjRmNGY0Jyl9O1xyXG5gO1xyXG5cclxuY29uc3QgTWFpbkNvbnRlbnRBcmVhID0gc3R5bGVkLm1haW5gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuMjAwJywgJyNmN2Y3ZjcnKX07XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICB0cmFuc2l0aW9uOiBwYWRkaW5nLXJpZ2h0IDAuMzVzIGVhc2UtaW4tb3V0O1xyXG5gO1xyXG5cclxuY29uc3QgU2lkZWJhclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIHdpZHRoOiAyODBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAzMHB4IDMwcHggNTBweDtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDMwcHggNy41cHggMTAwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweCA1MHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjdweCkgYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4IDUwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAub2ZmZXItc2xpZGVyIHtcclxuICAgIHBhZGRpbmc6IDAgMCAzMHB4IDMwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgT2ZmZXJTZWN0aW9uID0gc3R5bGVkLmRpdjx7bGVzc1BhZGRpbmc/OmJvb2xlYW59PmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAgICR7cHJvcHMgPT4gcHJvcHMubGVzc1BhZGRpbmcgPyBcIjMwcHggNjBweCAwIDYwcHhcIiA6IFwiNjBweCA2MHB4IDAgNjBweFwifTtcclxuYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS41MDAnLCAnI2YxZjFmMScpfTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICAucHJldkJ1dHRvbiB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLm5leHRCdXR0b24ge1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgIC5wcmV2QnV0dG9uIHtcclxuICAgICAgbGVmdDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uZXh0QnV0dG9uIHtcclxuICAgICAgcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnhsJywgJzI0Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgcGFkZGluZzogMHB4IDIwcHggMjBweDtcclxuICBtYXJnaW46IDUwcHggMTBweCAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RzUm93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjIwMCcsICcjZjdmN2Y3Jyl9O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNy41cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC03LjVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdHNDb2wgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDAgMCAyMCU7XHJcbiAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE2NTBweCkge1xyXG4gICAgZmxleDogMCAwIDI1JTtcclxuICAgIG1heC13aWR0aDogMjUlO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzMyU7XHJcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMlO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogODk5cHgpIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgZmxleDogMCAwIDUwJTtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmctbGVmdDogNy41cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3LjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmbGV4OiAwIDAgNTAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDkwcHgpIHtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBIZWFkZXJTZWN0aW9uLFxyXG4gICAgTWFpbkNvbnRlbnRBcmVhLFxyXG4gICAgU2lkZWJhclNlY3Rpb24sXHJcbiAgICBDb250ZW50U2VjdGlvbixcclxuICAgIE9mZmVyU2VjdGlvbixcclxuICAgIEhlYWRpbmcsXHJcbiAgICBQcm9kdWN0c0NvbCxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHEvcmV1c2UtbW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0eWxlZC1zeXN0ZW0vY3NzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvcy1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsaWdodC10b2FzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm92ZXJsYXlzY3JvbGxiYXJzLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvbnRlbnQtbG9hZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW11bHRpLWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwcmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdGlja3lub2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9