var wave;
var button;
var freqslider;
var volslider;
var env;
var playing=false;


function setup() {
  createCanvas(100, 100);  

  env = new p5.Envelope();
  env.setADSR(0.05, 0.25, 0.5, 0.1); //attack, decay, sustain, release
  env.setRange(0.8, 0);

  wave = new p5.Oscillator();
  wave.setType("sine");  
  wave.start(); 
  wave.freq(440);
  wave.amp(env);

  button = createButton("Play/Pause");
  button.mousePressed(toggle);  

  freqslider = createSlider(100, 1200, 440);
  volslider = createSlider(0, 1, 0.3, 0.01);
}

function toggle(){  
  // if (!playing) {    
  //   playing = true;
  // } else {
  //   playing = false;
  //   wave.stop();
  // }
}


function draw() {
  background(51);
  wave.freq(freqslider.value());
  wave.amp(volslider.value());
  if (playing) {
    background(255,0,255);
  } else {
    background(51);
  }
}