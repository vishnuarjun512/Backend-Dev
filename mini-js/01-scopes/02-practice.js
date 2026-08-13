let x = 10;

function example1() {
  let x = 5;
  console.log(x)
}

const y = 10;
function example2() {
  const y = 20;
  console.log(y)
  
  function inner(){ 
    const y = 30;
    console.log(y)
  }
  inner()
}

// Synchronous code runs first. setTimeout schedules its callback for later.
function example3(){
  console.log("A")

  setTimeout(() => {
    console.log("B")
  }, 0);

  console.log("C")
}

example1()
example2()
example3()
