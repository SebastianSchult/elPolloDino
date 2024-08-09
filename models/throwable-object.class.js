class ThrowableObject extends MovableObject {
  /**
   * Initializes a new instance of the ThrowableObject class with the specified x and y coordinates.
   *
   * @param {number} x - The x coordinate of the object.
   * @param {number} y - The y coordinate of the object.
   * @return {void} This function does not return anything.
   */
  constructor(x, y) {
    super().loadImage(
      "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.x = x - 25;
    this.y = y - 25;
    this.width = 60;
    this.height = 60;
    this.throw(); // test
  }

  /**
   * Simulates the throwing of a ThrowableObject by setting its initial speed and applying gravity.
   * The object's x position is then incremented at regular intervals to simulate movement.
   *
   * @return {void} This function does not return anything.
   */
  throw() {
    this.speedY = 20;
    this.applyGravity();
    setInterval(() => {
      this.x += 15;
    }, 25);
  }
}
