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

    this.vx = 0;
    this.vy = 0;

    this.facing = "right";

    this.sprite = new PIXI.extras.AnimatedSprite(this.getTexture("Run"));

    let scale = getScale(Hero.HEIGHT, this.sprite.height);

    this.sprite.anchor.x = 0.5;
    this.sprite.scale.set(scale);
    this.sprite.position.x = x + Hero.WIDTH / 2;
    this.sprite.position.y = y;// + Hero.HEIGHT/2;
    this.sprite.loop = true;
    // this.sprite.anchor.set(0.5);
    this.sprite.animationSpeed = 0.2;
    this.sprite.play();

    let keyLeft = keyboard(37);
    let keyRight = keyboard(39);
    let keyUp = keyboard(38);
    let keyDown = keyboard(40);

    let thisChar = this;
    keyRight.press = function () {
        thisChar.vx = 5;
        thisChar.facing = "right";
    };
    keyRight.release = function () {
        if (!keyLeft.isDown) {
            thisChar.vx = 0;
        }
    };
    keyLeft.press = function () {
        thisChar.vx = -5;
        thisChar.facing = "left";
    };
    keyLeft.release = function () {
        if (!keyRight.isDown) {
            thisChar.vx = 0;
        }
    };

    this.sprite.x += this.vx;

    stage.addChild(this.sprite);
}

Hero.prototype.update = function () {
    this.x += this.vx;
    this.sprite.position.x = this.x;
    this.sprite.scale.x = this.facing === "left" ? -1 : 1;
};

Hero.prototype.getTexture = function (type) {
    type = type.toLowerCase();
    switch (type) {
        case "run":
            return this.getRunTexture();
    }
};

Hero.prototype.getRunTexture = function () {
    let textureArray = [];
    for (let i = 0; i <= 9; i++) {
        let texture = PIXI.Texture.fromFrame("Run__00" + i);
        textureArray.push(texture);
    }
    return textureArray;
};
