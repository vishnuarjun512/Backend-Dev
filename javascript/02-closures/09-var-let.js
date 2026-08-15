function excersise1() {
  console.log("Excersise 1")
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
}

// excersise1();

function excersise2() {
  console.log("Excersise 2")
  for(var i=0;i<3;i++){
    setTimeout(() => { 
      console.log(i);
    }, 0);   
  }
}

// excersise2();

function excersise3() {
  console.log("Excersise 3")
  for(let i=0;i<3;i++){
    setTimeout(() => { 
      console.log(i);
    }, 0);   
  }
}

// excersise3();

function createFunctions() {
  const functions = []

  for(let i=0;i<3;i++){
    functions.push(function() {
      return i;
    }); 
  }

  return functions;
}

const functions = createFunctions();

console.log(functions[0]())
console.log(functions[1]())
console.log(functions[2]())
