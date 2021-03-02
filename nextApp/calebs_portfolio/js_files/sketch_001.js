const s = sketch => {
  function setup() {
    var canvas = createCanvas(1024, 1024);
    canvas.parent("CanvasDiv");
    background(0,255,255);
    col = 5;
  }

  function draw() {
    if(keyIsPressed) {
      console.log(keyCode);
      if (keyCode == 13) {
        background(0,255,255);
      }
    }
    if (mouseIsPressed) {
      col = (col + 10) % 510;
    } else {
    }
    
    fill(abs(255 - col));
    ellipse(mouseX + 450 * ( 5 - float((0.01 * Date.now())%10))/10, mouseY - 450 * ( 5 - float((0.01 * Date.now())%10))/10, 160*abs( 5 - float((0.01 * Date.now())%10))/10,80);
    fill(abs(col - 255));
    ellipse(mouseX - 450 * ( 5 - float((0.01 * Date.now())%10))/10, mouseY + 450 * ( 5 - float((0.01 * Date.now())%10))/10, 160*abs( 5 - float((0.01 * Date.now())%10))/10,80);
    fill(abs(col - 255));
    ellipse(mouseX + 450 * ( 5 - float((0.01 * Date.now())%10))/10, mouseY + 450 * ( 5 - float((0.01 * Date.now())%10))/10, 80, 160*abs( 5 - float((0.01 * Date.now())%10))/10);
    fill(abs(255 - col));
    ellipse(mouseX - 450 * ( 5 - float((0.01 * Date.now())%10))/10, mouseY - 450 * ( 5 - float((0.01 * Date.now())%10))/10, 80, 160*abs( 5 - float((0.01 * Date.now())%10))/10);

    fill(abs(255 - col),abs(255 - col),0);
    ellipse(mouseX + 200 * ( 5 - float((0.01 * Date.now())%10))/10, mouseY, 160*abs( 5 - float((0.01 * Date.now())%10))/10,80);
    fill(abs(255 - col),0,0);
    ellipse(mouseX - 200 * ( 5 - float((0.01 * Date.now())%10))/10, mouseY, 160*abs( 5 - float((0.01 * Date.now())%10))/10,80);
    fill(abs(255 - col),abs(255 - col)/2,0);
    ellipse(mouseX, mouseY + 200 * ( 5 - float((0.01 * Date.now())%10))/10, 80, 160*abs( 5 - float((0.01 * Date.now())%10))/10);
    fill(abs(255 - col));
    ellipse(mouseX, mouseY - 200 * ( 5 - float((0.01 * Date.now())%10))/10, 80, 160*abs( 5 - float((0.01 * Date.now())%10))/10);
  }
}

let sketch_001 = new p5(s);