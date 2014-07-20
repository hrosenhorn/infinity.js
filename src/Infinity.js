var Background = require("./Background");
var Player = require("./entity/Player");
var KeyHandler = require("./KeyHandler");

function Infinity(stage, gameContext) {
    this.gameContext = gameContext;
    this.viewportX = 0;

    this.keyHandler = new KeyHandler();
    this.keyHandler.install();
    this.player = new Player(this.gameContext);
    this.background = new Background(this.gameContext);

    this.keyHandler.subscribe(KeyHandler.W, this.player.accelerate.bind(this.player), true);
    this.keyHandler.subscribe(KeyHandler.S, this.player.decelerate.bind(this.player), true);
    this.keyHandler.subscribe(KeyHandler.A, this.player.rotateLeft.bind(this.player), true);
    this.keyHandler.subscribe(KeyHandler.D, this.player.rotateRight.bind(this.player), true);

    stage.addChild(this.background);
    stage.addChild(this.player);
}

Infinity.prototype.setViewportX = function(viewportX) {
    this.viewportX = viewportX;

    this.background.setViewportX(viewportX);
};

Infinity.prototype.getViewportX = function() {
    return this.viewportX;
};

Infinity.prototype.moveViewportXBy = function(units) {
    var newViewportX = this.viewportX + units;
    this.setViewportX(newViewportX);
};

Infinity.prototype.update = function() {
    //this.moveViewportXBy(15);
    this.player.update();
};

module.exports = Infinity;