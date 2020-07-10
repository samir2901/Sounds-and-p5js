var song;
var sliderVolume;
var playbutton, jumpButton;

function setup() {
  createCanvas(400, 400);
  background(51);
  song = loadSound("Peaceful_Mind.mp3");
  sliderVolume = createSlider(0,1,0.05,0.01);    
  playbutton = createButton("Play");
  playbutton.mousePressed(playMusic); 
  jumpButton = createButton("Jump");
  jumpButton.mousePressed(jumpSong);
  song.addCue(5, change, color(0,0,255));
}

function change(c){
  background(c);
}


function jumpSong(){
  var t = song.currentTime();  
  var len = song.duration();
  song.jump(t + len/10);
}

function playMusic() {
  if(!song.isPlaying()){
    song.play();
    playbutton.html("Pause");
  }else{
    song.pause();
    playbutton.html("Play");
  }
}


function draw() {  
  song.setVolume(sliderVolume.value());  //0-1 range 
}