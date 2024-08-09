let canvas;
let world;
let keyboard = {};
let intervalIds = [];
let music = new Audio('audio/locoDinoTheme.mp3');


document.addEventListener('DOMContentLoaded', () => {
    keyboard = new Keyboard();
    window.addEventListener('resize', checkScreenwidth);
    window.addEventListener('load', checkScreenwidth);
});


/**
 * Initializes the game by setting up the canvas, creating a new World object,
 * activating game buttons, closing instructions, checking screen width, and
 * manipulating DOM elements.
 *
 * @return {void} This function does not return anything.
 */
function init() {
canvas = document.getElementById('canvas');
world = new World(canvas, keyboard);
activateGameButtons();
closeInstructions();
checkScreenwidth();
document.getElementById('helpButton').classList.add('d-none');
document.getElementById('restartButtonOverlay').classList.remove('d-none');
document.getElementById('soundButton').classList.remove('d-none');
document.getElementById('startButton').classList.add('d-none');
}


/**
 * Starts the game by initializing the level with a delay.
 *
 * @return {void} This function does not return anything.
 */
function startGame() {
    initLevelWithDelay();
}


/**
 * Initializes the level with a delay of 1000 milliseconds.
 *
 * @return {void} This function does not return a value.
 */
function initLevelWithDelay(){
    setTimeout(() => {
        initLevel();
    }, 1000);
}


/**
 * Checks the current screen width and updates the visibility of the rotate device message, 
 * rotate device image, and title accordingly.
 *
 * @return {void} This function does not return a value.
 */
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


 /**
 * Activates the game buttons by removing the 'd-none' class from the 'gameButtons' element.
 *
 * @return {void} This function does not return a value.
 */
 function activateGameButtons(){
     document.getElementById('gameButtons').classList.remove('d-none');
 }


 /**
 * Hides the start button, help button, and fullscreen button by adding the 'd-none' class to their respective elements.
 *
 * @return {void} This function does not return a value.
 */
function buttonsDisable() {
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('helpButton').classList.add('d-none');
    document.getElementById('fullscreenButton').classList.add('d-none');
}


/**
 * Enters the fullscreen mode for the specified element.
 *
 * @param {HTMLElement} element - The element to enter fullscreen mode for.
 * @return {void} This function does not return a value.
 */
function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
}


/**
 * Toggles the fullscreen mode of the application.
 *
 * @return {void} This function does not return a value.
 */
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        enterFullscreen();
    } else {
        exitFullscreen();
    }
}


/**
 * Enters the fullscreen mode for the element with the id 'fullscreen' and toggles the visibility of the fullscreen and exit fullscreen buttons.
 *
 * @return {void} This function does not return a value.
 */
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


/**
 * Exits fullscreen mode if the browser supports it.
 *
 * @return {void} This function does not return anything.
 */
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


/**
 * Opens the game instructions and buttons by removing the 'd-none' class.
 *
 * @return {void} This function does not return a value.
 */
function openInstructions() { 
    document.getElementById('gameInstructions').classList.remove('d-none');
    document.getElementById('instructions').classList.remove('d-none');
    document.getElementById('instructionButtons').classList.remove('d-none');
    document.getElementById('buttons').classList.add('d-none');

}


/**
 * Closes the game instructions and buttons by adding the 'd-none' class.
 *
 * @return {void} This function does not return a value.
 */
function closeInstructions() { 
    document.getElementById('gameInstructions').classList.add('d-none');
    document.getElementById('instructions').classList.add('d-none');
    document.getElementById('instructionButtons').classList.add('d-none');
    document.getElementById('buttons').classList.remove('d-none');
}


/**
 * Opens the keyboard settings and instructions by modifying the visibility of the corresponding elements.
 *
 * @return {void} This function does not return a value.
 */
function openkeyBoardSettings() {
    document.getElementById('keyboardInstructions').classList.remove('d-none');
    document.getElementById('homeButton').classList.add('d-none');
    document.getElementById('keyBoardButton').classList.add('d-none');
    document.getElementById('backButton').classList.remove('d-none'); 
}


/**
 * Closes the keyboard settings and instructions by modifying the visibility of the corresponding elements.
 *
 * @return {void} This function does not return a value.
 */
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


/**
 * Renders an image on a canvas element with the id 'canvas'.
 *
 * @return {void} This function does not return a value.
 */
function startScreen() {
    let ctx = document.getElementById('canvas').getContext('2d');
    let img = new Image;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 720, 480);
    };
    img.src = 'img/dino_background/2/background.png';
}
    

/**
 * Creates a new interval that can be stopped and stores its ID.
 *
 * @param {function} fn - the function to be executed at the specified interval
 * @param {number} time - the time interval in milliseconds
 * @return {void} This function does not return a value.
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}


/**
 * Displays the lost image and shows the restart button.
 *
 * @return {void} This function does not return a value.
 */
function lostImage() {
    document.getElementById('lostImage').classList.remove('d-none');
    showRestartButton();
}


/**
 * Displays the won image and shows the restart button.
 *
 * @return {void} This function does not return a value.
 */
function wonImage() {
    document.getElementById('winImage').classList.remove('d-none');
    showRestartButton();
}


/**
 * Stops all intervals stored in the intervalIds array.
 *
 * @return {void} This function does not return a value.
 */
function stopGame() {
    intervalIds.forEach(clearInterval);
}


/**
 * Shows the restart button by removing the 'd-none' class from the 'restartButtonOverlay' element,
 * adding the 'd-none' class to the 'startButton' element, and adding the 'd-none' class to the
 * 'fullscreenButton' element.
 *
 * @return {void} This function does not return a value.
 */
function showRestartButton() {
    document.getElementById('restartButtonOverlay').classList.remove('d-none');
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('fullscreenButton').classList.add('d-none');
}


/**
 * Plays the background music.
 *
 * @return {void}
 */
function playBackgroundmusic() {
    music.play();
    music.volume = 0.05;
    music.loop = 'loop';
}


/**
 * Stops the background music.
 *
 * @return {void} This function does not return a value.
 */
function stopBackgroundmusic() {
    music.pause();
}