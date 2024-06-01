window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  const game = new Game(canvas.width, canvas.height);

  let fps = 60;
  let drawInterval = 1000 / fps;
  let delta = 0;

  let lastTime = 0;
  let timer = 0;
  let drawCount = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    delta += deltaTime;
    timer += deltaTime;
    lastTime = timeStamp;

    if (!game.gameOver) {
      if (delta >= drawInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        delta -= drawInterval;
        drawCount++;
        // console.log("running");
      }

      // if (timer >= 1000) {
      //   console.log(drawCount);
      //   timer = 0;
      //   drawCount = 0;
      // }

      requestAnimationFrame(animate);
    }
  }
  animate(0);
});
