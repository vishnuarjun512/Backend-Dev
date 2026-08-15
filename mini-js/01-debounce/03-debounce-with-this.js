// ============================================================
// 3. FINAL VERSION — ARGUMENTS + this
// ============================================================

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}

const user = {
  name: "Vishnu",

  greet(message) {
    console.log(message, this.name);
  },
};

user.debouncedGreet = debounce(user.greet, 1000);

user.debouncedGreet("Hello");
user.debouncedGreet("Hey");
user.debouncedGreet("Hi");

// Output after 1 second:
// Hi Vishnu
