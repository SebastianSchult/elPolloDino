let level1; 

function initLevel() {
    level1 =  new Level(
        [
        new Chicken(), 
        new Chicken(), 
        new Chicken(),
        new Stegosaurus(),
        new Stegosaurus(),
        new Stegosaurus(),
        new Endboss()
        ],
        [
            new Cloud(300, 'img/5_background/layers/4_clouds/1.png'),
            new Cloud(600, 'img/5_background/layers/4_clouds/1.png'),
            new Cloud(900, 'img/5_background/layers/4_clouds/2.png'),
            new Cloud(1200, 'img/5_background/layers/4_clouds/1.png'),
            new Cloud(1500, 'img/5_background/layers/4_clouds/1.png'),
            new Cloud(1800, 'img/5_background/layers/4_clouds/2.png'),
            new Cloud(2100, 'img/5_background/layers/4_clouds/2.png'),
            new Cloud(2400, 'img/5_background/layers/4_clouds/1.png'),
            new Cloud(2700, 'img/5_background/layers/4_clouds/2.png'),
            new Cloud(3000, 'img/5_background/layers/4_clouds/1.png'),
            new Cloud(3300, 'img/5_background/layers/4_clouds/2.png'),
            new Cloud(3600, 'img/5_background/layers/4_clouds/1.png')
        ],
        [
        new Tropeognathus(),
        new Tropeognathus(),
        new Tropeognathus(),
        new Tropeognathus(),
        new Tropeognathus(),
        new Tropeognathus(),
        new Tropeognathus(),
        new Tropeognathus(),
        new Tropeognathus() 
        ],
        [
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles()
        ]
        );
        init();
}
