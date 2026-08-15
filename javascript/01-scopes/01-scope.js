const name = "Vishnu"

function outer() {

  let age = 26;

  function inner (){
    console.log("Name is ", name)
    console.log("Age is ", age)
  }

  inner()
}

outer()
