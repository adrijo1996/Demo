import checkLimits from "../utils/checklimits";

const RedRupee = require("../../assets/RedRupee.png");

class Zelda {
  constructor(pos = { x: 100, y: 100 }, color = "#0d9263") {
    this.color = color;
    this.pos = pos;
    this.speed = 3;
    this.directionX = 0;
    this.directionY = 0;
    this.image = new Image();
    this.image.src = RedRupee;
  }

  draw(ctx, delta) {
    ctx.fillStyle = this.color;
    const newPos = {
      x: this.pos.x + this.directionX * this.speed,
      y: this.pos.y + this.directionY * this.speed,
    };
    if (checkLimits(newPos)) {
      this.pos = newPos;
    }
    ctx.fillRect(this.pos.x, this.pos.y, 20, 20);
    ctx.drawImage(this.image, this.pos.x, this.pos.y, 20, 20);
  }

  keyboardEventDown(key) {
    if (key === "ArrowRight") {
      this.directionX = 1;
      this.directionY = 0;
      console.log("right");
    } else if (key === "ArrowLeft") {
      this.directionX = -1;
      this.directionY = 0;
      console.log("left");
    } else if (key === "ArrowDown") {
      this.directionY = 1;
      this.directionX = 0;
      console.log("down");
    } else if (key === "ArrowUp") {
      this.directionY = -1;
      this.directionX = 0;
      console.log("up");
    }
  }
  keyboardEventUp() {
    this.directionX = 0;
    this.directionY = 0;
    console.log("para");
  }
}

export default Zelda;
