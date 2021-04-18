class Bird{
    constructor(x,y){
        var options = {restitution:0.8,density:1,friction:1}
        this.body = Matter.Bodies.rectangle(x,y,50,50,options)
        Matter.World.add(myworld,this.body)
    this.w = 50
    this.h = 50
    
    }
    display()
    {
    var p = this.body.position
    p.x = mouseX
    p.y = mouseY
    var angle = this.body.angle
    rectMode(CENTER)
    angleMode(RADIANS)
    push()
    fill("red")
    translate(p.x,p.y)
    rotate(angle)
    rect(0,0,this.w,this.h)
    pop()
    
    
    
    }}