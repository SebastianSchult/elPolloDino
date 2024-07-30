class ThrowableObject extends MovableObject {
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

  throw() {
    this.speedY = 20;
    this.applyGravity();
    setInterval(() => {
      this.x += 15;
    }, 25);
  }
}
