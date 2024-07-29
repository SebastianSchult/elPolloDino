class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 1.5;
  energy = 100;
  lastHit = 0;
  offsetX = 50;
  offsetY = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 249;
    }
  }

  isColliding(mo) {
    return (
      this.x + this.width - this.offsetX >= mo.x &&
      this.x <= mo.x + mo.width - this.offsetX &&
      this.y + this.offsetY + this.height >= mo.y &&
      this.y + this.offsetY + 125 <= mo.y + mo.height
    );
  }

  hit() {
    if (this instanceof Endboss)
    this.setEndbossEnergy();
    if (this instanceof Chicken)
    this.setChickenEnergy();
    if (this instanceof Stegosaurus)
    this.setStegoEnergy();
    else (this instanceof Character)
    this.setCharacterEnergy();
  }
  

  setCharacterEnergy() {
    this.energy -= 0.1;
    
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  setStegoEnergy() {
    this.energy -= 100;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  setChickenEnergy() {
    this.energy -= 100;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }
    

  setEndbossEnergy() {
    this.energy -= 20;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  isDead() {
    return this.energy <= 0;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 22;
  }

  playedAnimationCounter() {
    return this.playedAnimation < 9;
  }
}
