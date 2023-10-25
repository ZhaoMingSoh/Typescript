"use strict";
// Sometimes we do not know what type we're going to pass into an interface, objects, functions, type aliases ...
// Generics allow us to provide a type placeholder that works with any types
const echo = (arg) => arg;
//////////////////////////////////////////////////////////
// we do not know what type we're passing in, so we use a Generic, and check for an object specifically
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
//////////////////////////////////////////////////////////
const isTrue = (arg) => {
    // if arg is an array with no length
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // if arg is an obj with no properties
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
// if a variable is empty, null, undefined or Nan => false, else => true
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    // if arg is an array with no length
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    // if arg is an obj with no properties
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
// any type passed as an argument to "processUser" must have the "id" property
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
//console.log(processUser({ name: 'Dave'})) // error because id must be present
//////////////////////////////////////////////////////////
/*
    1) "keyof" is used for type constraint and to ensure type safety within the generic function.
    2) "keyof T" retrieves a union type of all the keys of the T type. (object type HasID)
    3) The generic type parameter K is then constrained to be one of the valid keys of T.
    4) This constraint ensures that key passed to the getUsersProperty function is a valid property key of the objects in the users array.
*/
const getUsersProperty = (users, // "users" : An array of objects of type T that extends the HasID interface
key // "key" : This parameter represents the property key of the objects in the users array that we want to extract.
) => {
    return users.map((user) => user[key]); // return an array of values of the type that corresponds to the property key K of the objects in the users array.
};
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
//////////////////////////////////////////////////////////
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12
const myState = new StateObject([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
