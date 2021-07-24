const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, rightWall, leftWall;
var bridge, jointLink;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  bridge = new Bridge(17, {x:200, y:height-270});
  jointPoint = new Base(width-320, height-270, 20, 20);

  //bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 });
  //jointPoint = new Base(width - 600, height / 2 + 10, 40, 20);


  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  ground = new Base(width/2, height-10, width, 20);
  leftWall = new Base(150, height-150, 400, 270);
  rightWall = new Base(width-150, height-150, 400, 270);

  for (var i=0; i < 8; i++){
    var x = random(width/2 - 200, width/2 + 200);
    var y = random(-10, 100);
    var stone = new Stone(x, y, 80,80);
    stones.push(stone);
  }

}

function draw() {
  background(51);
  Engine.update(engine);

  bridge.show();
  ground.display();
  rightWall.display();
  leftWall.display();

  for (var i=0; i < 8; i++){
    stones[i].display();
  }
}