class Character extends MovableObject {
  height = 180;
  width = 130;
  x = 230;
  y = 255;
  speed = 10;
  lastMoveTime = Date.now();
  world;
  playedAnimation = 0;
  walking_sound = new Audio("audio/running.mp3");
  jumping_sound = new Audio("audio/jump.mp3");

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

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
      }

      if (this.world.keyboard.LEFT && this.x > -360) {
        this.moveLeft();
        this.otherDirection = true;
        this.walking_sound.play();
      }

      if (this.world.keyboard.UP && !this.isAboveGround()) {
        this.jump();
        this.jumping_sound.play();
      }

      this.world.cameraX = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
        const lastMove = Date.now() - this.lastMoveTime;
        const sleepTime = lastMove >= 3500;
      if (this.isDead()) {
        if (this.playedAnimationCounter()) {
          this.playDeathAnimation();
        }
      
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
        this.lastMoveTime = Date.now();
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
        this.lastMoveTime = Date.now();
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(this.IMAGES_WALKING);
        this.lastMoveTime = Date.now();
      } else if (this.world.keyboard.D) {
        this.playAnimation(this.IMAGES_THROW);
        this.lastMoveTime = Date.now();
      } else if (sleepTime) {
        this.playAnimation(this.IMAGES_SLEEPING);
      }
      else {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 50);
  }

  playDeathAnimation() {
    this.playAnimation(this.IMAGES_DEAD);
    this.playedAnimation++;
  }
}
