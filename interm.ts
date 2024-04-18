// different variants of the for loop in TypeScript
// for loop
let values3 = [10, "foo", true];

for (let i = 0; i < values.length; i++) {
    console.log(values[i]);  // 10, "foo", true
}

// forEach 
let values4 = [10, "foo", true];
values4.forEach(val => {
    console.log(val); // 10, "foo", true
})

// forof
let values5 = [10, "foo", true];
for (let val of values5) {
    console.log(val); // 10, "foo", true
}


// optional chaining
let x = foo === null || foo === undefined ? undefined : foo.bar.baz();
let x = foo?.bar.baz();


// function overload
function buildDate(timestamp: number): Date;
function buildDate(m: number, d: number, y: number): Date;
function buildDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}

const d1 = buildDate(87654321);
const d2 = buildDate(2, 2, 2);

// type inference
let str = "this is a string";
console.log(typeof str);  // "string"

// interfaces
// Interfaces are an effective way to specify contracts within your code as well as outside your code. 
interface Employee1 {
    name: string;
    salary: number;
}

function process(employee: Employee1) {
    console.log(`${employee.name}'s salary = ${employee.salary}`);
}

let johny: Employee1 = {
    name: "John Doe",
    salary: 150000
}

process(johny);  // "John Doe's salary = 150000"


// abstract classes
abstract class Writer {
    abstract write(): void;

    greet(): void {
        console.log("Hello, there. I am a writer.");
    }
}

class FictionWriter extends Writer {
    write(): void {
        console.log("Writing a fiction.");
    }
}

class RomanceWriter extends Writer {
    write(): void {
        console.log("Writing a romance novel.");
    }
}

const tony = new FictionWriter();
tony.greet();  // "Hello, there. I am a writer."
tony.write();  // "Writing a fiction."

const mary = new RomanceWriter();
mary.greet();  // "Hello, there. I am a writer."
mary.write();  // "Writing a romance novel."


// anonymous functions
setTimeout(function () {
    console.log('Run after 2 seconds')
}, 2000);

//   You can invoke an anonymous function as soon as it’s created. It’s called ‘immediately invoked function execution (IIFE)’, For example:
(function () {
    console.log('Invoked immediately after creation');
})();


// union types
let value: string | number = "Foo";
value = 10;  // Okay

// intersection types
interface Employee {
    work: () => string;
}
interface Manager {
    manage: () => string;
}

type Supervisor = Employee & Manager;
// tahir can both work and manage
let tahir: Supervisor;



// type aliases
type alphanumeric = string | number;
let val: alphanumeric = "";
val = 10;

// tuples
// Declare a tuple type and initialize it
let vals: [string, number] = ["Foo", 15];

// Type 'boolean' is not assignable to type 'string'.(2322)
// Type 'string' is not assignable to type 'number'.(2322)
let wrongValues: [string, number] = [true, "hello"]; // Error

// Since TypeScript 3.0, a tuple can specify one or more optional types using the ? as shown below.

let vals2: [string, number, boolean?] = ["Foo", 15];


// tuple destructoring
let employeeRecord: [string, number] = ["John Doe", 50000];
let [emp_name, emp_salary] = employeeRecord;
console.log(`Name: ${emp_name}`);  // "Name: John Doe"
console.log(`Salary: ${emp_salary}`);  // "Salary: 50000"

// After destructuring, you can’t assign a value of a different type to the destructured variable. For example,

emp_name = true;  // Type 'boolean' is not assignable to type 'string'.(2322)



//Type assertions - are similar to typecasting in other programming languages 
// as syntax:
let val3: unknown = "Foo";
let len1: number = (val3 as string).length;

// <> syntax:
let val4: unknown = "Foo";
let len2: number = (<string>val4).length;

// in operator
const car = { make: 'Hyundai', model: 'Elantra', year: 2017 };
console.log('model' in car);  // true
console.log('test' in car);  // false


// implements
interface Runnable {
    run(): void;
}

class Job implements Runnable {
    run() {
        console.log("running the scheduled job!");
    }
}

// Class 'Task' incorrectly implements interface 'Runnable'.
// Property 'run' is missing in type 'Task' but required in type 'Runnable'.(2420)
class Task implements Runnable {
    perform() {
        console.log("pong!");
    }
}


// string literals
let str1: "bar" = "bar";

// OK
str1 = "bar";

// Error: Type '"baz"' is not assignable to type '"bar"'.(2322)
str1 = "baz";

// String literal types on their own are not that useful. However, you can combine them into unions. 
//This allows you to specify all the string values that a variable can take, in turn acting like enums. This can be useful for function parameters.

function greet(name: string, greeting: "hi" | "hello" | "hola") {
// ...
}

greet("John", "hello");

// Error: Argument of type '"Howdy?"' is not assignable to parameter of type '"hi" | "hello" | "hola"'.(2345)
greet("Mary", "Howdy?");



// inheritence
class Rectangle {
    length: number;
    breadth: number

    constructor(length: number, breadth: number) {
        this.length = length;
        this.breadth = breadth
    }

    area(): number {
        return this.length * this.breadth;
    }
}

class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }

    volume() {
        return "Square doesn't have a volume!"
    }
}

const sq = new Square(10);

console.log(sq.area());  // 100
console.log(sq.volume());  // "Square doesn't have a volume!"



// conditional types
C extends B ? TypeX : TypeY
