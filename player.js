class Player {
  constructor(game) {
    this.game = game;
    this.width = 10;
    this.height = 10;
    // this.x = this.game.width / 2 - this.width / 2;
    // this.y = this.game.height / 2 - this.height / 2;
    this.x = 150;
    this.y = 300;

    this.speed = 3;
  }
  update(deltaTime) {
    if (this.game.input.upPressed) {
      this.y -= this.speed;
    }
    if (this.game.input.downPressed) {
      this.y += this.speed;
    }
    if (this.game.input.leftPressed) {
      this.x -= this.speed;
    }
    if (this.game.input.rightPressed) {
      this.x += this.speed;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x > this.game.width - this.width) {
      this.x = this.game.width - this.width;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y > this.game.height - this.height) {
      this.y = this.game.height - this.height;
    }
  }
  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
