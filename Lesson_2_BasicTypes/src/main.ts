let myname: string = "Dave";
let meaningOfLie: number;
let isLoading: boolean;
let album: any;
let description: string | number; // Union Type

myname = "John";
meaningOfLie = 13;
isLoading = true;
album = "Cake";

const sum = (a: number, b: number) => {
  return a + b;
};

let isActive: number | boolean | string;

let re: RegExp = /w+/g; // Regular Expression Type
