exports.ids = [2];
exports.modules = {

/***/ "./src/OpenModalFunctions.tsx":
/*!************************************!*\
  !*** ./src/OpenModalFunctions.tsx ***!
  \************************************/
/*! exports provided: OpenAuthTab, OpenCartModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenAuthTab", function() { return OpenAuthTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCartModal", function() { return OpenCartModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_authentication_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/features/authentication-form */ "./src/features/authentication-form/index.tsx");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_cart_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/features/cart/cart */ "./src/features/cart/cart.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\OpenModalFunctions.tsx";




const OpenAuthTab = () => Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["openModal"])({
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
const OpenCartModal = () => Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["openModal"])({
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
  closeComponent: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 27
  }, undefined),
  componentProps: {
    onCloseBtnClick: _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["closeModal"],
    scrollbarHeight: 330
  }
});

/***/ }),

/***/ "./src/assets/icons/CloseIcon.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/CloseIcon.tsx ***!
  \****************************************/
/*! exports provided: CloseIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\CloseIcon.tsx";

const CloseIcon = () => {
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
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/Facebook.tsx":
/*!***************************************!*\
  !*** ./src/assets/icons/Facebook.tsx ***!
  \***************************************/
/*! exports provided: Facebook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\Facebook.tsx";

const Facebook = ({
  color = 'currentColor',
  width = '17px',
  height = '17px'
}) => {
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
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/Google.tsx":
/*!*************************************!*\
  !*** ./src/assets/icons/Google.tsx ***!
  \*************************************/
/*! exports provided: Google */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Google", function() { return Google; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\Google.tsx";

const Google = ({
  color = 'currentColor',
  width = '17px',
  height = '17px'
}) => {
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
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/NoCartBag.tsx":
/*!****************************************!*\
  !*** ./src/assets/icons/NoCartBag.tsx ***!
  \****************************************/
/*! exports provided: NoCartBag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoCartBag", function() { return NoCartBag; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\NoCartBag.tsx";

const NoCartBag = () => {
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: "1",
          stopColor: "#009e7f"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18691",
        "data-name": "Path 18691",
        d: "M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z",
        transform: "translate(1403 381)",
        fill: "#009e7f"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Rectangle_1852",
        "data-name": "Rectangle 1852",
        d: "M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z",
        transform: "translate(1403 381)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Rectangle_1853",
        "data-name": "Rectangle 1853",
        d: "M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z",
        transform: "translate(1403 381)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18685",
        "data-name": "Path 18685",
        d: "M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z",
        transform: "translate(1056.69 164.944)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18686",
        "data-name": "Path 18686",
        d: "M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z",
        transform: "translate(1057.793 95.684)",
        fill: "#009e7f"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18687",
        "data-name": "Path 18687",
        d: "M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
        transform: "translate(1060.579 -35.703)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18688",
        "data-name": "Path 18688",
        d: "M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
        transform: "translate(1060.566 -35.704)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18689",
        "data-name": "Path 18689",
        d: "M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
        transform: "translate(970.304 -35.704)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18690",
        "data-name": "Path 18690",
        d: "M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
        transform: "translate(970.318 -35.703)",
        fill: "#006854"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18692",
        "data-name": "Path 18692",
        d: "M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z",
        transform: "translate(1292.301 101.536)",
        fill: "url(#linear-gradient)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Path_18693",
        "data-name": "Path 18693",
        d: "M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z",
        transform: "translate(1118.301 101.536)",
        fill: "url(#linear-gradient)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/ShoppingBag.tsx":
/*!******************************************!*\
  !*** ./src/assets/icons/ShoppingBag.tsx ***!
  \******************************************/
/*! exports provided: ShoppingBag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBag", function() { return ShoppingBag; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\ShoppingBag.tsx";

const ShoppingBag = () => {
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
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
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
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/assets/icons/ShoppingBagLarge.tsx":
/*!***********************************************!*\
  !*** ./src/assets/icons/ShoppingBagLarge.tsx ***!
  \***********************************************/
/*! exports provided: ShoppingBagLarge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBagLarge", function() { return ShoppingBagLarge; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\assets\\icons\\ShoppingBagLarge.tsx";

const ShoppingBagLarge = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
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
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
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
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/axiosHeaders.tsx":
/*!******************************!*\
  !*** ./src/axiosHeaders.tsx ***!
  \******************************/
/*! exports provided: JSONConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONConfig", function() { return JSONConfig; });
const JSONConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
};

/***/ }),

/***/ "./src/components/Others/forms/input.tsx":
/*!***********************************************!*\
  !*** ./src/components/Others/forms/input.tsx ***!
  \***********************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
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

/***/ }),

/***/ "./src/components/cart/item/cart-item.style.tsx":
/*!******************************************************!*\
  !*** ./src/components/cart/item/cart-item.style.tsx ***!
  \******************************************************/
/*! exports provided: ItemBox, Information, Image, Name, Price, Weight, Total, RemoveButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemBox", function() { return ItemBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Information", function() { return Information; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Price", function() { return Price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weight", function() { return Weight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Total", function() { return Total; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveButton", function() { return RemoveButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "@styled-system/css");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);


const ItemBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  fontSize: 'base',
  fontWeight: 'bold',
  py: 15,
  px: 25,
  borderBottom: `1px solid`,
  borderBottomColor: 'gray.200'
}), {
  display: 'flex',
  alignItems: 'center'
});
const Information = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '15px'
});
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img({
  width: 60,
  height: 60,
  objectFit: 'cover',
  margin: '0 15px'
});
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  fontWeight: 'md',
  color: 'text.bold',
  mb: '0px',
  lineHeight: 1.5
}));
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  color: 'primary.regular',
  mt: '10px',
  mb: '10px'
}));
const Weight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  fontSize: 'sm',
  fontWeight: 'regular',
  color: 'text.regular',
  mb: '5px'
}));
const Total = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  color: 'text.bold',
  ml: 'auto'
}));
const RemoveButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button({
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

/***/ }),

/***/ "./src/components/cart/item/cart-item.tsx":
/*!************************************************!*\
  !*** ./src/components/cart/item/cart-item.tsx ***!
  \************************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _counter_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../counter/counter */ "./src/components/cart/counter/counter.tsx");
/* harmony import */ var _assets_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/CloseIcon */ "./src/assets/icons/CloseIcon.tsx");
/* harmony import */ var _cart_item_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-item.style */ "./src/components/cart/item/cart-item.style.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\cart\\item\\cart-item.tsx";




const CartItem = ({
  data,
  onDecrement,
  onIncrement,
  onRemove
}) => {
  const {
    name,
    thumbImage,
    price,
    salePrice,
    unit,
    countInStock
  } = data;
  const displayPrice = salePrice ? salePrice : price;
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
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["Image"], {
      src: thumbImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["Information"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["Name"], {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["Price"], {
        children: displayPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["Weight"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["Total"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_item_style__WEBPACK_IMPORTED_MODULE_4__["RemoveButton"], {
      onClick: onRemove,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_3__["CloseIcon"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/cart/popup/cart-popup-button.tsx":
/*!*********************************************************!*\
  !*** ./src/components/cart/popup/cart-popup-button.tsx ***!
  \*********************************************************/
/*! exports provided: BoxedCartButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxedCartButton", function() { return BoxedCartButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cart_popup_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-popup.style */ "./src/components/cart/popup/cart-popup.style.tsx");
/* harmony import */ var _assets_icons_ShoppingBag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/ShoppingBag */ "./src/assets/icons/ShoppingBag.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\components\\cart\\popup\\cart-popup-button.tsx";




const CartPopupButton = ({
  itemCount,
  itemPostfix = 'items',
  price,
  pricePrefix = '$',
  style,
  onClick,
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["CartPopupButtonStyled"], {
  style: style,
  onClick: onClick,
  className: className,
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["ButtonImgBox"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_ShoppingBag__WEBPACK_IMPORTED_MODULE_3__["ShoppingBag"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["ItemCount"], {
    children: [itemCount, " ", itemPostfix]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["PriceBox"], {
    children: [pricePrefix, parseFloat(`${price}`).toFixed(2)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 32,
  columnNumber: 3
}, undefined);

const BoxedCartButton = ({
  itemCount,
  itemPostfix = 'items',
  price,
  pricePrefix = '$',
  style,
  onClick,
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["CartPopupBoxButton"], {
  style: style,
  onClick: onClick,
  className: className,
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["TotalItems"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_ShoppingBag__WEBPACK_IMPORTED_MODULE_3__["ShoppingBag"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), itemCount, " ", itemPostfix]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_popup_style__WEBPACK_IMPORTED_MODULE_2__["PriceBoxAlt"], {
    children: [pricePrefix, parseFloat(`${price}`).toFixed(2)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 55,
  columnNumber: 3
}, undefined);
/* harmony default export */ __webpack_exports__["default"] = (CartPopupButton);

/***/ }),

/***/ "./src/components/cart/popup/cart-popup.style.tsx":
/*!********************************************************!*\
  !*** ./src/components/cart/popup/cart-popup.style.tsx ***!
  \********************************************************/
/*! exports provided: ButtonImgBox, CartPopupButtonStyled, ItemCount, PriceBox, CartPopupBoxButton, PriceBoxAlt, TotalItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonImgBox", function() { return ButtonImgBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPopupButtonStyled", function() { return CartPopupButtonStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCount", function() { return ItemCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceBox", function() { return PriceBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPopupBoxButton", function() { return CartPopupBoxButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceBoxAlt", function() { return PriceBoxAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalItems", function() { return TotalItems; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const CartPopupButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('button')`
  height: 60px;
  width: auto;
  display: flex;
  align-items: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009E7F')};
  padding: 0 0 0 30px;
  border-radius: 60px;
  box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 999;

  @media (max-width: 767px) {
    width: calc(100% - 60px);
    height: 45px;
    padding: 2px 2px 2px 30px;
    bottom: 30px;
    right: 30px;
  }

  @media (min-width: 581px) {
    &:not(.fixedCartPopup) {
      display: none;
    }
  }
`;
const ButtonImgBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span')`
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
`;
const ItemCount = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span')`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: 12px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  padding-left: 5px;
  padding-right: 10px;
`;
const PriceBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span')`
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.xs', '12')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009E7F')};
  margin-right: 2px;

  @media (max-width: 767px) {
    width: 90px;
    height: 100%;
    height: 41px;
    margin-left: auto;
    margin-right: 0;
  }
`;
const CartPopupBoxButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('button')`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009E7F')};
  padding: 0;
  border-radius: 30% 0% 0% 30%;
  border: #009E7F 1px solid;
  border-right: none;
  box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)')};
  outline: 0;
  cursor: pointer;
  position: fixed;
  right: 0;
  top: 50%;
  margin-top: -46px;
  z-index: 99;

  @media (max-width: 580px) {
    display: none;
  }
`;
const TotalItems = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span')`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;

  svg {
    margin-right: 10px;
  }
`;
const PriceBoxAlt = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span')`
  width: auto;
  height: 35px;
  min-width: 80px;
  overflow: hidden;
  border-radius: 15% 0% 0% 15%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009E7F')};
  margin: 0 10px 10px;
`;


/***/ }),

/***/ "./src/features/authentication-form/authentication-form.style.tsx":
/*!************************************************************************!*\
  !*** ./src/features/authentication-form/authentication-form.style.tsx ***!
  \************************************************************************/
/*! exports provided: Button, IconWrapper, Wrapper, Container, LogoWrapper, Heading, SubHeading, OfferSection, Offer, HelperText, Divider, LinkButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Others_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Others/button/button */ "./src/components/Others/button/button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return components_Others_button_button__WEBPACK_IMPORTED_MODULE_2__["Button"]; });





const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  margin-right: 6px;
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  text-align: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  max-width: 450px;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  
  padding: 40px 60px 0;

  @media (max-width: 768px) {
    padding: 40px 30px 0;
  }
`;
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-bottom: 30px;

  img {
    max-width: 160px;
  }
`;
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3`
  margin-bottom: 10px;
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.heading', 'sans-serif')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.lg', '21')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
`;
const SubHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  margin-bottom: 30px;
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};
  display: block;
`;
const OfferSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 20px;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Offer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};
  margin: 0;
`;
const HelperText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};
  margin: 0;
  text-align: center;
  width: 100%;

  a {
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.link', '#4285f4')};
    text-decoration: underline;
  }
`; // export const Input = styled.input`
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

const Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
    line-height: 1;
    background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
    z-index: 1;
    position: relative;
    padding: 0 10px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1')};
    position: absolute;
    top: 50%;
  }
`;
const LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  box-shadow: none;
  padding: 0;
  font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px - 1px);
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
  text-decoration: underline;
  cursor: pointer;
`;

/***/ }),

/***/ "./src/features/authentication-form/forgot-password.tsx":
/*!**************************************************************!*\
  !*** ./src/features/authentication-form/forgot-password.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authentication_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-form.style */ "./src/features/authentication-form/authentication-form.style.tsx");
/* harmony import */ var components_Others_forms_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Others/forms/input */ "./src/components/Others/forms/input.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\features\\authentication-form\\forgot-password.tsx";




const ForgotPasswordModal = ({
  setCurrentForm
}) => {
  const toggleSignInForm = () => {
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["SubHeading"], {
        children: "We'll send you a link to reset your password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        type: "text",
        placeholder: "Email Address or Contact No.",
        height: "48px",
        backgroundColor: "#F7F7F7",
        mb: "10px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Offer"], {
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
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ForgotPasswordModal);

/***/ }),

/***/ "./src/features/authentication-form/index.tsx":
/*!****************************************************!*\
  !*** ./src/features/authentication-form/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/features/authentication-form/login.tsx");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/features/authentication-form/register.tsx");
/* harmony import */ var _forgot_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password */ "./src/features/authentication-form/forgot-password.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\features\\authentication-form\\index.tsx";






 // @ts-ignore



const AuthenticationForm = ({
  router
}) => {
  const {
    isAuthenticated
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.globalReducer);
  const {
    0: currentForm,
    1: setCurrentForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('signUp');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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
    }, undefined);
  }

  if (currentForm === 'signUp') {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_register__WEBPACK_IMPORTED_MODULE_3__["default"], {
      setCurrentForm: setCurrentForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 12
    }, undefined);
  }

  if (currentForm === 'forgotPass') {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_forgot_password__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setCurrentForm: setCurrentForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(AuthenticationForm));

/***/ }),

/***/ "./src/features/authentication-form/login.tsx":
/*!****************************************************!*\
  !*** ./src/features/authentication-form/login.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authentication_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-form.style */ "./src/features/authentication-form/authentication-form.style.tsx");
/* harmony import */ var assets_icons_Facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/icons/Facebook */ "./src/assets/icons/Facebook.tsx");
/* harmony import */ var assets_icons_Google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/icons/Google */ "./src/assets/icons/Google.tsx");
/* harmony import */ var components_Others_forms_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Others/forms/input */ "./src/components/Others/forms/input.tsx");
/* harmony import */ var _hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useLoginForm */ "./src/hooks/useLoginForm.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/redux/actions/globalActions */ "./src/redux/actions/globalActions.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/config */ "./src/utils/config.ts");
/* harmony import */ var light_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! light-toast */ "light-toast");
/* harmony import */ var light_toast__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(light_toast__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _axiosHeaders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/axiosHeaders */ "./src/axiosHeaders.tsx");

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\features\\authentication-form\\login.tsx";



 // @ts-ignore










const SignInModal = ({
  setCurrentForm
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  const toggleSignUpForm = () => {
    setCurrentForm('signUp');
  };

  const toggleForgotPassForm = () => {
    setCurrentForm('forgotPass');
  };

  const {
    inputs,
    handleInputChange
  } = Object(_hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_6__["useLoginForm"])();

  const loginCallback = async e => {
    e.preventDefault();

    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(`${_utils_config__WEBPACK_IMPORTED_MODULE_10__["API_BASE_URL"]}/api/v1/auth/login`, {
        email: inputs.email,
        password: inputs.password
      }, _axiosHeaders__WEBPACK_IMPORTED_MODULE_12__["JSONConfig"]);
      dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_8__["login"])(data));
      localStorage.setItem('userInfo', JSON.stringify(data));
      localStorage.setItem('token', JSON.stringify(data.token));
      await dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_8__["loadUser"])());
      light_toast__WEBPACK_IMPORTED_MODULE_11___default.a.success('Successfully logged in');
    } catch (error) {
      light_toast__WEBPACK_IMPORTED_MODULE_11___default.a.fail(error.response.data.error + ', Please try again');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
        children: "Welcome Back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["SubHeading"], {
        children: "Login with your email & password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: loginCallback,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "or"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%',
          backgroundColor: '#4267b2',
          marginBottom: 10
        },
        onClick: loginCallback,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["IconWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_Facebook__WEBPACK_IMPORTED_MODULE_3__["Facebook"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 13
        }, undefined), "Continue with Facebook"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%',
          backgroundColor: '#4285f4'
        },
        onClick: loginCallback,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["IconWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_Google__WEBPACK_IMPORTED_MODULE_4__["Google"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, undefined), "Continue with Google"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Offer"], {
        style: {
          padding: '20px 0'
        },
        children: ["Don't have any account?", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["LinkButton"], {
          onClick: toggleSignUpForm,
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["OfferSection"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["Offer"], {
        children: ["Forgot your password?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_2__["LinkButton"], {
          onClick: toggleForgotPassForm,
          children: "Reset It"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignInModal);

/***/ }),

/***/ "./src/features/authentication-form/register.tsx":
/*!*******************************************************!*\
  !*** ./src/features/authentication-form/register.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Others_forms_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Others/forms/input */ "./src/components/Others/forms/input.tsx");
/* harmony import */ var _authentication_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication-form.style */ "./src/features/authentication-form/authentication-form.style.tsx");
/* harmony import */ var assets_icons_Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/icons/Facebook */ "./src/assets/icons/Facebook.tsx");
/* harmony import */ var assets_icons_Google__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/icons/Google */ "./src/assets/icons/Google.tsx");
/* harmony import */ var _hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useLoginForm */ "./src/hooks/useLoginForm.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/redux/actions/globalActions */ "./src/redux/actions/globalActions.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/config */ "./src/utils/config.ts");
/* harmony import */ var _axiosHeaders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/axiosHeaders */ "./src/axiosHeaders.tsx");
/* harmony import */ var light_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! light-toast */ "light-toast");
/* harmony import */ var light_toast__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(light_toast__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\features\\authentication-form\\register.tsx";














const SignupModal = ({
  setCurrentForm
}) => {
  const toggleSignInForm = () => {
    setCurrentForm('signIn');
  };

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  const {
    inputs,
    handleInputChange
  } = Object(_hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_7__["useLoginForm"])();

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(`${_utils_config__WEBPACK_IMPORTED_MODULE_11__["API_BASE_URL"]}/api/v1/auth/register`, {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password,
        role: 'user'
      }, _axiosHeaders__WEBPACK_IMPORTED_MODULE_12__["JSONConfig"]);
      dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_9__["register"])(data));
      await Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_9__["loadUser"])();
      light_toast__WEBPACK_IMPORTED_MODULE_13___default.a.success('Successfully signed up');
      localStorage.setItem('userInfo', JSON.stringify(data));
      localStorage.setItem('token', JSON.stringify(data.token));
    } catch (error) {
      light_toast__WEBPACK_IMPORTED_MODULE_13___default.a.fail(error.response.data.error);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["SubHeading"], {
        children: "Every fill is required in sign up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_3__["Input"], {
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_3__["Input"], {
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_3__["Input"], {
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Others_forms_input__WEBPACK_IMPORTED_MODULE_3__["Input"], {
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["HelperText"], {
          style: {
            padding: '20px 0 30px'
          },
          children: ["By signing up, you agree to \xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Terms & Condition"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          variant: "primary",
          size: "big",
          width: "100%",
          type: "submit",
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "or"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%',
          backgroundColor: '#4267b2',
          marginBottom: 10
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["IconWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_Facebook__WEBPACK_IMPORTED_MODULE_5__["Facebook"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined), "Continue with Facebook"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        variant: "primary",
        size: "big",
        style: {
          width: '100%',
          backgroundColor: '#4285f4'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["IconWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_Google__WEBPACK_IMPORTED_MODULE_6__["Google"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, undefined), "Continue with Google"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["Offer"], {
        style: {
          padding: '20px 0'
        },
        children: ["Already have an account?", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_authentication_form_style__WEBPACK_IMPORTED_MODULE_4__["LinkButton"], {
          onClick: toggleSignInForm,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignupModal);

/***/ }),

/***/ "./src/features/cart/cart-popup.tsx":
/*!******************************************!*\
  !*** ./src/features/cart/cart-popup.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart */ "./src/features/cart/cart.tsx");
/* harmony import */ var _components_cart_popup_cart_popup_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/cart/popup/cart-popup-button */ "./src/components/cart/popup/cart-popup-button.tsx");
/* harmony import */ var _cart_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.style */ "./src/features/cart/cart.style.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_cartUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/cartUtils */ "./src/utils/cartUtils.ts");
/* harmony import */ var _OpenModalFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/OpenModalFunctions */ "./src/OpenModalFunctions.tsx");


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\features\\cart\\cart-popup.tsx";









const CartPopupStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"]`
  .cartPopup {
    top: auto !important;
    left: auto !important;
    bottom: 50px !important;
    right: 50px !important;
    box-shadow: 3px 3px 5px 6px #23ff00;;
    transform-origin: bottom right;


    @media (max-width: 580px) {
      max-width: none !important;
      width: 100% !important;
      bottom: 0 !important;
      left: 0 !important;
      background: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('colors.white', '#ffffff')};
      overflow: initial !important;
      transform-origin: bottom center;
    }
  }
`;

const CartPopUp = ({
  deviceType: {
    mobile,
    tablet,
    desktop
  }
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.cartReducer);
  const {
    currency: {
      symbol
    }
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.shopReducer);

  const handleModal = () => {
    Object(_OpenModalFunctions__WEBPACK_IMPORTED_MODULE_9__["OpenCartModal"])();
  };

  let cartSliderClass = isOpen ? 'cartPopupFixed' : '';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: mobile ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartPopupStyle, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cart_popup_cart_popup_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "product-cart",
        itemCount: cartState.length,
        itemPostfix: cartState.length > 1 ? "items" : "item",
        price: Object(_utils_cartUtils__WEBPACK_IMPORTED_MODULE_8__["calculateTotalPrice"])(cartState),
        pricePrefix: symbol,
        onClick: handleModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }, undefined)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_6__["CartSlidePopup"], {
        className: cartSliderClass,
        children: isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onCloseBtnClick: () => {
            setIsOpen(false);
          },
          scrollbarHeight: "100vh"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cart_popup_cart_popup_button__WEBPACK_IMPORTED_MODULE_5__["BoxedCartButton"], {
        className: "product-cart",
        itemCount: cartState.length,
        itemPostfix: cartState.length > 1 ? 'items' : "item",
        price: Object(_utils_cartUtils__WEBPACK_IMPORTED_MODULE_8__["calculateTotalPrice"])(cartState),
        pricePrefix: symbol,
        onClick: () => {
          setIsOpen(true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }, undefined)]
    }, void 0, true)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (CartPopUp);

/***/ }),

/***/ "./src/features/cart/cart.style.tsx":
/*!******************************************!*\
  !*** ./src/features/cart/cart.style.tsx ***!
  \******************************************/
/*! exports provided: NoProductImg, CartSlidePopup, CartPopupBody, PopupHeader, PopupItemCount, PromoCode, CloseButton, ItemCards, ItemImgWrapper, ItemDetails, ItemTitle, ItemPrice, ItemWeight, TotalPrice, DeleteButton, CheckoutButton, CheckoutButtonWrapper, Title, PriceBox, NoProductMsg, ItemWrapper, CouponBoxWrapper, CouponCode, ErrorMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProductImg", function() { return NoProductImg; });
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const CartPopupBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: auto;
  width: 385px;
  display: flex;
  flex-direction: column;
  border-radius: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px')};
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  box-sizing: content-box;

  @media (max-width: 767px) {
    width: 100%;
  }

  .cart-scrollbar {
    height: 100%;
    max-height: calc(100vh - 245px);

    @media (max-width: 767px) {
      max-height: 330px;
    }
  }
`;
const PopupHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 15px 25px;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1')};

  @media (max-width: 766px) {
    justify-content: center;
  }
`;
const PopupItemCount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: inline-flex;
  align-items: center;
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};

  span {
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
    padding-left: 10px;

    @media (max-width: 767px) {
      font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
    }
  }
`;
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  outline: 0;
  flex-shrink: 0;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;
  background-color: transparent;

  &:hover {
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.red', '#ea4d4a')};
  }

  @media (max-width: 767px) {
    position: absolute;
    top: -45px;
    background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.5);
  }

  &.fixedCartClose {
    @media (min-width: 991px) {
      display: none;
    }
  }
`;
const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  height: auto;
`;
const ItemCards = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  padding: 15px 25px;
  display: inline-flex;
  align-items: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  margin-bottom: 1px;
  box-sizing: border-box;
`;
const ItemImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 60px;
  height: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-right: 15px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ItemDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;
const ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  margin-bottom: 10px;
`;
const ItemPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
  margin-bottom: 10px;
`;
const ItemWeight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};
`;
const TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')};
  flex-shrink: 0;
  margin-left: auto;
`;
const DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  width: 10px;
  height: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  outline: 0;
  margin-left: 15px;
  flex-shrink: 0;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;
  background-color: transparent;

  &:hover {
    color: #ea4d4a;
  }
`;
const PromoCode = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  margin: 20px 0;
  display: flex;
  justify-content: center;

  > button {
    border: 0;
    outline: 0;
    box-shadow: none;
    background-color: transparent;
    display: inline-flex;
    cursor: pointer;
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
    font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
    transition: color 0.35s ease;
    &:hover {
      color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.hover', '#019376')};
    }
  }
`;
const CheckoutButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  height: 48px;
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
  padding: 0;
  border-radius: 48px;
  box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  /* margin-top: auto; */
  margin-bottom: 15px;
  margin-left: 15px;

  @media (max-width: 767px) {
    height: 45px;
  }

  > a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
  }
`;
const CheckoutButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  flex-shrink: 0;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  padding-left: 5px;
  padding-right: 10px;
`;
const PriceBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  width: auto;
  height: 44px;
  padding: 0 30px;
  overflow: hidden;
  border-radius: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
  margin-right: 2px;

  @media (max-width: 767px) {
    height: 41px;
  }
`;
const NoProductMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};
  display: block;
  width: 100%;
  padding: 40px 0;
  text-align: center;
`;
const NoProductImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 50px;

  @media (max-width: 580px) {
    margin-top: 20px;
  }

  svg {
    width: 140px;
    height: auto;

    @media (max-width: 580px) {
      width: 110px;
    }
  }
`;
const CouponBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  flex-direction: column;
  padding: 0 22px 0 15px;
`;
const CouponCode = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px;
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.medium', '500')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c')};

  width: 100%;
  display: flex;
  justify-content: center;

  span {
    font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700')};
    color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f')};
    margin-left: 5px;
  }
`;
const ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato')};
  font-size: calc(${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15')}px - 1px);
  font-weight: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400')};
  color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary.hover', '#FF282F')};
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;
const CartSlidePopup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 420px;
  height: 100vh;
  background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  position: fixed;
  bottom: 0;
  right: -450px;
  z-index: 1010;
  box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)')};
  transition: all 0.35s ease-in-out;

  @media (max-width: 580px) {
    width: 100%;
    display: none;
  }

  @media (min-width: 581px) {
    display: block;
  }

  &.cartPopupFixed {
    right: 0;
  }

  ${CartPopupBody} {
    height: 100%;
    width: 100%;
  }

  ${ItemWrapper} {
    /* height: calc(100vh - 240px); */
    max-height: calc(100vh - 245px);
    background-color: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
  }

  ${ItemCards} {
    border-bottom: 1px solid ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#f7f7f7')};
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    ${PopupHeader} {
      justify-content: space-between;
    }

    ${CloseButton} {
      top: auto;
      position: relative;
      background-color: transparent;
    }
  }
`;


/***/ }),

/***/ "./src/features/cart/cart.tsx":
/*!************************************!*\
  !*** ./src/features/cart/cart.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cart_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.style */ "./src/features/cart/cart.style.tsx");
/* harmony import */ var assets_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/icons/CloseIcon */ "./src/assets/icons/CloseIcon.tsx");
/* harmony import */ var assets_icons_ShoppingBagLarge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/icons/ShoppingBagLarge */ "./src/assets/icons/ShoppingBagLarge.tsx");
/* harmony import */ var assets_icons_NoCartBag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/icons/NoCartBag */ "./src/assets/icons/NoCartBag.tsx");
/* harmony import */ var _utils_cartUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/cartUtils */ "./src/utils/cartUtils.ts");
/* harmony import */ var _components_cart_item_cart_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/cart/item/cart-item */ "./src/components/cart/item/cart-item.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/redux/actions/cartActions */ "./src/redux/actions/cartActions.ts");


var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\features\\cart\\cart.tsx";












const Cart = ({
  style,
  className,
  onCloseBtnClick
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.cartReducer);
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [1, "\xA0 items"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["CloseButton"], {
        onClick: onCloseBtnClick,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_4__["CloseIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["ItemWrapper"], {
      className: "items-wrapper",
      children: cartState.length > 0 ? cartState.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cart_item_cart_item__WEBPACK_IMPORTED_MODULE_8__["CartItem"], {
        onIncrement: () => {
          dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_10__["increaseQuantityCart"])(item.cartId));
        },
        onDecrement: () => {
          dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_10__["decreaseQuantityCart"])(item.cartId));
        },
        onRemove: () => {
          dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_10__["removeFromCart"])(item.cartId));
        },
        data: item
      }, `cartItem-${item.id}`, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }, undefined)) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["NoProductImg"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(assets_icons_NoCartBag__WEBPACK_IMPORTED_MODULE_6__["NoCartBag"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["NoProductMsg"], {
          children: "No products found"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }, undefined)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["CheckoutButtonWrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["PromoCode"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: () => dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_10__["removeAllFromCart"])()),
          children: "Remove All"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined), true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_style__WEBPACK_IMPORTED_MODULE_3__["PriceBox"], {
              children: Object(_utils_cartUtils__WEBPACK_IMPORTED_MODULE_7__["calculateTotalPrice"])(cartState)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 17
            }, undefined)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/undefined]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./src/hooks/useLoginForm.ts":
/*!***********************************!*\
  !*** ./src/hooks/useLoginForm.ts ***!
  \***********************************/
/*! exports provided: useLoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginForm", function() { return useLoginForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useLoginForm = () => {
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => _objectSpread(_objectSpread({}, inputs), {}, {
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleInputChange,
    inputs
  };
};



/***/ }),

/***/ "./src/redux/actions/globalActions.ts":
/*!********************************************!*\
  !*** ./src/redux/actions/globalActions.ts ***!
  \********************************************/
/*! exports provided: setGlobalCurrency, setGlobalCategory, setGlobalSearch, login, register, logout, loadUser, createOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalCurrency", function() { return setGlobalCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalCategory", function() { return setGlobalCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalSearch", function() { return setGlobalSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrder", function() { return createOrder; });
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _setAuthToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setAuthToken */ "./src/redux/setAuthToken.ts");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/config */ "./src/utils/config.ts");




const setGlobalCurrency = cur => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_CURRENCY,
  cur
});
const setGlobalCategory = category => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_CATEGORY,
  category
});
const setGlobalSearch = keyword => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_SEARCH,
  keyword
});
const login = data => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["AUTH"].LOG_IN,
  payload: data
});
const register = data => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["AUTH"].SIGN_UP,
  payload: data
});
const logout = () => dispatch => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('persist:root');
  localStorage.removeItem('shippingAddress');
  localStorage.removeItem('paymentMethod');
  localStorage.removeItem('token');
  dispatch({
    type: _defines__WEBPACK_IMPORTED_MODULE_0__["AUTH"].LOG_OUT
  });
  document.location.href = '/';
};
const loadUser = () => async dispatch => {
  if (localStorage.token) {
    const token = localStorage.token.replaceAll('"', ''); //sending token to headers

    Object(_setAuthToken__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
  }

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_utils_config__WEBPACK_IMPORTED_MODULE_3__["API_BASE_URL"]}/api/v1/auth/me`);
    dispatch({
      type: _defines__WEBPACK_IMPORTED_MODULE_0__["AUTH"].LOAD_USER,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: _defines__WEBPACK_IMPORTED_MODULE_0__["AUTH"].LOAD_USER_FAIL,
      payload: err.response.data.error
    });
  }
};
const createOrder = order => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_utils_config__WEBPACK_IMPORTED_MODULE_3__["API_BASE_URL"]}/api/orders`, order, config);
    dispatch({
      type: _defines__WEBPACK_IMPORTED_MODULE_0__["AUTH"].ORDER_SUCCESS,
      payload: data
    });
    localStorage.removeItem('cartItems');
    localStorage.removeItem('persist:root');
  } catch (error) {
    const messages = error.response && error.response.data.message ? error.response.data.message : error.message;

    if (messages === 'Not authorized, token failed') {
      dispatch(logout());
    }
  }
};

/***/ }),

/***/ "./src/redux/setAuthToken.ts":
/*!***********************************!*\
  !*** ./src/redux/setAuthToken.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const setAuthToken = token => {
  if (token) {
    //adding token to the headers
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    //removing token from the headers
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3Blbk1vZGFsRnVuY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL0Nsb3NlSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9GYWNlYm9vay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9Hb29nbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvTm9DYXJ0QmFnLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL1Nob3BwaW5nQmFnLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL1Nob3BwaW5nQmFnTGFyZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9heGlvc0hlYWRlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9mb3Jtcy9pbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbS5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9wb3B1cC9jYXJ0LXBvcHVwLWJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9wb3B1cC9jYXJ0LXBvcHVwLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9hdXRoZW50aWNhdGlvbi1mb3JtLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9mb3Jnb3QtcGFzc3dvcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9sb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm0vcmVnaXN0ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9jYXJ0L2NhcnQtcG9wdXAudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9jYXJ0cy9jYXJ0LnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvY2FydC9jYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlTG9naW5Gb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3NldEF1dGhUb2tlbi50cyJdLCJuYW1lcyI6WyJPcGVuQXV0aFRhYiIsIm9wZW5Nb2RhbCIsInNob3ciLCJvdmVybGF5Q2xhc3NOYW1lIiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsImNvbXBvbmVudCIsIkF1dGhlbnRpY2F0aW9uRm9ybSIsImNsb3NlQ29tcG9uZW50IiwiY29uZmlnIiwiZW5hYmxlUmVzaXppbmciLCJkaXNhYmxlRHJhZ2dpbmciLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsIk9wZW5DYXJ0TW9kYWwiLCJ0cmFuc2l0aW9uIiwidGVuc2lvbiIsImZyaWN0aW9uIiwiQ2FydCIsImNvbXBvbmVudFByb3BzIiwib25DbG9zZUJ0bkNsaWNrIiwiY2xvc2VNb2RhbCIsInNjcm9sbGJhckhlaWdodCIsIkNsb3NlSWNvbiIsIkZhY2Vib29rIiwiY29sb3IiLCJHb29nbGUiLCJOb0NhcnRCYWciLCJTaG9wcGluZ0JhZyIsIlNob3BwaW5nQmFnTGFyZ2UiLCJKU09OQ29uZmlnIiwiaGVhZGVycyIsIklucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJjc3MiLCJkaXNwbGF5IiwicCIsImFwcGVhcmFuY2UiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdXRsaW5lIiwibWFyZ2luIiwiY3Vyc29yIiwib3BhY2l0eSIsImNvbXBvc2UiLCJsYXlvdXQiLCJzcGFjZSIsIkl0ZW1Cb3giLCJkaXYiLCJmb250V2VpZ2h0IiwicHkiLCJweCIsImJvcmRlckJvdHRvbSIsImJvcmRlckJvdHRvbUNvbG9yIiwiYWxpZ25JdGVtcyIsIkluZm9ybWF0aW9uIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJJbWFnZSIsImltZyIsIm9iamVjdEZpdCIsIk5hbWUiLCJzcGFuIiwibWIiLCJQcmljZSIsIm10IiwiV2VpZ2h0IiwiVG90YWwiLCJtbCIsIlJlbW92ZUJ1dHRvbiIsImJ1dHRvbiIsInBhZGRpbmciLCJDYXJ0SXRlbSIsImRhdGEiLCJvbkRlY3JlbWVudCIsIm9uSW5jcmVtZW50Iiwib25SZW1vdmUiLCJuYW1lIiwidGh1bWJJbWFnZSIsInByaWNlIiwic2FsZVByaWNlIiwidW5pdCIsImNvdW50SW5TdG9jayIsImRpc3BsYXlQcmljZSIsImNhcnRRdWFudGl0eSIsIkNhcnRQb3B1cEJ1dHRvbiIsIml0ZW1Db3VudCIsIml0ZW1Qb3N0Zml4IiwicHJpY2VQcmVmaXgiLCJzdHlsZSIsIm9uQ2xpY2siLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIkJveGVkQ2FydEJ1dHRvbiIsIkNhcnRQb3B1cEJ1dHRvblN0eWxlZCIsInRoZW1lR2V0IiwiQnV0dG9uSW1nQm94IiwiSXRlbUNvdW50IiwiUHJpY2VCb3giLCJDYXJ0UG9wdXBCb3hCdXR0b24iLCJUb3RhbEl0ZW1zIiwiUHJpY2VCb3hBbHQiLCJJY29uV3JhcHBlciIsIldyYXBwZXIiLCJDb250YWluZXIiLCJMb2dvV3JhcHBlciIsIkhlYWRpbmciLCJoMyIsIlN1YkhlYWRpbmciLCJPZmZlclNlY3Rpb24iLCJPZmZlciIsIkhlbHBlclRleHQiLCJEaXZpZGVyIiwiTGlua0J1dHRvbiIsIkZvcmdvdFBhc3N3b3JkTW9kYWwiLCJzZXRDdXJyZW50Rm9ybSIsInRvZ2dsZVNpZ25JbkZvcm0iLCJwYWRkaW5nQm90dG9tIiwicm91dGVyIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImdsb2JhbFJlZHVjZXIiLCJjdXJyZW50Rm9ybSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicGF0aG5hbWUiLCJwdXNoIiwid2l0aFJvdXRlciIsIlNpZ25Jbk1vZGFsIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvZ2dsZVNpZ25VcEZvcm0iLCJ0b2dnbGVGb3Jnb3RQYXNzRm9ybSIsImlucHV0cyIsImhhbmRsZUlucHV0Q2hhbmdlIiwidXNlTG9naW5Gb3JtIiwibG9naW5DYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsIkFQSV9CQVNFX1VSTCIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJsb2FkVXNlciIsIlRvYXN0Iiwic3VjY2VzcyIsImVycm9yIiwiZmFpbCIsInJlc3BvbnNlIiwibWFyZ2luQm90dG9tIiwiU2lnbnVwTW9kYWwiLCJvblN1Ym1pdCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicm9sZSIsInJlZ2lzdGVyIiwiQ2FydFBvcHVwU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNhcnRQb3BVcCIsImRldmljZVR5cGUiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2FydFN0YXRlIiwiY2FydFJlZHVjZXIiLCJjdXJyZW5jeSIsInN5bWJvbCIsInNob3BSZWR1Y2VyIiwiaGFuZGxlTW9kYWwiLCJjYXJ0U2xpZGVyQ2xhc3MiLCJsZW5ndGgiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwiQ2FydFBvcHVwQm9keSIsIlBvcHVwSGVhZGVyIiwiUG9wdXBJdGVtQ291bnQiLCJDbG9zZUJ1dHRvbiIsIkl0ZW1XcmFwcGVyIiwiSXRlbUNhcmRzIiwiSXRlbUltZ1dyYXBwZXIiLCJJdGVtRGV0YWlscyIsIkl0ZW1UaXRsZSIsIkl0ZW1QcmljZSIsIkl0ZW1XZWlnaHQiLCJUb3RhbFByaWNlIiwiRGVsZXRlQnV0dG9uIiwiUHJvbW9Db2RlIiwiQ2hlY2tvdXRCdXR0b24iLCJDaGVja291dEJ1dHRvbldyYXBwZXIiLCJUaXRsZSIsImEiLCJOb1Byb2R1Y3RNc2ciLCJOb1Byb2R1Y3RJbWciLCJDb3Vwb25Cb3hXcmFwcGVyIiwiQ291cG9uQ29kZSIsIkVycm9yTXNnIiwiQ2FydFNsaWRlUG9wdXAiLCJtYXAiLCJpdGVtIiwiaW5jcmVhc2VRdWFudGl0eUNhcnQiLCJjYXJ0SWQiLCJkZWNyZWFzZVF1YW50aXR5Q2FydCIsInJlbW92ZUZyb21DYXJ0IiwiaWQiLCJyZW1vdmVBbGxGcm9tQ2FydCIsInNldElucHV0cyIsImV2ZW50IiwicGVyc2lzdCIsInRhcmdldCIsInZhbHVlIiwic2V0R2xvYmFsQ3VycmVuY3kiLCJjdXIiLCJ0eXBlIiwiR0xPQkFMIiwiU0VUX0NVUlJFTkNZIiwic2V0R2xvYmFsQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsIlNFVF9DQVRFR09SWSIsInNldEdsb2JhbFNlYXJjaCIsImtleXdvcmQiLCJTRVRfU0VBUkNIIiwiQVVUSCIsIkxPR19JTiIsInBheWxvYWQiLCJTSUdOX1VQIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsIkxPR19PVVQiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInJlcGxhY2VBbGwiLCJzZXRBdXRoVG9rZW4iLCJyZXMiLCJnZXQiLCJMT0FEX1VTRVIiLCJlcnIiLCJMT0FEX1VTRVJfRkFJTCIsImNyZWF0ZU9yZGVyIiwib3JkZXIiLCJPUkRFUl9TVUNDRVNTIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiZGVmYXVsdHMiLCJjb21tb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsV0FB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akcsS0FBSyxDQUFDaUcsT0FIaEI7O0FBSUEsUUFBSUQsUUFBUSxLQUFLLDhCQUFqQixFQUFpRDtBQUM3Q3hILGNBQVEsQ0FBQ3dHLE1BQU0sRUFBUCxDQUFSO0FBQ0g7QUFDSjtBQUNKLENBM0JNLEM7Ozs7Ozs7Ozs7OztBQzNEUDtBQUFBO0FBQUE7QUFBQTs7QUFDQSxNQUFNTyxZQUFZLEdBQUUzRixLQUFELElBQWdCO0FBQy9CLE1BQUdBLEtBQUgsRUFBUztBQUNMO0FBQ0FWLGdEQUFLLENBQUNnSCxRQUFOLENBQWVuTyxPQUFmLENBQXVCb08sTUFBdkIsQ0FBOEIsZUFBOUIsSUFBZ0QsVUFBU3ZHLEtBQU0sRUFBL0Q7QUFDSCxHQUhELE1BR0s7QUFDRDtBQUNBLFdBQU9WLDRDQUFLLENBQUNnSCxRQUFOLENBQWVuTyxPQUFmLENBQXVCb08sTUFBdkIsQ0FBOEIsZUFBOUIsQ0FBUDtBQUNIO0FBQ0osQ0FSRDs7QUFTZVosMkVBQWYsRSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dGhlbnRpY2F0aW9uRm9ybSBmcm9tIFwiQC9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtXCI7XHJcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJ0ByZWRxL3JldXNlLW1vZGFsJztcclxuaW1wb3J0IENhcnQgZnJvbSBcIkAvZmVhdHVyZXMvY2FydC9jYXJ0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPcGVuQXV0aFRhYj0oKT0+XHJcbiAgICBvcGVuTW9kYWwoe1xyXG4gICAgc2hvdzogdHJ1ZSxcclxuICAgIG92ZXJsYXlDbGFzc05hbWU6ICdxdWljay12aWV3LW92ZXJsYXknLFxyXG4gICAgY2xvc2VPbkNsaWNrT3V0c2lkZTogdHJ1ZSxcclxuICAgIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Gb3JtLFxyXG4gICAgY2xvc2VDb21wb25lbnQ6ICcnLFxyXG4gICAgY29uZmlnOiB7XHJcbiAgICAgICAgZW5hYmxlUmVzaXppbmc6IGZhbHNlLFxyXG4gICAgICAgIGRpc2FibGVEcmFnZ2luZzogdHJ1ZSxcclxuICAgICAgICBjbGFzc05hbWU6ICdxdWljay12aWV3LW1vZGFsJyxcclxuICAgICAgICB3aWR0aDogNDU4LFxyXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBPcGVuQ2FydE1vZGFsPSgpPT5vcGVuTW9kYWwoe1xyXG4gICAgc2hvdzogdHJ1ZSxcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGNsYXNzTmFtZTogJ2NhcnRQb3B1cCcsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBlbmFibGVSZXNpemluZzogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZURyYWdnaW5nOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgdGVuc2lvbjogMzYwLFxyXG4gICAgICAgICAgICBmcmljdGlvbjogNDAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlOiB0cnVlLFxyXG4gICAgY29tcG9uZW50OiBDYXJ0LFxyXG4gICAgY2xvc2VDb21wb25lbnQ6ICgpID0+IDxkaXYgLz4sXHJcbiAgICBjb21wb25lbnRQcm9wczogeyBvbkNsb3NlQnRuQ2xpY2s6IGNsb3NlTW9kYWwsIHNjcm9sbGJhckhlaWdodDogMzMwIH0sXHJcbn0pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBDbG9zZUljb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMTAuMDAzXCJcclxuICAgICAgaGVpZ2h0PVwiMTBcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwLjAwMyAxMFwiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZGF0YS1uYW1lPVwiX2lvbmljb25zX3N2Z19pb3MtY2xvc2UgKDUpXCJcclxuICAgICAgICBkPVwiTTE2Ni42ODYsMTY1LjU1bDMuNTczLTMuNTczYS44MzcuODM3LDAsMCwwLTEuMTg0LTEuMTg0bC0zLjU3MywzLjU3My0zLjU3My0zLjU3M2EuODM3LjgzNywwLDEsMC0xLjE4NCwxLjE4NGwzLjU3MywzLjU3My0zLjU3MywzLjU3M2EuODM3LjgzNywwLDAsMCwxLjE4NCwxLjE4NGwzLjU3My0zLjU3MywzLjU3MywzLjU3M2EuODM3LjgzNywwLDAsMCwxLjE4NC0xLjE4NFpcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTYwLjUgLTE2MC41NSlcIlxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IEZhY2Vib29rID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIHdpZHRoID0gJzE3cHgnLFxyXG4gIGhlaWdodCA9ICcxN3B4JyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD0nMCAwIDE3IDE3J1xyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGRhdGEtbmFtZT0nX2lvbmljb25zX3N2Z19sb2dvLWZhY2Vib29rICgxKSdcclxuICAgICAgICBkPSdNODAuMDYxLDY0SDY0LjkzOWEuOTM5LjkzOSwwLDAsMC0uOTM5LjkzOVY4MC4wNjFhLjkzOS45MzksMCwwLDAsLjkzOS45MzlINzIuNVY3NC4yNzFINzAuNDY4VjcxLjc5Mkg3Mi41VjY5Ljk1OWEzLjIzLDMuMjMsMCwwLDEsMy40ODQtMy4zOTFjLjkzOSwwLDEuOTQ4LjA3MSwyLjE4My4xdjIuMjkzSDc2LjZjLTEuMDY3LDAtMS4yNzEuNS0xLjI3MSwxLjI0OHYxLjU4aDIuNTQxbC0uMzMyLDIuNDc5SDc1LjMzM1Y4MWg0LjcyOEEuOTM5LjkzOSwwLDAsMCw4MSw4MC4wNjFWNjQuOTM5QS45MzkuOTM5LDAsMCwwLDgwLjA2MSw2NFonXHJcbiAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTY0IC02NCknXHJcbiAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgR29vZ2xlID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIHdpZHRoID0gJzE3cHgnLFxyXG4gIGhlaWdodCA9ICcxN3B4JyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD0nMCAwIDE2LjY3NyAxNydcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPSdNNjguNTc5LDU1LjI5bC0uMDg2LS4zNjRINjAuNTg0djMuMzQ4aDQuNzI1YTQuNzMsNC43MywwLDAsMS00LjYyNywzLjU1Niw1LjUzMyw1LjUzMywwLDAsMS0zLjcyNC0xLjQ4NCw1LjMxNiw1LjMxNiwwLDAsMS0xLjU4Ni0zLjc1Miw1LjQ4Myw1LjQ4MywwLDAsMSwxLjU1Ny0zLjc0OCw1LjMsNS4zLDAsMCwxLDMuNy0xLjQ0Nyw0LjgyNSw0LjgyNSwwLDAsMSwzLjE0NywxLjIyNmwyLjM3OS0yLjM2N2E4LjQxNyw4LjQxNywwLDAsMC01LjYtMi4xNThBOC4zOTEsOC4zOTEsMCwwLDAsNTIsNTYuNiw4LjU0MSw4LjU0MSwwLDAsMCw1NC4zMjYsNjIuNWE4Ljg3Myw4Ljg3MywwLDAsMCw2LjQsMi42LDcuODkxLDcuODkxLDAsMCwwLDUuNzQ3LTIuNDE2LDguNDg2LDguNDg2LDAsMCwwLDIuMjA3LTUuODc4LDkuNzg4LDkuNzg4LDAsMCwwLS4xLTEuNTE2WidcclxuICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTIgLTQ4LjEpJ1xyXG4gICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IE5vQ2FydEJhZyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCIyMzEuOTFcIlxyXG4gICAgICBoZWlnaHQ9XCIyOTJcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDIzMS45MSAyOTJcIlxyXG4gICAgPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwibGluZWFyLWdyYWRpZW50XCJcclxuICAgICAgICAgIHgxPVwiMVwiXHJcbiAgICAgICAgICB5MT1cIjAuNDM5XCJcclxuICAgICAgICAgIHgyPVwiMC4zNjlcIlxyXG4gICAgICAgICAgeTI9XCIxXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiMwMjk0NzdcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMwMDllN2ZcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPGdcclxuICAgICAgICBpZD1cIm5vX2NhcnRfaW5fYmFnXzJcIlxyXG4gICAgICAgIGRhdGEtbmFtZT1cIm5vIGNhcnQgaW4gYmFnIDJcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTM4OCAtMzUxKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZWxsaXBzZVxyXG4gICAgICAgICAgaWQ9XCJFbGxpcHNlXzI4NzNcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSAyODczXCJcclxuICAgICAgICAgIGN4PVwiMTE1Ljk1NVwiXHJcbiAgICAgICAgICBjeT1cIjI3LjM2NlwiXHJcbiAgICAgICAgICByeD1cIjExNS45NTVcIlxyXG4gICAgICAgICAgcnk9XCIyNy4zNjZcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzODggNTg4LjI2OClcIlxyXG4gICAgICAgICAgZmlsbD1cIiNkZGRcIlxyXG4gICAgICAgICAgb3BhY2l0eT1cIjAuMjVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY5MVwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4NjkxXCJcclxuICAgICAgICAgIGQ9XCJNMjkuNjMyLDBIMTcwLjM2OEEyOS44MjgsMjkuODI4LDAsMCwxLDIwMCwzMC4wMjFWMjA5Ljk3OUEyOS44MjgsMjkuODI4LDAsMCwxLDE3MC4zNjgsMjQwSDI5LjYzMkEyOS44MjgsMjkuODI4LDAsMCwxLDAsMjA5Ljk3OVYzMC4wMjFBMjkuODI4LDI5LjgyOCwwLDAsMSwyOS42MzIsMFpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0MDMgMzgxKVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwOWU3ZlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTg1MlwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTg1MlwiXHJcbiAgICAgICAgICBkPVwiTTMwLDBIMTcwYTMwLDMwLDAsMCwxLDMwLDMwdjBhMzAsMzAsMCwwLDEtMzAsMzBIMTIuODU3QTEyLjg1NywxMi44NTcsMCwwLDEsMCw0Ny4xNDNWMzBBMzAsMzAsMCwwLDEsMzAsMFpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0MDMgMzgxKVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTg1M1wiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTg1M1wiXHJcbiAgICAgICAgICBkPVwiTTQyLDBIMTU4YTQyLDQyLDAsMCwxLDQyLDQydjBhMTgsMTgsMCwwLDEtMTgsMThIMThBMTgsMTgsMCwwLDEsMCw0MnYwQTQyLDQyLDAsMCwxLDQyLDBaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDAzIDM4MSlcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY4NVwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4Njg1XCJcclxuICAgICAgICAgIGQ9XCJNNDQ2LjMxLDI0Ni4wNTZhMzAsMzAsMCwxLDEsMzAtMzBBMzAuMDM0LDMwLjAzNCwwLDAsMSw0NDYuMzEsMjQ2LjA1NlptMC01My4yOTRBMjMuMywyMy4zLDAsMSwwLDQ2OS45LDIxNi4wNTYsMjMuNDcxLDIzLjQ3MSwwLDAsMCw0NDYuMzEsMTkyLjc2MlpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNTYuNjkgMTY0Ljk0NClcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY4NlwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4Njg2XCJcclxuICAgICAgICAgIGQ9XCJNNDQ2LjMxLDM3NS4xODFhMzAsMzAsMCwxLDEsMzAtMzBBMzAuMDM0LDMwLjAzNCwwLDAsMSw0NDYuMzEsMzc1LjE4MVptMC01My4yOTRBMjMuMywyMy4zLDAsMSwwLDQ2OS45LDM0NS4xODEsMjMuNDcxLDIzLjQ3MSwwLDAsMCw0NDYuMzEsMzIxLjg4N1pcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNTcuNzkzIDk1LjY4NClcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDllN2ZcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgaWQ9XCJFbGxpcHNlXzI4NzRcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSAyODc0XCJcclxuICAgICAgICAgIGN4PVwiMjguNjg5XCJcclxuICAgICAgICAgIGN5PVwiMjguNjg5XCJcclxuICAgICAgICAgIHI9XCIyOC42ODlcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0NzMuODIzIDUxMS4wNDYpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgIGlkPVwiRWxsaXBzZV8yODc1XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIkVsbGlwc2UgMjg3NVwiXHJcbiAgICAgICAgICBjeD1cIjE1LjA0NlwiXHJcbiAgICAgICAgICBjeT1cIjE1LjA0NlwiXHJcbiAgICAgICAgICByPVwiMTUuMDQ2XCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDgxLjQwMSA1NDcuODU0KSByb3RhdGUoLTQ1KVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwOWU3ZlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4Njg3XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2ODdcIlxyXG4gICAgICAgICAgZD1cIk0zOTkuNzEsNTMxLjI3YTcxLjc1NSw3MS43NTUsMCwwLDEsMTIuNjUtMTMuNmMzLjQtMi44NjMtMS41LTcuNzI2LTQuODgyLTQuODgyYTc4LjM5Miw3OC4zOTIsMCwwLDAtMTMuNzMsMTVjLTIuNTYsMy42NDQsMy40MjQsNy4xLDUuOTYyLDMuNDg1WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA2MC41NzkgLTM1LjcwMylcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY4OFwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4Njg4XCJcclxuICAgICAgICAgIGQ9XCJNNDEyLjkxMyw1MjcuNzg2YTc4LjQxOSw3OC40MTksMCwwLDAtMTMuNzMtMTVjLTMuMzgtMi44NDMtOC4yODksMi4wMTctNC44ODIsNC44ODJhNzEuNzg1LDcxLjc4NSwwLDAsMSwxMi42NSwxMy42YzIuNTM1LDMuNjA5LDguNTI1LjE2Miw1Ljk2Mi0zLjQ4NVpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNjAuNTY2IC0zNS43MDQpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2ODlcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY4OVwiXHJcbiAgICAgICAgICBkPVwiTTU4My4yNzgsNTI3Ljc4NmE3OC40MTcsNzguNDE3LDAsMCwwLTEzLjczLTE1Yy0zLjM4LTIuODQzLTguMjg5LDIuMDE3LTQuODgyLDQuODgyYTcxLjc2OCw3MS43NjgsMCwwLDEsMTIuNjUsMTMuNmMyLjUzNSwzLjYwOSw4LjUyNS4xNjIsNS45NjItMy40ODVaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NzAuMzA0IC0zNS43MDQpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2OTBcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY5MFwiXHJcbiAgICAgICAgICBkPVwiTTU3MC4wNzUsNTMxLjI3YTcxLjc3LDcxLjc3LDAsMCwxLDEyLjY1LTEzLjZjMy40LTIuODYzLTEuNS03LjcyNi00Ljg4Mi00Ljg4MmE3OC40MDcsNzguNDA3LDAsMCwwLTEzLjczLDE1Yy0yLjU2LDMuNjQ0LDMuNDI0LDcuMSw1Ljk2MiwzLjQ4NVpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk3MC4zMTggLTM1LjcwMylcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY5MlwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4NjkyXCJcclxuICAgICAgICAgIGQ9XCJNMzAxLjI0MywyODcuNDY0YTE5LjExNSwxOS4xMTUsMCwwLDEsOC4wNzEsOS4wNzcsMTkuNjM3LDE5LjYzNywwLDAsMSwxLjYsNy44OHYyNi4wODVhMTkuMzQ5LDE5LjM0OSwwLDAsMS05LjY3MiwxNi45NTdjLTEwLjA0OC02Ljg1OC0xNi41NDQtMTcuNzQyLTE2LjU0NC0zMFMyOTEuMiwyOTQuMzIyLDMwMS4yNDMsMjg3LjQ2NFpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyOTIuMzAxIDEwMS41MzYpXCJcclxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY5M1wiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4NjkzXCJcclxuICAgICAgICAgIGQ9XCJNMjk0LjM3MSwyODcuNDY0YTE5LjExNSwxOS4xMTUsMCwwLDAtOC4wNzEsOS4wNzcsMTkuNjM3LDE5LjYzNywwLDAsMC0xLjYsNy44OHYyNi4wODVhMTkuMzQ5LDE5LjM0OSwwLDAsMCw5LjY3MiwxNi45NTdjMTAuMDQ4LTYuODU4LDE2LjU0NC0xNy43NDIsMTYuNTQ0LTMwUzMwNC40MTksMjk0LjMyMiwyOTQuMzcxLDI4Ny40NjRaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMTE4LjMwMSAxMDEuNTM2KVwiXHJcbiAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgU2hvcHBpbmdCYWcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuPlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgIHdpZHRoPScxMi42ODYnXHJcbiAgICAgICAgaGVpZ2h0PScxNidcclxuICAgICAgICB2aWV3Qm94PScwIDAgMTIuNjg2IDE2J1xyXG4gICAgICA+XHJcbiAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAyNzA0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjcuMDIzIC0yKSc+XHJcbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE3JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNy4wMjMgNS4xNTYpJz5cclxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxNic+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nUGF0aCAzJ1xyXG4gICAgICAgICAgICAgICAgZD0nTTY1LjcsMTExLjA0M2wtLjcxNC05QTEuMTI1LDEuMTI1LDAsMCwwLDYzLjg3MSwxMDFINjIuNDU5VjEwMy4xYS40NjkuNDY5LDAsMSwxLS45MzcsMFYxMDFINTcuMjExVjEwMy4xYS40NjkuNDY5LDAsMSwxLS45MzcsMFYxMDFINTQuODYyYTEuMTI1LDEuMTI1LDAsMCwwLTEuMTE3LDEuMDMzbC0uNzE1LDkuMDA2YTIuNjA1LDIuNjA1LDAsMCwwLDIuNiwyLjhINjMuMWEyLjYwNSwyLjYwNSwwLDAsMCwyLjYtMi44MDZabS00LjIyNC00LjU4NS0yLjQyNCwyLjQyNGEuNDY4LjQ2OCwwLDAsMS0uNjYzLDBsLTEuMTM2LTEuMTM2YS40NjkuNDY5LDAsMCwxLC42NjMtLjY2M2wuOC44LDIuMDkyLTIuMDkyYS40NjkuNDY5LDAsMSwxLC42NjMuNjYzWidcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01My4wMjMgLTEwMS4wMDUpJ1xyXG4gICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMwLjI3NCAyKSc+XHJcbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTgnPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9J1BhdGggNCdcclxuICAgICAgICAgICAgICAgIGQ9J00xNjAuMTMyLDBhMy4xLDMuMSwwLDAsMC0zLjA5MywzLjA5M3YuMDYzaC45MzdWMy4wOTNhMi4xNTUsMi4xNTUsMCwxLDEsNC4zMTEsMHYuMDYzaC45MzdWMy4wOTNBMy4xLDMuMSwwLDAsMCwxNjAuMTMyLDBaJ1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE1Ny4wMzkpJ1xyXG4gICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBTaG9wcGluZ0JhZ0xhcmdlID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIHdpZHRoID0gJzE4cHgnLFxyXG4gIGhlaWdodCA9ICcxOHB4JyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD0nMCAwIDIzLjc4NiAzMCdcclxuICAgID5cclxuICAgICAgPGcgZGF0YS1uYW1lPSdzaG9wcGluZy1iYWcgKDMpJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTMuMDIzKSc+XHJcbiAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAyNzA0Jz5cclxuICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUzLjAyMyA1LjkxOCknPlxyXG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE2Jz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPSdQYXRoIDMnXHJcbiAgICAgICAgICAgICAgICBkPSdNNzYuOCwxMTkuODI2bC0xLjM0LTE2Ljg4MUEyLjEwOSwyLjEwOSwwLDAsMCw3My4zNjIsMTAxSDcwLjcxNnYzLjkyMWEuODc5Ljg3OSwwLDEsMS0xLjc1NywwVjEwMUg2MC44NzV2My45MjFhLjg3OS44NzksMCwxLDEtMS43NTcsMFYxMDFINTYuNDcyYTIuMTA5LDIuMTA5LDAsMCwwLTIuMDk0LDEuOTM3bC0xLjM0LDE2Ljg4NmE0Ljg4NSw0Ljg4NSwwLDAsMCw0Ljg3LDUuMjU5SDcxLjkyNmE0Ljg4NCw0Ljg4NCwwLDAsMCw0Ljg3LTUuMjYxWm0tNy45Mi04LjYtNC41NDQsNC41NDRhLjg3OC44NzgsMCwwLDEtMS4yNDMsMGwtMi4xMy0yLjEzQS44NzguODc4LDAsMCwxLDYyLjIsMTEyLjRsMS41MDksMS41MDgsMy45MjMtMy45MjNhLjg3OS44NzksMCwxLDEsMS4yNDIsMS4yNDNaJ1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUzLjAyMyAtMTAxLjAwNSknXHJcbiAgICAgICAgICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1OS4xMTgpJz5cclxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxOCc+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nUGF0aCA0J1xyXG4gICAgICAgICAgICAgICAgZD0nTTE2Mi44MzgsMGE1LjgwNiw1LjgwNiwwLDAsMC01LjgsNS44di4xMTlIMTU4LjhWNS44YTQuMDQyLDQuMDQyLDAsMSwxLDguMDgzLDB2LjExOWgxLjc1N1Y1LjhBNS44MDYsNS44MDYsMCwwLDAsMTYyLjgzOCwwWidcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNTcuMDM5KSdcclxuICAgICAgICAgICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBKU09OQ29uZmlnPSB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xyXG5pbXBvcnQgeyBjb21wb3NlLCBsYXlvdXQsIHNwYWNlLCBjb2xvciwgYm9yZGVyIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dDxhbnk+KFxyXG4gIGNzcyh7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHA6ICcwIDE4cHgnLFxyXG4gICAgYXBwZWFyYW5jZTogJ25vbmUnLFxyXG4gICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgZm9udFNpemU6ICdiYXNlJyxcclxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXHJcbiAgICBib3JkZXJDb2xvcjogJ2dyYXkuNTAwJyxcclxuICAgIGJvcmRlclJhZGl1czogJ2Jhc2UnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgaGVpZ2h0OiAnNDhweCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzIGVhc2UnLFxyXG4gICAgLy8gbWI6IDMsXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgfSxcclxuICB9KSxcclxuICB7XHJcbiAgICAnJjpob3ZlciwmOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICAnJjo6cGxhY2Vob2xkZXInOiB7XHJcbiAgICAgIGNvbG9yOiAnJyxcclxuICAgIH0sXHJcbiAgICAnJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uJzoge1xyXG4gICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxyXG4gICAgICBtYXJnaW46IDAsXHJcbiAgICB9LFxyXG4gICAgJyYuZGlzYWJsZWQnOiB7XHJcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcclxuICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbXBvc2UobGF5b3V0LCBzcGFjZSwgY29sb3IsIGJvcmRlcilcclxuKTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcclxuZXhwb3J0IGNvbnN0IEl0ZW1Cb3ggPSBzdHlsZWQuZGl2KFxyXG4gIGNzcyh7XHJcbiAgICBmb250U2l6ZTogJ2Jhc2UnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgcHk6IDE1LFxyXG4gICAgcHg6IDI1LFxyXG4gICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkYCxcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnZ3JheS4yMDAnLFxyXG4gIH0pLFxyXG4gIHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH1cclxuKTtcclxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uID0gc3R5bGVkLmRpdih7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIG1hcmdpbkxlZnQ6ICcxNXB4JyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWcoe1xyXG4gIHdpZHRoOiA2MCxcclxuICBoZWlnaHQ6IDYwLFxyXG4gIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICBtYXJnaW46ICcwIDE1cHgnLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IE5hbWUgPSBzdHlsZWQuc3BhbihcclxuICBjc3Moe1xyXG4gICAgZm9udFdlaWdodDogJ21kJyxcclxuICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcclxuICAgIG1iOiAnMHB4JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICB9KVxyXG4pO1xyXG5leHBvcnQgY29uc3QgUHJpY2UgPSBzdHlsZWQuc3BhbihcclxuICBjc3Moe1xyXG4gICAgY29sb3I6ICdwcmltYXJ5LnJlZ3VsYXInLFxyXG4gICAgbXQ6ICcxMHB4JyxcclxuICAgIG1iOiAnMTBweCcsXHJcbiAgfSlcclxuKTtcclxuZXhwb3J0IGNvbnN0IFdlaWdodCA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBmb250U2l6ZTogJ3NtJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdyZWd1bGFyJyxcclxuICAgIGNvbG9yOiAndGV4dC5yZWd1bGFyJyxcclxuICAgIG1iOiAnNXB4JyxcclxuICB9KVxyXG4pO1xyXG5leHBvcnQgY29uc3QgVG90YWwgPSBzdHlsZWQuc3BhbihcclxuICBjc3Moe1xyXG4gICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgbWw6ICdhdXRvJyxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlbW92ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b24oe1xyXG4gIHBhZGRpbmc6ICc1cHgnLFxyXG4gIGJvcmRlcjogMCxcclxuICBvdXRsaW5lOiAwLFxyXG4gIG1hcmdpbkxlZnQ6ICcxNXB4JyxcclxuICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yNSknLFxyXG4gIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcblxyXG4gICcmOmhvdmVyJzoge1xyXG4gICAgY29sb3I6ICdyZWQnLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb3VudGVyIH0gZnJvbSAnLi4vY291bnRlci9jb3VudGVyJztcclxuaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSAnQC9hc3NldHMvaWNvbnMvQ2xvc2VJY29uJztcclxuaW1wb3J0IHtcclxuICBJdGVtQm94LFxyXG4gIEltYWdlLFxyXG4gIEluZm9ybWF0aW9uLFxyXG4gIE5hbWUsXHJcbiAgUHJpY2UsXHJcbiAgV2VpZ2h0LFxyXG4gIFRvdGFsLFxyXG4gIFJlbW92ZUJ1dHRvbixcclxufSBmcm9tICcuL2NhcnQtaXRlbS5zdHlsZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGRhdGE6IGFueTtcclxuICBvbkRlY3JlbWVudDogKCkgPT4gdm9pZDtcclxuICBvbkluY3JlbWVudDogKCkgPT4gdm9pZDtcclxuICBvblJlbW92ZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRJdGVtOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGRhdGEsXHJcbiAgb25EZWNyZW1lbnQsXHJcbiAgb25JbmNyZW1lbnQsXHJcbiAgb25SZW1vdmUsXHJcbn0pID0+IHtcclxuICBjb25zdCB7IG5hbWUsIHRodW1iSW1hZ2UsIHByaWNlLCBzYWxlUHJpY2UsIHVuaXQsIGNvdW50SW5TdG9jayB9ID0gZGF0YTtcclxuICBjb25zdCBkaXNwbGF5UHJpY2UgPSBzYWxlUHJpY2UgPyBzYWxlUHJpY2UgOiBwcmljZTtcclxuICByZXR1cm4gKFxyXG4gICAgPEl0ZW1Cb3g+XHJcbiAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgdmFsdWU9e2RhdGEuY2FydFF1YW50aXR5fVxyXG4gICAgICAgIG9uRGVjcmVtZW50PXtvbkRlY3JlbWVudH1cclxuICAgICAgICBvbkluY3JlbWVudD17b25JbmNyZW1lbnR9XHJcbiAgICAgICAgdmFyaWFudD1cImxpZ2h0VmVydGljYWxcIlxyXG4gICAgICAvPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXt0aHVtYkltYWdlfSAvPlxyXG4gICAgICA8SW5mb3JtYXRpb24+XHJcbiAgICAgICAgPE5hbWU+e25hbWV9PC9OYW1lPlxyXG4gICAgICAgIDxQcmljZT5cclxuICAgICAgICAgIHtkaXNwbGF5UHJpY2V9XHJcbiAgICAgICAgPC9QcmljZT5cclxuICAgICAgICA8V2VpZ2h0PlxyXG4gICAgICAgICAgey8qe3F1YW50aXR5fSBYIHt1bml0fSovfVxyXG4gICAgICAgIDwvV2VpZ2h0PlxyXG4gICAgICA8L0luZm9ybWF0aW9uPlxyXG4gICAgICA8VG90YWw+XHJcbiAgICAgICAgey8qeyhxdWFudGl0eSAqIGRpc3BsYXlQcmljZSkudG9GaXhlZCgyKX0qL31cclxuICAgICAgPC9Ub3RhbD5cclxuICAgICAgPFJlbW92ZUJ1dHRvbiBvbkNsaWNrPXtvblJlbW92ZX0+XHJcbiAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICA8L1JlbW92ZUJ1dHRvbj5cclxuICAgIDwvSXRlbUJveD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENhcnRQb3B1cEJ1dHRvblN0eWxlZCxcclxuICBCdXR0b25JbWdCb3gsXHJcbiAgSXRlbUNvdW50LFxyXG4gIFByaWNlQm94LFxyXG4gIENhcnRQb3B1cEJveEJ1dHRvbixcclxuICBQcmljZUJveEFsdCxcclxuICBUb3RhbEl0ZW1zLFxyXG59IGZyb20gJy4vY2FydC1wb3B1cC5zdHlsZSc7XHJcbmltcG9ydCB7IFNob3BwaW5nQmFnIH0gZnJvbSAnQC9hc3NldHMvaWNvbnMvU2hvcHBpbmdCYWcnO1xyXG5cclxudHlwZSBDYXJ0QnV0dG9uUHJvcHMgPSB7XHJcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG4gIGl0ZW1Db3VudD86IG51bWJlcjtcclxuICBpdGVtUG9zdGZpeD86IGFueTtcclxuICBwcmljZT86IG51bWJlcjtcclxuICBwcmljZVByZWZpeD86IHN0cmluZztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgb25DbGljaz86IChlOiBhbnkpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBDYXJ0UG9wdXBCdXR0b246IFJlYWN0LkZDPENhcnRCdXR0b25Qcm9wcz4gPSAoe1xyXG4gIGl0ZW1Db3VudCxcclxuICBpdGVtUG9zdGZpeCA9ICdpdGVtcycsXHJcbiAgcHJpY2UsXHJcbiAgcHJpY2VQcmVmaXggPSAnJCcsXHJcbiAgc3R5bGUsXHJcbiAgb25DbGljayxcclxuICBjbGFzc05hbWUsXHJcbn0pID0+IChcclxuICA8Q2FydFBvcHVwQnV0dG9uU3R5bGVkIHN0eWxlPXtzdHlsZX0gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgPEJ1dHRvbkltZ0JveD5cclxuICAgICAgPFNob3BwaW5nQmFnIC8+XHJcbiAgICA8L0J1dHRvbkltZ0JveD5cclxuICAgIDxJdGVtQ291bnQ+XHJcbiAgICAgIHtpdGVtQ291bnR9IHtpdGVtUG9zdGZpeH1cclxuICAgIDwvSXRlbUNvdW50PlxyXG4gICAgPFByaWNlQm94PlxyXG4gICAgICB7cHJpY2VQcmVmaXh9XHJcbiAgICAgIHtwYXJzZUZsb2F0KGAke3ByaWNlfWApLnRvRml4ZWQoMil9XHJcbiAgICA8L1ByaWNlQm94PlxyXG4gIDwvQ2FydFBvcHVwQnV0dG9uU3R5bGVkPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJveGVkQ2FydEJ1dHRvbjogUmVhY3QuRkM8Q2FydEJ1dHRvblByb3BzPiA9ICh7XHJcbiAgaXRlbUNvdW50LFxyXG4gIGl0ZW1Qb3N0Zml4ID0gJ2l0ZW1zJyxcclxuICBwcmljZSxcclxuICBwcmljZVByZWZpeCA9ICckJyxcclxuICBzdHlsZSxcclxuICBvbkNsaWNrLFxyXG4gIGNsYXNzTmFtZSxcclxufSkgPT4gKFxyXG4gIDxDYXJ0UG9wdXBCb3hCdXR0b24gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICA8VG90YWxJdGVtcz5cclxuICAgICAgPFNob3BwaW5nQmFnIC8+XHJcbiAgICAgIHtpdGVtQ291bnR9IHtpdGVtUG9zdGZpeH1cclxuICAgIDwvVG90YWxJdGVtcz5cclxuICAgIDxQcmljZUJveEFsdD5cclxuICAgICAge3ByaWNlUHJlZml4fVxyXG4gICAgICB7cGFyc2VGbG9hdChgJHtwcmljZX1gKS50b0ZpeGVkKDIpfVxyXG4gICAgPC9QcmljZUJveEFsdD5cclxuICA8L0NhcnRQb3B1cEJveEJ1dHRvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRQb3B1cEJ1dHRvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmNvbnN0IENhcnRQb3B1cEJ1dHRvblN0eWxlZCA9IHN0eWxlZCgnYnV0dG9uJylgXHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgcGFkZGluZzogMCAwIDAgMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG4gIGJveC1zaGFkb3c6ICR7dGhlbWVHZXQoJ3NoYWRvd3MuYmlnJywgJzAgMjFweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHBhZGRpbmc6IDJweCAycHggMnB4IDMwcHg7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1ODFweCkge1xyXG4gICAgJjpub3QoLmZpeGVkQ2FydFBvcHVwKSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uSW1nQm94ID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbUNvdW50ID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJpY2VCb3ggPSBzdHlsZWQoJ3NwYW4nKWBcclxuICB3aWR0aDogNTZweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy54cycsICcxMicpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FydFBvcHVwQm94QnV0dG9uID0gc3R5bGVkKCdidXR0b24nKWBcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMzAlIDAlIDAlIDMwJTtcclxuICBib3JkZXI6ICMwMDlFN0YgMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3gtc2hhZG93OiAke3RoZW1lR2V0KCdzaGFkb3dzLmJpZycsICcwIDIxcHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtNDZweDtcclxuICB6LWluZGV4OiA5OTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRvdGFsSXRlbXMgPSBzdHlsZWQoJ3NwYW4nKWBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG5cclxuICBzdmcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByaWNlQm94QWx0ID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIG1pbi13aWR0aDogODBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JSAwJSAwJSAxNSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgbWFyZ2luOiAwIDEwcHggMTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQnV0dG9uSW1nQm94LFxyXG4gIENhcnRQb3B1cEJ1dHRvblN0eWxlZCxcclxuICBJdGVtQ291bnQsXHJcbiAgUHJpY2VCb3gsXHJcbiAgQ2FydFBvcHVwQm94QnV0dG9uLFxyXG4gIFByaWNlQm94QWx0LFxyXG4gIFRvdGFsSXRlbXMsXHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMvT3RoZXJzL2J1dHRvbi9idXR0b24nO1xyXG5leHBvcnQgeyBCdXR0b24gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIFxyXG4gIHBhZGRpbmc6IDQwcHggNjBweCAwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMzBweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuaDNgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuaGVhZGluZycsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmxnJywgJzIxJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3ViSGVhZGluZyA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgT2ZmZXJTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjIwMCcsICcjRjdGN0Y3Jyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9mZmVyID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgbWFyZ2luOiAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlbHBlclRleHQgPSBzdHlsZWQucGBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmJsdWUubGluaycsICcjNDI4NWY0Jyl9O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGhlaWdodDogNDhweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iYXNlJywgJzZweCcpfTtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4yMDAnLCAnI2Y3ZjdmNycpfTtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS43MDAnLCAnI2U2ZTZlNicpfTtcclxuLy8gICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4vLyAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuLy8gICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbi8vICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuLy8gICBsaW5lLWhlaWdodDogMTlweDtcclxuLy8gICBwYWRkaW5nOiAwIDE4cHg7XHJcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZTtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuLy8gICAmOmhvdmVyLFxyXG4vLyAgICY6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogMDtcclxuLy8gICB9XHJcblxyXG4vLyAgICY6Zm9jdXMge1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbi8vICAgfVxyXG5cclxuLy8gICAmOjpwbGFjZWhvbGRlciB7XHJcbi8vICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4vLyAgICAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggKyAxcHgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuLy8gICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuLy8gICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICB9XHJcblxyXG4vLyAgICYuZGlzYWJsZWQge1xyXG4vLyAgICAgLmlubmVyLXdyYXAge1xyXG4vLyAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4vLyAgICAgICBvcGFjaXR5OiAwLjY7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyBgO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpdmlkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuNTAwJywgJyNmMWYxZjEnKX07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4IC0gMXB4KTtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFdyYXBwZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgU3ViSGVhZGluZyxcclxuICAvLyBJbnB1dCxcclxuICBCdXR0b24sXHJcbiAgTGlua0J1dHRvbixcclxuICBPZmZlcixcclxufSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLWZvcm0uc3R5bGUnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2NvbXBvbmVudHMvT3RoZXJzL2Zvcm1zL2lucHV0JztcclxuY29uc3QgRm9yZ290UGFzc3dvcmRNb2RhbDpSZWFjdC5GQzx7c2V0Q3VycmVudEZvcm06KHZhbHVlOidzaWduVXAnfCdmb3Jnb3RQYXNzJ3wnc2lnbkluJyk9PnZvaWR9Pj0oe3NldEN1cnJlbnRGb3JtfSk9PiB7XHJcbiAgY29uc3QgdG9nZ2xlU2lnbkluRm9ybSA9ICgpID0+IHtcclxuICAgICAgc2V0Q3VycmVudEZvcm0oJ3NpZ25JbicpXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMzAgfX0+XHJcbiAgICAgICAgPEhlYWRpbmc+XHJcbiAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmRcclxuICAgICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgIDxTdWJIZWFkaW5nPlxyXG4gICAgICAgICAgV2UnbGwgc2VuZCB5b3UgYSBsaW5rIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmRcclxuICAgICAgICA8L1N1YkhlYWRpbmc+XHJcblxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzcyBvciBDb250YWN0IE5vLlwiXHJcbiAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9JyNGN0Y3RjcnXHJcbiAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlc2V0IFBhc3N3b3JkXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPE9mZmVyIHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAgMCcgfX0+XHJcbiAgICAgICAgICBCYWNrIHRveycgJ31cclxuICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZ25JbkZvcm19PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxyXG4gICAgICAgIDwvT2ZmZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmRNb2RhbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2lnbkluRm9ybSBmcm9tICcuL2xvZ2luJztcclxuaW1wb3J0IFNpZ25VcCBmcm9tICcuL3JlZ2lzdGVyJztcclxuaW1wb3J0IEZvcmdvdFBhc3NGb3JtIGZyb20gJy4vZm9yZ290LXBhc3N3b3JkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7Y2xvc2VNb2RhbH0gZnJvbSBcIkByZWRxL3JldXNlLW1vZGFsXCI7XHJcbmNvbnN0IEF1dGhlbnRpY2F0aW9uRm9ybT0oe3JvdXRlcn0pPT4ge1xyXG4gIGNvbnN0IHtpc0F1dGhlbnRpY2F0ZWR9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgW2N1cnJlbnRGb3JtLHNldEN1cnJlbnRGb3JtXT11c2VTdGF0ZTwnc2lnblVwJ3wnZm9yZ290UGFzcyd8J3NpZ25Jbic+KCdzaWduVXAnKVxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoaXNBdXRoZW50aWNhdGVkKXtcclxuICAgICAgaWYocm91dGVyLnBhdGhuYW1lPT09Jy9sb2dpbicpe1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBjbG9zZU1vZGFsKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sW2lzQXV0aGVudGljYXRlZF0pXHJcbiAgaWYgKGN1cnJlbnRGb3JtID09PSAnc2lnbkluJykge1xyXG4gICAgcmV0dXJuIDxTaWduSW5Gb3JtICBzZXRDdXJyZW50Rm9ybT17c2V0Q3VycmVudEZvcm19Lz5cclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50Rm9ybSA9PT0gJ3NpZ25VcCcpIHtcclxuICAgIHJldHVybiA8U2lnblVwIHNldEN1cnJlbnRGb3JtPXtzZXRDdXJyZW50Rm9ybX0vPlxyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRGb3JtID09PSAgJ2ZvcmdvdFBhc3MnKSB7XHJcbiAgICByZXR1cm4gPEZvcmdvdFBhc3NGb3JtICBzZXRDdXJyZW50Rm9ybT17c2V0Q3VycmVudEZvcm19Lz5cclxuICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQXV0aGVudGljYXRpb25Gb3JtKVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIExpbmtCdXR0b24sXHJcbiAgQnV0dG9uLFxyXG4gIEljb25XcmFwcGVyLFxyXG4gIFdyYXBwZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIExvZ29XcmFwcGVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgU3ViSGVhZGluZyxcclxuICBPZmZlclNlY3Rpb24sXHJcbiAgT2ZmZXIsXHJcbiAgLy8gSW5wdXQsXHJcbiAgRGl2aWRlcixcclxufSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLWZvcm0uc3R5bGUnO1xyXG5pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gJ2Fzc2V0cy9pY29ucy9GYWNlYm9vayc7XHJcbmltcG9ydCB7IEdvb2dsZSB9IGZyb20gJ2Fzc2V0cy9pY29ucy9Hb29nbGUnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tICdAcmVkcS9yZXVzZS1tb2RhbCc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnY29tcG9uZW50cy9PdGhlcnMvZm9ybXMvaW5wdXQnO1xyXG5pbXBvcnQge3VzZUxvZ2luRm9ybX0gZnJvbSBcIkAvaG9va3MvdXNlTG9naW5Gb3JtXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2xvYWRVc2VyLCBsb2dpbn0gZnJvbSBcIkAvcmVkdXgvYWN0aW9ucy9nbG9iYWxBY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xyXG5pbXBvcnQge0FVVEh9IGZyb20gXCJAL3JlZHV4L2RlZmluZXNcIjtcclxuaW1wb3J0IFRvYXN0IGZyb20gXCJsaWdodC10b2FzdFwiO1xyXG5pbXBvcnQge0pTT05Db25maWd9IGZyb20gXCJAL2F4aW9zSGVhZGVyc1wiO1xyXG5cclxuY29uc3QgU2lnbkluTW9kYWw6UmVhY3QuRkM8e3NldEN1cnJlbnRGb3JtOih2YWx1ZTonc2lnblVwJ3wnZm9yZ290UGFzcyd8J3NpZ25JbicpPT52b2lkfT49KHtzZXRDdXJyZW50Rm9ybX0pPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKClcclxuICBjb25zdCB0b2dnbGVTaWduVXBGb3JtID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudEZvcm0oJ3NpZ25VcCcpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRm9yZ290UGFzc0Zvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Rm9ybSgnZm9yZ290UGFzcycpXHJcbiAgfTtcclxuICBjb25zdCB7aW5wdXRzLCBoYW5kbGVJbnB1dENoYW5nZX0gPSB1c2VMb2dpbkZvcm0oKTtcclxuXHJcblxyXG4gIGNvbnN0IGxvZ2luQ2FsbGJhY2sgPWFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9hdXRoL2xvZ2luYCxcclxuICAgICAgICAgIHtlbWFpbDppbnB1dHMuZW1haWwsIHBhc3N3b3JkOmlucHV0cy5wYXNzd29yZH0sXHJcbiAgICAgICAgICBKU09OQ29uZmlnXHJcbiAgICAgIClcclxuICAgICAgZGlzcGF0Y2gobG9naW4oZGF0YSkpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeShkYXRhLnRva2VuKSlcclxuICAgICAgYXdhaXQgZGlzcGF0Y2gobG9hZFVzZXIoKSlcclxuICAgICAgVG9hc3Quc3VjY2VzcygnU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbicpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgVG9hc3QuZmFpbChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yICsnLCBQbGVhc2UgdHJ5IGFnYWluJylcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8V3JhcHBlcj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEhlYWRpbmc+XHJcbiAgICAgICAgICAgIFdlbGNvbWUgQmFja1xyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxyXG4gICAgICAgICAgICBMb2dpbiB3aXRoIHlvdXIgZW1haWwgJmFtcDsgcGFzc3dvcmRcclxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtsb2dpbkNhbGxiYWNrfT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtcImVtYWlsXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQgKG1pbiA2IGNoYXJhY3RlcnMpXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9e1wicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ29udGludWUgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8RGl2aWRlcj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBvclxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9EaXZpZGVyPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjY3YjInLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luQ2FsbGJhY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgICA8RmFjZWJvb2sgLz5cclxuICAgICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgQ29udGludWUgd2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJyM0Mjg1ZjQnIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17bG9naW5DYWxsYmFja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxHb29nbGUgLz5cclxuICAgICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgQ29udGludWUgd2l0aCBHb29nbGVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxPZmZlciBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwJyB9fT5cclxuICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbnkgYWNjb3VudD97JyAnfVxyXG4gICAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWduVXBGb3JtfT5cclxuICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cclxuICAgICAgICAgIDwvT2ZmZXI+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIDxPZmZlclNlY3Rpb24+XHJcbiAgICAgICAgICA8T2ZmZXI+XHJcbiAgICAgICAgICAgIEZvcmdvdCB5b3VyIHBhc3N3b3JkP1xyXG4gICAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0b2dnbGVGb3Jnb3RQYXNzRm9ybX0+XHJcbiAgICAgICAgICAgICAgUmVzZXQgSXRcclxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxyXG4gICAgICAgICAgPC9PZmZlcj5cclxuICAgICAgICA8L09mZmVyU2VjdGlvbj5cclxuICAgICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluTW9kYWxcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnY29tcG9uZW50cy9PdGhlcnMvZm9ybXMvaW5wdXQnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBJY29uV3JhcHBlcixcclxuICBXcmFwcGVyLFxyXG4gIENvbnRhaW5lcixcclxuICBMb2dvV3JhcHBlcixcclxuICBIZWFkaW5nLFxyXG4gIFN1YkhlYWRpbmcsXHJcbiAgSGVscGVyVGV4dCxcclxuICBPZmZlcixcclxuICAvLyBJbnB1dCxcclxuICBEaXZpZGVyLFxyXG4gIExpbmtCdXR0b24sXHJcbn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi1mb3JtLnN0eWxlJztcclxuaW1wb3J0IHsgRmFjZWJvb2sgfSBmcm9tICdhc3NldHMvaWNvbnMvRmFjZWJvb2snO1xyXG5pbXBvcnQgeyBHb29nbGUgfSBmcm9tICdhc3NldHMvaWNvbnMvR29vZ2xlJztcclxuaW1wb3J0IHt1c2VMb2dpbkZvcm19IGZyb20gXCJAL2hvb2tzL3VzZUxvZ2luRm9ybVwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtsb2FkVXNlciwgcmVnaXN0ZXJ9IGZyb20gXCJAL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSBmcm9tIFwiQC91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IHtBVVRIfSBmcm9tIFwiQC9yZWR1eC9kZWZpbmVzXCI7XHJcbmltcG9ydCB7SlNPTkNvbmZpZ30gZnJvbSBcIkAvYXhpb3NIZWFkZXJzXCI7XHJcbmltcG9ydCBUb2FzdCBmcm9tIFwibGlnaHQtdG9hc3RcIjtcclxuY29uc3QgU2lnbnVwTW9kYWw6UmVhY3QuRkM8e3NldEN1cnJlbnRGb3JtOih2YWx1ZTonc2lnblVwJ3wnZm9yZ290UGFzcyd8J3NpZ25JbicpPT52b2lkfT49KHtzZXRDdXJyZW50Rm9ybX0pPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZVNpZ25JbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Rm9ybSgnc2lnbkluJylcclxuICB9O1xyXG4gIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKClcclxuICBjb25zdCB7aW5wdXRzLCBoYW5kbGVJbnB1dENoYW5nZX0gPSB1c2VMb2dpbkZvcm0oKTtcclxuICBjb25zdCBvblN1Ym1pdD1hc3luYyAoZSk9PntcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvYXV0aC9yZWdpc3RlcmAsXHJcbiAgICAgICAgICB7Zmlyc3ROYW1lOmlucHV0cy5maXJzdE5hbWUsbGFzdE5hbWU6aW5wdXRzLmxhc3ROYW1lLCBlbWFpbDppbnB1dHMuZW1haWwsIHBhc3N3b3JkOmlucHV0cy5wYXNzd29yZCwgcm9sZTondXNlcid9LFxyXG4gICAgICAgICAgSlNPTkNvbmZpZ1xyXG4gICAgICApXHJcbiAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyKGRhdGEpKVxyXG4gICAgICBhd2FpdCBsb2FkVXNlcigpXHJcbiAgICAgIFRvYXN0LnN1Y2Nlc3MoJ1N1Y2Nlc3NmdWxseSBzaWduZWQgdXAnKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgSlNPTi5zdHJpbmdpZnkoZGF0YS50b2tlbikpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgVG9hc3QuZmFpbChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGluZz5cclxuICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPFN1YkhlYWRpbmc+XHJcbiAgICAgICAgICBFdmVyeSBmaWxsIGlzIHJlcXVpcmVkIGluIHNpZ24gdXBcclxuICAgICAgICA8L1N1YkhlYWRpbmc+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9ICdGaXJzdCBuYW1lJ1xyXG4gICAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgICAgbWI9JzEwcHgnXHJcbiAgICAgICAgICAgIG5hbWU9J2ZpcnN0TmFtZSdcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLmZpcnN0TmFtZX1cclxuXHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9ICdMYXN0IG5hbWUnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAgICAgICBuYW1lPSdsYXN0TmFtZSdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMubGFzdE5hbWV9XHJcblxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsIEFkZHJlc3MnXHJcbiAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9JyNGN0Y3RjcnXHJcbiAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0gJ1Bhc3N3b3JkIChtaW4gNiBjaGFyYWN0ZXJzKSdcclxuICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XHJcblxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEhlbHBlclRleHQgc3R5bGU9e3sgcGFkZGluZzogJzIwcHggMCAzMHB4JyB9fT5cclxuICAgICAgICAgIEJ5IHNpZ25pbmcgdXAsIHlvdSBhZ3JlZSB0b1xyXG4gICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgVGVybXMgJmFtcDsgQ29uZGl0aW9uXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0hlbHBlclRleHQ+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5JyBzaXplPSdiaWcnIHdpZHRoPScxMDAlJyB0eXBlPSdzdWJtaXQnPlxyXG4gICAgICAgICAgQ29udGludWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPERpdmlkZXI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgb3JcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0RpdmlkZXI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjY3YjInLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxGYWNlYm9vayAvPlxyXG4gICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgIENvbnRpbnVlIHdpdGggRmFjZWJvb2tcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnIzQyODVmNCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxHb29nbGUgLz5cclxuICAgICAgICAgIDwvSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICBDb250aW51ZSB3aXRoIEdvb2dsZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxPZmZlciBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwJyB9fT5cclxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3snICd9XHJcbiAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWduSW5Gb3JtfT5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cclxuICAgICAgICA8L09mZmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cE1vZGFsXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4vY2FydCc7XHJcbmltcG9ydCBDYXJ0UG9wdXBCdXR0b24sIHtcclxuICBCb3hlZENhcnRCdXR0b24sXHJcbn0gZnJvbSAnQC9jb21wb25lbnRzL2NhcnQvcG9wdXAvY2FydC1wb3B1cC1idXR0b24nO1xyXG5pbXBvcnQgeyBDYXJ0U2xpZGVQb3B1cCB9IGZyb20gJy4vY2FydC5zdHlsZSc7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2NhbGN1bGF0ZVRvdGFsUHJpY2V9IGZyb20gXCIuLi8uLi91dGlscy9jYXJ0VXRpbHNcIjtcclxuaW1wb3J0IHtPcGVuQ2FydE1vZGFsfSBmcm9tIFwiQC9PcGVuTW9kYWxGdW5jdGlvbnNcIjtcclxuY29uc3QgQ2FydFBvcHVwU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAuY2FydFBvcHVwIHtcclxuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICMyM2ZmMDA7O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xyXG5cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxudHlwZSBDYXJ0UHJvcHMgPSB7XHJcbiAgZGV2aWNlVHlwZToge1xyXG4gICAgbW9iaWxlOiBib29sZWFuO1xyXG4gICAgdGFibGV0OiBib29sZWFuO1xyXG4gICAgZGVza3RvcDogYm9vbGVhbjtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgQ2FydFBvcFVwOiBSZWFjdC5GQzxDYXJ0UHJvcHM+ID0gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlVHlwZTogeyBtb2JpbGUsIHRhYmxldCwgZGVza3RvcCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xyXG4gIGNvbnN0IHtjdXJyZW5jeTp7c3ltYm9sfX0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5zaG9wUmVkdWNlcik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgT3BlbkNhcnRNb2RhbCgpXHJcbiAgfTtcclxuXHJcbiAgbGV0IGNhcnRTbGlkZXJDbGFzcyA9IGlzT3BlbiA/ICdjYXJ0UG9wdXBGaXhlZCcgOiAnJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7bW9iaWxlID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxDYXJ0UG9wdXBTdHlsZSAvPlxyXG4gICAgICAgICAgICAgIDxDYXJ0UG9wdXBCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWNhcnQnXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1Db3VudD17Y2FydFN0YXRlLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgaXRlbVBvc3RmaXg9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRTdGF0ZS5sZW5ndGggPiAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zXCJcclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwcmljZT17Y2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBwcmljZVByZWZpeD17c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2RhbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxDYXJ0U2xpZGVQb3B1cCBjbGFzc05hbWU9e2NhcnRTbGlkZXJDbGFzc30+XHJcbiAgICAgICAgICAgICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FydCBvbkNsb3NlQnRuQ2xpY2s9eygpPT57c2V0SXNPcGVuKGZhbHNlKX19IHNjcm9sbGJhckhlaWdodD0nMTAwdmgnIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ2FydFNsaWRlUG9wdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxCb3hlZENhcnRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWNhcnQnXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1Db3VudD17Y2FydFN0YXRlLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgaXRlbVBvc3RmaXg9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRTdGF0ZS5sZW5ndGggPiAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXRlbXMnICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwcmljZT17Y2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBwcmljZVByZWZpeD17c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3NldElzT3Blbih0cnVlKX19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRQb3BVcDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmNvbnN0IENhcnRQb3B1cEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMzg1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcnQtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDVweCk7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDMzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBvcHVwSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuNTAwJywgJyNmMWYxZjEnKX07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9wdXBJdGVtQ291bnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnJlZCcsICcjZWE0ZDRhJyl9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkQ2FydENsb3NlIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtQ2FyZHMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbUltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtRGV0YWlscyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1UaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbVdlaWdodCA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuYDtcclxuXHJcbmNvbnN0IFRvdGFsUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2VhNGQ0YTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9tb0NvZGUgPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICA+IGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMzVzIGVhc2U7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LmhvdmVyJywgJyMwMTkzNzYnKX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiA0OHB4O1xyXG4gIGJveC1zaGFkb3c6ICR7dGhlbWVHZXQoJ3NoYWRvd3MuYmFzZScsICcwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogbWFyZ2luLXRvcDogYXV0bzsgKi9cclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICB9XHJcblxyXG4gID4gYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENoZWNrb3V0QnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5hYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IFByaWNlQm94ID0gc3R5bGVkLnBgXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTm9Qcm9kdWN0TXNnID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNDBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Byb2R1Y3RJbWcgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb3Vwb25Cb3hXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDAgMjJweCAwIDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb3Vwb25Db2RlID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLm1lZGl1bScsICc1MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFcnJvck1zZyA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggLSAxcHgpO1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnNlY29uZGFyeS5ob3ZlcicsICcjRkYyODJGJyl9O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJ0U2xpZGVQb3B1cCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQyMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogLTQ1MHB4O1xyXG4gIHotaW5kZXg6IDEwMTA7XHJcbiAgYm94LXNoYWRvdzogJHt0aGVtZUdldCgnc2hhZG93cy5iaWcnLCAnMCAyMXB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU4MXB4KSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICYuY2FydFBvcHVwRml4ZWQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAke0NhcnRQb3B1cEJvZHl9IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJHtJdGVtV3JhcHBlcn0ge1xyXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQwcHgpOyAqL1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI0NXB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIH1cclxuXHJcbiAgJHtJdGVtQ2FyZHN9IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4yMDAnLCAnI2Y3ZjdmNycpfTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICR7UG9wdXBIZWFkZXJ9IHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgICR7Q2xvc2VCdXR0b259IHtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ2FydFNsaWRlUG9wdXAsXHJcbiAgQ2FydFBvcHVwQm9keSxcclxuICBQb3B1cEhlYWRlcixcclxuICBQb3B1cEl0ZW1Db3VudCxcclxuICBQcm9tb0NvZGUsXHJcbiAgQ2xvc2VCdXR0b24sXHJcbiAgSXRlbUNhcmRzLFxyXG4gIEl0ZW1JbWdXcmFwcGVyLFxyXG4gIEl0ZW1EZXRhaWxzLFxyXG4gIEl0ZW1UaXRsZSxcclxuICBJdGVtUHJpY2UsXHJcbiAgSXRlbVdlaWdodCxcclxuICBUb3RhbFByaWNlLFxyXG4gIERlbGV0ZUJ1dHRvbixcclxuICBDaGVja291dEJ1dHRvbixcclxuICBDaGVja291dEJ1dHRvbldyYXBwZXIsXHJcbiAgVGl0bGUsXHJcbiAgUHJpY2VCb3gsXHJcbiAgTm9Qcm9kdWN0TXNnLFxyXG4gIEl0ZW1XcmFwcGVyLFxyXG4gIENvdXBvbkJveFdyYXBwZXIsXHJcbiAgQ291cG9uQ29kZSxcclxuICBFcnJvck1zZyxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge1xyXG4gIENhcnRQb3B1cEJvZHksXHJcbiAgUG9wdXBIZWFkZXIsXHJcbiAgUG9wdXBJdGVtQ291bnQsXHJcbiAgQ2xvc2VCdXR0b24sXHJcbiAgUHJvbW9Db2RlLFxyXG4gIENoZWNrb3V0QnV0dG9uV3JhcHBlcixcclxuICBDaGVja291dEJ1dHRvbixcclxuICBUaXRsZSxcclxuICBQcmljZUJveCxcclxuICBOb1Byb2R1Y3RJbWcsXHJcbiAgSXRlbVdyYXBwZXIsXHJcbiAgQ291cG9uQm94V3JhcHBlcixcclxuICBDb3Vwb25Db2RlLCBOb1Byb2R1Y3RNc2csXHJcbn0gZnJvbSAnLi9jYXJ0LnN0eWxlJztcclxuaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSAnYXNzZXRzL2ljb25zL0Nsb3NlSWNvbic7XHJcbmltcG9ydCB7IFNob3BwaW5nQmFnTGFyZ2UgfSBmcm9tICdhc3NldHMvaWNvbnMvU2hvcHBpbmdCYWdMYXJnZSc7XHJcbmltcG9ydCB7IE5vQ2FydEJhZyB9IGZyb20gJ2Fzc2V0cy9pY29ucy9Ob0NhcnRCYWcnO1xyXG5pbXBvcnQge2NhbGN1bGF0ZVRvdGFsUHJpY2V9IGZyb20gXCIuLi8uLi91dGlscy9jYXJ0VXRpbHNcIjtcclxuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbSc7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2RlY3JlYXNlUXVhbnRpdHlDYXJ0LGluY3JlYXNlUXVhbnRpdHlDYXJ0LHJlbW92ZUZyb21DYXJ0LHJlbW92ZUFsbEZyb21DYXJ0fSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxudHlwZSBDYXJ0UHJvcHNUeXBlID0ge1xyXG4gIHN0eWxlPzogYW55O1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBzY3JvbGxiYXJIZWlnaHQ/OiBzdHJpbmc7XHJcbiAgaXNPcGVuPzpib29sZWFuO1xyXG4gIG9uQ2xvc2VCdG5DbGljaz86IChlOiBhbnkpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBDYXJ0OiBSZWFjdC5GQzxDYXJ0UHJvcHNUeXBlPiA9ICh7XHJcbiAgc3R5bGUsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIG9uQ2xvc2VCdG5DbGljayxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKClcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFBvcHVwQm9keSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgPFBvcHVwSGVhZGVyPlxyXG4gICAgICAgIDxQb3B1cEl0ZW1Db3VudD5cclxuICAgICAgICAgIDxTaG9wcGluZ0JhZ0xhcmdlIHdpZHRoPScxOXB4JyBoZWlnaHQ9JzI0cHgnIC8+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgezF9XHJcbiAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICBpdGVtc1xyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvUG9wdXBJdGVtQ291bnQ+XHJcblxyXG4gICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlQnRuQ2xpY2t9PlxyXG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgIDwvQ2xvc2VCdXR0b24+XHJcbiAgICAgIDwvUG9wdXBIZWFkZXI+XHJcblxyXG4gICAgICAgIDxJdGVtV3JhcHBlciBjbGFzc05hbWU9J2l0ZW1zLXdyYXBwZXInPlxyXG4gICAgICAgICAge2NhcnRTdGF0ZS5sZW5ndGg+MCA/IChcclxuICAgICAgICAgICAgY2FydFN0YXRlLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxDYXJ0SXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2FydEl0ZW0tJHtpdGVtLmlkfWB9XHJcbiAgICAgICAgICAgICAgICBvbkluY3JlbWVudD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChpbmNyZWFzZVF1YW50aXR5Q2FydChpdGVtLmNhcnRJZCkpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25EZWNyZW1lbnQ9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZGVjcmVhc2VRdWFudGl0eUNhcnQoaXRlbS5jYXJ0SWQpKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZUZyb21DYXJ0KGl0ZW0uY2FydElkKSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtpdGVtfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxOb1Byb2R1Y3RJbWc+XHJcbiAgICAgICAgICAgICAgICA8Tm9DYXJ0QmFnIC8+XHJcbiAgICAgICAgICAgICAgPC9Ob1Byb2R1Y3RJbWc+XHJcbiAgICAgICAgICAgICAgPE5vUHJvZHVjdE1zZz5cclxuICAgICAgICAgICAgICAgIE5vIHByb2R1Y3RzIGZvdW5kXHJcbiAgICAgICAgICAgICAgPC9Ob1Byb2R1Y3RNc2c+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0l0ZW1XcmFwcGVyPlxyXG5cclxuICAgICAgPENoZWNrb3V0QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8UHJvbW9Db2RlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2gocmVtb3ZlQWxsRnJvbUNhcnQoKSl9PlxyXG4gICAgICAgICAgICAgICAgICBSZW1vdmUgQWxsXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L1Byb21vQ29kZT5cclxuXHJcbiAgICAgICAge3RydWUgPyAoXHJcbiAgICAgICAgICA8TGluayBocmVmPScvY2hlY2tvdXQnPlxyXG4gICAgICAgICAgICA8Q2hlY2tvdXRCdXR0b24gb25DbGljaz17b25DbG9zZUJ0bkNsaWNrfT5cclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICBDaGVja291dFxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxQcmljZUJveD5cclxuICAgICAgICAgICAgICAgICAgey8qe0NVUlJFTkNZfSovfVxyXG4gICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgPC9QcmljZUJveD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgPC9DaGVja291dEJ1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPENoZWNrb3V0QnV0dG9uPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgICAgICAgIENoZWNrb3V0XHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8UHJpY2VCb3g+XHJcbiAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpfVxyXG4gICAgICAgICAgICAgIDwvUHJpY2VCb3g+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgPC9DaGVja291dEJ1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0NoZWNrb3V0QnV0dG9uV3JhcHBlcj5cclxuICAgIDwvQ2FydFBvcHVwQm9keT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuIiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmNvbnN0IHVzZUxvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZTxhbnk+KHt9KTtcclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OmFueSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcclxuICAgICAgICBzZXRJbnB1dHMoKGlucHV0czogYW55KSA9PiAoey4uLmlucHV0cywgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoYW5kbGVJbnB1dENoYW5nZSxcclxuICAgICAgICBpbnB1dHNcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IHt1c2VMb2dpbkZvcm19IiwiaW1wb3J0IHtHTE9CQUwsIEZPUk0sIEFVVEh9IGZyb20gXCIuLi9kZWZpbmVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNldEF1dGhUb2tlbiBmcm9tIFwiLi4vc2V0QXV0aFRva2VuXCI7XHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSBmcm9tIFwiQC91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IFRvYXN0IGZyb20gJ2xpZ2h0LXRvYXN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDdXJyZW5jeSA9IChjdXI6c3RyaW5nKSA9PiAoe1xyXG4gICAgdHlwZTogR0xPQkFMLlNFVF9DVVJSRU5DWSxcclxuICAgIGN1cixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsQ2F0ZWdvcnkgPSAoY2F0ZWdvcnk6c3RyaW5nKSA9PiAoe1xyXG4gICAgdHlwZTogR0xPQkFMLlNFVF9DQVRFR09SWSxcclxuICAgIGNhdGVnb3J5LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxTZWFyY2ggPSAoa2V5d29yZDpzdHJpbmcpID0+ICh7XHJcbiAgICB0eXBlOiBHTE9CQUwuU0VUX1NFQVJDSCxcclxuICAgIGtleXdvcmQsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9naW4gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFVVEguTE9HX0lOLFxyXG4gICAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQVVUSC5TSUdOX1VQLFxyXG4gICAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gKGRpc3BhdGNoOmFueSkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJbmZvJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjYXJ0SXRlbXMnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BlcnNpc3Q6cm9vdCcpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2hpcHBpbmdBZGRyZXNzJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwYXltZW50TWV0aG9kJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXHJcbiAgICBkaXNwYXRjaCh7dHlwZTogQVVUSC5MT0dfT1VUfSlcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnLydcclxufVxyXG5leHBvcnQgY29uc3QgbG9hZFVzZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6YW55KSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW49bG9jYWxTdG9yYWdlLnRva2VuLnJlcGxhY2VBbGwoJ1wiJywnJylcclxuICAgICAgICAvL3NlbmRpbmcgdG9rZW4gdG8gaGVhZGVyc1xyXG4gICAgICAgIHNldEF1dGhUb2tlbih0b2tlbilcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL2F1dGgvbWVgKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFVVEguTE9BRF9VU0VSLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFVVEguTE9BRF9VU0VSX0ZBSUwsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGVyci5yZXNwb25zZS5kYXRhLmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU9yZGVyID0gKG9yZGVyOm9iamVjdCkgPT4gYXN5bmMgKGRpc3BhdGNoOmFueSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJX0JBU0VfVVJMfS9hcGkvb3JkZXJzYCwgb3JkZXIsIGNvbmZpZylcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkFVVEguT1JERVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FydEl0ZW1zJylcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVyc2lzdDpyb290JylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPVxyXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICA6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICBpZiAobWVzc2FnZXMgPT09ICdOb3QgYXV0aG9yaXplZCwgdG9rZW4gZmFpbGVkJykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dvdXQoKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IHNldEF1dGhUb2tlbj0odG9rZW46c3RyaW5nKT0+e1xyXG4gICAgaWYodG9rZW4pe1xyXG4gICAgICAgIC8vYWRkaW5nIHRva2VuIHRvIHRoZSBoZWFkZXJzXHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXT1gQmVhcmVyICR7dG9rZW59YDtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIC8vcmVtb3ZpbmcgdG9rZW4gZnJvbSB0aGUgaGVhZGVyc1xyXG4gICAgICAgIGRlbGV0ZSBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2V0QXV0aFRva2VuO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9