exports.ids = [1];
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
      label: item.defaultMessage
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
          lineNumber: 22,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL21lbnUvYXV0aC1tZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaGVhZGVyL21lbnUvYXV0aG9yaXplZC1tZW51LnRzeCJdLCJuYW1lcyI6WyJBdXRoTWVudSIsImlzQXV0aGVudGljYXRlZCIsIm9uSm9pbiIsIm9uTG9nb3V0IiwiYXZhdGFyIiwiQXV0aG9yaXplZE1lbnUiLCJBVVRIT1JJWkVEX01FTlVfSVRFTVMiLCJtYXAiLCJpdGVtIiwiaWR4IiwiaHJlZiIsImRlZmF1bHRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQyxpQkFBRjtBQUFtQkMsUUFBbkI7QUFBMkJDLFVBQTNCO0FBQXFDQztBQUFyQyxDQUFELEtBQTBEO0FBQ3pFLFNBQU8sQ0FBQ0gsZUFBRCxnQkFDTCxxRUFBQyw0REFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVDLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREssZ0JBSUwscUVBQUMsd0RBQUQ7QUFDRSxhQUFTLEVBQUMsT0FEWjtBQUVFLGFBQVMsRUFBQyxxQkFGWjtBQUdFLFdBQU8sZUFBRTtBQUFLLFNBQUcsRUFBRUUsTUFBVjtBQUFrQixTQUFHLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIWDtBQUlFLFdBQU8sZUFBRSxxRUFBQywrREFBRDtBQUFnQixjQUFRLEVBQUVEO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFXRCxDQVpEOztBQWFlSCx1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFNTyxNQUFNSyxjQUErQixHQUFHLENBQUM7QUFBQ0Y7QUFBRCxDQUFELEtBQWdCO0FBQzNELHNCQUNJO0FBQUEsZUFDS0csc0VBQXFCLENBQUNDLEdBQXRCLENBQTBCLENBQUNDLElBQUQsRUFBT0MsR0FBUCxrQkFDdkIscUVBQUMsMERBQUQ7QUFFSSxlQUFTLEVBQUMsV0FGZDtBQUdJLFVBQUksRUFBRUQsSUFBSSxDQUFDRSxJQUhmO0FBSUksV0FBSyxFQUFFRixJQUFJLENBQUNHO0FBSmhCLE9BQ1NGLEdBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESCxDQURMLGVBU0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixhQUFPLEVBQUVOLFFBQXBDO0FBQUEsNkJBQ0k7QUFBQSwrQkFDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUEsa0JBREo7QUFtQkgsQ0FwQk0sQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vT3RoZXJzL2J1dHRvbi9idXR0b24nO1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuLi8uLi9wb3BvdmVyL3BvcG92ZXInO1xyXG5pbXBvcnQgeyBBdXRob3JpemVkTWVudSB9IGZyb20gJy4vYXV0aG9yaXplZC1tZW51JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gIG9uSm9pbjogKCkgPT4gdm9pZDtcclxuICBvbkxvZ291dDogKCkgPT4gdm9pZDtcclxuICBhdmF0YXI6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQXV0aE1lbnUgPSAoeyBpc0F1dGhlbnRpY2F0ZWQsIG9uSm9pbiwgb25Mb2dvdXQsIGF2YXRhciB9OiBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAhaXNBdXRoZW50aWNhdGVkID8gKFxyXG4gICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uSm9pbn0+XHJcbiAgICAgIFNpZ251cCAgICA8L0J1dHRvbj5cclxuICApIDogKFxyXG4gICAgPFBvcG92ZXJcclxuICAgICAgZGlyZWN0aW9uPVwicmlnaHRcIlxyXG4gICAgICBjbGFzc05hbWU9XCJ1c2VyLXBhZ2VzLWRyb3Bkb3duXCJcclxuICAgICAgaGFuZGxlcj17PGltZyBzcmM9e2F2YXRhcn0gYWx0PVwidXNlclwiIC8+fVxyXG4gICAgICBjb250ZW50PXs8QXV0aG9yaXplZE1lbnUgb25Mb2dvdXQ9e29uTG9nb3V0fSAvPn1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aE1lbnU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZMaW5rIGZyb20gJy4uLy4uL25hdi1saW5rL25hdi1saW5rJztcclxuaW1wb3J0IHtBVVRIT1JJWkVEX01FTlVfSVRFTVN9IGZyb20gJy4uL3NpdGUtbmF2aWdhdGlvbic7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgb25Mb2dvdXQ6ICgpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aG9yaXplZE1lbnU6IFJlYWN0LkZDPFByb3BzPiA9ICh7b25Mb2dvdXR9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtBVVRIT1JJWkVEX01FTlVfSVRFTVMubWFwKChpdGVtLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0uZGVmYXVsdE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBvbkNsaWNrPXtvbkxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9