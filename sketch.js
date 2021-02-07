
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4;
var world,boy,chain1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,170,30);
	mango3=new mango(950,90,30);
	mango4=new mango(1200,140,30);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(220,340,20);

	chain1=new Chain(stoneObj.body,{x: 220, y: 440});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,380,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4)



  groundObject.display();
  stoneObj.display();
  restart();
}

function mouseDragged(){
	Body.setPosition(stoneObj.body,{x: mouseX, y: mouseY})
}
function restart(){
	if(keyCode===32){
		Body.setPosition(stoneObj.body,{x: 220,y:340})
		chain1=new Chain(stoneObj.body,{x: 220, y: 440});

		chain1.bodyA=1;
		
	}
}
function mouseReleased(){
	
	chain1.fly();
}

function detectcollision(lstone,lmango){
	mangoP=lmango.body.position;
	stoneP=lstone.body.position;

	var distance= dist(stoneP.x,stoneP.y,mangoP.x,mangoP.y);

	if(distance<=lmango.r+lstone.r){
		Body.setStatic(lmango.body,false)
	}
}


