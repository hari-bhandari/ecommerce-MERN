webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/header/menu/left-menu/LeftMenu.tsx":
/*!************************************************!*\
  !*** ./src/header/menu/left-menu/LeftMenu.tsx ***!
  \************************************************/
/*! exports provided: CategoryIcon, LeftMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CategoryIcon\", function() { return CategoryIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftMenu\", function() { return LeftMenu; });\n/* harmony import */ var _home_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_popover_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/popover/popover */ \"./src/components/popover/popover.tsx\");\n/* harmony import */ var _logo_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../logo/logo */ \"./src/logo/logo.tsx\");\n/* harmony import */ var _assets_icons_MenuDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/MenuDown */ \"./src/assets/icons/MenuDown.tsx\");\n/* harmony import */ var _site_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../site-navigation */ \"./src/header/site-navigation.ts\");\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useFetch */ \"./src/hooks/useFetch.ts\");\n/* harmony import */ var _LeftMenuStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LeftMenuStyle */ \"./src/header/menu/left-menu/LeftMenuStyle.tsx\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/config */ \"./src/utils/config.ts\");\n\n\n\nvar _jsxFileName = \"/home/hari/WebstormProjects/ecommerce-MERN/client-new/src/header/menu/left-menu/LeftMenu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CategoryIcon = function CategoryIcon(_ref) {\n  var link = _ref.link;\n  // @ts-ignore\n  return link ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n    src: link,\n    alt: \"Icon\",\n    style: {\n      width: '16px',\n      height: '16px'\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 18\n  }, _this) : null;\n};\n_c = CategoryIcon;\n\nvar CategoryMenu = function CategoryMenu(_ref2) {\n  var onClick = _ref2.onClick,\n      data = _ref2.data,\n      isLoading = _ref2.isLoading;\n\n  if (isLoading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 16\n    }, _this);\n  }\n\n  var handleOnClick = function handleOnClick(item) {\n    onClick(item);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    children: data.data.map(function (item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_LeftMenuStyle__WEBPACK_IMPORTED_MODULE_8__[\"MenuItem\"], {\n        onClick: function onClick() {\n          return handleOnClick(item);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CategoryIcon, {\n          link: item.image\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, _this), item.name]\n      }, item.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = CategoryMenu;\nvar LeftMenu = function LeftMenu(_ref3) {\n  _s();\n\n  var logo = _ref3.logo;\n\n  var _useFetch = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"\".concat(_utils_config__WEBPACK_IMPORTED_MODULE_9__[\"API_BASE_URL\"], \"/api/v1/category/\")),\n      _useFetch2 = Object(_home_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useFetch, 2),\n      data = _useFetch2[0],\n      isLoading = _useFetch2[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),\n      _React$useState2 = Object(_home_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      activeMenu = _React$useState2[0],\n      setActiveMenu = _React$useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_LeftMenuStyle__WEBPACK_IMPORTED_MODULE_8__[\"LeftMenuBox\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_logo_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      imageUrl: logo,\n      alt: 'Shop Logo',\n      onClick: function onClick() {\n        return setActiveMenu(_site_navigation__WEBPACK_IMPORTED_MODULE_6__[\"CATEGORY_MENU_ITEMS\"][0]);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_LeftMenuStyle__WEBPACK_IMPORTED_MODULE_8__[\"MainMenu\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_popover_popover__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"right\",\n        handler: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_LeftMenuStyle__WEBPACK_IMPORTED_MODULE_8__[\"SelectedItem\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n            children: [activeMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_LeftMenuStyle__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CategoryIcon, {\n                link: activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.image\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 17\n            }, _this), activeMenu ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n              children: activeMenu.defaultMessage\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 33\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n              children: [\"Shop by \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 27\n              }, _this), \"category\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 23\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_LeftMenuStyle__WEBPACK_IMPORTED_MODULE_8__[\"Arrow\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_assets_icons_MenuDown__WEBPACK_IMPORTED_MODULE_5__[\"MenuDown\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 33\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 29\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 25\n        }, _this),\n        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CategoryMenu, {\n          onClick: setActiveMenu,\n          data: data,\n          isLoading: isLoading\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 30\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(LeftMenu, \"ghgPREgayK+PVoeOjEV67CKUGYk=\", false, function () {\n  return [_hooks_useFetch__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c3 = LeftMenu;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CategoryIcon\");\n$RefreshReg$(_c2, \"CategoryMenu\");\n$RefreshReg$(_c3, \"LeftMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlYWRlci9tZW51L2xlZnQtbWVudS9MZWZ0TWVudS50c3g/OWQzZSJdLCJuYW1lcyI6WyJDYXRlZ29yeUljb24iLCJsaW5rIiwid2lkdGgiLCJoZWlnaHQiLCJDYXRlZ29yeU1lbnUiLCJvbkNsaWNrIiwiZGF0YSIsImlzTG9hZGluZyIsImhhbmRsZU9uQ2xpY2siLCJpdGVtIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXAiLCJpbWFnZSIsIm5hbWUiLCJpZCIsIkxlZnRNZW51IiwibG9nbyIsInVzZUZldGNoIiwiQVBJX0JBU0VfVVJMIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFjdGl2ZU1lbnUiLCJzZXRBY3RpdmVNZW51IiwiQ0FURUdPUllfTUVOVV9JVEVNUyIsImRlZmF1bHRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFRQTtBQUVPLElBQU1BLFlBQW9DLEdBQUcsU0FBdkNBLFlBQXVDLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDOUQ7QUFDQSxTQUFPQSxJQUFJLGdCQUFFO0FBQUssT0FBRyxFQUFFQSxJQUFWO0FBQWdCLE9BQUcsRUFBQyxNQUFwQjtBQUEyQixTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFDLE1BQVA7QUFBY0MsWUFBTSxFQUFDO0FBQXJCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBRixHQUFzRSxJQUFqRjtBQUNILENBSE07S0FBTUgsWTs7QUFLYixJQUFNSSxZQUFnRixHQUFHLFNBQW5GQSxZQUFtRixRQUE4QjtBQUFBLE1BQTVCQyxPQUE0QixTQUE1QkEsT0FBNEI7QUFBQSxNQUFwQkMsSUFBb0IsU0FBcEJBLElBQW9CO0FBQUEsTUFBZkMsU0FBZSxTQUFmQSxTQUFlOztBQUNuSCxNQUFHQSxTQUFILEVBQWE7QUFDVCx3QkFBTztBQUFBO0FBQUE7QUFBQTtB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ZWFkZXIvbWVudS9sZWZ0LW1lbnUvTGVmdE1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXInO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vLi4vbG9nby9sb2dvJztcbmltcG9ydCB7IE1lbnVEb3duIH0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL01lbnVEb3duJztcbmltcG9ydCB7Q0FURUdPUllfTUVOVV9JVEVNUywgR1JPQ0VSWV9QQUdFfSBmcm9tICcuLi8uLi9zaXRlLW5hdmlnYXRpb24nO1xuaW1wb3J0ICogYXMgY2F0ZWdvcnlNZW51SWNvbnMgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2NhdGVnb3J5LW1lbnUtaWNvbnMnO1xuaW1wb3J0IHVzZUZldGNoIGZyb20gXCJAL2hvb2tzL3VzZUZldGNoXCI7XG5pbXBvcnQge1xuICAgIE1haW5NZW51LFxuICAgIE1lbnVJdGVtLFxuICAgIFNlbGVjdGVkSXRlbSxcbiAgICBJY29uLFxuICAgIEFycm93LFxuICAgIExlZnRNZW51Qm94LFxufSBmcm9tICcuL0xlZnRNZW51U3R5bGUnO1xuaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gXCJAL3V0aWxzL2NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlJY29uOlJlYWN0LkZDPHtsaW5rOnN0cmluZ30+ID0gKHsgbGluayB9KSA9PiB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBsaW5rPyA8aW1nIHNyYz17bGlua30gYWx0PVwiSWNvblwiIHN0eWxlPXt7d2lkdGg6JzE2cHgnLGhlaWdodDonMTZweCd9fS8+IDogbnVsbDtcbn07XG5cbmNvbnN0IENhdGVnb3J5TWVudTpSZWFjdC5GQzx7b25DbGljazphbnksaXNMb2FkaW5nOmJvb2xlYW4sZGF0YTpudWxsfCB7IGRhdGE6W2FueV0gfX0+ID0gKHtvbkNsaWNrLGRhdGEsaXNMb2FkaW5nfSkgPT4ge1xuICAgIGlmKGlzTG9hZGluZyl7XG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG4gICAgY29uc3QgaGFuZGxlT25DbGljayA9IChpdGVtOiB7IGlkOiBzdHJpbmc7IGhyZWY6IHN0cmluZzsgZGVmYXVsdE1lc3NhZ2U6IHN0cmluZzsgaWNvbjogc3RyaW5nOyBkeW5hbWljOiBib29sZWFuOyB9IHwgeyBpZDogc3RyaW5nOyBkZWZhdWx0TWVzc2FnZTogc3RyaW5nOyBocmVmOiBzdHJpbmc7IGljb246IHN0cmluZzsgZHluYW1pYz86IHVuZGVmaW5lZDsgfSkgPT4ge1xuICAgICAgICBvbkNsaWNrKGl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICAgICAgICB7ZGF0YS5kYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2l0ZW0uaWR9ICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPbkNsaWNrKGl0ZW0pfT5cbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5SWNvbiBsaW5rPXtpdGVtLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgbG9nbzogc3RyaW5nO1xufTtcbmludGVyZmFjZSBBY3RpdmVNZW51e1xuICAgIGlkOnN0cmluZyxcbiAgICBocmVmOnN0cmluZyxcbiAgICBkZWZhdWx0TWVzc2FnZTogc3RyaW5nLFxuICAgIGltYWdlPzpzdHJpbmcsXG4gICAgaWNvbjpzdHJpbmcsXG4gICAgZHluYW1pYz86IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBjb25zdCBMZWZ0TWVudTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbG9nbyB9KSA9PiB7XG4gICAgY29uc3QgW2RhdGEsIGlzTG9hZGluZ109dXNlRmV0Y2goYCR7QVBJX0JBU0VfVVJMfS9hcGkvdjEvY2F0ZWdvcnkvYClcblxuXG4gICAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gUmVhY3QudXNlU3RhdGU8QWN0aXZlTWVudSB8IG51bGw+KG51bGwpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExlZnRNZW51Qm94PlxuICAgICAgICAgICAgPExvZ29cbiAgICAgICAgICAgICAgICBpbWFnZVVybD17bG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9eydTaG9wIExvZ28nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoQ0FURUdPUllfTUVOVV9JVEVNU1swXSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8TWFpbk1lbnU+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RlZEl0ZW0+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHthY3RpdmVNZW51ICYmXG4gICAgICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUljb24gbGluaz17YWN0aXZlTWVudT8uaW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L0ljb24+fVxuICAgICAgICAgICAgICAgICAge2FjdGl2ZU1lbnUgPyA8c3Bhbj57YWN0aXZlTWVudS5kZWZhdWx0TWVzc2FnZX08L3NwYW4+IDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgU2hvcCBieSA8YnIvPmNhdGVnb3J5XG4gICAgICAgICAgICAgICAgPC9zcGFuPil9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51RG93bi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BcnJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0ZWRJdGVtPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxDYXRlZ29yeU1lbnUgb25DbGljaz17c2V0QWN0aXZlTWVudX0gZGF0YT17ZGF0YX0gaXNMb2FkaW5nPXtpc0xvYWRpbmd9IC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01haW5NZW51PlxuICAgICAgICA8L0xlZnRNZW51Qm94PlxuICAgICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/header/menu/left-menu/LeftMenu.tsx\n");

/***/ })

})