class Tropeognathus extends MovableObject {
    y = 20;
    height = 80;
    width = 70;


    IMAGES_WALKING = [
        'img/dinoworld/Tropeognathus/PurpleFly (1).png',
        'img/dinoworld/Tropeognathus/PurpleFly (2).png',
        'img/dinoworld/Tropeognathus/PurpleFly (3).png',
        'img/dinoworld/Tropeognathus/PurpleFly (4).png',
        'img/dinoworld/Tropeognathus/PurpleFly (5).png',
        'img/dinoworld/Tropeognathus/PurpleFly (6).png',
        'img/dinoworld/Tropeognathus/PurpleFly (7).png',
        'img/dinoworld/Tropeognathus/PurpleFly (8).png'
    ];

    constructor() {
        super().loadImage('img/dinoworld/Tropeognathus/PurpleFly (1).png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 750 + Math.random() * 3000;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

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