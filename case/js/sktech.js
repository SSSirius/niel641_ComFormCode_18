var system;
var stargroup = [];
var blackhole = [];
var ra, dis, speed, angrandom;
var colorrange;
var num;
var ranang;
var distord;
var defaltbright;
var space, foldindex;
function setup() {
  createCanvas(windowWidth, windowHeight);
  num=floor(random(4)+1)*100;
  for (i = 0; i < num; i++) {
    var newstar = new Smallstars(i * 5 + 2, random(i * num*0.04) + map(num, 100, 500, 70, 140), i * 5);
    stargroup.push(newstar);

  }
  frameRate(1);
  for (i = 0; i < 7; i++) {
    var bhole = new Blacks(i * 5 + 2, 300 - i *5, i * 5);
    blackhole.push(bhole);

  }
  noLoop();
  background(2);
  ranang = random(-2 * PI,2 * PI);
  colorrange=random(0,0.8);
  defaltbright = random(0, 0.2);
  distord = random(5);
  foldindex = floor(random(5));
  space = random(-100,100);
  ranang=0;
space=100;
  // system = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  blendMode(BLEND);
  colorMode(HSB, 1, 1, 1, 1);
  fill(0, 0, 0, 120);
  rect(0, 0, windowWidth, windowHeight);
  push();
  blendMode(ADD);
  translate(windowWidth*0.5, windowHeight * 0.5);
  rotate(ranang);
  for (i = 0; i < stargroup.length; i++) {

    stargroup[i].run();

  }

 blendMode(SCREEN);
  
//  push();
//  rotate(1.75 * PI);
//  translate(0, -pow(min(cos(0), 1), 3) * space/2);
//   for (k = 0.2; k < 0.8; k += 0.004) {

//     strokeWeight(0.1 + map(sin(k * PI), 0, 1, -1, random(0.2,1)));
//     push();
//     noFill();
     
//     // fill(0, 0, 1, map(sin(k * PI), 0, 1, -1.6, 1));
//     // rotate(1.7 * PI);
  
//     stroke(random(colorrange,colorrange+0.2), random(0.5), map(sin(k * PI), 0, 1, -0.1, 1)-defaltbright, map(sin(k * PI), 0, 1, -0.8, 0.3));
//     arc(0, 0, map(num, 100, 500, 60, 130), map(num, 100, 400, 80, 130), k * 2 * PI + HALF_PI, (k + 0.05) * 2 * PI + HALF_PI);
//     pop();
//     // strokeWeight(2);
//     // stroke((this.x / 900) * 0.2 * (j + random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800)+0.2, 1 - (this.x / 1800));
//     // arc(0, 0, this.x+8, this.x+8, j * 2 * PI, (j + this.angrandom / 350+0.3) * 2 * PI);

//   }
// pop();

  // blendMode(SCREEN);
  // for (i = 0; i < blackhole.length; i++) {

  //   blackhole[i].run();

  // }
  pop();
  
  // ranang+=0.001;
  colorrange += 0.01;
  defaltbright += 0.05;
  // distord += 0.1;
   colorrange = colorrange - floor(colorrange);
  defaltbright = defaltbright - floor(defaltbright);
  //  ranang = ranang % (2 * PI);
  //  distord = distord%5;
  // rotateZ(frameCount * 0.002);

  // push();
  //   translate(0, -windowHeight * 0.3);
  // for (k = 0.2; k < 0.8; k += 0.004) {
  //   strokeWeight(0.5 - (k *0.4));
  //   push();
  //   noFill();
  //   // fill(0, 0, 1, map(sin(k * PI), 0, 1, -1.6, 1));
  //   rotate(2 * PI);
  //   stroke(random(colorrange, colorrange + 0.2), 1, 0.2,0.1);
  //   arc(0, 0, windowWidth , windowWidth , k * 2 * PI + HALF_PI, (k + 0.05) * 2 * PI + HALF_PI);
  //   pop();
  //   // strokeWeight(2);
  //   // stroke((this.x / 900) * 0.2 * (j + random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800)+0.2, 1 - (this.x / 1800));
  //   // arc(0, 0, this.x+8, this.x+8, j * 2 * PI, (j + this.angrandom / 350+0.3) * 2 * PI);

  // }
  // pop();
}
var doubleCircleSeat = function( x, a) {
  var min_param_a = 0.0;
  var max_param_a = 1.0;
  a = max(min_param_a, min(max_param_a, a));

  var y = 0;
  if (x <= a) {
    y = sqrt(sq(a) - sq(x - a));
  } else {
    y = 1 - sqrt(sq(1 - a) - sq(x - a));
  }
  print(y);
  return y;
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
   this.thisindex = this.x / (num * 5);
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
  // var thisindex = this.x / (num * 5);
  var end = 370 / this.angrandom;
  rotate(0.8 * PI - sin(this.x / (num * 5 + 1000))*distord);
   translate(0, pow(min(cos(this.thisindex * PI * 2), 1 - abs(this.thisindex)), foldindex)*30+ space);

push();
rotate(PI - 3/60* PI);
if(this.ra==2){


    for (k = 0.2; k < 0.8; k += 0.004) {

      strokeWeight(0.1 + map(sin(k * PI), 0, 1, -1, random(0.2, 1)));
      push();
      noFill();

      // fill(0, 0, 1, map(sin(k * PI), 0, 1, -1.6, 1));
      // rotate(1.7 * PI);

      stroke(random(colorrange, colorrange + 0.2), random(0.5), map(sin(k * PI), 0, 1, -0.1, 1) - defaltbright, map(sin(k * PI), 0, 1, -0.8, 0.3));
      arc(0, 0, map(num, 100, 500, 60, 130), map(num, 100, 400, 80, 130), k * 2 * PI + HALF_PI, (k + 0.05) * 2 * PI + HALF_PI);
      pop();
      // strokeWeight(2);
      // stroke((this.x / 900) * 0.2 * (j + random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800)+0.2, 1 - (this.x / 1800));
      // arc(0, 0, this.x+8, this.x+8, j * 2 * PI, (j + this.angrandom / 350+0.3) * 2 * PI);

    }
}

pop();



  for (j = 0; j < 1; j += this.angrandom / 360) {
    strokeWeight(0.1 + random(0.4));
    push();

     scale(noise(j)*0.02+0.98, 1, 1);
    // map(sin(j * PI), 0, 1, -0.4, 1)
    //  rotate( j*PI*0.1);
    
    stroke((this.thisindex) * (colorrange + 0.2) * (noise((this.x / 900))) + colorrange, 1, sin(j * PI) - (this.thisindex));
    arc(0, 0, this.x, this.x * map(this.thisindex, 0, 1, 0.35, 1), j * 2 * PI + HALF_PI, (j + this.angrandom / 360) * 2 * PI + HALF_PI);
    stroke((this.thisindex) * colorrange * (random(0.8)) + (this.x / 900) * (colorrange + 0.2), random(0.9), sin(j * PI) - (this.thisindex));
    arc(0, 0, this.x, this.x * map(this.thisindex, 0, 1, 0.35, 1), j * 2 * PI + HALF_PI, (j + this.angrandom / 360) * 2 * PI + HALF_PI);
    // ellipse(random(10) + this.x, random(10) + this.x, random(3), random(3));
    pop();
    // strokeWeight(2);
    // stroke((this.x / 900) * 0.2 * (j + random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800)+0.2, 1 - (this.x / 1800));
    // arc(0, 0, this.x+8, this.x+8, j * 2 * PI, (j + this.angrandom / 350+0.3) * 2 * PI);

  }
  // print(this.ra / 500 * j / 360 * this.angrandom);

  pop();

  if (this.thisindex < 0.60) {
    //  rotate(0.7 * PI - sin(this.x / 3000));
    for (k = 0; k < 1; k += 0.002) {
      //  strokeWeight(0.2);
      push();

      if (random() > 0.9) {
        rotate(0.8 * PI - sin(this.x / (num * 5 + 1000)) * distord);
        noStroke();
        var posx = sin(k * 2 * PI) * this.x + this.ranx;
        var posy = cos(k * 2 * PI) * this.x * map(this.thisindex, 0, 1, 0.35, 1) + this.rany;
       
        ellipseMode(CENTER)
        fill(random(colorrange, colorrange + 0.2), random(0.4), sin(k * PI) - (this.thisindex) + random(0.2) + defaltbright, 1);
        ellipse(posx, posy, this.cirran * sin(k * PI) * this.x / 200, this.cirran * sin(k * PI) * this.x / 200);
        fill(random(0, 0.3), random(0.4), sin(k * PI) - (this.thisindex) - random(0.5), 0.3 + defaltbright);
        ellipse(posx, posy, (this.cirran + 0.4) * sin(k * PI) * this.x / 100, (this.cirran + 0.4) * sin(k * PI) * this.x / 100);
  if (random() > 0.95){
          noFill();
          strokeWeight(0.2);
          stroke((this.x / 900) * 0.2 * (k+ random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800) - 0.2, (this.x / 1800) + 0.1);
    
          ellipse(posx, posy, (this.cirran + random(0.7, 1)) * sin(k * PI) * this.x / 100, (this.cirran + random(0.7, 1)) * sin(k * PI) * this.x / 100);
         }   // line(0, 0, 18 , this.x);
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
  this.rany = random(5);
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
  var thisindex = this.x / 3600;
  var end = 370 / this.angrandom;
 translate(map(num, 100, 500, -20, -40), map(num, 100, 500, -35, -55));
//  rotate(0.7 * PI );
for (k = 0; k <1; k += 0.01) {
  strokeWeight(0.2);
  push();
  // fill(0, 0, 1, map(sin(k * PI), 0, 1, -1.6, 1));
  rotate(2 * PI*k);
  stroke(0, 0, 01);
  if(random()>0.95){
  // 
  stroke((this.x / 900) * 0.2 * (j + random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800)-0.2, (this.x / 1800)+0.1);
  line(this.x + 18, 0, this.x + 18+random(50),0);
  }
  pop();
  // strokeWeight(2);
  // stroke((this.x / 900) * 0.2 * (j + random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800)+0.2, 1 - (this.x / 1800));
  // arc(0, 0, this.x+8, this.x+8, j * 2 * PI, (j + this.angrandom / 350+0.3) * 2 * PI);

}

pop();

  // translate(this.x * sin(thisindex * PI)-60, this.x * sin(thisindex * PI)-60);
  
  // for (j = 0; j < 1; j += 6 / 360) {
  // strokeWeight(10);
  //   push();
  //    rotate(0.8 * PI);
  // // map(sin(j * PI), 0, 1, -0.4, 1)
  // //  rotate( j*PI*0.1);
  // //  translate(0,j*40);
  // stroke((thisindex) * 0.8, 0, sin(j * PI) - (thisindex));
  // // ellipse(0, 0, this.x, this.x * map(thisindex, 0, 1, 0.35, 1));
  // arc(0, 0, this.x, this.x * map(thisindex, 0, 1, 0.35, 1), j * 2 * PI + HALF_PI, (j + 6 / 360) * 2 * PI + HALF_PI);
  // // stroke((thisindex) * 0.6 * (random(0.8)) + (this.x / 900) * 0.8, random(0.9), sin(j * PI) - (thisindex));
  // // arc(0, 0, this.x, this.x * map(thisindex, 0, 1, 0.35, 1), j * 2 * PI + HALF_PI, (j + this.angrandom / 360) * 2 * PI + HALF_PI);
  // // // ellipse(random(10) + this.x, random(10) + this.x, random(3), random(3));
  // pop();
  // // strokeWeight(2);
  // // stroke((this.x / 900) * 0.2 * (j + random(0.2)) + (this.x / 900) * 0.8, (this.x / 1800)+0.2, 1 - (this.x / 1800));
  // // arc(0, 0, this.x+8, this.x+8, j * 2 * PI, (j + this.angrandom / 350+0.3) * 2 * PI);

  // }
  // print(this.ra / 500 * j / 360 * this.angrandom);







};


var data,success;
// $.ajax({
//   dataType: "json",
//   url: "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY&api_key=i6ppPy9sooYV2X8Rhk6tZ1uTN9DDDPY7RWSMV2t0",
//   data: data,
//   success: success
// });
var myDate = new Date();
 //获取当前年份(2位 //获取当前毫秒数(0-999)
var datestring = myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate();
// console.log(datestring);

// $.getJSON("https://api.nasa.gov/neo/rest/v1/feed?start_date=" + datestring + "&end_date=" + datestring + "&api_key=i6ppPy9sooYV2X8Rhk6tZ1uTN9DDDPY7RWSMV2t0", function (data) {
//   var items = [];

//   $.each(data.near_earth_objects, function (key, val) {
//    data=val;
//   });
//  console.log(data[0].close_approach_data[0].relative_velocity.kilometers_per_second);
//   // $('<ul/>', {
//   //   'class': 'my-new-list',
//   //   html: items.join('')
//   // }).appendTo('body');
// });