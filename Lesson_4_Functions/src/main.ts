// Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

interface guitarist {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
}

// -----------------------------------------------------------------------------------------------
// Literal Types
let myName: "Dave"; // this means that myName is type "Dave" and it cannot be assigned to any other strings
// myName = "John";
let userName: "Dave" | "Amy" | "John";
userName = "Amy";

// -----------------------------------------------------------------------------------------------
// Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));

let subtract = (c: number, d: number): number => {
  return c - d;
};

type mathFunction = (a: number, b: number) => number; // function type alias
interface mathFunction2 {
  // can be done using interface as well but it is more so for OOP
  (a: number, b: number): number;
}
let multiply: mathFunction = (c, d) => {
  return c * d;
};
logMsg(multiply(2, 2));

// Optional Parameters
// Rule : It has to be the last in the argument list
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// Default Parameter Value
// Rule : Cannot be done on a function type aliases
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 5));
logMsg(sumAll(5, 6));
logMsg(sumAll(undefined, 3)); // we have to pass the undefine in so that it knows that 3 is for b

// Rest Parameters
// Rule : Should always be at the end of the argument list
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((acc, next) => acc + next);
};
logMsg(total(10, 2, 3, 4));

// Never Type
// - Specifically for functions that throw errors
// - for endless loops
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) {
      break;
    }
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of never type
const numberOrString = (value: number | string): string => {
  /**
   * The function must return a string type, but :
   *       - there are 2 if statements which made it so that the return type could be undefined.
   *       - this should never happen in typescript,
   *            - If we're dealing with type guards, then refer to the function above ...
   */
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
