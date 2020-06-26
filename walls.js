class walls{
    constructor(x,y,angle){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 1250,20,options);
        this.width = 1250;
        this.height = 20;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(1);
        stroke(200);
        rect(0, 0, this.width, this.height);
        pop();
    }
}