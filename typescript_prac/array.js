// array.ts
// Create a number array
var numbers = [1, 2, 3, 4, 5];
// Add a number
numbers.push(6);
// Print all numbers
document.write("Numbers array:", numbers);
document.write("-----")
// Loop through array
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    document.write(num);
}
