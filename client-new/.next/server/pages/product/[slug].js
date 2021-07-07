module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/product/[slug]": 0
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
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/product/[slug].tsx");
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

/***/ "./src/assets/icons/LongArrowLeft.tsx":
/*!********************************************!*\
  !*** ./src/assets/icons/LongArrowLeft.tsx ***!
  \********************************************/
/*! exports provided: LongArrowLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongArrowLeft", function() { return LongArrowLeft; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\LongArrowLeft.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const LongArrowLeft = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "8.003",
    viewBox: "0 0 12 8.003"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      "data-name": "_ionicons_svg_ios-arrow-round-back (2)",
      d: "M116.447,160.177a.545.545,0,0,1,0,.767l-2.53,2.538h9.641a.542.542,0,0,1,0,1.084h-9.641l2.534,2.538a.549.549,0,0,1,0,.767.54.54,0,0,1-.763,0l-3.435-3.46a.608.608,0,0,1-.113-.171.517.517,0,0,1-.042-.208.543.543,0,0,1,.154-.379l3.435-3.46A.531.531,0,0,1,116.447,160.177Z",
      transform: "translate(-112.1 -160.023)",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/NoCartBag.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/NoCartBag.tsx ***!
  \****************************************/
/*! exports provided: NoCartBag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoCartBag", function() { return NoCartBag; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\NoCartBag.tsx";

const NoCartBag = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "231.91",
    height: "292",
    viewBox: "0 0 231.91 292",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("linearGradient", {
        id: "linear-gradient",
        x1: "1",
        y1: "0.439",
        x2: "0.369",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: "0",
          stopColor: "#029477"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: "1",
          stopColor: "#009e7f"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      id: "no_cart_in_bag_2",
      "data-name": "no cart in bag 2",
      transform: "translate(-1388 -351)",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ellipse", {
        id: "Ellipse_2873",
        "data-name": "Ellipse 2873",
        cx: "115.955",
        cy: "27.366",
        rx: "115.955",
        ry: "27.366",
        transform: "translate(1388 588.268)",
        fill: "#ddd",
        opacity: "0.25"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18691",
        "data-name": "Path 18691",
        d: "M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z",
        transform: "translate(1403 381)",
        fill: "#009e7f"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Rectangle_1852",
        "data-name": "Rectangle 1852",
        d: "M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z",
        transform: "translate(1403 381)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Rectangle_1853",
        "data-name": "Rectangle 1853",
        d: "M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z",
        transform: "translate(1403 381)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18685",
        "data-name": "Path 18685",
        d: "M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z",
        transform: "translate(1056.69 164.944)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18686",
        "data-name": "Path 18686",
        d: "M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z",
        transform: "translate(1057.793 95.684)",
        fill: "#009e7f"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        id: "Ellipse_2874",
        "data-name": "Ellipse 2874",
        cx: "28.689",
        cy: "28.689",
        r: "28.689",
        transform: "translate(1473.823 511.046)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        id: "Ellipse_2875",
        "data-name": "Ellipse 2875",
        cx: "15.046",
        cy: "15.046",
        r: "15.046",
        transform: "translate(1481.401 547.854) rotate(-45)",
        fill: "#009e7f"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18687",
        "data-name": "Path 18687",
        d: "M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
        transform: "translate(1060.579 -35.703)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18688",
        "data-name": "Path 18688",
        d: "M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
        transform: "translate(1060.566 -35.704)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18689",
        "data-name": "Path 18689",
        d: "M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
        transform: "translate(970.304 -35.704)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18690",
        "data-name": "Path 18690",
        d: "M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
        transform: "translate(970.318 -35.703)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18692",
        "data-name": "Path 18692",
        d: "M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z",
        transform: "translate(1292.301 101.536)",
        fill: "url(#linear-gradient)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18693",
        "data-name": "Path 18693",
        d: "M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z",
        transform: "translate(1118.301 101.536)",
        fill: "url(#linear-gradient)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
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

/***/ "./src/components/404/ProductNotFound.tsx":
/*!************************************************!*\
  !*** ./src/components/404/ProductNotFound.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_cart_cart_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/features/cart/cart.style */ "./src/features/cart/cart.style.tsx");
/* harmony import */ var _assets_icons_NoCartBag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/NoCartBag */ "./src/assets/icons/NoCartBag.tsx");
/* harmony import */ var _components_Others_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Others/button/button */ "./src/components/Others/button/button.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\404\\ProductNotFound.tsx";






const NotFoundContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
  margin-top: 90px;
`;

const ProductNotFound = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NotFoundContainer, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_features_cart_cart_style__WEBPACK_IMPORTED_MODULE_2__["NoProductImg"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_NoCartBag__WEBPACK_IMPORTED_MODULE_3__["NoCartBag"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_features_cart_cart_style__WEBPACK_IMPORTED_MODULE_2__["NoProductMsg"], {
      children: ["Looking for something?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 39
      }, undefined), "We are sorry the product you are looking for doesn't exist."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_features_cart_cart_style__WEBPACK_IMPORTED_MODULE_2__["NoProductImg"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_button_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "button",
        onClick: () => router.push('/'),
        children: "Go back to Homepage"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductNotFound);

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAADwCAYAAADxXop4AAAHPElEQVR4Xu3d23La2BaGUREOPpTf/0mNwYCsvthFtoMdix+WxBIZ46qrsjpxutpfNOXlmVnXdV0DEPjVdwDglHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcQWfQco53A4/P7n+XzezGazH89DrYRjQF3XNbvdrtntdk3btl9+fD6fN4vFonl8fBQRJmXWdV3Xd4jcfr9v3t7emnP+885ms+bh4aF5fHzsOwpVEI4BbDab5v39ve/YF8vlsnl+fvb0QfW8HC3s0mg0n55SoHbCUdB+v784Gkf7/b7Zbrd9x+CmhKOgzWbTd+Qs7+/vZ70bgVsRjkJ2u13z8fHRd+wsXdd56qBqwlHIfr/vOxIp/fNBScJRSOlP9I+PD+MK1RKOin13aQxqIBwFeDL40+er9dwn4SjAha3/a9u2Wa/X7qPcOeEoZIh4zOfzviNV6bru9zX74/focJ+Eo5Dlctl3JDLF755dr9d/vJd5e3szttwp4SikdDhWq1XfkapsNptvI7Fer4vdb6EewlHIcrksNlrMZrNJhWO32/31qn3Xdc16vfYC+c4IR0FPT099R87y9PQ0mTGlbdveq/bnnGFahKOgxWLRPD8/9x370Wq1mszTRtd1zevr61lPE7vdzjX6OyIcha1Wq4vj8fDwcPG/ewvnRuNou90Wv2HLbVjkM5DD4dBsNpuzbn/++vWreXp6Kv6CdUhvb28Xfbl1Nps1Ly8vxd4HcRvCMbDdbtccDodmv99/+dN5uVw2y+VyMqPJ0W63u+qC13w+b15eXibzHoevhGNkbdtO+k/bw+HQvL6+9h3rtVgsmpeXl75jVMo7jpFNORofHx/Ner3uO3aW4yjHNAkHZxniPsb7+/tF70m4PeGoWMlP0mud+6I3NdTPy7CEo1Kl3iWUsN1uB3sySO6CUA/hqNDxu0zbtr35pakxtq4f48F0CEeFttvt728M2263N3uUb9v2qi+7Jsb8tbiecFTmcDh8+YaxW3xCfd6tMRY7PKZDOCpy/GQ9dYuR5XS3xljs8JgG4ajI5xHlux8b6xP5b7s1xmKHR/2EoxLfjSinxhhZftqtMZYh7oxQlnBU4G8jyqmhR5aa9mbU9LHwlXBU4KcR5dRQI0uN9yns8KiXcNzYOSPKqXOeTlK1RePIDo86CccNnTuinCo9shwvm9Wq9o/vXyQcN5SMKKdKjSxTuDtxizsl/Ew4buSSEeXUJU8rnx0Oh6t/jrEc/4Y46iAcN3DpiHLqmpGl5G6NsdjhUQ/huIFrRpRTl4wsU74nYYdHHYRjZCVGlFPp08vUd2BM/eO/B8IxolIjyqlkZBlyt8ZYarxz8q8RjhGVHFFOnTOyjLFbYyx2eNyWcIykbdviI8qpn55m7nHfxT3+nqZCOEYyxv/gfxtZ7vkexBTuodwj4RjBOWNEKd/9WrfarTEWOzzGJxwDS15clvL56ebWuzXGYofHuIRjYGOMKKeOsapht8ZYpnw3ZYr8FZAD2m63oz9tfDabzf65T6TVatU8Pz/3HeNKnjgGcosR5dS/Fo3GDo/RCMdAbjGi8D92eAxPOAYw5ldR+J4dHsMSjsJqGFG477srNRCOwowo9bDDYzjCUZARpT52eAxDOAoxotTLDo/yhKMQI0rd7PAoSzgKMKLUzw6PsoTjSkaU6bDDoxzhuJIRZVrs8ChDOK5gRJkmOzyuJxwXMqJMmx0e1xGOC3ncnT47PC4nHBcwotwHOzwuJxwhI8p9advWzdILCEfIiHJ/7PDICUfAiHK/7PDILPoO8KfHx8e+I0yUF6Xns3MUiBlVgJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOI/Qe0gyoTzEMWZQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/components/Others/multi-carousel/multi-carousel.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/Others/multi-carousel/multi-carousel.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Others\\multi-carousel\\multi-carousel.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const SingleItem = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.li`
  border: 2px solid #8fdb87;
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radii.base', '6px')};
  margin-right: 20px;
  padding: 0;
  outline: none;
  width: 70px;
  height: auto;
  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }

  &.custom-dot--active {
    border: 2px solid #009E7F;
  }
`;
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 200
    },
    items: 1
  }
};

const CarouselWithCustomDots = (_ref) => {
  let {
    items = [],
    deviceType: {
      mobile,
      tablet,
      desktop
    },
    title
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["items", "deviceType", "title"]);

  const children = items.slice(0, 6).map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    src: item,
    alt: title,
    style: {
      minWidth: 'auto',
      height: 'auto',
      position: 'relative',
      margin: 'auto'
    },
    className: "product-image"
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, undefined));
  const images = items.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    src: item.url,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      position: 'relative'
    }
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, undefined));

  const CustomDot = ({
    index,
    onClick,
    active,
    carouselState: {
      currentSlide,
      deviceType
    }
  }) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SingleItem, {
      "data-index": index,
      onClick: () => onClick(),
      className: `custom-dot ${active && 'custom-dot--active'}`,
      children: react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.toArray(images)[index]
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined);
  };

  let deviceType = 'desktop';

  if (mobile) {
    deviceType = 'mobile';
  }

  if (tablet) {
    deviceType = 'tablet';
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
    showDots: true,
    ssr: true,
    infinite: true,
    slidesToSlide: 1,
    containerClass: "carousel-with-custom-dots",
    responsive: responsive,
    deviceType: deviceType,
    autoPlay: false,
    arrows: false,
    customDot: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CustomDot, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 18
    }, undefined)
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselWithCustomDots);

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

/***/ "./src/components/Product/details/ProductDetails.style.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/Product/details/ProductDetails.style.tsx ***!
  \*****************************************************************/
/*! exports provided: ProductDetailsWrapper, ReviewTitle, ProductPreview, BackButton, ProductInfo, SaleTag, DiscountPercent, ProductTitlePriceWrapper, ProductTitle, ProductPriceWrapper, ProductPrice, SalePrice, ProductWeight, ProductDescription, ProductCartWrapper, ProductCartBtn, ButtonText, ProductMeta, MetaSingle, MetaItem, RelatedItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsWrapper", function() { return ProductDetailsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewTitle", function() { return ReviewTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPreview", function() { return ProductPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButton", function() { return BackButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfo", function() { return ProductInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleTag", function() { return SaleTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountPercent", function() { return DiscountPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTitlePriceWrapper", function() { return ProductTitlePriceWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTitle", function() { return ProductTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPriceWrapper", function() { return ProductPriceWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPrice", function() { return ProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePrice", function() { return SalePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductWeight", function() { return ProductWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescription", function() { return ProductDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCartWrapper", function() { return ProductCartWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCartBtn", function() { return ProductCartBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonText", function() { return ButtonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMeta", function() { return ProductMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaSingle", function() { return MetaSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaItem", function() { return MetaItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedItems", function() { return RelatedItems; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const ProductDetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;
const ReviewTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3`
text-align: center
`;
const ProductPreview = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 50%;
  padding: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  img {
    display: block;
    max-width: 100%;
    max-height: 450px;
    height: auto;
  }

  @media (max-width: 990px) {
    padding: 30px 40px 60px;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 30px 25px 60px;
    order: 0;
  }
`;
const BackButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: absolute;
  top: 60px;
  left: 60px;
  z-index: 999;

  @media (max-width: 990px) {
    top: 20px;
    left: 25px;
  }
  .reusecore__button {
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798C')};
    height: 30px;
    .btn-icon {
      margin-right: 5px;
    }
    .btn-text {
      padding: 0;
    }
  }
`;
const ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 50%;
  border-left: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1')};
  padding: 55px 60px;

  @media (max-width: 990px) {
    padding: 30px 40px;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 30px 25px;
    border: 0;
    order: 1;
  }
`;
const SaleTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-size: 12px;
  font-weight: 700;
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.alternate', '#f4c243')};
  padding: 0 10px;
  line-height: 24px;
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.medium', '12px')};
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 20px;
`;
const DiscountPercent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.xs', '12')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  line-height: 24px;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary.regular', '#ff5b60')};
  padding-left: 20px;
  padding-right: 15px;
  position: relative;
  display: inline-block;
  position: absolute;
  bottom: 180px;
  right: -60px;
  -webkit-transform: translate3d(0, 0, 1px);
  transform: translate3d(0, 0, 1px);

  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 12px 0;
    border-color: transparent ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary.regular', '#ff5b60')}
      transparent transparent;
  }

  &:after {
    content: '';
    position: absolute;
    left: -8px;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 12px 8px;
    border-color: transparent transparent
      ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary.regular', '#ff5b60')} transparent;
  }
`;
const ProductTitlePriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
`;
const ProductTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.heading', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.lg', '21')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  line-height: 1.5;
  display: flex;

  @media (max-width: 767px) {
    word-break: break-word;
  }
`;
const ProductPriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 25px;
  line-height: 31px;

  @media (max-width: 767px) {
    margin-left: 15px;
  }
`;
const ProductPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px + 1px);
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009E7F')};
`;
const SalePrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow.regular', '#FFAD5E')};
  font-style: italic;
  padding: 0 5px;
  overflow: hidden;
  position: relative;
  margin-right: 10px;

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
const ProductWeight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798C')};
`;
const ProductDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.medium', '#424561')};
  line-height: 2;
  margin-top: 30px;
`;
const ProductCartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;
const ProductCartBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  .cart-button {
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;

    .btn-icon {
      margin-right: 5px;

      svg {
        width: 14px;
        height: auto;
        @media (max-width: 990px) {
          width: 14px;
        }
      }
    }
  }
  .quantity {
    width: 115px;
    height: 38px;
  }
`;
const ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  @media (max-width: 767px) {
    display: none;
  }
`;
const ProductMeta = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-top: 60px;

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;
const MetaSingle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-wrap: wrap;
 align-items: center;
`;
const MetaItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size:${props => props.category ? '18px' : '13px'};
      font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: #ffffff;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color:${props => props.category ? '#0D1136' : '#1c1e32'};;
  padding: 0 15px;
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
  cursor: pointer;
  height: ${props => props.category ? '45px' : '40px'};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RelatedItems = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-top: 70px;
  margin-left: 55px;
  margin-right: 55px;

  @media (max-width: 990px) {
    margin-top: 50px;
    margin-left: 15px;
    margin-right: 15px;
  }
  > h2 {
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.heading', 'sans-serif')};
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.lg', '21')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
    line-height: 1.2;
    margin-bottom: 30px;
    @media (max-width: 767px) {
      margin-left: 0;
      margin-bottom: 25px;
    }
  }

  > div > div {
    flex: 0 0 20%;
    max-width: 20%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;

    @media (max-width: 1500px) {
      flex: 0 0 20%;
      max-width: 20%;
    }
    @media (max-width: 1400px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
    @media (max-width: 1060px) {
      flex: 0 0 33.3333333%;
      max-width: 33.3333333%;
    }
    @media (max-width: 1199px) and (min-width: 991px) {
      padding-left: 10px;
      padding-right: 10px;
    }
    @media (max-width: 768px) {
      padding-left: 7.5px;
      padding-right: 7.5px;
      margin-bottom: 15px;
    }
    @media (max-width: 767px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;

/***/ }),

/***/ "./src/components/Product/details/ProductDetails.tsx":
/*!***********************************************************!*\
  !*** ./src/components/Product/details/ProductDetails.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Others_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Others/button/button */ "./src/components/Others/button/button.tsx");
/* harmony import */ var _components_Product_details_truncate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Product/details/truncate */ "./src/components/Product/details/truncate.tsx");
/* harmony import */ var _ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductDetails.style */ "./src/components/Product/details/ProductDetails.style.tsx");
/* harmony import */ var _assets_icons_LongArrowLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/icons/LongArrowLeft */ "./src/assets/icons/LongArrowLeft.tsx");
/* harmony import */ var _assets_icons_CartIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/icons/CartIcon */ "./src/assets/icons/CartIcon.tsx");
/* harmony import */ var _components_Others_multi_carousel_multi_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Others/multi-carousel/multi-carousel */ "./src/components/Others/multi-carousel/multi-carousel.tsx");
/* harmony import */ var _components_cart_counter_counter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/cart/counter/counter */ "./src/components/cart/counter/counter.tsx");
/* harmony import */ var _grid_ProductGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../grid/ProductGrid */ "./src/components/Product/grid/ProductGrid.tsx");
/* harmony import */ var _components_Product_StarRating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/Product/StarRating */ "./src/components/Product/StarRating.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_cartUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utils/cartUtils */ "./src/utils/cartUtils.ts");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/redux/actions/cartActions */ "./src/redux/actions/cartActions.ts");
/* harmony import */ var _assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/assets/icons/ArrowNext */ "./src/assets/icons/ArrowNext.tsx");
/* harmony import */ var _components_Product_details_Review_ReviewComponent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/Product/details/Review/ReviewComponent */ "./src/components/Product/details/Review/ReviewComponent.tsx");


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Product\\details\\ProductDetails.tsx";


















const ProductDetails = ({
  product,
  deviceType
}) => {
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"])(state => state.cartReducer);
  const {
    currency: {
      symbol
    }
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"])(state => state.shopReducer);
  const cartQuantity = Object(_utils_cartUtils__WEBPACK_IMPORTED_MODULE_14__["getItemCartQty"])(cartState, product.id);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useDispatch"])();

  const handleAddClick = e => {
    e.stopPropagation();
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_15__["addToCart"])(product, 1));
  };

  const handleRemoveClick = e => {
    e.stopPropagation();
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_15__["addToCart"])(product, -1));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsWrapper"], {
      className: "product-card",
      dir: "ltr",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ProductPreview"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["BackButton"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_button_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "button",
            size: "small",
            style: {
              backgroundColor: '#ffffff',
              border: '1px solid #f1f1f1',
              color: '#77798c'
            },
            onClick: next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_LongArrowLeft__WEBPACK_IMPORTED_MODULE_7__["LongArrowLeft"], {
              style: {
                marginRight: 5
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, undefined), "Back              "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, undefined), product.thumbImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_multi_carousel_multi_carousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          items: [product.thumbImage, ...product.images],
          deviceType: deviceType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 33
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_multi_carousel_multi_carousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          items: ['https://res.cloudinary.com/wisecart/image/upload/v1622387938/nwxgnej1x6yvugrb8lzv.png'],
          deviceType: deviceType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ProductInfo"], {
        dir: 'ltr',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ProductTitlePriceWrapper"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ProductTitle"], {
            children: product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ProductPriceWrapper"], {
            children: [product.discountInPercent ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["SalePrice"], {
              children: [symbol, product.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 21
            }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ProductPrice"], {
              children: [symbol, product.salePrice ? product.salePrice : product.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_StarRating__WEBPACK_IMPORTED_MODULE_12__["default"], {
          rating: 4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ProductDescription"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_truncate__WEBPACK_IMPORTED_MODULE_5__["default"], {
            character: 600,
            more: "Read More",
            less: "Show Less",
            text: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ProductCartWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ProductCartBtn"], {
            children: !cartQuantity ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_button_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              className: "cart-button",
              variant: "secondary",
              borderRadius: 100,
              onClick: handleAddClick,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_CartIcon__WEBPACK_IMPORTED_MODULE_8__["CartIcon"], {
                mr: 2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 23
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ButtonText"], {
                children: "Cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 23
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 21
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cart_counter_counter__WEBPACK_IMPORTED_MODULE_10__["Counter"], {
              value: cartQuantity,
              onDecrement: handleRemoveClick,
              onIncrement: handleAddClick
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ProductMeta"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["MetaSingle"], {
            children: [product.category && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: `/?category=${product.category}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["MetaItem"], {
                  category: true,
                  children: product.category
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 27
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 25
              }, undefined)
            }, `link-${product.category}`, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_16__["ArrowNext"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 17
            }, undefined), product.subCategory && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: `/?category=${product.subCategory}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["MetaItem"], {
                  category: false,
                  children: product.subCategory
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 21
              }, undefined)
            }, `link-${product.subCategory}`, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["ProductPreview"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["BackButton"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_button_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            title: "Back",
            intlButtonId: "backBtn",
            iconPosition: "left",
            size: "small",
            style: {
              backgroundColor: '#ffffff',
              border: '1px solid #f1f1f1',
              color: '#77798c'
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_LongArrowLeft__WEBPACK_IMPORTED_MODULE_7__["LongArrowLeft"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 25
            }, undefined),
            onClick: next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_multi_carousel_multi_carousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          items: product.gallery,
          deviceType: deviceType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_Review_ReviewComponent__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_6__["RelatedItems"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Related Items"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_grid_ProductGrid__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductDetails);

/***/ }),

/***/ "./src/components/Product/details/Review/AddReview.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Product/details/Review/AddReview.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_checkouts_Address_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/features/checkouts/Address.style */ "./src/features/checkouts/Address.style.tsx");
/* harmony import */ var _components_Others_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/button/button */ "./src/components/Others/button/button.tsx");
/* harmony import */ var _hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useLoginForm */ "./src/hooks/useLoginForm.ts");
/* harmony import */ var _components_Product_StarRating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Product/StarRating */ "./src/components/Product/StarRating.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Product\\details\\Review\\AddReview.tsx";







const TextArea = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.textarea`
  width: 100%;
  height: 200px;
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div`
  width: 100%;
  text-align: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_7__["themeGet"])('colors.white', '#ffffff')};
  max-width: 450px;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div`
  
  padding: 40px 60px 0;

  @media (max-width: 768px) {
    padding: 40px 30px 0;
  }
`;

const AddReview = () => {
  const {
    inputs,
    handleInputChange
  } = Object(_hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_4__["useLoginForm"])();

  const handleSubmit = e => {
    e.preventDefault();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_StarRating__WEBPACK_IMPORTED_MODULE_5__["default"], {
        rating: 4,
        size: "20%"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_features_checkouts_Address_style__WEBPACK_IMPORTED_MODULE_2__["FieldWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
          id: "name",
          placeholder: "Address Line 2 ",
          name: "address2",
          onChange: handleInputChange,
          value: inputs.address2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_button_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: handleSubmit,
        type: "submit",
        style: {
          width: '100%',
          height: '44px'
        },
        children: "Add this review"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AddReview);

/***/ }),

/***/ "./src/components/Product/details/Review/ReviewCard.tsx":
/*!**************************************************************!*\
  !*** ./src/components/Product/details/Review/ReviewCard.tsx ***!
  \**************************************************************/
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
/* harmony import */ var _components_Product_StarRating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Product/StarRating */ "./src/components/Product/StarRating.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Product\\details\\Review\\ReviewCard.tsx";



const ReviewCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 709px;
  width: 100%;
  max-height: 250px;
  background: #ffffff;
  border-radius: 10px;
  margin: 0.5px 0px;
  box-shadow: #eeeeee 2px 2px 2px 2px;
`;
const ReviewHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #000000;
  font-weight: bold;`;
const NameGroup = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  align-items: center;
`;
const Initials = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    margin-right: 12px;
    border-radius: 50%;
    background: #d56a6a;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  color: #2b2b2b;
  font-weight: 400;
  margin: 0px 45px;
`;
const Details = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 45px;
  align-items: center;
  color: #8c8aa7;
`;
const ShareGroup = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  padding: 8px;
  color: white;
  background: #104D92;
  border-radius: 5px;
  cursor: pointer;
`;

const ReviewCard = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReviewCardContainer, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReviewHeader, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NameGroup, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Initials, {
          children: "A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Alice Banks"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_StarRating__WEBPACK_IMPORTED_MODULE_3__["default"], {
        rating: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
      children: "The device has a clean design, and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Details, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "review-date",
        children: "Feb 13, 2021"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShareGroup, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Share"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewCard);

/***/ }),

/***/ "./src/components/Product/details/Review/ReviewComponent.style.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/Product/details/Review/ReviewComponent.style.tsx ***!
  \*************************************************************************/
/*! exports provided: TagsWrapper, ReviewsContainer, ReviewContainer, AddReviewContainer, TagsHeader, TagsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsWrapper", function() { return TagsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsContainer", function() { return ReviewsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewContainer", function() { return ReviewContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewContainer", function() { return AddReviewContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsHeader", function() { return TagsHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsContainer", function() { return TagsContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const TagsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  max-height: 130px;
  margin: 35px;

`; // export const ReviewsWrapper=styled.div`
//   height: 417px;
//
//
// `

const ReviewsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  
`;
const ReviewContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
`;
const AddReviewContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
`;
const TagsHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 14px;

`;
const TagsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  .tag {
    display: inline-flex;
    background: #1d1c2d;
    color: #ffffff;
    border-radius: 5px;
    padding: 12px;
    margin: 10px 3px;
    cursor: pointer;
  }

  .selected {
    background: #8780f8;
    color: #ffffff;
  }

`;

/***/ }),

/***/ "./src/components/Product/details/Review/ReviewComponent.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/Product/details/Review/ReviewComponent.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Product_details_Review_ReviewCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Product/details/Review/ReviewCard */ "./src/components/Product/details/Review/ReviewCard.tsx");
/* harmony import */ var _ReviewComponent_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewComponent.style */ "./src/components/Product/details/Review/ReviewComponent.style.tsx");
/* harmony import */ var _components_Product_details_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Product/details/ProductDetails.style */ "./src/components/Product/details/ProductDetails.style.tsx");
/* harmony import */ var _components_Product_details_Review_AddReview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Product/details/Review/AddReview */ "./src/components/Product/details/Review/AddReview.tsx");
/* harmony import */ var _components_Scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Scrollbar */ "./src/components/Scrollbar.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Product\\details\\Review\\ReviewComponent.tsx";







const ReviewComponent = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReviewComponent_style__WEBPACK_IMPORTED_MODULE_3__["ReviewsContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ReviewTitle"], {
      children: "Customer reviews"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReviewComponent_style__WEBPACK_IMPORTED_MODULE_3__["TagsWrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReviewComponent_style__WEBPACK_IMPORTED_MODULE_3__["TagsHeader"], {
        children: "Tags"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReviewComponent_style__WEBPACK_IMPORTED_MODULE_3__["TagsContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "tag",
          children: "Experience"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "tag",
          children: "Quality"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "tag selected",
          children: "Design"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "tag",
          children: "Size"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "tag",
          children: "Features"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "tag",
          children: "Value"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "tag",
          children: "Replacement"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Scrollbar__WEBPACK_IMPORTED_MODULE_6__["Scrollbar"], {
      style: {
        height: "450px",
        width: "100%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_Review_ReviewCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_Review_ReviewCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_Review_ReviewCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReviewComponent_style__WEBPACK_IMPORTED_MODULE_3__["AddReviewContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ReviewTitle"], {
        children: "Add a review"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_Review_AddReview__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewComponent);

/***/ }),

/***/ "./src/components/Product/details/truncate.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Product/details/truncate.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Product\\details\\truncate.tsx";


const ReadMore = ({
  text,
  more,
  less,
  character
}) => {
  const {
    0: expanded,
    1: setExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggleLines = event => {
    event.preventDefault();
    setExpanded(!expanded);
  };

  const dangerouslySetHTML = html => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      dangerouslySetInnerHTML: {
        __html: html
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }, undefined);
  };

  if (!text) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [text && text.length < character || expanded ? dangerouslySetHTML(text) : dangerouslySetHTML(text.substring(0, character)), text && text.length > character && !expanded && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          onClick: toggleLines,
          style: {
            color: '#009e7f',
            fontWeight: 700
          },
          children: more
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), text && text.length > character && expanded && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          onClick: toggleLines,
          style: {
            color: '#009e7f',
            fontWeight: 700
          },
          children: less
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)]
  }, void 0, true);
};

ReadMore.defaultProps = {
  character: 150,
  more: 'Read more',
  less: 'less'
};
/* harmony default export */ __webpack_exports__["default"] = (ReadMore);

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

/***/ "./src/features/cart/cart.style.tsx":
/*!******************************************!*\
  !*** ./src/features/cart/cart.style.tsx ***!
  \******************************************/
/*! exports provided: NoProductImg, CartSlidePopup, CartPopupBody, PopupHeader, PopupItemCount, PromoCode, CloseButton, ItemCards, ItemImgWrapper, ItemDetails, ItemTitle, ItemPrice, ItemWeight, TotalPrice, DeleteButton, CheckoutButton, CheckoutButtonWrapper, Title, PriceBox, NoProductMsg, ItemWrapper, CouponBoxWrapper, CouponCode, ErrorMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProductImg", function() { return NoProductImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartSlidePopup", function() { return CartSlidePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPopupBody", function() { return CartPopupBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupHeader", function() { return PopupHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupItemCount", function() { return PopupItemCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoCode", function() { return PromoCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseButton", function() { return CloseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCards", function() { return ItemCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemImgWrapper", function() { return ItemImgWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetails", function() { return ItemDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTitle", function() { return ItemTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPrice", function() { return ItemPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWeight", function() { return ItemWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalPrice", function() { return TotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteButton", function() { return DeleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutButton", function() { return CheckoutButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutButtonWrapper", function() { return CheckoutButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceBox", function() { return PriceBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProductMsg", function() { return NoProductMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWrapper", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponBoxWrapper", function() { return CouponBoxWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponCode", function() { return CouponCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMsg", function() { return ErrorMsg; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const CartPopupBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: auto;
  width: 385px;
  display: flex;
  flex-direction: column;
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  box-sizing: content-box;

  @media (max-width: 767px) {
    width: 100%;
  }

  .cart-scrollbar {
    height: 100%;
    max-height: calc(100vh - 245px);

    @media (max-width: 767px) {
      max-height: 330px;
    }
  }
`;
const PopupHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 15px 25px;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1')};

  @media (max-width: 766px) {
    justify-content: center;
  }
`;
const PopupItemCount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: inline-flex;
  align-items: center;
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};

  span {
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
    padding-left: 10px;

    @media (max-width: 767px) {
      font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
    }
  }
`;
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  outline: 0;
  flex-shrink: 0;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;
  background-color: transparent;

  &:hover {
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.red', '#ea4d4a')};
  }

  @media (max-width: 767px) {
    position: absolute;
    top: -45px;
    background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.5);
  }

  &.fixedCartClose {
    @media (min-width: 991px) {
      display: none;
    }
  }
`;
const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  height: auto;
`;
const ItemCards = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  padding: 15px 25px;
  display: inline-flex;
  align-items: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  margin-bottom: 1px;
  box-sizing: border-box;
`;
const ItemImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 60px;
  height: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-right: 15px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ItemDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;
const ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  margin-bottom: 10px;
`;
const ItemPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
  margin-bottom: 10px;
`;
const ItemWeight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};
`;
const TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  flex-shrink: 0;
  margin-left: auto;
`;
const DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  width: 10px;
  height: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  outline: 0;
  margin-left: 15px;
  flex-shrink: 0;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;
  background-color: transparent;

  &:hover {
    color: #ea4d4a;
  }
`;
const PromoCode = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  margin: 20px 0;
  display: flex;
  justify-content: center;

  > button {
    border: 0;
    outline: 0;
    box-shadow: none;
    background-color: transparent;
    display: inline-flex;
    cursor: pointer;
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
    transition: color 0.35s ease;
    &:hover {
      color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.hover', '#019376')};
    }
  }
`;
const CheckoutButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  height: 48px;
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
  padding: 0;
  border-radius: 48px;
  box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  /* margin-top: auto; */
  margin-bottom: 15px;
  margin-left: 15px;

  @media (max-width: 767px) {
    height: 45px;
  }

  > a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
  }
`;
const CheckoutButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  flex-shrink: 0;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  padding-left: 5px;
  padding-right: 10px;
`;
const PriceBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  width: auto;
  height: 44px;
  padding: 0 30px;
  overflow: hidden;
  border-radius: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
  margin-right: 2px;

  @media (max-width: 767px) {
    height: 41px;
  }
`;
const NoProductMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};
  display: block;
  width: 100%;
  padding: 40px 0;
  text-align: center;
`;
const NoProductImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 50px;

  @media (max-width: 580px) {
    margin-top: 20px;
  }

  svg {
    width: 140px;
    height: auto;

    @media (max-width: 580px) {
      width: 110px;
    }
  }
`;
const CouponBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  flex-direction: column;
  padding: 0 22px 0 15px;
`;
const CouponCode = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.medium', '500')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};

  width: 100%;
  display: flex;
  justify-content: center;

  span {
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
    margin-left: 5px;
  }
`;
const ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px - 1px);
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary.hover', '#FF282F')};
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;
const CartSlidePopup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 420px;
  height: 100vh;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  position: fixed;
  bottom: 0;
  right: -450px;
  z-index: 1010;
  box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)')};
  transition: all 0.35s ease-in-out;

  @media (max-width: 580px) {
    width: 100%;
    display: none;
  }

  @media (min-width: 581px) {
    display: block;
  }

  &.cartPopupFixed {
    right: 0;
  }

  ${CartPopupBody} {
    height: 100%;
    width: 100%;
  }

  ${ItemWrapper} {
    /* height: calc(100vh - 240px); */
    max-height: calc(100vh - 245px);
    background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  }

  ${ItemCards} {
    border-bottom: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#f7f7f7')};
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    ${PopupHeader} {
      justify-content: space-between;
    }

    ${CloseButton} {
      top: auto;
      position: relative;
      background-color: transparent;
    }
  }
`;


/***/ }),

/***/ "./src/features/checkouts/Address.style.tsx":
/*!**************************************************!*\
  !*** ./src/features/checkouts/Address.style.tsx ***!
  \**************************************************/
/*! exports provided: FieldWrapper, Heading, DoubleContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldWrapper", function() { return FieldWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleContainer", function() { return DoubleContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
const DoubleContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  justify-content: space-between;
`;
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.heading', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.md', '19')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  margin-bottom: 15px;
`;


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

/***/ "./src/hooks/useLoginForm.ts":
/*!***********************************!*\
  !*** ./src/hooks/useLoginForm.ts ***!
  \***********************************/
/*! exports provided: useLoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginForm", function() { return useLoginForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ "./src/pages/product/[slug].tsx":
/*!**************************************!*\
  !*** ./src/pages/product/[slug].tsx ***!
  \**************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Others_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/seo */ "./src/components/Others/seo.tsx");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_product_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/product-style */ "./styles/product-style.tsx");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/config */ "./src/utils/config.ts");
/* harmony import */ var _components_404_ProductNotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/404/ProductNotFound */ "./src/components/404/ProductNotFound.tsx");
/* harmony import */ var _components_Product_details_ProductDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Product/details/ProductDetails */ "./src/components/Product/details/ProductDetails.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\pages\\product\\[slug].tsx";









const CartPopUp = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! features/cart/cart-popup */ "./src/features/cart/cart-popup.tsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! features/cart/cart-popup */ "./src/features/cart/cart-popup.tsx")],
    modules: ["product\\[slug].tsx -> " + 'features/cart/cart-popup']
  }
});

const fetchData = async url => await axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url).then(res => ({
  error: false,
  data: res.data.data
})).catch(() => ({
  error: true,
  data: null
}));

const ProductPage = ({
  deviceType,
  data
}) => {
  // const { query } = useRouter();
  // const [{data, loading, error}] = useAxios(
  //     `${API_BASE_URL}/api/v1/products/single/${query.slug}`
  // )
  // if(loading){
  //     return <ItemLoader/>
  // }
  if (!data.data) {
    console.log(data);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_seo__WEBPACK_IMPORTED_MODULE_3__["SEO"], {
        title: `404 Not Found`,
        description: `The page doesn't exist`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_404_ProductNotFound__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined)]
    }, void 0, true);
  }

  let content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_ProductDetails__WEBPACK_IMPORTED_MODULE_8__["default"], {
    product: data.data,
    deviceType: deviceType
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, undefined);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Others_seo__WEBPACK_IMPORTED_MODULE_3__["SEO"], {
      title: `${data.data.name} - WiseCart`,
      description: `${data.data.name} Details`,
      image: data.data.thumbImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_product_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_product_style__WEBPACK_IMPORTED_MODULE_5__["ProductSingleContainer"], {
          children: [content, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartPopUp, {
            deviceType: deviceType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

async function getServerSideProps({
  params
}) {
  const data = await fetchData(`${_utils_config__WEBPACK_IMPORTED_MODULE_6__["API_BASE_URL"]}/api/v1/products/single/${params.slug}`);
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

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

/***/ "./styles/product-style.tsx":
/*!**********************************!*\
  !*** ./styles/product-style.tsx ***!
  \**********************************/
/*! exports provided: ProductSingleContainer, RelatedItemContainer, RealatedItemCol, Loading, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSingleContainer", function() { return ProductSingleContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedItemContainer", function() { return RelatedItemContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealatedItemCol", function() { return RealatedItemCol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const ProductSingleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 78px 0 60px 0;
  margin:auto;
  position: relative;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  @media (min-width: 1600px) {
    padding-top: 89px;
  }
  @media (max-width: 990px) {
    padding-top: 60px;
  }
`;
const ProductSingleContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
`;
const RelatedItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  @media (max-width: 1199px) and (min-width: 990px) {
    margin-left: -10px;
    margin-right: -10px;
  }
  @media (max-width: 768px) {
    margin-left: -7.5px;
    margin-right: -7.5px;
  }
`;
const RealatedItemCol = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
  @media (max-width: 1500px) {
    flex: 0 0 20%;
    max-width: 20%;
  }
  @media (max-width: 1200px) {
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
  }
  @media (max-width: 1199px) and (min-width: 991px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (max-width: 768px) {
    padding-left: 7.5px;
    padding-right: 7.5px;
    margin-bottom: 15px;
  }
  @media (max-width: 767px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;
const Loading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15px')} - 1px);
  color: #222222;
`;
/* harmony default export */ __webpack_exports__["default"] = (ProductSingleWrapper);

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9BcnJvd05leHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvQ2FydEljb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvTG9uZ0Fycm93TGVmdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9Ob0NhcnRCYWcudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvUGx1c01pbnVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL1N0YXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzQwNC9Qcm9kdWN0Tm90Rm91bmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9ib3gudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9idXR0b24vYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PdGhlcnMvaW1hZ2UvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9pbWFnZS9wcm9kdWN0LXBsYWNlaG9sZGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PdGhlcnMvbXVsdGktY2Fyb3VzZWwvbXVsdGktY2Fyb3VzZWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9zZW8udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9zdmcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvU3RhclJhdGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9jYXJkL1Byb2R1Y3RJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2NhcmQvcHJvZHVjdC1jYXJkLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2RldGFpbHMvUHJvZHVjdERldGFpbHMuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvZGV0YWlscy9Qcm9kdWN0RGV0YWlscy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9kZXRhaWxzL1Jldmlldy9BZGRSZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvZGV0YWlscy9SZXZpZXcvUmV2aWV3Q2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9kZXRhaWxzL1Jldmlldy9SZXZpZXdDb21wb25lbnQuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvZGV0YWlscy9SZXZpZXcvUmV2aWV3Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2RldGFpbHMvdHJ1bmNhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvZ3JpZC9Qcm9kdWN0R3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9ncmlkL1Byb2R1Y3RHcmlkU3R5bGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2dyaWQvYm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2dyaWQvbG9hZG1vcmUtYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TY3JvbGxiYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvY291bnRlci9jb3VudGVyLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NvdW50ZXIvY291bnRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRDdXJyZW5jeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2NhcnRzL2NhcnQuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9jaGVja291dHMvQWRkcmVzcy5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL2h0dHBJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlRmV0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZUxvZ2luRm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdC9bc2x1Z10udHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9kZWZpbmVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jYXJ0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvcHJvZHVjdC1zdHlsZS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHEvcmV1c2UtbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS9jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxpZ2h0LXRvYXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvdmVybGF5c2Nyb2xsYmFycy1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1zeXN0ZW1cIiJdLCJuYW1lcyI6WyJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJjb25zb2xlIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiZGF0YSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsInNob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQXJyb3dOZXh0IiwiQ2FydEljb24iLCJMb25nQXJyb3dMZWZ0IiwiTm9DYXJ0QmFnIiwiUGx1cyIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJNaW51cyIsIlN0YXJJY29uIiwiY2xhc3NOYW1lIiwiTm90Rm91bmRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9kdWN0Tm90Rm91bmQiLCJ1c2VSb3V0ZXIiLCJCb3giLCJib3hTaXppbmciLCJtaW5XaWR0aCIsIm1hcmdpbiIsImNvbXBvc2UiLCJzcGFjZSIsImxheW91dCIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsInB4IiwicHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJiZyIsInRyYW5zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJhcHBlYXJhbmNlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRGYW1pbHkiLCJib3JkZXIiLCJvdXRsaW5lIiwidmFyaWFudCIsInZhcmlhbnRzIiwib3V0bGluZWQiLCJib3JkZXJDb2xvciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJzZWxlY3QiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsInByb3AiLCJiaWciLCJzbWFsbCIsInJvdGF0ZSIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJ0aGVtZUdldCIsIkJ1dHRvbiIsImZvcndhcmRSZWYiLCJsb2FkaW5nIiwiUGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlciIsIkltYWdlIiwiYWx0IiwidW5sb2FkZXIiLCJsb2FkZXIiLCJzdHlsZSIsIlNpbmdsZUl0ZW0iLCJsaSIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwibW9iaWxlIiwidGFibGV0IiwiQ2Fyb3VzZWxXaXRoQ3VzdG9tRG90cyIsImRldmljZVR5cGUiLCJ0aXRsZSIsInJlc3QiLCJzbGljZSIsImluZGV4IiwicG9zaXRpb24iLCJpbWFnZXMiLCJDdXN0b21Eb3QiLCJhY3RpdmUiLCJjYXJvdXNlbFN0YXRlIiwiY3VycmVudFNsaWRlIiwidG9BcnJheSIsIlNFTyIsImRlc2NyaXB0aW9uIiwiY2Fub25pY2FsIiwianMiLCJpbWFnZSIsIlN2ZyIsInNpemUiLCJSYXRpbmdDb250YWluZXIiLCJTdGFyUmF0aW5nIiwicmF0aW5nIiwiYXBwbHkiLCJsZW5ndGgiLCJpbkFjdGl2ZSIsInN0YXJTaXplIiwibnVtIiwiUHJvZHVjdENhcmQiLCJwcmljZSIsInNhbGVQcmljZSIsImRpc2NvdW50SW5QZXJjZW50IiwicHJvZHVjdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJ0U3RhdGUiLCJ1c2VTZWxlY3RvciIsImNhcnRSZWR1Y2VyIiwiaGFuZGxlQWRkQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJhZGRUb0NhcnQiLCJjdXJyZW5jeSIsInN5bWJvbCIsImN1cnJlbmN5RGV0YWlscyIsInNob3BSZWR1Y2VyIiwiaGFuZGxlUmVtb3ZlQ2xpY2siLCJjYXJ0UXVhbnRpdHkiLCJnZXRJdGVtQ2FydFF0eSIsIkNvbnZlcnRDdXJyZW5jeSIsIlN0eWxlZEJveCIsIlByb2R1Y3RDYXJkV3JhcHBlciIsImJhY2tncm91bmRDb2xvciIsIlByb2R1Y3RJbWFnZVdyYXBwZXIiLCJTYWxlVGFnIiwic3BhbiIsIkRpc2NvdW50UGVyY2VudCIsIlByb2R1Y3RJbmZvIiwiQnV0dG9uVGV4dCIsIkJvb2tJbWFnZVdyYXBwZXIiLCJCb29rSW5mbyIsIlByb2R1Y3ROYW1lIiwiQXV0aG9ySW5mbyIsIlByaWNlV3JhcHBlciIsIlByaWNlIiwiRGlzY291bnRlZFByaWNlIiwiQm9va0NhcmRXcmFwcGVyIiwiRm9vZENhcmRXcmFwcGVyIiwiRm9vZEltYWdlV3JhcHBlciIsIlByb2R1Y3RNZXRhIiwiRGVsaXZlcnlPcHQiLCJDYXRlZ29yeSIsIkR1cmF0aW9uIiwiUHJvZHVjdERldGFpbHNXcmFwcGVyIiwiUmV2aWV3VGl0bGUiLCJoMyIsIlByb2R1Y3RQcmV2aWV3IiwiQmFja0J1dHRvbiIsIlByb2R1Y3RUaXRsZVByaWNlV3JhcHBlciIsIlByb2R1Y3RUaXRsZSIsImgxIiwiUHJvZHVjdFByaWNlV3JhcHBlciIsIlByb2R1Y3RQcmljZSIsIlNhbGVQcmljZSIsIlByb2R1Y3RXZWlnaHQiLCJQcm9kdWN0RGVzY3JpcHRpb24iLCJQcm9kdWN0Q2FydFdyYXBwZXIiLCJQcm9kdWN0Q2FydEJ0biIsIk1ldGFTaW5nbGUiLCJNZXRhSXRlbSIsImNhdGVnb3J5IiwiUmVsYXRlZEl0ZW1zIiwiUHJvZHVjdERldGFpbHMiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUbyIsIm1hcmdpblJpZ2h0IiwidGh1bWJJbWFnZSIsInN1YkNhdGVnb3J5IiwiZ2FsbGVyeSIsIlRleHRBcmVhIiwidGV4dGFyZWEiLCJXcmFwcGVyIiwiQ29udGFpbmVyIiwiQWRkUmV2aWV3IiwiaW5wdXRzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ1c2VMb2dpbkZvcm0iLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZHJlc3MyIiwiUmV2aWV3Q2FyZENvbnRhaW5lciIsIlJldmlld0hlYWRlciIsIk5hbWVHcm91cCIsIkluaXRpYWxzIiwiRGVzY3JpcHRpb24iLCJEZXRhaWxzIiwiU2hhcmVHcm91cCIsIlJldmlld0NhcmQiLCJUYWdzV3JhcHBlciIsIlJldmlld3NDb250YWluZXIiLCJSZXZpZXdDb250YWluZXIiLCJBZGRSZXZpZXdDb250YWluZXIiLCJUYWdzSGVhZGVyIiwiVGFnc0NvbnRhaW5lciIsIlJldmlld0NvbXBvbmVudCIsIlJlYWRNb3JlIiwibW9yZSIsImxlc3MiLCJjaGFyYWN0ZXIiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwidXNlU3RhdGUiLCJ0b2dnbGVMaW5lcyIsImRhbmdlcm91c2x5U2V0SFRNTCIsImh0bWwiLCJfX2h0bWwiLCJzdWJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJQcm9kdWN0R3JpZCIsImxvYWRNb3JlIiwiZmV0Y2hMaW1pdCIsInNldExvYWRpbmciLCJjYXRlZ29yeVF1ZXJ5IiwiQVBJX0JBU0VfVVJMIiwic3ViY2F0ZWdvcnlRdWVyeSIsImlzTG9hZGluZyIsInVzZUZldGNoIiwiaGFuZGxlTG9hZE1vcmUiLCJyZW5kZXJDYXJkIiwiX2lkIiwiaGFzTW9yZSIsIkdyaWQiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImZsZXhib3giLCJzeXN0ZW1Dc3MiLCJtYXJnaW5MZWZ0IiwiYm9yZGVyVG9wIiwidHJhbnNpdGlvblByb3BlcnR5IiwiU2Nyb2xsYmFyIiwic2Nyb2xsYmFycyIsImF1dG9IaWRlIiwiQ291bnRlckJveCIsIm92ZXJmbG93IiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiZmxleERpcmVjdGlvbiIsImxpZ2h0SG9yaXpvbnRhbCIsImxpZ2h0VmVydGljYWwiLCJDb3VudGVyQnV0dG9uIiwiQ291bnRlclZhbHVlIiwicG9pbnRlckV2ZW50cyIsImRpc3BsYXlOYW1lIiwiQ291bnRlciIsIm9uRGVjcmVtZW50Iiwib25JbmNyZW1lbnQiLCJmcm9tIiwidG8iLCJjb252ZXJ0ZWRQcmljZSIsImN1cnJlbmN5RGF0YSIsInJhdGUiLCJ0b0ZpeGVkIiwiQ2FydFBvcHVwQm9keSIsIlBvcHVwSGVhZGVyIiwiUG9wdXBJdGVtQ291bnQiLCJDbG9zZUJ1dHRvbiIsIkl0ZW1XcmFwcGVyIiwiSXRlbUNhcmRzIiwiSXRlbUltZ1dyYXBwZXIiLCJJdGVtRGV0YWlscyIsIkl0ZW1UaXRsZSIsIkl0ZW1QcmljZSIsIkl0ZW1XZWlnaHQiLCJUb3RhbFByaWNlIiwiRGVsZXRlQnV0dG9uIiwiUHJvbW9Db2RlIiwiQ2hlY2tvdXRCdXR0b24iLCJDaGVja291dEJ1dHRvbldyYXBwZXIiLCJUaXRsZSIsImEiLCJQcmljZUJveCIsIk5vUHJvZHVjdE1zZyIsIk5vUHJvZHVjdEltZyIsIkNvdXBvbkJveFdyYXBwZXIiLCJDb3Vwb25Db2RlIiwiRXJyb3JNc2ciLCJDYXJ0U2xpZGVQb3B1cCIsIkZpZWxkV3JhcHBlciIsIkRvdWJsZUNvbnRhaW5lciIsIkhlYWRpbmciLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJyZXF1ZXN0SGFuZGxlciIsImNvbmZpZyIsInRpbWVvdXQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwicmVzcG9uc2UiLCJ1bmRlZmluZWQiLCJpc0NhbmNlbCIsImxvZyIsIm1lbVN0b3JlIiwiYXhpb3NPcHRpb25zIiwic2V0RGF0YSIsInNldElzTG9hZGluZyIsInNldEVycm9yIiwic2hvdWxkUmVmZXRjaCIsInJlRmV0Y2giLCJ1bm1vdW50ZWQiLCJzb3VyY2UiLCJDYW5jZWxUb2tlbiIsImdldERhdGEiLCJodHRwQ29uZmlnIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImh0dHAiLCJjYWNoZSIsInNldElucHV0cyIsInBlcnNpc3QiLCJDYXJ0UG9wVXAiLCJkeW5hbWljIiwic3NyIiwiZmV0Y2hEYXRhIiwidGhlbiIsImNhdGNoIiwiUHJvZHVjdFBhZ2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJzbHVnIiwicXVhbnRpdHkiLCJ0eXBlIiwiQ0FSVCIsIkFERF9UT19DQVJUIiwicmVtb3ZlRnJvbUNhcnQiLCJjYXJ0SWQiLCJSRU1PVkVfRlJPTV9DQVJUIiwicmVtb3ZlQWxsRnJvbUNhcnQiLCJSRU1PVkVfQUxMX0ZST01fQ0FSVCIsImRlY3JlYXNlUXVhbnRpdHlDYXJ0IiwiREVDUkVBU0VfUVVBTlRJVFlfQ0FSVCIsImluY3JlYXNlUXVhbnRpdHlDYXJ0IiwiSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVCIsIkdMT0JBTCIsIlNFVF9MQU5HVUFHRSIsIlNFVF9DVVJSRU5DWSIsIlNFVF9DQVRFR09SWSIsIlNFVF9TRUFSQ0giLCJXSVNITElTVCIsIkFERF9UT19XSVNITElTVCIsIlJFTU9WRV9GUk9NX1dJU0hMSVNUIiwiU0hPUCIsIlNFVF9TT1JUIiwiU0VUX1NVQkNBVEVHT1JZIiwiU0VUX0NBVEVHT1JZX0RBVEEiLCJTRVRfQUREUkVTUyIsIlNFVF9CSUxMSU5HIiwiU0VUX0NBUkQiLCJTRVRfQ1VSUkVOQ1lfREFUQSIsIkZPUk0iLCJTRVRfQ1VSUkVOVF9GT1JNIiwiQVVUSCIsIkxPR19JTiIsIkxPR19JTl9FUlJPUiIsIlNJR05fVVBfRVJST1IiLCJTSUdOX1VQIiwiTE9HX09VVCIsIkxPQURfVVNFUiIsIkxPQURfVVNFUl9GQUlMIiwiT1JERVJfU1VDQ0VTUyIsIk9SREVSX1NVQ0NFU1NfRkFJTCIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJhcnIiLCJ0b3RhbCIsImZvckVhY2giLCJkaXNjb3VudCIsImlzSW5DYXJ0Iiwic29tZSIsImZpbmQiLCJ0cmFuc2Zvcm1DbG91ZGluYXJ5SW1hZ2UiLCJmaXJzdCIsImxhc3QiLCJzcGxpdCIsIlByb2R1Y3RTaW5nbGVXcmFwcGVyIiwiUHJvZHVjdFNpbmdsZUNvbnRhaW5lciIsIlJlbGF0ZWRJdGVtQ29udGFpbmVyIiwiUmVhbGF0ZWRJdGVtQ29sIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQSxzQ0FBc0M7UUFDdEM7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMs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O0FBQ0E7QUFDQSxvQkFBb0I2Qyx5RUFBUSxDQUFDLGdCQUFELEVBQW1CLE1BQW5CLENBQTJCO0FBQ3ZEO0FBQ0EsQ0FSTztBQVVRbVUsbUZBQWYsRTs7Ozs7Ozs7Ozs7QUMxRUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoicGFnZXMvcHJvZHVjdC9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9wcm9kdWN0L1tzbHVnXVwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvcHJvZHVjdC9bc2x1Z10udHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5hc1BhdGgpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGxldCBiYXNlOiBVUkxcblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2hcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgbG9jYWxlXG4gICAqL1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFsbCBjb25maWd1cmVkIGxvY2FsZXNcbiAgICovXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyZWQgZGVmYXVsdCBsb2NhbGVcbiAgICovXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGFmdGVySW50ZXJhY3RpdmU/OiBzdHJpbmdbXTsgYmVmb3JlSW50ZXJhY3RpdmU/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xuICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBBcnJvd05leHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzIwJz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPSdNMjk0LjEgMjU2TDE2NyAxMjljLTkuNC05LjQtOS40LTI0LjYgMC0zMy45czI0LjYtOS4zIDM0IDBMMzQ1IDIzOWM5LjEgOS4xIDkuMyAyMy43LjcgMzMuMUwyMDEuMSA0MTdjLTQuNyA0LjctMTAuOSA3LTE3IDdzLTEyLjMtMi4zLTE3LTdjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDEyNy0xMjcuMXonXHJcbiAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgU3ZnIH0gZnJvbSAnQC9jb21wb25lbnRzL090aGVycy9zdmcnO1xyXG5leHBvcnQgY29uc3QgQ2FydEljb24gPSAocHJvcHM6IEpTWC5JbnRyaW5zaWNBdHRyaWJ1dGVzICYgeyBbeDogc3RyaW5nXTogYW55OyBzaXplPzogbnVtYmVyIHwgdW5kZWZpbmVkOyB9KSA9PiAoXHJcbiAgPFN2ZyB7Li4ucHJvcHN9IHdpZHRoPVwiMTQuNFwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxNC40IDEyXCI+XHJcbiAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAxMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI4OCAtNDEzLjg5KVwiPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTU0XCJcclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICBkPVwiTTI5OC43LDQxOC4yODlsLTIuOTA2LTQuMTQ4YS44MzUuODM1LDAsMCwwLS41MjgtLjI1MS42MDcuNjA3LDAsMCwwLS41MjkuMjUxbC0yLjkwNSw0LjE0OGgtMy4xN2EuNjA5LjYwOSwwLDAsMC0uNjYxLjYyNXYuMTkxbDEuNjUxLDUuODRhMS4zMzYsMS4zMzYsMCwwLDAsMS4yNTUuOTQ1aDguNTg4YTEuMjYxLDEuMjYxLDAsMCwwLDEuMjU0LS45NDVsMS42NTEtNS44NHYtLjE5MWEuNjA5LjYwOSwwLDAsMC0uNjYxLS42MjVabS01LjQxOSwwLDEuOTg0LTIuNzY3LDEuOTgsMi43NjdabTEuOTg0LDUuMDI0YTEuMjU4LDEuMjU4LDAsMSwxLDEuMzE5LTEuMjU4LDEuMywxLjMsMCwwLDEtMS4zMTksMS4yNThabTAsMFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2c+XHJcbiAgPC9Tdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBMb25nQXJyb3dMZWZ0ID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgd2lkdGg9JzEyJ1xyXG4gICAgICBoZWlnaHQ9JzguMDAzJ1xyXG4gICAgICB2aWV3Qm94PScwIDAgMTIgOC4wMDMnXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkYXRhLW5hbWU9J19pb25pY29uc19zdmdfaW9zLWFycm93LXJvdW5kLWJhY2sgKDIpJ1xyXG4gICAgICAgIGQ9J00xMTYuNDQ3LDE2MC4xNzdhLjU0NS41NDUsMCwwLDEsMCwuNzY3bC0yLjUzLDIuNTM4aDkuNjQxYS41NDIuNTQyLDAsMCwxLDAsMS4wODRoLTkuNjQxbDIuNTM0LDIuNTM4YS41NDkuNTQ5LDAsMCwxLDAsLjc2Ny41NC41NCwwLDAsMS0uNzYzLDBsLTMuNDM1LTMuNDZhLjYwOC42MDgsMCwwLDEtLjExMy0uMTcxLjUxNy41MTcsMCwwLDEtLjA0Mi0uMjA4LjU0My41NDMsMCwwLDEsLjE1NC0uMzc5bDMuNDM1LTMuNDZBLjUzMS41MzEsMCwwLDEsMTE2LjQ0NywxNjAuMTc3WidcclxuICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTEyLjEgLTE2MC4wMjMpJ1xyXG4gICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBOb0NhcnRCYWcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMjMxLjkxXCJcclxuICAgICAgaGVpZ2h0PVwiMjkyXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyMzEuOTEgMjkyXCJcclxuICAgID5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cImxpbmVhci1ncmFkaWVudFwiXHJcbiAgICAgICAgICB4MT1cIjFcIlxyXG4gICAgICAgICAgeTE9XCIwLjQzOVwiXHJcbiAgICAgICAgICB4Mj1cIjAuMzY5XCJcclxuICAgICAgICAgIHkyPVwiMVwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjMDI5NDc3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMDA5ZTdmXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDxnXHJcbiAgICAgICAgaWQ9XCJub19jYXJ0X2luX2JhZ18yXCJcclxuICAgICAgICBkYXRhLW5hbWU9XCJubyBjYXJ0IGluIGJhZyAyXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEzODggLTM1MSlcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGVsbGlwc2VcclxuICAgICAgICAgIGlkPVwiRWxsaXBzZV8yODczXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIkVsbGlwc2UgMjg3M1wiXHJcbiAgICAgICAgICBjeD1cIjExNS45NTVcIlxyXG4gICAgICAgICAgY3k9XCIyNy4zNjZcIlxyXG4gICAgICAgICAgcng9XCIxMTUuOTU1XCJcclxuICAgICAgICAgIHJ5PVwiMjcuMzY2XCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzg4IDU4OC4yNjgpXCJcclxuICAgICAgICAgIGZpbGw9XCIjZGRkXCJcclxuICAgICAgICAgIG9wYWNpdHk9XCIwLjI1XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2OTFcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY5MVwiXHJcbiAgICAgICAgICBkPVwiTTI5LjYzMiwwSDE3MC4zNjhBMjkuODI4LDI5LjgyOCwwLDAsMSwyMDAsMzAuMDIxVjIwOS45NzlBMjkuODI4LDI5LjgyOCwwLDAsMSwxNzAuMzY4LDI0MEgyOS42MzJBMjkuODI4LDI5LjgyOCwwLDAsMSwwLDIwOS45NzlWMzAuMDIxQTI5LjgyOCwyOS44MjgsMCwwLDEsMjkuNjMyLDBaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDAzIDM4MSlcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDllN2ZcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzE4NTJcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDE4NTJcIlxyXG4gICAgICAgICAgZD1cIk0zMCwwSDE3MGEzMCwzMCwwLDAsMSwzMCwzMHYwYTMwLDMwLDAsMCwxLTMwLDMwSDEyLjg1N0ExMi44NTcsMTIuODU3LDAsMCwxLDAsNDcuMTQzVjMwQTMwLDMwLDAsMCwxLDMwLDBaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDAzIDM4MSlcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzE4NTNcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDE4NTNcIlxyXG4gICAgICAgICAgZD1cIk00MiwwSDE1OGE0Miw0MiwwLDAsMSw0Miw0MnYwYTE4LDE4LDAsMCwxLTE4LDE4SDE4QTE4LDE4LDAsMCwxLDAsNDJ2MEE0Miw0MiwwLDAsMSw0MiwwWlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQwMyAzODEpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2ODVcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY4NVwiXHJcbiAgICAgICAgICBkPVwiTTQ0Ni4zMSwyNDYuMDU2YTMwLDMwLDAsMSwxLDMwLTMwQTMwLjAzNCwzMC4wMzQsMCwwLDEsNDQ2LjMxLDI0Ni4wNTZabTAtNTMuMjk0QTIzLjMsMjMuMywwLDEsMCw0NjkuOSwyMTYuMDU2LDIzLjQ3MSwyMy40NzEsMCwwLDAsNDQ2LjMxLDE5Mi43NjJaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDU2LjY5IDE2NC45NDQpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2ODZcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY4NlwiXHJcbiAgICAgICAgICBkPVwiTTQ0Ni4zMSwzNzUuMTgxYTMwLDMwLDAsMSwxLDMwLTMwQTMwLjAzNCwzMC4wMzQsMCwwLDEsNDQ2LjMxLDM3NS4xODFabTAtNTMuMjk0QTIzLjMsMjMuMywwLDEsMCw0NjkuOSwzNDUuMTgxLDIzLjQ3MSwyMy40NzEsMCwwLDAsNDQ2LjMxLDMyMS44ODdaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDU3Ljc5MyA5NS42ODQpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA5ZTdmXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgIGlkPVwiRWxsaXBzZV8yODc0XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIkVsbGlwc2UgMjg3NFwiXHJcbiAgICAgICAgICBjeD1cIjI4LjY4OVwiXHJcbiAgICAgICAgICBjeT1cIjI4LjY4OVwiXHJcbiAgICAgICAgICByPVwiMjguNjg5XCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDczLjgyMyA1MTEuMDQ2KVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICBpZD1cIkVsbGlwc2VfMjg3NVwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJFbGxpcHNlIDI4NzVcIlxyXG4gICAgICAgICAgY3g9XCIxNS4wNDZcIlxyXG4gICAgICAgICAgY3k9XCIxNS4wNDZcIlxyXG4gICAgICAgICAgcj1cIjE1LjA0NlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ4MS40MDEgNTQ3Ljg1NCkgcm90YXRlKC00NSlcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDllN2ZcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY4N1wiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4Njg3XCJcclxuICAgICAgICAgIGQ9XCJNMzk5LjcxLDUzMS4yN2E3MS43NTUsNzEuNzU1LDAsMCwxLDEyLjY1LTEzLjZjMy40LTIuODYzLTEuNS03LjcyNi00Ljg4Mi00Ljg4MmE3OC4zOTIsNzguMzkyLDAsMCwwLTEzLjczLDE1Yy0yLjU2LDMuNjQ0LDMuNDI0LDcuMSw1Ljk2MiwzLjQ4NVpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNjAuNTc5IC0zNS43MDMpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2ODhcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY4OFwiXHJcbiAgICAgICAgICBkPVwiTTQxMi45MTMsNTI3Ljc4NmE3OC40MTksNzguNDE5LDAsMCwwLTEzLjczLTE1Yy0zLjM4LTIuODQzLTguMjg5LDIuMDE3LTQuODgyLDQuODgyYTcxLjc4NSw3MS43ODUsMCwwLDEsMTIuNjUsMTMuNmMyLjUzNSwzLjYwOSw4LjUyNS4xNjIsNS45NjItMy40ODVaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDYwLjU2NiAtMzUuNzA0KVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4Njg5XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2ODlcIlxyXG4gICAgICAgICAgZD1cIk01ODMuMjc4LDUyNy43ODZhNzguNDE3LDc4LjQxNywwLDAsMC0xMy43My0xNWMtMy4zOC0yLjg0My04LjI4OSwyLjAxNy00Ljg4Miw0Ljg4MmE3MS43NjgsNzEuNzY4LDAsMCwxLDEyLjY1LDEzLjZjMi41MzUsMy42MDksOC41MjUuMTYyLDUuOTYyLTMuNDg1WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTcwLjMwNCAtMzUuNzA0KVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4NjkwXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2OTBcIlxyXG4gICAgICAgICAgZD1cIk01NzAuMDc1LDUzMS4yN2E3MS43Nyw3MS43NywwLDAsMSwxMi42NS0xMy42YzMuNC0yLjg2My0xLjUtNy43MjYtNC44ODItNC44ODJhNzguNDA3LDc4LjQwNywwLDAsMC0xMy43MywxNWMtMi41NiwzLjY0NCwzLjQyNCw3LjEsNS45NjIsMy40ODVaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NzAuMzE4IC0zNS43MDMpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2OTJcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY5MlwiXHJcbiAgICAgICAgICBkPVwiTTMwMS4yNDMsMjg3LjQ2NGExOS4xMTUsMTkuMTE1LDAsMCwxLDguMDcxLDkuMDc3LDE5LjYzNywxOS42MzcsMCwwLDEsMS42LDcuODh2MjYuMDg1YTE5LjM0OSwxOS4zNDksMCwwLDEtOS42NzIsMTYuOTU3Yy0xMC4wNDgtNi44NTgtMTYuNTQ0LTE3Ljc0Mi0xNi41NDQtMzBTMjkxLjIsMjk0LjMyMiwzMDEuMjQzLDI4Ny40NjRaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjkyLjMwMSAxMDEuNTM2KVwiXHJcbiAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2OTNcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY5M1wiXHJcbiAgICAgICAgICBkPVwiTTI5NC4zNzEsMjg3LjQ2NGExOS4xMTUsMTkuMTE1LDAsMCwwLTguMDcxLDkuMDc3LDE5LjYzNywxOS42MzcsMCwwLDAtMS42LDcuODh2MjYuMDg1YTE5LjM0OSwxOS4zNDksMCwwLDAsOS42NzIsMTYuOTU3YzEwLjA0OC02Ljg1OCwxNi41NDQtMTcuNzQyLDE2LjU0NC0zMFMzMDQuNDE5LDI5NC4zMjIsMjk0LjM3MSwyODcuNDY0WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTExOC4zMDEgMTAxLjUzNilcIlxyXG4gICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gU1ZHIHBsdXMgaWNvblxyXG5leHBvcnQgY29uc3QgUGx1cyA9ICh7XHJcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcclxuICB3aWR0aCA9ICcxMnB4JyxcclxuICBoZWlnaHQgPSAnMTJweCcsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD1cIjAgMCAxMiAxMlwiXHJcbiAgICA+XHJcbiAgICAgIDxnXHJcbiAgICAgICAgaWQ9XCJHcm91cF8zMzUxXCJcclxuICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCAzMzUxXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEzNjcgLTE5MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHJlY3RcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA1MjBcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxMlwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIyXCJcclxuICAgICAgICAgIHJ4PVwiMVwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTM2NyAxOTUpXCJcclxuICAgICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHJlY3RcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA1MjFcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxMlwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIyXCJcclxuICAgICAgICAgIHJ4PVwiMVwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTM3NCAxOTApIHJvdGF0ZSg5MClcIlxyXG4gICAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIFNWRyBtaW51cyBpY29uXHJcbmV4cG9ydCBjb25zdCBNaW51cyA9ICh7XHJcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcclxuICB3aWR0aCA9ICcxMnB4JyxcclxuICBoZWlnaHQgPSAnMnB4JyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDEyIDJcIlxyXG4gICAgPlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA1MjJcIlxyXG4gICAgICAgIHdpZHRoPVwiMTJcIlxyXG4gICAgICAgIGhlaWdodD1cIjJcIlxyXG4gICAgICAgIHJ4PVwiMVwiXHJcbiAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgU3Rhckljb246UmVhY3QuRkM8e2NsYXNzTmFtZTpzdHJpbmd9PiA9ICh7Y2xhc3NOYW1lfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxyXG4gICAgICAgICAgICBkYXRhLWljb249XCJzdGFyXCJcclxuICAgICAgICAgICAgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1OS4zIDE3LjhMMTk0IDE1MC4yIDQ3LjkgMTcxLjVjLTI2LjIgMy44LTM2LjcgMzYuMS0xNy43IDU0LjZsMTA1LjcgMTAzLTI1IDE0NS41Yy00LjUgMjYuMyAyMy4yIDQ2IDQ2LjQgMzMuN0wyODggNDM5LjZsMTMwLjcgNjguN2MyMy4yIDEyLjIgNTAuOS03LjQgNDYuNC0zMy43bC0yNS0xNDUuNSAxMDUuNy0xMDNjMTktMTguNSA4LjUtNTAuOC0xNy43LTU0LjZMMzgyIDE1MC4yIDMxNi43IDE3LjhjLTExLjctMjMuNi00NS42LTIzLjktNTcuNCAwelwiPlxyXG5cclxuICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3Rhckljb24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge05vUHJvZHVjdEltZywgTm9Qcm9kdWN0TXNnfSBmcm9tIFwiQC9mZWF0dXJlcy9jYXJ0L2NhcnQuc3R5bGVcIjtcclxuaW1wb3J0IHtOb0NhcnRCYWd9IGZyb20gXCJAL2Fzc2V0cy9pY29ucy9Ob0NhcnRCYWdcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJAL2NvbXBvbmVudHMvT3RoZXJzL2J1dHRvbi9idXR0b25cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTm90Rm91bmRDb250YWluZXI9c3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA5MHB4O1xyXG5gXHJcbmNvbnN0IFByb2R1Y3ROb3RGb3VuZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Tm90Rm91bmRDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxOb1Byb2R1Y3RJbWc+XHJcbiAgICAgICAgICAgICAgICA8Tm9DYXJ0QmFnIC8+XHJcbiAgICAgICAgICAgIDwvTm9Qcm9kdWN0SW1nPlxyXG4gICAgICAgICAgICA8Tm9Qcm9kdWN0TXNnPlxyXG4gICAgICAgICAgICAgICAgTG9va2luZyBmb3Igc29tZXRoaW5nPzxici8+XHJcbiAgICAgICAgICAgICAgICBXZSBhcmUgc29ycnkgdGhlIHByb2R1Y3QgeW91IGFyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0LlxyXG4gICAgICAgICAgICA8L05vUHJvZHVjdE1zZz5cclxuICAgICAgICAgICAgPE5vUHJvZHVjdEltZz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goJy8nKX0+R28gYmFjayB0byBIb21lcGFnZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L05vUHJvZHVjdEltZz5cclxuICAgICAgICA8L05vdEZvdW5kQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3ROb3RGb3VuZDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgY29tcG9zZSwgc3BhY2UsIGNvbG9yLCBsYXlvdXQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcclxuXHJcbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2PGFueT4oXHJcbiAge1xyXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICBtaW5XaWR0aDogMCxcclxuICAgIG1hcmdpbjogMCxcclxuICB9LFxyXG4gIGNvbXBvc2Uoc3BhY2UsIGNvbG9yLCBsYXlvdXQpXHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcclxuaW1wb3J0IHsgY29tcG9zZSwgdmFyaWFudCwgYm9yZGVyLCBzcGFjZSwgbGF5b3V0IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbihcclxuICAocHJvcHMpID0+XHJcbiAgICBjc3Moe1xyXG4gICAgICBweDogJzE1cHgnLFxyXG4gICAgICBweTogMCxcclxuICAgICAgZm9udFNpemU6IFsnYmFzZSddLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIGN1cnNvcjogcHJvcHMuZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInLFxyXG4gICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyAndGV4dC5saWdodCcgOiAnd2hpdGUnLFxyXG4gICAgICBiZzogcHJvcHMuZGlzYWJsZWQgPyAnZ3JheS41MDAnIDogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnYmFzZScsXHJcblxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyAndGV4dC5saWdodCcgOiAnd2hpdGUnLFxyXG4gICAgICAgIGJnOiBwcm9wcy5kaXNhYmxlZCA/ICdncmF5LjUwMCcgOiAncHJpbWFyeS5ob3ZlcicsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICB7XHJcbiAgICBhcHBlYXJhbmNlOiAnbm9uZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnMzhweCcsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxyXG4gICAgYm9yZGVyOiAwLFxyXG5cclxuICAgICcmOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdmFyaWFudCh7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICBvdXRsaW5lZDoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICBiZzogJ3doaXRlJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAnZ3JheS41MDAnLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGJnOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIGJnOiAncHJpbWFyeS5ob3ZlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdncmF5LjUwMCcsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgIGJnOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB0ZXh0OiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnkuaG92ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIHdpZHRoOiAyNixcclxuICAgICAgICBoZWlnaHQ6IDI2LFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAndGV4dC5yZWd1bGFyJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEzLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICcmLnNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgYmc6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJjpob3Zlcjpub3QoLnNlbGVjdGVkKSc6IHtcclxuICAgICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIHZhcmlhbnQoe1xyXG4gICAgcHJvcDogJ3NpemUnLFxyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgYmlnOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnNDhweCcsXHJcbiAgICAgICAgcHg6IDMwLFxyXG4gICAgICB9LFxyXG4gICAgICBzbWFsbDoge1xyXG4gICAgICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSksXHJcbiAgY29tcG9zZShib3JkZXIsIHNwYWNlLCBsYXlvdXQpXHJcbik7XHJcbmNvbnN0IHJvdGF0ZSA9IGtleWZyYW1lc2BcclxuICBmcm9tIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XHJcbiAgdG8ge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxyXG5gO1xyXG5cclxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmZmZmY7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkXHJcbiAgICAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6IHRoZW1lR2V0KCdwcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiAke3JvdGF0ZX07XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjJzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuYDtcclxuXHJcbi8vIGNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2KChwcm9wcykgPT5cclxuLy8gICBjc3Moe1xyXG4vLyAgICAgd2lkdGg6IDE4LFxyXG4vLyAgICAgaGVpZ2h0OiAxOCxcclxuLy8gICAgIG1hcmdpbkxlZnQ6IDEwLFxyXG4vLyAgICAgYm9yZGVyOiAnM3B4IHNvbGlkIHdoaXRlJyxcclxuLy8gICAgIGJvcmRlclRvcDogYDNweCBzb2xpZCAke3Byb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiAncHJpbWFyeS5yZWd1bGFyJ31gLFxyXG4vLyAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuLy8gICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ3RyYW5zZm9ybScsXHJcbi8vICAgICBhbmltYXRpb25OYW1lOiBgJHtyb3RhdGV9YCxcclxuLy8gICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4ycycsXHJcbi8vICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJyxcclxuLy8gICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcclxuLy8gICB9KVxyXG4vLyApO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGxvYWRpbmc/OiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB0eXBlOiAnc3VibWl0JyB8ICdidXR0b24nO1xyXG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XHJcbn07XHJcbmV4cG9ydCB0eXBlIFJlZiA9IEhUTUxCdXR0b25FbGVtZW50O1xyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFByb3BzPihcclxuICAoeyBjaGlsZHJlbiwgZGlzYWJsZWQsIGxvYWRpbmcgPSBmYWxzZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgICA8U3R5bGVkQnV0dG9uIHJlZj17cmVmfSB7Li4ucHJvcHN9IGRpc2FibGVkPXtkaXNhYmxlZH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAge2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcbiAgICA8L1N0eWxlZEJ1dHRvbj5cclxuICApXHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEltZyB9IGZyb20gJ3JlYWN0LWltYWdlJztcclxuaW1wb3J0IHBsYWNlaG9sZGVyIGZyb20gJy4vcHJvZHVjdC1wbGFjZWhvbGRlci5wbmcnO1xyXG5jb25zdCBQbGFjZWhvbGRlciA9ICgpID0+IDxpbWcgc3JjPXtwbGFjZWhvbGRlcn0gYWx0PVwicHJvZHVjdCBpbWcgbG9hZGVyXCIgLz47XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcclxuICB1cmwsXHJcbiAgYWx0ID0gJ3BsYWNlaG9sZGVyJyxcclxuICB1bmxvYWRlcixcclxuICBsb2FkZXIsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHN0eWxlLFxyXG59OiB7XHJcbiAgdXJsPzogc3RyaW5nIHwgW3N0cmluZ107XHJcbiAgYWx0Pzogc3RyaW5nO1xyXG4gIHVubG9hZGVyPzogc3RyaW5nO1xyXG4gIGxvYWRlcj86IHN0cmluZztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgc3R5bGU/OiBhbnk7XHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEltZ1xyXG4gICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxyXG4gICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgIHNyYz17dXJsfVxyXG4gICAgICBhbHQ9e2FsdH1cclxuICAgICAgbG9hZGVyPXs8UGxhY2Vob2xkZXIgLz59XHJcbiAgICAgIHVubG9hZGVyPXs8UGxhY2Vob2xkZXIgLz59XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVE0QUFBRHdDQVlBQUFEeFhvcDRBQUFIUEVsRVFWUjRYdTNkMjNMYTJCYUdVUkVPUHBUZi8wbU53WUNzdnRoRnRvTWRpeCtXeEJJWjQ2cXJzanB4dXRwZk5PWGxtVm5YZFYwREVQalZkd0RnbEhBQU1lRUFZc0lCeElRRGlBa0hFQk1PSUNZY1FFdzRnSmh3QURIaEFHTENBY1NFQTRnSkJ4QVREaUFtSEVCTU9JQ1ljQUF4NFFCaXdnSEVoQU9JQ1FjUUV3NGdKaHhBVERpQW1IQUFNZUVBWXNJQnhJUURpQWtIRUJNT0lDWWNRRXc0Z0pod0FESGhBR0xDQWNTRUE0Z0pCeEFURGlBbUhFQk1PSUNZY0FBeDRRQml3Z0hFaEFPSUNRY1FFdzRnSmh4QVREaUFtSEFBTWVFQVlzSUJ4SVFEaUFrSEVCTU9JQ1ljUUV3NGdKaHdBREhoQUdMQ0FjU0VBNGdKQnhBVERpQW1IRUJNT0lDWWNBQXg0UUJpd2dIRWhBT0lDUWNRRXc0Z0poeEFURGlBbUhBQU1lRUFZc0lCeElRRGlBa0hFQk1PSUNZY1FFdzRnSmh3QURIaEFHTENBY1FXZlFjbzUzQTQvUDduK1h6ZXpHYXpIODlEcllSalFGM1hOYnZkcnRudGRrM2J0bDkrZkQ2Zk40dkZvbmw4ZkJRUkptWFdkVjNYZDRqY2ZyOXYzdDdlbW5QKzg4NW1zK2JoNGFGNWZIenNPd3BWRUk0QmJEYWI1djM5dmUvWUY4dmxzbmwrZnZiMFFmVzhIQzNzMG1nMG41NVNvSGJDVWRCK3Y3ODRHa2Y3L2I3WmJyZDl4K0NtaEtPZ3pXYlRkK1FzNysvdlo3MGJnVnNSamtKMnUxM3o4ZkhSZCt3c1hkZDU2cUJxd2xISWZyL3ZPeElwL2ZOQlNjSlJTT2xQOUkrUEQrTUsxUktPaW4xM2FReHFJQndGZURMNDArZXI5ZHduNFNqQWhhMy9hOXUyV2EvWDdxUGNPZUVvWkloNHpPZnp2aU5WNmJydTl6WDc0L2ZvY0orRW81RGxjdGwzSkRMRjc1NWRyOWQvdkpkNWUzc3p0dHdwNFNpa2REaFdxMVhma2Fwc05wdHZJN0ZlcjR2ZGI2RWV3bEhJY3Jrc05sck1ack5KaFdPMzIvMzFxbjNYZGMxNnZmWUMrYzRJUjBGUFQwOTlSODd5OVBRMG1UR2xiZHZlcS9ibm5HRmFoS09neFdMUlBEOC85eDM3MFdxMW1zelRSdGQxemV2cjYxbFBFN3ZkempYNk95SWNoYTFXcTR2ajhmRHdjUEcvZXd2blJ1Tm91OTBXdjJITGJWamtNNURENGRCc05wdXpibi8rK3ZXcmVYcDZLdjZDZFVodmIyOFhmYmwxTnBzMUx5OHZ4ZDRIY1J2Q01iRGRidGNjRG9kbXY5OS8rZE41dVZ3MnkrVnlNcVBKMFc2M3UrcUMxM3crYjE1ZVhpYnpIb2V2aEdOa2JkdE8ray9idytIUXZMNis5aDNydFZnc21wZVhsNzVqVk1vN2pwRk5PUm9mSHgvTmVyM3VPM2FXNHlqSE5Ba0haeG5pUHNiNysvdEY3MG00UGVHb1dNbFAwbXVkKzZJM05kVFB5N0NFbzFLbDNpV1VzTjF1QjNzeVNPNkNVQS9ocU5EeHUwemJ0cjM1cGFreHRxNGY0OEYwQ0VlRnR0dnQ3MjhNMjI2M04zdVViOXYycWkrN0pzYjh0YmllY0ZUbWNEaDgrWWF4VzN4Q2ZkNnRNUlk3UEtaRE9DcHkvR1E5ZFl1UjVYUzN4bGpzOEpnRzRhakk1eEhsdXg4YjZ4UDViN3MxeG1LSFIvMkVveExmalNpbnhoaFpmdHF0TVpZaDdveFFsbkJVNEc4anlxbWhSNWFhOW1iVTlMSHdsWEJVNEtjUjVkUlFJMHVOOXluczhLaVhjTnpZT1NQS3FYT2VUbEsxUmVQSURvODZDY2NOblR1aW5DbzlzaHd2bTlXcTlvL3ZYeVFjTjVTTUtLZEtqU3hUdUR0eGl6c2wvRXc0YnVTU0VlWFVKVThybngwT2g2dC9qckVjLzRZNDZpQWNOM0RwaUhMcW1wR2w1RzZOc2RqaFVRL2h1SUZyUnBSVGw0d3NVNzRuWVlkSEhZUmpaQ1ZHbEZQcDA4dlVkMkJNL2VPL0I4SXhvbElqeXFsa1pCbHl0OFpZYXJ4ejhxOFJqaEdWSEZGT25UT3lqTEZiWXl4MmVOeVdjSXlrYmR2aUk4cXBuNTVtN25IZnhUMytucVpDT0VZeXh2L2dmeHRaN3ZrZXhCVHVvZHdqNFJqQk9XTkVLZC85V3JmYXJURVdPenpHSnh3RFMxNWNsdkw1NmViV3V6WEdZb2ZIdUlSallHT01LS2VPc2FwaHQ4WllwbnczWllyOEZaQUQybTYzb3o5dGZEYWJ6ZjY1VDZUVmF0VThQei8zSGVOS25qZ0djb3NSNWRTL0ZvM0dEby9SQ01kQWJqR2k4RDkyZUF4UE9BWXc1bGRSK0o0ZEhzTVNqc0pxR0ZHNDc3c3JOUkNPd293bzliRERZempDVVpBUnBUNTJlQXhET0FveG90VExEby95aEtNUUkwcmQ3UEFvU3pnS01LTFV6dzZQc29UalNrYVU2YkREb3h6aHVKSVJaVnJzOENoRE9LNWdSSmttT3p5dUp4d1hNcUpNbXgwZTF4R09DM25jblQ0N1BDNG5IQmN3b3R3SE96d3VKeHdoSThwOWFkdld6ZElMQ0VmSWlISi83UERJQ1VmQWlISy83UERJTFBvTzhLZkh4OGUrSTB5VUY2WG5zM01VaUJsVmdKaHdBREhoQUdMQ0FjU0VBNGdKQnhBVERpQW1IRUJNT0lDWWNBQXg0UUJpd2dIRWhBT0lDUWNRRXc0Z0poeEFURGlBbUhBQU1lRUFZc0lCeElRRGlBa0hFQk1PSUNZY1FFdzRnSmh3QURIaEFHTENBY1NFQTRnSkJ4QVREaUFtSEVCTU9JQ1ljQUF4NFFCaXdnSEVoQU9JQ1FjUUV3NGdKaHhBVERpQW1IQUFNZUVBWXNJQnhJUURpQWtIRUJNT0lDWWNRRXc0Z0pod0FESGhBR0xDQWNTRUE0Z0pCeEFURGlBbUhFQk1PSUNZY0FBeDRRQml3Z0hFaEFPSUNRY1FFdzRnSmh4QVREaUFtSEFBTWVFQVlzSUJ4SVFEaUFrSEVCTU9JQ1ljUUV3NGdKaHdBREhoQUdMQ0FjU0VBNGdKQnhBVERpQW1IRUJNT0lDWWNBQXg0UUJpd2dIRWhBT0kvUWUwZ3lvVHpFTVdaUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0ICdyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcyc7XHJcblxyXG5jb25zdCBTaW5nbGVJdGVtID0gc3R5bGVkLmxpYFxyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM4ZmRiODc7XHJcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gICYuY3VzdG9tLWRvdC0tYWN0aXZlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDlFN0Y7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gIGRlc2t0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHtcclxuICAgICAgbWF4OiAzMDAwLFxyXG4gICAgICBtaW46IDEwMjQsXHJcbiAgICB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgfSxcclxuICBtb2JpbGU6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHtcclxuICAgICAgbWF4OiA0NjQsXHJcbiAgICAgIG1pbjogMCxcclxuICAgIH0sXHJcbiAgICBpdGVtczogMSxcclxuICB9LFxyXG4gIHRhYmxldDoge1xyXG4gICAgYnJlYWtwb2ludDoge1xyXG4gICAgICBtYXg6IDEwMjQsXHJcbiAgICAgIG1pbjogMjAwLFxyXG4gICAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBDYXJvdXNlbFdpdGhDdXN0b21Eb3RzID0gKHtcclxuICBpdGVtcyA9IFtdLFxyXG4gIGRldmljZVR5cGU6IHsgbW9iaWxlLCB0YWJsZXQsIGRlc2t0b3AgfSxcclxuICB0aXRsZSxcclxuICAuLi5yZXN0XHJcbn06IGFueSkgPT4ge1xyXG5cclxuICBjb25zdCBjaGlsZHJlbiA9IGl0ZW1zLnNsaWNlKDAsIDYpLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICA8aW1nXHJcbiAgICAgIHNyYz17aXRlbX1cclxuICAgICAga2V5PXtpbmRleH1cclxuICAgICAgYWx0PXt0aXRsZX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBtaW5XaWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtaW1hZ2UnXHJcbiAgICAvPlxyXG4gICkpO1xyXG4gIGNvbnN0IGltYWdlcyA9IGl0ZW1zLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICA8aW1nXHJcbiAgICAgIHNyYz17aXRlbS51cmx9XHJcbiAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgIGFsdD17dGl0bGV9XHJcbiAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxyXG4gICAgLz5cclxuICApKTtcclxuICBjb25zdCBDdXN0b21Eb3QgPSAoe1xyXG4gICAgaW5kZXgsXHJcbiAgICBvbkNsaWNrLFxyXG4gICAgYWN0aXZlLFxyXG4gICAgY2Fyb3VzZWxTdGF0ZTogeyBjdXJyZW50U2xpZGUsIGRldmljZVR5cGUgfSxcclxuICB9OiBhbnkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTaW5nbGVJdGVtXHJcbiAgICAgICAgZGF0YS1pbmRleD17aW5kZXh9XHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgY3VzdG9tLWRvdCAke2FjdGl2ZSAmJiAnY3VzdG9tLWRvdC0tYWN0aXZlJ31gfVxyXG4gICAgICA+XHJcbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLnRvQXJyYXkoaW1hZ2VzKVtpbmRleF19XHJcbiAgICAgIDwvU2luZ2xlSXRlbT5cclxuICAgICk7XHJcbiAgfTtcclxuICBsZXQgZGV2aWNlVHlwZSA9ICdkZXNrdG9wJztcclxuICBpZiAobW9iaWxlKSB7XHJcbiAgICBkZXZpY2VUeXBlID0gJ21vYmlsZSc7XHJcbiAgfVxyXG4gIGlmICh0YWJsZXQpIHtcclxuICAgIGRldmljZVR5cGUgPSAndGFibGV0JztcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJvdXNlbFxyXG4gICAgICBzaG93RG90c1xyXG4gICAgICBzc3JcclxuICAgICAgaW5maW5pdGU9e3RydWV9XHJcbiAgICAgIHNsaWRlc1RvU2xpZGU9ezF9XHJcbiAgICAgIGNvbnRhaW5lckNsYXNzPSdjYXJvdXNlbC13aXRoLWN1c3RvbS1kb3RzJ1xyXG4gICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxyXG4gICAgICBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfVxyXG4gICAgICBhdXRvUGxheT17ZmFsc2V9XHJcbiAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgIGN1c3RvbURvdD17PEN1c3RvbURvdCAvPn1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsV2l0aEN1c3RvbURvdHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG50eXBlIFNlb1Byb3BzID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBjYW5vbmljYWw/OiBzdHJpbmc7XHJcbiAgY3NzPzogc3RyaW5nO1xyXG4gIGpzPzogc3RyaW5nO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFTzogUmVhY3QuRkM8U2VvUHJvcHM+ID0gKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBjYW5vbmljYWwsXHJcbiAgY3NzLFxyXG4gIGpzLFxyXG4gIGltYWdlLFxyXG59KSA9PiAoXHJcbiAgPEhlYWQ+XHJcbiAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgIDxtZXRhXHJcbiAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwiXHJcbiAgICAvPlxyXG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgPG1ldGFcclxuICAgICAgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxyXG4gICAgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIldpc2UgQ2FydFwiIC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2Ake2Nhbm9uaWNhbH1gfSAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAd2lzZWNhcnRcIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAd2lzZWNhcnRcIiAvPlxyXG4gICAge2NzcyAmJiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YCR7Y3NzfWB9IC8+fVxyXG4gICAge2ltYWdlID8gKFxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YCR7aW1hZ2V9YH0gLz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgY29udGVudD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dpc2VjYXJ0L2ltYWdlL3VwbG9hZC92MTYxNjcwOTg1MC9nbmZrZm5tMWM5cmN6bmNwNWM1dC5wbmdcIlxyXG4gICAgICAvPlxyXG4gICAgKX1cclxuICAgIHtpbWFnZSAmJiA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2Ake2ltYWdlfWB9IC8+fVxyXG4gICAge2Nhbm9uaWNhbCAmJiA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtgJHtjYW5vbmljYWx9YH0gLz59XHJcbiAgICB7anMgJiYgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPXtgJHtqc31gfT48L3NjcmlwdD59XHJcbiAgPC9IZWFkPlxyXG4pO1xyXG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tICcuL2JveCc7XHJcblxyXG5leHBvcnQgY29uc3QgU3ZnID0gKHsgc2l6ZSA9IDE4LCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPEJveFxyXG4gICAgYXM9XCJzdmdcIlxyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB3aWR0aD17c2l6ZSArICcnfVxyXG4gICAgaGVpZ2h0PXtzaXplICsgJyd9XHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgey4uLnByb3BzfVxyXG4gIC8+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiQC9hc3NldHMvaWNvbnMvU3RhclwiO1xyXG5pbnRlcmZhY2UgUmF0aW5nQ29udGFpbmVyUHJvcHN7XHJcbiAgICBzaXplOnN0cmluZ1xyXG59XHJcbmNvbnN0IFJhdGluZ0NvbnRhaW5lcj1zdHlsZWQuZGl2PFJhdGluZ0NvbnRhaW5lclByb3BzPmBcclxuICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHN2ZyB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgd2lkdGg6ICR7cHJvcHM9PnByb3BzLnNpemV9O1xyXG4gICAgICBcclxuICAgIH1cclxuICAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjNTRDNUM2O1xyXG4gIH1cclxuICAuaW5BY3RpdmUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuYFxyXG5jb25zdCBTdGFyUmF0aW5nOlJlYWN0LkZDPHtyYXRpbmc6bnVtYmVyLHNpemU/OnN0cmluZ30+ID0gKHtyYXRpbmcsc2l6ZX0pID0+IHtcclxuICAgIGxldCBhY3RpdmUgPSBBcnJheS5hcHBseShudWxsLCB7bGVuZ3RoOiByYXRpbmd9KVxyXG4gICAgbGV0IGluQWN0aXZlID0gQXJyYXkuYXBwbHkobnVsbCwge2xlbmd0aDogNS1yYXRpbmd9KVxyXG4gICAgY29uc3Qgc3RhclNpemU6c3RyaW5nPXNpemU/c2l6ZTonMjJweCdcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJhdGluZ0NvbnRhaW5lciBzaXplPXtzdGFyU2l6ZX0+XHJcbiAgICAgICAgICAgIHthY3RpdmUubWFwKChudW0pPT4gPFN0YXJJY29uIGNsYXNzTmFtZT17J2FjdGl2ZSd9IGtleT17bnVtfS8+KX1cclxuICAgICAgICAgICAge2luQWN0aXZlLm1hcCgobnVtKT0+IDxTdGFySWNvbiBjbGFzc05hbWU9eydpbkFjdGl2ZSd9IGtleT17bnVtfS8+KX1cclxuICAgICAgICA8L1JhdGluZ0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFyUmF0aW5nOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAL2NvbXBvbmVudHMvT3RoZXJzL2ltYWdlL2ltYWdlJztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ0AvY29tcG9uZW50cy9PdGhlcnMvYnV0dG9uL2J1dHRvbic7XHJcbmltcG9ydCB7XHJcbiAgICBQcm9kdWN0Q2FyZFdyYXBwZXIsXHJcbiAgICBQcm9kdWN0SW1hZ2VXcmFwcGVyLFxyXG4gICAgUHJvZHVjdEluZm8sXHJcbiAgICBCdXR0b25UZXh0LFxyXG59IGZyb20gJy4vcHJvZHVjdC1jYXJkLnN0eWxlJztcclxuaW1wb3J0IHtDb3VudGVyfSBmcm9tICcuLi8uLi9jYXJ0L2NvdW50ZXIvY291bnRlcic7XHJcbmltcG9ydCB7Q2FydEljb259IGZyb20gJ0AvYXNzZXRzL2ljb25zL0NhcnRJY29uJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7YWRkVG9DYXJ0fSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7Z2V0SXRlbUNhcnRRdHl9IGZyb20gXCJAL3V0aWxzL2NhcnRVdGlsc1wiO1xyXG5cclxudHlwZSBQcm9kdWN0Q2FyZFByb3BzID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGltYWdlOiBhbnk7XHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgc2FsZVByaWNlPzogbnVtYmVyO1xyXG4gICAgZGlzY291bnRJblBlcmNlbnQ/OiBudW1iZXI7XHJcbiAgICBvbkNsaWNrPzogKGU6IGFueSkgPT4gdm9pZDtcclxuICAgIHByb2R1Y3Q6IGFueVxyXG59O1xyXG5cclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdC9TdGFyUmF0aW5nXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDb252ZXJ0Q3VycmVuY3kgZnJvbSBcIkAvY29udmVydEN1cnJlbmN5XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0Q2FyZDogUmVhY3QuRkM8UHJvZHVjdENhcmRQcm9wcz4gPSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudEluUGVyY2VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgICBjb25zdCBoYW5kbGVBZGRDbGljayA9IChlOiB7IHN0b3BQcm9wYWdhdGlvbjogKCkgPT4gdm9pZDsgfSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3QsIDEpKVxyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCB7Y3VycmVuY3k6IHtzeW1ib2wsaWR9LGN1cnJlbmN5RGV0YWlsc30gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuc2hvcFJlZHVjZXIpO1xyXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlQ2xpY2sgPSAoZTogeyBzdG9wUHJvcGFnYXRpb246ICgpID0+IHZvaWQ7IH0pID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0LCAtMSkpXHJcblxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNhcnRRdWFudGl0eSA9IGdldEl0ZW1DYXJ0UXR5KGNhcnRTdGF0ZSwgcHJvZHVjdC5pZClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb2R1Y3RDYXJkV3JhcHBlciBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9kdWN0L1tzbHVnXSd9IGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0SW1hZ2VXcmFwcGVyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUHJvZHVjdEltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPFByb2R1Y3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8U3RhclJhdGluZyByYXRpbmc9ezR9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UHJpY2VXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q29udmVydEN1cnJlbmN5KGN1cnJlbmN5RGV0YWlscyxwcmljZSwnR0JQJyxpZCl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFjYXJ0UXVhbnRpdHkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcnQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRJY29uIG1yPXsyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvblRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2FydFF1YW50aXR5ID8gY2FydFF1YW50aXR5IDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVjcmVtZW50PXtoYW5kbGVSZW1vdmVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5jcmVtZW50PXtoYW5kbGVBZGRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgPC9Qcm9kdWN0Q2FyZFdyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcclxuXHJcbmNvbnN0IFN0eWxlZEJveCA9IHN0eWxlZC5kaXYoXHJcbiAgY3NzKHtcclxuICAgIHB5OiBbMzAsIDUwXSxcclxuICAgIHB4OiBbJzFyZW0nLCAwXSxcclxuICB9KSxcclxuICB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0Q2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2KFxyXG4gIGNzcyh7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxuICAgIGJvcmRlclJhZGl1czogJ2Jhc2UnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0SW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBoZWlnaHQ6IDE0NXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTYWxlVGFnID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnllbGxvdy5yZWd1bGFyJywgJyNGRkFENUUnKX07XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLm1lZGl1bScsICcxMnB4Jyl9O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpc2NvdW50UGVyY2VudCA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy55ZWxsb3cucmVndWxhcicsICcjRkZBRDVFJyl9O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5tZWRpdW0nLCAnMTJweCcpfTtcclxuICB6LWluZGV4OiAyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RJbmZvID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEyM3B4O1xyXG4gIH1cclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuICAgIG1hcmdpbjogMCAwIDdweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcm9kdWN0LXdlaWdodCB7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMueHMnLCAnMTInKX1weDtcclxuICAgIH1cclxuICB9XHJcbiAgLnByb2R1Y3QtbWV0YSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgbWluLWhlaWdodDogMzJweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0UHJpY2VXcmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgLnByb2R1Y3QtcHJpY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgICAgICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggLSAxcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGlzY291bnRlZFByaWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMueWVsbG93LmhvdmVyJywgJyNGQkI5NzknKX07XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnllbGxvdy5ob3ZlcicsICcjRkJCOTc5Jyl9O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcnQtYnV0dG9uIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuMjAwJywgJyNmN2Y3ZjcnKX07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJpZycsICcxOHB4Jyl9O1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTdweDtcclxuICAgICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMCA2cHg7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgICB9XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIC5xdWFudGl0eSB7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbmNCdG4ge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZGVjQnRuIHtcclxuICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0W3R5cGU9J251bWJlciddIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4IC0gMXB4KTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU0cHgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDI3cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvblRleHQgPSBzdHlsZWQuc3BhbmBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvb2tJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMjc1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGhlaWdodDogMjE1cHg7XHJcbiAgfVxyXG4gICR7RGlzY291bnRQZXJjZW50fSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQm9va0luZm8gPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3ROYW1lID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgbWFyZ2luOiAwIDAgN3B4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAmOm9ubHktY2hpbGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4IC0gMXB4KTtcclxuICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRob3JJbmZvID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgQWRkQ2FydEJveCA9IHN0eWxlZC5kaXZgXHJcbi8vICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIHBhZGRpbmc6IDIwcHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiA1MCU7XHJcbi8vICAgbGVmdDogNTAlO1xyXG4vLyAgIG9wYWNpdHk6IDA7XHJcbi8vICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblxyXG4vLyAgIC5jYXJ0LWJ1dHRvbiB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAzNnB4O1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogMTdweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLjEnLCAnMTMnKX0gcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbi8vICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuLy8gICAgICAgd2lkdGg6IDMycHg7XHJcbi8vICAgICAgIGhlaWdodDogMzJweDtcclxuLy8gICAgICAgcGFkZGluZzogMDtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmJ0bi10ZXh0IHtcclxuLy8gICAgICAgcGFkZGluZzogMCAwIDAgNnB4O1xyXG4vLyAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAmOmhvdmVyIHtcclxuLy8gICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuLy8gICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5ZTdmO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgc3ZnIHtcclxuLy8gICAgICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmljZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmljZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggLSAxcHgpO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXNjb3VudGVkUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9IHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnllbGxvdy5yZWd1bGFyJywgJyNGRkFENUUnKX07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tbGVmdDogLTRweDtcclxuICB6LWluZGV4OiAyO1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy55ZWxsb3cucmVndWxhcicsICcjRkZBRDVFJyl9O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCb29rQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb2RDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb2RJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMjMwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGhlaWdodDogMTQ1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RNZXRhID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsaXZlcnlPcHQgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEdXJhdGlvbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iaWcnLCAnMThweCcpfTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3REZXRhaWxzV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFJldmlld1RpdGxlPXN0eWxlZC5oM2BcclxudGV4dC1hbGlnbjogY2VudGVyXHJcbmBcclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RQcmV2aWV3ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgcGFkZGluZzogMzBweCA0MHB4IDYwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHggNjBweDtcclxuICAgIG9yZGVyOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCYWNrQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2MHB4O1xyXG4gIGxlZnQ6IDYwcHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgfVxyXG4gIC5yZXVzZWNvcmVfX2J1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OEMnKX07XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAuYnRuLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5idG4tdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RJbmZvID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTAlO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuNTAwJywgJyNmMWYxZjEnKX07XHJcbiAgcGFkZGluZzogNTVweCA2MHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHggMjVweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG9yZGVyOiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTYWxlVGFnID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy55ZWxsb3cuYWx0ZXJuYXRlJywgJyNmNGMyNDMnKX07XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLm1lZGl1bScsICcxMnB4Jyl9O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpc2NvdW50UGVyY2VudCA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnhzJywgJzEyJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuc2Vjb25kYXJ5LnJlZ3VsYXInLCAnI2ZmNWI2MCcpfTtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDE4MHB4O1xyXG4gIHJpZ2h0OiAtNjBweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMXB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDFweCk7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLThweDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMCA4cHggMTJweCAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAke3RoZW1lR2V0KCdjb2xvcnMuc2Vjb25kYXJ5LnJlZ3VsYXInLCAnI2ZmNWI2MCcpfVxyXG4gICAgICB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtOHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMTJweCA4cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50XHJcbiAgICAgICR7dGhlbWVHZXQoJ2NvbG9ycy5zZWNvbmRhcnkucmVndWxhcicsICcjZmY1YjYwJyl9IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0VGl0bGVQcmljZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5oZWFkaW5nJywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMubGcnLCAnMjEnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFByaWNlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0UHJpY2UgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggKyAxcHgpO1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNhbGVQcmljZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy55ZWxsb3cucmVndWxhcicsICcjRkZBRDVFJyl9O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy55ZWxsb3cucmVndWxhcicsICcjRkZBRDVFJyl9O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0V2VpZ2h0ID0gc3R5bGVkLmRpdmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OEMnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5tZWRpdW0nLCAnIzQyNDU2MScpfTtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RDYXJ0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0Q2FydEJ0biA9IHN0eWxlZC5kaXZgXHJcbiAgLmNhcnQtYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgIC5idG4taWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxuICAgICAgc3ZnIHtcclxuICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnF1YW50aXR5IHtcclxuICAgIHdpZHRoOiAxMTVweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uVGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdE1ldGEgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWV0YVNpbmdsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1ldGFJdGVtID0gc3R5bGVkLnNwYW48e2NhdGVnb3J5OmJvb2xlYW59PmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZToke3Byb3BzID0+IHByb3BzLmNhdGVnb3J5PycxOHB4JzonMTNweCd9O1xyXG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjoke3Byb3BzID0+IHByb3BzLmNhdGVnb3J5PycjMEQxMTM2JzonIzFjMWUzMid9OztcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5jYXRlZ29yeT8nNDVweCc6JzQwcHgnfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUmVsYXRlZEl0ZW1zID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNTVweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gID4gaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmhlYWRpbmcnLCAnc2Fucy1zZXJpZicpfTtcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmxnJywgJzIxJyl9cHg7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+IGRpdiA+IGRpdiB7XHJcbiAgICBmbGV4OiAwIDAgMjAlO1xyXG4gICAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAgIGZsZXg6IDAgMCAyMCU7XHJcbiAgICAgIG1heC13aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgICBmbGV4OiAwIDAgMjUlO1xyXG4gICAgICBtYXgtd2lkdGg6IDI1JTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDYwcHgpIHtcclxuICAgICAgZmxleDogMCAwIDMzLjMzMzMzMzMlO1xyXG4gICAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDcuNXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA3LjVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICBmbGV4OiAwIDAgNTAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvT3RoZXJzL2J1dHRvbi9idXR0b24nO1xyXG5pbXBvcnQgUmVhZE1vcmUgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0L2RldGFpbHMvdHJ1bmNhdGVcIjtcclxuaW1wb3J0IHtcclxuICBQcm9kdWN0RGV0YWlsc1dyYXBwZXIsXHJcbiAgUHJvZHVjdFByZXZpZXcsXHJcbiAgUHJvZHVjdEluZm8sXHJcbiAgUHJvZHVjdFRpdGxlUHJpY2VXcmFwcGVyLFxyXG4gIFByb2R1Y3RUaXRsZSxcclxuICBCYWNrQnV0dG9uLFxyXG4gIFByb2R1Y3REZXNjcmlwdGlvbixcclxuICBCdXR0b25UZXh0LFxyXG4gIFByb2R1Y3RNZXRhLFxyXG4gIFByb2R1Y3RDYXJ0V3JhcHBlcixcclxuICBQcm9kdWN0UHJpY2VXcmFwcGVyLFxyXG4gIFByb2R1Y3RQcmljZSxcclxuICBTYWxlUHJpY2UsXHJcbiAgUHJvZHVjdENhcnRCdG4sXHJcbiAgTWV0YVNpbmdsZSxcclxuICBNZXRhSXRlbSxcclxuICBSZWxhdGVkSXRlbXMsIFJldmlld1RpdGxlLFxyXG59IGZyb20gJy4vUHJvZHVjdERldGFpbHMuc3R5bGUnO1xyXG5pbXBvcnQgeyBMb25nQXJyb3dMZWZ0IH0gZnJvbSAnQC9hc3NldHMvaWNvbnMvTG9uZ0Fycm93TGVmdCc7XHJcbmltcG9ydCB7IENhcnRJY29uIH0gZnJvbSAnQC9hc3NldHMvaWNvbnMvQ2FydEljb24nO1xyXG5pbXBvcnQgQ2Fyb3VzZWxXaXRoQ3VzdG9tRG90cyBmcm9tICdAL2NvbXBvbmVudHMvT3RoZXJzL211bHRpLWNhcm91c2VsL211bHRpLWNhcm91c2VsJztcclxuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9jYXJ0L2NvdW50ZXIvY291bnRlcic7XHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tIFwiLi4vZ3JpZC9Qcm9kdWN0R3JpZFwiO1xyXG5pbXBvcnQgU3RhclJhdGluZyBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3QvU3RhclJhdGluZ1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Z2V0SXRlbUNhcnRRdHl9IGZyb20gXCJAL3V0aWxzL2NhcnRVdGlsc1wiO1xyXG5pbXBvcnQge2FkZFRvQ2FydH0gZnJvbSBcIkAvcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQge0Fycm93TmV4dH0gZnJvbSBcIkAvYXNzZXRzL2ljb25zL0Fycm93TmV4dFwiO1xyXG5pbXBvcnQgUmV2aWV3Q29tcG9uZW50IGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdC9kZXRhaWxzL1Jldmlldy9SZXZpZXdDb21wb25lbnRcIjtcclxudHlwZSBQcm9kdWN0RGV0YWlsc1Byb3BzID0ge1xyXG4gIHByb2R1Y3Q6IGFueTtcclxuICBkZXZpY2VUeXBlOiB7XHJcbiAgICBtb2JpbGU6IGJvb2xlYW47XHJcbiAgICB0YWJsZXQ6IGJvb2xlYW47XHJcbiAgICBkZXNrdG9wOiBib29sZWFuO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBQcm9kdWN0RGV0YWlsczogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvZHVjdERldGFpbHNQcm9wcz4gPSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXZpY2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcclxuICBjb25zdCB7Y3VycmVuY3k6e3N5bWJvbH19ID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuc2hvcFJlZHVjZXIpO1xyXG4gIGNvbnN0IGNhcnRRdWFudGl0eT1nZXRJdGVtQ2FydFF0eShjYXJ0U3RhdGUscHJvZHVjdC5pZClcclxuICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVBZGRDbGljayA9IChlOiB7IHN0b3BQcm9wYWdhdGlvbjogKCkgPT4gdm9pZDsgfSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0LDEpKVxyXG5cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUNsaWNrID0gKGU6IHsgc3RvcFByb3BhZ2F0aW9uOiAoKSA9PiB2b2lkOyB9KSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3QsLTEpKVxyXG5cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQcm9kdWN0RGV0YWlsc1dyYXBwZXIgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkXCIgZGlyPVwibHRyXCI+XHJcbiAgICAgICAgICA8UHJvZHVjdFByZXZpZXc+XHJcbiAgICAgICAgICAgIDxCYWNrQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmMWYxZjEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzc3Nzk4YycsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1JvdXRlci5iYWNrfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMb25nQXJyb3dMZWZ0IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19IC8+XHJcbiAgICAgICAgICAgICAgICBCYWNrICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9CYWNrQnV0dG9uPlxyXG4gICAgICAgICAgICB7cHJvZHVjdC50aHVtYkltYWdlPzxDYXJvdXNlbFdpdGhDdXN0b21Eb3RzXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17W3Byb2R1Y3QudGh1bWJJbWFnZSwuLi5wcm9kdWN0LmltYWdlc119XHJcbiAgICAgICAgICAgICAgICBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfVxyXG4gICAgICAgICAgICAvPjo8Q2Fyb3VzZWxXaXRoQ3VzdG9tRG90c1xyXG4gICAgICAgICAgICAgICAgaXRlbXM9e1snaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2lzZWNhcnQvaW1hZ2UvdXBsb2FkL3YxNjIyMzg3OTM4L253eGduZWoxeDZ5dnVncmI4bHp2LnBuZyddfVxyXG4gICAgICAgICAgICAgICAgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX1cclxuICAgICAgICAgICAgLz59XHJcblxyXG4gICAgICAgICAgPC9Qcm9kdWN0UHJldmlldz5cclxuXHJcbiAgICAgICAgICA8UHJvZHVjdEluZm8gZGlyPXsnbHRyJ30+XHJcbiAgICAgICAgICAgIDxQcm9kdWN0VGl0bGVQcmljZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPFByb2R1Y3RUaXRsZT57cHJvZHVjdC5uYW1lfTwvUHJvZHVjdFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0UHJpY2VXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3QuZGlzY291bnRJblBlcmNlbnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNhbGVQcmljZT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1NhbGVQcmljZT5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0UHJpY2U+XHJcbiAgICAgICAgICAgICAgICAgIHtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnNhbGVQcmljZSA/IHByb2R1Y3Quc2FsZVByaWNlIDogcHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgICAgICAgIDwvUHJvZHVjdFByaWNlPlxyXG4gICAgICAgICAgICAgIDwvUHJvZHVjdFByaWNlV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9Qcm9kdWN0VGl0bGVQcmljZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxTdGFyUmF0aW5nIHJhdGluZz17NH0vPlxyXG4gICAgICAgICAgICB7Lyo8UHJvZHVjdFdlaWdodD57cHJvZHVjdC51bml0fTwvUHJvZHVjdFdlaWdodD4qL31cclxuICAgICAgICAgICAgey8qPFByb2R1Y3REZXNjcmlwdGlvbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcHJvZHVjdC5kZXNjcmlwdGlvbn19Lz4qL31cclxuICAgICAgICAgICAgPFByb2R1Y3REZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8UmVhZE1vcmUgY2hhcmFjdGVyPXs2MDB9IG1vcmU9e1wiUmVhZCBNb3JlXCJ9IGxlc3M9e1wiU2hvdyBMZXNzXCJ9IHRleHQ9e3Byb2R1Y3QuZGVzY3JpcHRpb259Lz5cclxuICAgICAgICAgICAgPC9Qcm9kdWN0RGVzY3JpcHRpb24+XHJcblxyXG4gICAgICAgICAgICA8UHJvZHVjdENhcnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0Q2FydEJ0bj5cclxuICAgICAgICAgICAgICAgIHshY2FydFF1YW50aXR5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FydC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0SWNvbiBtcj17Mn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvblRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjYXJ0UXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVjcmVtZW50PXtoYW5kbGVSZW1vdmVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbmNyZW1lbnQ9e2hhbmRsZUFkZENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICA8L1Byb2R1Y3RDYXJ0QnRuPlxyXG4gICAgICAgICAgICA8L1Byb2R1Y3RDYXJ0V3JhcHBlcj5cclxuXHJcbiAgICAgICAgICAgIDxQcm9kdWN0TWV0YT5cclxuICAgICAgICAgICAgICA8TWV0YVNpbmdsZT5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LmNhdGVnb3J5JiZcclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgLz9jYXRlZ29yeT0ke3Byb2R1Y3QuY2F0ZWdvcnl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgbGluay0ke3Byb2R1Y3QuY2F0ZWdvcnl9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRhSXRlbSBjYXRlZ29yeT17dHJ1ZX0+e3Byb2R1Y3QuY2F0ZWdvcnl9PC9NZXRhSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz59XHJcblxyXG4gICAgICAgICAgICAgICAgPEFycm93TmV4dC8+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5zdWJDYXRlZ29yeSYmXHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvP2NhdGVnb3J5PSR7cHJvZHVjdC5zdWJDYXRlZ29yeX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGxpbmstJHtwcm9kdWN0LnN1YkNhdGVnb3J5fWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZXRhSXRlbSBjYXRlZ29yeT17ZmFsc2V9Pntwcm9kdWN0LnN1YkNhdGVnb3J5fTwvTWV0YUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+fVxyXG4gICAgICAgICAgICAgIDwvTWV0YVNpbmdsZT5cclxuICAgICAgICAgICAgPC9Qcm9kdWN0TWV0YT5cclxuICAgICAgICAgIDwvUHJvZHVjdEluZm8+XHJcblxyXG4gICAgICAgICAgPFByb2R1Y3RQcmV2aWV3PlxyXG4gICAgICAgICAgICA8QmFja0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQmFja1wiXHJcbiAgICAgICAgICAgICAgICAgIGludGxCdXR0b25JZD1cImJhY2tCdG5cIlxyXG4gICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2YxZjFmMScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjNzc3OThjJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgaWNvbj17PExvbmdBcnJvd0xlZnQgLz59XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1JvdXRlci5iYWNrfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQmFja0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxDYXJvdXNlbFdpdGhDdXN0b21Eb3RzXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17cHJvZHVjdC5nYWxsZXJ5fVxyXG4gICAgICAgICAgICAgICAgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvUHJvZHVjdFByZXZpZXc+XHJcbiAgICAgICAgPC9Qcm9kdWN0RGV0YWlsc1dyYXBwZXI+XHJcbiAgICAgICAgPFJldmlld0NvbXBvbmVudC8+XHJcbiAgICAgICAgPFJlbGF0ZWRJdGVtcz5cclxuICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgUmVsYXRlZCBJdGVtc1xyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxQcm9kdWN0cy8+XHJcbiAgICAgICAgPC9SZWxhdGVkSXRlbXM+XHJcbiAgICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtEb3VibGVDb250YWluZXIsIEZpZWxkV3JhcHBlciwgSGVhZGluZ30gZnJvbSBcIkAvZmVhdHVyZXMvY2hlY2tvdXRzL0FkZHJlc3Muc3R5bGVcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJAL2NvbXBvbmVudHMvT3RoZXJzL2J1dHRvbi9idXR0b25cIjtcclxuaW1wb3J0IHt1c2VMb2dpbkZvcm19IGZyb20gXCJAL2hvb2tzL3VzZUxvZ2luRm9ybVwiO1xyXG5pbXBvcnQgU3RhclJhdGluZyBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3QvU3RhclJhdGluZ1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3RoZW1lR2V0fSBmcm9tIFwiQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0XCI7XHJcbmNvbnN0IFRleHRBcmVhPXN0eWxlZC50ZXh0YXJlYWBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG5gXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgXHJcbiAgcGFkZGluZzogNDBweCA2MHB4IDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogNDBweCAzMHB4IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQWRkUmV2aWV3ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge2lucHV0cywgaGFuZGxlSW5wdXRDaGFuZ2V9ID0gdXNlTG9naW5Gb3JtKCk7XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxTdGFyUmF0aW5nIHJhdGluZz17NH0gc2l6ZT17XCIyMCVcIn0vPlxyXG4gICAgICAgICAgICA8RmllbGRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgTGluZSAyIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJhZGRyZXNzMlwifVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5hZGRyZXNzMn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRmllbGRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNDRweCd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBZGQgdGhpcyByZXZpZXdcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRSZXZpZXc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0L1N0YXJSYXRpbmdcIjtcclxuY29uc3QgUmV2aWV3Q2FyZENvbnRhaW5lcj1zdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXgtd2lkdGg6IDcwOXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDAuNXB4IDBweDtcclxuICBib3gtc2hhZG93OiAjZWVlZWVlIDJweCAycHggMnB4IDJweDtcclxuYFxyXG5jb25zdCBSZXZpZXdIZWFkZXI9c3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7YFxyXG5jb25zdCBOYW1lR3JvdXA9c3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgSW5pdGlhbHM9c3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkNTZhNmE7XHJcbmBcclxuY29uc3QgRGVzY3JpcHRpb249c3R5bGVkLmRpdmBcclxuICBjb2xvcjogIzJiMmIyYjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMHB4IDQ1cHg7XHJcbmBcclxuY29uc3QgRGV0YWlscz1zdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogMHB4IDQ1cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogIzhjOGFhNztcclxuYFxyXG5jb25zdCBTaGFyZUdyb3VwPXN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICMxMDREOTI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuY29uc3QgUmV2aWV3Q2FyZCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJldmlld0NhcmRDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxSZXZpZXdIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TmFtZUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbml0aWFscz5BPC9Jbml0aWFscz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5BbGljZSBCYW5rczwvcD5cclxuICAgICAgICAgICAgICAgIDwvTmFtZUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPFN0YXJSYXRpbmcgcmF0aW5nPXs0fS8+XHJcbiAgICAgICAgICAgIDwvUmV2aWV3SGVhZGVyPlxyXG4gICAgICAgICAgICA8RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICBUaGUgZGV2aWNlIGhhcyBhIGNsZWFuIGRlc2lnbiwgYW5kIHRoZSBtZXRhbCBob3VzaW5nIGZlZWxzIHN0dXJkeSBpbiBteSBoYW5kcy4gU29mdCByb3VuZGVkIGNvcm5lcnMgbWFrZVxyXG4gICAgICAgICAgICAgICAgaXQgYSBwbGVhc3VyZSB0byBsb29rIGF0LlxyXG4gICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8RGV0YWlscz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWRhdGVcIj5GZWIgMTMsIDIwMjE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxTaGFyZUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlNoYXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9TaGFyZUdyb3VwPlxyXG4gICAgICAgICAgICA8L0RldGFpbHM+XHJcbiAgICAgICAgPC9SZXZpZXdDYXJkQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld0NhcmQ7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUYWdzV3JhcHBlcj1zdHlsZWQuZGl2YFxyXG4gIG1heC1oZWlnaHQ6IDEzMHB4O1xyXG4gIG1hcmdpbjogMzVweDtcclxuXHJcbmBcclxuLy8gZXhwb3J0IGNvbnN0IFJldmlld3NXcmFwcGVyPXN0eWxlZC5kaXZgXHJcbi8vICAgaGVpZ2h0OiA0MTdweDtcclxuLy9cclxuLy9cclxuLy8gYFxyXG5leHBvcnQgY29uc3QgUmV2aWV3c0NvbnRhaW5lcj1zdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIFxyXG5gXHJcbmV4cG9ydCBjb25zdCBSZXZpZXdDb250YWluZXI9c3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuYFxyXG5leHBvcnQgY29uc3QgQWRkUmV2aWV3Q29udGFpbmVyPXN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuZXhwb3J0IGNvbnN0IFRhZ3NIZWFkZXI9c3R5bGVkLmRpdmBcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IFRhZ3NDb250YWluZXI9c3R5bGVkLmRpdmBcclxuICAudGFnIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYmFja2dyb3VuZDogIzFkMWMyZDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbjogMTBweCAzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogIzg3ODBmODtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbmAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmV2aWV3Q2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3QvZGV0YWlscy9SZXZpZXcvUmV2aWV3Q2FyZFwiO1xyXG5pbXBvcnQge1RhZ3NDb250YWluZXIsIFRhZ3NIZWFkZXIsIFRhZ3NXcmFwcGVyLCBSZXZpZXdzQ29udGFpbmVyLCBSZXZpZXdDb250YWluZXIsQWRkUmV2aWV3Q29udGFpbmVyfSBmcm9tICcuL1Jldmlld0NvbXBvbmVudC5zdHlsZSc7XHJcbmltcG9ydCB7UmV2aWV3VGl0bGV9IGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdC9kZXRhaWxzL1Byb2R1Y3REZXRhaWxzLnN0eWxlXCI7XHJcbmltcG9ydCBBZGRSZXZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0L2RldGFpbHMvUmV2aWV3L0FkZFJldmlld1wiO1xyXG5pbXBvcnQge1Njcm9sbGJhcn0gZnJvbSBcIkAvY29tcG9uZW50cy9TY3JvbGxiYXJcIjtcclxuXHJcbmNvbnN0IFJldmlld0NvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJldmlld3NDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxSZXZpZXdUaXRsZT5DdXN0b21lciByZXZpZXdzPC9SZXZpZXdUaXRsZT5cclxuICAgICAgICAgICAgPFRhZ3NXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFRhZ3NIZWFkZXI+VGFnczwvVGFnc0hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxUYWdzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnXCI+RXhwZXJpZW5jZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnXCI+UXVhbGl0eTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnIHNlbGVjdGVkXCI+RGVzaWduPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdcIj5TaXplPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdcIj5GZWF0dXJlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnXCI+VmFsdWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ1wiPlJlcGxhY2VtZW50PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhZ3NDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvVGFnc1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxTY3JvbGxiYXIgc3R5bGU9e3toZWlnaHQ6XCI0NTBweFwiLHdpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxSZXZpZXdDYXJkLz5cclxuICAgICAgICAgICAgPFJldmlld0NhcmQvPlxyXG4gICAgICAgICAgICA8UmV2aWV3Q2FyZC8+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsYmFyPlxyXG4gICAgICAgICAgICA8QWRkUmV2aWV3Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UmV2aWV3VGl0bGU+QWRkIGEgcmV2aWV3PC9SZXZpZXdUaXRsZT5cclxuICAgICAgICAgICAgPEFkZFJldmlldy8+XHJcbiAgICAgICAgICAgIDwvQWRkUmV2aWV3Q29udGFpbmVyPlxyXG4gICAgICAgIDwvUmV2aWV3c0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdDb21wb25lbnQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBSZWFkTW9yZVByb3BzID0ge1xyXG4gIG1vcmU/OiBzdHJpbmc7XHJcbiAgbGVzcz86IHN0cmluZztcclxuICBjaGFyYWN0ZXI6IG51bWJlcjtcclxuICB0ZXh0OmFueVxyXG59O1xyXG5cclxuY29uc3QgUmVhZE1vcmU6UmVhY3QuRkM8UmVhZE1vcmVQcm9wcz49ICh7IHRleHQsIG1vcmUsIGxlc3MsIGNoYXJhY3RlciB9KSA9PiB7XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUxpbmVzID0gKGV2ZW50OiB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkOyB9KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcclxuICB9O1xyXG4gIGNvbnN0IGRhbmdlcm91c2x5U2V0SFRNTD0oaHRtbCk9PntcclxuICAgIHJldHVybiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBodG1sfX0vPlxyXG5cclxuICB9XHJcblxyXG4gIGlmICghdGV4dCkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsodGV4dCAmJiB0ZXh0Lmxlbmd0aCA8IGNoYXJhY3RlcikgfHwgZXhwYW5kZWRcclxuICAgICAgICA/IGRhbmdlcm91c2x5U2V0SFRNTCh0ZXh0KVxyXG4gICAgICAgIDogZGFuZ2Vyb3VzbHlTZXRIVE1MKHRleHQuc3Vic3RyaW5nKDAsIGNoYXJhY3RlcikpfVxyXG4gICAgICB7dGV4dCAmJiB0ZXh0Lmxlbmd0aCA+IGNoYXJhY3RlciAmJiAhZXhwYW5kZWQgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVMaW5lc31cclxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyMwMDllN2YnLCBmb250V2VpZ2h0OiA3MDAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttb3JlfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHt0ZXh0ICYmIHRleHQubGVuZ3RoID4gY2hhcmFjdGVyICYmIGV4cGFuZGVkICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTGluZXN9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjMDA5ZTdmJywgZm9udFdlaWdodDogNzAwIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGVzc31cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblJlYWRNb3JlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjaGFyYWN0ZXI6IDE1MCxcclxuICBtb3JlOiAnUmVhZCBtb3JlJyxcclxuICBsZXNzOiAnbGVzcycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFkTW9yZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvZHVjdENhcmQgIGZyb20gJy4uL2NhcmQvUHJvZHVjdEl0ZW0nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vbG9hZG1vcmUtYnV0dG9uJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi9ib3gnO1xyXG5cclxuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xyXG5cclxuaW1wb3J0IHtHcmlkfSBmcm9tICcuL1Byb2R1Y3RHcmlkU3R5bGVzJ1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCB1c2VGZXRjaCBmcm9tIFwiQC9ob29rcy91c2VGZXRjaFwiO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbG9hZE1vcmU/OiBib29sZWFuO1xyXG4gICAgZmV0Y2hMaW1pdD86IG51bWJlcjtcclxuICAgIHN0eWxlPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdEdyaWQgPSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb3JlID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaExpbWl0ID0gMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9OiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB1cmw9KCk9PntcclxuICAgICAgICBjb25zdCB7Y2F0ZWdvcnksc3ViQ2F0ZWdvcnkscXVlcnl9PXJvdXRlci5xdWVyeVxyXG4gICAgICAgIGlmKHF1ZXJ5KXtcclxuICAgICAgICAgICAgaWYoY2F0ZWdvcnkpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlRdWVyeT1jYXRlZ29yeT9gY2F0ZWdvcnk9JHtjYXRlZ29yeX1gOicnXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvcHJvZHVjdHMvc2VhcmNoP3F1ZXJ5PSR7cXVlcnl9JiR7Y2F0ZWdvcnlRdWVyeX1gXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL3Byb2R1Y3RzL3NlYXJjaD9xdWVyeT0ke3F1ZXJ5fWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5KXtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlRdWVyeT1jYXRlZ29yeT9gY2F0ZWdvcnk9JHtjYXRlZ29yeX1gOicnXHJcbiAgICAgICAgICAgIGNvbnN0IHN1YmNhdGVnb3J5UXVlcnk9c3ViQ2F0ZWdvcnk/YHN1YkNhdGVnb3J5PSR7c3ViQ2F0ZWdvcnl9YDonJ1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvcHJvZHVjdHMvPyR7Y2F0ZWdvcnlRdWVyeX0mJHtzdWJjYXRlZ29yeVF1ZXJ5fWBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL3Byb2R1Y3RzL3NpbWlsYXIvc2FzYFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFtkYXRhLCBpc0xvYWRpbmddPXVzZUZldGNoKHVybCgpKVxyXG5cclxuICAgIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVByb2R1Y3RzKHtcclxuICAgIC8vICAgICB0eXBlLFxyXG4gICAgLy8gICAgIHRleHQ6IHJvdXRlci5xdWVyeS50ZXh0LFxyXG4gICAgLy8gICAgIGNhdGVnb3J5OiByb3V0ZXIucXVlcnkuY2F0ZWdvcnksXHJcbiAgICAvLyAgICAgb2Zmc2V0OiAwLFxyXG4gICAgLy8gICAgIGxpbWl0OiBmZXRjaExpbWl0LFxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IGhhbmRsZUxvYWRNb3JlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgLy8gYXdhaXQgZmV0Y2hNb3JlKE51bWJlcihkYXRhLmxlbmd0aCksIGZldGNoTGltaXQpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbmRlckNhcmQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9IGltYWdlPXtwcm9wcy50aHVtYkltYWdlfVxyXG4gICAgICAgICAgICAgICAgcHJpY2U9e3Byb3BzLnByaWNlfSBrZXk9e3Byb3BzLl9pZH0gcHJvZHVjdD17cHJvcHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IHsgaXRlbXMsIGhhc01vcmUgfSA9IGRhdGEucHJvZHVjdHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICA8R3JpZCBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAge2RhdGEuZGF0YS5tYXAoKHByb2R1Y3QsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNhcmQocHJvZHVjdClcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICB7bG9hZE1vcmUgJiYgZGF0YT8uaGFzTW9yZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0gbXQ9eycycmVtJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2FkTW9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPScxcHggc29saWQgI2YxZjFmMSdcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWQgTW9yZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEdyaWQiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuLy8gQHRzLW5vY2hlY2tcclxuZXhwb3J0IGNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2KFxyXG4gICAge1xyXG5cclxuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgZ3JpZEdhcDogJzEwcHgnLFxyXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMSwgbWlubWF4KDE4MHB4LCAxZnIpKScsXHJcblxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NDBweCknOiB7XHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMiwgbWlubWF4KDE4MHB4LCAxZnIpKScsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSc6IHtcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgzLCBtaW5tYXgoMTgwcHgsIDFmcikpJyxcclxuICAgICAgICAgICAgZ3JpZEdhcDogJzIwcHgnLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCknOiB7XHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMiwgbWlubWF4KDE4MHB4LCAxZnIpKScsXHJcbiAgICAgICAgICAgIGdyaWRHYXA6ICczMHB4JyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSc6IHtcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgzLCBtaW5tYXgoMTgwcHgsIDFmcikpJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTcwMHB4KSc6IHtcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCg0LCBtaW5tYXgoMjQwcHgsIDFmcikpJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjIwMHB4KSc6IHtcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCg1LCBtaW5tYXgoMjQwcHgsIDFmcikpJyxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG4pO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIGNvbXBvc2UsXG4gIHNwYWNlLFxuICBjb2xvcixcbiAgbGF5b3V0LFxuICBmbGV4Ym94LFxuICBwb3NpdGlvbixcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2PGFueT4oXG4gIHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBtaW5XaWR0aDogMCxcbiAgICBtYXJnaW46IDAsXG4gIH0sXG4gIGNvbXBvc2Uoc3BhY2UsIGNvbG9yLCBsYXlvdXQsIGZsZXhib3gsIHBvc2l0aW9uKVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcywgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHN5c3RlbUNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xuaW1wb3J0IHsgY29tcG9zZSwgdmFyaWFudCwgYm9yZGVyLCBzcGFjZSwgbGF5b3V0IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuZGl2PGFueT4oXG4gIChwcm9wcykgPT5cbiAgICBzeXN0ZW1Dc3Moe1xuICAgICAgcHg6ICcxNXB4JyxcbiAgICAgIHB5OiAwLFxuICAgICAgZm9udFNpemU6IFsnYmFzZSddLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgY3Vyc29yOiBwcm9wcy5kaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyAndGV4dC5saWdodCcgOiAnd2hpdGUnLFxuICAgICAgYmc6IHByb3BzLmRpc2FibGVkID8gJ2dyYXkuNTAwJyA6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnYmFzZScsXG5cbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyAndGV4dC5saWdodCcgOiAnd2hpdGUnLFxuICAgICAgICBiZzogcHJvcHMuZGlzYWJsZWQgPyAnZ3JheS41MDAnIDogJ3ByaW1hcnkuaG92ZXInLFxuICAgICAgfSxcbiAgICB9KSxcbiAge1xuICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICczOHB4JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6IDAsXG5cbiAgICAnJjpmb2N1cyc6IHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICB2YXJpYW50KHtcbiAgICB2YXJpYW50czoge1xuICAgICAgb3V0bGluZWQ6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICBiZzogJ3doaXRlJyxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdncmF5LjUwMCcsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgICAgYmc6ICd3aGl0ZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcHJpbWFyeToge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmc6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBiZzogJ3ByaW1hcnkuaG92ZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgIGJnOiAnd2hpdGUnLFxuICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxuICAgICAgICBib3JkZXJDb2xvcjogJ2dyYXkuNTAwJyxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYmc6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIGNvbG9yOiAncHJpbWFyeS5ob3ZlcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIHdpZHRoOiAyNixcbiAgICAgICAgaGVpZ2h0OiAyNixcbiAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICd0ZXh0LnJlZ3VsYXInLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDEzLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBjb2xvcjogJ3RleHQuYm9sZCcsXG4gICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAnJi5zZWxlY3RlZCc6IHtcbiAgICAgICAgICBiZzogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICB9LFxuICAgICAgICAnJjpob3Zlcjpub3QoLnNlbGVjdGVkKSc6IHtcbiAgICAgICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgdmFyaWFudCh7XG4gICAgcHJvcDogJ3NpemUnLFxuICAgIHZhcmlhbnRzOiB7XG4gICAgICBiaWc6IHtcbiAgICAgICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgICAgIHB4OiAzMCxcbiAgICAgIH0sXG4gICAgICBzbWFsbDoge1xuICAgICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgY29tcG9zZShib3JkZXIsIHNwYWNlLCBsYXlvdXQpXG4pO1xuY29uc3Qgcm90YXRlID0ga2V5ZnJhbWVzYFxuICBmcm9tIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG4gIHRvIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbmA7XG5cbmNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2KFxuICAocHJvcHMpID0+XG4gICAgc3lzdGVtQ3NzKHtcbiAgICAgIHdpZHRoOiAxOCxcbiAgICAgIGhlaWdodDogMTgsXG4gICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgIGJvcmRlcjogJzNweCBzb2xpZCB3aGl0ZScsXG4gICAgICBib3JkZXJUb3A6IGAzcHggc29saWQgJHtwcm9wcy5jb2xvciA/IHByb3BzLmNvbG9yIDogJ3ByaW1hcnkucmVndWxhcid9YCxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6ICd0cmFuc2Zvcm0nLFxuICAgIH0pLFxuICBjc3NgXG4gICAgYW5pbWF0aW9uOiAke3JvdGF0ZX0gMS4ycyBpbmZpbml0ZSBsaW5lYXI7XG4gIGBcbik7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGxvYWRpbmc/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHR5cGU6ICdzdWJtaXQnIHwgJ2J1dHRvbic7XG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XG59O1xuZXhwb3J0IHR5cGUgUmVmID0gSFRNTERpdkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFByb3BzPihcbiAgKHsgY2hpbGRyZW4sIGRpc2FibGVkLCBsb2FkaW5nID0gZmFsc2UsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICAgIDxTdHlsZWRCdXR0b24gcmVmPXtyZWZ9IHsuLi5wcm9wc30gZGlzYWJsZWQ9e2Rpc2FibGVkfSByb2xlPVwiYnV0dG9uXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cbiAgICA8L1N0eWxlZEJ1dHRvbj5cbiAgKVxuKTtcbiIsImltcG9ydCB7IE92ZXJsYXlTY3JvbGxiYXJzQ29tcG9uZW50IH0gZnJvbSAnb3ZlcmxheXNjcm9sbGJhcnMtcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAnb3ZlcmxheXNjcm9sbGJhcnMvY3NzL092ZXJsYXlTY3JvbGxiYXJzLmNzcyc7XHJcblxyXG50eXBlIFNjcm9sbGJhclByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIG9wdGlvbnM/OiBhbnk7XHJcbiAgICBzdHlsZT86IGFueTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTY3JvbGxiYXI6IFJlYWN0LkZDPFNjcm9sbGJhclByb3BzPiA9ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE92ZXJsYXlTY3JvbGxiYXJzQ29tcG9uZW50XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NOYW1lfSBvcy10aGVtZS10aGluYCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbGJhcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZTogJ2xlYXZlJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L092ZXJsYXlTY3JvbGxiYXJzQ29tcG9uZW50PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcclxuaW1wb3J0IHsgdmFyaWFudCB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xyXG5leHBvcnQgY29uc3QgQ291bnRlckJveCA9IHN0eWxlZC5kaXY8YW55PihcclxuICBjc3Moe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6ICdiYXNlJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9KSxcclxuICAgIHtcclxuICAgIGJvcmRlclJhZGl1czogMjAwLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgICcmOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdmFyaWFudCh7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICBob3Jpem9udGFsOiB7XHJcbiAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgIGhlaWdodDogMzYsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuICAgICAgfSxcclxuICAgICAgbGlnaHRIb3Jpem9udGFsOiB7XHJcbiAgICAgICAgd2lkdGg6IDEwNCxcclxuICAgICAgICBoZWlnaHQ6IDM2LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXkuMjAwJyxcclxuICAgICAgICBjb2xvcjogJ3RleHQuYm9sZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpZ2h0VmVydGljYWw6IHtcclxuICAgICAgICB3aWR0aDogMzAsXHJcbiAgICAgICAgaGVpZ2h0OiA5MCxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXkuMjAwJyxcclxuICAgICAgICBjb2xvcjogJ3RleHQuYm9sZCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRlckJ1dHRvbiA9IHN0eWxlZC5idXR0b248YW55PihcclxuICB7XHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAnJjpob3ZlciwgJjpmb2N1cyc6IHtcclxuICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHZhcmlhbnQoe1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgbGlnaHRIb3Jpem9udGFsOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0LnJlZ3VsYXInLFxyXG4gICAgICB9LFxyXG4gICAgICBsaWdodFZlcnRpY2FsOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0LnJlZ3VsYXInLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50ZXJWYWx1ZSA9IHN0eWxlZC5zcGFuKHtcclxuICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbn0pO1xyXG5Db3VudGVyVmFsdWUuZGlzcGxheU5hbWUgPSAnQ291bnRlclZhbHVlJztcclxuQ291bnRlckJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdDb3VudGVyQnV0dG9uJztcclxuQ291bnRlckJveC5kaXNwbGF5TmFtZSA9ICdDb3VudGVyQm94JztcclxuQ291bnRlckJveC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdmFyaWFudDogJ2hvcml6b250YWwnLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzLCBNaW51cyB9IGZyb20gJ0AvYXNzZXRzL2ljb25zL1BsdXNNaW51cyc7XHJcbmltcG9ydCB7IENvdW50ZXJCb3gsIENvdW50ZXJCdXR0b24sIENvdW50ZXJWYWx1ZSB9IGZyb20gJy4vY291bnRlci5zdHlsZSc7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgb25EZWNyZW1lbnQ6IChlOiBFdmVudCkgPT4gdm9pZDtcclxuICBvbkluY3JlbWVudDogKGU6IEV2ZW50KSA9PiB2b2lkO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbiAgdmFyaWFudD86IHN0cmluZztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIG9uRGVjcmVtZW50LFxyXG4gIG9uSW5jcmVtZW50LFxyXG4gIHZhbHVlLFxyXG4gIHZhcmlhbnQsXHJcbiAgY2xhc3NOYW1lLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb3VudGVyQm94IHZhcmlhbnQ9e3ZhcmlhbnR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgPENvdW50ZXJCdXR0b24gb25DbGljaz17b25EZWNyZW1lbnR9IHZhcmlhbnQ9e3ZhcmlhbnR9PlxyXG4gICAgICAgIDxNaW51cyAvPlxyXG4gICAgICA8L0NvdW50ZXJCdXR0b24+XHJcbiAgICAgIDxDb3VudGVyVmFsdWU+e3ZhbHVlfTwvQ291bnRlclZhbHVlPlxyXG4gICAgICA8Q291bnRlckJ1dHRvbiBvbkNsaWNrPXtvbkluY3JlbWVudH0gdmFyaWFudD17dmFyaWFudH0+XHJcbiAgICAgICAgPFBsdXMgLz5cclxuICAgICAgPC9Db3VudGVyQnV0dG9uPlxyXG4gICAgPC9Db3VudGVyQm94PlxyXG4gICk7XHJcbn07XHJcbiIsImNvbnN0IENvbnZlcnRDdXJyZW5jeT0oZGF0YSxwcmljZSxmcm9tPSdHQlAnLHRvKT0+e1xyXG4gICAgbGV0IGNvbnZlcnRlZFByaWNlPTBcclxuICAgIGlmKHRvPT09J0dCUCcpe1xyXG4gICAgICAgIGNvbnZlcnRlZFByaWNlPXByaWNlXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnN0IHBhcmFtPSdHQlAvJyt0b1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbmN5RGF0YT1kYXRhW3BhcmFtXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBjb252ZXJ0ZWRQcmljZT1wcmljZSpjdXJyZW5jeURhdGEucmF0ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb252ZXJ0ZWRQcmljZS50b0ZpeGVkKDIpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnZlcnRDdXJyZW5jeTsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgQ2FydFBvcHVwQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAzODVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2FydC1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI0NXB4KTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgbWF4LWhlaWdodDogMzMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9wdXBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS41MDAnLCAnI2YxZjFmMScpfTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2NnB4KSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3B1cEl0ZW1Db3VudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucmVkJywgJyNlYTRkNGEnKX07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcblxyXG4gICYuZml4ZWRDYXJ0Q2xvc2Uge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSXRlbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1DYXJkcyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1EZXRhaWxzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbVRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1QcmljZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtV2VpZ2h0ID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG5gO1xyXG5cclxuY29uc3QgVG90YWxQcmljZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZWE0ZDRhO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByb21vQ29kZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gID4gYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zNXMgZWFzZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkuaG92ZXInLCAnIzAxOTM3NicpfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDaGVja291dEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ4cHg7XHJcbiAgYm94LXNoYWRvdzogJHt0aGVtZUdldCgnc2hhZG93cy5iYXNlJywgJzAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiBtYXJnaW4tdG9wOiBhdXRvOyAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgPiBhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBmbGV4LXNocmluazogMDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmFgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJpY2VCb3ggPSBzdHlsZWQucGBcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGhlaWdodDogNDFweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBOb1Byb2R1Y3RNc2cgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUHJvZHVjdEltZyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvdXBvbkJveFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMCAyMnB4IDAgMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IENvdXBvbkNvZGUgPSBzdHlsZWQucGBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMubWVkaXVtJywgJzUwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVycm9yTXNnID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weCAtIDFweCk7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuc2Vjb25kYXJ5LmhvdmVyJywgJyNGRjI4MkYnKX07XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IENhcnRTbGlkZVBvcHVwID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNDIwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAtNDUwcHg7XHJcbiAgei1pbmRleDogMTAxMDtcclxuICBib3gtc2hhZG93OiAke3RoZW1lR2V0KCdzaGFkb3dzLmJpZycsICcwIDIxcHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTgxcHgpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgJi5jYXJ0UG9wdXBGaXhlZCB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gICR7Q2FydFBvcHVwQm9keX0ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAke0l0ZW1XcmFwcGVyfSB7XHJcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDBweCk7ICovXHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQ1cHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgfVxyXG5cclxuICAke0l0ZW1DYXJkc30ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjIwMCcsICcjZjdmN2Y3Jyl9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgJHtQb3B1cEhlYWRlcn0ge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgJHtDbG9zZUJ1dHRvbn0ge1xyXG4gICAgICB0b3A6IGF1dG87XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IHtcclxuICBDYXJ0U2xpZGVQb3B1cCxcclxuICBDYXJ0UG9wdXBCb2R5LFxyXG4gIFBvcHVwSGVhZGVyLFxyXG4gIFBvcHVwSXRlbUNvdW50LFxyXG4gIFByb21vQ29kZSxcclxuICBDbG9zZUJ1dHRvbixcclxuICBJdGVtQ2FyZHMsXHJcbiAgSXRlbUltZ1dyYXBwZXIsXHJcbiAgSXRlbURldGFpbHMsXHJcbiAgSXRlbVRpdGxlLFxyXG4gIEl0ZW1QcmljZSxcclxuICBJdGVtV2VpZ2h0LFxyXG4gIFRvdGFsUHJpY2UsXHJcbiAgRGVsZXRlQnV0dG9uLFxyXG4gIENoZWNrb3V0QnV0dG9uLFxyXG4gIENoZWNrb3V0QnV0dG9uV3JhcHBlcixcclxuICBUaXRsZSxcclxuICBQcmljZUJveCxcclxuICBOb1Byb2R1Y3RNc2csXHJcbiAgSXRlbVdyYXBwZXIsXHJcbiAgQ291cG9uQm94V3JhcHBlcixcclxuICBDb3Vwb25Db2RlLFxyXG4gIEVycm9yTXNnLFxyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgRmllbGRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuYDtcclxuY29uc3QgRG91YmxlQ29udGFpbmVyPXN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmBcclxuY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRGYW1pbHkuaGVhZGluZycsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLm1kJywgJzE5Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuYDtcclxuXHJcbmV4cG9ydCB7IEZpZWxkV3JhcHBlciwgSGVhZGluZyxEb3VibGVDb250YWluZXIgfTtcclxuIiwiXHJcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlLCBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBpbnN0YW5jZTogQXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnLycsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVxdWVzdEhhbmRsZXIgPSAoY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcpID0+IHtcclxuICAgIC8vIE1vZGlmeSBjb25maWcgaGVyZVxyXG4gICAgLy8gaWYgKGF1dGguZ2V0VG9rZW4oKSkge1xyXG4gICAgLy8gICAvLyBjb25maWcuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke2F1dGguZ2V0VG9rZW4oKX1gO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbmZpZy50aW1lb3V0ID0gMzAwMDA7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59O1xyXG5cclxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHJlcXVlc3RIYW5kbGVyKTtcclxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSh1bmRlZmluZWQsIChlcnJvcjogQXhpb3NFcnJvcikgPT4ge1xyXG4gICAgLy8gaGFuZGxlIGVycm9yXHJcbiAgICBpZiAoYXhpb3MuaXNDYW5jZWwoZXJyb3IpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHJlcXVlc3QgY2FuY2VsbGVkYCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IucmVzcG9uc2U/LmRhdGE/LmVycm9yKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBodHRwIGZyb20gJy4vaHR0cEluc3RhbmNlJztcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJztcclxuXHJcbmludGVyZmFjZSBtZW1TdG9yZVR5cGVzIHtcclxuICAgIFt4OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuY29uc3QgbWVtU3RvcmU6IG1lbVN0b3JlVHlwZXMgPSB7fTtcclxuXHJcbmludGVyZmFjZSB1c2VGZXRjaFByb3BzIHtcclxuICAgIChcclxuICAgICAgICB1cmw6IHN0cmluZyxcclxuICAgICAgICBwcm9wcz86IHtcclxuICAgICAgICAgICAgY2FjaGU/OiBib29sZWFuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXhpb3NPcHRpb25zPzogQXhpb3NSZXF1ZXN0Q29uZmlnXHJcbiAgICApOiBbYW55LCBib29sZWFuLCBhbnksIFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHt9Pj5dO1xyXG59XHJcblxyXG5jb25zdCB1c2VGZXRjaDogdXNlRmV0Y2hQcm9wcyA9ICh1cmwsIHByb3BzID0ge30sIGF4aW9zT3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8YW55PihudWxsKTtcclxuICAgIGNvbnN0IFtzaG91bGRSZWZldGNoLCByZUZldGNoXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCB1bm1vdW50ZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc291cmNlID0gYXhpb3MuQ2FuY2VsVG9rZW4uc291cmNlKCk7XHJcbiAgICAgICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGh0dHBDb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmF4aW9zT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlLnRva2VuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGh0dHAoaHR0cENvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXVubW91bnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLmNhY2hlKSBtZW1TdG9yZVt1cmxdID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1bm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobWVtU3RvcmVbdXJsXSAmJiAhdW5tb3VudGVkKSB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldERhdGEobWVtU3RvcmVbdXJsXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdW5tb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc291cmNlLmNhbmNlbChgJHt1cmx9IGNhbmNlbGVkYCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1cmwsIHNob3VsZFJlZmV0Y2hdKTtcclxuXHJcbiAgICByZXR1cm4gW2RhdGEsIGlzTG9hZGluZywgZXJyb3IsIHJlRmV0Y2hdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRmV0Y2g7XHJcbiIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCB1c2VMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGU8YW55Pih7fSk7XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDphbnkpID0+IHtcclxuICAgICAgICBldmVudC5wZXJzaXN0KCk7XHJcbiAgICAgICAgc2V0SW5wdXRzKChpbnB1dHM6IGFueSkgPT4gKHsuLi5pbnB1dHMsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2UsXHJcbiAgICAgICAgaW5wdXRzXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCB7dXNlTG9naW5Gb3JtfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IFNFTyB9IGZyb20gJ0AvY29tcG9uZW50cy9PdGhlcnMvc2VvJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAcmVkcS9yZXVzZS1tb2RhbCc7XHJcbmltcG9ydCBQcm9kdWN0U2luZ2xlV3JhcHBlciwge1xyXG4gICAgUHJvZHVjdFNpbmdsZUNvbnRhaW5lcixcclxufSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvcHJvZHVjdC1zdHlsZSc7XHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSBmcm9tIFwiQC91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvbGF5b3V0XCI7XHJcbmltcG9ydCBQcm9kdWN0Tm90Rm91bmQgZnJvbSBcIkAvY29tcG9uZW50cy80MDQvUHJvZHVjdE5vdEZvdW5kXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3QvZGV0YWlscy9Qcm9kdWN0RGV0YWlsc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IENhcnRQb3BVcCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdmZWF0dXJlcy9jYXJ0L2NhcnQtcG9wdXAnKSwge1xyXG4gICAgc3NyOiBmYWxzZSxcclxufSk7XHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBkZXZpY2VUeXBlPzoge1xyXG4gICAgICAgIG1vYmlsZTogYm9vbGVhbjtcclxuICAgICAgICB0YWJsZXQ6IGJvb2xlYW47XHJcbiAgICAgICAgZGVza3RvcDogYm9vbGVhbjtcclxuICAgIH07XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn07XHJcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmw6c3RyaW5nKSA9PiBhd2FpdCBheGlvcy5nZXQodXJsKVxyXG4gICAgLnRoZW4ocmVzID0+ICh7XHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IHJlcy5kYXRhLmRhdGEsXHJcbiAgICB9KSlcclxuICAgIC5jYXRjaCgoKSA9PiAoe1xyXG4gICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICB9KSxcclxuICAgICk7XHJcblxyXG5jb25zdCBQcm9kdWN0UGFnZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgZGV2aWNlVHlwZSxkYXRhIH0pID0+IHtcclxuICAgIC8vIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgLy8gY29uc3QgW3tkYXRhLCBsb2FkaW5nLCBlcnJvcn1dID0gdXNlQXhpb3MoXHJcbiAgICAvLyAgICAgYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvcHJvZHVjdHMvc2luZ2xlLyR7cXVlcnkuc2x1Z31gXHJcbiAgICAvLyApXHJcbiAgICAvLyBpZihsb2FkaW5nKXtcclxuICAgIC8vICAgICByZXR1cm4gPEl0ZW1Mb2FkZXIvPlxyXG4gICAgLy8gfVxyXG4gICAgaWYoIWRhdGEuZGF0YSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8U0VPXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2A0MDQgTm90IEZvdW5kYH1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17YFRoZSBwYWdlIGRvZXNuJ3QgZXhpc3RgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0Tm90Rm91bmQvPlxyXG5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgbGV0IGNvbnRlbnQgPSAoXHJcbiAgICAgICAgPFByb2R1Y3REZXRhaWxzIHByb2R1Y3Q9e2RhdGEuZGF0YX0gZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX0gLz5cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTRU9cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtgJHtkYXRhLmRhdGEubmFtZX0gLSBXaXNlQ2FydGB9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17YCR7ZGF0YS5kYXRhLm5hbWV9IERldGFpbHNgfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2RhdGEuZGF0YS50aHVtYkltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdFNpbmdsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RTaW5nbGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FydFBvcFVwIGRldmljZVR5cGU9e2RldmljZVR5cGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qcm9kdWN0U2luZ2xlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9kdWN0U2luZ2xlV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvcHJvZHVjdHMvc2luZ2xlLyR7cGFyYW1zLnNsdWd9YCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2U7IiwiaW1wb3J0IHsgQ0FSVCB9IGZyb20gXCIuLi9kZWZpbmVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3Q6YW55LCBxdWFudGl0eTpudW1iZXIsIGNvbG9yPzpzdHJpbmcsIHNpemU/OnN0cmluZykgPT4gKHtcclxuICB0eXBlOiBDQVJULkFERF9UT19DQVJULFxyXG4gIHByb2R1Y3QsXHJcbiAgcXVhbnRpdHksXHJcbiAgY29sb3IsXHJcbiAgc2l6ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoY2FydElkOnN0cmluZykgPT4gKHtcclxuICB0eXBlOiBDQVJULlJFTU9WRV9GUk9NX0NBUlQsXHJcbiAgY2FydElkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVBbGxGcm9tQ2FydCA9ICgpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5SRU1PVkVfQUxMX0ZST01fQ0FSVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVjcmVhc2VRdWFudGl0eUNhcnQgPSAoY2FydElkOnN0cmluZykgPT4gKHtcclxuICB0eXBlOiBDQVJULkRFQ1JFQVNFX1FVQU5USVRZX0NBUlQsXHJcbiAgY2FydElkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbmNyZWFzZVF1YW50aXR5Q2FydCA9IChjYXJ0SWQ6c3RyaW5nKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVCxcclxuICBjYXJ0SWQsXHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgR0xPQkFMID0ge1xyXG4gIFNFVF9MQU5HVUFHRTogXCJTRVRfTEFOR1VBR0VcIixcclxuICBTRVRfQ1VSUkVOQ1k6IFwiU0VUX0NVUlJFTkNZXCIsXHJcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxyXG4gIFNFVF9TRUFSQ0g6IFwiU0VUX1NFQVJDSFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENBUlQgPSB7XHJcbiAgQUREX1RPX0NBUlQ6IFwiQUREX1RPX0NBUlRcIixcclxuICBSRU1PVkVfRlJPTV9DQVJUOiBcIlJFTU9WRV9GUk9NX0NBUlRcIixcclxuICBSRU1PVkVfQUxMX0ZST01fQ0FSVDogXCJSRU1PVkVfQUxMX0ZST01fQ0FSVFwiLFxyXG4gIERFQ1JFQVNFX1FVQU5USVRZX0NBUlQ6IFwiREVDUkVBU0VfUVVBTlRJVFlfQ0FSVFwiLFxyXG4gIElOQ1JFQVNFX1FVQU5USVRZX0NBUlQ6IFwiSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdJU0hMSVNUID0ge1xyXG4gIEFERF9UT19XSVNITElTVDogXCJBRERfVE9fV0lTSExJU1RcIixcclxuICBSRU1PVkVfRlJPTV9XSVNITElTVDogXCJSRU1PVkVfRlJPTV9XSVNITElTVFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNIT1AgPSB7XHJcbiAgU0VUX1NPUlQ6IFwiU0VUX1NPUlRcIixcclxuICBTRVRfU1VCQ0FURUdPUlk6IFwiU0VUX1NVQkNBVEVHT1JZXCIsXHJcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxyXG4gIFNFVF9DQVRFR09SWV9EQVRBOiBcIlNFVF9DQVRFR09SWV9EQVRBXCIsXHJcbiAgU0VUX0NVUlJFTkNZOiBcIlNFVF9DVVJSRU5DWVwiLFxyXG4gIFNFVF9BRERSRVNTOiBcIlNFVF9BRERSRVNTXCIsXHJcbiAgU0VUX0JJTExJTkc6IFwiU0VUX0JJTExJTkdcIixcclxuICBTRVRfQ0FSRDogXCJTRVRfQ0FSRFwiLFxyXG4gIFNFVF9DVVJSRU5DWV9EQVRBOiBcIlNFVF9DVVJSRU5DWV9EQVRBXCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBGT1JNID0ge1xyXG4gIFNFVF9DVVJSRU5UX0ZPUk06IFwiU0VUX0NVUlJFTlRfRk9STVwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgQVVUSCA9IHtcclxuICBMT0dfSU46IFwiTE9HX0lOXCIsXHJcbiAgTE9HX0lOX0VSUk9SOiBcIkxPR19JTl9FUlJPUlwiLFxyXG4gIFNJR05fVVBfRVJST1I6XCJTSUdOX1VQX0VSUk9SXCIsXHJcbiAgU0lHTl9VUDpcIlNJR05fVVBcIixcclxuICBMT0dfT1VUOlwiTE9HX09VVFwiLFxyXG4gIExPQURfVVNFUjpcIkxPQURfVVNFUlwiLFxyXG4gIExPQURfVVNFUl9GQUlMOlwiTE9BRF9VU0VSX0ZBSUxcIixcclxuICBPUkRFUl9TVUNDRVNTOlwiT1JERVJfU1VDQ0VTU1wiLFxyXG4gIE9SREVSX1NVQ0NFU1NfRkFJTDpcIk9SREVSX1NVQ0NFU1NfRkFJTFwiLFxyXG59O1xyXG5leHBvcnQgaW50ZXJmYWNlIENhcnRBY3Rpb25PYmplY3Qge1xyXG4gIHR5cGU6c3RyaW5nLFxyXG4gIHByb2R1Y3Q6c3RyaW5nLFxyXG4gIHF1YW50aXR5Ok51bWJlcixcclxuICBjb2xvcjpzdHJpbmcsXHJcbiAgc2l6ZTpzdHJpbmcsXHJcblxyXG59XHJcbiIsIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVRvdGFsUHJpY2UgPSAoYXJyOlthbnldKSA9PiB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5kaXNjb3VudCkge1xyXG4gICAgICAgICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgPyAoaXRlbS5wcmljZSAtIGl0ZW0uZGlzY291bnQpICogaXRlbS5jYXJ0UXVhbnRpdHlcclxuICAgICAgICAgICAgICAgIDogaXRlbS5wcmljZSAtIGl0ZW0uZGlzY291bnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG90YWwgKz0gaXRlbS5jYXJ0UXVhbnRpdHkgPyBpdGVtLnByaWNlICogaXRlbS5jYXJ0UXVhbnRpdHkgOiBpdGVtLnByaWNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG59O1xyXG5leHBvcnQgY29uc3QgaXNJbkNhcnQ9KGFycjpbYW55XSxpZCk9PntcclxuICAgIHJldHVybiBhcnIuc29tZSgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRJdGVtQ2FydFF0eSA9IChhcnI6W2FueV0saWQ6c3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtPWFyci5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XHJcbiAgICByZXR1cm4gaXRlbT8uY2FydFF1YW50aXR5P2l0ZW0uY2FydFF1YW50aXR5Om51bGxcclxufTsiLCJleHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMPSdodHRwOi8vbG9jYWxob3N0OjUwMDAnXHJcbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1DbG91ZGluYXJ5SW1hZ2U9KHVybCx3aWR0aCxoZWlnaHQpPT57XHJcbiAgICAvLyBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93aXNlY2FydC9pbWFnZS91cGxvYWQvd18xNTAsaF8zMDAsY19maWxsL3YxNjE3NDQxOTcxL3JlM2xmMGJlb3hkcnc0aGRxYmViLnBuZ1xyXG4gICAgY29uc3RbZmlyc3QsbGFzdF09dXJsLnNwbGl0KCcvdXBsb2FkLycpXHJcbiAgICByZXR1cm4gZmlyc3QrYC91cGxvYWQvd18ke3dpZHRofSxoXyR7aGVpZ2h0fSxjX2ZpbGwvYCtsYXN0XHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgUHJvZHVjdFNpbmdsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDc4cHggMCA2MHB4IDA7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHBhZGRpbmctdG9wOiA4OXB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0U2luZ2xlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSZWxhdGVkSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgYW5kIChtaW4td2lkdGg6IDk5MHB4KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNy41cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC03LjVweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUmVhbGF0ZWRJdGVtQ29sID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAwIDAgMjAlO1xyXG4gIG1heC13aWR0aDogMjAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgZmxleDogMCAwIDIwJTtcclxuICAgIG1heC13aWR0aDogMjAlO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzMyU7XHJcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMlO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3LjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDcuNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmbGV4OiAwIDAgNTAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRpbmcgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNXB4Jyl9IC0gMXB4KTtcclxuICBjb2xvcjogIzIyMjIyMjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTaW5nbGVXcmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWRxL3JldXNlLW1vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL2Nzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibGlnaHQtdG9hc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvdmVybGF5c2Nyb2xsYmFycy1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9