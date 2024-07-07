class ThrowableObject extends MovableObject {
   
  

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;       
        this.width = 60;
        this.height = 60;
        this.throw(); // test
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        },25);
    }
}

