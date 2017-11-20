function canMoveSideways(character) {
    let keyRight = keyboard(39);
    let keyLeft = keyboard(37);
    keyRight.press = function () {
        if (character.action !== Hero.ACTIONS.DEAD) {
            character.vx = Hero.SPEED_X;
            if (character.action === Hero.ACTIONS.FALL) {
                character.vx = Hero.SPEED_X_FALL;
            }
            character.facing = "right";
            character.action = Hero.ACTIONS.RUN;
        }
    };
    keyRight.release = function () {
        if (character.action !== Hero.ACTIONS.DEAD) {
            if (!keyLeft.isDown) {
                character.vx = 0;
                character.action = Hero.ACTIONS.IDLE;
            }
        }
    };
    keyLeft.press = function () {
        if (character.action !== Hero.ACTIONS.DEAD) {
            character.vx = -Hero.SPEED_X;
            if (character.action === Hero.ACTIONS.FALL) {
                character.vx = -Hero.SPEED_X_FALL;
            }
            character.facing = "left";
            character.action = Hero.ACTIONS.RUN;
        }
    };
    keyLeft.release = function () {
        if (character.action !== Hero.ACTIONS.DEAD) {
            if (!keyRight.isDown) {
                character.vx = 0;
                character.action = Hero.ACTIONS.IDLE;
            }
        }
    };
}

function canSlide(character) {
    let keyDown = keyboard(40);
    let keyRight = keyboard(39);
    let keyLeft = keyboard(37);
    keyDown.press = function () {
        if (character.action !== Hero.ACTIONS.DEAD) {
            if (character.prevY === null) {
                character.prevY = character.y;
            }
            character.action = Hero.ACTIONS.SLIDE;
            character.y = character.prevY + Hero.HEIGHT / 4;
            if (character.facing === 'right') {
                character.vx = Hero.SPEED_X_SLIDE;
            } else {
                character.vx = -Hero.SPEED_X_SLIDE;
            }
        }
    };
    keyDown.release = function () {
        if (character.action !== Hero.ACTIONS.DEAD) {
            character.y = character.prevY;
            character.prevY = null;
            if (keyLeft.isDown) {
                character.vx = -Hero.SPEED_X;
                if (character.action === Hero.ACTIONS.FALL) {
                    character.vx = -Hero.SPEED_X_FALL;
                }
                character.facing = "left";
                character.action = Hero.ACTIONS.RUN;
            } else if (keyRight.isDown) {
                character.vx = Hero.SPEED_X;
                if (character.action === Hero.ACTIONS.FALL) {
                    character.vx = Hero.SPEED_X_FALL;
                }
                character.facing = "right";
                character.action = Hero.ACTIONS.RUN;
            } else {
                character.vx = 0;
                character.action = Hero.ACTIONS.IDLE;
            }
        }
    };
}

function canJump(character) {
    let keySpace = keyboard(32);
    keySpace.press = function () {
        if (character.action !== Hero.ACTIONS.DEAD) {
            if (character.action !== Hero.ACTIONS.JUMP && character.action !== Hero.ACTIONS.FALL) {
                character.action = Hero.ACTIONS.JUMP;
                character.vy = -Hero.JUMP_HEIGHT;
            }
        }
    };
}
