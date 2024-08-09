class World {
  character = new Character();
  level = level1;
  backgroundObjects = [];
  canvas;
  ctx;
  keyboard;
  cameraX = 0;
  statusBar = new StatusBar();
  bottlesBar = new BottlesBar();
  collectedBottles = 0;
  coinsBar = new CoinsBar();
  collectedCoins = 0;
  statusBarEndboss = new StatusBarEndboss();
  endbossEnergy = 5;
  throwableObjects = [];
  soundManager = new Sounds();

  /**
   * Initializes a new instance of the World class.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
   * @param {Keyboard} keyboard - The keyboard object to listen for input.
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.generateBackgroundObjects();
    this.draw();
    this.setWorld();
    this.run();
  }

  /**
   * Sets the world property of the character object to the current world instance.
   *
   * @return {void} This function does not return a value.
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * Runs the function to check collisions and throw objects at a specified interval.
   *
   * @return {void} This function does not return a value.
   */
  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 200);
  }

  /**
   * Checks for collisions between different objects in the game world at a specified interval.
   *
   * @return {void} This function does not return a value.
   */
  checkCollisions() {
    setStoppableInterval(() => {
      this.checkEnemieCollision();
      this.checkBottleCollision();
      this.checkCoinCollision();
      this.checkBottleCollisionEnemy();
      this.checkEndbossCollision();
      this.checkEndbossHitCharacter();
    }, 40);
  }

  /**
   * Checks if the character has collided with the end boss and applies damage if necessary.
   *
   * @return {void} This function does not return a value.
   */
  checkEndbossHitCharacter() {
    this.level.endboss.forEach((endboss) => {
      if (this.character.isColliding(endboss)) {
        this.character.hit();
        this.soundManager.playSound("hurt");
        this.statusBar.setPercentage(this.character.energy);
      }
    });
  }

  /**
   * Checks for collision between the end boss and throwable objects.
   *
   * @return {void}
   */
  checkEndbossCollision() {
    if (this.collectedBottles > 0) {
      this.throwableObjects = this.throwableObjects.filter((bottle) => {
        if (this.level.endboss[0].isColliding(bottle)) {
          this.soundManager.playSound("endboss");
          this.soundManager.playSound("glass");
          this.endbossEnergy--;
          this.level.endboss[0].hit();
          this.statusBarEndboss.setPercentage(this.endbossEnergy);
          return false;
        } else {
          return true;
        }
      });
    }
  }

  /**
   * Checks for collision between throwable bottles and enemies in the level.
   *
   * @return {void} This function does not return a value.
   */
  checkBottleCollisionEnemy() {
    this.throwableObjects.forEach((bottle, index) => {
      this.level.enemies.forEach((enemy) => {
        if (bottle.isColliding(enemy)) {
          this.soundManager.playSound("glass");
          enemy.hit();
        }
      });
    });
  }

  /**
   * Checks for collision between the character and coins in the level.
   * If a collision is detected, the coin is removed, a sound is played,
   * and the collected coins counter is incremented.
   *
   * @return {void} This function does not return a value.
   */
  checkCoinCollision() {
    this.level.coins = this.level.coins.filter((coin) => {
      if (this.character.isColliding(coin)) {
        this.soundManager.playSound("coin");
        this.collectedCoins++;
        this.coinsBar.setPercentage(this.collectedCoins);
        return false;
      }
      return true;
    });
  }

  /**
   * Checks for collision between the character and bottles in the level.
   * If a collision is detected, the bottle is removed, a sound is played,
   * and the collected bottles counter is incremented.
   *
   * @return {void} This function does not return a value.
   */
  checkBottleCollision() {
    this.level.bottles = this.level.bottles.filter((bottle) => {
      if (this.character.isColliding(bottle)) {
        this.soundManager.playSound("bottle");
        this.collectedBottles++;
        this.bottlesBar.setPercentage(this.collectedBottles);
        return false;
      }
      return true;
    });
  }

  /**
   * Checks for collision between the character and enemies in the level.
   * If a collision is detected, the following actions are taken:
   * - If the character is above the ground and not hurt, it jumps and the enemy is hit.
   *   After 500ms, the enemy is removed from the level.
   * - If the character is not above the ground or is hurt, it is hit and the hurt sound is played.
   *   The status bar energy is updated.
   *
   * @return {void} This function does not return a value.
   */
  checkEnemieCollision() {
    this.level.enemies.forEach((enemy, index) => {
      if (this.enemyNotDeadAndCharisColliding(enemy)) {
        if (this.charAboveGroundAndNotHurt()) this.charHitsEnemy(enemy, index);
        else {
          this.charIsHit();
        }
      }
    });
  }

    /**
   * Checks if the enemy is not dead and colliding with the character.
   *
   * @param {Object} enemy - The enemy object to check collision with.
   * @return {boolean} Returns true if the enemy is not dead and colliding with the character, otherwise false.
   */
  enemyNotDeadAndCharisColliding(enemy) {
    return !enemy.isDead() && this.character.isColliding(enemy);
  }

    /**
   * Checks if the character is above ground and not hurt.
   *
   * @return {boolean} true if the character is above ground and not hurt, false otherwise
   */
  charAboveGroundAndNotHurt() {
    return this.character.isAboveGround() && !this.character.isHurt();
  }

    /**
   * Handles the character hitting an enemy.
   *
   * @param {Object} enemy - The enemy object that was hit.
   * @param {number} index - The index of the enemy in the level's enemies array.
   * @return {void} This function does not return a value.
   */
  charHitsEnemy(enemy, index) {
    this.character.jump(10);
    enemy.hit();
    setTimeout(() => this.level.enemies.splice(index, 1), 500);
  }

  /**
   * Hits the character and plays a hurt sound. Also updates the status bar energy percentage.
   *
   * @return {void} This function does not return a value.
   */
  charIsHit() {
    this.character.hit();
    this.soundManager.playSound("hurt");
    this.statusBar.setPercentage(this.character.energy);
  }

  /**
   * Checks if the player is throwing an object and if there are any bottles collected.
   * If so, creates a new ThrowableObject and adds it to the throwableObjects array.
   * Decrements the number of collected bottles and updates the bottlesBar.
   *
   * @return {void} This function does not return anything.
   */
  checkThrowObjects() {
    if (
      this.keyboard.THROW &&
      this.collectedBottles > 0 &&
      this.character.otherDirection == false
    ) {
      let bottle = new ThrowableObject(
        this.character.x + 100,
        this.character.y + 90
      );
      this.throwableObjects.push(bottle);
      this.collectedBottles--;
      this.bottlesBar.setPercentage(this.collectedBottles);
    }
  }

  /**
   * Generates background objects for the game world.
   *
   * This function creates a set of background objects by alternating between two sets of images
   * and offsetting them to create a seamless background.
   *
   * @return {void} This function does not return anything.
   */
  generateBackgroundObjects() {
    const layersBlock1 = [
      "img/dino_background/4/1.png",
      "img/dino_background/4/2.png",
      "img/dino_background/4/3.png",
      "img/dino_background/4/4.png",
      "img/dino_background/4/5.png",
    ];

    const layersBlock2 = [
      "img/dino_background/4/1.png",
      "img/dino_background/4/2.png",
      "img/dino_background/4/3.png",
      "img/dino_background/4/4.png",
      "img/dino_background/4/5.png",
    ];

    for (let i = -1; i < 5; i++) {
      let offset = i * 719;
      let layers = i % 2 === 0 ? layersBlock1 : layersBlock2;
      for (let j = 0; j < layers.length; j++) {
        this.backgroundObjects.push(new BackgroundObject(layers[j], offset));
      }
    }
  }

  /**
   * Draws the game world on the canvas.
   *
   * @return {void} This function does not return anything.
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.cameraX, 0);
    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.tropeognathus);
    this.ctx.translate(-this.cameraX, 0);
    // ----- Space for fixed Objects -----
    this.addToMap(this.statusBar);
    this.addToMap(this.bottlesBar);
    this.addToMap(this.coinsBar);
    this.addToMap(this.statusBarEndboss);
    this.ctx.translate(this.cameraX, 0);
    this.addObjectsToMap(this.throwableObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.endboss);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.level.coins);
    this.ctx.translate(-this.cameraX, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * Adds multiple objects to the map by iterating over the provided objects array.
   *
   * @param {Array} objects - An array of objects to be added to the map.
   * @return {void} This function does not return a value.
   */
  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  /**
   * Adds a movable object to the map, handling its drawing and border rendering.
   * If the object has an otherDirection property, it will be flipped before and after drawing.
   *
   * @param {Object} movableObject - The object to be added to the map.
   * @return {void} This function does not return a value.
   */
  addToMap(movableObject) {
    if (movableObject.otherDirection) 
    this.flipImage(movableObject);
    movableObject.draw(this.ctx);
    movableObject.drawBorder(this.ctx);
    if (movableObject.otherDirection) this.flipImageBack(movableObject);
    
  }

  /**
   * Flips the image of a movable object horizontally by translating the context,
   * scaling it by -1, and updating the object's x coordinate.
   *
   * @param {Object} movableObject - The object to be flipped.
   * @return {void} This function does not return a value.
   */
  flipImage(movableObject) {
    this.ctx.save();
    this.ctx.translate(movableObject.width, 0);
    this.ctx.scale(-1, 1);
    movableObject.x = movableObject.x * -1;
  }

  /**
   * Reverts the image of a movable object to its original state by restoring the context and updating the object's x coordinate.
   *
   * @param {Object} movableObject - The object whose image is being reverted.
   * @return {void} This function does not return a value.
   */
  flipImageBack(movableObject) {
    movableObject.x = movableObject.x * -1;
    this.ctx.restore();
  }
}
