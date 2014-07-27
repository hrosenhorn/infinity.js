var PIXI = require("../../thirdparty/pixi.dev");
var Obstacle = require("../Obstacle");
var Vector = require("../Vector");
var Shield = require("./Shield");

function Treasure(gameContext) {
    this.gameContext = gameContext;

    Obstacle.call(this, gameContext, [
        PIXI.Texture.fromImage("assets/star_gold.png")
    ]);

    this.scale.x = 0.6;
    this.scale.y = 0.6;
    this.position.x = this.gameContext.windowWidth / 2;
    this.position.y = this.gameContext.windowHeight / 2;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.setActive();
    this.heading = new Vector(0, 0);
    this.speed = 0;
    this.viewportX = 0;
    this.viewportY = 0;

    this.shield = new Shield(this.gameContext);
    this.addChild(this.shield);
}

Treasure.BASE_TEXTURE_ROTATION = 90 * (Math.PI/180);

Treasure.constructor = Treasure;
Treasure.prototype = Object.create(Obstacle.prototype);

Treasure.prototype.move = function (deltaX, deltaY) {
    this.position.x -= deltaX;
    this.position.y -= deltaY;
};

module.exports = Treasure;
