
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
	isStatic:true,
	restitution:0.3,
	friction:0,
	density:1.2
	}

	ground =new Ground(199,1000,20,1000);

	Engine.run(engine);

	ball = Bodies.circle(200,450,20,ball_options);
	World.add(world,ball);

    ellipseMode(RADIUS);
	rectMode(CENTER);
}

function draw() {
  background(0);

  if(keyDown("UP_ARROW")){
	force();
  }
 
  ellipse(ball.position.x,ball.position.y,20);

  ground.show();

}

function force() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05});
  }

