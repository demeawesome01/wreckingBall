const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies 
const Constraint = Matter.Constraint 

var engine , world,ground,box1,box2,box3

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
   world =  engine.world 
   ground = new Ground(400,380,800,60) 
   box1 = new Box(600,250,100,100)
   box2 = new Box(600,200,80,80); 
   box3 = new Box(600,100,60,60); 
   ball = new Ball(200,250,100,100); 
   rope = new Rope(ball.body,{x:400,y:50})
}

function draw() {
  Engine.update(engine)
  background(0);  
  ground.display(); 
  box1.display(); 
  box2.display(); 
  box3.display();  
  ball.display(); 
  rope.display();
}