


var stargroup=[];
var ra,dis,speed;
function setup() {
  // createCanvas(720, 400);
  createCanvas(800,600);
  // frameRate(10);
  background(24);
  // colorMode(HSB, color_steps);
  noStroke();
  // pixelDensity(1);
  // srcImage = createGraphics(windowWidth, windowHeight);
  // scratchImage = createGraphics(windowWidth, windowHeight);
  // mess_resize();
  // noLoop();
  for(i=0;i<2;i++){
    var newstar = new smallstars(1, i*100+100, i);
    stargroup.push(newstar);


  }
 
}

function draw() {
  fill(255);
  background(24);
    push();
  translate(400,300);
  for (i = 0; i < stargroup.length; i++) {
    
    stargroup[i].update;

  }

pop();
  print(stargroup);
}






var smallstars = function(ra, dis, speed) {
  this.x = dis;
  this.y = 0;
  this.ang = 1;
  this.speed = speed;
 
}

smallstars.prototype.update = function () {
  // push();
    // rotate(this.ang);
    fill(255);
    ellipse(80, 200, 20,20);
    this.ang += this.speed;
    print(1);
  // pop();
};

// Method to display
// smallstars.prototype.display = function () {
//   stroke(200, this.lifespan);
//   strokeWeight(2);
//   fill(127, this.lifespan);
//   ellipse(this.position.x, this.position.y, 12, 12);
// };

// let foundTree = undefined;

// sprites.forEach((otherSprite) => {
//   if (otherSprite.type === 'snowman') {
//     return;
//   }
//   if (otherSprite === this.cargo) {
//     return;
//   }
//   if (dist(this.x, this.y, otherSprite.x, otherSprite.y) < 10) {
//     foundTree = otherSprite;
//   }
// });

// var hasCargo = this.cargo !== undefined;

// if (foundTree && hasCargo) {
//   this.cargo = undefined;
//   this.cooldown = 50;
// }

// if (foundTree && !hasCargo) {
//   if (this.cooldown === 0) {
//     this.cargo = foundTree;
//   }
// }


// if (this.cargo) {
//   this.cargo.x = this.x - 3;
//   this.cargo.y = this.y - 5;
// }

// if (this.cooldown > 0) {
//   this.cooldown--;
// }




// Fill board randomly


// The process of creating the new generation
