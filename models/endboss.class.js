class Endboss extends MovableObject {

    height = 350;
    width = 450;
    y = 105;
    x = 3000;
    hadFirstContact = false;
    deadAnimationPlayed = false;
    animationIndex = 0;
    roar_sound = new Audio("audio/endboss_roarr.mp3");

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
        this.speed = 2;
        this.animate();
    }

    animate() {
        setStoppableInterval(() => this.animateEndboss(), 100);
        setStoppableInterval(() => this.moveEndboss(), 1000 / 60);
    }

    animateEndboss() {
        if (this.isDead()) {
            if (!this.deadAnimationPlayed) {
                this.endbossDeathAnimation();
            }
            return; 
        }

        if (this.animationIndex < 10) {
            this.playAnimation(this.IMAGES_IDLE);
            this.otherDirection = true;
        } else if (this.animationIndex >= 10 && this.animationIndex < 20) {
            this.playAnimation(this.IMAGES_WALKING);
            this.otherDirection = true;
        } else if (this.animationIndex >= 20 && this.animationIndex < 30) {
            this.roar_sound.play();
            this.playAnimation(this.IMAGES_ATTACK);
            this.otherDirection = true;
        } else {
            this.animationIndex = 0;
        }
        this.animationIndex++;

        if (world.character.x > 2400 && !this.hadFirstContact) {
            this.hadFirstContact = true;
            this.animationIndex = 0;
        }
    }

    moveEndboss() {
        if (this.deadAnimationPlayed) {
            return; // Keine Bewegung, wenn die Todesanimation abgespielt wurde
        }

        if ((world.level.endboss[0].x - world.character.x) < 500) {
            if (this.animationIndex >= 10 && this.animationIndex < 20) {
                this.moveLeft();
            }
        }
    }

    endbossDeathAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        if (this.animationIndex < this.IMAGES_DEAD.length) {
            this.animationIndex++;
        } else {
            this.deadAnimationPlayed = true;
            this.animationIndex = this.IMAGES_DEAD.length; 
        }
    }
}