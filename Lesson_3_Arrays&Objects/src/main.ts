// Array
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5150]; // union type
let mixedData = ["EVH", 1984, true]; // union type

guitars.unshift("Jim");
mixedData.unshift(2456);
// stringArr = guitars; // typescript is not going to allow this assignment because a union type of (string | number) cannot be assigned to a type string
guitars = stringArr; // This works because both are arrays of strings.

// guitars = mixedData; // the same idea as above
mixedData = guitars; // This doesn't work because you're trying to assign an array with a union type to an array with a different union type.

let test = [];
let bands: string[] = [];
bands.push("Van Hellen");

// -----------------------------------------------------------------------------------------------
// Tuple - An ordered collection of elements with fixed types, and the number of elements in the tuple is also fixed
let myTuple: [string, number, boolean] = ["Dave", 42, true]; // only can have 3 elements of the specified types

let mixed = ["John", 1, false];
// mixed = myTuple; // you can assign the strict tuple type to mixed because mixed is a union type array
// myTuple = mixed; // you cannot assign the mixed array to myTuple as there maybe a possibility that the mixed array will not have the 3 specific elements
// myTuple[3] = "Ahri"; // myTuple can only have 3 assignable indexes as outlined above.

// -----------------------------------------------------------------------------------------------
// Objects
let myObject: object; // when you declare a variable with the type object, you're essentially saying that the variable can hold any value that is an object, but you're not specifying the shape or structure of the object
myObject = [];
console.log(typeof myObject);
myObject = bands; // object can be assigned with an array of type string because array is of type object
myObject = {};

// the types are locked in for the attributes
const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "John";

// Define the shape or structure of the object
type guitarist = {
  name: string;
  active?: boolean; // active can be undefined or a boolean (optional)
  albums: (string | number)[];
};

interface guitarist2 {
  // you can also define the object type with the "interface" keyword
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: guitarist = {
  // You can assign a type object to a variable
  name: "Ken",
  active: false,
  albums: ["The Rising", 256],
};

let JP: guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "III"],
};

evh = JP; // assignment is allowed because both have the same object's shape and structure
// We cannot assign a non guitarist object type to a guitarist object type
// let kk = {
//     albums : [1,2,3];
// }
// evh = kk;

// evh.years = 40; // you cannot assign a new attribute to a predefined object type

let op: guitarist = {
  name: "Amy",
  albums: [1000, "liquorice"],
};

const greetGuitarist = (guitarist: guitarist) => {
  // a function with the guitarist object type argument
  return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(evh));

/* 
    What if the the name attribute is optional ? 
    - This would create a problem when we call a function on the name property because it could possibly be undefined.
    - Solution:
        - add an optional keyword to the name property when calling on functions.
        - use a if/else statement
*/
let evh2 = {
  name: "Damon",
  active: true,
  albums: [1, "bitter", "ridikulus"],
};
const greetGuitarist2 = (guitarist: guitarist2) => {
  return `Hello ${guitarist.name?.toUpperCase()}!`;
};
console.log(greetGuitarist2(evh2));

const greetGuitarist2_IFELSE = (guitarist: guitarist2) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello";
};
console.log(greetGuitarist2_IFELSE(evh2));

// -----------------------------------------------------------------------------------------------
// Enums - a way to give more friendly names to sets of numeric values
/**
 * Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime.
 */

enum Grade { // mousing over will tell you how each property is assigned a value
  U = 1, // change the starting value
  D, // auto assigned as 2
  C, // 3
  B, // 4
  A, // 5
}
console.log(Grade.U);
