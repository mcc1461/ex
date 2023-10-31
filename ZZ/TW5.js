// const person = {
//   name: "John",
//   age: 25,
//   city: "New York",
//   language: "French"
// };
// // You can access the properties of an object using dot notation (objectName.propertyName) or bracket notation (objectName['propertyName']). //

// //? Access Property
// console.log(person.name);
// console.log(person["name"]);

// //? Has Property
// console.log("age" in person);
// console.log(person.hasOwnProperty("age"));

// //?
// console.log(person);
// delete person.language;
// console.log(person);
// person.language = "French";
// console.log(person);
// person.language = undefined;
// console.log(person);
// const updatedPerson2 = Object.assign({}, person);
// console.log(updatedPerson2); // Output: { name: 'John', age: 25 }
// delete person.language;
// const updatedPerson3 = { ...person };
// console.log(updatedPerson3); // Output: { name: 'John', age: 25 }
// /*
// In JavaScript, an object is a data type that allows you to store and organize related data and functions together. It is a collection of key-value pairs, where each key is a unique identifier (also known as a property), and each value can be of any data type, including other objects.

// Objects in JavaScript can be created using object literals or the Object constructor. Here's an example of creating an object using an object literal:

// const person = {
//   name: 'John',
//   age: 25,
//   city: 'New York'
// };

// In addition to storing data, objects in JavaScript can also have methods, which are functions defined as object properties. Here's an example:
// */

// const person2 = {
//   name: 'John',
//   age: 25,
//   city: 'New York',
//   sayHello: function(x="User") {
//     console.log(`Hello ${x}!`);
//   }
// };

// person2.sayHello(); // Output: 'Hello!'
// const person2a = {a:1, b:2, c:3}
// console.log(typeof person2a);

// const person2a1 = Object.assign({k:  21}, person2a)
// person2a.e = 7;
// console.log("2a: ", person2a);
// console.log("2a1: ", person2a1);
// const person2a2 = {...person2a};
// person2a.e = 7897;
// console.log(person2a);
// console.log(person2a2);

// const {
//     name, age, city, sayHello, xx
// } = person2

// console.log(age);

// //* REST IN ARRAY:
// const numbers = [1, 2, 3, 4, 5]; 
// const [first,a, ...rest] = numbers; 
// console.log(first); // Output: 1 
// console.log(rest); // Output: [2, 3, 4, 5]

// //* SQUARE
// const numbers2 = [1, 2, 3, 4, 5]; 
// // const squaredNumbers = numbers2.map((num) => num ** 2);
// const squaredNumbers = numbers2.forEach((num) => num ** 2); //!!
// console.log(squaredNumbers);
// numbers2.forEach((num) => console.log( num ** 2)); //??????

// //* SUM EVEN NUMBERS
// const numbers3 = [1, 2, 5, 4, 8]; 
// const sumOfEvens = numbers3.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc), 
// 0); 
// console.log("e2: ", sumOfEvens);


//* CHALLENGE
const products = [ 
  { name: "Product 1", price: 77, category: "Electronics" }, 
  { name: "Product 2", price: 30, category: "Clothes" }, 
  { name: "Product 3", price: 40, category: "Electronics" }, 
  { name: "Product 4", price: 50, category: "Electronics" }, 
  { name: "Product 5", price: 60, category: "Clothes" }, 
  { name: "Product 6", price: 70, category: "Electronics" }, 
  { name: "Product 7", price: 80, category: "Clothes" }, 
  { name: "Product 8", price: 90, category: "Electronics" }, 
  { name: "Product 9", price: 60, category: "Clothes" }, 
  { name: "Product 10", price: 70, category: "Electronics" }, 
  { name: "Product 11", price: 80, category: "Clothes" }, 
  { name: "Product 12", price: 90, category: "Clothes" }, 
]; 

const productsByCategory = products.reduce((acc, product) => {
  const category = product.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {});
// Use map to calculate the average price for each category
const avgPriceByCategory = Object.keys(productsByCategory).map(category => {
  const sum = productsByCategory[category].reduce((acc, product) => acc +
product.price, 0);
  return { category: category, average: sum / productsByCategory[category].length
}; });
// Use filter to only select categories with an average above a certain threshold
const highPricedCategories = avgPriceByCategory.filter(category => category.average
> 50);
  console.log(highPricedCategories)







/* Use map to create an object with category as the key 
and an array of products as the value */
/*
let  step=0;
const productsByCategory = products.reduce((acc, product,i,arr) => { 
  console.log("*step:", ++step);
  const category = product.category; 
  console.log("*category:", category);
  console.log(i, arr);
  console.log("*Ürün: ",category, product.name, product.price);
  if (acc[category]) { 
    console.log("--- Öncesi:", acc[category]);
    acc[category].push(product); 
    console.log("=== Sonrası:",acc[category]);
    arr.shift(product.category)
  } 
  acc[category] = [];
  console.log("ooo: ", acc[category]); 
  console.log(acc);
  return acc; 
// }, {[{name: "Product mcc", price:999, category: "zzz"},
// {name: "Product mcc2", price:777, category: "zzz"}]}
},{}); 
//  console.log(productsByCategory);
// Use map to calculate the average price for each category
const avgPriceByCategory = Object.keys(productsByCategory).map(category => { 
  console.log("*-*-*");
  console.log("###", Object.keys(productsByCategory));
  const sum = productsByCategory[category].reduce( function(acc, product){ acc + product.price;
    }, 0); 

  return { category: category, average: sum / productsByCategory[category].length }; 
}); 
// Use filter to only select categories with an average above a certain threshold
const highPricedCategories = avgPriceByCategory.filter((category) => category.average 
> 50); 
  console.log("sonuç: ", highPricedCategories) 
*/ 


// Calculate the average price for each category and filter out categories with average price below 50

// Step 1: Define the products array

/* ----------------------------------- xxx ---------------------------------- */

//* Step 2: Group products by category
//? const productsByCategory = products.reduce((acc, product) => {
  //* Extract the category of the current product
  //? const category = product.category;
  
  //* Check if the productsByCategory object already has a property with the name of the current category
  //? if (!acc[category]) {
    //* If not, create an empty array as the value for that category
  //?   acc[category] = [];
  //? }
  
  //* Push the current product into the array corresponding to its category
  //? acc[category].push(product);
  
//?   return acc;
//? }, {});

// //* Step 3: Calculate the average price for each category
// const avgPriceByCategory = Object.keys(productsByCategory).map((category) => {
//   // Get the array of products for the current category
//   const productsInCategory = productsByCategory[category];
  
//   //* Calculate the sum of prices for all products in the category using the reduce method
//   const sum = productsInCategory.reduce((acc, product) => acc + product.price, 0);
  
//   //* Calculate the average price by dividing the sum by the number of products in the category
//   const average = sum / productsInCategory.length;
  
//   //* Create an object with the category name and the average price
//   return { category: category, average: average };
// });

// //* Step 4: Filter out categories with average price below 50
// const highPricedCategories = avgPriceByCategory.filter((category) => category.average > 50);

// //* Step 5: Log the highPricedCategories array to the console
// console.log(highPricedCategories);