class Support{
    constructor(bodyA, pointB){
        var options = {
            isStatic:false,
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB
        this.support = Constraint.create(options);
        World.add(world, this.support);
    }
    fly(){
        this.support.bodyA=null;
    }

    display(){
        var pointA = this.support.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}