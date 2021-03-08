module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Topnav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nclass Topnav extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    const topnav_items = [['Home', 'index'], ['Portfolio', 'portfolio'], ['Interactive Code', 'interactive_code'], ['Contact', 'contact']];\n    this.state = {};\n    this.state.topnav_list = [];\n    topnav_items.forEach(item => {\n      this.state.topnav_list.push(__jsx(\"li\", {\n        className: \"nav-item\",\n        key: item[1]\n      }, __jsx(\"a\", {\n        className: `nav-link ${this.props.currentPage === item[0] ? \"active\" : \"\"}`,\n        href: item[1]\n      }, item[0])));\n    });\n  }\n\n  render() {\n    return __jsx(\"nav\", {\n      className: \"navbar navbar-dark navbar-expand-md navigation-clean\",\n      style: {\n        zIndex: '2'\n      }\n    }, __jsx(\"div\", {\n      className: \"container\"\n    }, __jsx(\"a\", {\n      className: \"navbar-brand\",\n      href: \"#\"\n    }, \"CalebHalter.me\"), __jsx(\"button\", {\n      \"data-toggle\": \"collapse\",\n      className: \"navbar-toggler\",\n      \"data-target\": \"#navcol-1\"\n    }, __jsx(\"span\", {\n      className: \"sr-only\"\n    }, \"Toggle navigation\"), __jsx(\"span\", {\n      className: \"navbar-toggler-icon\"\n    })), __jsx(\"div\", {\n      className: \"collapse navbar-collapse\",\n      id: \"navcol-1\"\n    }, __jsx(\"ul\", {\n      className: \"navbar-nav ml-auto\"\n    }, this.state.topnav_list))));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC90b3BuYXYuanM/NmU2OCJdLCJuYW1lcyI6WyJUb3BuYXYiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ0b3BuYXZfaXRlbXMiLCJzdGF0ZSIsInRvcG5hdl9saXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiY3VycmVudFBhZ2UiLCJyZW5kZXIiLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFHZSxNQUFNQSxNQUFOLFNBQXFCQyw0Q0FBSyxDQUFDQyxTQUEzQixDQUFxQztBQUNoREMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOO0FBQ0EsVUFBTUMsWUFBWSxHQUFHLENBQ2pCLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FEaUIsRUFFakIsQ0FBQyxXQUFELEVBQWMsV0FBZCxDQUZpQixFQUdqQixDQUFDLGtCQUFELEVBQXFCLGtCQUFyQixDQUhpQixFQUlqQixDQUFDLFNBQUQsRUFBWSxTQUFaLENBSmlCLENBQXJCO0FBTUEsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQSxLQUFMLENBQVdDLFdBQVgsR0FBeUIsRUFBekI7QUFDQUYsZ0JBQVksQ0FBQ0csT0FBYixDQUFxQkMsSUFBSSxJQUFJO0FBQ3pCLFdBQUtILEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkcsSUFBdkIsQ0FDQTtBQUFJLGlCQUFTLEVBQUMsVUFBZDtBQUF5QixXQUFHLEVBQUVELElBQUksQ0FBQyxDQUFEO0FBQWxDLFNBQ0k7QUFBRyxpQkFBUyxFQUFHLFlBQVcsS0FBS0wsS0FBTCxDQUFXTyxXQUFYLEtBQTJCRixJQUFJLENBQUMsQ0FBRCxDQUEvQixHQUFxQyxRQUFyQyxHQUFnRCxFQUFHLEVBQTdFO0FBQWdGLFlBQUksRUFBRUEsSUFBSSxDQUFDLENBQUQ7QUFBMUYsU0FDS0EsSUFBSSxDQUFDLENBQUQsQ0FEVCxDQURKLENBREE7QUFNSCxLQVBEO0FBUUg7O0FBQ0RHLFFBQU0sR0FBRztBQUNMLFdBQ0k7QUFBSyxlQUFTLEVBQUMsc0RBQWY7QUFBc0UsV0FBSyxFQUFFO0FBQUNDLGNBQU0sRUFBRTtBQUFUO0FBQTdFLE9BQ0k7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJO0FBQUcsZUFBUyxFQUFDLGNBQWI7QUFBNEIsVUFBSSxFQUFDO0FBQWpDLHdCQURKLEVBRUk7QUFBUSxxQkFBWSxVQUFwQjtBQUErQixlQUFTLEVBQUMsZ0JBQXpDO0FBQTBELHFCQUFZO0FBQXRFLE9BQ0k7QUFBTSxlQUFTLEVBQUM7QUFBaEIsMkJBREosRUFFSTtBQUFNLGVBQVMsRUFBQztBQUFoQixNQUZKLENBRkosRUFNSTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUEwQyxRQUFFLEVBQUM7QUFBN0MsT0FDSTtBQUFJLGVBQVMsRUFBQztBQUFkLE9BQ0ssS0FBS1AsS0FBTCxDQUFXQyxXQURoQixDQURKLENBTkosQ0FESixDQURKO0FBZ0JIOztBQXJDK0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC90b3BuYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgY29uc3QgdG9wbmF2X2l0ZW1zID0gW1xuICAgICAgICAgICAgWydIb21lJywgJ2luZGV4J10sIFxuICAgICAgICAgICAgWydQb3J0Zm9saW8nLCAncG9ydGZvbGlvJ10sIFxuICAgICAgICAgICAgWydJbnRlcmFjdGl2ZSBDb2RlJywgJ2ludGVyYWN0aXZlX2NvZGUnXSwgXG4gICAgICAgICAgICBbJ0NvbnRhY3QnLCAnY29udGFjdCddXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgICAgICB0aGlzLnN0YXRlLnRvcG5hdl9saXN0ID0gW107XG4gICAgICAgIHRvcG5hdl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3BuYXZfbGlzdC5wdXNoKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIga2V5PXtpdGVtWzFdfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuYXYtbGluayAke3RoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IGl0ZW1bMF0gPyBcImFjdGl2ZVwiIDogXCJcIn1gfSBocmVmPXtpdGVtWzFdfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1bMF19XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT4pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kYXJrIG5hdmJhci1leHBhbmQtbWQgbmF2aWdhdGlvbi1jbGVhblwiIHN0eWxlPXt7ekluZGV4OiAnMid9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPScjJz5DYWxlYkhhbHRlci5tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiBkYXRhLXRhcmdldD1cIiNuYXZjb2wtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZjb2wtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvcG5hdl9saXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/topnav.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_script_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-script-tag */ \"react-script-tag\");\n/* harmony import */ var react_script_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_script_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_topnav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/topnav */ \"./components/layout/topnav.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\n\n\n\n\n\nconst Circles = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/visuals/circles */ \"./components/visuals/circles.js\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/visuals/circles */ \"./components/visuals/circles.js\")],\n    modules: ['../components/visuals/circles']\n  }\n});\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {\n  componentDidMount() {\n    let main_text = document.getElementById('main-text');\n    let nav_height = document.getElementById('navcol-1').offsetHeight + 50;\n    main_text.style.width = `${window.innerWidth}px`;\n    main_text.style.height = `${window.innerHeight - nav_height}px`;\n    main_text.children[0].style.top = `${(window.innerHeight - nav_height - 100) / 2}px`;\n    window.addEventListener('resize', function () {\n      main_text.children[0].style.top = `${(window.innerHeight - nav_height - 100) / 2}px`;\n      main_text.style.width = `${window.innerWidth}px`;\n      main_text.style.height = `${window.innerHeight - nav_height}px`;\n    });\n  }\n\n  render() {\n    return __jsx(\"div\", null, __jsx(_components_layout_topnav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      currentPage: \"Home\"\n    }), __jsx(\"section\", {\n      style: {\n        textAlign: \"center\"\n      }\n    }, __jsx(Circles, {\n      position: \"fixed\",\n      HD: \"true\"\n    }), __jsx(\"div\", {\n      id: \"main-text\",\n      style: {\n        position: 'absolute',\n        display: 'flex',\n        justifyContent: 'center',\n        textAlign: 'center',\n        width: '100%',\n        height: '100%'\n      }\n    }, __jsx(\"div\", {\n      style: {\n        top: '0px',\n        bottom: '0px',\n        position: 'absolute'\n      }\n    }, __jsx(\"h1\", {\n      style: {\n        fontWeight: 'bold',\n        color: 'white',\n        textShadow: '2px 2px 1px black'\n      }\n    }, \"Hi, I'm Caleb Halter\"), __jsx(\"h2\", {\n      style: {\n        fontWeight: 'bold',\n        color: 'white',\n        textShadow: '2px 2px 1px black'\n      }\n    }, \"I'm a full-stack developer based in Denton, Texas\")))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNpcmNsZXMiLCJkeW5hbWljIiwic3NyIiwiSG9tZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJtYWluX3RleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmF2X2hlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjaGlsZHJlbiIsInRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJ0ZXh0QWxpZ24iLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJvdHRvbSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInRleHRTaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLG1EQUFPLENBQ3JCLE1BQU0scUpBRGUsRUFFckI7QUFDRUMsS0FBRyxFQUFFLEtBRFA7QUFBQTtBQUFBLHdDQURhLHNFQUNiO0FBQUEsY0FEYSwrQkFDYjtBQUFBO0FBQUEsQ0FGcUIsQ0FBdkI7O0FBT0EsTUFBTUMsSUFBTixTQUFtQkMsNENBQUssQ0FBQ0MsU0FBekIsQ0FBbUM7QUFDakNDLG1CQUFpQixHQUFHO0FBQ2xCLFFBQUlDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCO0FBQ0EsUUFBSUMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NFLFlBQXBDLEdBQW1ELEVBQXBFO0FBQ0FKLGFBQVMsQ0FBQ0ssS0FBVixDQUFnQkMsS0FBaEIsR0FBeUIsR0FBRUMsTUFBTSxDQUFDQyxVQUFXLElBQTdDO0FBQ0FSLGFBQVMsQ0FBQ0ssS0FBVixDQUFnQkksTUFBaEIsR0FBMEIsR0FBRUYsTUFBTSxDQUFDRyxXQUFQLEdBQXFCUCxVQUFXLElBQTVEO0FBQ0FILGFBQVMsQ0FBQ1csUUFBVixDQUFtQixDQUFuQixFQUFzQk4sS0FBdEIsQ0FBNEJPLEdBQTVCLEdBQW1DLEdBQUUsQ0FBQ0wsTUFBTSxDQUFDRyxXQUFQLEdBQXFCUCxVQUFyQixHQUFrQyxHQUFuQyxJQUEwQyxDQUFFLElBQWpGO0FBQ0FJLFVBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVztBQUMzQ2IsZUFBUyxDQUFDVyxRQUFWLENBQW1CLENBQW5CLEVBQXNCTixLQUF0QixDQUE0Qk8sR0FBNUIsR0FBbUMsR0FBRSxDQUFDTCxNQUFNLENBQUNHLFdBQVAsR0FBcUJQLFVBQXJCLEdBQWtDLEdBQW5DLElBQTBDLENBQUUsSUFBakY7QUFDQUgsZUFBUyxDQUFDSyxLQUFWLENBQWdCQyxLQUFoQixHQUF5QixHQUFFQyxNQUFNLENBQUNDLFVBQVcsSUFBN0M7QUFDQVIsZUFBUyxDQUFDSyxLQUFWLENBQWdCSSxNQUFoQixHQUEwQixHQUFFRixNQUFNLENBQUNHLFdBQVAsR0FBcUJQLFVBQVcsSUFBNUQ7QUFDRCxLQUpEO0FBS0Q7O0FBRURXLFFBQU0sR0FBRztBQUNQLFdBQ0EsbUJBQ0UsTUFBQyxpRUFBRDtBQUFRLGlCQUFXLEVBQUM7QUFBcEIsTUFERixFQUVFO0FBQVMsV0FBSyxFQUFFO0FBQUNDLGlCQUFTLEVBQUU7QUFBWjtBQUFoQixPQUNFLE1BQUMsT0FBRDtBQUFTLGNBQVEsRUFBQyxPQUFsQjtBQUEwQixRQUFFLEVBQUM7QUFBN0IsTUFERixFQUVFO0FBQUssUUFBRSxFQUFDLFdBQVI7QUFBb0IsV0FBSyxFQUFFO0FBQUNDLGdCQUFRLEVBQUUsVUFBWDtBQUF1QkMsZUFBTyxFQUFFLE1BQWhDO0FBQXdDQyxzQkFBYyxFQUFFLFFBQXhEO0FBQWtFSCxpQkFBUyxFQUFFLFFBQTdFO0FBQXVGVCxhQUFLLEVBQUUsTUFBOUY7QUFBc0dHLGNBQU0sRUFBRTtBQUE5RztBQUEzQixPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVHLFdBQUcsRUFBRSxLQUFQO0FBQWNPLGNBQU0sRUFBRSxLQUF0QjtBQUE2QkgsZ0JBQVEsRUFBRTtBQUF2QztBQUFaLE9BQ0U7QUFBSSxXQUFLLEVBQUU7QUFBQ0ksa0JBQVUsRUFBRSxNQUFiO0FBQXFCQyxhQUFLLEVBQUUsT0FBNUI7QUFBcUNDLGtCQUFVLEVBQUU7QUFBakQ7QUFBWCw4QkFERixFQUVFO0FBQUksV0FBSyxFQUFFO0FBQUNGLGtCQUFVLEVBQUUsTUFBYjtBQUFxQkMsYUFBSyxFQUFFLE9BQTVCO0FBQXFDQyxrQkFBVSxFQUFFO0FBQWpEO0FBQVgsMkRBRkYsQ0FERixDQUZGLENBRkYsQ0FEQTtBQWFBOztBQTVCK0I7O0FBK0JwQjFCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgU2NyaXB0VGFnIGZyb20gJ3JlYWN0LXNjcmlwdC10YWcnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgVG9wbmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L3RvcG5hdidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgQ2lyY2xlcyA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy92aXN1YWxzL2NpcmNsZXMnKSxcbiAge1xuICAgIHNzcjogZmFsc2VcbiAgfVxuKVxuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IG1haW5fdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXRleHQnKVxuICAgIGxldCBuYXZfaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmNvbC0xJykub2Zmc2V0SGVpZ2h0ICsgNTBcbiAgICBtYWluX3RleHQuc3R5bGUud2lkdGggPSBgJHt3aW5kb3cuaW5uZXJXaWR0aH1weGBcbiAgICBtYWluX3RleHQuc3R5bGUuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0IC0gbmF2X2hlaWdodH1weGBcbiAgICBtYWluX3RleHQuY2hpbGRyZW5bMF0uc3R5bGUudG9wID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAtIG5hdl9oZWlnaHQgLSAxMDApIC8gMn1weGBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICBtYWluX3RleHQuY2hpbGRyZW5bMF0uc3R5bGUudG9wID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAtIG5hdl9oZWlnaHQgLSAxMDApIC8gMn1weGBcbiAgICAgIG1haW5fdGV4dC5zdHlsZS53aWR0aCA9IGAke3dpbmRvdy5pbm5lcldpZHRofXB4YFxuICAgICAgbWFpbl90ZXh0LnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodCAtIG5hdl9oZWlnaHR9cHhgXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VG9wbmF2IGN1cnJlbnRQYWdlPSdIb21lJz48L1RvcG5hdj5cbiAgICAgIDxzZWN0aW9uIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgIDxDaXJjbGVzIHBvc2l0aW9uPSdmaXhlZCcgSEQ9J3RydWUnIC8+XG4gICAgICAgIDxkaXYgaWQ9J21haW4tdGV4dCcgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0b3A6ICcwcHgnLCBib3R0b206ICcwcHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJ319PlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnLCBjb2xvcjogJ3doaXRlJywgdGV4dFNoYWRvdzogJzJweCAycHggMXB4IGJsYWNrJ319PkhpLCBJJ20gQ2FsZWIgSGFsdGVyPC9oMT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJywgY29sb3I6ICd3aGl0ZScsIHRleHRTaGFkb3c6ICcycHggMnB4IDFweCBibGFjayd9fT5JJ20gYSBmdWxsLXN0YWNrIGRldmVsb3BlciBiYXNlZCBpbiBEZW50b24sIFRleGFzPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICl9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzRmYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

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

/***/ })

/******/ });