class Bottles extends MovableObject {
    height = 60;
    width = 60;
   
    IMAGES_BOTTLE = [
        "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
        "img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
    ];

    constructor() {
        super().loadImage(this.IMAGES_BOTTLE[0]);
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 500 + Math.random() * 2200;
        this.y = 125 + Math.random() * 175;
        this.animatedBottle();
    }


    
    animatedBottle() {
        setInterval(() => this.playAnimation(this.IMAGES_BOTTLE), 400);
    }
}

