//? OBJECT KEYS & VALUES & ENTRIES
let daltonssXS = {   
    title: "shortest", nameD: "Joe", height: 100, 
    age: 44};

console.log(daltonssXS);

const daltonsXS = {   
    title: "shortest", nameD: "Joe", height: 100, 
    age: 44};
  
  // Getting the values of the object
  const values = Object.values(daltonsXS);
  console.log(values); // Output: ['John', 30, 'Engineer']
  
  // Getting the keys of the object
  const keys = Object.keys(daltonsXS);
  console.log(keys); // Output: ['name', 'age', 'occupation']

  const entriess = Object.entries(daltonsXS);
  console.log(entriess);


console.log("*************************");

//* FREEZE()
let daltonXS = {   
    title: "shortest", nameD: "Joe", height: 100, 
    age: 44};

daltonXS.nameD = "Johny"
console.log(daltonXS.nameD);

let daltonXSS = {   
    title: "shortest", nameD: "Joe", height: 100, 
    age: 44};
Object.freeze(daltonXSS);

// daltonXSS.nameD = "Johny ne oldu???"
console.log(daltonXSS.nameD);





//? CONSTRUCTOR function for creating Person objects
function Dalton(name, age) {
    this.name = name;
    this.age = age;
    }
    // Creating instances (objects) using the constructor function
    const gang1 = new Dalton("Joe", 44);
    const gang2 = new Dalton("Jack", 40);
    console.log(gang1); // { name: 'Joe', age: 44 }
    console.log(gang2); // { name: 'Jack', age: 40 }
