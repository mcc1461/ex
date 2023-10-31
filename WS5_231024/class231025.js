const ara = [2,4,6,8];
const ara2 = [1,3,5,7];

console.log(Math.max(...ara))


const name = "John";
const greeting = name && "Hello";

console.log(greeting); // Output: John


console.log(result = false && false || true); // Output: false
let x = 11;
result = x>0 && x<10
console.log(result ? "sayı uygun" : "uygun değil!!!");


const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(currentValue, index, array) {
  console.log(`Current value: ${currentValue} Index: ${index} Array: ${array}`);
});

const aa = new Array (3,2,1,0)
console.log(aa);
const ab = new Array (10)
console.log(ab);
const ac = Array.of(10)
console.log(ac);