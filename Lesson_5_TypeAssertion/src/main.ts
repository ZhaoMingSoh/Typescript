/**
 * Sometimes you will have information about the type of a value that TypeScript can't know about.
 *  - DOM type : webpage documents or elements
 */

type One = string;
type Two = string | number;
type Three = "hello";

// Asserting a type - to treat a value as if it were of a different type than the one it has been inferred or explicitly declared
// Convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

// or use a bracket to assert type
// Rule : Cannot be used in tsx file in React, so not used that much.
let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

/**
 *  This is where type assertion is useful -
 *      # addOrConcat is a union type of number or string which is something that the myVal of type string does not like.
 *          # Solution :
 *              # assert it as string
 * */
let myVal: string = addOrConcat(2, 2, "concat") as string;

// Becareful! TS sees no problem here - but a string is returned!
let nextVal: number = addOrConcat(2, 2, "concat") as number;
// 10 as string; // a number 10 cannot be type cast as a string and TS will complain.
// You can overrule such complain with double type castings using "unknown"
10 as unknown as number;

// ------------------------------------------------------------------------------------------
// The DOM
// Given the functions, ts compiler will assign a union type of (DOM element) or null to the following DOM api
const img = document.querySelector("img")!; // '!' is a non null assertion
const myimg = document.getElementById("#img") as HTMLImageElement;

// TS compiler will complain about the above apis as they could be null
// Solution : Use type assertion
img.src;
myimg.src;
