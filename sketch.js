var bg
var sleep
var brush
var gym
var eat 
var drink 
var move

function preload(){
  bg=loadImage("image/iss.png")
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym21.png","images/gym22.png");
  eat=loadAnimation("add image urls here");
  drink=loadAnimation("add image urls here");
  move=loadAnimation("add image urls here");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",brush);
    astronaut.changeAnimation("gyming");
    astronaut.y=-350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",brush);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",brush);
    astronaut.changeAnimation("bathing");
    astronaut.y=-350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
}



function draw() {
  background(255,255,255);  
  drawSprites();
}