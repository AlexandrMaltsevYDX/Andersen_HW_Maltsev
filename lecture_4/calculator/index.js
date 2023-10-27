import  Calculator  from "./calculator.js";

const calculator = new Calculator()

const setX_ = calculator.setX
const setY_ = calculator.setY
const sum = calculator.logSum
const mul = calculator.logMul
const sub = calculator.logSub
const div = calculator.logDiv
// console.log(calculator.getThisAttrs())
setX_(1)
setY_(1)
// console.log(calculator.getThisAttrs())
console.log(sum())
console.log(mul())
console.log(sub())
console.log(div())