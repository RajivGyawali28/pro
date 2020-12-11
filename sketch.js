const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,800,1200,20);

	boy = new Boy(180,680,200,360);

	tree = new Tree(600,600,400,480);

	mango1 = new Mango(830,520,45);
	mango2 = new Mango(850,460,45);
	mango3 = new Mango(905,435,45);
	mango4 = new Mango(1180,480,45);
	mango5 = new Mango(1050,350,45);
	mango6 = new Mango(1050,500,45);
	mango7 = new Mango(950,500,45);
	mango8 = new Mango(1160,550,45);
	mango9 = new Mango(1080,400,45);
	mango10 = new Mango(940,375,45);
	mango11 = new Mango(1000,450,45);
	mango12 = new Mango(1110,470,45);

	stone = new Stone(120,700,50);

	support1 = new Support(stone.body,{x:120, y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
  detectollision(stone, mango6);
  detectollision(stone, mango7);
  detectollision(stone, mango8);
  detectollision(stone, mango9);
  detectollision(stone, mango10);
  detectollision(stone, mango11);
  detectollision(stone, mango12);

  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  boy.display();

  stone.display();

  support1.display();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    stone.fly();
}

function detectollision(stone, mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y)
	if(distance<=mango.r+stone.r){
      Matter.Body.setStatic(mango.body, false)
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:120, y:600})
		launcherObject.attach(stone.body);
	}
}