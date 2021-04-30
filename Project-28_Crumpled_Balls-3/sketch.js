const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
	Ball = new Balls(200, 100, 70);
	Ground = new Ground(600,590, width, 30);
	Left = new Bin(800, 470, 30, 150);
	Right = new Bin(1000, 470, 30, 150);
	Down = new Can(900, 470, 230, 210);
	Launch = new Launcher(Ball.body,{x : 200, y : 100})
	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(220);
  Ball.display();
  Ground.display();
  Down.display();
  Launch.display();
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(Ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    Launch.fly();
}
