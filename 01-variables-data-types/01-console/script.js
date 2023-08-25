// Log number
console.log(100);

// Log string
console.log('Hello World');


// A generally accepted practice is to use double quotes in HTML and single quotes in JavaScript...
// ...because sometimes you need to write HTML in JavaScript
console.log('<h1 class="branding">Hello World</h1>');

// Log multiple values
console.log(20, 'Hello', true);

// Log a variable
const x = 100;
console.log(x);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({school: 'Kirkwood', mascot: 'Eagles',});

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'background-color: red; color: white; display: inline-block; padding: 20px';
console.log('%cHello World', styles);

const year = document.getElementById('copyright-year');
year.innerText = new Date().getFullYear();