import React from 'react'
import 'p5'
import p5 from "p5";

class p5sketch01 extends React.Component {
  constructor(props) {
    super(props);
    this.sketchRef = React.createRef()
    this.state = {
      arr: [[0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], ],
      i: 1,
      sketch: undefined,
      calcs: []
    }
    for (let j=0; j < this.state.arr.length; j++) {
      this.state.calcs.push(240 * ( (30  / (j**1.2 + 10 ))));
    }
  }

  handleResize = (e) => {
    this.state.sketch.resizeCanvas(window.innerWidth, window.innerHeight, false)
   };

  circles = (sketch) => {
    var col;
    this.state.sketch = sketch;
    sketch.setup = () => {
      sketch.createCanvas(window.innerWidth, window.innerHeight);
      sketch.background(0,255,255);
      sketch.fullscreen();
    }

    sketch.draw = () => {
      sketch.strokeWeight(1);
      if (this.props.HD === 'true') {
        sketch.stroke(255);
      }
      else {
        sketch.stroke('yellow');
      }
      this.state.i += 1;
      if (this.props.HD === 'true')
        sketch.fill(255,0,255,10);
      else 
        sketch.noFill()
      if (this.state.i % 3 == 0) {
        sketch.background(0, 255, 255);
        this.state.i = 1;
        this.state.arr.shift();
        for (let j=0; j < this.state.arr.length; j++) {
          if (this.state.arr[j][0] != 0)
            sketch.circle(this.state.arr[j][0], this.state.arr[j][1], this.state.calcs[j]);
        }
        this.state.arr.push([sketch.mouseX, sketch.mouseY]);
      }
    }
  }
  componentDidMount() {
    this.sketch_export =  new p5(this.circles, this.sketchRef.current);
    window.addEventListener("resize", this.handleResize);
  }
  render() {
    return <div style={{position:this.props.display, zIndex: -10, top: 0, marginBottom: '-20px'}} ref={this.sketchRef}></div>;
  }

}

export default p5sketch01;