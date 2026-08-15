function independentClosures() {
  function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
    };
  }

  const a = counter();
  const b = counter();

  console.log(a());
  console.log(a());
  console.log(b());
  console.log(a());
  console.log(b());
}

function functionFactory() {
  function multiplyBy(number) {
    return function (value) {
      return value * number;
    };
  }

  const double = multiplyBy(2);
  const triple = multiplyBy(3);

  console.log(double(10));  // 20
  console.log(triple(10)); // 30 
  console.log(double(5)); // 10
}

function backEndStyle() {
  function createLogger(prefix) {
    return function (message) {
      console.log(`[${prefix}]: ${message}`);
    };
  }

  const error = createLogger("ERROR");
  const info = createLogger("INFO");

  error("Database connection failed");
  info("Server started");
  error("User not found");
}

independentClosures();
functionFactory();
backEndStyle();

/*

Your mental model after this lesson should be:
                    CLOSURE
                       │
          ┌────────────┴────────────┐
          │                         │
      Function                 Surrounding
                                variables
          │                         │
          └────────────┬────────────┘
                       │
                Function remembers
                those variables
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
       Counter     Factory       Logger
          │            │            │
      private       double/       prefix
       state        triple        state
*/
