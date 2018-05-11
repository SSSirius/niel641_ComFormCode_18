var system;
var stargroup = [];
var blackhole = [];
var ra, dis, speed, angrandom;

function setup() {
  createCanvas(windowWidth, 600);
  for (i = 0; i < 400; i++) {
    var newstar = new Smallstars(i * 5 + 2, random(i * 2) + 140, i * 5);
    stargroup.push(newstar);

  }
   for (i = 0; i < 40; i++) {
     var bhole = new Blacks(i * 5 + 2, 340-i * 10, i * 5);
     blackhole.push(bhole);

   }
  noLoop();
  background(2);
  // system = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  blendMode(BLEND);
  colorMode(HSB, 1, 1, 0, 1);
  fill(0, 0, 0, 120);
  rect(0, 0, windowWidth, 500);
  push();
  blendMode(ADD);
  translate(530, 250);
  for (i = 0; i < stargroup.length; i++) {

    stargroup[i].run();

  }


  for (k = 0; k < 1; k += 0.05) {
    strokeWeight(0.2);
    push();
    rotate(1.65 * PI);
    stroke(0, 0, map(sin(k * PI), 0, 1, -0.1, 1));
    arc(0, 0, 280, 280, k * 2 * PI + HALF_PI, (k + 0.05) * 2 * PI + HALF_PI);
    pop();
    // strokeWeight(2);
    // stroke((this.x / 900) * 0.2 * (j + random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800)+0.2, 1 - (this.x / 1800));
    // arc(0, 0, this.x+8, this.x+8, j * 2 * PI, (j + this.angrandom / 350+0.3) * 2 * PI);

  }
// blendMode(BLEND);
  // for (i = 0; i < blackhole.length; i++) {

  //   blackhole[i].run();

  // }
  pop();
  // print(blackhole);
  // rotateZ(frameCount * 0.002);
}

// A simple Particle class
var Smallstars = function (ra, dis, speed) {
  this.x = dis;
  this.y = 300;
  this.ang = 1;
  this.ra = ra;
  this.cirran = random(0.5);
   this.ranx = random(2);
    this.rany = random(2);
        this.fliter = random();
  // this.speed = speed;
  this.angrandom = floor(random(30)) + 10;
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
  var thisindex = this.x / 1600;
  var end = 370 / this.angrandom;
  rotate(0.8 * PI - sin(this.x / 3000));
  for (j = 0; j < 1; j += this.angrandom / 360) {
    strokeWeight(0.1 + random(0.1));
    push();
    // map(sin(j * PI), 0, 1, -0.4, 1)
    //  rotate( j*PI*0.1);
    //  translate(0,j*40);
    stroke((thisindex) * 0.8 * (noise((this.x / 900))) + 0.6, 1, sin(j * PI) - (thisindex));
    arc(0, 0, this.x, this.x * map(thisindex, 0, 1, 0.35, 1), j * 2 * PI + HALF_PI, (j + this.angrandom / 360) * 2 * PI + HALF_PI);
    stroke((thisindex) * 0.6 * (random(0.8)) + (this.x / 900) * 0.8, random(0.9), sin(j * PI) - (thisindex));
    arc(0, 0, this.x, this.x * map(thisindex, 0, 1, 0.35, 1), j * 2 * PI + HALF_PI, (j + this.angrandom / 360) * 2 * PI + HALF_PI);
    // ellipse(random(10) + this.x, random(10) + this.x, random(3), random(3));
    pop();
    // strokeWeight(2);
    // stroke((this.x / 900) * 0.2 * (j + random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800)+0.2, 1 - (this.x / 1800));
    // arc(0, 0, this.x+8, this.x+8, j * 2 * PI, (j + this.angrandom / 350+0.3) * 2 * PI);

  }
  // print(this.ra / 500 * j / 360 * this.angrandom);

  pop();

  if (thisindex < 0.60) {
    //  rotate(0.7 * PI - sin(this.x / 3000));
    for (k = 0; k < 1; k += 0.0027) {
      //  strokeWeight(0.2);
      push();

      if (random() > 0.9) {
        rotate(0.8 * PI - sin(this.x / 3000));
        noStroke();
        var posx = sin(k * 2 * PI) * this.x + this.ranx;
        var posy = cos(k * 2 * PI) * this.x * map(thisindex, 0, 1, 0.35, 1) + this.rany;
      
        ellipseMode(CENTER)
        fill(0,0, sin(k * PI) - (thisindex) + random(0.2),1);
        ellipse(posx, posy, this.cirran * sin(k * PI), this.cirran * sin(k * PI));
        fill(0, 0, sin(k * PI) - (thisindex) - random(0.5));
        ellipse(posx, posy, (this.cirran + 0.4) * sin(k * PI), (this.cirran + 0.4) * sin(k * PI));
        pop();
      }
    }

    //  pop();
    // strokeWeight(2);
    // stroke((this.x / 900) * 0.2 * (j + random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800)+0.2, 1 - (this.x / 1800));
    // arc(0, 0, this.x+8, this.x+8, j * 2 * PI, (j + this.angrandom / 350+0.3) * 2 * PI);

  }




};


var Blacks = function (ra, dis, speed) {
  this.x = dis;
  this.y = 300;
  this.ang = 1;
  this.ra = ra;
  this.cirran = random(0.5);
  this.ranx = random(2);
  this.rany = random(2);
  this.fliter = random();
  // this.speed = speed;
  this.angrandom = floor(random(30)) + 10;
};



Blacks.prototype.run = function () {
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
  var thisindex = this.x / 4600;
  var end = 370 / this.angrandom;
  translate(this.x * sin(thisindex * PI), this.x * sin(thisindex * PI));
  rotate(0.8 * PI);
  // for (j = 0; j < 1; j += this.angrandom / 360) {
    strokeWeight(10 );
    push();

    // map(sin(j * PI), 0, 1, -0.4, 1)
    //  rotate( j*PI*0.1);
    //  translate(0,j*40);
    stroke((thisindex) * 0.8 , 1,0,0.3);
   ellipse(0,0, this.x, this.x * map(thisindex, 0, 1, 0.35, 1));
    // arc(0, 0, this.x, this.x * map(thisindex, 0, 1, 0.35, 1), j * 2 * PI + HALF_PI, (j + this.angrandom / 360) * 2 * PI + HALF_PI);
    // stroke((thisindex) * 0.6 * (random(0.8)) + (this.x / 900) * 0.8, random(0.9), sin(j * PI) - (thisindex));
    // arc(0, 0, this.x, this.x * map(thisindex, 0, 1, 0.35, 1), j * 2 * PI + HALF_PI, (j + this.angrandom / 360) * 2 * PI + HALF_PI);
    // // ellipse(random(10) + this.x, random(10) + this.x, random(3), random(3));
    pop();
    // strokeWeight(2);
    // stroke((this.x / 900) * 0.2 * (j + random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800)+0.2, 1 - (this.x / 1800));
    // arc(0, 0, this.x+8, this.x+8, j * 2 * PI, (j + this.angrandom / 350+0.3) * 2 * PI);

  // }
  // print(this.ra / 500 * j / 360 * this.angrandom);

  pop();





};