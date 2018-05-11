
var w =-1;
var  resize_timeout;
var rows;
var board;
var next;
var grid =[];
var history = [];
var myhistory = [];
var cell_info = {
    x: 0,
    y: 0,
    c: 0
};
var color_steps = 1000;
var cell_size = 30;
var color_s = 1;
var color_b = 1;

// globals
var grid_width = 0;
var grid_height = 0;
function setup() {
  // createCanvas(720, 400);
  createCanvas(windowWidth, windowHeight);
  // frameRate(10);
  colorMode(HSB, color_steps);
    noStroke();
  mess_resize();
}
function mess_resize() {
  grid_width = floor(windowWidth / cell_size) + 1;
  grid_height = floor(windowHeight / cell_size) + 1;
  cell_info.x = grid_width - 5;
  cell_info.y = grid_height - 5;
  // console.log(cell_info.x);
  
  for (var i = 0; i < grid_width; i++) {
      grid[i] = [];
  }

}
function draw() {
  // background(255);
  step();
  // for ( var i = 0; i < columns;i++) {
  //   for ( var j = 0; j < rows;j++) {
  //     if ((board[i][j] == 1)) fill(0);
  //     else fill(255); 
  //     stroke(0);
  //     rect(i*w, j*w, w-1, w-1);
  //   }
  // }

}

// reset board when mouse is pressed
// function mousePressed() {
//   init();
// }

// Fill board randomly


// The process of creating the new generation
function step() {

  // try to find open direction
  // direction is biased right
  var directions = shuffle([1, 2, 3, 4, 2]);
  var x = 0;
  var y = 0;
  var found_open_cell = false;
  // x = constrain(x, 0, grid_width - 1);
  // console.log(x);
  for (var i = 0; i < directions.length; i++) {
      var dir = directions[i];
      x = cell_info.x;
      y = cell_info.y;
      // print(cell_info);
      if(x==0 || x ==grid_width - 1){w*=-1;}
      if (dir == 1) {
          y--;
      } else if (dir == 2) {
    
          x++;
      } else if (dir == 3) {
          y++;
      } else if (dir == 4) {
          x--;
      }

      x = constrain(x, 0, grid_width - 1);
      y = constrain(y, 0, grid_height - 1);
      // console.log(x,y);
      if (!grid[x][y]) {
          
     found_open_cell = true;
    break;
}
  }

  // if we found a cell, move forth, otherwise move back
  if (found_open_cell) {
  //     // move into cell
      cell_info.c = ++cell_info.c % color_steps;
      cell_info.x = x;
      cell_info.y = y;
      grid[cell_info.x][cell_info.y] = true;
      // var string = [{x:cell_info.x ,y: cell_info.y,c: cell_info.c}];
      // append(history,'string');
      // var myArray = ['Mango', 'Apple', 'Papaya'];
  // print(myArray); // ['Mango', 'Apple', 'Papaya']

      append(myhistory, {x:cell_info.x ,y: cell_info.y,c: cell_info.c});
      // print(myhistory);
//{x:'& cell_info.x &',y:'& cell_info.y&',c:' & cell_info.c &'}'
  //     // draw it
  //     console.log("Draw");
      fill(100, 100, 100);
      rect(mouseX, mouseY, 0, 0);

      fill(cell_info.c, color_steps * color_s, color_steps * color_b);
      rect(cell_info.x * cell_size, cell_info.y * cell_size, cell_size, cell_size);
  } else {
      // hit a dead end, back up
      if (myhistory.length) {
       
          cell_info = myhistory[myhistory.length-1];
          shorten(myhistory);
      } else {
          console.log("all done");
          noLoop();
      }
  }
}