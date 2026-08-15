function one() {
let name = "Global";

function outer() {
  let name = "Outer";

  function inner() {
    console.log(name);
  }

  inner();
}

outer();
}

function two() {
let name = "Global";

function outer() {

  function inner() {
    console.log(name);
  }

  inner();
}

outer();
}

function three() {
let name = "Global";

function outer() {
  let name = "Outer";

  function inner() {
    let name = "Inner";

    console.log(name);
  }

  inner();
}

outer();
}

function four(){
let x = 10;

function test() {
  // Reference Error:  Cannot access before initialization error
//  console.log(x);

  let x = 20;
}

// ⚠️ Very important: let is not simply "hoisted or not hoisted"
//
// You'll hear people say:
//
// "let isn't hoisted."
//
// That's an oversimplification.
//
// A better mental model is:
//
// let/const declarations are hoisted
// BUT
// they remain uninitialized until execution reaches the declaration.
//
test();
}

function five(){
let x = 10;

function outer() {
  let x = 20;

  function inner() {
    console.log(x);
  }

  return inner;
}

const fn = outer();

fn();
}

one();
two();
three();
four();
five();
