exports.ids = [3];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3Blbk1vZGFsRnVuY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL0Nsb3NlSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9GYWNlYm9vay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9Hb29nbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvU2hvcHBpbmdCYWcudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvU2hvcHBpbmdCYWdMYXJnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2F4aW9zSGVhZGVycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3RoZXJzL2Zvcm1zL2lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L2l0ZW0vY2FydC1pdGVtLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L2l0ZW0vY2FydC1pdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L3BvcHVwL2NhcnQtcG9wdXAtYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L3BvcHVwL2NhcnQtcG9wdXAuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtL2F1dGhlbnRpY2F0aW9uLWZvcm0uc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtL2ZvcmdvdC1wYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9yZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2NhcnQvY2FydC1wb3B1cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2NhcnQvY2FydC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc2V0QXV0aFRva2VuLnRzIl0sIm5hbWVzIjpbIk9wZW5BdXRoVGFiIiwib3Blbk1vZGFsIiwic2hvdyIsIm92ZXJsYXlDbGFzc05hbWUiLCJjbG9zZU9uQ2xpY2tPdXRzaWRlIiwiY29tcG9uZW50IiwiQXV0aGVudGljYXRpb25Gb3JtIiwiY2xvc2VDb21wb25lbnQiLCJjb25maWciLCJlbmFibGVSZXNpemluZyIsImRpc2FibGVEcmFnZ2luZyIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiT3BlbkNhcnRNb2RhbCIsInRyYW5zaXRpb24iLCJ0ZW5zaW9uIiwiZnJpY3Rpb24iLCJDYXJ0IiwiY29tcG9uZW50UHJvcHMiLCJvbkNsb3NlQnRuQ2xpY2siLCJjbG9zZU1vZGFsIiwic2Nyb2xsYmFySGVpZ2h0IiwiQ2xvc2VJY29uIiwiRmFjZWJvb2siLCJjb2xvciIsIkdvb2dsZSIsIlNob3BwaW5nQmFnIiwiU2hvcHBpbmdCYWdMYXJnZSIsIkpTT05Db25maWciLCJoZWFkZXJzIiwiSW5wdXQiLCJzdHlsZWQiLCJpbnB1dCIsImNzcyIsImRpc3BsYXkiLCJwIiwiYXBwZWFyYW5jZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsIm91dGxpbmUiLCJtYXJnaW4iLCJjdXJzb3IiLCJvcGFjaXR5IiwiY29tcG9zZSIsImxheW91dCIsInNwYWNlIiwiSXRlbUJveCIsImRpdiIsImZvbnRXZWlnaHQiLCJweSIsInB4IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJhbGlnbkl0ZW1zIiwiSW5mb3JtYXRpb24iLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsIkltYWdlIiwiaW1nIiwib2JqZWN0Rml0IiwiTmFtZSIsInNwYW4iLCJtYiIsIlByaWNlIiwibXQiLCJXZWlnaHQiLCJUb3RhbCIsIm1sIiwiUmVtb3ZlQnV0dG9uIiwiYnV0dG9uIiwicGFkZGluZyIsIkNhcnRJdGVtIiwiZGF0YSIsIm9uRGVjcmVtZW50Iiwib25JbmNyZW1lbnQiLCJvblJlbW92ZSIsIm5hbWUiLCJ0aHVtYkltYWdlIiwicHJpY2UiLCJzYWxlUHJpY2UiLCJ1bml0IiwiY291bnRJblN0b2NrIiwiZGlzcGxheVByaWNlIiwiY2FydFF1YW50aXR5IiwiQ2FydFBvcHVwQnV0dG9uIiwiaXRlbUNvdW50IiwiaXRlbVBvc3RmaXgiLCJwcmljZVByZWZpeCIsInN0eWxlIiwib25DbGljayIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiQm94ZWRDYXJ0QnV0dG9uIiwiQ2FydFBvcHVwQnV0dG9uU3R5bGVkIiwidGhlbWVHZXQiLCJCdXR0b25JbWdCb3giLCJJdGVtQ291bnQiLCJQcmljZUJveCIsIkNhcnRQb3B1cEJveEJ1dHRvbiIsIlRvdGFsSXRlbXMiLCJQcmljZUJveEFsdCIsIkljb25XcmFwcGVyIiwiV3JhcHBlciIsIkNvbnRhaW5lciIsIkxvZ29XcmFwcGVyIiwiSGVhZGluZyIsImgzIiwiU3ViSGVhZGluZyIsIk9mZmVyU2VjdGlvbiIsIk9mZmVyIiwiSGVscGVyVGV4dCIsIkRpdmlkZXIiLCJMaW5rQnV0dG9uIiwiRm9yZ290UGFzc3dvcmRNb2RhbCIsInNldEN1cnJlbnRGb3JtIiwidG9nZ2xlU2lnbkluRm9ybSIsInBhZGRpbmdCb3R0b20iLCJyb3V0ZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZ2xvYmFsUmVkdWNlciIsImN1cnJlbnRGb3JtIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwYXRobmFtZSIsInB1c2giLCJ3aXRoUm91dGVyIiwiU2lnbkluTW9kYWwiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9nZ2xlU2lnblVwRm9ybSIsInRvZ2dsZUZvcmdvdFBhc3NGb3JtIiwiaW5wdXRzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ1c2VMb2dpbkZvcm0iLCJsb2dpbkNhbGxiYWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwb3N0IiwiQVBJX0JBU0VfVVJMIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b2tlbiIsImxvYWRVc2VyIiwiVG9hc3QiLCJzdWNjZXNzIiwiZXJyb3IiLCJmYWlsIiwicmVzcG9uc2UiLCJtYXJnaW5Cb3R0b20iLCJTaWdudXBNb2RhbCIsIm9uU3VibWl0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyb2xlIiwicmVnaXN0ZXIiLCJDYXJ0UG9wdXBTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQ2FydFBvcFVwIiwiZGV2aWNlVHlwZSIsIm1vYmlsZSIsInRhYmxldCIsImRlc2t0b3AiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjYXJ0U3RhdGUiLCJjYXJ0UmVkdWNlciIsImN1cnJlbmN5Iiwic3ltYm9sIiwic2hvcFJlZHVjZXIiLCJoYW5kbGVNb2RhbCIsImNhcnRTbGlkZXJDbGFzcyIsImxlbmd0aCIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJtYXAiLCJpdGVtIiwiaW5jcmVhc2VRdWFudGl0eUNhcnQiLCJjYXJ0SWQiLCJkZWNyZWFzZVF1YW50aXR5Q2FydCIsInJlbW92ZUZyb21DYXJ0IiwiaWQiLCJyZW1vdmVBbGxGcm9tQ2FydCIsInNldEdsb2JhbEN1cnJlbmN5IiwiY3VyIiwidHlwZSIsIkdMT0JBTCIsIlNFVF9DVVJSRU5DWSIsInNldEdsb2JhbENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJTRVRfQ0FURUdPUlkiLCJzZXRHbG9iYWxTZWFyY2giLCJrZXl3b3JkIiwiU0VUX1NFQVJDSCIsIkFVVEgiLCJMT0dfSU4iLCJwYXlsb2FkIiwiU0lHTl9VUCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJMT0dfT1VUIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlQWxsIiwic2V0QXV0aFRva2VuIiwicmVzIiwiZ2V0IiwiTE9BRF9VU0VSIiwiZXJyIiwiTE9BRF9VU0VSX0ZBSUwiLCJjcmVhdGVPcmRlciIsIm9yZGVyIiwiT1JERVJfU1VDQ0VTUyIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsImRlZmF1bHRzIiwiY29tbW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFdBQVcsR0FBQyxNQUNyQkMsbUVBQVMsQ0FBQztBQUNWQyxNQUFJLEVBQUUsSUFESTtBQUVWQyxrQkFBZ0IsRUFBRSxvQkFGUjtBQUdWQyxxQkFBbUIsRUFBRSxJQUhYO0FBSVZDLFdBQVMsRUFBRUMscUVBSkQ7QUFLVkMsZ0JBQWMsRUFBRSxFQUxOO0FBTVZDLFFBQU0sRUFBRTtBQUNKQyxrQkFBYyxFQUFFLEtBRFo7QUFFSkMsbUJBQWUsRUFBRSxJQUZiO0FBR0pDLGFBQVMsRUFBRSxrQkFIUDtBQUlKQyxTQUFLLEVBQUUsR0FKSDtBQUtKQyxVQUFNLEVBQUU7QUFMSjtBQU5FLENBQUQsQ0FETjtBQWVBLE1BQU1DLGFBQWEsR0FBQyxNQUFJYixtRUFBUyxDQUFDO0FBQ3JDQyxNQUFJLEVBQUUsSUFEK0I7QUFFckNNLFFBQU0sRUFBRTtBQUNKRyxhQUFTLEVBQUUsV0FEUDtBQUVKQyxTQUFLLEVBQUUsTUFGSDtBQUdKQyxVQUFNLEVBQUUsTUFISjtBQUlKSixrQkFBYyxFQUFFLEtBSlo7QUFLSkMsbUJBQWUsRUFBRSxJQUxiO0FBTUpLLGNBQVUsRUFBRTtBQUNSQyxhQUFPLEVBQUUsR0FERDtBQUVSQyxjQUFRLEVBQUU7QUFGRjtBQU5SLEdBRjZCO0FB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QThCLGVBQTlCLENBQVA7QUFDSDtBQUNKLENBUkQ7O0FBU2VaLDJFQUFmLEUiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRoZW50aWNhdGlvbkZvcm0gZnJvbSBcIkAvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybVwiO1xyXG5pbXBvcnQgeyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tICdAcmVkcS9yZXVzZS1tb2RhbCc7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCJAL2ZlYXR1cmVzL2NhcnQvY2FydFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3BlbkF1dGhUYWI9KCk9PlxyXG4gICAgb3Blbk1vZGFsKHtcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICBvdmVybGF5Q2xhc3NOYW1lOiAncXVpY2stdmlldy1vdmVybGF5JyxcclxuICAgIGNsb3NlT25DbGlja091dHNpZGU6IHRydWUsXHJcbiAgICBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uRm9ybSxcclxuICAgIGNsb3NlQ29tcG9uZW50OiAnJyxcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGVuYWJsZVJlc2l6aW5nOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlRHJhZ2dpbmc6IHRydWUsXHJcbiAgICAgICAgY2xhc3NOYW1lOiAncXVpY2stdmlldy1tb2RhbCcsXHJcbiAgICAgICAgd2lkdGg6IDQ1OCxcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgT3BlbkNhcnRNb2RhbD0oKT0+b3Blbk1vZGFsKHtcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICBjb25maWc6IHtcclxuICAgICAgICBjbGFzc05hbWU6ICdjYXJ0UG9wdXAnLFxyXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgICAgZW5hYmxlUmVzaXppbmc6IGZhbHNlLFxyXG4gICAgICAgIGRpc2FibGVEcmFnZ2luZzogdHJ1ZSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHRlbnNpb246IDM2MCxcclxuICAgICAgICAgICAgZnJpY3Rpb246IDQwLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY2xvc2VPbkNsaWNrT3V0c2lkZTogdHJ1ZSxcclxuICAgIGNvbXBvbmVudDogQ2FydCxcclxuICAgIGNsb3NlQ29tcG9uZW50OiAoKSA9PiA8ZGl2IC8+LFxyXG4gICAgY29tcG9uZW50UHJvcHM6IHsgb25DbG9zZUJ0bkNsaWNrOiBjbG9zZU1vZGFsLCBzY3JvbGxiYXJIZWlnaHQ6IDMzMCB9LFxyXG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgQ2xvc2VJY29uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjEwLjAwM1wiXHJcbiAgICAgIGhlaWdodD1cIjEwXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAxMC4wMDMgMTBcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGRhdGEtbmFtZT1cIl9pb25pY29uc19zdmdfaW9zLWNsb3NlICg1KVwiXHJcbiAgICAgICAgZD1cIk0xNjYuNjg2LDE2NS41NWwzLjU3My0zLjU3M2EuODM3LjgzNywwLDAsMC0xLjE4NC0xLjE4NGwtMy41NzMsMy41NzMtMy41NzMtMy41NzNhLjgzNy44MzcsMCwxLDAtMS4xODQsMS4xODRsMy41NzMsMy41NzMtMy41NzMsMy41NzNhLjgzNy44MzcsMCwwLDAsMS4xODQsMS4xODRsMy41NzMtMy41NzMsMy41NzMsMy41NzNhLjgzNy44MzcsMCwwLDAsMS4xODQtMS4xODRaXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE2MC41IC0xNjAuNTUpXCJcclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBGYWNlYm9vayA9ICh7XHJcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcclxuICB3aWR0aCA9ICcxN3B4JyxcclxuICBoZWlnaHQgPSAnMTdweCcsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9JzAgMCAxNyAxNydcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkYXRhLW5hbWU9J19pb25pY29uc19zdmdfbG9nby1mYWNlYm9vayAoMSknXHJcbiAgICAgICAgZD0nTTgwLjA2MSw2NEg2NC45MzlhLjkzOS45MzksMCwwLDAtLjkzOS45MzlWODAuMDYxYS45MzkuOTM5LDAsMCwwLC45MzkuOTM5SDcyLjVWNzQuMjcxSDcwLjQ2OFY3MS43OTJINzIuNVY2OS45NTlhMy4yMywzLjIzLDAsMCwxLDMuNDg0LTMuMzkxYy45MzksMCwxLjk0OC4wNzEsMi4xODMuMXYyLjI5M0g3Ni42Yy0xLjA2NywwLTEuMjcxLjUtMS4yNzEsMS4yNDh2MS41OGgyLjU0MWwtLjMzMiwyLjQ3OUg3NS4zMzNWODFoNC43MjhBLjkzOS45MzksMCwwLDAsODEsODAuMDYxVjY0LjkzOUEuOTM5LjkzOSwwLDAsMCw4MC4wNjEsNjRaJ1xyXG4gICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC02NCAtNjQpJ1xyXG4gICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IEdvb2dsZSA9ICh7XHJcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcclxuICB3aWR0aCA9ICcxN3B4JyxcclxuICBoZWlnaHQgPSAnMTdweCcsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9JzAgMCAxNi42NzcgMTcnXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD0nTTY4LjU3OSw1NS4yOWwtLjA4Ni0uMzY0SDYwLjU4NHYzLjM0OGg0LjcyNWE0LjczLDQuNzMsMCwwLDEtNC42MjcsMy41NTYsNS41MzMsNS41MzMsMCwwLDEtMy43MjQtMS40ODQsNS4zMTYsNS4zMTYsMCwwLDEtMS41ODYtMy43NTIsNS40ODMsNS40ODMsMCwwLDEsMS41NTctMy43NDgsNS4zLDUuMywwLDAsMSwzLjctMS40NDcsNC44MjUsNC44MjUsMCwwLDEsMy4xNDcsMS4yMjZsMi4zNzktMi4zNjdhOC40MTcsOC40MTcsMCwwLDAtNS42LTIuMTU4QTguMzkxLDguMzkxLDAsMCwwLDUyLDU2LjYsOC41NDEsOC41NDEsMCwwLDAsNTQuMzI2LDYyLjVhOC44NzMsOC44NzMsMCwwLDAsNi40LDIuNiw3Ljg5MSw3Ljg5MSwwLDAsMCw1Ljc0Ny0yLjQxNiw4LjQ4Niw4LjQ4NiwwLDAsMCwyLjIwNy01Ljg3OCw5Ljc4OCw5Ljc4OCwwLDAsMC0uMS0xLjUxNlonXHJcbiAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyIC00OC4xKSdcclxuICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBTaG9wcGluZ0JhZyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgd2lkdGg9JzEyLjY4NidcclxuICAgICAgICBoZWlnaHQ9JzE2J1xyXG4gICAgICAgIHZpZXdCb3g9JzAgMCAxMi42ODYgMTYnXHJcbiAgICAgID5cclxuICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDI3MDQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNy4wMjMgLTIpJz5cclxuICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI3LjAyMyA1LjE1NiknPlxyXG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE2Jz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPSdQYXRoIDMnXHJcbiAgICAgICAgICAgICAgICBkPSdNNjUuNywxMTEuMDQzbC0uNzE0LTlBMS4xMjUsMS4xMjUsMCwwLDAsNjMuODcxLDEwMUg2Mi40NTlWMTAzLjFhLjQ2OS40NjksMCwxLDEtLjkzNywwVjEwMUg1Ny4yMTFWMTAzLjFhLjQ2OS40NjksMCwxLDEtLjkzNywwVjEwMUg1NC44NjJhMS4xMjUsMS4xMjUsMCwwLDAtMS4xMTcsMS4wMzNsLS43MTUsOS4wMDZhMi42MDUsMi42MDUsMCwwLDAsMi42LDIuOEg2My4xYTIuNjA1LDIuNjA1LDAsMCwwLDIuNi0yLjgwNlptLTQuMjI0LTQuNTg1LTIuNDI0LDIuNDI0YS40NjguNDY4LDAsMCwxLS42NjMsMGwtMS4xMzYtMS4xMzZhLjQ2OS40NjksMCwwLDEsLjY2My0uNjYzbC44LjgsMi4wOTItMi4wOTJhLjQ2OS40NjksMCwxLDEsLjY2My42NjNaJ1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUzLjAyMyAtMTAxLjAwNSknXHJcbiAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxOScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzAuMjc0IDIpJz5cclxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxOCc+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nUGF0aCA0J1xyXG4gICAgICAgICAgICAgICAgZD0nTTE2MC4xMzIsMGEzLjEsMy4xLDAsMCwwLTMuMDkzLDMuMDkzdi4wNjNoLjkzN1YzLjA5M2EyLjE1NSwyLjE1NSwwLDEsMSw0LjMxMSwwdi4wNjNoLjkzN1YzLjA5M0EzLjEsMy4xLDAsMCwwLDE2MC4xMzIsMFonXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTU3LjAzOSknXHJcbiAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IFNob3BwaW5nQmFnTGFyZ2UgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgd2lkdGggPSAnMThweCcsXHJcbiAgaGVpZ2h0ID0gJzE4cHgnLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PScwIDAgMjMuNzg2IDMwJ1xyXG4gICAgPlxyXG4gICAgICA8ZyBkYXRhLW5hbWU9J3Nob3BwaW5nLWJhZyAoMyknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01My4wMjMpJz5cclxuICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDI3MDQnPlxyXG4gICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxNycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTMuMDIzIDUuOTE4KSc+XHJcbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTYnPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9J1BhdGggMydcclxuICAgICAgICAgICAgICAgIGQ9J003Ni44LDExOS44MjZsLTEuMzQtMTYuODgxQTIuMTA5LDIuMTA5LDAsMCwwLDczLjM2MiwxMDFINzAuNzE2djMuOTIxYS44NzkuODc5LDAsMSwxLTEuNzU3LDBWMTAxSDYwLjg3NXYzLjkyMWEuODc5Ljg3OSwwLDEsMS0xLjc1NywwVjEwMUg1Ni40NzJhMi4xMDksMi4xMDksMCwwLDAtMi4wOTQsMS45MzdsLTEuMzQsMTYuODg2YTQuODg1LDQuODg1LDAsMCwwLDQuODcsNS4yNTlINzEuOTI2YTQuODg0LDQuODg0LDAsMCwwLDQuODctNS4yNjFabS03LjkyLTguNi00LjU0NCw0LjU0NGEuODc4Ljg3OCwwLDAsMS0xLjI0MywwbC0yLjEzLTIuMTNBLjg3OC44NzgsMCwwLDEsNjIuMiwxMTIuNGwxLjUwOSwxLjUwOCwzLjkyMy0zLjkyM2EuODc5Ljg3OSwwLDEsMSwxLjI0MiwxLjI0M1onXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTMuMDIzIC0xMDEuMDA1KSdcclxuICAgICAgICAgICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU5LjExOCknPlxyXG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE4Jz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPSdQYXRoIDQnXHJcbiAgICAgICAgICAgICAgICBkPSdNMTYyLjgzOCwwYTUuODA2LDUuODA2LDAsMCwwLTUuOCw1Ljh2LjExOUgxNTguOFY1LjhhNC4wNDIsNC4wNDIsMCwxLDEsOC4wODMsMHYuMTE5aDEuNzU3VjUuOEE1LjgwNiw1LjgwNiwwLDAsMCwxNjIuODM4LDBaJ1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE1Ny4wMzkpJ1xyXG4gICAgICAgICAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IEpTT05Db25maWc9IHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XHJcbmltcG9ydCB7IGNvbXBvc2UsIGxheW91dCwgc3BhY2UsIGNvbG9yLCBib3JkZXIgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0PGFueT4oXHJcbiAgY3NzKHtcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcDogJzAgMThweCcsXHJcbiAgICBhcHBlYXJhbmNlOiAnbm9uZScsXHJcbiAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICBmb250U2l6ZTogJ2Jhc2UnLFxyXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgIGJvcmRlckNvbG9yOiAnZ3JheS41MDAnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnYmFzZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBjb2xvcjogJ3RleHQuYm9sZCcsXHJcbiAgICBoZWlnaHQ6ICc0OHB4JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMgZWFzZScsXHJcbiAgICAvLyBtYjogMyxcclxuICAgICcmOmZvY3VzJzoge1xyXG4gICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIHtcclxuICAgICcmOmhvdmVyLCY6Zm9jdXMnOiB7XHJcbiAgICAgIG91dGxpbmU6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgICcmOjpwbGFjZWhvbGRlcic6IHtcclxuICAgICAgY29sb3I6ICcnLFxyXG4gICAgfSxcclxuICAgICcmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24nOiB7XHJcbiAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgIH0sXHJcbiAgICAnJi5kaXNhYmxlZCc6IHtcclxuICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxyXG4gICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcG9zZShsYXlvdXQsIHNwYWNlLCBjb2xvciwgYm9yZGVyKVxyXG4pO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xyXG5leHBvcnQgY29uc3QgSXRlbUJveCA9IHN0eWxlZC5kaXYoXHJcbiAgY3NzKHtcclxuICAgIGZvbnRTaXplOiAnYmFzZScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBweTogMTUsXHJcbiAgICBweDogMjUsXHJcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWRgLFxyXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6ICdncmF5LjIwMCcsXHJcbiAgfSksXHJcbiAge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2KHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgbWFyZ2luTGVmdDogJzE1cHgnLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IEltYWdlID0gc3R5bGVkLmltZyh7XHJcbiAgd2lkdGg6IDYwLFxyXG4gIGhlaWdodDogNjAsXHJcbiAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gIG1hcmdpbjogJzAgMTVweCcsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBmb250V2VpZ2h0OiAnbWQnLFxyXG4gICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgbWI6ICcwcHgnLFxyXG4gICAgbGluZUhlaWdodDogMS41LFxyXG4gIH0pXHJcbik7XHJcbmV4cG9ydCBjb25zdCBQcmljZSA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICBtdDogJzEwcHgnLFxyXG4gICAgbWI6ICcxMHB4JyxcclxuICB9KVxyXG4pO1xyXG5leHBvcnQgY29uc3QgV2VpZ2h0ID0gc3R5bGVkLnNwYW4oXHJcbiAgY3NzKHtcclxuICAgIGZvbnRTaXplOiAnc20nLFxyXG4gICAgZm9udFdlaWdodDogJ3JlZ3VsYXInLFxyXG4gICAgY29sb3I6ICd0ZXh0LnJlZ3VsYXInLFxyXG4gICAgbWI6ICc1cHgnLFxyXG4gIH0pXHJcbik7XHJcbmV4cG9ydCBjb25zdCBUb3RhbCA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBjb2xvcjogJ3RleHQuYm9sZCcsXHJcbiAgICBtbDogJ2F1dG8nLFxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgUmVtb3ZlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbih7XHJcbiAgcGFkZGluZzogJzVweCcsXHJcbiAgYm9yZGVyOiAwLFxyXG4gIG91dGxpbmU6IDAsXHJcbiAgbWFyZ2luTGVmdDogJzE1cHgnLFxyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjI1KScsXHJcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuXHJcbiAgJyY6aG92ZXInOiB7XHJcbiAgICBjb2xvcjogJ3JlZCcsXHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvdW50ZXIgfSBmcm9tICcuLi9jb3VudGVyL2NvdW50ZXInO1xyXG5pbXBvcnQgeyBDbG9zZUljb24gfSBmcm9tICdAL2Fzc2V0cy9pY29ucy9DbG9zZUljb24nO1xyXG5pbXBvcnQge1xyXG4gIEl0ZW1Cb3gsXHJcbiAgSW1hZ2UsXHJcbiAgSW5mb3JtYXRpb24sXHJcbiAgTmFtZSxcclxuICBQcmljZSxcclxuICBXZWlnaHQsXHJcbiAgVG90YWwsXHJcbiAgUmVtb3ZlQnV0dG9uLFxyXG59IGZyb20gJy4vY2FydC1pdGVtLnN0eWxlJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgZGF0YTogYW55O1xyXG4gIG9uRGVjcmVtZW50OiAoKSA9PiB2b2lkO1xyXG4gIG9uSW5jcmVtZW50OiAoKSA9PiB2b2lkO1xyXG4gIG9uUmVtb3ZlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydEl0ZW06IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgZGF0YSxcclxuICBvbkRlY3JlbWVudCxcclxuICBvbkluY3JlbWVudCxcclxuICBvblJlbW92ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgdGh1bWJJbWFnZSwgcHJpY2UsIHNhbGVQcmljZSwgdW5pdCwgY291bnRJblN0b2NrIH0gPSBkYXRhO1xyXG4gIGNvbnN0IGRpc3BsYXlQcmljZSA9IHNhbGVQcmljZSA/IHNhbGVQcmljZSA6IHByaWNlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8SXRlbUJveD5cclxuICAgICAgPENvdW50ZXJcclxuICAgICAgICB2YWx1ZT17ZGF0YS5jYXJ0UXVhbnRpdHl9XHJcbiAgICAgICAgb25EZWNyZW1lbnQ9e29uRGVjcmVtZW50fVxyXG4gICAgICAgIG9uSW5jcmVtZW50PXtvbkluY3JlbWVudH1cclxuICAgICAgICB2YXJpYW50PVwibGlnaHRWZXJ0aWNhbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbWFnZSBzcmM9e3RodW1iSW1hZ2V9IC8+XHJcbiAgICAgIDxJbmZvcm1hdGlvbj5cclxuICAgICAgICA8TmFtZT57bmFtZX08L05hbWU+XHJcbiAgICAgICAgPFByaWNlPlxyXG4gICAgICAgICAge2Rpc3BsYXlQcmljZX1cclxuICAgICAgICA8L1ByaWNlPlxyXG4gICAgICAgIDxXZWlnaHQ+XHJcbiAgICAgICAgICB7Lyp7cXVhbnRpdHl9IFgge3VuaXR9Ki99XHJcbiAgICAgICAgPC9XZWlnaHQ+XHJcbiAgICAgIDwvSW5mb3JtYXRpb24+XHJcbiAgICAgIDxUb3RhbD5cclxuICAgICAgICB7Lyp7KHF1YW50aXR5ICogZGlzcGxheVByaWNlKS50b0ZpeGVkKDIpfSovfVxyXG4gICAgICA8L1RvdGFsPlxyXG4gICAgICA8UmVtb3ZlQnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlfT5cclxuICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgIDwvUmVtb3ZlQnV0dG9uPlxyXG4gICAgPC9JdGVtQm94PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2FydFBvcHVwQnV0dG9uU3R5bGVkLFxyXG4gIEJ1dHRvbkltZ0JveCxcclxuICBJdGVtQ291bnQsXHJcbiAgUHJpY2VCb3gsXHJcbiAgQ2FydFBvcHVwQm94QnV0dG9uLFxyXG4gIFByaWNlQm94QWx0LFxyXG4gIFRvdGFsSXRlbXMsXHJcbn0gZnJvbSAnLi9jYXJ0LXBvcHVwLnN0eWxlJztcclxuaW1wb3J0IHsgU2hvcHBpbmdCYWcgfSBmcm9tICdAL2Fzc2V0cy9pY29ucy9TaG9wcGluZ0JhZyc7XHJcblxyXG50eXBlIENhcnRCdXR0b25Qcm9wcyA9IHtcclxuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XHJcbiAgaXRlbUNvdW50PzogbnVtYmVyO1xyXG4gIGl0ZW1Qb3N0Zml4PzogYW55O1xyXG4gIHByaWNlPzogbnVtYmVyO1xyXG4gIHByaWNlUHJlZml4Pzogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBvbkNsaWNrPzogKGU6IGFueSkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IENhcnRQb3B1cEJ1dHRvbjogUmVhY3QuRkM8Q2FydEJ1dHRvblByb3BzPiA9ICh7XHJcbiAgaXRlbUNvdW50LFxyXG4gIGl0ZW1Qb3N0Zml4ID0gJ2l0ZW1zJyxcclxuICBwcmljZSxcclxuICBwcmljZVByZWZpeCA9ICckJyxcclxuICBzdHlsZSxcclxuICBvbkNsaWNrLFxyXG4gIGNsYXNzTmFtZSxcclxufSkgPT4gKFxyXG4gIDxDYXJ0UG9wdXBCdXR0b25TdHlsZWQgc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICA8QnV0dG9uSW1nQm94PlxyXG4gICAgICA8U2hvcHBpbmdCYWcgLz5cclxuICAgIDwvQnV0dG9uSW1nQm94PlxyXG4gICAgPEl0ZW1Db3VudD5cclxuICAgICAge2l0ZW1Db3VudH0ge2l0ZW1Qb3N0Zml4fVxyXG4gICAgPC9JdGVtQ291bnQ+XHJcbiAgICA8UHJpY2VCb3g+XHJcbiAgICAgIHtwcmljZVByZWZpeH1cclxuICAgICAge3BhcnNlRmxvYXQoYCR7cHJpY2V9YCkudG9GaXhlZCgyKX1cclxuICAgIDwvUHJpY2VCb3g+XHJcbiAgPC9DYXJ0UG9wdXBCdXR0b25TdHlsZWQ+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQm94ZWRDYXJ0QnV0dG9uOiBSZWFjdC5GQzxDYXJ0QnV0dG9uUHJvcHM+ID0gKHtcclxuICBpdGVtQ291bnQsXHJcbiAgaXRlbVBvc3RmaXggPSAnaXRlbXMnLFxyXG4gIHByaWNlLFxyXG4gIHByaWNlUHJlZml4ID0gJyQnLFxyXG4gIHN0eWxlLFxyXG4gIG9uQ2xpY2ssXHJcbiAgY2xhc3NOYW1lLFxyXG59KSA9PiAoXHJcbiAgPENhcnRQb3B1cEJveEJ1dHRvbiBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgIDxUb3RhbEl0ZW1zPlxyXG4gICAgICA8U2hvcHBpbmdCYWcgLz5cclxuICAgICAge2l0ZW1Db3VudH0ge2l0ZW1Qb3N0Zml4fVxyXG4gICAgPC9Ub3RhbEl0ZW1zPlxyXG4gICAgPFByaWNlQm94QWx0PlxyXG4gICAgICB7cHJpY2VQcmVmaXh9XHJcbiAgICAgIHtwYXJzZUZsb2F0KGAke3ByaWNlfWApLnRvRml4ZWQoMil9XHJcbiAgICA8L1ByaWNlQm94QWx0PlxyXG4gIDwvQ2FydFBvcHVwQm94QnV0dG9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFBvcHVwQnV0dG9uO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgQ2FydFBvcHVwQnV0dG9uU3R5bGVkID0gc3R5bGVkKCdidXR0b24nKWBcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgYm94LXNoYWRvdzogJHt0aGVtZUdldCgnc2hhZG93cy5iaWcnLCAnMCAyMXB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogNTBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZzogMnB4IDJweCAycHggMzBweDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU4MXB4KSB7XHJcbiAgICAmOm5vdCguZml4ZWRDYXJ0UG9wdXApIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25JbWdCb3ggPSBzdHlsZWQoJ3NwYW4nKWBcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtQ291bnQgPSBzdHlsZWQoJ3NwYW4nKWBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQcmljZUJveCA9IHN0eWxlZCgnc3BhbicpYFxyXG4gIHdpZHRoOiA1NnB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnhzJywgJzEyJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJ0UG9wdXBCb3hCdXR0b24gPSBzdHlsZWQoJ2J1dHRvbicpYFxyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiAzMCUgMCUgMCUgMzAlO1xyXG4gIGJvcmRlcjogIzAwOUU3RiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJveC1zaGFkb3c6ICR7dGhlbWVHZXQoJ3NoYWRvd3MuYmlnJywgJzAgMjFweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcbiAgb3V0bGluZTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC00NnB4O1xyXG4gIHotaW5kZXg6IDk5O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVG90YWxJdGVtcyA9IHN0eWxlZCgnc3BhbicpYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJpY2VCb3hBbHQgPSBzdHlsZWQoJ3NwYW4nKWBcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlIDAlIDAlIDE1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBtYXJnaW46IDAgMTBweCAxMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IHtcclxuICBCdXR0b25JbWdCb3gsXHJcbiAgQ2FydFBvcHVwQnV0dG9uU3R5bGVkLFxyXG4gIEl0ZW1Db3VudCxcclxuICBQcmljZUJveCxcclxuICBDYXJ0UG9wdXBCb3hCdXR0b24sXHJcbiAgUHJpY2VCb3hBbHQsXHJcbiAgVG90YWxJdGVtcyxcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cy9PdGhlcnMvYnV0dG9uL2J1dHRvbic7XHJcbmV4cG9ydCB7IEJ1dHRvbiB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgXHJcbiAgcGFkZGluZzogNDBweCA2MHB4IDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogNDBweCAzMHB4IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ29XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5oM2BcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5oZWFkaW5nJywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMubGcnLCAnMjEnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJIZWFkaW5nID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBPZmZlclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuMjAwJywgJyNGN0Y3RjcnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgT2ZmZXIgPSBzdHlsZWQucGBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICBtYXJnaW46IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVscGVyVGV4dCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuYmx1ZS5saW5rJywgJyM0Mjg1ZjQnKX07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgaGVpZ2h0OiA0OHB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjIwMCcsICcjZjdmN2Y3Jyl9O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjcwMCcsICcjZTZlNmU2Jyl9O1xyXG4vLyAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbi8vICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuLy8gICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4vLyAgIHBhZGRpbmc6IDAgMThweDtcclxuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlO1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4vLyAgICY6aG92ZXIsXHJcbi8vICAgJjpmb2N1cyB7XHJcbi8vICAgICBvdXRsaW5lOiAwO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgJjpmb2N1cyB7XHJcbi8vICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuLy8gICB9XHJcblxyXG4vLyAgICY6OnBsYWNlaG9sZGVyIHtcclxuLy8gICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbi8vICAgICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weCArIDFweCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4vLyAgICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4vLyAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgJi5kaXNhYmxlZCB7XHJcbi8vICAgICAuaW5uZXItd3JhcCB7XHJcbi8vICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbi8vICAgICAgIG9wYWNpdHk6IDAuNjtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIGA7XHJcblxyXG5leHBvcnQgY29uc3QgRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS41MDAnLCAnI2YxZjFmMScpfTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggLSAxcHgpO1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgV3JhcHBlcixcclxuICBDb250YWluZXIsXHJcbiAgSGVhZGluZyxcclxuICBTdWJIZWFkaW5nLFxyXG4gIC8vIElucHV0LFxyXG4gIEJ1dHRvbixcclxuICBMaW5rQnV0dG9uLFxyXG4gIE9mZmVyLFxyXG59IGZyb20gJy4vYXV0aGVudGljYXRpb24tZm9ybS5zdHlsZSc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnY29tcG9uZW50cy9PdGhlcnMvZm9ybXMvaW5wdXQnO1xyXG5jb25zdCBGb3Jnb3RQYXNzd29yZE1vZGFsOlJlYWN0LkZDPHtzZXRDdXJyZW50Rm9ybToodmFsdWU6J3NpZ25VcCd8J2ZvcmdvdFBhc3MnfCdzaWduSW4nKT0+dm9pZH0+PSh7c2V0Q3VycmVudEZvcm19KT0+IHtcclxuICBjb25zdCB0b2dnbGVTaWduSW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50Rm9ybSgnc2lnbkluJylcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAzMCB9fT5cclxuICAgICAgICA8SGVhZGluZz5cclxuICAgICAgICAgIEZvcmdvdCBQYXNzd29yZFxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuXHJcbiAgICAgICAgPFN1YkhlYWRpbmc+XHJcbiAgICAgICAgICBXZSdsbCBzZW5kIHlvdSBhIGxpbmsgdG8gcmVzZXQgeW91ciBwYXNzd29yZFxyXG4gICAgICAgIDwvU3ViSGVhZGluZz5cclxuXHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzIG9yIENvbnRhY3QgTm8uXCJcclxuICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVzZXQgUGFzc3dvcmRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8T2ZmZXIgc3R5bGU9e3sgcGFkZGluZzogJzIwcHggMCAwJyB9fT5cclxuICAgICAgICAgIEJhY2sgdG97JyAnfVxyXG4gICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17dG9nZ2xlU2lnbkluRm9ybX0+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XHJcbiAgICAgICAgPC9PZmZlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZE1vZGFsXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWduSW5Gb3JtIGZyb20gJy4vbG9naW4nO1xyXG5pbXBvcnQgU2lnblVwIGZyb20gJy4vcmVnaXN0ZXInO1xyXG5pbXBvcnQgRm9yZ290UGFzc0Zvcm0gZnJvbSAnLi9mb3Jnb3QtcGFzc3dvcmQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHtjbG9zZU1vZGFsfSBmcm9tIFwiQHJlZHEvcmV1c2UtbW9kYWxcIjtcclxuY29uc3QgQXV0aGVudGljYXRpb25Gb3JtPSh7cm91dGVyfSk9PiB7XHJcbiAgY29uc3Qge2lzQXV0aGVudGljYXRlZH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICBjb25zdCBbY3VycmVudEZvcm0sc2V0Q3VycmVudEZvcm1dPXVzZVN0YXRlPCdzaWduVXAnfCdmb3Jnb3RQYXNzJ3wnc2lnbkluJz4oJ3NpZ25VcCcpXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZihpc0F1dGhlbnRpY2F0ZWQpe1xyXG4gICAgICBpZihyb3V0ZXIucGF0aG5hbWU9PT0nL2xvZ2luJyl7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIGNsb3NlTW9kYWwoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxbaXNBdXRoZW50aWNhdGVkXSlcclxuICBpZiAoY3VycmVudEZvcm0gPT09ICdzaWduSW4nKSB7XHJcbiAgICByZXR1cm4gPFNpZ25JbkZvcm0gIHNldEN1cnJlbnRGb3JtPXtzZXRDdXJyZW50Rm9ybX0vPlxyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRGb3JtID09PSAnc2lnblVwJykge1xyXG4gICAgcmV0dXJuIDxTaWduVXAgc2V0Q3VycmVudEZvcm09e3NldEN1cnJlbnRGb3JtfS8+XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudEZvcm0gPT09ICAnZm9yZ290UGFzcycpIHtcclxuICAgIHJldHVybiA8Rm9yZ290UGFzc0Zvcm0gIHNldEN1cnJlbnRGb3JtPXtzZXRDdXJyZW50Rm9ybX0vPlxyXG4gIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBdXRoZW50aWNhdGlvbkZvcm0pXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgTGlua0J1dHRvbixcclxuICBCdXR0b24sXHJcbiAgSWNvbldyYXBwZXIsXHJcbiAgV3JhcHBlcixcclxuICBDb250YWluZXIsXHJcbiAgTG9nb1dyYXBwZXIsXHJcbiAgSGVhZGluZyxcclxuICBTdWJIZWFkaW5nLFxyXG4gIE9mZmVyU2VjdGlvbixcclxuICBPZmZlcixcclxuICAvLyBJbnB1dCxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gJy4vYXV0aGVudGljYXRpb24tZm9ybS5zdHlsZSc7XHJcbmltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnYXNzZXRzL2ljb25zL0ZhY2Vib29rJztcclxuaW1wb3J0IHsgR29vZ2xlIH0gZnJvbSAnYXNzZXRzL2ljb25zL0dvb2dsZSc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gJ0ByZWRxL3JldXNlLW1vZGFsJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdjb21wb25lbnRzL090aGVycy9mb3Jtcy9pbnB1dCc7XHJcbmltcG9ydCB7dXNlTG9naW5Gb3JtfSBmcm9tIFwiQC9ob29rcy91c2VMb2dpbkZvcm1cIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7bG9hZFVzZXIsIGxvZ2lufSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCB7QVVUSH0gZnJvbSBcIkAvcmVkdXgvZGVmaW5lc1wiO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSBcImxpZ2h0LXRvYXN0XCI7XHJcbmltcG9ydCB7SlNPTkNvbmZpZ30gZnJvbSBcIkAvYXhpb3NIZWFkZXJzXCI7XHJcblxyXG5jb25zdCBTaWduSW5Nb2RhbDpSZWFjdC5GQzx7c2V0Q3VycmVudEZvcm06KHZhbHVlOidzaWduVXAnfCdmb3Jnb3RQYXNzJ3wnc2lnbkluJyk9PnZvaWR9Pj0oe3NldEN1cnJlbnRGb3JtfSk9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHRvZ2dsZVNpZ25VcEZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Rm9ybSgnc2lnblVwJylcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVGb3Jnb3RQYXNzRm9ybSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRGb3JtKCdmb3Jnb3RQYXNzJylcclxuICB9O1xyXG4gIGNvbnN0IHtpbnB1dHMsIGhhbmRsZUlucHV0Q2hhbmdlfSA9IHVzZUxvZ2luRm9ybSgpO1xyXG5cclxuXHJcbiAgY29uc3QgbG9naW5DYWxsYmFjayA9YXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL2F1dGgvbG9naW5gLFxyXG4gICAgICAgICAge2VtYWlsOmlucHV0cy5lbWFpbCwgcGFzc3dvcmQ6aW5wdXRzLnBhc3N3b3JkfSxcclxuICAgICAgICAgIEpTT05Db25maWdcclxuICAgICAgKVxyXG4gICAgICBkaXNwYXRjaChsb2dpbihkYXRhKSlcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIEpTT04uc3RyaW5naWZ5KGRhdGEudG9rZW4pKVxyXG4gICAgICBhd2FpdCBkaXNwYXRjaChsb2FkVXNlcigpKVxyXG4gICAgICBUb2FzdC5zdWNjZXNzKCdTdWNjZXNzZnVsbHkgbG9nZ2VkIGluJylcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBUb2FzdC5mYWlsKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IgKycsIFBsZWFzZSB0cnkgYWdhaW4nKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8SGVhZGluZz5cclxuICAgICAgICAgICAgV2VsY29tZSBCYWNrXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgICAgPFN1YkhlYWRpbmc+XHJcbiAgICAgICAgICAgIExvZ2luIHdpdGggeW91ciBlbWFpbCAmYW1wOyBwYXNzd29yZFxyXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2xvZ2luQ2FsbGJhY2t9PlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9e1wiZW1haWxcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5lbWFpbH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCAobWluIDYgY2hhcmFjdGVycylcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT17XCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb250aW51ZSAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxEaXZpZGVyPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIG9yXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0RpdmlkZXI+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNjdiMicsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17bG9naW5DYWxsYmFja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxGYWNlYm9vayAvPlxyXG4gICAgICAgICAgICA8L0ljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICBDb250aW51ZSB3aXRoIEZhY2Vib29rXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnIzQyODVmNCcgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpbkNhbGxiYWNrfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPEdvb2dsZSAvPlxyXG4gICAgICAgICAgICA8L0ljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICBDb250aW51ZSB3aXRoIEdvb2dsZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPE9mZmVyIHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAnIH19PlxyXG4gICAgICAgICAgICBEb24ndCBoYXZlIGFueSBhY2NvdW50P3snICd9XHJcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZ25VcEZvcm19PlxyXG4gICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxyXG4gICAgICAgICAgPC9PZmZlcj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPE9mZmVyU2VjdGlvbj5cclxuICAgICAgICAgIDxPZmZlcj5cclxuICAgICAgICAgICAgRm9yZ290IHlvdXIgcGFzc3dvcmQ/XHJcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUZvcmdvdFBhc3NGb3JtfT5cclxuICAgICAgICAgICAgICBSZXNldCBJdFxyXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XHJcbiAgICAgICAgICA8L09mZmVyPlxyXG4gICAgICAgIDwvT2ZmZXJTZWN0aW9uPlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Nb2RhbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdjb21wb25lbnRzL090aGVycy9mb3Jtcy9pbnB1dCc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEljb25XcmFwcGVyLFxyXG4gIFdyYXBwZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIExvZ29XcmFwcGVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgU3ViSGVhZGluZyxcclxuICBIZWxwZXJUZXh0LFxyXG4gIE9mZmVyLFxyXG4gIC8vIElucHV0LFxyXG4gIERpdmlkZXIsXHJcbiAgTGlua0J1dHRvbixcclxufSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLWZvcm0uc3R5bGUnO1xyXG5pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gJ2Fzc2V0cy9pY29ucy9GYWNlYm9vayc7XHJcbmltcG9ydCB7IEdvb2dsZSB9IGZyb20gJ2Fzc2V0cy9pY29ucy9Hb29nbGUnO1xyXG5pbXBvcnQge3VzZUxvZ2luRm9ybX0gZnJvbSBcIkAvaG9va3MvdXNlTG9naW5Gb3JtXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2xvYWRVc2VyLCByZWdpc3Rlcn0gZnJvbSBcIkAvcmVkdXgvYWN0aW9ucy9nbG9iYWxBY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xyXG5pbXBvcnQge0FVVEh9IGZyb20gXCJAL3JlZHV4L2RlZmluZXNcIjtcclxuaW1wb3J0IHtKU09OQ29uZmlnfSBmcm9tIFwiQC9heGlvc0hlYWRlcnNcIjtcclxuaW1wb3J0IFRvYXN0IGZyb20gXCJsaWdodC10b2FzdFwiO1xyXG5jb25zdCBTaWdudXBNb2RhbDpSZWFjdC5GQzx7c2V0Q3VycmVudEZvcm06KHZhbHVlOidzaWduVXAnfCdmb3Jnb3RQYXNzJ3wnc2lnbkluJyk9PnZvaWR9Pj0oe3NldEN1cnJlbnRGb3JtfSk9PiB7XHJcbiAgY29uc3QgdG9nZ2xlU2lnbkluRm9ybSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRGb3JtKCdzaWduSW4nKVxyXG4gIH07XHJcbiAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHtpbnB1dHMsIGhhbmRsZUlucHV0Q2hhbmdlfSA9IHVzZUxvZ2luRm9ybSgpO1xyXG4gIGNvbnN0IG9uU3VibWl0PWFzeW5jIChlKT0+e1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9hdXRoL3JlZ2lzdGVyYCxcclxuICAgICAgICAgIHtmaXJzdE5hbWU6aW5wdXRzLmZpcnN0TmFtZSxsYXN0TmFtZTppbnB1dHMubGFzdE5hbWUsIGVtYWlsOmlucHV0cy5lbWFpbCwgcGFzc3dvcmQ6aW5wdXRzLnBhc3N3b3JkLCByb2xlOid1c2VyJ30sXHJcbiAgICAgICAgICBKU09OQ29uZmlnXHJcbiAgICAgIClcclxuICAgICAgZGlzcGF0Y2gocmVnaXN0ZXIoZGF0YSkpXHJcbiAgICAgIGF3YWl0IGxvYWRVc2VyKClcclxuICAgICAgVG9hc3Quc3VjY2VzcygnU3VjY2Vzc2Z1bGx5IHNpZ25lZCB1cCcpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeShkYXRhLnRva2VuKSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBUb2FzdC5mYWlsKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkaW5nPlxyXG4gICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8U3ViSGVhZGluZz5cclxuICAgICAgICAgIEV2ZXJ5IGZpbGwgaXMgcmVxdWlyZWQgaW4gc2lnbiB1cFxyXG4gICAgICAgIDwvU3ViSGVhZGluZz5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0gJ0ZpcnN0IG5hbWUnXHJcbiAgICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAgICAgbmFtZT0nZmlyc3ROYW1lJ1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMuZmlyc3ROYW1lfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0gJ0xhc3QgbmFtZSdcclxuICAgICAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgICAgICAgIG5hbWU9J2xhc3ROYW1lJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5sYXN0TmFtZX1cclxuXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwgQWRkcmVzcydcclxuICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcblxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSAnUGFzc3dvcmQgKG1pbiA2IGNoYXJhY3RlcnMpJ1xyXG4gICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgbWI9JzEwcHgnXHJcbiAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SGVscGVyVGV4dCBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwIDMwcHgnIH19PlxyXG4gICAgICAgICAgQnkgc2lnbmluZyB1cCwgeW91IGFncmVlIHRvXHJcbiAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICBUZXJtcyAmYW1wOyBDb25kaXRpb25cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvSGVscGVyVGV4dD5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHNpemU9J2JpZycgd2lkdGg9JzEwMCUnIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICBDb250aW51ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8RGl2aWRlcj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBvclxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRGl2aWRlcj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNjdiMicsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgPEZhY2Vib29rIC8+XHJcbiAgICAgICAgICA8L0ljb25XcmFwcGVyPlxyXG4gICAgICAgICAgQ29udGludWUgd2l0aCBGYWNlYm9va1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI4NWY0JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgPEdvb2dsZSAvPlxyXG4gICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgIENvbnRpbnVlIHdpdGggR29vZ2xlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPE9mZmVyIHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAnIH19PlxyXG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/eycgJ31cclxuICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZ25JbkZvcm19PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxyXG4gICAgICAgIDwvT2ZmZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwTW9kYWxcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi9jYXJ0JztcclxuaW1wb3J0IENhcnRQb3B1cEJ1dHRvbiwge1xyXG4gIEJveGVkQ2FydEJ1dHRvbixcclxufSBmcm9tICdAL2NvbXBvbmVudHMvY2FydC9wb3B1cC9jYXJ0LXBvcHVwLWJ1dHRvbic7XHJcbmltcG9ydCB7IENhcnRTbGlkZVBvcHVwIH0gZnJvbSAnLi9jYXJ0LnN0eWxlJztcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Y2FsY3VsYXRlVG90YWxQcmljZX0gZnJvbSBcIi4uLy4uL3V0aWxzL2NhcnRVdGlsc1wiO1xyXG5pbXBvcnQge09wZW5DYXJ0TW9kYWx9IGZyb20gXCJAL09wZW5Nb2RhbEZ1bmN0aW9uc1wiO1xyXG5jb25zdCBDYXJ0UG9wdXBTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5jYXJ0UG9wdXAge1xyXG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBib3R0b206IDUwcHggIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggIzIzZmYwMDs7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XHJcblxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG50eXBlIENhcnRQcm9wcyA9IHtcclxuICBkZXZpY2VUeXBlOiB7XHJcbiAgICBtb2JpbGU6IGJvb2xlYW47XHJcbiAgICB0YWJsZXQ6IGJvb2xlYW47XHJcbiAgICBkZXNrdG9wOiBib29sZWFuO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBDYXJ0UG9wVXA6IFJlYWN0LkZDPENhcnRQcm9wcz4gPSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXZpY2VUeXBlOiB7IG1vYmlsZSwgdGFibGV0LCBkZXNrdG9wIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgY29uc3QgW2lzT3BlbixzZXRJc09wZW5dPXVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgY29uc3Qge2N1cnJlbmN5OntzeW1ib2x9fSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBPcGVuQ2FydE1vZGFsKClcclxuICB9O1xyXG5cclxuICBsZXQgY2FydFNsaWRlckNsYXNzID0gaXNPcGVuID8gJ2NhcnRQb3B1cEZpeGVkJyA6ICcnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHttb2JpbGUgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPENhcnRQb3B1cFN0eWxlIC8+XHJcbiAgICAgICAgICAgICAgPENhcnRQb3B1cEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtY2FydCdcclxuICAgICAgICAgICAgICAgICAgaXRlbUNvdW50PXtjYXJ0U3RhdGUubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICBpdGVtUG9zdGZpeD17XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFN0YXRlLmxlbmd0aCA+IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlUHJlZml4PXtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vZGFsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPENhcnRTbGlkZVBvcHVwIGNsYXNzTmFtZT17Y2FydFNsaWRlckNsYXNzfT5cclxuICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJ0IG9uQ2xvc2VCdG5DbGljaz17KCk9PntzZXRJc09wZW4oZmFsc2UpfX0gc2Nyb2xsYmFySGVpZ2h0PScxMDB2aCcgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9DYXJ0U2xpZGVQb3B1cD5cclxuXHJcbiAgICAgICAgICAgICAgPEJveGVkQ2FydEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtY2FydCdcclxuICAgICAgICAgICAgICAgICAgaXRlbUNvdW50PXtjYXJ0U3RhdGUubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICBpdGVtUG9zdGZpeD17XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFN0YXRlLmxlbmd0aCA+IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpdGVtcycgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlUHJlZml4PXtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57c2V0SXNPcGVuKHRydWUpfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFBvcFVwO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7XHJcbiAgQ2FydFBvcHVwQm9keSxcclxuICBQb3B1cEhlYWRlcixcclxuICBQb3B1cEl0ZW1Db3VudCxcclxuICBDbG9zZUJ1dHRvbixcclxuICBQcm9tb0NvZGUsXHJcbiAgQ2hlY2tvdXRCdXR0b25XcmFwcGVyLFxyXG4gIENoZWNrb3V0QnV0dG9uLFxyXG4gIFRpdGxlLFxyXG4gIFByaWNlQm94LFxyXG4gIE5vUHJvZHVjdEltZyxcclxuICBJdGVtV3JhcHBlcixcclxuICBDb3Vwb25Cb3hXcmFwcGVyLFxyXG4gIENvdXBvbkNvZGUsIE5vUHJvZHVjdE1zZyxcclxufSBmcm9tICcuL2NhcnQuc3R5bGUnO1xyXG5pbXBvcnQgeyBDbG9zZUljb24gfSBmcm9tICdhc3NldHMvaWNvbnMvQ2xvc2VJY29uJztcclxuaW1wb3J0IHsgU2hvcHBpbmdCYWdMYXJnZSB9IGZyb20gJ2Fzc2V0cy9pY29ucy9TaG9wcGluZ0JhZ0xhcmdlJztcclxuaW1wb3J0IHsgTm9DYXJ0QmFnIH0gZnJvbSAnYXNzZXRzL2ljb25zL05vQ2FydEJhZyc7XHJcbmltcG9ydCB7Y2FsY3VsYXRlVG90YWxQcmljZX0gZnJvbSBcIi4uLy4uL3V0aWxzL2NhcnRVdGlsc1wiO1xyXG5pbXBvcnQgeyBDYXJ0SXRlbSB9IGZyb20gJ0AvY29tcG9uZW50cy9jYXJ0L2l0ZW0vY2FydC1pdGVtJztcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7ZGVjcmVhc2VRdWFudGl0eUNhcnQsaW5jcmVhc2VRdWFudGl0eUNhcnQscmVtb3ZlRnJvbUNhcnQscmVtb3ZlQWxsRnJvbUNhcnR9IGZyb20gXCJAL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG50eXBlIENhcnRQcm9wc1R5cGUgPSB7XHJcbiAgc3R5bGU/OiBhbnk7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHNjcm9sbGJhckhlaWdodD86IHN0cmluZztcclxuICBpc09wZW4/OmJvb2xlYW47XHJcbiAgb25DbG9zZUJ0bkNsaWNrPzogKGU6IGFueSkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IENhcnQ6IFJlYWN0LkZDPENhcnRQcm9wc1R5cGU+ID0gKHtcclxuICBzdHlsZSxcclxuICBjbGFzc05hbWUsXHJcbiAgb25DbG9zZUJ0bkNsaWNrLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0UG9wdXBCb2R5IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICA8UG9wdXBIZWFkZXI+XHJcbiAgICAgICAgPFBvcHVwSXRlbUNvdW50PlxyXG4gICAgICAgICAgPFNob3BwaW5nQmFnTGFyZ2Ugd2lkdGg9JzE5cHgnIGhlaWdodD0nMjRweCcgLz5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7MX1cclxuICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIGl0ZW1zXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9Qb3B1cEl0ZW1Db3VudD5cclxuXHJcbiAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2VCdG5DbGlja30+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgPC9DbG9zZUJ1dHRvbj5cclxuICAgICAgPC9Qb3B1cEhlYWRlcj5cclxuXHJcbiAgICAgICAgPEl0ZW1XcmFwcGVyIGNsYXNzTmFtZT0naXRlbXMtd3JhcHBlcic+XHJcbiAgICAgICAgICB7Y2FydFN0YXRlLmxlbmd0aD4wID8gKFxyXG4gICAgICAgICAgICBjYXJ0U3RhdGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPENhcnRJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjYXJ0SXRlbS0ke2l0ZW0uaWR9YH1cclxuICAgICAgICAgICAgICAgIG9uSW5jcmVtZW50PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGluY3JlYXNlUXVhbnRpdHlDYXJ0KGl0ZW0uY2FydElkKSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkRlY3JlbWVudD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChkZWNyZWFzZVF1YW50aXR5Q2FydChpdGVtLmNhcnRJZCkpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25SZW1vdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVtb3ZlRnJvbUNhcnQoaXRlbS5jYXJ0SWQpKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPE5vUHJvZHVjdEltZz5cclxuICAgICAgICAgICAgICAgIDxOb0NhcnRCYWcgLz5cclxuICAgICAgICAgICAgICA8L05vUHJvZHVjdEltZz5cclxuICAgICAgICAgICAgICA8Tm9Qcm9kdWN0TXNnPlxyXG4gICAgICAgICAgICAgICAgTm8gcHJvZHVjdHMgZm91bmRcclxuICAgICAgICAgICAgICA8L05vUHJvZHVjdE1zZz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvSXRlbVdyYXBwZXI+XHJcblxyXG4gICAgICA8Q2hlY2tvdXRCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgIDxQcm9tb0NvZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChyZW1vdmVBbGxGcm9tQ2FydCgpKX0+XHJcbiAgICAgICAgICAgICAgICAgIFJlbW92ZSBBbGxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUHJvbW9Db2RlPlxyXG5cclxuICAgICAgICB7dHJ1ZSA/IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jaGVja291dCc+XHJcbiAgICAgICAgICAgIDxDaGVja291dEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlQnRuQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIENoZWNrb3V0XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPFByaWNlQm94PlxyXG4gICAgICAgICAgICAgICAgICB7Lyp7Q1VSUkVOQ1l9Ki99XHJcbiAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSl9XHJcbiAgICAgICAgICAgICAgICA8L1ByaWNlQm94PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICA8L0NoZWNrb3V0QnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Q2hlY2tvdXRCdXR0b24+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgQ2hlY2tvdXRcclxuICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgIDxQcmljZUJveD5cclxuICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSl9XHJcbiAgICAgICAgICAgICAgPC9QcmljZUJveD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L0NoZWNrb3V0QnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ2hlY2tvdXRCdXR0b25XcmFwcGVyPlxyXG4gICAgPC9DYXJ0UG9wdXBCb2R5PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iLCJpbXBvcnQge0dMT0JBTCwgRk9STSwgQVVUSH0gZnJvbSBcIi4uL2RlZmluZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2V0QXV0aFRva2VuIGZyb20gXCIuLi9zZXRBdXRoVG9rZW5cIjtcclxuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnbGlnaHQtdG9hc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbEN1cnJlbmN5ID0gKGN1cjpzdHJpbmcpID0+ICh7XHJcbiAgICB0eXBlOiBHTE9CQUwuU0VUX0NVUlJFTkNZLFxyXG4gICAgY3VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDYXRlZ29yeSA9IChjYXRlZ29yeTpzdHJpbmcpID0+ICh7XHJcbiAgICB0eXBlOiBHTE9CQUwuU0VUX0NBVEVHT1JZLFxyXG4gICAgY2F0ZWdvcnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbFNlYXJjaCA9IChrZXl3b3JkOnN0cmluZykgPT4gKHtcclxuICAgIHR5cGU6IEdMT0JBTC5TRVRfU0VBUkNILFxyXG4gICAga2V5d29yZCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQVVUSC5MT0dfSU4sXHJcbiAgICBwYXlsb2FkOiBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBVVRILlNJR05fVVAsXHJcbiAgICBwYXlsb2FkOiBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiAoZGlzcGF0Y2g6YW55KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlckluZm8nKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhcnRJdGVtcycpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVyc2lzdDpyb290JylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzaGlwcGluZ0FkZHJlc3MnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BheW1lbnRNZXRob2QnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBBVVRILkxPR19PVVR9KVxyXG4gICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICcvJ1xyXG59XHJcbmV4cG9ydCBjb25zdCBsb2FkVXNlciA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDphbnkpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UudG9rZW4pIHtcclxuICAgICAgICBjb25zdCB0b2tlbj1sb2NhbFN0b3JhZ2UudG9rZW4ucmVwbGFjZUFsbCgnXCInLCcnKVxyXG4gICAgICAgIC8vc2VuZGluZyB0b2tlbiB0byBoZWFkZXJzXHJcbiAgICAgICAgc2V0QXV0aFRva2VuKHRva2VuKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvYXV0aC9tZWApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQVVUSC5MT0FEX1VTRVIsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQVVUSC5MT0FEX1VTRVJfRkFJTCxcclxuICAgICAgICAgICAgcGF5bG9hZDogZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlT3JkZXIgPSAob3JkZXI6b2JqZWN0KSA9PiBhc3luYyAoZGlzcGF0Y2g6YW55KSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUElfQkFTRV9VUkx9L2FwaS9vcmRlcnNgLCBvcmRlciwgY29uZmlnKVxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6QVVUSC5PUkRFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkYXRhLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjYXJ0SXRlbXMnKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZXJzaXN0OnJvb3QnKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9XHJcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIDogZXJyb3IubWVzc2FnZVxyXG4gICAgICAgIGlmIChtZXNzYWdlcyA9PT0gJ05vdCBhdXRob3JpemVkLCB0b2tlbiBmYWlsZWQnKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ291dCgpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3Qgc2V0QXV0aFRva2VuPSh0b2tlbjpzdHJpbmcpPT57XHJcbiAgICBpZih0b2tlbil7XHJcbiAgICAgICAgLy9hZGRpbmcgdG9rZW4gdG8gdGhlIGhlYWRlcnNcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddPWBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgLy9yZW1vdmluZyB0b2tlbiBmcm9tIHRoZSBoZWFkZXJzXHJcbiAgICAgICAgZGVsZXRlIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ11cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBzZXRBdXRoVG9rZW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=