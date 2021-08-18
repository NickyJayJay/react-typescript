// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

type Person = {
  name: string;
  age: number;
};

hobbies = ['Sports', 'Cooking'];

let person: Person;

person = {
  name: 'Max',
  age: 32,
};

// person = {
//     isEmployee: true
// }

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Functions & types

function add(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');