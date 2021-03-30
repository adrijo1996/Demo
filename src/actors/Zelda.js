/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import checkLimits from "../utils/checklimits";
import { myManager } from "../gameManager";

const zeldasprites = require("../../assets/ZeldaSprites.png");

class Zelda {
  constructor(pos = { x: 280, y: 300 }, color = "#0d9263") {
    this.color = color;
    this.pos = pos;
    this.speed = 1;
    this.directionX = 0;
    this.directionY = 0;
    this.image = new Image();
    this.image.src = zeldasprites;
  }

  draw(ctx, delta) {
    const imgWidth = { x: 0, y: 0 };
    let imgOriginPOS = { x: 0, y: 0 };
    if (myManager.remainderTime <= 0) {
      imgOriginPOS = { x: 0, y: 0 };
    }
    ctx.fillStyle = this.color;
    const newPos = {
      x: this.pos.x + this.directionX * this.speed,
      y: this.pos.y + this.directionY * this.speed,
    };
    if (checkLimits(newPos)) {
      this.pos = newPos;
    }
    ctx.fillRect(this.pos.x, this.pos.y, 5, 5);
    ctx.drawImage(
      this.image,
      90,
      140,
      40,
      50,
      this.pos.x - 10,
      this.pos.y - 27,
      30,
      40
    );
  }

  keyboardEventDown(key) {
    if (key === "ArrowRight") {
      this.directionX = 1;
      this.directionY = 0;
    } else if (key === "ArrowLeft") {
      this.directionX = -1;
      this.directionY = 0;
    } else if (key === "ArrowDown") {
      this.directionY = 1;
      this.directionX = 0;
    } else if (key === "ArrowUp") {
      this.directionY = -1;
      this.directionX = 0;
    }
  }

  keyboardEventUp(key) {
    if (key === "ArrowRight") {
      this.directionX = 0;
    } else if (key === "ArrowLeft") {
      this.directionX = 0;
    } else if (key === "ArrowDown") {
      this.directionY = 0;
    } else if (key === "ArrowUp") {
      this.directionY = 0;
    }
  }
}

export { Zelda };
