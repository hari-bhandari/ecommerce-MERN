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
        label: item.defaultMessage
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
          lineNumber: 22,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2hlYWRlci9tZW51L2F1dGgtbWVudS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9oZWFkZXIvbWVudS9hdXRob3JpemVkLW1lbnUudHN4Il0sIm5hbWVzIjpbIkF1dGhNZW51IiwiaXNBdXRoZW50aWNhdGVkIiwib25Kb2luIiwib25Mb2dvdXQiLCJhdmF0YXIiLCJBdXRob3JpemVkTWVudSIsIkFVVEhPUklaRURfTUVOVV9JVEVNUyIsIm1hcCIsIml0ZW0iLCJpZHgiLCJocmVmIiwiZGVmYXVsdE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBMEQ7QUFBQSxNQUF2REMsZUFBdUQsUUFBdkRBLGVBQXVEO0FBQUEsTUFBdENDLE1BQXNDLFFBQXRDQSxNQUFzQztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQ3pFLFNBQU8sQ0FBQ0gsZUFBRCxnQkFDTCxxRUFBQyw0REFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVDLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREssZ0JBSUwscUVBQUMsd0RBQUQ7QUFDRSxhQUFTLEVBQUMsT0FEWjtBQUVFLGFBQVMsRUFBQyxxQkFGWjtBQUdFLFdBQU8sZUFBRTtBQUFLLFNBQUcsRUFBRUUsTUFBVjtBQUFrQixTQUFHLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhYO0FBSUUsV0FBTyxlQUFFLHFFQUFDLCtEQUFEO0FBQWdCLGNBQVEsRUFBRUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKRjtBQVdELENBWkQ7O0tBQU1ILFE7QUFhU0EsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFNTyxJQUFNSyxjQUErQixHQUFHLFNBQWxDQSxjQUFrQyxPQUFnQjtBQUFBLE1BQWRGLFFBQWMsUUFBZEEsUUFBYztBQUMzRCxzQkFDSTtBQUFBLGVBQ0tHLHNFQUFxQixDQUFDQyxHQUF0QixDQUEwQixVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSwwQkFDdkIscUVBQUMsMERBQUQ7QUFFSSxpQkFBUyxFQUFDLFdBRmQ7QUFHSSxZQUFJLEVBQUVELElBQUksQ0FBQ0UsSUFIZjtBQUlJLGFBQUssRUFBRUYsSUFBSSxDQUFDRztBQUpoQixTQUNTRixHQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEdUI7QUFBQSxLQUExQixDQURMLGVBU0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixhQUFPLEVBQUVOLFFBQXBDO0FBQUEsNkJBQ0k7QUFBQSwrQkFDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEo7QUFBQSxrQkFESjtBQW1CSCxDQXBCTTtLQUFNRSxjIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL090aGVycy9idXR0b24vYnV0dG9uJztcclxuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi4vLi4vcG9wb3Zlci9wb3BvdmVyJztcclxuaW1wb3J0IHsgQXV0aG9yaXplZE1lbnUgfSBmcm9tICcuL2F1dGhvcml6ZWQtbWVudSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICBvbkpvaW46ICgpID0+IHZvaWQ7XHJcbiAgb25Mb2dvdXQ6ICgpID0+IHZvaWQ7XHJcbiAgYXZhdGFyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEF1dGhNZW51ID0gKHsgaXNBdXRoZW50aWNhdGVkLCBvbkpvaW4sIG9uTG9nb3V0LCBhdmF0YXIgfTogUHJvcHMpID0+IHtcclxuICByZXR1cm4gIWlzQXV0aGVudGljYXRlZCA/IChcclxuICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtvbkpvaW59PlxyXG4gICAgICBTaWdudXAgICAgPC9CdXR0b24+XHJcbiAgKSA6IChcclxuICAgIDxQb3BvdmVyXHJcbiAgICAgIGRpcmVjdGlvbj1cInJpZ2h0XCJcclxuICAgICAgY2xhc3NOYW1lPVwidXNlci1wYWdlcy1kcm9wZG93blwiXHJcbiAgICAgIGhhbmRsZXI9ezxpbWcgc3JjPXthdmF0YXJ9IGFsdD1cInVzZXJcIiAvPn1cclxuICAgICAgY29udGVudD17PEF1dGhvcml6ZWRNZW51IG9uTG9nb3V0PXtvbkxvZ291dH0gLz59XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhNZW51O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2TGluayBmcm9tICcuLi8uLi9uYXYtbGluay9uYXYtbGluayc7XHJcbmltcG9ydCB7QVVUSE9SSVpFRF9NRU5VX0lURU1TfSBmcm9tICcuLi9zaXRlLW5hdmlnYXRpb24nO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIG9uTG9nb3V0OiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhvcml6ZWRNZW51OiBSZWFjdC5GQzxQcm9wcz4gPSAoe29uTG9nb3V0fSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7QVVUSE9SSVpFRF9NRU5VX0lURU1TLm1hcCgoaXRlbSwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmRlZmF1bHRNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgb25DbGljaz17b25Mb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==