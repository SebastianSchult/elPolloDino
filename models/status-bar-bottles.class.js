class BottlesBar extends DrawableObject {
  percentage = 0;

  IMAGES = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
  ];

  /**
   * Constructor for initializing the object.
   *
   * @param None
   * @return None
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 20;
    this.y = 40;
    this.width = 200;
    this.height = 50;
    this.setPercentage(0);
  }

  /**
   * Sets the percentage and updates the image accordingly.
   *
   * @param {number} percentage - The percentage to set.
   * @return {void}
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
    if (this.percentage >= 8) {
      return 5;
    } else if (this.percentage > 6) {
      return 4;
    } else if (this.percentage > 4) {
      return 3;
    } else if (this.percentage > 2) {
      return 2;
    } else if (this.percentage > 0) {
      return 1;
    } else {
      return 0;
    }
  }
}
