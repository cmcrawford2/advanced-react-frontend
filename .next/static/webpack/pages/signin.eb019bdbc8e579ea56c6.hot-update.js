/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./components/SignUp.js":
/*!******************************!*\
  !*** ./components/SignUp.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var _Users_cris_advanced_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_cris_advanced_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cris_advanced_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_cris_advanced_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_cris_advanced_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_cris_advanced_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/cris/advanced-react/sick-fits/frontend/components/SignUp.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_cris_advanced_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n  mutation SIGNUP_MUTATION($email: String!, $password: String!) {\\n    authenticateUserWithPassword(email: $email, password: $password) {\\n      ... on UserAuthenticationWithPasswordSuccess {\\n        item {\\n          id\\n          email\\n          name\\n        }\\n      }\\n      ... on UserAuthenticationWithPasswordFailure {\\n        code\\n        message\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());\nfunction SignUp() {\n  _s();\n\n  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_6__.default)({\n    email: '',\n    name: '',\n    password: ''\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation)(SIGNUP_MUTATION, {\n    variables: inputs,\n    // refetch the currently logged in user\n    refetchQueries: [{\n      query: _User__WEBPACK_IMPORTED_MODULE_7__.CURRENT_USER_QUERY\n    }]\n  }),\n      _useMutation2 = (0,_Users_cris_advanced_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),\n      signup = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading;\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = (0,_Users_cris_advanced_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_cris_advanced_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n      return _Users_cris_advanced_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault(); // stop the form from submitting\n\n              _context.next = 3;\n              return signup();\n\n            case 3:\n              resetForm();\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  var error = (data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword.__typename) === 'UserAuthenticationWithPasswordFailure' ? data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword : undefined;\n  console.log(error);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_5__.default, {\n    method: \"POST\",\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n      children: \"Sign Up for an Account\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__.default, {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"fieldset\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n        htmlFor: \"email\",\n        children: [\"Email\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          placeholder: \"Your Email Address\",\n          autoComplete: \"email\",\n          value: inputs.email,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n        htmlFor: \"name\",\n        children: [\"Your Name\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"name\",\n          placeholder: \"Your name\",\n          autoComplete: \"name\",\n          value: inputs.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n        htmlFor: \"password\",\n        children: [\"Password\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"Password\",\n          autoComplete: \"password\",\n          value: inputs.password,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Sign Up!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SignUp, \"gIL9+qt2Qv7qOWyn+b61LUGegpQ=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_6__.default, _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation];\n});\n\n_c = SignUp;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignUp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXAuanM/ZThmZCJdLCJuYW1lcyI6WyJTSUdOVVBfTVVUQVRJT04iLCJncWwiLCJTaWduVXAiLCJ1c2VGb3JtIiwiZW1haWwiLCJuYW1lIiwicGFzc3dvcmQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJzaWdudXAiLCJkYXRhIiwibG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVycm9yIiwiYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZCIsIl9fdHlwZW5hbWUiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0Msa0RBQUgsbUJBQXJCO0FBa0JlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxpQkFDYUMscURBQU8sQ0FBQztBQUNsREMsU0FBSyxFQUFFLEVBRDJDO0FBRWxEQyxRQUFJLEVBQUUsRUFGNEM7QUFHbERDLFlBQVEsRUFBRTtBQUh3QyxHQUFELENBRHBCO0FBQUEsTUFDdkJDLE1BRHVCLFlBQ3ZCQSxNQUR1QjtBQUFBLE1BQ2ZDLFlBRGUsWUFDZkEsWUFEZTtBQUFBLE1BQ0RDLFNBREMsWUFDREEsU0FEQzs7QUFBQSxxQkFNS0MsNERBQVcsQ0FBQ1YsZUFBRCxFQUFrQjtBQUMvRFcsYUFBUyxFQUFFSixNQURvRDtBQUUvRDtBQUNBSyxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyxxREFBa0JBO0FBQTNCLEtBQUQ7QUFIK0MsR0FBbEIsQ0FOaEI7QUFBQTtBQUFBLE1BTXhCQyxNQU53QjtBQUFBO0FBQUEsTUFNZEMsSUFOYyxrQkFNZEEsSUFOYztBQUFBLE1BTVJDLE9BTlEsa0JBTVJBLE9BTlE7O0FBQUEsV0FXaEJDLFlBWGdCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHNWQVcvQixpQkFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsZUFBQyxDQUFDQyxjQUFGLEdBREYsQ0FDc0I7O0FBRHRCO0FBQUEscUJBRVFMLE1BQU0sRUFGZDs7QUFBQTtBQUdFTix1QkFBUzs7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVgrQjtBQUFBO0FBQUE7O0FBZ0IvQixNQUFNWSxLQUFLLEdBQ1QsQ0FBQUwsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVNLDRCQUFOLENBQW1DQyxVQUFuQyxNQUNBLHVDQURBLEdBRUlQLElBRkosYUFFSUEsSUFGSix1QkFFSUEsSUFBSSxDQUFFTSw0QkFGVixHQUdJRSxTQUpOO0FBS0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ0Esc0JBQ0UsOERBQUMsaURBQUQ7QUFBTSxVQUFNLEVBQUMsTUFBYjtBQUFvQixZQUFRLEVBQUVILFlBQTlCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGtEQUFEO0FBQU8sV0FBSyxFQUFFRztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxjQUFJLEVBQUMsT0FGUDtBQUdFLHFCQUFXLEVBQUMsb0JBSGQ7QUFJRSxzQkFBWSxFQUFDLE9BSmY7QUFLRSxlQUFLLEVBQUVkLE1BQU0sQ0FBQ0gsS0FMaEI7QUFNRSxrQkFBUSxFQUFFSTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFZRTtBQUFPLGVBQU8sRUFBQyxNQUFmO0FBQUEsNkNBRUU7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UscUJBQVcsRUFBQyxXQUhkO0FBSUUsc0JBQVksRUFBQyxNQUpmO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNGLElBTGhCO0FBTUUsa0JBQVEsRUFBRUc7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBdUJFO0FBQU8sZUFBTyxFQUFDLFVBQWY7QUFBQSw0Q0FFRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxxQkFBVyxFQUFDLFVBSGQ7QUFJRSxzQkFBWSxFQUFDLFVBSmY7QUFLRSxlQUFLLEVBQUVELE1BQU0sQ0FBQ0QsUUFMaEI7QUFNRSxrQkFBUSxFQUFFRTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJGLGVBa0NFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQ0Q7O0dBaEV1Qk4sTTtVQUNzQkMsaUQsRUFLUk8sd0Q7OztLQU5kUixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWduVXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IEVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcblxuY29uc3QgU0lHTlVQX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBTSUdOVVBfTVVUQVRJT04oJGVtYWlsOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgICBhdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkKGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICAgIC4uLiBvbiBVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRTdWNjZXNzIHtcbiAgICAgICAgaXRlbSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBlbWFpbFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLi4uIG9uIFVzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZEZhaWx1cmUge1xuICAgICAgICBjb2RlXG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcbiAgICBlbWFpbDogJycsXG4gICAgbmFtZTogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9KTtcbiAgY29uc3QgW3NpZ251cCwgeyBkYXRhLCBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oU0lHTlVQX01VVEFUSU9OLCB7XG4gICAgdmFyaWFibGVzOiBpbnB1dHMsXG4gICAgLy8gcmVmZXRjaCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyXG4gICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXG4gIH0pO1xuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmdcbiAgICBhd2FpdCBzaWdudXAoKTtcbiAgICByZXNldEZvcm0oKTtcbiAgfVxuICBjb25zdCBlcnJvciA9XG4gICAgZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZC5fX3R5cGVuYW1lID09PVxuICAgICdVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlJ1xuICAgICAgPyBkYXRhPy5hdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgY29uc29sZS5sb2coZXJyb3IpO1xuICByZXR1cm4gKFxuICAgIDxGb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMj5TaWduIFVwIGZvciBhbiBBY2NvdW50PC9oMj5cbiAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICA8ZmllbGRzZXQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cbiAgICAgICAgICBFbWFpbFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICBZb3VyIE5hbWVcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIFVwITwvYnV0dG9uPlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignUp.js\n");

/***/ })

});