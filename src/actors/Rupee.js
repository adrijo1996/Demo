/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const RedRupee = require("../../assets/RedRupee.png");

class Rupee {
  constructor(pos = { x: 300, y: 300 }, color = "#0d9263") {
    this.color = color;
    this.pos = pos;
    this.angle = 30;
    this.x_speed = 5;
    this.direction_x = 1;
    this.y_speed = 5;
    this.direction_y = 1;
    this.image = new Image();
    this.image.src = RedRupee;
  }

  draw(ctx, delta) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, 30, 30);
    ctx.drawImage(this.image, this.pos.x, this.pos.y, 30, 30);
  }

  keyboardEventDown(key) {}

  keyboardEventUp(key) {}

  /* setInterval(() => {
    const rupeeAppears = new Rupee();
    this.rupees.push(rupeeAppears);
  }, 2000); */
}

export default Rupee;
