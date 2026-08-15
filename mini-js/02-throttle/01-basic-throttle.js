function throttle(callback, delay) {
  let waiting;
  let timer;
  return function () {};
  if (!waiting) {
    waiting = true;
    timer = setTimeout(callback, delay);
  }
}

const log = throttle(() => {
  console.log("Executed");
}, 1000);

log();
log();
log();
log();
