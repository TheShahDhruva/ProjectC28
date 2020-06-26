const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var engine, world;
var trash;
var ground;
var cat;
var block1, block2, block3;
var trashimg;
var trashcanimg;
var launch, launchA;
var wallA, wallB, wallC, wallD;

function preload(){
    trashcanimg = loadImage("dustbingreen.png");
}

function setup() {
    createCanvas(1100,670);
    engine = Engine.create();
    world = engine.world;
    rectMode(CENTER);
    trash = new ball(200, 100);
    block1 = new trashCan(900,580,10,PI/2);
    block2 = new trashCan(975,652.5,10,PI/1);
    block3 = new trashCan(1050,580,10,PI/2);
    wallA = new walls(10, 335, PI/2);
    wallB = new walls(1090, 335, PI/2);
    wallC = new walls(500, 10, PI/1);
    wallD = new walls(550, 660, PI/1);
    image(trashcanimg, 975, 570, 190, 180);

    launch = new launcher(trash.body, {x:200, y:100});
}

function draw() {
    background(255);
    Engine.update(engine);
    launch.display();
    block2.display();
    block1.display();
    block3.display();
    trash.display();
    wallA.display();
    wallB.display();
    wallC.display();
    wallD.display();
    imageMode(CENTER);
    image(trashcanimg, 975, 570, 190, 180);
}
function mouseDragged(){
    Matter.Body.setPosition(trash.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
    launch.fly();
}
