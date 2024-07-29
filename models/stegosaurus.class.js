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

    IMAGES_DEAD = [
        'img/dinoworld/Stegosaurus/Dead (1).png',
        'img/dinoworld/Stegosaurus/Dead (2).png',
        'img/dinoworld/Stegosaurus/Dead (3).png',
        'img/dinoworld/Stegosaurus/Dead (4).png',
        'img/dinoworld/Stegosaurus/Dead (5).png',
        'img/dinoworld/Stegosaurus/Dead (6).png',
        'img/dinoworld/Stegosaurus/Dead (7).png',
        'img/dinoworld/Stegosaurus/Dead (8).png',
        'img/dinoworld/Stegosaurus/Dead (9).png',
        'img/dinoworld/Stegosaurus/Dead (10).png',

    ];


    constructor() {
        super().loadImage('img/dinoworld/Stegosaurus/Walk (1).png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1520 + Math.random() * 1200;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    //chicken_sound = new Audio('audio/chicken.mp3') ;
  


    animate() {
        setStoppableInterval(() => this.moveStego(), 1000 / 60);
        setStoppableInterval(() => this.animateStego(), 200);
    }

    animateStego() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
            this.otherDirection = true;
         }
         else {
             this.playAnimation(this.IMAGES_WALKING);
             this.otherDirection = true;
         }
        }

    moveStego() {
        if (!this.isDead()) {
            this.moveLeft();
        }
    }
  

}