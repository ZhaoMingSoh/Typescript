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
  secondLang!: string; // "non-null assertion operator." It's used to tell the TypeScript compiler that you, as the developer, guarantee that a variable will be assigned a value before it's used,

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new coder("Dave", "Rock", 42);
console.log(Dave.getAge());

class WebDev extends coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}
const David = new WebDev("MacOs", "David", "K-Pop", 16);
console.log(David.getLang());
// console.log(David.age); // age is a private property in the coder class, it is accessible only within the coder class
// console.log(David.lang); // lang is a protected property in the coder class, it is accessible only within the coder class and its subclasses.

// -------------------------------------------------------------------------------------------
// Interfaces - a way to define the structure or shape of an object or class in which they must adhere to.
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}.`;
  }
}

const Page = new Guitarist("Page", "Guitar");
console.log(Page.play("strums"));

/////////////////////////////////////////////////////////
// Static
class Peeps {
  static count: number = 0; // this count is not tied to any particular instances of the class but the class itself
  static getCount(): number {
    return Peeps.count; // this is why I am accessing the count using the class itself
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Hermione = new Peeps("Hermione");
const Hanni = new Peeps("Hanni");
console.log(Peeps.getCount());
console.log(John.id);

/////////////////////////////////////////////////////////
// Getters & Setters
class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  // get is a special keyword to get private data from a class
  public get data(): string[] {
    return this.dataState;
  }

  // set is a special keyword to set private data of a class
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const myBand = new Bands();
myBand.data = ["BTS", "Twice", "Itzy", "NewJeans", "Mamamoo", "IVE"];
console.log(myBand.data);
myBand.data = [...myBand.data, "BlackPink"]; // assigns the newly created array back to the data property
console.log(myBand.data);
