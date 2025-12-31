// function.ts

// Simple function to add two numbers
function add(a: number, b: number): number {
  return a + b;
}

// Call the function
let sum = add(5, 10);
console.log("Sum:", sum);

// Arrow function version
const multiply = (a: number, b: number): number => a * b;
console.log("Multiply:", multiply(4, 3));
