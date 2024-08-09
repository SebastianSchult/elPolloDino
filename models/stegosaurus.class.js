class Stegosaurus extends MovableObject {
  y = 350;
  height = 80;
  width = 150;

  IMAGES_WALKING = [
    "img/dinoworld/Stegosaurus/Walk (1).png",
    "img/dinoworld/Stegosaurus/Walk (2).png",
    "img/dinoworld/Stegosaurus/Walk (3).png",
    "img/dinoworld/Stegosaurus/Walk (4).png",
    "img/dinoworld/Stegosaurus/Walk (5).png",
    "img/dinoworld/Stegosaurus/Walk (6).png",
    "img/dinoworld/Stegosaurus/Walk (7).png",
    "img/dinoworld/Stegosaurus/Walk (8).png",
    "img/dinoworld/Stegosaurus/Walk (9).png",
    "img/dinoworld/Stegosaurus/Walk (10).png",
  ];

  IMAGES_DEAD = [
    "img/dinoworld/Stegosaurus/Dead (1).png",
    "img/dinoworld/Stegosaurus/Dead (2).png",
    "img/dinoworld/Stegosaurus/Dead (3).png",
    "img/dinoworld/Stegosaurus/Dead (4).png",
    "img/dinoworld/Stegosaurus/Dead (5).png",
    "img/dinoworld/Stegosaurus/Dead (6).png",
    "img/dinoworld/Stegosaurus/Dead (7).png",
    "img/dinoworld/Stegosaurus/Dead (8).png",
    "img/dinoworld/Stegosaurus/Dead (9).png",
    "img/dinoworld/Stegosaurus/Dead (10).png",
  ];

  /**
   * Initializes a new instance of the Stegosaurus class.
   *
   * This constructor loads the initial image and additional images for walking and dead states.
   * It also sets the initial position, speed, and starts the animation.
   *
   * @return {void}
   */
  constructor() {
    super().loadImage("img/dinoworld/Stegosaurus/Walk (1).png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 1520 + Math.random() * 1200;
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
  }

  /**
   * Animates the Stegosaurus by setting intervals for movement and animation state updates.
   *
   * @return {void}
   */
  animate() {
    setStoppableInterval(() => this.moveStego(), 1000 / 60);
    setStoppableInterval(() => this.animateStego(), 200);
  }

  /**
   * Animates the Stegosaurus by playing the walking or dead animation based on its current state.
   *
   * @return {void}
   */
  animateStego() {
    if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD);
      this.otherDirection = true;
    } else {
      this.playAnimation(this.IMAGES_WALKING);
      this.otherDirection = true;
    }
  }

  /**
   * Moves the Stegosaurus to the left if it is not dead.
   *
   * @return {void} This function does not return a value.
   */
  moveStego() {
    if (!this.isDead()) {
      this.moveLeft();
    }
  }
}
