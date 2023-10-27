import { BaseCalculator } from "./base.js";
import { ZeroDivisonError } from "./exceptions.js";


export default class Calculator extends BaseCalculator {
  constructor() {
    super();

  }

  setX = (x) => {
    this.x = super.validated(x);
  }
  setY = (y) => {
    this.y = super.validated(y);
  }

  logSum = () => {
    if (!(this.x && this.y)) { // ! можно ли эту проверку вынести в родительский класс
      NaN
    };
    return this.x + this.y
  }

  logMul = () => {
    if (!(this.x && this.y)) {
      NaN
    };
    return this.x * this.y
  }

  logSub = () => {
    if (!(this.x && this.y)) {
      NaN
    };
    return this.x - this.y
  }

  logDiv = () => {
    if (!(this.x && this.y)) {
      NaN
    };

    if (this.y !== 0) {
      return this.x / this.y;
    } else {
      throw new ZeroDivisonError();
    };
  }
}
