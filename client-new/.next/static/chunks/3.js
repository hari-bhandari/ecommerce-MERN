(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

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

/***/ "./src/assets/icons/NoCartBag.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/NoCartBag.tsx ***!
  \****************************************/
/*! exports provided: NoCartBag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoCartBag", function() { return NoCartBag; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\NoCartBag.tsx",
    _this = undefined;


var NoCartBag = function NoCartBag() {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: "1",
          stopColor: "#009e7f"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18691",
        "data-name": "Path 18691",
        d: "M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z",
        transform: "translate(1403 381)",
        fill: "#009e7f"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Rectangle_1852",
        "data-name": "Rectangle 1852",
        d: "M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z",
        transform: "translate(1403 381)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Rectangle_1853",
        "data-name": "Rectangle 1853",
        d: "M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z",
        transform: "translate(1403 381)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18685",
        "data-name": "Path 18685",
        d: "M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z",
        transform: "translate(1056.69 164.944)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18686",
        "data-name": "Path 18686",
        d: "M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z",
        transform: "translate(1057.793 95.684)",
        fill: "#009e7f"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18687",
        "data-name": "Path 18687",
        d: "M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
        transform: "translate(1060.579 -35.703)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18688",
        "data-name": "Path 18688",
        d: "M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
        transform: "translate(1060.566 -35.704)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18689",
        "data-name": "Path 18689",
        d: "M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
        transform: "translate(970.304 -35.704)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18690",
        "data-name": "Path 18690",
        d: "M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
        transform: "translate(970.318 -35.703)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18692",
        "data-name": "Path 18692",
        d: "M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z",
        transform: "translate(1292.301 101.536)",
        fill: "url(#linear-gradient)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18693",
        "data-name": "Path 18693",
        d: "M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z",
        transform: "translate(1118.301 101.536)",
        fill: "url(#linear-gradient)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};
_c = NoCartBag;

var _c;

$RefreshReg$(_c, "NoCartBag");

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

/***/ "./src/features/cart/cart.style.tsx":
/*!******************************************!*\
  !*** ./src/features/cart/cart.style.tsx ***!
  \******************************************/
/*! exports provided: NoProductImg, CartSlidePopup, CartPopupBody, PopupHeader, PopupItemCount, PromoCode, CloseButton, ItemCards, ItemImgWrapper, ItemDetails, ItemTitle, ItemPrice, ItemWeight, TotalPrice, DeleteButton, CheckoutButton, CheckoutButtonWrapper, Title, PriceBox, NoProductMsg, ItemWrapper, CouponBoxWrapper, CouponCode, ErrorMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProductImg", function() { return NoProductImg; });
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
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/theme-get */ "./node_modules/@styled-system/theme-get/dist/index.esm.js");


function _templateObject24() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 420px;\n  height: 100vh;\n  background-color: ", ";\n  position: fixed;\n  bottom: 0;\n  right: -450px;\n  z-index: 1010;\n  box-shadow: ", ";\n  transition: all 0.35s ease-in-out;\n\n  @media (max-width: 580px) {\n    width: 100%;\n    display: none;\n  }\n\n  @media (min-width: 581px) {\n    display: block;\n  }\n\n  &.cartPopupFixed {\n    right: 0;\n  }\n\n  ", " {\n    height: 100%;\n    width: 100%;\n  }\n\n  ", " {\n    /* height: calc(100vh - 240px); */\n    max-height: calc(100vh - 245px);\n    background-color: ", ";\n  }\n\n  ", " {\n    border-bottom: 1px solid ", ";\n    margin-bottom: 0;\n  }\n\n  @media (max-width: 767px) {\n    ", " {\n      justify-content: space-between;\n    }\n\n    ", " {\n      top: auto;\n      position: relative;\n      background-color: transparent;\n    }\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: calc(", "px - 1px);\n  font-weight: ", ";\n  color: ", ";\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n\n  width: 100%;\n  display: flex;\n  justify-content: center;\n\n  span {\n    font-weight: ", ";\n    color: ", ";\n    margin-left: 5px;\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  flex-direction: column;\n  padding: 0 22px 0 15px;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 50px;\n\n  @media (max-width: 580px) {\n    margin-top: 20px;\n  }\n\n  svg {\n    width: 140px;\n    height: auto;\n\n    @media (max-width: 580px) {\n      width: 110px;\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  display: block;\n  width: 100%;\n  padding: 40px 0;\n  text-align: center;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: auto;\n  height: 44px;\n  padding: 0 30px;\n  overflow: hidden;\n  border-radius: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin-right: 2px;\n\n  @media (max-width: 767px) {\n    height: 41px;\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  padding-left: 5px;\n  padding-right: 10px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: auto;\n  flex-shrink: 0;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 48px;\n  width: calc(100% - 30px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ", ";\n  padding: 0;\n  border-radius: 48px;\n  box-shadow: ", ";\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  /* margin-top: auto; */\n  margin-bottom: 15px;\n  margin-left: 15px;\n\n  @media (max-width: 767px) {\n    height: 45px;\n  }\n\n  > a {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-left: 30px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 20px 0;\n  display: flex;\n  justify-content: center;\n\n  > button {\n    border: 0;\n    outline: 0;\n    box-shadow: none;\n    background-color: transparent;\n    display: inline-flex;\n    cursor: pointer;\n    font-family: ", ";\n    font-size: ", "px;\n    font-weight: ", ";\n    color: ", ";\n    transition: color 0.35s ease;\n    &:hover {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 10px;\n  height: 10px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  margin-left: 15px;\n  flex-shrink: 0;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.25);\n  transition: all 0.4s ease;\n  background-color: transparent;\n\n  &:hover {\n    color: #ea4d4a;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  flex-shrink: 0;\n  margin-left: auto;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin-bottom: 10px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin-bottom: 10px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-flex;\n  flex-direction: column;\n  width: 100%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 60px;\n  height: 60px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  margin-right: 15px;\n  flex-shrink: 0;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  padding: 15px 25px;\n  display: inline-flex;\n  align-items: center;\n  background-color: ", ";\n  margin-bottom: 1px;\n  box-sizing: border-box;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 14px;\n  height: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  flex-shrink: 0;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.25);\n  transition: all 0.4s ease;\n  background-color: transparent;\n\n  &:hover {\n    color: ", ";\n  }\n\n  @media (max-width: 767px) {\n    position: absolute;\n    top: -45px;\n    background-color: ", ";\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    color: rgba(0, 0, 0, 0.5);\n  }\n\n  &.fixedCartClose {\n    @media (min-width: 991px) {\n      display: none;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-flex;\n  align-items: center;\n  color: ", ";\n\n  span {\n    font-family: ", ";\n    font-size: ", "px;\n    font-weight: ", ";\n    color: ", ";\n    padding-left: 10px;\n\n    @media (max-width: 767px) {\n      font-size: ", "px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 15px 25px;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n\n  @media (max-width: 766px) {\n    justify-content: center;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: auto;\n  width: 385px;\n  display: flex;\n  flex-direction: column;\n  border-radius: ", ";\n  background-color: ", ";\n  box-sizing: content-box;\n\n  @media (max-width: 767px) {\n    width: 100%;\n  }\n\n  .cart-scrollbar {\n    height: 100%;\n    max-height: calc(100vh - 245px);\n\n    @media (max-width: 767px) {\n      max-height: 330px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var CartPopupBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
var PopupHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.500', '#f1f1f1'));
var PopupItemCount = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.sm', '13'));
var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject4(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.red', '#ea4d4a'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
var ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());
var ItemCards = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
var ItemImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject7());
var ItemDetails = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject8());
var ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject9(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'));
var ItemPrice = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject10(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'));
var ItemWeight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject11(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.regular', '#77798c'));
var TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject12(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'));
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject13());
var PromoCode = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject14(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.hover', '#019376'));
var CheckoutButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject15(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)'));
var CheckoutButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject16());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject17(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
var PriceBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject18(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'));
var NoProductMsg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject19(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.regular', '#77798c'));
var NoProductImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject20());
var CouponBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject21());
var CouponCode = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject22(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.medium', '500'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.regular', '#77798c'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'));
var ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject23(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.secondary.hover', '#FF282F'));
var CartSlidePopup = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject24(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)'), CartPopupBody, ItemWrapper, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), ItemCards, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#f7f7f7'), PopupHeader, CloseButton);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xpZ2h0LXRvYXN0L2Rpc3QvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9PcGVuTW9kYWxGdW5jdGlvbnMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ljb25zL0Nsb3NlSWNvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaWNvbnMvRmFjZWJvb2sudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ljb25zL0dvb2dsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaWNvbnMvTm9DYXJ0QmFnLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9pY29ucy9TaG9wcGluZ0JhZy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaWNvbnMvU2hvcHBpbmdCYWdMYXJnZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9heGlvc0hlYWRlcnMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9PdGhlcnMvZm9ybXMvaW5wdXQudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJ0L2l0ZW0vY2FydC1pdGVtLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhcnQvcG9wdXAvY2FydC1wb3B1cC1idXR0b24udHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJ0L3BvcHVwL2NhcnQtcG9wdXAuc3R5bGUudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9hdXRoZW50aWNhdGlvbi1mb3JtLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm0vZm9yZ290LXBhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm0vaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9sb2dpbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtL3JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2NhcnQvY2FydC1wb3B1cC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9jYXJ0cy9jYXJ0LnN0eWxlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2NhcnQvY2FydC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VMb2dpbkZvcm0udHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zZXRBdXRoVG9rZW4udHMiXSwibmFtZXMiOlsiT3BlbkF1dGhUYWIiLCJvcGVuTW9kYWwiLCJzaG93Iiwib3ZlcmxheUNsYXNzTmFtZSIsImNsb3NlT25DbGlja091dHNpZGUiLCJjb21wb25lbnQiLCJBdXRoZW50aWNhdGlvbkZvcm0iLCJjbG9zZUNvbXBvbmVudCIsImNvbmZpZyIsImVuYWJsZVJlc2l6aW5nIiwiZGlzYWJsZURyYWdnaW5nIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJPcGVuQ2FydE1vZGFsIiwidHJhbnNpdGlvbiIsInRlbnNpb24iLCJmcmljdGlvbiIsIkNhcnQiLCJjb21wb25lbnRQcm9wcyIsIm9uQ2xvc2VCdG5DbGljayIsImNsb3NlTW9kYWwiLCJzY3JvbGxiYXJIZWlnaHQiLCJDbG9zZUljb24iLCJGYWNlYm9vayIsImNvbG9yIiwiR29vZ2xlIiwiTm9DYXJ0QmFnIiwiU2hvcHBpbmdCYWciLCJTaG9wcGluZ0JhZ0xhcmdlIiwiSlNPTkNvbmZpZyIsImhlYWRlcnMiLCJJbnB1dCIsInN0eWxlZCIsImlucHV0IiwiY3NzIiwiZGlzcGxheSIsInAiLCJhcHBlYXJhbmNlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZSIsIm1hcmdpbiIsImN1cnNvciIsIm9wYWNpdHkiLCJjb21wb3NlIiwibGF5b3V0Iiwic3BhY2UiLCJJdGVtQm94IiwiZGl2IiwiZm9udFdlaWdodCIsInB5IiwicHgiLCJib3JkZXJCb3R0b20iLCJib3JkZXJCb3R0b21Db2xvciIsImFsaWduSXRlbXMiLCJJbmZvcm1hdGlvbiIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwiSW1hZ2UiLCJpbWciLCJvYmplY3RGaXQiLCJOYW1lIiwic3BhbiIsIm1iIiwiUHJpY2UiLCJtdCIsIldlaWdodCIsIlRvdGFsIiwibWwiLCJSZW1vdmVCdXR0b24iLCJidXR0b24iLCJwYWRkaW5nIiwiQ2FydEl0ZW0iLCJkYXRhIiwib25EZWNyZW1lbnQiLCJvbkluY3JlbWVudCIsIm9uUmVtb3ZlIiwibmFtZSIsInRodW1iSW1hZ2UiLCJwcmljZSIsInNhbGVQcmljZSIsInVuaXQiLCJjb3VudEluU3RvY2siLCJkaXNwbGF5UHJpY2UiLCJjYXJ0UXVhbnRpdHkiLCJDYXJ0UG9wdXBCdXR0b24iLCJpdGVtQ291bnQiLCJpdGVtUG9zdGZpeCIsInByaWNlUHJlZml4Iiwic3R5bGUiLCJvbkNsaWNrIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJCb3hlZENhcnRCdXR0b24iLCJDYXJ0UG9wdXBCdXR0b25TdHlsZWQiLCJ0aGVtZUdldCIsIkJ1dHRvbkltZ0JveCIsIkl0ZW1Db3VudCIsIlByaWNlQm94IiwiQ2FydFBvcHVwQm94QnV0dG9uIiwiVG90YWxJdGVtcyIsIlByaWNlQm94QWx0IiwiSWNvbldyYXBwZXIiLCJXcmFwcGVyIiwiQ29udGFpbmVyIiwiTG9nb1dyYXBwZXIiLCJIZWFkaW5nIiwiaDMiLCJTdWJIZWFkaW5nIiwiT2ZmZXJTZWN0aW9uIiwiT2ZmZXIiLCJIZWxwZXJUZXh0IiwiRGl2aWRlciIsIkxpbmtCdXR0b24iLCJGb3Jnb3RQYXNzd29yZE1vZGFsIiwic2V0Q3VycmVudEZvcm0iLCJ0b2dnbGVTaWduSW5Gb3JtIiwicGFkZGluZ0JvdHRvbSIsInJvdXRlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJnbG9iYWxSZWR1Y2VyIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlU3RhdGUiLCJjdXJyZW50Rm9ybSIsInVzZUVmZmVjdCIsInBhdGhuYW1lIiwicHVzaCIsIndpdGhSb3V0ZXIiLCJTaWduSW5Nb2RhbCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2dnbGVTaWduVXBGb3JtIiwidG9nZ2xlRm9yZ290UGFzc0Zvcm0iLCJ1c2VMb2dpbkZvcm0iLCJpbnB1dHMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImxvZ2luQ2FsbGJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJBUElfQkFTRV9VUkwiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwibG9hZFVzZXIiLCJUb2FzdCIsInN1Y2Nlc3MiLCJmYWlsIiwicmVzcG9uc2UiLCJlcnJvciIsIm1hcmdpbkJvdHRvbSIsIlNpZ251cE1vZGFsIiwib25TdWJtaXQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInJvbGUiLCJyZWdpc3RlciIsIkNhcnRQb3B1cFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJDYXJ0UG9wVXAiLCJkZXZpY2VUeXBlIiwibW9iaWxlIiwidGFibGV0IiwiZGVza3RvcCIsImlzT3BlbiIsInNldElzT3BlbiIsImNhcnRTdGF0ZSIsImNhcnRSZWR1Y2VyIiwic2hvcFJlZHVjZXIiLCJzeW1ib2wiLCJjdXJyZW5jeSIsImhhbmRsZU1vZGFsIiwiY2FydFNsaWRlckNsYXNzIiwibGVuZ3RoIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsIkNhcnRQb3B1cEJvZHkiLCJQb3B1cEhlYWRlciIsIlBvcHVwSXRlbUNvdW50IiwiQ2xvc2VCdXR0b24iLCJJdGVtV3JhcHBlciIsIkl0ZW1DYXJkcyIsIkl0ZW1JbWdXcmFwcGVyIiwiSXRlbURldGFpbHMiLCJJdGVtVGl0bGUiLCJJdGVtUHJpY2UiLCJJdGVtV2VpZ2h0IiwiVG90YWxQcmljZSIsIkRlbGV0ZUJ1dHRvbiIsIlByb21vQ29kZSIsIkNoZWNrb3V0QnV0dG9uIiwiQ2hlY2tvdXRCdXR0b25XcmFwcGVyIiwiVGl0bGUiLCJhIiwiTm9Qcm9kdWN0TXNnIiwiTm9Qcm9kdWN0SW1nIiwiQ291cG9uQm94V3JhcHBlciIsIkNvdXBvbkNvZGUiLCJFcnJvck1zZyIsIkNhcnRTbGlkZVBvcHVwIiwibWFwIiwiaXRlbSIsImluY3JlYXNlUXVhbnRpdHlDYXJ0IiwiY2FydElkIiwiZGVjcmVhc2VRdWFudGl0eUNhcnQiLCJyZW1vdmVGcm9tQ2FydCIsImlkIiwicmVtb3ZlQWxsRnJvbUNhcnQiLCJzZXRJbnB1dHMiLCJldmVudCIsInBlcnNpc3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldEdsb2JhbEN1cnJlbmN5IiwiY3VyIiwidHlwZSIsIkdMT0JBTCIsIlNFVF9DVVJSRU5DWSIsInNldEdsb2JhbENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJTRVRfQ0FURUdPUlkiLCJzZXRHbG9iYWxTZWFyY2giLCJrZXl3b3JkIiwiU0VUX1NFQVJDSCIsIkFVVEgiLCJMT0dfSU4iLCJwYXlsb2FkIiwiU0lHTl9VUCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJMT0dfT1VUIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlQWxsIiwic2V0QXV0aFRva2VuIiwiZ2V0IiwicmVzIiwiTE9BRF9VU0VSIiwiTE9BRF9VU0VSX0ZBSUwiLCJjcmVhdGVPcmRlciIsIm9yZGVyIiwiT1JERVJfU1VDQ0VTUyIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsImRlZmF1bHRzIiwiY29tbW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUMxQjs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywyQkFBMkIsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxRQUFROztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsZUFBZSxNQUFNLFFBQVEsU0FBUyxPQUFPLHFCQUFxQixhQUFhLDJCQUEyQixtQkFBbUIsK0JBQStCLHVCQUF1Qix1QkFBdUIsYUFBYSxrQkFBa0IscUJBQXFCLGNBQWMsZUFBZSxpQkFBaUIsc0JBQXNCLGtCQUFrQixxQkFBcUIscUJBQXFCLFlBQVksV0FBVyxtQ0FBbUMsa0JBQWtCLFVBQVUsNEJBQTRCLG9CQUFvQixtQ0FBbUMsMkJBQTJCLDZDQUE2QyxxQ0FBcUMsMkRBQTJELG9CQUFvQixVQUFVLDJCQUEyQixtQkFBbUIsbUJBQW1CLFVBQVUsNEJBQTRCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLGVBQWUsc0JBQXNC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IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbnZhciBFdmVudE1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFdmVudE1hbmFnZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5fcHVibGlzaGVkRXZlbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5fdW5pcXVlSWQgPSAwOyAvLyB1c2Ugc2VsZiBpbmNyZWFzaW5nIG51bWJlciB0byBndWFyYW50ZWUgZ2xvYmFsIHVuaXF1ZW5lc3NcclxuICAgIH1cclxuICAgIEV2ZW50TWFuYWdlci5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudHNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzW25hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBldmVudCA9IHsga2V5OiB0aGlzLl91bmlxdWVJZCsrLCBjYWxsYmFjazogY2FsbGJhY2sgfTtcclxuICAgICAgICB0aGlzLl9ldmVudHNbbmFtZV0ucHVzaChldmVudCk7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50LmtleTtcclxuICAgIH07XHJcbiAgICBFdmVudE1hbmFnZXIucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3B1Ymxpc2hlZEV2ZW50cy5wdXNoKHsgbmFtZTogbmFtZSwgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50c1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gX2EuY2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEV2ZW50TWFuYWdlci5wcm90b3R5cGUudW5TdWJzY3JpYmUgPSBmdW5jdGlvbiAobmFtZSwga2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50c1tuYW1lXSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2V2ZW50c1tuYW1lXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5fZXZlbnRzW25hbWVdW2ldLmtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1tuYW1lXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gTWFrZSBzdXJlIHB1Ymxpc2hlZCBldmVudHMgY2FuIGJlIHRyaWdnZXJlZCB3aGVuIHN1YnNjcmliZWRcclxuICAgIEV2ZW50TWFuYWdlci5wcm90b3R5cGUuZW5zdXJlVHJpZ2dlcmVkQW5kU3Vic2NyaWJlID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50ID0gdGhpcy5fcHVibGlzaGVkRXZlbnRzXHJcbiAgICAgICAgICAgIC5zbGljZSgpXHJcbiAgICAgICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAgICAgLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0ubmFtZSA9PT0gbmFtZTsgfSk7XHJcbiAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmUobmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFdmVudE1hbmFnZXI7XHJcbn0oKSk7XHJcbnZhciBldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XG5cbmZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIGNzc18yNDh6ID0gXCIuc3R5bGVfbWFza19fOXptU057cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LWp1c3RpZnktY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3otaW5kZXg6MTk5OX0uc3R5bGVfYm94X18yaWlhNHtkaXNwbGF5OmlubGluZS1ibG9jazttYXgtd2lkdGg6ODUlO21pbi13aWR0aDo5NXB4O3BhZGRpbmc6OXB4IDE1cHg7Ym94LXNpemluZzpib3JkZXItYm94O3RleHQtYWxpZ246Y2VudGVyO3dvcmQtYnJlYWs6YnJlYWstYWxsO3doaXRlLXNwYWNlOnByZS13cmFwO2ZvbnQtc2l6ZTowO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDU4LDU4LDU4LC45KTtib3JkZXItcmFkaXVzOjNweDtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjkpO3RyYW5zZm9ybTpzY2FsZSguOSk7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzLC13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzLHRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjpvcGFjaXR5IC4zcyx0cmFuc2Zvcm0gLjNzLC13ZWJraXQtdHJhbnNmb3JtIC4zc30uc3R5bGVfZW50ZXJfXzI5THlRe29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9LnN0eWxlX2V4aXRfXzNXWW1we29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOSk7dHJhbnNmb3JtOnNjYWxlKC45KX0uc3R5bGVfbWVzc2FnZV9fMURVWGN7bGluZS1oZWlnaHQ6MS41O2ZvbnQtc2l6ZToxNHB4fS5zdHlsZV93cmFwcGVyX19jUUZ5WHttYXJnaW46MCBhdXRvIDdweDt3aWR0aDozNnB4O2hlaWdodDozNnB4fS5zdHlsZV9sb2FkaW5nX18ycGI3Snstd2Via2l0LWFuaW1hdGlvbjpzdHlsZV9sb2FkaW5nX18ycGI3SiAxcyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnN0eWxlX2xvYWRpbmdfXzJwYjdKIDFzIGxpbmVhciBpbmZpbml0ZX1ALXdlYmtpdC1rZXlmcmFtZXMgc3R5bGVfbG9hZGluZ19fMnBiN0p7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QGtleWZyYW1lcyBzdHlsZV9sb2FkaW5nX18ycGI3Snt0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1cIjtcbnZhciBzdHlsZXMgPSB7XCJtYXNrXCI6XCJzdHlsZV9tYXNrX185em1TTlwiLFwiYm94XCI6XCJzdHlsZV9ib3hfXzJpaWE0XCIsXCJlbnRlclwiOlwic3R5bGVfZW50ZXJfXzI5THlRXCIsXCJleGl0XCI6XCJzdHlsZV9leGl0X18zV1ltcFwiLFwibWVzc2FnZVwiOlwic3R5bGVfbWVzc2FnZV9fMURVWGNcIixcIndyYXBwZXJcIjpcInN0eWxlX3dyYXBwZXJfX2NRRnlYXCIsXCJsb2FkaW5nXCI6XCJzdHlsZV9sb2FkaW5nX18ycGI3SlwifTtcbnN0eWxlSW5qZWN0KGNzc18yNDh6KTtcblxudmFyIEljb24gPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciB0eXBlID0gX2EudHlwZTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIiwgZmlsbDogXCIjZmZmXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNNjk5IDM1M2gtNDYuOWMtMTAuMiAwLTE5LjkgNC45LTI1LjkgMTMuM0w0NjkgNTg0LjNsLTcxLjItOTguOGMtNi04LjMtMTUuNi0xMy4zLTI1LjktMTMuM0gzMjVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDEyNC42IDE3Mi44YTMxLjggMzEuOCAwIDAgMCA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43elwiIH0pLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzIgMzcyIDE2Ni42IDM3MiAzNzItMTY2LjYgMzcyLTM3MiAzNzJ6XCIgfSkpKTtcclxuICAgICAgICBjYXNlICdmYWlsJzpcclxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgdmlld0JveDogXCIwIDAgMTAyNCAxMDI0XCIsIGZpbGw6IFwiI2ZmZlwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTY4NS40IDM1NC44YzAtNC40LTMuNi04LTgtOGwtNjYgLjNMNTEyIDQ2NS42bC05OS4zLTExOC40LTY2LjEtLjNjLTQuNCAwLTggMy41LTggOCAwIDEuOS43IDMuNyAxLjkgNS4ybDEzMC4xIDE1NUwzNDAuNSA2NzBhOC4zMiA4LjMyIDAgMCAwLTEuOSA1LjJjMCA0LjQgMy42IDggOCA4bDY2LjEtLjNMNTEyIDU2NC40bDk5LjMgMTE4LjQgNjYgLjNjNC40IDAgOC0zLjUgOC04IDAtMS45LS43LTMuNy0xLjktNS4yTDU1My41IDUxNWwxMzAuMS0xNTVjMS4yLTEuNCAxLjgtMy4zIDEuOC01LjJ6XCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTUxMiA2NUMyNjQuNiA2NSA2NCAyNjUuNiA2NCA1MTNzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjUgNTEyIDY1em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnpcIiB9KSkpO1xyXG4gICAgICAgIGNhc2UgJ2xvYWRpbmcnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIiwgZmlsbDogXCIjZmZmXCIsIGNsYXNzTmFtZTogc3R5bGVzLmxvYWRpbmcgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNOTg4IDU0OGMtMTkuOSAwLTM2LTE2LjEtMzYtMzYgMC01OS40LTExLjYtMTE3LTM0LjYtMTcxLjNhNDQwLjQ1IDQ0MC40NSAwIDAgMC05NC4zLTEzOS45IDQzNy43MSA0MzcuNzEgMCAwIDAtMTM5LjktOTQuM0M2MjkgODMuNiA1NzEuNCA3MiA1MTIgNzJjLTE5LjkgMC0zNi0xNi4xLTM2LTM2czE2LjEtMzYgMzYtMzZjNjkuMSAwIDEzNi4yIDEzLjUgMTk5LjMgNDAuM0M3NzIuMyA2NiA4MjcgMTAzIDg3NCAxNTBjNDcgNDcgODMuOSAxMDEuOCAxMDkuNyAxNjIuNyAyNi43IDYzLjEgNDAuMiAxMzAuMiA0MC4yIDE5OS4zLjEgMTkuOS0xNiAzNi0zNS45IDM2elwiIH0pKSk7XHJcbiAgICB9XHJcbn07XG5cbnZhciBUb2FzdCA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGlkID0gX2EuaWQsIHR5cGUgPSBfYS50eXBlLCBjb250ZW50ID0gX2EuY29udGVudCwgX2IgPSBfYS5kdXJhdGlvbiwgZHVyYXRpb24gPSBfYiA9PT0gdm9pZCAwID8gMzAwMCA6IF9iLCBvbkNsb3NlID0gX2Eub25DbG9zZTtcclxuICAgIHZhciBfYyA9IHVzZVN0YXRlKHN0eWxlcy5ib3gpLCBjbGFzc2VzID0gX2NbMF0sIHNldENsYXNzZXMgPSBfY1sxXTtcclxuICAgIHZhciBfZCA9IHVzZVN0YXRlKGZhbHNlKSwgZW50ZXJlZCA9IF9kWzBdLCBzZXRFbnRlcmVkID0gX2RbMV07XHJcbiAgICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgZnVuY3Rpb24gZXhpdCgpIHtcclxuICAgICAgICBzZXRDbGFzc2VzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0eWxlcy5ib3ggKyBcIiBcIiArIHN0eWxlcy5leGl0OyB9KTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZm9yY2UgYSByZXBhaW50XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgcmVmLmN1cnJlbnQgJiYgcmVmLmN1cnJlbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIHNldENsYXNzZXMoZnVuY3Rpb24gKHByZXYpIHsgcmV0dXJuIHByZXYgKyBcIiBcIiArIHN0eWxlcy5lbnRlcjsgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBrZXkgPSAtMTtcclxuICAgICAgICB2YXIgdGltZXJJZCA9IC0xO1xyXG4gICAgICAgIGlmIChlbnRlcmVkKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudCBtb3VudGluZyBpcyBhc3luYywgdGhlcmUgbWlnaHQgYmUgYW4gZXhpdCBjb21tYW5kIGJlZm9yZSBhIHRvYXN0IG1vdW50c1xyXG4gICAgICAgICAgICAvLyBzbyB3ZSBzaG91bGQgbWFrZSBzdXJlIHRvIHRyaWdnZXIgdGhlIHB1Ymxpc2hlZCBleGl0IGV2ZW50XHJcbiAgICAgICAgICAgIGtleSA9IGV2ZW50TWFuYWdlci5lbnN1cmVUcmlnZ2VyZWRBbmRTdWJzY3JpYmUoJ2x0I2V4aXQnLCBmdW5jdGlvbiAobWVzc2FnZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGltZXJJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGV4aXQsIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBldmVudE1hbmFnZXIudW5TdWJzY3JpYmUoJ2x0I2V4aXQnLCBrZXkpO1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbaWQsIGR1cmF0aW9uLCBlbnRlcmVkXSk7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5tYXNrIH0sXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3Nlcywgc3R5bGU6IHR5cGUgPT09ICdpbmZvJyA/IHVuZGVmaW5lZCA6IHsgcGFkZGluZzogMTUsIGJvcmRlclJhZGl1czogNSB9LCBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVudGVyIHBoYXNlXHJcbiAgICAgICAgICAgICAgICBpZiAofmNsYXNzZXMuaW5kZXhPZihzdHlsZXMuZW50ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RW50ZXJlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGV4aXQgcGhhc2VcclxuICAgICAgICAgICAgICAgIGlmICh+Y2xhc3Nlcy5pbmRleE9mKHN0eWxlcy5leGl0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgcmVmOiByZWYgfSxcclxuICAgICAgICAgICAgdHlwZSAhPT0gJ2luZm8nICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMud3JhcHBlciwgc3R5bGU6IHR5cGUgPT09ICdsb2FkaW5nJyA/IHsgbWFyZ2luQm90dG9tOiAxMCB9IDogdW5kZWZpbmVkIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogdHlwZSB9KSkpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLm1lc3NhZ2UgfSwgY29udGVudCkpKSk7XHJcbn07XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xuXG4vKipcclxuICogTWVzc2FnZSBxdWV1ZS5cclxuICogU2F2ZSBtZXNzYWdlcyBpbiBhIHF1ZXVlLCBvbmx5IHJlbW92ZSBpdCB3aGVuIGNvbXBvbmVudCBsaWZlY3ljbGUgZW5kcy5cclxuICovXHJcbnZhciBRdWV1ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFF1ZXVlKCkge1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5fdW5pcXVlSWQgPSAwO1xyXG4gICAgfVxyXG4gICAgUXVldWUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VzLnB1c2goX19hc3NpZ24oeyBpZDogdGhpcy5fdW5pcXVlSWQrKyB9LCBtZXNzYWdlKSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1ZXVlLnByb3RvdHlwZSwgXCJsZW5ndGhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZXMubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFF1ZXVlLnByb3RvdHlwZS5nZXRGaXJzdE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VzWzBdO1xyXG4gICAgfTtcclxuICAgIFF1ZXVlLnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZXMuc2hpZnQoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUXVldWU7XHJcbn0oKSk7XG5cbnZhciBxdWV1ZSA9IG5ldyBRdWV1ZSgpO1xyXG5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdsdCNwb3BtZXNzYWdlJywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgaWQgPSBfYS5pZCwgdHlwZSA9IF9hLnR5cGUsIGNvbnRlbnQgPSBfYS5jb250ZW50LCBkdXJhdGlvbiA9IF9hLmR1cmF0aW9uLCBvbkNsb3NlID0gX2Eub25DbG9zZTtcclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFRvYXN0LCB7IGlkOiBpZCwgdHlwZTogdHlwZSwgY29udGVudDogY29udGVudCwgZHVyYXRpb246IGR1cmF0aW9uLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgICAgICBvbkNsb3NlICYmIG9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50TWFuYWdlci5wdWJsaXNoKCdsdCNwb3BtZXNzYWdlJywgcXVldWUuZ2V0Rmlyc3RNZXNzYWdlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB9KSwgY29udGFpbmVyKTtcclxufSk7XHJcbmZ1bmN0aW9uIG5vdGljZSh0eXBlLCBjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSkge1xyXG4gICAgcXVldWUucHVzaCh7IHR5cGU6IHR5cGUsIGNvbnRlbnQ6IGNvbnRlbnQsIGR1cmF0aW9uOiBkdXJhdGlvbiwgb25DbG9zZTogb25DbG9zZSB9KTtcclxuICAgIC8vIHRvYXN0IHJpZ2h0IG5vdyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBtZXNzYWdlIGluIHF1ZXVlXHJcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgZXZlbnRNYW5hZ2VyLnB1Ymxpc2goJ2x0I3BvcG1lc3NhZ2UnLCBxdWV1ZS5nZXRGaXJzdE1lc3NhZ2UoKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgY3VycmVudCBtZXNzYWdlIGlzIGxvYWRpbmcsIHRoZW4gd2Ugc2hvdWxkIHVubW91bnQgaXQgdG8gcHJvY2VlZFxyXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB2YXIgbWVzc2FnZSA9IHF1ZXVlLmdldEZpcnN0TWVzc2FnZSgpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdsb2FkaW5nJykge1xyXG4gICAgICAgICAgICBldmVudE1hbmFnZXIucHVibGlzaCgnbHQjZXhpdCcsIG1lc3NhZ2UuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG52YXIgaW5kZXggPSB7XHJcbiAgICBpbmZvOiBmdW5jdGlvbiAoY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UpIHtcclxuICAgICAgICBub3RpY2UoJ2luZm8nLCBjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSk7XHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKSB7XHJcbiAgICAgICAgbm90aWNlKCdzdWNjZXNzJywgY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UpO1xyXG4gICAgfSxcclxuICAgIGZhaWw6IGZ1bmN0aW9uIChjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSkge1xyXG4gICAgICAgIG5vdGljZSgnZmFpbCcsIGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKTtcclxuICAgIH0sXHJcbiAgICBsb2FkaW5nOiBmdW5jdGlvbiAoY29udGVudCwgb25DbG9zZSkge1xyXG4gICAgICAgIG5vdGljZSgnbG9hZGluZycsIGNvbnRlbnQsIDAsIG9uQ2xvc2UpO1xyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBoaWRlIHRoZSBmaXJzdCB0b2FzdCBpbiB0aGUgcXVldWUgd2hlbiBleGVjdXRpbmcgdGhlIGNvbW1hbmRcclxuICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBldmVudE1hbmFnZXIucHVibGlzaCgnbHQjZXhpdCcsIHF1ZXVlLmdldEZpcnN0TWVzc2FnZSgpLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzLmpzLm1hcFxuIiwiaW1wb3J0IEF1dGhlbnRpY2F0aW9uRm9ybSBmcm9tIFwiQC9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtXCI7XHJcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJ0ByZWRxL3JldXNlLW1vZGFsJztcclxuaW1wb3J0IENhcnQgZnJvbSBcIkAvZmVhdHVyZXMvY2FydC9jYXJ0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPcGVuQXV0aFRhYj0oKT0+XHJcbiAgICBvcGVuTW9kYWwoe1xyXG4gICAgc2hvdzogdHJ1ZSxcclxuICAgIG92ZXJsYXlDbGFzc05hbWU6ICdxdWljay12aWV3LW92ZXJsYXknLFxyXG4gICAgY2xvc2VPbkNsaWNrT3V0c2lkZTogdHJ1ZSxcclxuICAgIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Gb3JtLFxyXG4gICAgY2xvc2VDb21wb25lbnQ6ICcnLFxyXG4gICAgY29uZmlnOiB7XHJcbiAgICAgICAgZW5hYmxlUmVzaXppbmc6IGZhbHNlLFxyXG4gICAgICAgIGRpc2FibGVEcmFnZ2luZzogdHJ1ZSxcclxuICAgICAgICBjbGFzc05hbWU6ICdxdWljay12aWV3LW1vZGFsJyxcclxuICAgICAgICB3aWR0aDogNDU4LFxyXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBPcGVuQ2FydE1vZGFsPSgpPT5vcGVuTW9kYWwoe1xyXG4gICAgc2hvdzogdHJ1ZSxcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ2NhcnRQb3B1cCcsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBlbmFibGVSZXNpemluZzogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZURyYWdnaW5nOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgdGVuc2lvbjogMzYwLFxyXG4gICAgICAgICAgICBmcmljdGlvbjogNDAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlOiB0cnVlLFxyXG4gICAgY29tcG9uZW50OiBDYXJ0LFxyXG4gICAgY2xvc2VDb21wb25lbnQ6ICgpID0+IDxkaXYgLz4sXHJcbiAgICBjb21wb25lbnRQcm9wczogeyBvbkNsb3NlQnRuQ2xpY2s6IGNsb3NlTW9kYWwsIHNjcm9sbGJhckhlaWdodDogMzMwIH0sXHJcbn0pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBDbG9zZUljb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMTAuMDAzXCJcclxuICAgICAgaGVpZ2h0PVwiMTBcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwLjAwMyAxMFwiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZGF0YS1uYW1lPVwiX2lvbmljb25zX3N2Z19pb3MtY2xvc2UgKDUpXCJcclxuICAgICAgICBkPVwiTTE2Ni42ODYsMTY1LjU1bDMuNTczLTMuNTczYS44MzcuODM3LDAsMCwwLTEuMTg0LTEuMTg0bC0zLjU3MywzLjU3My0zLjU3My0zLjU3M2EuODM3LjgzNywwLDEsMC0xLjE4NCwxLjE4NGwzLjU3MywzLjU3My0zLjU3MywzLjU3M2EuODM3LjgzNywwLDAsMCwxLjE4NCwxLjE4NGwzLjU3My0zLjU3MywzLjU3MywzLjU3M2EuODM3LjgzNywwLDAsMCwxLjE4NC0xLjE4NFpcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTYwLjUgLTE2MC41NSlcIlxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IEZhY2Vib29rID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIHdpZHRoID0gJzE3cHgnLFxyXG4gIGhlaWdodCA9ICcxN3B4JyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD0nMCAwIDE3IDE3J1xyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGRhdGEtbmFtZT0nX2lvbmljb25zX3N2Z19sb2dvLWZhY2Vib29rICgxKSdcclxuICAgICAgICBkPSdNODAuMDYxLDY0SDY0LjkzOWEuOTM5LjkzOSwwLDAsMC0uOTM5LjkzOVY4MC4wNjFhLjkzOS45MzksMCwwLDAsLjkzOS45MzlINzIuNVY3NC4yNzFINzAuNDY4VjcxLjc5Mkg3Mi41VjY5Ljk1OWEzLjIzLDMuMjMsMCwwLDEsMy40ODQtMy4zOTFjLjkzOSwwLDEuOTQ4LjA3MSwyLjE4My4xdjIuMjkzSDc2LjZjLTEuMDY3LDAtMS4yNzEuNS0xLjI3MSwxLjI0OHYxLjU4aDIuNTQxbC0uMzMyLDIuNDc5SDc1LjMzM1Y4MWg0LjcyOEEuOTM5LjkzOSwwLDAsMCw4MSw4MC4wNjFWNjQuOTM5QS45MzkuOTM5LDAsMCwwLDgwLjA2MSw2NFonXHJcbiAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTY0IC02NCknXHJcbiAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgR29vZ2xlID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIHdpZHRoID0gJzE3cHgnLFxyXG4gIGhlaWdodCA9ICcxN3B4JyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD0nMCAwIDE2LjY3NyAxNydcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPSdNNjguNTc5LDU1LjI5bC0uMDg2LS4zNjRINjAuNTg0djMuMzQ4aDQuNzI1YTQuNzMsNC43MywwLDAsMS00LjYyNywzLjU1Niw1LjUzMyw1LjUzMywwLDAsMS0zLjcyNC0xLjQ4NCw1LjMxNiw1LjMxNiwwLDAsMS0xLjU4Ni0zLjc1Miw1LjQ4Myw1LjQ4MywwLDAsMSwxLjU1Ny0zLjc0OCw1LjMsNS4zLDAsMCwxLDMuNy0xLjQ0Nyw0LjgyNSw0LjgyNSwwLDAsMSwzLjE0NywxLjIyNmwyLjM3OS0yLjM2N2E4LjQxNyw4LjQxNywwLDAsMC01LjYtMi4xNThBOC4zOTEsOC4zOTEsMCwwLDAsNTIsNTYuNiw4LjU0MSw4LjU0MSwwLDAsMCw1NC4zMjYsNjIuNWE4Ljg3Myw4Ljg3MywwLDAsMCw2LjQsMi42LDcuODkxLDcuODkxLDAsMCwwLDUuNzQ3LTIuNDE2LDguNDg2LDguNDg2LDAsMCwwLDIuMjA3LTUuODc4LDkuNzg4LDkuNzg4LDAsMCwwLS4xLTEuNTE2WidcclxuICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTIgLTQ4LjEpJ1xyXG4gICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IE5vQ2FydEJhZyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCIyMzEuOTFcIlxyXG4gICAgICBoZWlnaHQ9XCIyOTJcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDIzMS45MSAyOTJcIlxyXG4gICAgPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwibGluZWFyLWdyYWRpZW50XCJcclxuICAgICAgICAgIHgxPVwiMVwiXHJcbiAgICAgICAgICB5MT1cIjAuNDM5XCJcclxuICAgICAgICAgIHgyPVwiMC4zNjlcIlxyXG4gICAgICAgICAgeTI9XCIxXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiMwMjk0NzdcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMwMDllN2ZcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPGdcclxuICAgICAgICBpZD1cIm5vX2NhcnRfaW5fYmFnXzJcIlxyXG4gICAgICAgIGRhdGEtbmFtZT1cIm5vIGNhcnQgaW4gYmFnIDJcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTM4OCAtMzUxKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZWxsaXBzZVxyXG4gICAgICAgICAgaWQ9XCJFbGxpcHNlXzI4NzNcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSAyODczXCJcclxuICAgICAgICAgIGN4PVwiMTE1Ljk1NVwiXHJcbiAgICAgICAgICBjeT1cIjI3LjM2NlwiXHJcbiAgICAgICAgICByeD1cIjExNS45NTVcIlxyXG4gICAgICAgICAgcnk9XCIyNy4zNjZcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzODggNTg4LjI2OClcIlxyXG4gICAgICAgICAgZmlsbD1cIiNkZGRcIlxyXG4gICAgICAgICAgb3BhY2l0eT1cIjAuMjVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY5MVwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4NjkxXCJcclxuICAgICAgICAgIGQ9XCJNMjkuNjMyLDBIMTcwLjM2OEEyOS44MjgsMjkuODI4LDAsMCwxLDIwMCwzMC4wMjFWMjA5Ljk3OUEyOS44MjgsMjkuODI4LDAsMCwxLDE3MC4zNjgsMjQwSDI5LjYzMkEyOS44MjgsMjkuODI4LDAsMCwxLDAsMjA5Ljk3OVYzMC4wMjFBMjkuODI4LDI5LjgyOCwwLDAsMSwyOS42MzIsMFpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0MDMgMzgxKVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwOWU3ZlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTg1MlwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTg1MlwiXHJcbiAgICAgICAgICBkPVwiTTMwLDBIMTcwYTMwLDMwLDAsMCwxLDMwLDMwdjBhMzAsMzAsMCwwLDEtMzAsMzBIMTIuODU3QTEyLjg1NywxMi44NTcsMCwwLDEsMCw0Ny4xNDNWMzBBMzAsMzAsMCwwLDEsMzAsMFpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0MDMgMzgxKVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTg1M1wiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTg1M1wiXHJcbiAgICAgICAgICBkPVwiTTQyLDBIMTU4YTQyLDQyLDAsMCwxLDQyLDQydjBhMTgsMTgsMCwwLDEtMTgsMThIMThBMTgsMTgsMCwwLDEsMCw0MnYwQTQyLDQyLDAsMCwxLDQyLDBaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDAzIDM4MSlcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY4NVwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4Njg1XCJcclxuICAgICAgICAgIGQ9XCJNNDQ2LjMxLDI0Ni4wNTZhMzAsMzAsMCwxLDEsMzAtMzBBMzAuMDM0LDMwLjAzNCwwLDAsMSw0NDYuMzEsMjQ2LjA1NlptMC01My4yOTRBMjMuMywyMy4zLDAsMSwwLDQ2OS45LDIxNi4wNTYsMjMuNDcxLDIzLjQ3MSwwLDAsMCw0NDYuMzEsMTkyLjc2MlpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNTYuNjkgMTY0Ljk0NClcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY4NlwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4Njg2XCJcclxuICAgICAgICAgIGQ9XCJNNDQ2LjMxLDM3NS4xODFhMzAsMzAsMCwxLDEsMzAtMzBBMzAuMDM0LDMwLjAzNCwwLDAsMSw0NDYuMzEsMzc1LjE4MVptMC01My4yOTRBMjMuMywyMy4zLDAsMSwwLDQ2OS45LDM0NS4xODEsMjMuNDcxLDIzLjQ3MSwwLDAsMCw0NDYuMzEsMzIxLjg4N1pcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNTcuNzkzIDk1LjY4NClcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDllN2ZcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgaWQ9XCJFbGxpcHNlXzI4NzRcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSAyODc0XCJcclxuICAgICAgICAgIGN4PVwiMjguNjg5XCJcclxuICAgICAgICAgIGN5PVwiMjguNjg5XCJcclxuICAgICAgICAgIHI9XCIyOC42ODlcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0NzMuODIzIDUxMS4wNDYpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgIGlkPVwiRWxsaXBzZV8yODc1XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIkVsbGlwc2UgMjg3NVwiXHJcbiAgICAgICAgICBjeD1cIjE1LjA0NlwiXHJcbiAgICAgICAgICBjeT1cIjE1LjA0NlwiXHJcbiAgICAgICAgICByPVwiMTUuMDQ2XCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDgxLjQwMSA1NDcuODU0KSByb3RhdGUoLTQ1KVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwOWU3ZlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4Njg3XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2ODdcIlxyXG4gICAgICAgICAgZD1cIk0zOTkuNzEsNTMxLjI3YTcxLjc1NSw3MS43NTUsMCwwLDEsMTIuNjUtMTMuNmMzLjQtMi44NjMtMS41LTcuNzI2LTQuODgyLTQuODgyYTc4LjM5Miw3OC4zOTIsMCwwLDAtMTMuNzMsMTVjLTIuNTYsMy42NDQsMy40MjQsNy4xLDUuOTYyLDMuNDg1WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA2MC41NzkgLTM1LjcwMylcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY4OFwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4Njg4XCJcclxuICAgICAgICAgIGQ9XCJNNDEyLjkxMyw1MjcuNzg2YTc4LjQxOSw3OC40MTksMCwwLDAtMTMuNzMtMTVjLTMuMzgtMi44NDMtOC4yODksMi4wMTctNC44ODIsNC44ODJhNzEuNzg1LDcxLjc4NSwwLDAsMSwxMi42NSwxMy42YzIuNTM1LDMuNjA5LDguNTI1LjE2Miw1Ljk2Mi0zLjQ4NVpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNjAuNTY2IC0zNS43MDQpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2ODlcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY4OVwiXHJcbiAgICAgICAgICBkPVwiTTU4My4yNzgsNTI3Ljc4NmE3OC40MTcsNzguNDE3LDAsMCwwLTEzLjczLTE1Yy0zLjM4LTIuODQzLTguMjg5LDIuMDE3LTQuODgyLDQuODgyYTcxLjc2OCw3MS43NjgsMCwwLDEsMTIuNjUsMTMuNmMyLjUzNSwzLjYwOSw4LjUyNS4xNjIsNS45NjItMy40ODVaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NzAuMzA0IC0zNS43MDQpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2OTBcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY5MFwiXHJcbiAgICAgICAgICBkPVwiTTU3MC4wNzUsNTMxLjI3YTcxLjc3LDcxLjc3LDAsMCwxLDEyLjY1LTEzLjZjMy40LTIuODYzLTEuNS03LjcyNi00Ljg4Mi00Ljg4MmE3OC40MDcsNzguNDA3LDAsMCwwLTEzLjczLDE1Yy0yLjU2LDMuNjQ0LDMuNDI0LDcuMSw1Ljk2MiwzLjQ4NVpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk3MC4zMTggLTM1LjcwMylcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY5MlwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4NjkyXCJcclxuICAgICAgICAgIGQ9XCJNMzAxLjI0MywyODcuNDY0YTE5LjExNSwxOS4xMTUsMCwwLDEsOC4wNzEsOS4wNzcsMTkuNjM3LDE5LjYzNywwLDAsMSwxLjYsNy44OHYyNi4wODVhMTkuMzQ5LDE5LjM0OSwwLDAsMS05LjY3MiwxNi45NTdjLTEwLjA0OC02Ljg1OC0xNi41NDQtMTcuNzQyLTE2LjU0NC0zMFMyOTEuMiwyOTQuMzIyLDMwMS4yNDMsMjg3LjQ2NFpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyOTIuMzAxIDEwMS41MzYpXCJcclxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY5M1wiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4NjkzXCJcclxuICAgICAgICAgIGQ9XCJNMjk0LjM3MSwyODcuNDY0YTE5LjExNSwxOS4xMTUsMCwwLDAtOC4wNzEsOS4wNzcsMTkuNjM3LDE5LjYzNywwLDAsMC0xLjYsNy44OHYyNi4wODVhMTkuMzQ5LDE5LjM0OSwwLDAsMCw5LjY3MiwxNi45NTdjMTAuMDQ4LTYuODU4LDE2LjU0NC0xNy43NDIsMTYuNTQ0LTMwUzMwNC40MTksMjk0LjMyMiwyOTQuMzcxLDI4Ny40NjRaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMTE4LjMwMSAxMDEuNTM2KVwiXHJcbiAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgU2hvcHBpbmdCYWcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuPlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgIHdpZHRoPScxMi42ODYnXHJcbiAgICAgICAgaGVpZ2h0PScxNidcclxuICAgICAgICB2aWV3Qm94PScwIDAgMTIuNjg2IDE2J1xyXG4gICAgICA+XHJcbiAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAyNzA0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjcuMDIzIC0yKSc+XHJcbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE3JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNy4wMjMgNS4xNTYpJz5cclxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxNic+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nUGF0aCAzJ1xyXG4gICAgICAgICAgICAgICAgZD0nTTY1LjcsMTExLjA0M2wtLjcxNC05QTEuMTI1LDEuMTI1LDAsMCwwLDYzLjg3MSwxMDFINjIuNDU5VjEwMy4xYS40NjkuNDY5LDAsMSwxLS45MzcsMFYxMDFINTcuMjExVjEwMy4xYS40NjkuNDY5LDAsMSwxLS45MzcsMFYxMDFINTQuODYyYTEuMTI1LDEuMTI1LDAsMCwwLTEuMTE3LDEuMDMzbC0uNzE1LDkuMDA2YTIuNjA1LDIuNjA1LDAsMCwwLDIuNiwyLjhINjMuMWEyLjYwNSwyLjYwNSwwLDAsMCwyLjYtMi44MDZabS00LjIyNC00LjU4NS0yLjQyNCwyLjQyNGEuNDY4LjQ2OCwwLDAsMS0uNjYzLDBsLTEuMTM2LTEuMTM2YS40NjkuNDY5LDAsMCwxLC42NjMtLjY2M2wuOC44LDIuMDkyLTIuMDkyYS40NjkuNDY5LDAsMSwxLC42NjMuNjYzWidcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01My4wMjMgLTEwMS4wMDUpJ1xyXG4gICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMwLjI3NCAyKSc+XHJcbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTgnPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9J1BhdGggNCdcclxuICAgICAgICAgICAgICAgIGQ9J00xNjAuMTMyLDBhMy4xLDMuMSwwLDAsMC0zLjA5MywzLjA5M3YuMDYzaC45MzdWMy4wOTNhMi4xNTUsMi4xNTUsMCwxLDEsNC4zMTEsMHYuMDYzaC45MzdWMy4wOTNBMy4xLDMuMSwwLDAsMCwxNjAuMTMyLDBaJ1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE1Ny4wMzkpJ1xyXG4gICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBTaG9wcGluZ0JhZ0xhcmdlID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIHdpZHRoID0gJzE4cHgnLFxyXG4gIGhlaWdodCA9ICcxOHB4JyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD0nMCAwIDIzLjc4NiAzMCdcclxuICAgID5cclxuICAgICAgPGcgZGF0YS1uYW1lPSdzaG9wcGluZy1iYWcgKDMpJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTMuMDIzKSc+XHJcbiAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAyNzA0Jz5cclxuICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUzLjAyMyA1LjkxOCknPlxyXG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE2Jz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPSdQYXRoIDMnXHJcbiAgICAgICAgICAgICAgICBkPSdNNzYuOCwxMTkuODI2bC0xLjM0LTE2Ljg4MUEyLjEwOSwyLjEwOSwwLDAsMCw3My4zNjIsMTAxSDcwLjcxNnYzLjkyMWEuODc5Ljg3OSwwLDEsMS0xLjc1NywwVjEwMUg2MC44NzV2My45MjFhLjg3OS44NzksMCwxLDEtMS43NTcsMFYxMDFINTYuNDcyYTIuMTA5LDIuMTA5LDAsMCwwLTIuMDk0LDEuOTM3bC0xLjM0LDE2Ljg4NmE0Ljg4NSw0Ljg4NSwwLDAsMCw0Ljg3LDUuMjU5SDcxLjkyNmE0Ljg4NCw0Ljg4NCwwLDAsMCw0Ljg3LTUuMjYxWm0tNy45Mi04LjYtNC41NDQsNC41NDRhLjg3OC44NzgsMCwwLDEtMS4yNDMsMGwtMi4xMy0yLjEzQS44NzguODc4LDAsMCwxLDYyLjIsMTEyLjRsMS41MDksMS41MDgsMy45MjMtMy45MjNhLjg3OS44NzksMCwxLDEsMS4yNDIsMS4yNDNaJ1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUzLjAyMyAtMTAxLjAwNSknXHJcbiAgICAgICAgICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1OS4xMTgpJz5cclxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxOCc+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nUGF0aCA0J1xyXG4gICAgICAgICAgICAgICAgZD0nTTE2Mi44MzgsMGE1LjgwNiw1LjgwNiwwLDAsMC01LjgsNS44di4xMTlIMTU4LjhWNS44YTQuMDQyLDQuMDQyLDAsMSwxLDguMDgzLDB2LjExOWgxLjc1N1Y1LjhBNS44MDYsNS44MDYsMCwwLDAsMTYyLjgzOCwwWidcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNTcuMDM5KSdcclxuICAgICAgICAgICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBKU09OQ29uZmlnPSB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xyXG5pbXBvcnQgeyBjb21wb3NlLCBsYXlvdXQsIHNwYWNlLCBjb2xvciwgYm9yZGVyIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dDxhbnk+KFxyXG4gIGNzcyh7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHA6ICcwIDE4cHgnLFxyXG4gICAgYXBwZWFyYW5jZTogJ25vbmUnLFxyXG4gICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgZm9udFNpemU6ICdiYXNlJyxcclxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXHJcbiAgICBib3JkZXJDb2xvcjogJ2dyYXkuNTAwJyxcclxuICAgIGJvcmRlclJhZGl1czogJ2Jhc2UnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgaGVpZ2h0OiAnNDhweCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzIGVhc2UnLFxyXG4gICAgLy8gbWI6IDMsXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgfSxcclxuICB9KSxcclxuICB7XHJcbiAgICAnJjpob3ZlciwmOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICAnJjo6cGxhY2Vob2xkZXInOiB7XHJcbiAgICAgIGNvbG9yOiAnJyxcclxuICAgIH0sXHJcbiAgICAnJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uJzoge1xyXG4gICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxyXG4gICAgICBtYXJnaW46IDAsXHJcbiAgICB9LFxyXG4gICAgJyYuZGlzYWJsZWQnOiB7XHJcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcclxuICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbXBvc2UobGF5b3V0LCBzcGFjZSwgY29sb3IsIGJvcmRlcilcclxuKTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcclxuZXhwb3J0IGNvbnN0IEl0ZW1Cb3ggPSBzdHlsZWQuZGl2KFxyXG4gIGNzcyh7XHJcbiAgICBmb250U2l6ZTogJ2Jhc2UnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgcHk6IDE1LFxyXG4gICAgcHg6IDI1LFxyXG4gICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkYCxcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnZ3JheS4yMDAnLFxyXG4gIH0pLFxyXG4gIHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH1cclxuKTtcclxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uID0gc3R5bGVkLmRpdih7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIG1hcmdpbkxlZnQ6ICcxNXB4JyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWcoe1xyXG4gIHdpZHRoOiA2MCxcclxuICBoZWlnaHQ6IDYwLFxyXG4gIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICBtYXJnaW46ICcwIDE1cHgnLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IE5hbWUgPSBzdHlsZWQuc3BhbihcclxuICBjc3Moe1xyXG4gICAgZm9udFdlaWdodDogJ21kJyxcclxuICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcclxuICAgIG1iOiAnMHB4JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICB9KVxyXG4pO1xyXG5leHBvcnQgY29uc3QgUHJpY2UgPSBzdHlsZWQuc3BhbihcclxuICBjc3Moe1xyXG4gICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgbXQ6ICcxMHB4JyxcclxuICAgIG1iOiAnMTBweCcsXHJcbiAgfSlcclxuKTtcclxuZXhwb3J0IGNvbnN0IFdlaWdodCA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBmb250U2l6ZTogJ3NtJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdyZWd1bGFyJyxcclxuICAgIGNvbG9yOiAndGV4dC5yZWd1bGFyJyxcclxuICAgIG1iOiAnNXB4JyxcclxuICB9KVxyXG4pO1xyXG5leHBvcnQgY29uc3QgVG90YWwgPSBzdHlsZWQuc3BhbihcclxuICBjc3Moe1xyXG4gICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgbWw6ICdhdXRvJyxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlbW92ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b24oe1xyXG4gIHBhZGRpbmc6ICc1cHgnLFxyXG4gIGJvcmRlcjogMCxcclxuICBvdXRsaW5lOiAwLFxyXG4gIG1hcmdpbkxlZnQ6ICcxNXB4JyxcclxuICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yNSknLFxyXG4gIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcblxyXG4gICcmOmhvdmVyJzoge1xyXG4gICAgY29sb3I6ICdyZWQnLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb3VudGVyIH0gZnJvbSAnLi4vY291bnRlci9jb3VudGVyJztcclxuaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSAnQC9hc3NldHMvaWNvbnMvQ2xvc2VJY29uJztcclxuaW1wb3J0IHtcclxuICBJdGVtQm94LFxyXG4gIEltYWdlLFxyXG4gIEluZm9ybWF0aW9uLFxyXG4gIE5hbWUsXHJcbiAgUHJpY2UsXHJcbiAgV2VpZ2h0LFxyXG4gIFRvdGFsLFxyXG4gIFJlbW92ZUJ1dHRvbixcclxufSBmcm9tICcuL2NhcnQtaXRlbS5zdHlsZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGRhdGE6IGFueTtcclxuICBvbkRlY3JlbWVudDogKCkgPT4gdm9pZDtcclxuICBvbkluY3JlbWVudDogKCkgPT4gdm9pZDtcclxuICBvblJlbW92ZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRJdGVtOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGRhdGEsXHJcbiAgb25EZWNyZW1lbnQsXHJcbiAgb25JbmNyZW1lbnQsXHJcbiAgb25SZW1vdmUsXHJcbn0pID0+IHtcclxuICBjb25zdCB7IG5hbWUsIHRodW1iSW1hZ2UsIHByaWNlLCBzYWxlUHJpY2UsIHVuaXQsIGNvdW50SW5TdG9jayB9ID0gZGF0YTtcclxuICBjb25zdCBkaXNwbGF5UHJpY2UgPSBzYWxlUHJpY2UgPyBzYWxlUHJpY2UgOiBwcmljZTtcclxuICByZXR1cm4gKFxyXG4gICAgPEl0ZW1Cb3g+XHJcbiAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgdmFsdWU9e2RhdGEuY2FydFF1YW50aXR5fVxyXG4gICAgICAgIG9uRGVjcmVtZW50PXtvbkRlY3JlbWVudH1cclxuICAgICAgICBvbkluY3JlbWVudD17b25JbmNyZW1lbnR9XHJcbiAgICAgICAgdmFyaWFudD1cImxpZ2h0VmVydGljYWxcIlxyXG4gICAgICAvPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXt0aHVtYkltYWdlfSAvPlxyXG4gICAgICA8SW5mb3JtYXRpb24+XHJcbiAgICAgICAgPE5hbWU+e25hbWV9PC9OYW1lPlxyXG4gICAgICAgIDxQcmljZT5cclxuICAgICAgICAgIHtkaXNwbGF5UHJpY2V9XHJcbiAgICAgICAgPC9QcmljZT5cclxuICAgICAgICA8V2VpZ2h0PlxyXG4gICAgICAgICAgey8qe3F1YW50aXR5fSBYIHt1bml0fSovfVxyXG4gICAgICAgIDwvV2VpZ2h0PlxyXG4gICAgICA8L0luZm9ybWF0aW9uPlxyXG4gICAgICA8VG90YWw+XHJcbiAgICAgICAgey8qeyhxdWFudGl0eSAqIGRpc3BsYXlQcmljZSkudG9GaXhlZCgyKX0qL31cclxuICAgICAgPC9Ub3RhbD5cclxuICAgICAgPFJlbW92ZUJ1dHRvbiBvbkNsaWNrPXtvblJlbW92ZX0+XHJcbiAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICA8L1JlbW92ZUJ1dHRvbj5cclxuICAgIDwvSXRlbUJveD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENhcnRQb3B1cEJ1dHRvblN0eWxlZCxcclxuICBCdXR0b25JbWdCb3gsXHJcbiAgSXRlbUNvdW50LFxyXG4gIFByaWNlQm94LFxyXG4gIENhcnRQb3B1cEJveEJ1dHRvbixcclxuICBQcmljZUJveEFsdCxcclxuICBUb3RhbEl0ZW1zLFxyXG59IGZyb20gJy4vY2FydC1wb3B1cC5zdHlsZSc7XHJcbmltcG9ydCB7IFNob3BwaW5nQmFnIH0gZnJvbSAnQC9hc3NldHMvaWNvbnMvU2hvcHBpbmdCYWcnO1xyXG5cclxudHlwZSBDYXJ0QnV0dG9uUHJvcHMgPSB7XHJcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG4gIGl0ZW1Db3VudD86IG51bWJlcjtcclxuICBpdGVtUG9zdGZpeD86IGFueTtcclxuICBwcmljZT86IG51bWJlcjtcclxuICBwcmljZVByZWZpeD86IHN0cmluZztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgb25DbGljaz86IChlOiBhbnkpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBDYXJ0UG9wdXBCdXR0b246IFJlYWN0LkZDPENhcnRCdXR0b25Qcm9wcz4gPSAoe1xyXG4gIGl0ZW1Db3VudCxcclxuICBpdGVtUG9zdGZpeCA9ICdpdGVtcycsXHJcbiAgcHJpY2UsXHJcbiAgcHJpY2VQcmVmaXggPSAnJCcsXHJcbiAgc3R5bGUsXHJcbiAgb25DbGljayxcclxuICBjbGFzc05hbWUsXHJcbn0pID0+IChcclxuICA8Q2FydFBvcHVwQnV0dG9uU3R5bGVkIHN0eWxlPXtzdHlsZX0gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgPEJ1dHRvbkltZ0JveD5cclxuICAgICAgPFNob3BwaW5nQmFnIC8+XHJcbiAgICA8L0J1dHRvbkltZ0JveD5cclxuICAgIDxJdGVtQ291bnQ+XHJcbiAgICAgIHtpdGVtQ291bnR9IHtpdGVtUG9zdGZpeH1cclxuICAgIDwvSXRlbUNvdW50PlxyXG4gICAgPFByaWNlQm94PlxyXG4gICAgICB7cHJpY2VQcmVmaXh9XHJcbiAgICAgIHtwYXJzZUZsb2F0KGAke3ByaWNlfWApLnRvRml4ZWQoMil9XHJcbiAgICA8L1ByaWNlQm94PlxyXG4gIDwvQ2FydFBvcHVwQnV0dG9uU3R5bGVkPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJveGVkQ2FydEJ1dHRvbjogUmVhY3QuRkM8Q2FydEJ1dHRvblByb3BzPiA9ICh7XHJcbiAgaXRlbUNvdW50LFxyXG4gIGl0ZW1Qb3N0Zml4ID0gJ2l0ZW1zJyxcclxuICBwcmljZSxcclxuICBwcmljZVByZWZpeCA9ICckJyxcclxuICBzdHlsZSxcclxuICBvbkNsaWNrLFxyXG4gIGNsYXNzTmFtZSxcclxufSkgPT4gKFxyXG4gIDxDYXJ0UG9wdXBCb3hCdXR0b24gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICA8VG90YWxJdGVtcz5cclxuICAgICAgPFNob3BwaW5nQmFnIC8+XHJcbiAgICAgIHtpdGVtQ291bnR9IHtpdGVtUG9zdGZpeH1cclxuICAgIDwvVG90YWxJdGVtcz5cclxuICAgIDxQcmljZUJveEFsdD5cclxuICAgICAge3ByaWNlUHJlZml4fVxyXG4gICAgICB7cGFyc2VGbG9hdChgJHtwcmljZX1gKS50b0ZpeGVkKDIpfVxyXG4gICAgPC9QcmljZUJveEFsdD5cclxuICA8L0NhcnRQb3B1cEJveEJ1dHRvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRQb3B1cEJ1dHRvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmNvbnN0IENhcnRQb3B1cEJ1dHRvblN0eWxlZCA9IHN0eWxlZCgnYnV0dG9uJylgXHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgcGFkZGluZzogMCAwIDAgMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG4gIGJveC1zaGFkb3c6ICR7dGhlbWVHZXQoJ3NoYWRvd3MuYmlnJywgJzAgMjFweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHBhZGRpbmc6IDJweCAycHggMnB4IDMwcHg7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1ODFweCkge1xyXG4gICAgJjpub3QoLmZpeGVkQ2FydFBvcHVwKSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uSW1nQm94ID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbUNvdW50ID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJpY2VCb3ggPSBzdHlsZWQoJ3NwYW4nKWBcclxuICB3aWR0aDogNTZweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy54cycsICcxMicpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FydFBvcHVwQm94QnV0dG9uID0gc3R5bGVkKCdidXR0b24nKWBcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMzAlIDAlIDAlIDMwJTtcclxuICBib3JkZXI6ICMwMDlFN0YgMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3gtc2hhZG93OiAke3RoZW1lR2V0KCdzaGFkb3dzLmJpZycsICcwIDIxcHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtNDZweDtcclxuICB6LWluZGV4OiA5OTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRvdGFsSXRlbXMgPSBzdHlsZWQoJ3NwYW4nKWBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG5cclxuICBzdmcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByaWNlQm94QWx0ID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIG1pbi13aWR0aDogODBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JSAwJSAwJSAxNSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgbWFyZ2luOiAwIDEwcHggMTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQnV0dG9uSW1nQm94LFxyXG4gIENhcnRQb3B1cEJ1dHRvblN0eWxlZCxcclxuICBJdGVtQ291bnQsXHJcbiAgUHJpY2VCb3gsXHJcbiAgQ2FydFBvcHVwQm94QnV0dG9uLFxyXG4gIFByaWNlQm94QWx0LFxyXG4gIFRvdGFsSXRlbXMsXHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMvT3RoZXJzL2J1dHRvbi9idXR0b24nO1xyXG5leHBvcnQgeyBCdXR0b24gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIFxyXG4gIHBhZGRpbmc6IDQwcHggNjBweCAwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMzBweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuaDNgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuaGVhZGluZycsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmxnJywgJzIxJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3ViSGVhZGluZyA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgT2ZmZXJTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjIwMCcsICcjRjdGN0Y3Jyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9mZmVyID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgbWFyZ2luOiAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlbHBlclRleHQgPSBzdHlsZWQucGBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmJsdWUubGluaycsICcjNDI4NWY0Jyl9O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGhlaWdodDogNDhweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iYXNlJywgJzZweCcpfTtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4yMDAnLCAnI2Y3ZjdmNycpfTtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS43MDAnLCAnI2U2ZTZlNicpfTtcclxuLy8gICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4vLyAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuLy8gICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbi8vICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuLy8gICBsaW5lLWhlaWdodDogMTlweDtcclxuLy8gICBwYWRkaW5nOiAwIDE4cHg7XHJcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZTtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuLy8gICAmOmhvdmVyLFxyXG4vLyAgICY6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogMDtcclxuLy8gICB9XHJcblxyXG4vLyAgICY6Zm9jdXMge1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbi8vICAgfVxyXG5cclxuLy8gICAmOjpwbGFjZWhvbGRlciB7XHJcbi8vICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4vLyAgICAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggKyAxcHgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuLy8gICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuLy8gICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICB9XHJcblxyXG4vLyAgICYuZGlzYWJsZWQge1xyXG4vLyAgICAgLmlubmVyLXdyYXAge1xyXG4vLyAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4vLyAgICAgICBvcGFjaXR5OiAwLjY7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyBgO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpdmlkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuNTAwJywgJyNmMWYxZjEnKX07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4IC0gMXB4KTtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFdyYXBwZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgU3ViSGVhZGluZyxcclxuICAvLyBJbnB1dCxcclxuICBCdXR0b24sXHJcbiAgTGlua0J1dHRvbixcclxuICBPZmZlcixcclxufSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLWZvcm0uc3R5bGUnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2NvbXBvbmVudHMvT3RoZXJzL2Zvcm1zL2lucHV0JztcclxuY29uc3QgRm9yZ290UGFzc3dvcmRNb2RhbDpSZWFjdC5GQzx7c2V0Q3VycmVudEZvcm06KHZhbHVlOidzaWduVXAnfCdmb3Jnb3RQYXNzJ3wnc2lnbkluJyk9PnZvaWR9Pj0oe3NldEN1cnJlbnRGb3JtfSk9PiB7XHJcbiAgY29uc3QgdG9nZ2xlU2lnbkluRm9ybSA9ICgpID0+IHtcclxuICAgICAgc2V0Q3VycmVudEZvcm0oJ3NpZ25JbicpXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMzAgfX0+XHJcbiAgICAgICAgPEhlYWRpbmc+XHJcbiAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmRcclxuICAgICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgIDxTdWJIZWFkaW5nPlxyXG4gICAgICAgICAgV2UnbGwgc2VuZCB5b3UgYSBsaW5rIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmRcclxuICAgICAgICA8L1N1YkhlYWRpbmc+XHJcblxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzcyBvciBDb250YWN0IE5vLlwiXHJcbiAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9JyNGN0Y3RjcnXHJcbiAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlc2V0IFBhc3N3b3JkXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPE9mZmVyIHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAgMCcgfX0+XHJcbiAgICAgICAgICBCYWNrIHRveycgJ31cclxuICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZ25JbkZvcm19PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxyXG4gICAgICAgIDwvT2ZmZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmRNb2RhbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2lnbkluRm9ybSBmcm9tICcuL2xvZ2luJztcclxuaW1wb3J0IFNpZ25VcCBmcm9tICcuL3JlZ2lzdGVyJztcclxuaW1wb3J0IEZvcmdvdFBhc3NGb3JtIGZyb20gJy4vZm9yZ290LXBhc3N3b3JkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7Y2xvc2VNb2RhbH0gZnJvbSBcIkByZWRxL3JldXNlLW1vZGFsXCI7XHJcbmNvbnN0IEF1dGhlbnRpY2F0aW9uRm9ybT0oe3JvdXRlcn0pPT4ge1xyXG4gIGNvbnN0IHtpc0F1dGhlbnRpY2F0ZWR9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgW2N1cnJlbnRGb3JtLHNldEN1cnJlbnRGb3JtXT11c2VTdGF0ZTwnc2lnblVwJ3wnZm9yZ290UGFzcyd8J3NpZ25Jbic+KCdzaWduVXAnKVxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoaXNBdXRoZW50aWNhdGVkKXtcclxuICAgICAgaWYocm91dGVyLnBhdGhuYW1lPT09Jy9sb2dpbicpe1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBjbG9zZU1vZGFsKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sW2lzQXV0aGVudGljYXRlZF0pXHJcbiAgaWYgKGN1cnJlbnRGb3JtID09PSAnc2lnbkluJykge1xyXG4gICAgcmV0dXJuIDxTaWduSW5Gb3JtICBzZXRDdXJyZW50Rm9ybT17c2V0Q3VycmVudEZvcm19Lz5cclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50Rm9ybSA9PT0gJ3NpZ25VcCcpIHtcclxuICAgIHJldHVybiA8U2lnblVwIHNldEN1cnJlbnRGb3JtPXtzZXRDdXJyZW50Rm9ybX0vPlxyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRGb3JtID09PSAgJ2ZvcmdvdFBhc3MnKSB7XHJcbiAgICByZXR1cm4gPEZvcmdvdFBhc3NGb3JtICBzZXRDdXJyZW50Rm9ybT17c2V0Q3VycmVudEZvcm19Lz5cclxuICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQXV0aGVudGljYXRpb25Gb3JtKVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIExpbmtCdXR0b24sXHJcbiAgQnV0dG9uLFxyXG4gIEljb25XcmFwcGVyLFxyXG4gIFdyYXBwZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIExvZ29XcmFwcGVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgU3ViSGVhZGluZyxcclxuICBPZmZlclNlY3Rpb24sXHJcbiAgT2ZmZXIsXHJcbiAgLy8gSW5wdXQsXHJcbiAgRGl2aWRlcixcclxufSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLWZvcm0uc3R5bGUnO1xyXG5pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gJ2Fzc2V0cy9pY29ucy9GYWNlYm9vayc7XHJcbmltcG9ydCB7IEdvb2dsZSB9IGZyb20gJ2Fzc2V0cy9pY29ucy9Hb29nbGUnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tICdAcmVkcS9yZXVzZS1tb2RhbCc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnY29tcG9uZW50cy9PdGhlcnMvZm9ybXMvaW5wdXQnO1xyXG5pbXBvcnQge3VzZUxvZ2luRm9ybX0gZnJvbSBcIkAvaG9va3MvdXNlTG9naW5Gb3JtXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2xvYWRVc2VyLCBsb2dpbn0gZnJvbSBcIkAvcmVkdXgvYWN0aW9ucy9nbG9iYWxBY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xyXG5pbXBvcnQge0FVVEh9IGZyb20gXCJAL3JlZHV4L2RlZmluZXNcIjtcclxuaW1wb3J0IFRvYXN0IGZyb20gXCJsaWdodC10b2FzdFwiO1xyXG5pbXBvcnQge0pTT05Db25maWd9IGZyb20gXCJAL2F4aW9zSGVhZGVyc1wiO1xyXG5cclxuY29uc3QgU2lnbkluTW9kYWw6UmVhY3QuRkM8e3NldEN1cnJlbnRGb3JtOih2YWx1ZTonc2lnblVwJ3wnZm9yZ290UGFzcyd8J3NpZ25JbicpPT52b2lkfT49KHtzZXRDdXJyZW50Rm9ybX0pPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKClcclxuICBjb25zdCB0b2dnbGVTaWduVXBGb3JtID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudEZvcm0oJ3NpZ25VcCcpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRm9yZ290UGFzc0Zvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Rm9ybSgnZm9yZ290UGFzcycpXHJcbiAgfTtcclxuICBjb25zdCB7aW5wdXRzLCBoYW5kbGVJbnB1dENoYW5nZX0gPSB1c2VMb2dpbkZvcm0oKTtcclxuXHJcblxyXG4gIGNvbnN0IGxvZ2luQ2FsbGJhY2sgPWFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9hdXRoL2xvZ2luYCxcclxuICAgICAgICAgIHtlbWFpbDppbnB1dHMuZW1haWwsIHBhc3N3b3JkOmlucHV0cy5wYXNzd29yZH0sXHJcbiAgICAgICAgICBKU09OQ29uZmlnXHJcbiAgICAgIClcclxuICAgICAgZGlzcGF0Y2gobG9naW4oZGF0YSkpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeShkYXRhLnRva2VuKSlcclxuICAgICAgYXdhaXQgZGlzcGF0Y2gobG9hZFVzZXIoKSlcclxuICAgICAgVG9hc3Quc3VjY2VzcygnU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbicpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgVG9hc3QuZmFpbChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yICsnLCBQbGVhc2UgdHJ5IGFnYWluJylcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8V3JhcHBlcj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEhlYWRpbmc+XHJcbiAgICAgICAgICAgIFdlbGNvbWUgQmFja1xyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxyXG4gICAgICAgICAgICBMb2dpbiB3aXRoIHlvdXIgZW1haWwgJmFtcDsgcGFzc3dvcmRcclxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtsb2dpbkNhbGxiYWNrfT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtcImVtYWlsXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQgKG1pbiA2IGNoYXJhY3RlcnMpXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9e1wicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ29udGludWUgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8RGl2aWRlcj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBvclxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9EaXZpZGVyPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjY3YjInLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luQ2FsbGJhY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgICA8RmFjZWJvb2sgLz5cclxuICAgICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgQ29udGludWUgd2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJyM0Mjg1ZjQnIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17bG9naW5DYWxsYmFja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxHb29nbGUgLz5cclxuICAgICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgQ29udGludWUgd2l0aCBHb29nbGVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxPZmZlciBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwJyB9fT5cclxuICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbnkgYWNjb3VudD97JyAnfVxyXG4gICAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWduVXBGb3JtfT5cclxuICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cclxuICAgICAgICAgIDwvT2ZmZXI+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIDxPZmZlclNlY3Rpb24+XHJcbiAgICAgICAgICA8T2ZmZXI+XHJcbiAgICAgICAgICAgIEZvcmdvdCB5b3VyIHBhc3N3b3JkP1xyXG4gICAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0b2dnbGVGb3Jnb3RQYXNzRm9ybX0+XHJcbiAgICAgICAgICAgICAgUmVzZXQgSXRcclxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxyXG4gICAgICAgICAgPC9PZmZlcj5cclxuICAgICAgICA8L09mZmVyU2VjdGlvbj5cclxuICAgICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluTW9kYWxcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnY29tcG9uZW50cy9PdGhlcnMvZm9ybXMvaW5wdXQnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBJY29uV3JhcHBlcixcclxuICBXcmFwcGVyLFxyXG4gIENvbnRhaW5lcixcclxuICBMb2dvV3JhcHBlcixcclxuICBIZWFkaW5nLFxyXG4gIFN1YkhlYWRpbmcsXHJcbiAgSGVscGVyVGV4dCxcclxuICBPZmZlcixcclxuICAvLyBJbnB1dCxcclxuICBEaXZpZGVyLFxyXG4gIExpbmtCdXR0b24sXHJcbn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi1mb3JtLnN0eWxlJztcclxuaW1wb3J0IHsgRmFjZWJvb2sgfSBmcm9tICdhc3NldHMvaWNvbnMvRmFjZWJvb2snO1xyXG5pbXBvcnQgeyBHb29nbGUgfSBmcm9tICdhc3NldHMvaWNvbnMvR29vZ2xlJztcclxuaW1wb3J0IHt1c2VMb2dpbkZvcm19IGZyb20gXCJAL2hvb2tzL3VzZUxvZ2luRm9ybVwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtsb2FkVXNlciwgcmVnaXN0ZXJ9IGZyb20gXCJAL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSBmcm9tIFwiQC91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IHtBVVRIfSBmcm9tIFwiQC9yZWR1eC9kZWZpbmVzXCI7XHJcbmltcG9ydCB7SlNPTkNvbmZpZ30gZnJvbSBcIkAvYXhpb3NIZWFkZXJzXCI7XHJcbmltcG9ydCBUb2FzdCBmcm9tIFwibGlnaHQtdG9hc3RcIjtcclxuY29uc3QgU2lnbnVwTW9kYWw6UmVhY3QuRkM8e3NldEN1cnJlbnRGb3JtOih2YWx1ZTonc2lnblVwJ3wnZm9yZ290UGFzcyd8J3NpZ25JbicpPT52b2lkfT49KHtzZXRDdXJyZW50Rm9ybX0pPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZVNpZ25JbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Rm9ybSgnc2lnbkluJylcclxuICB9O1xyXG4gIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKClcclxuICBjb25zdCB7aW5wdXRzLCBoYW5kbGVJbnB1dENoYW5nZX0gPSB1c2VMb2dpbkZvcm0oKTtcclxuICBjb25zdCBvblN1Ym1pdD1hc3luYyAoZSk9PntcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvYXV0aC9yZWdpc3RlcmAsXHJcbiAgICAgICAgICB7Zmlyc3ROYW1lOmlucHV0cy5maXJzdE5hbWUsbGFzdE5hbWU6aW5wdXRzLmxhc3ROYW1lLCBlbWFpbDppbnB1dHMuZW1haWwsIHBhc3N3b3JkOmlucHV0cy5wYXNzd29yZCwgcm9sZTondXNlcid9LFxyXG4gICAgICAgICAgSlNPTkNvbmZpZ1xyXG4gICAgICApXHJcbiAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyKGRhdGEpKVxyXG4gICAgICBhd2FpdCBsb2FkVXNlcigpXHJcbiAgICAgIFRvYXN0LnN1Y2Nlc3MoJ1N1Y2Nlc3NmdWxseSBzaWduZWQgdXAnKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgSlNPTi5zdHJpbmdpZnkoZGF0YS50b2tlbikpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgVG9hc3QuZmFpbChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGluZz5cclxuICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPFN1YkhlYWRpbmc+XHJcbiAgICAgICAgICBFdmVyeSBmaWxsIGlzIHJlcXVpcmVkIGluIHNpZ24gdXBcclxuICAgICAgICA8L1N1YkhlYWRpbmc+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9ICdGaXJzdCBuYW1lJ1xyXG4gICAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgICAgbWI9JzEwcHgnXHJcbiAgICAgICAgICAgIG5hbWU9J2ZpcnN0TmFtZSdcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLmZpcnN0TmFtZX1cclxuXHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9ICdMYXN0IG5hbWUnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAgICAgICBuYW1lPSdsYXN0TmFtZSdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMubGFzdE5hbWV9XHJcblxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsIEFkZHJlc3MnXHJcbiAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9JyNGN0Y3RjcnXHJcbiAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0gJ1Bhc3N3b3JkIChtaW4gNiBjaGFyYWN0ZXJzKSdcclxuICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XHJcblxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEhlbHBlclRleHQgc3R5bGU9e3sgcGFkZGluZzogJzIwcHggMCAzMHB4JyB9fT5cclxuICAgICAgICAgIEJ5IHNpZ25pbmcgdXAsIHlvdSBhZ3JlZSB0b1xyXG4gICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgVGVybXMgJmFtcDsgQ29uZGl0aW9uXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0hlbHBlclRleHQ+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5JyBzaXplPSdiaWcnIHdpZHRoPScxMDAlJyB0eXBlPSdzdWJtaXQnPlxyXG4gICAgICAgICAgQ29udGludWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPERpdmlkZXI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgb3JcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0RpdmlkZXI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjY3YjInLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxGYWNlYm9vayAvPlxyXG4gICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgIENvbnRpbnVlIHdpdGggRmFjZWJvb2tcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnIzQyODVmNCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxHb29nbGUgLz5cclxuICAgICAgICAgIDwvSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICBDb250aW51ZSB3aXRoIEdvb2dsZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxPZmZlciBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwJyB9fT5cclxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3snICd9XHJcbiAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWduSW5Gb3JtfT5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cclxuICAgICAgICA8L09mZmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cE1vZGFsXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4vY2FydCc7XHJcbmltcG9ydCBDYXJ0UG9wdXBCdXR0b24sIHtcclxuICBCb3hlZENhcnRCdXR0b24sXHJcbn0gZnJvbSAnQC9jb21wb25lbnRzL2NhcnQvcG9wdXAvY2FydC1wb3B1cC1idXR0b24nO1xyXG5pbXBvcnQgeyBDYXJ0U2xpZGVQb3B1cCB9IGZyb20gJy4vY2FydC5zdHlsZSc7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2NhbGN1bGF0ZVRvdGFsUHJpY2V9IGZyb20gXCIuLi8uLi91dGlscy9jYXJ0VXRpbHNcIjtcclxuaW1wb3J0IHtPcGVuQ2FydE1vZGFsfSBmcm9tIFwiQC9PcGVuTW9kYWxGdW5jdGlvbnNcIjtcclxuY29uc3QgQ2FydFBvcHVwU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAuY2FydFBvcHVwIHtcclxuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICMyM2ZmMDA7O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xyXG5cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxudHlwZSBDYXJ0UHJvcHMgPSB7XHJcbiAgZGV2aWNlVHlwZToge1xyXG4gICAgbW9iaWxlOiBib29sZWFuO1xyXG4gICAgdGFibGV0OiBib29sZWFuO1xyXG4gICAgZGVza3RvcDogYm9vbGVhbjtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgQ2FydFBvcFVwOiBSZWFjdC5GQzxDYXJ0UHJvcHM+ID0gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlVHlwZTogeyBtb2JpbGUsIHRhYmxldCwgZGVza3RvcCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xyXG4gIGNvbnN0IHtjdXJyZW5jeTp7c3ltYm9sfX0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5zaG9wUmVkdWNlcik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgT3BlbkNhcnRNb2RhbCgpXHJcbiAgfTtcclxuXHJcbiAgbGV0IGNhcnRTbGlkZXJDbGFzcyA9IGlzT3BlbiA/ICdjYXJ0UG9wdXBGaXhlZCcgOiAnJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7bW9iaWxlID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxDYXJ0UG9wdXBTdHlsZSAvPlxyXG4gICAgICAgICAgICAgIDxDYXJ0UG9wdXBCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWNhcnQnXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1Db3VudD17Y2FydFN0YXRlLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgaXRlbVBvc3RmaXg9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRTdGF0ZS5sZW5ndGggPiAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zXCJcclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwcmljZT17Y2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBwcmljZVByZWZpeD17c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2RhbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxDYXJ0U2xpZGVQb3B1cCBjbGFzc05hbWU9e2NhcnRTbGlkZXJDbGFzc30+XHJcbiAgICAgICAgICAgICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FydCBvbkNsb3NlQnRuQ2xpY2s9eygpPT57c2V0SXNPcGVuKGZhbHNlKX19IHNjcm9sbGJhckhlaWdodD0nMTAwdmgnIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ2FydFNsaWRlUG9wdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxCb3hlZENhcnRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWNhcnQnXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1Db3VudD17Y2FydFN0YXRlLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgaXRlbVBvc3RmaXg9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRTdGF0ZS5sZW5ndGggPiAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXRlbXMnICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwcmljZT17Y2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBwcmljZVByZWZpeD17c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3NldElzT3Blbih0cnVlKX19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRQb3BVcDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmNvbnN0IENhcnRQb3B1cEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMzg1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcnQtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDVweCk7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDMzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBvcHVwSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuNTAwJywgJyNmMWYxZjEnKX07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9wdXBJdGVtQ291bnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnJlZCcsICcjZWE0ZDRhJyl9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkQ2FydENsb3NlIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtQ2FyZHMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbUltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtRGV0YWlscyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1UaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbVdlaWdodCA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuYDtcclxuXHJcbmNvbnN0IFRvdGFsUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2VhNGQ0YTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9tb0NvZGUgPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICA+IGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMzVzIGVhc2U7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LmhvdmVyJywgJyMwMTkzNzYnKX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiA0OHB4O1xyXG4gIGJveC1zaGFkb3c6ICR7dGhlbWVHZXQoJ3NoYWRvd3MuYmFzZScsICcwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogbWFyZ2luLXRvcDogYXV0bzsgKi9cclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICB9XHJcblxyXG4gID4gYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENoZWNrb3V0QnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5hYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IFByaWNlQm94ID0gc3R5bGVkLnBgXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTm9Qcm9kdWN0TXNnID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNDBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Byb2R1Y3RJbWcgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb3Vwb25Cb3hXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDAgMjJweCAwIDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb3Vwb25Db2RlID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLm1lZGl1bScsICc1MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFcnJvck1zZyA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggLSAxcHgpO1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnNlY29uZGFyeS5ob3ZlcicsICcjRkYyODJGJyl9O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJ0U2xpZGVQb3B1cCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQyMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogLTQ1MHB4O1xyXG4gIHotaW5kZXg6IDEwMTA7XHJcbiAgYm94LXNoYWRvdzogJHt0aGVtZUdldCgnc2hhZG93cy5iaWcnLCAnMCAyMXB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU4MXB4KSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICYuY2FydFBvcHVwRml4ZWQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAke0NhcnRQb3B1cEJvZHl9IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJHtJdGVtV3JhcHBlcn0ge1xyXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQwcHgpOyAqL1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI0NXB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIH1cclxuXHJcbiAgJHtJdGVtQ2FyZHN9IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4yMDAnLCAnI2Y3ZjdmNycpfTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICR7UG9wdXBIZWFkZXJ9IHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgICR7Q2xvc2VCdXR0b259IHtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ2FydFNsaWRlUG9wdXAsXHJcbiAgQ2FydFBvcHVwQm9keSxcclxuICBQb3B1cEhlYWRlcixcclxuICBQb3B1cEl0ZW1Db3VudCxcclxuICBQcm9tb0NvZGUsXHJcbiAgQ2xvc2VCdXR0b24sXHJcbiAgSXRlbUNhcmRzLFxyXG4gIEl0ZW1JbWdXcmFwcGVyLFxyXG4gIEl0ZW1EZXRhaWxzLFxyXG4gIEl0ZW1UaXRsZSxcclxuICBJdGVtUHJpY2UsXHJcbiAgSXRlbVdlaWdodCxcclxuICBUb3RhbFByaWNlLFxyXG4gIERlbGV0ZUJ1dHRvbixcclxuICBDaGVja291dEJ1dHRvbixcclxuICBDaGVja291dEJ1dHRvbldyYXBwZXIsXHJcbiAgVGl0bGUsXHJcbiAgUHJpY2VCb3gsXHJcbiAgTm9Qcm9kdWN0TXNnLFxyXG4gIEl0ZW1XcmFwcGVyLFxyXG4gIENvdXBvbkJveFdyYXBwZXIsXHJcbiAgQ291cG9uQ29kZSxcclxuICBFcnJvck1zZyxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge1xyXG4gIENhcnRQb3B1cEJvZHksXHJcbiAgUG9wdXBIZWFkZXIsXHJcbiAgUG9wdXBJdGVtQ291bnQsXHJcbiAgQ2xvc2VCdXR0b24sXHJcbiAgUHJvbW9Db2RlLFxyXG4gIENoZWNrb3V0QnV0dG9uV3JhcHBlcixcclxuICBDaGVja291dEJ1dHRvbixcclxuICBUaXRsZSxcclxuICBQcmljZUJveCxcclxuICBOb1Byb2R1Y3RJbWcsXHJcbiAgSXRlbVdyYXBwZXIsXHJcbiAgQ291cG9uQm94V3JhcHBlcixcclxuICBDb3Vwb25Db2RlLCBOb1Byb2R1Y3RNc2csXHJcbn0gZnJvbSAnLi9jYXJ0LnN0eWxlJztcclxuaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSAnYXNzZXRzL2ljb25zL0Nsb3NlSWNvbic7XHJcbmltcG9ydCB7IFNob3BwaW5nQmFnTGFyZ2UgfSBmcm9tICdhc3NldHMvaWNvbnMvU2hvcHBpbmdCYWdMYXJnZSc7XHJcbmltcG9ydCB7IE5vQ2FydEJhZyB9IGZyb20gJ2Fzc2V0cy9pY29ucy9Ob0NhcnRCYWcnO1xyXG5pbXBvcnQge2NhbGN1bGF0ZVRvdGFsUHJpY2V9IGZyb20gXCIuLi8uLi91dGlscy9jYXJ0VXRpbHNcIjtcclxuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbSc7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2RlY3JlYXNlUXVhbnRpdHlDYXJ0LGluY3JlYXNlUXVhbnRpdHlDYXJ0LHJlbW92ZUZyb21DYXJ0LHJlbW92ZUFsbEZyb21DYXJ0fSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxudHlwZSBDYXJ0UHJvcHNUeXBlID0ge1xyXG4gIHN0eWxlPzogYW55O1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBzY3JvbGxiYXJIZWlnaHQ/OiBzdHJpbmc7XHJcbiAgaXNPcGVuPzpib29sZWFuO1xyXG4gIG9uQ2xvc2VCdG5DbGljaz86IChlOiBhbnkpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBDYXJ0OiBSZWFjdC5GQzxDYXJ0UHJvcHNUeXBlPiA9ICh7XHJcbiAgc3R5bGUsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIG9uQ2xvc2VCdG5DbGljayxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKClcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFBvcHVwQm9keSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgPFBvcHVwSGVhZGVyPlxyXG4gICAgICAgIDxQb3B1cEl0ZW1Db3VudD5cclxuICAgICAgICAgIDxTaG9wcGluZ0JhZ0xhcmdlIHdpZHRoPScxOXB4JyBoZWlnaHQ9JzI0cHgnIC8+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgezF9XHJcbiAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICBpdGVtc1xyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvUG9wdXBJdGVtQ291bnQ+XHJcblxyXG4gICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlQnRuQ2xpY2t9PlxyXG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgIDwvQ2xvc2VCdXR0b24+XHJcbiAgICAgIDwvUG9wdXBIZWFkZXI+XHJcblxyXG4gICAgICAgIDxJdGVtV3JhcHBlciBjbGFzc05hbWU9J2l0ZW1zLXdyYXBwZXInPlxyXG4gICAgICAgICAge2NhcnRTdGF0ZS5sZW5ndGg+MCA/IChcclxuICAgICAgICAgICAgY2FydFN0YXRlLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxDYXJ0SXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2FydEl0ZW0tJHtpdGVtLmlkfWB9XHJcbiAgICAgICAgICAgICAgICBvbkluY3JlbWVudD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChpbmNyZWFzZVF1YW50aXR5Q2FydChpdGVtLmNhcnRJZCkpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25EZWNyZW1lbnQ9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZGVjcmVhc2VRdWFudGl0eUNhcnQoaXRlbS5jYXJ0SWQpKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZUZyb21DYXJ0KGl0ZW0uY2FydElkKSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtpdGVtfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxOb1Byb2R1Y3RJbWc+XHJcbiAgICAgICAgICAgICAgICA8Tm9DYXJ0QmFnIC8+XHJcbiAgICAgICAgICAgICAgPC9Ob1Byb2R1Y3RJbWc+XHJcbiAgICAgICAgICAgICAgPE5vUHJvZHVjdE1zZz5cclxuICAgICAgICAgICAgICAgIE5vIHByb2R1Y3RzIGZvdW5kXHJcbiAgICAgICAgICAgICAgPC9Ob1Byb2R1Y3RNc2c+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0l0ZW1XcmFwcGVyPlxyXG5cclxuICAgICAgPENoZWNrb3V0QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8UHJvbW9Db2RlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2gocmVtb3ZlQWxsRnJvbUNhcnQoKSl9PlxyXG4gICAgICAgICAgICAgICAgICBSZW1vdmUgQWxsXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L1Byb21vQ29kZT5cclxuXHJcbiAgICAgICAge3RydWUgPyAoXHJcbiAgICAgICAgICA8TGluayBocmVmPScvY2hlY2tvdXQnPlxyXG4gICAgICAgICAgICA8Q2hlY2tvdXRCdXR0b24gb25DbGljaz17b25DbG9zZUJ0bkNsaWNrfT5cclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICBDaGVja291dFxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxQcmljZUJveD5cclxuICAgICAgICAgICAgICAgICAgey8qe0NVUlJFTkNZfSovfVxyXG4gICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgPC9QcmljZUJveD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgPC9DaGVja291dEJ1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPENoZWNrb3V0QnV0dG9uPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgICAgICAgIENoZWNrb3V0XHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8UHJpY2VCb3g+XHJcbiAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpfVxyXG4gICAgICAgICAgICAgIDwvUHJpY2VCb3g+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgPC9DaGVja291dEJ1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0NoZWNrb3V0QnV0dG9uV3JhcHBlcj5cclxuICAgIDwvQ2FydFBvcHVwQm9keT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuIiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmNvbnN0IHVzZUxvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZTxhbnk+KHt9KTtcclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OmFueSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcclxuICAgICAgICBzZXRJbnB1dHMoKGlucHV0czogYW55KSA9PiAoey4uLmlucHV0cywgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoYW5kbGVJbnB1dENoYW5nZSxcclxuICAgICAgICBpbnB1dHNcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IHt1c2VMb2dpbkZvcm19IiwiaW1wb3J0IHtHTE9CQUwsIEZPUk0sIEFVVEh9IGZyb20gXCIuLi9kZWZpbmVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNldEF1dGhUb2tlbiBmcm9tIFwiLi4vc2V0QXV0aFRva2VuXCI7XHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSBmcm9tIFwiQC91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IFRvYXN0IGZyb20gJ2xpZ2h0LXRvYXN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDdXJyZW5jeSA9IChjdXI6c3RyaW5nKSA9PiAoe1xyXG4gICAgdHlwZTogR0xPQkFMLlNFVF9DVVJSRU5DWSxcclxuICAgIGN1cixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsQ2F0ZWdvcnkgPSAoY2F0ZWdvcnk6c3RyaW5nKSA9PiAoe1xyXG4gICAgdHlwZTogR0xPQkFMLlNFVF9DQVRFR09SWSxcclxuICAgIGNhdGVnb3J5LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxTZWFyY2ggPSAoa2V5d29yZDpzdHJpbmcpID0+ICh7XHJcbiAgICB0eXBlOiBHTE9CQUwuU0VUX1NFQVJDSCxcclxuICAgIGtleXdvcmQsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9naW4gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFVVEguTE9HX0lOLFxyXG4gICAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQVVUSC5TSUdOX1VQLFxyXG4gICAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gKGRpc3BhdGNoOmFueSkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJbmZvJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjYXJ0SXRlbXMnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BlcnNpc3Q6cm9vdCcpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2hpcHBpbmdBZGRyZXNzJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwYXltZW50TWV0aG9kJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXHJcbiAgICBkaXNwYXRjaCh7dHlwZTogQVVUSC5MT0dfT1VUfSlcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnLydcclxufVxyXG5leHBvcnQgY29uc3QgbG9hZFVzZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6YW55KSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW49bG9jYWxTdG9yYWdlLnRva2VuLnJlcGxhY2VBbGwoJ1wiJywnJylcclxuICAgICAgICAvL3NlbmRpbmcgdG9rZW4gdG8gaGVhZGVyc1xyXG4gICAgICAgIHNldEF1dGhUb2tlbih0b2tlbilcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL2F1dGgvbWVgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFVVEguTE9BRF9VU0VSLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFVVEguTE9BRF9VU0VSX0ZBSUwsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGVyci5yZXNwb25zZS5kYXRhLmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU9yZGVyID0gKG9yZGVyOm9iamVjdCkgPT4gYXN5bmMgKGRpc3BhdGNoOmFueSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJX0JBU0VfVVJMfS9hcGkvb3JkZXJzYCwgb3JkZXIsIGNvbmZpZylcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkFVVEguT1JERVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FydEl0ZW1zJylcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVyc2lzdDpyb290JylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPVxyXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICA6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICBpZiAobWVzc2FnZXMgPT09ICdOb3QgYXV0aG9yaXplZCwgdG9rZW4gZmFpbGVkJykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dvdXQoKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IHNldEF1dGhUb2tlbj0odG9rZW46c3RyaW5nKT0+e1xyXG4gICAgaWYodG9rZW4pe1xyXG4gICAgICAgIC8vYWRkaW5nIHRva2VuIHRvIHRoZSBoZWFkZXJzXHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXT1gQmVhcmVyICR7dG9rZW59YDtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIC8vcmVtb3ZpbmcgdG9rZW4gZnJvbSB0aGUgaGVhZGVyc1xyXG4gICAgICAgIGRlbGV0ZSBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2V0QXV0aFRva2VuO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9