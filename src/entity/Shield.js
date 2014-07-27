var PIXI = require("../../thirdparty/pixi.dev");
var Obstacle = require("../Obstacle");
var Vector = require("../Vector");

function Shield(gameContext) {
    this.gameContext = gameContext;

    Obstacle.call(this, gameContext, [
        PIXI.Texture.fromImage("assets/shield3.png")
    ]);

    this.scale.x = 0.7;
    this.scale.y = 0.7;
    this.position.x = 0;
    this.position.y = 0;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.setActive();
}

Shield.BASE_TEXTURE_ROTATION = 90 * (Math.PI/180);

Shield.constructor = Shield;
Shield.prototype = Object.create(Obstacle.prototype);

module.exports = Shield;
