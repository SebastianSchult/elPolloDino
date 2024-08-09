class Bottles extends MovableObject {
  height = 60;
  width = 60;

  IMAGES_BOTTLE = [
    "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];

  /**
   * Initializes a new instance of the Bottles class.
   *
   * @description Sets the initial position of the bottle, loads the bottle images, and starts the bottle animation.
   * @return {void} No return value.
   */
  constructor() {
    super().loadImage(this.IMAGES_BOTTLE[0]);
    this.loadImages(this.IMAGES_BOTTLE);
    this.x = 500 + Math.random() * 2200;
    this.y = 150 + Math.random() * 150;
    this.animatedBottle();
  }

  /**
   * Animates the bottle by playing the animation at regular intervals.
   *
   * @return {void}
   */
  animatedBottle() {
    setInterval(() => this.playAnimation(this.IMAGES_BOTTLE), 400);
  }
}
