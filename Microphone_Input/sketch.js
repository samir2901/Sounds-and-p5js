var mic;

function setup() {
  createCanvas(300, 300);    
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  var vol = mic.getLevel();
  noStroke();
  fill(255,0,255);
  ellipse(width/2, height/2, width, vol*12000);  
  fill(255,0,0);
  ellipse(width/2, height/2, width, vol*3000);  
  //console.log(vol);
}