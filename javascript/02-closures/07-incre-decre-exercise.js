function counter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count
    },

    decrement() {
      count--;
      return count
    }
  }
}

const test = counter()
console.log(test.increment())
console.log(test.decrement())
console.log(test.increment())
console.log(test.increment())
console.log(test.decrement())
