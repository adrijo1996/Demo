import Zelda from "./actors/Zelda";
import Rupee from "./actors/Rupee";

window.addEventListener("load", () => {
  const canvas = document.getElementById("root");

  const ctx = canvas.getContext("2d");

  const actors = [new Zelda(), new Rupee()];

  let lastFrame = 0;
  const render = (time) => {
    const delta = (time - lastFrame) / 1000;
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
  window.addEventListener("keyup", (e) => {
    actors.forEach((actor) => actor.keyboardEventUp(e.key));
  });
});
