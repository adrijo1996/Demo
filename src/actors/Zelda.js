//import checkLimits from "../utils/checklimits";

const greenRupee = require("../../assets/greenRupee.png");

class Zelda {
  constructor(pos = { x: 100, y: 100 }, color = "#0d9263") {
    this.color = color;
    this.pos = pos;
    this.angle = 30;
    this.x_speed = 5;
    this.direction_x = 1;
    this.y_speed = 5;
    this.direction_y = 1;
    this.image = new Image();
    this.image.src = greenRupee;
  }

  draw(ctx, delta) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, 40, 60);
    ctx.drawImage(this.image, this.pos.x, this.pos.y, 40, 60);
  }

  keyboardEventDown(key) {
    if (key === "ArrowRight") {
      this.pos.x += 6;
      console.log("right");
    } else if (key === "ArrowLeft") {
      this.pos.x -= 6;
      console.log("left");
    } else if (key === "ArrowDown") {
      this.pos.y += 6;
      console.log("down");
    } else if (key === "ArrowUp") {
      this.pos.y -= 6;
      console.log("up");
    }
  }
}

export default Zelda;
