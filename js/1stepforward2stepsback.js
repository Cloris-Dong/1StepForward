function setup() {
  createCanvas(innerWidth, innerHeight)
 }

function draw() {
  background (0);
  translate(width/2, height/2);
  stroke(255);

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
  }
  //this is to readjust the window when refresh is not pressed;
