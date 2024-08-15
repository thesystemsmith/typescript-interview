//arrays
let values: number[] = [15, 20, 25, 30];
let values2: Array<number> = [15, 20, 25, 30];


// any type
// json may come from a third-party API
const employeeData: string = `{"name": "John Doe", "salary": 60000}`;
// parse JSON to build employee object
const employee: any = JSON.parse(employeeData);

console.log(employee.name);
console.log(employee.salary);



function notify(): void {
    alert("The user has been notified.");
}
// If a variable is of type void, you can only assign the null or undefined values to that variable. 


// unknown
let foo: unknown = "Akshay";
let bar: string = foo; // Type 'unknown' is not assignable to type 'string'.(2322)

//You can assign anything to the unknown, but the unknown isn’t assignable to a`nything but itself and any, without performing a type assertion of a control-flow-based narrowing.

let foo1: unknown = "Akshay";
let bar1: string = foo1 as string;


// functions
function greet(name: string): string {
    return `Hello, ${name}`;
}

let greeting = greet("Anders");
console.log(greeting);  // "Hello, Anders"


// objects
let pt: { x: number; y: number } = {
    x: 10,
    y: 20
};
// optional properties
let pt2: { x: number; y: number; z?: number } = {
    x: 10,
    y: 20
};

// null value
function greet2(name: string | null) {
    if (name === null) {
        console.log("Name is not provided");
    } else {
        console.log("Good morning, " + name.toUpperCase());
    }
}

var name1 = null;
greet2(name1); // "Name is not provided"

var name2 = "Anders";
greet2(name2);  // "Good morning, ANDERS"


// never
function error(message: string): never {
    throw new Error(message);
}

// why never when we have void? because void returns undefined
// This function returns undefined
function greet3(name: string) {
    console.log(`Hello, ${name}`);
}

let greetings = greet3("David");
console.log(greetings);  // undefined

// enums
enum Team {
    Alpha,
    Beta,
    Gamma,
    Delta
}

let rcb: Team = Team.Delta;

enum Author {
    Anders = "Anders",
    Hejlsberg = "Hejlsberg"
};


// typeof
console.log(typeof 10);  // "number"

console.log(typeof 'foo');  // "string"

console.log(typeof false);  // "boolean"

console.log(typeof bar);  // "undefined"

let greetingss = "hello";
let typeOfGreeting: typeof greetingss;  // similar to let typeOfGreeting: string 

// rest parameter
function add(...values){
    let sum=0;
    values.forEach(value => 
        sum+=value)
    return sum;
}
const sum = add(5, 10, 15, 20);
console.log(sum);  // 50

const first = [1, 2, 3];
const second = [4, 5, 6];

first.push(...second);
console.log(first);  // [1, 2, 3, 4, 5, 6] 

// parameter destructoring
function multiply1({ a, b, c }: { a: number; b: number; c: number }) {
    console.log(a * b * c);
}

multiply1({ a: 1, b: 2, c: 3 });
    
    // You can simplify the above code by using an interface or a named type, as follows:

type ABC = { a: number; b: number; c: number };
function multiply2({ a, b, c }: ABC) {
    console.log(a * b * c);
}

multiply2({ a: 1, b: 2, c: 3 });

// classes
class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
    promote(): void {
        this.salary += 10000;
    }
}
// Create a new employee
let john = new Employee("John", 60000);

console.log(john.salary);  // 60000
john.promote();
console.log(john.salary);  // 70000

// arrow functions
let add1 = (x: number, y: number): number => x + y; 

let numbers = [3, 5, 9, 15, 34, 35];
let fiveMultiples = numbers.filter(num => (num % 5) == 0);
console.log(fiveMultiples);  // [5, 15, 35]


// optional params
function greet4(name: string, greeting?: string) {
    if (!greeting)
        greeting = "Hello";

    console.log(`${greeting}, ${name}`);
}

greet4("John", "Hi");  // Hi, John
greet4("Mary", "Hola");  // Hola, Mary
greet4("Jane");  // Hello, Jane