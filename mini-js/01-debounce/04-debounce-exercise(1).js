function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const log = debounce((name) => {
  console.log(name);
}, 1000);

log("A");

setTimeout(() => {
  log("B");
}, 300);

setTimeout(() => {
  log("C");
}, 600);

setTimeout(() => {
  log("D");
}, 1500);
