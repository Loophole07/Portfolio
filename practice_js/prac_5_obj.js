"use strict";

// 1️⃣ Objects
let user = { name: "Samip", age: 20 };

// 2️⃣ Object References and Copying
let a = { x: 1 };
let b = a;              
b.x = 2;
console.log(a.x);       // 2

let c = { ...a };       
c.x = 5;
console.log(a.x);       // 2

// 3️⃣ Garbage Collection
let obj = { data: 123 };
obj = null;            

// 4️⃣ Object Methods and "this"
let person = {
  name: "Samip",
  greet() { console.log(this.name); }
};
person.greet();         // Samip

// 5️⃣ Constructor and "new"
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p1 = new Person("Alice", 25);
console.log(p1.name);   // Alice

// 6️⃣ Optional Chaining "?."
let user2 = {};
console.log(user2.address?.city); // undefined

// 7️⃣ Symbol Type
let id = Symbol("id");
let obj2 = { [id]: 123 };
console.log(obj2[id]);   // 123
