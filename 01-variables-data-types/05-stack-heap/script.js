const name = 'Marc';
let newName = name;
newName = 'John';
console.log(newName, name);

const age = 42;
let newAge = age;
newAge++;
console.log(newAge, age);

// Reference type values are stored in the heap
const person = {
    name: 'John',
};
let newPerson = person;
newPerson.name = 'Marc';
console.log(newPerson.name, person.name);

const numbers = [0];
let newNumbers = numbers;
newNumbers[0] = 1;
console.log(newNumbers[0], numbers[0]);








