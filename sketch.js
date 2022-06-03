//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
var bg;
var maxSnow = 100;
var snow;
var snow1 = [];
function preload() {
  bg = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");

}

function setup() {
  createCanvas(1300, 600);

  // engine = Engine.create();
  //world = engine.world;

  //snow = new Snow(20, 20);

}

function draw() {

  background(bg);
  //Engine.update(engine);

  snow = createSprite(100, -40, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.1;
  snow.y = snow.y + 12;

  snow1 = createSprite(300, -40, 50, 50);
  snow1.addImage(snowImg);
  snow1.scale = 0.1;

  snow2 = createSprite(400, -40, 50, 50);
  snow2.addImage(snowImg);
  snow2.scale = 0.1;

  snow3 = createSprite(500, -40, 50, 50);
  snow3.addImage(snowImg);
  snow3.scale = 0.1;

  snow4 = createSprite(800, -40, 50, 50);
  snow4.addImage(snowImg);
  snow4.scale = 0.1;

  snow5 = createSprite(1000, -40, 50, 50);
  snow5.addImage(snowImg);
  snow5.scale = 0.1;

  snow6 = createSprite(200, -40, 50, 50);
  snow6.addImage(snowImg);
  snow6.scale = 0.1;

  snow7 = createSprite(1100, -40, 50, 50);
  snow7.addImage(snowImg);
  snow7.scale = 0.1;

  snow8 = createSprite(900, -40, 50, 50);
  snow8.addImage(snowImg);
  snow8.scale = 0.1;

  if (keyDown(DOWN_ARROW)) {
    snow.velocityY = 4;
    snow1.velocityY = 5;
    snow2.velocityY = 6;
    snow3.velocityY = 7;
    snow4.velocityY = 8;
    snow5.velocityY = 9;
    snow6.velocityY = 2;
    snow7.velocityY = 4;
    snow8.velocityY = 3;
  }

  //snow.display();

  // if (frameCount % 60 === 0) {
  //  snow1 = new Snow(random(1, 1300), 0);
  //}
  //for (var i = 0; i < snow1; i++) {
  //snow1.display();  
  drawSprites();
  //}
}