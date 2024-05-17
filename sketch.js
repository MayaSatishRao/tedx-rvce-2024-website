//global vars
var rgb1,rgb2,rgb3;
var r,g,b,a;

//random number generator
function randNum(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

//correct for numbers over 255 and under 0
function corrected(x){
  var val = (x*1);
  if(val > 255){
    return 255;
  } else if (val < 0){
    return 0;
  } else {
    return Math.round(val);
  }
}

//complimentary colors
function complimentary(x){
  return 255 - Math.abs((x - 127.5));
}

var terrainValues = {
  speed: 1,
  rotation: 80,
  mountainHeight: 150,
  bgColor: [ 0, 0, 0 ],
  lineColor: [ 200,0,0,0 ],
  lineWidth: 1,
  terrainColor: [ 400,0,0 ],
  terrainOpacity: 0.4,
}

var cols, rows;
var scl = 20;

var w = window.innerWidth;
var h = window.innerHeight;
var cnvs;

var flying = 0;

if(w>=500 && w<=1000){
  terrainValues.speed = 0.75;
  h = 3*window.innerHeight/4;
}
else if(w<=500){
  terrainValues.speed = 0.5;
  h = window.innerHeight/2;
}
//2D array where we'll store x and y values for each point on the triangle strip
var terrain = [];



function setup() {
  cnvs = createCanvas(w, h, WEBGL);
  cnvs.parent("animationDiv");
  cols = 2*w / scl;
	rows = 2*h / scl;

	//https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}


r = terrainValues.terrainColor[0];
	g = terrainValues.terrainColor[1];
	b = terrainValues.terrainColor[2];
	a = terrainValues.terrainOpacity;


function draw() {	
  flying -= terrainValues.speed;
  var yoff = flying;
	
	/*
			Set vertices at the x and y positions 
			along the triangle strip going up and down 
			along the path of the triangle strip
			
			In this pattern:
			 .  .  .
			/ \/ \/ \
		 .   .  .  .
		 
	*/
	
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -terrainValues.mountainHeight, terrainValues.mountainHeight);
      xoff += 0.1;
    }
    yoff += 0.1;
  }

	
  //set color stuff
	background(terrainValues.bgColor);
	stroke(terrainValues.lineColor);
	strokeWeight(terrainValues.lineWidth);
	//noFill();
	
  angleMode(DEGREES);
  rotateX(terrainValues.rotation);
	
		
  translate(-w, 0);
  fill(terrainValues.terrainColor[0] * 1, terrainValues.terrainColor[1] * 1, terrainValues.terrainColor[2] * 1, (terrainValues.terrainOpacity * 255));
	
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}

function windowResized(){
	cnvs = resizeCanvas(w, h);
}
