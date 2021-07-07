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
      width: ${props => props.size};
      
    }
  .active {
    color: #54C5C6;
  }
  .inActive {
    color: black;
  }
`;

const StarRating = ({
  rating,
  size
}) => {
  let active = Array.apply(null, {
    length: rating
  });
  let inActive = Array.apply(null, {
    length: 5 - rating
  });
  const starSize = size ? size : '22px';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RatingContainer, {
    size: starSize,
    children: [active.map(num => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_Star__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: 'active'
    }, num, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }, undefined)), inActive.map(num => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_Star__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: 'inActive'
    }, num, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 35
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
 // @ts-nocheck

const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div({
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
});

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











const CartPopUp = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../features/cart/cart-popup */ "./src/features/cart/cart-popup.tsx")), {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ob29rcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9BcnJvd0Ryb3BEb3duLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL0Fycm93TmV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9BcnJvd1ByZXYudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvQ2FydEljb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvQ2F0ZWdvcnlJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL1BsdXNNaW51cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9TdGFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9tb3Rpb24vb2ZmZXItMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvbW90aW9uL29mZmVyLTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3Byb21vdGlvbi9vZmZlci0zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL21lbnUvbGVmdC1tZW51L0xlZnRNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL21lbnUvbGVmdC1tZW51L0xlZnRNZW51U3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9oZWFkZXIvc2lkZWJhci9zaWRlYmFyLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL3NpZGViYXIvQ2F0ZWdvcnlTaWRlYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvbG9nby9sb2dvLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvbG9nby9sb2dvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvbmF2LWxpbmsvbmF2LWxpbmsudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9wb3BvdmVyL3BvcG92ZXIuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9wb3BvdmVyL3BvcG92ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9wb3BvdmVyL3VzZU9uQ2xpY2tPdXRzaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9zdG9yZS1uYXYvc3RvcmUtbmF2LnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvc3RvcmUtbmF2L3N0b3JlLW5hdi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L3RyZWUtbWVudS90cmVlLW1lbnUuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC90cmVlLW1lbnUvdHJlZS1tZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PdGhlcnMvRmVhdHVyZWQvRmVhdHVyZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9ib3gudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9idXR0b24vYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PdGhlcnMvY2Fyb3VzZWwvY2Fyb3VzZWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9pbWFnZS9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3RoZXJzL2ltYWdlL3Byb2R1Y3QtcGxhY2Vob2xkZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3RoZXJzL3Nlby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3RoZXJzL3N2Zy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9TdGFyUmF0aW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2NhcmQvUHJvZHVjdEl0ZW0udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvY2FyZC9wcm9kdWN0LWNhcmQuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvZ3JpZC9Qcm9kdWN0R3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9ncmlkL1Byb2R1Y3RHcmlkU3R5bGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2dyaWQvYm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2dyaWQvbG9hZG1vcmUtYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TY3JvbGxiYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvY291bnRlci9jb3VudGVyLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NvdW50ZXIvY291bnRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRDdXJyZW5jeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL2h0dHBJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlRmV0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvZGVmaW5lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2l0ZU9mZmVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2FydFV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3BhZ2VzLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkcS9yZXVzZS1tb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHlsZWQtc3lzdGVtL2Nzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3MtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsaWdodC10b2FzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib3ZlcmxheXNjcm9sbGJhcnMtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvbnRlbnQtbG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdGlja3lub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVzaXplLW9ic2VydmVyLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtc3lzdGVtXCIiXSwibmFtZXMiOlsicHJlZmV0Y2hlZCIsInJvdXRlciIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwiY29uc29sZSIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJwYWdlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJzaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsInVzZVByZXZpb3VzIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInVzZU1lYXN1cmUiLCJib3VuZHMiLCJ1c2VTdGF0ZSIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsInJvIiwiUmVzaXplT2JzZXJ2ZXIiLCJjb250ZW50UmVjdCIsImRpc2Nvbm5lY3QiLCJBcnJvd0Ryb3BEb3duIiwiQXJyb3dOZXh0IiwiQXJyb3dQcmV2IiwiQ2FydEljb24iLCJDYXRlZ29yeUljb24iLCJQbHVzIiwiY29sb3IiLCJNaW51cyIsIlN0YXJJY29uIiwiY2xhc3NOYW1lIiwiTGVmdE1lbnUiLCJsb2dvIiwidXNlUm91dGVyIiwiTGVmdE1lbnVCb3giLCJzdHlsZWQiLCJkaXYiLCJNYWluTWVudSIsIkljb25XcmFwcGVyIiwic3BhbiIsIk1lbnVJdGVtIiwiYnV0dG9uIiwidGhlbWVHZXQiLCJTZWxlY3RlZEl0ZW0iLCJJY29uIiwiQXJyb3ciLCJGYWRlIiwia2V5ZnJhbWVzIiwiUG9wb3ZlcldyYXBwZXIiLCJSZXF1ZXN0TWVkaWNpbmUiLCJTaWRlYmFyV3JhcHBlciIsIkNhdGVnb3J5V3JhcHBlciIsIlRyZWVXcmFwcGVyIiwiUG9wb3ZlckhhbmRsZXIiLCJMb2FkaW5nIiwiU2lkZWJhckNhdGVnb3J5IiwiZGV2aWNlVHlwZSIsIm1vYmlsZSIsInRhYmxldCIsImRlc2t0b3AiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaXNMb2FkaW5nIiwidXNlRmV0Y2giLCJBUElfQkFTRV9VUkwiLCJzZXRDYXRlZ29yeURhdGEiLCJzZWxlY3RlZFF1ZXJpZXMiLCJjYXRlZ29yeSIsInN1YkNhdGVnb3J5Iiwib25DYXRlZ29yeUNsaWNrIiwic2x1ZyIsInBhcmVudCIsInR5cGUiLCJyZXN0IiwiTG9nb0JveCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImN1cnNvciIsIm1yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIkxvZ29JbWFnZSIsImltZyIsIkxvZ28iLCJpbWFnZVVybCIsImFsdCIsIk5hdkxpbmsiLCJsYWJlbCIsImljb24iLCJpY29uQ2xhc3MiLCJkeW5hbWljIiwiaXNDdXJyZW50UGF0aCIsIndpdGhSb3V0ZXIiLCJQb3BvdmVyIiwiZGlyZWN0aW9uIiwic2V0U3RhdGUiLCJhZGRBbGxDbGFzc2VzIiwiaGFuZGxlVG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlRG9jdW1lbnRDbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlT25DbGlja091dHNpZGUiLCJqb2luIiwibGlzdGVuZXIiLCJjb250YWlucyIsIlN0b3JlTmF2V3JhcHBlciIsIlN0b3JlTmF2TGlua3MiLCJTdG9yZU5hdiIsImxvZyIsImluZGV4IiwiSGVhZGVyIiwiaGVhZGVyIiwiZGVwdGgiLCJtYXJnaW5Cb3R0b20iLCJvcGVuIiwidHJhbnNpdGlvbiIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNmb3JtIiwib3V0bGluZSIsIm1hcmdpblJpZ2h0Iiwic3ZnIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsImZsZXhTaHJpbmsiLCJUaXRsZSIsIkNvbnRlbnQiLCJhbmltYXRlZCIsIndpbGxDaGFuZ2UiLCJib3JkZXJMZWZ0IiwiRnJhbWUiLCJwYWRkaW5nTGVmdCIsInBvc2l0aW9uIiwib3ZlcmZsb3dYIiwiVHJlZSIsIm1lbW8iLCJkcm9wZG93biIsImRlZmF1bHRPcGVuIiwiaXNPcGVuIiwic2V0T3BlbiIsInByZXZpb3VzIiwiYmluZCIsInZpZXdIZWlnaHQiLCJvcGFjaXR5IiwidXNlU3ByaW5nIiwiZnJvbSIsInRvIiwiVHJlZU1lbnUiLCJhY3RpdmUiLCJzdWJPcHRpb24iLCJpbWFnZSIsIl9pZCIsImxlbmd0aCIsIlByb2R1Y3RDYXJkIiwic3NyIiwiRmVhdHVyZWQiLCJ0aXRsZSIsImN1cnJlbmN5Iiwic3ltYm9sIiwidXNlU2VsZWN0b3IiLCJzaG9wUmVkdWNlciIsImxvYWRpbmciLCJ1c2VBeGlvcyIsInNpdGVPZmZlcnMiLCJwcm9kdWN0IiwidGh1bWJJbWFnZSIsInByaWNlIiwiQm94IiwiYm94U2l6aW5nIiwibWluV2lkdGgiLCJtYXJnaW4iLCJjb21wb3NlIiwic3BhY2UiLCJsYXlvdXQiLCJTdHlsZWRCdXR0b24iLCJweCIsInB5IiwiYmciLCJhcHBlYXJhbmNlIiwidGV4dEFsaWduIiwidGV4dERlY29yYXRpb24iLCJmb250RmFtaWx5IiwiYm9yZGVyIiwidmFyaWFudCIsInZhcmlhbnRzIiwib3V0bGluZWQiLCJib3JkZXJDb2xvciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJzZWxlY3QiLCJsaW5lSGVpZ2h0IiwicHJvcCIsImJpZyIsInNtYWxsIiwicm90YXRlIiwiU3Bpbm5lciIsIkJ1dHRvbiIsImZvcndhcmRSZWYiLCJCdXR0b25QcmV2IiwiQnV0dG9uTmV4dCIsIkJ1dHRvbkdyb3VwV3JhcHBlciIsIlByZXZCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsIk5leHRCdXR0b24iLCJCdXR0b25Hcm91cCIsIm5leHQiLCJDdXN0b21DYXJvdXNlbCIsImF1dG9QbGF5IiwiaW5maW5pdGUiLCJjdXN0b21MZWZ0QXJyb3ciLCJjdXN0b21SaWdodEFycm93IiwiaXRlbUNsYXNzIiwiaXNSdGwiLCJsYXB0b3AiLCJ0diIsIm1pbmlUYWJsZXQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiaW1nU3JjIiwiUGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlciIsIkltYWdlIiwidW5sb2FkZXIiLCJsb2FkZXIiLCJzdHlsZSIsIlN1Z2dlc3Rpb25Mb2FkaW5nIiwiRmVhdHVyZWRMb2FkaW5nIiwiUG9zdExvYWRlciIsIkNhdGVnb3J5IiwiQ2F0ZWdvcnlMb2FkZXIiLCJTaWRlYmFyTW9iaWxlTG9hZGVyIiwiU2lkZWJhckxvYWRlciIsIkl0ZW1Mb2FkZXIiLCJDYXRlZ29yeU1vYmlsZSIsIlNFTyIsImRlc2NyaXB0aW9uIiwiY2Fub25pY2FsIiwianMiLCJTdmciLCJzaXplIiwiUmF0aW5nQ29udGFpbmVyIiwiU3RhclJhdGluZyIsInJhdGluZyIsImFwcGx5IiwiaW5BY3RpdmUiLCJzdGFyU2l6ZSIsIm51bSIsInNhbGVQcmljZSIsImRpc2NvdW50SW5QZXJjZW50IiwiY2FydFN0YXRlIiwiY2FydFJlZHVjZXIiLCJoYW5kbGVBZGRDbGljayIsImFkZFRvQ2FydCIsImN1cnJlbmN5RGV0YWlscyIsImhhbmRsZVJlbW92ZUNsaWNrIiwiY2FydFF1YW50aXR5IiwiZ2V0SXRlbUNhcnRRdHkiLCJDb252ZXJ0Q3VycmVuY3kiLCJTdHlsZWRCb3giLCJQcm9kdWN0Q2FyZFdyYXBwZXIiLCJQcm9kdWN0SW1hZ2VXcmFwcGVyIiwiU2FsZVRhZyIsIkRpc2NvdW50UGVyY2VudCIsIlByb2R1Y3RJbmZvIiwiQnV0dG9uVGV4dCIsIkJvb2tJbWFnZVdyYXBwZXIiLCJCb29rSW5mbyIsIlByb2R1Y3ROYW1lIiwiQXV0aG9ySW5mbyIsIlByaWNlV3JhcHBlciIsIlByaWNlIiwiRGlzY291bnRlZFByaWNlIiwiQm9va0NhcmRXcmFwcGVyIiwiRm9vZENhcmRXcmFwcGVyIiwiRm9vZEltYWdlV3JhcHBlciIsIlByb2R1Y3RNZXRhIiwiRGVsaXZlcnlPcHQiLCJEdXJhdGlvbiIsIlByb2R1Y3RHcmlkIiwibG9hZE1vcmUiLCJmZXRjaExpbWl0Iiwic2V0TG9hZGluZyIsImNhdGVnb3J5UXVlcnkiLCJzdWJjYXRlZ29yeVF1ZXJ5IiwiaGFuZGxlTG9hZE1vcmUiLCJyZW5kZXJDYXJkIiwiaGFzTW9yZSIsIkdyaWQiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImZsZXhib3giLCJzeXN0ZW1Dc3MiLCJib3JkZXJUb3AiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJTY3JvbGxiYXIiLCJzY3JvbGxiYXJzIiwiYXV0b0hpZGUiLCJDb3VudGVyQm94IiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiZmxleERpcmVjdGlvbiIsImxpZ2h0SG9yaXpvbnRhbCIsImxpZ2h0VmVydGljYWwiLCJDb3VudGVyQnV0dG9uIiwiQ291bnRlclZhbHVlIiwicG9pbnRlckV2ZW50cyIsImRpc3BsYXlOYW1lIiwiZGVmYXVsdFByb3BzIiwiQ291bnRlciIsIm9uRGVjcmVtZW50Iiwib25JbmNyZW1lbnQiLCJjb252ZXJ0ZWRQcmljZSIsImN1cnJlbmN5RGF0YSIsInJhdGUiLCJ0b0ZpeGVkIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicmVxdWVzdEhhbmRsZXIiLCJjb25maWciLCJ0aW1lb3V0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsInJlc3BvbnNlIiwidW5kZWZpbmVkIiwiaXNDYW5jZWwiLCJtZW1TdG9yZSIsImF4aW9zT3B0aW9ucyIsInNldERhdGEiLCJzZXRJc0xvYWRpbmciLCJzZXRFcnJvciIsInNob3VsZFJlZmV0Y2giLCJyZUZldGNoIiwidW5tb3VudGVkIiwic291cmNlIiwiQ2FuY2VsVG9rZW4iLCJnZXREYXRhIiwiaHR0cENvbmZpZyIsImNhbmNlbFRva2VuIiwidG9rZW4iLCJodHRwIiwiY2FjaGUiLCJDYXJ0UG9wVXAiLCJUaXRsZUNvbnRhaW5lciIsIkhvbWUiLCJjYXRlZ29yeURhdGEiLCJQcm9kdWN0c0dyaWRUZXh0IiwiY2F0ZWdvcnlPYmplY3QiLCJmaW5kIiwiU3ViQ2F0ZWdvcnkiLCJzdWJDYXRlZ29yeU9iamVjdCIsImlzUXVlcnlpbmciLCJxdWFudGl0eSIsIkNBUlQiLCJBRERfVE9fQ0FSVCIsInJlbW92ZUZyb21DYXJ0IiwiY2FydElkIiwiUkVNT1ZFX0ZST01fQ0FSVCIsInJlbW92ZUFsbEZyb21DYXJ0IiwiUkVNT1ZFX0FMTF9GUk9NX0NBUlQiLCJkZWNyZWFzZVF1YW50aXR5Q2FydCIsIkRFQ1JFQVNFX1FVQU5USVRZX0NBUlQiLCJpbmNyZWFzZVF1YW50aXR5Q2FydCIsIklOQ1JFQVNFX1FVQU5USVRZX0NBUlQiLCJzZXRTb3J0Iiwic29ydFR5cGUiLCJTSE9QIiwiU0VUX1NPUlQiLCJzZXRTdWJDYXRlZ29yeSIsIlNFVF9TVUJDQVRFR09SWSIsInNldENhdGVnb3J5IiwiU0VUX0NBVEVHT1JZIiwic2V0Q3VycmVuY3kiLCJTRVRfQ1VSUkVOQ1kiLCJzZXREZWxpdmVyeUFkZHJlc3MiLCJhZGRyZXNzIiwiU0VUX0FERFJFU1MiLCJzZXRCaWxsaW5nIiwiYmlsbGluZyIsIlNFVF9CSUxMSU5HIiwic2V0Q0FSRCIsImNhcmQiLCJTRVRfQ0FSRCIsInNldEN1cnJlbmN5RGF0YSIsIlNFVF9DVVJSRU5DWV9EQVRBIiwiU0VUX0NBVEVHT1JZX0RBVEEiLCJHTE9CQUwiLCJTRVRfTEFOR1VBR0UiLCJTRVRfU0VBUkNIIiwiV0lTSExJU1QiLCJBRERfVE9fV0lTSExJU1QiLCJSRU1PVkVfRlJPTV9XSVNITElTVCIsIkZPUk0iLCJTRVRfQ1VSUkVOVF9GT1JNIiwiQVVUSCIsIkxPR19JTiIsIkxPR19JTl9FUlJPUiIsIlNJR05fVVBfRVJST1IiLCJTSUdOX1VQIiwiTE9HX09VVCIsIkxPQURfVVNFUiIsIkxPQURfVVNFUl9GQUlMIiwiT1JERVJfU1VDQ0VTUyIsIk9SREVSX1NVQ0NFU1NfRkFJTCIsIk9mZmVyT25lIiwiT2ZmZXJUd28iLCJPZmZlclRocmVlIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsImFyciIsInRvdGFsIiwiZm9yRWFjaCIsImRpc2NvdW50IiwiaXNJbkNhcnQiLCJzb21lIiwidHJhbnNmb3JtQ2xvdWRpbmFyeUltYWdlIiwiZmlyc3QiLCJsYXN0Iiwic3BsaXQiLCJNb2JpbGVDYXJvdXNlbERyb3Bkb3duIiwiSGVhZGVyU2VjdGlvbiIsIk1haW5Db250ZW50QXJlYSIsIm1haW4iLCJTaWRlYmFyU2VjdGlvbiIsIkNvbnRlbnRTZWN0aW9uIiwiT2ZmZXJTZWN0aW9uIiwibGVz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OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKVxuICB9XG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCAob3B0aW9ucyBhcyBhbnkpLl9oXG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGxvY2FsZVxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBBbGwgY29uZmlndXJlZCBsb2NhbGVzXG4gICAqL1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmVkIGRlZmF1bHQgbG9jYWxlXG4gICAqL1xuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogc3RyaW5nW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBhZnRlckludGVyYWN0aXZlPzogc3RyaW5nW107IGJlZm9yZUludGVyYWN0aXZlPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZGlzYWJsZU9wdGltaXplZExvYWRpbmc/OiBib29sZWFuXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IFByZXZpZXdEYXRhXG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tIFwicmVzaXplLW9ic2VydmVyLXBvbHlmaWxsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWU6IGFueSkge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB2b2lkIChyZWYuY3VycmVudCA9IHZhbHVlKSwgW3ZhbHVlXSk7XHJcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVhc3VyZSgpIHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbYm91bmRzLCBzZXRdID0gdXNlU3RhdGU8YW55Pih7IGxlZnQ6IDAsIHRvcDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTtcclxuICBjb25zdCBbcm9dID0gdXNlU3RhdGUoXHJcbiAgICAoKSA9PiBuZXcgUmVzaXplT2JzZXJ2ZXIoKFtlbnRyeV0pID0+IHNldChlbnRyeS5jb250ZW50UmVjdCkpXHJcbiAgKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7IC8vIEB0cy1pZ25vcmVcclxuICAgICAgcm8ub2JzZXJ2ZShyZWYuY3VycmVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gcm8uZGlzY29ubmVjdCgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW3sgcmVmIH0sIGJvdW5kc107XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IEFycm93RHJvcERvd24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICB3aWR0aD0nMTAnXHJcbiAgICAgIGhlaWdodD0nNSdcclxuICAgICAgdmlld0JveD0nMCAwIDEwIDUnXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZGF0YS1uYW1lPSdQYXRoIDIwMzAnXHJcbiAgICAgICAgZD0nTTAsNjMuNzVsNSw1LDUtNVonXHJcbiAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMCAtNjMuNzUpJ1xyXG4gICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBBcnJvd05leHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzIwJz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPSdNMjk0LjEgMjU2TDE2NyAxMjljLTkuNC05LjQtOS40LTI0LjYgMC0zMy45czI0LjYtOS4zIDM0IDBMMzQ1IDIzOWM5LjEgOS4xIDkuMyAyMy43LjcgMzMuMUwyMDEuMSA0MTdjLTQuNyA0LjctMTAuOSA3LTE3IDdzLTEyLjMtMi4zLTE3LTdjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDEyNy0xMjcuMXonXHJcbiAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IEFycm93UHJldiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nMjAnPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9J00yMTcuOSAyNTZMMzQ1IDEyOWM5LjQtOS40IDkuNC0yNC42IDAtMzMuOS05LjQtOS40LTI0LjYtOS4zLTM0IDBMMTY3IDIzOWMtOS4xIDkuMS05LjMgMjMuNy0uNyAzMy4xTDMxMC45IDQxN2M0LjcgNC43IDEwLjkgNyAxNyA3czEyLjMtMi4zIDE3LTdjOS40LTkuNCA5LjQtMjQuNiAwLTMzLjlMMjE3LjkgMjU2eidcclxuICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTdmcgfSBmcm9tICdAL2NvbXBvbmVudHMvT3RoZXJzL3N2Zyc7XHJcbmV4cG9ydCBjb25zdCBDYXJ0SWNvbiA9IChwcm9wczogSlNYLkludHJpbnNpY0F0dHJpYnV0ZXMgJiB7IFt4OiBzdHJpbmddOiBhbnk7IHNpemU/OiBudW1iZXIgfCB1bmRlZmluZWQ7IH0pID0+IChcclxuICA8U3ZnIHsuLi5wcm9wc30gd2lkdGg9XCIxNC40XCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDE0LjQgMTJcIj5cclxuICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDEyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjg4IC00MTMuODkpXCI+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNTRcIlxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIGQ9XCJNMjk4LjcsNDE4LjI4OWwtMi45MDYtNC4xNDhhLjgzNS44MzUsMCwwLDAtLjUyOC0uMjUxLjYwNy42MDcsMCwwLDAtLjUyOS4yNTFsLTIuOTA1LDQuMTQ4aC0zLjE3YS42MDkuNjA5LDAsMCwwLS42NjEuNjI1di4xOTFsMS42NTEsNS44NGExLjMzNiwxLjMzNiwwLDAsMCwxLjI1NS45NDVoOC41ODhhMS4yNjEsMS4yNjEsMCwwLDAsMS4yNTQtLjk0NWwxLjY1MS01Ljg0di0uMTkxYS42MDkuNjA5LDAsMCwwLS42NjEtLjYyNVptLTUuNDE5LDAsMS45ODQtMi43NjcsMS45OCwyLjc2N1ptMS45ODQsNS4wMjRhMS4yNTgsMS4yNTgsMCwxLDEsMS4zMTktMS4yNTgsMS4zLDEuMywwLDAsMS0xLjMxOSwxLjI1OFptMCwwXCJcclxuICAgICAgLz5cclxuICAgIDwvZz5cclxuICA8L1N2Zz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5SWNvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgIHdpZHRoPScxNCdcclxuICAgICAgaGVpZ2h0PScxNCdcclxuICAgICAgdmlld0JveD0nMCAwIDE0IDE0J1xyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGRhdGEtbmFtZT0nUGF0aCAyMDI5J1xyXG4gICAgICAgIGQ9J00xMy41NjMsNy44NzZIOC4zMTNhLjQzNy40MzcsMCwwLDAtLjQzNy40Mzd2NS4yNUEuNDM3LjQzNywwLDAsMCw4LjMxMywxNGg1LjI1QS40MzcuNDM3LDAsMCwwLDE0LDEzLjU2NFY4LjMxNEEuNDM3LjQzNywwLDAsMCwxMy41NjMsNy44NzZabTAtNy44NzVIOC4zMTNhLjQzNy40MzcsMCwwLDAtLjQzNy40Mzd2NS4yNWEuNDM3LjQzNywwLDAsMCwuNDM3LjQzN2g1LjI1QS40MzcuNDM3LDAsMCwwLDE0LDUuNjg4Vi40MzhBLjQzNy40MzcsMCwwLDAsMTMuNTYzLDBaTTUuNjg3LDBILjQzN0EuNDM4LjQzOCwwLDAsMCwwLC40Mzh2NS4yNWEuNDM3LjQzNywwLDAsMCwuNDM3LjQzN2g1LjI1YS40MzcuNDM3LDAsMCwwLC40MzctLjQzN1YuNDM4QS40MzguNDM4LDAsMCwwLDUuNjg3LDBabTAsNy44NzVILjQzN0EuNDM3LjQzNywwLDAsMCwwLDguMzE0djUuMjVBLjQzNy40MzcsMCwwLDAsLjQzNywxNGg1LjI1YS40MzcuNDM3LDAsMCwwLC40MzctLjQzN1Y4LjMxNEEuNDM3LjQzNywwLDAsMCw1LjY4Nyw3Ljg3NlonXHJcbiAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMCAtMC4wMDEpJ1xyXG4gICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIFNWRyBwbHVzIGljb25cclxuZXhwb3J0IGNvbnN0IFBsdXMgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgd2lkdGggPSAnMTJweCcsXHJcbiAgaGVpZ2h0ID0gJzEycHgnLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTIgMTJcIlxyXG4gICAgPlxyXG4gICAgICA8Z1xyXG4gICAgICAgIGlkPVwiR3JvdXBfMzM1MVwiXHJcbiAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMzM1MVwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMzY3IC0xOTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxyZWN0XHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNTIwXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTJcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMlwiXHJcbiAgICAgICAgICByeD1cIjFcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzNjcgMTk1KVwiXHJcbiAgICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxyZWN0XHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNTIxXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTJcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMlwiXHJcbiAgICAgICAgICByeD1cIjFcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzNzQgMTkwKSByb3RhdGUoOTApXCJcclxuICAgICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBTVkcgbWludXMgaWNvblxyXG5leHBvcnQgY29uc3QgTWludXMgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgd2lkdGggPSAnMTJweCcsXHJcbiAgaGVpZ2h0ID0gJzJweCcsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD1cIjAgMCAxMiAyXCJcclxuICAgID5cclxuICAgICAgPHJlY3RcclxuICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNTIyXCJcclxuICAgICAgICB3aWR0aD1cIjEyXCJcclxuICAgICAgICBoZWlnaHQ9XCIyXCJcclxuICAgICAgICByeD1cIjFcIlxyXG4gICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IFN0YXJJY29uOlJlYWN0LkZDPHtjbGFzc05hbWU6c3RyaW5nfT4gPSAoe2NsYXNzTmFtZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcclxuICAgICAgICAgICAgZGF0YS1pY29uPVwic3RhclwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTkuMyAxNy44TDE5NCAxNTAuMiA0Ny45IDE3MS41Yy0yNi4yIDMuOC0zNi43IDM2LjEtMTcuNyA1NC42bDEwNS43IDEwMy0yNSAxNDUuNWMtNC41IDI2LjMgMjMuMiA0NiA0Ni40IDMzLjdMMjg4IDQzOS42bDEzMC43IDY4LjdjMjMuMiAxMi4yIDUwLjktNy40IDQ2LjQtMzMuN2wtMjUtMTQ1LjUgMTA1LjctMTAzYzE5LTE4LjUgOC41LTUwLjgtMTcuNy01NC42TDM4MiAxNTAuMiAzMTYuNyAxNy44Yy0xMS43LTIzLjYtNDUuNi0yMy45LTU3LjQgMHpcIj5cclxuXHJcbiAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJJY29uIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL29mZmVyLTEtZTk2ZDkwNGI5MGM3ZTBiZjNlNzQ1NzRhNmU1YWE2ODQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL29mZmVyLTItZmFmOWI0MWNmYzY4ZGNjNmVlYTJhNmQ3Y2QzNTE3YjYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL29mZmVyLTMtNjU1NjRhZTY2YjI3YjRiZGRhMTdmOTQxZGQ3ZTBhYTQucG5nXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vLi4vbG9nby9sb2dvJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gICAgTGVmdE1lbnVCb3gsXHJcbn0gZnJvbSAnLi9MZWZ0TWVudVN0eWxlJztcclxuaW1wb3J0IENhdGVnb3J5U2VhcmNoU3dpdGNoZXIgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL21lbnUvbGVmdC1tZW51L0NhdGVnb3J5U2VhcmNoU3dpdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeUljb246UmVhY3QuRkM8e2xpbms6c3RyaW5nLGhlaWdodDpzdHJpbmcsd2lkdGg6c3RyaW5nfT4gPSAoeyBsaW5rLGhlaWdodCx3aWR0aCB9KSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICByZXR1cm4gbGluaz8gPGltZyBzcmM9e2xpbmt9IGFsdD1cIkljb25cIiBzdHlsZT17e3dpZHRoOndpZHRoLGhlaWdodDpoZWlnaHR9fS8+IDogbnVsbDtcclxufTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBsb2dvOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTGVmdE1lbnU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGxvZ28gfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExlZnRNZW51Qm94PlxyXG4gICAgICAgICAgICA8TG9nb1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw9e2xvZ299XHJcbiAgICAgICAgICAgICAgICBhbHQ9eydTaG9wIExvZ28nfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0xlZnRNZW51Qm94PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmV4cG9ydCBjb25zdCBMZWZ0TWVudUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXNocmluazogMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluTWVudSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLnNwYW5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51SXRlbSA9IHN0eWxlZC5idXR0b25gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEycHggMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iYXNlJywgJzZweCcpfTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBzdmcge1xyXG4gICAgbWluLXdpZHRoOiAxNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTlweDtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgfVxyXG4gICYuY3VycmVudC1wYWdlIHtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlbGVjdGVkSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCd6JywgJyNmZmZmZmYnKX07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuNTAwJywgJyNmMWYxZjEnKX07XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgIGNvbG9yOiAjNGY0ZjU2O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJY29uID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiAxNnB4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQXJyb3cgPSBzdHlsZWQuc3BhbmBcclxuICB3aWR0aDogMTJweDtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuY29uc3QgRmFkZSA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvcG92ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucG9wb3Zlci1oYW5kbGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnBvcG92ZXItY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmc6IDI1cHggMzVweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS41MDAnLCAnI2YxZjFmMScpfTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNhdGVnb3J5LWRyb3Bkb3duIHtcclxuICAgICAgYW5pbWF0aW9uOiAke0ZhZGV9IDAuNnM7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgICAgcGFkZGluZzogMjVweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUmVxdWVzdE1lZGljaW5lID0gc3R5bGVkLnNwYW5gXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGViYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAzNXB4IDAgNDVweCAwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMCA0MHB4IDBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDowLjM7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmVlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUG9wb3ZlckhhbmRsZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNXB4Jyl9IC0gMXB4KTtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkaW5nID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTVweCcpfSAtIDFweCk7XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcclxuaW1wb3J0IFBvcG92ZXIgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dC9wb3BvdmVyL3BvcG92ZXInO1xyXG5pbXBvcnQgeyBBcnJvd0Ryb3BEb3duIH0gZnJvbSAnQC9hc3NldHMvaWNvbnMvQXJyb3dEcm9wRG93bic7XHJcbmltcG9ydCB7IENhdGVnb3J5SWNvbiB9IGZyb20gJ0AvYXNzZXRzL2ljb25zL0NhdGVnb3J5SWNvbic7XHJcbmltcG9ydCB7XHJcbiAgU2lkZWJhck1vYmlsZUxvYWRlcixcclxuICBTaWRlYmFyTG9hZGVyLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cy9PdGhlcnMvcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXInO1xyXG5pbXBvcnQge1xyXG4gIENhdGVnb3J5V3JhcHBlcixcclxuICBUcmVlV3JhcHBlcixcclxuICBQb3BvdmVySGFuZGxlcixcclxuICBQb3BvdmVyV3JhcHBlcixcclxuICBTaWRlYmFyV3JhcHBlcixcclxufSBmcm9tICcuL0NhdGVnb3J5U2lkZWJhci5zdHlsZSc7XHJcbmltcG9ydCB7IFRyZWVNZW51IH0gZnJvbSAnQC9jb21wb25lbnRzL0xheW91dC90cmVlLW1lbnUvdHJlZS1tZW51JztcclxuaW1wb3J0IHVzZUZldGNoIGZyb20gXCJAL2hvb2tzL3VzZUZldGNoXCI7XHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSBmcm9tIFwiQC91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IHtTY3JvbGxiYXJ9IGZyb20gXCJAL2NvbXBvbmVudHMvU2Nyb2xsYmFyXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3NldENhdGVnb3J5RGF0YX0gZnJvbSBcIkAvcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9uc1wiO1xyXG5cclxudHlwZSBTaWRlYmFyQ2F0ZWdvcnlQcm9wcyA9IHtcclxuICBkZXZpY2VUeXBlOiB7XHJcbiAgICBtb2JpbGU6IGJvb2xlYW47XHJcbiAgICB0YWJsZXQ6IGJvb2xlYW47XHJcbiAgICBkZXNrdG9wOiBib29sZWFuO1xyXG4gIH07XHJcbn07XHJcbmludGVyZmFjZSBzZWxlY3RlZFF1ZXJ5e1xyXG4gICAgY2F0ZWdvcnk6c3RyaW5nW118c3RyaW5nO1xyXG4gICAgc3ViQ2F0ZWdvcnk6c3RyaW5nW118c3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFNpZGViYXJDYXRlZ29yeTogUmVhY3QuRkM8U2lkZWJhckNhdGVnb3J5UHJvcHM+ID0gKHtkZXZpY2VUeXBlOiB7IG1vYmlsZSwgdGFibGV0LCBkZXNrdG9wIH19KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbZGF0YSwgaXNMb2FkaW5nXSA9IHVzZUZldGNoKGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL2NhdGVnb3J5L3N1YmApXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihkYXRhIT09bnVsbCl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldENhdGVnb3J5RGF0YShkYXRhLmRhdGEpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFtkYXRhXSlcclxuXHJcbiAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHJvdXRlcjtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRRdWVyaWVzOnNlbGVjdGVkUXVlcnk9e1xyXG4gICAgICBjYXRlZ29yeTpxdWVyeS5jYXRlZ29yeSxcclxuICAgICAgc3ViQ2F0ZWdvcnk6cXVlcnkuc3ViQ2F0ZWdvcnlcclxuICB9O1xyXG4gIGlmKGlzTG9hZGluZyl7XHJcbiAgICAgIGlmKG1vYmlsZXx8dGFibGV0KXtcclxuICAgICAgcmV0dXJuIDxTaWRlYmFyTW9iaWxlTG9hZGVyLz5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gPFNpZGViYXJMb2FkZXIgLz47XHJcbiAgfVxyXG5cclxuICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gPFNpZGViYXJMb2FkZXIgLz47XHJcbiAgICB9XHJcbiAgY29uc3Qgb25DYXRlZ29yeUNsaWNrID0gKHNsdWc6IHN0cmluZyxwYXJlbnQ6c3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB7IHR5cGUsIC4uLnJlc3QgfSA9IHF1ZXJ5O1xyXG4gICAgICBpZiAocGFyZW50KXtcclxuICAgICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7Y2F0ZWdvcnk6cGFyZW50LHN1YkNhdGVnb3J5OnNsdWcgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvJHt0eXBlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtjYXRlZ29yeTpwYXJlbnQsc3ViQ2F0ZWdvcnk6c2x1ZyB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lLFxyXG4gICAgICAgICAgcXVlcnk6IHtjYXRlZ29yeTpwYXJlbnQsc3ViQ2F0ZWdvcnk6c2x1ZyB9LFxyXG4gICAgICB9KTtcclxuICAgIH19XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICAgIGlmIChwYXJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyAgY2F0ZWdvcnk6IHNsdWcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvJHt0eXBlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgIGNhdGVnb3J5OiBzbHVnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcclxuICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgIGNhdGVnb3J5OiBzbHVnIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICBpZiAobW9iaWxlIHx8IHRhYmxldCkge1xyXG4gICAgICByZXR1cm4gPFNpZGViYXJNb2JpbGVMb2FkZXIgLz47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPFNpZGViYXJMb2FkZXIvPlxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgICA8Q2F0ZWdvcnlXcmFwcGVyPlxyXG4gICAgICAgIDxQb3BvdmVyV3JhcHBlcj5cclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgaGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlckhhbmRsZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlbGVjdCB5b3VyIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd0Ryb3BEb3duIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVySGFuZGxlcj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2F0ZWdvcnktcG9wb3ZlclwiXHJcbiAgICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8VHJlZU1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNhdGVnb3J5Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkUXVlcmllc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Qb3BvdmVyV3JhcHBlcj5cclxuXHJcbiAgICAgICAgPFNpZGViYXJXcmFwcGVyPlxyXG4gICAgICAgICAgPFN0aWNreSBlbmFibGVkPXt0cnVlfSB0b3A9ezExMH0gY2xhc3NOYW1lPXtcImxlZnRTaWRlQmFyXCJ9PlxyXG4gICAgICAgICAgICAgIDxTY3JvbGxiYXIgY2xhc3NOYW1lPSdzaWRlYmFyLXNjcm9sbGJhcic+XHJcbiAgICAgICAgICAgICAgPFRyZWVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICA8VHJlZU1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNhdGVnb3J5Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkUXVlcmllc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1RyZWVXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L1Njcm9sbGJhcj5cclxuICAgICAgICAgIDwvU3RpY2t5PlxyXG4gICAgICAgIDwvU2lkZWJhcldyYXBwZXI+XHJcbiAgICAgIDwvQ2F0ZWdvcnlXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyQ2F0ZWdvcnk7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XHJcbmV4cG9ydCBjb25zdCBMb2dvQm94ID0gc3R5bGVkLnNwYW4oXHJcbiAgY3NzKHtcclxuICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcclxuICAgIGZvbnRTaXplOiAyNixcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgbXI6IFswLCAyMCwgNDBdLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjhweCl7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyOHB4KXtcclxuICAgIG1heC13aWR0aDogMTEwcHg7XHJcbiAgfVxyXG5gXHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExvZ29Cb3gsIExvZ29JbWFnZSB9IGZyb20gJy4vbG9nby5zdHlsZSc7XHJcbmludGVyZmFjZSBMb2dvUHJvcHMge1xyXG4gIGltYWdlVXJsOiBzdHJpbmc7XHJcbiAgYWx0OiBzdHJpbmc7XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IExvZ286IFJlYWN0LkZDPExvZ29Qcm9wcz4gPSAoeyBpbWFnZVVybCwgYWx0LCBvbkNsaWNrIH0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2dvQm94IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICA8TGluayBocmVmPXsnLyd9ID5cclxuICAgICAgPExvZ29JbWFnZSBzcmM9e2ltYWdlVXJsfSBhbHQ9e2FsdH0gLz5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9Mb2dvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbnR5cGUgTmF2TGlua1Byb3BzID0ge1xyXG4gIHJvdXRlcjogYW55O1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGljb25DbGFzcz86IHN0cmluZztcclxuICBkeW5hbWljPzogYm9vbGVhbjtcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxufTtcclxuY29uc3QgSWNvbiA9IHN0eWxlZC5zcGFuYFxyXG4gIG1pbi13aWR0aDogMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgTmF2TGluazogUmVhY3QuU0ZDPE5hdkxpbmtQcm9wcz4gPSAoe1xyXG4gIGhyZWYsXHJcbiAgbGFiZWwsXHJcbiAgcm91dGVyLFxyXG4gIGljb24sXHJcbiAgY2xhc3NOYW1lLFxyXG4gIG9uQ2xpY2ssXHJcbiAgaWNvbkNsYXNzLFxyXG4gIGR5bmFtaWMsXHJcbn0pID0+IHtcclxuICBjb25zdCBpc0N1cnJlbnRQYXRoID0gcm91dGVyLnBhdGhuYW1lID09PSBocmVmIHx8IHJvdXRlci5hc1BhdGggPT09IGhyZWY7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ30+XHJcbiAgICAgIHtkeW5hbWljID8gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9eycvW3R5cGVdJ30gYXM9e2hyZWZ9PlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0N1cnJlbnRQYXRoID8gJyBjdXJyZW50LXBhZ2UnIDogJyd9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ljb24gPyA8SWNvbiBjbGFzc05hbWU9e2ljb25DbGFzc30+e2ljb259PC9JY29uPiA6ICcnfVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aXNDdXJyZW50UGF0aCA/ICcgY3VycmVudC1wYWdlJyA6ICcnfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpY29uID8gPEljb24gY2xhc3NOYW1lPXtpY29uQ2xhc3N9PntpY29ufTwvSWNvbj4gOiAnJ31cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTmF2TGluayk7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge3RoZW1lR2V0fSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgUG9wb3ZlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIC5wb3BvdmVyLWhhbmRsZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnBvcG92ZXItY29udGVudCB7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IGNhbGMoMTAwJSArIDE1cHgpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iYXNlJywgJzZweCcpfTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMjBweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMTQpO1xyXG4gICAgei1pbmRleDogOTk7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDAgOHB4IDlweCA4cHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX0gdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHRvcDogLThweDtcclxuICAgICAgbGVmdDogMTVweDtcclxuICAgICAgYm94LXNoYWRvdzogLTRweCAtNHB4IDhweCAtM3B4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4xNCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogSWYgZGlyZWN0aW9uIHByb3Agc2V0IHRvIHJpZ2h0ICovXHJcblxyXG4gICYucmlnaHQge1xyXG4gICAgLnBvcG92ZXItY29udGVudCB7XHJcbiAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcblxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlcldyYXBwZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VPbkNsaWNrT3V0c2lkZSBmcm9tICcuL3VzZU9uQ2xpY2tPdXRzaWRlJztcclxuaW1wb3J0IFBvcG92ZXJXcmFwcGVyIGZyb20gJy4vcG9wb3Zlci5zdHlsZSc7XHJcblxyXG50eXBlIFBvcG92ZXJQcm9wcyA9IHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgaGFuZGxlcjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBkaXJlY3Rpb24/OiAnbGVmdCcgfCAncmlnaHQnO1xyXG4gIGhhbmRsZVRvZ2dsZT86ICgpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBQb3BvdmVyOiBSZWFjdC5GQzxQb3BvdmVyUHJvcHM+ID0gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAvLyBQb3BvdmVyIFN0YXRlXHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIFJlZlxyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheVxyXG4gIGNvbnN0IGFkZEFsbENsYXNzZXM6IHN0cmluZ1tdID0gWydwb3BvdmVyLXdyYXBwZXInXTtcclxuXHJcbiAgLy8gY2xhc3NOYW1lIHByb3AgY2hlY2tpbmdcclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIC8vIEFkZCBkaXJlY3Rpb24gY2xhc3Mgb24gcG9wb3ZlciBjb250ZW50XHJcbiAgaWYgKGRpcmVjdGlvbikge1xyXG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGRpcmVjdGlvbik7XHJcbiAgfVxyXG5cclxuICAvLyBUb2dnbGUgUG9wb3ZlciBjb250ZW50XHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKGU6YW55KSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgc2V0U3RhdGUoKHN0YXRlKSA9PiAhc3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIC8vIEhhbmRsZSBkb2N1bWVudCBjbGlja1xyXG4gIGNvbnN0IGhhbmRsZURvY3VtZW50Q2xpY2sgPSAoZTogeyBzdG9wUHJvcGFnYXRpb246ICgpID0+IHZvaWQ7IH0pID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgaGFuZGxlVG9nZ2xlKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIEhhbmRsZSB3aW5kb3cgZXZlbnQgbGlzdGVuZXJcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRG9jdW1lbnRDbGljayk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEb2N1bWVudENsaWNrKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIC8vIENsb3NlIHBvcG92ZXIgb24gY2xpY2sgb3V0c2lkZVxyXG4gIHVzZU9uQ2xpY2tPdXRzaWRlKHJlZiwgKCkgPT4gc2V0U3RhdGUoKHN0YXRlKSA9PiBmYWxzZSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcblxyXG4gICAgICA8UG9wb3ZlcldyYXBwZXIgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX0gcmVmPXtyZWZ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wb3Zlci1oYW5kbGVyXCIgb25DbGljaz17aGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgIHtoYW5kbGVyfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzdGF0ZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wb3Zlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAge2NvbnRlbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXdyYXBcIiBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BvcG92ZXJXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlT25DbGlja091dHNpZGUocmVmLCBoYW5kbGVyKSB7XHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgY2xpY2tpbmcgcmVmJ3MgZWxlbWVudCBvciBkZXNjZW5kZW50IGVsZW1lbnRzXHJcbiAgICAgICAgaWYgKCFyZWYuY3VycmVudCB8fCByZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYW5kbGVyKGV2ZW50KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgLy8gQWRkIHJlZiBhbmQgaGFuZGxlciB0byBlZmZlY3QgZGVwZW5kZW5jaWVzXHJcbiAgICAvLyBJdCdzIHdvcnRoIG5vdGluZyB0aGF0IGJlY2F1c2UgcGFzc2VkIGluIGhhbmRsZXIgaXMgYSBuZXcgLi4uXHJcbiAgICAvLyAuLi4gZnVuY3Rpb24gb24gZXZlcnkgcmVuZGVyIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGVmZmVjdCAuLi5cclxuICAgIC8vIC4uLiBjYWxsYmFjay9jbGVhbnVwIHRvIHJ1biBldmVyeSByZW5kZXIuIEl0J3Mgbm90IGEgYmlnIGRlYWwgLi4uXHJcbiAgICAvLyAuLi4gYnV0IHRvIG9wdGltaXplIHlvdSBjYW4gd3JhcCBoYW5kbGVyIGluIHVzZUNhbGxiYWNrIGJlZm9yZSAuLi5cclxuICAgIC8vIC4uLiBwYXNzaW5nIGl0IGludG8gdGhpcyBob29rLlxyXG4gICAgW3JlZiwgaGFuZGxlcl1cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcblxyXG5jb25zdCBTdG9yZU5hdldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0b3JlTmF2TGlua3MgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIC5zdG9yZS1uYXYtbGluayB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNXB4Jyl9IC0gMXB4KTtcclxuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThDJyl9O1xyXG4gICAgICBwYWRkaW5nOiA1cHggOXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iYXNlJywgJzZweCcpfTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY3VycmVudC1wYWdlIHtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjEwMCcsICcjZjlmOWY5Jyl9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVOYXZXcmFwcGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3RvcmVOYXZXcmFwcGVyLCB7IFN0b3JlTmF2TGlua3MgfSBmcm9tICcuL3N0b3JlLW5hdi5zdHlsZSc7XHJcbmltcG9ydCB1c2VGZXRjaCBmcm9tIFwiQC9ob29rcy91c2VGZXRjaFwiO1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCBOYXZMaW5rIGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0L25hdi1saW5rL25hdi1saW5rXCI7XHJcbmltcG9ydCB7Q2F0ZWdvcnlNb2JpbGV9IGZyb20gXCJAL2NvbXBvbmVudHMvT3RoZXJzL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyXCI7XHJcblxyXG50eXBlIFN0b3JlTmF2UHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGl0ZW1zPzogYW55W107XHJcbn07XHJcblxyXG5jb25zdCBTdG9yZU5hdjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8U3RvcmVOYXZQcm9wcz4gPSAoe1xyXG4gIGNsYXNzTmFtZX0pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBpc0xvYWRpbmddPXVzZUZldGNoKGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL2NhdGVnb3J5L2ApXHJcbiAgICBpZihpc0xvYWRpbmcpe1xyXG4gICAgICAgICAgICByZXR1cm4gPENhdGVnb3J5TW9iaWxlLz5cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBpZighaXNMb2FkaW5nKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U3RvcmVOYXZXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgICAgIDxTdG9yZU5hdkxpbmtzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhPy5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0b3JlLW5hdi1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pYz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1N0b3JlTmF2TGlua3M+XHJcbiAgICAgICAgICAgIDwvU3RvcmVOYXZXcmFwcGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZU5hdjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcclxuaW1wb3J0IHsgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcjxhbnk+KFxyXG4gICAgKHByb3BzKSA9PlxyXG4gICAgICAgIGNzcyh7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kZXB0aCA9PT0gJ3BhcmVudCcgPyBbJ2Jhc2UnXSA6IFsnc20nXSxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ21lZGl1bScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogcHJvcHMuZGVwdGggPT09ICdwYXJlbnQnID8gMTIgOiAwLFxyXG4gICAgICAgICAgICBjb2xvcjpcclxuICAgICAgICAgICAgICAgIHByb3BzLmRlcHRoID09PSAncGFyZW50J1xyXG4gICAgICAgICAgICAgICAgICAgID8gcHJvcHMub3BlblxyXG4gICAgICAgICAgICAgICAgICAgID8gJ3ByaW1hcnkucmVndWxhcidcclxuICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LmJvbGQnXHJcbiAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy5vcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgPyAncHJpbWFyeS5yZWd1bGFyJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJ3RleHQucmVndWxhcicsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnMC4xNXMgZWFzZS1pbi1vdXQnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBwcm9wcy5kZXB0aCA9PT0gJ3BhcmVudCcgPyAnNXB4IDAnIDogJzVweCAxMHB4JyxcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogcHJvcHMuZGVwdGggPT09ICdjaGlsZCcgPyAnLTEwcHgnIDogbnVsbCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBwcm9wcy5kZXB0aCA9PT0gJ2NoaWxkJyA/ICdiYXNlJyA6IG51bGwsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgICAgICAgICAgIHByb3BzLmRlcHRoID09PSAnY2hpbGQnID8gcHJvcHMub3BlbiAmJiAnZ3JheS4yMDAnIDogbnVsbCxcclxuXHJcbiAgICAgICAgICAgICcudG9nZ2xlQnV0dG9uJzoge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLm9wZW4gPyAncHJpbWFyeS5yZWd1bGFyJyA6ICd0ZXh0LmJvbGQnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzAgNXB4JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzJyxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcHJvcHMub3BlbiA/ICdyb3RhdGUoOTBkZWcpJyA6ICcnLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcblxyXG4gICAgICAgICAgICAgICAgJy50b2dnbGVCdXR0b24nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgIHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLmRpdjxhbnk+KFxyXG4gICAgKHByb3BzKSA9PlxyXG4gICAgICAgIGNzcyh7XHJcbiAgICAgICAgICAgIHdpZHRoOiBwcm9wcy5kZXB0aCA9PT0gJ2NoaWxkJyA/IDEwIDogMzAsXHJcbiAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogcHJvcHMuZGVwdGggPT09ICdjaGlsZCcgPyAnOHB4JyA6IDE1LFxyXG5cclxuICAgICAgICAgICAgc3ZnOiB7XHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogcHJvcHMuZGVwdGggPT09ICdjaGlsZCcgPyAnMnB4JyA6ICdhdXRvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1nOiB7XHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogcHJvcHMuZGVwdGggPT09ICdjaGlsZCcgPyAnMnB4JyA6ICdhdXRvJyxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSksXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgZmxleFNocmluazogMCxcclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5zcGFuPHtkZXB0aDphbnl9PmBcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZSA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXNpemU6ICR7cHJvcHM9PnByb3BzLmRlcHRoPT09J2NoaWxkJz8nMTZweCc6XCIxOHB4XCJ9O1xyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQoYW5pbWF0ZWQuZGl2KSh7XHJcbiAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtLCBvcGFjaXR5LCBoZWlnaHQnLFxyXG4gICAgYm9yZGVyTGVmdDogMCxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRnJhbWUgPSBzdHlsZWQuZGl2PGFueT4oXHJcbiAgICAocHJvcHMpID0+XHJcbiAgICAgICAgY3NzKHtcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBwcm9wcy5kZXB0aCA9PT0gJ3BhcmVudCcgPyAxNSA6IDEwLFxyXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogcHJvcHMuZGVwdGggPT09ICdjaGlsZCcgPyAzMiA6IDAsXHJcbiAgICAgICAgfSksXHJcbiAgICB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcblxyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VQcmV2aW91cywgdXNlTWVhc3VyZX0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2hvb2tzJztcclxuaW1wb3J0IHt1c2VTcHJpbmcsIGFuaW1hdGVkfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xyXG5pbXBvcnQge0ZyYW1lLCBUaXRsZSwgQ29udGVudCwgSGVhZGVyLCBJY29uV3JhcHBlcn0gZnJvbSAnLi90cmVlLW1lbnUuc3R5bGUnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnQC9jb21wb25lbnRzL090aGVycy9idXR0b24vYnV0dG9uJztcclxuaW1wb3J0IHtBcnJvd05leHR9IGZyb20gJ0AvYXNzZXRzL2ljb25zL0Fycm93TmV4dCc7XHJcblxyXG5pbXBvcnQge0NhdGVnb3J5SWNvbn0gZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL21lbnUvbGVmdC1tZW51L0xlZnRNZW51XCI7XHJcblxyXG5jb25zdCBUcmVlID0gUmVhY3QubWVtbyhcclxuICAgICh7XHJcbiAgICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgICBuYW1lLFxyXG4gICAgICAgICBpY29uLFxyXG4gICAgICAgICAvLyBpc09wZW4sXHJcbiAgICAgICAgIG9uQ2xpY2ssXHJcbiAgICAgICAgIGRyb3Bkb3duLFxyXG4gICAgICAgICBkZXB0aCxcclxuICAgICAgICAgZGVmYXVsdE9wZW4gPSBmYWxzZSxcclxuICAgICB9OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGRlZmF1bHRPcGVuKTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRPcGVuKGRlZmF1bHRPcGVuKTtcclxuICAgICAgICB9LCBbZGVmYXVsdE9wZW5dKTtcclxuICAgICAgICBjb25zdCBwcmV2aW91cyA9IHVzZVByZXZpb3VzKGlzT3Blbik7XHJcbiAgICAgICAgY29uc3QgW2JpbmQsIHtoZWlnaHQ6IHZpZXdIZWlnaHR9XSA9IHVzZU1lYXN1cmUoKTtcclxuICAgICAgICBjb25zdCB7aGVpZ2h0LCBvcGFjaXR5LCB0cmFuc2Zvcm19ID0gdXNlU3ByaW5nPGFueT4oe1xyXG4gICAgICAgICAgICBmcm9tOiB7aGVpZ2h0OiAwLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgyMHB4LDAsMCknfSxcclxuICAgICAgICAgICAgdG86IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaXNPcGVuID8gdmlld0hlaWdodCA6IDAsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc09wZW4gPyAxIDogMCxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7aXNPcGVuID8gMCA6IDIwfXB4LDAsMClgLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnN0IEljb24gPSBpY29uID8gSWNvbnNbaWNvbl0gOiBkZXB0aCA9PT0gJ2NoaWxkJyA/IEljb25zWydNaW51cyddIDogbnVsbDtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZyYW1lIGRlcHRoPXtkZXB0aH0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIG9wZW49e2lzT3Blbn0gZGVwdGg9e2RlcHRofSBjbGFzc05hbWU9e2RlcHRofT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbldyYXBwZXIgZGVwdGg9e2RlcHRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5SWNvbiBsaW5rPXtpY29ufSBoZWlnaHQ9e1wiMjVweFwifSB3aWR0aD17XCIyNXB4XCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGUgb25DbGljaz17b25DbGlja30gZGVwdGg9e2RlcHRofT57bmFtZX08L1RpdGxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7ZHJvcGRvd24gPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFpc09wZW4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndG9nZ2xlQnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93TmV4dC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpc09wZW4gJiYgcHJldmlvdXMgPT09IGlzT3BlbiA/ICdhdXRvJyA6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3t0cmFuc2Zvcm19fSB7Li4uYmluZH0gY2hpbGRyZW49e2NoaWxkcmVufS8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvRnJhbWU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuKTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBjbGFzc05hbWU/OiBhbnk7XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBvbkNsaWNrOiAoc2x1Zzogc3RyaW5nLHBhcmVudD86c3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgYWN0aXZlPzoge1xyXG4gICAgICAgIGNhdGVnb3J5OnN0cmluZ1tdfHN0cmluZyxcclxuICAgICAgICBzdWJDYXRlZ29yeTpzdHJpbmdbXXxzdHJpbmdcclxuICAgIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBUcmVlTWVudTogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gKGNoaWxkcmVuOiBhbnksY2F0ZWdvcnk/OnN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBjaGlsZHJlbi5tYXAoKHN1Yk9wdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3ViT3B0aW9uLnN1YkNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViT3B0aW9uLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17c3ViT3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3N1Yk9wdGlvbj8uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoPSdjaGlsZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhzdWJPcHRpb24uaWQsY2F0ZWdvcnkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0T3Blbj17YWN0aXZlLnN1YkNhdGVnb3J5ID09PSBzdWJPcHRpb24uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUcmVlXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJPcHRpb24uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3N1Yk9wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGljb249e3N1Yk9wdGlvbi5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17IXN1Yk9wdGlvbi5zdWJDYXRlZ29yeS5sZW5ndGggPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGg9J3BhcmVudCdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHN1Yk9wdGlvbi5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wZW49e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUuY2F0ZWdvcnkgPT09IHN1Yk9wdGlvbi5pZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aGFuZGxlcihzdWJPcHRpb24uc3ViQ2F0ZWdvcnksc3ViT3B0aW9uLmlkKX1cclxuICAgICAgICAgICAgICAgIDwvVHJlZT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gPD57aGFuZGxlcihkYXRhPy5kYXRhKX08Lz47XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vY2Fyb3VzZWwvY2Fyb3VzZWxcIjtcclxuaW1wb3J0IHtzaXRlT2ZmZXJzfSBmcm9tIFwiQC9zaXRlT2ZmZXJzXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCJheGlvcy1ob29rc1wiO1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCB7RmVhdHVyZWRMb2FkaW5nfSBmcm9tIFwiQC9jb21wb25lbnRzL090aGVycy9wbGFjZWhvbGRlci9wbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RDYXJkID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9Qcm9kdWN0L2NhcmQvUHJvZHVjdEl0ZW1cIiksIHtcclxuICAgIHNzcjogZmFsc2UsXHJcbn0pO1xyXG50eXBlIFByb3BzID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGRldmljZVR5cGU6IHtcclxuICAgICAgICBtb2JpbGU6IGJvb2xlYW47XHJcbiAgICAgICAgdGFibGV0OiBib29sZWFuO1xyXG4gICAgICAgIGRlc2t0b3A6IGJvb2xlYW47XHJcbiAgICB9O1xyXG4gICAgcHJvcHM/OiBhbnk7XHJcbn07XHJcbmNvbnN0IEZlYXR1cmVkOiBSZWFjdC5GQzxQcm9wcz4gPSAoe2RldmljZVR5cGUsIHRpdGxlfSkgPT4ge1xyXG4gICAgY29uc3Qge2N1cnJlbmN5OntzeW1ib2x9fSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcclxuXHJcbiAgICBjb25zdCBbe2RhdGEsIGxvYWRpbmcsIGVycm9yfV0gPSB1c2VBeGlvcyhcclxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9wcm9kdWN0cy90b3BgXHJcbiAgICApXHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3twYWRkaW5nTGVmdDogXCIzMHB4XCJ9fT57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPEZlYXR1cmVkTG9hZGluZyBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfS8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMzBweFwifX0+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbCBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfSBkYXRhPXtzaXRlT2ZmZXJzfSBtb2JpbGU9ezEuNX0gdGFibGV0PXszfSBkZXNrdG9wPXs0LjV9IHR2PXs1LjV9IGxhcHRvcD17NH0gbWluaVRhYmxldD17Mn0gPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHRpdGxlPXtwcm9kdWN0LnRpdGxlfSBpbWFnZT17cHJvZHVjdC50aHVtYkltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3QucHJpY2V9IGtleT17cHJvZHVjdC5faWR9IHByb2R1Y3Q9e3Byb2R1Y3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBjb21wb3NlLCBzcGFjZSwgY29sb3IsIGxheW91dCB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXY8YW55PihcclxuICB7XHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIG1pbldpZHRoOiAwLFxyXG4gICAgbWFyZ2luOiAwLFxyXG4gIH0sXHJcbiAgY29tcG9zZShzcGFjZSwgY29sb3IsIGxheW91dClcclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xyXG5pbXBvcnQgeyBjb21wb3NlLCB2YXJpYW50LCBib3JkZXIsIHNwYWNlLCBsYXlvdXQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uKFxyXG4gIChwcm9wcykgPT5cclxuICAgIGNzcyh7XHJcbiAgICAgIHB4OiAnMTVweCcsXHJcbiAgICAgIHB5OiAwLFxyXG4gICAgICBmb250U2l6ZTogWydiYXNlJ10sXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgY3Vyc29yOiBwcm9wcy5kaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicsXHJcbiAgICAgIGNvbG9yOiBwcm9wcy5kaXNhYmxlZCA/ICd0ZXh0LmxpZ2h0JyA6ICd3aGl0ZScsXHJcbiAgICAgIGJnOiBwcm9wcy5kaXNhYmxlZCA/ICdncmF5LjUwMCcgOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICdiYXNlJyxcclxuXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiBwcm9wcy5kaXNhYmxlZCA/ICd0ZXh0LmxpZ2h0JyA6ICd3aGl0ZScsXHJcbiAgICAgICAgYmc6IHByb3BzLmRpc2FibGVkID8gJ2dyYXkuNTAwJyA6ICdwcmltYXJ5LmhvdmVyJyxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIHtcclxuICAgIGFwcGVhcmFuY2U6ICdub25lJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBoZWlnaHQ6ICczOHB4JyxcclxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXHJcbiAgICBib3JkZXI6IDAsXHJcblxyXG4gICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB2YXJpYW50KHtcclxuICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgIG91dGxpbmVkOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdncmF5LjUwMCcsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgICBiZzogJ3doaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgYmc6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgYmc6ICdwcmltYXJ5LmhvdmVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcclxuICAgICAgICBib3JkZXJDb2xvcjogJ2dyYXkuNTAwJyxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgYmc6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHRleHQ6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBiZzogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIGNvbG9yOiAncHJpbWFyeS5ob3ZlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgd2lkdGg6IDI2LFxyXG4gICAgICAgIGhlaWdodDogMjYsXHJcbiAgICAgICAgbGluZUhlaWdodDogMSxcclxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICd0ZXh0LnJlZ3VsYXInLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTMsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICBjb2xvcjogJ3RleHQuYm9sZCcsXHJcbiAgICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgJyYuc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICBiZzogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmOmhvdmVyOm5vdCguc2VsZWN0ZWQpJzoge1xyXG4gICAgICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSksXHJcbiAgdmFyaWFudCh7XHJcbiAgICBwcm9wOiAnc2l6ZScsXHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICBiaWc6IHtcclxuICAgICAgICBoZWlnaHQ6ICc0OHB4JyxcclxuICAgICAgICBweDogMzAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNtYWxsOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KSxcclxuICBjb21wb3NlKGJvcmRlciwgc3BhY2UsIGxheW91dClcclxuKTtcclxuY29uc3Qgcm90YXRlID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cclxuICB0byB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XHJcbmA7XHJcblxyXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZmZmZjtcclxuICBib3JkZXItdG9wOiAzcHggc29saWRcclxuICAgICR7KHByb3BzKSA9PlxyXG4gICAgICBwcm9wcy5jb2xvciA/IHByb3BzLmNvbG9yIDogdGhlbWVHZXQoJ3ByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgYW5pbWF0aW9uLW5hbWU6ICR7cm90YXRlfTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEuMnM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG5gO1xyXG5cclxuLy8gY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXYoKHByb3BzKSA9PlxyXG4vLyAgIGNzcyh7XHJcbi8vICAgICB3aWR0aDogMTgsXHJcbi8vICAgICBoZWlnaHQ6IDE4LFxyXG4vLyAgICAgbWFyZ2luTGVmdDogMTAsXHJcbi8vICAgICBib3JkZXI6ICczcHggc29saWQgd2hpdGUnLFxyXG4vLyAgICAgYm9yZGVyVG9wOiBgM3B4IHNvbGlkICR7cHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6ICdwcmltYXJ5LnJlZ3VsYXInfWAsXHJcbi8vICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4vLyAgICAgdHJhbnNpdGlvblByb3BlcnR5OiAndHJhbnNmb3JtJyxcclxuLy8gICAgIGFuaW1hdGlvbk5hbWU6IGAke3JvdGF0ZX1gLFxyXG4vLyAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjJzJyxcclxuLy8gICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxyXG4vLyAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxyXG4vLyAgIH0pXHJcbi8vICk7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgbG9hZGluZz86IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHR5cGU6ICdzdWJtaXQnIHwgJ2J1dHRvbic7XHJcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcclxufTtcclxuZXhwb3J0IHR5cGUgUmVmID0gSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgUHJvcHM+KFxyXG4gICh7IGNoaWxkcmVuLCBkaXNhYmxlZCwgbG9hZGluZyA9IGZhbHNlLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICAgIDxTdHlsZWRCdXR0b24gcmVmPXtyZWZ9IHsuLi5wcm9wc30gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cclxuICAgIDwvU3R5bGVkQnV0dG9uPlxyXG4gIClcclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuaW1wb3J0IHsgQXJyb3dOZXh0IH0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL0Fycm93TmV4dCc7XHJcbmltcG9ydCB7IEFycm93UHJldiB9IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9BcnJvd1ByZXYnO1xyXG5pbXBvcnQgJ3JlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzJztcclxuY29uc3QgQnV0dG9uUHJldiA9IHN0eWxlZCgnYnV0dG9uJylgXHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAke3RoZW1lR2V0KCdzaGFkb3dzLmJhc2UnLCAnMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHotaW5kZXg6IDk5O1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uTmV4dCA9IHN0eWxlZCgnYnV0dG9uJylgXHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6ICR7dGhlbWVHZXQoJ3NoYWRvd3MuYmFzZScsICcwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHotaW5kZXg6IDk5O1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uR3JvdXBXcmFwcGVyID0gc3R5bGVkKCdkaXYnKWBgO1xyXG5cclxuY29uc3QgUHJldkJ1dHRvbiA9ICh7IG9uQ2xpY2ssIGNoaWxkcmVuIH06IGFueSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uUHJldlxyXG4gICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBvbkNsaWNrKCk7XHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzTmFtZT0ncHJldkJ1dHRvbidcclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b25QcmV2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IE5leHRCdXR0b24gPSAoeyBvbkNsaWNrLCBjaGlsZHJlbiB9OiBhbnkpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbk5leHRcclxuICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgb25DbGljaygpO1xyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9J25leHRCdXR0b24nXHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uTmV4dD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQnV0dG9uR3JvdXAgPSAoeyBuZXh0LCBwcmV2aW91cyB9OiBhbnkpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25Hcm91cFdyYXBwZXI+XHJcblxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8UHJldkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmV2aW91cygpfT5cclxuICAgICAgICAgICAgPEFycm93UHJldiAvPlxyXG4gICAgICAgICAgPC9QcmV2QnV0dG9uPlxyXG4gICAgICAgICAgPE5leHRCdXR0b24gb25DbGljaz17KCkgPT4gbmV4dCgpfT5cclxuICAgICAgICAgICAgPEFycm93TmV4dCAvPlxyXG4gICAgICAgICAgPC9OZXh0QnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgPC9CdXR0b25Hcm91cFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgZGF0YT86IGFueVtdIHwgdW5kZWZpbmVkO1xyXG4gIGRldmljZVR5cGU6IHtcclxuICAgIG1vYmlsZTogYm9vbGVhbjtcclxuICAgIHRhYmxldDogYm9vbGVhbjtcclxuICAgIGRlc2t0b3A6IGJvb2xlYW47XHJcbiAgfTtcclxuICBwcm9wcz86IGFueTtcclxuICBjb21wb25lbnQ/OiBhbnk7XHJcbiAgYXV0b1BsYXk/OiBib29sZWFuO1xyXG4gIGluZmluaXRlPzogYm9vbGVhbjtcclxuICBpc1J0bD86IGJvb2xlYW47XHJcbiAgY3VzdG9tTGVmdEFycm93PzogUmVhY3QuUmVhY3RFbGVtZW50O1xyXG4gIGN1c3RvbVJpZ2h0QXJyb3c/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XHJcbiAgaXRlbUNsYXNzPzogc3RyaW5nO1xyXG4gIG1vYmlsZTpudW1iZXI7XHJcbiAgZGVza3RvcDpudW1iZXI7XHJcbiAgdGFibGV0Om51bWJlcjtcclxuICBjaGlsZHJlbj86YW55O1xyXG4gIHR2Om51bWJlcjtcclxuICBsYXB0b3A6bnVtYmVyLFxyXG4gIG1pbmlUYWJsZXQ6bnVtYmVyXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tQ2Fyb3VzZWwoe1xyXG4gIGRhdGEsXHJcbiAgZGV2aWNlVHlwZSxcclxuICBjb21wb25lbnQsXHJcbiAgYXV0b1BsYXkgPSBmYWxzZSxcclxuICBpbmZpbml0ZSA9IHRydWUsXHJcbiAgY3VzdG9tTGVmdEFycm93LFxyXG4gIGN1c3RvbVJpZ2h0QXJyb3csXHJcbiAgaXRlbUNsYXNzLFxyXG4gIGlzUnRsLG1vYmlsZSxkZXNrdG9wLHRhYmxldCxjaGlsZHJlbixsYXB0b3AsdHYsbWluaVRhYmxldCxcclxuICAuLi5wcm9wc1xyXG59OiBQcm9wcykge1xyXG4gIGNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgICB0djoge1xyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogMTAwMDAsIG1pbjogMjIwMCB9LFxyXG4gICAgICBpdGVtczogdHYsXHJcbiAgICB9LFxyXG4gICAgZGVza3RvcDoge1xyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogMjIwMCwgbWluOiAxNzIzIH0sXHJcbiAgICAgIGl0ZW1zOiBkZXNrdG9wLFxyXG4gICAgfSxcclxuICAgIGxhcHRvcDoge1xyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogMTcyMywgbWluOiAxMjgyIH0sXHJcbiAgICAgIGl0ZW1zOiBsYXB0b3AsXHJcbiAgICB9LFxyXG4gICAgdGFibGV0OiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMjgyLCBtaW46IDYxNyB9LFxyXG4gICAgICBpdGVtczp0YWJsZXQsXHJcbiAgICB9LFxyXG4gICAgbWluaVRhYmxldDp7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MTcsIG1pbjogNDM5IH0sXHJcbiAgICAgIGl0ZW1zOm1pbmlUYWJsZXQsXHJcbiAgICB9LFxyXG4gICAgbW9iaWxlOiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MzksIG1pbjogMCB9LFxyXG4gICAgICBpdGVtczogbW9iaWxlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGRpcj0nbHRyJz5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxyXG4gICAgICAgIHNob3dEb3RzPXtmYWxzZX1cclxuICAgICAgICBzbGlkZXNUb1NsaWRlPXsxfVxyXG4gICAgICAgIGluZmluaXRlPXtpbmZpbml0ZX1cclxuICAgICAgICBjb250YWluZXJDbGFzcz0nY29udGFpbmVyLXdpdGgtZG90cydcclxuICAgICAgICBpdGVtQ2xhc3M9e2l0ZW1DbGFzc31cclxuICAgICAgICBhdXRvUGxheT17YXV0b1BsYXl9XHJcbiAgICAgICAgYXV0b1BsYXlTcGVlZD17MzAwMH1cclxuICAgICAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU9e3RydWV9XHJcbiAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cclxuICAgICAgICBjdXN0b21CdXR0b25Hcm91cD17PEJ1dHRvbkdyb3VwIC8+fVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIHsgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgIGRhdGEubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYoY2hpbGRyZW4pIHJldHVybiBjaGlsZHJlblxyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSByZXR1cm4gY29tcG9uZW50KGl0ZW0pO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMCAxNXB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmt9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW1nIH0gZnJvbSAncmVhY3QtaW1hZ2UnO1xyXG5pbXBvcnQgcGxhY2Vob2xkZXIgZnJvbSAnLi9wcm9kdWN0LXBsYWNlaG9sZGVyLnBuZyc7XHJcbmNvbnN0IFBsYWNlaG9sZGVyID0gKCkgPT4gPGltZyBzcmM9e3BsYWNlaG9sZGVyfSBhbHQ9XCJwcm9kdWN0IGltZyBsb2FkZXJcIiAvPjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xyXG4gIHVybCxcclxuICBhbHQgPSAncGxhY2Vob2xkZXInLFxyXG4gIHVubG9hZGVyLFxyXG4gIGxvYWRlcixcclxuICBjbGFzc05hbWUsXHJcbiAgc3R5bGUsXHJcbn06IHtcclxuICB1cmw/OiBzdHJpbmcgfCBbc3RyaW5nXTtcclxuICBhbHQ/OiBzdHJpbmc7XHJcbiAgdW5sb2FkZXI/OiBzdHJpbmc7XHJcbiAgbG9hZGVyPzogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBzdHlsZT86IGFueTtcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW1nXHJcbiAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XHJcbiAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgc3JjPXt1cmx9XHJcbiAgICAgIGFsdD17YWx0fVxyXG4gICAgICBsb2FkZXI9ezxQbGFjZWhvbGRlciAvPn1cclxuICAgICAgdW5sb2FkZXI9ezxQbGFjZWhvbGRlciAvPn1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUTRBQUFEd0NBWUFBQUR4WG9wNEFBQUhQRWxFUVZSNFh1M2QyM0xhMkJhR1VSRU9QcFRmLzBtTndZQ3N2dGhGdG9NZGl4K1d4QklaNDZxcnNqcHh1dHBmTk9YbG1WblhkVjBERVBqVmR3RGdsSEFBTWVFQVlzSUJ4SVFEaUFrSEVCTU9JQ1ljUUV3NGdKaHdBREhoQUdMQ0FjU0VBNGdKQnhBVERpQW1IRUJNT0lDWWNBQXg0UUJpd2dIRWhBT0lDUWNRRXc0Z0poeEFURGlBbUhBQU1lRUFZc0lCeElRRGlBa0hFQk1PSUNZY1FFdzRnSmh3QURIaEFHTENBY1NFQTRnSkJ4QVREaUFtSEVCTU9JQ1ljQUF4NFFCaXdnSEVoQU9JQ1FjUUV3NGdKaHhBVERpQW1IQUFNZUVBWXNJQnhJUURpQWtIRUJNT0lDWWNRRXc0Z0pod0FESGhBR0xDQWNTRUE0Z0pCeEFURGlBbUhFQk1PSUNZY0FBeDRRQml3Z0hFaEFPSUNRY1FFdzRnSmh4QVREaUFtSEFBTWVFQVlzSUJ4SVFEaUFrSEVCTU9JQ1ljUUV3NGdKaHdBREhoQUdMQ0FjUVdmUWNvNTNBNC9QN24rWHplekdhekg4OURyWVJqUUYzWE5idmRydG50ZGszYnRsOStmRDZmTjR2Rm9ubDhmQlFSSm1YV2RWM1hkNGpjZnI5djN0N2VtblArODg1bXMrYmg0YUY1Zkh6c093cFZFSTRCYkRhYjV2Mzl2ZS9ZRjh2bHNubCtmdmIwUWZXOEhDM3MwbWcwbjU1U29IYkNVZEIrdjc4NEdrZjcvYjdaYnJkOXgrQ21oS09neldiVGQrUXM3Ky92WjcwYmdWc1Jqa0oydTEzejhmSFJkK3dzWGRkNTZxQnF3bEhJZnIvdk94SXAvZk5CU2NKUlNPbFA5SStQRCtNSzFSS09pbjEzYVF4cUlCd0ZlREw0MCtlcjlkd240U2pBaGEzL2E5dTJXYS9YN3FQY09lRW9aSWg0ek9menZpTlY2YnJ1OXpYNzQvZm9jSitFbzVEbGN0bDNKRExGNzU1ZHI5ZC92SmQ1ZTNzenR0d3A0U2lrZERoV3ExWGZrYXBzTnB0dkk3RmVyNHZkYjZFZXdsSEljcmtzTmxyTVpyTkpoV08zMi8zMXFuM1hkYzE2dmZZQytjNElSMEZQVDA5OVI4N3k5UFEwbVRHbGJkdmVxL2JubkdGYWhLT2d4V0xSUEQ4Lzl4MzcwV3ExbXN6VFJ0ZDF6ZXZyNjFsUEU3dmR6alg2T3lJY2hhMVdxNHZqOGZEd2NQRy9ld3ZuUnVOb3U5MFd2MkhMYlZqa001REQ0ZEJzTnB1emJuLysrdldyZVhwNkt2NkNkVWh2YjI4WGZibDFOcHMxTHk4dnhkNEhjUnZDTWJEZGJ0Y2NEb2Rtdjk5LytkTjV1VncyeStWeU1xUEowVzYzdStxQzEzdytiMTVlWGliekhvZXZoR05rYmR0TytrL2J3K0hRdkw2KzloM3J0VmdzbXBlWGw3NWpWTW83anBGTk9Sb2ZIeC9OZXIzdU8zYVc0eWpITkFrSFp4bmlQc2I3Ky90RjcwbTRQZUdvV01sUDBtdWQrNkkzTmRUUHk3Q0VvMUtsM2lXVXNOMXVCM3N5U082Q1VBL2hxTkR4dTB6YnRyMzVwYWt4dHE0ZjQ4RjBDRWVGdHR2dDcyOE0yMjYzTjN1VWI5djJxaSs3SnNiOHRiaWVjRlRtY0RoOCtZYXhXM3hDZmQ2dE1SWTdQS1pET0NweS9HUTlkWXVSNVhTM3hsanM4SmdHNGFqSTV4SGx1eDhiNnhQNWI3czF4bUtIUi8yRW94TGZqU2lueGhoWmZ0cXRNWlloN294UWxuQlU0RzhqeXFtaFI1YWE5bWJVOUxId2xYQlU0S2NSNWRSUUkwdU45eW5zOEtpWGNOellPU1BLcVhPZVRsSzFSZVBJRG84NkNjY05uVHVpbkNvOXNod3ZtOVdxOW8vdlh5UWNONVNNS0tkS2pTeFR1RHR4aXpzbC9FdzRidVNTRWVYVUpVOHJueDBPaDZ0L2pyRWMvNFk0NmlBY04zRHBpSExxbXBHbDVHNk5zZGpoVVEvaHVJRnJScFJUbDR3c1U3NG5ZWWRISFlSalpDVkdsRlBwMDh2VWQyQk0vZU8vQjhJeG9sSWp5cWxrWkJseXQ4Wllhcnh6OHE4UmpoR1ZIRkZPblRPeWpMRmJZeXgyZU55V2NJeWtiZHZpSThxcG41NW03bkhmeFQzK25xWkNPRVl5eHYvZ2Z4dFo3dmtleEJUdW9kd2o0UmpCT1dORUtkLzlXcmZhclRFV096ekdKeHdEUzE1Y2x2TDU2ZWJXdXpYR1lvZkh1SVJqWUdPTUtLZU9zYXBodDhaWXBudzNaWXI4RlpBRDJtNjNvejl0ZkRhYnpmNjVUNlRWYXRVOFB6LzNIZU5LbmpnR2Nvc1I1ZFMvRm8zR0RvL1JDTWRBYmpHaThEOTJlQXhQT0FZdzVsZFIrSjRkSHNNU2pzSnFHRkc0Nzdzck5SQ093b3dvOWJERFl6akNVWkFScFQ1MmVBeERPQW94b3RUTERvL3loS01RSTByZDdQQW9TemdLTUtMVXp3NlBzb1RqU2thVTZiRERveHpodUpJUlpWcnM4Q2hET0s1Z1JKa21Penl1Snh3WE1xSk1teDBlMXhHT0MzbmNuVDQ3UEM0bkhCY3dvdHdIT3p3dUp4d2hJOHA5YWR2V3pkSUxDRWZJaUhKLzdQRElDVWZBaUhLLzdQRElMUG9POEtmSHg4ZStJMHlVRjZYbnMzTVVpQmxWZ0pod0FESGhBR0xDQWNTRUE0Z0pCeEFURGlBbUhFQk1PSUNZY0FBeDRRQml3Z0hFaEFPSUNRY1FFdzRnSmh4QVREaUFtSEFBTWVFQVlzSUJ4SVFEaUFrSEVCTU9JQ1ljUUV3NGdKaHdBREhoQUdMQ0FjU0VBNGdKQnhBVERpQW1IRUJNT0lDWWNBQXg0UUJpd2dIRWhBT0lDUWNRRXc0Z0poeEFURGlBbUhBQU1lRUFZc0lCeElRRGlBa0hFQk1PSUNZY1FFdzRnSmh3QURIaEFHTENBY1NFQTRnSkJ4QVREaUFtSEVCTU9JQ1ljQUF4NFFCaXdnSEVoQU9JQ1FjUUV3NGdKaHhBVERpQW1IQUFNZUVBWXNJQnhJUURpQWtIRUJNT0lDWWNRRXc0Z0pod0FESGhBR0xDQWNTRUE0Z0pCeEFURGlBbUhFQk1PSUNZY0FBeDRRQml3Z0hFaEFPSS9RZTBneW9UekVNV1pRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGVudExvYWRlciBmcm9tICdyZWFjdC1jb250ZW50LWxvYWRlcic7XHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBkZXZpY2VUeXBlOiB7XHJcbiAgICAgICAgbW9iaWxlOiBib29sZWFuO1xyXG4gICAgICAgIHRhYmxldDogYm9vbGVhbjtcclxuICAgICAgICBkZXNrdG9wOiBib29sZWFuO1xyXG4gICAgfTtcclxuICAgIHByb3BzPyA6IGFueTtcclxufTtcclxuZXhwb3J0IGNvbnN0IFN1Z2dlc3Rpb25Mb2FkaW5nPSAocHJvcHMpID0+IChcclxuICAgIDxDb250ZW50TG9hZGVyXHJcbiAgICAgICAgc3BlZWQ9ezJ9XHJcbiAgICAgICAgd2lkdGg9ezYwMH1cclxuICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDYwMCAyMDBcIlxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNmM2YzZjNcIlxyXG4gICAgICAgIGZvcmVncm91bmRDb2xvcj1cIiNlY2ViZWJcIlxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgICA8cmVjdCB4PVwiMTUxXCIgeT1cIjExXCIgcng9XCI1XCIgcnk9XCI1XCIgd2lkdGg9XCI0MjFcIiBoZWlnaHQ9XCI0MVwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjY1XCIgeT1cIjEwXCIgcng9XCI1XCIgcnk9XCI1XCIgd2lkdGg9XCI1NVwiIGhlaWdodD1cIjQxXCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiMTUzXCIgeT1cIjY5XCIgcng9XCI1XCIgcnk9XCI1XCIgd2lkdGg9XCI0MjFcIiBoZWlnaHQ9XCI0MVwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjY3XCIgeT1cIjY4XCIgcng9XCI1XCIgcnk9XCI1XCIgd2lkdGg9XCI1NVwiIGhlaWdodD1cIjQxXCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiMTUzXCIgeT1cIjEzNFwiIHJ4PVwiNVwiIHJ5PVwiNVwiIHdpZHRoPVwiNDIxXCIgaGVpZ2h0PVwiNDFcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCI2N1wiIHk9XCIxMzNcIiByeD1cIjVcIiByeT1cIjVcIiB3aWR0aD1cIjU1XCIgaGVpZ2h0PVwiNDFcIiAvPlxyXG4gICAgPC9Db250ZW50TG9hZGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZlYXR1cmVkTG9hZGluZzpSZWFjdC5GQzxQcm9wcz4gPSAoe2RldmljZVR5cGV9KSA9PiAoXHJcbiAgICA8Q29udGVudExvYWRlciB2aWV3Qm94PVwiMCAwIDEwMDAgMzAwXCIgPlxyXG5cclxuICAgICAgPHJlY3QgeD1cIjMwXCIgeT1cIjIwXCIgcng9XCI4XCIgcnk9XCI4XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiAvPlxyXG4gICAgICA8cmVjdCB4PVwiMzBcIiB5PVwiMjUwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIxOFwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCIzMFwiIHk9XCIyNzVcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjIwXCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjI1MFwiIHk9XCIyMFwiIHJ4PVwiOFwiIHJ5PVwiOFwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjI1MFwiIHk9XCIyNTBcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjE4XCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjI1MFwiIHk9XCIyNzVcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjIwXCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjQ3MFwiIHk9XCIyMFwiIHJ4PVwiOFwiIHJ5PVwiOFwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjQ3MFwiIHk9XCIyNTBcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjE4XCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjQ3MFwiIHk9XCIyNzVcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjIwXCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjY5MFwiIHk9XCIyMFwiIHJ4PVwiOFwiIHJ5PVwiOFwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjY5MFwiIHk9XCIyNTBcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjE4XCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjY5MFwiIHk9XCIyNzVcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjIwXCIgLz5cclxuICAgIDwvQ29udGVudExvYWRlcj5cclxuKVxyXG5cclxuY29uc3QgUG9zdExvYWRlciA9IChwcm9wczogSlNYLkludHJpbnNpY0F0dHJpYnV0ZXMpID0+IChcclxuICA8Q29udGVudExvYWRlclxyXG4gICAgaGVpZ2h0PXszNTB9XHJcbiAgICB3aWR0aD17MjQ1fVxyXG4gICAgc3BlZWQ9ezJ9XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjZjNmM2YzXCJcclxuICAgIGZvcmVncm91bmRDb2xvcj1cIiNlY2ViZWJcIlxyXG4gICAgey4uLnByb3BzfVxyXG4gID5cclxuICAgIDxyZWN0IHg9XCIyXCIgeT1cIjJcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI0MFwiIGhlaWdodD1cIjE5N1wiIC8+XHJcbiAgICA8cmVjdCB4PVwiMTVcIiB5PVwiMjIwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIxNDBcIiBoZWlnaHQ9XCIyNVwiIC8+XHJcbiAgICA8cmVjdCB4PVwiMTVcIiB5PVwiMjU0XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI2NVwiIGhlaWdodD1cIjE1XCIgLz5cclxuICAgIDxyZWN0IHg9XCIxNVwiIHk9XCIzMDBcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjY3XCIgaGVpZ2h0PVwiMjBcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjE3MFwiIHk9XCIzMDBcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiMjBcIiAvPlxyXG4gIDwvQ29udGVudExvYWRlcj5cclxuKTtcclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5ID0gKCkgPT4gKFxyXG4gIDxDb250ZW50TG9hZGVyXHJcbiAgICBoZWlnaHQ9ezQ2fVxyXG4gICAgd2lkdGg9ezQwMH1cclxuICAgIHNwZWVkPXsyfVxyXG4gICAgYmFja2dyb3VuZENvbG9yPVwiI2YzZjNmM1wiXHJcbiAgICBmb3JlZ3JvdW5kQ29sb3I9XCIjZWNlYmViXCJcclxuICA+XHJcbiAgICA8cmVjdCB4PVwiNThcIiB5PVwiMTBcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI4N1wiIGhlaWdodD1cIjI2XCIgLz5cclxuICAgIDxyZWN0IHg9XCIzNjRcIiB5PVwiMTBcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI2XCIgaGVpZ2h0PVwiMjZcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjE2XCIgeT1cIjEwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgLz5cclxuICA8L0NvbnRlbnRMb2FkZXI+XHJcbik7XHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeUxvYWRlciA9ICgpID0+IChcclxuICAgIDxDb250ZW50TG9hZGVyXHJcbiAgICAgICAgaGVpZ2h0PXs0Nn1cclxuICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgIHNwZWVkPXsyfVxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNmM2YzZjNcIlxyXG4gICAgICAgIGZvcmVncm91bmRDb2xvcj1cIiNlY2ViZWJcIlxyXG4gICAgPlxyXG4gICAgICAgIDxyZWN0IHg9XCI1OFwiIHk9XCIxMFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNThcIiBoZWlnaHQ9XCIyNlwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjM2NFwiIHk9XCIxMFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNThcIiBoZWlnaHQ9XCIyNlwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjE2XCIgeT1cIjEwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI1OFwiIGhlaWdodD1cIjI2XCIgLz5cclxuICAgIDwvQ29udGVudExvYWRlcj5cclxuKTtcclxuZXhwb3J0IGNvbnN0IFNpZGViYXJNb2JpbGVMb2FkZXIgPSAocHJvcHM6IEpTWC5JbnRyaW5zaWNBdHRyaWJ1dGVzKSA9PiAoXHJcbiAgICA8Q29udGVudExvYWRlclxyXG4gICAgICAgIHNwZWVkPXs0fVxyXG4gICAgICAgIHdpZHRoPXs5NzR9XHJcbiAgICAgICAgaGVpZ2h0PXs1OH1cclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDk3NCA1OFwiXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI2YzZjNmM1wiXHJcbiAgICAgICAgZm9yZWdyb3VuZENvbG9yPVwiI2VjZWJlYlwiXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiByeD1cIjI2XCIgcnk9XCIyNlwiIHdpZHRoPVwiOTc0XCIgaGVpZ2h0PVwiNThcIiAvPlxyXG4gICAgPC9Db250ZW50TG9hZGVyPlxyXG4pO1xyXG5leHBvcnQgY29uc3QgU2lkZWJhckxvYWRlciA9IChwcm9wczogSlNYLkludHJpbnNpY0F0dHJpYnV0ZXMpID0+IChcclxuICA8Q29udGVudExvYWRlclxyXG4gICAgaGVpZ2h0PXs0MDB9XHJcbiAgICB3aWR0aD1cImNhbGMoMTAwJSAtIDMwcHgpXCJcclxuICAgIHNwZWVkPXsyfVxyXG4gICAgYmFja2dyb3VuZENvbG9yPVwiI2YzZjNmM1wiXHJcbiAgICBmb3JlZ3JvdW5kQ29sb3I9XCIjZWNlYmViXCJcclxuICAgIHsuLi5wcm9wc31cclxuICA+XHJcbiAgICA8cmVjdCB4PVwiMzc2XCIgeT1cIjIyXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIwXCIgaGVpZ2h0PVwiMFwiIC8+XHJcbiAgICA8cmVjdCB4PVwiMjdcIiB5PVwiNTBcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjY5XCIgeT1cIjUwXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNjBcIiBoZWlnaHQ9XCIyNFwiIC8+XHJcblxyXG4gICAgPHJlY3QgeD1cIjI3XCIgeT1cIjg5XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cclxuICAgIDxyZWN0IHg9XCI2OVwiIHk9XCI4OVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjYwXCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG5cclxuICAgIDxyZWN0IHg9XCIyN1wiIHk9XCIxMjhcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjY5XCIgeT1cIjEyOFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjYwXCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG5cclxuICAgIDxyZWN0IHg9XCIyN1wiIHk9XCIxNjdcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjY5XCIgeT1cIjE2N1wiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjYwXCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG5cclxuICAgIDxyZWN0IHg9XCIyN1wiIHk9XCIyMDZcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjY5XCIgeT1cIjIwNlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjYwXCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG5cclxuICAgIDxyZWN0IHg9XCIyN1wiIHk9XCIyNDVcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjY5XCIgeT1cIjI0NVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjYwXCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG5cclxuICAgIDxyZWN0IHg9XCIyN1wiIHk9XCIyODRcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjY5XCIgeT1cIjI4NFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjYwXCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG5cclxuICAgIDxyZWN0IHg9XCIyN1wiIHk9XCIzMjNcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjY5XCIgeT1cIjMyM1wiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjYwXCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG4gIDwvQ29udGVudExvYWRlcj5cclxuKTtcclxuZXhwb3J0IGNvbnN0IEl0ZW1Mb2FkZXIgPShwcm9wczogSlNYLkludHJpbnNpY0F0dHJpYnV0ZXMpID0+IChcclxuICAgIDxDb250ZW50TG9hZGVyXHJcbiAgICAgICAgd2lkdGg9e1wiMTAwJVwifVxyXG4gICAgICAgIGhlaWdodD17NjAwfVxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNzAwIDMwMFwiXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI2Y1ZjVmNVwiXHJcbiAgICAgICAgZm9yZWdyb3VuZENvbG9yPVwiI2RiZGJkYlwiXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIHNwZWVkPXsyfVxyXG4gICAgPlxyXG4gICAgICAgIDxjaXJjbGUgY3g9XCI0NzJcIiBjeT1cIjE1OVwiIHI9XCI3XCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiNDg3XCIgeT1cIjE1NFwiIHJ4PVwiNVwiIHJ5PVwiNVwiIHdpZHRoPVwiMjIwXCIgaGVpZ2h0PVwiMTBcIiAvPlxyXG4gICAgICAgIDxjaXJjbGUgY3g9XCI0NzJcIiBjeT1cIjE5MFwiIHI9XCI3XCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiNDg3XCIgeT1cIjE4NFwiIHJ4PVwiNVwiIHJ5PVwiNVwiIHdpZHRoPVwiMjIwXCIgaGVpZ2h0PVwiMTBcIiAvPlxyXG4gICAgICAgIDxjaXJjbGUgY3g9XCI0NzJcIiBjeT1cIjIxOVwiIHI9XCI3XCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiNDg3XCIgeT1cIjIxNFwiIHJ4PVwiNVwiIHJ5PVwiNVwiIHdpZHRoPVwiMjIwXCIgaGVpZ2h0PVwiMTBcIiAvPlxyXG4gICAgICAgIDxjaXJjbGUgY3g9XCI0NzJcIiBjeT1cIjI0OVwiIHI9XCI3XCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiNDg3XCIgeT1cIjI0NFwiIHJ4PVwiNVwiIHJ5PVwiNVwiIHdpZHRoPVwiMjIwXCIgaGVpZ2h0PVwiMTBcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCI2NFwiIHk9XCIxOFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMzQ2XCIgaGVpZ2h0PVwiMzAwXCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiMjk0XCIgeT1cIjMzNlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0NFwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjIxOFwiIHk9XCIzMzVcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDRcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCIxNDJcIiB5PVwiMzM0XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQ0XCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiNzBcIiB5PVwiMzMzXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQ0XCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiNDcwXCIgeT1cIjE4XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIyNVwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjQ3MFwiIHk9XCI1OFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiNlwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjQ3MFwiIHk9XCI2OFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiNlwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjQ3MFwiIHk9XCI3OFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiNlwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjQ3MFwiIHk9XCI5OVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCIzMFwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjU2MFwiIHk9XCI5OVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCIzMFwiIC8+XHJcbiAgICA8L0NvbnRlbnRMb2FkZXI+XHJcbilcclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5TW9iaWxlID0gKHByb3BzKSA9PiAoXHJcbiAgICA8Q29udGVudExvYWRlclxyXG4gICAgICAgIHNwZWVkPXsyfVxyXG4gICAgICAgIHdpZHRoPXs5NzR9XHJcbiAgICAgICAgaGVpZ2h0PXs1OH1cclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDk3NCA1OFwiXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI2YzZjNmM1wiXHJcbiAgICAgICAgZm9yZWdyb3VuZENvbG9yPVwiI2VjZWJlYlwiXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICAgIDxyZWN0IHg9XCIzODhcIiB5PVwiMTk4XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjZcIiAvPlxyXG4gICAgICAgIDxyZWN0IHg9XCIxNjZcIiB5PVwiMjY3XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIwXCIgaGVpZ2h0PVwiMVwiIC8+XHJcbiAgICAgICAgPHJlY3QgeD1cIjE2XCIgeT1cIjEyXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI5MFwiIGhlaWdodD1cIjM2XCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiMTI1XCIgeT1cIjEzXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI5MFwiIGhlaWdodD1cIjM2XCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiNDg1XCIgeT1cIjEyXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI5MFwiIGhlaWdodD1cIjM2XCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiMzYyXCIgeT1cIjEyXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI5MFwiIGhlaWdodD1cIjM2XCIgLz5cclxuICAgICAgICA8cmVjdCB4PVwiMjQ5XCIgeT1cIjEyXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI5MFwiIGhlaWdodD1cIjM2XCIgLz5cclxuICAgIDwvQ29udGVudExvYWRlcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG50eXBlIFNlb1Byb3BzID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBjYW5vbmljYWw/OiBzdHJpbmc7XHJcbiAgY3NzPzogc3RyaW5nO1xyXG4gIGpzPzogc3RyaW5nO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFTzogUmVhY3QuRkM8U2VvUHJvcHM+ID0gKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBjYW5vbmljYWwsXHJcbiAgY3NzLFxyXG4gIGpzLFxyXG4gIGltYWdlLFxyXG59KSA9PiAoXHJcbiAgPEhlYWQ+XHJcbiAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgIDxtZXRhXHJcbiAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwiXHJcbiAgICAvPlxyXG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgPG1ldGFcclxuICAgICAgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxyXG4gICAgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIldpc2UgQ2FydFwiIC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2Ake2Nhbm9uaWNhbH1gfSAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAd2lzZWNhcnRcIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAd2lzZWNhcnRcIiAvPlxyXG4gICAge2NzcyAmJiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YCR7Y3NzfWB9IC8+fVxyXG4gICAge2ltYWdlID8gKFxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YCR7aW1hZ2V9YH0gLz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgY29udGVudD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dpc2VjYXJ0L2ltYWdlL3VwbG9hZC92MTYxNjcwOTg1MC9nbmZrZm5tMWM5cmN6bmNwNWM1dC5wbmdcIlxyXG4gICAgICAvPlxyXG4gICAgKX1cclxuICAgIHtpbWFnZSAmJiA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2Ake2ltYWdlfWB9IC8+fVxyXG4gICAge2Nhbm9uaWNhbCAmJiA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtgJHtjYW5vbmljYWx9YH0gLz59XHJcbiAgICB7anMgJiYgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPXtgJHtqc31gfT48L3NjcmlwdD59XHJcbiAgPC9IZWFkPlxyXG4pO1xyXG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tICcuL2JveCc7XHJcblxyXG5leHBvcnQgY29uc3QgU3ZnID0gKHsgc2l6ZSA9IDE4LCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPEJveFxyXG4gICAgYXM9XCJzdmdcIlxyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB3aWR0aD17c2l6ZSArICcnfVxyXG4gICAgaGVpZ2h0PXtzaXplICsgJyd9XHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgey4uLnByb3BzfVxyXG4gIC8+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiQC9hc3NldHMvaWNvbnMvU3RhclwiO1xyXG5pbnRlcmZhY2UgUmF0aW5nQ29udGFpbmVyUHJvcHN7XHJcbiAgICBzaXplOnN0cmluZ1xyXG59XHJcbmNvbnN0IFJhdGluZ0NvbnRhaW5lcj1zdHlsZWQuZGl2PFJhdGluZ0NvbnRhaW5lclByb3BzPmBcclxuICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHN2ZyB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgd2lkdGg6ICR7cHJvcHM9PnByb3BzLnNpemV9O1xyXG4gICAgICBcclxuICAgIH1cclxuICAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjNTRDNUM2O1xyXG4gIH1cclxuICAuaW5BY3RpdmUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuYFxyXG5jb25zdCBTdGFyUmF0aW5nOlJlYWN0LkZDPHtyYXRpbmc6bnVtYmVyLHNpemU/OnN0cmluZ30+ID0gKHtyYXRpbmcsc2l6ZX0pID0+IHtcclxuICAgIGxldCBhY3RpdmUgPSBBcnJheS5hcHBseShudWxsLCB7bGVuZ3RoOiByYXRpbmd9KVxyXG4gICAgbGV0IGluQWN0aXZlID0gQXJyYXkuYXBwbHkobnVsbCwge2xlbmd0aDogNS1yYXRpbmd9KVxyXG4gICAgY29uc3Qgc3RhclNpemU6c3RyaW5nPXNpemU/c2l6ZTonMjJweCdcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJhdGluZ0NvbnRhaW5lciBzaXplPXtzdGFyU2l6ZX0+XHJcbiAgICAgICAgICAgIHthY3RpdmUubWFwKChudW0pPT4gPFN0YXJJY29uIGNsYXNzTmFtZT17J2FjdGl2ZSd9IGtleT17bnVtfS8+KX1cclxuICAgICAgICAgICAge2luQWN0aXZlLm1hcCgobnVtKT0+IDxTdGFySWNvbiBjbGFzc05hbWU9eydpbkFjdGl2ZSd9IGtleT17bnVtfS8+KX1cclxuICAgICAgICA8L1JhdGluZ0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFyUmF0aW5nOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAL2NvbXBvbmVudHMvT3RoZXJzL2ltYWdlL2ltYWdlJztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ0AvY29tcG9uZW50cy9PdGhlcnMvYnV0dG9uL2J1dHRvbic7XHJcbmltcG9ydCB7XHJcbiAgICBQcm9kdWN0Q2FyZFdyYXBwZXIsXHJcbiAgICBQcm9kdWN0SW1hZ2VXcmFwcGVyLFxyXG4gICAgUHJvZHVjdEluZm8sXHJcbiAgICBCdXR0b25UZXh0LFxyXG59IGZyb20gJy4vcHJvZHVjdC1jYXJkLnN0eWxlJztcclxuaW1wb3J0IHtDb3VudGVyfSBmcm9tICcuLi8uLi9jYXJ0L2NvdW50ZXIvY291bnRlcic7XHJcbmltcG9ydCB7Q2FydEljb259IGZyb20gJ0AvYXNzZXRzL2ljb25zL0NhcnRJY29uJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7YWRkVG9DYXJ0fSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7Z2V0SXRlbUNhcnRRdHl9IGZyb20gXCJAL3V0aWxzL2NhcnRVdGlsc1wiO1xyXG5cclxudHlwZSBQcm9kdWN0Q2FyZFByb3BzID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGltYWdlOiBhbnk7XHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgc2FsZVByaWNlPzogbnVtYmVyO1xyXG4gICAgZGlzY291bnRJblBlcmNlbnQ/OiBudW1iZXI7XHJcbiAgICBvbkNsaWNrPzogKGU6IGFueSkgPT4gdm9pZDtcclxuICAgIHByb2R1Y3Q6IGFueVxyXG59O1xyXG5cclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdC9TdGFyUmF0aW5nXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDb252ZXJ0Q3VycmVuY3kgZnJvbSBcIkAvY29udmVydEN1cnJlbmN5XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0Q2FyZDogUmVhY3QuRkM8UHJvZHVjdENhcmRQcm9wcz4gPSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudEluUGVyY2VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgICBjb25zdCBoYW5kbGVBZGRDbGljayA9IChlOiB7IHN0b3BQcm9wYWdhdGlvbjogKCkgPT4gdm9pZDsgfSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3QsIDEpKVxyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCB7Y3VycmVuY3k6IHtzeW1ib2wsaWR9LGN1cnJlbmN5RGV0YWlsc30gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuc2hvcFJlZHVjZXIpO1xyXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlQ2xpY2sgPSAoZTogeyBzdG9wUHJvcGFnYXRpb246ICgpID0+IHZvaWQ7IH0pID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0LCAtMSkpXHJcblxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNhcnRRdWFudGl0eSA9IGdldEl0ZW1DYXJ0UXR5KGNhcnRTdGF0ZSwgcHJvZHVjdC5pZClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb2R1Y3RDYXJkV3JhcHBlciBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9kdWN0L1tzbHVnXSd9IGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0SW1hZ2VXcmFwcGVyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUHJvZHVjdEltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPFByb2R1Y3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8U3RhclJhdGluZyByYXRpbmc9ezR9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UHJpY2VXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q29udmVydEN1cnJlbmN5KGN1cnJlbmN5RGV0YWlscyxwcmljZSwnR0JQJyxpZCl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFjYXJ0UXVhbnRpdHkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcnQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRJY29uIG1yPXsyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvblRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2FydFF1YW50aXR5ID8gY2FydFF1YW50aXR5IDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVjcmVtZW50PXtoYW5kbGVSZW1vdmVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5jcmVtZW50PXtoYW5kbGVBZGRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgPC9Qcm9kdWN0Q2FyZFdyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcclxuXHJcbmNvbnN0IFN0eWxlZEJveCA9IHN0eWxlZC5kaXYoXHJcbiAgY3NzKHtcclxuICAgIHB5OiBbMzAsIDUwXSxcclxuICAgIHB4OiBbJzFyZW0nLCAwXSxcclxuICB9KSxcclxuICB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0Q2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2KFxyXG4gIGNzcyh7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxuICAgIGJvcmRlclJhZGl1czogJ2Jhc2UnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0SW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBoZWlnaHQ6IDE0NXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTYWxlVGFnID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnllbGxvdy5yZWd1bGFyJywgJyNGRkFENUUnKX07XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLm1lZGl1bScsICcxMnB4Jyl9O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpc2NvdW50UGVyY2VudCA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy55ZWxsb3cucmVndWxhcicsICcjRkZBRDVFJyl9O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5tZWRpdW0nLCAnMTJweCcpfTtcclxuICB6LWluZGV4OiAyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RJbmZvID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEyM3B4O1xyXG4gIH1cclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuICAgIG1hcmdpbjogMCAwIDdweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcm9kdWN0LXdlaWdodCB7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMueHMnLCAnMTInKX1weDtcclxuICAgIH1cclxuICB9XHJcbiAgLnByb2R1Y3QtbWV0YSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgbWluLWhlaWdodDogMzJweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0UHJpY2VXcmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgLnByb2R1Y3QtcHJpY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgICAgICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggLSAxcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGlzY291bnRlZFByaWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMueWVsbG93LmhvdmVyJywgJyNGQkI5NzknKX07XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnllbGxvdy5ob3ZlcicsICcjRkJCOTc5Jyl9O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcnQtYnV0dG9uIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuMjAwJywgJyNmN2Y3ZjcnKX07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJpZycsICcxOHB4Jyl9O1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTdweDtcclxuICAgICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMCA2cHg7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgICB9XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIC5xdWFudGl0eSB7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbmNCdG4ge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZGVjQnRuIHtcclxuICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0W3R5cGU9J251bWJlciddIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4IC0gMXB4KTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU0cHgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDI3cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvblRleHQgPSBzdHlsZWQuc3BhbmBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvb2tJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMjc1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGhlaWdodDogMjE1cHg7XHJcbiAgfVxyXG4gICR7RGlzY291bnRQZXJjZW50fSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQm9va0luZm8gPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3ROYW1lID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgbWFyZ2luOiAwIDAgN3B4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAmOm9ubHktY2hpbGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4IC0gMXB4KTtcclxuICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRob3JJbmZvID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgQWRkQ2FydEJveCA9IHN0eWxlZC5kaXZgXHJcbi8vICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIHBhZGRpbmc6IDIwcHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiA1MCU7XHJcbi8vICAgbGVmdDogNTAlO1xyXG4vLyAgIG9wYWNpdHk6IDA7XHJcbi8vICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblxyXG4vLyAgIC5jYXJ0LWJ1dHRvbiB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAzNnB4O1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogMTdweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLjEnLCAnMTMnKX0gcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbi8vICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuLy8gICAgICAgd2lkdGg6IDMycHg7XHJcbi8vICAgICAgIGhlaWdodDogMzJweDtcclxuLy8gICAgICAgcGFkZGluZzogMDtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmJ0bi10ZXh0IHtcclxuLy8gICAgICAgcGFkZGluZzogMCAwIDAgNnB4O1xyXG4vLyAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAmOmhvdmVyIHtcclxuLy8gICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuLy8gICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5ZTdmO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgc3ZnIHtcclxuLy8gICAgICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmljZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmljZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggLSAxcHgpO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXNjb3VudGVkUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9IHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnllbGxvdy5yZWd1bGFyJywgJyNGRkFENUUnKX07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tbGVmdDogLTRweDtcclxuICB6LWluZGV4OiAyO1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy55ZWxsb3cucmVndWxhcicsICcjRkZBRDVFJyl9O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCb29rQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb2RDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb2RJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMjMwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGhlaWdodDogMTQ1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RNZXRhID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsaXZlcnlPcHQgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEdXJhdGlvbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iaWcnLCAnMThweCcpfTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0Q2FyZCAgZnJvbSAnLi4vY2FyZC9Qcm9kdWN0SXRlbSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9sb2FkbW9yZS1idXR0b24nO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuL2JveCc7XHJcblxyXG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2J1dHRvbic7XHJcblxyXG5pbXBvcnQge0dyaWR9IGZyb20gJy4vUHJvZHVjdEdyaWRTdHlsZXMnXHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSBmcm9tIFwiQC91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IHVzZUZldGNoIGZyb20gXCJAL2hvb2tzL3VzZUZldGNoXCI7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsb2FkTW9yZT86IGJvb2xlYW47XHJcbiAgICBmZXRjaExpbWl0PzogbnVtYmVyO1xyXG4gICAgc3R5bGU/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0R3JpZCA9ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmUgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoTGltaXQgPSAxNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHVybD0oKT0+e1xyXG4gICAgICAgIGNvbnN0IHtjYXRlZ29yeSxzdWJDYXRlZ29yeSxxdWVyeX09cm91dGVyLnF1ZXJ5XHJcbiAgICAgICAgaWYocXVlcnkpe1xyXG4gICAgICAgICAgICBpZihjYXRlZ29yeSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeVF1ZXJ5PWNhdGVnb3J5P2BjYXRlZ29yeT0ke2NhdGVnb3J5fWA6JydcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9wcm9kdWN0cy9zZWFyY2g/cXVlcnk9JHtxdWVyeX0mJHtjYXRlZ29yeVF1ZXJ5fWBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvcHJvZHVjdHMvc2VhcmNoP3F1ZXJ5PSR7cXVlcnl9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2F0ZWdvcnkpe1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeVF1ZXJ5PWNhdGVnb3J5P2BjYXRlZ29yeT0ke2NhdGVnb3J5fWA6JydcclxuICAgICAgICAgICAgY29uc3Qgc3ViY2F0ZWdvcnlRdWVyeT1zdWJDYXRlZ29yeT9gc3ViQ2F0ZWdvcnk9JHtzdWJDYXRlZ29yeX1gOicnXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9wcm9kdWN0cy8/JHtjYXRlZ29yeVF1ZXJ5fSYke3N1YmNhdGVnb3J5UXVlcnl9YFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvcHJvZHVjdHMvc2ltaWxhci9zYXNgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgW2RhdGEsIGlzTG9hZGluZ109dXNlRmV0Y2godXJsKCkpXHJcblxyXG4gICAgLy8gY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlUHJvZHVjdHMoe1xyXG4gICAgLy8gICAgIHR5cGUsXHJcbiAgICAvLyAgICAgdGV4dDogcm91dGVyLnF1ZXJ5LnRleHQsXHJcbiAgICAvLyAgICAgY2F0ZWdvcnk6IHJvdXRlci5xdWVyeS5jYXRlZ29yeSxcclxuICAgIC8vICAgICBvZmZzZXQ6IDAsXHJcbiAgICAvLyAgICAgbGltaXQ6IGZldGNoTGltaXQsXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgaGFuZGxlTG9hZE1vcmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAvLyBhd2FpdCBmZXRjaE1vcmUoTnVtYmVyKGRhdGEubGVuZ3RoKSwgZmV0Y2hMaW1pdCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVuZGVyQ2FyZCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UHJvZHVjdENhcmRcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX0gaW1hZ2U9e3Byb3BzLnRodW1iSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBwcmljZT17cHJvcHMucHJpY2V9IGtleT17cHJvcHMuX2lkfSBwcm9kdWN0PXtwcm9wc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgeyBpdGVtcywgaGFzTW9yZSB9ID0gZGF0YS5wcm9kdWN0cztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxHcmlkIHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5kYXRhLm1hcCgocHJvZHVjdCwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2FyZChwcm9kdWN0KVxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIHtsb2FkTW9yZSAmJiBkYXRhPy5oYXNNb3JlICYmIChcclxuICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBtdD17JzJyZW0nfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvYWRNb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdzZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9JzFweCBzb2xpZCAjZjFmMWYxJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZCBNb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0R3JpZCIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG4vLyBAdHMtbm9jaGVja1xyXG5leHBvcnQgY29uc3QgR3JpZCA9IHN0eWxlZC5kaXYoXHJcbiAgICB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICBncmlkR2FwOiAnMTBweCcsXHJcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgxLCBtaW5tYXgoMTgwcHgsIDFmcikpJyxcclxuXHJcbiAgICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ0MHB4KSc6IHtcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgyLCBtaW5tYXgoMTgwcHgsIDFmcikpJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpJzoge1xyXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDMsIG1pbm1heCgxODBweCwgMWZyKSknLFxyXG4gICAgICAgICAgICBncmlkR2FwOiAnMjBweCcsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSc6IHtcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgyLCBtaW5tYXgoMTgwcHgsIDFmcikpJyxcclxuICAgICAgICAgICAgZ3JpZEdhcDogJzMwcHgnLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpJzoge1xyXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDMsIG1pbm1heCgxODBweCwgMWZyKSknLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzAwcHgpJzoge1xyXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDQsIG1pbm1heCgyNDBweCwgMWZyKSknLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMjAwcHgpJzoge1xyXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDUsIG1pbm1heCgyNDBweCwgMWZyKSknLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgY29tcG9zZSxcbiAgc3BhY2UsXG4gIGNvbG9yLFxuICBsYXlvdXQsXG4gIGZsZXhib3gsXG4gIHBvc2l0aW9uLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXY8YW55PihcbiAge1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG1pbldpZHRoOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgfSxcbiAgY29tcG9zZShzcGFjZSwgY29sb3IsIGxheW91dCwgZmxleGJveCwgcG9zaXRpb24pXG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzLCBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgc3lzdGVtQ3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XG5pbXBvcnQgeyBjb21wb3NlLCB2YXJpYW50LCBib3JkZXIsIHNwYWNlLCBsYXlvdXQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5kaXY8YW55PihcbiAgKHByb3BzKSA9PlxuICAgIHN5c3RlbUNzcyh7XG4gICAgICBweDogJzE1cHgnLFxuICAgICAgcHk6IDAsXG4gICAgICBmb250U2l6ZTogWydiYXNlJ10sXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBjdXJzb3I6IHByb3BzLmRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiBwcm9wcy5kaXNhYmxlZCA/ICd0ZXh0LmxpZ2h0JyA6ICd3aGl0ZScsXG4gICAgICBiZzogcHJvcHMuZGlzYWJsZWQgPyAnZ3JheS41MDAnIDogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXG4gICAgICBib3JkZXJSYWRpdXM6ICdiYXNlJyxcblxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBwcm9wcy5kaXNhYmxlZCA/ICd0ZXh0LmxpZ2h0JyA6ICd3aGl0ZScsXG4gICAgICAgIGJnOiBwcm9wcy5kaXNhYmxlZCA/ICdncmF5LjUwMCcgOiAncHJpbWFyeS5ob3ZlcicsXG4gICAgICB9LFxuICAgIH0pLFxuICB7XG4gICAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZmxleFNocmluazogMCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzM4cHgnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGJvcmRlcjogMCxcblxuICAgICcmOmZvY3VzJzoge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIHZhcmlhbnQoe1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICBvdXRsaW5lZDoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgIGJnOiAnd2hpdGUnLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICBib3JkZXJDb2xvcjogJ2dyYXkuNTAwJyxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgICBiZzogJ3doaXRlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBiZzogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGJnOiAncHJpbWFyeS5ob3ZlcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgYmc6ICd3aGl0ZScsXG4gICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnZ3JheS41MDAnLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBiZzogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5LmhvdmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgd2lkdGg6IDI2LFxuICAgICAgICBoZWlnaHQ6IDI2LFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICBib3JkZXJDb2xvcjogJ3RleHQucmVndWxhcicsXG4gICAgICAgIGJvcmRlclJhZGl1czogMTMsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcbiAgICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICcmLnNlbGVjdGVkJzoge1xuICAgICAgICAgIGJnOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgIH0sXG4gICAgICAgICcmOmhvdmVyOm5vdCguc2VsZWN0ZWQpJzoge1xuICAgICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICB2YXJpYW50KHtcbiAgICBwcm9wOiAnc2l6ZScsXG4gICAgdmFyaWFudHM6IHtcbiAgICAgIGJpZzoge1xuICAgICAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICAgICAgcHg6IDMwLFxuICAgICAgfSxcbiAgICAgIHNtYWxsOiB7XG4gICAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBjb21wb3NlKGJvcmRlciwgc3BhY2UsIGxheW91dClcbik7XG5jb25zdCByb3RhdGUgPSBrZXlmcmFtZXNgXG4gIGZyb20ge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cbiAgdG8ge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxuYDtcblxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXYoXG4gIChwcm9wcykgPT5cbiAgICBzeXN0ZW1Dc3Moe1xuICAgICAgd2lkdGg6IDE4LFxuICAgICAgaGVpZ2h0OiAxOCxcbiAgICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgICAgYm9yZGVyOiAnM3B4IHNvbGlkIHdoaXRlJyxcbiAgICAgIGJvcmRlclRvcDogYDNweCBzb2xpZCAke3Byb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiAncHJpbWFyeS5yZWd1bGFyJ31gLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ3RyYW5zZm9ybScsXG4gICAgfSksXG4gIGNzc2BcbiAgICBhbmltYXRpb246ICR7cm90YXRlfSAxLjJzIGluZmluaXRlIGxpbmVhcjtcbiAgYFxuKTtcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbG9hZGluZz86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgdHlwZTogJ3N1Ym1pdCcgfCAnYnV0dG9uJztcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn07XG5leHBvcnQgdHlwZSBSZWYgPSBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgUHJvcHM+KFxuICAoeyBjaGlsZHJlbiwgZGlzYWJsZWQsIGxvYWRpbmcgPSBmYWxzZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gICAgPFN0eWxlZEJ1dHRvbiByZWY9e3JlZn0gey4uLnByb3BzfSBkaXNhYmxlZD17ZGlzYWJsZWR9IHJvbGU9XCJidXR0b25cIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxuICAgIDwvU3R5bGVkQnV0dG9uPlxuICApXG4pO1xuIiwiaW1wb3J0IHsgT3ZlcmxheVNjcm9sbGJhcnNDb21wb25lbnQgfSBmcm9tICdvdmVybGF5c2Nyb2xsYmFycy1yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICdvdmVybGF5c2Nyb2xsYmFycy9jc3MvT3ZlcmxheVNjcm9sbGJhcnMuY3NzJztcclxuXHJcbnR5cGUgU2Nyb2xsYmFyUHJvcHMgPSB7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgb3B0aW9ucz86IGFueTtcclxuICAgIHN0eWxlPzogYW55O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNjcm9sbGJhcjogUmVhY3QuRkM8U2Nyb2xsYmFyUHJvcHM+ID0gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8T3ZlcmxheVNjcm9sbGJhcnNDb21wb25lbnRcclxuICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc05hbWV9IG9zLXRoZW1lLXRoaW5gLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9IaWRlOiAnbGVhdmUnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvT3ZlcmxheVNjcm9sbGJhcnNDb21wb25lbnQ+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xyXG5pbXBvcnQgeyB2YXJpYW50IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XHJcbmV4cG9ydCBjb25zdCBDb3VudGVyQm94ID0gc3R5bGVkLmRpdjxhbnk+KFxyXG4gIGNzcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250U2l6ZTogJ2Jhc2UnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0pLFxyXG4gICAge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAyMDAsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB2YXJpYW50KHtcclxuICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgIGhvcml6b250YWw6IHtcclxuICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgaGVpZ2h0OiAzNixcclxuICAgICAgfSxcclxuICAgICAgdmVydGljYWw6IHtcclxuICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnLFxyXG4gICAgICB9LFxyXG4gICAgICBsaWdodEhvcml6b250YWw6IHtcclxuICAgICAgICB3aWR0aDogMTA0LFxyXG4gICAgICAgIGhlaWdodDogMzYsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheS4yMDAnLFxyXG4gICAgICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcclxuICAgICAgfSxcclxuICAgICAgbGlnaHRWZXJ0aWNhbDoge1xyXG4gICAgICAgIHdpZHRoOiAzMCxcclxuICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheS4yMDAnLFxyXG4gICAgICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudGVyQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjxhbnk+KFxyXG4gIHtcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgcGFkZGluZzogMTAsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICcmOmhvdmVyLCAmOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdmFyaWFudCh7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICBsaWdodEhvcml6b250YWw6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQucmVndWxhcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpZ2h0VmVydGljYWw6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQucmVndWxhcicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRlclZhbHVlID0gc3R5bGVkLnNwYW4oe1xyXG4gIHBvaW50ZXJFdmVudHM6ICdub25lJyxcclxufSk7XHJcbkNvdW50ZXJWYWx1ZS5kaXNwbGF5TmFtZSA9ICdDb3VudGVyVmFsdWUnO1xyXG5Db3VudGVyQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0NvdW50ZXJCdXR0b24nO1xyXG5Db3VudGVyQm94LmRpc3BsYXlOYW1lID0gJ0NvdW50ZXJCb3gnO1xyXG5Db3VudGVyQm94LmRlZmF1bHRQcm9wcyA9IHtcclxuICB2YXJpYW50OiAnaG9yaXpvbnRhbCcsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBsdXMsIE1pbnVzIH0gZnJvbSAnQC9hc3NldHMvaWNvbnMvUGx1c01pbnVzJztcclxuaW1wb3J0IHsgQ291bnRlckJveCwgQ291bnRlckJ1dHRvbiwgQ291bnRlclZhbHVlIH0gZnJvbSAnLi9jb3VudGVyLnN0eWxlJztcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBvbkRlY3JlbWVudDogKGU6IEV2ZW50KSA9PiB2b2lkO1xyXG4gIG9uSW5jcmVtZW50OiAoZTogRXZlbnQpID0+IHZvaWQ7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxuICB2YXJpYW50Pzogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50ZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgb25EZWNyZW1lbnQsXHJcbiAgb25JbmNyZW1lbnQsXHJcbiAgdmFsdWUsXHJcbiAgdmFyaWFudCxcclxuICBjbGFzc05hbWUsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvdW50ZXJCb3ggdmFyaWFudD17dmFyaWFudH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICA8Q291bnRlckJ1dHRvbiBvbkNsaWNrPXtvbkRlY3JlbWVudH0gdmFyaWFudD17dmFyaWFudH0+XHJcbiAgICAgICAgPE1pbnVzIC8+XHJcbiAgICAgIDwvQ291bnRlckJ1dHRvbj5cclxuICAgICAgPENvdW50ZXJWYWx1ZT57dmFsdWV9PC9Db3VudGVyVmFsdWU+XHJcbiAgICAgIDxDb3VudGVyQnV0dG9uIG9uQ2xpY2s9e29uSW5jcmVtZW50fSB2YXJpYW50PXt2YXJpYW50fT5cclxuICAgICAgICA8UGx1cyAvPlxyXG4gICAgICA8L0NvdW50ZXJCdXR0b24+XHJcbiAgICA8L0NvdW50ZXJCb3g+XHJcbiAgKTtcclxufTtcclxuIiwiY29uc3QgQ29udmVydEN1cnJlbmN5PShkYXRhLHByaWNlLGZyb209J0dCUCcsdG8pPT57XHJcbiAgICBsZXQgY29udmVydGVkUHJpY2U9MFxyXG4gICAgaWYodG89PT0nR0JQJyl7XHJcbiAgICAgICAgY29udmVydGVkUHJpY2U9cHJpY2VcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc3QgcGFyYW09J0dCUC8nK3RvXHJcbiAgICAgICAgY29uc3QgY3VycmVuY3lEYXRhPWRhdGFbcGFyYW1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIGNvbnZlcnRlZFByaWNlPXByaWNlKmN1cnJlbmN5RGF0YS5yYXRlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnZlcnRlZFByaWNlLnRvRml4ZWQoMilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udmVydEN1cnJlbmN5OyIsIlxyXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgaW5zdGFuY2U6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJy8nLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlcXVlc3RIYW5kbGVyID0gKGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnKSA9PiB7XHJcbiAgICAvLyBNb2RpZnkgY29uZmlnIGhlcmVcclxuICAgIC8vIGlmIChhdXRoLmdldFRva2VuKCkpIHtcclxuICAgIC8vICAgLy8gY29uZmlnLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHthdXRoLmdldFRva2VuKCl9YDtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25maWcudGltZW91dCA9IDMwMDAwO1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufTtcclxuXHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXF1ZXN0SGFuZGxlcik7XHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodW5kZWZpbmVkLCAoZXJyb3I6IEF4aW9zRXJyb3IpID0+IHtcclxuICAgIC8vIGhhbmRsZSBlcnJvclxyXG4gICAgaWYgKGF4aW9zLmlzQ2FuY2VsKGVycm9yKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGByZXF1ZXN0IGNhbmNlbGxlZGApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvcik7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaHR0cCBmcm9tICcuL2h0dHBJbnN0YW5jZSc7XHJcbmltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcyc7XHJcblxyXG5pbnRlcmZhY2UgbWVtU3RvcmVUeXBlcyB7XHJcbiAgICBbeDogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcbmNvbnN0IG1lbVN0b3JlOiBtZW1TdG9yZVR5cGVzID0ge307XHJcblxyXG5pbnRlcmZhY2UgdXNlRmV0Y2hQcm9wcyB7XHJcbiAgICAoXHJcbiAgICAgICAgdXJsOiBzdHJpbmcsXHJcbiAgICAgICAgcHJvcHM/OiB7XHJcbiAgICAgICAgICAgIGNhY2hlPzogYm9vbGVhbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF4aW9zT3B0aW9ucz86IEF4aW9zUmVxdWVzdENvbmZpZ1xyXG4gICAgKTogW2FueSwgYm9vbGVhbiwgYW55LCBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjx7fT4+XTtcclxufVxyXG5cclxuY29uc3QgdXNlRmV0Y2g6IHVzZUZldGNoUHJvcHMgPSAodXJsLCBwcm9wcyA9IHt9LCBheGlvc09wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8YW55PihudWxsKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcbiAgICBjb25zdCBbc2hvdWxkUmVmZXRjaCwgcmVGZXRjaF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgdW5tb3VudGVkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNvdXJjZSA9IGF4aW9zLkNhbmNlbFRva2VuLnNvdXJjZSgpO1xyXG4gICAgICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCBodHRwQ29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5heGlvc09wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZS50b2tlblxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBodHRwKGh0dHBDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1bm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5jYWNoZSkgbWVtU3RvcmVbdXJsXSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdW5tb3VudGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG1lbVN0b3JlW3VybF0gJiYgIXVubW91bnRlZCkge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXREYXRhKG1lbVN0b3JlW3VybF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdldERhdGEoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHVubW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNvdXJjZS5jYW5jZWwoYCR7dXJsfSBjYW5jZWxlZGApO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXJsLCBzaG91bGRSZWZldGNoXSk7XHJcblxyXG4gICAgcmV0dXJuIFtkYXRhLCBpc0xvYWRpbmcsIGVycm9yLCByZUZldGNoXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUZldGNoO1xyXG4iLCJpbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL3NpZGViYXIvQ2F0ZWdvcnlTaWRlYmFyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQge01vZGFsfSBmcm9tICdAcmVkcS9yZXVzZS1tb2RhbCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9PdGhlcnMvY2Fyb3VzZWwvY2Fyb3VzZWxcIjtcclxuaW1wb3J0IHtcclxuICAgIE1haW5Db250ZW50QXJlYSxcclxuICAgIFNpZGViYXJTZWN0aW9uLFxyXG4gICAgQ29udGVudFNlY3Rpb24sXHJcbiAgICBPZmZlclNlY3Rpb24sXHJcbiAgICBNb2JpbGVDYXJvdXNlbERyb3Bkb3duLFxyXG59IGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlcy5zdHlsZSc7XHJcbmltcG9ydCB7c2l0ZU9mZmVyc30gZnJvbSBcIkAvc2l0ZU9mZmVyc1wiO1xyXG5pbXBvcnQgU3RvcmVOYXYgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXQvc3RvcmUtbmF2L3N0b3JlLW5hdlwiO1xyXG5pbXBvcnQgRmVhdHVyZWQgZnJvbSBcIkAvY29tcG9uZW50cy9PdGhlcnMvRmVhdHVyZWQvRmVhdHVyZWRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvbGF5b3V0XCI7XHJcblxyXG50eXBlIFNpZGViYXJDYXRlZ29yeVByb3BzID0ge1xyXG4gICAgZGV2aWNlVHlwZToge1xyXG4gICAgICAgIG1vYmlsZTogYm9vbGVhbjtcclxuICAgICAgICB0YWJsZXQ6IGJvb2xlYW47XHJcbiAgICAgICAgZGVza3RvcDogYm9vbGVhbjtcclxuICAgIH07XHJcbn07XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdC9ncmlkL1Byb2R1Y3RHcmlkXCI7XHJcbmltcG9ydCB7U0VPfSBmcm9tIFwiQC9jb21wb25lbnRzL090aGVycy9zZW9cIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQ2FydFBvcFVwID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9mZWF0dXJlcy9jYXJ0L2NhcnQtcG9wdXBcIiksIHtcclxuICAgIHNzcjogZmFsc2UsXHJcbn0pO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtDYXRlZ29yeUljb259IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0L2hlYWRlci9tZW51L2xlZnQtbWVudS9MZWZ0TWVudVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0Fycm93TmV4dH0gZnJvbSBcIkAvYXNzZXRzL2ljb25zL0Fycm93TmV4dFwiO1xyXG5cclxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGgzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuICBoNHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBIb21lOiBSZWFjdC5GQzxTaWRlYmFyQ2F0ZWdvcnlQcm9wcz4gPSAoe2RldmljZVR5cGV9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtjYXRlZ29yeURhdGF9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcclxuICAgIGNvbnN0IFByb2R1Y3RzR3JpZFRleHQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2NhdGVnb3J5LCBzdWJDYXRlZ29yeSxxdWVyeX0gPSByb3V0ZXIucXVlcnlcclxuICAgICAgICBpZihxdWVyeSl7XHJcbiAgICAgICAgICAgIHJldHVybiA8aDM+XHJcbiAgICAgICAgICAgICAgICBTaG93aW5nIHJlc3VsdHMgZm9yOiB7cXVlcnl9XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3J5RGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlPYmplY3QgPSBjYXRlZ29yeURhdGEuZmluZChkYXRhID0+IGRhdGEuaWQgPT09IGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgU3ViQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YkNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeU9iamVjdC5zdWJDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViQ2F0ZWdvcnlPYmplY3QgPSBjYXRlZ29yeU9iamVjdC5zdWJDYXRlZ29yeS5maW5kKGRhdGEgPT4gZGF0YS5pZCA9PT0gc3ViQ2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dOZXh0Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3N1YkNhdGVnb3J5T2JqZWN0Lm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiA8VGl0bGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5SWNvbiBsaW5rPXtjYXRlZ29yeU9iamVjdC5pbWFnZX0gaGVpZ2h0PXsnNTBweCd9IHdpZHRoPXsnNTBweCd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2NhdGVnb3J5T2JqZWN0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICB7U3ViQ2F0ZWdvcnkoKX1cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdIZXknXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnSGknXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNRdWVyeWluZyA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeSB8fCByb3V0ZXIucXVlcnkucXVlcnkgPyB0cnVlIDogZmFsc2VcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNFTyBkZXNjcmlwdGlvbj17XCJCZXN0IHBsYWNlIHRvIGZpbmQgYWxsIHRoZSBnb29kcy5cIn1cclxuICAgICAgICAgICAgICAgICB0aXRsZT17XCJXaXNlQ2F0LVNob3BwaW5nIG9ubGluZSBoYXMgbmV2ZXIgYmVlbiBlYXNpZXJcIn0vPlxyXG4gICAgICAgICAgICA8TW9kYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vYmlsZUNhcm91c2VsRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdG9yZU5hdi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIGRldmljZVR5cGU9e2RldmljZVR5cGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L01vYmlsZUNhcm91c2VsRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5Db250ZW50QXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T2ZmZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICcyMHB4IC0xMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZGF0YT17c2l0ZU9mZmVyc30gZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX0gbW9iaWxlPXsxfSB0YWJsZXQ9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wPXszfSBsYXB0b3A9ezN9IHR2PXszLjV9IG1pbmlUYWJsZXQ9ezEuNX0gYXV0b1BsYXk9e2ZhbHNlfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09mZmVyU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXNRdWVyeWluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9mZmVyU2VjdGlvbiBsZXNzUGFkZGluZz17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWQgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX0gdGl0bGU9e1wiVG9wIHByb2R1Y3RzXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PZmZlclNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9mZmVyU2VjdGlvbiBsZXNzUGFkZGluZz17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWQgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX0gdGl0bGU9e1wiRmVhdHVyZWQgSXRlbXNcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09mZmVyU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9mZmVyU2VjdGlvbiBsZXNzUGFkZGluZz17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMzBweFwifX0+e1Byb2R1Y3RzR3JpZFRleHQoKX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdHMvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PZmZlclNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYWluQ29udGVudEFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcnRQb3BVcCBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfS8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCB7IENBUlQgfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0OmFueSwgcXVhbnRpdHk6bnVtYmVyLCBjb2xvcj86c3RyaW5nLCBzaXplPzpzdHJpbmcpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5BRERfVE9fQ0FSVCxcclxuICBwcm9kdWN0LFxyXG4gIHF1YW50aXR5LFxyXG4gIGNvbG9yLFxyXG4gIHNpemUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKGNhcnRJZDpzdHJpbmcpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5SRU1PVkVfRlJPTV9DQVJULFxyXG4gIGNhcnRJZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQWxsRnJvbUNhcnQgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuUkVNT1ZFX0FMTF9GUk9NX0NBUlQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3JlYXNlUXVhbnRpdHlDYXJ0ID0gKGNhcnRJZDpzdHJpbmcpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5ERUNSRUFTRV9RVUFOVElUWV9DQVJULFxyXG4gIGNhcnRJZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5jcmVhc2VRdWFudGl0eUNhcnQgPSAoY2FydElkOnN0cmluZykgPT4gKHtcclxuICB0eXBlOiBDQVJULklOQ1JFQVNFX1FVQU5USVRZX0NBUlQsXHJcbiAgY2FydElkLFxyXG59KTtcclxuIiwiaW1wb3J0IHtBVVRILCBTSE9QfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSBcIkAvaG9va3MvdXNlRmV0Y2hcIjtcclxuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXRBdXRoVG9rZW4gZnJvbSBcIkAvcmVkdXgvc2V0QXV0aFRva2VuXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFNvcnQgPSAoc29ydFR5cGU6c3RyaW5nKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX1NPUlQsXHJcbiAgc29ydFR5cGUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFN1YkNhdGVnb3J5ID0gKHN1YkNhdGVnb3J5Om9iamVjdCkgPT4gKHtcclxuICB0eXBlOiBTSE9QLlNFVF9TVUJDQVRFR09SWSxcclxuICBzdWJDYXRlZ29yeSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzZXRDYXRlZ29yeSA9IChjYXRlZ29yeTpvYmplY3QpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5TRVRfQ0FURUdPUlksXHJcbiAgY2F0ZWdvcnksXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVuY3kgPSAoY3VycmVuY3k6b2JqZWN0KSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX0NVUlJFTkNZLFxyXG4gIGN1cnJlbmN5LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHNldERlbGl2ZXJ5QWRkcmVzcyA9IChhZGRyZXNzOm9iamVjdCkgPT4gKHtcclxuICB0eXBlOiBTSE9QLlNFVF9BRERSRVNTLFxyXG4gIGFkZHJlc3MsXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc2V0QmlsbGluZyA9IChiaWxsaW5nOm9iamVjdCkgPT4gKHtcclxuICB0eXBlOiBTSE9QLlNFVF9CSUxMSU5HLFxyXG4gIGJpbGxpbmcsXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc2V0Q0FSRCA9IChjYXJkOm9iamVjdCkgPT4gKHtcclxuICB0eXBlOiBTSE9QLlNFVF9DQVJELFxyXG4gIGNhcmQsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW5jeURhdGEgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6YW55KSA9PiB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnR3ZWx2ZWRhdGEuY29tL2V4Y2hhbmdlX3JhdGU/c3ltYm9sPUdCUC9KUFksR0JQL1VTRCxHQlAvRVVSJmFwaWtleT01MTYyZDQ0MGEzMzM0YzU1OGMyNTNkNjc4ZWQ0ODAyYmApO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTSE9QLlNFVF9DVVJSRU5DWV9EQVRBLFxyXG4gICAgICBkYXRhOmRhdGEsXHJcbiAgICB9KVxyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q2F0ZWdvcnlEYXRhID0gKGRhdGE6b2JqZWN0KSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX0NBVEVHT1JZX0RBVEEsXHJcbiAgZGF0YTpkYXRhLFxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IEdMT0JBTCA9IHtcclxuICBTRVRfTEFOR1VBR0U6IFwiU0VUX0xBTkdVQUdFXCIsXHJcbiAgU0VUX0NVUlJFTkNZOiBcIlNFVF9DVVJSRU5DWVwiLFxyXG4gIFNFVF9DQVRFR09SWTogXCJTRVRfQ0FURUdPUllcIixcclxuICBTRVRfU0VBUkNIOiBcIlNFVF9TRUFSQ0hcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDQVJUID0ge1xyXG4gIEFERF9UT19DQVJUOiBcIkFERF9UT19DQVJUXCIsXHJcbiAgUkVNT1ZFX0ZST01fQ0FSVDogXCJSRU1PVkVfRlJPTV9DQVJUXCIsXHJcbiAgUkVNT1ZFX0FMTF9GUk9NX0NBUlQ6IFwiUkVNT1ZFX0FMTF9GUk9NX0NBUlRcIixcclxuICBERUNSRUFTRV9RVUFOVElUWV9DQVJUOiBcIkRFQ1JFQVNFX1FVQU5USVRZX0NBUlRcIixcclxuICBJTkNSRUFTRV9RVUFOVElUWV9DQVJUOiBcIklOQ1JFQVNFX1FVQU5USVRZX0NBUlRcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXSVNITElTVCA9IHtcclxuICBBRERfVE9fV0lTSExJU1Q6IFwiQUREX1RPX1dJU0hMSVNUXCIsXHJcbiAgUkVNT1ZFX0ZST01fV0lTSExJU1Q6IFwiUkVNT1ZFX0ZST01fV0lTSExJU1RcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9QID0ge1xyXG4gIFNFVF9TT1JUOiBcIlNFVF9TT1JUXCIsXHJcbiAgU0VUX1NVQkNBVEVHT1JZOiBcIlNFVF9TVUJDQVRFR09SWVwiLFxyXG4gIFNFVF9DQVRFR09SWTogXCJTRVRfQ0FURUdPUllcIixcclxuICBTRVRfQ0FURUdPUllfREFUQTogXCJTRVRfQ0FURUdPUllfREFUQVwiLFxyXG4gIFNFVF9DVVJSRU5DWTogXCJTRVRfQ1VSUkVOQ1lcIixcclxuICBTRVRfQUREUkVTUzogXCJTRVRfQUREUkVTU1wiLFxyXG4gIFNFVF9CSUxMSU5HOiBcIlNFVF9CSUxMSU5HXCIsXHJcbiAgU0VUX0NBUkQ6IFwiU0VUX0NBUkRcIixcclxuICBTRVRfQ1VSUkVOQ1lfREFUQTogXCJTRVRfQ1VSUkVOQ1lfREFUQVwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgRk9STSA9IHtcclxuICBTRVRfQ1VSUkVOVF9GT1JNOiBcIlNFVF9DVVJSRU5UX0ZPUk1cIixcclxufTtcclxuZXhwb3J0IGNvbnN0IEFVVEggPSB7XHJcbiAgTE9HX0lOOiBcIkxPR19JTlwiLFxyXG4gIExPR19JTl9FUlJPUjogXCJMT0dfSU5fRVJST1JcIixcclxuICBTSUdOX1VQX0VSUk9SOlwiU0lHTl9VUF9FUlJPUlwiLFxyXG4gIFNJR05fVVA6XCJTSUdOX1VQXCIsXHJcbiAgTE9HX09VVDpcIkxPR19PVVRcIixcclxuICBMT0FEX1VTRVI6XCJMT0FEX1VTRVJcIixcclxuICBMT0FEX1VTRVJfRkFJTDpcIkxPQURfVVNFUl9GQUlMXCIsXHJcbiAgT1JERVJfU1VDQ0VTUzpcIk9SREVSX1NVQ0NFU1NcIixcclxuICBPUkRFUl9TVUNDRVNTX0ZBSUw6XCJPUkRFUl9TVUNDRVNTX0ZBSUxcIixcclxufTtcclxuZXhwb3J0IGludGVyZmFjZSBDYXJ0QWN0aW9uT2JqZWN0IHtcclxuICB0eXBlOnN0cmluZyxcclxuICBwcm9kdWN0OnN0cmluZyxcclxuICBxdWFudGl0eTpOdW1iZXIsXHJcbiAgY29sb3I6c3RyaW5nLFxyXG4gIHNpemU6c3RyaW5nLFxyXG5cclxufVxyXG4iLCJpbXBvcnQgT2ZmZXJPbmUgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3Byb21vdGlvbi9vZmZlci0xLnBuZyc7XHJcbmltcG9ydCBPZmZlclRocmVlIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9wcm9tb3Rpb24vb2ZmZXItMy5wbmcnO1xyXG5pbXBvcnQgT2ZmZXJUd28gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3Byb21vdGlvbi9vZmZlci0yLnBuZyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2l0ZU9mZmVycyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgIGltZ1NyYzogT2ZmZXJPbmUsXHJcbiAgICAgICAgYWx0OiAnT2ZmZXIgMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgaW1nU3JjOiBPZmZlclR3byxcclxuICAgICAgICBhbHQ6ICdPZmZlciAyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICczJyxcclxuICAgICAgICBpbWdTcmM6IE9mZmVyVGhyZWUsXHJcbiAgICAgICAgYWx0OiAnT2ZmZXIgMycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgaW1nU3JjOiBPZmZlck9uZSxcclxuICAgICAgICBhbHQ6ICdPZmZlciAxJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcyJyxcclxuICAgICAgICBpbWdTcmM6IE9mZmVyVHdvLFxyXG4gICAgICAgIGFsdDogJ09mZmVyIDInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzMnLFxyXG4gICAgICAgIGltZ1NyYzogT2ZmZXJUaHJlZSxcclxuICAgICAgICBhbHQ6ICdPZmZlciAzJyxcclxuICAgIH0sXHJcbl07XHJcbiIsIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVRvdGFsUHJpY2UgPSAoYXJyOlthbnldKSA9PiB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5kaXNjb3VudCkge1xyXG4gICAgICAgICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgPyAoaXRlbS5wcmljZSAtIGl0ZW0uZGlzY291bnQpICogaXRlbS5jYXJ0UXVhbnRpdHlcclxuICAgICAgICAgICAgICAgIDogaXRlbS5wcmljZSAtIGl0ZW0uZGlzY291bnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG90YWwgKz0gaXRlbS5jYXJ0UXVhbnRpdHkgPyBpdGVtLnByaWNlICogaXRlbS5jYXJ0UXVhbnRpdHkgOiBpdGVtLnByaWNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG59O1xyXG5leHBvcnQgY29uc3QgaXNJbkNhcnQ9KGFycjpbYW55XSxpZCk9PntcclxuICAgIHJldHVybiBhcnIuc29tZSgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRJdGVtQ2FydFF0eSA9IChhcnI6W2FueV0saWQ6c3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtPWFyci5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XHJcbiAgICByZXR1cm4gaXRlbT8uY2FydFF1YW50aXR5P2l0ZW0uY2FydFF1YW50aXR5Om51bGxcclxufTsiLCJleHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMPSdodHRwOi8vbG9jYWxob3N0OjUwMDAnXHJcbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1DbG91ZGluYXJ5SW1hZ2U9KHVybCx3aWR0aCxoZWlnaHQpPT57XHJcbiAgICAvLyBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93aXNlY2FydC9pbWFnZS91cGxvYWQvd18xNTAsaF8zMDAsY19maWxsL3YxNjE3NDQxOTcxL3JlM2xmMGJlb3hkcnc0aGRxYmViLnBuZ1xyXG4gICAgY29uc3RbZmlyc3QsbGFzdF09dXJsLnNwbGl0KCcvdXBsb2FkLycpXHJcbiAgICByZXR1cm4gZmlyc3QrYC91cGxvYWQvd18ke3dpZHRofSxoXyR7aGVpZ2h0fSxjX2ZpbGwvYCtsYXN0XHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHt0aGVtZUdldH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmV4cG9ydCBjb25zdCBNb2JpbGVDYXJvdXNlbERyb3Bkb3duID0gc3R5bGVkLmRpdmBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIG1hcmdpbi10b3A6IDcycHg7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4zMDAnLCAnI2Y0ZjRmNCcpfTtcclxuYDtcclxuXHJcbmNvbnN0IE1haW5Db250ZW50QXJlYSA9IHN0eWxlZC5tYWluYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjIwMCcsICcjZjdmN2Y3Jyl9O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogcGFkZGluZy1yaWdodCAwLjM1cyBlYXNlLWluLW91dDtcclxuYDtcclxuXHJcbmNvbnN0IFNpZGViYXJTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICB3aWR0aDogMjgwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMzBweCAzMHB4IDUwcHg7XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDcuNXB4IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggNTBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY3cHgpIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweCA1MHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm9mZmVyLXNsaWRlciB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMzBweCAzMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE9mZmVyU2VjdGlvbiA9IHN0eWxlZC5kaXY8e2xlc3NQYWRkaW5nPzpib29sZWFufT5gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogICAke3Byb3BzID0+IHByb3BzLmxlc3NQYWRkaW5nID8gXCIzMHB4IDYwcHggMCA2MHB4XCIgOiBcIjYwcHggNjBweCAwIDYwcHhcIn07XHJcbmJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuNTAwJywgJyNmMWYxZjEnKX07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gICAgLnByZXZCdXR0b24ge1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZXh0QnV0dG9uIHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICAucHJldkJ1dHRvbiB7XHJcbiAgICAgIGxlZnQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubmV4dEJ1dHRvbiB7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGluZyA9IHN0eWxlZC5oMmBcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy54bCcsICcyNCcpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA1MHB4IDEwcHggMjBweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0c1JvdyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4yMDAnLCAnI2Y3ZjdmNycpfTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTcuNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNy41cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RzQ29sID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAwIDAgMjAlO1xyXG4gIG1heC13aWR0aDogMjAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjUwcHgpIHtcclxuICAgIGZsZXg6IDAgMCAyNSU7XHJcbiAgICBtYXgtd2lkdGg6IDI1JTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgZmxleDogMCAwIDMzLjMzMzMzMzMlO1xyXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzJTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg5OXB4KSBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDcuNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNy41cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZmxleDogMCAwIDUwJTtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5MHB4KSB7XHJcbiAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQge1xyXG4gICAgSGVhZGVyU2VjdGlvbixcclxuICAgIE1haW5Db250ZW50QXJlYSxcclxuICAgIFNpZGViYXJTZWN0aW9uLFxyXG4gICAgQ29udGVudFNlY3Rpb24sXHJcbiAgICBPZmZlclNlY3Rpb24sXHJcbiAgICBIZWFkaW5nLFxyXG4gICAgUHJvZHVjdHNDb2wsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWRxL3JldXNlLW1vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL2Nzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3MtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibGlnaHQtdG9hc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvdmVybGF5c2Nyb2xsYmFycy1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb250ZW50LWxvYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVzaXplLW9ic2VydmVyLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1zeXN0ZW1cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==