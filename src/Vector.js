function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.update = function (angle) {
    //this.y = -Math.cos(angle);
    //this.x = Math.sin(angle);

    this.x = Math.cos(angle);
    this.y = Math.sin(angle);
};

module.exports = Vector;