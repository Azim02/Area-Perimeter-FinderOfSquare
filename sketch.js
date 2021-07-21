var canvas, backgroundImage;
var form;
var finder;


function preload(){
  backgroundImage = loadImage("bg.jpg");
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);

  form = new Form();

  finder = new Finder();
}

function draw(){

  background(backgroundImage);

  textSize(22);
  textFont("Seoge Script");
  fill("red");
  stroke("yellow");
  text("Area & Perimeter Finder of Square", windowWidth/2-125, windowHeight/2-100);

  form.display();

  drawSprites();
}