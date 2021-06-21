(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./src/components/Layout/header/menu/auth-menu.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Layout/header/menu/auth-menu.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../button/button */ \"./src/components/button/button.tsx\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _popover_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popover/popover */ \"./src/components/Layout/popover/popover.tsx\");\n/* harmony import */ var _authorized_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authorized-menu */ \"./src/components/Layout/header/menu/authorized-menu.tsx\");\n\n\nvar _jsxFileName = \"/Users/hari/WebstormProjects/ecommerce-MERN/client-new/src/components/Layout/header/menu/auth-menu.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar AuthMenu = function AuthMenu(_ref) {\n  var isAuthenticated = _ref.isAuthenticated,\n      onJoin = _ref.onJoin,\n      onLogout = _ref.onLogout,\n      avatar = _ref.avatar;\n  return !isAuthenticated ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_button_button__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    variant: \"primary\",\n    onClick: onJoin,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n      id: \"joinButton\",\n      defaultMessage: \"join\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_popover_popover__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    direction: \"right\",\n    className: \"user-pages-dropdown\",\n    handler: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: avatar,\n      alt: \"user\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 16\n    }, _this),\n    content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_authorized_menu__WEBPACK_IMPORTED_MODULE_5__[\"AuthorizedMenu\"], {\n      onLogout: onLogout\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 16\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = AuthMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2hlYWRlci9tZW51L2F1dGgtbWVudS50c3g/MjcxYSJdLCJuYW1lcyI6WyJBdXRoTWVudSIsImlzQXV0aGVudGljYXRlZCIsIm9uSm9pbiIsIm9uTG9nb3V0IiwiYXZhdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBMEQ7QUFBQSxNQUF2REMsZUFBdUQsUUFBdkRBLGVBQXVEO0FBQUEsTUFBdENDLE1BQXNDLFFBQXRDQSxNQUFzQztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQ3pFLFNBQU8sQ0FBQ0gsZUFBRCxnQkFDTCxxRUFBQyxxREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVDLE1BQW5DO0FBQUEsMkJBQ0UscUVBQUMsMkRBQUQ7QUFBa0IsUUFBRSxFQUFDLFlBQXJCO0FBQWtDLG9CQUFjLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESyxnQkFLTCxxRUFBQyx3REFBRDtBQUNFLGFBQVMsRUFBQyxPQURaO0FBRUUsYUFBUyxFQUFDLHFCQUZaO0FBR0UsV0FBTyxlQUFFO0FBQUssU0FBRyxFQUFFRSxNQUFWO0FBQWtCLFNBQUcsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSFg7QUFJRSxXQUFPLGVBQUUscUVBQUMsK0RBQUQ7QUFBZ0IsY0FBUSxFQUFFRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUxGO0FBWUQsQ0FiRDs7S0FBTUgsUTtBQWNTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xheW91dC9oZWFkZXIvbWVudS9hdXRoLW1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi4vLi4vcG9wb3Zlci9wb3BvdmVyJztcbmltcG9ydCB7IEF1dGhvcml6ZWRNZW51IH0gZnJvbSAnLi9hdXRob3JpemVkLW1lbnUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG4gIG9uSm9pbjogKCkgPT4gdm9pZDtcbiAgb25Mb2dvdXQ6ICgpID0+IHZvaWQ7XG4gIGF2YXRhcjogc3RyaW5nO1xufVxuXG5jb25zdCBBdXRoTWVudSA9ICh7IGlzQXV0aGVudGljYXRlZCwgb25Kb2luLCBvbkxvZ291dCwgYXZhdGFyIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAhaXNBdXRoZW50aWNhdGVkID8gKFxuICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtvbkpvaW59PlxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJqb2luQnV0dG9uXCIgZGVmYXVsdE1lc3NhZ2U9XCJqb2luXCIgLz5cbiAgICA8L0J1dHRvbj5cbiAgKSA6IChcbiAgICA8UG9wb3ZlclxuICAgICAgZGlyZWN0aW9uPVwicmlnaHRcIlxuICAgICAgY2xhc3NOYW1lPVwidXNlci1wYWdlcy1kcm9wZG93blwiXG4gICAgICBoYW5kbGVyPXs8aW1nIHNyYz17YXZhdGFyfSBhbHQ9XCJ1c2VyXCIgLz59XG4gICAgICBjb250ZW50PXs8QXV0aG9yaXplZE1lbnUgb25Mb2dvdXQ9e29uTG9nb3V0fSAvPn1cbiAgICAvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEF1dGhNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout/header/menu/auth-menu.tsx\n");

/***/ }),

/***/ "./src/components/Layout/header/menu/authorized-menu.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Layout/header/menu/authorized-menu.tsx ***!
  \***************************************************************/
/*! exports provided: AuthorizedMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthorizedMenu\", function() { return AuthorizedMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _nav_link_nav_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../nav-link/nav-link */ \"./src/components/Layout/nav-link/nav-link.tsx\");\n/* harmony import */ var _site_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../site-navigation */ \"./src/components/Layout/header/site-navigation.ts\");\n\n\n\nvar _jsxFileName = \"/Users/hari/WebstormProjects/ecommerce-MERN/client-new/components/layout/header/menu/authorized-menu.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar AuthorizedMenu = function AuthorizedMenu(_ref) {\n  var onLogout = _ref.onLogout;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [_site_navigation__WEBPACK_IMPORTED_MODULE_4__[\"AUTHORIZED_MENU_ITEMS\"].map(function (item, idx) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_nav_link_nav_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"menu-item\",\n        href: item.href,\n        label: item.defaultMessage,\n        intlId: item.id\n      }, idx, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"menu-item\",\n      onClick: onLogout,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], {\n            id: \"navlinkLogout\",\n            defaultMessage: \"Logout\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n_c = AuthorizedMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthorizedMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL21lbnUvYXV0aG9yaXplZC1tZW51LnRzeD8xYjI1Il0sIm5hbWVzIjpbIkF1dGhvcml6ZWRNZW51Iiwib25Mb2dvdXQiLCJBVVRIT1JJWkVEX01FTlVfSVRFTVMiLCJtYXAiLCJpdGVtIiwiaWR4IiwiaHJlZiIsImRlZmF1bHRNZXNzYWdlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTU8sSUFBTUEsY0FBK0IsR0FBRyxTQUFsQ0EsY0FBa0MsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDL0Qsc0JBQ0U7QUFBQSxlQUNHQyxzRUFBcUIsQ0FBQ0MsR0FBdEIsQ0FBMEIsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQO0FBQUEsMEJBQ3pCLHFFQUFDLDBEQUFEO0FBRUUsaUJBQVMsRUFBQyxXQUZaO0FBR0UsWUFBSSxFQUFFRCxJQUFJLENBQUNFLElBSGI7QUFJRSxhQUFLLEVBQUVGLElBQUksQ0FBQ0csY0FKZDtBQUtFLGNBQU0sRUFBRUgsSUFBSSxDQUFDSTtBQUxmLFNBQ09ILEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR5QjtBQUFBLEtBQTFCLENBREgsZUFVRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQTJCLGFBQU8sRUFBRUosUUFBcEM7QUFBQSw2QkFDRTtBQUFBLCtCQUNFO0FBQUEsaUNBQ0UscUVBQUMsMkRBQUQ7QUFBa0IsY0FBRSxFQUFDLGVBQXJCO0FBQXFDLDBCQUFjLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUEsa0JBREY7QUFvQkQsQ0FyQk07S0FBTUQsYyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xheW91dC9oZWFkZXIvbWVudS9hdXRob3JpemVkLW1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBOYXZMaW5rIGZyb20gJy4uLy4uL25hdi1saW5rL25hdi1saW5rJztcbmltcG9ydCB7IEFVVEhPUklaRURfTUVOVV9JVEVNUyB9IGZyb20gJy4uL3NpdGUtbmF2aWdhdGlvbic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uTG9nb3V0OiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhvcml6ZWRNZW51OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBvbkxvZ291dCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtBVVRIT1JJWkVEX01FTlVfSVRFTVMubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIlxuICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cbiAgICAgICAgICBsYWJlbD17aXRlbS5kZWZhdWx0TWVzc2FnZX1cbiAgICAgICAgICBpbnRsSWQ9e2l0ZW0uaWR9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgb25DbGljaz17b25Mb2dvdXR9PlxuICAgICAgICA8YT5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwibmF2bGlua0xvZ291dFwiIGRlZmF1bHRNZXNzYWdlPVwiTG9nb3V0XCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/header/menu/authorized-menu.tsx\n");

/***/ })

}]);