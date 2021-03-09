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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Topnav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass Topnav extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    const topnav_items = [['Home', 'index'], ['Portfolio', 'portfolio'],\n    /*['Interactive Code', 'interactive_code'], */\n    ['About', 'about'], ['Contact', 'contact']];\n    this.state = {};\n    this.state.topnav_list = [];\n    topnav_items.forEach(item => {\n      this.state.topnav_list.push(__jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n        className: `nav-link ${this.props.currentPage === item[0] ? \"active\" : \"\"}`,\n        href: item[1]\n      }, item[0]));\n    });\n  }\n\n  render() {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n      variant: \"dark\",\n      collapseOnSelect: true,\n      expand: \"lg\",\n      className: \"navbar navbar-dark navbar-expand-md navigation-clean\",\n      style: {\n        zIndex: '2'\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Brand, {\n      href: \"/\"\n    }, \"CalebHalter.me\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Toggle, {\n      \"aria-controls\": \"responsive-navbar-nav\"\n    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Collapse, {\n      className: \"collapse navbar-collapse\",\n      id: \"navcol-1\"\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n      className: \"navbar-nav ml-auto\"\n    }, this.state.topnav_list)));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC90b3BuYXYuanM/NmU2OCJdLCJuYW1lcyI6WyJUb3BuYXYiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ0b3BuYXZfaXRlbXMiLCJzdGF0ZSIsInRvcG5hdl9saXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiY3VycmVudFBhZ2UiLCJyZW5kZXIiLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsTUFBTUEsTUFBTixTQUFxQkMsNENBQUssQ0FBQ0MsU0FBM0IsQ0FBcUM7QUFDaERDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjtBQUNBLFVBQU1DLFlBQVksR0FBRyxDQUNqQixDQUFDLE1BQUQsRUFBUyxPQUFULENBRGlCLEVBRWpCLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FGaUI7QUFHakI7QUFDQSxLQUFDLE9BQUQsRUFBVSxPQUFWLENBSmlCLEVBS2pCLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FMaUIsQ0FBckI7QUFPQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtBLEtBQUwsQ0FBV0MsV0FBWCxHQUF5QixFQUF6QjtBQUNBRixnQkFBWSxDQUFDRyxPQUFiLENBQXFCQyxJQUFJLElBQUk7QUFDekIsV0FBS0gsS0FBTCxDQUFXQyxXQUFYLENBQXVCRyxJQUF2QixDQUNJLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsaUJBQVMsRUFBRyxZQUFXLEtBQUtOLEtBQUwsQ0FBV08sV0FBWCxLQUEyQkYsSUFBSSxDQUFDLENBQUQsQ0FBL0IsR0FBcUMsUUFBckMsR0FBZ0QsRUFBRyxFQUFwRjtBQUF1RixZQUFJLEVBQUVBLElBQUksQ0FBQyxDQUFEO0FBQWpHLFNBQ0tBLElBQUksQ0FBQyxDQUFELENBRFQsQ0FESjtBQUtILEtBTkQ7QUFPSDs7QUFDREcsUUFBTSxHQUFHO0FBQ0wsV0FDSSxNQUFDLHNEQUFEO0FBQVEsYUFBTyxFQUFDLE1BQWhCO0FBQXVCLHNCQUFnQixNQUF2QztBQUF3QyxZQUFNLEVBQUMsSUFBL0M7QUFBb0QsZUFBUyxFQUFDLHNEQUE5RDtBQUFxSCxXQUFLLEVBQUU7QUFBQ0MsY0FBTSxFQUFFO0FBQVQ7QUFBNUgsT0FDSSxNQUFDLHNEQUFELENBQVEsS0FBUjtBQUFjLFVBQUksRUFBQztBQUFuQix3QkFESixFQUVJLE1BQUMsc0RBQUQsQ0FBUSxNQUFSO0FBQWUsdUJBQWM7QUFBN0IsTUFGSixFQUdJLE1BQUMsc0RBQUQsQ0FBUSxRQUFSO0FBQWlCLGVBQVMsRUFBQywwQkFBM0I7QUFBc0QsUUFBRSxFQUFDO0FBQXpELE9BQ0ksTUFBQyxtREFBRDtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0ssS0FBS1AsS0FBTCxDQUFXQyxXQURoQixDQURKLENBSEosQ0FESjtBQVdIOztBQWhDK0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC90b3BuYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgY29uc3QgdG9wbmF2X2l0ZW1zID0gW1xuICAgICAgICAgICAgWydIb21lJywgJ2luZGV4J10sIFxuICAgICAgICAgICAgWydQb3J0Zm9saW8nLCAncG9ydGZvbGlvJ10sIFxuICAgICAgICAgICAgLypbJ0ludGVyYWN0aXZlIENvZGUnLCAnaW50ZXJhY3RpdmVfY29kZSddLCAqL1xuICAgICAgICAgICAgWydBYm91dCcsICdhYm91dCddLFxuICAgICAgICAgICAgWydDb250YWN0JywgJ2NvbnRhY3QnXSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XG4gICAgICAgIHRoaXMuc3RhdGUudG9wbmF2X2xpc3QgPSBbXTtcbiAgICAgICAgdG9wbmF2X2l0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvcG5hdl9saXN0LnB1c2goXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT17YG5hdi1saW5rICR7dGhpcy5wcm9wcy5jdXJyZW50UGFnZSA9PT0gaXRlbVswXSA/IFwiYWN0aXZlXCIgOiBcIlwifWB9IGhyZWY9e2l0ZW1bMV19PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbVswXX1cbiAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TmF2YmFyIHZhcmlhbnQ9XCJkYXJrXCIgY29sbGFwc2VPblNlbGVjdCBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGFyayBuYXZiYXItZXhwYW5kLW1kIG5hdmlnYXRpb24tY2xlYW5cIiBzdHlsZT17e3pJbmRleDogJzInfX0+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPScvJz5DYWxlYkhhbHRlci5tZTwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZjb2wtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudG9wbmF2X2xpc3R9XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIClcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/topnav.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_layout_topnav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout/topnav */ \"./components/layout/topnav.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nconst Galaxy = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/visuals/galaxy */ \"./components/visuals/galaxy.js\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/visuals/galaxy */ \"./components/visuals/galaxy.js\")],\n    modules: ['../components/visuals/galaxy']\n  }\n});\n\nfunction About() {\n  return __jsx(\"div\", {\n    style: {\n      backgroundColor: 'black'\n    }\n  }, __jsx(_components_layout_topnav__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    currentPage: \"About\"\n  }), __jsx(\"section\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, __jsx(Galaxy, null), __jsx(\"div\", {\n    className: \"outer\",\n    id: \"portfolio-main\"\n  }, __jsx(\"div\", {\n    className: \"middle\",\n    style: {\n      padding: '0px 30px 0px 30px'\n    }\n  }, __jsx(\"div\", {\n    className: \"inner row\"\n  }, __jsx(\"div\", {\n    className: \"col-md-6\"\n  }, __jsx(\"h1\", {\n    className: \"page-text\",\n    style: {\n      marginBottom: '50px'\n    }\n  }, \"Caleb Halter\"), __jsx(\"p\", {\n    style: {\n      color: 'white',\n      fontSize: 'X-large'\n    }\n  }, \"I am a full-stack developer with a passion for beautiful and efficient webapps. I have a preference for backend development but I enjoy working on frontend too when the opportunity comes. \", __jsx(\"hr\", {\n    style: {\n      color: 'white',\n      border: '1px solid'\n    }\n  }), \"My specialties are Python, C++, and JavaScript, but I love to learn new technologies.\")), __jsx(\"div\", {\n    className: \"col-md-6\",\n    style: {\n      display: 'flex',\n      alignContent: 'center'\n    }\n  }, __jsx(\"img\", {\n    style: {\n      objectFit: 'cover'\n    },\n    className: \"img-fluid\",\n    src: \"api/components/images/caleb-1.png\"\n  })))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkdhbGF4eSIsImR5bmFtaWMiLCJzc3IiLCJBYm91dCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImZvbnRTaXplIiwiYm9yZGVyIiwiZGlzcGxheSIsImFsaWduQ29udGVudCIsIm9iamVjdEZpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0MsbURBQU8sQ0FDcEIsTUFBTSxtSkFEYyxFQUVwQjtBQUNFQyxLQUFHLEVBQUUsS0FEUDtBQUFBO0FBQUEsd0NBRGEsb0VBQ2I7QUFBQSxjQURhLDhCQUNiO0FBQUE7QUFBQSxDQUZvQixDQUF0Qjs7QUFPQSxTQUFTQyxLQUFULEdBQWlCO0FBQ2YsU0FDRTtBQUFLLFNBQUssRUFBRTtBQUFDQyxxQkFBZSxFQUFFO0FBQWxCO0FBQVosS0FDRSxNQUFDLGlFQUFEO0FBQVEsZUFBVyxFQUFDO0FBQXBCLElBREYsRUFFRTtBQUFTLFNBQUssRUFBRTtBQUFDQyxlQUFTLEVBQUU7QUFBWjtBQUFoQixLQUNGLE1BQUMsTUFBRCxPQURFLEVBRUU7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUF1QixNQUFFLEVBQUM7QUFBMUIsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQXlCLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVjtBQUFoQyxLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUEwQixTQUFLLEVBQUU7QUFBQ0Msa0JBQVksRUFBRTtBQUFmO0FBQWpDLG9CQURGLEVBR0U7QUFBRyxTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFFLE9BQVI7QUFBaUJDLGNBQVEsRUFBRTtBQUEzQjtBQUFWLHFNQUd5QjtBQUFJLFNBQUssRUFBRTtBQUFDRCxXQUFLLEVBQUUsT0FBUjtBQUFpQkUsWUFBTSxFQUFFO0FBQXpCO0FBQVgsSUFIekIsMEZBSEYsQ0FESixFQVdJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBRSxNQUFWO0FBQWtCQyxrQkFBWSxFQUFFO0FBQWhDO0FBQWpDLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsZUFBUyxFQUFFO0FBQVosS0FBWjtBQUFrQyxhQUFTLEVBQUMsV0FBNUM7QUFBd0QsT0FBRyxFQUFDO0FBQTVELElBREYsQ0FYSixDQURGLENBREYsQ0FGRixDQUZGLENBREY7QUEyQkQ7O0FBRWNWLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9wbmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L3RvcG5hdidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcblxuY29uc3QgR2FsYXh5ID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL3Zpc3VhbHMvZ2FsYXh5JyksXG4gIHtcbiAgICBzc3I6IGZhbHNlXG4gIH1cbik7XG5cbmZ1bmN0aW9uIEFib3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsIH19PlxuICAgICAgPFRvcG5hdiBjdXJyZW50UGFnZT0nQWJvdXQnPjwvVG9wbmF2PlxuICAgICAgPHNlY3Rpb24gc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICA8R2FsYXh5IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJcIiBpZD0ncG9ydGZvbGlvLW1haW4nPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlXCIgIHN0eWxlPXt7cGFkZGluZzogJzBweCAzMHB4IDBweCAzMHB4J319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lciByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ncGFnZS10ZXh0JyBzdHlsZT17e21hcmdpbkJvdHRvbTogJzUwcHgnfX0+Q2FsZWIgSGFsdGVyPC9oMT5cbiAgICAgICAgICAgICAgICAgIHsvKjxoNiBjbGFzc05hbWU9J3BhZ2UtdGV4dCc+VGFrZSBhIGxvb2sgYXQgc29tZSBvZiBteSB3ZWIgZGV2ZWxvcG1lbnQgcHJvamVjdHM8L2g2PiovfVxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICdYLWxhcmdlJ319PlxuICAgICAgICAgICAgICAgICAgICBJIGFtIGEgZnVsbC1zdGFjayBkZXZlbG9wZXIgd2l0aCBhIHBhc3Npb24gZm9yIGJlYXV0aWZ1bCBhbmQgZWZmaWNpZW50IHdlYmFwcHMuIFxuICAgICAgICAgICAgICAgICAgICBJIGhhdmUgYSBwcmVmZXJlbmNlIGZvciBiYWNrZW5kIGRldmVsb3BtZW50IGJ1dCBJIGVuam95IHdvcmtpbmcgb24gZnJvbnRlbmQgdG9vIHdoZW5cbiAgICAgICAgICAgICAgICAgICAgdGhlIG9wcG9ydHVuaXR5IGNvbWVzLiA8aHIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnMXB4IHNvbGlkJ319PjwvaHI+XG4gICAgICAgICAgICAgICAgICAgIE15IHNwZWNpYWx0aWVzIGFyZSBQeXRob24sIEMrKywgYW5kIEphdmFTY3JpcHQsIGJ1dCBJIGxvdmUgdG8gbGVhcm4gbmV3IHRlY2hub2xvZ2llcy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGFsaWduQ29udGVudDogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3tvYmplY3RGaXQ6ICdjb3Zlcid9fSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJhcGkvY29tcG9uZW50cy9pbWFnZXMvY2FsZWItMS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

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