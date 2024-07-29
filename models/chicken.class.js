class Chicken extends MovableObject{

    y = 355;
    height = 80;
    width = 70;


    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'

    ];


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 420 + Math.random() * 500;
        this.speed = 0.25 + Math.random() * 0.25;
        this.animate();
    }

    chicken_sound = new Audio('audio/chicken.mp3') ;
  

    animate() {
        setStoppableInterval(() => this.moveChicken(), 1000 / 60);
        setStoppableInterval(() => this.animateChicken(), 200);
    }

    animateChicken() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
   
         }
         else {
             this.playAnimation(this.IMAGES_WALKING);
         }
        }

    moveChicken() {
        if (!this.isDead()) {
            this.moveLeft();
        }
    }

    

     
    }
  

