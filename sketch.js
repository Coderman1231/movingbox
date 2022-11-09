var ball



function setup() {
  createCanvas(1200,800);
ball = createSprite(600,400,100,100)


}




function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
ball.position.x +=5
}

if(keyIsDown(LEFT_ARROW)){
  ball.position.x -=5
}
if(keyIsDown(UP_ARROW)){
  ball.position.y -=5
}
if(keyIsDown(DOWN_ARROW)){
  ball.position.y +=5
}


  drawSprites()







}




