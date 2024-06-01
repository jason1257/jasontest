class Enemy {
  constructor(game, x, y, targetX, targetY) {
    this.game = game;
    this.width = 5;
    this.height = 5;
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.xSpeed = this.speed;
    this.ySpeed = this.speed;
    this.targetX = targetX;
    this.targetY = targetY;
    this.xDir = 1;
    this.yDir = 1;
    this.markedForDeletion = false;
    this.getSpeed();
    this.getDir();
  }
  getSpeed() {
    let xDistance = Math.abs(this.targetX - this.x);
    let yDistance = Math.abs(this.targetY - this.y);

    if (xDistance >= yDistance) {
      this.ySpeed = yDistance / (xDistance / this.speed);
    } else {
      this.xSpeed = xDistance / (yDistance / this.speed);
    }
  }
  getDir() {
    this.xDir = this.targetX - this.x > 0 ? 1 : -1;
    this.yDir = this.targetY - this.y > 0 ? 1 : -1;
  }
  update() {
    this.x += this.xSpeed * this.xDir;
    this.y += this.ySpeed * this.yDir;

    if (
      this.x < 0 ||
      this.x > this.game.width ||
      this.y < 0 ||
      this.y > this.game.height
    ) {
      this.markedForDeletion = true;
    }
  }
  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
