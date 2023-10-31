//TODO Red Kit
// LUCKY LUKE; 
// joe jack william averell dalton
// Belle Star, Buffalo Bill, ANNE DALTON
///* 
//TODO STRING
// let namesD = ["Joe", "Jack", "William", "Averell"]
// let strN1 = namesD.toString()
// console.log("toString\t: ",strN1);  // string

// let strNames2a = namesD.join(",")
// console.log('join(",")\t: ',strNames2a);  // string
// let strNames2b = namesD.join(" and ")
// console.log('join(" and ")\t: ',strNames2b);  // string
// console.log("Type-strNames2b\t: ", typeof strNames2b);
// console.log(namesD.toString().replaceAll(",","")); 
// console.log(namesD.toString().replaceAll(",","")
// [length-1); 

// console.log("*****************");
//*/
/*
//TODO concat
let names22 = ["Red Kit", "Calamity Jane"]
let names33 = ["RinTinTin", "Düldül"]
let names44 = ["Billy the Kid", "Belle Star", "Buffalo Bill", "Judge Roy Bean"]
let together = names22.concat(names33) //!!! not string BUT OBJECT
console.log(together);
console.log("Type-together\t: ", typeof together);
let togetherAll = namesD.concat(names22, names33)
console.log(togetherAll);

console.log("*****************");
*/
/* 
//TODO splice (Remove or put new elements)
console.log(names22); 
names22.splice(0,0,"Billy the Kid"); //? add to the beginning without deleting
let try1=names22; 
console.log(try1);  
try1.splice(0,1,"ANNE DALTON"); //? add to the beginning and delete first one
console.log(try1);
try1.splice(1,1,"Belle Star");  //? replace RED KIT
console.log(try1);  
let try2=try1;
try2.splice(-1)  //? delete the last one
console.log(try2);
try2.splice(1,0,"Red Kit") //? add to index 1 without deleting any other
console.log(try2);
try2.splice(1) //? delete all after index 0 
console.log(try2);
*/
/*
//TODO make a copy of an array
console.log(namesD);
let namesCopy = [...namesD]
console.log(namesCopy);  //? same copy

console.log("*****************");
*/
/* 
//TODO indexOf
console.log(namesCopy);
let indexA = namesCopy.indexOf("Jack")
console.log(indexA);
namesCopy.splice(4,0,"Jack","Jack","Joe")
console.log(namesCopy);
let indexB = namesCopy.lastIndexOf("Jack")
console.log(indexB);

console.log("*****************");
*/
/*
//TODO flat
let namesCopy2 = ["Red Kit", ["Anne Dalton", ["Joe", "Jack", "William", "Averell"]], "Judge Roy Bean" ]
console.log(namesCopy2);
let flat1 = namesCopy2.flat() //? Exclude first level nested part!!!
console.log(flat1); 
let flat2 = namesCopy2.flat().flat() //? Exclude first and second level nested part!!!
console.log(flat2); 
let flat3 = namesCopy2.flat(2) //? Exclude first and second level nested part!!!
console.log(flat3); 

console.log("*****************");
*/
/*
//TODO forEach
let namesCopy3 = ["Joe", "Jack", "William", "Averell"]
console.log(namesCopy3);
namesCopy3.forEach((n) => console.log(n.toUpperCase())) //* Result
for (let i=0; i<namesCopy3.length; i++) {    
    console.log(namesCopy3[i].toUpperCase());  //* Same result, different way
}
console.log("*****************");

*/
/*
//TODO map
let nums = [1,3,5,7,9,10,20,50]
console.log(nums);
nums.forEach((n) =>  console.log(n*2))
let numsDouble= nums.forEach((n) =>  n*2)
console.log(numsDouble); //!!!  undefined (forEach does not work here...)
//? forEach does not return anything !!!
let numsTriple= nums.map((n) =>  n*3)
console.log(numsTriple);

console.log("*****************");

*/
/*
//TODO filter
let daltons = [
    { title: "shortest", nameD: "Joe", height: 100, age: 44, money: 700},
    { title: "longest", nameD: "Averell", height: 130, age: 40, money: 300},
    { title: "middle 1", nameD: "Jack", height: 160, age: 37, money: 200},
    { title: "middle 2", nameD: "William", height: 190, age: 35, money: 100},
];

let gangsL = daltons.filter( (character) => character.height <= 150);
console.log(gangsL);
let gangsL2 = daltons.filter( (character) => character.height <= 150)
    .forEach ((i) => console.log(i.nameD));

console.log("*****************");

*/
/*
//TODO map & reduce
let gangsLValues = daltons.map((p) => p.height)
console.log(gangsLValues);
let gangsLTotal = daltons.map((p) => p.height)
    .reduce( (acc, val) => acc + val, -(25*4)+50)
console.log(gangsLTotal);
let gangsLMax = daltons.map((p) => p.height)
    .reduce( (acc, val) => Math.max(acc, val), -Infinity)
console.log(gangsLMax);
let gangsLMin = daltons.map((p) => p.height)
    .reduce( (acc, val) => Math.min(acc, val), +Infinity)
console.log(gangsLMin);

console.log("*****************");
*/
/*
//TODO some
let names = ["Joe", "Jack", "William", "Averell"]
let names2 = ["Red Kit", "Calamity Jane"]
let names3 = ["RinTinTin", "Düldül"]
let names4 = ["Billy the Kid", "Belle Star", "Buffalo Bill", "Judge Roy Bean"]

*/
/*
//TODO every
let charactersAll = names.concat(names2,names3,names4)
console.log(charactersAll);
console.log(gangsLValues);

let isNameJoe = charactersAll.some( (n) => n === "Joe");
console.log(isNameJoe); 
let isGreater175 = gangsLValues.some( (n) => n >= 175);
console.log(isGreater175); 
let everyGT150 = gangsLValues.every( (n) => n >= 150);
console.log(everyGT150); 

*/
/*
//TODO find & findIndex
let wanted = [
    { id: 101, title: "shortest", nameD: "Joe", height: 100, age: 44},
    { id: 102,title: "middle 1", nameD: "Jack", height: 130, age: 40},
    { id: 103,title: "middle 2", nameD: "William", height: 160, age: 37},
    { id: 104,title: "longest", nameD: "Averell", height: 190, age: 33},
];

let target = wanted.find((f) => f.title === "shortest")
console.log(target);
console.log(target.title);
console.log(target.nameD);
console.log(target.age);

let targetX = wanted.findIndex((i) => i.nameD === "William")
console.log(targetX+1);

const found = wanted.find((gang) => gang.id === 103);
console.log(found);

const foundF = wanted.find((gang) => gang.nameD.includes('J'));
console.log(foundF); 

*/
/*
//TODO sort & reverse
console.log(charactersAll);
let allOrdered = charactersAll.sort();
console.log(allOrdered);
let allOrderedR = charactersAll.sort().reverse();
console.log(allOrderedR);

let numS = [2, 21, 1, 13, 111, 1009, 12, 5, 7, "Ç", "a" , "Z", "X", "e"];
console.log(numS.sort());    // ALPHA
console.log(numS.sort((a,b) => b - a));  //  NUMERIC
console.log(numS.sort((a,b) => b - a));

*/
/*
//TODO SORT NUMBERS
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
arr1.sort((a,b) => a-b)
console.log(arr1)
arr1.sort((a,b) => b-a)
console.log(arr1)

*/
/*
//TODO EXERCISE

let myName = "Anthony Harold";
myName = myName.slice(8)
myName.toUpperCase()
console.log(myName);
 

const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((num) => num > 3);
console.log(foundNumber); // Output: 4

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Mike' }
  ];
  const foundUser = users.find((user) => user.id === 2);
  console.log(foundUser.name); // Output: { id: 2, name: 'Jane' }
 
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

*/
/*
//TODO STRING-ARRAY-OBJECT

const data = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 40 }
  ];
  const combinedNames = data.reduce((accumulator, el, i, arrT) => {
    console.log("acc: ", accumulator);
    console.log(typeof accumulator);
    console.log("*******");
    // console.log(accumulator +  " " + currentValue.name);
    // accumulator.push(currentValue)
    console.log(el.age);
    console.log(accumulator+el.age);
    const xx = (accumulator)/(i+1)
    console.log(i, arrT);
    return xx
    // return accumulator + " " + currentValue.name

  }, 0);
// }, [{name: "Ali", age: 41}, {name: "Veli", age: 55}]);
  console.log(combinedNames); // Output: "John Jane Bob"
  
  */
/*
//TODO UNIQUE VALUES
const sample1 = [1,1,1,2,2,5,5,5,4,7,4,3,2,9]
const sampleN1 = [...new Set(sample1)] //ARRAY
const sampleN2 = new Set(sample1) //SET
console.log(sampleN1);
console.log(sampleN2);

*/
/*
//TODO - REDUCE (COMPLEX)
const productsA =[
    {"brand": "Opel", "price":13},
    {"brand": "Nissan", "price":23},
    {"brand": "Honda", "price":21},
    {"brand": "Audi", "price":27},
]
let counter=0
const result = productsA.reduce( function(acc,product) {
    console.log(++counter);
    let maxPriceP;
    console.log("?????-acc", acc, acc.price);
    console.log("?-product", product, product.price);
    console.log("***", acc, product, acc.price);
    if (product.price >= acc.price) {
        console.log("---", acc);
        acc = product;
        console.log("---", acc);
        maxPriceP = product;
        console.log("###:", maxPriceP["brand"]);
    } else {maxPriceP = acc;
        console.log("###:",maxPriceP.brand);}
    console.log("maxPrice:",maxPriceP.price);
    return maxPriceP;
    },productsA[0]);
console.log("result:", result, result.price);

productsA.reduce( (acc1, p) => 
   acc1.price >= p.price ? acc1 : p, productsA[1])


console.log(productsA.sort((a,b)=>b.price - a.price)[0]);

console.log(productsA.map( product => product.price)
    .sort((a,b) => a -b)[productsA.length-1])

let maxP=-Infinity
let rr = productsA.forEach((a)=> a.price > maxP 
    ? console.log("maxP:", a.price)
    : console.log(a.price))
console.log(rr);

productsA.forEach((a)=> {
    if(a.price > maxP) {
        maxP = a.price;
        console.log("maxP:",maxP)
    };
});
*/
/*
//TODO DESTRUCTURING
let ob = {"name" : "Ali", "age":41};
let ob2 = {"age":55};
let ob3 = {"ID":777}
let newOb = {...ob3,...ob, ...ob2}
console.log(newOb);

function selam({ name, age, ID }) {
    return `Hello ${name} with ID:${ID}! You are ${age} years old.`;
}
console.log(selam(newOb));
let {department="finance", name, age}=newOb;
console.log(name, age, department)
*/
/*
//TODO AND-OR
console.log("55" < 56)
console.log("55" < 56 && 67 === "67")
console.log("55" < 56 && 67 === "67" || !(253 % 11))
console.log("55" < 56 && 67 === "67" || 253 % 10 && !false)
*/
/*
//TODO - set ve Array.from 

let a = ["a", 3, 2, 2, 5, 5, 6, 7, 8, 9, 9];
function findDuplicates(arr) {
    let uniqueElements = new Set();
    let duplicates = new Set();
    for (let item of arr) {
        if (uniqueElements.has(item)) {
            duplicates.add(item);
        } else {
            uniqueElements.add(item);
        }
    }
    return Array.from(duplicates);
}

let duplicateElements2 = findDuplicates(a);
console.log(duplicateElements2); // [2, 5, 9]


function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
let duplicateElements = findDuplicates(a);
console.log(duplicateElements); // [2, 5, 9]
console.log(a.indexOf(2));
*/
// //? 1)
// console.log("55" < 56 && 67 === "67" || 253 % 11 && !false)


// //? 2)
 
// console.log((15 * 2) / 3 + 8 === 18 || (10 % 3) ** 2 >= 4 && !(5 > 7))

// //? 3)
// const day = "Sunday" 
// switch (day) {
//     case "Monday": 
//     case "Tuesday": 
//     case "Wednesday": 
//     case "Thursday": 
//     case "Friday": 
//         console. log("It's a week day.");
//         break; 
//     case "Saturday": 
//     case "Sunday": 
//         console. log("It's a weekend day.");
//         break; 
//     default:
//         console. log("It's a invalid day.");
//         break; 
//     }

// //? 4)

// const x = 5; 
// const y = 10; 
// if (((x + y) % x && y < 15)) { 
//     console. log( "Both conditions are true"); } 
//     else {
//     console.log("At least one condition is false"); }

// //? 6)

// let number = 1; 
// let sum = 0; 
// while (number <= 10) {   // (n*(n+1)/2)
//     sum += number; 
//     number++;
//     console.log( "Total: " + sum)};


// //? 7)
// let result = 0; 
// for (let i = 1; i <= 5; i++) {
//     result *= i; // result=result*i
// } 
// console.log("Result: " + result);

// //? 8)
// function message(username) { 
//     console.log(`Hello ${username}`);
// }
// let sayHello = message; 
// sayHello("FS Cohort 15");
// message("FS Cohort 15");


// //? 11)
// console.log('hello'.replace('l', '*'))
// console.log('hellol'.replaceAll('l', 'r'))


// //? 12)
// let myVar = "clarusway"
// console.log(myVar[0]); 
// myVar[0] = "x" //immutabele
// console.log(myVar);
// myVar = "Ali"
// console.log(myVar);

// //? 13)

// let str = "Once a day latea"; 
// let index = str.indexOf("a"); 
// console.log(index = str.indexOf("a")); 
// let index2 = str.lastIndexOf("a");
// console.log(index2); 
// console.log(str.indexOf("a", index2 + 1) === index2);
// console.log(str.indexOf("a", 13));
// // (index+1): shows the starting point of finding


// //? 14)

// let myName = "Anthony Harold"; 
// myName = myName.slice(8) 
// myName.toLowerCase() //?not active because not assigned!
// console.log (myName) //Harold (not harold!!!)

// //? 17)

// const myArr2 = ["1" , 2, "Hello", "World!", 77, 99]; 
// const newArr = myArr2.reverse(); 
// console.log(myArr2);
// console.log(newArr);
// const newArr3 = [...myArr2];
// myArr2.push("Veli", "Kamil", 55)
// newArr3.unshift(101)
// console.log("newArr3 :", newArr3);
// console.log("myArr2 :", myArr2);




// //? 18)

// const myArr = [1, 2, 5, 6, 7, 3, 40001, 4000009]; 
// const newArr = myArr;
//     newArr.sort((a,b) => b-a);
//     const numArr = newArr.forEach((item, index)=> item);
//     console.log(newArr.map ((item, index)=>item));
//     console.log(numArr);  //undefined
//     //? **** forEach do not return anything!!! ****


// //? 20) 
    
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 101]

    // oddArr = numbers.map(item => item**2)
    //     .filter(item => item %2)
    // // .map(item=> item ** 2)
    // console.log(oddArr);
    
// //? 23)

// const pen = {}; 
//     pen.ink2 = "blue"; 
//     console.log(pen);
//     if(pen["ink2"]) { 
//     console.log(`Color is ${pen["ink2"]}`);
//     } else { 
//     console.log("Color is undefined!");
    
//     }
   
// //? 24)

const products = [ 
{"model" : "HP Pavilion", "price": 999},
{"model": "Dell XPS", "price": 888},
{"model":"MacBook Air", "price": 1111}, 
{"model": "Asus ROG Strix", "price": 3333}]
// let z1=products.reduce((max, q) => ((max.price > q.price) ? max.price : q.price), products[0].price);
// console.log(z1);
let z2=products.reduce((max, q) => ((q.price > max.price) ? q.price : max.price), products[0].price);
console.log(z2);



const products2 = [ 
    {"model": "HP Pavilion", "price": 999},
    {"model": "Dell XPS", "price": 888},
    {"model": "MacBook Air", "price": 1111}, 
    {"model": "Asus ROG Strix", "price": 3333}
  ];
  
  let maxPrice = products2.reduce((max, product) => (product.price > max ? product.price : max), 0);
  console.log(maxPrice);
  

// console.log(products.map( p => p.price));
// console.log(products.map(p => p.model))
// let result = products.reduce( function (total, p, i) {
//     console.log(i+1);
//     console.log(total);
//     console.log(p);
//  return Math.max(...products.p.price)}, products[3].price)
// console.log(result);
// console.log((products.map((p) => p.price)).filter((a) => a > 1000));


// const totalPrice = products.reduce((accumulator, product) => accumulator + (product.price || 0), 0);
// let z1= products.map(product => product.price).sort((a,b)=>a-b)
// console.log(z1);

// let z2= ((products.map(p => p.price)).sort((a,b) => a-b)).length
//   z3= ((products.map(p => p.price)).sort((a,b) => a-b))[z2-1]

// // 
// console.log(z2);
// console.log(z3);
// //? 25)
//     let object = { "myName' : 'Anthony', 'myAge' : 30 }; let objectTwo = { 'myAge' : 675 };

//     let newobject = {...object, ...objectTwo };
    
//     console. Log(newobject);
