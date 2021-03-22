/* eslint-disable lines-between-class-members */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import angle2rad from "../utils/angle2rad";
import checkLimits from "../utils/checkLimits";
import { Point } from "../types/Point";
import { Actor } from "../Actor";

/*interface IPacman {
  color: string;
  pos: Point;
  angle: number;
  speed: number;
  directionX: number;
  directionY: number;
}*/

class Link extends Actor {
  color;
  pos;
  angle;
  speed;
  directionX;
  directionY;

  constructor(pos = { x: 100, y: 100 }, color = "yellow") {
    super(pos);
    this.color = color;
    this.pos = pos;
    this.angle = 30;
    this.speed = 5;
    this.directionX = 1;
    this.directionY = 0;
  }

  update(frame) {
    // open and close mouth (wakuwakuwaku)
    this.angle = Math.abs(((frame * 5) % 60) - 30);

    // Marc`s old map
    // if (this.pos.x <= 650 && this.pos.x >= -50) {
    //   this.pos.x += this.speed * this.directionX;
    //   this.pos.y += this.speed * this.directionY;
    // } else {
    //   this.pos.x = this.directionX > 0 ? -50 : 650;
    // }

    // Link positions
    // this.pos.x += this.speed * this.directionX;
    // this.pos.y += this.speed * this.directionY;

    const newPos = {
      // nueva posición si cumple checkLimits()
      x: this.pos.x + this.directionX * this.speed,
      y: this.pos.y + this.directionY * this.speed,
    };
    if (checkLimits(newPos)) {
      // actualiza la posición del Link
      this.pos = newPos;
    }
  }

  draw(ctx) {
    ctx.translate(this.pos.x, this.pos.y);

    // Marc`s old turn around function
    // ctx.rotate(this.directionX > 0 ? 0 : Math.PI);

    // Calculate direction
    let direction = 0;
    if (this.directionX !== 0 && this.directionX < 0) {
      direction = 180;
    }
    if (this.directionY !== 0 && this.directionY > 0) {
      direction = 90;
    }
    if (this.directionY !== 0 && this.directionY < 0) {
      direction = -90;
    }

    const angleAdapt = this.angle === 0 ? 0.1 : this.angle;
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineTo(0, 0);
    ctx.arc(
      0,
      0,
      40,
      angle2rad(angleAdapt + direction), // iniciamos el ángulo según la dirección
      angle2rad(-angleAdapt + direction) // terminamos el ángulo según la dirección
    );
    ctx.lineTo(0, 0);
    ctx.fill();
    ctx.stroke();
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
  keyboardEventUp(key) {}
}

export default Link;
