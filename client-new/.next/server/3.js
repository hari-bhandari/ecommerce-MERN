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



/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3Blbk1vZGFsRnVuY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL0Nsb3NlSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9GYWNlYm9vay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9Hb29nbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvU2hvcHBpbmdCYWcudHN4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvU2hvcHBpbmdCYWdMYXJnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2F4aW9zSGVhZGVycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbS5zdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9pdGVtL2NhcnQtaXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9wb3B1cC9jYXJ0LXBvcHVwLWJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9wb3B1cC9jYXJ0LXBvcHVwLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9hdXRoZW50aWNhdGlvbi1mb3JtLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9mb3Jnb3QtcGFzc3dvcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9hdXRoZW50aWNhdGlvbi1mb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvYXV0aGVudGljYXRpb24tZm9ybS9sb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm0vcmVnaXN0ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9jYXJ0L2NhcnQtcG9wdXAudHN4Iiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9jYXJ0L2NhcnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VMb2dpbkZvcm0udHMiXSwibmFtZXMiOlsiT3BlbkF1dGhUYWIiLCJvcGVuTW9kYWwiLCJzaG93Iiwib3ZlcmxheUNsYXNzTmFtZSIsImNsb3NlT25DbGlja091dHNpZGUiLCJjb21wb25lbnQiLCJBdXRoZW50aWNhdGlvbkZvcm0iLCJjbG9zZUNvbXBvbmVudCIsImNvbmZpZyIsImVuYWJsZVJlc2l6aW5nIiwiZGlzYWJsZURyYWdnaW5nIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJPcGVuQ2FydE1vZGFsIiwidHJhbnNpdGlvbiIsInRlbnNpb24iLCJmcmljdGlvbiIsIkNhcnQiLCJjb21wb25lbnRQcm9wcyIsIm9uQ2xvc2VCdG5DbGljayIsImNsb3NlTW9kYWwiLCJzY3JvbGxiYXJIZWlnaHQiLCJDbG9zZUljb24iLCJGYWNlYm9vayIsImNvbG9yIiwiR29vZ2xlIiwiU2hvcHBpbmdCYWciLCJTaG9wcGluZ0JhZ0xhcmdlIiwiSlNPTkNvbmZpZyIsImhlYWRlcnMiLCJJdGVtQm94Iiwic3R5bGVkIiwiZGl2IiwiY3NzIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicHkiLCJweCIsImJvcmRlckJvdHRvbSIsImJvcmRlckJvdHRvbUNvbG9yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJJbmZvcm1hdGlvbiIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwiSW1hZ2UiLCJpbWciLCJvYmplY3RGaXQiLCJtYXJnaW4iLCJOYW1lIiwic3BhbiIsIm1iIiwibGluZUhlaWdodCIsIlByaWNlIiwibXQiLCJXZWlnaHQiLCJUb3RhbCIsIm1sIiwiUmVtb3ZlQnV0dG9uIiwiYnV0dG9uIiwicGFkZGluZyIsImJvcmRlciIsIm91dGxpbmUiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDYXJ0SXRlbSIsImRhdGEiLCJvbkRlY3JlbWVudCIsIm9uSW5jcmVtZW50Iiwib25SZW1vdmUiLCJuYW1lIiwidGh1bWJJbWFnZSIsInByaWNlIiwic2FsZVByaWNlIiwidW5pdCIsImNvdW50SW5TdG9jayIsImRpc3BsYXlQcmljZSIsImNhcnRRdWFudGl0eSIsIkNhcnRQb3B1cEJ1dHRvbiIsIml0ZW1Db3VudCIsIml0ZW1Qb3N0Zml4IiwicHJpY2VQcmVmaXgiLCJzdHlsZSIsIm9uQ2xpY2siLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIkJveGVkQ2FydEJ1dHRvbiIsIkNhcnRQb3B1cEJ1dHRvblN0eWxlZCIsInRoZW1lR2V0IiwiQnV0dG9uSW1nQm94IiwiSXRlbUNvdW50IiwiUHJpY2VCb3giLCJDYXJ0UG9wdXBCb3hCdXR0b24iLCJUb3RhbEl0ZW1zIiwiUHJpY2VCb3hBbHQiLCJJY29uV3JhcHBlciIsIldyYXBwZXIiLCJDb250YWluZXIiLCJMb2dvV3JhcHBlciIsIkhlYWRpbmciLCJoMyIsIlN1YkhlYWRpbmciLCJPZmZlclNlY3Rpb24iLCJPZmZlciIsInAiLCJIZWxwZXJUZXh0IiwiRGl2aWRlciIsIkxpbmtCdXR0b24iLCJGb3Jnb3RQYXNzd29yZE1vZGFsIiwic2V0Q3VycmVudEZvcm0iLCJ0b2dnbGVTaWduSW5Gb3JtIiwicGFkZGluZ0JvdHRvbSIsInJvdXRlciIsImlzQXV0aGVudGljYXRlZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJnbG9iYWxSZWR1Y2VyIiwiY3VycmVudEZvcm0iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInBhdGhuYW1lIiwicHVzaCIsIndpdGhSb3V0ZXIiLCJTaWduSW5Nb2RhbCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2dnbGVTaWduVXBGb3JtIiwidG9nZ2xlRm9yZ290UGFzc0Zvcm0iLCJpbnB1dHMiLCJoYW5kbGVJbnB1dENoYW5nZSIsInVzZUxvZ2luRm9ybSIsImxvZ2luQ2FsbGJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJBUElfQkFTRV9VUkwiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwibG9hZFVzZXIiLCJUb2FzdCIsInN1Y2Nlc3MiLCJlcnJvciIsImZhaWwiLCJyZXNwb25zZSIsIm1hcmdpbkJvdHRvbSIsIlNpZ251cE1vZGFsIiwib25TdWJtaXQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInJvbGUiLCJyZWdpc3RlciIsIkNhcnRQb3B1cFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJDYXJ0UG9wVXAiLCJkZXZpY2VUeXBlIiwibW9iaWxlIiwidGFibGV0IiwiZGVza3RvcCIsImlzT3BlbiIsInNldElzT3BlbiIsImNhcnRTdGF0ZSIsImNhcnRSZWR1Y2VyIiwiY3VycmVuY3kiLCJzeW1ib2wiLCJzaG9wUmVkdWNlciIsImhhbmRsZU1vZGFsIiwiY2FydFNsaWRlckNsYXNzIiwibGVuZ3RoIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsIm1hcCIsIml0ZW0iLCJpbmNyZWFzZVF1YW50aXR5Q2FydCIsImNhcnRJZCIsImRlY3JlYXNlUXVhbnRpdHlDYXJ0IiwicmVtb3ZlRnJvbUNhcnQiLCJpZCIsInJlbW92ZUFsbEZyb21DYXJ0Iiwic2V0SW5wdXRzIiwiZXZlbnQiLCJwZXJzaXN0IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsV0FBVyxHQUFDLE1BQ3JCQyxtRUFBUyxDQUFDO0FBQ1ZDLE1BQUksRUFBRSxJQURJO0FBRVZDLGtCQUFnQixFQUFFLG9CQUZSO0FBR1ZDLHFCQUFtQixFQUFFLElBSFg7QUFJVkMsV0FBUyxFQUFFQyxxRUFKRDtBQUtWQyxnQkFBYyxFQUFFLEVBTE47QUFNVkMsUUFBTSxFQUFFO0FBQ0pDLGtCQUFjLEVBQUUsS0FEWjtBQUVKQyxtQkFBZSxFQUFF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LElBQWQsR0FBcUJtSCxLQUFLLENBQUNFLE1BQU4sQ0FBYUM7QUFBaEUsTUFBRCxDQUFUO0FBQ0gsR0FIRDs7QUFJQSxTQUFPO0FBQ0gzRCxxQkFERztBQUVIRDtBQUZHLEdBQVA7QUFJSCxDQVZEIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0aGVudGljYXRpb25Gb3JtIGZyb20gXCJAL2ZlYXR1cmVzL2F1dGhlbnRpY2F0aW9uLWZvcm1cIjtcclxuaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSAnQHJlZHEvcmV1c2UtbW9kYWwnO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiQC9mZWF0dXJlcy9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9wZW5BdXRoVGFiPSgpPT5cclxuICAgIG9wZW5Nb2RhbCh7XHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgb3ZlcmxheUNsYXNzTmFtZTogJ3F1aWNrLXZpZXctb3ZlcmxheScsXHJcbiAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlOiB0cnVlLFxyXG4gICAgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkZvcm0sXHJcbiAgICBjbG9zZUNvbXBvbmVudDogJycsXHJcbiAgICBjb25maWc6IHtcclxuICAgICAgICBlbmFibGVSZXNpemluZzogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZURyYWdnaW5nOiB0cnVlLFxyXG4gICAgICAgIGNsYXNzTmFtZTogJ3F1aWNrLXZpZXctbW9kYWwnLFxyXG4gICAgICAgIHdpZHRoOiA0NTgsXHJcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICB9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IE9wZW5DYXJ0TW9kYWw9KCk9Pm9wZW5Nb2RhbCh7XHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgY29uZmlnOiB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiAnY2FydFBvcHVwJyxcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICAgIGVuYWJsZVJlc2l6aW5nOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlRHJhZ2dpbmc6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICB0ZW5zaW9uOiAzNjAsXHJcbiAgICAgICAgICAgIGZyaWN0aW9uOiA0MCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNsb3NlT25DbGlja091dHNpZGU6IHRydWUsXHJcbiAgICBjb21wb25lbnQ6IENhcnQsXHJcbiAgICBjbG9zZUNvbXBvbmVudDogKCkgPT4gPGRpdiAvPixcclxuICAgIGNvbXBvbmVudFByb3BzOiB7IG9uQ2xvc2VCdG5DbGljazogY2xvc2VNb2RhbCwgc2Nyb2xsYmFySGVpZ2h0OiAzMzAgfSxcclxufSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IENsb3NlSWNvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCIxMC4wMDNcIlxyXG4gICAgICBoZWlnaHQ9XCIxMFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTAuMDAzIDEwXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkYXRhLW5hbWU9XCJfaW9uaWNvbnNfc3ZnX2lvcy1jbG9zZSAoNSlcIlxyXG4gICAgICAgIGQ9XCJNMTY2LjY4NiwxNjUuNTVsMy41NzMtMy41NzNhLjgzNy44MzcsMCwwLDAtMS4xODQtMS4xODRsLTMuNTczLDMuNTczLTMuNTczLTMuNTczYS44MzcuODM3LDAsMSwwLTEuMTg0LDEuMTg0bDMuNTczLDMuNTczLTMuNTczLDMuNTczYS44MzcuODM3LDAsMCwwLDEuMTg0LDEuMTg0bDMuNTczLTMuNTczLDMuNTczLDMuNTczYS44MzcuODM3LDAsMCwwLDEuMTg0LTEuMTg0WlwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNjAuNSAtMTYwLjU1KVwiXHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgRmFjZWJvb2sgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgd2lkdGggPSAnMTdweCcsXHJcbiAgaGVpZ2h0ID0gJzE3cHgnLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PScwIDAgMTcgMTcnXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZGF0YS1uYW1lPSdfaW9uaWNvbnNfc3ZnX2xvZ28tZmFjZWJvb2sgKDEpJ1xyXG4gICAgICAgIGQ9J004MC4wNjEsNjRINjQuOTM5YS45MzkuOTM5LDAsMCwwLS45MzkuOTM5VjgwLjA2MWEuOTM5LjkzOSwwLDAsMCwuOTM5LjkzOUg3Mi41Vjc0LjI3MUg3MC40NjhWNzEuNzkySDcyLjVWNjkuOTU5YTMuMjMsMy4yMywwLDAsMSwzLjQ4NC0zLjM5MWMuOTM5LDAsMS45NDguMDcxLDIuMTgzLjF2Mi4yOTNINzYuNmMtMS4wNjcsMC0xLjI3MS41LTEuMjcxLDEuMjQ4djEuNThoMi41NDFsLS4zMzIsMi40NzlINzUuMzMzVjgxaDQuNzI4QS45MzkuOTM5LDAsMCwwLDgxLDgwLjA2MVY2NC45MzlBLjkzOS45MzksMCwwLDAsODAuMDYxLDY0WidcclxuICAgICAgICB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNjQgLTY0KSdcclxuICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBHb29nbGUgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgd2lkdGggPSAnMTdweCcsXHJcbiAgaGVpZ2h0ID0gJzE3cHgnLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PScwIDAgMTYuNjc3IDE3J1xyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9J002OC41NzksNTUuMjlsLS4wODYtLjM2NEg2MC41ODR2My4zNDhoNC43MjVhNC43Myw0LjczLDAsMCwxLTQuNjI3LDMuNTU2LDUuNTMzLDUuNTMzLDAsMCwxLTMuNzI0LTEuNDg0LDUuMzE2LDUuMzE2LDAsMCwxLTEuNTg2LTMuNzUyLDUuNDgzLDUuNDgzLDAsMCwxLDEuNTU3LTMuNzQ4LDUuMyw1LjMsMCwwLDEsMy43LTEuNDQ3LDQuODI1LDQuODI1LDAsMCwxLDMuMTQ3LDEuMjI2bDIuMzc5LTIuMzY3YTguNDE3LDguNDE3LDAsMCwwLTUuNi0yLjE1OEE4LjM5MSw4LjM5MSwwLDAsMCw1Miw1Ni42LDguNTQxLDguNTQxLDAsMCwwLDU0LjMyNiw2Mi41YTguODczLDguODczLDAsMCwwLDYuNCwyLjYsNy44OTEsNy44OTEsMCwwLDAsNS43NDctMi40MTYsOC40ODYsOC40ODYsMCwwLDAsMi4yMDctNS44NzgsOS43ODgsOS43ODgsMCwwLDAtLjEtMS41MTZaJ1xyXG4gICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MiAtNDguMSknXHJcbiAgICAgICAgZmlsbD17Y29sb3J9XHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgU2hvcHBpbmdCYWcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuPlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgIHdpZHRoPScxMi42ODYnXHJcbiAgICAgICAgaGVpZ2h0PScxNidcclxuICAgICAgICB2aWV3Qm94PScwIDAgMTIuNjg2IDE2J1xyXG4gICAgICA+XHJcbiAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAyNzA0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjcuMDIzIC0yKSc+XHJcbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE3JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNy4wMjMgNS4xNTYpJz5cclxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxNic+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nUGF0aCAzJ1xyXG4gICAgICAgICAgICAgICAgZD0nTTY1LjcsMTExLjA0M2wtLjcxNC05QTEuMTI1LDEuMTI1LDAsMCwwLDYzLjg3MSwxMDFINjIuNDU5VjEwMy4xYS40NjkuNDY5LDAsMSwxLS45MzcsMFYxMDFINTcuMjExVjEwMy4xYS40NjkuNDY5LDAsMSwxLS45MzcsMFYxMDFINTQuODYyYTEuMTI1LDEuMTI1LDAsMCwwLTEuMTE3LDEuMDMzbC0uNzE1LDkuMDA2YTIuNjA1LDIuNjA1LDAsMCwwLDIuNiwyLjhINjMuMWEyLjYwNSwyLjYwNSwwLDAsMCwyLjYtMi44MDZabS00LjIyNC00LjU4NS0yLjQyNCwyLjQyNGEuNDY4LjQ2OCwwLDAsMS0uNjYzLDBsLTEuMTM2LTEuMTM2YS40NjkuNDY5LDAsMCwxLC42NjMtLjY2M2wuOC44LDIuMDkyLTIuMDkyYS40NjkuNDY5LDAsMSwxLC42NjMuNjYzWidcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01My4wMjMgLTEwMS4wMDUpJ1xyXG4gICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMwLjI3NCAyKSc+XHJcbiAgICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTgnPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9J1BhdGggNCdcclxuICAgICAgICAgICAgICAgIGQ9J00xNjAuMTMyLDBhMy4xLDMuMSwwLDAsMC0zLjA5MywzLjA5M3YuMDYzaC45MzdWMy4wOTNhMi4xNTUsMi4xNTUsMCwxLDEsNC4zMTEsMHYuMDYzaC45MzdWMy4wOTNBMy4xLDMuMSwwLDAsMCwxNjAuMTMyLDBaJ1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE1Ny4wMzkpJ1xyXG4gICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBTaG9wcGluZ0JhZ0xhcmdlID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIHdpZHRoID0gJzE4cHgnLFxyXG4gIGhlaWdodCA9ICcxOHB4JyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD0nMCAwIDIzLjc4NiAzMCdcclxuICAgID5cclxuICAgICAgPGcgZGF0YS1uYW1lPSdzaG9wcGluZy1iYWcgKDMpJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTMuMDIzKSc+XHJcbiAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAyNzA0Jz5cclxuICAgICAgICAgIDxnIGRhdGEtbmFtZT0nR3JvdXAgMTcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUzLjAyMyA1LjkxOCknPlxyXG4gICAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE2Jz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPSdQYXRoIDMnXHJcbiAgICAgICAgICAgICAgICBkPSdNNzYuOCwxMTkuODI2bC0xLjM0LTE2Ljg4MUEyLjEwOSwyLjEwOSwwLDAsMCw3My4zNjIsMTAxSDcwLjcxNnYzLjkyMWEuODc5Ljg3OSwwLDEsMS0xLjc1NywwVjEwMUg2MC44NzV2My45MjFhLjg3OS44NzksMCwxLDEtMS43NTcsMFYxMDFINTYuNDcyYTIuMTA5LDIuMTA5LDAsMCwwLTIuMDk0LDEuOTM3bC0xLjM0LDE2Ljg4NmE0Ljg4NSw0Ljg4NSwwLDAsMCw0Ljg3LDUuMjU5SDcxLjkyNmE0Ljg4NCw0Ljg4NCwwLDAsMCw0Ljg3LTUuMjYxWm0tNy45Mi04LjYtNC41NDQsNC41NDRhLjg3OC44NzgsMCwwLDEtMS4yNDMsMGwtMi4xMy0yLjEzQS44NzguODc4LDAsMCwxLDYyLjIsMTEyLjRsMS41MDksMS41MDgsMy45MjMtMy45MjNhLjg3OS44NzksMCwxLDEsMS4yNDIsMS4yNDNaJ1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUzLjAyMyAtMTAxLjAwNSknXHJcbiAgICAgICAgICAgICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9J0dyb3VwIDE5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1OS4xMTgpJz5cclxuICAgICAgICAgICAgPGcgZGF0YS1uYW1lPSdHcm91cCAxOCc+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nUGF0aCA0J1xyXG4gICAgICAgICAgICAgICAgZD0nTTE2Mi44MzgsMGE1LjgwNiw1LjgwNiwwLDAsMC01LjgsNS44di4xMTlIMTU4LjhWNS44YTQuMDQyLDQuMDQyLDAsMSwxLDguMDgzLDB2LjExOWgxLjc1N1Y1LjhBNS44MDYsNS44MDYsMCwwLDAsMTYyLjgzOCwwWidcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNTcuMDM5KSdcclxuICAgICAgICAgICAgICAgIGZpbGw9e2NvbG9yfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBKU09OQ29uZmlnPSB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xyXG5leHBvcnQgY29uc3QgSXRlbUJveCA9IHN0eWxlZC5kaXYoXHJcbiAgY3NzKHtcclxuICAgIGZvbnRTaXplOiAnYmFzZScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBweTogMTUsXHJcbiAgICBweDogMjUsXHJcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWRgLFxyXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6ICdncmF5LjIwMCcsXHJcbiAgfSksXHJcbiAge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2KHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgbWFyZ2luTGVmdDogJzE1cHgnLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IEltYWdlID0gc3R5bGVkLmltZyh7XHJcbiAgd2lkdGg6IDYwLFxyXG4gIGhlaWdodDogNjAsXHJcbiAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gIG1hcmdpbjogJzAgMTVweCcsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBmb250V2VpZ2h0OiAnbWQnLFxyXG4gICAgY29sb3I6ICd0ZXh0LmJvbGQnLFxyXG4gICAgbWI6ICcwcHgnLFxyXG4gICAgbGluZUhlaWdodDogMS41LFxyXG4gIH0pXHJcbik7XHJcbmV4cG9ydCBjb25zdCBQcmljZSA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBjb2xvcjogJ3ByaW1hcnkucmVndWxhcicsXHJcbiAgICBtdDogJzEwcHgnLFxyXG4gICAgbWI6ICcxMHB4JyxcclxuICB9KVxyXG4pO1xyXG5leHBvcnQgY29uc3QgV2VpZ2h0ID0gc3R5bGVkLnNwYW4oXHJcbiAgY3NzKHtcclxuICAgIGZvbnRTaXplOiAnc20nLFxyXG4gICAgZm9udFdlaWdodDogJ3JlZ3VsYXInLFxyXG4gICAgY29sb3I6ICd0ZXh0LnJlZ3VsYXInLFxyXG4gICAgbWI6ICc1cHgnLFxyXG4gIH0pXHJcbik7XHJcbmV4cG9ydCBjb25zdCBUb3RhbCA9IHN0eWxlZC5zcGFuKFxyXG4gIGNzcyh7XHJcbiAgICBjb2xvcjogJ3RleHQuYm9sZCcsXHJcbiAgICBtbDogJ2F1dG8nLFxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgUmVtb3ZlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbih7XHJcbiAgcGFkZGluZzogJzVweCcsXHJcbiAgYm9yZGVyOiAwLFxyXG4gIG91dGxpbmU6IDAsXHJcbiAgbWFyZ2luTGVmdDogJzE1cHgnLFxyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjI1KScsXHJcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuXHJcbiAgJyY6aG92ZXInOiB7XHJcbiAgICBjb2xvcjogJ3JlZCcsXHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvdW50ZXIgfSBmcm9tICcuLi9jb3VudGVyL2NvdW50ZXInO1xyXG5pbXBvcnQgeyBDbG9zZUljb24gfSBmcm9tICdAL2Fzc2V0cy9pY29ucy9DbG9zZUljb24nO1xyXG5pbXBvcnQge1xyXG4gIEl0ZW1Cb3gsXHJcbiAgSW1hZ2UsXHJcbiAgSW5mb3JtYXRpb24sXHJcbiAgTmFtZSxcclxuICBQcmljZSxcclxuICBXZWlnaHQsXHJcbiAgVG90YWwsXHJcbiAgUmVtb3ZlQnV0dG9uLFxyXG59IGZyb20gJy4vY2FydC1pdGVtLnN0eWxlJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgZGF0YTogYW55O1xyXG4gIG9uRGVjcmVtZW50OiAoKSA9PiB2b2lkO1xyXG4gIG9uSW5jcmVtZW50OiAoKSA9PiB2b2lkO1xyXG4gIG9uUmVtb3ZlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydEl0ZW06IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgZGF0YSxcclxuICBvbkRlY3JlbWVudCxcclxuICBvbkluY3JlbWVudCxcclxuICBvblJlbW92ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgdGh1bWJJbWFnZSwgcHJpY2UsIHNhbGVQcmljZSwgdW5pdCwgY291bnRJblN0b2NrIH0gPSBkYXRhO1xyXG4gIGNvbnN0IGRpc3BsYXlQcmljZSA9IHNhbGVQcmljZSA/IHNhbGVQcmljZSA6IHByaWNlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8SXRlbUJveD5cclxuICAgICAgPENvdW50ZXJcclxuICAgICAgICB2YWx1ZT17ZGF0YS5jYXJ0UXVhbnRpdHl9XHJcbiAgICAgICAgb25EZWNyZW1lbnQ9e29uRGVjcmVtZW50fVxyXG4gICAgICAgIG9uSW5jcmVtZW50PXtvbkluY3JlbWVudH1cclxuICAgICAgICB2YXJpYW50PVwibGlnaHRWZXJ0aWNhbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbWFnZSBzcmM9e3RodW1iSW1hZ2V9IC8+XHJcbiAgICAgIDxJbmZvcm1hdGlvbj5cclxuICAgICAgICA8TmFtZT57bmFtZX08L05hbWU+XHJcbiAgICAgICAgPFByaWNlPlxyXG4gICAgICAgICAge2Rpc3BsYXlQcmljZX1cclxuICAgICAgICA8L1ByaWNlPlxyXG4gICAgICAgIDxXZWlnaHQ+XHJcbiAgICAgICAgICB7Lyp7cXVhbnRpdHl9IFgge3VuaXR9Ki99XHJcbiAgICAgICAgPC9XZWlnaHQ+XHJcbiAgICAgIDwvSW5mb3JtYXRpb24+XHJcbiAgICAgIDxUb3RhbD5cclxuICAgICAgICB7Lyp7KHF1YW50aXR5ICogZGlzcGxheVByaWNlKS50b0ZpeGVkKDIpfSovfVxyXG4gICAgICA8L1RvdGFsPlxyXG4gICAgICA8UmVtb3ZlQnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlfT5cclxuICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgIDwvUmVtb3ZlQnV0dG9uPlxyXG4gICAgPC9JdGVtQm94PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2FydFBvcHVwQnV0dG9uU3R5bGVkLFxyXG4gIEJ1dHRvbkltZ0JveCxcclxuICBJdGVtQ291bnQsXHJcbiAgUHJpY2VCb3gsXHJcbiAgQ2FydFBvcHVwQm94QnV0dG9uLFxyXG4gIFByaWNlQm94QWx0LFxyXG4gIFRvdGFsSXRlbXMsXHJcbn0gZnJvbSAnLi9jYXJ0LXBvcHVwLnN0eWxlJztcclxuaW1wb3J0IHsgU2hvcHBpbmdCYWcgfSBmcm9tICdAL2Fzc2V0cy9pY29ucy9TaG9wcGluZ0JhZyc7XHJcblxyXG50eXBlIENhcnRCdXR0b25Qcm9wcyA9IHtcclxuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XHJcbiAgaXRlbUNvdW50PzogbnVtYmVyO1xyXG4gIGl0ZW1Qb3N0Zml4PzogYW55O1xyXG4gIHByaWNlPzogbnVtYmVyO1xyXG4gIHByaWNlUHJlZml4Pzogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBvbkNsaWNrPzogKGU6IGFueSkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IENhcnRQb3B1cEJ1dHRvbjogUmVhY3QuRkM8Q2FydEJ1dHRvblByb3BzPiA9ICh7XHJcbiAgaXRlbUNvdW50LFxyXG4gIGl0ZW1Qb3N0Zml4ID0gJ2l0ZW1zJyxcclxuICBwcmljZSxcclxuICBwcmljZVByZWZpeCA9ICckJyxcclxuICBzdHlsZSxcclxuICBvbkNsaWNrLFxyXG4gIGNsYXNzTmFtZSxcclxufSkgPT4gKFxyXG4gIDxDYXJ0UG9wdXBCdXR0b25TdHlsZWQgc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICA8QnV0dG9uSW1nQm94PlxyXG4gICAgICA8U2hvcHBpbmdCYWcgLz5cclxuICAgIDwvQnV0dG9uSW1nQm94PlxyXG4gICAgPEl0ZW1Db3VudD5cclxuICAgICAge2l0ZW1Db3VudH0ge2l0ZW1Qb3N0Zml4fVxyXG4gICAgPC9JdGVtQ291bnQ+XHJcbiAgICA8UHJpY2VCb3g+XHJcbiAgICAgIHtwcmljZVByZWZpeH1cclxuICAgICAge3BhcnNlRmxvYXQoYCR7cHJpY2V9YCkudG9GaXhlZCgyKX1cclxuICAgIDwvUHJpY2VCb3g+XHJcbiAgPC9DYXJ0UG9wdXBCdXR0b25TdHlsZWQ+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQm94ZWRDYXJ0QnV0dG9uOiBSZWFjdC5GQzxDYXJ0QnV0dG9uUHJvcHM+ID0gKHtcclxuICBpdGVtQ291bnQsXHJcbiAgaXRlbVBvc3RmaXggPSAnaXRlbXMnLFxyXG4gIHByaWNlLFxyXG4gIHByaWNlUHJlZml4ID0gJyQnLFxyXG4gIHN0eWxlLFxyXG4gIG9uQ2xpY2ssXHJcbiAgY2xhc3NOYW1lLFxyXG59KSA9PiAoXHJcbiAgPENhcnRQb3B1cEJveEJ1dHRvbiBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgIDxUb3RhbEl0ZW1zPlxyXG4gICAgICA8U2hvcHBpbmdCYWcgLz5cclxuICAgICAge2l0ZW1Db3VudH0ge2l0ZW1Qb3N0Zml4fVxyXG4gICAgPC9Ub3RhbEl0ZW1zPlxyXG4gICAgPFByaWNlQm94QWx0PlxyXG4gICAgICB7cHJpY2VQcmVmaXh9XHJcbiAgICAgIHtwYXJzZUZsb2F0KGAke3ByaWNlfWApLnRvRml4ZWQoMil9XHJcbiAgICA8L1ByaWNlQm94QWx0PlxyXG4gIDwvQ2FydFBvcHVwQm94QnV0dG9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFBvcHVwQnV0dG9uO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgQ2FydFBvcHVwQnV0dG9uU3R5bGVkID0gc3R5bGVkKCdidXR0b24nKWBcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgYm94LXNoYWRvdzogJHt0aGVtZUdldCgnc2hhZG93cy5iaWcnLCAnMCAyMXB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogNTBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZzogMnB4IDJweCAycHggMzBweDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU4MXB4KSB7XHJcbiAgICAmOm5vdCguZml4ZWRDYXJ0UG9wdXApIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25JbWdCb3ggPSBzdHlsZWQoJ3NwYW4nKWBcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtQ291bnQgPSBzdHlsZWQoJ3NwYW4nKWBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQcmljZUJveCA9IHN0eWxlZCgnc3BhbicpYFxyXG4gIHdpZHRoOiA1NnB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdzYW5zLXNlcmlmJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLnhzJywgJzEyJyl9cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzLmJvbGQnLCAnNzAwJyl9O1xyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJ0UG9wdXBCb3hCdXR0b24gPSBzdHlsZWQoJ2J1dHRvbicpYFxyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeS5yZWd1bGFyJywgJyMwMDlFN0YnKX07XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiAzMCUgMCUgMCUgMzAlO1xyXG4gIGJvcmRlcjogIzAwOUU3RiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJveC1zaGFkb3c6ICR7dGhlbWVHZXQoJ3NoYWRvd3MuYmlnJywgJzAgMjFweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcbiAgb3V0bGluZTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC00NnB4O1xyXG4gIHotaW5kZXg6IDk5O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVG90YWxJdGVtcyA9IHN0eWxlZCgnc3BhbicpYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJpY2VCb3hBbHQgPSBzdHlsZWQoJ3NwYW4nKWBcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlIDAlIDAlIDE1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOUU3RicpfTtcclxuICBtYXJnaW46IDAgMTBweCAxMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IHtcclxuICBCdXR0b25JbWdCb3gsXHJcbiAgQ2FydFBvcHVwQnV0dG9uU3R5bGVkLFxyXG4gIEl0ZW1Db3VudCxcclxuICBQcmljZUJveCxcclxuICBDYXJ0UG9wdXBCb3hCdXR0b24sXHJcbiAgUHJpY2VCb3hBbHQsXHJcbiAgVG90YWxJdGVtcyxcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cy9PdGhlcnMvYnV0dG9uL2J1dHRvbic7XHJcbmV4cG9ydCB7IEJ1dHRvbiB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogNDBweCA2MHB4IDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogNDBweCAzMHB4IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ29XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5oM2BcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5oZWFkaW5nJywgJ3NhbnMtc2VyaWYnKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMubGcnLCAnMjEnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMuYm9sZCcsICc3MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJIZWFkaW5nID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBPZmZlclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmdyYXkuMjAwJywgJyNGN0Y3RjcnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgT2ZmZXIgPSBzdHlsZWQucGBcclxuICBmb250LWZhbWlseTogJHt0aGVtZUdldCgnZm9udHMuYm9keScsICdMYXRvJyl9O1xyXG4gIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICBtYXJnaW46IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVscGVyVGV4dCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbiAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuc20nLCAnMTMnKX1weDtcclxuICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMucmVndWxhcicsICc0MDAnKX07XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0LnJlZ3VsYXInLCAnIzc3Nzk4YycpfTtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuYmx1ZS5saW5rJywgJyM0Mjg1ZjQnKX07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgaGVpZ2h0OiA0OHB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWVHZXQoJ3JhZGlpLmJhc2UnLCAnNnB4Jyl9O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjIwMCcsICcjZjdmN2Y3Jyl9O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5ncmF5LjcwMCcsICcjZTZlNmU2Jyl9O1xyXG4vLyAgIGZvbnQtZmFtaWx5OiAke3RoZW1lR2V0KCdmb250cy5ib2R5JywgJ0xhdG8nKX07XHJcbi8vICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuYmFzZScsICcxNScpfXB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuLy8gICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHQuYm9sZCcsICcjMEQxMTM2Jyl9O1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4vLyAgIHBhZGRpbmc6IDAgMThweDtcclxuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlO1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4vLyAgICY6aG92ZXIsXHJcbi8vICAgJjpmb2N1cyB7XHJcbi8vICAgICBvdXRsaW5lOiAwO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgJjpmb2N1cyB7XHJcbi8vICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5LnJlZ3VsYXInLCAnIzAwOWU3ZicpfTtcclxuLy8gICB9XHJcblxyXG4vLyAgICY6OnBsYWNlaG9sZGVyIHtcclxuLy8gICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5yZWd1bGFyJywgJyM3Nzc5OGMnKX07XHJcbi8vICAgICBmb250LXNpemU6IGNhbGMoJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weCArIDFweCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4vLyAgICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4vLyAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgJi5kaXNhYmxlZCB7XHJcbi8vICAgICAuaW5uZXItd3JhcCB7XHJcbi8vICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbi8vICAgICAgIG9wYWNpdHk6IDAuNjtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIGA7XHJcblxyXG5leHBvcnQgY29uc3QgRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWVHZXQoJ2ZvbnRzLmJvZHknLCAnTGF0bycpfTtcclxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzLmJhc2UnLCAnMTUnKX1weDtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5yZWd1bGFyJywgJzQwMCcpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dC5ib2xkJywgJyMwRDExMzYnKX07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS41MDAnLCAnI2YxZjFmMScpfTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1Jyl9cHggLSAxcHgpO1xyXG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy5ib2xkJywgJzcwMCcpfTtcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnkucmVndWxhcicsICcjMDA5ZTdmJyl9O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgV3JhcHBlcixcclxuICBDb250YWluZXIsXHJcbiAgSGVhZGluZyxcclxuICBTdWJIZWFkaW5nLFxyXG4gIC8vIElucHV0LFxyXG4gIEJ1dHRvbixcclxuICBMaW5rQnV0dG9uLFxyXG4gIE9mZmVyLFxyXG59IGZyb20gJy4vYXV0aGVudGljYXRpb24tZm9ybS5zdHlsZSc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnY29tcG9uZW50cy9PdGhlcnMvZm9ybXMvaW5wdXQnO1xyXG5jb25zdCBGb3Jnb3RQYXNzd29yZE1vZGFsOlJlYWN0LkZDPHtzZXRDdXJyZW50Rm9ybToodmFsdWU6J3NpZ25VcCd8J2ZvcmdvdFBhc3MnfCdzaWduSW4nKT0+dm9pZH0+PSh7c2V0Q3VycmVudEZvcm19KT0+IHtcclxuICBjb25zdCB0b2dnbGVTaWduSW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50Rm9ybSgnc2lnbkluJylcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAzMCB9fT5cclxuICAgICAgICA8SGVhZGluZz5cclxuICAgICAgICAgIEZvcmdvdCBQYXNzd29yZFxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuXHJcbiAgICAgICAgPFN1YkhlYWRpbmc+XHJcbiAgICAgICAgICBXZSdsbCBzZW5kIHlvdSBhIGxpbmsgdG8gcmVzZXQgeW91ciBwYXNzd29yZFxyXG4gICAgICAgIDwvU3ViSGVhZGluZz5cclxuXHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzIG9yIENvbnRhY3QgTm8uXCJcclxuICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVzZXQgUGFzc3dvcmRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8T2ZmZXIgc3R5bGU9e3sgcGFkZGluZzogJzIwcHggMCAwJyB9fT5cclxuICAgICAgICAgIEJhY2sgdG97JyAnfVxyXG4gICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17dG9nZ2xlU2lnbkluRm9ybX0+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XHJcbiAgICAgICAgPC9PZmZlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZE1vZGFsXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWduSW5Gb3JtIGZyb20gJy4vbG9naW4nO1xyXG5pbXBvcnQgU2lnblVwIGZyb20gJy4vcmVnaXN0ZXInO1xyXG5pbXBvcnQgRm9yZ290UGFzc0Zvcm0gZnJvbSAnLi9mb3Jnb3QtcGFzc3dvcmQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHtjbG9zZU1vZGFsfSBmcm9tIFwiQHJlZHEvcmV1c2UtbW9kYWxcIjtcclxuY29uc3QgQXV0aGVudGljYXRpb25Gb3JtPSh7cm91dGVyfSk9PiB7XHJcbiAgY29uc3Qge2lzQXV0aGVudGljYXRlZH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICBjb25zdCBbY3VycmVudEZvcm0sc2V0Q3VycmVudEZvcm1dPXVzZVN0YXRlPCdzaWduVXAnfCdmb3Jnb3RQYXNzJ3wnc2lnbkluJz4oJ3NpZ25VcCcpXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZihpc0F1dGhlbnRpY2F0ZWQpe1xyXG4gICAgICBpZihyb3V0ZXIucGF0aG5hbWU9PT0nL2xvZ2luJyl7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIGNsb3NlTW9kYWwoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxbaXNBdXRoZW50aWNhdGVkXSlcclxuICBpZiAoY3VycmVudEZvcm0gPT09ICdzaWduSW4nKSB7XHJcbiAgICByZXR1cm4gPFNpZ25JbkZvcm0gIHNldEN1cnJlbnRGb3JtPXtzZXRDdXJyZW50Rm9ybX0vPlxyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRGb3JtID09PSAnc2lnblVwJykge1xyXG4gICAgcmV0dXJuIDxTaWduVXAgc2V0Q3VycmVudEZvcm09e3NldEN1cnJlbnRGb3JtfS8+XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudEZvcm0gPT09ICAnZm9yZ290UGFzcycpIHtcclxuICAgIHJldHVybiA8Rm9yZ290UGFzc0Zvcm0gIHNldEN1cnJlbnRGb3JtPXtzZXRDdXJyZW50Rm9ybX0vPlxyXG4gIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBdXRoZW50aWNhdGlvbkZvcm0pXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgTGlua0J1dHRvbixcclxuICBCdXR0b24sXHJcbiAgSWNvbldyYXBwZXIsXHJcbiAgV3JhcHBlcixcclxuICBDb250YWluZXIsXHJcbiAgTG9nb1dyYXBwZXIsXHJcbiAgSGVhZGluZyxcclxuICBTdWJIZWFkaW5nLFxyXG4gIE9mZmVyU2VjdGlvbixcclxuICBPZmZlcixcclxuICAvLyBJbnB1dCxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gJy4vYXV0aGVudGljYXRpb24tZm9ybS5zdHlsZSc7XHJcbmltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnYXNzZXRzL2ljb25zL0ZhY2Vib29rJztcclxuaW1wb3J0IHsgR29vZ2xlIH0gZnJvbSAnYXNzZXRzL2ljb25zL0dvb2dsZSc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gJ0ByZWRxL3JldXNlLW1vZGFsJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdjb21wb25lbnRzL090aGVycy9mb3Jtcy9pbnB1dCc7XHJcbmltcG9ydCB7dXNlTG9naW5Gb3JtfSBmcm9tIFwiQC9ob29rcy91c2VMb2dpbkZvcm1cIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7bG9hZFVzZXIsIGxvZ2lufSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSBcIkAvdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCB7QVVUSH0gZnJvbSBcIkAvcmVkdXgvZGVmaW5lc1wiO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSBcImxpZ2h0LXRvYXN0XCI7XHJcbmltcG9ydCB7SlNPTkNvbmZpZ30gZnJvbSBcIkAvYXhpb3NIZWFkZXJzXCI7XHJcblxyXG5jb25zdCBTaWduSW5Nb2RhbDpSZWFjdC5GQzx7c2V0Q3VycmVudEZvcm06KHZhbHVlOidzaWduVXAnfCdmb3Jnb3RQYXNzJ3wnc2lnbkluJyk9PnZvaWR9Pj0oe3NldEN1cnJlbnRGb3JtfSk9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHRvZ2dsZVNpZ25VcEZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Rm9ybSgnc2lnblVwJylcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVGb3Jnb3RQYXNzRm9ybSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRGb3JtKCdmb3Jnb3RQYXNzJylcclxuICB9O1xyXG4gIGNvbnN0IHtpbnB1dHMsIGhhbmRsZUlucHV0Q2hhbmdlfSA9IHVzZUxvZ2luRm9ybSgpO1xyXG5cclxuXHJcbiAgY29uc3QgbG9naW5DYWxsYmFjayA9YXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXBpL3YxL2F1dGgvbG9naW5gLFxyXG4gICAgICAgICAge2VtYWlsOmlucHV0cy5lbWFpbCwgcGFzc3dvcmQ6aW5wdXRzLnBhc3N3b3JkfSxcclxuICAgICAgICAgIEpTT05Db25maWdcclxuICAgICAgKVxyXG4gICAgICBkaXNwYXRjaChsb2dpbihkYXRhKSlcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIEpTT04uc3RyaW5naWZ5KGRhdGEudG9rZW4pKVxyXG4gICAgICBhd2FpdCBkaXNwYXRjaChsb2FkVXNlcigpKVxyXG4gICAgICBUb2FzdC5zdWNjZXNzKCdTdWNjZXNzZnVsbHkgbG9nZ2VkIGluJylcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBUb2FzdC5mYWlsKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IgKycsIFBsZWFzZSB0cnkgYWdhaW4nKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8SGVhZGluZz5cclxuICAgICAgICAgICAgV2VsY29tZSBCYWNrXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgICAgPFN1YkhlYWRpbmc+XHJcbiAgICAgICAgICAgIExvZ2luIHdpdGggeW91ciBlbWFpbCAmYW1wOyBwYXNzd29yZFxyXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2xvZ2luQ2FsbGJhY2t9PlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9e1wiZW1haWxcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5lbWFpbH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCAobWluIDYgY2hhcmFjdGVycylcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT17XCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb250aW51ZSAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxEaXZpZGVyPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIG9yXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0RpdmlkZXI+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNjdiMicsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17bG9naW5DYWxsYmFja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxGYWNlYm9vayAvPlxyXG4gICAgICAgICAgICA8L0ljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICBDb250aW51ZSB3aXRoIEZhY2Vib29rXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnIzQyODVmNCcgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpbkNhbGxiYWNrfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPEdvb2dsZSAvPlxyXG4gICAgICAgICAgICA8L0ljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICBDb250aW51ZSB3aXRoIEdvb2dsZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPE9mZmVyIHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAnIH19PlxyXG4gICAgICAgICAgICBEb24ndCBoYXZlIGFueSBhY2NvdW50P3snICd9XHJcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZ25VcEZvcm19PlxyXG4gICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxyXG4gICAgICAgICAgPC9PZmZlcj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPE9mZmVyU2VjdGlvbj5cclxuICAgICAgICAgIDxPZmZlcj5cclxuICAgICAgICAgICAgRm9yZ290IHlvdXIgcGFzc3dvcmQ/XHJcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUZvcmdvdFBhc3NGb3JtfT5cclxuICAgICAgICAgICAgICBSZXNldCBJdFxyXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XHJcbiAgICAgICAgICA8L09mZmVyPlxyXG4gICAgICAgIDwvT2ZmZXJTZWN0aW9uPlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Nb2RhbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdjb21wb25lbnRzL090aGVycy9mb3Jtcy9pbnB1dCc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEljb25XcmFwcGVyLFxyXG4gIFdyYXBwZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIExvZ29XcmFwcGVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgU3ViSGVhZGluZyxcclxuICBIZWxwZXJUZXh0LFxyXG4gIE9mZmVyLFxyXG4gIC8vIElucHV0LFxyXG4gIERpdmlkZXIsXHJcbiAgTGlua0J1dHRvbixcclxufSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLWZvcm0uc3R5bGUnO1xyXG5pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gJ2Fzc2V0cy9pY29ucy9GYWNlYm9vayc7XHJcbmltcG9ydCB7IEdvb2dsZSB9IGZyb20gJ2Fzc2V0cy9pY29ucy9Hb29nbGUnO1xyXG5pbXBvcnQge3VzZUxvZ2luRm9ybX0gZnJvbSBcIkAvaG9va3MvdXNlTG9naW5Gb3JtXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2xvYWRVc2VyLCByZWdpc3Rlcn0gZnJvbSBcIkAvcmVkdXgvYWN0aW9ucy9nbG9iYWxBY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xyXG5pbXBvcnQge0FVVEh9IGZyb20gXCJAL3JlZHV4L2RlZmluZXNcIjtcclxuaW1wb3J0IHtKU09OQ29uZmlnfSBmcm9tIFwiQC9heGlvc0hlYWRlcnNcIjtcclxuaW1wb3J0IFRvYXN0IGZyb20gXCJsaWdodC10b2FzdFwiO1xyXG5jb25zdCBTaWdudXBNb2RhbDpSZWFjdC5GQzx7c2V0Q3VycmVudEZvcm06KHZhbHVlOidzaWduVXAnfCdmb3Jnb3RQYXNzJ3wnc2lnbkluJyk9PnZvaWR9Pj0oe3NldEN1cnJlbnRGb3JtfSk9PiB7XHJcbiAgY29uc3QgdG9nZ2xlU2lnbkluRm9ybSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRGb3JtKCdzaWduSW4nKVxyXG4gIH07XHJcbiAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHtpbnB1dHMsIGhhbmRsZUlucHV0Q2hhbmdlfSA9IHVzZUxvZ2luRm9ybSgpO1xyXG4gIGNvbnN0IG9uU3VibWl0PWFzeW5jIChlKT0+e1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FwaS92MS9hdXRoL3JlZ2lzdGVyYCxcclxuICAgICAgICAgIHtmaXJzdE5hbWU6aW5wdXRzLmZpcnN0TmFtZSxsYXN0TmFtZTppbnB1dHMubGFzdE5hbWUsIGVtYWlsOmlucHV0cy5lbWFpbCwgcGFzc3dvcmQ6aW5wdXRzLnBhc3N3b3JkLCByb2xlOid1c2VyJ30sXHJcbiAgICAgICAgICBKU09OQ29uZmlnXHJcbiAgICAgIClcclxuICAgICAgZGlzcGF0Y2gocmVnaXN0ZXIoZGF0YSkpXHJcbiAgICAgIGF3YWl0IGxvYWRVc2VyKClcclxuICAgICAgVG9hc3Quc3VjY2VzcygnU3VjY2Vzc2Z1bGx5IHNpZ25lZCB1cCcpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeShkYXRhLnRva2VuKSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBUb2FzdC5mYWlsKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkaW5nPlxyXG4gICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8U3ViSGVhZGluZz5cclxuICAgICAgICAgIEV2ZXJ5IGZpbGwgaXMgcmVxdWlyZWQgaW4gc2lnbiB1cFxyXG4gICAgICAgIDwvU3ViSGVhZGluZz5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0gJ0ZpcnN0IG5hbWUnXHJcbiAgICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgICBtYj0nMTBweCdcclxuICAgICAgICAgICAgbmFtZT0nZmlyc3ROYW1lJ1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMuZmlyc3ROYW1lfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0gJ0xhc3QgbmFtZSdcclxuICAgICAgICAgICAgICBoZWlnaHQ9JzQ4cHgnXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgICAgICAgIG5hbWU9J2xhc3ROYW1lJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5sYXN0TmFtZX1cclxuXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwgQWRkcmVzcydcclxuICAgICAgICAgIGhlaWdodD0nNDhweCdcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nI0Y3RjdGNydcclxuICAgICAgICAgIG1iPScxMHB4J1xyXG4gICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcblxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSAnUGFzc3dvcmQgKG1pbiA2IGNoYXJhY3RlcnMpJ1xyXG4gICAgICAgICAgaGVpZ2h0PSc0OHB4J1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPScjRjdGN0Y3J1xyXG4gICAgICAgICAgbWI9JzEwcHgnXHJcbiAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SGVscGVyVGV4dCBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCAwIDMwcHgnIH19PlxyXG4gICAgICAgICAgQnkgc2lnbmluZyB1cCwgeW91IGFncmVlIHRvXHJcbiAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICBUZXJtcyAmYW1wOyBDb25kaXRpb25cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvSGVscGVyVGV4dD5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHNpemU9J2JpZycgd2lkdGg9JzEwMCUnIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICBDb250aW51ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8RGl2aWRlcj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBvclxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRGl2aWRlcj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5J1xyXG4gICAgICAgICAgc2l6ZT0nYmlnJ1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyNjdiMicsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgPEZhY2Vib29rIC8+XHJcbiAgICAgICAgICA8L0ljb25XcmFwcGVyPlxyXG4gICAgICAgICAgQ29udGludWUgd2l0aCBGYWNlYm9va1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknXHJcbiAgICAgICAgICBzaXplPSdiaWcnXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI4NWY0JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgPEdvb2dsZSAvPlxyXG4gICAgICAgICAgPC9JY29uV3JhcHBlcj5cclxuICAgICAgICAgIENvbnRpbnVlIHdpdGggR29vZ2xlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPE9mZmVyIHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAnIH19PlxyXG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/eycgJ31cclxuICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZ25JbkZvcm19PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxyXG4gICAgICAgIDwvT2ZmZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwTW9kYWxcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi9jYXJ0JztcclxuaW1wb3J0IENhcnRQb3B1cEJ1dHRvbiwge1xyXG4gIEJveGVkQ2FydEJ1dHRvbixcclxufSBmcm9tICdAL2NvbXBvbmVudHMvY2FydC9wb3B1cC9jYXJ0LXBvcHVwLWJ1dHRvbic7XHJcbmltcG9ydCB7IENhcnRTbGlkZVBvcHVwIH0gZnJvbSAnLi9jYXJ0LnN0eWxlJztcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Y2FsY3VsYXRlVG90YWxQcmljZX0gZnJvbSBcIi4uLy4uL3V0aWxzL2NhcnRVdGlsc1wiO1xyXG5pbXBvcnQge09wZW5DYXJ0TW9kYWx9IGZyb20gXCJAL09wZW5Nb2RhbEZ1bmN0aW9uc1wiO1xyXG5jb25zdCBDYXJ0UG9wdXBTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5jYXJ0UG9wdXAge1xyXG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBib3R0b206IDUwcHggIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggIzIzZmYwMDs7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XHJcblxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG50eXBlIENhcnRQcm9wcyA9IHtcclxuICBkZXZpY2VUeXBlOiB7XHJcbiAgICBtb2JpbGU6IGJvb2xlYW47XHJcbiAgICB0YWJsZXQ6IGJvb2xlYW47XHJcbiAgICBkZXNrdG9wOiBib29sZWFuO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBDYXJ0UG9wVXA6IFJlYWN0LkZDPENhcnRQcm9wcz4gPSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXZpY2VUeXBlOiB7IG1vYmlsZSwgdGFibGV0LCBkZXNrdG9wIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgY29uc3QgW2lzT3BlbixzZXRJc09wZW5dPXVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgY29uc3Qge2N1cnJlbmN5OntzeW1ib2x9fSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBPcGVuQ2FydE1vZGFsKClcclxuICB9O1xyXG5cclxuICBsZXQgY2FydFNsaWRlckNsYXNzID0gaXNPcGVuID8gJ2NhcnRQb3B1cEZpeGVkJyA6ICcnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHttb2JpbGUgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPENhcnRQb3B1cFN0eWxlIC8+XHJcbiAgICAgICAgICAgICAgPENhcnRQb3B1cEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtY2FydCdcclxuICAgICAgICAgICAgICAgICAgaXRlbUNvdW50PXtjYXJ0U3RhdGUubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICBpdGVtUG9zdGZpeD17XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFN0YXRlLmxlbmd0aCA+IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlUHJlZml4PXtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vZGFsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPENhcnRTbGlkZVBvcHVwIGNsYXNzTmFtZT17Y2FydFNsaWRlckNsYXNzfT5cclxuICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJ0IG9uQ2xvc2VCdG5DbGljaz17KCk9PntzZXRJc09wZW4oZmFsc2UpfX0gc2Nyb2xsYmFySGVpZ2h0PScxMDB2aCcgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9DYXJ0U2xpZGVQb3B1cD5cclxuXHJcbiAgICAgICAgICAgICAgPEJveGVkQ2FydEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtY2FydCdcclxuICAgICAgICAgICAgICAgICAgaXRlbUNvdW50PXtjYXJ0U3RhdGUubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICBpdGVtUG9zdGZpeD17XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFN0YXRlLmxlbmd0aCA+IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpdGVtcycgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHByaWNlUHJlZml4PXtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57c2V0SXNPcGVuKHRydWUpfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFBvcFVwO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7XHJcbiAgQ2FydFBvcHVwQm9keSxcclxuICBQb3B1cEhlYWRlcixcclxuICBQb3B1cEl0ZW1Db3VudCxcclxuICBDbG9zZUJ1dHRvbixcclxuICBQcm9tb0NvZGUsXHJcbiAgQ2hlY2tvdXRCdXR0b25XcmFwcGVyLFxyXG4gIENoZWNrb3V0QnV0dG9uLFxyXG4gIFRpdGxlLFxyXG4gIFByaWNlQm94LFxyXG4gIE5vUHJvZHVjdEltZyxcclxuICBJdGVtV3JhcHBlcixcclxuICBDb3Vwb25Cb3hXcmFwcGVyLFxyXG4gIENvdXBvbkNvZGUsIE5vUHJvZHVjdE1zZyxcclxufSBmcm9tICcuL2NhcnQuc3R5bGUnO1xyXG5pbXBvcnQgeyBDbG9zZUljb24gfSBmcm9tICdhc3NldHMvaWNvbnMvQ2xvc2VJY29uJztcclxuaW1wb3J0IHsgU2hvcHBpbmdCYWdMYXJnZSB9IGZyb20gJ2Fzc2V0cy9pY29ucy9TaG9wcGluZ0JhZ0xhcmdlJztcclxuaW1wb3J0IHsgTm9DYXJ0QmFnIH0gZnJvbSAnYXNzZXRzL2ljb25zL05vQ2FydEJhZyc7XHJcbmltcG9ydCB7Y2FsY3VsYXRlVG90YWxQcmljZX0gZnJvbSBcIi4uLy4uL3V0aWxzL2NhcnRVdGlsc1wiO1xyXG5pbXBvcnQgeyBDYXJ0SXRlbSB9IGZyb20gJ0AvY29tcG9uZW50cy9jYXJ0L2l0ZW0vY2FydC1pdGVtJztcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7ZGVjcmVhc2VRdWFudGl0eUNhcnQsaW5jcmVhc2VRdWFudGl0eUNhcnQscmVtb3ZlRnJvbUNhcnQscmVtb3ZlQWxsRnJvbUNhcnR9IGZyb20gXCJAL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG50eXBlIENhcnRQcm9wc1R5cGUgPSB7XHJcbiAgc3R5bGU/OiBhbnk7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHNjcm9sbGJhckhlaWdodD86IHN0cmluZztcclxuICBpc09wZW4/OmJvb2xlYW47XHJcbiAgb25DbG9zZUJ0bkNsaWNrPzogKGU6IGFueSkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IENhcnQ6IFJlYWN0LkZDPENhcnRQcm9wc1R5cGU+ID0gKHtcclxuICBzdHlsZSxcclxuICBjbGFzc05hbWUsXHJcbiAgb25DbG9zZUJ0bkNsaWNrLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0UG9wdXBCb2R5IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICA8UG9wdXBIZWFkZXI+XHJcbiAgICAgICAgPFBvcHVwSXRlbUNvdW50PlxyXG4gICAgICAgICAgPFNob3BwaW5nQmFnTGFyZ2Ugd2lkdGg9JzE5cHgnIGhlaWdodD0nMjRweCcgLz5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7MX1cclxuICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIGl0ZW1zXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9Qb3B1cEl0ZW1Db3VudD5cclxuXHJcbiAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2VCdG5DbGlja30+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgPC9DbG9zZUJ1dHRvbj5cclxuICAgICAgPC9Qb3B1cEhlYWRlcj5cclxuXHJcbiAgICAgICAgPEl0ZW1XcmFwcGVyIGNsYXNzTmFtZT0naXRlbXMtd3JhcHBlcic+XHJcbiAgICAgICAgICB7Y2FydFN0YXRlLmxlbmd0aD4wID8gKFxyXG4gICAgICAgICAgICBjYXJ0U3RhdGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPENhcnRJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjYXJ0SXRlbS0ke2l0ZW0uaWR9YH1cclxuICAgICAgICAgICAgICAgIG9uSW5jcmVtZW50PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGluY3JlYXNlUXVhbnRpdHlDYXJ0KGl0ZW0uY2FydElkKSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkRlY3JlbWVudD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChkZWNyZWFzZVF1YW50aXR5Q2FydChpdGVtLmNhcnRJZCkpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25SZW1vdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVtb3ZlRnJvbUNhcnQoaXRlbS5jYXJ0SWQpKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPE5vUHJvZHVjdEltZz5cclxuICAgICAgICAgICAgICAgIDxOb0NhcnRCYWcgLz5cclxuICAgICAgICAgICAgICA8L05vUHJvZHVjdEltZz5cclxuICAgICAgICAgICAgICA8Tm9Qcm9kdWN0TXNnPlxyXG4gICAgICAgICAgICAgICAgTm8gcHJvZHVjdHMgZm91bmRcclxuICAgICAgICAgICAgICA8L05vUHJvZHVjdE1zZz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvSXRlbVdyYXBwZXI+XHJcblxyXG4gICAgICA8Q2hlY2tvdXRCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgIDxQcm9tb0NvZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChyZW1vdmVBbGxGcm9tQ2FydCgpKX0+XHJcbiAgICAgICAgICAgICAgICAgIFJlbW92ZSBBbGxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUHJvbW9Db2RlPlxyXG5cclxuICAgICAgICB7dHJ1ZSA/IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jaGVja291dCc+XHJcbiAgICAgICAgICAgIDxDaGVja291dEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlQnRuQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIENoZWNrb3V0XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPFByaWNlQm94PlxyXG4gICAgICAgICAgICAgICAgICB7Lyp7Q1VSUkVOQ1l9Ki99XHJcbiAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSl9XHJcbiAgICAgICAgICAgICAgICA8L1ByaWNlQm94PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICA8L0NoZWNrb3V0QnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Q2hlY2tvdXRCdXR0b24+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgQ2hlY2tvdXRcclxuICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgIDxQcmljZUJveD5cclxuICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSl9XHJcbiAgICAgICAgICAgICAgPC9QcmljZUJveD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L0NoZWNrb3V0QnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ2hlY2tvdXRCdXR0b25XcmFwcGVyPlxyXG4gICAgPC9DYXJ0UG9wdXBCb2R5PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuY29uc3QgdXNlTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlPGFueT4oe30pO1xyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xyXG4gICAgICAgIHNldElucHV0cygoaW5wdXRzOiBhbnkpID0+ICh7Li4uaW5wdXRzLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlLFxyXG4gICAgICAgIGlucHV0c1xyXG4gICAgfTtcclxufVxyXG5leHBvcnQge3VzZUxvZ2luRm9ybX0iXSwic291cmNlUm9vdCI6IiJ9