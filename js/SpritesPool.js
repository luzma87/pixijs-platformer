function SpritesPool() {
}

SpritesPool.prototype.getTile = function (tileType, x, y) {
    switch (tileType) {
        case TileType.GAP :
            return this.getGap();
        case TileType.FULL_FLOOR_GRASS_TOP:
            return this.getFullFloorGrassTop(x, y);
        case TileType.FULL_FLOOR_DIRT:
            return this.getFullFloorDirt(x, y);
        case TileType.FULL_FLOOR_DIRT_FRONT_EDGE:
            return this.getFullFloorDirtFrontEdge(x, y);
        case TileType.FULL_FLOOR_DIRT_BACK_EDGE:
            return this.getFullFloorDirtBackEdge(x, y);
        case TileType.FULL_FLOOR_GRASS_TOP_FRONT_EDGE:
            return this.getFullFloorGrassTopFrontEdge(x, y);
        case TileType.FULL_FLOOR_GRASS_TOP_BACK_EDGE:
            return this.getFullFloorGrassTopBackEdge(x, y);
    }
};
SpritesPool.prototype.getFullFloorGrassTop = function (x, y) {
    let tile = new Tile(TileType.FULL_FLOOR_GRASS_TOP);
    tile.sprite = this.getSprite("full_grass-top", x, y);
    return tile;
};

SpritesPool.prototype.getFullFloorDirt = function (x, y) {
    let tile = new Tile(TileType.FULL_FLOOR_DIRT);
    tile.sprite = this.getSprite("full_dirt1", x, y);
    return tile;
};

SpritesPool.prototype.getFullFloorGrassTopFrontEdge = function (x, y) {
    let tile = new Tile(TileType.FULL_FLOOR_GRASS_TOP_FRONT_EDGE);
    tile.sprite = this.getSprite("full_grass-top-edge", x, y);
    return tile;
};

SpritesPool.prototype.getFullFloorGrassTopBackEdge = function (x, y) {
    let tile = new Tile(TileType.FULL_FLOOR_GRASS_TOP_FRONT_EDGE);
    tile.sprite = this.getFlippedSprite("full_grass-top-edge", x, y);
    return tile;
};

SpritesPool.prototype.getFullFloorDirtFrontEdge = function (x, y) {
    let textures = ["full_dirt-beach-edge", "full_dirt-beach-edge2"];
    let texture = textures[getRandomInt(0, 1)];
    let tile = new Tile(TileType.FULL_FLOOR_GRASS_TOP_FRONT_EDGE);
    tile.sprite = this.getSprite(texture, x, y);
    return tile;
};

SpritesPool.prototype.getFullFloorDirtBackEdge = function (x, y) {
    let textures = ["full_dirt-beach-edge", "full_dirt-beach-edge2"];
    let texture = textures[getRandomInt(0, 1)];
    let tile = new Tile(TileType.FULL_FLOOR_GRASS_TOP_FRONT_EDGE);
    tile.sprite = this.getFlippedSprite(texture, x, y);
    return tile;
};

SpritesPool.prototype.getGap = function () {
    return new Tile(TileType.GAP);
};

SpritesPool.prototype.getSprite = function (texture, x, y) {
    let sprite = PIXI.Sprite.fromFrame(texture);

    sprite.height = getProportionalHeight(Tile.WIDTH, sprite.width, sprite.height);
    sprite.width = Tile.WIDTH;
    sprite.position.x = x;
    sprite.position.y = y;
    return sprite;
};
SpritesPool.prototype.getFlippedSprite = function (texture, x, y) {
    let sprite = PIXI.Sprite.fromFrame(texture);

    sprite.anchor.x = 1;
    sprite.scale.x = -1;
    sprite.height = getProportionalHeight(Tile.WIDTH, sprite.width, sprite.height);
    sprite.width = Tile.WIDTH;
    sprite.position.x = x;
    sprite.position.y = y;
    return sprite;
};
