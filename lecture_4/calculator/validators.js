import { InputTypeValidationError } from "./exceptions.js";

const isValidNumber = (num) => {
    return typeof num === "number" && isFinite(num);
}

export const getInput = (num) => {
    if (isValidNumber(num)) {
        return num;
      } else {
        throw new InputTypeValidationError("Input is not a valid number");
      }
}

