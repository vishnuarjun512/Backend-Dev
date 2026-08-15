function throttle(callback, delay) {
  let waiting = false;

  return function (...args) {
    if (!waiting) {
      const context = this;
      waiting = true;
      callback.apply(context, args);
      setTimeout(() => {
        waiting = false;
      }, delay);
    }
  };
}

const user = {
  name: "Vishnu",

  greet(message) {
    console.log(message, this.name);
  },
};

user.throttledGreet = throttle(user.greet, 1000);

user.throttledGreet("Hello");
