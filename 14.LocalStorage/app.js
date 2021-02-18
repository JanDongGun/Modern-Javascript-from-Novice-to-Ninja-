// localStorage.setItem("name", "mario");
// localStorage.setItem("age", 15);

// // get data

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");

// console.log(name, age);

// // update data
// localStorage.setItem("age", 15);

// // remove
// //localStorage.removeItem("name");

// localStorage.clear();

const users = [
  { name: "gon", age: 18 },
  { name: "tran", age: 18 },
  { name: "gontran", age: 18 },
];

//localStorage.setItem("users", JSON.stringify(users));

const stored = localStorage.getItem("users");

console.log(JSON.parse(stored));

localStorage.clear();
