function throttle(callback, delay) {
  let waiting = false;

  return function (...args) {
    if (!waiting) {
      callback(...args);

      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, delay);
    }
  };
}

function logMessage(message) {
  console.log(message);
}

const log = throttle(logMessage, 1000);

log("Vishnu");
log("Rahul");
log("Arjun");
