"use strict";
// class coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;
//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }
class coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new coder("Dave", "Rock", 42);
console.log(Dave.getAge());
class WebDev extends coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const David = new WebDev("MacOs", "David", "K-Pop", 16);
console.log(David.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}.`;
    }
}
const Page = new Guitarist("Page", "Guitar");
console.log(Page.play("strums"));
/////////////////////////////////////////////////////////
// Static
class Peeps {
    static getCount() {
        return Peeps.count; // this is why I am accessing the count using the class itself
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0; // this count is not tied to any particular instances of the class but the class itself
const John = new Peeps("John");
const Hermione = new Peeps("Hermione");
const Hanni = new Peeps("Hanni");
console.log(Peeps.getCount());
console.log(John.id);
/////////////////////////////////////////////////////////
// Getters & Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    // get is a special keyword to get private data from a class
    get data() {
        return this.dataState;
    }
    // set is a special keyword to set private data of a class
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const myBand = new Bands();
myBand.data = ["BTS", "Twice", "Itzy", "NewJeans", "Mamamoo", "IVE"];
console.log(myBand.data);
myBand.data = [...myBand.data, "BlackPink"];
console.log(myBand.data);
