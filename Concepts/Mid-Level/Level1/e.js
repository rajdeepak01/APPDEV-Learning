// Asynchronous code does NOT block execution
// It can run later while the rest of the code continues
console.log("Start");

// setTimeout is asynchronous
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End"); // This runs immediately, before setTimeout
