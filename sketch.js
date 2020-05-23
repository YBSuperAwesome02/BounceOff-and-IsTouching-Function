var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

 o1=createSprite(400, 300, 50, 40)
 o2=createSprite(300, 400, 40, 50)

}

function draw() {
  background(0,0,0); 
  o1.x=mouseX
  o1.y=mouseY 
bounceOff(movingRect, fixedRect)
if (isTouching(o1, o2)) {
  o1.shapeColor="blue"
  o2.shapeColor="blue"
}
  
drawSprites();
}

