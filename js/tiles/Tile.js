Tile.WIDTH = 72;
Tile.HEIGHT = 72;
Tile.TEXTURE_PATH = "resources/world/tiles.json";

function Tile(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.sprite = null;
}
