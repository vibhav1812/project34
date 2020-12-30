class Pendulum{
    constructor(x,y,c){
        var options = {
            restitution : 1,
            frictionAir : 0.0,
            friction : 0,
            slop : 1,
            inertia : Infinity
            //isStatic : true
        }
        this.body = Bodies.circle(x,y,40,options);
        World.add(world,this.body);
        this.color = c
    }

    display(){
        var pos = this.body.position,
            angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color)
        ellipseMode(CENTER);
        ellipse(0,0,80);
        pop();
    }
}