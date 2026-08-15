// ============================================================
// 2. DEBOUNCE WITH ARGUMENTS
// ============================================================

function debounceWithArgs(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function logMessage(mesage) {
  console.log(mesage);
}

const debouncedLog = debounceWithArgs(logMessage, 1000);

debouncedLog("Vishnu");
debouncedLog("Rahul");
debouncedLog("Arjun");

// Output after 1 second:
// Arjun
