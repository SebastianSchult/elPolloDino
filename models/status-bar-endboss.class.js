class StatusBarEndboss extends DrawableObject {
  percentage = 100;

  IMAGES = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
  ];

  /**
   * Initializes a new instance of the class.
   *
   * @constructor
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 500;
    this.y = 0;
    this.width = 200;
    this.height = 50;
    this.setPercentage(100);
    this.stopAnimation();
  }

  /**
   * Sets the percentage of the status bar and updates the corresponding image.
   *
   * @param {number} percentage - The percentage value to set.
   * @return {void} This function does not return anything.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Resolves the image index based on the percentage value.
   *
   * @return {number} The index of the image to be used.
   */
  resolveImageIndex() {
    if (this.percentage > 4) {
      return 5;
    } else if (this.percentage > 3) {
      return 4;
    } else if (this.percentage > 2) {
      return 3;
    } else if (this.percentage > 1) {
      return 2;
    } else if (this.percentage >= 1) {
      return 1;
    } else {
      return 0;
    }
  }
}
