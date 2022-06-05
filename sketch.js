var tileCount;
var locx;
var locy;
let a = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  colorMode(HSB, 360, 100, 100, 100);
  tileCount = height*0.07
  locx = width/2;
  locy = height/2;
  background(175, 100, 100);
}

function draw() {
  background(175, 100, 100, 1);
  // noStroke();
  push();
  // translate(mouseX, mouseY);
  fill(360, 100, 100);
  translate(width/2, height/2);
  let a = atan2(random(height) - height / 2, random(width) - width / 2);
  rotate(a);
  rectMode(CENTER);
  rect(-10, 0, random(height), random(width*0.75));
  pop();
  grid();
}

function grid(){
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (height / tileCount) * gridY;
      rect(posX, posY, width/tileCount, height/tileCount);
      var toggle = floor(random(1, 3));
      if (toggle == 1){
        fill(175, 100, 100, random(10));
     // } if (toggle == 3){
     // fill(random(360), 100, random(10));
   } else {
     fill(0);
     }

    }
  }
}

