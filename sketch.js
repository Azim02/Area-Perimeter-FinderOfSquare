var canvas, backgroundImage;
var form;
var finder;


function preload(){
  backgroundImage = loadImage("bg.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);

  form = new Form();

  finder = new Finder();
}

function draw(){

  background(backgroundImage);

  textSize(22);
  textFont("Seoge Script");
  fill("red");
  stroke("yellow");
  text("Area & Perimeter Finder of Square", displayWidth/2-100, displayHeight/2-100);

  form.display();

  drawSprites();
}