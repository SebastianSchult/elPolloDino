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
    statusBarEndboss = new StatusBarEndboss();
    throwableObjects = [];
  
    constructor(canvas, keyboard) {
      this.ctx = canvas.getContext("2d");
      this.canvas = canvas;
      this.keyboard = keyboard;
      this.generateBackgroundObjects();
      this.draw();
      this.setWorld();
      this.run()
    }
  
    setWorld() {
      this.character.world = this;
    }

    run() {
        setInterval(() => {
              this.checkCollisions();
              this.checkThrowObjects();
        
        }, 200);
    }

    checkCollisions() {
        setStoppableInterval(() => {
          this.checkEnemieCollision();
          this.checkBottleCollision();
        },40 );

            /*this.level.enemies.forEach((enemy) => {
                if( this.character.isColliding(enemy) ) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            });*/
    }

    checkBottleCollision() {
        this.level.bottles = this.level.bottles.filter((bottle) => {
            if (this.character.isColliding(bottle)) {
              this.collectedBottles++;
              this.bottlesBar.setPercentage(this.collectedBottles);
              return false;
            }
              return true;
            });
        }

    checkEnemieCollision() {
      this.level.enemies.forEach((enemy, index) => {
        if (!enemy.isDead() && this.character.isColliding(enemy)) {
          if (this.character.isAboveGround() && !this.character.isHurt()) {
            this.character.jump(10);
            enemy.hit();
            setTimeout(() => {
              this.level.enemies.splice(index, 1);
            }, 500);
          } else {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
            } 
          }
        }
      );
    }
        
      
    

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject (this.character.x +100, this.character.y +100);
            this.throwableObjects.push(bottle);
        }}
  
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
            "img/dino_background/4/5.png"
        ];
    
        for (let i = -1; i < 5; i++) {
          let offset = i * 719;
          let layers = i % 2 === 0 ? layersBlock1 : layersBlock2;
          for (let j = 0; j < layers.length; j++) {
            this.backgroundObjects.push(new BackgroundObject(layers[j], offset));
          }
        }
      }
    
  
    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
      this.ctx.translate(this.cameraX, 0);
  
      this.addObjectsToMap(this.backgroundObjects);
      this.addObjectsToMap(this.level.clouds);
      this.addObjectsToMap(this.level.tropeognathus);

      this.ctx.translate(-this.cameraX, 0);
      // ----- Space for fixd Objects -----
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
  
    addObjectsToMap(objects) {
      objects.forEach((object) => {
        this.addToMap(object);
      });
    }
  
    addToMap(movableObject) {
      if (movableObject.otherDirection) {
        this.flipImage(movableObject);
      }

        movableObject.draw(this.ctx);
        movableObject.drawBorder(this.ctx);
  
      if (movableObject.otherDirection) {
        this.flipImageBack(movableObject);
      }
    }


    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }


    flipImageBack(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }

  }
  
  