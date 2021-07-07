(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./node_modules/light-toast/dist/index.es.js":
/*!***************************************************!*\
  !*** ./node_modules/light-toast/dist/index.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



var EventManager = /** @class */ (function () {
    function EventManager() {
        this._events = {};
        this._publishedEvents = [];
        this._uniqueId = 0; // use self increasing number to guarantee global uniqueness
    }
    EventManager.prototype.subscribe = function (name, callback) {
        if (!this._events[name]) {
            this._events[name] = [];
        }
        var event = { key: this._uniqueId++, callback: callback };
        this._events[name].push(event);
        return event.key;
    };
    EventManager.prototype.publish = function (name, data) {
        this._publishedEvents.push({ name: name, data: data });
        if (this._events[name]) {
            this._events[name].forEach(function (_a) {
                var callback = _a.callback;
                callback(data);
            });
        }
    };
    EventManager.prototype.unSubscribe = function (name, key) {
        if (this._events[name]) {
            for (var i = 0; i < this._events[name].length; i++) {
                if (key === this._events[name][i].key) {
                    this._events[name].splice(i, 1);
                    break;
                }
            }
        }
    };
    // Make sure published events can be triggered when subscribed
    EventManager.prototype.ensureTriggeredAndSubscribe = function (name, callback) {
        var event = this._publishedEvents
            .slice()
            .reverse()
            .find(function (item) { return item.name === name; });
        if (event) {
            callback(event.data);
        }
        return this.subscribe(name, callback);
    };
    return EventManager;
}());
var eventManager = new EventManager();

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".style_mask__9zmSN{position:fixed;top:0;right:0;bottom:0;left:0;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;background:transparent;z-index:1999}.style_box__2iia4{display:inline-block;max-width:85%;min-width:95px;padding:9px 15px;box-sizing:border-box;text-align:center;word-break:break-all;white-space:pre-wrap;font-size:0;color:#fff;background-color:rgba(58,58,58,.9);border-radius:3px;opacity:0;-webkit-transform:scale(.9);transform:scale(.9);-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,transform .3s;transition:opacity .3s,transform .3s,-webkit-transform .3s}.style_enter__29LyQ{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.style_exit__3WYmp{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}.style_message__1DUXc{line-height:1.5;font-size:14px}.style_wrapper__cQFyX{margin:0 auto 7px;width:36px;height:36px}.style_loading__2pb7J{-webkit-animation:style_loading__2pb7J 1s linear infinite;animation:style_loading__2pb7J 1s linear infinite}@-webkit-keyframes style_loading__2pb7J{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes style_loading__2pb7J{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}";
var styles = {"mask":"style_mask__9zmSN","box":"style_box__2iia4","enter":"style_enter__29LyQ","exit":"style_exit__3WYmp","message":"style_message__1DUXc","wrapper":"style_wrapper__cQFyX","loading":"style_loading__2pb7J"};
styleInject(css_248z);

var Icon = function (_a) {
    var type = _a.type;
    switch (type) {
        case 'success':
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { viewBox: "0 0 1024 1024", fill: "#fff" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" })));
        case 'fail':
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { viewBox: "0 0 1024 1024", fill: "#fff" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" })));
        case 'loading':
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { viewBox: "0 0 1024 1024", fill: "#fff", className: styles.loading },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" })));
    }
};

var Toast = function (_a) {
    var id = _a.id, type = _a.type, content = _a.content, _b = _a.duration, duration = _b === void 0 ? 3000 : _b, onClose = _a.onClose;
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(styles.box), classes = _c[0], setClasses = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), entered = _d[0], setEntered = _d[1];
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    function exit() {
        setClasses(function () { return styles.box + " " + styles.exit; });
    }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        // force a repaint
        // eslint-disable-next-line
        ref.current && ref.current.scrollTop;
        setClasses(function (prev) { return prev + " " + styles.enter; });
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var key = -1;
        var timerId = -1;
        if (entered) {
            // component mounting is async, there might be an exit command before a toast mounts
            // so we should make sure to trigger the published exit event
            key = eventManager.ensureTriggeredAndSubscribe('lt#exit', function (messageId) {
                if (messageId === id) {
                    exit();
                }
            });
            if (duration !== 0) {
                timerId = window.setTimeout(exit, duration);
            }
        }
        return function () {
            eventManager.unSubscribe('lt#exit', key);
            window.clearTimeout(timerId);
        };
    }, [id, duration, entered]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: styles.mask },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes, style: type === 'info' ? undefined : { padding: 15, borderRadius: 5 }, onTransitionEnd: function () {
                // enter phase
                if (~classes.indexOf(styles.enter)) {
                    setEntered(true);
                }
                // exit phase
                if (~classes.indexOf(styles.exit)) {
                    onClose();
                }
            }, ref: ref },
            type !== 'info' && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: styles.wrapper, style: type === 'loading' ? { marginBottom: 10 } : undefined },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, { type: type }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: styles.message }, content))));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * Message queue.
 * Save messages in a queue, only remove it when component lifecycle ends.
 */
var Queue = /** @class */ (function () {
    function Queue() {
        this._messages = [];
        this._uniqueId = 0;
    }
    Queue.prototype.push = function (message) {
        this._messages.push(__assign({ id: this._uniqueId++ }, message));
    };
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this._messages.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.getFirstMessage = function () {
        return this._messages[0];
    };
    Queue.prototype.shift = function () {
        return this._messages.shift();
    };
    return Queue;
}());

var queue = new Queue();
eventManager.subscribe('lt#popmessage', function (_a) {
    var id = _a.id, type = _a.type, content = _a.content, duration = _a.duration, onClose = _a.onClose;
    var container = document.createElement('div');
    document.body.appendChild(container);
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Toast, { id: id, type: type, content: content, duration: duration, onClose: function () {
            react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(container);
            document.body.removeChild(container);
            onClose && onClose();
            queue.shift();
            if (queue.length > 0) {
                eventManager.publish('lt#popmessage', queue.getFirstMessage());
            }
        } }), container);
});
function notice(type, content, duration, onClose) {
    queue.push({ type: type, content: content, duration: duration, onClose: onClose });
    // toast right now if there is only one message in queue
    if (queue.length === 1) {
        eventManager.publish('lt#popmessage', queue.getFirstMessage());
        return;
    }
    // if current message is loading, then we should unmount it to proceed
    if (queue.length > 1) {
        var message = queue.getFirstMessage();
        if (message.type === 'loading') {
            eventManager.publish('lt#exit', message.id);
        }
    }
}
var index = {
    info: function (content, duration, onClose) {
        notice('info', content, duration, onClose);
    },
    success: function (content, duration, onClose) {
        notice('success', content, duration, onClose);
    },
    fail: function (content, duration, onClose) {
        notice('fail', content, duration, onClose);
    },
    loading: function (content, onClose) {
        notice('loading', content, 0, onClose);
    },
    hide: function () {
        // hide the first toast in the queue when executing the command
        if (queue.length > 0) {
            eventManager.publish('lt#exit', queue.getFirstMessage().id);
        }
    },
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./src/OpenModalFunctions.tsx":
/*!************************************!*\
  !*** ./src/OpenModalFunctions.tsx ***!
  \************************************/
/*! exports provided: OpenAuthTab, OpenCartModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenAuthTab", function() { return OpenAuthTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCartModal", function() { return OpenCartModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_authentication_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/features/authentication-form */ "./src/features/authentication-form/index.tsx");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redq/reuse-modal */ "./node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var _features_cart_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/features/cart/cart */ "./src/features/cart/cart.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\OpenModalFunctions.tsx",
    _this = undefined;





var OpenAuthTab = function OpenAuthTab() {
  return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["openModal"])({
    show: true,
    overlayClassName: 'quick-view-overlay',
    closeOnClickOutside: true,
    component: _features_authentication_form__WEBPACK_IMPORTED_MODULE_1__["default"],
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
_c = OpenAuthTab;
var OpenCartModal = function OpenCartModal() {
  return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["openModal"])({
    show: true,
    config: {
      className: 'cartPopup',
      width: 'auto',
      height: 'auto',
      enableResizing: false,
      disableDragging: true,
      transition: {
        tension: 360,
        friction: 40
      }
    },
    closeOnClickOutside: true,
    component: _features_cart_cart__WEBPACK_IMPORTED_MODULE_3__["default"],
    closeComponent: function closeComponent() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 27
      }, _this);
    },
    componentProps: {
      onCloseBtnClick: _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["closeModal"],
      scrollbarHeight: 330
    }
  });
};
_c2 = OpenCartModal;

var _c, _c2;

$RefreshReg$(_c, "OpenAuthTab");
$RefreshReg$(_c2, "OpenCartModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/assets/icons/CloseIcon.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/CloseIcon.tsx ***!
  \****************************************/
/*! exports provided: CloseIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\CloseIcon.tsx",
    _this = undefined;


var CloseIcon = function CloseIcon() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10.003",
    height: "10",
    viewBox: "0 0 10.003 10",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      "data-name": "_ionicons_svg_ios-close (5)",
      d: "M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z",
      transform: "translate(-160.5 -160.55)",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};
_c = CloseIcon;

var _c;

$RefreshReg$(_c, "CloseIcon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/assets/icons/Facebook.tsx":
/*!***************************************!*\
  !*** ./src/assets/icons/Facebook.tsx ***!
  \***************************************/
/*! exports provided: Facebook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\Facebook.tsx",
    _this = undefined;


var Facebook = function Facebook(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '17px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '17px' : _ref$height;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 17 17",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      "data-name": "_ionicons_svg_logo-facebook (1)",
      d: "M80.061,64H64.939a.939.939,0,0,0-.939.939V80.061a.939.939,0,0,0,.939.939H72.5V74.271H70.468V71.792H72.5V69.959a3.23,3.23,0,0,1,3.484-3.391c.939,0,1.948.071,2.183.1v2.293H76.6c-1.067,0-1.271.5-1.271,1.248v1.58h2.541l-.332,2.479H75.333V81h4.728A.939.939,0,0,0,81,80.061V64.939A.939.939,0,0,0,80.061,64Z",
      transform: "translate(-64 -64)",
      fill: color
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};
_c = Facebook;

var _c;

$RefreshReg$(_c, "Facebook");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/assets/icons/Google.tsx":
/*!*************************************!*\
  !*** ./src/assets/icons/Google.tsx ***!
  \*************************************/
/*! exports provided: Google */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Google", function() { return Google; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\Google.tsx",
    _this = undefined;


var Google = function Google(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '17px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '17px' : _ref$height;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16.677 17",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M68.579,55.29l-.086-.364H60.584v3.348h4.725a4.73,4.73,0,0,1-4.627,3.556,5.533,5.533,0,0,1-3.724-1.484,5.316,5.316,0,0,1-1.586-3.752,5.483,5.483,0,0,1,1.557-3.748,5.3,5.3,0,0,1,3.7-1.447,4.825,4.825,0,0,1,3.147,1.226l2.379-2.367a8.417,8.417,0,0,0-5.6-2.158A8.391,8.391,0,0,0,52,56.6,8.541,8.541,0,0,0,54.326,62.5a8.873,8.873,0,0,0,6.4,2.6,7.891,7.891,0,0,0,5.747-2.416,8.486,8.486,0,0,0,2.207-5.878,9.788,9.788,0,0,0-.1-1.516Z",
      transform: "translate(-52 -48.1)",
      fill: color
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};
_c = Google;

var _c;

$RefreshReg$(_c, "Google");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/assets/icons/ShoppingBag.tsx":
/*!******************************************!*\
  !*** ./src/assets/icons/ShoppingBag.tsx ***!
  \******************************************/
/*! exports provided: ShoppingBag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBag", function() { return ShoppingBag; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\ShoppingBag.tsx",
    _this = undefined;


var ShoppingBag = function ShoppingBag() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12.686",
      height: "16",
      viewBox: "0 0 12.686 16",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
        "data-name": "Group 2704",
        transform: "translate(-27.023 -2)",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          "data-name": "Group 17",
          transform: "translate(27.023 5.156)",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
            "data-name": "Group 16",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              "data-name": "Path 3",
              d: "M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z",
              transform: "translate(-53.023 -101.005)",
              fill: "currentColor"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          "data-name": "Group 19",
          transform: "translate(30.274 2)",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
            "data-name": "Group 18",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              "data-name": "Path 4",
              d: "M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z",
              transform: "translate(-157.039)",
              fill: "currentColor"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};
_c = ShoppingBag;

var _c;

$RefreshReg$(_c, "ShoppingBag");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/assets/icons/ShoppingBagLarge.tsx":
/*!***********************************************!*\
  !*** ./src/assets/icons/ShoppingBagLarge.tsx ***!
  \***********************************************/
/*! exports provided: ShoppingBagLarge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBagLarge", function() { return ShoppingBagLarge; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\ShoppingBagLarge.tsx",
    _this = undefined;


var ShoppingBagLarge = function ShoppingBagLarge(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '18px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '18px' : _ref$height;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 23.786 30",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      "data-name": "shopping-bag (3)",
      transform: "translate(-53.023)",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
        "data-name": "Group 2704",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          "data-name": "Group 17",
          transform: "translate(53.023 5.918)",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
            "data-name": "Group 16",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              "data-name": "Path 3",
              d: "M76.8,119.826l-1.34-16.881A2.109,2.109,0,0,0,73.362,101H70.716v3.921a.879.879,0,1,1-1.757,0V101H60.875v3.921a.879.879,0,1,1-1.757,0V101H56.472a2.109,2.109,0,0,0-2.094,1.937l-1.34,16.886a4.885,4.885,0,0,0,4.87,5.259H71.926a4.884,4.884,0,0,0,4.87-5.261Zm-7.92-8.6-4.544,4.544a.878.878,0,0,1-1.243,0l-2.13-2.13A.878.878,0,0,1,62.2,112.4l1.509,1.508,3.923-3.923a.879.879,0,1,1,1.242,1.243Z",
              transform: "translate(-53.023 -101.005)",
              fill: color
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          "data-name": "Group 19",
          transform: "translate(59.118)",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
            "data-name": "Group 18",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              "data-name": "Path 4",
              d: "M162.838,0a5.806,5.806,0,0,0-5.8,5.8v.119H158.8V5.8a4.042,4.042,0,1,1,8.083,0v.119h1.757V5.8A5.806,5.806,0,0,0,162.838,0Z",
              transform: "translate(-157.039)",
              fill: color
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};
_c = ShoppingBagLarge;

var _c;

$RefreshReg$(_c, "ShoppingBagLarge");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/axiosHeaders.tsx":
/*!******************************!*\
  !*** ./src/axiosHeaders.tsx ***!
  \******************************/
/*! exports provided: JSONConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONConfig", function() { return JSONConfig; });
var JSONConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Others/forms/input.tsx":
/*!***********************************************!*\
  !*** ./src/components/Others/forms/input.tsx ***!
  \***********************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "./node_modules/@styled-system/css/dist/index.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");



var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__["default"])({
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/cart/item/cart-item.style.tsx":
/*!******************************************************!*\
  !*** ./src/components/cart/item/cart-item.style.tsx ***!
  \******************************************************/
/*! exports provided: ItemBox, Information, Image, Name, Price, Weight, Total, RemoveButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemBox", function() { return ItemBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Information", function() { return Information; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Price", function() { return Price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weight", function() { return Weight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Total", function() { return Total; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveButton", function() { return RemoveButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "./node_modules/@styled-system/css/dist/index.esm.js");


var ItemBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__["default"])({
  fontSize: 'base',
  fontWeight: 'bold',
  py: 15,
  px: 25,
  borderBottom: "1px solid",
  borderBottomColor: 'gray.200'
}), {
  display: 'flex',
  alignItems: 'center'
});
var Information = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '15px'
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img({
  width: 60,
  height: 60,
  objectFit: 'cover',
  margin: '0 15px'
});
var Name = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__["default"])({
  fontWeight: 'md',
  color: 'text.bold',
  mb: '0px',
  lineHeight: 1.5
}));
var Price = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__["default"])({
  color: 'primary.regular',
  mt: '10px',
  mb: '10px'
}));
var Weight = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__["default"])({
  fontSize: 'sm',
  fontWeight: 'regular',
  color: 'text.regular',
  mb: '5px'
}));
var Total = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__["default"])({
  color: 'text.bold',
  ml: 'auto'
}));
var RemoveButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button({
  padding: '5px',
  border: 0,
  outline: 0,
  marginLeft: '15px',
  cursor: 'pointer',
  color: 'rgba(0, 0, 0, 0.25)',
  transition: 'all 0.4s ease',
  backgroundColor: 'transparent',
  '&:hover': {
    color: 'red'
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/cart/item/cart-item.tsx":
/*!************************************************!*\
  !*** ./src/components/cart/item/cart-item.tsx ***!
  \************************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _counter_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../counter/counter */ "./src/components/cart/counter/counter.tsx");
/* harmony import */ var _assets_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/CloseIcon */ "./src/assets/icons/CloseIcon.tsx");
/* harmony import */ var _cart_item_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-item.style */ "./src/components/cart/item/cart-item.style.tsx");


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\cart\\item\\cart-item.tsx",
    _this = undefined;





var CartItem = function CartItem(_ref) {
  var data = _ref.data,
      onDecrement = _ref.onDecrement,
      onIncrement = _ref.onIncrement,
      onRemove = _ref.onRemove;
  var name = data.name,
      thumbImage = data.thumbImage,
      price = data.price,
      salePrice = data.salePrice,
      unit = data.unit,
      countInStock = data.countInStock;
  var displayPrice = salePrice ? salePrice : price;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["ItemBox"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_counter_counter__WEBPACK_IMPORTED_MODULE_2__["Counter"], {
      value: data.cartQuantity,
      onDecrement: onDecrement,
      onIncrement: onIncrement,
      variant: "lightVertical"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["Image"], {
      src: thumbImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["Information"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["Name"], {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["Price"], {
        children: displayPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["Weight"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["Total"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["RemoveButton"], {
      onClick: onRemove,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_3__["CloseIcon"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};
_c = CartItem;

var _c;

$RefreshReg$(_c, "CartItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/cart/popup/cart-popup-button.tsx":
/*!*********************************************************!*\
  !*** ./src/components/cart/popup/cart-popup-button.tsx ***!
  \*********************************************************/
/*! exports provided: BoxedCartButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxedCartButton", function() { return BoxedCartButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cart_popup_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-popup.style */ "./src/components/cart/popup/cart-popup.style.tsx");
/* harmony import */ var _assets_icons_ShoppingBag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/ShoppingBag */ "./src/assets/icons/ShoppingBag.tsx");


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\cart\\popup\\cart-popup-button.tsx",
    _this = undefined;





var CartPopupButton = function CartPopupButton(_ref) {
  var itemCount = _ref.itemCount,
      _ref$itemPostfix = _ref.itemPostfix,
      itemPostfix = _ref$itemPostfix === void 0 ? 'items' : _ref$itemPostfix,
      price = _ref.price,
      _ref$pricePrefix = _ref.pricePrefix,
      pricePrefix = _ref$pricePrefix === void 0 ? '$' : _ref$pricePrefix,
      style = _ref.style,
      onClick = _ref.onClick,
      className = _ref.className;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["CartPopupButtonStyled"], {
    style: style,
    onClick: onClick,
    className: className,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["ButtonImgBox"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_ShoppingBag__WEBPACK_IMPORTED_MODULE_3__["ShoppingBag"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["ItemCount"], {
      children: [itemCount, " ", itemPostfix]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["PriceBox"], {
      children: [pricePrefix, parseFloat("".concat(price)).toFixed(2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }, _this);
};

_c = CartPopupButton;
var BoxedCartButton = function BoxedCartButton(_ref2) {
  var itemCount = _ref2.itemCount,
      _ref2$itemPostfix = _ref2.itemPostfix,
      itemPostfix = _ref2$itemPostfix === void 0 ? 'items' : _ref2$itemPostfix,
      price = _ref2.price,
      _ref2$pricePrefix = _ref2.pricePrefix,
      pricePrefix = _ref2$pricePrefix === void 0 ? '$' : _ref2$pricePrefix,
      style = _ref2.style,
      onClick = _ref2.onClick,
      className = _ref2.className;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["CartPopupBoxButton"], {
    style: style,
    onClick: onClick,
    className: className,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["TotalItems"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_ShoppingBag__WEBPACK_IMPORTED_MODULE_3__["ShoppingBag"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }, _this), itemCount, " ", itemPostfix]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["PriceBoxAlt"], {
      children: [pricePrefix, parseFloat("".concat(price)).toFixed(2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 3
  }, _this);
};
_c2 = BoxedCartButton;
/* harmony default export */ __webpack_exports__["default"] = (CartPopupButton);

var _c, _c2;

$RefreshReg$(_c, "CartPopupButton");
$RefreshReg$(_c2, "BoxedCartButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/cart/popup/cart-popup.style.tsx":
/*!********************************************************!*\
  !*** ./src/components/cart/popup/cart-popup.style.tsx ***!
  \********************************************************/
/*! exports provided: ButtonImgBox, CartPopupButtonStyled, ItemCount, PriceBox, CartPopupBoxButton, PriceBoxAlt, TotalItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonImgBox", function() { return ButtonImgBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPopupButtonStyled", function() { return CartPopupButtonStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCount", function() { return ItemCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceBox", function() { return PriceBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPopupBoxButton", function() { return CartPopupBoxButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceBoxAlt", function() { return PriceBoxAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalItems", function() { return TotalItems; });
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/theme-get */ "./node_modules/@styled-system/theme-get/dist/index.esm.js");


function _templateObject7() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: auto;\n  height: 35px;\n  min-width: 80px;\n  overflow: hidden;\n  border-radius: 15% 0% 0% 15%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin: 0 10px 10px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 15px 10px;\n\n  svg {\n    margin-right: 10px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: auto;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  padding: 0;\n  border-radius: 30% 0% 0% 30%;\n  border: #009E7F 1px solid;\n  border-right: none;\n  box-shadow: ", ";\n  outline: 0;\n  cursor: pointer;\n  position: fixed;\n  right: 0;\n  top: 50%;\n  margin-top: -46px;\n  z-index: 99;\n\n  @media (max-width: 580px) {\n    display: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 56px;\n  height: 56px;\n  overflow: hidden;\n  border-radius: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin-right: 2px;\n\n  @media (max-width: 767px) {\n    width: 90px;\n    height: 100%;\n    height: 41px;\n    margin-left: auto;\n    margin-right: 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: 12px;\n  font-weight: ", ";\n  color: ", ";\n  padding-left: 5px;\n  padding-right: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 60px;\n  width: auto;\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  padding: 0 0 0 30px;\n  border-radius: 60px;\n  box-shadow: ", ";\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n  z-index: 999;\n\n  @media (max-width: 767px) {\n    width: calc(100% - 60px);\n    height: 45px;\n    padding: 2px 2px 2px 30px;\n    bottom: 30px;\n    right: 30px;\n  }\n\n  @media (min-width: 581px) {\n    &:not(.fixedCartPopup) {\n      display: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var CartPopupButtonStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('button')(_templateObject(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)'));
var ButtonImgBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('span')(_templateObject2(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
var ItemCount = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('span')(_templateObject3(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
var PriceBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('span')(_templateObject4(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.xs', '12'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009E7F'));
var CartPopupBoxButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('button')(_templateObject5(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)'));
var TotalItems = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('span')(_templateObject6(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
var PriceBoxAlt = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('span')(_templateObject7(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009E7F'));


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/features/authentication-form/authentication-form.style.tsx":
/*!************************************************************************!*\
  !*** ./src/features/authentication-form/authentication-form.style.tsx ***!
  \************************************************************************/
/*! exports provided: Button, IconWrapper, Wrapper, Container, LogoWrapper, Heading, SubHeading, OfferSection, Offer, HelperText, Divider, LinkButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWrapper", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubHeading", function() { return SubHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferSection", function() { return OfferSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offer", function() { return Offer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperText", function() { return HelperText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return LinkButton; });
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/theme-get */ "./node_modules/@styled-system/theme-get/dist/index.esm.js");
/* harmony import */ var components_Others_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Others/button/button */ "./src/components/Others/button/button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return components_Others_button_button__WEBPACK_IMPORTED_MODULE_3__["Button"]; });



function _templateObject11() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: transparent;\n  border: 0;\n  outline: 0;\n  box-shadow: none;\n  padding: 0;\n  font-size: calc(", "px - 1px);\n  font-weight: ", ";\n  color: ", ";\n  text-decoration: underline;\n  cursor: pointer;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 15px 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  span {\n    font-family: ", ";\n    font-size: ", "px;\n    font-weight: ", ";\n    color: ", ";\n    line-height: 1;\n    background-color: ", ";\n    z-index: 1;\n    position: relative;\n    padding: 0 10px;\n  }\n\n  &::before {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ", ";\n    position: absolute;\n    top: 50%;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin: 0;\n  text-align: center;\n  width: 100%;\n\n  a {\n    font-weight: ", ";\n    color: ", ";\n    text-decoration: underline;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin: 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 20px;\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 30px;\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  display: block;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 10px;\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 30px;\n\n  img {\n    max-width: 160px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 40px 60px 0;\n\n  @media (max-width: 768px) {\n    padding: 40px 30px 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  background-color: ", ";\n  max-width: 450px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  margin-right: 6px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3(_templateObject5(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.heading', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.lg', '21'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'));
var SubHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject6(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.regular', '#77798c'));
var OfferSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject7(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'));
var Offer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject8(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.regular', '#77798c'));
var HelperText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject9(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.regular', '#77798c'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.blue.link', '#4285f4')); // export const Input = styled.input`
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

var Divider = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject10(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.500', '#f1f1f1'));
var LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject11(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/features/authentication-form/forgot-password.tsx":
/*!**************************************************************!*\
  !*** ./src/features/authentication-form/forgot-password.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authentication_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-form.style */ "./src/features/authentication-form/authentication-form.style.tsx");
/* harmony import */ var components_Others_forms_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Others/forms/input */ "./src/components/Others/forms/input.tsx");


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\features\\authentication-form\\forgot-password.tsx",
    _this = undefined;





var ForgotPasswordModal = function ForgotPasswordModal(_ref) {
  var setCurrentForm = _ref.setCurrentForm;

  var toggleSignInForm = function toggleSignInForm() {
    setCurrentForm('signIn');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      style: {
        paddingBottom: 30
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
        children: "Forgot Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["SubHeading"], {
        children: "We'll send you a link to reset your password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        type: "text",
        placeholder: "Email Address or Contact No.",
        height: "48px",
        backgroundColor: "#F7F7F7",
        mb: "10px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%'
        },
        type: "submit",
        children: "Reset Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Offer"], {
        style: {
          padding: '20px 0 0'
        },
        children: ["Back to", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["LinkButton"], {
          onClick: toggleSignInForm,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_c = ForgotPasswordModal;
/* harmony default export */ __webpack_exports__["default"] = (ForgotPasswordModal);

var _c;

$RefreshReg$(_c, "ForgotPasswordModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/features/authentication-form/index.tsx":
/*!****************************************************!*\
  !*** ./src/features/authentication-form/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/features/authentication-form/login.tsx");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/features/authentication-form/register.tsx");
/* harmony import */ var _forgot_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password */ "./src/features/authentication-form/forgot-password.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redq/reuse-modal */ "./node_modules/@redq/reuse-modal/es/index.js");


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\features\\authentication-form\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







 // @ts-ignore



var AuthenticationForm = function AuthenticationForm(_ref) {
  _s();

  var router = _ref.router;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.globalReducer;
  }),
      isAuthenticated = _useSelector.isAuthenticated;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('signUp'),
      currentForm = _useState[0],
      setCurrentForm = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isAuthenticated) {
      if (router.pathname === '/login') {
        router.push('/');
      } else {
        Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_7__["closeModal"])();
      }
    }
  }, [isAuthenticated]);

  if (currentForm === 'signIn') {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_login__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setCurrentForm: setCurrentForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, _this);
  }

  if (currentForm === 'signUp') {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_register__WEBPACK_IMPORTED_MODULE_3__["default"], {
      setCurrentForm: setCurrentForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 12
    }, _this);
  }

  if (currentForm === 'forgotPass') {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_forgot_password__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setCurrentForm: setCurrentForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }, _this);
  }
};

_s(AuthenticationForm, "smHNLGcK3+5WCNa6+JcVGfdKXHw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = AuthenticationForm;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(AuthenticationForm));

var _c, _c2;

$RefreshReg$(_c, "AuthenticationForm");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/features/authentication-form/login.tsx":
/*!****************************************************!*\
  !*** ./src/features/authentication-form/login.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _authentication_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication-form.style */ "./src/features/authentication-form/authentication-form.style.tsx");
/* harmony import */ var assets_icons_Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/icons/Facebook */ "./src/assets/icons/Facebook.tsx");
/* harmony import */ var assets_icons_Google__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/icons/Google */ "./src/assets/icons/Google.tsx");
/* harmony import */ var components_Others_forms_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Others/forms/input */ "./src/components/Others/forms/input.tsx");
/* harmony import */ var _hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/hooks/useLoginForm */ "./src/hooks/useLoginForm.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/redux/actions/globalActions */ "./src/redux/actions/globalActions.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/config */ "./src/utils/config.ts");
/* harmony import */ var light_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! light-toast */ "./node_modules/light-toast/dist/index.es.js");
/* harmony import */ var _axiosHeaders__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/axiosHeaders */ "./src/axiosHeaders.tsx");




var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\features\\authentication-form\\login.tsx",
    _this = undefined,
    _s = $RefreshSig$();




 // @ts-ignore










var SignInModal = function SignInModal(_ref) {
  _s();

  var setCurrentForm = _ref.setCurrentForm;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

  var toggleSignUpForm = function toggleSignUpForm() {
    setCurrentForm('signUp');
  };

  var toggleForgotPassForm = function toggleForgotPassForm() {
    setCurrentForm('forgotPass');
  };

  var _useLoginForm = Object(_hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_8__["useLoginForm"])(),
      inputs = _useLoginForm.inputs,
      handleInputChange = _useLoginForm.handleInputChange;

  var loginCallback = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var _yield$axios$post, data;

      return C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_12__["API_BASE_URL"], "/api/v1/auth/login"), {
                email: inputs.email,
                password: inputs.password
              }, _axiosHeaders__WEBPACK_IMPORTED_MODULE_14__["JSONConfig"]);

            case 4:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_10__["login"])(data));
              localStorage.setItem('userInfo', JSON.stringify(data));
              localStorage.setItem('token', JSON.stringify(data.token));
              _context.next = 11;
              return dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_10__["loadUser"])());

            case 11:
              light_toast__WEBPACK_IMPORTED_MODULE_13__["default"].success('Successfully logged in');
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              light_toast__WEBPACK_IMPORTED_MODULE_13__["default"].fail(_context.t0.response.data.error + ', Please try again');

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 14]]);
    }));

    return function loginCallback(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
        children: "Welcome Back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["SubHeading"], {
        children: "Login with your email & password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: loginCallback,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          type: "email",
          placeholder: "Email Address",
          name: "email",
          onChange: handleInputChange,
          value: inputs.email,
          required: true,
          height: "48px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          type: "password",
          placeholder: "Password (min 6 characters)",
          name: "password",
          onChange: handleInputChange,
          value: inputs.password,
          required: true,
          height: "48px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          variant: "primary",
          size: "big",
          style: {
            width: '100%'
          },
          type: "submit",
          children: "Continue          "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "or"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%',
          backgroundColor: '#4267b2',
          marginBottom: 10
        },
        onClick: loginCallback,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["IconWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_Facebook__WEBPACK_IMPORTED_MODULE_5__["Facebook"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 13
        }, _this), "Continue with Facebook"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%',
          backgroundColor: '#4285f4'
        },
        onClick: loginCallback,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["IconWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_Google__WEBPACK_IMPORTED_MODULE_6__["Google"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, _this), "Continue with Google"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Offer"], {
        style: {
          padding: '20px 0'
        },
        children: ["Don't have any account?", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["LinkButton"], {
          onClick: toggleSignUpForm,
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["OfferSection"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Offer"], {
        children: ["Forgot your password?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["LinkButton"], {
          onClick: toggleForgotPassForm,
          children: "Reset It"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 7
  }, _this);
};

_s(SignInModal, "wMW/04KT2hJUF1Q9Y5nDeZheAwQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], _hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_8__["useLoginForm"]];
});

_c = SignInModal;
/* harmony default export */ __webpack_exports__["default"] = (SignInModal);

var _c;

$RefreshReg$(_c, "SignInModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/features/authentication-form/register.tsx":
/*!*******************************************************!*\
  !*** ./src/features/authentication-form/register.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Others_forms_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Others/forms/input */ "./src/components/Others/forms/input.tsx");
/* harmony import */ var _authentication_form_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication-form.style */ "./src/features/authentication-form/authentication-form.style.tsx");
/* harmony import */ var assets_icons_Facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/icons/Facebook */ "./src/assets/icons/Facebook.tsx");
/* harmony import */ var assets_icons_Google__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/icons/Google */ "./src/assets/icons/Google.tsx");
/* harmony import */ var _hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/hooks/useLoginForm */ "./src/hooks/useLoginForm.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/redux/actions/globalActions */ "./src/redux/actions/globalActions.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils/config */ "./src/utils/config.ts");
/* harmony import */ var _axiosHeaders__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/axiosHeaders */ "./src/axiosHeaders.tsx");
/* harmony import */ var light_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! light-toast */ "./node_modules/light-toast/dist/index.es.js");




var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\features\\authentication-form\\register.tsx",
    _this = undefined,
    _s = $RefreshSig$();















var SignupModal = function SignupModal(_ref) {
  _s();

  var setCurrentForm = _ref.setCurrentForm;

  var toggleSignInForm = function toggleSignInForm() {
    setCurrentForm('signIn');
  };

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

  var _useLoginForm = Object(_hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_9__["useLoginForm"])(),
      inputs = _useLoginForm.inputs,
      handleInputChange = _useLoginForm.handleInputChange;

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var _yield$axios$post, data;

      return C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_13__["API_BASE_URL"], "/api/v1/auth/register"), {
                firstName: inputs.firstName,
                lastName: inputs.lastName,
                email: inputs.email,
                password: inputs.password,
                role: 'user'
              }, _axiosHeaders__WEBPACK_IMPORTED_MODULE_14__["JSONConfig"]);

            case 4:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_11__["register"])(data));
              _context.next = 9;
              return Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_11__["loadUser"])();

            case 9:
              light_toast__WEBPACK_IMPORTED_MODULE_15__["default"].success('Successfully signed up');
              localStorage.setItem('userInfo', JSON.stringify(data));
              localStorage.setItem('token', JSON.stringify(data.token));
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              light_toast__WEBPACK_IMPORTED_MODULE_15__["default"].fail(_context.t0.response.data.error);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 14]]);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["Wrapper"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["SubHeading"], {
        children: "Every fill is required in sign up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          type: "text",
          placeholder: "First name",
          height: "48px",
          backgroundColor: "#F7F7F7",
          mb: "10px",
          name: "firstName",
          onChange: handleInputChange,
          value: inputs.firstName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          type: "text",
          placeholder: "Last name",
          height: "48px",
          backgroundColor: "#F7F7F7",
          mb: "10px",
          name: "lastName",
          onChange: handleInputChange,
          value: inputs.lastName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          type: "email",
          placeholder: "Email Address",
          height: "48px",
          backgroundColor: "#F7F7F7",
          mb: "10px",
          name: "email",
          onChange: handleInputChange,
          value: inputs.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          type: "password",
          placeholder: "Password (min 6 characters)",
          height: "48px",
          backgroundColor: "#F7F7F7",
          mb: "10px",
          name: "password",
          onChange: handleInputChange,
          value: inputs.password
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["HelperText"], {
          style: {
            padding: '20px 0 30px'
          },
          children: ["By signing up, you agree to \xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Terms & Condition"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          variant: "primary",
          size: "big",
          width: "100%",
          type: "submit",
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "or"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%',
          backgroundColor: '#4267b2',
          marginBottom: 10
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["IconWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_Facebook__WEBPACK_IMPORTED_MODULE_7__["Facebook"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this), "Continue with Facebook"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%',
          backgroundColor: '#4285f4'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["IconWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_Google__WEBPACK_IMPORTED_MODULE_8__["Google"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this), "Continue with Google"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["Offer"], {
        style: {
          padding: '20px 0'
        },
        children: ["Already have an account?", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_6__["LinkButton"], {
          onClick: toggleSignInForm,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, _this);
};

_s(SignupModal, "wMW/04KT2hJUF1Q9Y5nDeZheAwQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"], _hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_9__["useLoginForm"]];
});

_c = SignupModal;
/* harmony default export */ __webpack_exports__["default"] = (SignupModal);

var _c;

$RefreshReg$(_c, "SignupModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/features/cart/cart-popup.tsx":
/*!******************************************!*\
  !*** ./src/features/cart/cart-popup.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-system/theme-get */ "./node_modules/@styled-system/theme-get/dist/index.esm.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart */ "./src/features/cart/cart.tsx");
/* harmony import */ var _components_cart_popup_cart_popup_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/cart/popup/cart-popup-button */ "./src/components/cart/popup/cart-popup-button.tsx");
/* harmony import */ var _cart_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart.style */ "./src/features/cart/cart.style.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_cartUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/cartUtils */ "./src/utils/cartUtils.ts");
/* harmony import */ var _OpenModalFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/OpenModalFunctions */ "./src/OpenModalFunctions.tsx");




var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\features\\cart\\cart-popup.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  .cartPopup {\n    top: auto !important;\n    left: auto !important;\n    bottom: 50px !important;\n    right: 50px !important;\n    box-shadow: 3px 3px 5px 6px #23ff00;;\n    transform-origin: bottom right;\n\n\n    @media (max-width: 580px) {\n      max-width: none !important;\n      width: 100% !important;\n      bottom: 0 !important;\n      left: 0 !important;\n      background: ", ";\n      overflow: initial !important;\n      transform-origin: bottom center;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var CartPopupStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__["themeGet"])('colors.white', '#ffffff'));
_c = CartPopupStyle;

var CartPopUp = function CartPopUp(_ref) {
  _s();

  var _ref$deviceType = _ref.deviceType,
      mobile = _ref$deviceType.mobile,
      tablet = _ref$deviceType.tablet,
      desktop = _ref$deviceType.desktop;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.cartReducer;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.shopReducer;
  }),
      symbol = _useSelector.currency.symbol;

  var handleModal = function handleModal() {
    Object(_OpenModalFunctions__WEBPACK_IMPORTED_MODULE_10__["OpenCartModal"])();
  };

  var cartSliderClass = isOpen ? 'cartPopupFixed' : '';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: mobile ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartPopupStyle, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cart_popup_cart_popup_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "product-cart",
        itemCount: cartState.length,
        itemPostfix: cartState.length > 1 ? "items" : "item",
        price: Object(_utils_cartUtils__WEBPACK_IMPORTED_MODULE_9__["calculateTotalPrice"])(cartState),
        pricePrefix: symbol,
        onClick: handleModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }, _this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_7__["CartSlidePopup"], {
        className: cartSliderClass,
        children: isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onCloseBtnClick: function onCloseBtnClick() {
            setIsOpen(false);
          },
          scrollbarHeight: "100vh"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cart_popup_cart_popup_button__WEBPACK_IMPORTED_MODULE_6__["BoxedCartButton"], {
        className: "product-cart",
        itemCount: cartState.length,
        itemPostfix: cartState.length > 1 ? 'items' : "item",
        price: Object(_utils_cartUtils__WEBPACK_IMPORTED_MODULE_9__["calculateTotalPrice"])(cartState),
        pricePrefix: symbol,
        onClick: function onClick() {
          setIsOpen(true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }, _this)]
    }, void 0, true)
  }, void 0, false);
};

_s(CartPopUp, "Xs/xsvDwhxKr5Lt/d92nUYS3DoE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
});

_c2 = CartPopUp;
/* harmony default export */ __webpack_exports__["default"] = (CartPopUp);

var _c, _c2;

$RefreshReg$(_c, "CartPopupStyle");
$RefreshReg$(_c2, "CartPopUp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/features/cart/cart.tsx":
/*!************************************!*\
  !*** ./src/features/cart/cart.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cart_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.style */ "./src/features/cart/cart.style.tsx");
/* harmony import */ var assets_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/icons/CloseIcon */ "./src/assets/icons/CloseIcon.tsx");
/* harmony import */ var assets_icons_ShoppingBagLarge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/icons/ShoppingBagLarge */ "./src/assets/icons/ShoppingBagLarge.tsx");
/* harmony import */ var assets_icons_NoCartBag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/icons/NoCartBag */ "./src/assets/icons/NoCartBag.tsx");
/* harmony import */ var _utils_cartUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/cartUtils */ "./src/utils/cartUtils.ts");
/* harmony import */ var _components_cart_item_cart_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/cart/item/cart-item */ "./src/components/cart/item/cart-item.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/redux/actions/cartActions */ "./src/redux/actions/cartActions.ts");



var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\features\\cart\\cart.tsx",
    _this = undefined,
    _s = $RefreshSig$();













var Cart = function Cart(_ref) {
  _s();

  var style = _ref.style,
      className = _ref.className,
      onCloseBtnClick = _ref.onCloseBtnClick;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  var cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.cartReducer;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["CartPopupBody"], {
    className: className,
    style: style,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["PopupHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["PopupItemCount"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_ShoppingBagLarge__WEBPACK_IMPORTED_MODULE_5__["ShoppingBagLarge"], {
          width: "19px",
          height: "24px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [1, "\xA0 items"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["CloseButton"], {
        onClick: onCloseBtnClick,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_4__["CloseIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["ItemWrapper"], {
      className: "items-wrapper",
      children: cartState.length > 0 ? cartState.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cart_item_cart_item__WEBPACK_IMPORTED_MODULE_8__["CartItem"], {
          onIncrement: function onIncrement() {
            dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_10__["increaseQuantityCart"])(item.cartId));
          },
          onDecrement: function onDecrement() {
            dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_10__["decreaseQuantityCart"])(item.cartId));
          },
          onRemove: function onRemove() {
            dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_10__["removeFromCart"])(item.cartId));
          },
          data: item
        }, "cartItem-".concat(item.id), false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }, _this);
      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["NoProductImg"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_NoCartBag__WEBPACK_IMPORTED_MODULE_6__["NoCartBag"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["NoProductMsg"], {
          children: "No products found"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["CheckoutButtonWrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["PromoCode"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_10__["removeAllFromCart"])());
          },
          children: "Remove All"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this), true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/checkout",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["CheckoutButton"], {
          onClick: onCloseBtnClick,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["Title"], {
              children: "Checkout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["PriceBox"], {
              children: Object(_utils_cartUtils__WEBPACK_IMPORTED_MODULE_7__["calculateTotalPrice"])(cartState)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 17
            }, _this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, _this) : /*#__PURE__*/undefined]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(Cart, "q8RITwToxXNDLABQ2g5tdqmB7Bc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"]];
});

_c = Cart;
/* harmony default export */ __webpack_exports__["default"] = (Cart);

var _c;

$RefreshReg$(_c, "Cart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/hooks/useLoginForm.ts":
/*!***********************************!*\
  !*** ./src/hooks/useLoginForm.ts ***!
  \***********************************/
/*! exports provided: useLoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginForm", function() { return useLoginForm; });
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var useLoginForm = function useLoginForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      inputs = _useState[0],
      setInputs = _useState[1];

  var handleInputChange = function handleInputChange(event) {
    event.persist();
    setInputs(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
    });
  };

  return {
    handleInputChange: handleInputChange,
    inputs: inputs
  };
};

_s(useLoginForm, "y88sAu/TO9eENcClZmyxJnz9qPA=");



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/redux/actions/globalActions.ts":
/*!********************************************!*\
  !*** ./src/redux/actions/globalActions.ts ***!
  \********************************************/
/*! exports provided: setGlobalCurrency, setGlobalCategory, setGlobalSearch, login, register, logout, loadUser, createOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalCurrency", function() { return setGlobalCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalCategory", function() { return setGlobalCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalSearch", function() { return setGlobalSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrder", function() { return createOrder; });
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _setAuthToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setAuthToken */ "./src/redux/setAuthToken.ts");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/config */ "./src/utils/config.ts");






var setGlobalCurrency = function setGlobalCurrency(cur) {
  return {
    type: _defines__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].SET_CURRENCY,
    cur: cur
  };
};
var setGlobalCategory = function setGlobalCategory(category) {
  return {
    type: _defines__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].SET_CATEGORY,
    category: category
  };
};
var setGlobalSearch = function setGlobalSearch(keyword) {
  return {
    type: _defines__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].SET_SEARCH,
    keyword: keyword
  };
};
var login = function login(data) {
  return {
    type: _defines__WEBPACK_IMPORTED_MODULE_2__["AUTH"].LOG_IN,
    payload: data
  };
};
var register = function register(data) {
  return {
    type: _defines__WEBPACK_IMPORTED_MODULE_2__["AUTH"].SIGN_UP,
    payload: data
  };
};
var logout = function logout() {
  return function (dispatch) {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('persist:root');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    localStorage.removeItem('token');
    dispatch({
      type: _defines__WEBPACK_IMPORTED_MODULE_2__["AUTH"].LOG_OUT
    });
    document.location.href = '/';
  };
};
var loadUser = function loadUser() {
  return /*#__PURE__*/function () {
    var _ref = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var token, res;
      return C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (localStorage.token) {
                token = localStorage.token.replaceAll('"', ''); //sending token to headers

                Object(_setAuthToken__WEBPACK_IMPORTED_MODULE_4__["default"])(token);
              }

              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_5__["API_BASE_URL"], "/api/v1/auth/me"));

            case 4:
              res = _context.sent;
              dispatch({
                type: _defines__WEBPACK_IMPORTED_MODULE_2__["AUTH"].LOAD_USER,
                payload: res.data.data
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _defines__WEBPACK_IMPORTED_MODULE_2__["AUTH"].LOAD_USER_FAIL,
                payload: _context.t0.response.data.error
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var createOrder = function createOrder(order) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var config, _yield$axios$post, data, messages;

      return C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              config = {
                headers: {
                  'Content-Type': 'application/json'
                }
              };
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_5__["API_BASE_URL"], "/api/orders"), order, config);

            case 4:
              _yield$axios$post = _context2.sent;
              data = _yield$axios$post.data;
              dispatch({
                type: _defines__WEBPACK_IMPORTED_MODULE_2__["AUTH"].ORDER_SUCCESS,
                payload: data
              });
              localStorage.removeItem('cartItems');
              localStorage.removeItem('persist:root');
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              messages = _context2.t0.response && _context2.t0.response.data.message ? _context2.t0.response.data.message : _context2.t0.message;

              if (messages === 'Not authorized, token failed') {
                dispatch(logout());
              }

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/redux/setAuthToken.ts":
/*!***********************************!*\
  !*** ./src/redux/setAuthToken.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var setAuthToken = function setAuthToken(token) {
  if (token) {
    //adding token to the headers
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = "Bearer ".concat(token);
  } else {
    //removing token from the headers
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xpZ2h0LXRvYXN0L2Rpc3QvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9PcGVuTW9kYWxGdW5jdGlvbnMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ljb25zL0Nsb3NlSWNvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaWNvbnMvRmFjZWJvb2sudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ljb25zL0dvb2dsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaWNvbnMvU2hvcHBpbmdCYWcudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ljb25zL1Nob3BwaW5nQmFnTGFyZ2UudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvYXhpb3NIZWFkZXJzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3RoZXJzL2Zvcm1zL2lucHV0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbS5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhcnQvaXRlbS9jYXJ0LWl0ZW0udHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJ0L3BvcHVwL2NhcnQtcG9wdXAtYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FydC9wb3B1cC9jYXJ0LXBvcHVwLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm0vYXV0aGVudGljYXRpb24tZm9ybS5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtL2ZvcmdvdC1wYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm0vbG9naW4udHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9yZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9jYXJ0L2NhcnQtcG9wdXAudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvY2FydC9jYXJ0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUxvZ2luRm9ybS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9ucy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NldEF1dGhUb2tlbi50cyJdLCJuYW1lcyI6WyJPcGVuQXV0aFRhYiIsIm9wZW5Nb2RhbCIsInNob3ciLCJvdmVybGF5Q2xhc3NOYW1lIiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsImNvbXBvbmVudCIsIkF1dGhlbnRpY2F0aW9uRm9ybSIsImNsb3NlQ29tcG9uZW50IiwiY29uZmlnIiwiZW5hYmxlUmVzaXppbmciLCJkaXNhYmxlRHJhZ2dpbmciLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsIk9wZW5DYXJ0TW9kYWwiLCJ0cmFuc2l0aW9uIiwidGVuc2lvbiIsImZyaWN0aW9uIiwiQ2FydCIsImNvbXBvbmVudFByb3BzIiwib25DbG9zZUJ0bkNsaWNrIiwiY2xvc2VNb2RhbCIsInNjcm9sbGJhckhlaWdodCIsIkNsb3NlSWNvbiIsIkZhY2Vib29rIiwiY29sb3IiLCJHb29nbGUiLCJTaG9wcGluZ0JhZyIsIlNob3BwaW5nQmFnTGFyZ2UiLCJKU09OQ29uZmlnIiwiaGVhZGVycyIsIklucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJjc3MiLCJkaXNwbGF5IiwicCIsImFwcGVhcmFuY2UiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdXRsaW5lIiwibWFyZ2luIiwiY3Vyc29yIiwib3BhY2l0eSIsImNvbXBvc2UiLCJsYXlvdXQiLCJzcGFjZSIsIkl0ZW1Cb3giLCJkaXYiLCJmb250V2VpZ2h0IiwicHkiLCJweCIsImJvcmRlckJvdHRvbSIsImJvcmRlckJvdHRvbUNvbG9yIiwiYWxpZ25JdGVtcyIsIkluZm9ybWF0aW9uIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJJbWFnZSIsImltZyIsIm9iamVjdEZpdCIsIk5hbWUiLCJzcGFuIiwibWIiLCJQcmljZSIsIm10IiwiV2VpZ2h0IiwiVG90YWwiLCJtbCIsIlJlbW92ZUJ1dHRvbiIsImJ1dHRvbiIsInBhZGRpbmciLCJDYXJ0SXRlbSIsImRhdGEiLCJvbkRlY3JlbWVudCIsIm9uSW5jcmVtZW50Iiwib25SZW1vdmUiLCJuYW1lIiwidGh1bWJJbWFnZSIsInByaWNlIiwic2FsZVByaWNlIiwidW5pdCIsImNvdW50SW5TdG9jayIsImRpc3BsYXlQcmljZSIsImNhcnRRdWFudGl0eSIsIkNhcnRQb3B1cEJ1dHRvbiIsIml0ZW1Db3VudCIsIml0ZW1Qb3N0Zml4IiwicHJpY2VQcmVmaXgiLCJzdHlsZSIsIm9uQ2xpY2siLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIkJveGVkQ2FydEJ1dHRvbiIsIkNhcnRQb3B1cEJ1dHRvblN0eWxlZCIsInRoZW1lR2V0IiwiQnV0dG9uSW1nQm94IiwiSXRlbUNvdW50IiwiUHJpY2VCb3giLCJDYXJ0UG9wdXBCb3hCdXR0b24iLCJUb3RhbEl0ZW1zIiwiUHJpY2VCb3hBbHQiLCJJY29uV3JhcHBlciIsIldyYXBwZXIiLCJDb250YWluZXIiLCJMb2dvV3JhcHBlciIsIkhlYWRpbmciLCJoMyIsIlN1YkhlYWRpbmciLCJPZmZlclNlY3Rpb24iLCJPZmZlciIsIkhlbHBlclRleHQiLCJEaXZpZGVyIiwiTGlua0J1dHRvbiIsIkZvcmdvdFBhc3N3b3JkTW9kYWwiLCJzZXRDdXJyZW50Rm9ybSIsInRvZ2dsZVNpZ25JbkZvcm0iLCJwYWRkaW5nQm90dG9tIiwicm91dGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImdsb2JhbFJlZHVjZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VTdGF0ZSIsImN1cnJlbnRGb3JtIiwidXNlRWZmZWN0IiwicGF0aG5hbWUiLCJwdXNoIiwid2l0aFJvdXRlciIsIlNpZ25Jbk1vZGFsIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvZ2dsZVNpZ25VcEZvcm0iLCJ0b2dnbGVGb3Jnb3RQYXNzRm9ybSIsInVzZUxvZ2luRm9ybSIsImlucHV0cyIsImhhbmRsZUlucHV0Q2hhbmdlIiwibG9naW5DYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsIkFQSV9CQVNFX1VSTCIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJsb2FkVXNlciIsIlRvYXN0Iiwic3VjY2VzcyIsImZhaWwiLCJyZXNwb25zZSIsImVycm9yIiwibWFyZ2luQm90dG9tIiwiU2lnbnVwTW9kYWwiLCJvblN1Ym1pdCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicm9sZSIsInJlZ2lzdGVyIiwiQ2FydFBvcHVwU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNhcnRQb3BVcCIsImRldmljZVR5cGUiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2FydFN0YXRlIiwiY2FydFJlZHVjZXIiLCJzaG9wUmVkdWNlciIsInN5bWJvbCIsImN1cnJlbmN5IiwiaGFuZGxlTW9kYWwiLCJjYXJ0U2xpZGVyQ2xhc3MiLCJsZW5ndGgiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwibWFwIiwiaXRlbSIsImluY3JlYXNlUXVhbnRpdHlDYXJ0IiwiY2FydElkIiwiZGVjcmVhc2VRdWFudGl0eUNhcnQiLCJyZW1vdmVGcm9tQ2FydCIsImlkIiwicmVtb3ZlQWxsRnJvbUNhcnQiLCJzZXRJbnB1dHMiLCJldmVudCIsInBlcnNpc3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldEdsb2JhbEN1cnJlbmN5IiwiY3VyIiwidHlwZSIsIkdMT0JBTCIsIlNFVF9DVVJSRU5DWSIsInNldEdsb2JhbENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJTRVRfQ0FURUdPUlkiLCJzZXRHbG9iYWxTZWFyY2giLCJrZXl3b3JkIiwiU0VUX1NFQVJDSCIsIkFVVEgiLCJMT0dfSU4iLCJwYXlsb2FkIiwiU0lHTl9VUCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJMT0dfT1VUIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlQWxsIiwic2V0QXV0aFRva2VuIiwiZ2V0IiwicmVzIiwiTE9BRF9VU0VSIiwiTE9BRF9VU0VSX0ZBSUwiLCJjcmVhdGVPcmRlciIsIm9yZGVyIiwiT1JERVJfU1VDQ0VTUyIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsImRlZmF1bHRzIiwiY29tbW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUMxQjs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywyQkFBMkIsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7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QkFBWSxDQUFDaUUsVUFBYixDQUF3QixXQUF4QjtBQUNBakUsMEJBQVksQ0FBQ2lFLFVBQWIsQ0FBd0IsY0FBeEI7QUFqQnFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbUIvQmMsc0JBbkIrQixHQW9CakMsYUFBTXRFLFFBQU4sSUFBa0IsYUFBTUEsUUFBTixDQUFlbEYsSUFBZixDQUFvQnlKLE9BQXRDLEdBQ00sYUFBTXZFLFFBQU4sQ0FBZWxGLElBQWYsQ0FBb0J5SixPQUQxQixHQUVNLGFBQU1BLE9BdEJxQjs7QUF1QnJDLGtCQUFJRCxRQUFRLEtBQUssOEJBQWpCLEVBQWlEO0FBQzdDL0Ysd0JBQVEsQ0FBQ2dGLE1BQU0sRUFBUCxDQUFSO0FBQ0g7O0FBekJvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRFA7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsSUFBTU8sWUFBWSxHQUFDLFNBQWJBLFlBQWEsQ0FBQ25FLEtBQUQsRUFBZ0I7QUFDL0IsTUFBR0EsS0FBSCxFQUFTO0FBQ0w7QUFDQVYsZ0RBQUssQ0FBQ3VGLFFBQU4sQ0FBZTFNLE9BQWYsQ0FBdUIyTSxNQUF2QixDQUE4QixlQUE5QixxQkFBeUQ5RSxLQUF6RDtBQUNILEdBSEQsTUFHSztBQUNEO0FBQ0EsV0FBT1YsNENBQUssQ0FBQ3VGLFFBQU4sQ0FBZTFNLE9BQWYsQ0FBdUIyTSxNQUF2QixDQUE4QixlQUE5QixDQUFQO0FBQ0g7QUFDSixDQVJEOztBQVNlWCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbnZhciBFdmVudE1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFdmVudE1hbmFnZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5fcHVibGlzaGVkRXZlbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5fdW5pcXVlSWQgPSAwOyAvLyB1c2Ugc2VsZiBpbmNyZWFzaW5nIG51bWJlciB0byBndWFyYW50ZWUgZ2xvYmFsIHVuaXF1ZW5lc3NcclxuICAgIH1cclxuICAgIEV2ZW50TWFuYWdlci5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudHNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzW25hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBldmVudCA9IHsga2V5OiB0aGlzLl91bmlxdWVJZCsrLCBjYWxsYmFjazogY2FsbGJhY2sgfTtcclxuICAgICAgICB0aGlzLl9ldmVudHNbbmFtZV0ucHVzaChldmVudCk7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50LmtleTtcclxuICAgIH07XHJcbiAgICBFdmVudE1hbmFnZXIucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3B1Ymxpc2hlZEV2ZW50cy5wdXNoKHsgbmFtZTogbmFtZSwgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50c1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gX2EuY2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEV2ZW50TWFuYWdlci5wcm90b3R5cGUudW5TdWJzY3JpYmUgPSBmdW5jdGlvbiAobmFtZSwga2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50c1tuYW1lXSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2V2ZW50c1tuYW1lXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5fZXZlbnRzW25hbWVdW2ldLmtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1tuYW1lXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gTWFrZSBzdXJlIHB1Ymxpc2hlZCBldmVudHMgY2FuIGJlIHRyaWdnZXJlZCB3aGVuIHN1YnNjcmliZWRcclxuICAgIEV2ZW50TWFuYWdlci5wcm90b3R5cGUuZW5zdXJlVHJpZ2dlcmVkQW5kU3Vic2NyaWJlID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0gdGhpcy5fcHVibGlzaGVkRXZlbnRzXHJcbiAgICAgICAgICAgIC5zbGljZSgpXHJcbiAgICAgICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAgICAgLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0ubmFtZSA9PT0gbmFtZTsgfSk7XHJcbiAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmUobmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFdmVudE1hbmFnZXI7XHJcbn0oKSk7XHJcbnZhciBldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XG5cbmZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIGNzc18yNDh6ID0gXCIuc3R5bGVfbWFza19fOXptU057cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LWp1c3RpZnktY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3otaW5kZXg6MTk5OX0uc3R5bGVfYm94X18yaWlhNHtkaXNwbGF5OmlubGluZS1ibG9jazttYXgtd2lkdGg6ODUlO21pbi13aWR0aDo5NXB4O3BhZGRpbmc6OXB4IDE1cHg7Ym94LXNpemluZzpib3JkZXItYm94O3RleHQtYWxpZ246Y2VudGVyO3dvcmQtYnJlYWs6YnJlYWstYWxsO3doaXRlLXNwYWNlOnByZS13cmFwO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDU4LDU4LDU4LC45KTtib3JkZXItcmFkaXVzOjNweDtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjkpO3RyYW5zZm9ybTpzY2FsZSguOSk7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzLC13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzLHRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjpvcGFjaXR5IC4zcyx0cmFuc2Zvcm0gLjNzLC13ZWJraXQtdHJhbnNmb3JtIC4zc30uc3R5bGVfZW50ZXJfXzI5THlRe29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9LnN0eWxlX2V4aXRfXzNXWW1we29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOSk7dHJhbnNmb3JtOnNjYWxlKC45KX0uc3R5bGVfbWVzc2FnZV9fMURVWGN7bGluZS1oZWlnaHQ6MS41O2ZvbnQtc2l6ZToxNHB4fS5zdHlsZV93cmFwcGVyX19jUUZ5WHttYXJnaW46MCBhdXRvIDdweDt3aWR0aDozNnB4O2hlaWdodDozNnB4fS5zdHlsZV9sb2FkaW5nX18ycGI3Snstd2Via2l0LWFuaW1hdGlvbjpzdHlsZV9sb2FkaW5nX18ycGI3SiAxcyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnN0eWxlX2xvYWRpbmdfXzJwYjdKIDFzIGxpbmVhciBpbmZpbml0ZX1ALXdlYmtpdC1rZXlmcmFtZXMgc3R5bGVfbG9hZGluZ19fMnBiN0p7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QGtleWZyYW1lcyBzdHlsZV9sb2FkaW5nX18ycGI3Snt0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1cIjtcbnZhciBzdHlsZXMgPSB7XCJtYXNrXCI6XCJzdHlsZV9tYXNrX185em1TTlwiLFwiYm94XCI6XCJzdHlsZV9ib3hfXzJpaWE0XCIsXCJlbnRlclwiOlwic3R5bGVfZW50ZXJfXzI5THlRXCIsXCJleGl0XCI6XCJzdHlsZV9leGl0X18zV1ltcFwiLFwibWVzc2FnZVwiOlwic3R5bGVfbWVzc2FnZV9fMURVWGNcIixcIndyYXBwZXJcIjpcInN0eWxlX3dyYXBwZXJfX2NRRnlYXCIsXCJsb2FkaW5nXCI6XCJzdHlsZV9sb2FkaW5nX18ycGI3SlwifTtcbnN0eWxlSW5qZWN0KGNzc18yNDh6KTtcblxudmFyIEljb24gPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciB0eXBlID0gX2EudHlwZTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIiwgZmlsbDogXCIjZmZmXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNNjk5IDM1M2gtNDYuOWMtMTAuMiAwLTE5LjkgNC45LTI1LjkgMTMuM0w0NjkgNTg0LjNsLTcxLjItOTguOGMtNi04LjMtMTUuNi0xMy4zLTI1LjktMTMuM0gzMjVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDEyNC42IDE3Mi44YTMxLjggMzEuOCAwIDAgMCA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43elwiIH0pLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzIgMzcyIDE2Ni42IDM3MiAzNzItMTY2LjYgMzcyLTM3MiAzNzJ6XCIgfSkpKTtcclxuICAgICAgICBjYXNlICdmYWlsJzpcclxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgdmlld0JveDogXCIwIDAgMTAyNCAxMDI0XCIsIGZpbGw6IFwiI2ZmZlwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTY4NS40IDM1NC44YzAtNC40LTMuNi04LTgtOGwtNjYgLjNMNTEyIDQ2NS42bC05OS4zLTExOC40LTY2LjEtLjNjLTQuNCAwLTggMy41LTggOCAwIDEuOS43IDMuNyAxLjkgNS4ybDEzMC4xIDE1NUwzNDAuNSA2NzBhOC4zMiA4LjMyIDAgMCAwLTEuOSA1LjJjMCA0LjQgMy42IDggOCA4bDY2LjEtLjNMNTEyIDU2NC40bDk5LjMgMTE4LjQgNjYgLjNjNC40IDAgOC0zLjUgOC04IDAtMS45LS43LTMuNy0xLjktNS4yTDU1My41IDUxNWwxMzAuMS0xNTVjMS4yLTEuNCAxLjgtMy4zIDEuOC01LjJ6XCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTUxMiA2NUMyNjQuNiA2NSA2NCAyNjUuNiA2NCA1MTNzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjUgNTEyIDY1em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnpcIiB9KSkpO1xyXG4gICAgICAgIGNhc2UgJ2xvYWRpbmcnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIiwgZmlsbDogXCIjZmZmXCIsIGNsYXNzTmFtZTogc3R5bGVzLmxvYWRpbmcgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNOTg4IDU0OGMtMTkuOSAwLTM2LTE2LjEtMzYtMzYgMC01OS40LTExLjYtMTE3LTM0LjYtMTcxLjNhNDQwLjQ1IDQ0MC40NSAwIDAgMC05NC4zLTEzOS45IDQzNy43MSA0MzcuNzEgMCAwIDAtMTM5LjktOTQuM0M2MjkgODMuNiA1NzEuNCA3MiA1MTIgNzJjLTE5LjkgMC0zNi0xNi4xLTM2LTM2czE2LjEtMzYgMzYtMzZjNjkuMSAwIDEzNi4yIDEzLjUgMTk5LjMgNDAuM0M3NzIuMyA2NiA4MjcgMTAzIDg3NCAxNTBjNDcgNDcgODMuOSAxMDEuOCAxMDkuNyAxNjIuNyAyNi43IDYzLjEgNDAuMiAxMzAuMiA0MC4yIDE5OS4zLjEgMTkuOS0xNiAzNi0zNS45IDM2elwiIH0pKSk7XHJcbiAgICB9XHJcbn07XG5cbnZhciBUb2FzdCA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGlkID0gX2EuaWQsIHR5cGUgPSBfYS50eXBlLCBjb250ZW50ID0gX2EuY29udGVudCwgX2IgPSBfYS5kdXJhdGlvbiwgZHVyYXRpb24gPSBfYiA9PT0gdm9pZCAwID8gMzAwMCA6IF9iLCBvbkNsb3NlID0gX2Eub25DbG9zZTtcclxuICAgIHZhciBfYyA9IHVzZVN0YXRlKHN0eWxlcy5ib3gpLCBjbGFzc2VzID0gX2NbMF0sIHNldENsYXNzZXMgPSBfY1sxXTtcclxuICAgIHZhciBfZCA9IHVzZVN0YXRlKGZhbHNlKSwgZW50ZXJlZCA9IF9kWzBdLCBzZXRFbnRlcmVkID0gX2RbMV07XHJcbiAgICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgZnVuY3Rpb24gZXhpdCgpIHtcclxuICAgICAgICBzZXRDbGFzc2VzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0eWxlcy5ib3ggKyBcIiBcIiArIHN0eWxlcy5leGl0OyB9KTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZm9yY2UgYSByZXBhaW50XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgcmVmLmN1cnJlbnQgJiYgcmVmLmN1cnJlbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIHNldENsYXNzZXMoZnVuY3Rpb24gKHByZXYpIHsgcmV0dXJuIHByZXYgKyBcIiBcIiArIHN0eWxlcy5lbnRlcjsgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBrZXkgPSAtMTtcclxuICAgICAgICB2YXIgdGltZXJJZCA9IC0xO1xyXG4gICAgICAgIGlmIChlbnRlcmVkKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudCBtb3VudGluZyBpcyBhc3luYywgdGhlcmUgbWlnaHQgYmUgYW4gZXhpdCBjb21tYW5kIGJlZm9yZSBhIHRvYXN0IG1vdW50c1xyXG4gICAgICAgICAgICAvLyBzbyB3ZSBzaG91bGQgbWFrZSBzdXJlIHRvIHRyaWdnZXIgdGhlIHB1Ymxpc2hlZCBleGl0IGV2ZW50XHJcbiAgICAgICAgICAgIGtleSA9IGV2ZW50TWFuYWdlci5lbnN1cmVUcmlnZ2VyZWRBbmRTdWJzY3JpYmUoJ2x0I2V4aXQnLCBmdW5jdGlvbiAobWVzc2FnZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGltZXJJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGV4aXQsIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBldmVudE1hbmFnZXIudW5TdWJzY3JpYmUoJ2x0I2V4aXQnLCBrZXkpO1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbaWQsIGR1cmF0aW9uLCBlbnRlcmVkXSk7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5tYXNrIH0sXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3Nlcywgc3R5bGU6IHR5cGUgPT09ICdpbmZvJyA/IHVuZGVmaW5lZCA6IHsgcGFkZGluZzogMTUsIGJvcmRlclJhZGl1czogNSB9LCBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVudGVyIHBoYXNlXHJcbiAgICAgICAgICAgICAgICBpZiAofmNsYXNzZXMuaW5kZXhPZihzdHlsZXMuZW50ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RW50ZXJlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGV4aXQgcGhhc2VcclxuICAgICAgICAgICAgICAgIGlmICh+Y2xhc3Nlcy5pbmRleE9mKHN0eWxlcy5leGl0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgcmVmOiByZWYgfSxcclxuICAgICAgICAgICAgdHlwZSAhPT0gJ2luZm8nICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMud3JhcHBlciwgc3R5bGU6IHR5cGUgPT09ICdsb2FkaW5nJyA/IHsgbWFyZ2luQm90dG9tOiAxMCB9IDogdW5kZWZpbmVkIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogdHlwZSB9KSkpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLm1lc3NhZ2UgfSwgY29udGVudCkpKSk7XHJcbn07XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xuXG4vKipcclxuICogTWVzc2FnZSBxdWV1ZS5cclxuICogU2F2ZSBtZXNzYWdlcyBpbiBhIHF1ZXVlLCBvbmx5IHJlbW92ZSBpdCB3aGVuIGNvbXBvbmVudCBsaWZlY3ljbGUgZW5kcy5cclxuICovXHJcbnZhciBRdWV1ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFF1ZXVlKCkge1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5fdW5pcXVlSWQgPSAwO1xyXG4gICAgfVxyXG4gICAgUXVldWUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VzLnB1c2goX19hc3NpZ24oeyBpZDogdGhpcy5fdW5pcXVlSWQrKyB9LCBtZXNzYWdlKSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1ZXVlLnByb3RvdHlwZSwgXCJsZW5ndGhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZXMubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFF1ZXVlLnByb3RvdHlwZS5nZXRGaXJzdE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VzWzBdO1xyXG4gICAgfTtcclxuICAgIFF1ZXVlLnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZXMuc2hpZnQoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUXVldWU7XHJcbn0oKSk7XG5cbnZhciBxdWV1ZSA9IG5ldyBRdWV1ZSgpO1xyXG5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdsdCNwb3BtZXNzYWdlJywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgaWQgPSBfYS5pZCwgdHlwZSA9IF9hLnR5cGUsIGNvbnRlbnQgPSBfYS5jb250ZW50LCBkdXJhdGlvbiA9IF9hLmR1cmF0aW9uLCBvbkNsb3NlID0gX2Eub25DbG9zZTtcclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFRvYXN0LCB7IGlkOiBpZCwgdHlwZTogdHlwZSwgY29udGVudDogY29udGVudCwgZHVyYXRpb246IGR1cmF0aW9uLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgICAgICBvbkNsb3NlICYmIG9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50TWFuYWdlci5wdWJsaXNoKCdsdCNwb3BtZXNzYWdlJywgcXVldWUuZ2V0Rmlyc3RNZXNzYWdlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB9KSwgY29udGFpbmVyKTtcclxufSk7XHJcbmZ1bmN0aW9uIG5vdGljZSh0eXBlLCBjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSkge1xyXG4gICAgcXVldWUucHVzaCh7IHR5cGU6IHR5cGUsIGNvbnRlbnQ6IGNvbnRlbnQsIGR1cmF0aW9uOiBkdXJhdGlvbiwgb25DbG9zZTogb25DbG9zZSB9KTtcclxuICAgIC8vIHRvYXN0IHJpZ2h0IG5vdyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBtZXNzYWdlIGluIHF1ZXVlXHJcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgZXZlbnRNYW5hZ2VyLnB1Ymxpc2goJ2x0I3BvcG1lc3NhZ2UnLCBxdWV1ZS5nZXRGaXJzdE1lc3NhZ2UoKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgY3VycmVudCBtZXNzYWdlIGlzIGxvYWRpbmcsIHRoZW4gd2Ugc2hvdWxkIHVubW91bnQgaXQgdG8gcHJvY2VlZFxyXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB2YXIgbWVzc2FnZSA9IHF1ZXVlLmdldEZpcnN0TWVzc2FnZSgpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdsb2FkaW5nJykge1xyXG4gICAgICAgICAgICBldmVudE1hbmFnZXIucHVibGlzaCgnbHQjZXhpdCcsIG1lc3NhZ2UuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG52YXIgaW5kZXggPSB7XHJcbiAgICBpbmZvOiBmdW5jdGlvbiAoY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UpIHtcclxuICAgICAgICBub3RpY2UoJ2luZm8nLCBjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSk7XHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKSB7XHJcbiAgICAgICAgbm90aWNlKCdzdWNjZXNzJywgY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UpO1xyXG4gICAgfSxcclxuICAgIGZhaWw6IGZ1bmN0aW9uIChjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSkge1xyXG4gICAgICAgIG5vdGljZSgnZmFpbCcsIGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKTtcclxuICAgIH0sXHJcbiAgICBsb2FkaW5nOiBmdW5jdGlvbiAoY29udGVudCwgb25DbG9zZSkge1xyXG4gICAgICAgIG5vdGljZSgnbG9hZGluZycsIGNvbnRlbnQsIDAsIG9uQ2xvc2UpO1xyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBoaWRlIHRoZSBmaXJzdCB0b2FzdCBpbiB0aGUgcXVldWUgd2hlbiBleGVjdXRpbmcgdGhlIGNvbW1hbmRcclxuICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBldmVudE1hbmFnZXIucHVibGlzaCgnbHQjZXhpdCcsIHF1ZXVlLmdldEZpcnN0TWVzc2FnZSgpLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzLmpzLm1hcFxuIiwiaW1wb3J0IEF1dGhlbnRpY2F0aW9uRm9ybSBmcm9tIFwiQC9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtXCI7XHJcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJ0ByZWRxL3JldXNlLW1vZGFsJztcclxuaW1wb3J0IENhcnQgZnJvbSBcIkAvZmVhdHVyZXMvY2FydC9jYXJ0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPcGVuQXV0aFRhYj0oKT0+XHJcbiAgICBvcGVuTW9kYWwoe1xyXG4gICAgc2hvdzogdHJ1ZSxcclxuICAgIG92ZXJsYXlDbGFzc05hbWU6ICdxdWljay12aWV3LW92ZXJsYXknLFxyXG4gICAgY2xvc2VPbkNsaWNrT3V0c2lkZTogdHJ1ZSxcclxuICAgIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Gb3JtLFxyXG4gICAgY2xvc2VDb21wb25lbnQ6ICcnLFxyXG4gICAgY29uZmlnOiB7XHJcbiAgICAgICAgZW5hYmxlUmVzaXppbmc6IGZhbHNlLFxyXG4gICAgICAgIGRpc2FibGVEcmFnZ2luZzogdHJ1ZSxcclxuICAgICAgICBjbGFzc05hbWU6ICdxdWljay12aWV3LW1vZGFsJyxcclxuICAgICAgICB3aWR0aDogNDU4LFxyXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBPcGVuQ2FydE1vZGFsPSgpPT5vcGVuTW9kYWwoe1xyXG4gICAgc2hvdzogdHJ1ZSxcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ2NhcnRQb3B1cCcsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBlbmFibGVSZXNpemluZzogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZURyYWdnaW5nOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgdGVuc2lvbjogMzYwLFxyXG4gICAgICAgICAgICBmcmljdGlvbjogNDAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlOiB0cnVlLFxyXG4gICAgY29tcG9uZW50OiBDYXJ0LFxyXG4gICAgY2xvc2VDb21wb25lbnQ6ICgpID0+IDxkaXYgLz4sXHJcbiAgICBjb21wb25lbnRQcm9wczogeyBvbkNsb3NlQnRuQ2xpY2s6IGNsb3NlTW9kYWwsIHNjcm9sbGJhckhlaWdodDogMzMwIH0sXHJcbn0pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBDbG9zZUljb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMTAuMDAzXCJcclxuICAgICAgaGVpZ2h0PVwiMTBcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwLjAwMyAxMFwiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZGF0YS1uYW1lPVwiX2lvbmljb25zX3N2Z19pb3MtY2xvc2UgKDUpXCJcclxuICAgICAgICBkPVwiTTE2Ni42ODYsMTY1LjU1bDMuNTczLTMuNTczYS44MzcuODM3LDAsMCwwLTEuMTg0LTEuMTg0bC0zLjU3MywzLjU3My0zLjU3My0zLjU3M2EuODM3LjgzNywwLDEsMC0xLjE4NCwxLjE4NGwzLjU3MywzLjU3My0zLjU3MywzLjU3M2EuODM3LjgzNywwLDAsMCwxLjE4NCwxLjE4NGwzLjU3My0zLjU3MywzLjU3MywzLjU3M2EuODM3LjgzNywwLDAsMCwxLjE4NC0xLjE4NFpcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTYwLjUgLTE2MC41NSlcIlxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IEZhY2Vib29rID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIHdpZHRoID0gJzE3cHgnLFxyXG4gIGhlaWdodCA9ICcxN3B4JyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD0nMCAwIDE3IDE3J1xyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGRhdGEtbmFtZT0nX2lvbmljb25zX3N2Z19sb2dvLWZhY2Vib29rICgxKSdcclxuICAgICAgICBkPSdNODAuMDYxLDY0SDY0LjkzOWEuOTM5LjkzOSwwLDAsMC0uOTM5LjkzOVY4MC4wNjFhLjkzOS45MzksMCwwLDAsLjkzOS45MzlINzIuNVY3NC4yNzFINzAuNDY4VjcxLjc5Mkg3Mi41VjY5Ljk1OWEzLjIzLDMuMjMsMCwwLDEsMy40ODQtMy4zOTFjLjkzOSwwLDEuOTQ4LjA3MSwyLjE4My4xdjIuMjkzSDc2LjZjLTEuMDY3LDAtMS4yNzEuNS0xLjI3MSwxLjI0OHYxLjU4aDIuNTQxbC0uMzMyLDIuNDc5SDc1LjMzM1Y4MWg0LjcyOEEuOTM5LjkzOSwwLDAsMCw4MSw4MC4wNjFWNjQuOTM5QS45MzkuOTM5LDAsMCwwLDgwLjA2MSw2NFonXHJcbiAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTY0IC02NCknXHJcbiAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgR29vZ2xlID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIHdpZHRoID0gJzE3cHgnLFxyXG4gIGhlaWdodCA9ICcxN3B4JyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD0nMCAwIDE2LjY3NyAxNydcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPSdNNjguNTc5LDU1LjI5bC0uMDg2LS4zNjRINjAuNTg0djMuMzQ4aDQuNzI1YTQuNzMsNC43MywwLDAsMS00LjYyNywzLjU1Niw1LjUzMyw1LjUzMywwLDAsMS0zLjcyNC0xLjQ4NCw1LjMxNiw1LjMxNiwwLDAsMS0xLjU4Ni0zLjc1Miw1LjQ4Myw1LjQ4MywwLDAsMSwxLjU1Ny0zLjc0OCw1LjMsNS4zLDAsMCwxLDMuNy0xLjQ0Nyw0LjgyNSw0LjgyNSwwLDAsMSwzLjE0NywxLjIyNmwyLjM3OS0yLjM2N2E4LjQxNyw4LjQxNywwLDAsMC01LjYtMi4xNThBOC4zOTEsOC4zOTEsMCwwLDAsNTIsNTYuNiw4LjU0MSw4LjU0MSwwLDAsMCw1NC4zMjYsNjIuNWE4Ljg3Myw4Ljg3MywwLDAsMCw2LjQsMi42LDcuODkxLDcuODkxLDAsMCwwLDUuNzQ3LTIuNDE2LDguNDg2LDguNDg2LDAsMCwwLDIuMjA3LTUuODc4LDkuNzg4LDkuNzg4LDAsMCwwLS4xLTEuNTE2WidcclxuICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTIgLTQ4LjEpJ1xyXG4gICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IFNob3BwaW5nQmFnID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3Bhbj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICB3aWR0aD0nMTIuNjg2J1xyXG4gICAgICAgIGhlaWdodD0nMTYnXHJcbiAgICAgICAgdmlld0JveD0nMCAwIDEyLjY4NiAxNidcclxuICAgICAgPlxyXG4gICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMjcwNCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI3LjAyMyAtMiknPlxyXG4gICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxNycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjcuMDIzIDUuMTU2KSc+XHJcbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTYnPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9J1BhdGggMydcclxuICAgICAgICAgICAgICAgIGQ9J002NS43LDExMS4wNDNsLS43MTQtOUExLjEyNSwxLjEyNSwwLDAsMCw2My44NzEsMTAxSDYyLjQ1OVYxMDMuMWEuNDY5LjQ2OSwwLDEsMS0uOTM3LDBWMTAxSDU3LjIxMVYxMDMuMWEuNDY5LjQ2OSwwLDEsMS0uOTM3LDBWMTAxSDU0Ljg2MmExLjEyNSwxLjEyNSwwLDAsMC0xLjExNywxLjAzM2wtLjcxNSw5LjAwNmEyLjYwNSwyLjYwNSwwLDAsMCwyLjYsMi44SDYzLjFhMi42MDUsMi42MDUsMCwwLDAsMi42LTIuODA2Wm0tNC4yMjQtNC41ODUtMi40MjQsMi40MjRhLjQ2OC40NjgsMCwwLDEtLjY2MywwbC0xLjEzNi0xLjEzNmEuNDY5LjQ2OSwwLDAsMSwuNjYzLS42NjNsLjguOCwyLjA5Mi0yLjA5MmEuNDY5LjQ2OSwwLDEsMSwuNjYzLjY2M1onXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTMuMDIzIC0xMDEuMDA1KSdcclxuICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMC4yNzQgMiknPlxyXG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE4Jz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPSdQYXRoIDQnXHJcbiAgICAgICAgICAgICAgICBkPSdNMTYwLjEzMiwwYTMuMSwzLjEsMCwwLDAtMy4wOTMsMy4wOTN2LjA2M2guOTM3VjMuMDkzYTIuMTU1LDIuMTU1LDAsMSwxLDQuMzExLDB2LjA2M2guOTM3VjMuMDkzQTMuMSwzLjEsMCwwLDAsMTYwLjEzMiwwWidcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNTcuMDM5KSdcclxuICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgU2hvcHBpbmdCYWdMYXJnZSA9ICh7XHJcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcclxuICB3aWR0aCA9ICcxOHB4JyxcclxuICBoZWlnaHQgPSAnMThweCcsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9JzAgMCAyMy43ODYgMzAnXHJcbiAgICA+XHJcbiAgICAgIDxnIGRhdGEtbmFtZT0nc2hvcHBpbmctYmFnICgzKScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUzLjAyMyknPlxyXG4gICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMjcwNCc+XHJcbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE3JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1My4wMjMgNS45MTgpJz5cclxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxNic+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nUGF0aCAzJ1xyXG4gICAgICAgICAgICAgICAgZD0nTTc2LjgsMTE5LjgyNmwtMS4zNC0xNi44ODFBMi4xMDksMi4xMDksMCwwLDAsNzMuMzYyLDEwMUg3MC43MTZ2My45MjFhLjg3OS44NzksMCwxLDEtMS43NTcsMFYxMDFINjAuODc1djMuOTIxYS44NzkuODc5LDAsMSwxLTEuNzU3LDBWMTAxSDU2LjQ3MmEyLjEwOSwyLjEwOSwwLDAsMC0yLjA5NCwxLjkzN2wtMS4zNCwxNi44ODZhNC44ODUsNC44ODUsMCwwLDAsNC44Nyw1LjI1OUg3MS45MjZhNC44ODQsNC44ODQsMCwwLDAsNC44Ny01LjI2MVptLTcuOTItOC42LTQuNTQ0LDQuNTQ0YS44NzguODc4LDAsMCwxLTEuMjQzLDBsLTIuMTMtMi4xM0EuODc4Ljg3OCwwLDAsMSw2Mi4yLDExMi40bDEuNTA5LDEuNTA4LDMuOTIzLTMuOTIzYS44NzkuODc5LDAsMSwxLDEuMjQyLDEuMjQzWidcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01My4wMjMgLTEwMS4wMDUpJ1xyXG4gICAgICAgICAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxOScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTkuMTE4KSc+XHJcbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTgnPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9J1BhdGggNCdcclxuICAgICAgICAgICAgICAgIGQ9J00xNjIuODM4LDBhNS44MDYsNS44MDYsMCwwLDAtNS44LDUuOHYuMTE5SDE1OC44VjUuOGE0LjA0Miw0LjA0MiwwLDEsMSw4LjA4Mywwdi4xMTloMS43NTdWNS44QTUuODA2LDUuODA2LDAsMCwwLDE2Mi44MzgsMFonXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTU3LjAzOSknXHJcbiAgICAgICAgICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgSlNPTkNvbmZpZz0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcclxuaW1wb3J0IHsgY29tcG9zZSwgbGF5b3V0LCBzcGFjZSwgY29sb3IsIGJvcmRlciB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xyXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQ8YW55PihcclxuICBjc3Moe1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwOiAnMCAxOHB4JyxcclxuICAgIGFwcGVhcmFuY2U6ICdub25lJyxcclxuICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgIGZvbnRTaXplOiAnYmFzZScsXHJcbiAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gICAgYm9yZGVyQ29sb3I6ICdncmF5LjUwMCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICdiYXNlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcclxuICAgIGhlaWdodDogJzQ4cHgnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlJyxcclxuICAgIC8vIG1iOiAzLFxyXG4gICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgIH0sXHJcbiAgfSksXHJcbiAge1xyXG4gICAgJyY6aG92ZXIsJjpmb2N1cyc6IHtcclxuICAgICAgb3V0bGluZTogMCxcclxuICAgIH0sXHJcblxyXG4gICAgJyY6OnBsYWNlaG9sZGVyJzoge1xyXG4gICAgICBjb2xvcjogJycsXHJcbiAgICB9LFxyXG4gICAgJyY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbic6IHtcclxuICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgfSxcclxuICAgICcmLmRpc2FibGVkJzoge1xyXG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXHJcbiAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wb3NlKGxheW91dCwgc3BhY2UsIGNvbG9yLCBib3JkZXIpXHJcbik7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XHJcbmV4cG9ydCBjb25zdCBJdGVtQm94ID0gc3R5bGVkLmRpdihcclxuICBjc3Moe1xyXG4gICAgZm9udFNpemU6ICdiYXNlJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIHB5OiAxNSxcclxuICAgIHB4OiAyNSxcclxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZGAsXHJcbiAgICBib3JkZXJCb3R0b21Db2xvcjogJ2dyYXkuMjAwJyxcclxuICB9KSxcclxuICB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9XHJcbik7XHJcbmV4cG9ydCBjb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXYoe1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICBtYXJnaW5MZWZ0OiAnMTVweCcsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nKHtcclxuICB3aWR0aDogNjAsXHJcbiAgaGVpZ2h0OiA2MCxcclxuICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgbWFyZ2luOiAnMCAxNXB4JyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBOYW1lID0gc3R5bGVkLnNwYW4oXHJcbiAgY3NzKHtcclxuICAgIGZvbnRXZWlnaHQ6ICdtZCcsXHJcbiAgICBjb2xvcjogJ3RleHQuYm9sZCcsXHJcbiAgICBtYjogJzBweCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgfSlcclxuKTtcclxuZXhwb3J0IGNvbnN0IFByaWNlID0gc3R5bGVkLnNwYW4oXHJcbiAgY3NzKHtcclxuICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgIG10OiAnMTBweCcsXHJcbiAgICBtYjogJzEwcHgnLFxyXG4gIH0pXHJcbik7XHJcbmV4cG9ydCBjb25zdCBXZWlnaHQgPSBzdHlsZWQuc3BhbihcclxuICBjc3Moe1xyXG4gICAgZm9udFNpemU6ICdzbScsXHJcbiAgICBmb250V2VpZ2h0OiAncmVndWxhcicsXHJcbiAgICBjb2xvcjogJ3RleHQucmVndWxhcicsXHJcbiAgICBtYjogJzVweCcsXHJcbiAgfSlcclxuKTtcclxuZXhwb3J0IGNvbnN0IFRvdGFsID0gc3R5bGVkLnNwYW4oXHJcbiAgY3NzKHtcclxuICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcclxuICAgIG1sOiAnYXV0bycsXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZW1vdmVCdXR0b24gPSBzdHlsZWQuYnV0dG9uKHtcclxuICBwYWRkaW5nOiAnNXB4JyxcclxuICBib3JkZXI6IDAsXHJcbiAgb3V0bGluZTogMCxcclxuICBtYXJnaW5MZWZ0OiAnMTVweCcsXHJcbiAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyxcclxuICB0cmFuc2l0aW9uOiAnYWxsIDAuNHMgZWFzZScsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG5cclxuICAnJjpob3Zlcic6IHtcclxuICAgIGNvbG9yOiAncmVkJyxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gJy4uL2NvdW50ZXIvY291bnRlcic7XHJcbmltcG9ydCB7IENsb3NlSWNvbiB9IGZyb20gJ0AvYXNzZXRzL2ljb25zL0Nsb3NlSWNvbic7XHJcbmltcG9ydCB7XHJcbiAgSXRlbUJveCxcclxuICBJbWFnZSxcclxuICBJbmZvcm1hdGlvbixcclxuICBOYW1lLFxyXG4gIFByaWNlLFxyXG4gIFdlaWdodCxcclxuICBUb3RhbCxcclxuICBSZW1vdmVCdXR0b24sXHJcbn0gZnJvbSAnLi9jYXJ0LWl0ZW0uc3R5bGUnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBkYXRhOiBhbnk7XHJcbiAgb25EZWNyZW1lbnQ6ICgpID0+IHZvaWQ7XHJcbiAgb25JbmNyZW1lbnQ6ICgpID0+IHZvaWQ7XHJcbiAgb25SZW1vdmU6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0SXRlbTogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBkYXRhLFxyXG4gIG9uRGVjcmVtZW50LFxyXG4gIG9uSW5jcmVtZW50LFxyXG4gIG9uUmVtb3ZlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCB0aHVtYkltYWdlLCBwcmljZSwgc2FsZVByaWNlLCB1bml0LCBjb3VudEluU3RvY2sgfSA9IGRhdGE7XHJcbiAgY29uc3QgZGlzcGxheVByaWNlID0gc2FsZVByaWNlID8gc2FsZVByaWNlIDogcHJpY2U7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJdGVtQm94PlxyXG4gICAgICA8Q291bnRlclxyXG4gICAgICAgIHZhbHVlPXtkYXRhLmNhcnRRdWFudGl0eX1cclxuICAgICAgICBvbkRlY3JlbWVudD17b25EZWNyZW1lbnR9XHJcbiAgICAgICAgb25JbmNyZW1lbnQ9e29uSW5jcmVtZW50fVxyXG4gICAgICAgIHZhcmlhbnQ9XCJsaWdodFZlcnRpY2FsXCJcclxuICAgICAgLz5cclxuICAgICAgPEltYWdlIHNyYz17dGh1bWJJbWFnZX0gLz5cclxuICAgICAgPEluZm9ybWF0aW9uPlxyXG4gICAgICAgIDxOYW1lPntuYW1lfTwvTmFtZT5cclxuICAgICAgICA8UHJpY2U+XHJcbiAgICAgICAgICB7ZGlzcGxheVByaWNlfVxyXG4gICAgICAgIDwvUHJpY2U+XHJcbiAgICAgICAgPFdlaWdodD5cclxuICAgICAgICAgIHsvKntxdWFudGl0eX0gWCB7dW5pdH0qL31cclxuICAgICAgICA8L1dlaWdodD5cclxuICAgICAgPC9JbmZvcm1hdGlvbj5cclxuICAgICAgPFRvdGFsPlxyXG4gICAgICAgIHsvKnsocXVhbnRpdHkgKiBkaXNwbGF5UHJpY2UpLnRvRml4ZWQoMil9Ki99XHJcbiAgICAgIDwvVG90YWw+XHJcbiAgICAgIDxSZW1vdmVCdXR0b24gb25DbGljaz17b25SZW1vdmV9PlxyXG4gICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgPC9SZW1vdmVCdXR0b24+XHJcbiAgICA8L0l0ZW1Cb3g+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDYXJ0UG9wdXBCdXR0b25TdHlsZWQsXHJcbiAgQnV0dG9uSW1nQm94LFxyXG4gIEl0ZW1Db3VudCxcclxuICBQcmljZUJveCxcclxuICBDYXJ0UG9wdXBCb3hCdXR0b24sXHJcbiAgUHJpY2VCb3hBbHQsXHJcbiAgVG90YWxJdGVtcyxcclxufSBmcm9tICcuL2NhcnQtcG9wdXAuc3R5bGUnO1xyXG5pbXBvcnQgeyBTaG9wcGluZ0JhZyB9IGZyb20gJ0AvYXNzZXRzL2ljb25zL1Nob3BwaW5nQmFnJztcclxuXHJcbnR5cGUgQ2FydEJ1dHRvblByb3BzID0ge1xyXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcclxuICBpdGVtQ291bnQ/OiBudW1iZXI7XHJcbiAgaXRlbVBvc3RmaXg/OiBhbnk7XHJcbiAgcHJpY2U/OiBudW1iZXI7XHJcbiAgcHJpY2VQcmVmaXg/OiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/OiAoZTogYW55KSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgQ2FydFBvcHVwQnV0dG9uOiBSZWFjdC5GQzxDYXJ0QnV0dG9uUHJvcHM+ID0gKHtcclxuICBpdGVtQ291bnQsXHJcbiAgaXRlbVBvc3RmaXggPSAnaXRlbXMnLFxyXG4gIHByaWNlLFxyXG4gIHByaWNlUHJlZml4ID0gJyQnLFxyXG4gIHN0eWxlLFxyXG4gIG9uQ2xpY2ssXHJcbiAgY2xhc3NOYW1lLFxyXG59KSA9PiAoXHJcbiAgPENhcnRQb3B1cEJ1dHRvblN0eWxlZCBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgIDxCdXR0b25JbWdCb3g+XHJcbiAgICAgIDxTaG9wcGluZ0JhZyAvPlxyXG4gICAgPC9CdXR0b25JbWdCb3g+XHJcbiAgICA8SXRlbUNvdW50PlxyXG4gICAgICB7aXRlbUNvdW50fSB7aXRlbVBvc3RmaXh9XHJcbiAgICA8L0l0ZW1Db3VudD5cclxuICAgIDxQcmljZUJveD5cclxuICAgICAge3ByaWNlUHJlZml4fVxyXG4gICAgICB7cGFyc2VGbG9hdChgJHtwcmljZX1gKS50b0ZpeGVkKDIpfVxyXG4gICAgPC9QcmljZUJveD5cclxuICA8L0NhcnRQb3B1cEJ1dHRvblN0eWxlZD5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBCb3hlZENhcnRCdXR0b246IFJlYWN0LkZDPENhcnRCdXR0b25Qcm9wcz4gPSAoe1xyXG4gIGl0ZW1Db3VudCxcclxuICBpdGVtUG9zdGZpeCA9ICdpdGVtcycsXHJcbiAgcHJpY2UsXHJcbiAgcHJpY2VQcmVmaXggPSAnJCcsXHJcbiAgc3R5bGUsXHJcbiAgb25DbGljayxcclxuICBjbGFzc05hbWUsXHJcbn0pID0+IChcclxuICA8Q2FydFBvcHVwQm94QnV0dG9uIHN0eWxlPXtzdHlsZX0gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgPFRvdGFsSXRlbXM+XHJcbiAgICAgIDxTaG9wcGluZ0JhZyAvPlxyXG4gICAgICB7aXRlbUNvdW50fSB7aXRlbVBvc3RmaXh9XHJcbiAgICA8L1RvdGFsSXRlbXM+XHJcbiAgICA8UHJpY2VCb3hBbHQ+XHJcbiAgICAgIHtwcmljZVByZWZpeH1cclxuICAgICAge3BhcnNlRmxvYXQoYCR7cHJpY2V9YCkudG9GaXhlZCgyKX1cclxuICAgIDwvUHJpY2VCb3hBbHQ+XHJcbiAgPC9DYXJ0UG9wdXBCb3hCdXR0b24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0UG9wdXBCdXR0b247XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcblxyXG5jb25zdCBDYXJ0UG9wdXBCdXR0b25TdHlsZWQgPSBzdHlsZWQoJ2J1dHRvbicpYFxyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICBib3gtc2hhZG93OiAke3RoZW1lR2V0KCdzaGFkb3dzLmJpZycsICcwIDIxcHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nOiAycHggMnB4IDJweCAzMHB4O1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTgxcHgpIHtcclxuICAgICY6bm90KC5maXhlZENhcnRQb3B1cCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbkltZ0JveCA9IHN0eWxlZCgnc3BhbicpYFxyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1Db3VudCA9IHN0eWxlZCgnc3BhbicpYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IFByaWNlQm94ID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgd2lkdGg6IDU2cHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMueHMnLCAnMTInKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcnRQb3B1cEJveEJ1dHRvbiA9IHN0eWxlZCgnYnV0dG9uJylgXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwJSAwJSAwJSAzMCU7XHJcbiAgYm9yZGVyOiAjMDA5RTdGIDFweCBzb2xpZDtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogJHt0aGVtZUdldCgnc2hhZG93cy5iaWcnLCAnMCAyMXB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTQ2cHg7XHJcbiAgei1pbmRleDogOTk7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUb3RhbEl0ZW1zID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuXHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcmljZUJveEFsdCA9IHN0eWxlZCgnc3BhbicpYFxyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAxNSUgMCUgMCUgMTUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQge1xyXG4gIEJ1dHRvbkltZ0JveCxcclxuICBDYXJ0UG9wdXBCdXR0b25TdHlsZWQsXHJcbiAgSXRlbUNvdW50LFxyXG4gIFByaWNlQm94LFxyXG4gIENhcnRQb3B1cEJveEJ1dHRvbixcclxuICBQcmljZUJveEFsdCxcclxuICBUb3RhbEl0ZW1zLFxyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdjb21wb25lbnRzL090aGVycy9idXR0b24vYnV0dG9uJztcclxuZXhwb3J0IHsgQnV0dG9uIH07XHJcblxyXG5leHBvcnQgY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiA0MHB4IDYwcHggMDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHggMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gc3R5bGVkLmgzYFxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmhlYWRpbmcnLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5sZycsICcyMScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN1YkhlYWRpbmcgPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9mZmVyU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4yMDAnLCAnI0Y3RjdGNycpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBPZmZlciA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4gIG1hcmdpbjogMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWxwZXJUZXh0ID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGEge1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ibHVlLmxpbmsnLCAnIzQyODVmNCcpfTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuYDtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDQ4cHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuMjAwJywgJyNmN2Y3ZjcnKX07XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuNzAwJywgJyNlNmU2ZTYnKX07XHJcbi8vICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuLy8gICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4vLyAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbi8vICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbi8vICAgcGFkZGluZzogMCAxOHB4O1xyXG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2U7XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbi8vICAgJjpob3ZlcixcclxuLy8gICAmOmZvY3VzIHtcclxuLy8gICAgIG91dGxpbmU6IDA7XHJcbi8vICAgfVxyXG5cclxuLy8gICAmOmZvY3VzIHtcclxuLy8gICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgJjo6cGxhY2Vob2xkZXIge1xyXG4vLyAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuLy8gICAgIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4ICsgMXB4KTtcclxuLy8gICB9XHJcblxyXG4vLyAgICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbi8vICAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbi8vICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vICAgfVxyXG5cclxuLy8gICAmLmRpc2FibGVkIHtcclxuLy8gICAgIC5pbm5lci13cmFwIHtcclxuLy8gICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuLy8gICAgICAgb3BhY2l0eTogMC42O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXZpZGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjUwMCcsICcjZjFmMWYxJyl9O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weCAtIDFweCk7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBXcmFwcGVyLFxyXG4gIENvbnRhaW5lcixcclxuICBIZWFkaW5nLFxyXG4gIFN1YkhlYWRpbmcsXHJcbiAgLy8gSW5wdXQsXHJcbiAgQnV0dG9uLFxyXG4gIExpbmtCdXR0b24sXHJcbiAgT2ZmZXIsXHJcbn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi1mb3JtLnN0eWxlJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdjb21wb25lbnRzL090aGVycy9mb3Jtcy9pbnB1dCc7XHJcbmNvbnN0IEZvcmdvdFBhc3N3b3JkTW9kYWw6UmVhY3QuRkM8e3NldEN1cnJlbnRGb3JtOih2YWx1ZTonc2lnblVwJ3wnZm9yZ290UGFzcyd8J3NpZ25JbicpPT52b2lkfT49KHtzZXRDdXJyZW50Rm9ybX0pPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZVNpZ25JbkZvcm0gPSAoKSA9PiB7XHJcbiAgICAgIHNldEN1cnJlbnRGb3JtKCdzaWduSW4nKVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDMwIH19PlxyXG4gICAgICAgIDxIZWFkaW5nPlxyXG4gICAgICAgICAgRm9yZ290IFBhc3N3b3JkXHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgICA8U3ViSGVhZGluZz5cclxuICAgICAgICAgIFdlJ2xsIHNlbmQgeW91IGEgbGluayB0byByZXNldCB5b3VyIHBhc3N3b3JkXHJcbiAgICAgICAgPC9TdWJIZWFkaW5nPlxyXG5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3Mgb3IgQ29udGFjdCBOby5cIlxyXG4gICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgbWI9JzEwcHgnXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICA+XHJcbiAgICAgICAgICBSZXNldCBQYXNzd29yZFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxPZmZlciBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwIDAnIH19PlxyXG4gICAgICAgICAgQmFjayB0b3snICd9XHJcbiAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWduSW5Gb3JtfT5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cclxuICAgICAgICA8L09mZmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkTW9kYWxcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZ25JbkZvcm0gZnJvbSAnLi9sb2dpbic7XHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9yZWdpc3Rlcic7XHJcbmltcG9ydCBGb3Jnb3RQYXNzRm9ybSBmcm9tICcuL2ZvcmdvdC1wYXNzd29yZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQge2Nsb3NlTW9kYWx9IGZyb20gXCJAcmVkcS9yZXVzZS1tb2RhbFwiO1xyXG5jb25zdCBBdXRoZW50aWNhdGlvbkZvcm09KHtyb3V0ZXJ9KT0+IHtcclxuICBjb25zdCB7aXNBdXRoZW50aWNhdGVkfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLmdsb2JhbFJlZHVjZXIpO1xyXG4gIGNvbnN0IFtjdXJyZW50Rm9ybSxzZXRDdXJyZW50Rm9ybV09dXNlU3RhdGU8J3NpZ25VcCd8J2ZvcmdvdFBhc3MnfCdzaWduSW4nPignc2lnblVwJylcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKGlzQXV0aGVudGljYXRlZCl7XHJcbiAgICAgIGlmKHJvdXRlci5wYXRobmFtZT09PScvbG9naW4nKXtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgY2xvc2VNb2RhbCgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFtpc0F1dGhlbnRpY2F0ZWRdKVxyXG4gIGlmIChjdXJyZW50Rm9ybSA9PT0gJ3NpZ25JbicpIHtcclxuICAgIHJldHVybiA8U2lnbkluRm9ybSAgc2V0Q3VycmVudEZvcm09e3NldEN1cnJlbnRGb3JtfS8+XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudEZvcm0gPT09ICdzaWduVXAnKSB7XHJcbiAgICByZXR1cm4gPFNpZ25VcCBzZXRDdXJyZW50Rm9ybT17c2V0Q3VycmVudEZvcm19Lz5cclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50Rm9ybSA9PT0gICdmb3Jnb3RQYXNzJykge1xyXG4gICAgcmV0dXJuIDxGb3Jnb3RQYXNzRm9ybSAgc2V0Q3VycmVudEZvcm09e3NldEN1cnJlbnRGb3JtfS8+XHJcbiAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEF1dGhlbnRpY2F0aW9uRm9ybSlcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBMaW5rQnV0dG9uLFxyXG4gIEJ1dHRvbixcclxuICBJY29uV3JhcHBlcixcclxuICBXcmFwcGVyLFxyXG4gIENvbnRhaW5lcixcclxuICBMb2dvV3JhcHBlcixcclxuICBIZWFkaW5nLFxyXG4gIFN1YkhlYWRpbmcsXHJcbiAgT2ZmZXJTZWN0aW9uLFxyXG4gIE9mZmVyLFxyXG4gIC8vIElucHV0LFxyXG4gIERpdmlkZXIsXHJcbn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi1mb3JtLnN0eWxlJztcclxuaW1wb3J0IHsgRmFjZWJvb2sgfSBmcm9tICdhc3NldHMvaWNvbnMvRmFjZWJvb2snO1xyXG5pbXBvcnQgeyBHb29nbGUgfSBmcm9tICdhc3NldHMvaWNvbnMvR29vZ2xlJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnQHJlZHEvcmV1c2UtbW9kYWwnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2NvbXBvbmVudHMvT3RoZXJzL2Zvcm1zL2lucHV0JztcclxuaW1wb3J0IHt1c2VMb2dpbkZvcm19IGZyb20gXCJAL2hvb2tzL3VzZUxvZ2luRm9ybVwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtsb2FkVXNlciwgbG9naW59IGZyb20gXCJAL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSBmcm9tIFwiQC91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IHtBVVRIfSBmcm9tIFwiQC9yZWR1eC9kZWZpbmVzXCI7XHJcbmltcG9ydCBUb2FzdCBmcm9tIFwibGlnaHQtdG9hc3RcIjtcclxuaW1wb3J0IHtKU09OQ29uZmlnfSBmcm9tIFwiQC9heGlvc0hlYWRlcnNcIjtcclxuXHJcbmNvbnN0IFNpZ25Jbk1vZGFsOlJlYWN0LkZDPHtzZXRDdXJyZW50Rm9ybToodmFsdWU6J3NpZ25VcCd8J2ZvcmdvdFBhc3MnfCdzaWduSW4nKT0+dm9pZH0+PSh7c2V0Q3VycmVudEZvcm19KT0+IHtcclxuICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgdG9nZ2xlU2lnblVwRm9ybSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRGb3JtKCdzaWduVXAnKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUZvcmdvdFBhc3NGb3JtID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudEZvcm0oJ2ZvcmdvdFBhc3MnKVxyXG4gIH07XHJcbiAgY29uc3Qge2lucHV0cywgaGFuZGxlSW5wdXRDaGFuZ2V9ID0gdXNlTG9naW5Gb3JtKCk7XHJcblxyXG5cclxuICBjb25zdCBsb2dpbkNhbGxiYWNrID1hc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvYXV0aC9sb2dpbmAsXHJcbiAgICAgICAgICB7ZW1haWw6aW5wdXRzLmVtYWlsLCBwYXNzd29yZDppbnB1dHMucGFzc3dvcmR9LFxyXG4gICAgICAgICAgSlNPTkNvbmZpZ1xyXG4gICAgICApXHJcbiAgICAgIGRpc3BhdGNoKGxvZ2luKGRhdGEpKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgSlNPTi5zdHJpbmdpZnkoZGF0YS50b2tlbikpXHJcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGxvYWRVc2VyKCkpXHJcbiAgICAgIFRvYXN0LnN1Y2Nlc3MoJ1N1Y2Nlc3NmdWxseSBsb2dnZWQgaW4nKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIFRvYXN0LmZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvciArJywgUGxlYXNlIHRyeSBhZ2FpbicpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxIZWFkaW5nPlxyXG4gICAgICAgICAgICBXZWxjb21lIEJhY2tcclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuXHJcbiAgICAgICAgICA8U3ViSGVhZGluZz5cclxuICAgICAgICAgICAgTG9naW4gd2l0aCB5b3VyIGVtYWlsICZhbXA7IHBhc3N3b3JkXHJcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17bG9naW5DYWxsYmFja30+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT17XCJlbWFpbFwifVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkIChtaW4gNiBjaGFyYWN0ZXJzKVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbnRpbnVlICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPERpdmlkZXI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgb3JcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvRGl2aWRlcj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI2N2IyJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpbkNhbGxiYWNrfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPEZhY2Vib29rIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIENvbnRpbnVlIHdpdGggRmFjZWJvb2tcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI4NWY0JyB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luQ2FsbGJhY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgICA8R29vZ2xlIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIENvbnRpbnVlIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8T2ZmZXIgc3R5bGU9e3sgcGFkZGluZzogJzIwcHggMCcgfX0+XHJcbiAgICAgICAgICAgIERvbid0IGhhdmUgYW55IGFjY291bnQ/eycgJ31cclxuICAgICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17dG9nZ2xlU2lnblVwRm9ybX0+XHJcbiAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XHJcbiAgICAgICAgICA8L09mZmVyPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICA8T2ZmZXJTZWN0aW9uPlxyXG4gICAgICAgICAgPE9mZmVyPlxyXG4gICAgICAgICAgICBGb3Jnb3QgeW91ciBwYXNzd29yZD9cclxuICAgICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17dG9nZ2xlRm9yZ290UGFzc0Zvcm19PlxyXG4gICAgICAgICAgICAgIFJlc2V0IEl0XHJcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cclxuICAgICAgICAgIDwvT2ZmZXI+XHJcbiAgICAgICAgPC9PZmZlclNlY3Rpb24+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25Jbk1vZGFsXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2NvbXBvbmVudHMvT3RoZXJzL2Zvcm1zL2lucHV0JztcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgSWNvbldyYXBwZXIsXHJcbiAgV3JhcHBlcixcclxuICBDb250YWluZXIsXHJcbiAgTG9nb1dyYXBwZXIsXHJcbiAgSGVhZGluZyxcclxuICBTdWJIZWFkaW5nLFxyXG4gIEhlbHBlclRleHQsXHJcbiAgT2ZmZXIsXHJcbiAgLy8gSW5wdXQsXHJcbiAgRGl2aWRlcixcclxuICBMaW5rQnV0dG9uLFxyXG59IGZyb20gJy4vYXV0aGVudGljYXRpb24tZm9ybS5zdHlsZSc7XHJcbmltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnYXNzZXRzL2ljb25zL0ZhY2Vib29rJztcclxuaW1wb3J0IHsgR29vZ2xlIH0gZnJvbSAnYXNzZXRzL2ljb25zL0dvb2dsZSc7XHJcbmltcG9ydCB7dXNlTG9naW5Gb3JtfSBmcm9tIFwiQC9ob29rcy91c2VMb2dpbkZvcm1cIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7bG9hZFVzZXIsIHJlZ2lzdGVyfSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCB7QVVUSH0gZnJvbSBcIkAvcmVkdXgvZGVmaW5lc1wiO1xyXG5pbXBvcnQge0pTT05Db25maWd9IGZyb20gXCJAL2F4aW9zSGVhZGVyc1wiO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSBcImxpZ2h0LXRvYXN0XCI7XHJcbmNvbnN0IFNpZ251cE1vZGFsOlJlYWN0LkZDPHtzZXRDdXJyZW50Rm9ybToodmFsdWU6J3NpZ25VcCd8J2ZvcmdvdFBhc3MnfCdzaWduSW4nKT0+dm9pZH0+PSh7c2V0Q3VycmVudEZvcm19KT0+IHtcclxuICBjb25zdCB0b2dnbGVTaWduSW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudEZvcm0oJ3NpZ25JbicpXHJcbiAgfTtcclxuICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXHJcbiAgY29uc3Qge2lucHV0cywgaGFuZGxlSW5wdXRDaGFuZ2V9ID0gdXNlTG9naW5Gb3JtKCk7XHJcbiAgY29uc3Qgb25TdWJtaXQ9YXN5bmMgKGUpPT57XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL2F1dGgvcmVnaXN0ZXJgLFxyXG4gICAgICAgICAge2ZpcnN0TmFtZTppbnB1dHMuZmlyc3ROYW1lLGxhc3ROYW1lOmlucHV0cy5sYXN0TmFtZSwgZW1haWw6aW5wdXRzLmVtYWlsLCBwYXNzd29yZDppbnB1dHMucGFzc3dvcmQsIHJvbGU6J3VzZXInfSxcclxuICAgICAgICAgIEpTT05Db25maWdcclxuICAgICAgKVxyXG4gICAgICBkaXNwYXRjaChyZWdpc3RlcihkYXRhKSlcclxuICAgICAgYXdhaXQgbG9hZFVzZXIoKVxyXG4gICAgICBUb2FzdC5zdWNjZXNzKCdTdWNjZXNzZnVsbHkgc2lnbmVkIHVwJylcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIEpTT04uc3RyaW5naWZ5KGRhdGEudG9rZW4pKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIFRvYXN0LmZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRpbmc+XHJcbiAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDxTdWJIZWFkaW5nPlxyXG4gICAgICAgICAgRXZlcnkgZmlsbCBpcyByZXF1aXJlZCBpbiBzaWduIHVwXHJcbiAgICAgICAgPC9TdWJIZWFkaW5nPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSAnRmlyc3QgbmFtZSdcclxuICAgICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9JyNGN0Y3RjcnXHJcbiAgICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgICAgICBuYW1lPSdmaXJzdE5hbWUnXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5maXJzdE5hbWV9XHJcblxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSAnTGFzdCBuYW1lJ1xyXG4gICAgICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9JyNGN0Y3RjcnXHJcbiAgICAgICAgICAgICAgbWI9JzEwcHgnXHJcbiAgICAgICAgICAgICAgbmFtZT0nbGFzdE5hbWUnXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLmxhc3ROYW1lfVxyXG5cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCBBZGRyZXNzJ1xyXG4gICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgbWI9JzEwcHgnXHJcbiAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5lbWFpbH1cclxuXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9ICdQYXNzd29yZCAobWluIDYgY2hhcmFjdGVycyknXHJcbiAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9JyNGN0Y3RjcnXHJcbiAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxIZWxwZXJUZXh0IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAgMzBweCcgfX0+XHJcbiAgICAgICAgICBCeSBzaWduaW5nIHVwLCB5b3UgYWdyZWUgdG9cclxuICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIFRlcm1zICZhbXA7IENvbmRpdGlvblxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9IZWxwZXJUZXh0PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT0nYmlnJyB3aWR0aD0nMTAwJScgdHlwZT0nc3VibWl0Jz5cclxuICAgICAgICAgIENvbnRpbnVlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxEaXZpZGVyPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIG9yXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9EaXZpZGVyPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI2N2IyJyxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICA8RmFjZWJvb2sgLz5cclxuICAgICAgICAgIDwvSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICBDb250aW51ZSB3aXRoIEZhY2Vib29rXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJyM0Mjg1ZjQnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICA8R29vZ2xlIC8+XHJcbiAgICAgICAgICA8L0ljb25XcmFwcGVyPlxyXG4gICAgICAgICAgQ29udGludWUgd2l0aCBHb29nbGVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8T2ZmZXIgc3R5bGU9e3sgcGFkZGluZzogJzIwcHggMCcgfX0+XHJcbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97JyAnfVxyXG4gICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17dG9nZ2xlU2lnbkluRm9ybX0+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XHJcbiAgICAgICAgPC9PZmZlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXBNb2RhbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuL2NhcnQnO1xyXG5pbXBvcnQgQ2FydFBvcHVwQnV0dG9uLCB7XHJcbiAgQm94ZWRDYXJ0QnV0dG9uLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cy9jYXJ0L3BvcHVwL2NhcnQtcG9wdXAtYnV0dG9uJztcclxuaW1wb3J0IHsgQ2FydFNsaWRlUG9wdXAgfSBmcm9tICcuL2NhcnQuc3R5bGUnO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtjYWxjdWxhdGVUb3RhbFByaWNlfSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FydFV0aWxzXCI7XHJcbmltcG9ydCB7T3BlbkNhcnRNb2RhbH0gZnJvbSBcIkAvT3Blbk1vZGFsRnVuY3Rpb25zXCI7XHJcbmNvbnN0IENhcnRQb3B1cFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgLmNhcnRQb3B1cCB7XHJcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjMjNmZjAwOztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcclxuXHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICAgICAgb3ZlcmZsb3c6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbnR5cGUgQ2FydFByb3BzID0ge1xyXG4gIGRldmljZVR5cGU6IHtcclxuICAgIG1vYmlsZTogYm9vbGVhbjtcclxuICAgIHRhYmxldDogYm9vbGVhbjtcclxuICAgIGRlc2t0b3A6IGJvb2xlYW47XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IENhcnRQb3BVcDogUmVhY3QuRkM8Q2FydFByb3BzPiA9ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldmljZVR5cGU6IHsgbW9iaWxlLCB0YWJsZXQsIGRlc2t0b3AgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICBjb25zdCBbaXNPcGVuLHNldElzT3Blbl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcclxuICBjb25zdCB7Y3VycmVuY3k6e3N5bWJvbH19ID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuc2hvcFJlZHVjZXIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2RhbCA9ICgpID0+IHtcclxuICAgIE9wZW5DYXJ0TW9kYWwoKVxyXG4gIH07XHJcblxyXG4gIGxldCBjYXJ0U2xpZGVyQ2xhc3MgPSBpc09wZW4gPyAnY2FydFBvcHVwRml4ZWQnIDogJyc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge21vYmlsZSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Q2FydFBvcHVwU3R5bGUgLz5cclxuICAgICAgICAgICAgICA8Q2FydFBvcHVwQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJvZHVjdC1jYXJ0J1xyXG4gICAgICAgICAgICAgICAgICBpdGVtQ291bnQ9e2NhcnRTdGF0ZS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1Qb3N0Zml4PXtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0U3RhdGUubGVuZ3RoID4gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcHJpY2U9e2NhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlKX1cclxuICAgICAgICAgICAgICAgICAgcHJpY2VQcmVmaXg9e3N5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW9kYWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Q2FydFNsaWRlUG9wdXAgY2xhc3NOYW1lPXtjYXJ0U2xpZGVyQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcnQgb25DbG9zZUJ0bkNsaWNrPXsoKT0+e3NldElzT3BlbihmYWxzZSl9fSBzY3JvbGxiYXJIZWlnaHQ9JzEwMHZoJyAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NhcnRTbGlkZVBvcHVwPlxyXG5cclxuICAgICAgICAgICAgICA8Qm94ZWRDYXJ0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJvZHVjdC1jYXJ0J1xyXG4gICAgICAgICAgICAgICAgICBpdGVtQ291bnQ9e2NhcnRTdGF0ZS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1Qb3N0Zml4PXtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0U3RhdGUubGVuZ3RoID4gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2l0ZW1zJyAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcHJpY2U9e2NhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlKX1cclxuICAgICAgICAgICAgICAgICAgcHJpY2VQcmVmaXg9e3N5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntzZXRJc09wZW4odHJ1ZSl9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0UG9wVXA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtcclxuICBDYXJ0UG9wdXBCb2R5LFxyXG4gIFBvcHVwSGVhZGVyLFxyXG4gIFBvcHVwSXRlbUNvdW50LFxyXG4gIENsb3NlQnV0dG9uLFxyXG4gIFByb21vQ29kZSxcclxuICBDaGVja291dEJ1dHRvbldyYXBwZXIsXHJcbiAgQ2hlY2tvdXRCdXR0b24sXHJcbiAgVGl0bGUsXHJcbiAgUHJpY2VCb3gsXHJcbiAgTm9Qcm9kdWN0SW1nLFxyXG4gIEl0ZW1XcmFwcGVyLFxyXG4gIENvdXBvbkJveFdyYXBwZXIsXHJcbiAgQ291cG9uQ29kZSwgTm9Qcm9kdWN0TXNnLFxyXG59IGZyb20gJy4vY2FydC5zdHlsZSc7XHJcbmltcG9ydCB7IENsb3NlSWNvbiB9IGZyb20gJ2Fzc2V0cy9pY29ucy9DbG9zZUljb24nO1xyXG5pbXBvcnQgeyBTaG9wcGluZ0JhZ0xhcmdlIH0gZnJvbSAnYXNzZXRzL2ljb25zL1Nob3BwaW5nQmFnTGFyZ2UnO1xyXG5pbXBvcnQgeyBOb0NhcnRCYWcgfSBmcm9tICdhc3NldHMvaWNvbnMvTm9DYXJ0QmFnJztcclxuaW1wb3J0IHtjYWxjdWxhdGVUb3RhbFByaWNlfSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FydFV0aWxzXCI7XHJcbmltcG9ydCB7IENhcnRJdGVtIH0gZnJvbSAnQC9jb21wb25lbnRzL2NhcnQvaXRlbS9jYXJ0LWl0ZW0nO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtkZWNyZWFzZVF1YW50aXR5Q2FydCxpbmNyZWFzZVF1YW50aXR5Q2FydCxyZW1vdmVGcm9tQ2FydCxyZW1vdmVBbGxGcm9tQ2FydH0gZnJvbSBcIkAvcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbnR5cGUgQ2FydFByb3BzVHlwZSA9IHtcclxuICBzdHlsZT86IGFueTtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgc2Nyb2xsYmFySGVpZ2h0Pzogc3RyaW5nO1xyXG4gIGlzT3Blbj86Ym9vbGVhbjtcclxuICBvbkNsb3NlQnRuQ2xpY2s/OiAoZTogYW55KSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgQ2FydDogUmVhY3QuRkM8Q2FydFByb3BzVHlwZT4gPSAoe1xyXG4gIHN0eWxlLFxyXG4gIGNsYXNzTmFtZSxcclxuICBvbkNsb3NlQnRuQ2xpY2ssXHJcbn0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRQb3B1cEJvZHkgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIDxQb3B1cEhlYWRlcj5cclxuICAgICAgICA8UG9wdXBJdGVtQ291bnQ+XHJcbiAgICAgICAgICA8U2hvcHBpbmdCYWdMYXJnZSB3aWR0aD0nMTlweCcgaGVpZ2h0PScyNHB4JyAvPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHsxfVxyXG4gICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgaXRlbXNcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1BvcHVwSXRlbUNvdW50PlxyXG5cclxuICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17b25DbG9zZUJ0bkNsaWNrfT5cclxuICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICA8L0Nsb3NlQnV0dG9uPlxyXG4gICAgICA8L1BvcHVwSGVhZGVyPlxyXG5cclxuICAgICAgICA8SXRlbVdyYXBwZXIgY2xhc3NOYW1lPSdpdGVtcy13cmFwcGVyJz5cclxuICAgICAgICAgIHtjYXJ0U3RhdGUubGVuZ3RoPjAgPyAoXHJcbiAgICAgICAgICAgIGNhcnRTdGF0ZS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8Q2FydEl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17YGNhcnRJdGVtLSR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgb25JbmNyZW1lbnQ9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goaW5jcmVhc2VRdWFudGl0eUNhcnQoaXRlbS5jYXJ0SWQpKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uRGVjcmVtZW50PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGRlY3JlYXNlUXVhbnRpdHlDYXJ0KGl0ZW0uY2FydElkKSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblJlbW92ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChyZW1vdmVGcm9tQ2FydChpdGVtLmNhcnRJZCkpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZGF0YT17aXRlbX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Tm9Qcm9kdWN0SW1nPlxyXG4gICAgICAgICAgICAgICAgPE5vQ2FydEJhZyAvPlxyXG4gICAgICAgICAgICAgIDwvTm9Qcm9kdWN0SW1nPlxyXG4gICAgICAgICAgICAgIDxOb1Byb2R1Y3RNc2c+XHJcbiAgICAgICAgICAgICAgICBObyBwcm9kdWN0cyBmb3VuZFxyXG4gICAgICAgICAgICAgIDwvTm9Qcm9kdWN0TXNnPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9JdGVtV3JhcHBlcj5cclxuXHJcbiAgICAgIDxDaGVja291dEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgPFByb21vQ29kZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHJlbW92ZUFsbEZyb21DYXJ0KCkpfT5cclxuICAgICAgICAgICAgICAgICAgUmVtb3ZlIEFsbFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9Qcm9tb0NvZGU+XHJcblxyXG4gICAgICAgIHt0cnVlID8gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nL2NoZWNrb3V0Jz5cclxuICAgICAgICAgICAgPENoZWNrb3V0QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2VCdG5DbGlja30+XHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgQ2hlY2tvdXRcclxuICAgICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8UHJpY2VCb3g+XHJcbiAgICAgICAgICAgICAgICAgIHsvKntDVVJSRU5DWX0qL31cclxuICAgICAgICAgICAgICAgICAge2NhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlKX1cclxuICAgICAgICAgICAgICAgIDwvUHJpY2VCb3g+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIDwvQ2hlY2tvdXRCdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxDaGVja291dEJ1dHRvbj5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8VGl0bGU+XHJcbiAgICAgICAgICAgICAgICBDaGVja291dFxyXG4gICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgPFByaWNlQm94PlxyXG4gICAgICAgICAgICAgICAge2NhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlKX1cclxuICAgICAgICAgICAgICA8L1ByaWNlQm94PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvQ2hlY2tvdXRCdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9DaGVja291dEJ1dHRvbldyYXBwZXI+XHJcbiAgICA8L0NhcnRQb3B1cEJvZHk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCB1c2VMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGU8YW55Pih7fSk7XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDphbnkpID0+IHtcclxuICAgICAgICBldmVudC5wZXJzaXN0KCk7XHJcbiAgICAgICAgc2V0SW5wdXRzKChpbnB1dHM6IGFueSkgPT4gKHsuLi5pbnB1dHMsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2UsXHJcbiAgICAgICAgaW5wdXRzXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCB7dXNlTG9naW5Gb3JtfSIsImltcG9ydCB7R0xPQkFMLCBGT1JNLCBBVVRIfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXRBdXRoVG9rZW4gZnJvbSBcIi4uL3NldEF1dGhUb2tlblwiO1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCBUb2FzdCBmcm9tICdsaWdodC10b2FzdCc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsQ3VycmVuY3kgPSAoY3VyOnN0cmluZykgPT4gKHtcclxuICAgIHR5cGU6IEdMT0JBTC5TRVRfQ1VSUkVOQ1ksXHJcbiAgICBjdXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbENhdGVnb3J5ID0gKGNhdGVnb3J5OnN0cmluZykgPT4gKHtcclxuICAgIHR5cGU6IEdMT0JBTC5TRVRfQ0FURUdPUlksXHJcbiAgICBjYXRlZ29yeSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsU2VhcmNoID0gKGtleXdvcmQ6c3RyaW5nKSA9PiAoe1xyXG4gICAgdHlwZTogR0xPQkFMLlNFVF9TRUFSQ0gsXHJcbiAgICBrZXl3b3JkLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBVVRILkxPR19JTixcclxuICAgIHBheWxvYWQ6IGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFVVEguU0lHTl9VUCxcclxuICAgIHBheWxvYWQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IChkaXNwYXRjaDphbnkpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySW5mbycpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FydEl0ZW1zJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZXJzaXN0OnJvb3QnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NoaXBwaW5nQWRkcmVzcycpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGF5bWVudE1ldGhvZCcpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxyXG4gICAgZGlzcGF0Y2goe3R5cGU6IEFVVEguTE9HX09VVH0pXHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJy8nXHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvYWRVc2VyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOmFueSkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS50b2tlbikge1xyXG4gICAgICAgIGNvbnN0IHRva2VuPWxvY2FsU3RvcmFnZS50b2tlbi5yZXBsYWNlQWxsKCdcIicsJycpXHJcbiAgICAgICAgLy9zZW5kaW5nIHRva2VuIHRvIGhlYWRlcnNcclxuICAgICAgICBzZXRBdXRoVG9rZW4odG9rZW4pXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9hdXRoL21lYCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBVVRILkxPQURfVVNFUixcclxuICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBVVRILkxPQURfVVNFUl9GQUlMLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBlcnIucmVzcG9uc2UuZGF0YS5lcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVPcmRlciA9IChvcmRlcjpvYmplY3QpID0+IGFzeW5jIChkaXNwYXRjaDphbnkpID0+IHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSV9CQVNFX1VSTH0vYXBpL29yZGVyc2AsIG9yZGVyLCBjb25maWcpXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpBVVRILk9SREVSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhcnRJdGVtcycpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BlcnNpc3Q6cm9vdCcpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID1cclxuICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VzID09PSAnTm90IGF1dGhvcml6ZWQsIHRva2VuIGZhaWxlZCcpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9nb3V0KCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBzZXRBdXRoVG9rZW49KHRva2VuOnN0cmluZyk9PntcclxuICAgIGlmKHRva2VuKXtcclxuICAgICAgICAvL2FkZGluZyB0b2tlbiB0byB0aGUgaGVhZGVyc1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ109YEJlYXJlciAke3Rva2VufWA7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAvL3JlbW92aW5nIHRva2VuIGZyb20gdGhlIGhlYWRlcnNcclxuICAgICAgICBkZWxldGUgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNldEF1dGhUb2tlbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==