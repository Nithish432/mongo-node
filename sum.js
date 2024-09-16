
const add = (a, b) => a + b;

// console.log(add(5, 10))
const [, , num1, num2] = process.argv;
console.log(add(+num1, +num2))


// node JS 2-3 months

// console.log(document); // ❌ only in browser
// console.log(window); // ❌ only in browser

// console.log(global); // ✅ only in nodeJS