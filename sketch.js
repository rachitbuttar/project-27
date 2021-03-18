
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new ground(400,100,500,30);
bob1 = new Bob (400,350);
rope1= new Rope(bob1.body,{x:400,y:100})
bob2 = new Bob (300,350);
rope2= new Rope(bob2.body,{x:300,y:100})
bob3 = new Bob (200,350);
rope3= new Rope(bob3.body,{x:200,y:100})
bob4 = new Bob (500,350);
rope4= new Rope(bob4.body,{x:500,y:100})
bob5 = new Bob (600,350);
rope5= new Rope(bob5.body,{x:600,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
   bob5.display();
  rope5.display();
}
function keyPressed() { 
	
	
	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-50,y:-45}); } }





