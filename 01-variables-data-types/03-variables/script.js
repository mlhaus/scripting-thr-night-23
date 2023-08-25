// Ways to declare a variable
// var, let, const
var x = 1;
let y = 1;

if (true) {
    var x = 2;
    let y = 2;
    console.log(x); // Expected output: 2
    console.log(y); // Expected output: 2
}

console.log(x); // Expected output: 2
console.log(y); // Expected output: 1

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     lowercase

let score;
score = 0;
console.log(score);

const arr = [0, 1, 2];
arr[0] = 1;
console.log(arr);

const person = {
    name: 'Marc',
    age: 42,
    eat: function () {
        return 'nom nom nom';
    }
};
person['name'] = 'John';
person.age = 22;
console.log(person.name);
console.log(person.age);
console.log(person.eat());

let $a, $b;
$a = 1;
$b = 2;

const c = 1, d = 2;


















