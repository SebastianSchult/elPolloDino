class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  height = 150;
  width = 100;

    /**
   * Loads an image from a given path.
   *
   * @param {string} path - The path to the image file.
   * @return {void} This function does not return a value.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Loads multiple images from an array of paths and stores them in the image cache.
   *
   * @param {string[]} arr - An array of paths to the image files.
   * @return {void} This function does not return a value.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

   /**
   * Draws a border around the object on the given canvas context.
   *
   * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
   * @return {void} This function does not return a value.
   */ 
  drawBorder(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof Endboss ||
      this instanceof Stegosaurus
    ) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
    }
  }

  /**
   * Draws an image on a canvas context.
   *
   * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
   * @return {void} This function does not return a value.
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * Stops the animation after a delay of 2000 milliseconds.
   * If the percentage is 0, it stops the game and displays an image
   * depending on the instance of the object.
   *
   * @return {undefined} This function does not return a value.
   */
  stopAnimation() {
    setInterval(() => {
      if (this.percentage == 0) {
        stopGame();
        if (this instanceof StatusBar) {
          lostImage();
        }
        if (this instanceof StatusBarEndboss) {
          wonImage();
        }
      }
    }, 2000);
  }
}
