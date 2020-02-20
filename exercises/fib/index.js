// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib_a(n) {
    // Assign the first two numbers to an array called "result" (always the same)
    let result = [0, 1];
    // For all the other numbers leading up to n...
    for (let i = 2; i <= n; i++) {
        // Assign two variables to equations grabbing previous two numbers
        const first = result[i - 1];
        const second = result[i - 2];
        //  Add the two variables and push to end of the results array
        result.push(first + second);
    }
    // Return the result stored at position n
    return result[n];
    // Linear O(n) - just one loop with one calculation for each input
}

function slowFib(n) {
    if (n < 2) return n; // Base case: only time we return n is when the input equals 1 or 0
    return fib(n - 1) + fib(n - 2); // Recursively call the function on n-1 and n-2
    // Exponential 2^n - for every additional element, huge increase in operations
}

// Interviewer asks how to improve the above run time. They want to hear...
// Memoization! Store the arguments of each function call along with the result.
// Then you can return a precomputed result for repeat calls instead of manually running.

// Calling slow function with mid-function to return a fast function
function memoize(fn) {
    // Create an empty cache (storage object)
    const cache = {};
    // Return an anonymous function (receives ...all arguments already called)
    return function(...args) {
        // If the cache already contains these arguments...
        if (cache[args]) {
            // Return the stored information
            return cache[args]
        }
        // Call the apply method on fn, pass in (this, args), and assign to result
        const result = fn.apply(this, args); // Apply is used to place key (*this* return) and value (arguments passed) to storage object
        // Store the result in the cache args object
        cache[args] = result;
        return result;
    };
}
// Now the calculations are almost performed instantaneously (in less than 1ms)
const fib = memoize(slowFib);

module.exports = fib;
