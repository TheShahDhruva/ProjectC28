class ball {
    constructor(x, y){
        var options = {
            isStatic:false,
            friction: 0.02
        }
        this.body = Bodies.circle(x, y, 27.5, options);
        this.radius = 27.5;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0, 0, 70, 70);
        pop();
    }
}