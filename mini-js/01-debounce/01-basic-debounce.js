// ============================================================
// 1. BASIC DEBOUNCE
// ============================================================

function debounceBasic(callback, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(callback, delay);
  };
}

const searchBasic = debounceBasic(() => {
  console.log("Searching...");
}, 1000);

searchBasic();
searchBasic();
searchBasic();
searchBasic();

// Output after 1 second:
// Searching...
