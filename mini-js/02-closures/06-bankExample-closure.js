function bankAccount(initialAmount){
  let balance = initialAmount;

  return {
    deposit(amount){
      balance += amount
    },

    getBalance(){
      console.log("Balance is",balance)
    }
  }
}

let person1  = bankAccount(3000)
person1.deposit(200)
person1.getBalance()

let person2 = bankAccount(5000)
person2.deposit(400)
person2.getBalance()

