import React from 'react'
import 'p5'
import p5 from "p5";

class p5sketch01 extends React.Component {
  constructor(props) {
    super(props);
    this.sketchRef = React.createRef()
  }

  sketch_001 = (sketch) => {
    var col;
    sketch.setup = () => {
      sketch.createCanvas(1024, 1024);
      sketch.background(0,255,255);
      col = 5;
    }

    sketch.draw = () => {
      if(sketch.keyIsPressed) {
        console.log(sketch.keyCode);
        if (sketch.keyCode == 13) {
          sketch.background(0,255,255);
        }
      }
      if (sketch.mouseIsPressed) {
        col = (col + 10) % 510;
      }
      
      sketch.fill(Math.abs(255 - col));
      sketch.ellipse(sketch.mouseX + 450 * ( 5 - ((0.01 * Date.now())%10))/10, sketch.mouseY - 450 * ( 5 - ((0.01 * Date.now())%10))/10, 160*Math.abs( 5 - ((0.01 * Date.now())%10))/10,80);
      sketch.fill(Math.abs(col - 255));
      sketch.ellipse(sketch.mouseX - 450 * ( 5 - ((0.01 * Date.now())%10))/10, sketch.mouseY + 450 * ( 5 - ((0.01 * Date.now())%10))/10, 160*Math.abs( 5 - ((0.01 * Date.now())%10))/10,80);
      sketch.fill(Math.abs(col - 255));
      sketch.ellipse(sketch.mouseX + 450 * ( 5 - ((0.01 * Date.now())%10))/10, sketch.mouseY + 450 * ( 5 - ((0.01 * Date.now())%10))/10, 80, 160*Math.abs( 5 - ((0.01 * Date.now())%10))/10);
      sketch.fill(Math.abs(255 - col));
      sketch.ellipse(sketch.mouseX - 450 * ( 5 - ((0.01 * Date.now())%10))/10, sketch.mouseY - 450 * ( 5 - ((0.01 * Date.now())%10))/10, 80, 160*Math.abs( 5 - ((0.01 * Date.now())%10))/10);

      sketch.fill(Math.abs(255 - col),Math.abs(255 - col),0);
      sketch.ellipse(sketch.mouseX + 200 * ( 5 - ((0.01 * Date.now())%10))/10, sketch.mouseY, 160*Math.abs( 5 - ((0.01 * Date.now())%10))/10,80);
      sketch.fill(Math.abs(255 - col),0,0);
      sketch.ellipse(sketch.mouseX - 200 * ( 5 - ((0.01 * Date.now())%10))/10, sketch.mouseY, 160*Math.abs( 5 - ((0.01 * Date.now())%10))/10,80);
      sketch.fill(Math.abs(255 - col),Math.abs(255 - col)/2,0);
      sketch.ellipse(sketch.mouseX, sketch.mouseY + 200 * ( 5 - ((0.01 * Date.now())%10))/10, 80, 160*Math.abs( 5 - ((0.01 * Date.now())%10))/10);
      sketch.fill(Math.abs(255 - col));
      sketch.ellipse(sketch.mouseX, sketch.mouseY - 200 * ( 5 - ((0.01 * Date.now())%10))/10, 80, 160*Math.abs( 5 - ((0.01 * Date.now())%10))/10);
    }
  }
  componentDidMount() {
    this.sketch_export =  new p5(this.sketch_001, this.sketchRef.current);
    console.log("HEY")
  }
  render() {
    return <div ref={this.sketchRef}></div>;
  }

}

export default p5sketch01;