
function moveSideways(character) {
    let keyRight = keyboard(39);
    let keyLeft = keyboard(37);
    keyRight.press = function () {
        character.vx = 5;
        character.facing = "right";
        character.action = Hero.ACTIONS.RUN;
    };
    keyRight.release = function () {
        if (!keyLeft.isDown) {
            character.vx = 0;
            character.action = Hero.ACTIONS.IDLE;
        }
    };
    keyLeft.press = function () {
        character.vx = -5;
        character.facing = "left";
        character.action = Hero.ACTIONS.RUN;
    };
    keyLeft.release = function () {
        if (!keyRight.isDown) {
            character.vx = 0;
            character.action = Hero.ACTIONS.IDLE;
        }
    };
}
