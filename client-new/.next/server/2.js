exports.ids = [2];
exports.modules = {

/***/ "./src/components/Layout/header/menu/auth-menu.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Layout/header/menu/auth-menu.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Others_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Others/button/button */ "./src/components/Others/button/button.tsx");
/* harmony import */ var _popover_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../popover/popover */ "./src/components/Layout/popover/popover.tsx");
/* harmony import */ var _authorized_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorized-menu */ "./src/components/Layout/header/menu/authorized-menu.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Layout\\header\\menu\\auth-menu.tsx";





const AuthMenu = ({
  isAuthenticated,
  onJoin,
  onLogout,
  avatar
}) => {
  return !isAuthenticated ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Others_button_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    onClick: onJoin,
    children: "Signup    "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_popover_popover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    direction: "right",
    className: "user-pages-dropdown",
    handler: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: avatar,
      alt: "user"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 16
    }, undefined),
    content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authorized_menu__WEBPACK_IMPORTED_MODULE_4__["AuthorizedMenu"], {
      onLogout: onLogout
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 16
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthMenu);

/***/ }),

/***/ "./src/components/Layout/header/menu/authorized-menu.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Layout/header/menu/authorized-menu.tsx ***!
  \***************************************************************/
/*! exports provided: AuthorizedMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizedMenu", function() { return AuthorizedMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_link_nav_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nav-link/nav-link */ "./src/components/Layout/nav-link/nav-link.tsx");
/* harmony import */ var _site_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../site-navigation */ "./src/components/Layout/header/site-navigation.ts");


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\Layout\\header\\menu\\authorized-menu.tsx";



const AuthorizedMenu = ({
  onLogout
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [_site_navigation__WEBPACK_IMPORTED_MODULE_3__["AUTHORIZED_MENU_ITEMS"].map((item, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_nav_link_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "menu-item",
      href: item.href,
      label: item.defaultMessage,
      intlId: item.id
    }, idx, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "menu-item",
      onClick: onLogout,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL21lbnUvYXV0aC1tZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL21lbnUvYXV0aG9yaXplZC1tZW51LnRzeCJdLCJuYW1lcyI6WyJBdXRoTWVudSIsImlzQXV0aGVudGljYXRlZCIsIm9uSm9pbiIsIm9uTG9nb3V0IiwiYXZhdGFyIiwiQXV0aG9yaXplZE1lbnUiLCJBVVRIT1JJWkVEX01FTlVfSVRFTVMiLCJtYXAiLCJpdGVtIiwiaWR4IiwiaHJlZiIsImRlZmF1bHRNZXNzYWdlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDLGlCQUFGO0FBQW1CQyxRQUFuQjtBQUEyQkMsVUFBM0I7QUFBcUNDO0FBQXJDLENBQUQsS0FBMEQ7QUFDekUsU0FBTyxDQUFDSCxlQUFELGdCQUNMLHFFQUFDLDREQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRUMsTUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESyxnQkFJTCxxRUFBQyx3REFBRDtBQUNFLGFBQVMsRUFBQyxPQURaO0FBRUUsYUFBUyxFQUFDLHFCQUZaO0FBR0UsV0FBTyxlQUFFO0FBQUssU0FBRyxFQUFFRSxNQUFWO0FBQWtCLFNBQUcsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhYO0FBSUUsV0FBTyxlQUFFLHFFQUFDLCtEQUFEO0FBQWdCLGNBQVEsRUFBRUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQVdELENBWkQ7O0FBYWVILHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQU1PLE1BQU1LLGNBQStCLEdBQUcsQ0FBQztBQUFDRjtBQUFELENBQUQsS0FBZ0I7QUFDM0Qsc0JBQ0k7QUFBQSxlQUNLRyxzRUFBcUIsQ0FBQ0MsR0FBdEIsQ0FBMEIsQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLGtCQUN2QixxRUFBQywwREFBRDtBQUVJLGVBQVMsRUFBQyxXQUZkO0FBR0ksVUFBSSxFQUFFRCxJQUFJLENBQUNFLElBSGY7QUFJSSxXQUFLLEVBQUVGLElBQUksQ0FBQ0csY0FKaEI7QUFLSSxZQUFNLEVBQUVILElBQUksQ0FBQ0k7QUFMakIsT0FDU0gsR0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURILENBREwsZUFVSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQTJCLGFBQU8sRUFBRU4sUUFBcEM7QUFBQSw2QkFDSTtBQUFBLCtCQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVko7QUFBQSxrQkFESjtBQW9CSCxDQXJCTSxDIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9PdGhlcnMvYnV0dG9uL2J1dHRvbic7XHJcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4uLy4uL3BvcG92ZXIvcG9wb3Zlcic7XHJcbmltcG9ydCB7IEF1dGhvcml6ZWRNZW51IH0gZnJvbSAnLi9hdXRob3JpemVkLW1lbnUnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgb25Kb2luOiAoKSA9PiB2b2lkO1xyXG4gIG9uTG9nb3V0OiAoKSA9PiB2b2lkO1xyXG4gIGF2YXRhcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBBdXRoTWVudSA9ICh7IGlzQXV0aGVudGljYXRlZCwgb25Kb2luLCBvbkxvZ291dCwgYXZhdGFyIH06IFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuICFpc0F1dGhlbnRpY2F0ZWQgPyAoXHJcbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17b25Kb2lufT5cclxuICAgICAgU2lnbnVwICAgIDwvQnV0dG9uPlxyXG4gICkgOiAoXHJcbiAgICA8UG9wb3ZlclxyXG4gICAgICBkaXJlY3Rpb249XCJyaWdodFwiXHJcbiAgICAgIGNsYXNzTmFtZT1cInVzZXItcGFnZXMtZHJvcGRvd25cIlxyXG4gICAgICBoYW5kbGVyPXs8aW1nIHNyYz17YXZhdGFyfSBhbHQ9XCJ1c2VyXCIgLz59XHJcbiAgICAgIGNvbnRlbnQ9ezxBdXRob3JpemVkTWVudSBvbkxvZ291dD17b25Mb2dvdXR9IC8+fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdXRoTWVudTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdkxpbmsgZnJvbSAnLi4vLi4vbmF2LWxpbmsvbmF2LWxpbmsnO1xyXG5pbXBvcnQge0FVVEhPUklaRURfTUVOVV9JVEVNU30gZnJvbSAnLi4vc2l0ZS1uYXZpZ2F0aW9uJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBvbkxvZ291dDogKCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRob3JpemVkTWVudTogUmVhY3QuRkM8UHJvcHM+ID0gKHtvbkxvZ291dH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge0FVVEhPUklaRURfTUVOVV9JVEVNUy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbS5kZWZhdWx0TWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBpbnRsSWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBvbkNsaWNrPXtvbkxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9