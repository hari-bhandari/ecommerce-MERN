webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/tree-menu/tree-menu.tsx":
/*!************************************************!*\
  !*** ./src/components/tree-menu/tree-menu.tsx ***!
  \************************************************/
/*! exports provided: TreeMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TreeMenu\", function() { return TreeMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/hooks */ \"./src/assets/hooks.tsx\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var _tree_menu_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-menu.style */ \"./src/components/tree-menu/tree-menu.style.tsx\");\n/* harmony import */ var components_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/button/button */ \"./src/components/button/button.tsx\");\n/* harmony import */ var assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/icons/ArrowNext */ \"./src/assets/icons/ArrowNext.tsx\");\n/* harmony import */ var _header_menu_left_menu_LeftMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/header/menu/left-menu/LeftMenu */ \"./src/header/menu/left-menu/LeftMenu.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/home/hari/WebstormProjects/ecommerce-MERN/client-new/src/components/tree-menu/tree-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Tree = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(_c = _s(function (_ref) {\n  _s();\n\n  var children = _ref.children,\n      name = _ref.name,\n      icon = _ref.icon,\n      onClick = _ref.onClick,\n      dropdown = _ref.dropdown,\n      depth = _ref.depth,\n      _ref$defaultOpen = _ref.defaultOpen,\n      defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(defaultOpen),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setOpen(defaultOpen);\n  }, [defaultOpen]);\n  var previous = Object(_assets_hooks__WEBPACK_IMPORTED_MODULE_4__[\"usePrevious\"])(isOpen);\n\n  var _useMeasure = Object(_assets_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMeasure\"])(),\n      _useMeasure2 = Object(_home_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMeasure, 2),\n      bind = _useMeasure2[0],\n      viewHeight = _useMeasure2[1].height;\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    from: {\n      height: 0,\n      opacity: 0,\n      transform: 'translate3d(20px,0,0)'\n    },\n    to: {\n      height: isOpen ? viewHeight : 0,\n      opacity: isOpen ? 1 : 0,\n      transform: \"translate3d(\".concat(isOpen ? 0 : 20, \"px,0,0)\")\n    }\n  }),\n      height = _useSpring.height,\n      opacity = _useSpring.opacity,\n      transform = _useSpring.transform; // const Icon = icon ? Icons[icon] : depth === 'child' ? Icons['Minus'] : null;\n  // @ts-ignore\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_6__[\"Frame\"], {\n    depth: depth,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_6__[\"Header\"], {\n      open: isOpen,\n      depth: depth,\n      className: depth,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_6__[\"IconWrapper\"], {\n        depth: depth,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_header_menu_left_menu_LeftMenu__WEBPACK_IMPORTED_MODULE_9__[\"CategoryIcon\"], {\n          link: icon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 25\n        }, _this), \";\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_6__[\"Title\"], {\n        onClick: onClick,\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 21\n      }, _this), dropdown === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_button_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n        onClick: function onClick() {\n          return setOpen(!isOpen);\n        },\n        variant: \"text\",\n        className: \"toggleButton\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_8__[\"ArrowNext\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 29\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 25\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_6__[\"Content\"], {\n      style: {\n        opacity: opacity,\n        height: isOpen && previous === isOpen ? 'auto' : height\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].div, _objectSpread(_objectSpread({\n        style: {\n          transform: transform\n        }\n      }, bind), {}, {\n        children: children\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 21\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 13\n  }, _this);\n}, \"ELTP6lCwoexA1kmfaNvwd+LbElU=\", false, function () {\n  return [_assets_hooks__WEBPACK_IMPORTED_MODULE_4__[\"usePrevious\"], _assets_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMeasure\"], react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"]];\n}));\n_c2 = Tree;\nvar TreeMenu = function TreeMenu(_ref2) {\n  var data = _ref2.data,\n      className = _ref2.className,\n      _onClick = _ref2.onClick,\n      active = _ref2.active;\n\n  var handler = function handler(children) {\n    var _children$data;\n\n    return (_children$data = children.data) === null || _children$data === void 0 ? void 0 : _children$data.map(function (subOption) {\n      console.log(subOption);\n\n      if (!subOption.subCategory) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Tree, {\n          name: subOption.name,\n          icon: subOption === null || subOption === void 0 ? void 0 : subOption.image,\n          depth: \"child\",\n          onClick: function onClick() {\n            return _onClick(subOption.id);\n          },\n          defaultOpen: active === subOption.id\n        }, subOption._id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, _this);\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Tree, {\n        name: subOption.name,\n        icon: subOption.image,\n        dropdown: !subOption.subCategory.length ? false : true,\n        depth: \"parent\",\n        onClick: function onClick() {\n          return _onClick(subOption.id);\n        },\n        defaultOpen: active === subOption.id || subOption.subCategory.some(function (item) {\n          return item.id === active;\n        }),\n        children: handler(subOption.subCategory)\n      }, subOption._id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 17\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: handler(data)\n  }, void 0, false);\n};\n_c3 = TreeMenu;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Tree$React.memo\");\n$RefreshReg$(_c2, \"Tree\");\n$RefreshReg$(_c3, \"TreeMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdHJlZS1tZW51L3RyZWUtbWVudS50c3g/ODc5OCJdLCJuYW1lcyI6WyJUcmVlIiwiUmVhY3QiLCJtZW1vIiwiY2hpbGRyZW4iLCJuYW1lIiwiaWNvbiIsIm9uQ2xpY2siLCJkcm9wZG93biIsImRlcHRoIiwiZGVmYXVsdE9wZW4iLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE9wZW4iLCJ1c2VFZmZlY3QiLCJwcmV2aW91cyIsInVzZVByZXZpb3VzIiwidXNlTWVhc3VyZSIsImJpbmQiLCJ2aWV3SGVpZ2h0IiwiaGVpZ2h0IiwidXNlU3ByaW5nIiwiZnJvbSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ0byIsIlRyZWVNZW51IiwiZGF0YSIsImNsYXNzTmFtZSIsImFjdGl2ZSIsImhhbmRsZXIiLCJtYXAiLCJzdWJPcHRpb24iLCJjb25zb2xlIiwibG9nIiwic3ViQ2F0ZWdvcnkiLCJpbWFnZSIsImlkIiwiX2lkIiwibGVuZ3RoIiwic29tZSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUEsSUFBTUEsSUFBSSxnQkFBR0MsNENBQUssQ0FBQ0MsSUFBTixTQUNULGdCQVNZO0FBQUE7O0FBQUEsTUFSUEMsUUFRTyxRQVJQQSxRQVFPO0FBQUEsTUFQUEMsSUFPTyxRQVBQQSxJQU9PO0FBQUEsTUFOUEMsSUFNTyxRQU5QQSxJQU1PO0FBQUEsTUFKUEMsT0FJTyxRQUpQQSxPQUlPO0FBQUEsTUFIUEMsUUFHTyxRQUhQQSxRQUdPO0FBQUEsTUFGUEMsS0FFTyxRQUZQQSxLQUVPO0FBQUEsOEJBRFBDLFdBQ087QUFBQSxNQURQQSxXQUNPLGlDQURPLEtBQ1A7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDRCxXQUFELENBRDFCO0FBQUEsTUFDREUsTUFEQztBQUFBLE1BQ09DLE9BRFA7O0FBRVJDLHlEQUFT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QVpaLFNBQ1NILFNBQVMsQ0FBQ00sR0FEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBZ0JILEtBOUJNLENBQVA7QUErQkgsR0FoQ0Q7O0FBaUNBLHNCQUFPO0FBQUEsY0FBR1IsT0FBTyxDQUFDSCxJQUFEO0FBQVYsbUJBQVA7QUFDSCxDQXhDTTtNQUFNRCxRIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdHJlZS1tZW51L3RyZWUtbWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVByZXZpb3VzLCB1c2VNZWFzdXJlfSBmcm9tICcuLi8uLi9hc3NldHMvaG9va3MnO1xuaW1wb3J0IHt1c2VTcHJpbmcsIGFuaW1hdGVkfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuaW1wb3J0IHtGcmFtZSwgVGl0bGUsIENvbnRlbnQsIEhlYWRlciwgSWNvbldyYXBwZXJ9IGZyb20gJy4vdHJlZS1tZW51LnN0eWxlJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdjb21wb25lbnRzL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IHtBcnJvd05leHR9IGZyb20gJ2Fzc2V0cy9pY29ucy9BcnJvd05leHQnO1xuXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICdhc3NldHMvaWNvbnMvY2F0ZWdvcnktaWNvbnMnO1xuaW1wb3J0IHtDYXRlZ29yeUljb259IGZyb20gXCJAL2hlYWRlci9tZW51L2xlZnQtbWVudS9MZWZ0TWVudVwiO1xuXG5jb25zdCBUcmVlID0gUmVhY3QubWVtbyhcbiAgICAoe1xuICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICBuYW1lLFxuICAgICAgICAgaWNvbixcbiAgICAgICAgIC8vIGlzT3BlbixcbiAgICAgICAgIG9uQ2xpY2ssXG4gICAgICAgICBkcm9wZG93bixcbiAgICAgICAgIGRlcHRoLFxuICAgICAgICAgZGVmYXVsdE9wZW4gPSBmYWxzZSxcbiAgICAgfTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZGVmYXVsdE9wZW4pO1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgc2V0T3BlbihkZWZhdWx0T3Blbik7XG4gICAgICAgIH0sIFtkZWZhdWx0T3Blbl0pO1xuICAgICAgICBjb25zdCBwcmV2aW91cyA9IHVzZVByZXZpb3VzKGlzT3Blbik7XG4gICAgICAgIGNvbnN0IFtiaW5kLCB7aGVpZ2h0OiB2aWV3SGVpZ2h0fV0gPSB1c2VNZWFzdXJlKCk7XG4gICAgICAgIGNvbnN0IHtoZWlnaHQsIG9wYWNpdHksIHRyYW5zZm9ybX0gPSB1c2VTcHJpbmc8YW55Pih7XG4gICAgICAgICAgICBmcm9tOiB7aGVpZ2h0OiAwLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgyMHB4LDAsMCknfSxcbiAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpc09wZW4gPyB2aWV3SGVpZ2h0IDogMCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc09wZW4gPyAxIDogMCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke2lzT3BlbiA/IDAgOiAyMH1weCwwLDApYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zdCBJY29uID0gaWNvbiA/IEljb25zW2ljb25dIDogZGVwdGggPT09ICdjaGlsZCcgPyBJY29uc1snTWludXMnXSA6IG51bGw7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFtZSBkZXB0aD17ZGVwdGh9PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgb3Blbj17aXNPcGVufSBkZXB0aD17ZGVwdGh9IGNsYXNzTmFtZT17ZGVwdGh9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbldyYXBwZXIgZGVwdGg9e2RlcHRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUljb24gbGluaz17aWNvbn0vPjtcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIG9uQ2xpY2s9e29uQ2xpY2t9PntuYW1lfTwvVGl0bGU+XG5cbiAgICAgICAgICAgICAgICAgICAge2Ryb3Bkb3duID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFpc09wZW4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0b2dnbGVCdXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dOZXh0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpc09wZW4gJiYgcHJldmlvdXMgPT09IGlzT3BlbiA/ICdhdXRvJyA6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3t0cmFuc2Zvcm19fSB7Li4uYmluZH0gY2hpbGRyZW49e2NoaWxkcmVufS8+XG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgKTtcbiAgICB9XG4pO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGNsYXNzTmFtZT86IGFueTtcbiAgICBkYXRhOiBhbnk7XG4gICAgb25DbGljazogKHNsdWc6IHN0cmluZykgPT4gdm9pZDtcbiAgICBhY3RpdmU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbn07XG5leHBvcnQgY29uc3QgVHJlZU1lbnU6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IChjaGlsZHJlbjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbi5kYXRhPy5tYXAoKHN1Yk9wdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWJPcHRpb24pXG4gICAgICAgICAgICBpZiAoIXN1Yk9wdGlvbi5zdWJDYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmVlXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Yk9wdGlvbi5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtzdWJPcHRpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3N1Yk9wdGlvbj8uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aD0nY2hpbGQnXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHN1Yk9wdGlvbi5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0T3Blbj17YWN0aXZlID09PSBzdWJPcHRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFRyZWVcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJPcHRpb24uX2lkfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtzdWJPcHRpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17c3ViT3B0aW9uLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17IXN1Yk9wdGlvbi5zdWJDYXRlZ29yeS5sZW5ndGggPyBmYWxzZSA6IHRydWV9XG4gICAgICAgICAgICAgICAgICAgIGRlcHRoPSdwYXJlbnQnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soc3ViT3B0aW9uLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wZW49e1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID09PSBzdWJPcHRpb24uaWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yk9wdGlvbi5zdWJDYXRlZ29yeS5zb21lKChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT09IGFjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2hhbmRsZXIoc3ViT3B0aW9uLnN1YkNhdGVnb3J5KX1cbiAgICAgICAgICAgICAgICA8L1RyZWU+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiA8PntoYW5kbGVyKGRhdGEpfTwvPjtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/tree-menu/tree-menu.tsx\n");

/***/ })

})