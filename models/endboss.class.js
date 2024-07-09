class Endboss extends MovableObject {

    height = 350;
    width = 450;
    y = 105;
    hadFirstContact = false;
    

    IMAGES_IDLE = [
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

    IMAGES_WALKING = [
        'img/dinoworld/Spinosaurus/Walk (1).png',
        'img/dinoworld/Spinosaurus/Walk (2).png',
        'img/dinoworld/Spinosaurus/Walk (3).png',
        'img/dinoworld/Spinosaurus/Walk (4).png',
        'img/dinoworld/Spinosaurus/Walk (5).png',
        'img/dinoworld/Spinosaurus/Walk (6).png',
        'img/dinoworld/Spinosaurus/Walk (7).png',
        'img/dinoworld/Spinosaurus/Walk (8).png',
        'img/dinoworld/Spinosaurus/Walk (9).png',
        'img/dinoworld/Spinosaurus/Walk (10).png'
    ];

    IMAGES_ATTACK = [
        'img/dinoworld/Spinosaurus/Attack (1).png',
        'img/dinoworld/Spinosaurus/Attack (2).png',
        'img/dinoworld/Spinosaurus/Attack (3).png',
        'img/dinoworld/Spinosaurus/Attack (4).png',
        'img/dinoworld/Spinosaurus/Attack (5).png',
        'img/dinoworld/Spinosaurus/Attack (6).png',
        'img/dinoworld/Spinosaurus/Attack (7).png',
        'img/dinoworld/Spinosaurus/Attack (8).png',
        'img/dinoworld/Spinosaurus/Attack (9).png',
        'img/dinoworld/Spinosaurus/Attack (10).png'
    ];

    IMAGES_DEAD = [
        'img/dinoworld/Spinosaurus/Dead (1).png',
        'img/dinoworld/Spinosaurus/Dead (2).png',
        'img/dinoworld/Spinosaurus/Dead (3).png',
        'img/dinoworld/Spinosaurus/Dead (4).png',
        'img/dinoworld/Spinosaurus/Dead (5).png',
        'img/dinoworld/Spinosaurus/Dead (6).png',
        'img/dinoworld/Spinosaurus/Dead (7).png',
        'img/dinoworld/Spinosaurus/Dead (8).png',
        'img/dinoworld/Spinosaurus/Dead (9).png',
        'img/dinoworld/Spinosaurus/Dead (10).png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        
        this.x = 3000;
        this.animate();

    }

    animate() {
       let i = 0;

        setInterval(() => {

            if (i < 10) {
            this.playAnimation(this.IMAGES_IDLE);
            this.otherDirection = true;
            } else if ( i >= 10 && i < 20) {
                this.playAnimation(this.IMAGES_WALKING);
                this.otherDirection = true;
            } else if (i >= 20 && i < 30) {
                this.playAnimation(this.IMAGES_ATTACK);
                this.otherDirection = true;
                } else { ( i = 30)
                    i = 0;
                }
            i++;
            if (world.character.x > 2400 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact = true;
            }
        }, 200);
    }
}