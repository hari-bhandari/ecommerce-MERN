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
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  \n  padding: 40px 60px 0;\n\n  @media (max-width: 768px) {\n    padding: 40px 30px 0;\n  }\n"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xpZ2h0LXRvYXN0L2Rpc3QvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9PcGVuTW9kYWxGdW5jdGlvbnMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ljb25zL0Nsb3NlSWNvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaWNvbnMvRmFjZWJvb2sudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ljb25zL0dvb2dsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaWNvbnMvU2hvcHBpbmdCYWcudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ljb25zL1Nob3BwaW5nQmFnTGFyZ2UudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvYXhpb3NIZWFkZXJzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3RoZXJzL2Zvcm1zL2lucHV0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbS5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhcnQvaXRlbS9jYXJ0LWl0ZW0udHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJ0L3BvcHVwL2NhcnQtcG9wdXAtYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FydC9wb3B1cC9jYXJ0LXBvcHVwLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm0vYXV0aGVudGljYXRpb24tZm9ybS5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtL2ZvcmdvdC1wYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm0vbG9naW4udHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9yZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9jYXJ0L2NhcnQtcG9wdXAudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvY2FydC9jYXJ0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9ucy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NldEF1dGhUb2tlbi50cyJdLCJuYW1lcyI6WyJPcGVuQXV0aFRhYiIsIm9wZW5Nb2RhbCIsInNob3ciLCJvdmVybGF5Q2xhc3NOYW1lIiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsImNvbXBvbmVudCIsIkF1dGhlbnRpY2F0aW9uRm9ybSIsImNsb3NlQ29tcG9uZW50IiwiY29uZmlnIiwiZW5hYmxlUmVzaXppbmciLCJkaXNhYmxlRHJhZ2dpbmciLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsIk9wZW5DYXJ0TW9kYWwiLCJ0cmFuc2l0aW9uIiwidGVuc2lvbiIsImZyaWN0aW9uIiwiQ2FydCIsImNvbXBvbmVudFByb3BzIiwib25DbG9zZUJ0bkNsaWNrIiwiY2xvc2VNb2RhbCIsInNjcm9sbGJhckhlaWdodCIsIkNsb3NlSWNvbiIsIkZhY2Vib29rIiwiY29sb3IiLCJHb29nbGUiLCJTaG9wcGluZ0JhZyIsIlNob3BwaW5nQmFnTGFyZ2UiLCJKU09OQ29uZmlnIiwiaGVhZGVycyIsIklucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJjc3MiLCJkaXNwbGF5IiwicCIsImFwcGVhcmFuY2UiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdXRsaW5lIiwibWFyZ2luIiwiY3Vyc29yIiwib3BhY2l0eSIsImNvbXBvc2UiLCJsYXlvdXQiLCJzcGFjZSIsIkl0ZW1Cb3giLCJkaXYiLCJmb250V2VpZ2h0IiwicHkiLCJweCIsImJvcmRlckJvdHRvbSIsImJvcmRlckJvdHRvbUNvbG9yIiwiYWxpZ25JdGVtcyIsIkluZm9ybWF0aW9uIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJJbWFnZSIsImltZyIsIm9iamVjdEZpdCIsIk5hbWUiLCJzcGFuIiwibWIiLCJQcmljZSIsIm10IiwiV2VpZ2h0IiwiVG90YWwiLCJtbCIsIlJlbW92ZUJ1dHRvbiIsImJ1dHRvbiIsInBhZGRpbmciLCJDYXJ0SXRlbSIsImRhdGEiLCJvbkRlY3JlbWVudCIsIm9uSW5jcmVtZW50Iiwib25SZW1vdmUiLCJuYW1lIiwidGh1bWJJbWFnZSIsInByaWNlIiwic2FsZVByaWNlIiwidW5pdCIsImNvdW50SW5TdG9jayIsImRpc3BsYXlQcmljZSIsImNhcnRRdWFudGl0eSIsIkNhcnRQb3B1cEJ1dHRvbiIsIml0ZW1Db3VudCIsIml0ZW1Qb3N0Zml4IiwicHJpY2VQcmVmaXgiLCJzdHlsZSIsIm9uQ2xpY2siLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIkJveGVkQ2FydEJ1dHRvbiIsIkNhcnRQb3B1cEJ1dHRvblN0eWxlZCIsInRoZW1lR2V0IiwiQnV0dG9uSW1nQm94IiwiSXRlbUNvdW50IiwiUHJpY2VCb3giLCJDYXJ0UG9wdXBCb3hCdXR0b24iLCJUb3RhbEl0ZW1zIiwiUHJpY2VCb3hBbHQiLCJJY29uV3JhcHBlciIsIldyYXBwZXIiLCJDb250YWluZXIiLCJMb2dvV3JhcHBlciIsIkhlYWRpbmciLCJoMyIsIlN1YkhlYWRpbmciLCJPZmZlclNlY3Rpb24iLCJPZmZlciIsIkhlbHBlclRleHQiLCJEaXZpZGVyIiwiTGlua0J1dHRvbiIsIkZvcmdvdFBhc3N3b3JkTW9kYWwiLCJzZXRDdXJyZW50Rm9ybSIsInRvZ2dsZVNpZ25JbkZvcm0iLCJwYWRkaW5nQm90dG9tIiwicm91dGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImdsb2JhbFJlZHVjZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VTdGF0ZSIsImN1cnJlbnRGb3JtIiwidXNlRWZmZWN0IiwicGF0aG5hbWUiLCJwdXNoIiwid2l0aFJvdXRlciIsIlNpZ25Jbk1vZGFsIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvZ2dsZVNpZ25VcEZvcm0iLCJ0b2dnbGVGb3Jnb3RQYXNzRm9ybSIsInVzZUxvZ2luRm9ybSIsImlucHV0cyIsImhhbmRsZUlucHV0Q2hhbmdlIiwibG9naW5DYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsIkFQSV9CQVNFX1VSTCIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJsb2FkVXNlciIsIlRvYXN0Iiwic3VjY2VzcyIsImZhaWwiLCJyZXNwb25zZSIsImVycm9yIiwibWFyZ2luQm90dG9tIiwiU2lnbnVwTW9kYWwiLCJvblN1Ym1pdCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicm9sZSIsInJlZ2lzdGVyIiwiQ2FydFBvcHVwU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNhcnRQb3BVcCIsImRldmljZVR5cGUiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2FydFN0YXRlIiwiY2FydFJlZHVjZXIiLCJzaG9wUmVkdWNlciIsInN5bWJvbCIsImN1cnJlbmN5IiwiaGFuZGxlTW9kYWwiLCJjYXJ0U2xpZGVyQ2xhc3MiLCJsZW5ndGgiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwibWFwIiwiaXRlbSIsImluY3JlYXNlUXVhbnRpdHlDYXJ0IiwiY2FydElkIiwiZGVjcmVhc2VRdWFudGl0eUNhcnQiLCJyZW1vdmVGcm9tQ2FydCIsImlkIiwicmVtb3ZlQWxsRnJvbUNhcnQiLCJzZXRHbG9iYWxDdXJyZW5jeSIsImN1ciIsInR5cGUiLCJHTE9CQUwiLCJTRVRfQ1VSUkVOQ1kiLCJzZXRHbG9iYWxDYXRlZ29yeSIsImNhdGVnb3J5IiwiU0VUX0NBVEVHT1JZIiwic2V0R2xvYmFsU2VhcmNoIiwia2V5d29yZCIsIlNFVF9TRUFSQ0giLCJBVVRIIiwiTE9HX0lOIiwicGF5bG9hZCIsIlNJR05fVVAiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiTE9HX09VVCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZUFsbCIsInNldEF1dGhUb2tlbiIsImdldCIsInJlcyIsIkxPQURfVVNFUiIsIkxPQURfVVNFUl9GQUlMIiwiY3JlYXRlT3JkZXIiLCJvcmRlciIsIk9SREVSX1NVQ0NFU1MiLCJtZXNzYWdlcyIsIm1lc3NhZ2UiLCJkZWZhdWx0cyIsImNvbW1vbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDMUI7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MseUJBQXlCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMkJBQTJCLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsUUFBUTs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Es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QThCLGVBQTlCLHFCQUF5RHpFLEtBQXpEO0FBQ0gsR0FIRCxNQUdLO0FBQ0Q7QUFDQSxXQUFPViw0Q0FBSyxDQUFDa0YsUUFBTixDQUFlck0sT0FBZixDQUF1QnNNLE1BQXZCLENBQThCLGVBQTlCLENBQVA7QUFDSDtBQUNKLENBUkQ7O0FBU2VYLDJFQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxudmFyIEV2ZW50TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50TWFuYWdlcigpIHtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLl9wdWJsaXNoZWRFdmVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLl91bmlxdWVJZCA9IDA7IC8vIHVzZSBzZWxmIGluY3JlYXNpbmcgbnVtYmVyIHRvIGd1YXJhbnRlZSBnbG9iYWwgdW5pcXVlbmVzc1xyXG4gICAgfVxyXG4gICAgRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50c1tuYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudHNbbmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGV2ZW50ID0geyBrZXk6IHRoaXMuX3VuaXF1ZUlkKyssIGNhbGxiYWNrOiBjYWxsYmFjayB9O1xyXG4gICAgICAgIHRoaXMuX2V2ZW50c1tuYW1lXS5wdXNoKGV2ZW50KTtcclxuICAgICAgICByZXR1cm4gZXZlbnQua2V5O1xyXG4gICAgfTtcclxuICAgIEV2ZW50TWFuYWdlci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fcHVibGlzaGVkRXZlbnRzLnB1c2goeyBuYW1lOiBuYW1lLCBkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudHNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBfYS5jYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51blN1YnNjcmliZSA9IGZ1bmN0aW9uIChuYW1lLCBrZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZXZlbnRzW25hbWVdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSB0aGlzLl9ldmVudHNbbmFtZV1baV0ua2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW25hbWVdLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBNYWtlIHN1cmUgcHVibGlzaGVkIGV2ZW50cyBjYW4gYmUgdHJpZ2dlcmVkIHdoZW4gc3Vic2NyaWJlZFxyXG4gICAgRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5lbnN1cmVUcmlnZ2VyZWRBbmRTdWJzY3JpYmUgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLl9wdWJsaXNoZWRFdmVudHNcclxuICAgICAgICAgICAgLnNsaWNlKClcclxuICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAuZmluZChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5uYW1lID09PSBuYW1lOyB9KTtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZShuYW1lLCBjYWxsYmFjayk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEV2ZW50TWFuYWdlcjtcclxufSgpKTtcclxudmFyIGV2ZW50TWFuYWdlciA9IG5ldyBFdmVudE1hbmFnZXIoKTtcblxuZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgY3NzXzI0OHogPSBcIi5zdHlsZV9tYXNrX185em1TTntwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1hbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtanVzdGlmeS1jb250ZW50OmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7ei1pbmRleDoxOTk5fS5zdHlsZV9ib3hfXzJpaWE0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO21heC13aWR0aDo4NSU7bWluLXdpZHRoOjk1cHg7cGFkZGluZzo5cHggMTVweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7dGV4dC1hbGlnbjpjZW50ZXI7d29yZC1icmVhazpicmVhay1hbGw7d2hpdGUtc3BhY2U6cHJlLXdyYXA7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNTgsNTgsNTgsLjkpO2JvcmRlci1yYWRpdXM6M3B4O29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOSk7dHJhbnNmb3JtOnNjYWxlKC45KTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO3RyYW5zaXRpb246b3BhY2l0eSAuM3MsLXdlYmtpdC10cmFuc2Zvcm0gLjNzO3RyYW5zaXRpb246b3BhY2l0eSAuM3MsdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzLHRyYW5zZm9ybSAuM3MsLXdlYmtpdC10cmFuc2Zvcm0gLjNzfS5zdHlsZV9lbnRlcl9fMjlMeVF7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0uc3R5bGVfZXhpdF9fM1dZbXB7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45KTt0cmFuc2Zvcm06c2NhbGUoLjkpfS5zdHlsZV9tZXNzYWdlX18xRFVYY3tsaW5lLWhlaWdodDoxLjU7Zm9udC1zaXplOjE0cHh9LnN0eWxlX3dyYXBwZXJfX2NRRnlYe21hcmdpbjowIGF1dG8gN3B4O3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9LnN0eWxlX2xvYWRpbmdfXzJwYjdKey13ZWJraXQtYW5pbWF0aW9uOnN0eWxlX2xvYWRpbmdfXzJwYjdKIDFzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246c3R5bGVfbG9hZGluZ19fMnBiN0ogMXMgbGluZWFyIGluZmluaXRlfUAtd2Via2l0LWtleWZyYW1lcyBzdHlsZV9sb2FkaW5nX18ycGI3Snt0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1Aa2V5ZnJhbWVzIHN0eWxlX2xvYWRpbmdfXzJwYjdKe3Rvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fVwiO1xudmFyIHN0eWxlcyA9IHtcIm1hc2tcIjpcInN0eWxlX21hc2tfXzl6bVNOXCIsXCJib3hcIjpcInN0eWxlX2JveF9fMmlpYTRcIixcImVudGVyXCI6XCJzdHlsZV9lbnRlcl9fMjlMeVFcIixcImV4aXRcIjpcInN0eWxlX2V4aXRfXzNXWW1wXCIsXCJtZXNzYWdlXCI6XCJzdHlsZV9tZXNzYWdlX18xRFVYY1wiLFwid3JhcHBlclwiOlwic3R5bGVfd3JhcHBlcl9fY1FGeVhcIixcImxvYWRpbmdcIjpcInN0eWxlX2xvYWRpbmdfXzJwYjdKXCJ9O1xuc3R5bGVJbmplY3QoY3NzXzI0OHopO1xuXG52YXIgSWNvbiA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHR5cGUgPSBfYS50eXBlO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHZpZXdCb3g6IFwiMCAwIDEwMjQgMTAyNFwiLCBmaWxsOiBcIiNmZmZcIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk02OTkgMzUzaC00Ni45Yy0xMC4yIDAtMTkuOSA0LjktMjUuOSAxMy4zTDQ2OSA1ODQuM2wtNzEuMi05OC44Yy02LTguMy0xNS42LTEzLjMtMjUuOS0xMy4zSDMyNWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMTI0LjYgMTcyLjhhMzEuOCAzMS44IDAgMCAwIDUxLjcgMGwyMTAuNi0yOTJjMy45LTUuMy4xLTEyLjctNi40LTEyLjd6XCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnpcIiB9KSkpO1xyXG4gICAgICAgIGNhc2UgJ2ZhaWwnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIiwgZmlsbDogXCIjZmZmXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNNjg1LjQgMzU0LjhjMC00LjQtMy42LTgtOC04bC02NiAuM0w1MTIgNDY1LjZsLTk5LjMtMTE4LjQtNjYuMS0uM2MtNC40IDAtOCAzLjUtOCA4IDAgMS45LjcgMy43IDEuOSA1LjJsMTMwLjEgMTU1TDM0MC41IDY3MGE4LjMyIDguMzIgMCAwIDAtMS45IDUuMmMwIDQuNCAzLjYgOCA4IDhsNjYuMS0uM0w1MTIgNTY0LjRsOTkuMyAxMTguNCA2NiAuM2M0LjQgMCA4LTMuNSA4LTggMC0xLjktLjctMy43LTEuOS01LjJMNTUzLjUgNTE1bDEzMC4xLTE1NWMxLjItMS40IDEuOC0zLjMgMS44LTUuMnpcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNNTEyIDY1QzI2NC42IDY1IDY0IDI2NS42IDY0IDUxM3MyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NSA1MTIgNjV6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyelwiIH0pKSk7XHJcbiAgICAgICAgY2FzZSAnbG9hZGluZyc6XHJcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHZpZXdCb3g6IFwiMCAwIDEwMjQgMTAyNFwiLCBmaWxsOiBcIiNmZmZcIiwgY2xhc3NOYW1lOiBzdHlsZXMubG9hZGluZyB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk05ODggNTQ4Yy0xOS45IDAtMzYtMTYuMS0zNi0zNiAwLTU5LjQtMTEuNi0xMTctMzQuNi0xNzEuM2E0NDAuNDUgNDQwLjQ1IDAgMCAwLTk0LjMtMTM5LjkgNDM3LjcxIDQzNy43MSAwIDAgMC0xMzkuOS05NC4zQzYyOSA4My42IDU3MS40IDcyIDUxMiA3MmMtMTkuOSAwLTM2LTE2LjEtMzYtMzZzMTYuMS0zNiAzNi0zNmM2OS4xIDAgMTM2LjIgMTMuNSAxOTkuMyA0MC4zQzc3Mi4zIDY2IDgyNyAxMDMgODc0IDE1MGM0NyA0NyA4My45IDEwMS44IDEwOS43IDE2Mi43IDI2LjcgNjMuMSA0MC4yIDEzMC4yIDQwLjIgMTk5LjMuMSAxOS45LTE2IDM2LTM1LjkgMzZ6XCIgfSkpKTtcclxuICAgIH1cclxufTtcblxudmFyIFRvYXN0ID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgaWQgPSBfYS5pZCwgdHlwZSA9IF9hLnR5cGUsIGNvbnRlbnQgPSBfYS5jb250ZW50LCBfYiA9IF9hLmR1cmF0aW9uLCBkdXJhdGlvbiA9IF9iID09PSB2b2lkIDAgPyAzMDAwIDogX2IsIG9uQ2xvc2UgPSBfYS5vbkNsb3NlO1xyXG4gICAgdmFyIF9jID0gdXNlU3RhdGUoc3R5bGVzLmJveCksIGNsYXNzZXMgPSBfY1swXSwgc2V0Q2xhc3NlcyA9IF9jWzFdO1xyXG4gICAgdmFyIF9kID0gdXNlU3RhdGUoZmFsc2UpLCBlbnRlcmVkID0gX2RbMF0sIHNldEVudGVyZWQgPSBfZFsxXTtcclxuICAgIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBmdW5jdGlvbiBleGl0KCkge1xyXG4gICAgICAgIHNldENsYXNzZXMoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3R5bGVzLmJveCArIFwiIFwiICsgc3R5bGVzLmV4aXQ7IH0pO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBmb3JjZSBhIHJlcGFpbnRcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICByZWYuY3VycmVudCAmJiByZWYuY3VycmVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgc2V0Q2xhc3NlcyhmdW5jdGlvbiAocHJldikgeyByZXR1cm4gcHJldiArIFwiIFwiICsgc3R5bGVzLmVudGVyOyB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IC0xO1xyXG4gICAgICAgIHZhciB0aW1lcklkID0gLTE7XHJcbiAgICAgICAgaWYgKGVudGVyZWQpIHtcclxuICAgICAgICAgICAgLy8gY29tcG9uZW50IG1vdW50aW5nIGlzIGFzeW5jLCB0aGVyZSBtaWdodCBiZSBhbiBleGl0IGNvbW1hbmQgYmVmb3JlIGEgdG9hc3QgbW91bnRzXHJcbiAgICAgICAgICAgIC8vIHNvIHdlIHNob3VsZCBtYWtlIHN1cmUgdG8gdHJpZ2dlciB0aGUgcHVibGlzaGVkIGV4aXQgZXZlbnRcclxuICAgICAgICAgICAga2V5ID0gZXZlbnRNYW5hZ2VyLmVuc3VyZVRyaWdnZXJlZEFuZFN1YnNjcmliZSgnbHQjZXhpdCcsIGZ1bmN0aW9uIChtZXNzYWdlSWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlSWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGR1cmF0aW9uICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lcklkID0gd2luZG93LnNldFRpbWVvdXQoZXhpdCwgZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV2ZW50TWFuYWdlci51blN1YnNjcmliZSgnbHQjZXhpdCcsIGtleSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXJJZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtpZCwgZHVyYXRpb24sIGVudGVyZWRdKTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLm1hc2sgfSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLCBzdHlsZTogdHlwZSA9PT0gJ2luZm8nID8gdW5kZWZpbmVkIDogeyBwYWRkaW5nOiAxNSwgYm9yZGVyUmFkaXVzOiA1IH0sIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZW50ZXIgcGhhc2VcclxuICAgICAgICAgICAgICAgIGlmICh+Y2xhc3Nlcy5pbmRleE9mKHN0eWxlcy5lbnRlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFbnRlcmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZXhpdCBwaGFzZVxyXG4gICAgICAgICAgICAgICAgaWYgKH5jbGFzc2VzLmluZGV4T2Yoc3R5bGVzLmV4aXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCByZWY6IHJlZiB9LFxyXG4gICAgICAgICAgICB0eXBlICE9PSAnaW5mbycgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy53cmFwcGVyLCBzdHlsZTogdHlwZSA9PT0gJ2xvYWRpbmcnID8geyBtYXJnaW5Cb3R0b206IDEwIH0gOiB1bmRlZmluZWQgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiB0eXBlIH0pKSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMubWVzc2FnZSB9LCBjb250ZW50KSkpKTtcclxufTtcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbnZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XG5cbi8qKlxyXG4gKiBNZXNzYWdlIHF1ZXVlLlxyXG4gKiBTYXZlIG1lc3NhZ2VzIGluIGEgcXVldWUsIG9ubHkgcmVtb3ZlIGl0IHdoZW4gY29tcG9uZW50IGxpZmVjeWNsZSBlbmRzLlxyXG4gKi9cclxudmFyIFF1ZXVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUXVldWUoKSB7XHJcbiAgICAgICAgdGhpcy5fbWVzc2FnZXMgPSBbXTtcclxuICAgICAgICB0aGlzLl91bmlxdWVJZCA9IDA7XHJcbiAgICB9XHJcbiAgICBRdWV1ZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fbWVzc2FnZXMucHVzaChfX2Fzc2lnbih7IGlkOiB0aGlzLl91bmlxdWVJZCsrIH0sIG1lc3NhZ2UpKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVldWUucHJvdG90eXBlLCBcImxlbmd0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlcy5sZW5ndGg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgUXVldWUucHJvdG90eXBlLmdldEZpcnN0TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZXNbMF07XHJcbiAgICB9O1xyXG4gICAgUXVldWUucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlcy5zaGlmdCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRdWV1ZTtcclxufSgpKTtcblxudmFyIHF1ZXVlID0gbmV3IFF1ZXVlKCk7XHJcbmV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2x0I3BvcG1lc3NhZ2UnLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBpZCA9IF9hLmlkLCB0eXBlID0gX2EudHlwZSwgY29udGVudCA9IF9hLmNvbnRlbnQsIGR1cmF0aW9uID0gX2EuZHVyYXRpb24sIG9uQ2xvc2UgPSBfYS5vbkNsb3NlO1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9hc3QsIHsgaWQ6IGlkLCB0eXBlOiB0eXBlLCBjb250ZW50OiBjb250ZW50LCBkdXJhdGlvbjogZHVyYXRpb24sIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShjb250YWluZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UgJiYgb25DbG9zZSgpO1xyXG4gICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRNYW5hZ2VyLnB1Ymxpc2goJ2x0I3BvcG1lc3NhZ2UnLCBxdWV1ZS5nZXRGaXJzdE1lc3NhZ2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IH0pLCBjb250YWluZXIpO1xyXG59KTtcclxuZnVuY3Rpb24gbm90aWNlKHR5cGUsIGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKSB7XHJcbiAgICBxdWV1ZS5wdXNoKHsgdHlwZTogdHlwZSwgY29udGVudDogY29udGVudCwgZHVyYXRpb246IGR1cmF0aW9uLCBvbkNsb3NlOiBvbkNsb3NlIH0pO1xyXG4gICAgLy8gdG9hc3QgcmlnaHQgbm93IGlmIHRoZXJlIGlzIG9ubHkgb25lIG1lc3NhZ2UgaW4gcXVldWVcclxuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBldmVudE1hbmFnZXIucHVibGlzaCgnbHQjcG9wbWVzc2FnZScsIHF1ZXVlLmdldEZpcnN0TWVzc2FnZSgpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBpZiBjdXJyZW50IG1lc3NhZ2UgaXMgbG9hZGluZywgdGhlbiB3ZSBzaG91bGQgdW5tb3VudCBpdCB0byBwcm9jZWVkXHJcbiAgICBpZiAocXVldWUubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gcXVldWUuZ2V0Rmlyc3RNZXNzYWdlKCk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2xvYWRpbmcnKSB7XHJcbiAgICAgICAgICAgIGV2ZW50TWFuYWdlci5wdWJsaXNoKCdsdCNleGl0JywgbWVzc2FnZS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbnZhciBpbmRleCA9IHtcclxuICAgIGluZm86IGZ1bmN0aW9uIChjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSkge1xyXG4gICAgICAgIG5vdGljZSgnaW5mbycsIGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKTtcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UpIHtcclxuICAgICAgICBub3RpY2UoJ3N1Y2Nlc3MnLCBjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSk7XHJcbiAgICB9LFxyXG4gICAgZmFpbDogZnVuY3Rpb24gKGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKSB7XHJcbiAgICAgICAgbm90aWNlKCdmYWlsJywgY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UpO1xyXG4gICAgfSxcclxuICAgIGxvYWRpbmc6IGZ1bmN0aW9uIChjb250ZW50LCBvbkNsb3NlKSB7XHJcbiAgICAgICAgbm90aWNlKCdsb2FkaW5nJywgY29udGVudCwgMCwgb25DbG9zZSk7XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGhpZGUgdGhlIGZpcnN0IHRvYXN0IGluIHRoZSBxdWV1ZSB3aGVuIGV4ZWN1dGluZyB0aGUgY29tbWFuZFxyXG4gICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGV2ZW50TWFuYWdlci5wdWJsaXNoKCdsdCNleGl0JywgcXVldWUuZ2V0Rmlyc3RNZXNzYWdlKCkuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iLCJpbXBvcnQgQXV0aGVudGljYXRpb25Gb3JtIGZyb20gXCJAL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm1cIjtcclxuaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSAnQHJlZHEvcmV1c2UtbW9kYWwnO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiQC9mZWF0dXJlcy9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9wZW5BdXRoVGFiPSgpPT5cclxuICAgIG9wZW5Nb2RhbCh7XHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgb3ZlcmxheUNsYXNzTmFtZTogJ3F1aWNrLXZpZXctb3ZlcmxheScsXHJcbiAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlOiB0cnVlLFxyXG4gICAgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkZvcm0sXHJcbiAgICBjbG9zZUNvbXBvbmVudDogJycsXHJcbiAgICBjb25maWc6IHtcclxuICAgICAgICBlbmFibGVSZXNpemluZzogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZURyYWdnaW5nOiB0cnVlLFxyXG4gICAgICAgIGNsYXNzTmFtZTogJ3F1aWNrLXZpZXctbW9kYWwnLFxyXG4gICAgICAgIHdpZHRoOiA0NTgsXHJcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICB9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IE9wZW5DYXJ0TW9kYWw9KCk9Pm9wZW5Nb2RhbCh7XHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgY29uZmlnOiB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiAnY2FydFBvcHVwJyxcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICAgIGVuYWJsZVJlc2l6aW5nOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlRHJhZ2dpbmc6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICB0ZW5zaW9uOiAzNjAsXHJcbiAgICAgICAgICAgIGZyaWN0aW9uOiA0MCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNsb3NlT25DbGlja091dHNpZGU6IHRydWUsXHJcbiAgICBjb21wb25lbnQ6IENhcnQsXHJcbiAgICBjbG9zZUNvbXBvbmVudDogKCkgPT4gPGRpdiAvPixcclxuICAgIGNvbXBvbmVudFByb3BzOiB7IG9uQ2xvc2VCdG5DbGljazogY2xvc2VNb2RhbCwgc2Nyb2xsYmFySGVpZ2h0OiAzMzAgfSxcclxufSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IENsb3NlSWNvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCIxMC4wMDNcIlxyXG4gICAgICBoZWlnaHQ9XCIxMFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTAuMDAzIDEwXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkYXRhLW5hbWU9XCJfaW9uaWNvbnNfc3ZnX2lvcy1jbG9zZSAoNSlcIlxyXG4gICAgICAgIGQ9XCJNMTY2LjY4NiwxNjUuNTVsMy41NzMtMy41NzNhLjgzNy44MzcsMCwwLDAtMS4xODQtMS4xODRsLTMuNTczLDMuNTczLTMuNTczLTMuNTczYS44MzcuODM3LDAsMSwwLTEuMTg0LDEuMTg0bDMuNTczLDMuNTczLTMuNTczLDMuNTczYS44MzcuODM3LDAsMCwwLDEuMTg0LDEuMTg0bDMuNTczLTMuNTczLDMuNTczLDMuNTczYS44MzcuODM3LDAsMCwwLDEuMTg0LTEuMTg0WlwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNjAuNSAtMTYwLjU1KVwiXHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgRmFjZWJvb2sgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgd2lkdGggPSAnMTdweCcsXHJcbiAgaGVpZ2h0ID0gJzE3cHgnLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PScwIDAgMTcgMTcnXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZGF0YS1uYW1lPSdfaW9uaWNvbnNfc3ZnX2xvZ28tZmFjZWJvb2sgKDEpJ1xyXG4gICAgICAgIGQ9J004MC4wNjEsNjRINjQuOTM5YS45MzkuOTM5LDAsMCwwLS45MzkuOTM5VjgwLjA2MWEuOTM5LjkzOSwwLDAsMCwuOTM5LjkzOUg3Mi41Vjc0LjI3MUg3MC40NjhWNzEuNzkySDcyLjVWNjkuOTU5YTMuMjMsMy4yMywwLDAsMSwzLjQ4NC0zLjM5MWMuOTM5LDAsMS45NDguMDcxLDIuMTgzLjF2Mi4yOTNINzYuNmMtMS4wNjcsMC0xLjI3MS41LTEuMjcxLDEuMjQ4djEuNThoMi41NDFsLS4zMzIsMi40NzlINzUuMzMzVjgxaDQuNzI4QS45MzkuOTM5LDAsMCwwLDgxLDgwLjA2MVY2NC45MzlBLjkzOS45MzksMCwwLDAsODAuMDYxLDY0WidcclxuICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNjQgLTY0KSdcclxuICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBHb29nbGUgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgd2lkdGggPSAnMTdweCcsXHJcbiAgaGVpZ2h0ID0gJzE3cHgnLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PScwIDAgMTYuNjc3IDE3J1xyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9J002OC41NzksNTUuMjlsLS4wODYtLjM2NEg2MC41ODR2My4zNDhoNC43MjVhNC43Myw0LjczLDAsMCwxLTQuNjI3LDMuNTU2LDUuNTMzLDUuNTMzLDAsMCwxLTMuNzI0LTEuNDg0LDUuMzE2LDUuMzE2LDAsMCwxLTEuNTg2LTMuNzUyLDUuNDgzLDUuNDgzLDAsMCwxLDEuNTU3LTMuNzQ4LDUuMyw1LjMsMCwwLDEsMy43LTEuNDQ3LDQuODI1LDQuODI1LDAsMCwxLDMuMTQ3LDEuMjI2bDIuMzc5LTIuMzY3YTguNDE3LDguNDE3LDAsMCwwLTUuNi0yLjE1OEE4LjM5MSw4LjM5MSwwLDAsMCw1Miw1Ni42LDguNTQxLDguNTQxLDAsMCwwLDU0LjMyNiw2Mi41YTguODczLDguODczLDAsMCwwLDYuNCwyLjYsNy44OTEsNy44OTEsMCwwLDAsNS43NDctMi40MTYsOC40ODYsOC40ODYsMCwwLDAsMi4yMDctNS44NzgsOS43ODgsOS43ODgsMCwwLDAtLjEtMS41MTZaJ1xyXG4gICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MiAtNDguMSknXHJcbiAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgU2hvcHBpbmdCYWcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuPlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgIHdpZHRoPScxMi42ODYnXHJcbiAgICAgICAgaGVpZ2h0PScxNidcclxuICAgICAgICB2aWV3Qm94PScwIDAgMTIuNjg2IDE2J1xyXG4gICAgICA+XHJcbiAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAyNzA0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjcuMDIzIC0yKSc+XHJcbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE3JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNy4wMjMgNS4xNTYpJz5cclxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxNic+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nUGF0aCAzJ1xyXG4gICAgICAgICAgICAgICAgZD0nTTY1LjcsMTExLjA0M2wtLjcxNC05QTEuMTI1LDEuMTI1LDAsMCwwLDYzLjg3MSwxMDFINjIuNDU5VjEwMy4xYS40NjkuNDY5LDAsMSwxLS45MzcsMFYxMDFINTcuMjExVjEwMy4xYS40NjkuNDY5LDAsMSwxLS45MzcsMFYxMDFINTQuODYyYTEuMTI1LDEuMTI1LDAsMCwwLTEuMTE3LDEuMDMzbC0uNzE1LDkuMDA2YTIuNjA1LDIuNjA1LDAsMCwwLDIuNiwyLjhINjMuMWEyLjYwNSwyLjYwNSwwLDAsMCwyLjYtMi44MDZabS00LjIyNC00LjU4NS0yLjQyNCwyLjQyNGEuNDY4LjQ2OCwwLDAsMS0uNjYzLDBsLTEuMTM2LTEuMTM2YS40NjkuNDY5LDAsMCwxLC42NjMtLjY2M2wuOC44LDIuMDkyLTIuMDkyYS40NjkuNDY5LDAsMSwxLC42NjMuNjYzWidcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01My4wMjMgLTEwMS4wMDUpJ1xyXG4gICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMwLjI3NCAyKSc+XHJcbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTgnPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9J1BhdGggNCdcclxuICAgICAgICAgICAgICAgIGQ9J00xNjAuMTMyLDBhMy4xLDMuMSwwLDAsMC0zLjA5MywzLjA5M3YuMDYzaC45MzdWMy4wOTNhMi4xNTUsMi4xNTUsMCwxLDEsNC4zMTEsMHYuMDYzaC45MzdWMy4wOTNBMy4xLDMuMSwwLDAsMCwxNjAuMTMyLDBaJ1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE1Ny4wMzkpJ1xyXG4gICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBTaG9wcGluZ0JhZ0xhcmdlID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIHdpZHRoID0gJzE4cHgnLFxyXG4gIGhlaWdodCA9ICcxOHB4JyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD0nMCAwIDIzLjc4NiAzMCdcclxuICAgID5cclxuICAgICAgPGcgZGF0YS1uYW1lPSdzaG9wcGluZy1iYWcgKDMpJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTMuMDIzKSc+XHJcbiAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAyNzA0Jz5cclxuICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUzLjAyMyA1LjkxOCknPlxyXG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE2Jz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPSdQYXRoIDMnXHJcbiAgICAgICAgICAgICAgICBkPSdNNzYuOCwxMTkuODI2bC0xLjM0LTE2Ljg4MUEyLjEwOSwyLjEwOSwwLDAsMCw3My4zNjIsMTAxSDcwLjcxNnYzLjkyMWEuODc5Ljg3OSwwLDEsMS0xLjc1NywwVjEwMUg2MC44NzV2My45MjFhLjg3OS44NzksMCwxLDEtMS43NTcsMFYxMDFINTYuNDcyYTIuMTA5LDIuMTA5LDAsMCwwLTIuMDk0LDEuOTM3bC0xLjM0LDE2Ljg4NmE0Ljg4NSw0Ljg4NSwwLDAsMCw0Ljg3LDUuMjU5SDcxLjkyNmE0Ljg4NCw0Ljg4NCwwLDAsMCw0Ljg3LTUuMjYxWm0tNy45Mi04LjYtNC41NDQsNC41NDRhLjg3OC44NzgsMCwwLDEtMS4yNDMsMGwtMi4xMy0yLjEzQS44NzguODc4LDAsMCwxLDYyLjIsMTEyLjRsMS41MDksMS41MDgsMy45MjMtMy45MjNhLjg3OS44NzksMCwxLDEsMS4yNDIsMS4yNDNaJ1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUzLjAyMyAtMTAxLjAwNSknXHJcbiAgICAgICAgICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1OS4xMTgpJz5cclxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxOCc+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nUGF0aCA0J1xyXG4gICAgICAgICAgICAgICAgZD0nTTE2Mi44MzgsMGE1LjgwNiw1LjgwNiwwLDAsMC01LjgsNS44di4xMTlIMTU4LjhWNS44YTQuMDQyLDQuMDQyLDAsMSwxLDguMDgzLDB2LjExOWgxLjc1N1Y1LjhBNS44MDYsNS44MDYsMCwwLDAsMTYyLjgzOCwwWidcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNTcuMDM5KSdcclxuICAgICAgICAgICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBKU09OQ29uZmlnPSB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xyXG5pbXBvcnQgeyBjb21wb3NlLCBsYXlvdXQsIHNwYWNlLCBjb2xvciwgYm9yZGVyIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dDxhbnk+KFxyXG4gIGNzcyh7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHA6ICcwIDE4cHgnLFxyXG4gICAgYXBwZWFyYW5jZTogJ25vbmUnLFxyXG4gICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgZm9udFNpemU6ICdiYXNlJyxcclxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXHJcbiAgICBib3JkZXJDb2xvcjogJ2dyYXkuNTAwJyxcclxuICAgIGJvcmRlclJhZGl1czogJ2Jhc2UnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgaGVpZ2h0OiAnNDhweCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzIGVhc2UnLFxyXG4gICAgLy8gbWI6IDMsXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgfSxcclxuICB9KSxcclxuICB7XHJcbiAgICAnJjpob3ZlciwmOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICAnJjo6cGxhY2Vob2xkZXInOiB7XHJcbiAgICAgIGNvbG9yOiAnJyxcclxuICAgIH0sXHJcbiAgICAnJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uJzoge1xyXG4gICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxyXG4gICAgICBtYXJnaW46IDAsXHJcbiAgICB9LFxyXG4gICAgJyYuZGlzYWJsZWQnOiB7XHJcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcclxuICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbXBvc2UobGF5b3V0LCBzcGFjZSwgY29sb3IsIGJvcmRlcilcclxuKTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcclxuZXhwb3J0IGNvbnN0IEl0ZW1Cb3ggPSBzdHlsZWQuZGl2KFxyXG4gIGNzcyh7XHJcbiAgICBmb250U2l6ZTogJ2Jhc2UnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgcHk6IDE1LFxyXG4gICAgcHg6IDI1LFxyXG4gICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkYCxcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnZ3JheS4yMDAnLFxyXG4gIH0pLFxyXG4gIHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH1cclxuKTtcclxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uID0gc3R5bGVkLmRpdih7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIG1hcmdpbkxlZnQ6ICcxNXB4JyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWcoe1xyXG4gIHdpZHRoOiA2MCxcclxuICBoZWlnaHQ6IDYwLFxyXG4gIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICBtYXJnaW46ICcwIDE1cHgnLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IE5hbWUgPSBzdHlsZWQuc3BhbihcclxuICBjc3Moe1xyXG4gICAgZm9udFdlaWdodDogJ21kJyxcclxuICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcclxuICAgIG1iOiAnMHB4JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICB9KVxyXG4pO1xyXG5leHBvcnQgY29uc3QgUHJpY2UgPSBzdHlsZWQuc3BhbihcclxuICBjc3Moe1xyXG4gICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgbXQ6ICcxMHB4JyxcclxuICAgIG1iOiAnMTBweCcsXHJcbiAgfSlcclxuKTtcclxuZXhwb3J0IGNvbnN0IFdlaWdodCA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBmb250U2l6ZTogJ3NtJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdyZWd1bGFyJyxcclxuICAgIGNvbG9yOiAndGV4dC5yZWd1bGFyJyxcclxuICAgIG1iOiAnNXB4JyxcclxuICB9KVxyXG4pO1xyXG5leHBvcnQgY29uc3QgVG90YWwgPSBzdHlsZWQuc3BhbihcclxuICBjc3Moe1xyXG4gICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgbWw6ICdhdXRvJyxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlbW92ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b24oe1xyXG4gIHBhZGRpbmc6ICc1cHgnLFxyXG4gIGJvcmRlcjogMCxcclxuICBvdXRsaW5lOiAwLFxyXG4gIG1hcmdpbkxlZnQ6ICcxNXB4JyxcclxuICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yNSknLFxyXG4gIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcblxyXG4gICcmOmhvdmVyJzoge1xyXG4gICAgY29sb3I6ICdyZWQnLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb3VudGVyIH0gZnJvbSAnLi4vY291bnRlci9jb3VudGVyJztcclxuaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSAnQC9hc3NldHMvaWNvbnMvQ2xvc2VJY29uJztcclxuaW1wb3J0IHtcclxuICBJdGVtQm94LFxyXG4gIEltYWdlLFxyXG4gIEluZm9ybWF0aW9uLFxyXG4gIE5hbWUsXHJcbiAgUHJpY2UsXHJcbiAgV2VpZ2h0LFxyXG4gIFRvdGFsLFxyXG4gIFJlbW92ZUJ1dHRvbixcclxufSBmcm9tICcuL2NhcnQtaXRlbS5zdHlsZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGRhdGE6IGFueTtcclxuICBvbkRlY3JlbWVudDogKCkgPT4gdm9pZDtcclxuICBvbkluY3JlbWVudDogKCkgPT4gdm9pZDtcclxuICBvblJlbW92ZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRJdGVtOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGRhdGEsXHJcbiAgb25EZWNyZW1lbnQsXHJcbiAgb25JbmNyZW1lbnQsXHJcbiAgb25SZW1vdmUsXHJcbn0pID0+IHtcclxuICBjb25zdCB7IG5hbWUsIHRodW1iSW1hZ2UsIHByaWNlLCBzYWxlUHJpY2UsIHVuaXQsIGNvdW50SW5TdG9jayB9ID0gZGF0YTtcclxuICBjb25zdCBkaXNwbGF5UHJpY2UgPSBzYWxlUHJpY2UgPyBzYWxlUHJpY2UgOiBwcmljZTtcclxuICByZXR1cm4gKFxyXG4gICAgPEl0ZW1Cb3g+XHJcbiAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgdmFsdWU9e2RhdGEuY2FydFF1YW50aXR5fVxyXG4gICAgICAgIG9uRGVjcmVtZW50PXtvbkRlY3JlbWVudH1cclxuICAgICAgICBvbkluY3JlbWVudD17b25JbmNyZW1lbnR9XHJcbiAgICAgICAgdmFyaWFudD1cImxpZ2h0VmVydGljYWxcIlxyXG4gICAgICAvPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXt0aHVtYkltYWdlfSAvPlxyXG4gICAgICA8SW5mb3JtYXRpb24+XHJcbiAgICAgICAgPE5hbWU+e25hbWV9PC9OYW1lPlxyXG4gICAgICAgIDxQcmljZT5cclxuICAgICAgICAgIHtkaXNwbGF5UHJpY2V9XHJcbiAgICAgICAgPC9QcmljZT5cclxuICAgICAgICA8V2VpZ2h0PlxyXG4gICAgICAgICAgey8qe3F1YW50aXR5fSBYIHt1bml0fSovfVxyXG4gICAgICAgIDwvV2VpZ2h0PlxyXG4gICAgICA8L0luZm9ybWF0aW9uPlxyXG4gICAgICA8VG90YWw+XHJcbiAgICAgICAgey8qeyhxdWFudGl0eSAqIGRpc3BsYXlQcmljZSkudG9GaXhlZCgyKX0qL31cclxuICAgICAgPC9Ub3RhbD5cclxuICAgICAgPFJlbW92ZUJ1dHRvbiBvbkNsaWNrPXtvblJlbW92ZX0+XHJcbiAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICA8L1JlbW92ZUJ1dHRvbj5cclxuICAgIDwvSXRlbUJveD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENhcnRQb3B1cEJ1dHRvblN0eWxlZCxcclxuICBCdXR0b25JbWdCb3gsXHJcbiAgSXRlbUNvdW50LFxyXG4gIFByaWNlQm94LFxyXG4gIENhcnRQb3B1cEJveEJ1dHRvbixcclxuICBQcmljZUJveEFsdCxcclxuICBUb3RhbEl0ZW1zLFxyXG59IGZyb20gJy4vY2FydC1wb3B1cC5zdHlsZSc7XHJcbmltcG9ydCB7IFNob3BwaW5nQmFnIH0gZnJvbSAnQC9hc3NldHMvaWNvbnMvU2hvcHBpbmdCYWcnO1xyXG5cclxudHlwZSBDYXJ0QnV0dG9uUHJvcHMgPSB7XHJcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG4gIGl0ZW1Db3VudD86IG51bWJlcjtcclxuICBpdGVtUG9zdGZpeD86IGFueTtcclxuICBwcmljZT86IG51bWJlcjtcclxuICBwcmljZVByZWZpeD86IHN0cmluZztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgb25DbGljaz86IChlOiBhbnkpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBDYXJ0UG9wdXBCdXR0b246IFJlYWN0LkZDPENhcnRCdXR0b25Qcm9wcz4gPSAoe1xyXG4gIGl0ZW1Db3VudCxcclxuICBpdGVtUG9zdGZpeCA9ICdpdGVtcycsXHJcbiAgcHJpY2UsXHJcbiAgcHJpY2VQcmVmaXggPSAnJCcsXHJcbiAgc3R5bGUsXHJcbiAgb25DbGljayxcclxuICBjbGFzc05hbWUsXHJcbn0pID0+IChcclxuICA8Q2FydFBvcHVwQnV0dG9uU3R5bGVkIHN0eWxlPXtzdHlsZX0gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgPEJ1dHRvbkltZ0JveD5cclxuICAgICAgPFNob3BwaW5nQmFnIC8+XHJcbiAgICA8L0J1dHRvbkltZ0JveD5cclxuICAgIDxJdGVtQ291bnQ+XHJcbiAgICAgIHtpdGVtQ291bnR9IHtpdGVtUG9zdGZpeH1cclxuICAgIDwvSXRlbUNvdW50PlxyXG4gICAgPFByaWNlQm94PlxyXG4gICAgICB7cHJpY2VQcmVmaXh9XHJcbiAgICAgIHtwYXJzZUZsb2F0KGAke3ByaWNlfWApLnRvRml4ZWQoMil9XHJcbiAgICA8L1ByaWNlQm94PlxyXG4gIDwvQ2FydFBvcHVwQnV0dG9uU3R5bGVkPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJveGVkQ2FydEJ1dHRvbjogUmVhY3QuRkM8Q2FydEJ1dHRvblByb3BzPiA9ICh7XHJcbiAgaXRlbUNvdW50LFxyXG4gIGl0ZW1Qb3N0Zml4ID0gJ2l0ZW1zJyxcclxuICBwcmljZSxcclxuICBwcmljZVByZWZpeCA9ICckJyxcclxuICBzdHlsZSxcclxuICBvbkNsaWNrLFxyXG4gIGNsYXNzTmFtZSxcclxufSkgPT4gKFxyXG4gIDxDYXJ0UG9wdXBCb3hCdXR0b24gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICA8VG90YWxJdGVtcz5cclxuICAgICAgPFNob3BwaW5nQmFnIC8+XHJcbiAgICAgIHtpdGVtQ291bnR9IHtpdGVtUG9zdGZpeH1cclxuICAgIDwvVG90YWxJdGVtcz5cclxuICAgIDxQcmljZUJveEFsdD5cclxuICAgICAge3ByaWNlUHJlZml4fVxyXG4gICAgICB7cGFyc2VGbG9hdChgJHtwcmljZX1gKS50b0ZpeGVkKDIpfVxyXG4gICAgPC9QcmljZUJveEFsdD5cclxuICA8L0NhcnRQb3B1cEJveEJ1dHRvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRQb3B1cEJ1dHRvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmNvbnN0IENhcnRQb3B1cEJ1dHRvblN0eWxlZCA9IHN0eWxlZCgnYnV0dG9uJylgXHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgcGFkZGluZzogMCAwIDAgMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG4gIGJveC1zaGFkb3c6ICR7dGhlbWVHZXQoJ3NoYWRvd3MuYmlnJywgJzAgMjFweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHBhZGRpbmc6IDJweCAycHggMnB4IDMwcHg7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1ODFweCkge1xyXG4gICAgJjpub3QoLmZpeGVkQ2FydFBvcHVwKSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uSW1nQm94ID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbUNvdW50ID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJpY2VCb3ggPSBzdHlsZWQoJ3NwYW4nKWBcclxuICB3aWR0aDogNTZweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy54cycsICcxMicpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FydFBvcHVwQm94QnV0dG9uID0gc3R5bGVkKCdidXR0b24nKWBcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMzAlIDAlIDAlIDMwJTtcclxuICBib3JkZXI6ICMwMDlFN0YgMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3gtc2hhZG93OiAke3RoZW1lR2V0KCdzaGFkb3dzLmJpZycsICcwIDIxcHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtNDZweDtcclxuICB6LWluZGV4OiA5OTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRvdGFsSXRlbXMgPSBzdHlsZWQoJ3NwYW4nKWBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG5cclxuICBzdmcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByaWNlQm94QWx0ID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIG1pbi13aWR0aDogODBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JSAwJSAwJSAxNSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgbWFyZ2luOiAwIDEwcHggMTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQnV0dG9uSW1nQm94LFxyXG4gIENhcnRQb3B1cEJ1dHRvblN0eWxlZCxcclxuICBJdGVtQ291bnQsXHJcbiAgUHJpY2VCb3gsXHJcbiAgQ2FydFBvcHVwQm94QnV0dG9uLFxyXG4gIFByaWNlQm94QWx0LFxyXG4gIFRvdGFsSXRlbXMsXHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMvT3RoZXJzL2J1dHRvbi9idXR0b24nO1xyXG5leHBvcnQgeyBCdXR0b24gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIFxyXG4gIHBhZGRpbmc6IDQwcHggNjBweCAwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMzBweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuaDNgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuaGVhZGluZycsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmxnJywgJzIxJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3ViSGVhZGluZyA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgT2ZmZXJTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjIwMCcsICcjRjdGN0Y3Jyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9mZmVyID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgbWFyZ2luOiAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlbHBlclRleHQgPSBzdHlsZWQucGBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmJsdWUubGluaycsICcjNDI4NWY0Jyl9O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGhlaWdodDogNDhweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iYXNlJywgJzZweCcpfTtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4yMDAnLCAnI2Y3ZjdmNycpfTtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS43MDAnLCAnI2U2ZTZlNicpfTtcclxuLy8gICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4vLyAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuLy8gICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbi8vICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuLy8gICBsaW5lLWhlaWdodDogMTlweDtcclxuLy8gICBwYWRkaW5nOiAwIDE4cHg7XHJcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZTtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuLy8gICAmOmhvdmVyLFxyXG4vLyAgICY6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogMDtcclxuLy8gICB9XHJcblxyXG4vLyAgICY6Zm9jdXMge1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbi8vICAgfVxyXG5cclxuLy8gICAmOjpwbGFjZWhvbGRlciB7XHJcbi8vICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4vLyAgICAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggKyAxcHgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuLy8gICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuLy8gICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICB9XHJcblxyXG4vLyAgICYuZGlzYWJsZWQge1xyXG4vLyAgICAgLmlubmVyLXdyYXAge1xyXG4vLyAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4vLyAgICAgICBvcGFjaXR5OiAwLjY7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyBgO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpdmlkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuNTAwJywgJyNmMWYxZjEnKX07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4IC0gMXB4KTtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFdyYXBwZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgU3ViSGVhZGluZyxcclxuICAvLyBJbnB1dCxcclxuICBCdXR0b24sXHJcbiAgTGlua0J1dHRvbixcclxuICBPZmZlcixcclxufSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLWZvcm0uc3R5bGUnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2NvbXBvbmVudHMvT3RoZXJzL2Zvcm1zL2lucHV0JztcclxuY29uc3QgRm9yZ290UGFzc3dvcmRNb2RhbDpSZWFjdC5GQzx7c2V0Q3VycmVudEZvcm06KHZhbHVlOidzaWduVXAnfCdmb3Jnb3RQYXNzJ3wnc2lnbkluJyk9PnZvaWR9Pj0oe3NldEN1cnJlbnRGb3JtfSk9PiB7XHJcbiAgY29uc3QgdG9nZ2xlU2lnbkluRm9ybSA9ICgpID0+IHtcclxuICAgICAgc2V0Q3VycmVudEZvcm0oJ3NpZ25JbicpXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMzAgfX0+XHJcbiAgICAgICAgPEhlYWRpbmc+XHJcbiAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmRcclxuICAgICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgIDxTdWJIZWFkaW5nPlxyXG4gICAgICAgICAgV2UnbGwgc2VuZCB5b3UgYSBsaW5rIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmRcclxuICAgICAgICA8L1N1YkhlYWRpbmc+XHJcblxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzcyBvciBDb250YWN0IE5vLlwiXHJcbiAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9JyNGN0Y3RjcnXHJcbiAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlc2V0IFBhc3N3b3JkXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPE9mZmVyIHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAgMCcgfX0+XHJcbiAgICAgICAgICBCYWNrIHRveycgJ31cclxuICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZ25JbkZvcm19PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxyXG4gICAgICAgIDwvT2ZmZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmRNb2RhbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2lnbkluRm9ybSBmcm9tICcuL2xvZ2luJztcclxuaW1wb3J0IFNpZ25VcCBmcm9tICcuL3JlZ2lzdGVyJztcclxuaW1wb3J0IEZvcmdvdFBhc3NGb3JtIGZyb20gJy4vZm9yZ290LXBhc3N3b3JkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7Y2xvc2VNb2RhbH0gZnJvbSBcIkByZWRxL3JldXNlLW1vZGFsXCI7XHJcbmNvbnN0IEF1dGhlbnRpY2F0aW9uRm9ybT0oe3JvdXRlcn0pPT4ge1xyXG4gIGNvbnN0IHtpc0F1dGhlbnRpY2F0ZWR9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgW2N1cnJlbnRGb3JtLHNldEN1cnJlbnRGb3JtXT11c2VTdGF0ZTwnc2lnblVwJ3wnZm9yZ290UGFzcyd8J3NpZ25Jbic+KCdzaWduVXAnKVxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoaXNBdXRoZW50aWNhdGVkKXtcclxuICAgICAgaWYocm91dGVyLnBhdGhuYW1lPT09Jy9sb2dpbicpe1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBjbG9zZU1vZGFsKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sW2lzQXV0aGVudGljYXRlZF0pXHJcbiAgaWYgKGN1cnJlbnRGb3JtID09PSAnc2lnbkluJykge1xyXG4gICAgcmV0dXJuIDxTaWduSW5Gb3JtICBzZXRDdXJyZW50Rm9ybT17c2V0Q3VycmVudEZvcm19Lz5cclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50Rm9ybSA9PT0gJ3NpZ25VcCcpIHtcclxuICAgIHJldHVybiA8U2lnblVwIHNldEN1cnJlbnRGb3JtPXtzZXRDdXJyZW50Rm9ybX0vPlxyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRGb3JtID09PSAgJ2ZvcmdvdFBhc3MnKSB7XHJcbiAgICByZXR1cm4gPEZvcmdvdFBhc3NGb3JtICBzZXRDdXJyZW50Rm9ybT17c2V0Q3VycmVudEZvcm19Lz5cclxuICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQXV0aGVudGljYXRpb25Gb3JtKVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIExpbmtCdXR0b24sXHJcbiAgQnV0dG9uLFxyXG4gIEljb25XcmFwcGVyLFxyXG4gIFdyYXBwZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIExvZ29XcmFwcGVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgU3ViSGVhZGluZyxcclxuICBPZmZlclNlY3Rpb24sXHJcbiAgT2ZmZXIsXHJcbiAgLy8gSW5wdXQsXHJcbiAgRGl2aWRlcixcclxufSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLWZvcm0uc3R5bGUnO1xyXG5pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gJ2Fzc2V0cy9pY29ucy9GYWNlYm9vayc7XHJcbmltcG9ydCB7IEdvb2dsZSB9IGZyb20gJ2Fzc2V0cy9pY29ucy9Hb29nbGUnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tICdAcmVkcS9yZXVzZS1tb2RhbCc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnY29tcG9uZW50cy9PdGhlcnMvZm9ybXMvaW5wdXQnO1xyXG5pbXBvcnQge3VzZUxvZ2luRm9ybX0gZnJvbSBcIkAvaG9va3MvdXNlTG9naW5Gb3JtXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2xvYWRVc2VyLCBsb2dpbn0gZnJvbSBcIkAvcmVkdXgvYWN0aW9ucy9nbG9iYWxBY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xyXG5pbXBvcnQge0FVVEh9IGZyb20gXCJAL3JlZHV4L2RlZmluZXNcIjtcclxuaW1wb3J0IFRvYXN0IGZyb20gXCJsaWdodC10b2FzdFwiO1xyXG5pbXBvcnQge0pTT05Db25maWd9IGZyb20gXCJAL2F4aW9zSGVhZGVyc1wiO1xyXG5cclxuY29uc3QgU2lnbkluTW9kYWw6UmVhY3QuRkM8e3NldEN1cnJlbnRGb3JtOih2YWx1ZTonc2lnblVwJ3wnZm9yZ290UGFzcyd8J3NpZ25JbicpPT52b2lkfT49KHtzZXRDdXJyZW50Rm9ybX0pPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKClcclxuICBjb25zdCB0b2dnbGVTaWduVXBGb3JtID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudEZvcm0oJ3NpZ25VcCcpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRm9yZ290UGFzc0Zvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Rm9ybSgnZm9yZ290UGFzcycpXHJcbiAgfTtcclxuICBjb25zdCB7aW5wdXRzLCBoYW5kbGVJbnB1dENoYW5nZX0gPSB1c2VMb2dpbkZvcm0oKTtcclxuXHJcblxyXG4gIGNvbnN0IGxvZ2luQ2FsbGJhY2sgPWFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9hdXRoL2xvZ2luYCxcclxuICAgICAgICAgIHtlbWFpbDppbnB1dHMuZW1haWwsIHBhc3N3b3JkOmlucHV0cy5wYXNzd29yZH0sXHJcbiAgICAgICAgICBKU09OQ29uZmlnXHJcbiAgICAgIClcclxuICAgICAgZGlzcGF0Y2gobG9naW4oZGF0YSkpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeShkYXRhLnRva2VuKSlcclxuICAgICAgYXdhaXQgZGlzcGF0Y2gobG9hZFVzZXIoKSlcclxuICAgICAgVG9hc3Quc3VjY2VzcygnU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbicpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgVG9hc3QuZmFpbChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yICsnLCBQbGVhc2UgdHJ5IGFnYWluJylcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8V3JhcHBlcj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEhlYWRpbmc+XHJcbiAgICAgICAgICAgIFdlbGNvbWUgQmFja1xyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxyXG4gICAgICAgICAgICBMb2dpbiB3aXRoIHlvdXIgZW1haWwgJmFtcDsgcGFzc3dvcmRcclxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtsb2dpbkNhbGxiYWNrfT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtcImVtYWlsXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQgKG1pbiA2IGNoYXJhY3RlcnMpXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9e1wicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ29udGludWUgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8RGl2aWRlcj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBvclxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9EaXZpZGVyPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjY3YjInLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luQ2FsbGJhY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgICA8RmFjZWJvb2sgLz5cclxuICAgICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgQ29udGludWUgd2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJyM0Mjg1ZjQnIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17bG9naW5DYWxsYmFja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxHb29nbGUgLz5cclxuICAgICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgQ29udGludWUgd2l0aCBHb29nbGVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxPZmZlciBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwJyB9fT5cclxuICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbnkgYWNjb3VudD97JyAnfVxyXG4gICAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWduVXBGb3JtfT5cclxuICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cclxuICAgICAgICAgIDwvT2ZmZXI+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIDxPZmZlclNlY3Rpb24+XHJcbiAgICAgICAgICA8T2ZmZXI+XHJcbiAgICAgICAgICAgIEZvcmdvdCB5b3VyIHBhc3N3b3JkP1xyXG4gICAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0b2dnbGVGb3Jnb3RQYXNzRm9ybX0+XHJcbiAgICAgICAgICAgICAgUmVzZXQgSXRcclxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxyXG4gICAgICAgICAgPC9PZmZlcj5cclxuICAgICAgICA8L09mZmVyU2VjdGlvbj5cclxuICAgICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluTW9kYWxcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnY29tcG9uZW50cy9PdGhlcnMvZm9ybXMvaW5wdXQnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBJY29uV3JhcHBlcixcclxuICBXcmFwcGVyLFxyXG4gIENvbnRhaW5lcixcclxuICBMb2dvV3JhcHBlcixcclxuICBIZWFkaW5nLFxyXG4gIFN1YkhlYWRpbmcsXHJcbiAgSGVscGVyVGV4dCxcclxuICBPZmZlcixcclxuICAvLyBJbnB1dCxcclxuICBEaXZpZGVyLFxyXG4gIExpbmtCdXR0b24sXHJcbn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi1mb3JtLnN0eWxlJztcclxuaW1wb3J0IHsgRmFjZWJvb2sgfSBmcm9tICdhc3NldHMvaWNvbnMvRmFjZWJvb2snO1xyXG5pbXBvcnQgeyBHb29nbGUgfSBmcm9tICdhc3NldHMvaWNvbnMvR29vZ2xlJztcclxuaW1wb3J0IHt1c2VMb2dpbkZvcm19IGZyb20gXCJAL2hvb2tzL3VzZUxvZ2luRm9ybVwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtsb2FkVXNlciwgcmVnaXN0ZXJ9IGZyb20gXCJAL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSBmcm9tIFwiQC91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IHtBVVRIfSBmcm9tIFwiQC9yZWR1eC9kZWZpbmVzXCI7XHJcbmltcG9ydCB7SlNPTkNvbmZpZ30gZnJvbSBcIkAvYXhpb3NIZWFkZXJzXCI7XHJcbmltcG9ydCBUb2FzdCBmcm9tIFwibGlnaHQtdG9hc3RcIjtcclxuY29uc3QgU2lnbnVwTW9kYWw6UmVhY3QuRkM8e3NldEN1cnJlbnRGb3JtOih2YWx1ZTonc2lnblVwJ3wnZm9yZ290UGFzcyd8J3NpZ25JbicpPT52b2lkfT49KHtzZXRDdXJyZW50Rm9ybX0pPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZVNpZ25JbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Rm9ybSgnc2lnbkluJylcclxuICB9O1xyXG4gIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKClcclxuICBjb25zdCB7aW5wdXRzLCBoYW5kbGVJbnB1dENoYW5nZX0gPSB1c2VMb2dpbkZvcm0oKTtcclxuICBjb25zdCBvblN1Ym1pdD1hc3luYyAoZSk9PntcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvYXV0aC9yZWdpc3RlcmAsXHJcbiAgICAgICAgICB7Zmlyc3ROYW1lOmlucHV0cy5maXJzdE5hbWUsbGFzdE5hbWU6aW5wdXRzLmxhc3ROYW1lLCBlbWFpbDppbnB1dHMuZW1haWwsIHBhc3N3b3JkOmlucHV0cy5wYXNzd29yZCwgcm9sZTondXNlcid9LFxyXG4gICAgICAgICAgSlNPTkNvbmZpZ1xyXG4gICAgICApXHJcbiAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyKGRhdGEpKVxyXG4gICAgICBhd2FpdCBsb2FkVXNlcigpXHJcbiAgICAgIFRvYXN0LnN1Y2Nlc3MoJ1N1Y2Nlc3NmdWxseSBzaWduZWQgdXAnKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgSlNPTi5zdHJpbmdpZnkoZGF0YS50b2tlbikpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgVG9hc3QuZmFpbChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGluZz5cclxuICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPFN1YkhlYWRpbmc+XHJcbiAgICAgICAgICBFdmVyeSBmaWxsIGlzIHJlcXVpcmVkIGluIHNpZ24gdXBcclxuICAgICAgICA8L1N1YkhlYWRpbmc+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9ICdGaXJzdCBuYW1lJ1xyXG4gICAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgICAgbWI9JzEwcHgnXHJcbiAgICAgICAgICAgIG5hbWU9J2ZpcnN0TmFtZSdcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLmZpcnN0TmFtZX1cclxuXHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9ICdMYXN0IG5hbWUnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAgICAgICBuYW1lPSdsYXN0TmFtZSdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMubGFzdE5hbWV9XHJcblxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsIEFkZHJlc3MnXHJcbiAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9JyNGN0Y3RjcnXHJcbiAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0gJ1Bhc3N3b3JkIChtaW4gNiBjaGFyYWN0ZXJzKSdcclxuICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XHJcblxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEhlbHBlclRleHQgc3R5bGU9e3sgcGFkZGluZzogJzIwcHggMCAzMHB4JyB9fT5cclxuICAgICAgICAgIEJ5IHNpZ25pbmcgdXAsIHlvdSBhZ3JlZSB0b1xyXG4gICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgVGVybXMgJmFtcDsgQ29uZGl0aW9uXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0hlbHBlclRleHQ+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5JyBzaXplPSdiaWcnIHdpZHRoPScxMDAlJyB0eXBlPSdzdWJtaXQnPlxyXG4gICAgICAgICAgQ29udGludWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPERpdmlkZXI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgb3JcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0RpdmlkZXI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjY3YjInLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxGYWNlYm9vayAvPlxyXG4gICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgIENvbnRpbnVlIHdpdGggRmFjZWJvb2tcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnIzQyODVmNCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxHb29nbGUgLz5cclxuICAgICAgICAgIDwvSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICBDb250aW51ZSB3aXRoIEdvb2dsZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxPZmZlciBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwJyB9fT5cclxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3snICd9XHJcbiAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWduSW5Gb3JtfT5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cclxuICAgICAgICA8L09mZmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cE1vZGFsXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4vY2FydCc7XHJcbmltcG9ydCBDYXJ0UG9wdXBCdXR0b24sIHtcclxuICBCb3hlZENhcnRCdXR0b24sXHJcbn0gZnJvbSAnQC9jb21wb25lbnRzL2NhcnQvcG9wdXAvY2FydC1wb3B1cC1idXR0b24nO1xyXG5pbXBvcnQgeyBDYXJ0U2xpZGVQb3B1cCB9IGZyb20gJy4vY2FydC5zdHlsZSc7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2NhbGN1bGF0ZVRvdGFsUHJpY2V9IGZyb20gXCIuLi8uLi91dGlscy9jYXJ0VXRpbHNcIjtcclxuaW1wb3J0IHtPcGVuQ2FydE1vZGFsfSBmcm9tIFwiQC9PcGVuTW9kYWxGdW5jdGlvbnNcIjtcclxuY29uc3QgQ2FydFBvcHVwU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAuY2FydFBvcHVwIHtcclxuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICMyM2ZmMDA7O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xyXG5cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxudHlwZSBDYXJ0UHJvcHMgPSB7XHJcbiAgZGV2aWNlVHlwZToge1xyXG4gICAgbW9iaWxlOiBib29sZWFuO1xyXG4gICAgdGFibGV0OiBib29sZWFuO1xyXG4gICAgZGVza3RvcDogYm9vbGVhbjtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgQ2FydFBvcFVwOiBSZWFjdC5GQzxDYXJ0UHJvcHM+ID0gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlVHlwZTogeyBtb2JpbGUsIHRhYmxldCwgZGVza3RvcCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xyXG4gIGNvbnN0IHtjdXJyZW5jeTp7c3ltYm9sfX0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5zaG9wUmVkdWNlcik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgT3BlbkNhcnRNb2RhbCgpXHJcbiAgfTtcclxuXHJcbiAgbGV0IGNhcnRTbGlkZXJDbGFzcyA9IGlzT3BlbiA/ICdjYXJ0UG9wdXBGaXhlZCcgOiAnJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7bW9iaWxlID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxDYXJ0UG9wdXBTdHlsZSAvPlxyXG4gICAgICAgICAgICAgIDxDYXJ0UG9wdXBCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWNhcnQnXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1Db3VudD17Y2FydFN0YXRlLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgaXRlbVBvc3RmaXg9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRTdGF0ZS5sZW5ndGggPiAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zXCJcclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwcmljZT17Y2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBwcmljZVByZWZpeD17c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2RhbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxDYXJ0U2xpZGVQb3B1cCBjbGFzc05hbWU9e2NhcnRTbGlkZXJDbGFzc30+XHJcbiAgICAgICAgICAgICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FydCBvbkNsb3NlQnRuQ2xpY2s9eygpPT57c2V0SXNPcGVuKGZhbHNlKX19IHNjcm9sbGJhckhlaWdodD0nMTAwdmgnIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ2FydFNsaWRlUG9wdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxCb3hlZENhcnRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWNhcnQnXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1Db3VudD17Y2FydFN0YXRlLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgaXRlbVBvc3RmaXg9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRTdGF0ZS5sZW5ndGggPiAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXRlbXMnICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwcmljZT17Y2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBwcmljZVByZWZpeD17c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3NldElzT3Blbih0cnVlKX19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRQb3BVcDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge1xyXG4gIENhcnRQb3B1cEJvZHksXHJcbiAgUG9wdXBIZWFkZXIsXHJcbiAgUG9wdXBJdGVtQ291bnQsXHJcbiAgQ2xvc2VCdXR0b24sXHJcbiAgUHJvbW9Db2RlLFxyXG4gIENoZWNrb3V0QnV0dG9uV3JhcHBlcixcclxuICBDaGVja291dEJ1dHRvbixcclxuICBUaXRsZSxcclxuICBQcmljZUJveCxcclxuICBOb1Byb2R1Y3RJbWcsXHJcbiAgSXRlbVdyYXBwZXIsXHJcbiAgQ291cG9uQm94V3JhcHBlcixcclxuICBDb3Vwb25Db2RlLCBOb1Byb2R1Y3RNc2csXHJcbn0gZnJvbSAnLi9jYXJ0LnN0eWxlJztcclxuaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSAnYXNzZXRzL2ljb25zL0Nsb3NlSWNvbic7XHJcbmltcG9ydCB7IFNob3BwaW5nQmFnTGFyZ2UgfSBmcm9tICdhc3NldHMvaWNvbnMvU2hvcHBpbmdCYWdMYXJnZSc7XHJcbmltcG9ydCB7IE5vQ2FydEJhZyB9IGZyb20gJ2Fzc2V0cy9pY29ucy9Ob0NhcnRCYWcnO1xyXG5pbXBvcnQge2NhbGN1bGF0ZVRvdGFsUHJpY2V9IGZyb20gXCIuLi8uLi91dGlscy9jYXJ0VXRpbHNcIjtcclxuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbSc7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2RlY3JlYXNlUXVhbnRpdHlDYXJ0LGluY3JlYXNlUXVhbnRpdHlDYXJ0LHJlbW92ZUZyb21DYXJ0LHJlbW92ZUFsbEZyb21DYXJ0fSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxudHlwZSBDYXJ0UHJvcHNUeXBlID0ge1xyXG4gIHN0eWxlPzogYW55O1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBzY3JvbGxiYXJIZWlnaHQ/OiBzdHJpbmc7XHJcbiAgaXNPcGVuPzpib29sZWFuO1xyXG4gIG9uQ2xvc2VCdG5DbGljaz86IChlOiBhbnkpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBDYXJ0OiBSZWFjdC5GQzxDYXJ0UHJvcHNUeXBlPiA9ICh7XHJcbiAgc3R5bGUsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIG9uQ2xvc2VCdG5DbGljayxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKClcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFBvcHVwQm9keSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgPFBvcHVwSGVhZGVyPlxyXG4gICAgICAgIDxQb3B1cEl0ZW1Db3VudD5cclxuICAgICAgICAgIDxTaG9wcGluZ0JhZ0xhcmdlIHdpZHRoPScxOXB4JyBoZWlnaHQ9JzI0cHgnIC8+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgezF9XHJcbiAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICBpdGVtc1xyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvUG9wdXBJdGVtQ291bnQ+XHJcblxyXG4gICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlQnRuQ2xpY2t9PlxyXG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgIDwvQ2xvc2VCdXR0b24+XHJcbiAgICAgIDwvUG9wdXBIZWFkZXI+XHJcblxyXG4gICAgICAgIDxJdGVtV3JhcHBlciBjbGFzc05hbWU9J2l0ZW1zLXdyYXBwZXInPlxyXG4gICAgICAgICAge2NhcnRTdGF0ZS5sZW5ndGg+MCA/IChcclxuICAgICAgICAgICAgY2FydFN0YXRlLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxDYXJ0SXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2FydEl0ZW0tJHtpdGVtLmlkfWB9XHJcbiAgICAgICAgICAgICAgICBvbkluY3JlbWVudD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChpbmNyZWFzZVF1YW50aXR5Q2FydChpdGVtLmNhcnRJZCkpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25EZWNyZW1lbnQ9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZGVjcmVhc2VRdWFudGl0eUNhcnQoaXRlbS5jYXJ0SWQpKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZUZyb21DYXJ0KGl0ZW0uY2FydElkKSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtpdGVtfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxOb1Byb2R1Y3RJbWc+XHJcbiAgICAgICAgICAgICAgICA8Tm9DYXJ0QmFnIC8+XHJcbiAgICAgICAgICAgICAgPC9Ob1Byb2R1Y3RJbWc+XHJcbiAgICAgICAgICAgICAgPE5vUHJvZHVjdE1zZz5cclxuICAgICAgICAgICAgICAgIE5vIHByb2R1Y3RzIGZvdW5kXHJcbiAgICAgICAgICAgICAgPC9Ob1Byb2R1Y3RNc2c+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0l0ZW1XcmFwcGVyPlxyXG5cclxuICAgICAgPENoZWNrb3V0QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8UHJvbW9Db2RlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2gocmVtb3ZlQWxsRnJvbUNhcnQoKSl9PlxyXG4gICAgICAgICAgICAgICAgICBSZW1vdmUgQWxsXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L1Byb21vQ29kZT5cclxuXHJcbiAgICAgICAge3RydWUgPyAoXHJcbiAgICAgICAgICA8TGluayBocmVmPScvY2hlY2tvdXQnPlxyXG4gICAgICAgICAgICA8Q2hlY2tvdXRCdXR0b24gb25DbGljaz17b25DbG9zZUJ0bkNsaWNrfT5cclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICBDaGVja291dFxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxQcmljZUJveD5cclxuICAgICAgICAgICAgICAgICAgey8qe0NVUlJFTkNZfSovfVxyXG4gICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgPC9QcmljZUJveD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgPC9DaGVja291dEJ1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPENoZWNrb3V0QnV0dG9uPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgICAgICAgIENoZWNrb3V0XHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8UHJpY2VCb3g+XHJcbiAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpfVxyXG4gICAgICAgICAgICAgIDwvUHJpY2VCb3g+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgPC9DaGVja291dEJ1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0NoZWNrb3V0QnV0dG9uV3JhcHBlcj5cclxuICAgIDwvQ2FydFBvcHVwQm9keT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuIiwiaW1wb3J0IHtHTE9CQUwsIEZPUk0sIEFVVEh9IGZyb20gXCIuLi9kZWZpbmVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNldEF1dGhUb2tlbiBmcm9tIFwiLi4vc2V0QXV0aFRva2VuXCI7XHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSBmcm9tIFwiQC91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IFRvYXN0IGZyb20gJ2xpZ2h0LXRvYXN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDdXJyZW5jeSA9IChjdXI6c3RyaW5nKSA9PiAoe1xyXG4gICAgdHlwZTogR0xPQkFMLlNFVF9DVVJSRU5DWSxcclxuICAgIGN1cixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsQ2F0ZWdvcnkgPSAoY2F0ZWdvcnk6c3RyaW5nKSA9PiAoe1xyXG4gICAgdHlwZTogR0xPQkFMLlNFVF9DQVRFR09SWSxcclxuICAgIGNhdGVnb3J5LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxTZWFyY2ggPSAoa2V5d29yZDpzdHJpbmcpID0+ICh7XHJcbiAgICB0eXBlOiBHTE9CQUwuU0VUX1NFQVJDSCxcclxuICAgIGtleXdvcmQsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9naW4gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFVVEguTE9HX0lOLFxyXG4gICAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQVVUSC5TSUdOX1VQLFxyXG4gICAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gKGRpc3BhdGNoOmFueSkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJbmZvJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjYXJ0SXRlbXMnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BlcnNpc3Q6cm9vdCcpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2hpcHBpbmdBZGRyZXNzJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwYXltZW50TWV0aG9kJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXHJcbiAgICBkaXNwYXRjaCh7dHlwZTogQVVUSC5MT0dfT1VUfSlcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnLydcclxufVxyXG5leHBvcnQgY29uc3QgbG9hZFVzZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6YW55KSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW49bG9jYWxTdG9yYWdlLnRva2VuLnJlcGxhY2VBbGwoJ1wiJywnJylcclxuICAgICAgICAvL3NlbmRpbmcgdG9rZW4gdG8gaGVhZGVyc1xyXG4gICAgICAgIHNldEF1dGhUb2tlbih0b2tlbilcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL2F1dGgvbWVgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFVVEguTE9BRF9VU0VSLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFVVEguTE9BRF9VU0VSX0ZBSUwsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGVyci5yZXNwb25zZS5kYXRhLmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU9yZGVyID0gKG9yZGVyOm9iamVjdCkgPT4gYXN5bmMgKGRpc3BhdGNoOmFueSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJX0JBU0VfVVJMfS9hcGkvb3JkZXJzYCwgb3JkZXIsIGNvbmZpZylcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkFVVEguT1JERVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FydEl0ZW1zJylcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVyc2lzdDpyb290JylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPVxyXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICA6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICBpZiAobWVzc2FnZXMgPT09ICdOb3QgYXV0aG9yaXplZCwgdG9rZW4gZmFpbGVkJykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dvdXQoKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IHNldEF1dGhUb2tlbj0odG9rZW46c3RyaW5nKT0+e1xyXG4gICAgaWYodG9rZW4pe1xyXG4gICAgICAgIC8vYWRkaW5nIHRva2VuIHRvIHRoZSBoZWFkZXJzXHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXT1gQmVhcmVyICR7dG9rZW59YDtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIC8vcmVtb3ZpbmcgdG9rZW4gZnJvbSB0aGUgaGVhZGVyc1xyXG4gICAgICAgIGRlbGV0ZSBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2V0QXV0aFRva2VuO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9