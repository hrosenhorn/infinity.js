var PIXI = require("../../thirdparty/pixi.dev");
var Obstacle = require("../Obstacle");
var Vector = require("../Vector");
var ShipExhaust = require("./ShipExhaust");


function Player(gameContext) {
    this.gameContext = gameContext;

    Obstacle.call(this, gameContext, [
        PIXI.Texture.fromImage("assets/player/ship.png")
    ]);

    this.scale.x = 0.3;
    this.scale.y = 0.3;
    this.position.x = this.gameContext.windowWidth / 4;
    this.position.y = this.gameContext.windowHeight / 4;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.setActive();
    this.rotation = Player.BASE_TEXTURE_ROTATION;
    this.heading = new Vector(0, 0);
    this.speed = 0;

    this.exhaust = new ShipExhaust();
    this.exhaust.position.x = -22;
    this.exhaust.position.y = 25;
}

Player.constructor = Player;
Player.prototype = Object.create(Obstacle.prototype);

Player.ACCELERATION = 1.5;
Player.FRICTION = -0.15;
Player.MAX_SPEED = 7;
//http://math.stackexchange.com/questions/180874/convert-angle-radians-to-a-heading-vector
Player.BASE_TEXTURE_ROTATION = 90 * (Math.PI/180);

Player.MOVEMENT_ILLUSION_WINDOW = 50;

Player.prototype.move = function (deltaX, deltaY) {
    this.position.x += deltaX;
    this.position.y += deltaY;

    if (this.position.x < Player.MOVEMENT_ILLUSION_WINDOW) {
        this.position.x = Player.MOVEMENT_ILLUSION_WINDOW
    }

    if (this.position.y < Player.MOVEMENT_ILLUSION_WINDOW) {
        this.position.y = Player.MOVEMENT_ILLUSION_WINDOW
    }

    if (this.position.x > this.gameContext.windowWidth - Player.MOVEMENT_ILLUSION_WINDOW) {
        this.position.x = this.gameContext.windowWidth - Player.MOVEMENT_ILLUSION_WINDOW
    }

    if (this.position.y > this.gameContext.windowHeight - Player.MOVEMENT_ILLUSION_WINDOW) {
        this.position.y = this.gameContext.windowHeight - Player.MOVEMENT_ILLUSION_WINDOW;
    }
};

Player.prototype.updateSpeed = function (delta) {
    this.speed += delta;

    if (this.speed > Player.MAX_SPEED) {
        this.speed = Player.MAX_SPEED;
    }

    if (this.speed < 0) {
        this.speed = 0;
    }
};

Player.prototype.accelerate = function (isFinalRepeat) {
    this.updateSpeed(Player.ACCELERATION);

    if (!this.exhaust.stage) {
        this.addChild(this.exhaust);
    }

    if (isFinalRepeat) {
        if (this.exhaust.stage) {
            this.removeChild(this.exhaust);
        }
    }
};

Player.prototype.decelerate = function (isFinalRepeat) {
    this.updateSpeed(-Player.ACCELERATION);
};

Player.prototype.rotateLeft = function (isFinalRepeat) {
    this.rotation -= 0.1;
};

Player.prototype.rotateRight = function (isFinalRepeat) {
    this.rotation += 0.1;
};

Player.prototype.getSpeed = function () {
    return this.speed;
};

Player.prototype.update = function () {
    this.updateSpeed(Player.FRICTION);
    this.heading.update(this.rotation - Player.BASE_TEXTURE_ROTATION);
    this.move(this.heading.x * this.speed, this.heading.y * this.speed);
};

module.exports = Player;
