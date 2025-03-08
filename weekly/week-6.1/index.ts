let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number];
tuple = ["hello", 10]; // OK

// Uniones
let union: string | number;
union = "hello"; // OK
union = 10; // OK

// Interfaces
interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
}

function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = { firstName: "Jane", lastName: "Doe" };
console.log(greet(user));

// Signatures
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) > -1;
}

// Enums
enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;
console.log(c); // Output: 1