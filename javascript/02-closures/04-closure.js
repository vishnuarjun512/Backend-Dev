// A closure is essentially:
// A function together with access to the variables from the surrounding lexical scope where that function was created.

function outer() {

  let x = 20;

  function inner() {
    console.log(x)
  }

  return inner;
}

let func = outer()

func();
