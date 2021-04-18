class Log{
    constructor(x,y,h,angle){
        var options = {restitution:0.3,friction:7,density:7}
        this.body = Matter.Bodies.rectangle(x,y,20,h,options)
        Matter.World.add(myworld,this.body)
    this.w = 20
    this.h = h
    Matter.Body.setAngle(this.body,angle)
    }
    display()
    {
    var p = this.body.position
    var angle = this.body.angle
    rectMode(CENTER)

    angleMode(RADIANS)
    push()
    fill("brown")
    strokeWeight(4)
    translate(p.x,p.y)
    rotate(angle)
    rect(0,0,this.w,this.h)
    pop()
    
    
    
    }}