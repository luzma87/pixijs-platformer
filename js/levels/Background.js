Background.TEXTURE_PATH = "resources/world/background.png";

function Background(container) {
    let sprite = PIXI.Sprite.fromImage(Background.TEXTURE_PATH);
    sprite.width = Main.WIDTH;
    sprite.height = Main.HEIGHT;

    container.addChild(sprite);
}
