
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	
	ball = new Ball(200,300,35)
	ground = new Ground(385,685,840,15);
	box = new Box(660,670,20,50);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  ball.display();
  box.display();
  box1.display();
  box2.display();
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW) {

  Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-35});
}
}


