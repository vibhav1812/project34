class Sling{
    constructor(body1,point){
        var options = {
            bodyA : body1,
            pointB : point,
            stiffness : 1,
            angularStiffness : 1,
            length : 220
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position,
            pointB = this.sling.pointB;
        strokeWeight(3);
        stroke("aliceBlue");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}