const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var snow2=[]
var maxsnow=30;
var engine, world;
function preload() {
  background1 = loadImage("snow3.jpg")

}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  if(frameCount% 200===0) {
    for(var i=0; i<maxsnow; i++){
      snow2.push(new Snow(random(0,800),random(0,400),50,50))
      }
    }
}

function draw() {
  background(background1);
  Engine.update(engine); 
  
 

  for(var i=0; i<maxsnow; i++){
    snow2[i].display()
    }
  drawSprites();
}