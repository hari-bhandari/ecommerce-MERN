webpackHotUpdate_N_E("pages/login",{

/***/ "./src/utils/config.ts":
/*!*****************************!*\
  !*** ./src/utils/config.ts ***!
  \*****************************/
/*! exports provided: API_BASE_URL, transformCloudinaryImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_BASE_URL\", function() { return API_BASE_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformCloudinaryImage\", function() { return transformCloudinaryImage; });\n/* harmony import */ var _Users_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n\nvar API_BASE_URL = 'http://localhost:5000';\nvar transformCloudinaryImage = function transformCloudinaryImage(url, width, height) {\n  // https://res.cloudinary.com/wisecart/image/upload/w_150,h_300,c_fill/v1617441971/re3lf0beoxdrw4hdqbeb.png\n  var _url$split = url.split('/upload/'),\n      _url$split2 = Object(_Users_hari_WebstormProjects_ecommerce_MERN_client_new_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_url$split, 2),\n      first = _url$split2[0],\n      last = _url$split2[1];\n\n  return first + \"/upload/w_\".concat(width, \",h_\").concat(height, \",c_fill\");\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NvbmZpZy50cz80ODJmIl0sIm5hbWVzIjpbIkFQSV9CQVNFX1VSTCIsInRyYW5zZm9ybUNsb3VkaW5hcnlJbWFnZSIsInVybCIsIndpZHRoIiwiaGVpZ2h0Iiwic3BsaXQiLCJmaXJzdCIsImxhc3QiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFDLHVCQUFuQjtBQUNBLElBQU1DLHdCQUF3QixHQUFDLFNBQXpCQSx3QkFBeUIsQ0FBQ0MsR0FBRCxFQUFLQyxLQUFMLEVBQVdDLE1BQVgsRUFBb0I7QUFDdEQ7QUFEc0QsbUJBRXBDRixHQUFHLENBQUNHLEtBQUosQ0FBVSxVQUFWLENBRm9DO0FBQUE7QUFBQSxNQUVoREMsS0FGZ0Q7QUFBQSxNQUUxQ0MsSUFGMEM7O0FBR3RELFNBQU9ELEtBQUssdUJBQWNILEtBQWQsZ0JBQXlCQyxNQUF6QixZQUFaO0FBQ0gsQ0FKTSIsImZpbGUiOiIuL3NyYy91dGlscy9jb25maWcudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMPSdodHRwOi8vbG9jYWxob3N0OjUwMDAnXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQ2xvdWRpbmFyeUltYWdlPSh1cmwsd2lkdGgsaGVpZ2h0KT0+e1xuICAgIC8vIGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dpc2VjYXJ0L2ltYWdlL3VwbG9hZC93XzE1MCxoXzMwMCxjX2ZpbGwvdjE2MTc0NDE5NzEvcmUzbGYwYmVveGRydzRoZHFiZWIucG5nXG4gICAgY29uc3RbZmlyc3QsbGFzdF09dXJsLnNwbGl0KCcvdXBsb2FkLycpXG4gICAgcmV0dXJuIGZpcnN0K2AvdXBsb2FkL3dfJHt3aWR0aH0saF8ke2hlaWdodH0sY19maWxsYFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/config.ts\n");

/***/ })

})