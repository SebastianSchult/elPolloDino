class Character extends MovableObject {
  height = 180;
  width = 130;
  x = 230;
  y = 255;
  speed = 10;
  lastMoveTime = Date.now();
  world;
  playedDeathAnimation = false;
  deathAnimationIndex = 0;

  IMAGES_IDLE = [
    "img/dinoworld/Hero/Idle (1).png",
    "img/dinoworld/Hero/Idle (2).png",
    "img/dinoworld/Hero/Idle (3).png",
    "img/dinoworld/Hero/Idle (4).png",
    "img/dinoworld/Hero/Idle (5).png",
    "img/dinoworld/Hero/Idle (6).png",
    "img/dinoworld/Hero/Idle (7).png",
    "img/dinoworld/Hero/Idle (8).png",
    "img/dinoworld/Hero/Idle (9).png",
    "img/dinoworld/Hero/Idle (10).png",
  ];

  IMAGES_SLEEPING = [
    "img/dinoworld/Hero/Crouch (1).png",
    "img/dinoworld/Hero/Crouch (2).png",
    "img/dinoworld/Hero/Crouch (3).png",
    "img/dinoworld/Hero/Crouch (4).png",
    "img/dinoworld/Hero/Crouch (5).png",
    "img/dinoworld/Hero/Crouch (6).png",
    "img/dinoworld/Hero/Crouch (7).png",
    "img/dinoworld/Hero/Crouch (8).png",
    "img/dinoworld/Hero/Crouch (9).png",
    "img/dinoworld/Hero/Crouch (10).png",
  ];

  IMAGES_WALKING = [
    "img/dinoworld/Hero/Walk1.png",
    "img/dinoworld/Hero/Walk (2).png",
    "img/dinoworld/Hero/Walk (3).png",
    "img/dinoworld/Hero/Walk (4).png",
    "img/dinoworld/Hero/Walk (5).png",
    "img/dinoworld/Hero/Walk (6).png",
    "img/dinoworld/Hero/Walk (7).png",
    "img/dinoworld/Hero/Walk (8).png",
    "img/dinoworld/Hero/Walk (9).png",
    "img/dinoworld/Hero/Walk (10).png",
  ];

  IMAGES_JUMPING = [
    "img/dinoworld/Hero/Jump (1).png",
    "img/dinoworld/Hero/Jump (2).png",
    "img/dinoworld/Hero/Jump (3).png",
    "img/dinoworld/Hero/Jump (4).png",
    "img/dinoworld/Hero/Jump (10).png",
    "img/dinoworld/Hero/Jump (6).png",
    "img/dinoworld/Hero/Jump (7).png",
    "img/dinoworld/Hero/Jump (8).png",
    "img/dinoworld/Hero/Jump (9).png",
    "img/dinoworld/Hero/Jump (10).png",
  ];

  IMAGES_DEAD = [
    "img/dinoworld/Hero/Dead (1).png",
    "img/dinoworld/Hero/Dead (2).png",
    "img/dinoworld/Hero/Dead (3).png",
    "img/dinoworld/Hero/Dead (4).png",
    "img/dinoworld/Hero/Dead (5).png",
    "img/dinoworld/Hero/Dead (6).png",
    "img/dinoworld/Hero/Dead (7).png",
    "img/dinoworld/Hero/Dead (8).png",
    "img/dinoworld/Hero/Dead (9).png",
    "img/dinoworld/Hero/Dead (10).png",
  ];

  IMAGES_HURT = [
    "img/dinoworld/Hero/Hurt (1).png",
    "img/dinoworld/Hero/Hurt (2).png",
    "img/dinoworld/Hero/Hurt (3).png",
    "img/dinoworld/Hero/Hurt (4).png",
    "img/dinoworld/Hero/Hurt (5).png",
    "img/dinoworld/Hero/Hurt (6).png",
    "img/dinoworld/Hero/Hurt (7).png",
    "img/dinoworld/Hero/Hurt (8).png",
    "img/dinoworld/Hero/Hurt (9).png",
    "img/dinoworld/Hero/Hurt (10).png",
  ];

  IMAGES_THROW = [
    "img/dinoworld/Hero/Throw (1).png",
    "img/dinoworld/Hero/Throw (2).png",
    "img/dinoworld/Hero/Throw (3).png",
    "img/dinoworld/Hero/Throw (4).png",
    "img/dinoworld/Hero/Throw (5).png",
    "img/dinoworld/Hero/Throw (6).png",
    "img/dinoworld/Hero/Throw (7).png",
    "img/dinoworld/Hero/Throw (8).png",
    "img/dinoworld/Hero/Throw (9).png",
    "img/dinoworld/Hero/Throw (10).png",
  ];

  /**
   * Initializes a new instance of the Hero class.
   *
   * Loads the hero's images for different states (walking, jumping, hurt, dead, throwing, idle, sleeping)
   * and applies gravity and animation.
   *
   * @return {void}
   */
  constructor() {
    super().loadImage("img/dinoworld/Hero/Idle (1).png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_THROW);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SLEEPING);
    this.applyGravity();
    this.animate();
  }

  /**
   * Animates the character by continuously updating its position and playing
   * animations based on user input and the character's state.
   *
   * @return {void}
   */
  animate() {
    setStoppableInterval(() => this.moveCharacter(), 1000 / 60);

    setStoppableInterval(() => this.playCharacter(), 50);
  }

  /**
   * Moves the character if it is not dead.
   *
   * @return {void} This function does not return anything.
   */
  moveCharacter() {
    if (!this.isDead()) {
      if (this.canMoveRight()) this.moveCharRight();
      if (this.canMoveLeft()) this.moveCharLeft();
      if (this.canJump()) this.charJump();
      this.world.cameraX = -this.x + 100;
    }
  }

  /**
   * Checks if the character can move to the right.
   *
   * @return {boolean} True if the character can move to the right, false otherwise
   */
  canMoveRight() {
    return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
  }

  /**
   * Moves the character to the right and updates the character's state.
   *
   * @return {void} This function does not return a value.
   */
  moveCharRight() {
    this.moveRight();
    this.otherDirection = false;
    this.world.soundManager.playSound("run");
  }

  /**
   * Determines if the character can move to the left.
   *
   * @return {boolean} Returns true if the character can move to the left, false otherwise.
   */
  canMoveLeft() {
    return this.world.keyboard.LEFT && this.x > -360;
  }

  /**
   * Moves the character to the left and updates the character's state.
   *
   * This function moves the character to the left by calling the `moveLeft` method of the character object.
   * It also sets the `otherDirection` property of the character object to `true` to indicate that the character is moving in a direction other than right.
   * Finally, it plays the "run" sound using the `playSound` method of the `world.soundManager` object.
   *
   * @return {void} This function does not return a value.
   */
  moveCharLeft() {
    this.moveLeft();
    this.otherDirection = true;
    this.world.soundManager.playSound("run");
  }

  /**
   * Determines if the character can jump based on keyboard input and position.
   *
   * @return {boolean} True if the character can jump, false otherwise.
   */
  canJump() {
    return this.world.keyboard.UP && !this.isAboveGround();
  }

  /**
   * Initiates a character jump action.
   *
   * @return {void} This function does not return a value.
   */
  charJump() {
    this.jump();
    this.world.soundManager.playSound("jump");
  }

  /**
   * Plays the character animation based on the last move time and current state.
   *
   * This function determines the appropriate animation to play for the character based on the
   * time elapsed since the last move and the current state of the character. If the character is
   * dead, it checks if the death animation has been played and plays it if necessary. If the
   * character is hurt, it plays the hurt animation. If the character is above ground, it plays
   * the above ground animation. If the character is moving, it plays the walking animation.
   * If the character is throwing, it plays the throwing animation. If it's time to sleep,
   * it plays the sleeping animation. Otherwise, it plays the idle animation.
   *
   * @return {void} This function does not return a value.
   */
  playCharacter() {
    const lastMove = Date.now() - this.lastMoveTime;
    const sleepTime = lastMove >= 3500;
    if (this.charIsDead()) {
      if (this.playedDeathAnimationCounter()) this.charDeathanimation();
    } else if (this.isHurt()) this.charIsHurt();
    else if (this.isAboveGround()) this.charIsAboveGround();
    else if (this.charIsMoving()) this.charIsWalking();
    else if (this.charIsThrowing()) this.throwingChar();
    else if (sleepTime) this.playAnimation(this.IMAGES_SLEEPING);
    else {
      this.playAnimation(this.IMAGES_IDLE);
    }
  }

  /**
   * Returns a boolean indicating whether the death animation has been played or not.
   *
   * @return {boolean} True if the death animation has not been played, false otherwise.
   */
  playedDeathAnimationCounter() {
    return !this.playedDeathAnimation;
  }

  /**
   * Checks if the character is dead.
   *
   * @return {boolean} Returns true if the character is dead, false otherwise.
   */
  charIsDead() {
    return this.isDead();
  }

  /**
   * Plays the character death animation and sound effect.
   *
   * @return {void} This function does not return a value.
   */
  charDeathanimation() {
    this.world.soundManager.playSound("characterDeath");
    this.playDeathAnimation();
  }

  /**
   * Plays the hurt animation for the character and updates the last move time.
   *
   * @return {void} This function does not return a value.
   */
  charIsHurt() {
    this.playAnimation(this.IMAGES_HURT);
    this.lastMoveTime = Date.now();
  }

  /**
   * Checks if the character is above the ground.
   *
   * @return {void} This function does not return a value.
   */
  charIsAboveGround() {
    this.playAnimation(this.IMAGES_JUMPING);
    this.lastMoveTime = Date.now();
  }

  /**
   * Checks if the character is currently moving.
   *
   * @return {boolean} True if the character is moving, false otherwise.
   */
  charIsMoving() {
    return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
  }

  /**
   * Plays the walking animation for the character and updates the last move time.
   *
   * @return {void} This function does not return a value.
   */
  charIsWalking() {
    this.playAnimation(this.IMAGES_WALKING);
    this.lastMoveTime = Date.now();
  }

  /**
   * Checks if the character is currently throwing.
   *
   * @return {boolean} True if the character is throwing, false otherwise.
   */
  charIsThrowing() {
    return this.world.keyboard.THROW;
  }

  /**
   * Plays the throwing animation for the character and updates the last move time.
   *
   * @return {void} This function does not return a value.
   */
  throwingChar() {
    this.playAnimation(this.IMAGES_THROW);
    this.lastMoveTime = Date.now();
  }

  /**
   * Plays the death animation for the character.
   *
   * @return {void} No return value
   */
  playDeathAnimation() {
    const intervalId = setInterval(() => {
      if (this.deathAnimationIndex < this.IMAGES_DEAD.length) {
        this.img = this.imageCache[this.IMAGES_DEAD[this.deathAnimationIndex]];
        this.deathAnimationIndex++;
      } else {
        clearInterval(intervalId);
        this.playedDeathAnimation = true;
      }
    }, 100);
  }
}
