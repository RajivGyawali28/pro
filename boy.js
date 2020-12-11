class Boy{
    constructor(x,y,width,height){
        var options={
            isStaic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/boy.png")
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        pop();
    }
}