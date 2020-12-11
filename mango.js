class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.image = loadImage("sprites/mango.png")
    World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.radius, this.radius)
        pop();
    }
}