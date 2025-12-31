// loops.ts

// For loop
console.log("For loop:");
for (let i: number = 1; i <= 5; i++) {
  console.log(i);
}

// While loop
console.log("While loop:");
let j: number = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// For...of loop with array
let fruits: string[] = ["Apple", "Banana", "Mango"];
console.log("Fruits:");
for (let fruit of fruits) {
  console.log(fruit);
}
