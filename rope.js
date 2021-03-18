class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 250
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if (this.chain.bodyA) {
           var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("red")
        line(pointA.x, pointA.y, pointB.x, pointB.y);   
        }
      
    }
    fly(){
     this.chain.bodyA=null;

    }
}