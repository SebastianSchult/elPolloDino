class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 1.5;
  energy = 100;
  lastHit = 0;
  offsetX = 50;
  offsetY = 0;

  /**
   * Applies gravity to the movable object, updating its vertical position and speed.
   *
   * @return {void}
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      } else {
        this.y = 249;
        this.speedY = 0;
      }
    }, 1000 / 25);
  }

  /**
   * Checks if the object is above the ground.
   *
   * @return {boolean} Returns true if the object is above the ground, otherwise false.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 220;
    }
  }

  /**
   * Checks if the current object is colliding with the given object.
   *
   * @param {Object} mo - The object to check collision with.
   * @return {boolean} Returns true if the objects are colliding, false otherwise.
   */
  isColliding(mo) {
    return (
      this.x + this.width - this.offsetX >= mo.x &&
      this.x <= mo.x + mo.width - this.offsetX &&
      this.y + this.offsetY + this.height >= mo.y &&
      this.y + this.offsetY + 125 <= mo.y + mo.height
    );
  }

  /**
   * Checks if the current object is colliding with the given object.
   *
   * @param {Object} mo - The object to check collision with.
   * @return {boolean} Returns true if the objects are colliding, false otherwise.
   */
  hit() {
    if (this instanceof Endboss) this.setEndbossEnergy();
    if (this instanceof Chicken) this.setChickenEnergy();
    if (this instanceof Stegosaurus) this.setStegoEnergy();
    else this instanceof Character;
    this.setCharacterEnergy();
  }

  /**
   * Reduces the character's energy by a small amount and updates the last hit timestamp if necessary.
   *
   * @return {void}
   */
  setCharacterEnergy() {
    this.energy -= 0.1;

    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Reduces the Stegosaurus' energy by a large amount and updates the last hit timestamp if necessary.
   *
   * @return {void}
   */
  setStegoEnergy() {
    this.energy -= 100;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Reduces the Chicken's energy by 100 and updates the last hit timestamp if necessary.
   *
   * @return {void}
   */
  setChickenEnergy() {
    this.energy -= 100;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Reduces the endboss' energy by a fixed amount and updates the last hit timestamp if necessary.
   *
   * @return {void}
   */
  setEndbossEnergy() {
    this.energy -= 20;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Checks if the object is currently hurt.
   *
   * @return {boolean} True if the object is hurt, false otherwise
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  /**
   * Checks if the object's energy has been depleted.
   *
   * @return {boolean} True if the object's energy is 0 or less, false otherwise
   */
  isDead() {
    return this.energy <= 0;
  }

  /**
   * Plays an animation by cycling through a list of images.
   *
   * @param {Array<string>} images - The list of image paths.
   * @return {void}
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Moves the object to the right by increasing its x-coordinate.
   *
   * @return {void}
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Moves the object to the left by decreasing its x-coordinate.
   *
   * @return {void} This function does not return a value.
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Sets the vertical speed of the object to 22 for jumping.
   *
   * @return {void}
   */
  jump() {
    this.speedY = 22;
  }

  /**
   * Checks if the 'playedAnimation' counter is less than 30.
   *
   * @return {boolean} Indicates whether the 'playedAnimation' counter is less than 30.
   */
  playedAnimationCounter() {
    return this.playedAnimation < 30;
  }
}
