class Ground{
    
    constructor(x, y, width, height) {

        var Option = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, Option);
        World.add(world, this.body)

        this.width = width;
        this.height = height;

    }

    display() {

        rectMode(CENTER)
        
        fill("blue")
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

    }



        
    }