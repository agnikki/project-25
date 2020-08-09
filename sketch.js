
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,box,box1,box2;
function preload()
{
  dimg=loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	
	ball = new Ball(200,300,30)
	ground = new Ground(385,685,840,15);
	box = new Box(560,620,20,100);
	box1 = new Box(670,665.5,200,20);
  box2 = new Box(780,620,20,100);

}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  ground.display();
  ball.display();
  box.display();
  box1.display();
  box2.display();
  imageMode(CENTER);
  image(dimg,650,600,300,150);
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW) {

  Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-35});
}
}


