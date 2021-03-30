/* eslint-disable import/named */
import { Zelda } from "./actors/Zelda";
import { myManager } from "./gameManager";

let reqAnimFram = 0;

window.addEventListener("load", () => {
  const canvas = document.getElementById("root");

  const ctx = canvas.getContext("2d");

  const actors = [new Zelda(), myManager];

  let lastFrame = 0;
  const render = (time) => {
    const coins = [...myManager.rupees];
    const delta = (time - lastFrame) / 1000;
    lastFrame = time;
    coins.forEach((rupee) => myManager.getDistance(actors[0], rupee));
    const superActors = [...actors, ...coins];
    superActors.forEach((actor) => actor.update && actor.update(delta));
    ctx.clearRect(0, 0, 600, 400);
    superActors.forEach((actor) => {
      ctx.save();
      actor.draw(ctx, delta);
      ctx.restore();
    });
    myManager.start();

    if (myManager.chrono <= 0) {
      alert(`Time over, you get ${myManager.points} rupees`);
      window.cancelAnimationFrame(reqAnimFram);
    } else {
      window.requestAnimationFrame(render);
    }
  };

  reqAnimFram = window.requestAnimationFrame(render);

  window.addEventListener("keydown", (e) => {
    actors.forEach((actor) => actor.keyboardEventDown(e.key));
  });
  window.addEventListener("keyup", (e) => {
    actors.forEach((actor) => actor.keyboardEventUp(e.key));
  });
});
