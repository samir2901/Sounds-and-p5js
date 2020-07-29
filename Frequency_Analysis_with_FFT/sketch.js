var song;
var button;
var fft;
var bins = 256;

function preload() {
  song = loadSound("Sleep.mp3");  
}

function setup() {
  createCanvas(windowWidth, windowHeight);   
  colorMode(HSB);
  angleMode(DEGREES);    
  fft = new p5.FFT(0.9,bins);  
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
  background(10);
  translate(width/2, height/2);
  var spectrum = fft.analyze();    //stroke(255);    
  //beginShape();  
  for (let i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    stroke(i,255,255);
    var r = map(amp, 0, 256, 80, 400);
    var x = r * sin(angle);
    var y = r * cos(angle);
    line(0,0,x,y);
    //vertex(x, y);    
  }
  //endShape();
}