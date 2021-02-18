// const age = new String("gon");

// console.log(typeof age);

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }

  login() {
    console.log(`${this.name} just logged in`);
    return this;
  }

  logout() {
    console.log(`${this.name} just logged out`);
    return this;
  }

  incScore() {
    this.score += 1;
    console.log(`${this.name} has a score of ${this.score}`);
    return this;
  }
}

const userOne = new User("gon", "trannguyendonggon@gmail.com");

userOne.login().incScore().incScore().logout();
