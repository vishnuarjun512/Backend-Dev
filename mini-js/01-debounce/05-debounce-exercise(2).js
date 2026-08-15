function debounceWithCount(callback, delay) {
  let timer;
  let count = 0;

  return function () {
    count++;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(count);
      count = 0;
    }, delay);
  };
}

const search = debounceWithCount((count) => {
  console.log("Searching...");
  console.log("Search Count: " + count);
}, 1000);

search();
search();
search();
search();
