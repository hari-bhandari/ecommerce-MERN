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


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\OpenModalFunctions.tsx",
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


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\assets\\icons\\CloseIcon.tsx",
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


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\assets\\icons\\Facebook.tsx",
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


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\assets\\icons\\Google.tsx",
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


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\assets\\icons\\NoCartBag.tsx",
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


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\assets\\icons\\ShoppingBag.tsx",
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


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\assets\\icons\\ShoppingBagLarge.tsx",
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


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\components\\cart\\item\\cart-item.tsx",
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


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\components\\cart\\popup\\cart-popup-button.tsx",
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
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/theme-get */ "./node_modules/@styled-system/theme-get/dist/index.esm.js");


function _templateObject7() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: auto;\n  height: 35px;\n  min-width: 80px;\n  overflow: hidden;\n  border-radius: 15% 0% 0% 15%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin: 0 10px 10px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 15px 10px;\n\n  svg {\n    margin-right: 10px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: auto;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  padding: 0;\n  border-radius: 30% 0% 0% 30%;\n  border: #009E7F 1px solid;\n  border-right: none;\n  box-shadow: ", ";\n  outline: 0;\n  cursor: pointer;\n  position: fixed;\n  right: 0;\n  top: 50%;\n  margin-top: -46px;\n  z-index: 99;\n\n  @media (max-width: 580px) {\n    display: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 56px;\n  height: 56px;\n  overflow: hidden;\n  border-radius: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin-right: 2px;\n\n  @media (max-width: 767px) {\n    width: 90px;\n    height: 100%;\n    height: 41px;\n    margin-left: auto;\n    margin-right: 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: 12px;\n  font-weight: ", ";\n  color: ", ";\n  padding-left: 5px;\n  padding-right: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 60px;\n  width: auto;\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  padding: 0 0 0 30px;\n  border-radius: 60px;\n  box-shadow: ", ";\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n  z-index: 999;\n\n  @media (max-width: 767px) {\n    width: calc(100% - 60px);\n    height: 45px;\n    padding: 2px 2px 2px 30px;\n    bottom: 30px;\n    right: 30px;\n  }\n\n  @media (min-width: 581px) {\n    &:not(.fixedCartPopup) {\n      display: none;\n    }\n  }\n"]);

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
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/theme-get */ "./node_modules/@styled-system/theme-get/dist/index.esm.js");
/* harmony import */ var components_Others_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Others/button/button */ "./src/components/Others/button/button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return components_Others_button_button__WEBPACK_IMPORTED_MODULE_3__["Button"]; });



function _templateObject11() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: transparent;\n  border: 0;\n  outline: 0;\n  box-shadow: none;\n  padding: 0;\n  font-size: calc(", "px - 1px);\n  font-weight: ", ";\n  color: ", ";\n  text-decoration: underline;\n  cursor: pointer;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 15px 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  span {\n    font-family: ", ";\n    font-size: ", "px;\n    font-weight: ", ";\n    color: ", ";\n    line-height: 1;\n    background-color: ", ";\n    z-index: 1;\n    position: relative;\n    padding: 0 10px;\n  }\n\n  &::before {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ", ";\n    position: absolute;\n    top: 50%;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin: 0;\n  text-align: center;\n  width: 100%;\n\n  a {\n    font-weight: ", ";\n    color: ", ";\n    text-decoration: underline;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin: 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 20px;\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 30px;\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  display: block;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 10px;\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 30px;\n\n  img {\n    max-width: 160px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  \n  padding: 40px 60px 0;\n\n  @media (max-width: 768px) {\n    padding: 40px 30px 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  background-color: ", ";\n  max-width: 450px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  margin-right: 6px;\n"]);

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


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\features\\authentication-form\\forgot-password.tsx",
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


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\features\\authentication-form\\index.tsx",
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
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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




var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\features\\authentication-form\\login.tsx",
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
    var _ref2 = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var _yield$axios$post, data;

      return C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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




var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\features\\authentication-form\\register.tsx",
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
    var _ref2 = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var _yield$axios$post, data;

      return C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
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




var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\features\\cart\\cart-popup.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  .cartPopup {\n    top: auto !important;\n    left: auto !important;\n    bottom: 50px !important;\n    right: 50px !important;\n    box-shadow: 3px 3px 5px 6px #23ff00;;\n    transform-origin: bottom right;\n\n\n    @media (max-width: 580px) {\n      max-width: none !important;\n      width: 100% !important;\n      bottom: 0 !important;\n      left: 0 !important;\n      background: ", ";\n      overflow: initial !important;\n      transform-origin: bottom center;\n    }\n  }\n"]);

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
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/theme-get */ "./node_modules/@styled-system/theme-get/dist/index.esm.js");


function _templateObject24() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 420px;\n  height: 100vh;\n  background-color: ", ";\n  position: fixed;\n  bottom: 0;\n  right: -450px;\n  z-index: 1010;\n  box-shadow: ", ";\n  transition: all 0.35s ease-in-out;\n\n  @media (max-width: 580px) {\n    width: 100%;\n    display: none;\n  }\n\n  @media (min-width: 581px) {\n    display: block;\n  }\n\n  &.cartPopupFixed {\n    right: 0;\n  }\n\n  ", " {\n    height: 100%;\n    width: 100%;\n  }\n\n  ", " {\n    /* height: calc(100vh - 240px); */\n    max-height: calc(100vh - 245px);\n    background-color: ", ";\n  }\n\n  ", " {\n    border-bottom: 1px solid ", ";\n    margin-bottom: 0;\n  }\n\n  @media (max-width: 767px) {\n    ", " {\n      justify-content: space-between;\n    }\n\n    ", " {\n      top: auto;\n      position: relative;\n      background-color: transparent;\n    }\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: calc(", "px - 1px);\n  font-weight: ", ";\n  color: ", ";\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n\n  width: 100%;\n  display: flex;\n  justify-content: center;\n\n  span {\n    font-weight: ", ";\n    color: ", ";\n    margin-left: 5px;\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  flex-direction: column;\n  padding: 0 22px 0 15px;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 50px;\n\n  @media (max-width: 580px) {\n    margin-top: 20px;\n  }\n\n  svg {\n    width: 140px;\n    height: auto;\n\n    @media (max-width: 580px) {\n      width: 110px;\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  display: block;\n  width: 100%;\n  padding: 40px 0;\n  text-align: center;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: auto;\n  height: 44px;\n  padding: 0 30px;\n  overflow: hidden;\n  border-radius: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin-right: 2px;\n\n  @media (max-width: 767px) {\n    height: 41px;\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  padding-left: 5px;\n  padding-right: 10px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: auto;\n  flex-shrink: 0;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 48px;\n  width: calc(100% - 30px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ", ";\n  padding: 0;\n  border-radius: 48px;\n  box-shadow: ", ";\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  /* margin-top: auto; */\n  margin-bottom: 15px;\n  margin-left: 15px;\n\n  @media (max-width: 767px) {\n    height: 45px;\n  }\n\n  > a {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-left: 30px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 20px 0;\n  display: flex;\n  justify-content: center;\n\n  > button {\n    border: 0;\n    outline: 0;\n    box-shadow: none;\n    background-color: transparent;\n    display: inline-flex;\n    cursor: pointer;\n    font-family: ", ";\n    font-size: ", "px;\n    font-weight: ", ";\n    color: ", ";\n    transition: color 0.35s ease;\n    &:hover {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 10px;\n  height: 10px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  margin-left: 15px;\n  flex-shrink: 0;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.25);\n  transition: all 0.4s ease;\n  background-color: transparent;\n\n  &:hover {\n    color: #ea4d4a;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  flex-shrink: 0;\n  margin-left: auto;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin-bottom: 10px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin-bottom: 10px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-flex;\n  flex-direction: column;\n  width: 100%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 60px;\n  height: 60px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  margin-right: 15px;\n  flex-shrink: 0;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  padding: 15px 25px;\n  display: inline-flex;\n  align-items: center;\n  background-color: ", ";\n  margin-bottom: 1px;\n  box-sizing: border-box;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 14px;\n  height: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  flex-shrink: 0;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.25);\n  transition: all 0.4s ease;\n  background-color: transparent;\n\n  &:hover {\n    color: ", ";\n  }\n\n  @media (max-width: 767px) {\n    position: absolute;\n    top: -45px;\n    background-color: ", ";\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    color: rgba(0, 0, 0, 0.5);\n  }\n\n  &.fixedCartClose {\n    @media (min-width: 991px) {\n      display: none;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-flex;\n  align-items: center;\n  color: ", ";\n\n  span {\n    font-family: ", ";\n    font-size: ", "px;\n    font-weight: ", ";\n    color: ", ";\n    padding-left: 10px;\n\n    @media (max-width: 767px) {\n      font-size: ", "px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 15px 25px;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n\n  @media (max-width: 766px) {\n    justify-content: center;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: auto;\n  width: 385px;\n  display: flex;\n  flex-direction: column;\n  border-radius: ", ";\n  background-color: ", ";\n  box-sizing: content-box;\n\n  @media (max-width: 767px) {\n    width: 100%;\n  }\n\n  .cart-scrollbar {\n    height: 100%;\n    max-height: calc(100vh - 245px);\n\n    @media (max-width: 767px) {\n      max-height: 330px;\n    }\n  }\n"]);

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



var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client\\src\\features\\cart\\cart.tsx",
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
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var useLoginForm = function useLoginForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      inputs = _useState[0],
      setInputs = _useState[1];

  var handleInputChange = function handleInputChange(event) {
    event.persist();
    setInputs(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
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
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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
    var _ref = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var token, res;
      return C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
    var _ref2 = Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var config, _yield$axios$post, data, messages;

      return C_Users_2012b_WebstormProjects_ecommerce_MERN_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xpZ2h0LXRvYXN0L2Rpc3QvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9PcGVuTW9kYWxGdW5jdGlvbnMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ljb25zL0Nsb3NlSWNvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaWNvbnMvRmFjZWJvb2sudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ljb25zL0dvb2dsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaWNvbnMvTm9DYXJ0QmFnLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9pY29ucy9TaG9wcGluZ0JhZy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaWNvbnMvU2hvcHBpbmdCYWdMYXJnZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9heGlvc0hlYWRlcnMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9PdGhlcnMvZm9ybXMvaW5wdXQudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJ0L2l0ZW0vY2FydC1pdGVtLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhcnQvcG9wdXAvY2FydC1wb3B1cC1idXR0b24udHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJ0L3BvcHVwL2NhcnQtcG9wdXAuc3R5bGUudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9hdXRoZW50aWNhdGlvbi1mb3JtLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm0vZm9yZ290LXBhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm0vaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9sb2dpbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtL3JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2NhcnQvY2FydC1wb3B1cC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9jYXJ0L2NhcnQuc3R5bGUudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvY2FydC9jYXJ0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUxvZ2luRm9ybS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9ucy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NldEF1dGhUb2tlbi50cyJdLCJuYW1lcyI6WyJPcGVuQXV0aFRhYiIsIm9wZW5Nb2RhbCIsInNob3ciLCJvdmVybGF5Q2xhc3NOYW1lIiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsImNvbXBvbmVudCIsIkF1dGhlbnRpY2F0aW9uRm9ybSIsImNsb3NlQ29tcG9uZW50IiwiY29uZmlnIiwiZW5hYmxlUmVzaXppbmciLCJkaXNhYmxlRHJhZ2dpbmciLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsIk9wZW5DYXJ0TW9kYWwiLCJ0cmFuc2l0aW9uIiwidGVuc2lvbiIsImZyaWN0aW9uIiwiQ2FydCIsImNvbXBvbmVudFByb3BzIiwib25DbG9zZUJ0bkNsaWNrIiwiY2xvc2VNb2RhbCIsInNjcm9sbGJhckhlaWdodCIsIkNsb3NlSWNvbiIsIkZhY2Vib29rIiwiY29sb3IiLCJHb29nbGUiLCJOb0NhcnRCYWciLCJTaG9wcGluZ0JhZyIsIlNob3BwaW5nQmFnTGFyZ2UiLCJKU09OQ29uZmlnIiwiaGVhZGVycyIsIklucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJjc3MiLCJkaXNwbGF5IiwicCIsImFwcGVhcmFuY2UiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdXRsaW5lIiwibWFyZ2luIiwiY3Vyc29yIiwib3BhY2l0eSIsImNvbXBvc2UiLCJsYXlvdXQiLCJzcGFjZSIsIkl0ZW1Cb3giLCJkaXYiLCJmb250V2VpZ2h0IiwicHkiLCJweCIsImJvcmRlckJvdHRvbSIsImJvcmRlckJvdHRvbUNvbG9yIiwiYWxpZ25JdGVtcyIsIkluZm9ybWF0aW9uIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJJbWFnZSIsImltZyIsIm9iamVjdEZpdCIsIk5hbWUiLCJzcGFuIiwibWIiLCJQcmljZSIsIm10IiwiV2VpZ2h0IiwiVG90YWwiLCJtbCIsIlJlbW92ZUJ1dHRvbiIsImJ1dHRvbiIsInBhZGRpbmciLCJDYXJ0SXRlbSIsImRhdGEiLCJvbkRlY3JlbWVudCIsIm9uSW5jcmVtZW50Iiwib25SZW1vdmUiLCJuYW1lIiwidGh1bWJJbWFnZSIsInByaWNlIiwic2FsZVByaWNlIiwidW5pdCIsImNvdW50SW5TdG9jayIsImRpc3BsYXlQcmljZSIsImNhcnRRdWFudGl0eSIsIkNhcnRQb3B1cEJ1dHRvbiIsIml0ZW1Db3VudCIsIml0ZW1Qb3N0Zml4IiwicHJpY2VQcmVmaXgiLCJzdHlsZSIsIm9uQ2xpY2siLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIkJveGVkQ2FydEJ1dHRvbiIsIkNhcnRQb3B1cEJ1dHRvblN0eWxlZCIsInRoZW1lR2V0IiwiQnV0dG9uSW1nQm94IiwiSXRlbUNvdW50IiwiUHJpY2VCb3giLCJDYXJ0UG9wdXBCb3hCdXR0b24iLCJUb3RhbEl0ZW1zIiwiUHJpY2VCb3hBbHQiLCJJY29uV3JhcHBlciIsIldyYXBwZXIiLCJDb250YWluZXIiLCJMb2dvV3JhcHBlciIsIkhlYWRpbmciLCJoMyIsIlN1YkhlYWRpbmciLCJPZmZlclNlY3Rpb24iLCJPZmZlciIsIkhlbHBlclRleHQiLCJEaXZpZGVyIiwiTGlua0J1dHRvbiIsIkZvcmdvdFBhc3N3b3JkTW9kYWwiLCJzZXRDdXJyZW50Rm9ybSIsInRvZ2dsZVNpZ25JbkZvcm0iLCJwYWRkaW5nQm90dG9tIiwicm91dGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImdsb2JhbFJlZHVjZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VTdGF0ZSIsImN1cnJlbnRGb3JtIiwidXNlRWZmZWN0IiwicGF0aG5hbWUiLCJwdXNoIiwid2l0aFJvdXRlciIsIlNpZ25Jbk1vZGFsIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvZ2dsZVNpZ25VcEZvcm0iLCJ0b2dnbGVGb3Jnb3RQYXNzRm9ybSIsInVzZUxvZ2luRm9ybSIsImlucHV0cyIsImhhbmRsZUlucHV0Q2hhbmdlIiwibG9naW5DYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsIkFQSV9CQVNFX1VSTCIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJsb2FkVXNlciIsIlRvYXN0Iiwic3VjY2VzcyIsImZhaWwiLCJyZXNwb25zZSIsImVycm9yIiwibWFyZ2luQm90dG9tIiwiU2lnbnVwTW9kYWwiLCJvblN1Ym1pdCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicm9sZSIsInJlZ2lzdGVyIiwiQ2FydFBvcHVwU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNhcnRQb3BVcCIsImRldmljZVR5cGUiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2FydFN0YXRlIiwiY2FydFJlZHVjZXIiLCJzaG9wUmVkdWNlciIsInN5bWJvbCIsImN1cnJlbmN5IiwiaGFuZGxlTW9kYWwiLCJjYXJ0U2xpZGVyQ2xhc3MiLCJsZW5ndGgiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwiQ2FydFBvcHVwQm9keSIsIlBvcHVwSGVhZGVyIiwiUG9wdXBJdGVtQ291bnQiLCJDbG9zZUJ1dHRvbiIsIkl0ZW1XcmFwcGVyIiwiSXRlbUNhcmRzIiwiSXRlbUltZ1dyYXBwZXIiLCJJdGVtRGV0YWlscyIsIkl0ZW1UaXRsZSIsIkl0ZW1QcmljZSIsIkl0ZW1XZWlnaHQiLCJUb3RhbFByaWNlIiwiRGVsZXRlQnV0dG9uIiwiUHJvbW9Db2RlIiwiQ2hlY2tvdXRCdXR0b24iLCJDaGVja291dEJ1dHRvbldyYXBwZXIiLCJUaXRsZSIsImEiLCJOb1Byb2R1Y3RNc2ciLCJOb1Byb2R1Y3RJbWciLCJDb3Vwb25Cb3hXcmFwcGVyIiwiQ291cG9uQ29kZSIsIkVycm9yTXNnIiwiQ2FydFNsaWRlUG9wdXAiLCJtYXAiLCJpdGVtIiwiaW5jcmVhc2VRdWFudGl0eUNhcnQiLCJjYXJ0SWQiLCJkZWNyZWFzZVF1YW50aXR5Q2FydCIsInJlbW92ZUZyb21DYXJ0IiwiaWQiLCJyZW1vdmVBbGxGcm9tQ2FydCIsInNldElucHV0cyIsImV2ZW50IiwicGVyc2lzdCIsInRhcmdldCIsInZhbHVlIiwic2V0R2xvYmFsQ3VycmVuY3kiLCJjdXIiLCJ0eXBlIiwiR0xPQkFMIiwiU0VUX0NVUlJFTkNZIiwic2V0R2xvYmFsQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsIlNFVF9DQVRFR09SWSIsInNldEdsb2JhbFNlYXJjaCIsImtleXdvcmQiLCJTRVRfU0VBUkNIIiwiQVVUSCIsIkxPR19JTiIsInBheWxvYWQiLCJTSUdOX1VQIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsIkxPR19PVVQiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInJlcGxhY2VBbGwiLCJzZXRBdXRoVG9rZW4iLCJnZXQiLCJyZXMiLCJMT0FEX1VTRVIiLCJMT0FEX1VTRVJfRkFJTCIsImNyZWF0ZU9yZGVyIiwib3JkZXIiLCJPUkRFUl9TVUNDRVNTIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiZGVmYXVsdHMiLCJjb21tb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQzFCOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQkFBK0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDJCQUEyQixFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdELFFBQVE7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxlQUFlLE1BQU0sUUFBUSxTQUFTLE9BQU8scUJBQXFCLGFBQWEsMkJBQTJCLG1CQUFtQiwrQkFBK0IsdUJBQXVCLHVCQUF1QixhQUFhLGtCQUFrQixxQkFBcUIsY0FBYyxlQUFlLGlCQUFpQixzQkFBc0Isa0JBQWtCLHFCQUFxQixxQkFBcUIsWUFBWSxXQUFXLG1DQUFtQyxrQkFBa0IsVUFBVSw0QkFBNEIsb0JBQW9CLG1DQUFtQywyQkFBMkIsNkNBQTZDLHFDQUFxQywyREFBMkQsb0JBQW9CLFVBQVUsMkJBQTJCLG1CQUFtQixtQkFBbUIsVUFBVSw0QkFBNEIsb0JBQW9CLHNCQUFzQixnQkFBZ0IsZUFBZSxzQkFBc0Is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eyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxudmFyIEV2ZW50TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50TWFuYWdlcigpIHtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLl9wdWJsaXNoZWRFdmVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLl91bmlxdWVJZCA9IDA7IC8vIHVzZSBzZWxmIGluY3JlYXNpbmcgbnVtYmVyIHRvIGd1YXJhbnRlZSBnbG9iYWwgdW5pcXVlbmVzc1xyXG4gICAgfVxyXG4gICAgRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50c1tuYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudHNbbmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGV2ZW50ID0geyBrZXk6IHRoaXMuX3VuaXF1ZUlkKyssIGNhbGxiYWNrOiBjYWxsYmFjayB9O1xyXG4gICAgICAgIHRoaXMuX2V2ZW50c1tuYW1lXS5wdXNoKGV2ZW50KTtcclxuICAgICAgICByZXR1cm4gZXZlbnQua2V5O1xyXG4gICAgfTtcclxuICAgIEV2ZW50TWFuYWdlci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fcHVibGlzaGVkRXZlbnRzLnB1c2goeyBuYW1lOiBuYW1lLCBkYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudHNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBfYS5jYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51blN1YnNjcmliZSA9IGZ1bmN0aW9uIChuYW1lLCBrZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZXZlbnRzW25hbWVdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSB0aGlzLl9ldmVudHNbbmFtZV1baV0ua2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW25hbWVdLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBNYWtlIHN1cmUgcHVibGlzaGVkIGV2ZW50cyBjYW4gYmUgdHJpZ2dlcmVkIHdoZW4gc3Vic2NyaWJlZFxyXG4gICAgRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5lbnN1cmVUcmlnZ2VyZWRBbmRTdWJzY3JpYmUgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLl9wdWJsaXNoZWRFdmVudHNcclxuICAgICAgICAgICAgLnNsaWNlKClcclxuICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAuZmluZChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5uYW1lID09PSBuYW1lOyB9KTtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZShuYW1lLCBjYWxsYmFjayk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEV2ZW50TWFuYWdlcjtcclxufSgpKTtcclxudmFyIGV2ZW50TWFuYWdlciA9IG5ldyBFdmVudE1hbmFnZXIoKTtcblxuZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgY3NzXzI0OHogPSBcIi5zdHlsZV9tYXNrX185em1TTntwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1hbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtanVzdGlmeS1jb250ZW50OmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7ei1pbmRleDoxOTk5fS5zdHlsZV9ib3hfXzJpaWE0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO21heC13aWR0aDo4NSU7bWluLXdpZHRoOjk1cHg7cGFkZGluZzo5cHggMTVweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7dGV4dC1hbGlnbjpjZW50ZXI7d29yZC1icmVhazpicmVhay1hbGw7d2hpdGUtc3BhY2U6cHJlLXdyYXA7Zm9udC1zaXplOjA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNTgsNTgsNTgsLjkpO2JvcmRlci1yYWRpdXM6M3B4O29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOSk7dHJhbnNmb3JtOnNjYWxlKC45KTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO3RyYW5zaXRpb246b3BhY2l0eSAuM3MsLXdlYmtpdC10cmFuc2Zvcm0gLjNzO3RyYW5zaXRpb246b3BhY2l0eSAuM3MsdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzLHRyYW5zZm9ybSAuM3MsLXdlYmtpdC10cmFuc2Zvcm0gLjNzfS5zdHlsZV9lbnRlcl9fMjlMeVF7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0uc3R5bGVfZXhpdF9fM1dZbXB7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45KTt0cmFuc2Zvcm06c2NhbGUoLjkpfS5zdHlsZV9tZXNzYWdlX18xRFVYY3tsaW5lLWhlaWdodDoxLjU7Zm9udC1zaXplOjE0cHh9LnN0eWxlX3dyYXBwZXJfX2NRRnlYe21hcmdpbjowIGF1dG8gN3B4O3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9LnN0eWxlX2xvYWRpbmdfXzJwYjdKey13ZWJraXQtYW5pbWF0aW9uOnN0eWxlX2xvYWRpbmdfXzJwYjdKIDFzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246c3R5bGVfbG9hZGluZ19fMnBiN0ogMXMgbGluZWFyIGluZmluaXRlfUAtd2Via2l0LWtleWZyYW1lcyBzdHlsZV9sb2FkaW5nX18ycGI3Snt0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1Aa2V5ZnJhbWVzIHN0eWxlX2xvYWRpbmdfXzJwYjdKe3Rvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fVwiO1xudmFyIHN0eWxlcyA9IHtcIm1hc2tcIjpcInN0eWxlX21hc2tfXzl6bVNOXCIsXCJib3hcIjpcInN0eWxlX2JveF9fMmlpYTRcIixcImVudGVyXCI6XCJzdHlsZV9lbnRlcl9fMjlMeVFcIixcImV4aXRcIjpcInN0eWxlX2V4aXRfXzNXWW1wXCIsXCJtZXNzYWdlXCI6XCJzdHlsZV9tZXNzYWdlX18xRFVYY1wiLFwid3JhcHBlclwiOlwic3R5bGVfd3JhcHBlcl9fY1FGeVhcIixcImxvYWRpbmdcIjpcInN0eWxlX2xvYWRpbmdfXzJwYjdKXCJ9O1xuc3R5bGVJbmplY3QoY3NzXzI0OHopO1xuXG52YXIgSWNvbiA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHR5cGUgPSBfYS50eXBlO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHZpZXdCb3g6IFwiMCAwIDEwMjQgMTAyNFwiLCBmaWxsOiBcIiNmZmZcIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk02OTkgMzUzaC00Ni45Yy0xMC4yIDAtMTkuOSA0LjktMjUuOSAxMy4zTDQ2OSA1ODQuM2wtNzEuMi05OC44Yy02LTguMy0xNS42LTEzLjMtMjUuOS0xMy4zSDMyNWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMTI0LjYgMTcyLjhhMzEuOCAzMS44IDAgMCAwIDUxLjcgMGwyMTAuNi0yOTJjMy45LTUuMy4xLTEyLjctNi40LTEyLjd6XCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnpcIiB9KSkpO1xyXG4gICAgICAgIGNhc2UgJ2ZhaWwnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIiwgZmlsbDogXCIjZmZmXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNNjg1LjQgMzU0LjhjMC00LjQtMy42LTgtOC04bC02NiAuM0w1MTIgNDY1LjZsLTk5LjMtMTE4LjQtNjYuMS0uM2MtNC40IDAtOCAzLjUtOCA4IDAgMS45LjcgMy43IDEuOSA1LjJsMTMwLjEgMTU1TDM0MC41IDY3MGE4LjMyIDguMzIgMCAwIDAtMS45IDUuMmMwIDQuNCAzLjYgOCA4IDhsNjYuMS0uM0w1MTIgNTY0LjRsOTkuMyAxMTguNCA2NiAuM2M0LjQgMCA4LTMuNSA4LTggMC0xLjktLjctMy43LTEuOS01LjJMNTUzLjUgNTE1bDEzMC4xLTE1NWMxLjItMS40IDEuOC0zLjMgMS44LTUuMnpcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNNTEyIDY1QzI2NC42IDY1IDY0IDI2NS42IDY0IDUxM3MyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NSA1MTIgNjV6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyelwiIH0pKSk7XHJcbiAgICAgICAgY2FzZSAnbG9hZGluZyc6XHJcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHZpZXdCb3g6IFwiMCAwIDEwMjQgMTAyNFwiLCBmaWxsOiBcIiNmZmZcIiwgY2xhc3NOYW1lOiBzdHlsZXMubG9hZGluZyB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk05ODggNTQ4Yy0xOS45IDAtMzYtMTYuMS0zNi0zNiAwLTU5LjQtMTEuNi0xMTctMzQuNi0xNzEuM2E0NDAuNDUgNDQwLjQ1IDAgMCAwLTk0LjMtMTM5LjkgNDM3LjcxIDQzNy43MSAwIDAgMC0xMzkuOS05NC4zQzYyOSA4My42IDU3MS40IDcyIDUxMiA3MmMtMTkuOSAwLTM2LTE2LjEtMzYtMzZzMTYuMS0zNiAzNi0zNmM2OS4xIDAgMTM2LjIgMTMuNSAxOTkuMyA0MC4zQzc3Mi4zIDY2IDgyNyAxMDMgODc0IDE1MGM0NyA0NyA4My45IDEwMS44IDEwOS43IDE2Mi43IDI2LjcgNjMuMSA0MC4yIDEzMC4yIDQwLjIgMTk5LjMuMSAxOS45LTE2IDM2LTM1LjkgMzZ6XCIgfSkpKTtcclxuICAgIH1cclxufTtcblxudmFyIFRvYXN0ID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgaWQgPSBfYS5pZCwgdHlwZSA9IF9hLnR5cGUsIGNvbnRlbnQgPSBfYS5jb250ZW50LCBfYiA9IF9hLmR1cmF0aW9uLCBkdXJhdGlvbiA9IF9iID09PSB2b2lkIDAgPyAzMDAwIDogX2IsIG9uQ2xvc2UgPSBfYS5vbkNsb3NlO1xyXG4gICAgdmFyIF9jID0gdXNlU3RhdGUoc3R5bGVzLmJveCksIGNsYXNzZXMgPSBfY1swXSwgc2V0Q2xhc3NlcyA9IF9jWzFdO1xyXG4gICAgdmFyIF9kID0gdXNlU3RhdGUoZmFsc2UpLCBlbnRlcmVkID0gX2RbMF0sIHNldEVudGVyZWQgPSBfZFsxXTtcclxuICAgIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBmdW5jdGlvbiBleGl0KCkge1xyXG4gICAgICAgIHNldENsYXNzZXMoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3R5bGVzLmJveCArIFwiIFwiICsgc3R5bGVzLmV4aXQ7IH0pO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBmb3JjZSBhIHJlcGFpbnRcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICByZWYuY3VycmVudCAmJiByZWYuY3VycmVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgc2V0Q2xhc3NlcyhmdW5jdGlvbiAocHJldikgeyByZXR1cm4gcHJldiArIFwiIFwiICsgc3R5bGVzLmVudGVyOyB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IC0xO1xyXG4gICAgICAgIHZhciB0aW1lcklkID0gLTE7XHJcbiAgICAgICAgaWYgKGVudGVyZWQpIHtcclxuICAgICAgICAgICAgLy8gY29tcG9uZW50IG1vdW50aW5nIGlzIGFzeW5jLCB0aGVyZSBtaWdodCBiZSBhbiBleGl0IGNvbW1hbmQgYmVmb3JlIGEgdG9hc3QgbW91bnRzXHJcbiAgICAgICAgICAgIC8vIHNvIHdlIHNob3VsZCBtYWtlIHN1cmUgdG8gdHJpZ2dlciB0aGUgcHVibGlzaGVkIGV4aXQgZXZlbnRcclxuICAgICAgICAgICAga2V5ID0gZXZlbnRNYW5hZ2VyLmVuc3VyZVRyaWdnZXJlZEFuZFN1YnNjcmliZSgnbHQjZXhpdCcsIGZ1bmN0aW9uIChtZXNzYWdlSWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlSWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGR1cmF0aW9uICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lcklkID0gd2luZG93LnNldFRpbWVvdXQoZXhpdCwgZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV2ZW50TWFuYWdlci51blN1YnNjcmliZSgnbHQjZXhpdCcsIGtleSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXJJZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtpZCwgZHVyYXRpb24sIGVudGVyZWRdKTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLm1hc2sgfSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLCBzdHlsZTogdHlwZSA9PT0gJ2luZm8nID8gdW5kZWZpbmVkIDogeyBwYWRkaW5nOiAxNSwgYm9yZGVyUmFkaXVzOiA1IH0sIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZW50ZXIgcGhhc2VcclxuICAgICAgICAgICAgICAgIGlmICh+Y2xhc3Nlcy5pbmRleE9mKHN0eWxlcy5lbnRlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFbnRlcmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZXhpdCBwaGFzZVxyXG4gICAgICAgICAgICAgICAgaWYgKH5jbGFzc2VzLmluZGV4T2Yoc3R5bGVzLmV4aXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCByZWY6IHJlZiB9LFxyXG4gICAgICAgICAgICB0eXBlICE9PSAnaW5mbycgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy53cmFwcGVyLCBzdHlsZTogdHlwZSA9PT0gJ2xvYWRpbmcnID8geyBtYXJnaW5Cb3R0b206IDEwIH0gOiB1bmRlZmluZWQgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiB0eXBlIH0pKSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMubWVzc2FnZSB9LCBjb250ZW50KSkpKTtcclxufTtcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbnZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XG5cbi8qKlxyXG4gKiBNZXNzYWdlIHF1ZXVlLlxyXG4gKiBTYXZlIG1lc3NhZ2VzIGluIGEgcXVldWUsIG9ubHkgcmVtb3ZlIGl0IHdoZW4gY29tcG9uZW50IGxpZmVjeWNsZSBlbmRzLlxyXG4gKi9cclxudmFyIFF1ZXVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUXVldWUoKSB7XHJcbiAgICAgICAgdGhpcy5fbWVzc2FnZXMgPSBbXTtcclxuICAgICAgICB0aGlzLl91bmlxdWVJZCA9IDA7XHJcbiAgICB9XHJcbiAgICBRdWV1ZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fbWVzc2FnZXMucHVzaChfX2Fzc2lnbih7IGlkOiB0aGlzLl91bmlxdWVJZCsrIH0sIG1lc3NhZ2UpKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVldWUucHJvdG90eXBlLCBcImxlbmd0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlcy5sZW5ndGg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgUXVldWUucHJvdG90eXBlLmdldEZpcnN0TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZXNbMF07XHJcbiAgICB9O1xyXG4gICAgUXVldWUucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlcy5zaGlmdCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRdWV1ZTtcclxufSgpKTtcblxudmFyIHF1ZXVlID0gbmV3IFF1ZXVlKCk7XHJcbmV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2x0I3BvcG1lc3NhZ2UnLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBpZCA9IF9hLmlkLCB0eXBlID0gX2EudHlwZSwgY29udGVudCA9IF9hLmNvbnRlbnQsIGR1cmF0aW9uID0gX2EuZHVyYXRpb24sIG9uQ2xvc2UgPSBfYS5vbkNsb3NlO1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9hc3QsIHsgaWQ6IGlkLCB0eXBlOiB0eXBlLCBjb250ZW50OiBjb250ZW50LCBkdXJhdGlvbjogZHVyYXRpb24sIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShjb250YWluZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UgJiYgb25DbG9zZSgpO1xyXG4gICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRNYW5hZ2VyLnB1Ymxpc2goJ2x0I3BvcG1lc3NhZ2UnLCBxdWV1ZS5nZXRGaXJzdE1lc3NhZ2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IH0pLCBjb250YWluZXIpO1xyXG59KTtcclxuZnVuY3Rpb24gbm90aWNlKHR5cGUsIGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKSB7XHJcbiAgICBxdWV1ZS5wdXNoKHsgdHlwZTogdHlwZSwgY29udGVudDogY29udGVudCwgZHVyYXRpb246IGR1cmF0aW9uLCBvbkNsb3NlOiBvbkNsb3NlIH0pO1xyXG4gICAgLy8gdG9hc3QgcmlnaHQgbm93IGlmIHRoZXJlIGlzIG9ubHkgb25lIG1lc3NhZ2UgaW4gcXVldWVcclxuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBldmVudE1hbmFnZXIucHVibGlzaCgnbHQjcG9wbWVzc2FnZScsIHF1ZXVlLmdldEZpcnN0TWVzc2FnZSgpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBpZiBjdXJyZW50IG1lc3NhZ2UgaXMgbG9hZGluZywgdGhlbiB3ZSBzaG91bGQgdW5tb3VudCBpdCB0byBwcm9jZWVkXHJcbiAgICBpZiAocXVldWUubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gcXVldWUuZ2V0Rmlyc3RNZXNzYWdlKCk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2xvYWRpbmcnKSB7XHJcbiAgICAgICAgICAgIGV2ZW50TWFuYWdlci5wdWJsaXNoKCdsdCNleGl0JywgbWVzc2FnZS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbnZhciBpbmRleCA9IHtcclxuICAgIGluZm86IGZ1bmN0aW9uIChjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSkge1xyXG4gICAgICAgIG5vdGljZSgnaW5mbycsIGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKTtcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UpIHtcclxuICAgICAgICBub3RpY2UoJ3N1Y2Nlc3MnLCBjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSk7XHJcbiAgICB9LFxyXG4gICAgZmFpbDogZnVuY3Rpb24gKGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKSB7XHJcbiAgICAgICAgbm90aWNlKCdmYWlsJywgY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UpO1xyXG4gICAgfSxcclxuICAgIGxvYWRpbmc6IGZ1bmN0aW9uIChjb250ZW50LCBvbkNsb3NlKSB7XHJcbiAgICAgICAgbm90aWNlKCdsb2FkaW5nJywgY29udGVudCwgMCwgb25DbG9zZSk7XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGhpZGUgdGhlIGZpcnN0IHRvYXN0IGluIHRoZSBxdWV1ZSB3aGVuIGV4ZWN1dGluZyB0aGUgY29tbWFuZFxyXG4gICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGV2ZW50TWFuYWdlci5wdWJsaXNoKCdsdCNleGl0JywgcXVldWUuZ2V0Rmlyc3RNZXNzYWdlKCkuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iLCJpbXBvcnQgQXV0aGVudGljYXRpb25Gb3JtIGZyb20gXCJAL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm1cIjtcclxuaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSAnQHJlZHEvcmV1c2UtbW9kYWwnO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiQC9mZWF0dXJlcy9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9wZW5BdXRoVGFiPSgpPT5cclxuICAgIG9wZW5Nb2RhbCh7XHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgb3ZlcmxheUNsYXNzTmFtZTogJ3F1aWNrLXZpZXctb3ZlcmxheScsXHJcbiAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlOiB0cnVlLFxyXG4gICAgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkZvcm0sXHJcbiAgICBjbG9zZUNvbXBvbmVudDogJycsXHJcbiAgICBjb25maWc6IHtcclxuICAgICAgICBlbmFibGVSZXNpemluZzogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZURyYWdnaW5nOiB0cnVlLFxyXG4gICAgICAgIGNsYXNzTmFtZTogJ3F1aWNrLXZpZXctbW9kYWwnLFxyXG4gICAgICAgIHdpZHRoOiA0NTgsXHJcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICB9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IE9wZW5DYXJ0TW9kYWw9KCk9Pm9wZW5Nb2RhbCh7XHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgY29uZmlnOiB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiAnY2FydFBvcHVwJyxcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICAgIGVuYWJsZVJlc2l6aW5nOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlRHJhZ2dpbmc6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICB0ZW5zaW9uOiAzNjAsXHJcbiAgICAgICAgICAgIGZyaWN0aW9uOiA0MCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNsb3NlT25DbGlja091dHNpZGU6IHRydWUsXHJcbiAgICBjb21wb25lbnQ6IENhcnQsXHJcbiAgICBjbG9zZUNvbXBvbmVudDogKCkgPT4gPGRpdiAvPixcclxuICAgIGNvbXBvbmVudFByb3BzOiB7IG9uQ2xvc2VCdG5DbGljazogY2xvc2VNb2RhbCwgc2Nyb2xsYmFySGVpZ2h0OiAzMzAgfSxcclxufSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IENsb3NlSWNvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCIxMC4wMDNcIlxyXG4gICAgICBoZWlnaHQ9XCIxMFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTAuMDAzIDEwXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkYXRhLW5hbWU9XCJfaW9uaWNvbnNfc3ZnX2lvcy1jbG9zZSAoNSlcIlxyXG4gICAgICAgIGQ9XCJNMTY2LjY4NiwxNjUuNTVsMy41NzMtMy41NzNhLjgzNy44MzcsMCwwLDAtMS4xODQtMS4xODRsLTMuNTczLDMuNTczLTMuNTczLTMuNTczYS44MzcuODM3LDAsMSwwLTEuMTg0LDEuMTg0bDMuNTczLDMuNTczLTMuNTczLDMuNTczYS44MzcuODM3LDAsMCwwLDEuMTg0LDEuMTg0bDMuNTczLTMuNTczLDMuNTczLDMuNTczYS44MzcuODM3LDAsMCwwLDEuMTg0LTEuMTg0WlwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNjAuNSAtMTYwLjU1KVwiXHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgRmFjZWJvb2sgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgd2lkdGggPSAnMTdweCcsXHJcbiAgaGVpZ2h0ID0gJzE3cHgnLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PScwIDAgMTcgMTcnXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZGF0YS1uYW1lPSdfaW9uaWNvbnNfc3ZnX2xvZ28tZmFjZWJvb2sgKDEpJ1xyXG4gICAgICAgIGQ9J004MC4wNjEsNjRINjQuOTM5YS45MzkuOTM5LDAsMCwwLS45MzkuOTM5VjgwLjA2MWEuOTM5LjkzOSwwLDAsMCwuOTM5LjkzOUg3Mi41Vjc0LjI3MUg3MC40NjhWNzEuNzkySDcyLjVWNjkuOTU5YTMuMjMsMy4yMywwLDAsMSwzLjQ4NC0zLjM5MWMuOTM5LDAsMS45NDguMDcxLDIuMTgzLjF2Mi4yOTNINzYuNmMtMS4wNjcsMC0xLjI3MS41LTEuMjcxLDEuMjQ4djEuNThoMi41NDFsLS4zMzIsMi40NzlINzUuMzMzVjgxaDQuNzI4QS45MzkuOTM5LDAsMCwwLDgxLDgwLjA2MVY2NC45MzlBLjkzOS45MzksMCwwLDAsODAuMDYxLDY0WidcclxuICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNjQgLTY0KSdcclxuICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBHb29nbGUgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgd2lkdGggPSAnMTdweCcsXHJcbiAgaGVpZ2h0ID0gJzE3cHgnLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PScwIDAgMTYuNjc3IDE3J1xyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9J002OC41NzksNTUuMjlsLS4wODYtLjM2NEg2MC41ODR2My4zNDhoNC43MjVhNC43Myw0LjczLDAsMCwxLTQuNjI3LDMuNTU2LDUuNTMzLDUuNTMzLDAsMCwxLTMuNzI0LTEuNDg0LDUuMzE2LDUuMzE2LDAsMCwxLTEuNTg2LTMuNzUyLDUuNDgzLDUuNDgzLDAsMCwxLDEuNTU3LTMuNzQ4LDUuMyw1LjMsMCwwLDEsMy43LTEuNDQ3LDQuODI1LDQuODI1LDAsMCwxLDMuMTQ3LDEuMjI2bDIuMzc5LTIuMzY3YTguNDE3LDguNDE3LDAsMCwwLTUuNi0yLjE1OEE4LjM5MSw4LjM5MSwwLDAsMCw1Miw1Ni42LDguNTQxLDguNTQxLDAsMCwwLDU0LjMyNiw2Mi41YTguODczLDguODczLDAsMCwwLDYuNCwyLjYsNy44OTEsNy44OTEsMCwwLDAsNS43NDctMi40MTYsOC40ODYsOC40ODYsMCwwLDAsMi4yMDctNS44NzgsOS43ODgsOS43ODgsMCwwLDAtLjEtMS41MTZaJ1xyXG4gICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MiAtNDguMSknXHJcbiAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgTm9DYXJ0QmFnID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjIzMS45MVwiXHJcbiAgICAgIGhlaWdodD1cIjI5MlwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjMxLjkxIDI5MlwiXHJcbiAgICA+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIlxyXG4gICAgICAgICAgeDE9XCIxXCJcclxuICAgICAgICAgIHkxPVwiMC40MzlcIlxyXG4gICAgICAgICAgeDI9XCIwLjM2OVwiXHJcbiAgICAgICAgICB5Mj1cIjFcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiIzAyOTQ3N1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzAwOWU3ZlwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgICA8Z1xyXG4gICAgICAgIGlkPVwibm9fY2FydF9pbl9iYWdfMlwiXHJcbiAgICAgICAgZGF0YS1uYW1lPVwibm8gY2FydCBpbiBiYWcgMlwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMzg4IC0zNTEpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgICBpZD1cIkVsbGlwc2VfMjg3M1wiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJFbGxpcHNlIDI4NzNcIlxyXG4gICAgICAgICAgY3g9XCIxMTUuOTU1XCJcclxuICAgICAgICAgIGN5PVwiMjcuMzY2XCJcclxuICAgICAgICAgIHJ4PVwiMTE1Ljk1NVwiXHJcbiAgICAgICAgICByeT1cIjI3LjM2NlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTM4OCA1ODguMjY4KVwiXHJcbiAgICAgICAgICBmaWxsPVwiI2RkZFwiXHJcbiAgICAgICAgICBvcGFjaXR5PVwiMC4yNVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4NjkxXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2OTFcIlxyXG4gICAgICAgICAgZD1cIk0yOS42MzIsMEgxNzAuMzY4QTI5LjgyOCwyOS44MjgsMCwwLDEsMjAwLDMwLjAyMVYyMDkuOTc5QTI5LjgyOCwyOS44MjgsMCwwLDEsMTcwLjM2OCwyNDBIMjkuNjMyQTI5LjgyOCwyOS44MjgsMCwwLDEsMCwyMDkuOTc5VjMwLjAyMUEyOS44MjgsMjkuODI4LDAsMCwxLDI5LjYzMiwwWlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQwMyAzODEpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA5ZTdmXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlJlY3RhbmdsZV8xODUyXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxODUyXCJcclxuICAgICAgICAgIGQ9XCJNMzAsMEgxNzBhMzAsMzAsMCwwLDEsMzAsMzB2MGEzMCwzMCwwLDAsMS0zMCwzMEgxMi44NTdBMTIuODU3LDEyLjg1NywwLDAsMSwwLDQ3LjE0M1YzMEEzMCwzMCwwLDAsMSwzMCwwWlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQwMyAzODEpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlJlY3RhbmdsZV8xODUzXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxODUzXCJcclxuICAgICAgICAgIGQ9XCJNNDIsMEgxNThhNDIsNDIsMCwwLDEsNDIsNDJ2MGExOCwxOCwwLDAsMS0xOCwxOEgxOEExOCwxOCwwLDAsMSwwLDQydjBBNDIsNDIsMCwwLDEsNDIsMFpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0MDMgMzgxKVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4Njg1XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2ODVcIlxyXG4gICAgICAgICAgZD1cIk00NDYuMzEsMjQ2LjA1NmEzMCwzMCwwLDEsMSwzMC0zMEEzMC4wMzQsMzAuMDM0LDAsMCwxLDQ0Ni4zMSwyNDYuMDU2Wm0wLTUzLjI5NEEyMy4zLDIzLjMsMCwxLDAsNDY5LjksMjE2LjA1NiwyMy40NzEsMjMuNDcxLDAsMCwwLDQ0Ni4zMSwxOTIuNzYyWlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA1Ni42OSAxNjQuOTQ0KVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4Njg2XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2ODZcIlxyXG4gICAgICAgICAgZD1cIk00NDYuMzEsMzc1LjE4MWEzMCwzMCwwLDEsMSwzMC0zMEEzMC4wMzQsMzAuMDM0LDAsMCwxLDQ0Ni4zMSwzNzUuMTgxWm0wLTUzLjI5NEEyMy4zLDIzLjMsMCwxLDAsNDY5LjksMzQ1LjE4MSwyMy40NzEsMjMuNDcxLDAsMCwwLDQ0Ni4zMSwzMjEuODg3WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA1Ny43OTMgOTUuNjg0KVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwOWU3ZlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICBpZD1cIkVsbGlwc2VfMjg3NFwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJFbGxpcHNlIDI4NzRcIlxyXG4gICAgICAgICAgY3g9XCIyOC42ODlcIlxyXG4gICAgICAgICAgY3k9XCIyOC42ODlcIlxyXG4gICAgICAgICAgcj1cIjI4LjY4OVwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ3My44MjMgNTExLjA0NilcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgaWQ9XCJFbGxpcHNlXzI4NzVcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSAyODc1XCJcclxuICAgICAgICAgIGN4PVwiMTUuMDQ2XCJcclxuICAgICAgICAgIGN5PVwiMTUuMDQ2XCJcclxuICAgICAgICAgIHI9XCIxNS4wNDZcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0ODEuNDAxIDU0Ny44NTQpIHJvdGF0ZSgtNDUpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA5ZTdmXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2ODdcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY4N1wiXHJcbiAgICAgICAgICBkPVwiTTM5OS43MSw1MzEuMjdhNzEuNzU1LDcxLjc1NSwwLDAsMSwxMi42NS0xMy42YzMuNC0yLjg2My0xLjUtNy43MjYtNC44ODItNC44ODJhNzguMzkyLDc4LjM5MiwwLDAsMC0xMy43MywxNWMtMi41NiwzLjY0NCwzLjQyNCw3LjEsNS45NjIsMy40ODVaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDYwLjU3OSAtMzUuNzAzKVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4Njg4XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2ODhcIlxyXG4gICAgICAgICAgZD1cIk00MTIuOTEzLDUyNy43ODZhNzguNDE5LDc4LjQxOSwwLDAsMC0xMy43My0xNWMtMy4zOC0yLjg0My04LjI4OSwyLjAxNy00Ljg4Miw0Ljg4MmE3MS43ODUsNzEuNzg1LDAsMCwxLDEyLjY1LDEzLjZjMi41MzUsMy42MDksOC41MjUuMTYyLDUuOTYyLTMuNDg1WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA2MC41NjYgLTM1LjcwNClcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY4OVwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4Njg5XCJcclxuICAgICAgICAgIGQ9XCJNNTgzLjI3OCw1MjcuNzg2YTc4LjQxNyw3OC40MTcsMCwwLDAtMTMuNzMtMTVjLTMuMzgtMi44NDMtOC4yODksMi4wMTctNC44ODIsNC44ODJhNzEuNzY4LDcxLjc2OCwwLDAsMSwxMi42NSwxMy42YzIuNTM1LDMuNjA5LDguNTI1LjE2Miw1Ljk2Mi0zLjQ4NVpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk3MC4zMDQgLTM1LjcwNClcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY5MFwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4NjkwXCJcclxuICAgICAgICAgIGQ9XCJNNTcwLjA3NSw1MzEuMjdhNzEuNzcsNzEuNzcsMCwwLDEsMTIuNjUtMTMuNmMzLjQtMi44NjMtMS41LTcuNzI2LTQuODgyLTQuODgyYTc4LjQwNyw3OC40MDcsMCwwLDAtMTMuNzMsMTVjLTIuNTYsMy42NDQsMy40MjQsNy4xLDUuOTYyLDMuNDg1WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTcwLjMxOCAtMzUuNzAzKVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4NjkyXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2OTJcIlxyXG4gICAgICAgICAgZD1cIk0zMDEuMjQzLDI4Ny40NjRhMTkuMTE1LDE5LjExNSwwLDAsMSw4LjA3MSw5LjA3NywxOS42MzcsMTkuNjM3LDAsMCwxLDEuNiw3Ljg4djI2LjA4NWExOS4zNDksMTkuMzQ5LDAsMCwxLTkuNjcyLDE2Ljk1N2MtMTAuMDQ4LTYuODU4LTE2LjU0NC0xNy43NDItMTYuNTQ0LTMwUzI5MS4yLDI5NC4zMjIsMzAxLjI0MywyODcuNDY0WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI5Mi4zMDEgMTAxLjUzNilcIlxyXG4gICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4NjkzXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2OTNcIlxyXG4gICAgICAgICAgZD1cIk0yOTQuMzcxLDI4Ny40NjRhMTkuMTE1LDE5LjExNSwwLDAsMC04LjA3MSw5LjA3NywxOS42MzcsMTkuNjM3LDAsMCwwLTEuNiw3Ljg4djI2LjA4NWExOS4zNDksMTkuMzQ5LDAsMCwwLDkuNjcyLDE2Ljk1N2MxMC4wNDgtNi44NTgsMTYuNTQ0LTE3Ljc0MiwxNi41NDQtMzBTMzA0LjQxOSwyOTQuMzIyLDI5NC4zNzEsMjg3LjQ2NFpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExMTguMzAxIDEwMS41MzYpXCJcclxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBTaG9wcGluZ0JhZyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgd2lkdGg9JzEyLjY4NidcclxuICAgICAgICBoZWlnaHQ9JzE2J1xyXG4gICAgICAgIHZpZXdCb3g9JzAgMCAxMi42ODYgMTYnXHJcbiAgICAgID5cclxuICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDI3MDQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNy4wMjMgLTIpJz5cclxuICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI3LjAyMyA1LjE1NiknPlxyXG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE2Jz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPSdQYXRoIDMnXHJcbiAgICAgICAgICAgICAgICBkPSdNNjUuNywxMTEuMDQzbC0uNzE0LTlBMS4xMjUsMS4xMjUsMCwwLDAsNjMuODcxLDEwMUg2Mi40NTlWMTAzLjFhLjQ2OS40NjksMCwxLDEtLjkzNywwVjEwMUg1Ny4yMTFWMTAzLjFhLjQ2OS40NjksMCwxLDEtLjkzNywwVjEwMUg1NC44NjJhMS4xMjUsMS4xMjUsMCwwLDAtMS4xMTcsMS4wMzNsLS43MTUsOS4wMDZhMi42MDUsMi42MDUsMCwwLDAsMi42LDIuOEg2My4xYTIuNjA1LDIuNjA1LDAsMCwwLDIuNi0yLjgwNlptLTQuMjI0LTQuNTg1LTIuNDI0LDIuNDI0YS40NjguNDY4LDAsMCwxLS42NjMsMGwtMS4xMzYtMS4xMzZhLjQ2OS40NjksMCwwLDEsLjY2My0uNjYzbC44LjgsMi4wOTItMi4wOTJhLjQ2OS40NjksMCwxLDEsLjY2My42NjNaJ1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUzLjAyMyAtMTAxLjAwNSknXHJcbiAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxOScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzAuMjc0IDIpJz5cclxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxOCc+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nUGF0aCA0J1xyXG4gICAgICAgICAgICAgICAgZD0nTTE2MC4xMzIsMGEzLjEsMy4xLDAsMCwwLTMuMDkzLDMuMDkzdi4wNjNoLjkzN1YzLjA5M2EyLjE1NSwyLjE1NSwwLDEsMSw0LjMxMSwwdi4wNjNoLjkzN1YzLjA5M0EzLjEsMy4xLDAsMCwwLDE2MC4xMzIsMFonXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTU3LjAzOSknXHJcbiAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IFNob3BwaW5nQmFnTGFyZ2UgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgd2lkdGggPSAnMThweCcsXHJcbiAgaGVpZ2h0ID0gJzE4cHgnLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PScwIDAgMjMuNzg2IDMwJ1xyXG4gICAgPlxyXG4gICAgICA8ZyBkYXRhLW5hbWU9J3Nob3BwaW5nLWJhZyAoMyknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01My4wMjMpJz5cclxuICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDI3MDQnPlxyXG4gICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxNycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTMuMDIzIDUuOTE4KSc+XHJcbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTYnPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9J1BhdGggMydcclxuICAgICAgICAgICAgICAgIGQ9J003Ni44LDExOS44MjZsLTEuMzQtMTYuODgxQTIuMTA5LDIuMTA5LDAsMCwwLDczLjM2MiwxMDFINzAuNzE2djMuOTIxYS44NzkuODc5LDAsMSwxLTEuNzU3LDBWMTAxSDYwLjg3NXYzLjkyMWEuODc5Ljg3OSwwLDEsMS0xLjc1NywwVjEwMUg1Ni40NzJhMi4xMDksMi4xMDksMCwwLDAtMi4wOTQsMS45MzdsLTEuMzQsMTYuODg2YTQuODg1LDQuODg1LDAsMCwwLDQuODcsNS4yNTlINzEuOTI2YTQuODg0LDQuODg0LDAsMCwwLDQuODctNS4yNjFabS03LjkyLTguNi00LjU0NCw0LjU0NGEuODc4Ljg3OCwwLDAsMS0xLjI0MywwbC0yLjEzLTIuMTNBLjg3OC44NzgsMCwwLDEsNjIuMiwxMTIuNGwxLjUwOSwxLjUwOCwzLjkyMy0zLjkyM2EuODc5Ljg3OSwwLDEsMSwxLjI0MiwxLjI0M1onXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTMuMDIzIC0xMDEuMDA1KSdcclxuICAgICAgICAgICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU5LjExOCknPlxyXG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE4Jz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPSdQYXRoIDQnXHJcbiAgICAgICAgICAgICAgICBkPSdNMTYyLjgzOCwwYTUuODA2LDUuODA2LDAsMCwwLTUuOCw1Ljh2LjExOUgxNTguOFY1LjhhNC4wNDIsNC4wNDIsMCwxLDEsOC4wODMsMHYuMTE5aDEuNzU3VjUuOEE1LjgwNiw1LjgwNiwwLDAsMCwxNjIuODM4LDBaJ1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE1Ny4wMzkpJ1xyXG4gICAgICAgICAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IEpTT05Db25maWc9IHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XHJcbmltcG9ydCB7IGNvbXBvc2UsIGxheW91dCwgc3BhY2UsIGNvbG9yLCBib3JkZXIgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0PGFueT4oXHJcbiAgY3NzKHtcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcDogJzAgMThweCcsXHJcbiAgICBhcHBlYXJhbmNlOiAnbm9uZScsXHJcbiAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICBmb250U2l6ZTogJ2Jhc2UnLFxyXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgIGJvcmRlckNvbG9yOiAnZ3JheS41MDAnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnYmFzZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBjb2xvcjogJ3RleHQuYm9sZCcsXHJcbiAgICBoZWlnaHQ6ICc0OHB4JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMgZWFzZScsXHJcbiAgICAvLyBtYjogMyxcclxuICAgICcmOmZvY3VzJzoge1xyXG4gICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIHtcclxuICAgICcmOmhvdmVyLCY6Zm9jdXMnOiB7XHJcbiAgICAgIG91dGxpbmU6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgICcmOjpwbGFjZWhvbGRlcic6IHtcclxuICAgICAgY29sb3I6ICcnLFxyXG4gICAgfSxcclxuICAgICcmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24nOiB7XHJcbiAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgIH0sXHJcbiAgICAnJi5kaXNhYmxlZCc6IHtcclxuICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxyXG4gICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcG9zZShsYXlvdXQsIHNwYWNlLCBjb2xvciwgYm9yZGVyKVxyXG4pO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xyXG5leHBvcnQgY29uc3QgSXRlbUJveCA9IHN0eWxlZC5kaXYoXHJcbiAgY3NzKHtcclxuICAgIGZvbnRTaXplOiAnYmFzZScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBweTogMTUsXHJcbiAgICBweDogMjUsXHJcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWRgLFxyXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6ICdncmF5LjIwMCcsXHJcbiAgfSksXHJcbiAge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2KHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgbWFyZ2luTGVmdDogJzE1cHgnLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IEltYWdlID0gc3R5bGVkLmltZyh7XHJcbiAgd2lkdGg6IDYwLFxyXG4gIGhlaWdodDogNjAsXHJcbiAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gIG1hcmdpbjogJzAgMTVweCcsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBmb250V2VpZ2h0OiAnbWQnLFxyXG4gICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgbWI6ICcwcHgnLFxyXG4gICAgbGluZUhlaWdodDogMS41LFxyXG4gIH0pXHJcbik7XHJcbmV4cG9ydCBjb25zdCBQcmljZSA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICBtdDogJzEwcHgnLFxyXG4gICAgbWI6ICcxMHB4JyxcclxuICB9KVxyXG4pO1xyXG5leHBvcnQgY29uc3QgV2VpZ2h0ID0gc3R5bGVkLnNwYW4oXHJcbiAgY3NzKHtcclxuICAgIGZvbnRTaXplOiAnc20nLFxyXG4gICAgZm9udFdlaWdodDogJ3JlZ3VsYXInLFxyXG4gICAgY29sb3I6ICd0ZXh0LnJlZ3VsYXInLFxyXG4gICAgbWI6ICc1cHgnLFxyXG4gIH0pXHJcbik7XHJcbmV4cG9ydCBjb25zdCBUb3RhbCA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBjb2xvcjogJ3RleHQuYm9sZCcsXHJcbiAgICBtbDogJ2F1dG8nLFxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgUmVtb3ZlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbih7XHJcbiAgcGFkZGluZzogJzVweCcsXHJcbiAgYm9yZGVyOiAwLFxyXG4gIG91dGxpbmU6IDAsXHJcbiAgbWFyZ2luTGVmdDogJzE1cHgnLFxyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjI1KScsXHJcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuXHJcbiAgJyY6aG92ZXInOiB7XHJcbiAgICBjb2xvcjogJ3JlZCcsXHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvdW50ZXIgfSBmcm9tICcuLi9jb3VudGVyL2NvdW50ZXInO1xyXG5pbXBvcnQgeyBDbG9zZUljb24gfSBmcm9tICdAL2Fzc2V0cy9pY29ucy9DbG9zZUljb24nO1xyXG5pbXBvcnQge1xyXG4gIEl0ZW1Cb3gsXHJcbiAgSW1hZ2UsXHJcbiAgSW5mb3JtYXRpb24sXHJcbiAgTmFtZSxcclxuICBQcmljZSxcclxuICBXZWlnaHQsXHJcbiAgVG90YWwsXHJcbiAgUmVtb3ZlQnV0dG9uLFxyXG59IGZyb20gJy4vY2FydC1pdGVtLnN0eWxlJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgZGF0YTogYW55O1xyXG4gIG9uRGVjcmVtZW50OiAoKSA9PiB2b2lkO1xyXG4gIG9uSW5jcmVtZW50OiAoKSA9PiB2b2lkO1xyXG4gIG9uUmVtb3ZlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydEl0ZW06IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgZGF0YSxcclxuICBvbkRlY3JlbWVudCxcclxuICBvbkluY3JlbWVudCxcclxuICBvblJlbW92ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgdGh1bWJJbWFnZSwgcHJpY2UsIHNhbGVQcmljZSwgdW5pdCwgY291bnRJblN0b2NrIH0gPSBkYXRhO1xyXG4gIGNvbnN0IGRpc3BsYXlQcmljZSA9IHNhbGVQcmljZSA/IHNhbGVQcmljZSA6IHByaWNlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8SXRlbUJveD5cclxuICAgICAgPENvdW50ZXJcclxuICAgICAgICB2YWx1ZT17ZGF0YS5jYXJ0UXVhbnRpdHl9XHJcbiAgICAgICAgb25EZWNyZW1lbnQ9e29uRGVjcmVtZW50fVxyXG4gICAgICAgIG9uSW5jcmVtZW50PXtvbkluY3JlbWVudH1cclxuICAgICAgICB2YXJpYW50PVwibGlnaHRWZXJ0aWNhbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbWFnZSBzcmM9e3RodW1iSW1hZ2V9IC8+XHJcbiAgICAgIDxJbmZvcm1hdGlvbj5cclxuICAgICAgICA8TmFtZT57bmFtZX08L05hbWU+XHJcbiAgICAgICAgPFByaWNlPlxyXG4gICAgICAgICAge2Rpc3BsYXlQcmljZX1cclxuICAgICAgICA8L1ByaWNlPlxyXG4gICAgICAgIDxXZWlnaHQ+XHJcbiAgICAgICAgICB7Lyp7cXVhbnRpdHl9IFgge3VuaXR9Ki99XHJcbiAgICAgICAgPC9XZWlnaHQ+XHJcbiAgICAgIDwvSW5mb3JtYXRpb24+XHJcbiAgICAgIDxUb3RhbD5cclxuICAgICAgICB7Lyp7KHF1YW50aXR5ICogZGlzcGxheVByaWNlKS50b0ZpeGVkKDIpfSovfVxyXG4gICAgICA8L1RvdGFsPlxyXG4gICAgICA8UmVtb3ZlQnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlfT5cclxuICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgIDwvUmVtb3ZlQnV0dG9uPlxyXG4gICAgPC9JdGVtQm94PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2FydFBvcHVwQnV0dG9uU3R5bGVkLFxyXG4gIEJ1dHRvbkltZ0JveCxcclxuICBJdGVtQ291bnQsXHJcbiAgUHJpY2VCb3gsXHJcbiAgQ2FydFBvcHVwQm94QnV0dG9uLFxyXG4gIFByaWNlQm94QWx0LFxyXG4gIFRvdGFsSXRlbXMsXHJcbn0gZnJvbSAnLi9jYXJ0LXBvcHVwLnN0eWxlJztcclxuaW1wb3J0IHsgU2hvcHBpbmdCYWcgfSBmcm9tICdAL2Fzc2V0cy9pY29ucy9TaG9wcGluZ0JhZyc7XHJcblxyXG50eXBlIENhcnRCdXR0b25Qcm9wcyA9IHtcclxuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XHJcbiAgaXRlbUNvdW50PzogbnVtYmVyO1xyXG4gIGl0ZW1Qb3N0Zml4PzogYW55O1xyXG4gIHByaWNlPzogbnVtYmVyO1xyXG4gIHByaWNlUHJlZml4Pzogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBvbkNsaWNrPzogKGU6IGFueSkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IENhcnRQb3B1cEJ1dHRvbjogUmVhY3QuRkM8Q2FydEJ1dHRvblByb3BzPiA9ICh7XHJcbiAgaXRlbUNvdW50LFxyXG4gIGl0ZW1Qb3N0Zml4ID0gJ2l0ZW1zJyxcclxuICBwcmljZSxcclxuICBwcmljZVByZWZpeCA9ICckJyxcclxuICBzdHlsZSxcclxuICBvbkNsaWNrLFxyXG4gIGNsYXNzTmFtZSxcclxufSkgPT4gKFxyXG4gIDxDYXJ0UG9wdXBCdXR0b25TdHlsZWQgc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICA8QnV0dG9uSW1nQm94PlxyXG4gICAgICA8U2hvcHBpbmdCYWcgLz5cclxuICAgIDwvQnV0dG9uSW1nQm94PlxyXG4gICAgPEl0ZW1Db3VudD5cclxuICAgICAge2l0ZW1Db3VudH0ge2l0ZW1Qb3N0Zml4fVxyXG4gICAgPC9JdGVtQ291bnQ+XHJcbiAgICA8UHJpY2VCb3g+XHJcbiAgICAgIHtwcmljZVByZWZpeH1cclxuICAgICAge3BhcnNlRmxvYXQoYCR7cHJpY2V9YCkudG9GaXhlZCgyKX1cclxuICAgIDwvUHJpY2VCb3g+XHJcbiAgPC9DYXJ0UG9wdXBCdXR0b25TdHlsZWQ+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQm94ZWRDYXJ0QnV0dG9uOiBSZWFjdC5GQzxDYXJ0QnV0dG9uUHJvcHM+ID0gKHtcclxuICBpdGVtQ291bnQsXHJcbiAgaXRlbVBvc3RmaXggPSAnaXRlbXMnLFxyXG4gIHByaWNlLFxyXG4gIHByaWNlUHJlZml4ID0gJyQnLFxyXG4gIHN0eWxlLFxyXG4gIG9uQ2xpY2ssXHJcbiAgY2xhc3NOYW1lLFxyXG59KSA9PiAoXHJcbiAgPENhcnRQb3B1cEJveEJ1dHRvbiBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgIDxUb3RhbEl0ZW1zPlxyXG4gICAgICA8U2hvcHBpbmdCYWcgLz5cclxuICAgICAge2l0ZW1Db3VudH0ge2l0ZW1Qb3N0Zml4fVxyXG4gICAgPC9Ub3RhbEl0ZW1zPlxyXG4gICAgPFByaWNlQm94QWx0PlxyXG4gICAgICB7cHJpY2VQcmVmaXh9XHJcbiAgICAgIHtwYXJzZUZsb2F0KGAke3ByaWNlfWApLnRvRml4ZWQoMil9XHJcbiAgICA8L1ByaWNlQm94QWx0PlxyXG4gIDwvQ2FydFBvcHVwQm94QnV0dG9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFBvcHVwQnV0dG9uO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgQ2FydFBvcHVwQnV0dG9uU3R5bGVkID0gc3R5bGVkKCdidXR0b24nKWBcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgYm94LXNoYWRvdzogJHt0aGVtZUdldCgnc2hhZG93cy5iaWcnLCAnMCAyMXB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogNTBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZzogMnB4IDJweCAycHggMzBweDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU4MXB4KSB7XHJcbiAgICAmOm5vdCguZml4ZWRDYXJ0UG9wdXApIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25JbWdCb3ggPSBzdHlsZWQoJ3NwYW4nKWBcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtQ291bnQgPSBzdHlsZWQoJ3NwYW4nKWBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQcmljZUJveCA9IHN0eWxlZCgnc3BhbicpYFxyXG4gIHdpZHRoOiA1NnB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnhzJywgJzEyJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJ0UG9wdXBCb3hCdXR0b24gPSBzdHlsZWQoJ2J1dHRvbicpYFxyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiAzMCUgMCUgMCUgMzAlO1xyXG4gIGJvcmRlcjogIzAwOUU3RiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJveC1zaGFkb3c6ICR7dGhlbWVHZXQoJ3NoYWRvd3MuYmlnJywgJzAgMjFweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcbiAgb3V0bGluZTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC00NnB4O1xyXG4gIHotaW5kZXg6IDk5O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVG90YWxJdGVtcyA9IHN0eWxlZCgnc3BhbicpYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJpY2VCb3hBbHQgPSBzdHlsZWQoJ3NwYW4nKWBcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlIDAlIDAlIDE1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBtYXJnaW46IDAgMTBweCAxMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IHtcclxuICBCdXR0b25JbWdCb3gsXHJcbiAgQ2FydFBvcHVwQnV0dG9uU3R5bGVkLFxyXG4gIEl0ZW1Db3VudCxcclxuICBQcmljZUJveCxcclxuICBDYXJ0UG9wdXBCb3hCdXR0b24sXHJcbiAgUHJpY2VCb3hBbHQsXHJcbiAgVG90YWxJdGVtcyxcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cy9PdGhlcnMvYnV0dG9uL2J1dHRvbic7XHJcbmV4cG9ydCB7IEJ1dHRvbiB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgXHJcbiAgcGFkZGluZzogNDBweCA2MHB4IDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogNDBweCAzMHB4IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ29XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5oM2BcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5oZWFkaW5nJywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMubGcnLCAnMjEnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJIZWFkaW5nID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBPZmZlclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuMjAwJywgJyNGN0Y3RjcnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgT2ZmZXIgPSBzdHlsZWQucGBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICBtYXJnaW46IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVscGVyVGV4dCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuYmx1ZS5saW5rJywgJyM0Mjg1ZjQnKX07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgaGVpZ2h0OiA0OHB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjIwMCcsICcjZjdmN2Y3Jyl9O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjcwMCcsICcjZTZlNmU2Jyl9O1xyXG4vLyAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbi8vICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuLy8gICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4vLyAgIHBhZGRpbmc6IDAgMThweDtcclxuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlO1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4vLyAgICY6aG92ZXIsXHJcbi8vICAgJjpmb2N1cyB7XHJcbi8vICAgICBvdXRsaW5lOiAwO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgJjpmb2N1cyB7XHJcbi8vICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuLy8gICB9XHJcblxyXG4vLyAgICY6OnBsYWNlaG9sZGVyIHtcclxuLy8gICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbi8vICAgICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weCArIDFweCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4vLyAgICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4vLyAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgJi5kaXNhYmxlZCB7XHJcbi8vICAgICAuaW5uZXItd3JhcCB7XHJcbi8vICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbi8vICAgICAgIG9wYWNpdHk6IDAuNjtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIGA7XHJcblxyXG5leHBvcnQgY29uc3QgRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS41MDAnLCAnI2YxZjFmMScpfTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggLSAxcHgpO1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgV3JhcHBlcixcclxuICBDb250YWluZXIsXHJcbiAgSGVhZGluZyxcclxuICBTdWJIZWFkaW5nLFxyXG4gIC8vIElucHV0LFxyXG4gIEJ1dHRvbixcclxuICBMaW5rQnV0dG9uLFxyXG4gIE9mZmVyLFxyXG59IGZyb20gJy4vYXV0aGVudGljYXRpb24tZm9ybS5zdHlsZSc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnY29tcG9uZW50cy9PdGhlcnMvZm9ybXMvaW5wdXQnO1xyXG5jb25zdCBGb3Jnb3RQYXNzd29yZE1vZGFsOlJlYWN0LkZDPHtzZXRDdXJyZW50Rm9ybToodmFsdWU6J3NpZ25VcCd8J2ZvcmdvdFBhc3MnfCdzaWduSW4nKT0+dm9pZH0+PSh7c2V0Q3VycmVudEZvcm19KT0+IHtcclxuICBjb25zdCB0b2dnbGVTaWduSW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50Rm9ybSgnc2lnbkluJylcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAzMCB9fT5cclxuICAgICAgICA8SGVhZGluZz5cclxuICAgICAgICAgIEZvcmdvdCBQYXNzd29yZFxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuXHJcbiAgICAgICAgPFN1YkhlYWRpbmc+XHJcbiAgICAgICAgICBXZSdsbCBzZW5kIHlvdSBhIGxpbmsgdG8gcmVzZXQgeW91ciBwYXNzd29yZFxyXG4gICAgICAgIDwvU3ViSGVhZGluZz5cclxuXHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzIG9yIENvbnRhY3QgTm8uXCJcclxuICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVzZXQgUGFzc3dvcmRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8T2ZmZXIgc3R5bGU9e3sgcGFkZGluZzogJzIwcHggMCAwJyB9fT5cclxuICAgICAgICAgIEJhY2sgdG97JyAnfVxyXG4gICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17dG9nZ2xlU2lnbkluRm9ybX0+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XHJcbiAgICAgICAgPC9PZmZlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZE1vZGFsXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWduSW5Gb3JtIGZyb20gJy4vbG9naW4nO1xyXG5pbXBvcnQgU2lnblVwIGZyb20gJy4vcmVnaXN0ZXInO1xyXG5pbXBvcnQgRm9yZ290UGFzc0Zvcm0gZnJvbSAnLi9mb3Jnb3QtcGFzc3dvcmQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHtjbG9zZU1vZGFsfSBmcm9tIFwiQHJlZHEvcmV1c2UtbW9kYWxcIjtcclxuY29uc3QgQXV0aGVudGljYXRpb25Gb3JtPSh7cm91dGVyfSk9PiB7XHJcbiAgY29uc3Qge2lzQXV0aGVudGljYXRlZH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICBjb25zdCBbY3VycmVudEZvcm0sc2V0Q3VycmVudEZvcm1dPXVzZVN0YXRlPCdzaWduVXAnfCdmb3Jnb3RQYXNzJ3wnc2lnbkluJz4oJ3NpZ25VcCcpXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZihpc0F1dGhlbnRpY2F0ZWQpe1xyXG4gICAgICBpZihyb3V0ZXIucGF0aG5hbWU9PT0nL2xvZ2luJyl7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIGNsb3NlTW9kYWwoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxbaXNBdXRoZW50aWNhdGVkXSlcclxuICBpZiAoY3VycmVudEZvcm0gPT09ICdzaWduSW4nKSB7XHJcbiAgICByZXR1cm4gPFNpZ25JbkZvcm0gIHNldEN1cnJlbnRGb3JtPXtzZXRDdXJyZW50Rm9ybX0vPlxyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRGb3JtID09PSAnc2lnblVwJykge1xyXG4gICAgcmV0dXJuIDxTaWduVXAgc2V0Q3VycmVudEZvcm09e3NldEN1cnJlbnRGb3JtfS8+XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudEZvcm0gPT09ICAnZm9yZ290UGFzcycpIHtcclxuICAgIHJldHVybiA8Rm9yZ290UGFzc0Zvcm0gIHNldEN1cnJlbnRGb3JtPXtzZXRDdXJyZW50Rm9ybX0vPlxyXG4gIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBdXRoZW50aWNhdGlvbkZvcm0pXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgTGlua0J1dHRvbixcclxuICBCdXR0b24sXHJcbiAgSWNvbldyYXBwZXIsXHJcbiAgV3JhcHBlcixcclxuICBDb250YWluZXIsXHJcbiAgTG9nb1dyYXBwZXIsXHJcbiAgSGVhZGluZyxcclxuICBTdWJIZWFkaW5nLFxyXG4gIE9mZmVyU2VjdGlvbixcclxuICBPZmZlcixcclxuICAvLyBJbnB1dCxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gJy4vYXV0aGVudGljYXRpb24tZm9ybS5zdHlsZSc7XHJcbmltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnYXNzZXRzL2ljb25zL0ZhY2Vib29rJztcclxuaW1wb3J0IHsgR29vZ2xlIH0gZnJvbSAnYXNzZXRzL2ljb25zL0dvb2dsZSc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gJ0ByZWRxL3JldXNlLW1vZGFsJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdjb21wb25lbnRzL090aGVycy9mb3Jtcy9pbnB1dCc7XHJcbmltcG9ydCB7dXNlTG9naW5Gb3JtfSBmcm9tIFwiQC9ob29rcy91c2VMb2dpbkZvcm1cIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7bG9hZFVzZXIsIGxvZ2lufSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCB7QVVUSH0gZnJvbSBcIkAvcmVkdXgvZGVmaW5lc1wiO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSBcImxpZ2h0LXRvYXN0XCI7XHJcbmltcG9ydCB7SlNPTkNvbmZpZ30gZnJvbSBcIkAvYXhpb3NIZWFkZXJzXCI7XHJcblxyXG5jb25zdCBTaWduSW5Nb2RhbDpSZWFjdC5GQzx7c2V0Q3VycmVudEZvcm06KHZhbHVlOidzaWduVXAnfCdmb3Jnb3RQYXNzJ3wnc2lnbkluJyk9PnZvaWR9Pj0oe3NldEN1cnJlbnRGb3JtfSk9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHRvZ2dsZVNpZ25VcEZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Rm9ybSgnc2lnblVwJylcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVGb3Jnb3RQYXNzRm9ybSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRGb3JtKCdmb3Jnb3RQYXNzJylcclxuICB9O1xyXG4gIGNvbnN0IHtpbnB1dHMsIGhhbmRsZUlucHV0Q2hhbmdlfSA9IHVzZUxvZ2luRm9ybSgpO1xyXG5cclxuXHJcbiAgY29uc3QgbG9naW5DYWxsYmFjayA9YXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL2F1dGgvbG9naW5gLFxyXG4gICAgICAgICAge2VtYWlsOmlucHV0cy5lbWFpbCwgcGFzc3dvcmQ6aW5wdXRzLnBhc3N3b3JkfSxcclxuICAgICAgICAgIEpTT05Db25maWdcclxuICAgICAgKVxyXG4gICAgICBkaXNwYXRjaChsb2dpbihkYXRhKSlcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIEpTT04uc3RyaW5naWZ5KGRhdGEudG9rZW4pKVxyXG4gICAgICBhd2FpdCBkaXNwYXRjaChsb2FkVXNlcigpKVxyXG4gICAgICBUb2FzdC5zdWNjZXNzKCdTdWNjZXNzZnVsbHkgbG9nZ2VkIGluJylcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBUb2FzdC5mYWlsKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IgKycsIFBsZWFzZSB0cnkgYWdhaW4nKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8SGVhZGluZz5cclxuICAgICAgICAgICAgV2VsY29tZSBCYWNrXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgICAgPFN1YkhlYWRpbmc+XHJcbiAgICAgICAgICAgIExvZ2luIHdpdGggeW91ciBlbWFpbCAmYW1wOyBwYXNzd29yZFxyXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2xvZ2luQ2FsbGJhY2t9PlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9e1wiZW1haWxcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5lbWFpbH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCAobWluIDYgY2hhcmFjdGVycylcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT17XCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb250aW51ZSAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxEaXZpZGVyPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIG9yXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0RpdmlkZXI+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNjdiMicsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17bG9naW5DYWxsYmFja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxGYWNlYm9vayAvPlxyXG4gICAgICAgICAgICA8L0ljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICBDb250aW51ZSB3aXRoIEZhY2Vib29rXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnIzQyODVmNCcgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpbkNhbGxiYWNrfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPEdvb2dsZSAvPlxyXG4gICAgICAgICAgICA8L0ljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICBDb250aW51ZSB3aXRoIEdvb2dsZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPE9mZmVyIHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAnIH19PlxyXG4gICAgICAgICAgICBEb24ndCBoYXZlIGFueSBhY2NvdW50P3snICd9XHJcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZ25VcEZvcm19PlxyXG4gICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxyXG4gICAgICAgICAgPC9PZmZlcj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPE9mZmVyU2VjdGlvbj5cclxuICAgICAgICAgIDxPZmZlcj5cclxuICAgICAgICAgICAgRm9yZ290IHlvdXIgcGFzc3dvcmQ/XHJcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUZvcmdvdFBhc3NGb3JtfT5cclxuICAgICAgICAgICAgICBSZXNldCBJdFxyXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XHJcbiAgICAgICAgICA8L09mZmVyPlxyXG4gICAgICAgIDwvT2ZmZXJTZWN0aW9uPlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Nb2RhbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdjb21wb25lbnRzL090aGVycy9mb3Jtcy9pbnB1dCc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEljb25XcmFwcGVyLFxyXG4gIFdyYXBwZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIExvZ29XcmFwcGVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgU3ViSGVhZGluZyxcclxuICBIZWxwZXJUZXh0LFxyXG4gIE9mZmVyLFxyXG4gIC8vIElucHV0LFxyXG4gIERpdmlkZXIsXHJcbiAgTGlua0J1dHRvbixcclxufSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLWZvcm0uc3R5bGUnO1xyXG5pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gJ2Fzc2V0cy9pY29ucy9GYWNlYm9vayc7XHJcbmltcG9ydCB7IEdvb2dsZSB9IGZyb20gJ2Fzc2V0cy9pY29ucy9Hb29nbGUnO1xyXG5pbXBvcnQge3VzZUxvZ2luRm9ybX0gZnJvbSBcIkAvaG9va3MvdXNlTG9naW5Gb3JtXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2xvYWRVc2VyLCByZWdpc3Rlcn0gZnJvbSBcIkAvcmVkdXgvYWN0aW9ucy9nbG9iYWxBY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xyXG5pbXBvcnQge0FVVEh9IGZyb20gXCJAL3JlZHV4L2RlZmluZXNcIjtcclxuaW1wb3J0IHtKU09OQ29uZmlnfSBmcm9tIFwiQC9heGlvc0hlYWRlcnNcIjtcclxuaW1wb3J0IFRvYXN0IGZyb20gXCJsaWdodC10b2FzdFwiO1xyXG5jb25zdCBTaWdudXBNb2RhbDpSZWFjdC5GQzx7c2V0Q3VycmVudEZvcm06KHZhbHVlOidzaWduVXAnfCdmb3Jnb3RQYXNzJ3wnc2lnbkluJyk9PnZvaWR9Pj0oe3NldEN1cnJlbnRGb3JtfSk9PiB7XHJcbiAgY29uc3QgdG9nZ2xlU2lnbkluRm9ybSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRGb3JtKCdzaWduSW4nKVxyXG4gIH07XHJcbiAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHtpbnB1dHMsIGhhbmRsZUlucHV0Q2hhbmdlfSA9IHVzZUxvZ2luRm9ybSgpO1xyXG4gIGNvbnN0IG9uU3VibWl0PWFzeW5jIChlKT0+e1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9hdXRoL3JlZ2lzdGVyYCxcclxuICAgICAgICAgIHtmaXJzdE5hbWU6aW5wdXRzLmZpcnN0TmFtZSxsYXN0TmFtZTppbnB1dHMubGFzdE5hbWUsIGVtYWlsOmlucHV0cy5lbWFpbCwgcGFzc3dvcmQ6aW5wdXRzLnBhc3N3b3JkLCByb2xlOid1c2VyJ30sXHJcbiAgICAgICAgICBKU09OQ29uZmlnXHJcbiAgICAgIClcclxuICAgICAgZGlzcGF0Y2gocmVnaXN0ZXIoZGF0YSkpXHJcbiAgICAgIGF3YWl0IGxvYWRVc2VyKClcclxuICAgICAgVG9hc3Quc3VjY2VzcygnU3VjY2Vzc2Z1bGx5IHNpZ25lZCB1cCcpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeShkYXRhLnRva2VuKSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBUb2FzdC5mYWlsKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkaW5nPlxyXG4gICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8U3ViSGVhZGluZz5cclxuICAgICAgICAgIEV2ZXJ5IGZpbGwgaXMgcmVxdWlyZWQgaW4gc2lnbiB1cFxyXG4gICAgICAgIDwvU3ViSGVhZGluZz5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0gJ0ZpcnN0IG5hbWUnXHJcbiAgICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAgICAgbmFtZT0nZmlyc3ROYW1lJ1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMuZmlyc3ROYW1lfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0gJ0xhc3QgbmFtZSdcclxuICAgICAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgICAgICAgIG5hbWU9J2xhc3ROYW1lJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5sYXN0TmFtZX1cclxuXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwgQWRkcmVzcydcclxuICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcblxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSAnUGFzc3dvcmQgKG1pbiA2IGNoYXJhY3RlcnMpJ1xyXG4gICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgbWI9JzEwcHgnXHJcbiAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SGVscGVyVGV4dCBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwIDMwcHgnIH19PlxyXG4gICAgICAgICAgQnkgc2lnbmluZyB1cCwgeW91IGFncmVlIHRvXHJcbiAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICBUZXJtcyAmYW1wOyBDb25kaXRpb25cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvSGVscGVyVGV4dD5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHNpemU9J2JpZycgd2lkdGg9JzEwMCUnIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICBDb250aW51ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8RGl2aWRlcj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBvclxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRGl2aWRlcj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNjdiMicsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgPEZhY2Vib29rIC8+XHJcbiAgICAgICAgICA8L0ljb25XcmFwcGVyPlxyXG4gICAgICAgICAgQ29udGludWUgd2l0aCBGYWNlYm9va1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI4NWY0JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgPEdvb2dsZSAvPlxyXG4gICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgIENvbnRpbnVlIHdpdGggR29vZ2xlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPE9mZmVyIHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAnIH19PlxyXG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/eycgJ31cclxuICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZ25JbkZvcm19PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxyXG4gICAgICAgIDwvT2ZmZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwTW9kYWxcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi9jYXJ0JztcclxuaW1wb3J0IENhcnRQb3B1cEJ1dHRvbiwge1xyXG4gIEJveGVkQ2FydEJ1dHRvbixcclxufSBmcm9tICdAL2NvbXBvbmVudHMvY2FydC9wb3B1cC9jYXJ0LXBvcHVwLWJ1dHRvbic7XHJcbmltcG9ydCB7IENhcnRTbGlkZVBvcHVwIH0gZnJvbSAnLi9jYXJ0LnN0eWxlJztcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Y2FsY3VsYXRlVG90YWxQcmljZX0gZnJvbSBcIi4uLy4uL3V0aWxzL2NhcnRVdGlsc1wiO1xyXG5pbXBvcnQge09wZW5DYXJ0TW9kYWx9IGZyb20gXCJAL09wZW5Nb2RhbEZ1bmN0aW9uc1wiO1xyXG5jb25zdCBDYXJ0UG9wdXBTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5jYXJ0UG9wdXAge1xyXG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBib3R0b206IDUwcHggIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggIzIzZmYwMDs7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XHJcblxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG50eXBlIENhcnRQcm9wcyA9IHtcclxuICBkZXZpY2VUeXBlOiB7XHJcbiAgICBtb2JpbGU6IGJvb2xlYW47XHJcbiAgICB0YWJsZXQ6IGJvb2xlYW47XHJcbiAgICBkZXNrdG9wOiBib29sZWFuO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBDYXJ0UG9wVXA6IFJlYWN0LkZDPENhcnRQcm9wcz4gPSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXZpY2VUeXBlOiB7IG1vYmlsZSwgdGFibGV0LCBkZXNrdG9wIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgY29uc3QgW2lzT3BlbixzZXRJc09wZW5dPXVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgY29uc3Qge2N1cnJlbmN5OntzeW1ib2x9fSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBPcGVuQ2FydE1vZGFsKClcclxuICB9O1xyXG5cclxuICBsZXQgY2FydFNsaWRlckNsYXNzID0gaXNPcGVuID8gJ2NhcnRQb3B1cEZpeGVkJyA6ICcnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHttb2JpbGUgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPENhcnRQb3B1cFN0eWxlIC8+XHJcbiAgICAgICAgICAgICAgPENhcnRQb3B1cEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtY2FydCdcclxuICAgICAgICAgICAgICAgICAgaXRlbUNvdW50PXtjYXJ0U3RhdGUubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICBpdGVtUG9zdGZpeD17XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFN0YXRlLmxlbmd0aCA+IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlUHJlZml4PXtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vZGFsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPENhcnRTbGlkZVBvcHVwIGNsYXNzTmFtZT17Y2FydFNsaWRlckNsYXNzfT5cclxuICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJ0IG9uQ2xvc2VCdG5DbGljaz17KCk9PntzZXRJc09wZW4oZmFsc2UpfX0gc2Nyb2xsYmFySGVpZ2h0PScxMDB2aCcgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9DYXJ0U2xpZGVQb3B1cD5cclxuXHJcbiAgICAgICAgICAgICAgPEJveGVkQ2FydEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtY2FydCdcclxuICAgICAgICAgICAgICAgICAgaXRlbUNvdW50PXtjYXJ0U3RhdGUubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICBpdGVtUG9zdGZpeD17XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFN0YXRlLmxlbmd0aCA+IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpdGVtcycgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlUHJlZml4PXtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57c2V0SXNPcGVuKHRydWUpfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFBvcFVwO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgQ2FydFBvcHVwQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAzODVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2FydC1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI0NXB4KTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgbWF4LWhlaWdodDogMzMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9wdXBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS41MDAnLCAnI2YxZjFmMScpfTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2NnB4KSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3B1cEl0ZW1Db3VudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucmVkJywgJyNlYTRkNGEnKX07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcblxyXG4gICYuZml4ZWRDYXJ0Q2xvc2Uge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSXRlbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1DYXJkcyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1EZXRhaWxzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbVRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1QcmljZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtV2VpZ2h0ID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG5gO1xyXG5cclxuY29uc3QgVG90YWxQcmljZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZWE0ZDRhO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByb21vQ29kZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gID4gYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zNXMgZWFzZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkuaG92ZXInLCAnIzAxOTM3NicpfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDaGVja291dEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ4cHg7XHJcbiAgYm94LXNoYWRvdzogJHt0aGVtZUdldCgnc2hhZG93cy5iYXNlJywgJzAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiBtYXJnaW4tdG9wOiBhdXRvOyAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgPiBhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBmbGV4LXNocmluazogMDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmFgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJpY2VCb3ggPSBzdHlsZWQucGBcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGhlaWdodDogNDFweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBOb1Byb2R1Y3RNc2cgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUHJvZHVjdEltZyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvdXBvbkJveFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMCAyMnB4IDAgMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IENvdXBvbkNvZGUgPSBzdHlsZWQucGBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMubWVkaXVtJywgJzUwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVycm9yTXNnID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weCAtIDFweCk7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuc2Vjb25kYXJ5LmhvdmVyJywgJyNGRjI4MkYnKX07XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IENhcnRTbGlkZVBvcHVwID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNDIwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAtNDUwcHg7XHJcbiAgei1pbmRleDogMTAxMDtcclxuICBib3gtc2hhZG93OiAke3RoZW1lR2V0KCdzaGFkb3dzLmJpZycsICcwIDIxcHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTgxcHgpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgJi5jYXJ0UG9wdXBGaXhlZCB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gICR7Q2FydFBvcHVwQm9keX0ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAke0l0ZW1XcmFwcGVyfSB7XHJcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDBweCk7ICovXHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQ1cHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgfVxyXG5cclxuICAke0l0ZW1DYXJkc30ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjIwMCcsICcjZjdmN2Y3Jyl9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgJHtQb3B1cEhlYWRlcn0ge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgJHtDbG9zZUJ1dHRvbn0ge1xyXG4gICAgICB0b3A6IGF1dG87XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IHtcclxuICBDYXJ0U2xpZGVQb3B1cCxcclxuICBDYXJ0UG9wdXBCb2R5LFxyXG4gIFBvcHVwSGVhZGVyLFxyXG4gIFBvcHVwSXRlbUNvdW50LFxyXG4gIFByb21vQ29kZSxcclxuICBDbG9zZUJ1dHRvbixcclxuICBJdGVtQ2FyZHMsXHJcbiAgSXRlbUltZ1dyYXBwZXIsXHJcbiAgSXRlbURldGFpbHMsXHJcbiAgSXRlbVRpdGxlLFxyXG4gIEl0ZW1QcmljZSxcclxuICBJdGVtV2VpZ2h0LFxyXG4gIFRvdGFsUHJpY2UsXHJcbiAgRGVsZXRlQnV0dG9uLFxyXG4gIENoZWNrb3V0QnV0dG9uLFxyXG4gIENoZWNrb3V0QnV0dG9uV3JhcHBlcixcclxuICBUaXRsZSxcclxuICBQcmljZUJveCxcclxuICBOb1Byb2R1Y3RNc2csXHJcbiAgSXRlbVdyYXBwZXIsXHJcbiAgQ291cG9uQm94V3JhcHBlcixcclxuICBDb3Vwb25Db2RlLFxyXG4gIEVycm9yTXNnLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7XHJcbiAgQ2FydFBvcHVwQm9keSxcclxuICBQb3B1cEhlYWRlcixcclxuICBQb3B1cEl0ZW1Db3VudCxcclxuICBDbG9zZUJ1dHRvbixcclxuICBQcm9tb0NvZGUsXHJcbiAgQ2hlY2tvdXRCdXR0b25XcmFwcGVyLFxyXG4gIENoZWNrb3V0QnV0dG9uLFxyXG4gIFRpdGxlLFxyXG4gIFByaWNlQm94LFxyXG4gIE5vUHJvZHVjdEltZyxcclxuICBJdGVtV3JhcHBlcixcclxuICBDb3Vwb25Cb3hXcmFwcGVyLFxyXG4gIENvdXBvbkNvZGUsIE5vUHJvZHVjdE1zZyxcclxufSBmcm9tICcuL2NhcnQuc3R5bGUnO1xyXG5pbXBvcnQgeyBDbG9zZUljb24gfSBmcm9tICdhc3NldHMvaWNvbnMvQ2xvc2VJY29uJztcclxuaW1wb3J0IHsgU2hvcHBpbmdCYWdMYXJnZSB9IGZyb20gJ2Fzc2V0cy9pY29ucy9TaG9wcGluZ0JhZ0xhcmdlJztcclxuaW1wb3J0IHsgTm9DYXJ0QmFnIH0gZnJvbSAnYXNzZXRzL2ljb25zL05vQ2FydEJhZyc7XHJcbmltcG9ydCB7Y2FsY3VsYXRlVG90YWxQcmljZX0gZnJvbSBcIi4uLy4uL3V0aWxzL2NhcnRVdGlsc1wiO1xyXG5pbXBvcnQgeyBDYXJ0SXRlbSB9IGZyb20gJ0AvY29tcG9uZW50cy9jYXJ0L2l0ZW0vY2FydC1pdGVtJztcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7ZGVjcmVhc2VRdWFudGl0eUNhcnQsaW5jcmVhc2VRdWFudGl0eUNhcnQscmVtb3ZlRnJvbUNhcnQscmVtb3ZlQWxsRnJvbUNhcnR9IGZyb20gXCJAL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG50eXBlIENhcnRQcm9wc1R5cGUgPSB7XHJcbiAgc3R5bGU/OiBhbnk7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHNjcm9sbGJhckhlaWdodD86IHN0cmluZztcclxuICBpc09wZW4/OmJvb2xlYW47XHJcbiAgb25DbG9zZUJ0bkNsaWNrPzogKGU6IGFueSkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IENhcnQ6IFJlYWN0LkZDPENhcnRQcm9wc1R5cGU+ID0gKHtcclxuICBzdHlsZSxcclxuICBjbGFzc05hbWUsXHJcbiAgb25DbG9zZUJ0bkNsaWNrLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0UG9wdXBCb2R5IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICA8UG9wdXBIZWFkZXI+XHJcbiAgICAgICAgPFBvcHVwSXRlbUNvdW50PlxyXG4gICAgICAgICAgPFNob3BwaW5nQmFnTGFyZ2Ugd2lkdGg9JzE5cHgnIGhlaWdodD0nMjRweCcgLz5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7MX1cclxuICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIGl0ZW1zXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9Qb3B1cEl0ZW1Db3VudD5cclxuXHJcbiAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2VCdG5DbGlja30+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgPC9DbG9zZUJ1dHRvbj5cclxuICAgICAgPC9Qb3B1cEhlYWRlcj5cclxuXHJcbiAgICAgICAgPEl0ZW1XcmFwcGVyIGNsYXNzTmFtZT0naXRlbXMtd3JhcHBlcic+XHJcbiAgICAgICAgICB7Y2FydFN0YXRlLmxlbmd0aD4wID8gKFxyXG4gICAgICAgICAgICBjYXJ0U3RhdGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPENhcnRJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjYXJ0SXRlbS0ke2l0ZW0uaWR9YH1cclxuICAgICAgICAgICAgICAgIG9uSW5jcmVtZW50PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGluY3JlYXNlUXVhbnRpdHlDYXJ0KGl0ZW0uY2FydElkKSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkRlY3JlbWVudD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChkZWNyZWFzZVF1YW50aXR5Q2FydChpdGVtLmNhcnRJZCkpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25SZW1vdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVtb3ZlRnJvbUNhcnQoaXRlbS5jYXJ0SWQpKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPE5vUHJvZHVjdEltZz5cclxuICAgICAgICAgICAgICAgIDxOb0NhcnRCYWcgLz5cclxuICAgICAgICAgICAgICA8L05vUHJvZHVjdEltZz5cclxuICAgICAgICAgICAgICA8Tm9Qcm9kdWN0TXNnPlxyXG4gICAgICAgICAgICAgICAgTm8gcHJvZHVjdHMgZm91bmRcclxuICAgICAgICAgICAgICA8L05vUHJvZHVjdE1zZz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvSXRlbVdyYXBwZXI+XHJcblxyXG4gICAgICA8Q2hlY2tvdXRCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgIDxQcm9tb0NvZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChyZW1vdmVBbGxGcm9tQ2FydCgpKX0+XHJcbiAgICAgICAgICAgICAgICAgIFJlbW92ZSBBbGxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUHJvbW9Db2RlPlxyXG5cclxuICAgICAgICB7dHJ1ZSA/IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jaGVja291dCc+XHJcbiAgICAgICAgICAgIDxDaGVja291dEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlQnRuQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIENoZWNrb3V0XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPFByaWNlQm94PlxyXG4gICAgICAgICAgICAgICAgICB7Lyp7Q1VSUkVOQ1l9Ki99XHJcbiAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSl9XHJcbiAgICAgICAgICAgICAgICA8L1ByaWNlQm94PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICA8L0NoZWNrb3V0QnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Q2hlY2tvdXRCdXR0b24+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgQ2hlY2tvdXRcclxuICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgIDxQcmljZUJveD5cclxuICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSl9XHJcbiAgICAgICAgICAgICAgPC9QcmljZUJveD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L0NoZWNrb3V0QnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ2hlY2tvdXRCdXR0b25XcmFwcGVyPlxyXG4gICAgPC9DYXJ0UG9wdXBCb2R5PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuY29uc3QgdXNlTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlPGFueT4oe30pO1xyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xyXG4gICAgICAgIHNldElucHV0cygoaW5wdXRzOiBhbnkpID0+ICh7Li4uaW5wdXRzLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlLFxyXG4gICAgICAgIGlucHV0c1xyXG4gICAgfTtcclxufVxyXG5leHBvcnQge3VzZUxvZ2luRm9ybX0iLCJpbXBvcnQge0dMT0JBTCwgRk9STSwgQVVUSH0gZnJvbSBcIi4uL2RlZmluZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2V0QXV0aFRva2VuIGZyb20gXCIuLi9zZXRBdXRoVG9rZW5cIjtcclxuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnbGlnaHQtdG9hc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbEN1cnJlbmN5ID0gKGN1cjpzdHJpbmcpID0+ICh7XHJcbiAgICB0eXBlOiBHTE9CQUwuU0VUX0NVUlJFTkNZLFxyXG4gICAgY3VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDYXRlZ29yeSA9IChjYXRlZ29yeTpzdHJpbmcpID0+ICh7XHJcbiAgICB0eXBlOiBHTE9CQUwuU0VUX0NBVEVHT1JZLFxyXG4gICAgY2F0ZWdvcnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbFNlYXJjaCA9IChrZXl3b3JkOnN0cmluZykgPT4gKHtcclxuICAgIHR5cGU6IEdMT0JBTC5TRVRfU0VBUkNILFxyXG4gICAga2V5d29yZCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQVVUSC5MT0dfSU4sXHJcbiAgICBwYXlsb2FkOiBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBVVRILlNJR05fVVAsXHJcbiAgICBwYXlsb2FkOiBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiAoZGlzcGF0Y2g6YW55KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlckluZm8nKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhcnRJdGVtcycpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVyc2lzdDpyb290JylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzaGlwcGluZ0FkZHJlc3MnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BheW1lbnRNZXRob2QnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBBVVRILkxPR19PVVR9KVxyXG4gICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICcvJ1xyXG59XHJcbmV4cG9ydCBjb25zdCBsb2FkVXNlciA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDphbnkpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UudG9rZW4pIHtcclxuICAgICAgICBjb25zdCB0b2tlbj1sb2NhbFN0b3JhZ2UudG9rZW4ucmVwbGFjZUFsbCgnXCInLCcnKVxyXG4gICAgICAgIC8vc2VuZGluZyB0b2tlbiB0byBoZWFkZXJzXHJcbiAgICAgICAgc2V0QXV0aFRva2VuKHRva2VuKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvYXV0aC9tZWApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQVVUSC5MT0FEX1VTRVIsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQVVUSC5MT0FEX1VTRVJfRkFJTCxcclxuICAgICAgICAgICAgcGF5bG9hZDogZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlT3JkZXIgPSAob3JkZXI6b2JqZWN0KSA9PiBhc3luYyAoZGlzcGF0Y2g6YW55KSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUElfQkFTRV9VUkx9L2FwaS9vcmRlcnNgLCBvcmRlciwgY29uZmlnKVxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6QVVUSC5PUkRFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkYXRhLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjYXJ0SXRlbXMnKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZXJzaXN0OnJvb3QnKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9XHJcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIDogZXJyb3IubWVzc2FnZVxyXG4gICAgICAgIGlmIChtZXNzYWdlcyA9PT0gJ05vdCBhdXRob3JpemVkLCB0b2tlbiBmYWlsZWQnKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ291dCgpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3Qgc2V0QXV0aFRva2VuPSh0b2tlbjpzdHJpbmcpPT57XHJcbiAgICBpZih0b2tlbil7XHJcbiAgICAgICAgLy9hZGRpbmcgdG9rZW4gdG8gdGhlIGhlYWRlcnNcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddPWBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgLy9yZW1vdmluZyB0b2tlbiBmcm9tIHRoZSBoZWFkZXJzXHJcbiAgICAgICAgZGVsZXRlIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ11cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBzZXRBdXRoVG9rZW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=