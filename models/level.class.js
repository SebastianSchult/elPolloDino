class Level {
    enemies;
    clouds;
    tropeognathus;
    bottles;
    coins;
    endboss;
    level_end_x = 2900;

    constructor(enemies, clouds, tropeognathus, bottles, coins, endboss) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.tropeognathus = tropeognathus;
        this.bottles = bottles;
        this.coins = coins;
        this.endboss = endboss;
    }
}