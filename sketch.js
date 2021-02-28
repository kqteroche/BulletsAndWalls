var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(100,200,50,5);
  bullet.velocityX = 70;
  bullet.shapeColor = (225);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
}

function draw() {
  background(0);
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    
    if(deformation>10){
      wall.shapeColor = color("red");
    }

    if (deformation < 10){
      wall.shapeColor = ("green");
    }

  }

  drawSprites();
}