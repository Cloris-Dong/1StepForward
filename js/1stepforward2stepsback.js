let clockD;
let radius;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let s;
let m;
let h;
let r1;
let nWidth = 40;

function setup() {
  createCanvas(innerWidth, innerHeight);
  translate(width/2, height/2);
  radius = min(width, height)/2.5;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockD = radius * 1.7;
  s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
 }

function draw() {
  frameRate(1);
  background ('#a3866a');
  noStroke();
  fill('#0a0908');
  ellipse(width/2, height/2, clockD + 40, clockD + 40);
  fill('#49111c');
  ellipse(width/2, height/2, clockD, clockD);
  fill('#684756');
  ellipse(width/2, height/2, clockD - 25 , clockD - 25);
  stroke(255);
  strokeWeight(7);
  line(width/2, height/2, width/2 + cos(s) * secondsRadius, height/2 + sin(s) * secondsRadius);
  strokeWeight(9);
  line(width/2, height/2, width/2 + cos(m) * minutesRadius, height/2 + sin(m) * minutesRadius);
  strokeWeight(11);
  line(width/2, height/2, width/2 + cos(h) * hoursRadius, height/2 + sin(h) * hoursRadius);
  r1 = random(-1, 1);
  s += r1;
  strokeWeight(2);
  ellipse(width/2, height/2, 12, 12);
  fill(255);
  textSize(clockD * 0.0952);
  // text(clockD, 100, 100);
  text('XII', width/2 - clockD * 0.04762, height/2 - clockD * 0.3665);
  text('VI', width/2 - clockD * 0.03520, height/2 + clockD * 0.4391);
  text('III', width/2 + clockD * 0.3665, height/2);
  text('IX', width/2 - clockD * 0.4391, height/2);

  strokeWeight(2);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = width/2 + cos(angle) * secondsRadius;
    let y = height/2 + sin(angle) * secondsRadius;
    point(x, y);
  }
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
  }
  //this is to readjust the window when refresh is not pressed;
