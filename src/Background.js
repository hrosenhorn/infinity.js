var PIXI = require("../thirdparty/pixi.dev");

function Background(gameContext) {
    var texture = PIXI.Texture.fromImage(gameContext.backgroundImage);
    PIXI.TilingSprite.call(this, texture, gameContext.windowWidth,  gameContext.windowHeight);

    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;
    this.viewportX = 0;
}

Background.constructor = Background;
Background.prototype = Object.create(PIXI.TilingSprite.prototype);

Background.DELTA = 0.164;

Background.prototype.move = function (deltaX, deltaY) {
    this.tilePosition.x -= deltaX;
    this.tilePosition.y -= deltaY;
};

Background.prototype.setViewportX = function(newViewportX) {
    var distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= (distanceTravelled * Background.DELTA_X);
};

module.exports = Background;
