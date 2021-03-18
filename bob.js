class Bob{
    constructor(x,y){
    var options ={
        "restitution":0.1,
        density:2
    }
 this.body=Bodies.circle(x,y,50,options);
 this.r=50
 //this.image=loadImage("paper.png")
 World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
       
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS)
       
ellipse(0,0,this.r,this.r)
        pop();
    }
    }