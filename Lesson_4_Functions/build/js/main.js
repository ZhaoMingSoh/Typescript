"use strict";
// -----------------------------------------------------------------------------------------------
// Literal Types
let myName; // this means that myName is type "Dave" and it cannot be assigned to any other strings
// myName = "John";
let userName;
userName = "Amy";
// -----------------------------------------------------------------------------------------------
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));
let subtract = (c, d) => {
    return c - d;
};
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(2, 2));
// Optional Parameters
// Rule : It has to be the last in the argument list
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default Parameter Value
// Rule : Cannot be done on a function type aliases
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 5));
logMsg(sumAll(5, 6));
logMsg(sumAll(undefined, 3)); // we have to pass the undefine in so that it knows that 3 is for b
// Rest Parameters
// Rule : Should always be at the end of the argument list
const total = (a, ...nums) => {
    return a + nums.reduce((acc, next) => acc + next);
};
logMsg(total(10, 2, 3, 4));
// Never Type
// - Specifically for functions that throw errors
// - for endless loops
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of never type
const numberOrString = (value) => {
    /**
     * The function must return a string type, but :
     *       - there are 2 if statements which made it so that the return type could be undefined.
     *       - this should never happen in typescript,
     *            - If we're dealing with type guards, then refer to the function above ...
     */
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
