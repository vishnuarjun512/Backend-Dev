const userMethods = {
  greet() {
    console.log("Hello " + this.name);
  },
};

const user1 = Object.create(userMethods);
const user2 = Object.create(userMethods);

user1.name = "Vishnu";
user2.name = "Sakshi";

user1.greet();
user2.greet();

console.log(Object.getPrototypeOf(user1) == userMethods);
