// * 1 * by Literal
function byLiteral(name, age) {
  return { name, age };
}

// * 2 * by Object.assign
function byObjAssign(name, age) {
  return Object.assign({}, { name, age });
}

// * 3 * by new Object
function byNewObject(name, age) {
  let person = new Object();
  person.name = name;
  person.age = age;
  return person;
}

// * 4 * by function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}
function byFuncConstructor(name, age) {
  let person = new Person(name, age);
  return person;
}

// * 5 * by class
class ClassPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
function byClass(name, age) {
  let person = new ClassPerson(name, age);
  return person;
}

// * 6 * by Prototype use __proto__
function byProtoOld(name, age) {
  let protoPerson = {
    name: "Cаша",
    age: 23,
  };
  let person = {
    __proto__: protoPerson,
  };
  person.name = name;
  person.age = age;
  return person;
}

// * 7 * by Prototype use setPrototype + Anononym
function byProtoSetProto(name, age) {
  let protoPerson = {
    name: name,
    age: age,
  };
  let person = {};
  Object.setPrototypeOf(person, protoPerson);
  return { name: person.name, age: person.age }; // ! <=
}

// * 8 * by Spread operator
function bySpreadOperator(name, age) {
  let _person = {
    name: name,
    age: age,
  };
  
  return { ..._person };
}


// * 9 * by JsonParse
function byJsonParse(name, age) {
  let jsonString = `{"name":"${name}", "age":${age}}`
  let person = JSON.parse(jsonString);
  
  return person;
}

function getPerson(name, age) {
  return byJsonParse(name, age);
}

console.log(getPerson("Саша", 23));
