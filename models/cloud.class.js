class Cloud extends MovableObject {
    y = 5;
    width = 200;
    height = 80;


    constructor(x, cloud) {
        super().loadImage(cloud);
        this.x = x;
        this.y = 5 + Math.random() * 25;
        this.animate();
        
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
            this.otherDirection = false;
        }, 1000 / 60);

    }

    
       

}


