const user = {
  name: "Vishnu",
};

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("toString"));

console.log(Object.getPrototypeOf(user) == Object.prototype);
