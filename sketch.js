const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options ={
        isStatic: true
    }

    var ball2_options ={
        restitution: 1.0
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    //console.log(ground);

    ball = Bodies.rectangle(150,150,23,20,ball_options);
    World.add(world,ball);
    
    ball2 = Bodies.circle(100,100,20,ball2_options);
    World.add(world,ball2);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    rectMode(CENTER);
    rect(ball.position.x,ball.position.y,23,20);

    ellipseMode(CENTER);
    ellipse(ball2.position.x,ball2.position.y,40,40);


}