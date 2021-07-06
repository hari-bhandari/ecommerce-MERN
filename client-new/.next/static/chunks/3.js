(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./src/components/Layout/header/menu/auth-menu.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Layout/header/menu/auth-menu.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Others_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Others/button/button */ "./src/components/Others/button/button.tsx");
/* harmony import */ var _popover_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../popover/popover */ "./src/components/Layout/popover/popover.tsx");
/* harmony import */ var _authorized_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorized-menu */ "./src/components/Layout/header/menu/authorized-menu.tsx");


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Layout\\header\\menu\\auth-menu.tsx",
    _this = undefined;






var AuthMenu = function AuthMenu(_ref) {
  var isAuthenticated = _ref.isAuthenticated,
      onJoin = _ref.onJoin,
      onLogout = _ref.onLogout,
      avatar = _ref.avatar;
  return !isAuthenticated ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Others_button_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    onClick: onJoin,
    children: "Signup    "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_popover_popover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    direction: "right",
    className: "user-pages-dropdown",
    handler: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: avatar,
      alt: "user"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 16
    }, _this),
    content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authorized_menu__WEBPACK_IMPORTED_MODULE_4__["AuthorizedMenu"], {
      onLogout: onLogout
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 16
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_c = AuthMenu;
/* harmony default export */ __webpack_exports__["default"] = (AuthMenu);

var _c;

$RefreshReg$(_c, "AuthMenu");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Layout/header/menu/authorized-menu.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Layout/header/menu/authorized-menu.tsx ***!
  \***************************************************************/
/*! exports provided: AuthorizedMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizedMenu", function() { return AuthorizedMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_link_nav_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nav-link/nav-link */ "./src/components/Layout/nav-link/nav-link.tsx");
/* harmony import */ var _site_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../site-navigation */ "./src/components/Layout/header/site-navigation.ts");



var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Layout\\header\\menu\\authorized-menu.tsx",
    _this = undefined;




var AuthorizedMenu = function AuthorizedMenu(_ref) {
  var onLogout = _ref.onLogout;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [_site_navigation__WEBPACK_IMPORTED_MODULE_3__["AUTHORIZED_MENU_ITEMS"].map(function (item, idx) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_nav_link_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "menu-item",
        href: item.href,
        label: item.defaultMessage,
        intlId: item.id
      }, idx, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "menu-item",
      onClick: onLogout,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};
_c = AuthorizedMenu;

var _c;

$RefreshReg$(_c, "AuthorizedMenu");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2hlYWRlci9tZW51L2F1dGgtbWVudS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9oZWFkZXIvbWVudS9hdXRob3JpemVkLW1lbnUudHN4Il0sIm5hbWVzIjpbIkF1dGhNZW51IiwiaXNBdXRoZW50aWNhdGVkIiwib25Kb2luIiwib25Mb2dvdXQiLCJhdmF0YXIiLCJBdXRob3JpemVkTWVudSIsIkFVVEhPUklaRURfTUVOVV9JVEVNUyIsIm1hcCIsIml0ZW0iLCJpZHgiLCJocmVmIiwiZGVmYXVsdE1lc3NhZ2UiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUEwRDtBQUFBLE1BQXZEQyxlQUF1RCxRQUF2REEsZUFBdUQ7QUFBQSxNQUF0Q0MsTUFBc0MsUUFBdENBLE1BQXNDO0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7QUFDekUsU0FBTyxDQUFDSCxlQUFELGdCQUNMLHFFQUFDLDREQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRUMsTUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESyxnQkFJTCxxRUFBQyx3REFBRDtBQUNFLGFBQVMsRUFBQyxPQURaO0FBRUUsYUFBUyxFQUFDLHFCQUZaO0FBR0UsV0FBTyxlQUFFO0FBQUssU0FBRyxFQUFFRSxNQUFWO0FBQWtCLFNBQUcsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSFg7QUFJRSxXQUFPLGVBQUUscUVBQUMsK0RBQUQ7QUFBZ0IsY0FBUSxFQUFFRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUpGO0FBV0QsQ0FaRDs7S0FBTUgsUTtBQWFTQSx1RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQU1PLElBQU1LLGNBQStCLEdBQUcsU0FBbENBLGNBQWtDLE9BQWdCO0FBQUEsTUFBZEYsUUFBYyxRQUFkQSxRQUFjO0FBQzNELHNCQUNJO0FBQUEsZUFDS0csc0VBQXFCLENBQUNDLEdBQXRCLENBQTBCLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLDBCQUN2QixxRUFBQywwREFBRDtBQUVJLGlCQUFTLEVBQUMsV0FGZDtBQUdJLFlBQUksRUFBRUQsSUFBSSxDQUFDRSxJQUhmO0FBSUksYUFBSyxFQUFFRixJQUFJLENBQUNHLGNBSmhCO0FBS0ksY0FBTSxFQUFFSCxJQUFJLENBQUNJO0FBTGpCLFNBQ1NILEdBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR1QjtBQUFBLEtBQTFCLENBREwsZUFVSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQTJCLGFBQU8sRUFBRU4sUUFBcEM7QUFBQSw2QkFDSTtBQUFBLCtCQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSjtBQUFBLGtCQURKO0FBb0JILENBckJNO0tBQU1FLGMiLCJmaWxlIjoic3RhdGljL2NodW5rcy8zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vT3RoZXJzL2J1dHRvbi9idXR0b24nO1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuLi8uLi9wb3BvdmVyL3BvcG92ZXInO1xyXG5pbXBvcnQgeyBBdXRob3JpemVkTWVudSB9IGZyb20gJy4vYXV0aG9yaXplZC1tZW51JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gIG9uSm9pbjogKCkgPT4gdm9pZDtcclxuICBvbkxvZ291dDogKCkgPT4gdm9pZDtcclxuICBhdmF0YXI6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQXV0aE1lbnUgPSAoeyBpc0F1dGhlbnRpY2F0ZWQsIG9uSm9pbiwgb25Mb2dvdXQsIGF2YXRhciB9OiBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAhaXNBdXRoZW50aWNhdGVkID8gKFxyXG4gICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uSm9pbn0+XHJcbiAgICAgIFNpZ251cCAgICA8L0J1dHRvbj5cclxuICApIDogKFxyXG4gICAgPFBvcG92ZXJcclxuICAgICAgZGlyZWN0aW9uPVwicmlnaHRcIlxyXG4gICAgICBjbGFzc05hbWU9XCJ1c2VyLXBhZ2VzLWRyb3Bkb3duXCJcclxuICAgICAgaGFuZGxlcj17PGltZyBzcmM9e2F2YXRhcn0gYWx0PVwidXNlclwiIC8+fVxyXG4gICAgICBjb250ZW50PXs8QXV0aG9yaXplZE1lbnUgb25Mb2dvdXQ9e29uTG9nb3V0fSAvPn1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aE1lbnU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZMaW5rIGZyb20gJy4uLy4uL25hdi1saW5rL25hdi1saW5rJztcclxuaW1wb3J0IHtBVVRIT1JJWkVEX01FTlVfSVRFTVN9IGZyb20gJy4uL3NpdGUtbmF2aWdhdGlvbic7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgb25Mb2dvdXQ6ICgpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aG9yaXplZE1lbnU6IFJlYWN0LkZDPFByb3BzPiA9ICh7b25Mb2dvdXR9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtBVVRIT1JJWkVEX01FTlVfSVRFTVMubWFwKChpdGVtLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0uZGVmYXVsdE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgaW50bElkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgb25DbGljaz17b25Mb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==