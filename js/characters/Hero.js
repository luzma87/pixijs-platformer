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

Hero.ACTIONS = {
    ATTACK : "Attack",
    DEAD : "Dead",
    IDLE : "Idle",
    JUMP : "Jump",
    JUMP_ATTACK : "Jump_Attack",
    JUMP_THROW : "Jump_Throw",
    RUN : "Run",
    SLIDE : "Slide",
    THROW : "Throw"
};

function Hero(stage, x, y) {
    this.stage = stage;

    this.x = x;
    this.y = y;

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
    let keySpace = keyboard(32);

    let keyUp = keyboard(38);
    let keyDown = keyboard(40);

    moveSideways(this);

    let character = this;
    keyUp.press = function () {
        // character.action = Hero.ACTIONS.JUMP;
    };
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

    let character = this;


};

Hero.prototype.getTextureArray = function (type) {
    let textureArray = [];
    for (let i = 0; i <= 9; i++) {
        let texture = PIXI.Texture.fromFrame(type + "__00" + i);
        textureArray.push(texture);
    }
    return textureArray;
};
