const methods = {
  name: this.name,
  greet() {
    console.log("Hello " + this.name);
  },
  kick() {
    console.log("Kicking " + this.name);
  },
};

const user1 = Object.create(methods);

console.log(user1.__proto__);
