// const age = new String("gon");

// console.log(typeof age);

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     this.score = 0;
//   }

//   login() {
//     console.log(`${this.name} just logged in`);
//     return this;
//   }

//   logout() {
//     console.log(`${this.name} just logged out`);
//     return this;
//   }

//   incScore() {
//     this.score += 1;
//     console.log(`${this.name} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   constructor(name, email, title) {
//     super(name, email);
//     this.title = title;
//   }
//   deleteUser(user) {
//     users = users.filter((u) => u.name != user.name);
//   }
// }

function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.name} has logged in`);
};

const userOne = new User("gon", "trannguyendonggon@gmail.com");
const userTwo = new User("tran", "trannguyendonggon@gmail.com");
//const userThree = new Admin("admin", "trannguyendonggon@gmail.com", "ninja");

//let users = [userOne, userTwo, userThree];
userTwo.login();
