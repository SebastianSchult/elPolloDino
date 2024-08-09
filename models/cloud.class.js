class Cloud extends MovableObject {
  y = 5;
  width = 200;
  height = 80;

  /**
   * Initializes a new instance of the class.
   *
   * @param {number} x - The initial x position.
   * @param {string} cloud - The image of the cloud.
   * @return {void}
   */
  constructor(x, cloud) {
    super().loadImage(cloud);
    this.x = x;
    this.y = 5 + Math.random() * 25;
    this.animate();
  }

  /**
   * Animates the cloud object by continuously moving it to the left.
   *
   * @return {void}
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
      this.otherDirection = false;
    }, 1000 / 60);
  }
}
