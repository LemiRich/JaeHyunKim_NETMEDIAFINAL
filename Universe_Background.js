particleSystem=[]

function setup() {
  createCanvas(windowWidth*2,windowHeight*2);
  background(0);
  noStroke();
  for (var i = 0; i < 5000; i++){
    particleSystem[i]= new Particle(random(-windowWidth/2,windowWidth*10), random(-windowHeight,windowHeight), random(5),random(0.001,20), random(1,200), random(240,255), random(0.1,1));
  }
}

function draw() {
  background(0);
  for (var i = 0; i < 5000; i++){
  fill(particleSystem[i].c);
  ellipse(particleSystem[i].x,
          particleSystem[i].y+(0.5*(particleSystem[i].acceleration)*(i/100))+particleSystem[i].speed*(frameCount/100), 
          particleSystem[i].radius, 
          particleSystem[i].radius+particleSystem[i].spread);
  }
}

function Particle(x, y, radius, speed, acceleration, c, spread) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.speed = speed;
  this.acceleration = acceleration;
  this.c = c;
  this.spread=spread;
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }
