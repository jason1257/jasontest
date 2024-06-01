class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 25;
    this.fontFamily = "Word Sans";
    this.color = "black";
  }
  update() {
    if (!this.game.gameOver) {
      if (this.game.gameTime < this.game.timeLimit) {
        this.game.gameTime += 1 / 60;
      } else {
        this.game.enemies = [];
        this.game.gameOver = true;
      }
    }
  }
  draw(context) {
    context.save();
    const formattedTime = this.game.gameTime.toFixed(1);
    context.globalAlpha = 0.5;
    context.font = "25px " + this.fontFamily;
    context.fillText("TIME : " + formattedTime, 20, 40);
    // console.log(formattedTime);
    context.restore();

    if (this.game.gameOver) {
      let message = "GAME OVER";
      if (this.game.gameTime >= this.game.timeLimit) {
        message = "WIN";
      }
      context.textAlign = "center";
      context.font = "50px " + this.fontFamily;
      context.fillText(message, this.game.width * 0.5, this.game.height * 0.5);
    }
  }
}
