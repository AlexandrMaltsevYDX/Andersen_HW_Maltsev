class Stack {
  constructor() {
    this.items = [];
  }

  // Добавить элемент в вершину стека
  push(element) {
    this.items.push(element);
  }

  // Удалить и вернуть элемент из вершины стека
  pop() {
    if (this.isEmpty()) {
      return "Стек пуст";
    }
    return this.items.pop();
  }

  // Вернуть элемент из вершины стека без удаления
  peek() {
    if (this.isEmpty()) {
      return "Стек пуст";
    }
    return this.items[this.items.length - 1];
  }

  // Проверить, пуст ли стек
  isEmpty() {
    return this.items.length === 0;
  }

  toArray(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(deepCopy);
    }

    const copy = {};
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }

    return copy;
  }

  // Вернуть размер стека
  size() {
    return this.items.length;
  }

  // Очистить стек
  clear() {
    this.items = [];
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== "function") {
      throw new Error("Переданная сущность не является итерируемой");
    }

    const stack = new Stack();
    for (const item of iterable) {
      stack.push(item);
    }

    return stack;
  }
}

// Пример использования стека
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Вывод: 3
console.log(stack.pop()); // Вывод: 2
console.log(stack.peek()); // Вывод: 1
console.log(stack.size()); // Вывод: 1
console.log(stack.isEmpty()); // Вывод: false
stack.clear();
console.log(stack.isEmpty()); // Вывод: true
const iterable = [1, 2, 3, 4, 5];
const stack1 = Stack.fromIterable(iterable);
console.log(stack1.pop());