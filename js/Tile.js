Tile.WIDTH = 72;
Tile.HEIGHT = 72;
Tile.TEXTURE_PATH = "resources/world/tiles.json";

function Tile(type) {
    this.type = type;
    this.y = 0;
    this.sprite = null;
}
