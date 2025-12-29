"use strict";

// Hello, world
alert("Hello, world!");

// Variables
let age = 20;
const name = "Samip";

// Data types
let num = 10;
let isOk = true;

// Interaction
// alert("Hi");
// let user = prompt("Name?");
// let sure = confirm("Sure?");

// Type conversion
Number("5");
String(10);

// Operators
let sum = 5 + 2;

// Comparison
5 === "5"; // false

// Conditional
if (age >= 18) alert("Adult");
let msg = age >= 18 ? "Yes" : "No";

// Logical
true && false;

// Nullish coalescing
let userName = null ?? "Guest";

// Loops
let i = 1;
while (i <= 2) i++;

for (let j = 1; j <= 2; j++) {}

// Switch
let day = 1;
switch (day) {
  case 1: alert("Sunday"); break;
}

// Function
function greet() {
  alert("Hi");
}

// Function expression
let sayHi = function () {
  alert("Hello");
};

// Arrow function
let add = (a, b) => a + b;

// JS specials
typeof 10;
NaN;
