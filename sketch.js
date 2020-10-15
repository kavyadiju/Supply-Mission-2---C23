var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,helicopterSound;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	helicopterSound=loadSound("helicopter-fly-over-03.mp3");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	helicopterSound.play();

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6



	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,height-20,200,20);
	leftWall=new Ground(width/2-90,height-80,20,100);
	rightWall=new Ground(width/2+90,height-80,20,100);

	packageBody = Bodies.circle(0 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  leftWall.display();
  rightWall.display();
  packageBody.position.x=helicopterSprite.x;
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,false);
	 }
	 if (keyCode === LEFT_ARROW) {
		helicopterSprite.x-=10;  
		 }
		 if (keyCode === RIGHT_ARROW) {
			helicopterSprite.x+=10;  
			 }
   }
   



