function GameContext(windowWidth, windowHeight) {
    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;
    this.backgroundImage = "assets/backgrounds/background" + Math.floor((Math.random() * 8) + 1) + ".jpg";
}

module.exports = GameContext;