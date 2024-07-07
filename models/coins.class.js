class Coins extends MovableObject {
    height = 100;
    width = 100;
   
    IMAGES_COINS = [
        "img/8_coin/coin_1.png",
        "img/8_coin/coin_2.png",
    ];

    constructor() {
        super().loadImage(this.IMAGES_COINS[0]);
        this.loadImages(this.IMAGES_COINS);
        this.x = 500 + Math.random() * 2200;
        this.y = 125 + Math.random() * 175;
        this.animatedCoin();
    }


    
    animatedCoin() {
        setInterval(() => this.playAnimation(this.IMAGES_COINS), 400);
    }
}