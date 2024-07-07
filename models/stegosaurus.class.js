class Stegosaurus extends MovableObject {

    y= 350;
    height = 80;
    width = 150;


    IMAGES_WALKING = [
        'img/dinoworld/Stegosaurus/Walk (1).png',
        'img/dinoworld/Stegosaurus/Walk (2).png',
        'img/dinoworld/Stegosaurus/Walk (3).png',
        'img/dinoworld/Stegosaurus/Walk (4).png',
        'img/dinoworld/Stegosaurus/Walk (5).png',
        'img/dinoworld/Stegosaurus/Walk (6).png',
        'img/dinoworld/Stegosaurus/Walk (7).png',
        'img/dinoworld/Stegosaurus/Walk (8).png',
        'img/dinoworld/Stegosaurus/Walk (9).png',
        'img/dinoworld/Stegosaurus/Walk (10).png',
    ];


    constructor() {
        super().loadImage('img/dinoworld/Stegosaurus/Walk (1).png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 1520 + Math.random() * 1200;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    //chicken_sound = new Audio('audio/chicken.mp3') ;
  

    animate() {
        setInterval(() => {
            this.moveLeft();
            this.otherDirection = true;
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            this.otherDirection = true;
        }, 200);
        
        
    }
  

}