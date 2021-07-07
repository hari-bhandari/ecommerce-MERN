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

module.exports = "data:image/png;base64,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"

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReviewComponent_style__WEBPACK_IMPORTED_MODULE_3__["ReviewContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ReviewTitle"], {
        children: "Customer reviews"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReviewComponent_style__WEBPACK_IMPORTED_MODULE_3__["TagsWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReviewComponent_style__WEBPACK_IMPORTED_MODULE_3__["TagsHeader"], {
          children: "Tags"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReviewComponent_style__WEBPACK_IMPORTED_MODULE_3__["TagsContainer"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tag",
            children: "Experience"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tag",
            children: "Quality"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tag selected",
            children: "Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tag",
            children: "Size"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tag",
            children: "Features"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tag",
            children: "Value"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tag",
            children: "Replacement"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Scrollbar__WEBPACK_IMPORTED_MODULE_6__["Scrollbar"], {
        style: {
          height: "450px",
          width: "100%"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_Review_ReviewCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_Review_ReviewCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_Review_ReviewCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReviewComponent_style__WEBPACK_IMPORTED_MODULE_3__["AddReviewContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ReviewTitle"], {
        children: "Add a review"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Product_details_Review_AddReview__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9BcnJvd05leHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvQ2FydEljb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvTG9uZ0Fycm93TGVmdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9Ob0NhcnRCYWcudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvUGx1c01pbnVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL1N0YXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzQwNC9Qcm9kdWN0Tm90Rm91bmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9ib3gudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9idXR0b24vYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PdGhlcnMvaW1hZ2UvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9pbWFnZS9wcm9kdWN0LXBsYWNlaG9sZGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PdGhlcnMvbXVsdGktY2Fyb3VzZWwvbXVsdGktY2Fyb3VzZWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9zZW8udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9zdmcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvU3RhclJhdGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9jYXJkL1Byb2R1Y3RJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2NhcmQvcHJvZHVjdC1jYXJkLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2RldGFpbHMvUHJvZHVjdERldGFpbHMuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvZGV0YWlscy9Qcm9kdWN0RGV0YWlscy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9kZXRhaWxzL1Jldmlldy9BZGRSZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvZGV0YWlscy9SZXZpZXcvUmV2aWV3Q2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9kZXRhaWxzL1Jldmlldy9SZXZpZXdDb21wb25lbnQuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvZGV0YWlscy9SZXZpZXcvUmV2aWV3Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2RldGFpbHMvdHJ1bmNhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QvZ3JpZC9Qcm9kdWN0R3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC9ncmlkL1Byb2R1Y3RHcmlkU3R5bGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2dyaWQvYm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0L2dyaWQvbG9hZG1vcmUtYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TY3JvbGxiYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvY291bnRlci9jb3VudGVyLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NvdW50ZXIvY291bnRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRDdXJyZW5jeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2NhcnRzL2NhcnQuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9jaGVja291dHMvQWRkcmVzcy5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL2h0dHBJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlRmV0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZUxvZ2luRm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdC9bc2x1Z10udHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9kZWZpbmVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jYXJ0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvcHJvZHVjdC1zdHlsZS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHEvcmV1c2UtbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS9jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxpZ2h0LXRvYXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvdmVybGF5c2Nyb2xsYmFycy1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1zeXN0ZW1cIiJdLCJuYW1lcyI6WyJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJjb25zb2xlIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiZGF0YSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsInNob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQXJyb3dOZXh0IiwiQ2FydEljb24iLCJMb25nQXJyb3dMZWZ0IiwiTm9DYXJ0QmFnIiwiUGx1cyIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJNaW51cyIsIlN0YXJJY29uIiwiY2xhc3NOYW1lIiwiTm90Rm91bmRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9kdWN0Tm90Rm91bmQiLCJ1c2VSb3V0ZXIiLCJCb3giLCJib3hTaXppbmciLCJtaW5XaWR0aCIsIm1hcmdpbiIsImNvbXBvc2UiLCJzcGFjZSIsImxheW91dCIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsInB4IiwicHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJiZyIsInRyYW5zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJhcHBlYXJhbmNlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRGYW1pbHkiLCJib3JkZXIiLCJvdXRsaW5lIiwidmFyaWFudCIsInZhcmlhbnRzIiwib3V0bGluZWQiLCJib3JkZXJDb2xvciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJzZWxlY3QiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsInByb3AiLCJiaWciLCJzbWFsbCIsInJvdGF0ZSIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJ0aGVtZUdldCIsIkJ1dHRvbiIsImZvcndhcmRSZWYiLCJsb2FkaW5nIiwiUGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlciIsIkltYWdlIiwiYWx0IiwidW5sb2FkZXIiLCJsb2FkZXIiLCJzdHlsZSIsIlNpbmdsZUl0ZW0iLCJsaSIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwibW9iaWxlIiwidGFibGV0IiwiQ2Fyb3VzZWxXaXRoQ3VzdG9tRG90cyIsImRldmljZVR5cGUiLCJ0aXRsZSIsInJlc3QiLCJzbGljZSIsImluZGV4IiwicG9zaXRpb24iLCJpbWFnZXMiLCJDdXN0b21Eb3QiLCJhY3RpdmUiLCJjYXJvdXNlbFN0YXRlIiwiY3VycmVudFNsaWRlIiwidG9BcnJheSIsIlNFTyIsImRlc2NyaXB0aW9uIiwiY2Fub25pY2FsIiwianMiLCJpbWFnZSIsIlN2ZyIsInNpemUiLCJSYXRpbmdDb250YWluZXIiLCJTdGFyUmF0aW5nIiwicmF0aW5nIiwiYXBwbHkiLCJsZW5ndGgiLCJpbkFjdGl2ZSIsInN0YXJTaXplIiwibnVtIiwiUHJvZHVjdENhcmQiLCJwcmljZSIsInNhbGVQcmljZSIsImRpc2NvdW50SW5QZXJjZW50IiwicHJvZHVjdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJ0U3RhdGUiLCJ1c2VTZWxlY3RvciIsImNhcnRSZWR1Y2VyIiwiaGFuZGxlQWRkQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJhZGRUb0NhcnQiLCJjdXJyZW5jeSIsInN5bWJvbCIsImN1cnJlbmN5RGV0YWlscyIsInNob3BSZWR1Y2VyIiwiaGFuZGxlUmVtb3ZlQ2xpY2siLCJjYXJ0UXVhbnRpdHkiLCJnZXRJdGVtQ2FydFF0eSIsIkNvbnZlcnRDdXJyZW5jeSIsIlN0eWxlZEJveCIsIlByb2R1Y3RDYXJkV3JhcHBlciIsImJhY2tncm91bmRDb2xvciIsIlByb2R1Y3RJbWFnZVdyYXBwZXIiLCJTYWxlVGFnIiwic3BhbiIsIkRpc2NvdW50UGVyY2VudCIsIlByb2R1Y3RJbmZvIiwiQnV0dG9uVGV4dCIsIkJvb2tJbWFnZVdyYXBwZXIiLCJCb29rSW5mbyIsIlByb2R1Y3ROYW1lIiwiQXV0aG9ySW5mbyIsIlByaWNlV3JhcHBlciIsIlByaWNlIiwiRGlzY291bnRlZFByaWNlIiwiQm9va0NhcmRXcmFwcGVyIiwiRm9vZENhcmRXcmFwcGVyIiwiRm9vZEltYWdlV3JhcHBlciIsIlByb2R1Y3RNZXRhIiwiRGVsaXZlcnlPcHQiLCJDYXRlZ29yeSIsIkR1cmF0aW9uIiwiUHJvZHVjdERldGFpbHNXcmFwcGVyIiwiUmV2aWV3VGl0bGUiLCJoMyIsIlByb2R1Y3RQcmV2aWV3IiwiQmFja0J1dHRvbiIsIlByb2R1Y3RUaXRsZVByaWNlV3JhcHBlciIsIlByb2R1Y3RUaXRsZSIsImgxIiwiUHJvZHVjdFByaWNlV3JhcHBlciIsIlByb2R1Y3RQcmljZSIsIlNhbGVQcmljZSIsIlByb2R1Y3RXZWlnaHQiLCJQcm9kdWN0RGVzY3JpcHRpb24iLCJQcm9kdWN0Q2FydFdyYXBwZXIiLCJQcm9kdWN0Q2FydEJ0biIsIk1ldGFTaW5nbGUiLCJNZXRhSXRlbSIsImNhdGVnb3J5IiwiUmVsYXRlZEl0ZW1zIiwiUHJvZHVjdERldGFpbHMiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUbyIsIm1hcmdpblJpZ2h0IiwidGh1bWJJbWFnZSIsInN1YkNhdGVnb3J5IiwiZ2FsbGVyeSIsIlRleHRBcmVhIiwidGV4dGFyZWEiLCJXcmFwcGVyIiwiQ29udGFpbmVyIiwiQWRkUmV2aWV3IiwiaW5wdXRzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ1c2VMb2dpbkZvcm0iLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZHJlc3MyIiwiUmV2aWV3Q2FyZENvbnRhaW5lciIsIlJldmlld0hlYWRlciIsIk5hbWVHcm91cCIsIkluaXRpYWxzIiwiRGVzY3JpcHRpb24iLCJEZXRhaWxzIiwiU2hhcmVHcm91cCIsIlJldmlld0NhcmQiLCJUYWdzV3JhcHBlciIsIlJldmlld3NDb250YWluZXIiLCJSZXZpZXdDb250YWluZXIiLCJBZGRSZXZpZXdDb250YWluZXIiLCJUYWdzSGVhZGVyIiwiVGFnc0NvbnRhaW5lciIsIlJldmlld0NvbXBvbmVudCIsIlJlYWRNb3JlIiwibW9yZSIsImxlc3MiLCJjaGFyYWN0ZXIiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwidXNlU3RhdGUiLCJ0b2dnbGVMaW5lcyIsImRhbmdlcm91c2x5U2V0SFRNTCIsImh0bWwiLCJfX2h0bWwiLCJzdWJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJQcm9kdWN0R3JpZCIsImxvYWRNb3JlIiwiZmV0Y2hMaW1pdCIsInNldExvYWRpbmciLCJjYXRlZ29yeVF1ZXJ5IiwiQVBJX0JBU0VfVVJMIiwic3ViY2F0ZWdvcnlRdWVyeSIsImlzTG9hZGluZyIsInVzZUZldGNoIiwiaGFuZGxlTG9hZE1vcmUiLCJyZW5kZXJDYXJkIiwiX2lkIiwiaGFzTW9yZSIsIkdyaWQiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImZsZXhib3giLCJzeXN0ZW1Dc3MiLCJtYXJnaW5MZWZ0IiwiYm9yZGVyVG9wIiwidHJhbnNpdGlvblByb3BlcnR5IiwiU2Nyb2xsYmFyIiwic2Nyb2xsYmFycyIsImF1dG9IaWRlIiwiQ291bnRlckJveCIsIm92ZXJmbG93IiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiZmxleERpcmVjdGlvbiIsImxpZ2h0SG9yaXpvbnRhbCIsImxpZ2h0VmVydGljYWwiLCJDb3VudGVyQnV0dG9uIiwiQ291bnRlclZhbHVlIiwicG9pbnRlckV2ZW50cyIsImRpc3BsYXlOYW1lIiwiQ291bnRlciIsIm9uRGVjcmVtZW50Iiwib25JbmNyZW1lbnQiLCJmcm9tIiwidG8iLCJjb252ZXJ0ZWRQcmljZSIsImN1cnJlbmN5RGF0YSIsInJhdGUiLCJ0b0ZpeGVkIiwiQ2FydFBvcHVwQm9keSIsIlBvcHVwSGVhZGVyIiwiUG9wdXBJdGVtQ291bnQiLCJDbG9zZUJ1dHRvbiIsIkl0ZW1XcmFwcGVyIiwiSXRlbUNhcmRzIiwiSXRlbUltZ1dyYXBwZXIiLCJJdGVtRGV0YWlscyIsIkl0ZW1UaXRsZSIsIkl0ZW1QcmljZSIsIkl0ZW1XZWlnaHQiLCJUb3RhbFByaWNlIiwiRGVsZXRlQnV0dG9uIiwiUHJvbW9Db2RlIiwiQ2hlY2tvdXRCdXR0b24iLCJDaGVja291dEJ1dHRvbldyYXBwZXIiLCJUaXRsZSIsImEiLCJQcmljZUJveCIsIk5vUHJvZHVjdE1zZyIsIk5vUHJvZHVjdEltZyIsIkNvdXBvbkJveFdyYXBwZXIiLCJDb3Vwb25Db2RlIiwiRXJyb3JNc2ciLCJDYXJ0U2xpZGVQb3B1cCIsIkZpZWxkV3JhcHBlciIsIkRvdWJsZUNvbnRhaW5lciIsIkhlYWRpbmciLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJyZXF1ZXN0SGFuZGxlciIsImNvbmZpZyIsInRpbWVvdXQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwicmVzcG9uc2UiLCJ1bmRlZmluZWQiLCJpc0NhbmNlbCIsImxvZyIsIm1lbVN0b3JlIiwiYXhpb3NPcHRpb25zIiwic2V0RGF0YSIsInNldElzTG9hZGluZyIsInNldEVycm9yIiwic2hvdWxkUmVmZXRjaCIsInJlRmV0Y2giLCJ1bm1vdW50ZWQiLCJzb3VyY2UiLCJDYW5jZWxUb2tlbiIsImdldERhdGEiLCJodHRwQ29uZmlnIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImh0dHAiLCJjYWNoZSIsInNldElucHV0cyIsInBlcnNpc3QiLCJDYXJ0UG9wVXAiLCJkeW5hbWljIiwic3NyIiwiZmV0Y2hEYXRhIiwidGhlbiIsImNhdGNoIiwiUHJvZHVjdFBhZ2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJzbHVnIiwicXVhbnRpdHkiLCJ0eXBlIiwiQ0FSVCIsIkFERF9UT19DQVJUIiwicmVtb3ZlRnJvbUNhcnQiLCJjYXJ0SWQiLCJSRU1PVkVfRlJPTV9DQVJUIiwicmVtb3ZlQWxsRnJvbUNhcnQiLCJSRU1PVkVfQUxMX0ZST01fQ0FSVCIsImRlY3JlYXNlUXVhbnRpdHlDYXJ0IiwiREVDUkVBU0VfUVVBTlRJVFlfQ0FSVCIsImluY3JlYXNlUXVhbnRpdHlDYXJ0IiwiSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVCIsIkdMT0JBTCIsIlNFVF9MQU5HVUFHRSIsIlNFVF9DVVJSRU5DWSIsIlNFVF9DQVRFR09SWSIsIlNFVF9TRUFSQ0giLCJXSVNITElTVCIsIkFERF9UT19XSVNITElTVCIsIlJFTU9WRV9GUk9NX1dJU0hMSVNUIiwiU0hPUCIsIlNFVF9TT1JUIiwiU0VUX1NVQkNBVEVHT1JZIiwiU0VUX0NBVEVHT1JZX0RBVEEiLCJTRVRfQUREUkVTUyIsIlNFVF9CSUxMSU5HIiwiU0VUX0NBUkQiLCJTRVRfQ1VSUkVOQ1lfREFUQSIsIkZPUk0iLCJTRVRfQ1VSUkVOVF9GT1JNIiwiQVVUSCIsIkxPR19JTiIsIkxPR19JTl9FUlJPUiIsIlNJR05fVVBfRVJST1IiLCJTSUdOX1VQIiwiTE9HX09VVCIsIkxPQURfVVNFUiIsIkxPQURfVVNFUl9GQUlMIiwiT1JERVJfU1VDQ0VTUyIsIk9SREVSX1NVQ0NFU1NfRkFJTCIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJhcnIiLCJ0b3RhbCIsImZvckVhY2giLCJkaXNjb3VudCIsImlzSW5DYXJ0Iiwic29tZSIsImZpbmQiLCJ0cmFuc2Zvcm1DbG91ZGluYXJ5SW1hZ2UiLCJmaXJzdCIsImxhc3QiLCJzcGxpdCIsIlByb2R1Y3RTaW5nbGVXcmFwcGVyIiwiUHJvZHVjdFNpbmdsZUNvbnRhaW5lciIsIlJlbGF0ZWRJdGVtQ29udGFpbmVyIiwiUmVhbGF0ZWRJdGVtQ29sIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQSxzQ0FBc0M7UUFDdEM7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMs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QUFNb1gsT0FBTyxHQUFHclgsd0RBQU0sQ0FBQ0MsR0FBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CNkMseUVBQVEsQ0FBQyxnQkFBRCxFQUFtQixNQUFuQixDQUEyQjtBQUN2RDtBQUNBLENBUk87QUFVUW1VLG1GQUFmLEU7Ozs7Ozs7Ozs7O0FDMUVBLDhDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvcHJvZHVjdC9bc2x1Z11cIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uLy4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKVxuICB9XG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCAob3B0aW9ucyBhcyBhbnkpLl9oXG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGxvY2FsZVxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBBbGwgY29uZmlndXJlZCBsb2NhbGVzXG4gICAqL1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmVkIGRlZmF1bHQgbG9jYWxlXG4gICAqL1xuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogc3RyaW5nW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBhZnRlckludGVyYWN0aXZlPzogc3RyaW5nW107IGJlZm9yZUludGVyYWN0aXZlPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZGlzYWJsZU9wdGltaXplZExvYWRpbmc/OiBib29sZWFuXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IFByZXZpZXdEYXRhXG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgQXJyb3dOZXh0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPScyMCc+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD0nTTI5NC4xIDI1NkwxNjcgMTI5Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOXMyNC42LTkuMyAzNCAwTDM0NSAyMzljOS4xIDkuMSA5LjMgMjMuNy43IDMzLjFMMjAxLjEgNDE3Yy00LjcgNC43LTEwLjkgNy0xNyA3cy0xMi4zLTIuMy0xNy03Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWwxMjctMTI3LjF6J1xyXG4gICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IFN2ZyB9IGZyb20gJ0AvY29tcG9uZW50cy9PdGhlcnMvc3ZnJztcclxuZXhwb3J0IGNvbnN0IENhcnRJY29uID0gKHByb3BzOiBKU1guSW50cmluc2ljQXR0cmlidXRlcyAmIHsgW3g6IHN0cmluZ106IGFueTsgc2l6ZT86IG51bWJlciB8IHVuZGVmaW5lZDsgfSkgPT4gKFxyXG4gIDxTdmcgey4uLnByb3BzfSB3aWR0aD1cIjE0LjRcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTQuNCAxMlwiPlxyXG4gICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMTIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yODggLTQxMy44OSlcIj5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE1NFwiXHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgZD1cIk0yOTguNyw0MTguMjg5bC0yLjkwNi00LjE0OGEuODM1LjgzNSwwLDAsMC0uNTI4LS4yNTEuNjA3LjYwNywwLDAsMC0uNTI5LjI1MWwtMi45MDUsNC4xNDhoLTMuMTdhLjYwOS42MDksMCwwLDAtLjY2MS42MjV2LjE5MWwxLjY1MSw1Ljg0YTEuMzM2LDEuMzM2LDAsMCwwLDEuMjU1Ljk0NWg4LjU4OGExLjI2MSwxLjI2MSwwLDAsMCwxLjI1NC0uOTQ1bDEuNjUxLTUuODR2LS4xOTFhLjYwOS42MDksMCwwLDAtLjY2MS0uNjI1Wm0tNS40MTksMCwxLjk4NC0yLjc2NywxLjk4LDIuNzY3Wm0xLjk4NCw1LjAyNGExLjI1OCwxLjI1OCwwLDEsMSwxLjMxOS0xLjI1OCwxLjMsMS4zLDAsMCwxLTEuMzE5LDEuMjU4Wm0wLDBcIlxyXG4gICAgICAvPlxyXG4gICAgPC9nPlxyXG4gIDwvU3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgTG9uZ0Fycm93TGVmdCA9ICh7IC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgIHdpZHRoPScxMidcclxuICAgICAgaGVpZ2h0PSc4LjAwMydcclxuICAgICAgdmlld0JveD0nMCAwIDEyIDguMDAzJ1xyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZGF0YS1uYW1lPSdfaW9uaWNvbnNfc3ZnX2lvcy1hcnJvdy1yb3VuZC1iYWNrICgyKSdcclxuICAgICAgICBkPSdNMTE2LjQ0NywxNjAuMTc3YS41NDUuNTQ1LDAsMCwxLDAsLjc2N2wtMi41MywyLjUzOGg5LjY0MWEuNTQyLjU0MiwwLDAsMSwwLDEuMDg0aC05LjY0MWwyLjUzNCwyLjUzOGEuNTQ5LjU0OSwwLDAsMSwwLC43NjcuNTQuNTQsMCwwLDEtLjc2MywwbC0zLjQzNS0zLjQ2YS42MDguNjA4LDAsMCwxLS4xMTMtLjE3MS41MTcuNTE3LDAsMCwxLS4wNDItLjIwOC41NDMuNTQzLDAsMCwxLC4xNTQtLjM3OWwzLjQzNS0zLjQ2QS41MzEuNTMxLDAsMCwxLDExNi40NDcsMTYwLjE3N1onXHJcbiAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTExMi4xIC0xNjAuMDIzKSdcclxuICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgTm9DYXJ0QmFnID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjIzMS45MVwiXHJcbiAgICAgIGhlaWdodD1cIjI5MlwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjMxLjkxIDI5MlwiXHJcbiAgICA+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIlxyXG4gICAgICAgICAgeDE9XCIxXCJcclxuICAgICAgICAgIHkxPVwiMC40MzlcIlxyXG4gICAgICAgICAgeDI9XCIwLjM2OVwiXHJcbiAgICAgICAgICB5Mj1cIjFcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiIzAyOTQ3N1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzAwOWU3ZlwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgICA8Z1xyXG4gICAgICAgIGlkPVwibm9fY2FydF9pbl9iYWdfMlwiXHJcbiAgICAgICAgZGF0YS1uYW1lPVwibm8gY2FydCBpbiBiYWcgMlwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMzg4IC0zNTEpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgICBpZD1cIkVsbGlwc2VfMjg3M1wiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJFbGxpcHNlIDI4NzNcIlxyXG4gICAgICAgICAgY3g9XCIxMTUuOTU1XCJcclxuICAgICAgICAgIGN5PVwiMjcuMzY2XCJcclxuICAgICAgICAgIHJ4PVwiMTE1Ljk1NVwiXHJcbiAgICAgICAgICByeT1cIjI3LjM2NlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTM4OCA1ODguMjY4KVwiXHJcbiAgICAgICAgICBmaWxsPVwiI2RkZFwiXHJcbiAgICAgICAgICBvcGFjaXR5PVwiMC4yNVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4NjkxXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2OTFcIlxyXG4gICAgICAgICAgZD1cIk0yOS42MzIsMEgxNzAuMzY4QTI5LjgyOCwyOS44MjgsMCwwLDEsMjAwLDMwLjAyMVYyMDkuOTc5QTI5LjgyOCwyOS44MjgsMCwwLDEsMTcwLjM2OCwyNDBIMjkuNjMyQTI5LjgyOCwyOS44MjgsMCwwLDEsMCwyMDkuOTc5VjMwLjAyMUEyOS44MjgsMjkuODI4LDAsMCwxLDI5LjYzMiwwWlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQwMyAzODEpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA5ZTdmXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlJlY3RhbmdsZV8xODUyXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxODUyXCJcclxuICAgICAgICAgIGQ9XCJNMzAsMEgxNzBhMzAsMzAsMCwwLDEsMzAsMzB2MGEzMCwzMCwwLDAsMS0zMCwzMEgxMi44NTdBMTIuODU3LDEyLjg1NywwLDAsMSwwLDQ3LjE0M1YzMEEzMCwzMCwwLDAsMSwzMCwwWlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQwMyAzODEpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlJlY3RhbmdsZV8xODUzXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxODUzXCJcclxuICAgICAgICAgIGQ9XCJNNDIsMEgxNThhNDIsNDIsMCwwLDEsNDIsNDJ2MGExOCwxOCwwLDAsMS0xOCwxOEgxOEExOCwxOCwwLDAsMSwwLDQydjBBNDIsNDIsMCwwLDEsNDIsMFpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0MDMgMzgxKVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4Njg1XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2ODVcIlxyXG4gICAgICAgICAgZD1cIk00NDYuMzEsMjQ2LjA1NmEzMCwzMCwwLDEsMSwzMC0zMEEzMC4wMzQsMzAuMDM0LDAsMCwxLDQ0Ni4zMSwyNDYuMDU2Wm0wLTUzLjI5NEEyMy4zLDIzLjMsMCwxLDAsNDY5LjksMjE2LjA1NiwyMy40NzEsMjMuNDcxLDAsMCwwLDQ0Ni4zMSwxOTIuNzYyWlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA1Ni42OSAxNjQuOTQ0KVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4Njg2XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2ODZcIlxyXG4gICAgICAgICAgZD1cIk00NDYuMzEsMzc1LjE4MWEzMCwzMCwwLDEsMSwzMC0zMEEzMC4wMzQsMzAuMDM0LDAsMCwxLDQ0Ni4zMSwzNzUuMTgxWm0wLTUzLjI5NEEyMy4zLDIzLjMsMCwxLDAsNDY5LjksMzQ1LjE4MSwyMy40NzEsMjMuNDcxLDAsMCwwLDQ0Ni4zMSwzMjEuODg3WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA1Ny43OTMgOTUuNjg0KVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwOWU3ZlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICBpZD1cIkVsbGlwc2VfMjg3NFwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJFbGxpcHNlIDI4NzRcIlxyXG4gICAgICAgICAgY3g9XCIyOC42ODlcIlxyXG4gICAgICAgICAgY3k9XCIyOC42ODlcIlxyXG4gICAgICAgICAgcj1cIjI4LjY4OVwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ3My44MjMgNTExLjA0NilcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgaWQ9XCJFbGxpcHNlXzI4NzVcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSAyODc1XCJcclxuICAgICAgICAgIGN4PVwiMTUuMDQ2XCJcclxuICAgICAgICAgIGN5PVwiMTUuMDQ2XCJcclxuICAgICAgICAgIHI9XCIxNS4wNDZcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0ODEuNDAxIDU0Ny44NTQpIHJvdGF0ZSgtNDUpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA5ZTdmXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2ODdcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY4N1wiXHJcbiAgICAgICAgICBkPVwiTTM5OS43MSw1MzEuMjdhNzEuNzU1LDcxLjc1NSwwLDAsMSwxMi42NS0xMy42YzMuNC0yLjg2My0xLjUtNy43MjYtNC44ODItNC44ODJhNzguMzkyLDc4LjM5MiwwLDAsMC0xMy43MywxNWMtMi41NiwzLjY0NCwzLjQyNCw3LjEsNS45NjIsMy40ODVaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDYwLjU3OSAtMzUuNzAzKVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4Njg4XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2ODhcIlxyXG4gICAgICAgICAgZD1cIk00MTIuOTEzLDUyNy43ODZhNzguNDE5LDc4LjQxOSwwLDAsMC0xMy43My0xNWMtMy4zOC0yLjg0My04LjI4OSwyLjAxNy00Ljg4Miw0Ljg4MmE3MS43ODUsNzEuNzg1LDAsMCwxLDEyLjY1LDEzLjZjMi41MzUsMy42MDksOC41MjUuMTYyLDUuOTYyLTMuNDg1WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA2MC41NjYgLTM1LjcwNClcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY4OVwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4Njg5XCJcclxuICAgICAgICAgIGQ9XCJNNTgzLjI3OCw1MjcuNzg2YTc4LjQxNyw3OC40MTcsMCwwLDAtMTMuNzMtMTVjLTMuMzgtMi44NDMtOC4yODksMi4wMTctNC44ODIsNC44ODJhNzEuNzY4LDcxLjc2OCwwLDAsMSwxMi42NSwxMy42YzIuNTM1LDMuNjA5LDguNTI1LjE2Miw1Ljk2Mi0zLjQ4NVpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk3MC4zMDQgLTM1LjcwNClcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY5MFwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4NjkwXCJcclxuICAgICAgICAgIGQ9XCJNNTcwLjA3NSw1MzEuMjdhNzEuNzcsNzEuNzcsMCwwLDEsMTIuNjUtMTMuNmMzLjQtMi44NjMtMS41LTcuNzI2LTQuODgyLTQuODgyYTc4LjQwNyw3OC40MDcsMCwwLDAtMTMuNzMsMTVjLTIuNTYsMy42NDQsMy40MjQsNy4xLDUuOTYyLDMuNDg1WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTcwLjMxOCAtMzUuNzAzKVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4NjkyXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2OTJcIlxyXG4gICAgICAgICAgZD1cIk0zMDEuMjQzLDI4Ny40NjRhMTkuMTE1LDE5LjExNSwwLDAsMSw4LjA3MSw5LjA3NywxOS42MzcsMTkuNjM3LDAsMCwxLDEuNiw3Ljg4djI2LjA4NWExOS4zNDksMTkuMzQ5LDAsMCwxLTkuNjcyLDE2Ljk1N2MtMTAuMDQ4LTYuODU4LTE2LjU0NC0xNy43NDItMTYuNTQ0LTMwUzI5MS4yLDI5NC4zMjIsMzAxLjI0MywyODcuNDY0WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI5Mi4zMDEgMTAxLjUzNilcIlxyXG4gICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4NjkzXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2OTNcIlxyXG4gICAgICAgICAgZD1cIk0yOTQuMzcxLDI4Ny40NjRhMTkuMTE1LDE5LjExNSwwLDAsMC04LjA3MSw5LjA3NywxOS42MzcsMTkuNjM3LDAsMCwwLTEuNiw3Ljg4djI2LjA4NWExOS4zNDksMTkuMzQ5LDAsMCwwLDkuNjcyLDE2Ljk1N2MxMC4wNDgtNi44NTgsMTYuNTQ0LTE3Ljc0MiwxNi41NDQtMzBTMzA0LjQxOSwyOTQuMzIyLDI5NC4zNzEsMjg3LjQ2NFpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExMTguMzAxIDEwMS41MzYpXCJcclxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIFNWRyBwbHVzIGljb25cclxuZXhwb3J0IGNvbnN0IFBsdXMgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgd2lkdGggPSAnMTJweCcsXHJcbiAgaGVpZ2h0ID0gJzEycHgnLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTIgMTJcIlxyXG4gICAgPlxyXG4gICAgICA8Z1xyXG4gICAgICAgIGlkPVwiR3JvdXBfMzM1MVwiXHJcbiAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMzM1MVwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMzY3IC0xOTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxyZWN0XHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNTIwXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTJcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMlwiXHJcbiAgICAgICAgICByeD1cIjFcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzNjcgMTk1KVwiXHJcbiAgICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxyZWN0XHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNTIxXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTJcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMlwiXHJcbiAgICAgICAgICByeD1cIjFcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzNzQgMTkwKSByb3RhdGUoOTApXCJcclxuICAgICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBTVkcgbWludXMgaWNvblxyXG5leHBvcnQgY29uc3QgTWludXMgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgd2lkdGggPSAnMTJweCcsXHJcbiAgaGVpZ2h0ID0gJzJweCcsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD1cIjAgMCAxMiAyXCJcclxuICAgID5cclxuICAgICAgPHJlY3RcclxuICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNTIyXCJcclxuICAgICAgICB3aWR0aD1cIjEyXCJcclxuICAgICAgICBoZWlnaHQ9XCIyXCJcclxuICAgICAgICByeD1cIjFcIlxyXG4gICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IFN0YXJJY29uOlJlYWN0LkZDPHtjbGFzc05hbWU6c3RyaW5nfT4gPSAoe2NsYXNzTmFtZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcclxuICAgICAgICAgICAgZGF0YS1pY29uPVwic3RhclwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTkuMyAxNy44TDE5NCAxNTAuMiA0Ny45IDE3MS41Yy0yNi4yIDMuOC0zNi43IDM2LjEtMTcuNyA1NC42bDEwNS43IDEwMy0yNSAxNDUuNWMtNC41IDI2LjMgMjMuMiA0NiA0Ni40IDMzLjdMMjg4IDQzOS42bDEzMC43IDY4LjdjMjMuMiAxMi4yIDUwLjktNy40IDQ2LjQtMzMuN2wtMjUtMTQ1LjUgMTA1LjctMTAzYzE5LTE4LjUgOC41LTUwLjgtMTcuNy01NC42TDM4MiAxNTAuMiAzMTYuNyAxNy44Yy0xMS43LTIzLjYtNDUuNi0yMy45LTU3LjQgMHpcIj5cclxuXHJcbiAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJJY29uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtOb1Byb2R1Y3RJbWcsIE5vUHJvZHVjdE1zZ30gZnJvbSBcIkAvZmVhdHVyZXMvY2FydC9jYXJ0LnN0eWxlXCI7XHJcbmltcG9ydCB7Tm9DYXJ0QmFnfSBmcm9tIFwiQC9hc3NldHMvaWNvbnMvTm9DYXJ0QmFnXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQC9jb21wb25lbnRzL090aGVycy9idXR0b24vYnV0dG9uXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE5vdEZvdW5kQ29udGFpbmVyPXN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogOTBweDtcclxuYFxyXG5jb25zdCBQcm9kdWN0Tm90Rm91bmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5vdEZvdW5kQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Tm9Qcm9kdWN0SW1nPlxyXG4gICAgICAgICAgICAgICAgPE5vQ2FydEJhZyAvPlxyXG4gICAgICAgICAgICA8L05vUHJvZHVjdEltZz5cclxuICAgICAgICAgICAgPE5vUHJvZHVjdE1zZz5cclxuICAgICAgICAgICAgICAgIExvb2tpbmcgZm9yIHNvbWV0aGluZz88YnIvPlxyXG4gICAgICAgICAgICAgICAgV2UgYXJlIHNvcnJ5IHRoZSBwcm9kdWN0IHlvdSBhcmUgbG9va2luZyBmb3IgZG9lc24ndCBleGlzdC5cclxuICAgICAgICAgICAgPC9Ob1Byb2R1Y3RNc2c+XHJcbiAgICAgICAgICAgIDxOb1Byb2R1Y3RJbWc+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT17XCJidXR0b25cIn0gb25DbGljaz17KCk9PnJvdXRlci5wdXNoKCcvJyl9PkdvIGJhY2sgdG8gSG9tZXBhZ2U8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Ob1Byb2R1Y3RJbWc+XHJcbiAgICAgICAgPC9Ob3RGb3VuZENvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Tm90Rm91bmQ7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGNvbXBvc2UsIHNwYWNlLCBjb2xvciwgbGF5b3V0IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XHJcblxyXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdjxhbnk+KFxyXG4gIHtcclxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgbWluV2lkdGg6IDAsXHJcbiAgICBtYXJnaW46IDAsXHJcbiAgfSxcclxuICBjb21wb3NlKHNwYWNlLCBjb2xvciwgbGF5b3V0KVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XHJcbmltcG9ydCB7IGNvbXBvc2UsIHZhcmlhbnQsIGJvcmRlciwgc3BhY2UsIGxheW91dCB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b24oXHJcbiAgKHByb3BzKSA9PlxyXG4gICAgY3NzKHtcclxuICAgICAgcHg6ICcxNXB4JyxcclxuICAgICAgcHk6IDAsXHJcbiAgICAgIGZvbnRTaXplOiBbJ2Jhc2UnXSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICBjdXJzb3I6IHByb3BzLmRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcclxuICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gJ3RleHQubGlnaHQnIDogJ3doaXRlJyxcclxuICAgICAgYmc6IHByb3BzLmRpc2FibGVkID8gJ2dyYXkuNTAwJyA6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJ2Jhc2UnLFxyXG5cclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gJ3RleHQubGlnaHQnIDogJ3doaXRlJyxcclxuICAgICAgICBiZzogcHJvcHMuZGlzYWJsZWQgPyAnZ3JheS41MDAnIDogJ3ByaW1hcnkuaG92ZXInLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAge1xyXG4gICAgYXBwZWFyYW5jZTogJ25vbmUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGhlaWdodDogJzM4cHgnLFxyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxuICAgIGJvcmRlcjogMCxcclxuXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHZhcmlhbnQoe1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgb3V0bGluZWQ6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgICAgICBib3JkZXJDb2xvcjogJ2dyYXkuNTAwJyxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBiZzogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBiZzogJ3ByaW1hcnkuaG92ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICBiZzogJ3doaXRlJyxcclxuICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAnZ3JheS41MDAnLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICBiZzogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdGV4dDoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICBiZzogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5LmhvdmVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICB3aWR0aDogMjYsXHJcbiAgICAgICAgaGVpZ2h0OiAyNixcclxuICAgICAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgICAgICBib3JkZXJDb2xvcjogJ3RleHQucmVndWxhcicsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMyxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcclxuICAgICAgICBiZzogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAnJi5zZWxlY3RlZCc6IHtcclxuICAgICAgICAgIGJnOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6aG92ZXI6bm90KC5zZWxlY3RlZCknOiB7XHJcbiAgICAgICAgICBiZzogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KSxcclxuICB2YXJpYW50KHtcclxuICAgIHByb3A6ICdzaXplJyxcclxuICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgIGJpZzoge1xyXG4gICAgICAgIGhlaWdodDogJzQ4cHgnLFxyXG4gICAgICAgIHB4OiAzMCxcclxuICAgICAgfSxcclxuICAgICAgc21hbGw6IHtcclxuICAgICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIGNvbXBvc2UoYm9yZGVyLCBzcGFjZSwgbGF5b3V0KVxyXG4pO1xyXG5jb25zdCByb3RhdGUgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxyXG4gIHRvIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cclxuYDtcclxuXHJcbmNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZFxyXG4gICAgJHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiB0aGVtZUdldCgncHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICBhbmltYXRpb24tbmFtZTogJHtyb3RhdGV9O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4ycztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbmA7XHJcblxyXG4vLyBjb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdigocHJvcHMpID0+XHJcbi8vICAgY3NzKHtcclxuLy8gICAgIHdpZHRoOiAxOCxcclxuLy8gICAgIGhlaWdodDogMTgsXHJcbi8vICAgICBtYXJnaW5MZWZ0OiAxMCxcclxuLy8gICAgIGJvcmRlcjogJzNweCBzb2xpZCB3aGl0ZScsXHJcbi8vICAgICBib3JkZXJUb3A6IGAzcHggc29saWQgJHtwcm9wcy5jb2xvciA/IHByb3BzLmNvbG9yIDogJ3ByaW1hcnkucmVndWxhcid9YCxcclxuLy8gICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbi8vICAgICB0cmFuc2l0aW9uUHJvcGVydHk6ICd0cmFuc2Zvcm0nLFxyXG4vLyAgICAgYW5pbWF0aW9uTmFtZTogYCR7cm90YXRlfWAsXHJcbi8vICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuMnMnLFxyXG4vLyAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXHJcbi8vICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXHJcbi8vICAgfSlcclxuLy8gKTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBsb2FkaW5nPzogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgdHlwZTogJ3N1Ym1pdCcgfCAnYnV0dG9uJztcclxuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xyXG59O1xyXG5leHBvcnQgdHlwZSBSZWYgPSBIVE1MQnV0dG9uRWxlbWVudDtcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBQcm9wcz4oXHJcbiAgKHsgY2hpbGRyZW4sIGRpc2FibGVkLCBsb2FkaW5nID0gZmFsc2UsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gICAgPFN0eWxlZEJ1dHRvbiByZWY9e3JlZn0gey4uLnByb3BzfSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG4gICAgPC9TdHlsZWRCdXR0b24+XHJcbiAgKVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWcgfSBmcm9tICdyZWFjdC1pbWFnZSc7XHJcbmltcG9ydCBwbGFjZWhvbGRlciBmcm9tICcuL3Byb2R1Y3QtcGxhY2Vob2xkZXIucG5nJztcclxuY29uc3QgUGxhY2Vob2xkZXIgPSAoKSA9PiA8aW1nIHNyYz17cGxhY2Vob2xkZXJ9IGFsdD1cInByb2R1Y3QgaW1nIGxvYWRlclwiIC8+O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XHJcbiAgdXJsLFxyXG4gIGFsdCA9ICdwbGFjZWhvbGRlcicsXHJcbiAgdW5sb2FkZXIsXHJcbiAgbG9hZGVyLFxyXG4gIGNsYXNzTmFtZSxcclxuICBzdHlsZSxcclxufToge1xyXG4gIHVybD86IHN0cmluZyB8IFtzdHJpbmddO1xyXG4gIGFsdD86IHN0cmluZztcclxuICB1bmxvYWRlcj86IHN0cmluZztcclxuICBsb2FkZXI/OiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHN0eWxlPzogYW55O1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbWdcclxuICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cclxuICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICBzcmM9e3VybH1cclxuICAgICAgYWx0PXthbHR9XHJcbiAgICAgIGxvYWRlcj17PFBsYWNlaG9sZGVyIC8+fVxyXG4gICAgICB1bmxvYWRlcj17PFBsYWNlaG9sZGVyIC8+fVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRNEFBQUR3Q0FZQUFBRHhYb3A0QUFBSFBFbEVRVlI0WHUzZDIzTGEyQmFHVVJFT1BwVGYvMG1Od1lDc3Z0aEZ0b01kaXgrV3hCSVo0NnFyc2pweHV0cGZOT1hsbVZuWGRWMERFUGpWZHdEZ2xIQUFNZUVBWXNJQnhJUURpQWtIRUJNT0lDWWNRRXc0Z0pod0FESGhBR0xDQWNTRUE0Z0pCeEFURGlBbUhFQk1PSUNZY0FBeDRRQml3Z0hFaEFPSUNRY1FFdzRnSmh4QVREaUFtSEFBTWVFQVlzSUJ4SVFEaUFrSEVCTU9JQ1ljUUV3NGdKaHdBREhoQUdMQ0FjU0VBNGdKQnhBVERpQW1IRUJNT0lDWWNBQXg0UUJpd2dIRWhBT0lDUWNRRXc0Z0poeEFURGlBbUhBQU1lRUFZc0lCeElRRGlBa0hFQk1PSUNZY1FFdzRnSmh3QURIaEFHTENBY1NFQTRnSkJ4QVREaUFtSEVCTU9JQ1ljQUF4NFFCaXdnSEVoQU9JQ1FjUUV3NGdKaHhBVERpQW1IQUFNZUVBWXNJQnhJUURpQWtIRUJNT0lDWWNRRXc0Z0pod0FESGhBR0xDQWNRV2ZRY281M0E0L1A3bitYemV6R2F6SDg5RHJZUmpRRjNYTmJ2ZHJ0bnRkazNidGw5K2ZENmZONHZGb25sOGZCUVJKbVhXZFYzWGQ0amNmcjl2M3Q3ZW1uUCs4ODVtcytiaDRhRjVmSHpzT3dwVkVJNEJiRGFiNXYzOXZlL1lGOHZsc25sK2Z2YjBRZlc4SEMzczBtZzBuNTVTb0hiQ1VkQit2Nzg0R2tmNy9iN1picmQ5eCtDbWhLT2d6V2JUZCtRczcrL3ZaNzBiZ1ZzUmprSjJ1MTN6OGZIUmQrd3NYZGQ1NnFCcXdsSElmci92T3hJcC9mTkJTY0pSU09sUDlJK1BEK01LMVJLT2luMTNhUXhxSUJ3RmVETDQwK2VyOWR3bjRTakFoYTMvYTl1MldhL1g3cVBjT2VFb1pJaDR6T2Z6dmlOVjZicnU5elg3NC9mb2NKK0VvNURsY3RsM0pETEY3NTVkcjlkL3ZKZDVlM3N6dHR3cDRTaWtkRGhXcTFYZmthcHNOcHR2STdGZXI0dmRiNkVld2xISWNya3NObHJNWnJOSmhXTzMyLzMxcW4zWGRjMTZ2ZllDK2M0SVIwRlBUMDk5Ujg3eTlQUTBtVEdsYmR2ZXEvYm5uR0ZhaEtPZ3hXTFJQRDgvOXgzNzBXcTFtc3pUUnRkMXpldnI2MWxQRTd2ZHpqWDZPeUljaGExV3E0dmo4ZkR3Y1BHL2V3dm5SdU5vdTkwV3YySExiVmprTTVERDRkQnNOcHV6Ym4vKyt2V3JlWHA2S3Y2Q2RVaHZiMjhYZmJsMU5wczFMeTh2eGQ0SGNSdkNNYkRkYnRjY0RvZG12OTkvK2RONXVWdzJ5K1Z5TXFQSjBXNjN1K3FDMTN3K2IxNWVYaWJ6SG9ldmhHTmtiZHRPK2svYncrSFF2TDYrOWgzcnRWZ3NtcGVYbDc1alZNbzdqcEZOT1JvZkh4L05lcjN1TzNhVzR5akhOQWtIWnhuaVBzYjcrL3RGNzBtNFBlR29XTWxQMG11ZCs2STNOZFRQeTdDRW8xS2wzaVdVc04xdUIzc3lTTzZDVUEvaHFORHh1MHpidHIzNXBha3h0cTRmNDhGMENFZUZ0dHZ0NzI4TTIyNjNOM3VVYjl2MnFpKzdKc2I4dGJpZWNGVG1jRGg4K1lheFczeENmZDZ0TVJZN1BLWkRPQ3B5L0dROWRZdVI1WFMzeGxqczhKZ0c0YWpJNXhIbHV4OGI2eFA1YjdzMXhtS0hSLzJFb3hMZmpTaW54aGhaZnRxdE1aWWg3b3hRbG5CVTRHOGp5cW1oUjVhYTltYlU5TEh3bFhCVTRLY1I1ZFJRSTB1Tjl5bnM4S2lYY056WU9TUEtxWE9lVGxLMVJlUElEbzg2Q2NjTm5UdWluQ285c2h3dm05V3E5by92WHlRY041U01LS2RLalN4VHVEdHhpenNsL0V3NGJ1U1NFZVhVSlU4cm54ME9oNnQvanJFYy80WTQ2aUFjTjNEcGlITHFtcEdsNUc2TnNkamhVUS9odUlGclJwUlRsNHdzVTc0bllZZEhIWVJqWkNWR2xGUHAwOHZVZDJCTS9lTy9COEl4b2xJanlxbGtaQmx5dDhaWWFyeHo4cThSamhHVkhGRk9uVE95akxGYll5eDJlTnlXY0l5a2JkdmlJOHFwbjU1bTduSGZ4VDMrbnFaQ09FWXl4di9nZnh0Wjd2a2V4QlR1b2R3ajRSakJPV05FS2QvOVdyZmFyVEVXT3p6R0p4d0RTMTVjbHZMNTZlYld1elhHWW9mSHVJUmpZR09NS0tlT3NhcGh0OFpZcG53M1pZcjhGWkFEMm02M296OXRmRGFiemY2NVQ2VFZhdFU4UHovM0hlTktuamdHY29zUjVkUy9GbzNHRG8vUkNNZEFiakdpOEQ5MmVBeFBPQVl3NWxkUitKNGRIc01TanNKcUdGRzQ3N3NyTlJDT3dvd285YkREWXpqQ1VaQVJwVDUyZUF4RE9Bb3hvdFRMRG8veWhLTVFJMHJkN1BBb1N6Z0tNS0xVenc2UHNvVGpTa2FVNmJERG94emh1SklSWlZyczhDaERPSzVnUkprbU96eXVKeHdYTXFKTW14MGUxeEdPQzNuY25UNDdQQzRuSEJjd290d0hPend1Snh3aEk4cDlhZHZXemRJTENFZklpSEovN1BESUNVZkFpSEsvN1BESUxQb084S2ZIeDhlK0kweVVGNlhuczNNVWlCbFZnSmh3QURIaEFHTENBY1NFQTRnSkJ4QVREaUFtSEVCTU9JQ1ljQUF4NFFCaXdnSEVoQU9JQ1FjUUV3NGdKaHhBVERpQW1IQUFNZUVBWXNJQnhJUURpQWtIRUJNT0lDWWNRRXc0Z0pod0FESGhBR0xDQWNTRUE0Z0pCeEFURGlBbUhFQk1PSUNZY0FBeDRRQml3Z0hFaEFPSUNRY1FFdzRnSmh4QVREaUFtSEFBTWVFQVlzSUJ4SVFEaUFrSEVCTU9JQ1ljUUV3NGdKaHdBREhoQUdMQ0FjU0VBNGdKQnhBVERpQW1IRUJNT0lDWWNBQXg0UUJpd2dIRWhBT0lDUWNRRXc0Z0poeEFURGlBbUhBQU1lRUFZc0lCeElRRGlBa0hFQk1PSUNZY1FFdzRnSmh3QURIaEFHTENBY1NFQTRnSkJ4QVREaUFtSEVCTU9JQ1ljQUF4NFFCaXdnSEVoQU9JL1FlMGd5b1R6RU1XWlFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCAncmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3MnO1xyXG5cclxuY29uc3QgU2luZ2xlSXRlbSA9IHN0eWxlZC5saWBcclxuICBib3JkZXI6IDJweCBzb2xpZCAjOGZkYjg3O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAmLmN1c3RvbS1kb3QtLWFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA5RTdGO1xyXG4gIH1cclxuYDtcclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7XHJcbiAgICAgIG1heDogMzAwMCxcclxuICAgICAgbWluOiAxMDI0LFxyXG4gICAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7XHJcbiAgICAgIG1heDogNDY0LFxyXG4gICAgICBtaW46IDAsXHJcbiAgICB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHtcclxuICAgICAgbWF4OiAxMDI0LFxyXG4gICAgICBtaW46IDIwMCxcclxuICAgIH0sXHJcbiAgICBpdGVtczogMSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgQ2Fyb3VzZWxXaXRoQ3VzdG9tRG90cyA9ICh7XHJcbiAgaXRlbXMgPSBbXSxcclxuICBkZXZpY2VUeXBlOiB7IG1vYmlsZSwgdGFibGV0LCBkZXNrdG9wIH0sXHJcbiAgdGl0bGUsXHJcbiAgLi4ucmVzdFxyXG59OiBhbnkpID0+IHtcclxuXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBpdGVtcy5zbGljZSgwLCA2KS5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBzcmM9e2l0ZW19XHJcbiAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgIGFsdD17dGl0bGV9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgbWluV2lkdGg6ICdhdXRvJyxcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWltYWdlJ1xyXG4gICAgLz5cclxuICApKTtcclxuICBjb25zdCBpbWFnZXMgPSBpdGVtcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBzcmM9e2l0ZW0udXJsfVxyXG4gICAgICBrZXk9e2luZGV4fVxyXG4gICAgICBhbHQ9e3RpdGxlfVxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cclxuICAgIC8+XHJcbiAgKSk7XHJcbiAgY29uc3QgQ3VzdG9tRG90ID0gKHtcclxuICAgIGluZGV4LFxyXG4gICAgb25DbGljayxcclxuICAgIGFjdGl2ZSxcclxuICAgIGNhcm91c2VsU3RhdGU6IHsgY3VycmVudFNsaWRlLCBkZXZpY2VUeXBlIH0sXHJcbiAgfTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2luZ2xlSXRlbVxyXG4gICAgICAgIGRhdGEtaW5kZXg9e2luZGV4fVxyXG4gICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaygpfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGN1c3RvbS1kb3QgJHthY3RpdmUgJiYgJ2N1c3RvbS1kb3QtLWFjdGl2ZSd9YH1cclxuICAgICAgPlxyXG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi50b0FycmF5KGltYWdlcylbaW5kZXhdfVxyXG4gICAgICA8L1NpbmdsZUl0ZW0+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgbGV0IGRldmljZVR5cGUgPSAnZGVza3RvcCc7XHJcbiAgaWYgKG1vYmlsZSkge1xyXG4gICAgZGV2aWNlVHlwZSA9ICdtb2JpbGUnO1xyXG4gIH1cclxuICBpZiAodGFibGV0KSB7XHJcbiAgICBkZXZpY2VUeXBlID0gJ3RhYmxldCc7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2Fyb3VzZWxcclxuICAgICAgc2hvd0RvdHNcclxuICAgICAgc3NyXHJcbiAgICAgIGluZmluaXRlPXt0cnVlfVxyXG4gICAgICBzbGlkZXNUb1NsaWRlPXsxfVxyXG4gICAgICBjb250YWluZXJDbGFzcz0nY2Fyb3VzZWwtd2l0aC1jdXN0b20tZG90cydcclxuICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cclxuICAgICAgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX1cclxuICAgICAgYXV0b1BsYXk9e2ZhbHNlfVxyXG4gICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICBjdXN0b21Eb3Q9ezxDdXN0b21Eb3QgLz59XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFdpdGhDdXN0b21Eb3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxudHlwZSBTZW9Qcm9wcyA9IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgY2Fub25pY2FsPzogc3RyaW5nO1xyXG4gIGNzcz86IHN0cmluZztcclxuICBqcz86IHN0cmluZztcclxuICBpbWFnZT86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTRU86IFJlYWN0LkZDPFNlb1Byb3BzPiA9ICh7XHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgY2Fub25pY2FsLFxyXG4gIGNzcyxcclxuICBqcyxcclxuICBpbWFnZSxcclxufSkgPT4gKFxyXG4gIDxIZWFkPlxyXG4gICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICA8bWV0YVxyXG4gICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxyXG4gICAgLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgIDxtZXRhXHJcbiAgICAgIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICBjb250ZW50PXtkZXNjcmlwdGlvbn1cclxuICAgIC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJXaXNlIENhcnRcIiAvPlxyXG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtjYW5vbmljYWx9YH0gLz5cclxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQHdpc2VjYXJ0XCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQHdpc2VjYXJ0XCIgLz5cclxuICAgIHtjc3MgJiYgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e2Ake2Nzc31gfSAvPn1cclxuICAgIHtpbWFnZSA/IChcclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake2ltYWdlfWB9IC8+XHJcbiAgICApIDogKFxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93aXNlY2FydC9pbWFnZS91cGxvYWQvdjE2MTY3MDk4NTAvZ25ma2ZubTFjOXJjem5jcDVjNXQucG5nXCJcclxuICAgICAgLz5cclxuICAgICl9XHJcbiAgICB7aW1hZ2UgJiYgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtgJHtpbWFnZX1gfSAvPn1cclxuICAgIHtjYW5vbmljYWwgJiYgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7Y2Fub25pY2FsfWB9IC8+fVxyXG4gICAge2pzICYmIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz17YCR7anN9YH0+PC9zY3JpcHQ+fVxyXG4gIDwvSGVhZD5cclxuKTtcclxuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSAnLi9ib3gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN2ZyA9ICh7IHNpemUgPSAxOCwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxCb3hcclxuICAgIGFzPVwic3ZnXCJcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgd2lkdGg9e3NpemUgKyAnJ31cclxuICAgIGhlaWdodD17c2l6ZSArICcnfVxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgU3Rhckljb24gZnJvbSBcIkAvYXNzZXRzL2ljb25zL1N0YXJcIjtcclxuaW50ZXJmYWNlIFJhdGluZ0NvbnRhaW5lclByb3Bze1xyXG4gICAgc2l6ZTpzdHJpbmdcclxufVxyXG5jb25zdCBSYXRpbmdDb250YWluZXI9c3R5bGVkLmRpdjxSYXRpbmdDb250YWluZXJQcm9wcz5gXHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBzdmcge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIHdpZHRoOiAke3Byb3BzPT5wcm9wcy5zaXplfTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzU0QzVDNjtcclxuICB9XHJcbiAgLmluQWN0aXZlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbmBcclxuY29uc3QgU3RhclJhdGluZzpSZWFjdC5GQzx7cmF0aW5nOm51bWJlcixzaXplPzpzdHJpbmd9PiA9ICh7cmF0aW5nLHNpemV9KSA9PiB7XHJcbiAgICBsZXQgYWN0aXZlID0gQXJyYXkuYXBwbHkobnVsbCwge2xlbmd0aDogcmF0aW5nfSlcclxuICAgIGxldCBpbkFjdGl2ZSA9IEFycmF5LmFwcGx5KG51bGwsIHtsZW5ndGg6IDUtcmF0aW5nfSlcclxuICAgIGNvbnN0IHN0YXJTaXplOnN0cmluZz1zaXplP3NpemU6JzIycHgnXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSYXRpbmdDb250YWluZXIgc2l6ZT17c3RhclNpemV9PlxyXG4gICAgICAgICAgICB7YWN0aXZlLm1hcCgobnVtKT0+IDxTdGFySWNvbiBjbGFzc05hbWU9eydhY3RpdmUnfSBrZXk9e251bX0vPil9XHJcbiAgICAgICAgICAgIHtpbkFjdGl2ZS5tYXAoKG51bSk9PiA8U3Rhckljb24gY2xhc3NOYW1lPXsnaW5BY3RpdmUnfSBrZXk9e251bX0vPil9XHJcbiAgICAgICAgPC9SYXRpbmdDb250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhclJhdGluZzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQC9jb21wb25lbnRzL090aGVycy9pbWFnZS9pbWFnZSc7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdAL2NvbXBvbmVudHMvT3RoZXJzL2J1dHRvbi9idXR0b24nO1xyXG5pbXBvcnQge1xyXG4gICAgUHJvZHVjdENhcmRXcmFwcGVyLFxyXG4gICAgUHJvZHVjdEltYWdlV3JhcHBlcixcclxuICAgIFByb2R1Y3RJbmZvLFxyXG4gICAgQnV0dG9uVGV4dCxcclxufSBmcm9tICcuL3Byb2R1Y3QtY2FyZC5zdHlsZSc7XHJcbmltcG9ydCB7Q291bnRlcn0gZnJvbSAnLi4vLi4vY2FydC9jb3VudGVyL2NvdW50ZXInO1xyXG5pbXBvcnQge0NhcnRJY29ufSBmcm9tICdAL2Fzc2V0cy9pY29ucy9DYXJ0SWNvbic7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2FkZFRvQ2FydH0gZnJvbSBcIkAvcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQge2dldEl0ZW1DYXJ0UXR5fSBmcm9tIFwiQC91dGlscy9jYXJ0VXRpbHNcIjtcclxuXHJcbnR5cGUgUHJvZHVjdENhcmRQcm9wcyA9IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpbWFnZTogYW55O1xyXG4gICAgcHJpY2U6IG51bWJlcjtcclxuICAgIHNhbGVQcmljZT86IG51bWJlcjtcclxuICAgIGRpc2NvdW50SW5QZXJjZW50PzogbnVtYmVyO1xyXG4gICAgb25DbGljaz86IChlOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBwcm9kdWN0OiBhbnlcclxufTtcclxuXHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgU3RhclJhdGluZyBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3QvU3RhclJhdGluZ1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQ29udmVydEN1cnJlbmN5IGZyb20gXCJAL2NvbnZlcnRDdXJyZW5jeVwiO1xyXG5cclxuY29uc3QgUHJvZHVjdENhcmQ6IFJlYWN0LkZDPFByb2R1Y3RDYXJkUHJvcHM+ID0gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRJblBlcmNlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xyXG4gICAgY29uc3QgaGFuZGxlQWRkQ2xpY2sgPSAoZTogeyBzdG9wUHJvcGFnYXRpb246ICgpID0+IHZvaWQ7IH0pID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0LCAxKSlcclxuXHJcbiAgICB9O1xyXG4gICAgY29uc3Qge2N1cnJlbmN5OiB7c3ltYm9sLGlkfSxjdXJyZW5jeURldGFpbHN9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcclxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZUNsaWNrID0gKGU6IHsgc3RvcFByb3BhZ2F0aW9uOiAoKSA9PiB2b2lkOyB9KSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBkaXNwYXRjaChhZGRUb0NhcnQocHJvZHVjdCwgLTEpKVxyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCBjYXJ0UXVhbnRpdHkgPSBnZXRJdGVtQ2FydFF0eShjYXJ0U3RhdGUsIHByb2R1Y3QuaWQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm9kdWN0Q2FyZFdyYXBwZXIgb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHJvZHVjdC9bc2x1Z10nfSBhcz17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdEltYWdlV3JhcHBlcj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1Byb2R1Y3RJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxQcm9kdWN0SW5mbz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+e3Byb2R1Y3QubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPFN0YXJSYXRpbmcgcmF0aW5nPXs0fS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFByaWNlV3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0NvbnZlcnRDdXJyZW5jeShjdXJyZW5jeURldGFpbHMscHJpY2UsJ0dCUCcsaWQpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHshY2FydFF1YW50aXR5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJ0LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0SWNvbiBtcj17Mn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhcnRRdWFudGl0eSA/IGNhcnRRdWFudGl0eSA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlY3JlbWVudD17aGFuZGxlUmVtb3ZlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkluY3JlbWVudD17aGFuZGxlQWRkQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Byb2R1Y3RJbmZvPlxyXG4gICAgICAgIDwvUHJvZHVjdENhcmRXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XHJcblxyXG5jb25zdCBTdHlsZWRCb3ggPSBzdHlsZWQuZGl2KFxyXG4gIGNzcyh7XHJcbiAgICBweTogWzMwLCA1MF0sXHJcbiAgICBweDogWycxcmVtJywgMF0sXHJcbiAgfSksXHJcbiAge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdihcclxuICBjc3Moe1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICdiYXNlJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAyNDBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgaGVpZ2h0OiAxNDVweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2FsZVRhZyA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy55ZWxsb3cucmVndWxhcicsICcjRkZBRDVFJyl9O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5tZWRpdW0nLCAnMTJweCcpfTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXNjb3VudFBlcmNlbnQgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMueWVsbG93LnJlZ3VsYXInLCAnI0ZGQUQ1RScpfTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkubWVkaXVtJywgJzEycHgnKX07XHJcbiAgei1pbmRleDogMjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0SW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjNweDtcclxuICB9XHJcbiAgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgICBtYXJnaW46IDAgMCA3cHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAucHJvZHVjdC13ZWlnaHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnhzJywgJzEyJyl9cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcm9kdWN0LW1ldGEge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdFByaWNlV3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIC5wcm9kdWN0LXByaWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICAgICAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4IC0gMXB4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRpc2NvdW50ZWRQcmljZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICAgICAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnllbGxvdy5ob3ZlcicsICcjRkJCOTc5Jyl9O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICBsZWZ0OiAtNHB4O1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy55ZWxsb3cuaG92ZXInLCAnI0ZCQjk3OScpfTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJ0LWJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjIwMCcsICcjZjdmN2Y3Jyl9O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iaWcnLCAnMThweCcpfTtcclxuICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5idG4tdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAgNnB4O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICAgICAgfVxyXG4gICAgICBzdmcge1xyXG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAucXVhbnRpdHkge1xyXG4gICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgfVxyXG4gICAgICAuaW5jQnRuIHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmRlY0J0biB7XHJcbiAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weCAtIDFweCk7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NHB4KTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyN3B4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25UZXh0ID0gc3R5bGVkLnNwYW5gXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCb29rSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDI3NXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBoZWlnaHQ6IDIxNXB4O1xyXG4gIH1cclxuICAke0Rpc2NvdW50UGVyY2VudH0ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvb2tJbmZvID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0TmFtZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gIG1hcmdpbjogMCAwIDdweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgJjpvbmx5LWNoaWxkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weCAtIDFweCk7XHJcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aG9ySW5mbyA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IEFkZENhcnRCb3ggPSBzdHlsZWQuZGl2YFxyXG4vLyAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBwYWRkaW5nOiAyMHB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogNTAlO1xyXG4vLyAgIGxlZnQ6IDUwJTtcclxuLy8gICBvcGFjaXR5OiAwO1xyXG4vLyAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuLy8gICAuY2FydC1idXR0b24ge1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuLy8gICAgIGhlaWdodDogMzZweDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbi8vICAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy4xJywgJzEzJyl9IHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4vLyAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbi8vICAgICAgIHdpZHRoOiAzMnB4O1xyXG4vLyAgICAgICBoZWlnaHQ6IDMycHg7XHJcbi8vICAgICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5idG4tdGV4dCB7XHJcbi8vICAgICAgIHBhZGRpbmc6IDAgMCAwIDZweDtcclxuLy8gICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbi8vICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbi8vICAgICAgIGJvcmRlci1jb2xvcjogIzAwOWU3ZjtcclxuLy8gICAgIH1cclxuLy8gICAgIHN2ZyB7XHJcbi8vICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIGA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4IC0gMXB4KTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGlzY291bnRlZFByaWNlID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfSBweDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy55ZWxsb3cucmVndWxhcicsICcjRkZBRDVFJyl9O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgei1pbmRleDogMjtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMueWVsbG93LnJlZ3VsYXInLCAnI0ZGQUQ1RScpfTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQm9va0NhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iYXNlJywgJzZweCcpfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb29kQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb29kSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDIzMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBoZWlnaHQ6IDE0NXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0TWV0YSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlbGl2ZXJ5T3B0ID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnkgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRHVyYXRpb24gPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmlnJywgJzE4cHgnKX07XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJvcmRlcjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0RGV0YWlsc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBSZXZpZXdUaXRsZT1zdHlsZWQuaDNgXHJcbnRleHQtYWxpZ246IGNlbnRlclxyXG5gXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0UHJldmlldyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiA2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweCA2MHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMzBweCAyNXB4IDYwcHg7XHJcbiAgICBvcmRlcjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQmFja0J1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNjBweDtcclxuICBsZWZ0OiA2MHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gIH1cclxuICAucmV1c2Vjb3JlX19idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThDJyl9O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgLmJ0bi1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0SW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjUwMCcsICcjZjFmMWYxJyl9O1xyXG4gIHBhZGRpbmc6IDU1cHggNjBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvcmRlcjogMTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2FsZVRhZyA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMueWVsbG93LmFsdGVybmF0ZScsICcjZjRjMjQzJyl9O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5tZWRpdW0nLCAnMTJweCcpfTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjBweDtcclxuICByaWdodDogMjBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXNjb3VudFBlcmNlbnQgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy54cycsICcxMicpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnNlY29uZGFyeS5yZWd1bGFyJywgJyNmZjViNjAnKX07XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxODBweDtcclxuICByaWdodDogLTYwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDFweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAxcHgpO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC04cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgOHB4IDEycHggMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgJHt0aGVtZUdldCgnY29sb3JzLnNlY29uZGFyeS5yZWd1bGFyJywgJyNmZjViNjAnKX1cclxuICAgICAgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLThweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMCAwIDEycHggOHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxyXG4gICAgICAke3RoZW1lR2V0KCdjb2xvcnMuc2Vjb25kYXJ5LnJlZ3VsYXInLCAnI2ZmNWI2MCcpfSB0cmFuc3BhcmVudDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFRpdGxlUHJpY2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuaGVhZGluZycsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmxnJywgJzIxJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RQcmljZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBsaW5lLWhlaWdodDogMzFweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFByaWNlID0gc3R5bGVkLmRpdmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4ICsgMXB4KTtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTYWxlUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMueWVsbG93LnJlZ3VsYXInLCAnI0ZGQUQ1RScpfTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMueWVsbG93LnJlZ3VsYXInLCAnI0ZGQUQ1RScpfTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFdlaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThDJyl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3REZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQubWVkaXVtJywgJyM0MjQ1NjEnKX07XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0Q2FydFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdENhcnRCdG4gPSBzdHlsZWQuZGl2YFxyXG4gIC5jYXJ0LWJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuXHJcbiAgICAuYnRuLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5xdWFudGl0eSB7XHJcbiAgICB3aWR0aDogMTE1cHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvblRleHQgPSBzdHlsZWQuc3BhbmBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RNZXRhID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1ldGFTaW5nbGUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNZXRhSXRlbSA9IHN0eWxlZC5zcGFuPHtjYXRlZ29yeTpib29sZWFufT5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6JHtwcm9wcyA9PiBwcm9wcy5jYXRlZ29yeT8nMThweCc6JzEzcHgnfTtcclxuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6JHtwcm9wcyA9PiBwcm9wcy5jYXRlZ29yeT8nIzBEMTEzNic6JyMxYzFlMzInfTs7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuY2F0ZWdvcnk/JzQ1cHgnOic0MHB4J307XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlbGF0ZWRJdGVtcyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxuICBtYXJnaW4tbGVmdDogNTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDU1cHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICA+IGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5oZWFkaW5nJywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5sZycsICcyMScpfXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgPiBkaXYgPiBkaXYge1xyXG4gICAgZmxleDogMCAwIDIwJTtcclxuICAgIG1heC13aWR0aDogMjAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgICBmbGV4OiAwIDAgMjAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDIwJTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgZmxleDogMCAwIDI1JTtcclxuICAgICAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTA2MHB4KSB7XHJcbiAgICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMzJTtcclxuICAgICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzJTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA3LjVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNy41cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL090aGVycy9idXR0b24vYnV0dG9uJztcclxuaW1wb3J0IFJlYWRNb3JlIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdC9kZXRhaWxzL3RydW5jYXRlXCI7XHJcbmltcG9ydCB7XHJcbiAgUHJvZHVjdERldGFpbHNXcmFwcGVyLFxyXG4gIFByb2R1Y3RQcmV2aWV3LFxyXG4gIFByb2R1Y3RJbmZvLFxyXG4gIFByb2R1Y3RUaXRsZVByaWNlV3JhcHBlcixcclxuICBQcm9kdWN0VGl0bGUsXHJcbiAgQmFja0J1dHRvbixcclxuICBQcm9kdWN0RGVzY3JpcHRpb24sXHJcbiAgQnV0dG9uVGV4dCxcclxuICBQcm9kdWN0TWV0YSxcclxuICBQcm9kdWN0Q2FydFdyYXBwZXIsXHJcbiAgUHJvZHVjdFByaWNlV3JhcHBlcixcclxuICBQcm9kdWN0UHJpY2UsXHJcbiAgU2FsZVByaWNlLFxyXG4gIFByb2R1Y3RDYXJ0QnRuLFxyXG4gIE1ldGFTaW5nbGUsXHJcbiAgTWV0YUl0ZW0sXHJcbiAgUmVsYXRlZEl0ZW1zLCBSZXZpZXdUaXRsZSxcclxufSBmcm9tICcuL1Byb2R1Y3REZXRhaWxzLnN0eWxlJztcclxuaW1wb3J0IHsgTG9uZ0Fycm93TGVmdCB9IGZyb20gJ0AvYXNzZXRzL2ljb25zL0xvbmdBcnJvd0xlZnQnO1xyXG5pbXBvcnQgeyBDYXJ0SWNvbiB9IGZyb20gJ0AvYXNzZXRzL2ljb25zL0NhcnRJY29uJztcclxuaW1wb3J0IENhcm91c2VsV2l0aEN1c3RvbURvdHMgZnJvbSAnQC9jb21wb25lbnRzL090aGVycy9tdWx0aS1jYXJvdXNlbC9tdWx0aS1jYXJvdXNlbCc7XHJcbmltcG9ydCB7IENvdW50ZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvY2FydC9jb3VudGVyL2NvdW50ZXInO1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIi4uL2dyaWQvUHJvZHVjdEdyaWRcIjtcclxuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0L1N0YXJSYXRpbmdcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2dldEl0ZW1DYXJ0UXR5fSBmcm9tIFwiQC91dGlscy9jYXJ0VXRpbHNcIjtcclxuaW1wb3J0IHthZGRUb0NhcnR9IGZyb20gXCJAL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IHtBcnJvd05leHR9IGZyb20gXCJAL2Fzc2V0cy9pY29ucy9BcnJvd05leHRcIjtcclxuaW1wb3J0IFJldmlld0NvbXBvbmVudCBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3QvZGV0YWlscy9SZXZpZXcvUmV2aWV3Q29tcG9uZW50XCI7XHJcbnR5cGUgUHJvZHVjdERldGFpbHNQcm9wcyA9IHtcclxuICBwcm9kdWN0OiBhbnk7XHJcbiAgZGV2aWNlVHlwZToge1xyXG4gICAgbW9iaWxlOiBib29sZWFuO1xyXG4gICAgdGFibGV0OiBib29sZWFuO1xyXG4gICAgZGVza3RvcDogYm9vbGVhbjtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgUHJvZHVjdERldGFpbHM6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb2R1Y3REZXRhaWxzUHJvcHM+ID0gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgY29uc3Qge2N1cnJlbmN5OntzeW1ib2x9fSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcclxuICBjb25zdCBjYXJ0UXVhbnRpdHk9Z2V0SXRlbUNhcnRRdHkoY2FydFN0YXRlLHByb2R1Y3QuaWQpXHJcbiAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKVxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkQ2xpY2sgPSAoZTogeyBzdG9wUHJvcGFnYXRpb246ICgpID0+IHZvaWQ7IH0pID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkaXNwYXRjaChhZGRUb0NhcnQocHJvZHVjdCwxKSlcclxuXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVSZW1vdmVDbGljayA9IChlOiB7IHN0b3BQcm9wYWdhdGlvbjogKCkgPT4gdm9pZDsgfSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0LC0xKSlcclxuXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8UHJvZHVjdERldGFpbHNXcmFwcGVyIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZFwiIGRpcj1cImx0clwiPlxyXG4gICAgICAgICAgPFByb2R1Y3RQcmV2aWV3PlxyXG4gICAgICAgICAgICA8QmFja0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZjFmMWYxJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyM3Nzc5OGMnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtSb3V0ZXIuYmFja31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TG9uZ0Fycm93TGVmdCBzdHlsZT17eyBtYXJnaW5SaWdodDogNSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgQmFjayAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQmFja0J1dHRvbj5cclxuICAgICAgICAgICAge3Byb2R1Y3QudGh1bWJJbWFnZT88Q2Fyb3VzZWxXaXRoQ3VzdG9tRG90c1xyXG4gICAgICAgICAgICAgICAgaXRlbXM9e1twcm9kdWN0LnRodW1iSW1hZ2UsLi4ucHJvZHVjdC5pbWFnZXNdfVxyXG4gICAgICAgICAgICAgICAgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX1cclxuICAgICAgICAgICAgLz46PENhcm91c2VsV2l0aEN1c3RvbURvdHNcclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtbJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dpc2VjYXJ0L2ltYWdlL3VwbG9hZC92MTYyMjM4NzkzOC9ud3hnbmVqMXg2eXZ1Z3JiOGx6di5wbmcnXX1cclxuICAgICAgICAgICAgICAgIGRldmljZVR5cGU9e2RldmljZVR5cGV9XHJcbiAgICAgICAgICAgIC8+fVxyXG5cclxuICAgICAgICAgIDwvUHJvZHVjdFByZXZpZXc+XHJcblxyXG4gICAgICAgICAgPFByb2R1Y3RJbmZvIGRpcj17J2x0cid9PlxyXG4gICAgICAgICAgICA8UHJvZHVjdFRpdGxlUHJpY2VXcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0VGl0bGU+e3Byb2R1Y3QubmFtZX08L1Byb2R1Y3RUaXRsZT5cclxuICAgICAgICAgICAgICA8UHJvZHVjdFByaWNlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRpc2NvdW50SW5QZXJjZW50ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTYWxlUHJpY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TYWxlUHJpY2U+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdFByaWNlPlxyXG4gICAgICAgICAgICAgICAgICB7c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICB7cHJvZHVjdC5zYWxlUHJpY2UgPyBwcm9kdWN0LnNhbGVQcmljZSA6IHByb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICAgICAgICA8L1Byb2R1Y3RQcmljZT5cclxuICAgICAgICAgICAgICA8L1Byb2R1Y3RQcmljZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvUHJvZHVjdFRpdGxlUHJpY2VXcmFwcGVyPlxyXG4gICAgICAgICAgICA8U3RhclJhdGluZyByYXRpbmc9ezR9Lz5cclxuICAgICAgICAgICAgey8qPFByb2R1Y3RXZWlnaHQ+e3Byb2R1Y3QudW5pdH08L1Byb2R1Y3RXZWlnaHQ+Ki99XHJcbiAgICAgICAgICAgIHsvKjxQcm9kdWN0RGVzY3JpcHRpb24gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHByb2R1Y3QuZGVzY3JpcHRpb259fS8+Ki99XHJcbiAgICAgICAgICAgIDxQcm9kdWN0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPFJlYWRNb3JlIGNoYXJhY3Rlcj17NjAwfSBtb3JlPXtcIlJlYWQgTW9yZVwifSBsZXNzPXtcIlNob3cgTGVzc1wifSB0ZXh0PXtwcm9kdWN0LmRlc2NyaXB0aW9ufS8+XHJcbiAgICAgICAgICAgIDwvUHJvZHVjdERlc2NyaXB0aW9uPlxyXG5cclxuICAgICAgICAgICAgPFByb2R1Y3RDYXJ0V3JhcHBlcj5cclxuICAgICAgICAgICAgICA8UHJvZHVjdENhcnRCdG4+XHJcbiAgICAgICAgICAgICAgICB7IWNhcnRRdWFudGl0eSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcnQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FydEljb24gbXI9ezJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FydFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8Q291bnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2FydFF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRlY3JlbWVudD17aGFuZGxlUmVtb3ZlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5jcmVtZW50PXtoYW5kbGVBZGRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgPC9Qcm9kdWN0Q2FydEJ0bj5cclxuICAgICAgICAgICAgPC9Qcm9kdWN0Q2FydFdyYXBwZXI+XHJcblxyXG4gICAgICAgICAgICA8UHJvZHVjdE1ldGE+XHJcbiAgICAgICAgICAgICAgPE1ldGFTaW5nbGU+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5jYXRlZ29yeSYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8/Y2F0ZWdvcnk9JHtwcm9kdWN0LmNhdGVnb3J5fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGxpbmstJHtwcm9kdWN0LmNhdGVnb3J5fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YUl0ZW0gY2F0ZWdvcnk9e3RydWV9Pntwcm9kdWN0LmNhdGVnb3J5fTwvTWV0YUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxBcnJvd05leHQvPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3Quc3ViQ2F0ZWdvcnkmJlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgLz9jYXRlZ29yeT0ke3Byb2R1Y3Quc3ViQ2F0ZWdvcnl9YH1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BsaW5rLSR7cHJvZHVjdC5zdWJDYXRlZ29yeX1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWV0YUl0ZW0gY2F0ZWdvcnk9e2ZhbHNlfT57cHJvZHVjdC5zdWJDYXRlZ29yeX08L01ldGFJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPn1cclxuICAgICAgICAgICAgICA8L01ldGFTaW5nbGU+XHJcbiAgICAgICAgICAgIDwvUHJvZHVjdE1ldGE+XHJcbiAgICAgICAgICA8L1Byb2R1Y3RJbmZvPlxyXG5cclxuICAgICAgICAgIDxQcm9kdWN0UHJldmlldz5cclxuICAgICAgICAgICAgPEJhY2tCdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICBpbnRsQnV0dG9uSWQ9XCJiYWNrQnRuXCJcclxuICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmMWYxZjEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzc3Nzk4YycsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGljb249ezxMb25nQXJyb3dMZWZ0IC8+fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtSb3V0ZXIuYmFja31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JhY2tCdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxXaXRoQ3VzdG9tRG90c1xyXG4gICAgICAgICAgICAgICAgaXRlbXM9e3Byb2R1Y3QuZ2FsbGVyeX1cclxuICAgICAgICAgICAgICAgIGRldmljZVR5cGU9e2RldmljZVR5cGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1Byb2R1Y3RQcmV2aWV3PlxyXG4gICAgICAgIDwvUHJvZHVjdERldGFpbHNXcmFwcGVyPlxyXG4gICAgICAgIDxSZXZpZXdDb21wb25lbnQvPlxyXG4gICAgICAgIDxSZWxhdGVkSXRlbXM+XHJcbiAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgIFJlbGF0ZWQgSXRlbXNcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8UHJvZHVjdHMvPlxyXG4gICAgICAgIDwvUmVsYXRlZEl0ZW1zPlxyXG4gICAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7RG91YmxlQ29udGFpbmVyLCBGaWVsZFdyYXBwZXIsIEhlYWRpbmd9IGZyb20gXCJAL2ZlYXR1cmVzL2NoZWNrb3V0cy9BZGRyZXNzLnN0eWxlXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiQC9jb21wb25lbnRzL090aGVycy9idXR0b24vYnV0dG9uXCI7XHJcbmltcG9ydCB7dXNlTG9naW5Gb3JtfSBmcm9tIFwiQC9ob29rcy91c2VMb2dpbkZvcm1cIjtcclxuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0L1N0YXJSYXRpbmdcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHt0aGVtZUdldH0gZnJvbSBcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiO1xyXG5jb25zdCBUZXh0QXJlYT1zdHlsZWQudGV4dGFyZWFgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuYFxyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIFxyXG4gIHBhZGRpbmc6IDQwcHggNjBweCAwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMzBweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFkZFJldmlldyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtpbnB1dHMsIGhhbmRsZUlucHV0Q2hhbmdlfSA9IHVzZUxvZ2luRm9ybSgpO1xyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8U3RhclJhdGluZyByYXRpbmc9ezR9IHNpemU9e1wiMjAlXCJ9Lz5cclxuICAgICAgICAgICAgPEZpZWxkV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgMiBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiYWRkcmVzczJcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMuYWRkcmVzczJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0ZpZWxkV3JhcHBlcj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzQ0cHgnfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWRkIHRoaXMgcmV2aWV3XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUmV2aWV3OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdC9TdGFyUmF0aW5nXCI7XHJcbmNvbnN0IFJldmlld0NhcmRDb250YWluZXI9c3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWF4LXdpZHRoOiA3MDlweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAwLjVweCAwcHg7XHJcbiAgYm94LXNoYWRvdzogI2VlZWVlZSAycHggMnB4IDJweCAycHg7XHJcbmBcclxuY29uc3QgUmV2aWV3SGVhZGVyPXN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO2BcclxuY29uc3QgTmFtZUdyb3VwPXN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IEluaXRpYWxzPXN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDU2YTZhO1xyXG5gXHJcbmNvbnN0IERlc2NyaXB0aW9uPXN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICMyYjJiMmI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDBweCA0NXB4O1xyXG5gXHJcbmNvbnN0IERldGFpbHM9c3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW46IDBweCA0NXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM4YzhhYTc7XHJcbmBcclxuY29uc3QgU2hhcmVHcm91cD1zdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjMTA0RDkyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFJldmlld0NhcmQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXZpZXdDYXJkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UmV2aWV3SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE5hbWVHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHM+QTwvSW5pdGlhbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QWxpY2UgQmFua3M8L3A+XHJcbiAgICAgICAgICAgICAgICA8L05hbWVHcm91cD5cclxuICAgICAgICAgICAgICAgIDxTdGFyUmF0aW5nIHJhdGluZz17NH0vPlxyXG4gICAgICAgICAgICA8L1Jldmlld0hlYWRlcj5cclxuICAgICAgICAgICAgPERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgVGhlIGRldmljZSBoYXMgYSBjbGVhbiBkZXNpZ24sIGFuZCB0aGUgbWV0YWwgaG91c2luZyBmZWVscyBzdHVyZHkgaW4gbXkgaGFuZHMuIFNvZnQgcm91bmRlZCBjb3JuZXJzIG1ha2VcclxuICAgICAgICAgICAgICAgIGl0IGEgcGxlYXN1cmUgdG8gbG9vayBhdC5cclxuICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPERldGFpbHM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1kYXRlXCI+RmViIDEzLCAyMDIxPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2hhcmVHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5TaGFyZTwvcD5cclxuICAgICAgICAgICAgICAgIDwvU2hhcmVHcm91cD5cclxuICAgICAgICAgICAgPC9EZXRhaWxzPlxyXG4gICAgICAgIDwvUmV2aWV3Q2FyZENvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdDYXJkOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGFnc1dyYXBwZXI9c3R5bGVkLmRpdmBcclxuICBtYXgtaGVpZ2h0OiAxMzBweDtcclxuICBtYXJnaW46IDM1cHg7XHJcblxyXG5gXHJcbi8vIGV4cG9ydCBjb25zdCBSZXZpZXdzV3JhcHBlcj1zdHlsZWQuZGl2YFxyXG4vLyAgIGhlaWdodDogNDE3cHg7XHJcbi8vXHJcbi8vXHJcbi8vIGBcclxuZXhwb3J0IGNvbnN0IFJldmlld3NDb250YWluZXI9c3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBcclxuYFxyXG5leHBvcnQgY29uc3QgUmV2aWV3Q29udGFpbmVyPXN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEFkZFJldmlld0NvbnRhaW5lcj1zdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBUYWdzSGVhZGVyPXN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcblxyXG5gXHJcbmV4cG9ydCBjb25zdCBUYWdzQ29udGFpbmVyPXN0eWxlZC5kaXZgXHJcbiAgLnRhZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGJhY2tncm91bmQ6ICMxZDFjMmQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBtYXJnaW46IDEwcHggM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICM4NzgwZjg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJldmlld0NhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0L2RldGFpbHMvUmV2aWV3L1Jldmlld0NhcmRcIjtcclxuaW1wb3J0IHtUYWdzQ29udGFpbmVyLCBUYWdzSGVhZGVyLCBUYWdzV3JhcHBlciwgUmV2aWV3c0NvbnRhaW5lciwgUmV2aWV3Q29udGFpbmVyLEFkZFJldmlld0NvbnRhaW5lcn0gZnJvbSAnLi9SZXZpZXdDb21wb25lbnQuc3R5bGUnO1xyXG5pbXBvcnQge1Jldmlld1RpdGxlfSBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3QvZGV0YWlscy9Qcm9kdWN0RGV0YWlscy5zdHlsZVwiO1xyXG5pbXBvcnQgQWRkUmV2aWV3IGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdC9kZXRhaWxzL1Jldmlldy9BZGRSZXZpZXdcIjtcclxuaW1wb3J0IHtTY3JvbGxiYXJ9IGZyb20gXCJAL2NvbXBvbmVudHMvU2Nyb2xsYmFyXCI7XHJcblxyXG5jb25zdCBSZXZpZXdDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXZpZXdzQ29udGFpbmVyPlxyXG4gICAgICAgIDxSZXZpZXdDb250YWluZXIgPlxyXG4gICAgICAgICAgICA8UmV2aWV3VGl0bGU+Q3VzdG9tZXIgcmV2aWV3czwvUmV2aWV3VGl0bGU+XHJcbiAgICAgICAgICAgIDxUYWdzV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxUYWdzSGVhZGVyPlRhZ3M8L1RhZ3NIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8VGFnc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ1wiPkV4cGVyaWVuY2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ1wiPlF1YWxpdHk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZyBzZWxlY3RlZFwiPkRlc2lnbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnXCI+U2l6ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnXCI+RmVhdHVyZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ1wiPlZhbHVlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdcIj5SZXBsYWNlbWVudDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWdzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L1RhZ3NXcmFwcGVyPlxyXG4gICAgICAgICAgICA8U2Nyb2xsYmFyIHN0eWxlPXt7aGVpZ2h0OlwiNDUwcHhcIix3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICA8UmV2aWV3Q2FyZC8+XHJcbiAgICAgICAgICAgIDxSZXZpZXdDYXJkLz5cclxuICAgICAgICAgICAgPFJldmlld0NhcmQvPlxyXG4gICAgICAgICAgICA8L1Njcm9sbGJhcj5cclxuICAgICAgICA8L1Jldmlld0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEFkZFJldmlld0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFJldmlld1RpdGxlPkFkZCBhIHJldmlldzwvUmV2aWV3VGl0bGU+XHJcbiAgICAgICAgICAgIDxBZGRSZXZpZXcvPlxyXG4gICAgICAgICAgICA8L0FkZFJldmlld0NvbnRhaW5lcj5cclxuICAgICAgICA8L1Jldmlld3NDb250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3Q29tcG9uZW50OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgUmVhZE1vcmVQcm9wcyA9IHtcclxuICBtb3JlPzogc3RyaW5nO1xyXG4gIGxlc3M/OiBzdHJpbmc7XHJcbiAgY2hhcmFjdGVyOiBudW1iZXI7XHJcbiAgdGV4dDphbnlcclxufTtcclxuXHJcbmNvbnN0IFJlYWRNb3JlOlJlYWN0LkZDPFJlYWRNb3JlUHJvcHM+PSAoeyB0ZXh0LCBtb3JlLCBsZXNzLCBjaGFyYWN0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVMaW5lcyA9IChldmVudDogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDsgfSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XHJcbiAgfTtcclxuICBjb25zdCBkYW5nZXJvdXNseVNldEhUTUw9KGh0bWwpPT57XHJcbiAgICByZXR1cm4gPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaHRtbH19Lz5cclxuXHJcbiAgfVxyXG5cclxuICBpZiAoIXRleHQpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7KHRleHQgJiYgdGV4dC5sZW5ndGggPCBjaGFyYWN0ZXIpIHx8IGV4cGFuZGVkXHJcbiAgICAgICAgPyBkYW5nZXJvdXNseVNldEhUTUwodGV4dClcclxuICAgICAgICA6IGRhbmdlcm91c2x5U2V0SFRNTCh0ZXh0LnN1YnN0cmluZygwLCBjaGFyYWN0ZXIpKX1cclxuICAgICAge3RleHQgJiYgdGV4dC5sZW5ndGggPiBjaGFyYWN0ZXIgJiYgIWV4cGFuZGVkICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTGluZXN9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjMDA5ZTdmJywgZm9udFdlaWdodDogNzAwIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bW9yZX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICB7dGV4dCAmJiB0ZXh0Lmxlbmd0aCA+IGNoYXJhY3RlciAmJiBleHBhbmRlZCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUxpbmVzfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzAwOWU3ZicsIGZvbnRXZWlnaHQ6IDcwMCB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xlc3N9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZWFkTW9yZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2hhcmFjdGVyOiAxNTAsXHJcbiAgbW9yZTogJ1JlYWQgbW9yZScsXHJcbiAgbGVzczogJ2xlc3MnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhZE1vcmU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RDYXJkICBmcm9tICcuLi9jYXJkL1Byb2R1Y3RJdGVtJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2xvYWRtb3JlLWJ1dHRvbic7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJy4vYm94JztcclxuXHJcbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcclxuXHJcbmltcG9ydCB7R3JpZH0gZnJvbSAnLi9Qcm9kdWN0R3JpZFN0eWxlcydcclxuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSBcIkAvaG9va3MvdXNlRmV0Y2hcIjtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGxvYWRNb3JlPzogYm9vbGVhbjtcclxuICAgIGZldGNoTGltaXQ/OiBudW1iZXI7XHJcbiAgICBzdHlsZT86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RHcmlkID0gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZSA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hMaW1pdCA9IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTogUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdXJsPSgpPT57XHJcbiAgICAgICAgY29uc3Qge2NhdGVnb3J5LHN1YkNhdGVnb3J5LHF1ZXJ5fT1yb3V0ZXIucXVlcnlcclxuICAgICAgICBpZihxdWVyeSl7XHJcbiAgICAgICAgICAgIGlmKGNhdGVnb3J5KXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5UXVlcnk9Y2F0ZWdvcnk/YGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YDonJ1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL3Byb2R1Y3RzL3NlYXJjaD9xdWVyeT0ke3F1ZXJ5fSYke2NhdGVnb3J5UXVlcnl9YFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9wcm9kdWN0cy9zZWFyY2g/cXVlcnk9JHtxdWVyeX1gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYXRlZ29yeSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5UXVlcnk9Y2F0ZWdvcnk/YGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YDonJ1xyXG4gICAgICAgICAgICBjb25zdCBzdWJjYXRlZ29yeVF1ZXJ5PXN1YkNhdGVnb3J5P2BzdWJDYXRlZ29yeT0ke3N1YkNhdGVnb3J5fWA6JydcclxuICAgICAgICAgICAgcmV0dXJuIGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL3Byb2R1Y3RzLz8ke2NhdGVnb3J5UXVlcnl9JiR7c3ViY2F0ZWdvcnlRdWVyeX1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9wcm9kdWN0cy9zaW1pbGFyL3Nhc2BcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBbZGF0YSwgaXNMb2FkaW5nXT11c2VGZXRjaCh1cmwoKSlcclxuXHJcbiAgICAvLyBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VQcm9kdWN0cyh7XHJcbiAgICAvLyAgICAgdHlwZSxcclxuICAgIC8vICAgICB0ZXh0OiByb3V0ZXIucXVlcnkudGV4dCxcclxuICAgIC8vICAgICBjYXRlZ29yeTogcm91dGVyLnF1ZXJ5LmNhdGVnb3J5LFxyXG4gICAgLy8gICAgIG9mZnNldDogMCxcclxuICAgIC8vICAgICBsaW1pdDogZmV0Y2hMaW1pdCxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBoYW5kbGVMb2FkTW9yZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIC8vIGF3YWl0IGZldGNoTW9yZShOdW1iZXIoZGF0YS5sZW5ndGgpLCBmZXRjaExpbWl0KTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZW5kZXJDYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQcm9kdWN0Q2FyZFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfSBpbWFnZT17cHJvcHMudGh1bWJJbWFnZX1cclxuICAgICAgICAgICAgICAgIHByaWNlPXtwcm9wcy5wcmljZX0ga2V5PXtwcm9wcy5faWR9IHByb2R1Y3Q9e3Byb3BzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCB7IGl0ZW1zLCBoYXNNb3JlIH0gPSBkYXRhLnByb2R1Y3RzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPEdyaWQgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmRhdGEubWFwKChwcm9kdWN0LCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJDYXJkKHByb2R1Y3QpXHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAge2xvYWRNb3JlICYmIGRhdGE/Lmhhc01vcmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEJveCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19IG10PXsnMnJlbSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9hZE1vcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3NlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj0nMXB4IHNvbGlkICNmMWYxZjEnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkIE1vcmVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RHcmlkIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbi8vIEB0cy1ub2NoZWNrXHJcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdihcclxuICAgIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgIGdyaWRHYXA6ICcxMHB4JyxcclxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDEsIG1pbm1heCgxODBweCwgMWZyKSknLFxyXG5cclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDQwcHgpJzoge1xyXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDIsIG1pbm1heCgxODBweCwgMWZyKSknLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCknOiB7XHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMywgbWlubWF4KDE4MHB4LCAxZnIpKScsXHJcbiAgICAgICAgICAgIGdyaWRHYXA6ICcyMHB4JyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpJzoge1xyXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDIsIG1pbm1heCgxODBweCwgMWZyKSknLFxyXG4gICAgICAgICAgICBncmlkR2FwOiAnMzBweCcsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMDBweCknOiB7XHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMywgbWlubWF4KDE4MHB4LCAxZnIpKScsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE3MDBweCknOiB7XHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoNCwgbWlubWF4KDI0MHB4LCAxZnIpKScsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIyMDBweCknOiB7XHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoNSwgbWlubWF4KDI0MHB4LCAxZnIpKScsXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuKTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBjb21wb3NlLFxuICBzcGFjZSxcbiAgY29sb3IsXG4gIGxheW91dCxcbiAgZmxleGJveCxcbiAgcG9zaXRpb24sXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdjxhbnk+KFxuICB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgbWluV2lkdGg6IDAsXG4gICAgbWFyZ2luOiAwLFxuICB9LFxuICBjb21wb3NlKHNwYWNlLCBjb2xvciwgbGF5b3V0LCBmbGV4Ym94LCBwb3NpdGlvbilcbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMsIGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBzeXN0ZW1Dc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcbmltcG9ydCB7IGNvbXBvc2UsIHZhcmlhbnQsIGJvcmRlciwgc3BhY2UsIGxheW91dCB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmRpdjxhbnk+KFxuICAocHJvcHMpID0+XG4gICAgc3lzdGVtQ3NzKHtcbiAgICAgIHB4OiAnMTVweCcsXG4gICAgICBweTogMCxcbiAgICAgIGZvbnRTaXplOiBbJ2Jhc2UnXSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGN1cnNvcjogcHJvcHMuZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gJ3RleHQubGlnaHQnIDogJ3doaXRlJyxcbiAgICAgIGJnOiBwcm9wcy5kaXNhYmxlZCA/ICdncmF5LjUwMCcgOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcbiAgICAgIGJvcmRlclJhZGl1czogJ2Jhc2UnLFxuXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gJ3RleHQubGlnaHQnIDogJ3doaXRlJyxcbiAgICAgICAgYmc6IHByb3BzLmRpc2FibGVkID8gJ2dyYXkuNTAwJyA6ICdwcmltYXJ5LmhvdmVyJyxcbiAgICAgIH0sXG4gICAgfSksXG4gIHtcbiAgICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMzhweCcsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgYm9yZGVyOiAwLFxuXG4gICAgJyY6Zm9jdXMnOiB7XG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbiAgdmFyaWFudCh7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIG91dGxpbmVkOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgYmc6ICd3aGl0ZScsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnZ3JheS41MDAnLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICAgIGJnOiAnd2hpdGUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJnOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgYmc6ICdwcmltYXJ5LmhvdmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICBiZzogJ3doaXRlJyxcbiAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdncmF5LjUwMCcsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGJnOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGV4dDoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXG4gICAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnkuaG92ZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICB3aWR0aDogMjYsXG4gICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiAndGV4dC5yZWd1bGFyJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxuICAgICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgJyYuc2VsZWN0ZWQnOiB7XG4gICAgICAgICAgYmc6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgfSxcbiAgICAgICAgJyY6aG92ZXI6bm90KC5zZWxlY3RlZCknOiB7XG4gICAgICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIHZhcmlhbnQoe1xuICAgIHByb3A6ICdzaXplJyxcbiAgICB2YXJpYW50czoge1xuICAgICAgYmlnOiB7XG4gICAgICAgIGhlaWdodDogJzQ4cHgnLFxuICAgICAgICBweDogMzAsXG4gICAgICB9LFxuICAgICAgc21hbGw6IHtcbiAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIGNvbXBvc2UoYm9yZGVyLCBzcGFjZSwgbGF5b3V0KVxuKTtcbmNvbnN0IHJvdGF0ZSA9IGtleWZyYW1lc2BcbiAgZnJvbSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxuICB0byB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG5gO1xuXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdihcbiAgKHByb3BzKSA9PlxuICAgIHN5c3RlbUNzcyh7XG4gICAgICB3aWR0aDogMTgsXG4gICAgICBoZWlnaHQ6IDE4LFxuICAgICAgbWFyZ2luTGVmdDogMTAsXG4gICAgICBib3JkZXI6ICczcHggc29saWQgd2hpdGUnLFxuICAgICAgYm9yZGVyVG9wOiBgM3B4IHNvbGlkICR7cHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6ICdwcmltYXJ5LnJlZ3VsYXInfWAsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiAndHJhbnNmb3JtJyxcbiAgICB9KSxcbiAgY3NzYFxuICAgIGFuaW1hdGlvbjogJHtyb3RhdGV9IDEuMnMgaW5maW5pdGUgbGluZWFyO1xuICBgXG4pO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICB0eXBlOiAnc3VibWl0JyB8ICdidXR0b24nO1xuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufTtcbmV4cG9ydCB0eXBlIFJlZiA9IEhUTUxEaXZFbGVtZW50O1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBQcm9wcz4oXG4gICh7IGNoaWxkcmVuLCBkaXNhYmxlZCwgbG9hZGluZyA9IGZhbHNlLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgICA8U3R5bGVkQnV0dG9uIHJlZj17cmVmfSB7Li4ucHJvcHN9IGRpc2FibGVkPXtkaXNhYmxlZH0gcm9sZT1cImJ1dHRvblwiPlxuICAgICAge2NoaWxkcmVufVxuICAgICAge2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XG4gICAgPC9TdHlsZWRCdXR0b24+XG4gIClcbik7XG4iLCJpbXBvcnQgeyBPdmVybGF5U2Nyb2xsYmFyc0NvbXBvbmVudCB9IGZyb20gJ292ZXJsYXlzY3JvbGxiYXJzLXJlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgJ292ZXJsYXlzY3JvbGxiYXJzL2Nzcy9PdmVybGF5U2Nyb2xsYmFycy5jc3MnO1xyXG5cclxudHlwZSBTY3JvbGxiYXJQcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBvcHRpb25zPzogYW55O1xyXG4gICAgc3R5bGU/OiBhbnk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2Nyb2xsYmFyOiBSZWFjdC5GQzxTY3JvbGxiYXJQcm9wcz4gPSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxPdmVybGF5U2Nyb2xsYmFyc0NvbXBvbmVudFxyXG4gICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzTmFtZX0gb3MtdGhlbWUtdGhpbmAsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0hpZGU6ICdsZWF2ZScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9PdmVybGF5U2Nyb2xsYmFyc0NvbXBvbmVudD5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XHJcbmltcG9ydCB7IHZhcmlhbnQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcclxuZXhwb3J0IGNvbnN0IENvdW50ZXJCb3ggPSBzdHlsZWQuZGl2PGFueT4oXHJcbiAgY3NzKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiAnYmFzZScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSksXHJcbiAgICB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDIwMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHZhcmlhbnQoe1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgaG9yaXpvbnRhbDoge1xyXG4gICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICBoZWlnaHQ6IDM2LFxyXG4gICAgICB9LFxyXG4gICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgIHdpZHRoOiAzMCxcclxuICAgICAgICBoZWlnaHQ6IDkwLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpZ2h0SG9yaXpvbnRhbDoge1xyXG4gICAgICAgIHdpZHRoOiAxMDQsXHJcbiAgICAgICAgaGVpZ2h0OiAzNixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5LjIwMCcsXHJcbiAgICAgICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgICB9LFxyXG4gICAgICBsaWdodFZlcnRpY2FsOiB7XHJcbiAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgIGhlaWdodDogOTAsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5LjIwMCcsXHJcbiAgICAgICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50ZXJCdXR0b24gPSBzdHlsZWQuYnV0dG9uPGFueT4oXHJcbiAge1xyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiAxMCxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgJyY6aG92ZXIsICY6Zm9jdXMnOiB7XHJcbiAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB2YXJpYW50KHtcclxuICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgIGxpZ2h0SG9yaXpvbnRhbDoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dC5yZWd1bGFyJyxcclxuICAgICAgfSxcclxuICAgICAgbGlnaHRWZXJ0aWNhbDoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dC5yZWd1bGFyJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudGVyVmFsdWUgPSBzdHlsZWQuc3Bhbih7XHJcbiAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxyXG59KTtcclxuQ291bnRlclZhbHVlLmRpc3BsYXlOYW1lID0gJ0NvdW50ZXJWYWx1ZSc7XHJcbkNvdW50ZXJCdXR0b24uZGlzcGxheU5hbWUgPSAnQ291bnRlckJ1dHRvbic7XHJcbkNvdW50ZXJCb3guZGlzcGxheU5hbWUgPSAnQ291bnRlckJveCc7XHJcbkNvdW50ZXJCb3guZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6ICdob3Jpem9udGFsJyxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUGx1cywgTWludXMgfSBmcm9tICdAL2Fzc2V0cy9pY29ucy9QbHVzTWludXMnO1xyXG5pbXBvcnQgeyBDb3VudGVyQm94LCBDb3VudGVyQnV0dG9uLCBDb3VudGVyVmFsdWUgfSBmcm9tICcuL2NvdW50ZXIuc3R5bGUnO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIG9uRGVjcmVtZW50OiAoZTogRXZlbnQpID0+IHZvaWQ7XHJcbiAgb25JbmNyZW1lbnQ6IChlOiBFdmVudCkgPT4gdm9pZDtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG4gIHZhcmlhbnQ/OiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBvbkRlY3JlbWVudCxcclxuICBvbkluY3JlbWVudCxcclxuICB2YWx1ZSxcclxuICB2YXJpYW50LFxyXG4gIGNsYXNzTmFtZSxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q291bnRlckJveCB2YXJpYW50PXt2YXJpYW50fSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIDxDb3VudGVyQnV0dG9uIG9uQ2xpY2s9e29uRGVjcmVtZW50fSB2YXJpYW50PXt2YXJpYW50fT5cclxuICAgICAgICA8TWludXMgLz5cclxuICAgICAgPC9Db3VudGVyQnV0dG9uPlxyXG4gICAgICA8Q291bnRlclZhbHVlPnt2YWx1ZX08L0NvdW50ZXJWYWx1ZT5cclxuICAgICAgPENvdW50ZXJCdXR0b24gb25DbGljaz17b25JbmNyZW1lbnR9IHZhcmlhbnQ9e3ZhcmlhbnR9PlxyXG4gICAgICAgIDxQbHVzIC8+XHJcbiAgICAgIDwvQ291bnRlckJ1dHRvbj5cclxuICAgIDwvQ291bnRlckJveD5cclxuICApO1xyXG59O1xyXG4iLCJjb25zdCBDb252ZXJ0Q3VycmVuY3k9KGRhdGEscHJpY2UsZnJvbT0nR0JQJyx0byk9PntcclxuICAgIGxldCBjb252ZXJ0ZWRQcmljZT0wXHJcbiAgICBpZih0bz09PSdHQlAnKXtcclxuICAgICAgICBjb252ZXJ0ZWRQcmljZT1wcmljZVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zdCBwYXJhbT0nR0JQLycrdG9cclxuICAgICAgICBjb25zdCBjdXJyZW5jeURhdGE9ZGF0YVtwYXJhbVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgY29udmVydGVkUHJpY2U9cHJpY2UqY3VycmVuY3lEYXRhLnJhdGVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29udmVydGVkUHJpY2UudG9GaXhlZCgyKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb252ZXJ0Q3VycmVuY3k7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmNvbnN0IENhcnRQb3B1cEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMzg1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcnQtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDVweCk7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDMzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBvcHVwSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuNTAwJywgJyNmMWYxZjEnKX07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9wdXBJdGVtQ291bnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnJlZCcsICcjZWE0ZDRhJyl9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkQ2FydENsb3NlIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtQ2FyZHMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbUltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtRGV0YWlscyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1UaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbVdlaWdodCA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuYDtcclxuXHJcbmNvbnN0IFRvdGFsUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2VhNGQ0YTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9tb0NvZGUgPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICA+IGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMzVzIGVhc2U7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LmhvdmVyJywgJyMwMTkzNzYnKX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiA0OHB4O1xyXG4gIGJveC1zaGFkb3c6ICR7dGhlbWVHZXQoJ3NoYWRvd3MuYmFzZScsICcwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogbWFyZ2luLXRvcDogYXV0bzsgKi9cclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICB9XHJcblxyXG4gID4gYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENoZWNrb3V0QnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5hYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IFByaWNlQm94ID0gc3R5bGVkLnBgXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTm9Qcm9kdWN0TXNnID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNDBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Byb2R1Y3RJbWcgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb3Vwb25Cb3hXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDAgMjJweCAwIDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb3Vwb25Db2RlID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLm1lZGl1bScsICc1MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFcnJvck1zZyA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggLSAxcHgpO1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnNlY29uZGFyeS5ob3ZlcicsICcjRkYyODJGJyl9O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJ0U2xpZGVQb3B1cCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQyMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogLTQ1MHB4O1xyXG4gIHotaW5kZXg6IDEwMTA7XHJcbiAgYm94LXNoYWRvdzogJHt0aGVtZUdldCgnc2hhZG93cy5iaWcnLCAnMCAyMXB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU4MXB4KSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICYuY2FydFBvcHVwRml4ZWQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAke0NhcnRQb3B1cEJvZHl9IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJHtJdGVtV3JhcHBlcn0ge1xyXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQwcHgpOyAqL1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI0NXB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIH1cclxuXHJcbiAgJHtJdGVtQ2FyZHN9IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4yMDAnLCAnI2Y3ZjdmNycpfTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICR7UG9wdXBIZWFkZXJ9IHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgICR7Q2xvc2VCdXR0b259IHtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ2FydFNsaWRlUG9wdXAsXHJcbiAgQ2FydFBvcHVwQm9keSxcclxuICBQb3B1cEhlYWRlcixcclxuICBQb3B1cEl0ZW1Db3VudCxcclxuICBQcm9tb0NvZGUsXHJcbiAgQ2xvc2VCdXR0b24sXHJcbiAgSXRlbUNhcmRzLFxyXG4gIEl0ZW1JbWdXcmFwcGVyLFxyXG4gIEl0ZW1EZXRhaWxzLFxyXG4gIEl0ZW1UaXRsZSxcclxuICBJdGVtUHJpY2UsXHJcbiAgSXRlbVdlaWdodCxcclxuICBUb3RhbFByaWNlLFxyXG4gIERlbGV0ZUJ1dHRvbixcclxuICBDaGVja291dEJ1dHRvbixcclxuICBDaGVja291dEJ1dHRvbldyYXBwZXIsXHJcbiAgVGl0bGUsXHJcbiAgUHJpY2VCb3gsXHJcbiAgTm9Qcm9kdWN0TXNnLFxyXG4gIEl0ZW1XcmFwcGVyLFxyXG4gIENvdXBvbkJveFdyYXBwZXIsXHJcbiAgQ291cG9uQ29kZSxcclxuICBFcnJvck1zZyxcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmNvbnN0IEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbmA7XHJcbmNvbnN0IERvdWJsZUNvbnRhaW5lcj1zdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcbmNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250RmFtaWx5LmhlYWRpbmcnLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5tZCcsICcxOScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgeyBGaWVsZFdyYXBwZXIsIEhlYWRpbmcsRG91YmxlQ29udGFpbmVyIH07XHJcbiIsIlxyXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgaW5zdGFuY2U6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJy8nLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlcXVlc3RIYW5kbGVyID0gKGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnKSA9PiB7XHJcbiAgICAvLyBNb2RpZnkgY29uZmlnIGhlcmVcclxuICAgIC8vIGlmIChhdXRoLmdldFRva2VuKCkpIHtcclxuICAgIC8vICAgLy8gY29uZmlnLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHthdXRoLmdldFRva2VuKCl9YDtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25maWcudGltZW91dCA9IDMwMDAwO1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufTtcclxuXHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXF1ZXN0SGFuZGxlcik7XHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodW5kZWZpbmVkLCAoZXJyb3I6IEF4aW9zRXJyb3IpID0+IHtcclxuICAgIC8vIGhhbmRsZSBlcnJvclxyXG4gICAgaWYgKGF4aW9zLmlzQ2FuY2VsKGVycm9yKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGByZXF1ZXN0IGNhbmNlbGxlZGApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvcik7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaHR0cCBmcm9tICcuL2h0dHBJbnN0YW5jZSc7XHJcbmltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcyc7XHJcblxyXG5pbnRlcmZhY2UgbWVtU3RvcmVUeXBlcyB7XHJcbiAgICBbeDogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcbmNvbnN0IG1lbVN0b3JlOiBtZW1TdG9yZVR5cGVzID0ge307XHJcblxyXG5pbnRlcmZhY2UgdXNlRmV0Y2hQcm9wcyB7XHJcbiAgICAoXHJcbiAgICAgICAgdXJsOiBzdHJpbmcsXHJcbiAgICAgICAgcHJvcHM/OiB7XHJcbiAgICAgICAgICAgIGNhY2hlPzogYm9vbGVhbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF4aW9zT3B0aW9ucz86IEF4aW9zUmVxdWVzdENvbmZpZ1xyXG4gICAgKTogW2FueSwgYm9vbGVhbiwgYW55LCBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjx7fT4+XTtcclxufVxyXG5cclxuY29uc3QgdXNlRmV0Y2g6IHVzZUZldGNoUHJvcHMgPSAodXJsLCBwcm9wcyA9IHt9LCBheGlvc09wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8YW55PihudWxsKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcbiAgICBjb25zdCBbc2hvdWxkUmVmZXRjaCwgcmVGZXRjaF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgdW5tb3VudGVkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNvdXJjZSA9IGF4aW9zLkNhbmNlbFRva2VuLnNvdXJjZSgpO1xyXG4gICAgICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCBodHRwQ29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5heGlvc09wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVG9rZW46IHNvdXJjZS50b2tlblxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBodHRwKGh0dHBDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1bm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5jYWNoZSkgbWVtU3RvcmVbdXJsXSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdW5tb3VudGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG1lbVN0b3JlW3VybF0gJiYgIXVubW91bnRlZCkge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXREYXRhKG1lbVN0b3JlW3VybF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdldERhdGEoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHVubW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNvdXJjZS5jYW5jZWwoYCR7dXJsfSBjYW5jZWxlZGApO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXJsLCBzaG91bGRSZWZldGNoXSk7XHJcblxyXG4gICAgcmV0dXJuIFtkYXRhLCBpc0xvYWRpbmcsIGVycm9yLCByZUZldGNoXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUZldGNoO1xyXG4iLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuY29uc3QgdXNlTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlPGFueT4oe30pO1xyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xyXG4gICAgICAgIHNldElucHV0cygoaW5wdXRzOiBhbnkpID0+ICh7Li4uaW5wdXRzLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlLFxyXG4gICAgICAgIGlucHV0c1xyXG4gICAgfTtcclxufVxyXG5leHBvcnQge3VzZUxvZ2luRm9ybX0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgeyBTRU8gfSBmcm9tICdAL2NvbXBvbmVudHMvT3RoZXJzL3Nlbyc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnQHJlZHEvcmV1c2UtbW9kYWwnO1xyXG5pbXBvcnQgUHJvZHVjdFNpbmdsZVdyYXBwZXIsIHtcclxuICAgIFByb2R1Y3RTaW5nbGVDb250YWluZXIsXHJcbn0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3Byb2R1Y3Qtc3R5bGUnO1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L2xheW91dFwiO1xyXG5pbXBvcnQgUHJvZHVjdE5vdEZvdW5kIGZyb20gXCJAL2NvbXBvbmVudHMvNDA0L1Byb2R1Y3ROb3RGb3VuZFwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0L2RldGFpbHMvUHJvZHVjdERldGFpbHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5jb25zdCBDYXJ0UG9wVXAgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnZmVhdHVyZXMvY2FydC9jYXJ0LXBvcHVwJyksIHtcclxuICAgIHNzcjogZmFsc2UsXHJcbn0pO1xyXG50eXBlIFByb3BzID0ge1xyXG4gICAgZGV2aWNlVHlwZT86IHtcclxuICAgICAgICBtb2JpbGU6IGJvb2xlYW47XHJcbiAgICAgICAgdGFibGV0OiBib29sZWFuO1xyXG4gICAgICAgIGRlc2t0b3A6IGJvb2xlYW47XHJcbiAgICB9O1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59O1xyXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsOnN0cmluZykgPT4gYXdhaXQgYXhpb3MuZ2V0KHVybClcclxuICAgIC50aGVuKHJlcyA9PiAoe1xyXG4gICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhLFxyXG4gICAgfSkpXHJcbiAgICAuY2F0Y2goKCkgPT4gKHtcclxuICAgICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgfSksXHJcbiAgICApO1xyXG5cclxuY29uc3QgUHJvZHVjdFBhZ2U6IE5leHRQYWdlPFByb3BzPiA9ICh7IGRldmljZVR5cGUsZGF0YSB9KSA9PiB7XHJcbiAgICAvLyBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICAgIC8vIGNvbnN0IFt7ZGF0YSwgbG9hZGluZywgZXJyb3J9XSA9IHVzZUF4aW9zKFxyXG4gICAgLy8gICAgIGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL3Byb2R1Y3RzL3NpbmdsZS8ke3F1ZXJ5LnNsdWd9YFxyXG4gICAgLy8gKVxyXG4gICAgLy8gaWYobG9hZGluZyl7XHJcbiAgICAvLyAgICAgcmV0dXJuIDxJdGVtTG9hZGVyLz5cclxuICAgIC8vIH1cclxuICAgIGlmKCFkYXRhLmRhdGEpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFNFT1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgNDA0IE5vdCBGb3VuZGB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2BUaGUgcGFnZSBkb2Vzbid0IGV4aXN0YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdE5vdEZvdW5kLz5cclxuXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGxldCBjb250ZW50ID0gKFxyXG4gICAgICAgIDxQcm9kdWN0RGV0YWlscyBwcm9kdWN0PXtkYXRhLmRhdGF9IGRldmljZVR5cGU9e2RldmljZVR5cGV9IC8+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U0VPXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17YCR7ZGF0YS5kYXRhLm5hbWV9IC0gV2lzZUNhcnRgfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Ake2RhdGEuZGF0YS5uYW1lfSBEZXRhaWxzYH1cclxuICAgICAgICAgICAgICAgIGltYWdlPXtkYXRhLmRhdGEudGh1bWJJbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPE1vZGFsPlxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RTaW5nbGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0U2luZ2xlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRQb3BVcCBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJvZHVjdFNpbmdsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvUHJvZHVjdFNpbmdsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL3Byb2R1Y3RzL3NpbmdsZS8ke3BhcmFtcy5zbHVnfWApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQYWdlOyIsImltcG9ydCB7IENBUlQgfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0OmFueSwgcXVhbnRpdHk6bnVtYmVyLCBjb2xvcj86c3RyaW5nLCBzaXplPzpzdHJpbmcpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5BRERfVE9fQ0FSVCxcclxuICBwcm9kdWN0LFxyXG4gIHF1YW50aXR5LFxyXG4gIGNvbG9yLFxyXG4gIHNpemUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKGNhcnRJZDpzdHJpbmcpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5SRU1PVkVfRlJPTV9DQVJULFxyXG4gIGNhcnRJZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQWxsRnJvbUNhcnQgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuUkVNT1ZFX0FMTF9GUk9NX0NBUlQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3JlYXNlUXVhbnRpdHlDYXJ0ID0gKGNhcnRJZDpzdHJpbmcpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5ERUNSRUFTRV9RVUFOVElUWV9DQVJULFxyXG4gIGNhcnRJZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5jcmVhc2VRdWFudGl0eUNhcnQgPSAoY2FydElkOnN0cmluZykgPT4gKHtcclxuICB0eXBlOiBDQVJULklOQ1JFQVNFX1FVQU5USVRZX0NBUlQsXHJcbiAgY2FydElkLFxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IEdMT0JBTCA9IHtcclxuICBTRVRfTEFOR1VBR0U6IFwiU0VUX0xBTkdVQUdFXCIsXHJcbiAgU0VUX0NVUlJFTkNZOiBcIlNFVF9DVVJSRU5DWVwiLFxyXG4gIFNFVF9DQVRFR09SWTogXCJTRVRfQ0FURUdPUllcIixcclxuICBTRVRfU0VBUkNIOiBcIlNFVF9TRUFSQ0hcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDQVJUID0ge1xyXG4gIEFERF9UT19DQVJUOiBcIkFERF9UT19DQVJUXCIsXHJcbiAgUkVNT1ZFX0ZST01fQ0FSVDogXCJSRU1PVkVfRlJPTV9DQVJUXCIsXHJcbiAgUkVNT1ZFX0FMTF9GUk9NX0NBUlQ6IFwiUkVNT1ZFX0FMTF9GUk9NX0NBUlRcIixcclxuICBERUNSRUFTRV9RVUFOVElUWV9DQVJUOiBcIkRFQ1JFQVNFX1FVQU5USVRZX0NBUlRcIixcclxuICBJTkNSRUFTRV9RVUFOVElUWV9DQVJUOiBcIklOQ1JFQVNFX1FVQU5USVRZX0NBUlRcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXSVNITElTVCA9IHtcclxuICBBRERfVE9fV0lTSExJU1Q6IFwiQUREX1RPX1dJU0hMSVNUXCIsXHJcbiAgUkVNT1ZFX0ZST01fV0lTSExJU1Q6IFwiUkVNT1ZFX0ZST01fV0lTSExJU1RcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9QID0ge1xyXG4gIFNFVF9TT1JUOiBcIlNFVF9TT1JUXCIsXHJcbiAgU0VUX1NVQkNBVEVHT1JZOiBcIlNFVF9TVUJDQVRFR09SWVwiLFxyXG4gIFNFVF9DQVRFR09SWTogXCJTRVRfQ0FURUdPUllcIixcclxuICBTRVRfQ0FURUdPUllfREFUQTogXCJTRVRfQ0FURUdPUllfREFUQVwiLFxyXG4gIFNFVF9DVVJSRU5DWTogXCJTRVRfQ1VSUkVOQ1lcIixcclxuICBTRVRfQUREUkVTUzogXCJTRVRfQUREUkVTU1wiLFxyXG4gIFNFVF9CSUxMSU5HOiBcIlNFVF9CSUxMSU5HXCIsXHJcbiAgU0VUX0NBUkQ6IFwiU0VUX0NBUkRcIixcclxuICBTRVRfQ1VSUkVOQ1lfREFUQTogXCJTRVRfQ1VSUkVOQ1lfREFUQVwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgRk9STSA9IHtcclxuICBTRVRfQ1VSUkVOVF9GT1JNOiBcIlNFVF9DVVJSRU5UX0ZPUk1cIixcclxufTtcclxuZXhwb3J0IGNvbnN0IEFVVEggPSB7XHJcbiAgTE9HX0lOOiBcIkxPR19JTlwiLFxyXG4gIExPR19JTl9FUlJPUjogXCJMT0dfSU5fRVJST1JcIixcclxuICBTSUdOX1VQX0VSUk9SOlwiU0lHTl9VUF9FUlJPUlwiLFxyXG4gIFNJR05fVVA6XCJTSUdOX1VQXCIsXHJcbiAgTE9HX09VVDpcIkxPR19PVVRcIixcclxuICBMT0FEX1VTRVI6XCJMT0FEX1VTRVJcIixcclxuICBMT0FEX1VTRVJfRkFJTDpcIkxPQURfVVNFUl9GQUlMXCIsXHJcbiAgT1JERVJfU1VDQ0VTUzpcIk9SREVSX1NVQ0NFU1NcIixcclxuICBPUkRFUl9TVUNDRVNTX0ZBSUw6XCJPUkRFUl9TVUNDRVNTX0ZBSUxcIixcclxufTtcclxuZXhwb3J0IGludGVyZmFjZSBDYXJ0QWN0aW9uT2JqZWN0IHtcclxuICB0eXBlOnN0cmluZyxcclxuICBwcm9kdWN0OnN0cmluZyxcclxuICBxdWFudGl0eTpOdW1iZXIsXHJcbiAgY29sb3I6c3RyaW5nLFxyXG4gIHNpemU6c3RyaW5nLFxyXG5cclxufVxyXG4iLCJcclxuXHJcbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVUb3RhbFByaWNlID0gKGFycjpbYW55XSkgPT4ge1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uZGlzY291bnQpIHtcclxuICAgICAgICAgICAgdG90YWwgKz0gaXRlbS5jYXJ0UXVhbnRpdHlcclxuICAgICAgICAgICAgICAgID8gKGl0ZW0ucHJpY2UgLSBpdGVtLmRpc2NvdW50KSAqIGl0ZW0uY2FydFF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICA6IGl0ZW0ucHJpY2UgLSBpdGVtLmRpc2NvdW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGl0ZW0uY2FydFF1YW50aXR5ID8gaXRlbS5wcmljZSAqIGl0ZW0uY2FydFF1YW50aXR5IDogaXRlbS5wcmljZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b3RhbDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGlzSW5DYXJ0PShhcnI6W2FueV0saWQpPT57XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0SXRlbUNhcnRRdHkgPSAoYXJyOlthbnldLGlkOnN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgaXRlbT1hcnIuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xyXG4gICAgcmV0dXJuIGl0ZW0/LmNhcnRRdWFudGl0eT9pdGVtLmNhcnRRdWFudGl0eTpudWxsXHJcbn07IiwiZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTD0naHR0cDovL2xvY2FsaG9zdDo1MDAwJ1xyXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQ2xvdWRpbmFyeUltYWdlPSh1cmwsd2lkdGgsaGVpZ2h0KT0+e1xyXG4gICAgLy8gaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2lzZWNhcnQvaW1hZ2UvdXBsb2FkL3dfMTUwLGhfMzAwLGNfZmlsbC92MTYxNzQ0MTk3MS9yZTNsZjBiZW94ZHJ3NGhkcWJlYi5wbmdcclxuICAgIGNvbnN0W2ZpcnN0LGxhc3RdPXVybC5zcGxpdCgnL3VwbG9hZC8nKVxyXG4gICAgcmV0dXJuIGZpcnN0K2AvdXBsb2FkL3dfJHt3aWR0aH0saF8ke2hlaWdodH0sY19maWxsL2ArbGFzdFxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmNvbnN0IFByb2R1Y3RTaW5nbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiA3OHB4IDAgNjBweCAwO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogODlweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFNpbmdsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUmVsYXRlZEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OTBweCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTcuNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNy41cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlYWxhdGVkSXRlbUNvbCA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMCAwIDIwJTtcclxuICBtYXgtd2lkdGg6IDIwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIGZsZXg6IDAgMCAyMCU7XHJcbiAgICBtYXgtd2lkdGg6IDIwJTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgZmxleDogMCAwIDMzLjMzMzMzMzMlO1xyXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzJTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmctbGVmdDogNy41cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3LjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZmxleDogMCAwIDUwJTtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkaW5nID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTVweCcpfSAtIDFweCk7XHJcbiAgY29sb3I6ICMyMjIyMjI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U2luZ2xlV3JhcHBlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkcS9yZXVzZS1tb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLXN5c3RlbS9jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxpZ2h0LXRvYXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3ZlcmxheXNjcm9sbGJhcnMtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW1hZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1zeXN0ZW1cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==