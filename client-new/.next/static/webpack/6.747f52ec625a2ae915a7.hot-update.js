webpackHotUpdate_N_E(6,{

/***/ "./src/components/multi-carousel/multi-carousel.tsx":
/*!**********************************************************!*\
  !*** ./src/components/multi-carousel/multi-carousel.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Users_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-system/theme-get */ \"./node_modules/@styled-system/theme-get/dist/index.esm.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ \"./node_modules/react-multi-carousel/lib/styles.css\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/hari/WebstormProjects/ecommerce-MERN/client-new/src/components/multi-carousel/multi-carousel.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_Users_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  border: 2px solid #8fdb87;\\n  border-radius: \", \";\\n  margin-right: 20px;\\n  padding: 0;\\n  outline: none;\\n  width: 70px;\\n  height: auto;\\n  overflow: hidden;\\n\\n  &:last-child {\\n    margin-right: 0;\\n  }\\n\\n  &.custom-dot--active {\\n    border: 2px solid #009E7F;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar SingleItem = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].li(_templateObject(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5__[\"themeGet\"])('radii.base', '6px'));\n_c = SingleItem;\nvar responsive = {\n  desktop: {\n    breakpoint: {\n      max: 3000,\n      min: 1024\n    },\n    items: 1\n  },\n  mobile: {\n    breakpoint: {\n      max: 464,\n      min: 0\n    },\n    items: 1\n  },\n  tablet: {\n    breakpoint: {\n      max: 1024,\n      min: 200\n    },\n    items: 1\n  }\n};\n\nvar CarouselWithCustomDots = function CarouselWithCustomDots(_ref) {\n  var _ref$items = _ref.items,\n      items = _ref$items === void 0 ? [] : _ref$items,\n      _ref$deviceType = _ref.deviceType,\n      mobile = _ref$deviceType.mobile,\n      tablet = _ref$deviceType.tablet,\n      desktop = _ref$deviceType.desktop,\n      title = _ref.title,\n      rest = Object(_Users_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"items\", \"deviceType\", \"title\"]);\n\n  var children = items.slice(0, 6).map(function (item, index) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n      src: item,\n      alt: title,\n      style: {\n        minWidth: 'auto',\n        height: 'auto',\n        position: 'relative',\n        margin: 'auto'\n      },\n      className: \"product-image\"\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }, _this);\n  });\n  var images = items.map(function (item, index) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n      src: item.url,\n      alt: title,\n      style: {\n        width: '100%',\n        height: '100%',\n        position: 'relative'\n      }\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }, _this);\n  });\n\n  var CustomDot = function CustomDot(_ref2) {\n    var index = _ref2.index,\n        _onClick = _ref2.onClick,\n        active = _ref2.active,\n        _ref2$carouselState = _ref2.carouselState,\n        currentSlide = _ref2$carouselState.currentSlide,\n        deviceType = _ref2$carouselState.deviceType;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SingleItem, {\n      \"data-index\": index,\n      onClick: function onClick() {\n        return _onClick();\n      },\n      className: \"custom-dot \".concat(active && 'custom-dot--active'),\n      children: react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.toArray(images)[index]\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var deviceType = 'desktop';\n\n  if (mobile) {\n    deviceType = 'mobile';\n  }\n\n  if (tablet) {\n    deviceType = 'tablet';\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, _objectSpread(_objectSpread({\n    showDots: true,\n    ssr: true,\n    infinite: true,\n    slidesToSlide: 1,\n    containerClass: \"carousel-with-custom-dots\",\n    responsive: responsive,\n    deviceType: deviceType,\n    autoPlay: false,\n    arrows: false,\n    customDot: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CustomDot, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 18\n    }, _this)\n  }, rest), {}, {\n    children: children\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 103,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = CarouselWithCustomDots;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselWithCustomDots);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SingleItem\");\n$RefreshReg$(_c2, \"CarouselWithCustomDots\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbXVsdGktY2Fyb3VzZWwvbXVsdGktY2Fyb3VzZWwudHN4P2JkNTgiXSwibmFtZXMiOlsiU2luZ2xlSXRlbSIsInN0eWxlZCIsImxpIiwidGhlbWVHZXQiLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsIm1vYmlsZSIsInRhYmxldCIsIkNhcm91c2VsV2l0aEN1c3RvbURvdHMiLCJkZXZpY2VUeXBlIiwidGl0bGUiLCJyZXN0IiwiY2hpbGRyZW4iLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm1pbldpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJtYXJnaW4iLCJpbWFnZXMiLCJ1cmwiLCJ3aWR0aCIsIkN1c3RvbURvdCIsIm9uQ2xpY2siLCJhY3RpdmUiLCJjYXJvdXNlbFN0YXRlIiwiY3VycmVudFNsaWRlIiwiUmVhY3QiLCJDaGlsZHJlbiIsInRvQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEVBQVYsb0JBRUdDLHlFQUFRLENBQUMsWUFBRCxFQUFlLEtBQWYsQ0FGWCxDQUFoQjtLQUFNSCxVO0FBa0JOLElBQU1JLFVBQVUsR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRTtBQUNWQyxTQUFHLEVBQUUsSUFESztBQUVWQyxTQUFHLEVBQUU7QUFGSyxLQURMO0FBS1BDLFNBQUssRUFBRTtBQUxBLEdBRFE7QUFRakJDLFFBQU0sRUFBRTtBQUNOSixjQUFVLEVBQUU7QUFDVkMsU0FBRyxFQUFFLEdBREs7QUFFVkMsU0FBRyxFQUFFO0FBRkssS0FETjtBQUtOQyxTQUFLLEVBQUU7QUFMRCxHQVJTO0FBZWpCRSxRQUFNLEVBQUU7QUFDTkwsY0FBVSxFQUFFO0FB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O01BQU1KLHNCO0FBd0VTQSxxRkFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL211bHRpLWNhcm91c2VsL211bHRpLWNhcm91c2VsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgJ3JlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzJztcblxuY29uc3QgU2luZ2xlSXRlbSA9IHN0eWxlZC5saWBcbiAgYm9yZGVyOiAycHggc29saWQgIzhmZGI4NztcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZUdldCgncmFkaWkuYmFzZScsICc2cHgnKX07XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gICYuY3VzdG9tLWRvdC0tYWN0aXZlIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA5RTdGO1xuICB9XG5gO1xuY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgZGVza3RvcDoge1xuICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgIG1heDogMzAwMCxcbiAgICAgIG1pbjogMTAyNCxcbiAgICB9LFxuICAgIGl0ZW1zOiAxLFxuICB9LFxuICBtb2JpbGU6IHtcbiAgICBicmVha3BvaW50OiB7XG4gICAgICBtYXg6IDQ2NCxcbiAgICAgIG1pbjogMCxcbiAgICB9LFxuICAgIGl0ZW1zOiAxLFxuICB9LFxuICB0YWJsZXQ6IHtcbiAgICBicmVha3BvaW50OiB7XG4gICAgICBtYXg6IDEwMjQsXG4gICAgICBtaW46IDIwMCxcbiAgICB9LFxuICAgIGl0ZW1zOiAxLFxuICB9LFxufTtcblxuY29uc3QgQ2Fyb3VzZWxXaXRoQ3VzdG9tRG90cyA9ICh7XG4gIGl0ZW1zID0gW10sXG4gIGRldmljZVR5cGU6IHsgbW9iaWxlLCB0YWJsZXQsIGRlc2t0b3AgfSxcbiAgdGl0bGUsXG4gIC4uLnJlc3Rcbn06IGFueSkgPT4ge1xuXG4gIGNvbnN0IGNoaWxkcmVuID0gaXRlbXMuc2xpY2UoMCwgNikubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICA8aW1nXG4gICAgICBzcmM9e2l0ZW19XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgYWx0PXt0aXRsZX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1pbldpZHRoOiAnYXV0bycsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWltYWdlJ1xuICAgIC8+XG4gICkpO1xuICBjb25zdCBpbWFnZXMgPSBpdGVtcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgIDxpbWdcbiAgICAgIHNyYz17aXRlbS51cmx9XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgYWx0PXt0aXRsZX1cbiAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxuICAgIC8+XG4gICkpO1xuICBjb25zdCBDdXN0b21Eb3QgPSAoe1xuICAgIGluZGV4LFxuICAgIG9uQ2xpY2ssXG4gICAgYWN0aXZlLFxuICAgIGNhcm91c2VsU3RhdGU6IHsgY3VycmVudFNsaWRlLCBkZXZpY2VUeXBlIH0sXG4gIH06IGFueSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8U2luZ2xlSXRlbVxuICAgICAgICBkYXRhLWluZGV4PXtpbmRleH1cbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaygpfVxuICAgICAgICBjbGFzc05hbWU9e2BjdXN0b20tZG90ICR7YWN0aXZlICYmICdjdXN0b20tZG90LS1hY3RpdmUnfWB9XG4gICAgICA+XG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi50b0FycmF5KGltYWdlcylbaW5kZXhdfVxuICAgICAgPC9TaW5nbGVJdGVtPlxuICAgICk7XG4gIH07XG4gIGxldCBkZXZpY2VUeXBlID0gJ2Rlc2t0b3AnO1xuICBpZiAobW9iaWxlKSB7XG4gICAgZGV2aWNlVHlwZSA9ICdtb2JpbGUnO1xuICB9XG4gIGlmICh0YWJsZXQpIHtcbiAgICBkZXZpY2VUeXBlID0gJ3RhYmxldCc7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q2Fyb3VzZWxcbiAgICAgIHNob3dEb3RzXG4gICAgICBzc3JcbiAgICAgIGluZmluaXRlPXt0cnVlfVxuICAgICAgc2xpZGVzVG9TbGlkZT17MX1cbiAgICAgIGNvbnRhaW5lckNsYXNzPSdjYXJvdXNlbC13aXRoLWN1c3RvbS1kb3RzJ1xuICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgIGRldmljZVR5cGU9e2RldmljZVR5cGV9XG4gICAgICBhdXRvUGxheT17ZmFsc2V9XG4gICAgICBhcnJvd3M9e2ZhbHNlfVxuICAgICAgY3VzdG9tRG90PXs8Q3VzdG9tRG90IC8+fVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2Fyb3VzZWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFdpdGhDdXN0b21Eb3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/multi-carousel/multi-carousel.tsx\n");

/***/ })

})