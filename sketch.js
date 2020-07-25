var ball,ball1;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var body,body1,body2;
var paperimage,dustimage;

function preload(){
paperimage=loadImage("paper.png");
dustimage=loadImage("dustbingreen.png");

}





function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	
var options_ball={
restitution:0.3,
friction:0.5,
density:1.2



}
	ball1=createSprite(width/2, 700,10,10,options_ball);
	ball1.shapeColor=color("white")
	ball1.addImage(paperimage,"paper.png");
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("orange")


	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(width/2 , 100, 200 , { isStatic:true});
	World.add(world,ball);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
 
	body=new Block(700,640,10,120);
body1=new Block2(620,610,50,70);
body2=new Block2(780,610,50,70)





}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.position.x= ball.position.x 
  ball1.position.y= ball.position.y 
 
 body.display();
 body1.display();
 body2.display();
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(ball,false);
	//ball.position.x=650;
	//ball.position.y=610;
// Matter.ball.applyForce(ball.Bodies,ball.Bodies.position,{x:85,y:-85})

}
}



