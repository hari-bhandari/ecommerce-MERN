webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.ts");
/* harmony import */ var redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/lib/integration/react */ "./node_modules/redux-persist/lib/integration/react.js");
/* harmony import */ var redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_use_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/use-media */ "./src/assets/use-media.ts");
/* harmony import */ var _withReduxStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../withReduxStore */ "./src/withReduxStore.js");
/* harmony import */ var _redq_reuse_modal_lib_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redq/reuse-modal/lib/index.css */ "./node_modules/@redq/reuse-modal/lib/index.css");
/* harmony import */ var _redq_reuse_modal_lib_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal_lib_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/GlobalStyles */ "./styles/GlobalStyles.tsx");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "./node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/Layout/layout */ "./src/components/Layout/layout.tsx");



var _jsxFileName = "C:\\Users\\2012b\\WebstormProjects\\ecommerce-MERN\\client-new\\src\\pages\\_app.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_2012b_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var App = function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      reduxStore = _ref.reduxStore;
  var mobile = Object(_assets_use_media__WEBPACK_IMPORTED_MODULE_6__["useMedia"])('(max-width: 580px)');
  var tablet = Object(_assets_use_media__WEBPACK_IMPORTED_MODULE_6__["useMedia"])('(max-width: 991px)');
  var desktop = Object(_assets_use_media__WEBPACK_IMPORTED_MODULE_6__["useMedia"])('(min-width: 992px)');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: reduxStore,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_5__["PersistGate"], {
      loading: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: "Loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 35
      }, _this),
      persistor: _redux_store__WEBPACK_IMPORTED_MODULE_4__["persistor"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_10__["defaultTheme"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_11__["GlobalStyle"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout_layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
            deviceType: {
              mobile: mobile,
              tablet: tablet,
              desktop: desktop
            }
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_s(App, "eWMNPGJHwxIDPLa+Wl7F4vrnYv0=", false, function () {
  return [_assets_use_media__WEBPACK_IMPORTED_MODULE_6__["useMedia"], _assets_use_media__WEBPACK_IMPORTED_MODULE_6__["useMedia"], _assets_use_media__WEBPACK_IMPORTED_MODULE_6__["useMedia"]];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_withReduxStore__WEBPACK_IMPORTED_MODULE_7__["default"])(App));

var _c, _c2;

$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlZHV4U3RvcmUiLCJtb2JpbGUiLCJ1c2VNZWRpYSIsInRhYmxldCIsImRlc2t0b3AiLCJwZXJzaXN0b3IiLCJkZWZhdWx0VGhlbWUiLCJ3aXRoUmVkdXhTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7O0FBRUEsSUFBTUEsR0FBdUIsR0FBRyxTQUExQkEsR0FBMEIsT0FBd0M7QUFBQTs7QUFBQSxNQUF0Q0MsU0FBc0MsUUFBdENBLFNBQXNDO0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDcEUsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUSxDQUFDLG9CQUFELENBQXZCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxrRUFBUSxDQUFDLG9CQUFELENBQXZCO0FBQ0EsTUFBTUUsT0FBTyxHQUFHRixrRUFBUSxDQUFDLG9CQUFELENBQXhCO0FBQ0Esc0JBQ0kscUVBQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVGLFVBQWpCO0FBQUEsMkJBQ0kscUVBQUMsK0VBQUQ7QUFBYSxhQUFPLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdEI7QUFBMEMsZUFBUyxFQUFFSyxzREFBckQ7QUFBQSw2QkFDSSxxRUFBQywrREFBRDtBQUFlLGFBQUssRUFBRUMsMkRBQXRCO0FBQUEsZ0NBQ1EscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUixlQUVJLHFFQUFDLGtFQUFEO0FBQUEsaUNBQ1EscUVBQUMsU0FBRCxrQ0FBZVAsU0FBZjtBQUEwQixzQkFBVSxFQUFFO0FBQUNFLG9CQUFNLEVBQU5BLE1BQUQ7QUFBU0Usb0JBQU0sRUFBTkEsTUFBVDtBQUFpQkMscUJBQU8sRUFBUEE7QUFBakI7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVlILENBaEJEOztHQUFNUCxHO1VBQ2FLLDBELEVBQ0FBLDBELEVBQ0NBLDBEOzs7S0FIZEwsRztBQWlCUyxxRUFBQVUsK0RBQWMsQ0FBQ1YsR0FBRCxDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc3MWQ0MjY4MjE2M2E3NmRiMjAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3BlcnNpc3Rvcn0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCB7UGVyc2lzdEdhdGV9IGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9pbnRlZ3JhdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQge3VzZU1lZGlhfSBmcm9tICcuLi9hc3NldHMvdXNlLW1lZGlhJztcclxuaW1wb3J0IHdpdGhSZWR1eFN0b3JlIGZyb20gXCIuLi93aXRoUmVkdXhTdG9yZVwiO1xyXG5pbXBvcnQgJ0ByZWRxL3JldXNlLW1vZGFsL2xpYi9pbmRleC5jc3MnO1xyXG5pbXBvcnQge1RoZW1lUHJvdmlkZXJ9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge2RlZmF1bHRUaGVtZX0gZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xyXG5pbXBvcnQge0dsb2JhbFN0eWxlfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbFN0eWxlc1wiO1xyXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xyXG4gICAgQ29tcG9uZW50OiBhbnk7XHJcbiAgICBwYWdlUHJvcHM6IGFueTtcclxuICAgIHJlZHV4U3RvcmU6IGFueVxyXG59XHJcbmltcG9ydCAncmMtZHJhd2VyL2Fzc2V0cy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0L2xheW91dFwiO1xyXG5cclxuY29uc3QgQXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlfSkgPT4ge1xyXG4gICAgY29uc3QgbW9iaWxlID0gdXNlTWVkaWEoJyhtYXgtd2lkdGg6IDU4MHB4KScpO1xyXG4gICAgY29uc3QgdGFibGV0ID0gdXNlTWVkaWEoJyhtYXgtd2lkdGg6IDk5MXB4KScpO1xyXG4gICAgY29uc3QgZGVza3RvcCA9IHVzZU1lZGlhKCcobWluLXdpZHRoOiA5OTJweCknKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlfT5cclxuICAgICAgICAgICAgPFBlcnNpc3RHYXRlIGxvYWRpbmc9ezxkaXY+TG9hZGluZzwvZGl2Pn0gcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2RlZmF1bHRUaGVtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHbG9iYWxTdHlsZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gZGV2aWNlVHlwZT17e21vYmlsZSwgdGFibGV0LCBkZXNrdG9wfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U3RvcmUoQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==