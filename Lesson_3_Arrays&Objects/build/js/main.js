"use strict";
// Array
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5150]; // union type
let mixedData = ["EVH", 1984, true]; // union type
guitars.unshift("Jim");
mixedData.unshift(2456);
// stringArr = guitars; // typescript is not going to allow this assignment because a union type of (string | number) cannot be assigned to a type string
guitars = stringArr; // the other around works
// guitars = mixedData; // the same idea as above
mixedData = guitars;
let test = [];
let bands = [];
bands.push("Van Hellen");
// -----------------------------------------------------------------------------------------------
// Tuple - required to have 3 specific elements
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
// mixed = myTuple; // you can assign the strict tuple type to mixed because mixed is a union type array
// myTuple = mixed; // you cannot assign the mixed array to myTuple as there maybe a possibility that the mixed array will not have the 3 specific elements
// myTuple[3] = "Ahri"; // myTuple can only have 3 assignable indexes as outlined above.
// -----------------------------------------------------------------------------------------------
// Objects
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands; // object can be assigned with an array of type string
myObject = {};
// the types are locked in for the attributes
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "John";
let evh = {
    // You can assign a type object to a variable
    name: "Ken",
    active: false,
    albums: ["The Rising", 256],
};
let JP = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "III"],
};
evh = JP;
// We cannot assign a non guitarist object type to a guitarist object type
// let kk = {
//     albums : [1,2,3];
// }
// evh = kk;
// evh.years = 40; // you cannot assign a new attribute to a predefined object type
let op = {
    name: "Amy",
    albums: [1000, "liquorice"],
};
const greetGuitarist = (guitarist) => {
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
const greetGuitarist2 = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
};
console.log(greetGuitarist2(evh2));
const greetGuitarist2_IFELSE = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello";
};
console.log(greetGuitarist2_IFELSE(evh2));
// -----------------------------------------------------------------------------------------------
// Enums
/**
 * Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime.
 */
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
