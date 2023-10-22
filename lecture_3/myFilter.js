Array.prototype.myFilter = function (callback) {
  const filteredArray = [];
  console.log(this.length)
  for (let i = 0; i < this.length; i++) { // this - is parent array
    if (callback(this[i], i, this)) { // this[i] - is curent element 
      filteredArray.push(this[i]);
    }
  }

  return filteredArray;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(number) {
  return number % 2 === 0;
}

const evenNumbers = numbers.myFilter(isEven);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
