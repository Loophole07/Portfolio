// loops.ts
// For loop
document.write("For loop:");
for (var i = 1; i <= 5; i++) {
    document.write(i);
}
document.write("----");
// While loop
document.write("While loop:");
var j = 1;
while (j <= 5) {
    document.write(j);
    j++;
}
document.write("----");
// For...of loop with array

var fruits = ["Apple", "Banana", "Mango"];
document.write("Fruits:");
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    document.write(fruit);
}
