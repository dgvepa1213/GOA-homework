let score = 0; // Global variable

function increaseScore() {
    score += 10; // Adds 10 to score
}

increaseScore();
increaseScore();
console.log("Final Score:", score); // Output: 20
////////////

function secretCode() {
    let code = '1234'; // Local variable
    console.log("Inside function:", code);
}

secretCode();
console.log("Outside function:", code); // Error: code is not defined

/////////


let name = "World"; // Global variable

function greet() {
    let name = "Alice"; // Local variable inside function
    console.log("Inside function:", name);
}

greet();
console.log("Outside function:", name); // Output: "World"

//////////////


function counterGame() {
    let counter = 0; // Resets counter every time
    counter += 1;
    console.log("Counter:", counter);
}

counterGame();
counterGame(); // Always prints 1

///////


function badPractice() {
    myVar = "I'm a global variable now!";
}

badPractice();
console.log(myVar); // Works, but it's bad practice!
/////////

// A global variable is accessible throughout the entire program.
let globalVar = "I exist everywhere";

function example() {
    console.log(globalVar); // Accessible here
}

example();
console.log(globalVar); // Accessible outside functions too

/////////
function example() {
    // A local variable exists ONLY inside its function.
    let localVar = "I exist only inside this function";
    console.log(localVar);
}

example();
console.log(localVar); // Error: localVar is not defined

////////

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

//////////

import { add, subtract } from './mathUtils.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

//////////

export default function logger(message) {
    console.log("Log:", message);
}

//////////

import logger from './logger.js';

logger("Hello from the main file!");

//////////


export default function createUser(name) {
    return { id: Date.now(), name };
}

export function deleteUser(id) {
    console.log("User deleted with ID:", id);
}

/////////////

import createUser, { deleteUser } from './userService.js';

let user = createUser("Alice");
console.log(user);

deleteUser(user.id);

///////////

// Arrow function to check if a number is positive, negative, or zero
const checkNumber = num => 
    num > 0 ? "Positive" : 
    num < 0 ? "Negative" : 
    "Zero";

console.log(checkNumber(10)); // Output: "Positive"
console.log(checkNumber(-5)); // Output: "Negative"
console.log(checkNumber(0));  // Output: "Zero"

// Arrow function for FizzBuzz logic
const fizzBuzz = num => 
    num % 3 === 0 && num % 5 === 0 ? "FizzBuzz" :
    num % 3 === 0 ? "Fizz" :
    num % 5 === 0 ? "Buzz" :
    num;

console.log(fizzBuzz(15)); // Output: "FizzBuzz"
console.log(fizzBuzz(9));  // Output: "Fizz"
console.log(fizzBuzz(10)); // Output: "Buzz"
console.log(fizzBuzz(7));  // Output: 7