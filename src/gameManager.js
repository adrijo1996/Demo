/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import { Rupee } from "./actors/Rupee";

class Manager {
  constructor(pos = { x: 10, y: 20 }) {
    this.state = true;
    this.intervalID = null;
    this.rupees = [];
    this.pos = pos;
    this.chrono = 30;
    this.points = 0;
  }

  start() {
    if (this.state) {
      this.intervalID = setInterval(() => {
        const coin = new Rupee();
        this.rupees.push(coin);
      }, 1000);
      this.state = false;
    }
  }

  stop() {
    this.state = false;
  }

  getDistance(zelda, rupee) {
    const xDiff = zelda.pos.x - rupee.pos.x;
    const yDiff = zelda.pos.y - rupee.pos.y;
    const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    if (distance < 30 && rupee.touched === false) {
      const rupeeEncounter = document.getElementById("rupee");
      rupeeEncounter.play();
      rupee.state = false;
      this.points += 1;
      rupee.touched = true;
    }
    return distance;
  }

  update(delta, rupee) {
    if (this.chrono >= 0) {
      this.chrono -= 1 / 140;
    } else {
      this.chrono = 0;
    }
  }

  getChrono() {
    return this.chrono.toFixed(1);
  }

  draw(ctx, delta) {
    ctx.translate(this.pos.x, this.pos.y);
    ctx.font = "18px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`TIME: ${this.getChrono()}  -  RUPEES: ${this.points}`, 0, 0);
  }

  keyboardEventDown(key) {}

  keyboardEventUp(key) {}
}

const myManager = new Manager();

export { myManager };
