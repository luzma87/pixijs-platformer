Level1.GRAVITY = 4;

function Level1(stage) {
    this.container = new PIXI.Container();
    this.hero = null;

    this.tiles = [];

    this.spritesPool = new SpritesPool();

    new Background(this.container);

    this.createFirstPlatform();

    stage.addChild(this.container);
}

Level1.prototype.createFirstPlatform = function () {
    let H = -1;
    let level1 = [
        [0, H, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 3, 1, 1, 1, 4, 0, 0, 0, 0, 0],
        [0, H, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ];

    this.tiles = this.createLevelMatrix(level1);

    this.addTiles();
};

Level1.prototype.update = function () {
    this.hero.update();
};

Level1.prototype.addTiles = function () {
    for (let rowCount = 0; rowCount < this.tiles.length; rowCount++) {
        let row = this.tiles[rowCount];
        this.addTilesRow(row);
    }
};

Level1.prototype.addTilesRow = function (row) {
    for (let tileCount = 0; tileCount < row.length; tileCount++) {
        let tile = row[tileCount];
        if (tile.sprite !== null) {
            this.container.addChild(tile.sprite);
        }
        if (tile.type === TileType.HERO_SPAWN) {
            this.hero = new Hero(this, tile.x, tile.y);
        }
    }
};

Level1.prototype.createLevelMatrix = function (levelMatrix) {
    let tilesMatrix = [];

    for (let rowCount = 0; rowCount < levelMatrix.length; rowCount++) {
        let row = levelMatrix[rowCount];
        let y = (rowCount + 1) * Tile.HEIGHT;
        let tilesRow = this.createLevelRow(row, y);
        tilesMatrix.push(tilesRow);
    }
    return tilesMatrix;
};

Level1.prototype.createLevelRow = function (row, y) {
    let tilesRow = [];
    for (let tileCount = 0; tileCount < row.length; tileCount++) {
        let tileType = row[tileCount];
        let x = tileCount * Tile.WIDTH;
        let tile = this.spritesPool.getTile(tileType, x, y);
        tilesRow.push(tile);
    }
    return tilesRow;
};
