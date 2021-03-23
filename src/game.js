import Zelda from "./actors/Zelda";

window.addEventListener("load", () => {
  const canvas = document.getElementById("root");

  const ctx = canvas.getContext("2d");

  const actors = [new Zelda()];

  let lastFrame = 0;
  const render = (time) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((actor) => actor.update && actor.update(delta));
    ctx.clearRect(0, 0, 600, 400);
    actors.forEach((actor) => {
      ctx.save();
      actor.draw(ctx, delta);
      ctx.restore();
    });

    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);

  window.addEventListener("keydown", (e) => {
    actors.forEach((actor) => actor.keyboardEventDown(e.key));
  });
});
