// Index Signatures
// 1) Useful when creating objects , but you do not know the exact name of the object keys, you do know the shape of the object
// 2) When you try to access object property dynamically, you need to have the index signatures

// Index signature object
// interface TransactionObj {
//   readonly [index: string]: number;
// }
interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 60,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

// when you try to access the Pizza property dynamically, ts will complain
/*
    Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
        No index signature with a parameter of type 'string' was found on type 'TransactionObj'.ts(7053)
*/
let prop: string = "Pizza"; // a dynamic string key stored in the prop variable
console.log(todaysTransactions[prop]);

// In a function as well
const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 50; // will not work with readOnly active

// A problem with index signature : Even if the property name is not defined, ts will not complain
console.log(todaysTransactions["Dave"]); // returns undefined because "Dave" does not exist

///////////////////////////////////
// Working with keyof & typeof
interface Student {
  //   [index: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test);
// When you use a for...in loop to iterate over the properties of the student object, TypeScript does not inherently know the specific keys that you'll be accessing.
// Without keyof, TypeScript treats key as a string, which can potentially lead to runtime errors if you try to access properties that do not exist on the Student type.
for (const key in student) {
  // console.log(`${key}: ${student[key]}`); // this will not work if the index signature is not there
  // keyof : Can be used in place of index signatures to retrieve a union type of all the keys (property names) of the Student type.
  // By using str as keyof Student, you are explicitly asserting that str is one of the valid keys of the Student type.
  console.log(`${key}: ${student[key as keyof Student]}`);
}

// or similarly

Object.keys(student).map((key) => {
  // If you do not know the type of the keys, use the typeof
  console.log(student[key as keyof typeof student]);
});

// or
// use the keyof in the argument
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "name");

///////////////////////////////////
// Working with type literal & Record Utility type
// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>; // ties the type to the type literals

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
