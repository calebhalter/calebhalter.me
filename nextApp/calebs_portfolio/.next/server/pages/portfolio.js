module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/portfolio": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/portfolio.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/functional_components/express_requests.js":
/*!**************************************************************!*\
  !*** ./components/functional_components/express_requests.js ***!
  \**************************************************************/
/*! exports provided: api_query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"api_query\", function() { return api_query; });\nasync function api_query(component, method = \"GET\", data = null) {\n  var request = {\n    method: method\n  };\n\n  if (data !== null) {\n    request.headers = {\n      'Content-Type': 'application/json'\n    }, request[\"body\"] = JSON.stringify(data);\n  }\n\n  const value = await fetch(`api/components/${component}`, request);\n  return value.json();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Z1bmN0aW9uYWxfY29tcG9uZW50cy9leHByZXNzX3JlcXVlc3RzLmpzPzIyYjciXSwibmFtZXMiOlsiYXBpX3F1ZXJ5IiwiY29tcG9uZW50IiwibWV0aG9kIiwiZGF0YSIsInJlcXVlc3QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbHVlIiwiZmV0Y2giLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sZUFBZ0JBLFNBQWhCLENBQTJCQyxTQUEzQixFQUFzQ0MsTUFBTSxHQUFDLEtBQTdDLEVBQW9EQyxJQUFJLEdBQUMsSUFBekQsRUFBK0Q7QUFDcEUsTUFBSUMsT0FBTyxHQUFHO0FBQ1pGLFVBQU0sRUFBRUE7QUFESSxHQUFkOztBQUdBLE1BQUlDLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCQyxXQUFPLENBQUNDLE9BQVIsR0FBaUI7QUFDZixzQkFBZ0I7QUFERCxLQUFqQixFQUdBRCxPQUFPLENBQUMsTUFBRCxDQUFQLEdBQWtCRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUosSUFBZixDQUhsQjtBQUlEOztBQUNELFFBQU1LLEtBQUssR0FBRyxNQUFNQyxLQUFLLENBQUUsa0JBQWlCUixTQUFVLEVBQTdCLEVBQWdDRyxPQUFoQyxDQUF6QjtBQUNBLFNBQU9JLEtBQUssQ0FBQ0UsSUFBTixFQUFQO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Z1bmN0aW9uYWxfY29tcG9uZW50cy9leHByZXNzX3JlcXVlc3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uICBhcGlfcXVlcnkgKGNvbXBvbmVudCwgbWV0aG9kPVwiR0VUXCIsIGRhdGE9bnVsbCkge1xuICB2YXIgcmVxdWVzdCA9IHtcbiAgICBtZXRob2Q6IG1ldGhvZCxcbiAgfVxuICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgIHJlcXVlc3QuaGVhZGVycz0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIHJlcXVlc3RbXCJib2R5XCJdID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgfVxuICBjb25zdCB2YWx1ZSA9IGF3YWl0IGZldGNoKGBhcGkvY29tcG9uZW50cy8ke2NvbXBvbmVudH1gLCByZXF1ZXN0KTtcbiAgcmV0dXJuIHZhbHVlLmpzb24oKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/functional_components/express_requests.js\n");

/***/ }),

/***/ "./components/functional_components/pos_tagger.js":
/*!********************************************************!*\
  !*** ./components/functional_components/pos_tagger.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _express_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express_requests */ \"./components/functional_components/express_requests.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Pos_tagger extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"send_request\", async function (element) {\n      console.log(document);\n      if (element.value.length > 0) Object(_express_requests__WEBPACK_IMPORTED_MODULE_1__[\"api_query\"])('POS_Tagger', \"POST\", {\n        sentence: element.value\n      }).then(response => {\n        let resText = document.getElementById('POS_result');\n        resText.innerHTML = '';\n\n        for (let i in response) {\n          if (i != 0 && i != response.length - 1) {\n            resText.innerHTML += `\n            <div style=\"display: inline-block; border: 1px solid black; border-radius: 5px; padding: 5px; margin: 5px;\">\n              <div>${response[i][0]}</div>\n              <div>${response[i][1]}</div>\n            </div>\n            `;\n          }\n        }\n      });\n    });\n  }\n\n  componentDidMount() {\n    document.getElementById('POS_tagger-input').addEventListener(\"keydown\", function (event) {\n      if (event.key == 'Enter') {\n        document.getElementById(\"POS_tagger-button\").click();\n      }\n    });\n  }\n\n  render() {\n    return __jsx(\"div\", null, __jsx(\"p\", null, \"Enter a sentence and press enter.\"), __jsx(\"div\", {\n      className: \"d-flex justify-content-sm-start align-items-sm-center\",\n      style: {\n        textAlign: \"center\"\n      }\n    }, __jsx(\"input\", {\n      className: \"d-inline-flex flex-grow-1 align-content-start justify-content-sm-start align-items-sm-center\",\n      type: \"text\",\n      id: \"POS_tagger-input\",\n      style: {\n        marginRight: \"10px\",\n        maxWidth: \"80%\"\n      }\n    }), __jsx(\"a\", {\n      className: \"btn btn-primary\",\n      role: \"button\",\n      id: \"POS_tagger-button\",\n      onClick: () => this.send_request(document.getElementById('POS_tagger-input'))\n    }, \"Submit\")), __jsx(\"div\", {\n      id: \"POS_result\",\n      style: {\n        marginTop: '10px',\n        paddingBottom: '10px',\n        display: 'inline-block',\n        borderRadius: '3px',\n        overflowX: 'scroll',\n        whiteSpace: 'nowrap',\n        width: '80%'\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pos_tagger);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Z1bmN0aW9uYWxfY29tcG9uZW50cy9wb3NfdGFnZ2VyLmpzPzdlNTMiXSwibmFtZXMiOlsiUG9zX3RhZ2dlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJ2YWx1ZSIsImxlbmd0aCIsImFwaV9xdWVyeSIsInNlbnRlbmNlIiwidGhlbiIsInJlc3BvbnNlIiwicmVzVGV4dCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiaSIsImNvbXBvbmVudERpZE1vdW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwiY2xpY2siLCJyZW5kZXIiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5SaWdodCIsIm1heFdpZHRoIiwic2VuZF9yZXF1ZXN0IiwibWFyZ2luVG9wIiwicGFkZGluZ0JvdHRvbSIsImRpc3BsYXkiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvd1giLCJ3aGl0ZVNwYWNlIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxVQUFOLFNBQXlCQyw0Q0FBSyxDQUFDQyxTQUEvQixDQUF5QztBQUN2Q0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsMENBR0osZ0JBQWVDLE9BQWYsRUFBd0I7QUFDckNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaO0FBQ0EsVUFBSUgsT0FBTyxDQUFDSSxLQUFSLENBQWNDLE1BQWQsR0FBdUIsQ0FBM0IsRUFDRUMsbUVBQVMsQ0FBQyxZQUFELEVBQWUsTUFBZixFQUF1QjtBQUM5QkMsZ0JBQVEsRUFBRVAsT0FBTyxDQUFDSTtBQURZLE9BQXZCLENBQVQsQ0FHQ0ksSUFIRCxDQUdNQyxRQUFRLElBQUk7QUFDaEIsWUFBSUMsT0FBTyxHQUFHUCxRQUFRLENBQUNRLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBZDtBQUNBRCxlQUFPLENBQUNFLFNBQVIsR0FBb0IsRUFBcEI7O0FBQ0EsYUFBSyxJQUFJQyxDQUFULElBQWNKLFFBQWQsRUFBd0I7QUFDdEIsY0FBSUksQ0FBQyxJQUFJLENBQUwsSUFBVUEsQ0FBQyxJQUFLSixRQUFRLENBQUNKLE1BQVQsR0FBa0IsQ0FBdEMsRUFBMEM7QUFDMUNLLG1CQUFPLENBQUNFLFNBQVIsSUFBc0I7O3FCQUVYSCxRQUFRLENBQUNJLENBQUQsQ0FBUixDQUFZLENBQVosQ0FBZTtxQkFDZkosUUFBUSxDQUFDSSxDQUFELENBQVIsQ0FBWSxDQUFaLENBQWU7O2FBSDFCO0FBTUM7QUFDRjtBQUNGLE9BaEJEO0FBaUJILEtBdkJrQjtBQUVsQjs7QUF1QkRDLG1CQUFpQixHQUFHO0FBQ2xCWCxZQUFRLENBQUNRLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDSSxnQkFBNUMsQ0FBNkQsU0FBN0QsRUFBd0UsVUFBU0MsS0FBVCxFQUFnQjtBQUN0RixVQUFJQSxLQUFLLENBQUNDLEdBQU4sSUFBYSxPQUFqQixFQUEwQjtBQUN4QmQsZ0JBQVEsQ0FBQ1EsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkNPLEtBQTdDO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7O0FBRURDLFFBQU0sR0FBRztBQUNQLFdBQ0UsbUJBQ0UscURBREYsRUFFRTtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUF1RSxXQUFLLEVBQUU7QUFBQ0MsaUJBQVMsRUFBRTtBQUFaO0FBQTlFLE9BQ0U7QUFBTyxlQUFTLEVBQUMsOEZBQWpCO0FBQWdILFVBQUksRUFBQyxNQUFySDtBQUE0SCxRQUFFLEVBQUMsa0JBQS9IO0FBQWtKLFdBQUssRUFBRTtBQUFDQyxtQkFBVyxFQUFFLE1BQWQ7QUFBc0JDLGdCQUFRLEVBQUU7QUFBaEM7QUFBekosTUFERixFQUVFO0FBQUcsZUFBUyxFQUFDLGlCQUFiO0FBQStCLFVBQUksRUFBQyxRQUFwQztBQUE2QyxRQUFFLEVBQUMsbUJBQWhEO0FBQW9FLGFBQU8sRUFBRSxNQUFNLEtBQUtDLFlBQUwsQ0FBa0JwQixRQUFRLENBQUNRLGNBQVQsQ0FBd0Isa0JBQXhCLENBQWxCO0FBQW5GLGdCQUZGLENBRkYsRUFNRTtBQUFLLFFBQUUsRUFBQyxZQUFSO0FBQXFCLFdBQUssRUFBRTtBQUFDYSxpQkFBUyxFQUFFLE1BQVo7QUFBb0JDLHFCQUFhLEVBQUUsTUFBbkM7QUFBMkNDLGVBQU8sRUFBRSxjQUFwRDtBQUFvRUMsb0JBQVksRUFBRSxLQUFsRjtBQUF5RkMsaUJBQVMsRUFBRSxRQUFwRztBQUErR0Msa0JBQVUsRUFBRSxRQUEzSDtBQUFxSUMsYUFBSyxFQUFFO0FBQTVJO0FBQTVCLE1BTkYsQ0FERjtBQVVEOztBQTdDc0M7O0FBaUQxQm5DLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mdW5jdGlvbmFsX2NvbXBvbmVudHMvcG9zX3RhZ2dlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGFwaV9xdWVyeSB9IGZyb20gJy4vZXhwcmVzc19yZXF1ZXN0cydcblxuY2xhc3MgUG9zX3RhZ2dlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHNlbmRfcmVxdWVzdCA9IGFzeW5jIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudClcbiAgICBpZiAoZWxlbWVudC52YWx1ZS5sZW5ndGggPiAwKVxuICAgICAgYXBpX3F1ZXJ5KCdQT1NfVGFnZ2VyJywgXCJQT1NUXCIsIHtcbiAgICAgICAgc2VudGVuY2U6IGVsZW1lbnQudmFsdWVcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCByZXNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1BPU19yZXN1bHQnKVxuICAgICAgICByZXNUZXh0LmlubmVySFRNTCA9ICcnXG4gICAgICAgIGZvciAobGV0IGkgaW4gcmVzcG9uc2UpIHtcbiAgICAgICAgICBpZiAoaSAhPSAwICYmIGkgIT0gKHJlc3BvbnNlLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgcmVzVGV4dC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDVweDsgcGFkZGluZzogNXB4OyBtYXJnaW46IDVweDtcIj5cbiAgICAgICAgICAgICAgPGRpdj4ke3Jlc3BvbnNlW2ldWzBdfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PiR7cmVzcG9uc2VbaV1bMV19PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQT1NfdGFnZ2VyLWlucHV0JykuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBPU190YWdnZXItYnV0dG9uXCIpLmNsaWNrKClcbiAgICAgIH1cbiAgICB9KSBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+RW50ZXIgYSBzZW50ZW5jZSBhbmQgcHJlc3MgZW50ZXIuPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc20tc3RhcnQgYWxpZ24taXRlbXMtc20tY2VudGVyXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBmbGV4LWdyb3ctMSBhbGlnbi1jb250ZW50LXN0YXJ0IGp1c3RpZnktY29udGVudC1zbS1zdGFydCBhbGlnbi1pdGVtcy1zbS1jZW50ZXJcIiB0eXBlPVwidGV4dFwiIGlkPVwiUE9TX3RhZ2dlci1pbnB1dFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXhXaWR0aDogXCI4MCVcIn19PjwvaW5wdXQ+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgcm9sZT1cImJ1dHRvblwiIGlkPVwiUE9TX3RhZ2dlci1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbmRfcmVxdWVzdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUE9TX3RhZ2dlci1pbnB1dCcpKX0+U3VibWl0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cIlBPU19yZXN1bHRcIiBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBib3JkZXJSYWRpdXM6ICczcHgnLCBvdmVyZmxvd1g6ICdzY3JvbGwnLCAgd2hpdGVTcGFjZTogJ25vd3JhcCcsIHdpZHRoOiAnODAlJ319PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zX3RhZ2dlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/functional_components/pos_tagger.js\n");

/***/ }),

/***/ "./components/layout/gallery-item.js":
/*!*******************************************!*\
  !*** ./components/layout/gallery-item.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring/renderprops.cjs */ \"react-spring/renderprops.cjs\");\n/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass GalleryItem extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"handleClick\", (link = undefined, open = true) => {\n      this.props.closeAll();\n      if (open && this.state.expand) return;\n      this.setState(() => ({\n        expand: open\n      }));\n      if (link !== undefined) location.href = '#' + link;\n    });\n\n    _defineProperty(this, \"handleResize\", () => {\n      console.log('resize');\n      this.setState(state => ({\n        expand: state.expand\n      }));\n    });\n\n    _defineProperty(this, \"x_out\", () => {\n      this.setState(() => ({\n        expand: false\n      }));\n    });\n\n    this.state = {\n      expand: false,\n      width: 0,\n      height: 0\n    };\n  }\n\n  componentDidMount() {\n    this.state.width = window.innerWidth;\n    this.state.height = window.innerHeight;\n    this.state.render = true;\n    this.setState(state => ({\n      expand: false\n    }));\n    window.addEventListener(\"resize\", this.handleResize);\n  }\n\n  render() {\n    return __jsx(\"div\", null, __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_2__[\"Spring\"], {\n      config: react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_2__[\"config\"].slow,\n      toggle: this.state.expand,\n      from: {\n        opacity: 0,\n        width: 'inherit'\n      },\n      to: {\n        opacity: this.state.expand ? 1 : 0,\n        position: this.state.expand ? 'relative' : 'relative',\n        width: this.state.expand ? this.state.width : this.state.width / 2,\n        margin: this.state.expand ? '0px' : '25px',\n        height: this.state.expand ? this.state.height : 'inherit',\n        backgroundColor: this.state.expand ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.83)',\n        appDisplay: this.state.expand ? 'unset' : 'none',\n        xDisplay: this.state.expand ? 'unset' : 'none'\n      }\n    }, ({\n      opacity,\n      position,\n      margin,\n      height,\n      width,\n      appDisplay,\n      xDisplay\n    }) => __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].div, {\n      onClick: () => this.handleClick(this.props.title),\n      id: this.props.title,\n      style: {\n        width,\n        height,\n        position,\n        margin\n        /*position,*/\n\n        /*margin*/\n\n      },\n      className: \"jumbotron gallery-piece\"\n    }, __jsx(\"svg\", {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      onClick: () => this.handleClick(undefined, false),\n      width: \"32\",\n      height: \"32\",\n      fill: \"currentColor\",\n      className: \"bi bi-fullscreen-exit\",\n      viewBox: \"0 0 16 16\",\n      style: {\n        float: 'right',\n        display: xDisplay\n      }\n    }, __jsx(\"path\", {\n      d: \"M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z\"\n    })), __jsx(\"h1\", null, this.props.title), __jsx(\"p\", null, this.props.description), __jsx(\"div\", {\n      style: {\n        display: appDisplay\n      }\n    }, this.props.element))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9nYWxsZXJ5LWl0ZW0uanM/ZDc2MyJdLCJuYW1lcyI6WyJHYWxsZXJ5SXRlbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImxpbmsiLCJ1bmRlZmluZWQiLCJvcGVuIiwiY2xvc2VBbGwiLCJzdGF0ZSIsImV4cGFuZCIsInNldFN0YXRlIiwibG9jYXRpb24iLCJocmVmIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW5kZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzaXplIiwiY29uZmlnIiwic2xvdyIsIm9wYWNpdHkiLCJwb3NpdGlvbiIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImFwcERpc3BsYXkiLCJ4RGlzcGxheSIsImhhbmRsZUNsaWNrIiwidGl0bGUiLCJmbG9hdCIsImRpc3BsYXkiLCJkZXNjcmlwdGlvbiIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFdBQU4sU0FBMEJDLDRDQUFLLENBQUNDLFNBQWhDLENBQTBDO0FBQ3RDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47O0FBRGUseUNBUUwsQ0FBQ0MsSUFBSSxHQUFDQyxTQUFOLEVBQWlCQyxJQUFJLEdBQUMsSUFBdEIsS0FBK0I7QUFDekMsV0FBS0gsS0FBTCxDQUFXSSxRQUFYO0FBQ0EsVUFBSUQsSUFBSSxJQUFJLEtBQUtFLEtBQUwsQ0FBV0MsTUFBdkIsRUFDSTtBQUNKLFdBQUtDLFFBQUwsQ0FBYyxPQUFPO0FBQ2pCRCxjQUFNLEVBQUVIO0FBRFMsT0FBUCxDQUFkO0FBR0EsVUFBSUYsSUFBSSxLQUFLQyxTQUFiLEVBQ0lNLFFBQVEsQ0FBQ0MsSUFBVCxHQUFnQixNQUFN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QWlCM0IsU0FBakIsRUFBNEIsS0FBNUIsQ0FBdkQ7QUFBMkYsV0FBSyxFQUFDLElBQWpHO0FBQXNHLFlBQU0sRUFBQyxJQUE3RztBQUFrSCxVQUFJLEVBQUMsY0FBdkg7QUFBc0ksZUFBUyxFQUFDLHVCQUFoSjtBQUF3SyxhQUFPLEVBQUMsV0FBaEw7QUFBNEwsV0FBSyxFQUFFO0FBQUM2QixhQUFLLEVBQUUsT0FBUjtBQUFpQkMsZUFBTyxFQUFFSjtBQUExQjtBQUFuTSxPQUNBO0FBQU0sT0FBQyxFQUFDO0FBQVIsTUFEQSxDQVRKLEVBWUksa0JBQUssS0FBSzVCLEtBQUwsQ0FBVzhCLEtBQWhCLENBWkosRUFhSSxpQkFBSSxLQUFLOUIsS0FBTCxDQUFXaUMsV0FBZixDQWJKLEVBY0k7QUFBSyxXQUFLLEVBQUU7QUFBQ0QsZUFBTyxFQUFFTDtBQUFWO0FBQVosT0FBb0MsS0FBSzNCLEtBQUwsQ0FBV2tDLE9BQS9DLENBZEosQ0FmWixDQURKLENBREo7QUFzQ0g7O0FBbEZxQzs7QUFxRjNCdEMsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9nYWxsZXJ5LWl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aW1lcnMgfSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3ByaW5nLCBhbmltYXRlZCwgY29uZmlnLCBpbnRlcnBvbGF0ZSB9IGZyb20gJ3JlYWN0LXNwcmluZy9yZW5kZXJwcm9wcy5janMnXG5cbmNsYXNzIEdhbGxlcnlJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBleHBhbmQ6IGZhbHNlLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAgICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayA9IChsaW5rPXVuZGVmaW5lZCwgb3Blbj10cnVlKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2VBbGwoKTtcbiAgICAgICAgaWYgKG9wZW4gJiYgdGhpcy5zdGF0ZS5leHBhbmQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICAgIGV4cGFuZDogb3BlblxuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChsaW5rICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMnICsgbGlua1xuICAgIH1cblxuICAgIGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc2l6ZScpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgICAgICAgIGV4cGFuZDogc3RhdGUuZXhwYW5kXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnN0YXRlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLnN0YXRlLnJlbmRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgICAgICAgIGV4cGFuZDogZmFsc2VcbiAgICAgICAgfSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgfVxuXG4gICAgeF9vdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICAgIGV4cGFuZDogZmFsc2VcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U3ByaW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZz17Y29uZmlnLnNsb3d9XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy5zdGF0ZS5leHBhbmR9XG4gICAgICAgICAgICAgICAgICAgIGZyb209e3tvcGFjaXR5OiAwLCB3aWR0aDogJ2luaGVyaXQnfX1cbiAgICAgICAgICAgICAgICAgICAgdG89e3sgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiB0aGlzLnN0YXRlLmV4cGFuZCA/IDEgOiAwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnN0YXRlLmV4cGFuZCA/ICdyZWxhdGl2ZSc6ICdyZWxhdGl2ZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUuZXhwYW5kID8gdGhpcy5zdGF0ZS53aWR0aCA6IHRoaXMuc3RhdGUud2lkdGggLyAyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdGhpcy5zdGF0ZS5leHBhbmQgPyAnMHB4JyA6ICcyNXB4JywgXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuZXhwYW5kID8gdGhpcy5zdGF0ZS5oZWlnaHQgOiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuZXhwYW5kID8gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44MyknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwRGlzcGxheTogdGhpcy5zdGF0ZS5leHBhbmQgPyAndW5zZXQnIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeERpc3BsYXk6IHRoaXMuc3RhdGUuZXhwYW5kID8gJ3Vuc2V0JyA6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBvcGFjaXR5LCBwb3NpdGlvbiwgbWFyZ2luLCBoZWlnaHQsIHdpZHRoLCBhcHBEaXNwbGF5LCB4RGlzcGxheSB9KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2sodGhpcy5wcm9wcy50aXRsZSl9IGlkPXt0aGlzLnByb3BzLnRpdGxlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnBvc2l0aW9uLCovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKm1hcmdpbiovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBnYWxsZXJ5LXBpZWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2sodW5kZWZpbmVkLCBmYWxzZSl9IHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJiaSBiaS1mdWxsc2NyZWVuLWV4aXRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgc3R5bGU9e3tmbG9hdDogJ3JpZ2h0JywgZGlzcGxheTogeERpc3BsYXl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01LjUgMGEuNS41IDAgMCAxIC41LjV2NEExLjUgMS41IDAgMCAxIDQuNSA2aC00YS41LjUgMCAwIDEgMC0xaDRhLjUuNSAwIDAgMCAuNS0uNXYtNGEuNS41IDAgMCAxIC41LS41em01IDBhLjUuNSAwIDAgMSAuNS41djRhLjUuNSAwIDAgMCAuNS41aDRhLjUuNSAwIDAgMSAwIDFoLTRBMS41IDEuNSAwIDAgMSAxMCA0LjV2LTRhLjUuNSAwIDAgMSAuNS0uNXpNMCAxMC41YS41LjUgMCAwIDEgLjUtLjVoNEExLjUgMS41IDAgMCAxIDYgMTEuNXY0YS41LjUgMCAwIDEtMSAwdi00YS41LjUgMCAwIDAtLjUtLjVoLTRhLjUuNSAwIDAgMS0uNS0uNXptMTAgMWExLjUgMS41IDAgMCAxIDEuNS0xLjVoNGEuNS41IDAgMCAxIDAgMWgtNGEuNS41IDAgMCAwLS41LjV2NGEuNS41IDAgMCAxLTEgMHYtNHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogYXBwRGlzcGxheX19Pnt0aGlzLnByb3BzLmVsZW1lbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvU3ByaW5nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlJdGVtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/gallery-item.js\n");

/***/ }),

/***/ "./components/layout/portfolio-gallery.js":
/*!************************************************!*\
  !*** ./components/layout/portfolio-gallery.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gallery_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-item */ \"./components/layout/gallery-item.js\");\n/* harmony import */ var _functional_components_pos_tagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functional_components/pos_tagger */ \"./components/functional_components/pos_tagger.js\");\n/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring/renderprops.cjs */ \"react-spring/renderprops.cjs\");\n/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_3__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass Gallery extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"closeAll\", index => {\n      for (let i = 0; i < this.state.elements.length; i++) {\n        if (i !== index) this.state.refs[i].current.x_out();\n      }\n    });\n\n    let refs = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()];\n    let elements = [__jsx(_gallery_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      closeAll: () => this.closeAll(0),\n      ref: refs[0],\n      element: __jsx(_functional_components_pos_tagger__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null),\n      title: \"POS tagger\",\n      description: \"it'll tag the parts of speech on your stuff \"\n    }), __jsx(_gallery_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      closeAll: () => this.closeAll(1),\n      ref: refs[1],\n      element: __jsx(_functional_components_pos_tagger__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null),\n      title: \"POS tagger 2\"\n    })];\n    this.state = {\n      refs: refs,\n      elements: elements\n    };\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      id: \"elements\"\n    }, this.state.elements);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9wb3J0Zm9saW8tZ2FsbGVyeS5qcz9jYzU4Il0sIm5hbWVzIjpbIkdhbGxlcnkiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaW5kZXgiLCJpIiwic3RhdGUiLCJlbGVtZW50cyIsImxlbmd0aCIsInJlZnMiLCJjdXJyZW50IiwieF9vdXQiLCJjcmVhdGVSZWYiLCJjbG9zZUFsbCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxPQUFOLFNBQXNCQyw0Q0FBSyxDQUFDQyxhQUE1QixDQUEwQztBQUN0Q0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsc0NBZ0JQQyxLQUFELElBQVc7QUFDcEIsV0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxNQUF0QyxFQUE4Q0gsQ0FBQyxFQUEvQyxFQUFtRDtBQUNqRCxZQUFJQSxDQUFDLEtBQUtELEtBQVYsRUFDRSxLQUFLRSxLQUFMLENBQVdHLElBQVgsQ0FBZ0JKLENBQWhCLEVBQW1CSyxPQUFuQixDQUEyQkMsS0FBM0I7QUFDSDtBQUNGLEtBckJrQjs7QUFFakIsUUFBSUYsSUFBSSxHQUFHLENBQ1RULDRDQUFLLENBQUNZLFNBQU4sRUFEUyxFQUVUWiw0Q0FBSyxDQUFDWSxTQUFOLEVBRlMsQ0FBWDtBQUlBLFFBQUlMLFFBQVEsR0FBRyxDQUNiLE1BQUMscURBQUQ7QUFBYSxjQUFRLEVBQUUsTUFBTSxLQUFLTSxRQUFMLENBQWMsQ0FBZCxDQUE3QjtBQUErQyxTQUFHLEVBQUVKLElBQUksQ0FBQyxDQUFELENBQXhEO0FBQTZELGFBQU8sRUFBRSxNQUFDLHlFQUFELE9BQXRFO0FBQXNGLFdBQUssRUFBQyxZQUE1RjtBQUF5RyxpQkFBVyxFQUFDO0FBQXJILE1BRGEsRUFFYixNQUFDLHFEQUFEO0FBQWEsY0FBUSxFQUFFLE1BQU0sS0FBS0ksUUFBTCxDQUFjLENBQWQsQ0FBN0I7QUFBK0MsU0FBRyxFQUFFSixJQUFJLENBQUMsQ0FBRCxDQUF4RDtBQUE2RCxhQUFPLEVBQUUsTUFBQyx5RUFBRCxPQUF0RTtBQUFzRixXQUFLLEVBQUM7QUFBNUYsTUFGYSxDQUFmO0FBSUEsU0FBS0gsS0FBTCxHQUFhO0FBQ1hHLFVBQUksRUFBRUEsSUFESztBQUVYRixjQUFRLEVBQUVBO0FBRkMsS0FBYjtBQUlEOztBQVNETyxRQUFNLEdBQUc7QUFDUCxXQUNFO0FBQUssUUFBRSxFQUFDO0FBQVIsT0FDRyxLQUFLUixLQUFMLENBQVdDLFFBRGQsQ0FERjtBQUtEOztBQTlCcUM7O0FBaUMzQlIsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9wb3J0Zm9saW8tZ2FsbGVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHYWxsZXJ5SXRlbSBmcm9tICcuL2dhbGxlcnktaXRlbSdcbmltcG9ydCBQb3NfdGFnZ2VyIGZyb20gJy4uL2Z1bmN0aW9uYWxfY29tcG9uZW50cy9wb3NfdGFnZ2VyJ1xuXG5pbXBvcnQgeyBjb25maWcsIFRyYWlsIH0gZnJvbSAncmVhY3Qtc3ByaW5nL3JlbmRlcnByb3BzLmNqcydcblxuY2xhc3MgR2FsbGVyeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICBsZXQgcmVmcyA9IFtcbiAgICAgICAgUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgICBdO1xuICAgICAgbGV0IGVsZW1lbnRzID0gW1xuICAgICAgICA8R2FsbGVyeUl0ZW0gY2xvc2VBbGw9eygpID0+IHRoaXMuY2xvc2VBbGwoMCl9IHJlZj17cmVmc1swXX0gZWxlbWVudD17PFBvc190YWdnZXIgLz59IHRpdGxlPSdQT1MgdGFnZ2VyJyBkZXNjcmlwdGlvbj1cIml0J2xsIHRhZyB0aGUgcGFydHMgb2Ygc3BlZWNoIG9uIHlvdXIgc3R1ZmYgXCIgLz4sXG4gICAgICAgIDxHYWxsZXJ5SXRlbSBjbG9zZUFsbD17KCkgPT4gdGhpcy5jbG9zZUFsbCgxKX0gcmVmPXtyZWZzWzFdfSBlbGVtZW50PXs8UG9zX3RhZ2dlciAvPn0gdGl0bGU9J1BPUyB0YWdnZXIgMicvPlxuICAgICAgXVxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgcmVmczogcmVmcyxcbiAgICAgICAgZWxlbWVudHM6IGVsZW1lbnRzXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VBbGwgPSAoaW5kZXgpID0+IHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuc3RhdGUuZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KVxuICAgICAgICAgIHRoaXMuc3RhdGUucmVmc1tpXS5jdXJyZW50Lnhfb3V0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPSdlbGVtZW50cyc+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZWxlbWVudHN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/portfolio-gallery.js\n");

/***/ }),

/***/ "./components/layout/topnav.js":
/*!*************************************!*\
  !*** ./components/layout/topnav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Topnav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nclass Topnav extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    const topnav_items = [['Home', 'index'], ['Portfolio', 'portfolio'], ['Contact', '#']];\n    this.state = {};\n    this.state.topnav_list = [];\n    topnav_items.forEach(item => {\n      this.state.topnav_list.push(__jsx(\"li\", {\n        className: \"nav-item\",\n        key: item[1]\n      }, __jsx(\"a\", {\n        className: `nav-link ${this.props.currentPage === item[0] ? \"active\" : \"\"}`,\n        href: item[1]\n      }, item[0])));\n    });\n  }\n\n  render() {\n    return __jsx(\"nav\", {\n      className: \"navbar navbar-light navbar-expand-md navigation-clean\"\n    }, __jsx(\"div\", {\n      className: \"container\"\n    }, __jsx(\"a\", {\n      className: \"navbar-brand\",\n      href: \"#\"\n    }, \"CalebHalter.me\"), __jsx(\"button\", {\n      \"data-toggle\": \"collapse\",\n      className: \"navbar-toggler\",\n      \"data-target\": \"#navcol-1\"\n    }, __jsx(\"span\", {\n      className: \"sr-only\"\n    }, \"Toggle navigation\"), __jsx(\"span\", {\n      className: \"navbar-toggler-icon\"\n    })), __jsx(\"div\", {\n      className: \"collapse navbar-collapse\",\n      id: \"navcol-1\"\n    }, __jsx(\"ul\", {\n      className: \"navbar-nav ml-auto\"\n    }, this.state.topnav_list))));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC90b3BuYXYuanM/NmU2OCJdLCJuYW1lcyI6WyJUb3BuYXYiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ0b3BuYXZfaXRlbXMiLCJzdGF0ZSIsInRvcG5hdl9saXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiY3VycmVudFBhZ2UiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxNQUFNQSxNQUFOLFNBQXFCQyw0Q0FBSyxDQUFDQyxTQUEzQixDQUFxQztBQUNoREMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOO0FBQ0EsVUFBTUMsWUFBWSxHQUFHLENBQ2pCLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FEaUIsRUFFakIsQ0FBQyxXQUFELEVBQWMsV0FBZCxDQUZpQixFQUdqQixDQUFDLFNBQUQsRUFBWSxHQUFaLENBSGlCLENBQXJCO0FBS0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQSxLQUFMLENBQVdDLFdBQVgsR0FBeUIsRUFBekI7QUFDQUYsZ0JBQVksQ0FBQ0csT0FBYixDQUFxQkMsSUFBSSxJQUFJO0FBQ3pCLFdBQUtILEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkcsSUFBdkIsQ0FDQTtBQUFJLGlCQUFTLEVBQUMsVUFBZDtBQUF5QixXQUFHLEVBQUVELElBQUksQ0FBQyxDQUFEO0FBQWxDLFNBQ0k7QUFBRyxpQkFBUyxFQUFHLFlBQVcsS0FBS0wsS0FBTCxDQUFXTyxXQUFYLEtBQTJCRixJQUFJLENBQUMsQ0FBRCxDQUEvQixHQUFxQyxRQUFyQyxHQUFnRCxFQUFHLEVBQTdFO0FBQWdGLFlBQUksRUFBRUEsSUFBSSxDQUFDLENBQUQ7QUFBMUYsU0FDS0EsSUFBSSxDQUFDLENBQUQsQ0FEVCxDQURKLENBREE7QUFNSCxLQVBEO0FBUUg7O0FBQ0RHLFFBQU0sR0FBRztBQUNMLFdBQ0k7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSTtBQUFHLGVBQVMsRUFBQyxjQUFiO0FBQTRCLFVBQUksRUFBQztBQUFqQyx3QkFESixFQUVJO0FBQVEscUJBQVksVUFBcEI7QUFBK0IsZUFBUyxFQUFDLGdCQUF6QztBQUEwRCxxQkFBWTtBQUF0RSxPQUNJO0FBQU0sZUFBUyxFQUFDO0FBQWhCLDJCQURKLEVBRUk7QUFBTSxlQUFTLEVBQUM7QUFBaEIsTUFGSixDQUZKLEVBTUk7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBMEMsUUFBRSxFQUFDO0FBQTdDLE9BQ0k7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUNLLEtBQUtOLEtBQUwsQ0FBV0MsV0FEaEIsQ0FESixDQU5KLENBREosQ0FESjtBQWdCSDs7QUFwQytDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvdG9wbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BuYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBjb25zdCB0b3BuYXZfaXRlbXMgPSBbXG4gICAgICAgICAgICBbJ0hvbWUnLCAnaW5kZXgnXSwgXG4gICAgICAgICAgICBbJ1BvcnRmb2xpbycsICdwb3J0Zm9saW8nXSwgXG4gICAgICAgICAgICBbJ0NvbnRhY3QnLCAnIyddXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgICAgICB0aGlzLnN0YXRlLnRvcG5hdl9saXN0ID0gW107XG4gICAgICAgIHRvcG5hdl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3BuYXZfbGlzdC5wdXNoKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIga2V5PXtpdGVtWzFdfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuYXYtbGluayAke3RoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IGl0ZW1bMF0gPyBcImFjdGl2ZVwiIDogXCJcIn1gfSBocmVmPXtpdGVtWzFdfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1bMF19XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT4pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodCBuYXZiYXItZXhwYW5kLW1kIG5hdmlnYXRpb24tY2xlYW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPScjJz5DYWxlYkhhbHRlci5tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiBkYXRhLXRhcmdldD1cIiNuYXZjb2wtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZjb2wtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvcG5hdl9saXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/topnav.js\n");

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_script_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-script-tag */ \"react-script-tag\");\n/* harmony import */ var react_script_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_script_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_portfolio_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/portfolio-gallery */ \"./components/layout/portfolio-gallery.js\");\n/* harmony import */ var _components_layout_topnav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/topnav */ \"./components/layout/topnav.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\n\n\n\n/*const { JSDOM } = require( \"jsdom\" );\nconst { window } = new JSDOM( \"\" );\nconst $ = require( \"jquery\" )( window );*/\n\n\n\n\nconst Circles = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/visuals/circles */ \"./components/visuals/circles.js\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/visuals/circles */ \"./components/visuals/circles.js\")],\n    modules: ['../components/visuals/circles']\n  }\n});\nlet key = null;\nfunction Home() {\n  return __jsx(\"div\", {\n    style: {}\n  }, __jsx(_components_layout_topnav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    currentPage: \"Portfolio\"\n  }), __jsx(\"center\", null, __jsx(_components_layout_portfolio_gallery__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), __jsx(Circles, {\n    display: \"fixed\",\n    HD: \"true\"\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3J0Zm9saW8uanM/NzgwOSJdLCJuYW1lcyI6WyJDaXJjbGVzIiwiZHluYW1pYyIsInNzciIsImtleSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLG1EQUFPLENBQ25CLE1BQU0scUpBRGEsRUFFbkI7QUFDRUMsS0FBRyxFQUFFLEtBRFA7QUFBQTtBQUFBLHdDQURhLHNFQUNiO0FBQUEsY0FEYSwrQkFDYjtBQUFBO0FBQUEsQ0FGbUIsQ0FBdkI7QUFPQSxJQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0IsU0FDRTtBQUFLLFNBQUssRUFBRTtBQUFaLEtBQ0UsTUFBQyxpRUFBRDtBQUFRLGVBQVcsRUFBQztBQUFwQixJQURGLEVBRUUsc0JBQ0UsTUFBQyw0RUFBRCxPQURGLEVBRUUsTUFBQyxPQUFEO0FBQVMsV0FBTyxFQUFDLE9BQWpCO0FBQXlCLE1BQUUsRUFBQztBQUE1QixJQUZGLENBRkYsQ0FERjtBQVNEIiwiZmlsZSI6Ii4vcGFnZXMvcG9ydGZvbGlvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFNjcmlwdFRhZyBmcm9tICdyZWFjdC1zY3JpcHQtdGFnJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuLypjb25zdCB7IEpTRE9NIH0gPSByZXF1aXJlKCBcImpzZG9tXCIgKTtcbmNvbnN0IHsgd2luZG93IH0gPSBuZXcgSlNET00oIFwiXCIgKTtcbmNvbnN0ICQgPSByZXF1aXJlKCBcImpxdWVyeVwiICkoIHdpbmRvdyApOyovXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9wb3J0Zm9saW8tZ2FsbGVyeSdcbmltcG9ydCBUb3BuYXYgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvdG9wbmF2J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDaXJjbGVzID0gZHluYW1pYyhcbiAgICAoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvdmlzdWFscy9jaXJjbGVzJyksXG4gICAge1xuICAgICAgc3NyOiBmYWxzZVxuICAgIH1cbilcblxubGV0IGtleSA9IG51bGxcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICA8VG9wbmF2IGN1cnJlbnRQYWdlPSdQb3J0Zm9saW8nPjwvVG9wbmF2PlxuICAgICAgPGNlbnRlcj5cbiAgICAgICAgPEdhbGxlcnkgLz5cbiAgICAgICAgPENpcmNsZXMgZGlzcGxheT0nZml4ZWQnIEhEPSd0cnVlJy8+XG4gICAgICA8L2NlbnRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzRmYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jquery\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIj84ZjhhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpxdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jquery\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "p5":
/*!*********************!*\
  !*** external "p5" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"p5\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwNVwiP2VmMjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwNVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///p5\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-script-tag":
/*!***********************************!*\
  !*** external "react-script-tag" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-script-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JpcHQtdGFnXCI/MzJhMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1zY3JpcHQtdGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2NyaXB0LXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-script-tag\n");

/***/ }),

/***/ "react-spring/renderprops.cjs":
/*!***********************************************!*\
  !*** external "react-spring/renderprops.cjs" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-spring/renderprops.cjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmcvcmVuZGVycHJvcHMuY2pzXCI/NzhmOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1zcHJpbmcvcmVuZGVycHJvcHMuY2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3ByaW5nL3JlbmRlcnByb3BzLmNqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-spring/renderprops.cjs\n");

/***/ })

/******/ });