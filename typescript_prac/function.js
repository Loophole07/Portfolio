// function.ts
// Simple function to add two numbers
function add(a, b) {
    return a + b;
}
// Call the function
var sum = add(5, 10);
document.write("Sum:", sum);
document.write("--------");
// Arrow function version
var multiply = function (a, b) { return a * b; };
document.write("Multiply:", multiply(4, 3));
