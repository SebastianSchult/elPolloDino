class BackgroundObject extends MovableObject {
  width = 720;
  height = 480;

  /**
   * Creates a new instance of the BackgroundObject class.
   *
   * @param {string} imagePath - The path to the image to be loaded.
   * @param {number} x - The x-coordinate of the object.
   */
  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 480 - this.height;
  }
}
