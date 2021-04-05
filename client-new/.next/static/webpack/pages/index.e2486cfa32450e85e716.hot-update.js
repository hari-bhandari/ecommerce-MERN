webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/tree-menu/tree-menu.tsx":
/*!************************************************!*\
  !*** ./src/components/tree-menu/tree-menu.tsx ***!
  \************************************************/
/*! exports provided: TreeMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TreeMenu\", function() { return TreeMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/hooks */ \"./src/assets/hooks.tsx\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var _tree_menu_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-menu.style */ \"./src/components/tree-menu/tree-menu.style.tsx\");\n/* harmony import */ var components_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/button/button */ \"./src/components/button/button.tsx\");\n/* harmony import */ var assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/icons/ArrowNext */ \"./src/assets/icons/ArrowNext.tsx\");\n/* harmony import */ var _header_menu_left_menu_LeftMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/header/menu/left-menu/LeftMenu */ \"./src/header/menu/left-menu/LeftMenu.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/home/hari/WebstormProjects/ecommerce-MERN/client-new/src/components/tree-menu/tree-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Tree = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(_c = _s(function (_ref) {\n  _s();\n\n  var children = _ref.children,\n      name = _ref.name,\n      icon = _ref.icon,\n      onClick = _ref.onClick,\n      dropdown = _ref.dropdown,\n      depth = _ref.depth,\n      _ref$defaultOpen = _ref.defaultOpen,\n      defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(defaultOpen),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setOpen(defaultOpen);\n  }, [defaultOpen]);\n  var previous = Object(_assets_hooks__WEBPACK_IMPORTED_MODULE_4__[\"usePrevious\"])(isOpen);\n\n  var _useMeasure = Object(_assets_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMeasure\"])(),\n      _useMeasure2 = Object(_home_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMeasure, 2),\n      bind = _useMeasure2[0],\n      viewHeight = _useMeasure2[1].height;\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    from: {\n      height: 0,\n      opacity: 0,\n      transform: 'translate3d(20px,0,0)'\n    },\n    to: {\n      height: isOpen ? viewHeight : 0,\n      opacity: isOpen ? 1 : 0,\n      transform: \"translate3d(\".concat(isOpen ? 0 : 20, \"px,0,0)\")\n    }\n  }),\n      height = _useSpring.height,\n      opacity = _useSpring.opacity,\n      transform = _useSpring.transform; // const Icon = icon ? Icons[icon] : depth === 'child' ? Icons['Minus'] : null;\n  // @ts-ignore\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_6__[\"Frame\"], {\n    depth: depth,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_6__[\"Header\"], {\n      open: isOpen,\n      depth: depth,\n      className: depth,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_6__[\"IconWrapper\"], {\n        depth: depth,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_header_menu_left_menu_LeftMenu__WEBPACK_IMPORTED_MODULE_9__[\"CategoryIcon\"], {\n          link: icon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 25\n        }, _this), \";\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_6__[\"Title\"], {\n        onClick: onClick,\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 21\n      }, _this), dropdown === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_button_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n        onClick: function onClick() {\n          return setOpen(!isOpen);\n        },\n        variant: \"text\",\n        className: \"toggleButton\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(assets_icons_ArrowNext__WEBPACK_IMPORTED_MODULE_8__[\"ArrowNext\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 29\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 25\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_tree_menu_style__WEBPACK_IMPORTED_MODULE_6__[\"Content\"], {\n      style: {\n        opacity: opacity,\n        height: isOpen && previous === isOpen ? 'auto' : height\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].div, _objectSpread(_objectSpread({\n        style: {\n          transform: transform\n        }\n      }, bind), {}, {\n        children: children\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 21\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 13\n  }, _this);\n}, \"ELTP6lCwoexA1kmfaNvwd+LbElU=\", false, function () {\n  return [_assets_hooks__WEBPACK_IMPORTED_MODULE_4__[\"usePrevious\"], _assets_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMeasure\"], react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"]];\n}));\n_c2 = Tree;\nvar TreeMenu = function TreeMenu(_ref2) {\n  var data = _ref2.data,\n      className = _ref2.className,\n      _onClick = _ref2.onClick,\n      active = _ref2.active;\n\n  var handler = function handler(children) {\n    var _children$data;\n\n    return (_children$data = children.data) === null || _children$data === void 0 ? void 0 : _children$data.map(function (subOption) {\n      console.log(subOption);\n\n      if (subOption.subCategory.length === 0) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Tree, {\n          name: subOption.name,\n          icon: subOption.image ? subOption.image : null,\n          depth: \"child\",\n          onClick: function onClick() {\n            return _onClick(subOption.id);\n          },\n          defaultOpen: active === subOption.id\n        }, subOption._id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, _this);\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Tree, {\n        name: subOption.name,\n        icon: subOption.image,\n        dropdown: !subOption.subCategory.length ? false : true,\n        depth: \"parent\",\n        onClick: function onClick() {\n          return _onClick(subOption.id);\n        },\n        defaultOpen: active === subOption.id || subOption.subCategory.some(function (item) {\n          return item.id === active;\n        }),\n        children: handler(subOption.subCategory)\n      }, subOption._id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 17\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: handler(data)\n  }, void 0, false);\n};\n_c3 = TreeMenu;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Tree$React.memo\");\n$RefreshReg$(_c2, \"Tree\");\n$RefreshReg$(_c3, \"TreeMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdHJlZS1tZW51L3RyZWUtbWVudS50c3g/ODc5OCJdLCJuYW1lcyI6WyJUcmVlIiwiUmVhY3QiLCJtZW1vIiwiY2hpbGRyZW4iLCJuYW1lIiwiaWNvbiIsIm9uQ2xpY2siLCJkcm9wZG93biIsImRlcHRoIiwiZGVmYXVsdE9wZW4iLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE9wZW4iLCJ1c2VFZmZlY3QiLCJwcmV2aW91cyIsInVzZVByZXZpb3VzIiwidXNlTWVhc3VyZSIsImJpbmQiLCJ2aWV3SGVpZ2h0IiwiaGVpZ2h0IiwidXNlU3ByaW5nIiwiZnJvbSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ0byIsIlRyZWVNZW51IiwiZGF0YSIsImNsYXNzTmFtZSIsImFjdGl2ZSIsImhhbmRsZXIiLCJtYXAiLCJzdWJPcHRpb24iLCJjb25zb2xlIiwibG9nIiwic3ViQ2F0ZWdvcnkiLCJsZW5ndGgiLCJpbWFnZSIsImlkIiwiX2lkIiwic29tZSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUEsSUFBTUEsSUFBSSxnQkFBR0MsNENBQUssQ0FBQ0MsSUFBTixTQUNULGdCQVNZO0FBQUE7O0FBQUEsTUFSUEMsUUFRTyxRQVJQQSxRQVFPO0FBQUEsTUFQUEMsSUFPTyxRQVBQQSxJQU9PO0FBQUEsTUFOUEMsSUFNTyxRQU5QQSxJQU1PO0FBQUEsTUFKUEMsT0FJTyxRQUpQQSxPQUlPO0FBQUEsTUFIUEMsUUFHTyxRQUhQQSxRQUdPO0FBQUEsTUFGUEMsS0FFTyxRQUZQQSxLQUVPO0FBQUEsOEJBRFBDLFdBQ087QUFBQSxNQURQQSxXQUNPLGlDQURPLEtBQ1A7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDRCxXQUFELENBRDFCO0FBQUEsTUFDREUsTUFEQztBQUFBLE1BQ09DLE9BRFA7O0FBRVJDLHlEQUFT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WUtDLE9BQU8sQ0FBQ0UsU0FBUyxDQUFDRyxXQUFYO0FBWlosU0FDU0gsU0FBUyxDQUFDTyxHQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFnQkgsS0E5Qk0sQ0FBUDtBQStCSCxHQWhDRDs7QUFpQ0Esc0JBQU87QUFBQSxjQUFHVCxPQUFPLENBQUNILElBQUQ7QUFBVixtQkFBUDtBQUNILENBeENNO01BQU1ELFEiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90cmVlLW1lbnUvdHJlZS1tZW51LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUHJldmlvdXMsIHVzZU1lYXN1cmV9IGZyb20gJy4uLy4uL2Fzc2V0cy9ob29rcyc7XG5pbXBvcnQge3VzZVNwcmluZywgYW5pbWF0ZWR9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5pbXBvcnQge0ZyYW1lLCBUaXRsZSwgQ29udGVudCwgSGVhZGVyLCBJY29uV3JhcHBlcn0gZnJvbSAnLi90cmVlLW1lbnUuc3R5bGUnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQge0Fycm93TmV4dH0gZnJvbSAnYXNzZXRzL2ljb25zL0Fycm93TmV4dCc7XG5cbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ2Fzc2V0cy9pY29ucy9jYXRlZ29yeS1pY29ucyc7XG5pbXBvcnQge0NhdGVnb3J5SWNvbn0gZnJvbSBcIkAvaGVhZGVyL21lbnUvbGVmdC1tZW51L0xlZnRNZW51XCI7XG5cbmNvbnN0IFRyZWUgPSBSZWFjdC5tZW1vKFxuICAgICh7XG4gICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgIG5hbWUsXG4gICAgICAgICBpY29uLFxuICAgICAgICAgLy8gaXNPcGVuLFxuICAgICAgICAgb25DbGljayxcbiAgICAgICAgIGRyb3Bkb3duLFxuICAgICAgICAgZGVwdGgsXG4gICAgICAgICBkZWZhdWx0T3BlbiA9IGZhbHNlLFxuICAgICB9OiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShkZWZhdWx0T3Blbik7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRPcGVuKGRlZmF1bHRPcGVuKTtcbiAgICAgICAgfSwgW2RlZmF1bHRPcGVuXSk7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzID0gdXNlUHJldmlvdXMoaXNPcGVuKTtcbiAgICAgICAgY29uc3QgW2JpbmQsIHtoZWlnaHQ6IHZpZXdIZWlnaHR9XSA9IHVzZU1lYXN1cmUoKTtcbiAgICAgICAgY29uc3Qge2hlaWdodCwgb3BhY2l0eSwgdHJhbnNmb3JtfSA9IHVzZVNwcmluZzxhbnk+KHtcbiAgICAgICAgICAgIGZyb206IHtoZWlnaHQ6IDAsIG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDIwcHgsMCwwKSd9LFxuICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGlzT3BlbiA/IHZpZXdIZWlnaHQgOiAwLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzT3BlbiA/IDEgOiAwLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7aXNPcGVuID8gMCA6IDIwfXB4LDAsMClgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnN0IEljb24gPSBpY29uID8gSWNvbnNbaWNvbl0gOiBkZXB0aCA9PT0gJ2NoaWxkJyA/IEljb25zWydNaW51cyddIDogbnVsbDtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZyYW1lIGRlcHRoPXtkZXB0aH0+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBvcGVuPXtpc09wZW59IGRlcHRoPXtkZXB0aH0gY2xhc3NOYW1lPXtkZXB0aH0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uV3JhcHBlciBkZXB0aD17ZGVwdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5SWNvbiBsaW5rPXtpY29ufS8+O1xuICAgICAgICAgICAgICAgICAgICA8L0ljb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGUgb25DbGljaz17b25DbGlja30+e25hbWV9PC9UaXRsZT5cblxuICAgICAgICAgICAgICAgICAgICB7ZHJvcGRvd24gPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIWlzT3Blbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RvZ2dsZUJ1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd05leHQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGlzT3BlbiAmJiBwcmV2aW91cyA9PT0gaXNPcGVuID8gJ2F1dG8nIDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17e3RyYW5zZm9ybX19IHsuLi5iaW5kfSBjaGlsZHJlbj17Y2hpbGRyZW59Lz5cbiAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgICA8L0ZyYW1lPlxuICAgICAgICApO1xuICAgIH1cbik7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lPzogYW55O1xuICAgIGRhdGE6IGFueTtcbiAgICBvbkNsaWNrOiAoc2x1Zzogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGFjdGl2ZT86IHN0cmluZyB8IHN0cmluZ1tdO1xufTtcbmV4cG9ydCBjb25zdCBUcmVlTWVudTogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKGNoaWxkcmVuOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmRhdGE/Lm1hcCgoc3ViT3B0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Yk9wdGlvbilcbiAgICAgICAgICAgIGlmIChzdWJPcHRpb24uc3ViQ2F0ZWdvcnkubGVuZ3RoPT09MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmVlXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Yk9wdGlvbi5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtzdWJPcHRpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3N1Yk9wdGlvbi5pbWFnZSA/IHN1Yk9wdGlvbi5pbWFnZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aD0nY2hpbGQnXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHN1Yk9wdGlvbi5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0T3Blbj17YWN0aXZlID09PSBzdWJPcHRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFRyZWVcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJPcHRpb24uX2lkfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtzdWJPcHRpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17c3ViT3B0aW9uLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17IXN1Yk9wdGlvbi5zdWJDYXRlZ29yeS5sZW5ndGggPyBmYWxzZSA6IHRydWV9XG4gICAgICAgICAgICAgICAgICAgIGRlcHRoPSdwYXJlbnQnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soc3ViT3B0aW9uLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wZW49e1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID09PSBzdWJPcHRpb24uaWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yk9wdGlvbi5zdWJDYXRlZ29yeS5zb21lKChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT09IGFjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2hhbmRsZXIoc3ViT3B0aW9uLnN1YkNhdGVnb3J5KX1cbiAgICAgICAgICAgICAgICA8L1RyZWU+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiA8PntoYW5kbGVyKGRhdGEpfTwvPjtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/tree-menu/tree-menu.tsx\n");

/***/ })

})