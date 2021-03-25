import { Rupee } from "./actors/Rupee";

class Manager {
  constructor() {
    this.state = true;
    this.intervalID = null;
    this.rupees = [];
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
}

export { Manager };
