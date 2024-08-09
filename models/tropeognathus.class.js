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

    /**
 * Initializes a new instance of the Tropeognathus class.
 *
 * @constructor
 * @return {void} This function does not return anything.
 */
    constructor() {
        super().loadImage('img/dinoworld/Tropeognathus/PurpleFly (1).png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 750 + Math.random() * 3000;
        this.y = 20 + Math.random() * 50;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

        /**
     * Animates the object by moving it left and playing walking animations.
     *
     * This function sets up two intervals using `setInterval`. The first interval
     * moves the object to the left by calling the `moveLeft` function and sets
     * the `otherDirection` property to `true`. The second interval plays a
     * walking animation by calling the `playAnimation` function with the
     * `IMAGES_WALKING` array and sets the `otherDirection` property to `true`.
     *
     * @return {void} This function does not return anything.
     */
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