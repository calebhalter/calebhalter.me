module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/about": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout/topnav.js":
/*!*************************************!*\
  !*** ./components/layout/topnav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Topnav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass Topnav extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    const topnav_items = [['Home', 'index'], ['Portfolio', 'portfolio'],\n    /*['Interactive Code', 'interactive_code'], */\n    ['About', 'about']\n    /*['Contact', 'contact'],*/\n    ];\n    this.state = {};\n    this.state.topnav_list = [];\n    topnav_items.forEach(item => {\n      this.state.topnav_list.push(__jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n        className: `nav-link ${this.props.currentPage === item[0] ? \"active\" : \"\"}`,\n        href: item[1]\n      }, item[0]));\n    });\n  }\n\n  render() {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n      variant: \"dark\",\n      collapseOnSelect: true,\n      expand: \"lg\",\n      className: \"navbar navbar-dark navbar-expand-md navigation-clean\",\n      style: {\n        zIndex: '2'\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Brand, {\n      href: \"/\"\n    }, \"CalebHalter.me\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Toggle, {\n      \"aria-controls\": \"responsive-navbar-nav\"\n    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Collapse, {\n      className: \"collapse navbar-collapse\",\n      id: \"navcol-1\"\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n      className: \"navbar-nav ml-auto\"\n    }, this.state.topnav_list)));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC90b3BuYXYuanM/NmU2OCJdLCJuYW1lcyI6WyJUb3BuYXYiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ0b3BuYXZfaXRlbXMiLCJzdGF0ZSIsInRvcG5hdl9saXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiY3VycmVudFBhZ2UiLCJyZW5kZXIiLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsTUFBTUEsTUFBTixTQUFxQkMsNENBQUssQ0FBQ0MsU0FBM0IsQ0FBcUM7QUFDaERDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjtBQUNBLFVBQU1DLFlBQVksR0FBRyxDQUNqQixDQUFDLE1BQUQsRUFBUyxPQUFULENBRGlCLEVBRWpCLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FGaUI7QUFHakI7QUFDQSxLQUFDLE9BQUQsRUFBVSxPQUFWO0FBQ0E7QUFMaUIsS0FBckI7QUFPQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtBLEtBQUwsQ0FBV0MsV0FBWCxHQUF5QixFQUF6QjtBQUNBRixnQkFBWSxDQUFDRyxPQUFiLENBQXFCQyxJQUFJLElBQUk7QUFDekIsV0FBS0gsS0FBTCxDQUFXQyxXQUFYLENBQXVCRyxJQUF2QixDQUNJLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsaUJBQVMsRUFBRyxZQUFXLEtBQUtOLEtBQUwsQ0FBV08sV0FBWCxLQUEyQkYsSUFBSSxDQUFDLENBQUQsQ0FBL0IsR0FBcUMsUUFBckMsR0FBZ0QsRUFBRyxFQUFwRjtBQUF1RixZQUFJLEVBQUVBLElBQUksQ0FBQyxDQUFEO0FBQWpHLFNBQ0tBLElBQUksQ0FBQyxDQUFELENBRFQsQ0FESjtBQUtILEtBTkQ7QUFPSDs7QUFDREcsUUFBTSxHQUFHO0FBQ0wsV0FDSSxNQUFDLHNEQUFEO0FBQVEsYUFBTyxFQUFDLE1BQWhCO0FBQXVCLHNCQUFnQixNQUF2QztBQUF3QyxZQUFNLEVBQUMsSUFBL0M7QUFBb0QsZUFBUyxFQUFDLHNEQUE5RDtBQUFxSCxXQUFLLEVBQUU7QUFBQ0MsY0FBTSxFQUFFO0FBQVQ7QUFBNUgsT0FDSSxNQUFDLHNEQUFELENBQVEsS0FBUjtBQUFjLFVBQUksRUFBQztBQUFuQix3QkFESixFQUVJLE1BQUMsc0RBQUQsQ0FBUSxNQUFSO0FBQWUsdUJBQWM7QUFBN0IsTUFGSixFQUdJLE1BQUMsc0RBQUQsQ0FBUSxRQUFSO0FBQWlCLGVBQVMsRUFBQywwQkFBM0I7QUFBc0QsUUFBRSxFQUFDO0FBQXpELE9BQ0ksTUFBQyxtREFBRDtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0ssS0FBS1AsS0FBTCxDQUFXQyxXQURoQixDQURKLENBSEosQ0FESjtBQVdIOztBQWhDK0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC90b3BuYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgY29uc3QgdG9wbmF2X2l0ZW1zID0gW1xuICAgICAgICAgICAgWydIb21lJywgJ2luZGV4J10sIFxuICAgICAgICAgICAgWydQb3J0Zm9saW8nLCAncG9ydGZvbGlvJ10sIFxuICAgICAgICAgICAgLypbJ0ludGVyYWN0aXZlIENvZGUnLCAnaW50ZXJhY3RpdmVfY29kZSddLCAqL1xuICAgICAgICAgICAgWydBYm91dCcsICdhYm91dCddLFxuICAgICAgICAgICAgLypbJ0NvbnRhY3QnLCAnY29udGFjdCddLCovXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgICAgICB0aGlzLnN0YXRlLnRvcG5hdl9saXN0ID0gW107XG4gICAgICAgIHRvcG5hdl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3BuYXZfbGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9e2BuYXYtbGluayAke3RoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IGl0ZW1bMF0gPyBcImFjdGl2ZVwiIDogXCJcIn1gfSBocmVmPXtpdGVtWzFdfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1bMF19XG4gICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5hdmJhciB2YXJpYW50PVwiZGFya1wiIGNvbGxhcHNlT25TZWxlY3QgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRhcmsgbmF2YmFyLWV4cGFuZC1tZCBuYXZpZ2F0aW9uLWNsZWFuXCIgc3R5bGU9e3t6SW5kZXg6ICcyJ319PlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj0nLyc+Q2FsZWJIYWx0ZXIubWU8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2Y29sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvcG5hdl9saXN0fVxuICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICApXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/topnav.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_layout_topnav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout/topnav */ \"./components/layout/topnav.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nconst Galaxy = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/visuals/galaxy */ \"./components/visuals/galaxy.js\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/visuals/galaxy */ \"./components/visuals/galaxy.js\")],\n    modules: ['../components/visuals/galaxy']\n  }\n});\n\nfunction About() {\n  return __jsx(\"div\", {\n    style: {\n      backgroundColor: 'black'\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(\"title\", null, \"CalebHalter.me\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/api/images/favicon.png\"\n  })), __jsx(_components_layout_topnav__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    currentPage: \"About\"\n  }), __jsx(\"section\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, __jsx(Galaxy, null), __jsx(\"div\", {\n    className: \"outer\",\n    id: \"portfolio-main\"\n  }, __jsx(\"div\", {\n    className: \"middle\",\n    style: {\n      padding: '0px 30px 0px 30px'\n    }\n  }, __jsx(\"center\", null, __jsx(\"div\", {\n    className: \"inner row\"\n  }, __jsx(\"div\", {\n    className: \"col-md-12\"\n  }, __jsx(\"h1\", {\n    className: \"page-text\",\n    style: {\n      marginBottom: '50px'\n    }\n  }, \"About me\"), __jsx(\"p\", {\n    style: {\n      color: 'white',\n      fontSize: 'X-large'\n    }\n  }, \"I am a full-stack developer with a passion for beautiful and efficient webapps. I have a preference for backend development but I enjoy working on frontend too when the opportunity comes. \", __jsx(\"hr\", {\n    style: {\n      color: 'white',\n      border: '1px solid'\n    }\n  }), \"My specialties are Python, C++, and JavaScript, but I love to learn new technologies.\"), __jsx(\"hr\", null), __jsx(\"h3\", {\n    className: \"page-text\",\n    style: {\n      marginBottom: '50px'\n    }\n  }, \"You can contact me at \", __jsx(\"a\", {\n    style: {\n      color: 'rgb(255, 41, 255)'\n    },\n    href: \"mailto: CalebHalter@my.unt.edu\"\n  }, \"CalebHalter@my.unt.edu\")))))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkdhbGF4eSIsImR5bmFtaWMiLCJzc3IiLCJBYm91dCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImZvbnRTaXplIiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0MsbURBQU8sQ0FDcEIsTUFBTSxtSkFEYyxFQUVwQjtBQUNFQyxLQUFHLEVBQUUsS0FEUDtBQUFBO0FBQUEsd0NBRGEsb0VBQ2I7QUFBQSxjQURhLDhCQUNiO0FBQUE7QUFBQSxDQUZvQixDQUF0Qjs7QUFPQSxTQUFTQyxLQUFULEdBQWlCO0FBQ2YsU0FDRTtBQUFLLFNBQUssRUFBRTtBQUFDQyxxQkFBZSxFQUFFO0FBQWxCO0FBQVosS0FDRSxNQUFDLGdEQUFELFFBQ0Usc0NBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQztBQUF0QixJQUZGLENBREYsRUFLRSxNQUFDLGlFQUFEO0FBQVEsZUFBVyxFQUFDO0FBQXBCLElBTEYsRUFNRTtBQUFTLFNBQUssRUFBRTtBQUFDQyxlQUFTLEVBQUU7QUFBWjtBQUFoQixLQUNGLE1BQUMsTUFBRCxPQURFLEVBRUU7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUF1QixNQUFFLEVBQUM7QUFBMUIsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQXlCLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVjtBQUFoQyxLQUNFLHNCQUNBO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUEwQixTQUFLLEVBQUU7QUFBQ0Msa0JBQVksRUFBRTtBQUFmO0FBQWpDLGdCQURGLEVBR0U7QUFBRyxTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFFLE9BQVI7QUFBaUJDLGNBQVEsRUFBRTtBQUEzQjtBQUFWLHFNQUd5QjtBQUFJLFNBQUssRUFBRTtBQUFDRCxXQUFLLEVBQUUsT0FBUjtBQUFpQkUsWUFBTSxFQUFFO0FBQXpCO0FBQVgsSUFIekIsMEZBSEYsRUFTRSxpQkFURixFQVVFO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBMEIsU0FBSyxFQUFFO0FBQUNILGtCQUFZLEVBQUU7QUFBZjtBQUFqQywrQkFBK0U7QUFBRyxTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFFO0FBQVIsS0FBVjtBQUF3QyxRQUFJLEVBQUM7QUFBN0MsOEJBQS9FLENBVkYsQ0FESixDQURBLENBREYsQ0FERixDQUZGLENBTkYsQ0FERjtBQXlDRDs7QUFFY0wsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb3BuYXYgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvdG9wbmF2J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBHYWxheHkgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvdmlzdWFscy9nYWxheHknKSxcbiAge1xuICAgIHNzcjogZmFsc2VcbiAgfVxuKTtcblxuZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ2JsYWNrJywgfX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNhbGViSGFsdGVyLm1lPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvYXBpL2ltYWdlcy9mYXZpY29uLnBuZ1wiIC8+ICAgICAgXG4gICAgICA8L0hlYWQ+XG4gICAgICA8VG9wbmF2IGN1cnJlbnRQYWdlPSdBYm91dCc+PC9Ub3BuYXY+XG4gICAgICA8c2VjdGlvbiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgIDxHYWxheHkgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlclwiIGlkPSdwb3J0Zm9saW8tbWFpbic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGVcIiAgc3R5bGU9e3twYWRkaW5nOiAnMHB4IDMwcHggMHB4IDMwcHgnfX0+XG4gICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lciByb3dcIiA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0xMic+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdwYWdlLXRleHQnIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNTBweCd9fT5BYm91dCBtZTwvaDE+XG4gICAgICAgICAgICAgICAgICB7Lyo8aDYgY2xhc3NOYW1lPSdwYWdlLXRleHQnPlRha2UgYSBsb29rIGF0IHNvbWUgb2YgbXkgd2ViIGRldmVsb3BtZW50IHByb2plY3RzPC9oNj4qL31cbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnWC1sYXJnZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgSSBhbSBhIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyIHdpdGggYSBwYXNzaW9uIGZvciBiZWF1dGlmdWwgYW5kIGVmZmljaWVudCB3ZWJhcHBzLiBcbiAgICAgICAgICAgICAgICAgICAgSSBoYXZlIGEgcHJlZmVyZW5jZSBmb3IgYmFja2VuZCBkZXZlbG9wbWVudCBidXQgSSBlbmpveSB3b3JraW5nIG9uIGZyb250ZW5kIHRvbyB3aGVuXG4gICAgICAgICAgICAgICAgICAgIHRoZSBvcHBvcnR1bml0eSBjb21lcy4gPGhyIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJzFweCBzb2xpZCd9fT48L2hyPlxuICAgICAgICAgICAgICAgICAgICBNeSBzcGVjaWFsdGllcyBhcmUgUHl0aG9uLCBDKyssIGFuZCBKYXZhU2NyaXB0LCBidXQgSSBsb3ZlIHRvIGxlYXJuIG5ldyB0ZWNobm9sb2dpZXMuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3BhZ2UtdGV4dCcgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc1MHB4J319PllvdSBjYW4gY29udGFjdCBtZSBhdCA8YSBzdHlsZT17e2NvbG9yOiAncmdiKDI1NSwgNDEsIDI1NSknfX0gaHJlZj0nbWFpbHRvOiBDYWxlYkhhbHRlckBteS51bnQuZWR1Jz5DYWxlYkhhbHRlckBteS51bnQuZWR1PC9hPjwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIHN0eWxlPXt7dGV4dEFsaWduOiAnbGVmdCcsIGNvbG9yOiAnd2hpdGUnLCBmb250V2VpZ2h0OiAnbm9ybWFsJ319PlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ncGFnZS10ZXh0JyBzdHlsZT17e21hcmdpbkJvdHRvbTogJzUwcHgnfX0+Q29udGFjdCBtZTwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3tmb250V2VpZ2h0OiAnbm9ybWFsJ319PllvdXIgTmFtZTwvaDM+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0gdHlwZT0ndGV4dCc+PC9pbnB1dD48aHI+PC9ocj5cbiAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdub3JtYWwnfX0+WW91ciBlbWFpbDwvaDM+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0gdHlwZT0ndGV4dCc+PC9pbnB1dD48aHI+PC9ocj5cbiAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdub3JtYWwnfX0+TWVzc2FnZTwvaDM+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcyNXZoJ319PjwvdGV4dGFyZWE+PGhyPjwvaHI+XG4gICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

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

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ })

/******/ });