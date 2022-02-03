const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

var backgroundImg;
var baseimage;
var playerimage;
var playerArcherIMG;

function preload() {
  backgroundImg = loadImage("assets/background.png");
  baseimage = loadImage("assets/base.png");
  playerimage = loadImage("assets/player.png");
  playerArcherIMG = loadImage("assets/playerArcher.png");
  

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //crear el cuerpo base del jugador
  var options = {
    isStatic: true
  };
  //crear el cuerpo del jugador
  playerBase = Bodies.rectangle(200,350,180,150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250,playerBase.position.y - 160, 50, 180, options);
  World.add(world, player);

  playerArcher = Bodies.rectangle(240,250,200,170,options);
  World.add(world, playerArcher);


}

function draw() {
  background(backgroundImg);

  image(playerimage,player.position.x,player.position.y,50,180);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);
  image(playerArcherIMG,playerArcher.position.x,playerArcher.position.y,80,200);
  

  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
