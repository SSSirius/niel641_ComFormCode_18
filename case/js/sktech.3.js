var system;
var stargroup = [];
var ra, dis, speed, angrandom;
function setup() {
  createCanvas(800, 600);
   for (i = 0; i < 300; i++) {
     var newstar = new Smallstars(i * 5 + 2, random(i*2)+40, i*5);
     stargroup.push(newstar);

   }
   noLoop();
    background(2);
  // system = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  blendMode(BLEND);
  colorMode(HSB, 1,1,1);
  fill(0,0,0,120);
  rect(0,0,800,600);
  push();
    blendMode(ADD);
    translate(400,300);
    for (i = 0; i < stargroup.length; i++) {

      stargroup[i].run();

    }
    pop();
}

// A simple Particle class
var Smallstars = function(ra, dis, speed) {
  this.x = dis;
  this.y = 300;
  this.ang = 1;
  this.ra=ra;
  // this.speed = speed;
  this.angrandom = floor(random(30))+10;
};



Smallstars.prototype.run = function () {
  // troke(200);
  
  push();
  // noStroke();
  // rotate(this.ang);
  // // color(gray, [alpha])
  
  // ellipse(this.x, 0, this.ra, this.ra);
  // this.ang += this.speed;
  // var start=0;
  // translate()
  noFill();
  var end = 370 / this.angrandom;
  for (j = 0; j < 1; j +=this.angrandom/360) {
    strokeWeight(0.1);
    push();
    rotate(0.7*PI);
    stroke((this.x / 900) * 0.2 * (random(0.8)) + 0.6, 1, sin(j * PI) );
    arc(0, 0, this.x, this.x * 0.35, j * 2 * PI + HALF_PI, (j + this.angrandom / 360) * 2 * PI + HALF_PI);
    stroke((this.x / 900) * 0.2 * (random(0.8)) + (this.x / 900) * 0.8, random(0.5), sin(j * PI) );
    arc(0, 0, this.x, this.x * 0.35, j * 2 * PI + HALF_PI, (j + this.angrandom / 360) * 2 * PI + HALF_PI);
    pop();
    // strokeWeight(2);
    // stroke((this.x / 900) * 0.2 * (j + random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800)+0.2, 1 - (this.x / 1800));
    // arc(0, 0, this.x+8, this.x+8, j * 2 * PI, (j + this.angrandom / 350+0.3) * 2 * PI);
   
  }
  // print(this.ra / 500 * j / 360 * this.angrandom);

  pop();
};

