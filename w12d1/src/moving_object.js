class MovingObject {

  constructor(params) {
    this.pos = params.pos;
    this.vel = params.vel;
    this.radius = params.radius;
    this.color = params.color;
    this.game = params.game;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    )
    ctx.fill();
  }

  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  }

  isCollidedWith(otherObject) {
    let xDistance = Math.abs(this.pos[0] - otherObject.pos[0]);
    let yDistance = Math.abs(this.pos[1] - otherObject.pos[1]);
    if (xDistance < 50 && yDistance < 50) {
      return true;
    }
    return false;
  }

  collideWith(otherObject) {
    this.game.remove(otherObject);
    this.game.remove(this);
  }
}
module.exports = MovingObject;