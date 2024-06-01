class InputHandler {
  constructor(game) {
    this.game = game;
    this.upPressed = false;
    this.downPressed = false;
    this.leftPressed = false;
    this.rightPressed = false;
    this.keyPressedEvent();
    this.keyReleasedEvent();
  }
  keyPressedEvent() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowUp") {
        this.upPressed = true;
      }
      if (event.key === "ArrowDown") {
        this.downPressed = true;
      }
      if (event.key === "ArrowLeft") {
        this.leftPressed = true;
      }
      if (event.key === "ArrowRight") {
        this.rightPressed = true;
      }
    });
  }
  keyReleasedEvent() {
    window.addEventListener("keyup", (event) => {
      if (event.key === "ArrowUp") {
        this.upPressed = false;
      }
      if (event.key === "ArrowDown") {
        this.downPressed = false;
      }
      if (event.key === "ArrowLeft") {
        this.leftPressed = false;
      }
      if (event.key === "ArrowRight") {
        this.rightPressed = false;
      }
    });
  }
}
