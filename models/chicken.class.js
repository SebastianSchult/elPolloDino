class Chicken extends MovableObject {
  y = 355;
  height = 80;
  width = 70;
  chicken_sound = new Audio("audio/chicken.mp3");

  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

  /**
   * Initializes a new instance of the Chicken class.
   *
   * @description Loads the initial image, loads walking and dead images, sets the initial x position and speed, and starts the animation.
   */
  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 420 + Math.random() * 500;
    this.speed = 0.25 + Math.random() * 0.25;
    this.animate();
  }

  /**
   * Animates the chicken by moving it and animating its appearance.
   *
   * @param None
   * @return None
   */
  animate() {
    setStoppableInterval(() => this.moveChicken(), 1000 / 60);
    setStoppableInterval(() => this.animateChicken(), 200);
  }

  /**
   * Animates the chicken based on its status.
   *
   * @return {void}
   */
  animateChicken() {
    if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD);
    } else {
      this.playAnimation(this.IMAGES_WALKING);
    }
  }

  /**
   * Moves the chicken to the left if it is not dead.
   *
   * @return {void} This function does not return anything.
   */
  moveChicken() {
    if (!this.isDead()) {
      this.moveLeft();
    }
  }
}
