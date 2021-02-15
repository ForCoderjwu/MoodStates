/***********************************************************************************
	StateMachine
	by Jiaquan Wu

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes

	- next advance step is adding some animation on it.

***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/1.png');
  images[1] = loadImage('assets/2.png');
  images[2] = loadImage('assets/3.png');
  images[3] = loadImage('assets/4.png');
  images[4] = loadImage('assets/5.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = drawOne;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(192);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   image(images[0],width/2, height/2, 600, 600);

   fill(0,0,0);
   text("Surprise", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   image(images[1],width/2, height/2, 600, 600);

   fill(240,120,0);
   text("Depress", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   image(images[2],width/2, height/2, 600, 600);

   fill(40,230,120);
   text("Happy", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
   image(images[3],width/2, height/2, 600, 600);

   fill(255,255,178);
   text("Angry", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
   image(images[4],width/2, height/2, 600, 600);

   fill(230,50,50);
   text("Awakward", width/2, height - gTextOffset);
}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  else if( key === '5' ) {
  	drawFunction = drawFive;
  }
}