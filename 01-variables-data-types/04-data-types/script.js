// String
const firstName = 'John';
console.log(firstName, typeof firstName);

// Number
const age = 30;
console.log(age, typeof age);

const temp = 98.9;
console.log(temp, typeof temp);

// Boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);

// Null
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);
// More info on why typeof null == 'object'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

// Undefined
let score;
// const score = undefined;
console.log(score, typeof score);

console.log(Number.MAX_VALUE);

// Reference Types

const numbers = [1, 2, 3, 4];
console.log(numbers, typeof numbers);

const person = {
    name: 'John',
};
console.log(person, typeof person);

const output = function () {
    return 'Hello';
};

console.log(output, typeof output);
console.log(output(), typeof output());











