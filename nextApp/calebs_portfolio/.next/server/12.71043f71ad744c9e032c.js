exports.ids = [12];
exports.modules = {

/***/ "6qnJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DE3V");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class p5sketch01 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleResize", e => {
      this.state.sketch.resizeCanvas(window.innerWidth, window.innerHeight, false);
    });

    _defineProperty(this, "circles", sketch => {
      var col;
      this.state.sketch = sketch;

      sketch.setup = () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        sketch.background(0);
        sketch.fullscreen();
      };

      sketch.draw = () => {
        sketch.strokeWeight(1);

        if (this.props.HD === 'true') {
          sketch.stroke(240);
        } else {
          sketch.stroke('yellow');
        }

        this.state.i += 1;
        if (this.props.HD === 'true') sketch.fill(255, 0, 255, 10);else sketch.noFill();

        if (this.state.i % 3 == 0) {
          sketch.background(0);
          this.state.i = 1;
          this.state.arr.shift();

          for (let j = 0; j < this.state.arr.length; j++) {
            if (this.state.arr[j][0] != 0) sketch.circle(this.state.arr[j][0], this.state.arr[j][1], this.state.calcs[j]);
          }

          this.state.arr.push([sketch.mouseX, sketch.mouseY]);
        }
      };
    });

    this.sketchRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.state = {
      arr: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      i: 1,
      sketch: undefined,
      calcs: []
    };

    for (let j = 0; j < this.state.arr.length; j++) {
      this.state.calcs.push(240 * (30 / (j ** 1.2 + 10)));
    }
  }

  componentDidMount() {
    this.sketch_export = new p5__WEBPACK_IMPORTED_MODULE_1___default.a(this.circles, this.sketchRef.current);
    window.addEventListener("resize", this.handleResize);
    console.log(this.props.display);
  }

  render() {
    return __jsx("div", {
      style: {
        position: this.props.position,
        zIndex: 0,
        top: 0,
        marginBottom: '-20px'
      },
      ref: this.sketchRef
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (p5sketch01);

/***/ })

};;