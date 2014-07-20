var PIXI = require("../../thirdparty/pixi.dev");
var Obstacle = require("../Obstacle");

function ShipExhaust(gameContext) {
    this.gameContext = gameContext;

    Obstacle.call(this, gameContext, [
        PIXI.Texture.fromFrame("exhaust1.png"),
        PIXI.Texture.fromFrame("exhaust2.png"),
        PIXI.Texture.fromFrame("exhaust3.png"),
        PIXI.Texture.fromFrame("exhaust1.png")
    ]);

    this.scale.x = 0.5;
    this.scale.y = 0.5;
    this.gotoAndPlay(0);
    this.animationSpeed = 0.8;
}

ShipExhaust.constructor = ShipExhaust;
ShipExhaust.prototype = Object.create(Obstacle.prototype);

module.exports = ShipExhaust;
