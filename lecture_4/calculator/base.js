import { getInput }  from "./validators.js";


export class BaseCalculator {
    validated(num) { return getInput(num) }
}