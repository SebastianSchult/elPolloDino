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
            glass: new Audio('audio/glass.mp3'),
        };
    }

    playSound(soundKey) {
        if (this.soundsEnabeled) {
            const sound = this.sounds[soundKey];
            if (sound) {
                sound.play();
                this.soundVolume();
            }
        }
    }

    soundVolume() {
        this.sounds.run.volume = 0.9;
        this.sounds.jump.volume = 0.1;
        this.sounds.characterDeath.volume = 0.1;
        this.sounds.hurt.volume = 0.4;
        this.sounds.throw.volume = 0.1;
        this.sounds.chicken.volume = 0.1;
        this.sounds.coin.volume = 0.1;
        this.sounds.bottle.volume = 0.1;
        this.sounds.endboss.volume = 0.1;
    }

    toggleSound() {
        this.soundsEnabeled = !this.soundsEnabeled;
        document.getElementById('soundButtonMute').classList.toggle('d-none');
        document.getElementById('soundButtonUnmute').classList.toggle('d-none');
    }



}