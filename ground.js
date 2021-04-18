class Ground{
constructor(x,y,w,h){
    var options = {isStatic:true,friction:1}
    this.body = Matter.Bodies.rectangle(x,y,w,h,options);
    Matter.World.add(myworld,this.body)
    this.w = w
    this.h = h
}
display(){
var p = this.body.position
rectMode(CENTER)
fill("black")
rect(p.x,p.y,this.w,this.h)
}

}