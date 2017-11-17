Main.WIDTH = 1008;
Main.HEIGHT = 500;

function Main() {
    this.stage = new PIXI.Container();
    this.level1 = null;

    this.renderer = PIXI.autoDetectRenderer(
        Main.WIDTH,
        Main.HEIGHT
    );
    this.renderer.view.style.border = "1px dashed purple";

    document.body.appendChild(this.renderer.view);

    this.loadSpriteSheet();
}

Main.prototype.update = function () {
    this.renderer.render(this.stage);
    requestAnimationFrame(this.update.bind(this));
    this.level1.update();
};

Main.prototype.loadSpriteSheet = function () {
    let loader = PIXI.loader;
    loader.add([
        Background.TEXTURE_PATH,
        Tile.TEXTURE_PATH,
        Hero.ATTACK_TEXTURE_PATH,
        Hero.DEAD_TEXTURE_PATH,
        Hero.IDLE_TEXTURE_PATH,
        Hero.JUMP_TEXTURE_PATH,
        Hero.JUMP_ATTACK_TEXTURE_PATH,
        Hero.JUMP_THROW_TEXTURE_PATH,
        Hero.RUN_TEXTURE_PATH,
        Hero.SLIDE_TEXTURE_PATH,
        Hero.THROW_TEXTURE_PATH
    ]);
    loader.once("complete", this.spriteSheetLoaded.bind(this));
    loader.load();
};

Main.prototype.spriteSheetLoaded = function () {
    this.level1 = new Level1(this.stage);
    requestAnimationFrame(this.update.bind(this));
};
