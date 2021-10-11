
var bath, bath2, bath3;
var brush, drink, drink1;
var eat,gym;
var move, move1, bg, sleep1, astronaut, rightEdge, leftEdge,down, up; 


function setup() {
  createCanvas(800, 800);

  astronaut = createSprite(400, 400);
  astronaut.addAnimation("sleeping", sleep1);
  astronaut.scale = 0.1;
  
}


function preload() {
  bg = loadImage("images/iss.png");
  sleep1 = loadAnimation("images/sleep.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
  brush = loadAnimation("images/brush.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");

}


function draw() {
  background(bg);

  textSize(20);
  
  text("Instructions:", 10, 100);
  text("Up Arrow = Brushing", 10, 120);
  text("Down Arrow = Gymming", 10, 140);
  text("Right Arrow = Eating", 10, 160);
  text("Left Arrow = Bathing", 10, 180);
  text("m key = Moving", 10, 200);

  

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush );
    astronaut.changeAnimation("brushing");
    astronaut.y = 600;
    astronaut.velocityX = 0;
    astronaut.velocityy= 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym );
    astronaut.changeAnimation("gymming");
    astronaut.y = 600;
    astronaut.velocityX = 0;
    astronaut.velocityy= 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath );
    astronaut.changeAnimation("bathing");
    astronaut.y = 600;
    astronaut.velocityX = 0;
    astronaut.velocityy= 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat );
    astronaut.changeAnimation("eating");
    astronaut.y = 500;
    astronaut.velocityX = 0;
    astronaut.velocityy= 0;
  }

  if(keyDown("m")){
    astronaut.velocityX = 2;
    astronaut.velocityY = 1;
  }

  leftEdge = createSprite(-100, -100, 10, 2000);
  astronaut.bounceOff(leftEdge);

  rightEdge = createSprite(900, 200, 10, 2000);
  astronaut.bounceOff(rightEdge);

  down = createSprite(0, 850, 2000, 10);
  down.shapeColor = "red"
  astronaut.bounceOff(down);
  
  up = createSprite(900, -50, 2000, 10);
  astronaut.bounceOff(up);
  
  drawSprites();
  
}