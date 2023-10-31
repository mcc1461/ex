// LUCKY LUKE; joe jack william averell dalton
// Belle Star, Buffalo Bill, ANNE DALTON
/*
//* toString 
let names = ["Joe", "Jack", "William", "Averell"]
let strNames1 = names.toString()
console.log("toString\t: ",strNames1);  // string

let strNames2a = names.join(",")
console.log('join(",")\t: ',strNames2a);  // string
let strNames2b = names.join(" and ")
console.log('join(" and ")\t: ',strNames2b);  // string
console.log("Type-strNames2b\t: ", typeof strNames2b);

console.log("*****************");

//* concat
let names2 = ["Red Kit", "Calamity Jane"]
let names3 = ["RinTinTin", "Düldül"]
let names4 = ["Billy the Kid", "Belle Star", "Buffalo Bill", "Judge Roy Bean"]
let together = names2.concat(names3) //!!! not string BUT OBJECT
console.log(together);
console.log("Type-together\t: ", typeof together);
let togetherAll = names.concat(names2, names3)
console.log(togetherAll);

console.log("*****************");

//* splice (Remove or put new elements)
console.log(names2); 
names2.splice(0,0,"Billy the Kid"); //? add to the beginning without deleting
let try1=names2; 
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

//* make a copy of an array
console.log(names);
let namesCopy = [...names]
console.log(namesCopy);  //? same copy

console.log("*****************");

//* indexOf
console.log(namesCopy);
let indexA = namesCopy.indexOf("Jack")
console.log(indexA);
namesCopy.splice(4,0,"Jack","Jack","Joe")
console.log(namesCopy);
let indexB = namesCopy.lastIndexOf("Jack")
console.log(indexB);

console.log("*****************");

//* flat
let namesCopy2 = ["Red Kit", ["Anne Dalton", ["Joe", "Jack", "William", "Averell"]], "Judge Roy Bean" ]
console.log(namesCopy2);
let flat1 = namesCopy2.flat() //? Exclude first level nested part!!!
console.log(flat1); 
let flat2 = namesCopy2.flat().flat() //? Exclude first and second level nested part!!!
console.log(flat2); 
let flat3 = namesCopy2.flat(2) //? Exclude first and second level nested part!!!
console.log(flat3); 
*/
/*
console.log("*****************");

//* forEach
let namesCopy3 = ["Joe", "Jack", "William", "Averell"]
console.log(namesCopy3);
namesCopy3.forEach((n) => console.log(n.toUpperCase())) //* Result
for (let i=0; i<namesCopy3.length; i++) {    
    console.log(namesCopy3[i].toUpperCase());  //* Same result, different way
}
console.log("*****************");

//* map
let nums = [1,3,5,7,9,10,20,50]
console.log(nums);
nums.forEach((n) =>  console.log(n*2))
let numsDouble= nums.forEach((n) =>  n*2)
console.log(numsDouble); //!!!  undefined (forEach does not work here...)
//? forEach does not return anything !!!
let numsTriple= nums.map((n) =>  n*3)
console.log(numsTriple);

console.log("*****************");

//* filter
let daltons = [
    { title: "shortest", nameD: "Joe", height: 100, age: 44},
    { title: "longest", nameD: "Averell", height: 130, age: 40},
    { title: "middle 1", nameD: "Jack", height: 160, age: 37},
    { title: "middle 2", nameD: "William", height: 190, age: 35},
];

let gangsL = daltons.filter( (character) => character.height <= 150);
console.log(gangsL);
let gangsL2 = daltons.filter( (character) => character.height <= 150)
    .forEach ((i) => console.log(i.nameD));

console.log("*****************");

//* map & reduce
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

//* some
let names = ["Joe", "Jack", "William", "Averell"]
let names2 = ["Red Kit", "Calamity Jane"]
let names3 = ["RinTinTin", "Düldül"]
let names4 = ["Billy the Kid", "Belle Star", "Buffalo Bill", "Judge Roy Bean"]


//* every
let charactersAll = names.concat(names2,names3,names4)
console.log(charactersAll);
console.log(gangsLValues);

let isNameJoe = charactersAll.some( (n) => n === "Joe");
console.log(isNameJoe); 
let isGreater175 = gangsLValues.some( (n) => n >= 175);
console.log(isGreater175); 
let everyGT150 = gangsLValues.every( (n) => n >= 150);
console.log(everyGT150); 

//* find & findIndex
let wanted = [
    { title: "shortest", nameD: "Joe", height: 100, age: 44},
    { title: "middle 1", nameD: "Jack", height: 130, age: 40},
    { title: "middle 2", nameD: "William", height: 160, age: 37},
    { title: "longest", nameD: "Averell", height: 190, age: 33},
];

let target = wanted.find((f) => f.title === "shortest")
console.log(target);
console.log(target.title);
console.log(target.nameD);
console.log(target.age);

let targetX = wanted.findIndex((i) => i.nameD === "William")
console.log(targetX+1);

//* sort & reverse
console.log(charactersAll);
let allOrdered = charactersAll.sort();
console.log(allOrdered);
let allOrderedR = charactersAll.sort().reverse();
console.log(allOrderedR);

let numS = [2, 21, 1, 13, 111, 1009, 12, 5, 7, "Ç", "a" , "Z", "X", "e"];
console.log(numS.sort());    // ALPHA
console.log(numS.sort((a,b) => b - a));  //  NUMERIC
console.log(numS.sort((a,b) => b - a));


// */
// // //? EXERCISE:

// // //* SORT NUMBERS
// // var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// // // Sample Output : -4,-3,1,2,3,5,6,7,8
// // arr1.sort((a,b) => a-b)
// // console.log(arr1)
// // arr1.sort((a,b) => b-a)
// // console.log(arr1)

// //? EXERCISE:

// let myName = "Anthony Harold";
// myName = myName.slice(8)
// myName.toUpperCase()
// console.log(myName);


//? FIND


const numbers = [1, 2, 3, 4, 5];

const foundNumber = numbers.find((num) => num > 3);

console.log(foundNumber); // Output: 4
console.log(merhaba);



// xample, the `find` method is used to find the first element in the `numbers` array that is greater than 3. The callback function `(num) => num > 3` checks each element of the array, and when it finds a number that satisfies the condition, it returns that number.

// Example 2: Finding an object in an array based on a property value
// ```javascript
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Mike' }
// ];

// const foundUser = users.find((user) => user.id === 2);

// console.log(foundUser); // Output: { id: 2, name: 'Jane' }
// ```
// In this example, the `find` method is used to find the first object in the `users` array that has an `id` property equal to 2. The callback function `(user) => user.id === 2` checks each object in the array, and when it finds a user with the matching `id`, it returns that user object.

// Example 3: Finding an element in a string array containing a specific substring
// ```javascript
// const fruits = ['apple', 'banana', 'orange', 'kiwi'];

// const foundFruit = fruits.find((fruit) => fruit.includes('an'));

// console.log(foundFruit); // Output: 'banana'
// ```
// In this example, the `find` method is used to find the first element in the `fruits` array that includes the substring 'an'. The callback function `(fruit) => fruit.includes('an')` checks each element of the array, and when it finds a fruit that contains 'an', it returns that fruit.

// These examples demonstrate some common use cases of the `find` method in JavaScript. Feel free to experiment with them and modify them to further your understanding of how `find` works.