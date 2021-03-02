webpackHotUpdate_N_E("pages/portfolio",{

/***/ "./components/functional_components/pos_tagger.js":
/*!********************************************************!*\
  !*** ./components/functional_components/pos_tagger.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _express_requests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./express_requests */ \"./components/functional_components/express_requests.js\");\n\n\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Pos_tagger = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Pos_tagger, _React$Component);\n\n  var _super = _createSuper(Pos_tagger);\n\n  function Pos_tagger(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Pos_tagger);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"send_request\", /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(element) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log(document);\n                if (element.value.length > 0) Object(_express_requests__WEBPACK_IMPORTED_MODULE_10__[\"api_query\"])('POS_Tagger', \"POST\", {\n                  sentence: element.value\n                }).then(function (response) {\n                  var resText = document.getElementById('POS_result');\n                  resText.innerHTML = '';\n\n                  for (var i in response) {\n                    if (i != 0 && i != response.length - 1) {\n                      resText.innerHTML += \"\\n            <div style=\\\"display: inline-block; border: 1px solid black; border-radius: 5px; padding: 5px; margin: 5px;\\\">\\n              <div>\".concat(response[i][0], \"</div>\\n              <div>\").concat(response[i][1], \"</div>\\n            </div>\\n            \");\n                    }\n                  }\n\n                  console.log(response);\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Pos_tagger, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.getElementById('POS_tagger-input').addEventListener(\"keydown\", function (event) {\n        console.log(this);\n\n        if (event.key == 'Enter') {\n          globalThis.send_request(document.getElementById('POS_tagger-input'));\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", null, __jsx(\"p\", null, \"Enter a sentence and press enter.\"), __jsx(\"div\", {\n        className: \"d-flex justify-content-sm-start align-items-sm-center\",\n        style: {\n          textAlign: \"center\"\n        }\n      }, __jsx(\"input\", {\n        className: \"d-inline-flex flex-grow-1 align-content-start justify-content-sm-start align-items-sm-center\",\n        type: \"text\",\n        id: \"POS_tagger-input\",\n        style: {\n          marginRight: \"10px\",\n          maxWidth: \"80%\"\n        }\n      }), __jsx(\"a\", {\n        className: \"btn btn-primary\",\n        role: \"button\",\n        id: \"POS_tagger-button\",\n        onClick: function onClick() {\n          return _this2.send_request(document.getElementById('POS_tagger-input'));\n        }\n      }, \"Submit\")), __jsx(\"div\", {\n        id: \"POS_result\",\n        style: {\n          marginTop: '10px',\n          paddingBottom: '10px',\n          display: 'inline-block',\n          borderRadius: '3px',\n          overflowX: 'scroll',\n          whiteSpace: 'nowrap',\n          width: '80%'\n        }\n      }));\n    }\n  }]);\n\n  return Pos_tagger;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pos_tagger);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mdW5jdGlvbmFsX2NvbXBvbmVudHMvcG9zX3RhZ2dlci5qcz83ZTUzIl0sIm5hbWVzIjpbIlBvc190YWdnZXIiLCJwcm9wcyIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJ2YWx1ZSIsImxlbmd0aCIsImFwaV9xdWVyeSIsInNlbnRlbmNlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzVGV4dCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSIsImdsb2JhbFRoaXMiLCJzZW5kX3JlcXVlc3QiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5SaWdodCIsIm1heFdpZHRoIiwibWFyZ2luVG9wIiwicGFkZGluZ0JvdHRvbSIsImRpc3BsYXkiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvd1giLCJ3aGl0ZVNwYWNlIiwid2lkdGgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxVOzs7OztBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQjtBQUFBLGtNQUdKLGlCQUFnQkMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVo7QUFDQSxvQkFBSUgsT0FBTyxDQUFDSSxLQUFSLENBQWNDLE1BQWQsR0FBdUIsQ0FBM0IsRUFDRUMsb0VBQVMsQ0FBQyxZQUFELEVBQWUsTUFBZixFQUF1QjtBQUM5QkMsMEJBQVEsRUFBRVAsT0FBTyxDQUFDSTtBQURZLGlCQUF2QixDQUFULENBR0NJLElBSEQsQ0FHTSxVQUFBQyxRQUFRLEVBQUk7QUFDaEIsc0JBQUlDLE9BQU8sR0FBR1AsUUFBUSxDQUFDUSxjQUFULENBQXdCLFlBQXhCLENBQWQ7QUFDQUQseUJBQU8sQ0FBQ0UsU0FBUixHQUFvQixFQUFwQjs7QUFDQSx1QkFBSyxJQUFJQyxDQUFULElBQWNKLFFBQWQsRUFBd0I7QUFDdEIsd0JBQUlJLENBQUMsSUFBSSxDQUFMLElBQVVBLENBQUMsSUFBS0osUUFBUSxDQUFDSixNQUFULEdBQWtCLENBQXRDLEVBQTBDO0FBQzFDSyw2QkFBTyxDQUFDRSxTQUFSLCtKQUVXSCxRQUFRLENBQUNJLENBQUQsQ0FBUixDQUFZLENBQVosQ0FGWCx3Q0FHV0osUUFBUSxDQUFDSSxDQUFELENBQVIsQ0FBWSxDQUFaLENBSFg7QUFNQztBQUNGOztBQUNEWix5QkFBTyxDQUFDQyxHQUFSLENBQVlPLFFBQVo7QUFDRCxpQkFqQkQ7O0FBSFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FISTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVsQjs7Ozt3Q0F3Qm1CO0FBQ2xCTixjQUFRLENBQUNRLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDRyxnQkFBNUMsQ0FBNkQsU0FBN0QsRUFBd0UsVUFBU0MsS0FBVCxFQUFnQjtBQUN0RmQsZUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjs7QUFDQSxZQUFJYSxLQUFLLENBQUNDLEdBQU4sSUFBYSxPQUFqQixFQUEwQjtBQUN4QkMsb0JBQVUsQ0FBQ0MsWUFBWCxDQUF3QmYsUUFBUSxDQUFDUSxjQUFULENBQXdCLGtCQUF4QixDQUF4QjtBQUNEO0FBQ0YsT0FMRDtBQU1EOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFLG1CQUNFLHFEQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDLHVEQUFmO0FBQXVFLGFBQUssRUFBRTtBQUFDUSxtQkFBUyxFQUFFO0FBQVo7QUFBOUUsU0FDRTtBQUFPLGlCQUFTLEVBQUMsOEZBQWpCO0FBQWdILFlBQUksRUFBQyxNQUFySDtBQUE0SCxVQUFFLEVBQUMsa0JBQS9IO0FBQWtKLGFBQUssRUFBRTtBQUFDQyxxQkFBVyxFQUFFLE1BQWQ7QUFBc0JDLGtCQUFRLEVBQUU7QUFBaEM7QUFBekosUUFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxpQkFBYjtBQUErQixZQUFJLEVBQUMsUUFBcEM7QUFBNkMsVUFBRSxFQUFDLG1CQUFoRDtBQUFvRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNILFlBQUwsQ0FBa0JmLFFBQVEsQ0FBQ1EsY0FBVCxDQUF3QixrQkFBeEIsQ0FBbEIsQ0FBTjtBQUFBO0FBQTdFLGtCQUZGLENBRkYsRUFNRTtBQUFLLFVBQUUsRUFBQyxZQUFSO0FBQXFCLGFBQUssRUFBRTtBQUFDVyxtQkFBUyxFQUFFLE1BQVo7QUFBb0JDLHVCQUFhLEVBQUUsTUFBbkM7QUFBMkNDLGlCQUFPLEVBQUUsY0FBcEQ7QUFBb0VDLHNCQUFZLEVBQUUsS0FBbEY7QUFBeUZDLG1CQUFTLEVBQUUsUUFBcEc7QUFBK0dDLG9CQUFVLEVBQUUsUUFBM0g7QUFBcUlDLGVBQUssRUFBRTtBQUE1STtBQUE1QixRQU5GLENBREY7QUFVRDs7OztFQS9Dc0JDLDRDQUFLLENBQUNDLFM7O0FBbURoQmhDLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mdW5jdGlvbmFsX2NvbXBvbmVudHMvcG9zX3RhZ2dlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGFwaV9xdWVyeSB9IGZyb20gJy4vZXhwcmVzc19yZXF1ZXN0cydcblxuY2xhc3MgUG9zX3RhZ2dlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHNlbmRfcmVxdWVzdCA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQpXG4gICAgaWYgKGVsZW1lbnQudmFsdWUubGVuZ3RoID4gMClcbiAgICAgIGFwaV9xdWVyeSgnUE9TX1RhZ2dlcicsIFwiUE9TVFwiLCB7XG4gICAgICAgIHNlbnRlbmNlOiBlbGVtZW50LnZhbHVlXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBsZXQgcmVzVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQT1NfcmVzdWx0JylcbiAgICAgICAgcmVzVGV4dC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBmb3IgKGxldCBpIGluIHJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKGkgIT0gMCAmJiBpICE9IChyZXNwb25zZS5sZW5ndGggLSAxKSkge1xuICAgICAgICAgIHJlc1RleHQuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBib3JkZXItcmFkaXVzOiA1cHg7IHBhZGRpbmc6IDVweDsgbWFyZ2luOiA1cHg7XCI+XG4gICAgICAgICAgICAgIDxkaXY+JHtyZXNwb25zZVtpXVswXX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj4ke3Jlc3BvbnNlW2ldWzFdfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgfSlcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1BPU190YWdnZXItaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgICBnbG9iYWxUaGlzLnNlbmRfcmVxdWVzdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUE9TX3RhZ2dlci1pbnB1dCcpKTtcbiAgICAgIH1cbiAgICB9KSBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+RW50ZXIgYSBzZW50ZW5jZSBhbmQgcHJlc3MgZW50ZXIuPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc20tc3RhcnQgYWxpZ24taXRlbXMtc20tY2VudGVyXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBmbGV4LWdyb3ctMSBhbGlnbi1jb250ZW50LXN0YXJ0IGp1c3RpZnktY29udGVudC1zbS1zdGFydCBhbGlnbi1pdGVtcy1zbS1jZW50ZXJcIiB0eXBlPVwidGV4dFwiIGlkPVwiUE9TX3RhZ2dlci1pbnB1dFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXhXaWR0aDogXCI4MCVcIn19PjwvaW5wdXQ+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgcm9sZT1cImJ1dHRvblwiIGlkPVwiUE9TX3RhZ2dlci1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbmRfcmVxdWVzdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUE9TX3RhZ2dlci1pbnB1dCcpKX0+U3VibWl0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cIlBPU19yZXN1bHRcIiBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBib3JkZXJSYWRpdXM6ICczcHgnLCBvdmVyZmxvd1g6ICdzY3JvbGwnLCAgd2hpdGVTcGFjZTogJ25vd3JhcCcsIHdpZHRoOiAnODAlJ319PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zX3RhZ2dlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/functional_components/pos_tagger.js\n");

/***/ })

})