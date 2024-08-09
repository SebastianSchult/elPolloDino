let canvas;
let world;
let keyboard = {};
let intervalIds = [];

document.addEventListener('DOMContentLoaded', () => {
    keyboard = new Keyboard();
    window.addEventListener('resize', checkScreenwidth);
    window.addEventListener('load', checkScreenwidth);
});

function init() {
canvas = document.getElementById('canvas');
world = new World(canvas, keyboard);
activateGameButtons();
closeInstructions();
checkScreenwidth();
document.getElementById('helpButton').classList.add('d-none');
document.getElementById('restartButtonOverlay').classList.remove('d-none');

console.log('my Character is' , world.character);
console.log('my Enemies are' , world.enemies);
}

function startGame() {
    initLevelWithDelay();
}

function initLevelWithDelay(){
    setTimeout(() => {
        initLevel();
    }, 1000);
}

function checkScreenwidth() {
    if (window.innerWidth <= 650) {
        document.getElementById("rotateDevice").classList.remove('d-none');
        document.getElementById("rotateDeviceImage").classList.remove('d-none');
        document.getElementById("title").classList.add('d-none');
    } else {
        document.getElementById("rotateDevice").classList.add('d-none');
        document.getElementById("rotateDeviceImage").classList.add('d-none');
        document.getElementById("title").classList.remove('d-none');
    }
 }

 function activateGameButtons(){
     document.getElementById('gameButtons').classList.remove('d-none');
 }

function buttonsDisable() {
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('helpButton').classList.add('d-none');
    document.getElementById('fullscreenButton').classList.add('d-none');
}

function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        enterFullscreen();
    } else {
        exitFullscreen();
    }
}

function enterFullscreen() {
    const fullscreenElement = document.getElementById('fullscreen');
    if (fullscreenElement.requestFullscreen) {
        fullscreenElement.requestFullscreen();
    } else if (fullscreenElement.mozRequestFullScreen) { 
        fullscreenElement.mozRequestFullScreen();
    } else if (fullscreenElement.webkitRequestFullscreen) { 
        fullscreenElement.webkitRequestFullscreen();
    } else if (fullscreenElement.msRequestFullscreen) { 
        fullscreenElement.msRequestFullscreen();
    }
    
    document.getElementById('fullscreenButtonIMG').classList.add('d-none');
    document.getElementById('exitFullscreenButtonIMG').classList.remove('d-none');
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { 
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { 
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { 
        document.msExitFullscreen();
    }
  
    document.getElementById('fullscreenButtonIMG').classList.remove('d-none');
    document.getElementById('exitFullscreenButtonIMG').classList.add('d-none');
}



function openInstructions() { 
    document.getElementById('gameInstructions').classList.remove('d-none');
    document.getElementById('instructions').classList.remove('d-none');
    document.getElementById('instructionButtons').classList.remove('d-none');
    document.getElementById('buttons').classList.add('d-none');

}

function closeInstructions() { 
    document.getElementById('gameInstructions').classList.add('d-none');
    document.getElementById('instructions').classList.add('d-none');
    document.getElementById('instructionButtons').classList.add('d-none');
    document.getElementById('buttons').classList.remove('d-none');
}

function openkeyBoardSettings() {
    document.getElementById('keyboardInstructions').classList.remove('d-none');
    document.getElementById('homeButton').classList.add('d-none');
    document.getElementById('keyBoardButton').classList.add('d-none');
    document.getElementById('backButton').classList.remove('d-none');
    
}

function closeKeyBoardSettings() {
    document.getElementById('keyboardInstructions').classList.add('d-none');
    document.getElementById('homeButton').classList.remove('d-none');
    document.getElementById('keyBoardButton').classList.remove('d-none');
    document.getElementById('backButton').classList.add('d-none');

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

function lostImage() {
    document.getElementById('lostImage').classList.remove('d-none');
    showRestartButton();
}

function wonImage() {
    document.getElementById('winImage').classList.remove('d-none');
}

function stopGame() {
    intervalIds.forEach(clearInterval);
}

function showRestartButton() {
    document.getElementById('restartButtonOverlay').classList.remove('d-none');
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('fullscreenButton').classList.add('d-none');
}
