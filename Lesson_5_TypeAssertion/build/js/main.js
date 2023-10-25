"use strict";
/**
 * Sometimes you will have information about the type of a value that TypeScript can't know about.
 *  - DOM type : webpage documents or elements
 */
// Asserting a type
// Convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
// or use a bracket to assert type
// Rule : Cannot be used in tsx file in React, so not used that much.
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
/**
 *  This is where type assertion is useful -
 *      # addOrConcat is a union type of number or string which is something that the myVal of type string does not like.
 *          # Solution :
 *              # assert it as string
 * */
let myVal = addOrConcat(2, 2, "concat");
// Becareful! TS sees no problem here - but a string is returned!
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string; // a number 10 cannot be type cast as a string and TS will complain.
// You can overrule such complain with double type castings using "unknown"
10;
// ------------------------------------------------------------------------------------------
// The DOM
// Given the functions, ts compiler will assign a union type of (DOM element) or null to the following DOM api
const img = document.querySelector("img"); // '!' is a non null assertion
const myimg = document.getElementById("#img");
// TS compiler will complain about the above apis as they could be null
// Solution : Use type assertion
img.src;
myimg.src;
