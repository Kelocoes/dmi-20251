const {add, substract} = require('./module1');
// Or
const module1 = require('./module1');
console.log(add(1, 2));
console.log(substract(1, 2)); 
console.log(module1.add(1, 2));
console.log(module1.substract(1, 2));