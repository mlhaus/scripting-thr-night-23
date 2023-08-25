// 1. Arithmetic Operators
console.log('3 + 2 = ', 3 + 2); // addition
console.log('3 - 2 = ', 3 - 2); // subtraction
console.log('3 * 2 = ', 3 * 2); // multiplication
console.log('3 / 2 = ', 3 / 2); // division
console.log('3 / 2 | 0 = ', 3 / 2 | 0); // quotient (no decimal)
console.log('3 % 2 = ', 3 % 2); // remainder
console.log('3 ** 2 = ', 3 ** 2); // Exponent

// Concatenation
const name = 'John';
const age = 30;
console.log('Hello, my name is ' + name + ' and I am ' + age + ' years old');

// Template literal notation. Use accent mark instead of apostrophe
console.log(`Hello, my name is ${name} and I am ${age} years old`);

// Increment
let x = 0;
x = x + 1;
x++;
++x;
console.log(x++); // prints, then adds 1
// x is 4
console.log(++x); // adds 1, then prints

// Decrement
x = x - 1;
x--;
console.log(x);

// Shorthand Operators
x += 5;
console.log(x); // 3 + 5 = 8
x -= 5;
console.log(x); // 8 + 5 = 3
x *= 5;
console.log(x);  // 3 * 5 = 15
x /= 5;
console.log(x); // 15 / 5 = 3
x %= 5;
console.log(x); // 3 % 5 = 3
x **= 5;
console.log(x); // 3 ** 5 = 243

// 3. Comparison Operators
x = 2;
// Equal to (Just the value, not the type)
console.log(x == '2'); // true

// Equal to (Type and value)
console.log(x === '2'); // false

// Not equal to (Type and value)
console.log(x !== '2'); // true
console.log(x !== 2); // false

// Greater than and less than
console.log(x > 2); // false
console.log(x < 2); // false
console.log(x <= 2); // true
console.log(x >= 2); // true