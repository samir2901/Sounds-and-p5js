
var song;
var button;
var amp;

var volHist = [];


function preload() {
  song = loadSound("Peaceful_Mind.mp3");  
}

function setup() {
  createCanvas(300, 300); 
  angleMode(DEGREES);    
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
  beginShape();
  stroke(255);
  strokeWeight(1);
  translate(width/2, height/2);
  for (let i = 0; i < 360; i++){    
    var r = map(volHist[i], 0, 1, 50, 200);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if(volHist.length > 360){
    volHist.splice(0,1);
  }
  
}