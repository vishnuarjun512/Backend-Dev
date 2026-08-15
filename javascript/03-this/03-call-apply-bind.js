// Call

const user1 = {
  name: "Vishnu",
};

const user2 = {
  name: "Rahul",
};

function greet() {
  console.log("Call Test");
  console.log("Hello", this.name);
}

greet.call(user1);
// greet.call(user2)

// Apply

const user3 = {
  name: "Rohit",
};

function TestingBind(age, number) {
  console.log("");
  console.log("Apply Test");
  console.log("Hello", this.name, "Age:", age, "Number:", number);
}

TestingBind.apply(user3, [4, 12]);

// Bind

const user4 = {
  name: "Sakshi",
};

function BindingTest() {
  console.log("");
  console.log("Binding Test");
  console.log("Hello ", this.name);
}

const bindingVariable = BindingTest.bind(user4);
bindingVariable();
