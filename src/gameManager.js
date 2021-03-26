/* eslint-disable class-methods-use-this */
import { Rupee } from "./actors/Rupee";

class Manager {
  constructor() {
    this.state = true;
    this.intervalID = null;
    this.rupees = [];
    this.remainderTime = 0;
    this.points = 0;
  }

  start() {
    if (this.state) {
      this.intervalID = setInterval(() => {
        const coin = new Rupee();
        this.rupees.push(coin);
      }, 5000);
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
    // console.log(distance);
    if (distance <= 30) {
      this.points += 1;
      rupee.state = false;
    }
    return distance;
  }
}

const myManager = new Manager();

export { myManager };
