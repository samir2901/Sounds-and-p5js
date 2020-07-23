var song;
var button;
var amp;

function setup() {
  createCanvas(400, 400);
  song = loadSound("Peaceful_Mind.mp3",loaded);    
  amp = new p5.Amplitude();
}

function loaded(){  
  console.log("loaded");
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
  //song.setVolume();  //0-1 range 
  var vol = amp.getLevel();
  var r = map(vol, 0, 1, 10, 200);
  fill(255,0,255);
  ellipse(width/2,height/2, 2*r, 2*r);
}