class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 25;
    this.fontFamily = "Word Sans";
    this.color = "black";
  }
  draw(context) {
    if (this.game.gameOver) {
      context.textAlign = "center";
      let message = "GAME OVER";
      context.font = "50px " + this.fontFamily;
      context.fillText(message, this.game.width * 0.5, this.game.height * 0.5);
    }
  }
}
