var wall,wall2,wall3,wall4;
var dart;
var speed;
var rand;
function setup() {
  createCanvas(1600,400);

  rand = random(100,300);

  wall= createSprite(1500,100,60,100);
  wall.shapeColor=("red");
  wall2= createSprite(1500,200,60,100);
  wall2.shapeColor=("green");
  wall3= createSprite(1500,300,60,100);
  wall3.shapeColor=("red");
  wall4= createSprite(1470,200,10,50);
  wall4.shapeColor=("black");
  speed= random(10,30);
  

  dart= createSprite(100,50,60,5);
  dart.shapeColor=("black");

}

function draw() {
  background(0,128,128); 
  dart.velocityX=speed;
  dart.y= rand;
  if(collision(dart,wall)){
    dart.velocityX=0;
   
  }
 
  drawSprites();
}



