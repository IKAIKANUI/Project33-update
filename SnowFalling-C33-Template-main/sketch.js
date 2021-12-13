


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var snow;

var Snow1;

function preload(){
  Snow1 = loadImage("snow1.jpg");
  snowFlake = loadImage("snow4.webp");
 
}

function setup() {
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;
    
    
    
    //snowFlake = new Snow(Math.round(random(1,799)), 10, 10,20)
}
function draw() {
    background(Snow1)
    Engine.update(engine);
    //snowFlake.display();
    Snow();
    drawSprites();
}
function Snow(){
  var snow = createSprite(Math.round(random(1,799)), 10, 20)
  snow.addImage(snowFlake);
  snow.velocityY = 4;
  snow.lifetime = 600;
  snow.scale = 0.06;

}
