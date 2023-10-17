class IterationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "IterationError"; // (2)
  }
;}

class TypeIterationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "TypeIterationError"; // (2)
  }
};

// Make simple object
let count = {
  from: 1,
  to: 5,
};

// Make it iterable
count[Symbol.iterator] = function () {
  if (this.to < this.from) {
    throw new IterationError("'this.to' should be greater then 'this.from'");
  }
  if (isNaN(this.from) || isNaN(this.to)) {
    throw new TypeIterationError(
      "'this.to' and 'this.from' should be a Number"
    );
  }
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of count) {
  console.log(num);
}
