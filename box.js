    class Box{
    
    constructor(x,y,width,height) {

        var Option = {
            restitution : 0.5
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height ,Option);
        World.add(world, this.body)

    }

    display() {

        var pos = this.body.position
        var angle = this.body.angle
        rectMode(CENTER)

       
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        
        fill("green")
        rect(0, 0, this.width, this.height);
        pop()

    }





        
    }