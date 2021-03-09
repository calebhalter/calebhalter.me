import React from 'react'
import 'p5'
import p5 from "p5";
import Data from './output'

class Galaxy extends React.Component {
  constructor(props) {
    super(props);
    this.sketchRef = React.createRef()
    this.state = {
      sketch: undefined,
    }
  }
  handleResize = (e) => {
    this.state.sketch.resizeCanvas(window.innerWidth, window.innerHeight, false)
   };

  galaxy = (sketch) => {
    this.state.sketch = sketch;
    sketch.setup = () => {
      sketch.createCanvas(window.innerWidth, window.innerHeight);
      sketch.background(0);
      sketch.fullscreen();
      sketch.stroke('white')
      sketch.strokeWeight(10);
    }

    sketch.draw = () => {
        sketch.background(0)
      let arr = Data[parseInt(Date.now() / 70) % 313]
      for (let i=0; i < arr.length; i++) {
          sketch.stroke(Math.abs((Date.now() / 30) % 350 - 175), 0, 125 + 130 * (arr[i][1]))
          let x = arr[i][0] * window.innerWidth * 1.5
          sketch.point(x, arr[i][2] * window.innerHeight)
          if (Math.abs(x - sketch.mouseX) ** 2 + Math.abs(arr[i][2] * window.innerHeight - sketch.mouseY) ** 2 <= 10000) {
            sketch.strokeWeight(1);
            sketch.line(x, arr[i][2] * window.innerHeight, sketch.mouseX, sketch.mouseY);
            sketch.strokeWeight(10);
          }
      }
    }
  }

  componentDidMount() {
    this.sketch_export =  new p5(this.galaxy, this.sketchRef.current);
    window.addEventListener("resize", this.handleResize);
  }
  render() {
    return <div style={{position:'fixed', zIndex: -1, top: 0, marginBottom: '-20px'}} ref={this.sketchRef}></div>;
  }

}

export default Galaxy;