class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.input = new InputHandler(this);
    this.player = new Player(this);
    this.enemies = [];
    this.ui = new UI(this);
    this.enemyTimer = 0;
    this.enemyInterval = 100;
    this.gameOver = false;
    this.gameTime = 0;
    this.timeLimit = 30;
  }
  update(deltaTime) {
    if (!this.gameOver) {
      this.player.update();

      for (let i = 0; i < this.enemies.length; i++) {
        if (this.enemies[i]) {
          this.enemies[i].update();
          if (this.checkCollision(this.player, this.enemies[i])) {
            this.enemies[i].markedForDeletion = true;
            this.enemies = [];
            // console.log("Game Over");
            this.gameOver = true;
          }
        }
      }
      this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);
      if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
        this.addEnemy();
        this.enemyTimer = 0;
      } else {
        this.enemyTimer += deltaTime;
      }

      this.ui.update();
    }
  }
  draw(context) {
    this.ui.draw(context);
    if (!this.gameOver) {
      this.player.draw(context);
    }
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.enemies[i]) {
        this.enemies[i].draw(context);
      }
    }
  }
  addEnemy() {
    const randomize = Math.random();
    let x = 0;
    let y = 0;
    if (randomize < 0.25) {
      x = 0;
      y = Math.random() * this.height;
    } else if (randomize < 0.5) {
      x = this.width;
      y = Math.random() * this.height;
    } else if (randomize < 0.75) {
      x = Math.random() * this.width;
      y = 0;
    } else if (randomize < 1) {
      x = Math.random() * this.width;
      y = this.height;
    }
    this.enemies.push(new Enemy(this, x, y, this.player.x, this.player.y));
  }
  checkCollision(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  }
}
