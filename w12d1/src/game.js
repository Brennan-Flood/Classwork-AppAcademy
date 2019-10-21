const Asteroid = require('./asteroid.js')
 class Game {
  constructor () {

    this.DIM_X = 1000;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
  };

  addAsteroids() {
    for (let i=0; i < this.NUM_ASTEROIDS; i++) {
      let position = this.randomPosition();
      this.asteroids.push(new Asteroid({pos: position, game: this}));
    }
  };

  randomPosition() {
    let x = Math.floor(Math.random(1001) * 1000);
   let y = Math.floor(Math.random(601) * 600);
   return [x, y];
  };

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
      this.asteroids[i].draw(ctx);
    }
  };

  moveObjects() {
    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
      this.asteroids[i].move();
    }
  };

  wrap(pos) {
    let wrappedPos = pos;
    if (pos[0] > 1025) {
      wrappedPos[0] = wrappedPos[0] - 1050;
    }
    if (pos[0] < -25) {
      wrappedPos[0] = wrappedPos[0] + 1050;
    }
    if (pos[1] > 625) {
      wrappedPos[1] = wrappedPos[1] - 650;
    }
    if (pos[1] < -25) {
      wrappedPos[1] = wrappedPos[1] + 650;
    }
    return wrappedPos;
  };
  
  checkCollisions() {
    for (let i = 0; i < this.NUM_ASTEROIDS - 1; i++) {
      for (let j = i + 1 ; j < this.NUM_ASTEROIDS; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          // alert("Collision!");
          this.asteroids[i].collideWith(this.asteroids[j]);
          
        }
      }
    }
  };

  step() {
    this.checkCollisions();
    this.moveObjects();
  }

  remove(asteroid) {
    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
      if (asteroid.pos === this.asteroids[i].pos) {
       this.asteroids.splice(i, 1);
       let position = this.randomPosition();
       this.asteroids.push(new Asteroid({ pos: position, game: this }));
      }
    }
    
  }
  
 };

 module.exports = Game;