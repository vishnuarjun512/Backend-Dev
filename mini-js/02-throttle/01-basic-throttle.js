function throttle(callback, delay) {
  let waiting = false;
  let count = 0;

  return function () {
    if (!waiting) {
      count++;
      callback(count);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, delay);
    }
  };
}
const log = throttle((count) => {
  console.log("Executed " + count + " times");
}, 0);

log();
setTimeout(log, 10);
setTimeout(log, 20);
