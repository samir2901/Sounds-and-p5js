var wave, button, freqslider, volslider;
var playing=false;
function setup() {
  createCanvas(100, 100);  
  wave = new p5.Oscillator();
  //wave.setType("sine");
  wave.setType("triangle");  
  button = createButton("Play/Pause");
  button.mousePressed(toggle);  
  freqslider = createSlider(100, 1200, 440);
  volslider = createSlider(0, 1, 0.3, 0.01);
}

function toggle(){
  if (!playing) {
    wave.start();
    wave.amp(0.3);
    wave.freq(300);
    playing = true;
  } else {
    playing = false;
    wave.stop();
  }
}


function draw() {
  wave.freq(freqslider.value());
  wave.amp(volslider.value());
  if (playing) {
    background(255,0,255);
  } else {
    background(51);
  }
}