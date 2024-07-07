class Endboss extends MovableObject {

    height = 350;
    width = 450;
    y = 105;
    

    IMAGES_WALKING = [
        'img/dinoworld/Spinosaurus/Idle (1).png',
        'img/dinoworld/Spinosaurus/Idle (2).png',
        'img/dinoworld/Spinosaurus/Idle (3).png',
        'img/dinoworld/Spinosaurus/Idle (4).png',
        'img/dinoworld/Spinosaurus/Idle (5).png',
        'img/dinoworld/Spinosaurus/Idle (6).png',
        'img/dinoworld/Spinosaurus/Idle (7).png',
        'img/dinoworld/Spinosaurus/Idle (8).png',
        'img/dinoworld/Spinosaurus/Idle (9).png',
        'img/dinoworld/Spinosaurus/Idle (10).png'

    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 3000;
        this.animate();

    }

    animate() {
      
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            this.otherDirection = true;
        }, 200);
        
        
    }
}