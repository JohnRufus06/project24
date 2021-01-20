
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject ,dustbin1,duustbin2,dustbin3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paperObject= createsprite(56,46,55,55);
	paperObject.shapecolor=white;
	
	dustbin1=createsprite(600,700,20,20);
	dustbin2=createsprite(750,700,20,20);
	dustbin=createsprite6(00,600,20,20);

}

function keyPressed(){
  if(keycode === up_arrow){
	  matter.body.applyForce(paperObject.body.paperObject.body.position,{x:85,y=85});
  
  }


}
function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paperObject.dispaly();
  dustbin1.display();
  dustbin2.display();
}



