class Keyboard { 
    /**
     * Initializes the Keyboard class with default values for the LEFT, RIGHT, SPACE, UP, DOWN, and D properties.
     * Also calls the initEventListeners method to set up event listeners for keyboard buttons.
     */
    constructor() {
        this.LEFT = false;
        this.RIGHT = false;
        this.SPACE = false;
        this.UP = false;
        this.DOWN = false;
        this.D = false;

        this.initEventListeners();
    }


    /**
     * Initializes event listeners for the keyboard buttons.
     */
    initEventListeners() {
        this.addButtonEventListeners('btnLeft', 'mobileGameButtonImageLeft', 'img/buttons/LeftArrow (1).png', 'img/buttons/LeftArrow (2).png', 'LEFT');
        this.addButtonEventListeners('btnRight', 'mobileGameButtonImageRight', 'img/buttons/RightArrow (1).png', 'img/buttons/RightArrow (2).png', 'RIGHT');
        this.addButtonEventListeners('btnJump', 'mobileGameButtonImageJump', 'img/buttons/Up (1).png', 'img/buttons/Up (2).png', 'UP');
        this.addButtonEventListeners('btnThrow', 'mobileGameButtonImageThrow', 'img/buttons/RightArrow (1).png', 'img/buttons/RightArrow (2).png', 'D');
    }

    
    /**
     * Adds event listeners to a button element identified by buttonId.
     *
     * @param {string} buttonId - The id of the button element.
     * @param {string} imgClass - The class of the image inside the button element.
     * @param {string} defaultImgSrc - The default image source.
     * @param {string} activeImgSrc - The active image source.
     * @param {string} direction - The direction associated with the button.
     */
    addButtonEventListeners(buttonId, imgClass, defaultImgSrc, activeImgSrc, direction) {
        const btn = document.getElementById(buttonId);

        if (btn) {
            const img = btn.querySelector(`.${imgClass}`);

            if (img) {
                //console.log(`Found image element for ${buttonId}`);
                btn.addEventListener('mousedown', () => {
                    img.src = activeImgSrc;
                    this[direction] = true;
                });

                btn.addEventListener('mouseup', () => {
                    img.src = defaultImgSrc;
                    this[direction] = false;
                });

                // Für Touchscreen-Geräte
                btn.addEventListener('touchstart', (e) => {
                    img.src = activeImgSrc;
                    this[direction] = true;
                    e.preventDefault(); // Verhindert zusätzliches Ereignis auszulösen
                }, { passive: true });

                btn.addEventListener('touchend', () => {
                    img.src = defaultImgSrc;
                    this[direction] = false;
                });
            } else {
                console.error(`Image element not found for ${buttonId}`);
            }
        } else {
            console.error(`Button element not found: ${buttonId}`);
        }
    }
}