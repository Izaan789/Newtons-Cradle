
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof (700,100,40)
	
	ball1 = new Ball (420,500,60)
	ball2 = new Ball (540,500,60)
	ball3 = new Ball (660,500,60)
	ball4 = new Ball (780,500,60)
	ball5 = new Ball (900,500,60)
	
	chain1 = new Chain (ball1.body,{x:420,y:100});
	chain2 = new Chain (ball2.body,{x:540,y:100});
	chain3 = new Chain (ball3.body,{x:660,y:100});
	chain4 = new Chain (ball4.body,{x:780,y:100});
	chain5 = new Chain (ball5.body,{x:900,y:100});
}

function draw() {
  
  background("lightblue");
  Engine.update(engine);
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  fill("pink")
  roof1.display();
  fill("green")
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-0.7,y:0.7})

	}
	
}