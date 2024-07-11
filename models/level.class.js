class Level {
    enemies;
    clouds;
    tropeognathus;
    bottles;
    coins;
    level_end_x = 2900;

    constructor(enemies, clouds, tropeognathus, bottles, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.tropeognathus = tropeognathus;
        this.bottles = bottles;
        this.coins = coins;
    }
}