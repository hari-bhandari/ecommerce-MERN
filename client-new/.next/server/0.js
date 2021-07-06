exports.ids = [0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3Blbk1vZGFsRnVuY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL0Nsb3NlSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9GYWNlYm9vay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9Hb29nbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvTm9DYXJ0QmFnLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL1Nob3BwaW5nQmFnLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL1Nob3BwaW5nQmFnTGFyZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9heGlvc0hlYWRlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL090aGVycy9mb3Jtcy9pbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbS5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9wb3B1cC9jYXJ0LXBvcHVwLWJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9wb3B1cC9jYXJ0LXBvcHVwLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9hdXRoZW50aWNhdGlvbi1mb3JtLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9mb3Jnb3QtcGFzc3dvcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9sb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm0vcmVnaXN0ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9jYXJ0L2NhcnQtcG9wdXAudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9jYXJ0cy9jYXJ0LnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvY2FydC9jYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlTG9naW5Gb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3NldEF1dGhUb2tlbi50cyJdLCJuYW1lcyI6WyJPcGVuQXV0aFRhYiIsIm9wZW5Nb2RhbCIsInNob3ciLCJvdmVybGF5Q2xhc3NOYW1lIiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsImNvbXBvbmVudCIsIkF1dGhlbnRpY2F0aW9uRm9ybSIsImNsb3NlQ29tcG9uZW50IiwiY29uZmlnIiwiZW5hYmxlUmVzaXppbmciLCJkaXNhYmxlRHJhZ2dpbmciLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsIk9wZW5DYXJ0TW9kYWwiLCJ0cmFuc2l0aW9uIiwidGVuc2lvbiIsImZyaWN0aW9uIiwiQ2FydCIsImNvbXBvbmVudFByb3BzIiwib25DbG9zZUJ0bkNsaWNrIiwiY2xvc2VNb2RhbCIsInNjcm9sbGJhckhlaWdodCIsIkNsb3NlSWNvbiIsIkZhY2Vib29rIiwiY29sb3IiLCJHb29nbGUiLCJOb0NhcnRCYWciLCJTaG9wcGluZ0JhZyIsIlNob3BwaW5nQmFnTGFyZ2UiLCJKU09OQ29uZmlnIiwiaGVhZGVycyIsIklucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJjc3MiLCJkaXNwbGF5IiwicCIsImFwcGVhcmFuY2UiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdXRsaW5lIiwibWFyZ2luIiwiY3Vyc29yIiwib3BhY2l0eSIsImNvbXBvc2UiLCJsYXlvdXQiLCJzcGFjZSIsIkl0ZW1Cb3giLCJkaXYiLCJmb250V2VpZ2h0IiwicHkiLCJweCIsImJvcmRlckJvdHRvbSIsImJvcmRlckJvdHRvbUNvbG9yIiwiYWxpZ25JdGVtcyIsIkluZm9ybWF0aW9uIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJJbWFnZSIsImltZyIsIm9iamVjdEZpdCIsIk5hbWUiLCJzcGFuIiwibWIiLCJQcmljZSIsIm10IiwiV2VpZ2h0IiwiVG90YWwiLCJtbCIsIlJlbW92ZUJ1dHRvbiIsImJ1dHRvbiIsInBhZGRpbmciLCJDYXJ0SXRlbSIsImRhdGEiLCJvbkRlY3JlbWVudCIsIm9uSW5jcmVtZW50Iiwib25SZW1vdmUiLCJuYW1lIiwidGh1bWJJbWFnZSIsInByaWNlIiwic2FsZVByaWNlIiwidW5pdCIsImNvdW50SW5TdG9jayIsImRpc3BsYXlQcmljZSIsImNhcnRRdWFudGl0eSIsIkNhcnRQb3B1cEJ1dHRvbiIsIml0ZW1Db3VudCIsIml0ZW1Qb3N0Zml4IiwicHJpY2VQcmVmaXgiLCJzdHlsZSIsIm9uQ2xpY2siLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIkJveGVkQ2FydEJ1dHRvbiIsIkNhcnRQb3B1cEJ1dHRvblN0eWxlZCIsInRoZW1lR2V0IiwiQnV0dG9uSW1nQm94IiwiSXRlbUNvdW50IiwiUHJpY2VCb3giLCJDYXJ0UG9wdXBCb3hCdXR0b24iLCJUb3RhbEl0ZW1zIiwiUHJpY2VCb3hBbHQiLCJJY29uV3JhcHBlciIsIldyYXBwZXIiLCJDb250YWluZXIiLCJMb2dvV3JhcHBlciIsIkhlYWRpbmciLCJoMyIsIlN1YkhlYWRpbmciLCJPZmZlclNlY3Rpb24iLCJPZmZlciIsIkhlbHBlclRleHQiLCJEaXZpZGVyIiwiTGlua0J1dHRvbiIsIkZvcmdvdFBhc3N3b3JkTW9kYWwiLCJzZXRDdXJyZW50Rm9ybSIsInRvZ2dsZVNpZ25JbkZvcm0iLCJwYWRkaW5nQm90dG9tIiwicm91dGVyIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImdsb2JhbFJlZHVjZXIiLCJjdXJyZW50Rm9ybSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicGF0aG5hbWUiLCJwdXNoIiwid2l0aFJvdXRlciIsIlNpZ25Jbk1vZGFsIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvZ2dsZVNpZ25VcEZvcm0iLCJ0b2dnbGVGb3Jnb3RQYXNzRm9ybSIsImlucHV0cyIsImhhbmRsZUlucHV0Q2hhbmdlIiwidXNlTG9naW5Gb3JtIiwibG9naW5DYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsIkFQSV9CQVNFX1VSTCIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJsb2FkVXNlciIsIlRvYXN0Iiwic3VjY2VzcyIsImVycm9yIiwiZmFpbCIsInJlc3BvbnNlIiwibWFyZ2luQm90dG9tIiwiU2lnbnVwTW9kYWwiLCJvblN1Ym1pdCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicm9sZSIsInJlZ2lzdGVyIiwiQ2FydFBvcHVwU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNhcnRQb3BVcCIsImRldmljZVR5cGUiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2FydFN0YXRlIiwiY2FydFJlZHVjZXIiLCJjdXJyZW5jeSIsInN5bWJvbCIsInNob3BSZWR1Y2VyIiwiaGFuZGxlTW9kYWwiLCJjYXJ0U2xpZGVyQ2xhc3MiLCJsZW5ndGgiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwiQ2FydFBvcHVwQm9keSIsIlBvcHVwSGVhZGVyIiwiUG9wdXBJdGVtQ291bnQiLCJDbG9zZUJ1dHRvbiIsIkl0ZW1XcmFwcGVyIiwiSXRlbUNhcmRzIiwiSXRlbUltZ1dyYXBwZXIiLCJJdGVtRGV0YWlscyIsIkl0ZW1UaXRsZSIsIkl0ZW1QcmljZSIsIkl0ZW1XZWlnaHQiLCJUb3RhbFByaWNlIiwiRGVsZXRlQnV0dG9uIiwiUHJvbW9Db2RlIiwiQ2hlY2tvdXRCdXR0b24iLCJDaGVja291dEJ1dHRvbldyYXBwZXIiLCJUaXRsZSIsImEiLCJOb1Byb2R1Y3RNc2ciLCJOb1Byb2R1Y3RJbWciLCJDb3Vwb25Cb3hXcmFwcGVyIiwiQ291cG9uQ29kZSIsIkVycm9yTXNnIiwiQ2FydFNsaWRlUG9wdXAiLCJtYXAiLCJpdGVtIiwiaW5jcmVhc2VRdWFudGl0eUNhcnQiLCJjYXJ0SWQiLCJkZWNyZWFzZVF1YW50aXR5Q2FydCIsInJlbW92ZUZyb21DYXJ0IiwiaWQiLCJyZW1vdmVBbGxGcm9tQ2FydCIsInNldElucHV0cyIsImV2ZW50IiwicGVyc2lzdCIsInRhcmdldCIsInZhbHVlIiwic2V0R2xvYmFsQ3VycmVuY3kiLCJjdXIiLCJ0eXBlIiwiR0xPQkFMIiwiU0VUX0NVUlJFTkNZIiwic2V0R2xvYmFsQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsIlNFVF9DQVRFR09SWSIsInNldEdsb2JhbFNlYXJjaCIsImtleXdvcmQiLCJTRVRfU0VBUkNIIiwiQVVUSCIsIkxPR19JTiIsInBheWxvYWQiLCJTSUdOX1VQIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsIkxPR19PVVQiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInJlcGxhY2VBbGwiLCJzZXRBdXRoVG9rZW4iLCJyZXMiLCJnZXQiLCJMT0FEX1VTRVIiLCJlcnIiLCJMT0FEX1VTRVJfRkFJTCIsImNyZWF0ZU9yZGVyIiwib3JkZXIiLCJPUkRFUl9TVUNDRVNTIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiZGVmYXVsdHMiLCJjb21tb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsV0FB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QUssQ0FBQ2lHLE9BSGhCOztBQUlBLFFBQUlELFFBQVEsS0FBSyw4QkFBakIsRUFBaUQ7QUFDN0N4SCxjQUFRLENBQUN3RyxNQUFNLEVBQVAsQ0FBUjtBQUNIO0FBQ0o7QUFDSixDQTNCTSxDOzs7Ozs7Ozs7Ozs7QUMzRFA7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsTUFBTU8sWUFBWSxHQUFFM0YsS0FBRCxJQUFnQjtBQUMvQixNQUFHQSxLQUFILEVBQVM7QUFDTDtBQUNBVixnREFBSyxDQUFDZ0gsUUFBTixDQUFlbk8sT0FBZixDQUF1Qm9PLE1BQXZCLENBQThCLGVBQTlCLElBQWdELFVBQVN2RyxLQUFNLEVBQS9EO0FBQ0gsR0FIRCxNQUdLO0FBQ0Q7QUFDQSxXQUFPViw0Q0FBSyxDQUFDZ0gsUUFBTixDQUFlbk8sT0FBZixDQUF1Qm9PLE1BQXZCLENBQThCLGVBQTlCLENBQVA7QUFDSDtBQUNKLENBUkQ7O0FBU2VaLDJFQUFmLEUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRoZW50aWNhdGlvbkZvcm0gZnJvbSBcIkAvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybVwiO1xyXG5pbXBvcnQgeyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tICdAcmVkcS9yZXVzZS1tb2RhbCc7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCJAL2ZlYXR1cmVzL2NhcnQvY2FydFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3BlbkF1dGhUYWI9KCk9PlxyXG4gICAgb3Blbk1vZGFsKHtcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICBvdmVybGF5Q2xhc3NOYW1lOiAncXVpY2stdmlldy1vdmVybGF5JyxcclxuICAgIGNsb3NlT25DbGlja091dHNpZGU6IHRydWUsXHJcbiAgICBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uRm9ybSxcclxuICAgIGNsb3NlQ29tcG9uZW50OiAnJyxcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGVuYWJsZVJlc2l6aW5nOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlRHJhZ2dpbmc6IHRydWUsXHJcbiAgICAgICAgY2xhc3NOYW1lOiAncXVpY2stdmlldy1tb2RhbCcsXHJcbiAgICAgICAgd2lkdGg6IDQ1OCxcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgT3BlbkNhcnRNb2RhbD0oKT0+b3Blbk1vZGFsKHtcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICBjb25maWc6IHtcclxuICAgICAgICBjbGFzc05hbWU6ICdjYXJ0UG9wdXAnLFxyXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgICAgZW5hYmxlUmVzaXppbmc6IGZhbHNlLFxyXG4gICAgICAgIGRpc2FibGVEcmFnZ2luZzogdHJ1ZSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHRlbnNpb246IDM2MCxcclxuICAgICAgICAgICAgZnJpY3Rpb246IDQwLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY2xvc2VPbkNsaWNrT3V0c2lkZTogdHJ1ZSxcclxuICAgIGNvbXBvbmVudDogQ2FydCxcclxuICAgIGNsb3NlQ29tcG9uZW50OiAoKSA9PiA8ZGl2IC8+LFxyXG4gICAgY29tcG9uZW50UHJvcHM6IHsgb25DbG9zZUJ0bkNsaWNrOiBjbG9zZU1vZGFsLCBzY3JvbGxiYXJIZWlnaHQ6IDMzMCB9LFxyXG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgQ2xvc2VJY29uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjEwLjAwM1wiXHJcbiAgICAgIGhlaWdodD1cIjEwXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAxMC4wMDMgMTBcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGRhdGEtbmFtZT1cIl9pb25pY29uc19zdmdfaW9zLWNsb3NlICg1KVwiXHJcbiAgICAgICAgZD1cIk0xNjYuNjg2LDE2NS41NWwzLjU3My0zLjU3M2EuODM3LjgzNywwLDAsMC0xLjE4NC0xLjE4NGwtMy41NzMsMy41NzMtMy41NzMtMy41NzNhLjgzNy44MzcsMCwxLDAtMS4xODQsMS4xODRsMy41NzMsMy41NzMtMy41NzMsMy41NzNhLjgzNy44MzcsMCwwLDAsMS4xODQsMS4xODRsMy41NzMtMy41NzMsMy41NzMsMy41NzNhLjgzNy44MzcsMCwwLDAsMS4xODQtMS4xODRaXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE2MC41IC0xNjAuNTUpXCJcclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBGYWNlYm9vayA9ICh7XHJcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcclxuICB3aWR0aCA9ICcxN3B4JyxcclxuICBoZWlnaHQgPSAnMTdweCcsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9JzAgMCAxNyAxNydcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkYXRhLW5hbWU9J19pb25pY29uc19zdmdfbG9nby1mYWNlYm9vayAoMSknXHJcbiAgICAgICAgZD0nTTgwLjA2MSw2NEg2NC45MzlhLjkzOS45MzksMCwwLDAtLjkzOS45MzlWODAuMDYxYS45MzkuOTM5LDAsMCwwLC45MzkuOTM5SDcyLjVWNzQuMjcxSDcwLjQ2OFY3MS43OTJINzIuNVY2OS45NTlhMy4yMywzLjIzLDAsMCwxLDMuNDg0LTMuMzkxYy45MzksMCwxLjk0OC4wNzEsMi4xODMuMXYyLjI5M0g3Ni42Yy0xLjA2NywwLTEuMjcxLjUtMS4yNzEsMS4yNDh2MS41OGgyLjU0MWwtLjMzMiwyLjQ3OUg3NS4zMzNWODFoNC43MjhBLjkzOS45MzksMCwwLDAsODEsODAuMDYxVjY0LjkzOUEuOTM5LjkzOSwwLDAsMCw4MC4wNjEsNjRaJ1xyXG4gICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC02NCAtNjQpJ1xyXG4gICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IEdvb2dsZSA9ICh7XHJcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcclxuICB3aWR0aCA9ICcxN3B4JyxcclxuICBoZWlnaHQgPSAnMTdweCcsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9JzAgMCAxNi42NzcgMTcnXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD0nTTY4LjU3OSw1NS4yOWwtLjA4Ni0uMzY0SDYwLjU4NHYzLjM0OGg0LjcyNWE0LjczLDQuNzMsMCwwLDEtNC42MjcsMy41NTYsNS41MzMsNS41MzMsMCwwLDEtMy43MjQtMS40ODQsNS4zMTYsNS4zMTYsMCwwLDEtMS41ODYtMy43NTIsNS40ODMsNS40ODMsMCwwLDEsMS41NTctMy43NDgsNS4zLDUuMywwLDAsMSwzLjctMS40NDcsNC44MjUsNC44MjUsMCwwLDEsMy4xNDcsMS4yMjZsMi4zNzktMi4zNjdhOC40MTcsOC40MTcsMCwwLDAtNS42LTIuMTU4QTguMzkxLDguMzkxLDAsMCwwLDUyLDU2LjYsOC41NDEsOC41NDEsMCwwLDAsNTQuMzI2LDYyLjVhOC44NzMsOC44NzMsMCwwLDAsNi40LDIuNiw3Ljg5MSw3Ljg5MSwwLDAsMCw1Ljc0Ny0yLjQxNiw4LjQ4Niw4LjQ4NiwwLDAsMCwyLjIwNy01Ljg3OCw5Ljc4OCw5Ljc4OCwwLDAsMC0uMS0xLjUxNlonXHJcbiAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyIC00OC4xKSdcclxuICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBOb0NhcnRCYWcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMjMxLjkxXCJcclxuICAgICAgaGVpZ2h0PVwiMjkyXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyMzEuOTEgMjkyXCJcclxuICAgID5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cImxpbmVhci1ncmFkaWVudFwiXHJcbiAgICAgICAgICB4MT1cIjFcIlxyXG4gICAgICAgICAgeTE9XCIwLjQzOVwiXHJcbiAgICAgICAgICB4Mj1cIjAuMzY5XCJcclxuICAgICAgICAgIHkyPVwiMVwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjMDI5NDc3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMDA5ZTdmXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDxnXHJcbiAgICAgICAgaWQ9XCJub19jYXJ0X2luX2JhZ18yXCJcclxuICAgICAgICBkYXRhLW5hbWU9XCJubyBjYXJ0IGluIGJhZyAyXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEzODggLTM1MSlcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGVsbGlwc2VcclxuICAgICAgICAgIGlkPVwiRWxsaXBzZV8yODczXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIkVsbGlwc2UgMjg3M1wiXHJcbiAgICAgICAgICBjeD1cIjExNS45NTVcIlxyXG4gICAgICAgICAgY3k9XCIyNy4zNjZcIlxyXG4gICAgICAgICAgcng9XCIxMTUuOTU1XCJcclxuICAgICAgICAgIHJ5PVwiMjcuMzY2XCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzg4IDU4OC4yNjgpXCJcclxuICAgICAgICAgIGZpbGw9XCIjZGRkXCJcclxuICAgICAgICAgIG9wYWNpdHk9XCIwLjI1XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2OTFcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY5MVwiXHJcbiAgICAgICAgICBkPVwiTTI5LjYzMiwwSDE3MC4zNjhBMjkuODI4LDI5LjgyOCwwLDAsMSwyMDAsMzAuMDIxVjIwOS45NzlBMjkuODI4LDI5LjgyOCwwLDAsMSwxNzAuMzY4LDI0MEgyOS42MzJBMjkuODI4LDI5LjgyOCwwLDAsMSwwLDIwOS45NzlWMzAuMDIxQTI5LjgyOCwyOS44MjgsMCwwLDEsMjkuNjMyLDBaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDAzIDM4MSlcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDllN2ZcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzE4NTJcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDE4NTJcIlxyXG4gICAgICAgICAgZD1cIk0zMCwwSDE3MGEzMCwzMCwwLDAsMSwzMCwzMHYwYTMwLDMwLDAsMCwxLTMwLDMwSDEyLjg1N0ExMi44NTcsMTIuODU3LDAsMCwxLDAsNDcuMTQzVjMwQTMwLDMwLDAsMCwxLDMwLDBaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDAzIDM4MSlcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDY4NTRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzE4NTNcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDE4NTNcIlxyXG4gICAgICAgICAgZD1cIk00MiwwSDE1OGE0Miw0MiwwLDAsMSw0Miw0MnYwYTE4LDE4LDAsMCwxLTE4LDE4SDE4QTE4LDE4LDAsMCwxLDAsNDJ2MEE0Miw0MiwwLDAsMSw0MiwwWlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQwMyAzODEpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2ODVcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY4NVwiXHJcbiAgICAgICAgICBkPVwiTTQ0Ni4zMSwyNDYuMDU2YTMwLDMwLDAsMSwxLDMwLTMwQTMwLjAzNCwzMC4wMzQsMCwwLDEsNDQ2LjMxLDI0Ni4wNTZabTAtNTMuMjk0QTIzLjMsMjMuMywwLDEsMCw0NjkuOSwyMTYuMDU2LDIzLjQ3MSwyMy40NzEsMCwwLDAsNDQ2LjMxLDE5Mi43NjJaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDU2LjY5IDE2NC45NDQpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2ODZcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY4NlwiXHJcbiAgICAgICAgICBkPVwiTTQ0Ni4zMSwzNzUuMTgxYTMwLDMwLDAsMSwxLDMwLTMwQTMwLjAzNCwzMC4wMzQsMCwwLDEsNDQ2LjMxLDM3NS4xODFabTAtNTMuMjk0QTIzLjMsMjMuMywwLDEsMCw0NjkuOSwzNDUuMTgxLDIzLjQ3MSwyMy40NzEsMCwwLDAsNDQ2LjMxLDMyMS44ODdaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDU3Ljc5MyA5NS42ODQpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA5ZTdmXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgIGlkPVwiRWxsaXBzZV8yODc0XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIkVsbGlwc2UgMjg3NFwiXHJcbiAgICAgICAgICBjeD1cIjI4LjY4OVwiXHJcbiAgICAgICAgICBjeT1cIjI4LjY4OVwiXHJcbiAgICAgICAgICByPVwiMjguNjg5XCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDczLjgyMyA1MTEuMDQ2KVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICBpZD1cIkVsbGlwc2VfMjg3NVwiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJFbGxpcHNlIDI4NzVcIlxyXG4gICAgICAgICAgY3g9XCIxNS4wNDZcIlxyXG4gICAgICAgICAgY3k9XCIxNS4wNDZcIlxyXG4gICAgICAgICAgcj1cIjE1LjA0NlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ4MS40MDEgNTQ3Ljg1NCkgcm90YXRlKC00NSlcIlxyXG4gICAgICAgICAgZmlsbD1cIiMwMDllN2ZcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF8xODY4N1wiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4Njg3XCJcclxuICAgICAgICAgIGQ9XCJNMzk5LjcxLDUzMS4yN2E3MS43NTUsNzEuNzU1LDAsMCwxLDEyLjY1LTEzLjZjMy40LTIuODYzLTEuNS03LjcyNi00Ljg4Mi00Ljg4MmE3OC4zOTIsNzguMzkyLDAsMCwwLTEzLjczLDE1Yy0yLjU2LDMuNjQ0LDMuNDI0LDcuMSw1Ljk2MiwzLjQ4NVpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNjAuNTc5IC0zNS43MDMpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2ODhcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY4OFwiXHJcbiAgICAgICAgICBkPVwiTTQxMi45MTMsNTI3Ljc4NmE3OC40MTksNzguNDE5LDAsMCwwLTEzLjczLTE1Yy0zLjM4LTIuODQzLTguMjg5LDIuMDE3LTQuODgyLDQuODgyYTcxLjc4NSw3MS43ODUsMCwwLDEsMTIuNjUsMTMuNmMyLjUzNSwzLjYwOSw4LjUyNS4xNjIsNS45NjItMy40ODVaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDYwLjU2NiAtMzUuNzA0KVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4Njg5XCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2ODlcIlxyXG4gICAgICAgICAgZD1cIk01ODMuMjc4LDUyNy43ODZhNzguNDE3LDc4LjQxNywwLDAsMC0xMy43My0xNWMtMy4zOC0yLjg0My04LjI4OSwyLjAxNy00Ljg4Miw0Ljg4MmE3MS43NjgsNzEuNzY4LDAsMCwxLDEyLjY1LDEzLjZjMi41MzUsMy42MDksOC41MjUuMTYyLDUuOTYyLTMuNDg1WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTcwLjMwNCAtMzUuNzA0KVwiXHJcbiAgICAgICAgICBmaWxsPVwiIzAwNjg1NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgaWQ9XCJQYXRoXzE4NjkwXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTg2OTBcIlxyXG4gICAgICAgICAgZD1cIk01NzAuMDc1LDUzMS4yN2E3MS43Nyw3MS43NywwLDAsMSwxMi42NS0xMy42YzMuNC0yLjg2My0xLjUtNy43MjYtNC44ODItNC44ODJhNzguNDA3LDc4LjQwNywwLDAsMC0xMy43MywxNWMtMi41NiwzLjY0NCwzLjQyNCw3LjEsNS45NjIsMy40ODVaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NzAuMzE4IC0zNS43MDMpXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDA2ODU0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2OTJcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY5MlwiXHJcbiAgICAgICAgICBkPVwiTTMwMS4yNDMsMjg3LjQ2NGExOS4xMTUsMTkuMTE1LDAsMCwxLDguMDcxLDkuMDc3LDE5LjYzNywxOS42MzcsMCwwLDEsMS42LDcuODh2MjYuMDg1YTE5LjM0OSwxOS4zNDksMCwwLDEtOS42NzIsMTYuOTU3Yy0xMC4wNDgtNi44NTgtMTYuNTQ0LTE3Ljc0Mi0xNi41NDQtMzBTMjkxLjIsMjk0LjMyMiwzMDEuMjQzLDI4Ny40NjRaXCJcclxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjkyLjMwMSAxMDEuNTM2KVwiXHJcbiAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTg2OTNcIlxyXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxODY5M1wiXHJcbiAgICAgICAgICBkPVwiTTI5NC4zNzEsMjg3LjQ2NGExOS4xMTUsMTkuMTE1LDAsMCwwLTguMDcxLDkuMDc3LDE5LjYzNywxOS42MzcsMCwwLDAtMS42LDcuODh2MjYuMDg1YTE5LjM0OSwxOS4zNDksMCwwLDAsOS42NzIsMTYuOTU3YzEwLjA0OC02Ljg1OCwxNi41NDQtMTcuNzQyLDE2LjU0NC0zMFMzMDQuNDE5LDI5NC4zMjIsMjk0LjM3MSwyODcuNDY0WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTExOC4zMDEgMTAxLjUzNilcIlxyXG4gICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IFNob3BwaW5nQmFnID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3Bhbj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICB3aWR0aD0nMTIuNjg2J1xyXG4gICAgICAgIGhlaWdodD0nMTYnXHJcbiAgICAgICAgdmlld0JveD0nMCAwIDEyLjY4NiAxNidcclxuICAgICAgPlxyXG4gICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMjcwNCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI3LjAyMyAtMiknPlxyXG4gICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxNycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjcuMDIzIDUuMTU2KSc+XHJcbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTYnPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9J1BhdGggMydcclxuICAgICAgICAgICAgICAgIGQ9J002NS43LDExMS4wNDNsLS43MTQtOUExLjEyNSwxLjEyNSwwLDAsMCw2My44NzEsMTAxSDYyLjQ1OVYxMDMuMWEuNDY5LjQ2OSwwLDEsMS0uOTM3LDBWMTAxSDU3LjIxMVYxMDMuMWEuNDY5LjQ2OSwwLDEsMS0uOTM3LDBWMTAxSDU0Ljg2MmExLjEyNSwxLjEyNSwwLDAsMC0xLjExNywxLjAzM2wtLjcxNSw5LjAwNmEyLjYwNSwyLjYwNSwwLDAsMCwyLjYsMi44SDYzLjFhMi42MDUsMi42MDUsMCwwLDAsMi42LTIuODA2Wm0tNC4yMjQtNC41ODUtMi40MjQsMi40MjRhLjQ2OC40NjgsMCwwLDEtLjY2MywwbC0xLjEzNi0xLjEzNmEuNDY5LjQ2OSwwLDAsMSwuNjYzLS42NjNsLjguOCwyLjA5Mi0yLjA5MmEuNDY5LjQ2OSwwLDEsMSwuNjYzLjY2M1onXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTMuMDIzIC0xMDEuMDA1KSdcclxuICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMC4yNzQgMiknPlxyXG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE4Jz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPSdQYXRoIDQnXHJcbiAgICAgICAgICAgICAgICBkPSdNMTYwLjEzMiwwYTMuMSwzLjEsMCwwLDAtMy4wOTMsMy4wOTN2LjA2M2guOTM3VjMuMDkzYTIuMTU1LDIuMTU1LDAsMSwxLDQuMzExLDB2LjA2M2guOTM3VjMuMDkzQTMuMSwzLjEsMCwwLDAsMTYwLjEzMiwwWidcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNTcuMDM5KSdcclxuICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgU2hvcHBpbmdCYWdMYXJnZSA9ICh7XHJcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcclxuICB3aWR0aCA9ICcxOHB4JyxcclxuICBoZWlnaHQgPSAnMThweCcsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9JzAgMCAyMy43ODYgMzAnXHJcbiAgICA+XHJcbiAgICAgIDxnIGRhdGEtbmFtZT0nc2hvcHBpbmctYmFnICgzKScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUzLjAyMyknPlxyXG4gICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMjcwNCc+XHJcbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE3JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1My4wMjMgNS45MTgpJz5cclxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxNic+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nUGF0aCAzJ1xyXG4gICAgICAgICAgICAgICAgZD0nTTc2LjgsMTE5LjgyNmwtMS4zNC0xNi44ODFBMi4xMDksMi4xMDksMCwwLDAsNzMuMzYyLDEwMUg3MC43MTZ2My45MjFhLjg3OS44NzksMCwxLDEtMS43NTcsMFYxMDFINjAuODc1djMuOTIxYS44NzkuODc5LDAsMSwxLTEuNzU3LDBWMTAxSDU2LjQ3MmEyLjEwOSwyLjEwOSwwLDAsMC0yLjA5NCwxLjkzN2wtMS4zNCwxNi44ODZhNC44ODUsNC44ODUsMCwwLDAsNC44Nyw1LjI1OUg3MS45MjZhNC44ODQsNC44ODQsMCwwLDAsNC44Ny01LjI2MVptLTcuOTItOC42LTQuNTQ0LDQuNTQ0YS44NzguODc4LDAsMCwxLTEuMjQzLDBsLTIuMTMtMi4xM0EuODc4Ljg3OCwwLDAsMSw2Mi4yLDExMi40bDEuNTA5LDEuNTA4LDMuOTIzLTMuOTIzYS44NzkuODc5LDAsMSwxLDEuMjQyLDEuMjQzWidcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01My4wMjMgLTEwMS4wMDUpJ1xyXG4gICAgICAgICAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxOScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTkuMTE4KSc+XHJcbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTgnPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9J1BhdGggNCdcclxuICAgICAgICAgICAgICAgIGQ9J00xNjIuODM4LDBhNS44MDYsNS44MDYsMCwwLDAtNS44LDUuOHYuMTE5SDE1OC44VjUuOGE0LjA0Miw0LjA0MiwwLDEsMSw4LjA4Mywwdi4xMTloMS43NTdWNS44QTUuODA2LDUuODA2LDAsMCwwLDE2Mi44MzgsMFonXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTU3LjAzOSknXHJcbiAgICAgICAgICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgSlNPTkNvbmZpZz0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcclxuaW1wb3J0IHsgY29tcG9zZSwgbGF5b3V0LCBzcGFjZSwgY29sb3IsIGJvcmRlciB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xyXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQ8YW55PihcclxuICBjc3Moe1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwOiAnMCAxOHB4JyxcclxuICAgIGFwcGVhcmFuY2U6ICdub25lJyxcclxuICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgIGZvbnRTaXplOiAnYmFzZScsXHJcbiAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gICAgYm9yZGVyQ29sb3I6ICdncmF5LjUwMCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICdiYXNlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcclxuICAgIGhlaWdodDogJzQ4cHgnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlJyxcclxuICAgIC8vIG1iOiAzLFxyXG4gICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgIH0sXHJcbiAgfSksXHJcbiAge1xyXG4gICAgJyY6aG92ZXIsJjpmb2N1cyc6IHtcclxuICAgICAgb3V0bGluZTogMCxcclxuICAgIH0sXHJcblxyXG4gICAgJyY6OnBsYWNlaG9sZGVyJzoge1xyXG4gICAgICBjb2xvcjogJycsXHJcbiAgICB9LFxyXG4gICAgJyY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbic6IHtcclxuICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgfSxcclxuICAgICcmLmRpc2FibGVkJzoge1xyXG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXHJcbiAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wb3NlKGxheW91dCwgc3BhY2UsIGNvbG9yLCBib3JkZXIpXHJcbik7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XHJcbmV4cG9ydCBjb25zdCBJdGVtQm94ID0gc3R5bGVkLmRpdihcclxuICBjc3Moe1xyXG4gICAgZm9udFNpemU6ICdiYXNlJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIHB5OiAxNSxcclxuICAgIHB4OiAyNSxcclxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZGAsXHJcbiAgICBib3JkZXJCb3R0b21Db2xvcjogJ2dyYXkuMjAwJyxcclxuICB9KSxcclxuICB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9XHJcbik7XHJcbmV4cG9ydCBjb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXYoe1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICBtYXJnaW5MZWZ0OiAnMTVweCcsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nKHtcclxuICB3aWR0aDogNjAsXHJcbiAgaGVpZ2h0OiA2MCxcclxuICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgbWFyZ2luOiAnMCAxNXB4JyxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBOYW1lID0gc3R5bGVkLnNwYW4oXHJcbiAgY3NzKHtcclxuICAgIGZvbnRXZWlnaHQ6ICdtZCcsXHJcbiAgICBjb2xvcjogJ3RleHQuYm9sZCcsXHJcbiAgICBtYjogJzBweCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgfSlcclxuKTtcclxuZXhwb3J0IGNvbnN0IFByaWNlID0gc3R5bGVkLnNwYW4oXHJcbiAgY3NzKHtcclxuICAgIGNvbG9yOiAncHJpbWFyeS5yZWd1bGFyJyxcclxuICAgIG10OiAnMTBweCcsXHJcbiAgICBtYjogJzEwcHgnLFxyXG4gIH0pXHJcbik7XHJcbmV4cG9ydCBjb25zdCBXZWlnaHQgPSBzdHlsZWQuc3BhbihcclxuICBjc3Moe1xyXG4gICAgZm9udFNpemU6ICdzbScsXHJcbiAgICBmb250V2VpZ2h0OiAncmVndWxhcicsXHJcbiAgICBjb2xvcjogJ3RleHQucmVndWxhcicsXHJcbiAgICBtYjogJzVweCcsXHJcbiAgfSlcclxuKTtcclxuZXhwb3J0IGNvbnN0IFRvdGFsID0gc3R5bGVkLnNwYW4oXHJcbiAgY3NzKHtcclxuICAgIGNvbG9yOiAndGV4dC5ib2xkJyxcclxuICAgIG1sOiAnYXV0bycsXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZW1vdmVCdXR0b24gPSBzdHlsZWQuYnV0dG9uKHtcclxuICBwYWRkaW5nOiAnNXB4JyxcclxuICBib3JkZXI6IDAsXHJcbiAgb3V0bGluZTogMCxcclxuICBtYXJnaW5MZWZ0OiAnMTVweCcsXHJcbiAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyxcclxuICB0cmFuc2l0aW9uOiAnYWxsIDAuNHMgZWFzZScsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG5cclxuICAnJjpob3Zlcic6IHtcclxuICAgIGNvbG9yOiAncmVkJyxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gJy4uL2NvdW50ZXIvY291bnRlcic7XHJcbmltcG9ydCB7IENsb3NlSWNvbiB9IGZyb20gJ0AvYXNzZXRzL2ljb25zL0Nsb3NlSWNvbic7XHJcbmltcG9ydCB7XHJcbiAgSXRlbUJveCxcclxuICBJbWFnZSxcclxuICBJbmZvcm1hdGlvbixcclxuICBOYW1lLFxyXG4gIFByaWNlLFxyXG4gIFdlaWdodCxcclxuICBUb3RhbCxcclxuICBSZW1vdmVCdXR0b24sXHJcbn0gZnJvbSAnLi9jYXJ0LWl0ZW0uc3R5bGUnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBkYXRhOiBhbnk7XHJcbiAgb25EZWNyZW1lbnQ6ICgpID0+IHZvaWQ7XHJcbiAgb25JbmNyZW1lbnQ6ICgpID0+IHZvaWQ7XHJcbiAgb25SZW1vdmU6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0SXRlbTogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBkYXRhLFxyXG4gIG9uRGVjcmVtZW50LFxyXG4gIG9uSW5jcmVtZW50LFxyXG4gIG9uUmVtb3ZlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCB0aHVtYkltYWdlLCBwcmljZSwgc2FsZVByaWNlLCB1bml0LCBjb3VudEluU3RvY2sgfSA9IGRhdGE7XHJcbiAgY29uc3QgZGlzcGxheVByaWNlID0gc2FsZVByaWNlID8gc2FsZVByaWNlIDogcHJpY2U7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJdGVtQm94PlxyXG4gICAgICA8Q291bnRlclxyXG4gICAgICAgIHZhbHVlPXtkYXRhLmNhcnRRdWFudGl0eX1cclxuICAgICAgICBvbkRlY3JlbWVudD17b25EZWNyZW1lbnR9XHJcbiAgICAgICAgb25JbmNyZW1lbnQ9e29uSW5jcmVtZW50fVxyXG4gICAgICAgIHZhcmlhbnQ9XCJsaWdodFZlcnRpY2FsXCJcclxuICAgICAgLz5cclxuICAgICAgPEltYWdlIHNyYz17dGh1bWJJbWFnZX0gLz5cclxuICAgICAgPEluZm9ybWF0aW9uPlxyXG4gICAgICAgIDxOYW1lPntuYW1lfTwvTmFtZT5cclxuICAgICAgICA8UHJpY2U+XHJcbiAgICAgICAgICB7ZGlzcGxheVByaWNlfVxyXG4gICAgICAgIDwvUHJpY2U+XHJcbiAgICAgICAgPFdlaWdodD5cclxuICAgICAgICAgIHsvKntxdWFudGl0eX0gWCB7dW5pdH0qL31cclxuICAgICAgICA8L1dlaWdodD5cclxuICAgICAgPC9JbmZvcm1hdGlvbj5cclxuICAgICAgPFRvdGFsPlxyXG4gICAgICAgIHsvKnsocXVhbnRpdHkgKiBkaXNwbGF5UHJpY2UpLnRvRml4ZWQoMil9Ki99XHJcbiAgICAgIDwvVG90YWw+XHJcbiAgICAgIDxSZW1vdmVCdXR0b24gb25DbGljaz17b25SZW1vdmV9PlxyXG4gICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgPC9SZW1vdmVCdXR0b24+XHJcbiAgICA8L0l0ZW1Cb3g+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDYXJ0UG9wdXBCdXR0b25TdHlsZWQsXHJcbiAgQnV0dG9uSW1nQm94LFxyXG4gIEl0ZW1Db3VudCxcclxuICBQcmljZUJveCxcclxuICBDYXJ0UG9wdXBCb3hCdXR0b24sXHJcbiAgUHJpY2VCb3hBbHQsXHJcbiAgVG90YWxJdGVtcyxcclxufSBmcm9tICcuL2NhcnQtcG9wdXAuc3R5bGUnO1xyXG5pbXBvcnQgeyBTaG9wcGluZ0JhZyB9IGZyb20gJ0AvYXNzZXRzL2ljb25zL1Nob3BwaW5nQmFnJztcclxuXHJcbnR5cGUgQ2FydEJ1dHRvblByb3BzID0ge1xyXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcclxuICBpdGVtQ291bnQ/OiBudW1iZXI7XHJcbiAgaXRlbVBvc3RmaXg/OiBhbnk7XHJcbiAgcHJpY2U/OiBudW1iZXI7XHJcbiAgcHJpY2VQcmVmaXg/OiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/OiAoZTogYW55KSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgQ2FydFBvcHVwQnV0dG9uOiBSZWFjdC5GQzxDYXJ0QnV0dG9uUHJvcHM+ID0gKHtcclxuICBpdGVtQ291bnQsXHJcbiAgaXRlbVBvc3RmaXggPSAnaXRlbXMnLFxyXG4gIHByaWNlLFxyXG4gIHByaWNlUHJlZml4ID0gJyQnLFxyXG4gIHN0eWxlLFxyXG4gIG9uQ2xpY2ssXHJcbiAgY2xhc3NOYW1lLFxyXG59KSA9PiAoXHJcbiAgPENhcnRQb3B1cEJ1dHRvblN0eWxlZCBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgIDxCdXR0b25JbWdCb3g+XHJcbiAgICAgIDxTaG9wcGluZ0JhZyAvPlxyXG4gICAgPC9CdXR0b25JbWdCb3g+XHJcbiAgICA8SXRlbUNvdW50PlxyXG4gICAgICB7aXRlbUNvdW50fSB7aXRlbVBvc3RmaXh9XHJcbiAgICA8L0l0ZW1Db3VudD5cclxuICAgIDxQcmljZUJveD5cclxuICAgICAge3ByaWNlUHJlZml4fVxyXG4gICAgICB7cGFyc2VGbG9hdChgJHtwcmljZX1gKS50b0ZpeGVkKDIpfVxyXG4gICAgPC9QcmljZUJveD5cclxuICA8L0NhcnRQb3B1cEJ1dHRvblN0eWxlZD5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBCb3hlZENhcnRCdXR0b246IFJlYWN0LkZDPENhcnRCdXR0b25Qcm9wcz4gPSAoe1xyXG4gIGl0ZW1Db3VudCxcclxuICBpdGVtUG9zdGZpeCA9ICdpdGVtcycsXHJcbiAgcHJpY2UsXHJcbiAgcHJpY2VQcmVmaXggPSAnJCcsXHJcbiAgc3R5bGUsXHJcbiAgb25DbGljayxcclxuICBjbGFzc05hbWUsXHJcbn0pID0+IChcclxuICA8Q2FydFBvcHVwQm94QnV0dG9uIHN0eWxlPXtzdHlsZX0gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgPFRvdGFsSXRlbXM+XHJcbiAgICAgIDxTaG9wcGluZ0JhZyAvPlxyXG4gICAgICB7aXRlbUNvdW50fSB7aXRlbVBvc3RmaXh9XHJcbiAgICA8L1RvdGFsSXRlbXM+XHJcbiAgICA8UHJpY2VCb3hBbHQ+XHJcbiAgICAgIHtwcmljZVByZWZpeH1cclxuICAgICAge3BhcnNlRmxvYXQoYCR7cHJpY2V9YCkudG9GaXhlZCgyKX1cclxuICAgIDwvUHJpY2VCb3hBbHQ+XHJcbiAgPC9DYXJ0UG9wdXBCb3hCdXR0b24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0UG9wdXBCdXR0b247XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcblxyXG5jb25zdCBDYXJ0UG9wdXBCdXR0b25TdHlsZWQgPSBzdHlsZWQoJ2J1dHRvbicpYFxyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICBib3gtc2hhZG93OiAke3RoZW1lR2V0KCdzaGFkb3dzLmJpZycsICcwIDIxcHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nOiAycHggMnB4IDJweCAzMHB4O1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTgxcHgpIHtcclxuICAgICY6bm90KC5maXhlZENhcnRQb3B1cCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbkltZ0JveCA9IHN0eWxlZCgnc3BhbicpYFxyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1Db3VudCA9IHN0eWxlZCgnc3BhbicpYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IFByaWNlQm94ID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgd2lkdGg6IDU2cHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMueHMnLCAnMTInKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcnRQb3B1cEJveEJ1dHRvbiA9IHN0eWxlZCgnYnV0dG9uJylgXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwJSAwJSAwJSAzMCU7XHJcbiAgYm9yZGVyOiAjMDA5RTdGIDFweCBzb2xpZDtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogJHt0aGVtZUdldCgnc2hhZG93cy5iaWcnLCAnMCAyMXB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTQ2cHg7XHJcbiAgei1pbmRleDogOTk7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUb3RhbEl0ZW1zID0gc3R5bGVkKCdzcGFuJylgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuXHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcmljZUJveEFsdCA9IHN0eWxlZCgnc3BhbicpYFxyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAxNSUgMCUgMCUgMTUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5RTdGJyl9O1xyXG4gIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQge1xyXG4gIEJ1dHRvbkltZ0JveCxcclxuICBDYXJ0UG9wdXBCdXR0b25TdHlsZWQsXHJcbiAgSXRlbUNvdW50LFxyXG4gIFByaWNlQm94LFxyXG4gIENhcnRQb3B1cEJveEJ1dHRvbixcclxuICBQcmljZUJveEFsdCxcclxuICBUb3RhbEl0ZW1zLFxyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdjb21wb25lbnRzL090aGVycy9idXR0b24vYnV0dG9uJztcclxuZXhwb3J0IHsgQnV0dG9uIH07XHJcblxyXG5leHBvcnQgY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiA0MHB4IDYwcHggMDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHggMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gc3R5bGVkLmgzYFxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmhlYWRpbmcnLCAnc2Fucy1zZXJpZicpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5sZycsICcyMScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN1YkhlYWRpbmcgPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9mZmVyU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4yMDAnLCAnI0Y3RjdGNycpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBPZmZlciA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4gIG1hcmdpbjogMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWxwZXJUZXh0ID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5zbScsICcxMycpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGEge1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ibHVlLmxpbmsnLCAnIzQyODVmNCcpfTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuYDtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDQ4cHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuMjAwJywgJyNmN2Y3ZjcnKX07XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuNzAwJywgJyNlNmU2ZTYnKX07XHJcbi8vICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuLy8gICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4vLyAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbi8vICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbi8vICAgcGFkZGluZzogMCAxOHB4O1xyXG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2U7XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbi8vICAgJjpob3ZlcixcclxuLy8gICAmOmZvY3VzIHtcclxuLy8gICAgIG91dGxpbmU6IDA7XHJcbi8vICAgfVxyXG5cclxuLy8gICAmOmZvY3VzIHtcclxuLy8gICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgJjo6cGxhY2Vob2xkZXIge1xyXG4vLyAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuLy8gICAgIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4ICsgMXB4KTtcclxuLy8gICB9XHJcblxyXG4vLyAgICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbi8vICAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbi8vICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vICAgfVxyXG5cclxuLy8gICAmLmRpc2FibGVkIHtcclxuLy8gICAgIC5pbm5lci13cmFwIHtcclxuLy8gICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuLy8gICAgICAgb3BhY2l0eTogMC42O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXZpZGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjUwMCcsICcjZjFmMWYxJyl9O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weCAtIDFweCk7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBXcmFwcGVyLFxyXG4gIENvbnRhaW5lcixcclxuICBIZWFkaW5nLFxyXG4gIFN1YkhlYWRpbmcsXHJcbiAgLy8gSW5wdXQsXHJcbiAgQnV0dG9uLFxyXG4gIExpbmtCdXR0b24sXHJcbiAgT2ZmZXIsXHJcbn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi1mb3JtLnN0eWxlJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdjb21wb25lbnRzL090aGVycy9mb3Jtcy9pbnB1dCc7XHJcbmNvbnN0IEZvcmdvdFBhc3N3b3JkTW9kYWw6UmVhY3QuRkM8e3NldEN1cnJlbnRGb3JtOih2YWx1ZTonc2lnblVwJ3wnZm9yZ290UGFzcyd8J3NpZ25JbicpPT52b2lkfT49KHtzZXRDdXJyZW50Rm9ybX0pPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZVNpZ25JbkZvcm0gPSAoKSA9PiB7XHJcbiAgICAgIHNldEN1cnJlbnRGb3JtKCdzaWduSW4nKVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDMwIH19PlxyXG4gICAgICAgIDxIZWFkaW5nPlxyXG4gICAgICAgICAgRm9yZ290IFBhc3N3b3JkXHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgICA8U3ViSGVhZGluZz5cclxuICAgICAgICAgIFdlJ2xsIHNlbmQgeW91IGEgbGluayB0byByZXNldCB5b3VyIHBhc3N3b3JkXHJcbiAgICAgICAgPC9TdWJIZWFkaW5nPlxyXG5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3Mgb3IgQ29udGFjdCBOby5cIlxyXG4gICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgbWI9JzEwcHgnXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICA+XHJcbiAgICAgICAgICBSZXNldCBQYXNzd29yZFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxPZmZlciBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwIDAnIH19PlxyXG4gICAgICAgICAgQmFjayB0b3snICd9XHJcbiAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWduSW5Gb3JtfT5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cclxuICAgICAgICA8L09mZmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkTW9kYWxcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZ25JbkZvcm0gZnJvbSAnLi9sb2dpbic7XHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9yZWdpc3Rlcic7XHJcbmltcG9ydCBGb3Jnb3RQYXNzRm9ybSBmcm9tICcuL2ZvcmdvdC1wYXNzd29yZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQge2Nsb3NlTW9kYWx9IGZyb20gXCJAcmVkcS9yZXVzZS1tb2RhbFwiO1xyXG5jb25zdCBBdXRoZW50aWNhdGlvbkZvcm09KHtyb3V0ZXJ9KT0+IHtcclxuICBjb25zdCB7aXNBdXRoZW50aWNhdGVkfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLmdsb2JhbFJlZHVjZXIpO1xyXG4gIGNvbnN0IFtjdXJyZW50Rm9ybSxzZXRDdXJyZW50Rm9ybV09dXNlU3RhdGU8J3NpZ25VcCd8J2ZvcmdvdFBhc3MnfCdzaWduSW4nPignc2lnblVwJylcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKGlzQXV0aGVudGljYXRlZCl7XHJcbiAgICAgIGlmKHJvdXRlci5wYXRobmFtZT09PScvbG9naW4nKXtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgY2xvc2VNb2RhbCgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFtpc0F1dGhlbnRpY2F0ZWRdKVxyXG4gIGlmIChjdXJyZW50Rm9ybSA9PT0gJ3NpZ25JbicpIHtcclxuICAgIHJldHVybiA8U2lnbkluRm9ybSAgc2V0Q3VycmVudEZvcm09e3NldEN1cnJlbnRGb3JtfS8+XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudEZvcm0gPT09ICdzaWduVXAnKSB7XHJcbiAgICByZXR1cm4gPFNpZ25VcCBzZXRDdXJyZW50Rm9ybT17c2V0Q3VycmVudEZvcm19Lz5cclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50Rm9ybSA9PT0gICdmb3Jnb3RQYXNzJykge1xyXG4gICAgcmV0dXJuIDxGb3Jnb3RQYXNzRm9ybSAgc2V0Q3VycmVudEZvcm09e3NldEN1cnJlbnRGb3JtfS8+XHJcbiAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEF1dGhlbnRpY2F0aW9uRm9ybSlcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBMaW5rQnV0dG9uLFxyXG4gIEJ1dHRvbixcclxuICBJY29uV3JhcHBlcixcclxuICBXcmFwcGVyLFxyXG4gIENvbnRhaW5lcixcclxuICBMb2dvV3JhcHBlcixcclxuICBIZWFkaW5nLFxyXG4gIFN1YkhlYWRpbmcsXHJcbiAgT2ZmZXJTZWN0aW9uLFxyXG4gIE9mZmVyLFxyXG4gIC8vIElucHV0LFxyXG4gIERpdmlkZXIsXHJcbn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi1mb3JtLnN0eWxlJztcclxuaW1wb3J0IHsgRmFjZWJvb2sgfSBmcm9tICdhc3NldHMvaWNvbnMvRmFjZWJvb2snO1xyXG5pbXBvcnQgeyBHb29nbGUgfSBmcm9tICdhc3NldHMvaWNvbnMvR29vZ2xlJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnQHJlZHEvcmV1c2UtbW9kYWwnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2NvbXBvbmVudHMvT3RoZXJzL2Zvcm1zL2lucHV0JztcclxuaW1wb3J0IHt1c2VMb2dpbkZvcm19IGZyb20gXCJAL2hvb2tzL3VzZUxvZ2luRm9ybVwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtsb2FkVXNlciwgbG9naW59IGZyb20gXCJAL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSBmcm9tIFwiQC91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IHtBVVRIfSBmcm9tIFwiQC9yZWR1eC9kZWZpbmVzXCI7XHJcbmltcG9ydCBUb2FzdCBmcm9tIFwibGlnaHQtdG9hc3RcIjtcclxuaW1wb3J0IHtKU09OQ29uZmlnfSBmcm9tIFwiQC9heGlvc0hlYWRlcnNcIjtcclxuXHJcbmNvbnN0IFNpZ25Jbk1vZGFsOlJlYWN0LkZDPHtzZXRDdXJyZW50Rm9ybToodmFsdWU6J3NpZ25VcCd8J2ZvcmdvdFBhc3MnfCdzaWduSW4nKT0+dm9pZH0+PSh7c2V0Q3VycmVudEZvcm19KT0+IHtcclxuICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgdG9nZ2xlU2lnblVwRm9ybSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRGb3JtKCdzaWduVXAnKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUZvcmdvdFBhc3NGb3JtID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudEZvcm0oJ2ZvcmdvdFBhc3MnKVxyXG4gIH07XHJcbiAgY29uc3Qge2lucHV0cywgaGFuZGxlSW5wdXRDaGFuZ2V9ID0gdXNlTG9naW5Gb3JtKCk7XHJcblxyXG5cclxuICBjb25zdCBsb2dpbkNhbGxiYWNrID1hc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvYXV0aC9sb2dpbmAsXHJcbiAgICAgICAgICB7ZW1haWw6aW5wdXRzLmVtYWlsLCBwYXNzd29yZDppbnB1dHMucGFzc3dvcmR9LFxyXG4gICAgICAgICAgSlNPTkNvbmZpZ1xyXG4gICAgICApXHJcbiAgICAgIGRpc3BhdGNoKGxvZ2luKGRhdGEpKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgSlNPTi5zdHJpbmdpZnkoZGF0YS50b2tlbikpXHJcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGxvYWRVc2VyKCkpXHJcbiAgICAgIFRvYXN0LnN1Y2Nlc3MoJ1N1Y2Nlc3NmdWxseSBsb2dnZWQgaW4nKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIFRvYXN0LmZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvciArJywgUGxlYXNlIHRyeSBhZ2FpbicpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxIZWFkaW5nPlxyXG4gICAgICAgICAgICBXZWxjb21lIEJhY2tcclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuXHJcbiAgICAgICAgICA8U3ViSGVhZGluZz5cclxuICAgICAgICAgICAgTG9naW4gd2l0aCB5b3VyIGVtYWlsICZhbXA7IHBhc3N3b3JkXHJcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17bG9naW5DYWxsYmFja30+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT17XCJlbWFpbFwifVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkIChtaW4gNiBjaGFyYWN0ZXJzKVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbnRpbnVlICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPERpdmlkZXI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgb3JcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvRGl2aWRlcj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI2N2IyJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpbkNhbGxiYWNrfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPEZhY2Vib29rIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIENvbnRpbnVlIHdpdGggRmFjZWJvb2tcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI4NWY0JyB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luQ2FsbGJhY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgICA8R29vZ2xlIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIENvbnRpbnVlIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8T2ZmZXIgc3R5bGU9e3sgcGFkZGluZzogJzIwcHggMCcgfX0+XHJcbiAgICAgICAgICAgIERvbid0IGhhdmUgYW55IGFjY291bnQ/eycgJ31cclxuICAgICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17dG9nZ2xlU2lnblVwRm9ybX0+XHJcbiAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XHJcbiAgICAgICAgICA8L09mZmVyPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICA8T2ZmZXJTZWN0aW9uPlxyXG4gICAgICAgICAgPE9mZmVyPlxyXG4gICAgICAgICAgICBGb3Jnb3QgeW91ciBwYXNzd29yZD9cclxuICAgICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17dG9nZ2xlRm9yZ290UGFzc0Zvcm19PlxyXG4gICAgICAgICAgICAgIFJlc2V0IEl0XHJcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cclxuICAgICAgICAgIDwvT2ZmZXI+XHJcbiAgICAgICAgPC9PZmZlclNlY3Rpb24+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25Jbk1vZGFsXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2NvbXBvbmVudHMvT3RoZXJzL2Zvcm1zL2lucHV0JztcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgSWNvbldyYXBwZXIsXHJcbiAgV3JhcHBlcixcclxuICBDb250YWluZXIsXHJcbiAgTG9nb1dyYXBwZXIsXHJcbiAgSGVhZGluZyxcclxuICBTdWJIZWFkaW5nLFxyXG4gIEhlbHBlclRleHQsXHJcbiAgT2ZmZXIsXHJcbiAgLy8gSW5wdXQsXHJcbiAgRGl2aWRlcixcclxuICBMaW5rQnV0dG9uLFxyXG59IGZyb20gJy4vYXV0aGVudGljYXRpb24tZm9ybS5zdHlsZSc7XHJcbmltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnYXNzZXRzL2ljb25zL0ZhY2Vib29rJztcclxuaW1wb3J0IHsgR29vZ2xlIH0gZnJvbSAnYXNzZXRzL2ljb25zL0dvb2dsZSc7XHJcbmltcG9ydCB7dXNlTG9naW5Gb3JtfSBmcm9tIFwiQC9ob29rcy91c2VMb2dpbkZvcm1cIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7bG9hZFVzZXIsIHJlZ2lzdGVyfSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCB7QVVUSH0gZnJvbSBcIkAvcmVkdXgvZGVmaW5lc1wiO1xyXG5pbXBvcnQge0pTT05Db25maWd9IGZyb20gXCJAL2F4aW9zSGVhZGVyc1wiO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSBcImxpZ2h0LXRvYXN0XCI7XHJcbmNvbnN0IFNpZ251cE1vZGFsOlJlYWN0LkZDPHtzZXRDdXJyZW50Rm9ybToodmFsdWU6J3NpZ25VcCd8J2ZvcmdvdFBhc3MnfCdzaWduSW4nKT0+dm9pZH0+PSh7c2V0Q3VycmVudEZvcm19KT0+IHtcclxuICBjb25zdCB0b2dnbGVTaWduSW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudEZvcm0oJ3NpZ25JbicpXHJcbiAgfTtcclxuICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXHJcbiAgY29uc3Qge2lucHV0cywgaGFuZGxlSW5wdXRDaGFuZ2V9ID0gdXNlTG9naW5Gb3JtKCk7XHJcbiAgY29uc3Qgb25TdWJtaXQ9YXN5bmMgKGUpPT57XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL2F1dGgvcmVnaXN0ZXJgLFxyXG4gICAgICAgICAge2ZpcnN0TmFtZTppbnB1dHMuZmlyc3ROYW1lLGxhc3ROYW1lOmlucHV0cy5sYXN0TmFtZSwgZW1haWw6aW5wdXRzLmVtYWlsLCBwYXNzd29yZDppbnB1dHMucGFzc3dvcmQsIHJvbGU6J3VzZXInfSxcclxuICAgICAgICAgIEpTT05Db25maWdcclxuICAgICAgKVxyXG4gICAgICBkaXNwYXRjaChyZWdpc3RlcihkYXRhKSlcclxuICAgICAgYXdhaXQgbG9hZFVzZXIoKVxyXG4gICAgICBUb2FzdC5zdWNjZXNzKCdTdWNjZXNzZnVsbHkgc2lnbmVkIHVwJylcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIEpTT04uc3RyaW5naWZ5KGRhdGEudG9rZW4pKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIFRvYXN0LmZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRpbmc+XHJcbiAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDxTdWJIZWFkaW5nPlxyXG4gICAgICAgICAgRXZlcnkgZmlsbCBpcyByZXF1aXJlZCBpbiBzaWduIHVwXHJcbiAgICAgICAgPC9TdWJIZWFkaW5nPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSAnRmlyc3QgbmFtZSdcclxuICAgICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9JyNGN0Y3RjcnXHJcbiAgICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgICAgICBuYW1lPSdmaXJzdE5hbWUnXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5maXJzdE5hbWV9XHJcblxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSAnTGFzdCBuYW1lJ1xyXG4gICAgICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9JyNGN0Y3RjcnXHJcbiAgICAgICAgICAgICAgbWI9JzEwcHgnXHJcbiAgICAgICAgICAgICAgbmFtZT0nbGFzdE5hbWUnXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLmxhc3ROYW1lfVxyXG5cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCBBZGRyZXNzJ1xyXG4gICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgbWI9JzEwcHgnXHJcbiAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5lbWFpbH1cclxuXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9ICdQYXNzd29yZCAobWluIDYgY2hhcmFjdGVycyknXHJcbiAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9JyNGN0Y3RjcnXHJcbiAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxIZWxwZXJUZXh0IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAgMzBweCcgfX0+XHJcbiAgICAgICAgICBCeSBzaWduaW5nIHVwLCB5b3UgYWdyZWUgdG9cclxuICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIFRlcm1zICZhbXA7IENvbmRpdGlvblxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9IZWxwZXJUZXh0PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT0nYmlnJyB3aWR0aD0nMTAwJScgdHlwZT0nc3VibWl0Jz5cclxuICAgICAgICAgIENvbnRpbnVlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxEaXZpZGVyPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIG9yXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9EaXZpZGVyPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI2N2IyJyxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICA8RmFjZWJvb2sgLz5cclxuICAgICAgICAgIDwvSWNvbldyYXBwZXI+XHJcbiAgICAgICAgICBDb250aW51ZSB3aXRoIEZhY2Vib29rXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgIHNpemU9J2JpZydcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJyM0Mjg1ZjQnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICA8R29vZ2xlIC8+XHJcbiAgICAgICAgICA8L0ljb25XcmFwcGVyPlxyXG4gICAgICAgICAgQ29udGludWUgd2l0aCBHb29nbGVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8T2ZmZXIgc3R5bGU9e3sgcGFkZGluZzogJzIwcHggMCcgfX0+XHJcbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97JyAnfVxyXG4gICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17dG9nZ2xlU2lnbkluRm9ybX0+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XHJcbiAgICAgICAgPC9PZmZlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXBNb2RhbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuL2NhcnQnO1xyXG5pbXBvcnQgQ2FydFBvcHVwQnV0dG9uLCB7XHJcbiAgQm94ZWRDYXJ0QnV0dG9uLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cy9jYXJ0L3BvcHVwL2NhcnQtcG9wdXAtYnV0dG9uJztcclxuaW1wb3J0IHsgQ2FydFNsaWRlUG9wdXAgfSBmcm9tICcuL2NhcnQuc3R5bGUnO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtjYWxjdWxhdGVUb3RhbFByaWNlfSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FydFV0aWxzXCI7XHJcbmltcG9ydCB7T3BlbkNhcnRNb2RhbH0gZnJvbSBcIkAvT3Blbk1vZGFsRnVuY3Rpb25zXCI7XHJcbmNvbnN0IENhcnRQb3B1cFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgLmNhcnRQb3B1cCB7XHJcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjMjNmZjAwOztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcclxuXHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICAgICAgb3ZlcmZsb3c6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbnR5cGUgQ2FydFByb3BzID0ge1xyXG4gIGRldmljZVR5cGU6IHtcclxuICAgIG1vYmlsZTogYm9vbGVhbjtcclxuICAgIHRhYmxldDogYm9vbGVhbjtcclxuICAgIGRlc2t0b3A6IGJvb2xlYW47XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IENhcnRQb3BVcDogUmVhY3QuRkM8Q2FydFByb3BzPiA9ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldmljZVR5cGU6IHsgbW9iaWxlLCB0YWJsZXQsIGRlc2t0b3AgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICBjb25zdCBbaXNPcGVuLHNldElzT3Blbl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcclxuICBjb25zdCB7Y3VycmVuY3k6e3N5bWJvbH19ID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuc2hvcFJlZHVjZXIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2RhbCA9ICgpID0+IHtcclxuICAgIE9wZW5DYXJ0TW9kYWwoKVxyXG4gIH07XHJcblxyXG4gIGxldCBjYXJ0U2xpZGVyQ2xhc3MgPSBpc09wZW4gPyAnY2FydFBvcHVwRml4ZWQnIDogJyc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge21vYmlsZSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Q2FydFBvcHVwU3R5bGUgLz5cclxuICAgICAgICAgICAgICA8Q2FydFBvcHVwQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJvZHVjdC1jYXJ0J1xyXG4gICAgICAgICAgICAgICAgICBpdGVtQ291bnQ9e2NhcnRTdGF0ZS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1Qb3N0Zml4PXtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0U3RhdGUubGVuZ3RoID4gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcHJpY2U9e2NhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlKX1cclxuICAgICAgICAgICAgICAgICAgcHJpY2VQcmVmaXg9e3N5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW9kYWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Q2FydFNsaWRlUG9wdXAgY2xhc3NOYW1lPXtjYXJ0U2xpZGVyQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcnQgb25DbG9zZUJ0bkNsaWNrPXsoKT0+e3NldElzT3BlbihmYWxzZSl9fSBzY3JvbGxiYXJIZWlnaHQ9JzEwMHZoJyAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NhcnRTbGlkZVBvcHVwPlxyXG5cclxuICAgICAgICAgICAgICA8Qm94ZWRDYXJ0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJvZHVjdC1jYXJ0J1xyXG4gICAgICAgICAgICAgICAgICBpdGVtQ291bnQ9e2NhcnRTdGF0ZS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1Qb3N0Zml4PXtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0U3RhdGUubGVuZ3RoID4gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2l0ZW1zJyAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcHJpY2U9e2NhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlKX1cclxuICAgICAgICAgICAgICAgICAgcHJpY2VQcmVmaXg9e3N5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntzZXRJc09wZW4odHJ1ZSl9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0UG9wVXA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcblxyXG5jb25zdCBDYXJ0UG9wdXBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDM4NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpaS5iYXNlJywgJzZweCcpfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jYXJ0LXNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQ1cHgpO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAzMzBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3B1cEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjUwMCcsICcjZjFmMWYxJyl9O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY2cHgpIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBvcHVwSXRlbUNvdW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiAxNHB4O1xyXG4gIGhlaWdodDogMTRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5yZWQnLCAnI2VhNGQ0YScpfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgJi5maXhlZENhcnRDbG9zZSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbUNhcmRzID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1JbWdXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSXRlbURldGFpbHMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LmJvbGQnLCAnIzBEMTEzNicpfTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbVByaWNlID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1XZWlnaHQgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnNtJywgJzEzJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLnJlZ3VsYXInLCAnNDAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbmA7XHJcblxyXG5jb25zdCBUb3RhbFByaWNlID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNlYTRkNGE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvbW9Db2RlID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgPiBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjM1cyBlYXNlO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5ob3ZlcicsICcjMDE5Mzc2Jyl9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENoZWNrb3V0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcclxuICBib3gtc2hhZG93OiAke3RoZW1lR2V0KCdzaGFkb3dzLmJhc2UnLCAnMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qIG1hcmdpbi10b3A6IGF1dG87ICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG5cclxuICA+IGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDaGVja291dEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuYWBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQcmljZUJveCA9IHN0eWxlZC5wYFxyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogNDRweDtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDllN2YnKX07XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE5vUHJvZHVjdE1zZyA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQucmVndWxhcicsICcjNzc3OThjJyl9O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDQwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9kdWN0SW1nID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBzdmcge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ291cG9uQm94V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAwIDIycHggMCAxNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ291cG9uQ29kZSA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5tZWRpdW0nLCAnNTAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXJyb3JNc2cgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogY2FsYygke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4IC0gMXB4KTtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5zZWNvbmRhcnkuaG92ZXInLCAnI0ZGMjgyRicpfTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FydFNsaWRlUG9wdXAgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA0MjBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IC00NTBweDtcclxuICB6LWluZGV4OiAxMDEwO1xyXG4gIGJveC1zaGFkb3c6ICR7dGhlbWVHZXQoJ3NoYWRvd3MuYmlnJywgJzAgMjFweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1ODFweCkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmLmNhcnRQb3B1cEZpeGVkIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgJHtDYXJ0UG9wdXBCb2R5fSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICR7SXRlbVdyYXBwZXJ9IHtcclxuICAgIC8qIGhlaWdodDogY2FsYygxMDB2aCAtIDI0MHB4KTsgKi9cclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDVweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICB9XHJcblxyXG4gICR7SXRlbUNhcmRzfSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuMjAwJywgJyNmN2Y3ZjcnKX07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAke1BvcHVwSGVhZGVyfSB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAke0Nsb3NlQnV0dG9ufSB7XHJcbiAgICAgIHRvcDogYXV0bztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQge1xyXG4gIENhcnRTbGlkZVBvcHVwLFxyXG4gIENhcnRQb3B1cEJvZHksXHJcbiAgUG9wdXBIZWFkZXIsXHJcbiAgUG9wdXBJdGVtQ291bnQsXHJcbiAgUHJvbW9Db2RlLFxyXG4gIENsb3NlQnV0dG9uLFxyXG4gIEl0ZW1DYXJkcyxcclxuICBJdGVtSW1nV3JhcHBlcixcclxuICBJdGVtRGV0YWlscyxcclxuICBJdGVtVGl0bGUsXHJcbiAgSXRlbVByaWNlLFxyXG4gIEl0ZW1XZWlnaHQsXHJcbiAgVG90YWxQcmljZSxcclxuICBEZWxldGVCdXR0b24sXHJcbiAgQ2hlY2tvdXRCdXR0b24sXHJcbiAgQ2hlY2tvdXRCdXR0b25XcmFwcGVyLFxyXG4gIFRpdGxlLFxyXG4gIFByaWNlQm94LFxyXG4gIE5vUHJvZHVjdE1zZyxcclxuICBJdGVtV3JhcHBlcixcclxuICBDb3Vwb25Cb3hXcmFwcGVyLFxyXG4gIENvdXBvbkNvZGUsXHJcbiAgRXJyb3JNc2csXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtcclxuICBDYXJ0UG9wdXBCb2R5LFxyXG4gIFBvcHVwSGVhZGVyLFxyXG4gIFBvcHVwSXRlbUNvdW50LFxyXG4gIENsb3NlQnV0dG9uLFxyXG4gIFByb21vQ29kZSxcclxuICBDaGVja291dEJ1dHRvbldyYXBwZXIsXHJcbiAgQ2hlY2tvdXRCdXR0b24sXHJcbiAgVGl0bGUsXHJcbiAgUHJpY2VCb3gsXHJcbiAgTm9Qcm9kdWN0SW1nLFxyXG4gIEl0ZW1XcmFwcGVyLFxyXG4gIENvdXBvbkJveFdyYXBwZXIsXHJcbiAgQ291cG9uQ29kZSwgTm9Qcm9kdWN0TXNnLFxyXG59IGZyb20gJy4vY2FydC5zdHlsZSc7XHJcbmltcG9ydCB7IENsb3NlSWNvbiB9IGZyb20gJ2Fzc2V0cy9pY29ucy9DbG9zZUljb24nO1xyXG5pbXBvcnQgeyBTaG9wcGluZ0JhZ0xhcmdlIH0gZnJvbSAnYXNzZXRzL2ljb25zL1Nob3BwaW5nQmFnTGFyZ2UnO1xyXG5pbXBvcnQgeyBOb0NhcnRCYWcgfSBmcm9tICdhc3NldHMvaWNvbnMvTm9DYXJ0QmFnJztcclxuaW1wb3J0IHtjYWxjdWxhdGVUb3RhbFByaWNlfSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FydFV0aWxzXCI7XHJcbmltcG9ydCB7IENhcnRJdGVtIH0gZnJvbSAnQC9jb21wb25lbnRzL2NhcnQvaXRlbS9jYXJ0LWl0ZW0nO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtkZWNyZWFzZVF1YW50aXR5Q2FydCxpbmNyZWFzZVF1YW50aXR5Q2FydCxyZW1vdmVGcm9tQ2FydCxyZW1vdmVBbGxGcm9tQ2FydH0gZnJvbSBcIkAvcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbnR5cGUgQ2FydFByb3BzVHlwZSA9IHtcclxuICBzdHlsZT86IGFueTtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgc2Nyb2xsYmFySGVpZ2h0Pzogc3RyaW5nO1xyXG4gIGlzT3Blbj86Ym9vbGVhbjtcclxuICBvbkNsb3NlQnRuQ2xpY2s/OiAoZTogYW55KSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgQ2FydDogUmVhY3QuRkM8Q2FydFByb3BzVHlwZT4gPSAoe1xyXG4gIHN0eWxlLFxyXG4gIGNsYXNzTmFtZSxcclxuICBvbkNsb3NlQnRuQ2xpY2ssXHJcbn0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRQb3B1cEJvZHkgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIDxQb3B1cEhlYWRlcj5cclxuICAgICAgICA8UG9wdXBJdGVtQ291bnQ+XHJcbiAgICAgICAgICA8U2hvcHBpbmdCYWdMYXJnZSB3aWR0aD0nMTlweCcgaGVpZ2h0PScyNHB4JyAvPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHsxfVxyXG4gICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgaXRlbXNcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1BvcHVwSXRlbUNvdW50PlxyXG5cclxuICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17b25DbG9zZUJ0bkNsaWNrfT5cclxuICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICA8L0Nsb3NlQnV0dG9uPlxyXG4gICAgICA8L1BvcHVwSGVhZGVyPlxyXG5cclxuICAgICAgICA8SXRlbVdyYXBwZXIgY2xhc3NOYW1lPSdpdGVtcy13cmFwcGVyJz5cclxuICAgICAgICAgIHtjYXJ0U3RhdGUubGVuZ3RoPjAgPyAoXHJcbiAgICAgICAgICAgIGNhcnRTdGF0ZS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8Q2FydEl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17YGNhcnRJdGVtLSR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgb25JbmNyZW1lbnQ9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goaW5jcmVhc2VRdWFudGl0eUNhcnQoaXRlbS5jYXJ0SWQpKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uRGVjcmVtZW50PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGRlY3JlYXNlUXVhbnRpdHlDYXJ0KGl0ZW0uY2FydElkKSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblJlbW92ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChyZW1vdmVGcm9tQ2FydChpdGVtLmNhcnRJZCkpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZGF0YT17aXRlbX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Tm9Qcm9kdWN0SW1nPlxyXG4gICAgICAgICAgICAgICAgPE5vQ2FydEJhZyAvPlxyXG4gICAgICAgICAgICAgIDwvTm9Qcm9kdWN0SW1nPlxyXG4gICAgICAgICAgICAgIDxOb1Byb2R1Y3RNc2c+XHJcbiAgICAgICAgICAgICAgICBObyBwcm9kdWN0cyBmb3VuZFxyXG4gICAgICAgICAgICAgIDwvTm9Qcm9kdWN0TXNnPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9JdGVtV3JhcHBlcj5cclxuXHJcbiAgICAgIDxDaGVja291dEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgPFByb21vQ29kZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHJlbW92ZUFsbEZyb21DYXJ0KCkpfT5cclxuICAgICAgICAgICAgICAgICAgUmVtb3ZlIEFsbFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9Qcm9tb0NvZGU+XHJcblxyXG4gICAgICAgIHt0cnVlID8gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nL2NoZWNrb3V0Jz5cclxuICAgICAgICAgICAgPENoZWNrb3V0QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2VCdG5DbGlja30+XHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgQ2hlY2tvdXRcclxuICAgICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8UHJpY2VCb3g+XHJcbiAgICAgICAgICAgICAgICAgIHsvKntDVVJSRU5DWX0qL31cclxuICAgICAgICAgICAgICAgICAge2NhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlKX1cclxuICAgICAgICAgICAgICAgIDwvUHJpY2VCb3g+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIDwvQ2hlY2tvdXRCdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxDaGVja291dEJ1dHRvbj5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8VGl0bGU+XHJcbiAgICAgICAgICAgICAgICBDaGVja291dFxyXG4gICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgPFByaWNlQm94PlxyXG4gICAgICAgICAgICAgICAge2NhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlKX1cclxuICAgICAgICAgICAgICA8L1ByaWNlQm94PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvQ2hlY2tvdXRCdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9DaGVja291dEJ1dHRvbldyYXBwZXI+XHJcbiAgICA8L0NhcnRQb3B1cEJvZHk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCB1c2VMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGU8YW55Pih7fSk7XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDphbnkpID0+IHtcclxuICAgICAgICBldmVudC5wZXJzaXN0KCk7XHJcbiAgICAgICAgc2V0SW5wdXRzKChpbnB1dHM6IGFueSkgPT4gKHsuLi5pbnB1dHMsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2UsXHJcbiAgICAgICAgaW5wdXRzXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCB7dXNlTG9naW5Gb3JtfSIsImltcG9ydCB7R0xPQkFMLCBGT1JNLCBBVVRIfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzZXRBdXRoVG9rZW4gZnJvbSBcIi4uL3NldEF1dGhUb2tlblwiO1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCBUb2FzdCBmcm9tICdsaWdodC10b2FzdCc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsQ3VycmVuY3kgPSAoY3VyOnN0cmluZykgPT4gKHtcclxuICAgIHR5cGU6IEdMT0JBTC5TRVRfQ1VSUkVOQ1ksXHJcbiAgICBjdXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbENhdGVnb3J5ID0gKGNhdGVnb3J5OnN0cmluZykgPT4gKHtcclxuICAgIHR5cGU6IEdMT0JBTC5TRVRfQ0FURUdPUlksXHJcbiAgICBjYXRlZ29yeSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsU2VhcmNoID0gKGtleXdvcmQ6c3RyaW5nKSA9PiAoe1xyXG4gICAgdHlwZTogR0xPQkFMLlNFVF9TRUFSQ0gsXHJcbiAgICBrZXl3b3JkLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBVVRILkxPR19JTixcclxuICAgIHBheWxvYWQ6IGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFVVEguU0lHTl9VUCxcclxuICAgIHBheWxvYWQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IChkaXNwYXRjaDphbnkpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySW5mbycpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FydEl0ZW1zJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZXJzaXN0OnJvb3QnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NoaXBwaW5nQWRkcmVzcycpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGF5bWVudE1ldGhvZCcpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxyXG4gICAgZGlzcGF0Y2goe3R5cGU6IEFVVEguTE9HX09VVH0pXHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJy8nXHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvYWRVc2VyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOmFueSkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS50b2tlbikge1xyXG4gICAgICAgIGNvbnN0IHRva2VuPWxvY2FsU3RvcmFnZS50b2tlbi5yZXBsYWNlQWxsKCdcIicsJycpXHJcbiAgICAgICAgLy9zZW5kaW5nIHRva2VuIHRvIGhlYWRlcnNcclxuICAgICAgICBzZXRBdXRoVG9rZW4odG9rZW4pXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9hdXRoL21lYCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBVVRILkxPQURfVVNFUixcclxuICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBVVRILkxPQURfVVNFUl9GQUlMLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBlcnIucmVzcG9uc2UuZGF0YS5lcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVPcmRlciA9IChvcmRlcjpvYmplY3QpID0+IGFzeW5jIChkaXNwYXRjaDphbnkpID0+IHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSV9CQVNFX1VSTH0vYXBpL29yZGVyc2AsIG9yZGVyLCBjb25maWcpXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpBVVRILk9SREVSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhcnRJdGVtcycpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BlcnNpc3Q6cm9vdCcpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID1cclxuICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VzID09PSAnTm90IGF1dGhvcml6ZWQsIHRva2VuIGZhaWxlZCcpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9nb3V0KCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBzZXRBdXRoVG9rZW49KHRva2VuOnN0cmluZyk9PntcclxuICAgIGlmKHRva2VuKXtcclxuICAgICAgICAvL2FkZGluZyB0b2tlbiB0byB0aGUgaGVhZGVyc1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ109YEJlYXJlciAke3Rva2VufWA7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAvL3JlbW92aW5nIHRva2VuIGZyb20gdGhlIGhlYWRlcnNcclxuICAgICAgICBkZWxldGUgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNldEF1dGhUb2tlbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==