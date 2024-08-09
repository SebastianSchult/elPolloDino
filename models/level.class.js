class Level {
    enemies;
    clouds;
    tropeognathus;
    bottles;
    coins;
    endboss;
    level_end_x = 2900;


    /**
     * Initializes a new instance of the Level class.
     *
     * @param {type} enemies - description of enemies parameter
     * @param {type} clouds - description of clouds parameter
     * @param {type} tropeognathus - description of tropeognathus parameter
     * @param {type} bottles - description of bottles parameter
     * @param {type} coins - description of coins parameter
     * @param {type} endboss - description of endboss parameter
     * @return {void} No return value.
     */
    constructor(enemies, clouds, tropeognathus, bottles, coins, endboss) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.tropeognathus = tropeognathus;
        this.bottles = bottles;
        this.coins = coins;
        this.endboss = endboss;
    }
}