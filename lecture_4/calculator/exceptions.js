export class InputTypeValidationError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "InputTypeValidationError"; // (2)
    }
  ;}

export class ZeroDivisonError extends Error {
    constructor() {
      this.message = "Division by zero is not allowed."
      super(this.message); // (1)
      this.name = "InputTypeValidationError"; // (2)
    }
  ;}
