class Sounds extends MovableObject  {
    soundsEnabeled = false;

    constructor() {
        super();
        this.sounds = {
            run: new Audio('audio/running.mp3'),
            jump: new Audio('audio/jump.mp3'),
            characterDeath: new Audio('audio/death.mp3'),
            hurt: new Audio('audio/hurt.mp3'),
            throw: new Audio('audio/throw.mp3'),
            chicken: new Audio('audio/chicken.mp3'),
            coin: new Audio('audio/coin.mp3'),
            bottle: new Audio('audio/bottle.mp3'),
            endboss: new Audio('audio/endboss_roarr.mp3'),
        };
    }

}