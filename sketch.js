const Engine = Matter.Engine,
      Bodies = Matter.Bodies,
      Body = Matter.Body,
      World = Matter.World,
      Constraint = Matter.Constraint,
      Mouse = Matter.Mouse;

var engine,world, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1,sling2,sling3,sling4,sling5;
var mConstraint;


function setup() {
  canvas = createCanvas(1000,700);  
  engine = Engine.create();
  world = engine.world;

  let canvasMouse = Matter.Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity()

  let options = {
    mouse : canvasMouse
  }

  mConstraint = Matter.MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  pendulum1 = new Pendulum(310,500,"white");
  pendulum2 = new Pendulum(390,500,"yellow");
  pendulum3 = new Pendulum(470,500,"white");
  pendulum4 = new Pendulum(550,500,"yellow");
  pendulum5 = new Pendulum(630,500,"white");

  sling1 = new Sling(pendulum1.body,{x:310,y:200});
  sling2 = new Sling(pendulum2.body,{x:390,y:200});
  sling3 = new Sling(pendulum3.body,{x:470,y:200});
  sling4 = new Sling(pendulum4.body,{x:550,y:200});
  sling5 = new Sling(pendulum5.body,{x:630,y:200});
}

function draw() {
  background(0);  
  Engine.update(engine)

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged(){
  Body.setPosition(pendulum1,{x: mouseX, y: mouseY});
}