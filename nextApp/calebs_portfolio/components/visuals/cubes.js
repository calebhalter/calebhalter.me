import React from 'react'
import 'p5'
import p5 from "p5";

class Cubes extends React.Component {
  constructor(props) {
    super(props);
    this.sketchRef = React.createRef()
    this.state = {
      sketch: undefined,
      dots: {}
    }
  }

  handleResize = (e) => {
    this.state.sketch.resizeCanvas(window.innerWidth, window.innerHeight, false)
   };

  cubes = (sketch) => {
    let distance = 100;
    this.state.sketch = sketch;
    sketch.setup = () => {
      sketch.createCanvas(window.innerWidth, window.innerHeight);
      for (let i=0; i < window.innerWidth; i++) {
        for (let j=0; j < window.innerHeight; j++) {
          if (i % 50 == 0 || j % 50 == 0) {
              if (j % 5 == 0 && i % 5 == 0) {
                if (!(i in this.state.dots)) {
                  this.state.dots[i] = [];
                }
                this.state.dots[i].push([i,j]);
              }
          }
        }
      }
      sketch.fullscreen();
    }

    sketch.draw = () => {
      if (Date.now() % 1 == 0) {
        sketch.background(0);
        for (let i in this.state.dots) {
          let direction = 1;
          if (parseInt(i) - sketch.mouseX < 0) {
            direction = -1;
          }
          let factor = distance / Math.abs(sketch.mouseX - parseInt(i));
          let newi = (parseInt(i) + direction * factor);
          sketch.stroke(255 - (10 * factor), 255 - (10 * factor), 255);
          if (Math.abs(parseInt(i) - sketch.mouseX) < distance){
            for (let j=0; j < this.state.dots[i].length; j++) {
              sketch.point(newi * (1 + direction / (7 + (Math.abs(this.state.dots[i][j][1] - sketch.mouseY)))), this.state.dots[i][j][1]);
              //point(newi, dots[i][j][1]);
            }
          }
          else {
            sketch.stroke(255);
            for (let j=0; j < this.state.dots[i].length; j++) {
              sketch.point(...this.state.dots[i][j]);
            }
          }
        }
      }
    }
  }
  componentDidMount() {
    this.sketch_export =  new p5(this.cubes, this.sketchRef.current);
    window.addEventListener("resize", this.handleResize);
    console.log(this.props.display)
  }
  render() {
    return <div style={{position:this.props.position, zIndex: 0, top: 0, marginBottom: '-20px'}} ref={this.sketchRef}></div>;
  }

}

export default Cubes;