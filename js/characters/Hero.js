Hero.TEXTURES = {
    ATTACK : "resources/ninjaGirl/attack.json",
    DEAD : "resources/ninjaGirl/dead.json",
    IDLE : "resources/ninjaGirl/idle.json",
    JUMP : "resources/ninjaGirl/jump.json",
    JUMP_ATTACK : "resources/ninjaGirl/jump_attack.json",
    JUMP_THROW : "resources/ninjaGirl/jump_throw.json",
    RUN : "resources/ninjaGirl/run.json",
    SLIDE : "resources/ninjaGirl/slide.json",
    THROW : "resources/ninjaGirl/throw.json",
};

Hero.HEIGHT = Tile.HEIGHT;
Hero.SPEED_X = 5;
Hero.SPEED_X_SLIDE = 8;
Hero.SPEED_X_FALL = 2.5;
Hero.JUMP_HEIGHT = 18;

Hero.ACTIONS = {
    ATTACK : "Attack",
    DEAD : "Dead",
    IDLE : "Idle",
    JUMP : "Jump",
    JUMP_ATTACK : "Jump_Attack",
    JUMP_THROW : "Jump_Throw",
    RUN : "Run",
    SLIDE : "Slide",
    THROW : "Throw",
    FALL : "Fall"
};

function Hero(stage, x, y) {
    this.stage = stage;

    this.x = x;
    this.y = y;

    this.prevY = null;

    this.vx = 0;
    this.vy = 0;

    this.facing = "right";

    this.action = Hero.ACTIONS.IDLE;
    this.prevAction = Hero.ACTIONS.IDLE;

    this.sprite = new PIXI.extras.AnimatedSprite(this.getTextureArray(this.action));

    let scale = getScale(Hero.HEIGHT, this.sprite.height);

    this.sprite.anchor.x = 0.5;
    this.sprite.scale.set(scale);
    this.sprite.position.x = x + Hero.WIDTH / 2;
    this.sprite.position.y = y;// + Hero.HEIGHT/2;
    this.sprite.loop = true;
    this.sprite.animationSpeed = 0.2;
    this.sprite.play();

    this.movements();

    this.sprite.x += this.vx;

    stage.container.addChild(this.sprite);
}

Hero.prototype.movements = function () {
    canMoveSideways(this);
    canSlide(this);
    canJump(this);
};

Hero.prototype.update = function () {
    if (this.action !== this.prevAction) {
        this.sprite.textures = this.getTextureArray(this.action);
        this.prevAction = this.action;
    }

    this.x += this.vx;
    this.y += this.vy;

    this.sprite.position.x = this.x;
    this.sprite.position.y = this.y;

    this.sprite.scale.x = this.facing === "left" ? -1 : 1;

    this.checkFall();
};

Hero.prototype.checkFall = function () {
    let transparentTiles = TileType.TRANSPARENT_TILES;

    const tiles = this.stage.tiles;
    for (let rowCount = 0; rowCount < tiles.length; rowCount++) {
        let row = tiles[rowCount];
        let firstTile = row[0];
        let herosFeet = firstTile.y - 1 - Hero.HEIGHT;
        if (herosFeet <= this.y && this.y < herosFeet + Tile.HEIGHT) {
            for (let tileCount = 0; tileCount < row.length; tileCount++) {
                let tile = row[tileCount];
                if (tile.x <= this.x + 1 && this.x + 1 <= tile.x + Tile.WIDTH) {
                    if (this.action === Hero.ACTIONS.JUMP) {
                        this.vy += (Level1.GRAVITY / 2);
                        if (this.vy >= 0) {
                            this.vy = Level1.GRAVITY;
                            this.action = Hero.ACTIONS.FALL;
                        }
                    } else {
                        if (transparentTiles.indexOf(tile.type) !== -1) {
                            this.vy = Level1.GRAVITY;
                            this.action = Hero.ACTIONS.FALL;
                        } else {
                            this.vy = 0;
                            if (this.action === Hero.ACTIONS.FALL) {
                                this.action = Hero.ACTIONS.IDLE;
                            }
                        }
                        break;
                    }
                }
            }
        }
    }
};

Hero.prototype.getTextureArray = function (type) {
    let textureArray = [];
    let texture;
    if (type === Hero.ACTIONS.FALL) {
        for (let i = 0; i < 2; i++) {
            texture = PIXI.Texture.fromFrame("Jump__006");
            textureArray.push(texture);
        }
        for (let i = 0; i < 2; i++) {
            texture = PIXI.Texture.fromFrame("Jump__007");
            textureArray.push(texture);
        }
    } else {
        for (let i = 0; i <= 9; i++) {
            texture = PIXI.Texture.fromFrame(type + "__00" + i);
            textureArray.push(texture);
        }
    }
    return textureArray;
};
