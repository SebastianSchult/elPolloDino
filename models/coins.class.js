class Coins extends MovableObject {
  height = 100;
  width = 100;

  IMAGES_COINS = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  /**
   * Initializes a new instance of the Coins class.
   *
   * @description Sets the initial position of the coin, loads the coin images, and starts the coin animation.
   * @return {void} No return value.
   */
  constructor() {
    super().loadImage(this.IMAGES_COINS[0]);
    this.loadImages(this.IMAGES_COINS);
    this.x = 500 + Math.random() * 2200;
    this.y = 125 + Math.random() * 175;
    this.animatedCoin();
  }

  /**
   * Animates the coin by switching between different images at a specified interval.
   *
   * @return {void}
   */
  animatedCoin() {
    setInterval(() => this.playAnimation(this.IMAGES_COINS), 400);
  }
}
