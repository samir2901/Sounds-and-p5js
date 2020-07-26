
var song;
var button;
var amp;

var volHist = [];


function preload() {
  song = loadSound("Peaceful_Mind.mp3");  
}

function setup() {
  createCanvas(600, 300);     
  amp = new p5.Amplitude();  
  button = createButton("Play");
  button.mousePressed(playMusic);
}

function playMusic() {
  if(!song.isPlaying()){
    song.play();
    button.html("Pause");
  }else{
    song.pause();
    button.html("Play");
  }
}

function draw() {
  background(0);
  var vol = amp.getLevel();
  volHist.push(vol);  
  noFill();  
  var currentVol = map(vol,0,1,height,0);
  translate(0, height/2 - currentVol);
  stroke(255);
  beginShape();
  strokeWeight(1);
  for (let i = 0; i < volHist.length; i++){
    var y = map(volHist[i],0,1,height,0);
    vertex(i, y);
  }
  if(volHist.length > width-50){
    volHist.splice(0,1);
  }
  endShape();
  translate(0, height);
  strokeWeight(4);
  stroke(255,0,0);
  line(volHist.length, 0, volHist.length, height);
  //ellipse(width/2, height/2, width, vol*200);    
}