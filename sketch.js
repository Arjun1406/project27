
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ball1,ball2,ball3,ball4,ball5,ground2,c1,c2,c3,c4,c5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(400,690,800,20);
ground2=new Ground(400,200,400,20);
ball1=new Ball(400,400);
ball2=new Ball(350,400);
ball3=new Ball(300,400);
ball4=new Ball(450,400);
ball5=new Ball(500,400);
c1=new Chain(ball1.body,ground2.body,0);
c2=new Chain(ball2.body,ground2.body,-50);
c3=new Chain(ball3.body,ground2.body,-100);
c4=new Chain(ball4.body,ground2.body,50);
c5=new Chain(ball5.body,ground2.body,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  ground2.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
c1.display();
c2.display();
c3.display();
c4.display();
c5.display();
 
}



