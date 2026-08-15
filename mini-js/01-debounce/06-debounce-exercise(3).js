function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}

function searchAPI(query) {
  console.log(`API request for: ${query}`);
}

const search = debounce(searchAPI, 500);

search("V");
search("Vi");
search("Vis");
search("Vish");
search("Vishn");
search("Vishnu");
