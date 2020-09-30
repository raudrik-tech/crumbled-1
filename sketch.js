const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ground2,ball;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ground2_options={
isStatic:true

    }

    ground = Bodies.rectangle(100,370,200,20,ground_options);
    fill("yellow")
    World.add(world,ground);
    ground2=Bodies.rectangle(370,370,20,20,ground2_options)
    fill("yellow")

    World.add(world,ground)
    var paper_options ={
        isStatic:false,
        restitution: 0.3,
        friction:0.5,
        density:1.
    }

    paper = Bodies.circle(100,100,20, paper_options);
    fill(255,255,255)
    World.add(world,paper);

    dustbin1=createSprite(680,360,200,30)
    dustbin2=createSprite(590,330,20,35)
    dustbin3=createSprite(780,340,20,50)
dustbin1.shapeColor="red"
dustbin2.shapeColor="red"
dustbin3.shapeColor="red"

    console.log(ground);
}

function draw(){
    background(0);
    drawSprites();
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    rectMode(CENTER)
rect(ground2.position.x,ground2.position.x,900,20)

    ellipseMode(RADIUS);
    ellipse(paper.position.x, paper.position.y, 20, 20);
   
        
}
function keyPressed(){
if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}

}