let canvas;
let world;
let keyboard;
let intervalIds = [];

document.addEventListener('DOMContentLoaded', () => {
    keyboard = new Keyboard();
    window.addEventListener('resize', checkScreenwidth);
    window.addEventListener('load', checkScreenwidth);
});

function init() {
canvas = document.getElementById('canvas');
world = new World(canvas, keyboard);
buttonsDisable();
checkScreenwidth();

console.log('my Character is' , world.character);
console.log('my Enemies are' , world.enemies);
}

function checkScreenwidth() {
    if (window.innerWidth <= 650) {
        document.getElementById("rotateDevice").classList.remove('d-none');
        document.getElementById("rotateDeviceImage").classList.remove('d-none');
    } else {
        document.getElementById("rotateDevice").classList.add('d-none');
        document.getElementById("rotateDeviceImage").classList.add('d-none');
    }
 }

function buttonsDisable() {
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('helpButton').classList.add('d-none');
    document.getElementById('fullscreenButton').classList.add('d-none');
}

window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (event.keyCode == 68) {
        keyboard.THROW = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (event.keyCode == 68) {
        keyboard.THROW = false;
    }
});

function startScreen() {
    let ctx = document.getElementById('canvas').getContext('2d');
    let img = new Image;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 720, 480);
    };
    img.src = 'img/dino_background/2/background.png';
}
    
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}
