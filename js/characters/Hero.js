Hero.ATTACK_TEXTURE_PATH = "resources/ninjaGirl/attack.json";
Hero.DEAD_TEXTURE_PATH = "resources/ninjaGirl/dead.json";
Hero.IDLE_TEXTURE_PATH = "resources/ninjaGirl/idle.json";
Hero.JUMP_TEXTURE_PATH = "resources/ninjaGirl/jump.json";
Hero.JUMP_ATTACK_TEXTURE_PATH = "resources/ninjaGirl/jump_attack.json";
Hero.JUMP_THROW_TEXTURE_PATH = "resources/ninjaGirl/jump_throw.json";
Hero.RUN_TEXTURE_PATH = "resources/ninjaGirl/run.json";
Hero.SLIDE_TEXTURE_PATH = "resources/ninjaGirl/slide.json";
Hero.THROW_TEXTURE_PATH = "resources/ninjaGirl/throw.json";

Hero.HEIGHT = Tile.HEIGHT;

function Hero(stage, x, y) {
    this.x = x;
    this.y = y;

    let textureArray = [];
    for (let i = 0; i <= 9; i++) {
        let texture = PIXI.Texture.fromFrame("Run__00" + i);
        // texture.baseTexture.mipmap = true;
        textureArray.push(texture);
    }
    let sprite = new PIXI.extras.AnimatedSprite(textureArray);

    let scale = getScale(Hero.HEIGHT, sprite.height);

    sprite.scale.set(scale);
    sprite.position.x = x;
    sprite.position.y = y;// + Hero.HEIGHT/2;
    sprite.loop = true;
    // sprite.anchor.set(0.5);
    sprite.animationSpeed = 0.2;
    sprite.play();

    stage.addChild(sprite);
}
