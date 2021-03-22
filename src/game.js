import Link from "./actors/link";

window.addEventListener("load", (event) => {
  const canvas = document.getElementById("root");
  const ctx = canvas.getContext("2d");

  const actors = [new Link()];

  const fps = 25;

  let frame = 0;

  setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);

    actors.forEach((actor) => actor.update(frame));

    actors.forEach((actor) => {
      ctx.save();
      actor.draw(ctx);
      ctx.restore();
    });

    frame += 1;
  }, 1000 / fps);
});

//    ctx.fillStyle = "green";
//ctx.fillRect(10, 10, 30, 30);
