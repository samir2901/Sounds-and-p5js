var song;
var sliderVolume;
var sliderPan;
var sliderRate;

function setup() {
  createCanvas(400, 400);
  song = loadSound("Peaceful_Mind.mp3",loaded);
  sliderVolume = createSlider(0,1,0,0.01);  
  sliderRate = createSlider(0,1,0.5,0.01);
  sliderPan = createSlider(-1,1,0.5,0.01);
}

function loaded() {
  song.play();
}


function draw() {
  background(220);
  song.setVolume(sliderVolume.value());  //0-1 range
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());
}