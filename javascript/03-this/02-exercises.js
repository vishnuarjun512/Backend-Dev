function ex1() {
  const user = {
    name: "Vishnu",

    greet() {
      console.log(this.name);
    }
  };

  user.greet();
}

ex1();

function ex2() {
  const user = {
    name: "Vishnu",

    greet() {
      console.log(this.name);
    }
  };

  const fn = user.greet;

  fn();
}

ex2();

function ex3() {
  const user1 = {
  name: "Vishnu",

  greet() {
    console.log(this.name);
    }
  };

  const user2 = {
    name: "Rahul",
    greet: user1.greet
  };

  user2.greet();
}

ex3();

function ex4() {
  const user = {
    name: "Vishnu",

    greet: () => {
      console.log(this.name);
    }
  };

  user.greet();
}

ex4();
