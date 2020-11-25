var fixedRect, movingRect;
var obstacle1,obstacle2;
var ball;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obstacle1=createSprite(700,400,50,50);
  obstacle1.shapeColor="purple";
  obstacle2=createSprite(500,200,80,50);
  obstacle2.shapeColor="purple";
  ball=createSprite(100,200,50,50);
  ball.shapeColor="orange";
  ball.velocityX=2;
 // ball.velocityY=3;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(is_touching(movingRect, fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

if(is_touching(ball, obstacle2)){
  ball.x = 100;
  ball.y = 200;
}
  
  drawSprites();
}

