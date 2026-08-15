class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const user1 = new User("Vishnu");
user1.greet();

console.log(user1 instanceof User);

// Inheritance
class Admin extends User {
  identify() {
    console.log(this.name + " is an Admin");
  }
}

const user2 = new Admin("Guru");
user2.identify();
