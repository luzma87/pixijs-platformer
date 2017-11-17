function Level1(stage) {
    this.container = new PIXI.Container();

    let spritesPool = new SpritesPool();

    new Background(this.container);

    this.createFirstPlatform(spritesPool);

    stage.addChild(this.container);
}

Level1.prototype.createFirstPlatform = function (spritesPool) {
    let H = 'h';
    let level1 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, H, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 4, 0, 0, 0, 0, H, 0, 0, 0, 0, 0],
        [2, 2, 2, 6, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    for (let rowCount = 0; rowCount < level1.length; rowCount++) {
        let row = level1[rowCount];
        let y = (rowCount + 1) * Tile.HEIGHT;
        for (let tileCount = 0; tileCount < row.length; tileCount++) {
            let tileType = row[tileCount];
            let x = tileCount * Tile.WIDTH;
            if (tileType !== H) {
                let tile = spritesPool.getTile(tileType, x, y);
                if (tile.sprite !== null) {
                    this.container.addChild(tile.sprite);
                }
            } else {
                new Hero(this.container, x, y);
            }
        }
    }
};
