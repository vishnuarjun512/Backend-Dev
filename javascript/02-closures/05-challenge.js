
function counter() {
  let count = 0;
  
  return function() {
    console.log("Count is ", ++count);
  };
}

const increment = counter();

increment();
increment();
increment();

# JavaScript Closure — Counter Example

```js
/*
==========================================================
WHAT ARE WE TRYING TO BUILD?
==========================================================

We want a function that remembers a number between calls.

Expected result:

    increment(); // Count is 1
    increment(); // Count is 2
    increment(); // Count is 3

The interesting part is:

    Where is the `count` variable stored?

and:

    Why doesn't `count` reset to 0 every time we call increment()?

The answer is: CLOSURE.
*/


/*
==========================================================
STEP 1: CREATE THE OUTER FUNCTION
==========================================================
*/

function counter() {

  /*
  `count` belongs to the `counter()` function's scope.

  At this moment:

      count = 0

  Think of the scope like this:

      counter()
      └── count = 0

  `count` is NOT directly accessible from outside:

      console.log(count); // ❌ ReferenceError

  This makes `count` effectively private.
  */

  let count = 0;


  /*
  ========================================================
  STEP 2: CREATE THE INNER FUNCTION
  ========================================================

  This function uses `count`.

  Notice something important:

      `count` is NOT declared inside this function.

  So where does JavaScript get `count` from?

  It looks outside the current function:

      inner function
           ↓
      counter function
           ↓
      count = 0

  The inner function remembers the surrounding
  variables that it needs.

  THAT is the beginning of a closure.
  */

  return function increment() {

    /*
    `count++` means:

        count = count + 1

    First call:

        0 → 1

    Second call:

        1 → 2

    Third call:

        2 → 3
    */

    count++;

    console.log("Count is", count);
  };
}


/*
==========================================================
STEP 3: CALL counter()
==========================================================

This is VERY important:

    const increment = counter();

We are actually calling `counter()` here.

So JavaScript enters the function:

    counter()
       ↓
    let count = 0
       ↓
    return increment function

The returned function is then stored inside:

    increment
*/

const increment = counter();


/*
==========================================================
WHAT DOES `increment` CONTAIN?
==========================================================

Conceptually:

    increment
       ↓
    ┌──────────────────────────┐
    │ function increment()    │
    │                          │
    │   count++;               │
    │   console.log(count);    │
    │                          │
    └────────────┬─────────────┘
                 │
                 │ remembers
                 ↓
            count = 0


The function remembers the `count` variable from
the `counter()` function.

That remembered connection is called a CLOSURE.

Important:

    counter() has already finished executing.

But the returned `increment()` function still has
access to `count`.
*/


/*
==========================================================
STEP 4: FIRST CALL
==========================================================
*/

increment();

/*
Before this call:

    count = 0

Inside increment():

    count++;

Therefore:

    count = 1

Output:

    Count is 1
*/


/*
==========================================================
STEP 5: SECOND CALL
==========================================================
*/

increment();

/*
IMPORTANT:

We are NOT calling:

    counter()

again.

We are calling the SAME returned function:

    increment()

The same closure still has access to the SAME `count`.

Before:

    count = 1

After:

    count = 2

Output:

    Count is 2
*/


/*
==========================================================
STEP 6: THIRD CALL
==========================================================
*/

increment();

/*
Again, we use the SAME closure.

Before:

    count = 2

After:

    count = 3

Output:

    Count is 3
*/


/*
==========================================================
FINAL OUTPUT
==========================================================

Count is 1
Count is 2
Count is 3


WHY?

Because all three calls use the SAME `count` variable:

                 ┌───────────────┐
                 │ count = 0     │
                 └───────┬───────┘
                         │
                         │ closure
                         ↓
                  increment()
                    │
                    ├── call #1 → count = 1
                    │
                    ├── call #2 → count = 2
                    │
                    └── call #3 → count = 3


==========================================================
THE MOST IMPORTANT IDEA
==========================================================

This:

    const increment = counter();

creates ONE closure.

Then:

    increment();
    increment();
    increment();

uses that SAME closure.

Therefore the same `count` is preserved.


==========================================================
COMPARE THIS WITH:
==========================================================

    counter()();
    counter()();
    counter()();


This is DIFFERENT.

Every time we call:

    counter()

we create a NEW `count`.

So:

    counter()()
        ↓
    new count = 0
        ↓
    count = 1


    counter()()
        ↓
    new count = 0
        ↓
    count = 1


    counter()()
        ↓
    new count = 0
        ↓
    count = 1


Output:

    Count is 1
    Count is 1
    Count is 1


WHY?

Because we created THREE different closures.


==========================================================
ONE CLOSURE VS THREE CLOSURES
==========================================================


ONE CLOSURE:

    const increment = counter();

    increment();
    increment();
    increment();

            ┌─────────────┐
            │ count = 0   │
            └──────┬──────┘
                   │
                   ↓
              increment
                   │
             ┌─────┼─────┐
             ↓     ↓     ↓
             1     2     3


THREE CLOSURES:

    counter()();
    counter()();
    counter()();

       closure 1
           ↓
       count = 0 → 1

       closure 2
           ↓
       count = 0 → 1

       closure 3
           ↓
       count = 0 → 1


==========================================================
THE DEFINITION TO REMEMBER
==========================================================

A closure happens when a function remembers and can
continue to access variables from its surrounding
lexical scope, even after the outer function has finished.

In our example:

    counter()
       │
       ├── count
       │
       └── returns increment()
                    │
                    └── remembers count


==========================================================
WHY IS THIS USEFUL?
==========================================================

Closures allow us to create private state.

For example:

    function counter() {
      let count = 0;

      return function() {
        count++;
        return count;
      };
    }

Outside the function, nobody can directly do:

    count = 100;

because `count` is private.

The only way to change it is through the returned
function.

This idea is used in:

    - data encapsulation
    - function factories
    - callbacks
    - event handlers
    - middleware
    - timers
    - Node.js code
    - React
    - memoization
    - debouncing
    - throttling


==========================================================
MENTAL MODEL
==========================================================

Whenever you see something like:

    function outer() {

      let value = 10;

      return function inner() {
        console.log(value);
      };
    }

Ask yourself:

    1. What variables does the inner function use?
    2. Where were those variables declared?
    3. Does the inner function escape the outer function?
    4. If yes, the inner function is probably forming a closure.


==========================================================
THE ONE SENTENCE TO REMEMBER
==========================================================

A closure is:

    "A function + the surrounding variables it remembers."

In our example:

    increment function
           +
    count variable
           =
        CLOSURE
```
