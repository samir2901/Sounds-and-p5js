var song;
var sliderVolume;
var button;

function setup() {
  createCanvas(400, 400);
  song = loadSound("Peaceful_Mind.mp3");
  sliderVolume = createSlider(0,1,0.05,0.01);    
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
  background(random(0,255),random(0,255),random(0,255));
  song.setVolume(sliderVolume.value());  //0-1 range 
}