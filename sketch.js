var bullet,wall;
var speed,weight



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(23,87)

  bullet=createSprite(50,200,30,20)
  wall=createSprite(700,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
    bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  


if(hasCollided(bullet,wall))
{
  bullet.velocityX=0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor=color(255,0,0);
}

if(damage<10){
  wall.shapeColor=color(1,255,0)
}



}
drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true 
  }
  return false;

}
