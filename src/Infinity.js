var Background = require("./Background");
var Player = require("./entity/Player");
var Treasure = require("./entity/Treasure");
var KeyHandler = require("./KeyHandler");

function Infinity(stage, gameContext) {
    this.gameContext = gameContext;
    this.viewportX = 0;
    this.viewportY = 0;

    this.keyHandler = new KeyHandler();
    this.keyHandler.install();
    this.player = new Player(this.gameContext);
    this.treasure = new Treasure(this.gameContext);
    this.background = new Background(this.gameContext);

    this.keyHandler.subscribe(KeyHandler.W, this.player.accelerate.bind(this.player), true);
    this.keyHandler.subscribe(KeyHandler.S, this.player.decelerate.bind(this.player), true);
    this.keyHandler.subscribe(KeyHandler.A, this.player.rotateLeft.bind(this.player), true);
    this.keyHandler.subscribe(KeyHandler.D, this.player.rotateRight.bind(this.player), true);

    stage.addChild(this.background);
    stage.addChild(this.player);
    stage.addChild(this.treasure);
}

Infinity.prototype.update = function() {
    this.player.update();
    this.background.move(this.player.heading.x * this.player.speed, this.player.heading.y * this.player.speed);

    this.viewportX += this.player.heading.x;
    this.viewportY += this.player.heading.y;

    this.treasure.move(this.player.heading.x * this.player.speed, this.player.heading.y * this.player.speed);
};

module.exports = Infinity;