var myengine, myworld;
var box1, box2, ground;
var pig1, pig2
var log1,log2,log3,log4,log5;
var bird
function setup() {
  createCanvas(1200,400);

  myengine = Matter.Engine.create()
  myworld = myengine.world
  
  ground = new Ground(width/2,height,width,20)


  box1  = new Box(700,320,70,70) 
  box2 = new Box(920,320,70,70)
pig1 = new Pig(810,350)
log1 = new Log(810,260,300,PI/2)

box3  = new Box(700,240,70,70) 
box4 = new Box(920,240,70,70)
pig2 = new Pig(810,210)
log2 = new Log(810,180,300,PI/2)
log3 = new Log(760,120,150,PI/7)
log4 = new Log(870,120,150,-PI/7)
bird = new Bird(100,100)
box5 = new Box(810,160,70,70)
}

function draw() {
  background(255,255,255);  
  Matter.Engine.update(myengine)

box1.display()
box2.display()
ground.display()
pig1.display()
log1.display()
pig2.display()
box3.display()
box4.display()
log2.display()
log3.display()
log4.display()
box5.display()
//bird.display()
}