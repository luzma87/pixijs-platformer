Main.WIDTH = 1008;
Main.HEIGHT = 500;

function Main() {
    this.stage = new PIXI.Container();

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
};

Main.prototype.loadSpriteSheet = function () {
    let loader = PIXI.loader;
    loader.add([
        Background.TEXTURE_PATH,
        Tile.TEXTURE_PATH
    ]);
    loader.once("complete", this.spriteSheetLoaded.bind(this));
    loader.load();
};

Main.prototype.spriteSheetLoaded = function () {
    new Level1(this.stage);
    requestAnimationFrame(this.update.bind(this));
};
