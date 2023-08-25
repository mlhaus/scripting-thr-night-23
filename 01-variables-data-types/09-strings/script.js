let s = 'Hello World';
console.log(s);

s = new String('Hello World');
console.log(s);
console.log(s.__proto__);

// Number of characters
console.log(s.length);

// Access value by key
console.log(s[0]);

// charAt() - returns the character at the specified index
console.log(s.charAt(0));

// Change case
console.log(s.toUpperCase());
console.log(s.toLowerCase());

// indexOf - returns the index of the first occurrence of a specified value in a string
console.log(s.indexOf('l'));

// substring() - search a string for a specified value
console.log(s.substring(3, 5));
console.log(s.substring(6));

// slice() - extracts a part of a string and returns a new string
console.log(s.slice(0, 5));
console.log(s.slice(-11, -6));

// trim() - remove whitespace from beginning and end of string
s = '         Hello World ';
console.log(s, s.length);
s = s.trim();
console.log(s, s.length);

// replace() - replace all instances of a string
console.log(s.replace('World', 'John'));

// includes() - returns true if the string is found
console.log(s.includes('lo'));

// valueOf() - returns the primitive value of a variable
console.log(s.valueOf(), typeof s.valueOf());

// split() - returns an array of strings
console.log(s.split(' '));
console.log(s.split(''));