class Box{
constructor(x,y,w,h){
    var options = {restitution:0.3,density:1,friction:1}
    this.body = Matter.Bodies.rectangle(x,y,w,h,options)
    Matter.World.add(myworld,this.body)
this.w = w
this.h = h

}
display()
{
var p = this.body.position
var angle = this.body.angle
rectMode(CENTER)
angleMode(RADIANS)
push()
translate(p.x,p.y)
rotate(angle)
rect(0,0,this.w,this.h)
pop()



}}