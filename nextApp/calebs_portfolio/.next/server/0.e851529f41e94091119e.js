exports.ids = [0];
exports.modules = {

/***/ "q6i6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "p5"
var external_p5_ = __webpack_require__("DE3V");
var external_p5_default = /*#__PURE__*/__webpack_require__.n(external_p5_);

// CONCATENATED MODULE: ./components/visuals/output.js
// CONCATENATED MODULE: ./components/visuals/galaxy.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class galaxy_Galaxy extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleResize", e => {
      this.state.sketch.resizeCanvas(window.innerWidth, window.innerHeight, false);
    });

    _defineProperty(this, "galaxy", sketch => {
      this.state.sketch = sketch;

      sketch.setup = () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        sketch.background(0);
        sketch.fullscreen();
        sketch.stroke('white');
        sketch.strokeWeight(10);
      };

      sketch.draw = () => {
        sketch.background(0);
        let arr = output[parseInt(Date.now() / 70) % 313];

        for (let i = 0; i < arr.length; i++) {
          sketch.stroke(Math.abs(Date.now() / 30 % 350 - 175), 0, 125 + 130 * arr[i][1]);
          let x = arr[i][0] * window.innerWidth * 1.5;
          sketch.point(x, arr[i][2] * window.innerHeight);

          if (Math.abs(x - sketch.mouseX) ** 2 + Math.abs(arr[i][2] * window.innerHeight - sketch.mouseY) ** 2 <= 10000) {
            console.log("HEY");
            sketch.strokeWeight(1);
            sketch.line(x, arr[i][2] * window.innerHeight, sketch.mouseX, sketch.mouseY);
            sketch.strokeWeight(10);
          }
        }
      };
    });

    this.sketchRef = external_react_default.a.createRef();
    this.state = {
      sketch: undefined
    };
    console.log("WHAAAT");
    console.log(output);
  }

  componentDidMount() {
    this.sketch_export = new external_p5_default.a(this.galaxy, this.sketchRef.current);
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    return __jsx("div", {
      style: {
        position: 'fixed',
        zIndex: -1,
        top: 0,
        marginBottom: '-20px'
      },
      ref: this.sketchRef
    });
  }

}

/* harmony default export */ var galaxy = __webpack_exports__["default"] = (galaxy_Galaxy);

/***/ })

};;