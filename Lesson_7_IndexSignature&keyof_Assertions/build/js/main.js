"use strict";
// Index Signatures
// 1) Useful when creating objects , but you do not know the exact name of the object keys, you do know the shape of the object
// 2) When you try to access object property dynamically, you need to have the index signatures
const todaysTransactions = {
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
let prop = "Pizza";
console.log(todaysTransactions[prop]);
// In a function as well
const todaysNet = (transactions) => {
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
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    // console.log(`${key}: ${student[key]}`); // this will not work if the index signature is not there
    // keyof : Can be used in place of index signatures which will return a union of types inferred from the keys
    console.log(`${key}: ${student[key]}`);
}
// or similarly
Object.keys(student).map((key) => {
    // If you do not know the type of the keys, use the typeof
    console.log(student[key]);
});
// or
// use the keyof in the argument
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
