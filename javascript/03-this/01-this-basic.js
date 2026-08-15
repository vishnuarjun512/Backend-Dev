const user = {
  name : "Vishnu",
  
  sayHello() {
    console.log("My name is ", this.name)
  }
}

user.sayHello();

const fn = user.sayHello();

fn;
