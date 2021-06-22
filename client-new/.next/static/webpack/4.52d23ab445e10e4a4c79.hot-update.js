webpackHotUpdate_N_E(4,{

/***/ "./src/components/Layout/header/menu/auth-menu.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Layout/header/menu/auth-menu.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Others_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Others/button/button */ \"./src/components/Others/button/button.tsx\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _popover_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popover/popover */ \"./src/components/Layout/popover/popover.tsx\");\n/* harmony import */ var _authorized_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authorized-menu */ \"./src/components/Layout/header/menu/authorized-menu.tsx\");\n\n\nvar _jsxFileName = \"/Users/hari/WebstormProjects/ecommerce-MERN/client-new/src/components/Layout/header/menu/auth-menu.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar AuthMenu = function AuthMenu(_ref) {\n  var isAuthenticated = _ref.isAuthenticated,\n      onJoin = _ref.onJoin,\n      onLogout = _ref.onLogout,\n      avatar = _ref.avatar;\n  return !isAuthenticated ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Others_button_button__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    variant: \"primary\",\n    onClick: onJoin,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n      id: \"joinButton\",\n      defaultMessage: \"join\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_popover_popover__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    direction: \"right\",\n    className: \"user-pages-dropdown\",\n    handler: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: avatar,\n      alt: \"user\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 16\n    }, _this),\n    content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_authorized_menu__WEBPACK_IMPORTED_MODULE_5__[\"AuthorizedMenu\"], {\n      onLogout: onLogout\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 16\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = AuthMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2hlYWRlci9tZW51L2F1dGgtbWVudS50c3g/MjcxYSJdLCJuYW1lcyI6WyJBdXRoTWVudSIsImlzQXV0aGVudGljYXRlZCIsIm9uSm9pbiIsIm9uTG9nb3V0IiwiYXZhdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBMEQ7QUFBQSxNQUF2REMsZUFBdUQsUUFBdkRBLGVBQXVEO0FBQUEsTUFBdENDLE1BQXNDLFFBQXRDQSxNQUFzQztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQ3pFLFNBQU8sQ0FBQ0gsZUFBRCxnQkFDTCxxRUFBQyw0REFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVDLE1BQW5DO0FBQUEsMkJBQ0UscUVBQUMsMkRBQUQ7QUFBa0IsUUFBRSxFQUFDLFlBQXJCO0FBQWtDLG9CQUFjLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESyxnQkFLTCxxRUFBQyx3REFBRDtBQUNFLGFBQVMsRUFBQyxPQURaO0FBRUUsYUFBUyxFQUFDLHFCQUZaO0FBR0UsV0FBTyxlQUFFO0FBQUssU0FBRyxFQUFFRSxNQUFWO0FBQWtCLFNBQUcsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSFg7QUFJRSxXQUFPLGVBQUUscUVBQUMsK0RBQUQ7QUFBZ0IsY0FBUSxFQUFFRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUxGO0FBWUQsQ0FiRDs7S0FBTUgsUTtBQWNTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xheW91dC9oZWFkZXIvbWVudS9hdXRoLW1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL090aGVycy9idXR0b24vYnV0dG9uJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4uLy4uL3BvcG92ZXIvcG9wb3Zlcic7XG5pbXBvcnQgeyBBdXRob3JpemVkTWVudSB9IGZyb20gJy4vYXV0aG9yaXplZC1tZW51JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICBvbkpvaW46ICgpID0+IHZvaWQ7XG4gIG9uTG9nb3V0OiAoKSA9PiB2b2lkO1xuICBhdmF0YXI6IHN0cmluZztcbn1cblxuY29uc3QgQXV0aE1lbnUgPSAoeyBpc0F1dGhlbnRpY2F0ZWQsIG9uSm9pbiwgb25Mb2dvdXQsIGF2YXRhciB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gIWlzQXV0aGVudGljYXRlZCA/IChcbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17b25Kb2lufT5cbiAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiam9pbkJ1dHRvblwiIGRlZmF1bHRNZXNzYWdlPVwiam9pblwiIC8+XG4gICAgPC9CdXR0b24+XG4gICkgOiAoXG4gICAgPFBvcG92ZXJcbiAgICAgIGRpcmVjdGlvbj1cInJpZ2h0XCJcbiAgICAgIGNsYXNzTmFtZT1cInVzZXItcGFnZXMtZHJvcGRvd25cIlxuICAgICAgaGFuZGxlcj17PGltZyBzcmM9e2F2YXRhcn0gYWx0PVwidXNlclwiIC8+fVxuICAgICAgY29udGVudD17PEF1dGhvcml6ZWRNZW51IG9uTG9nb3V0PXtvbkxvZ291dH0gLz59XG4gICAgLz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBdXRoTWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/header/menu/auth-menu.tsx\n");

/***/ })

})