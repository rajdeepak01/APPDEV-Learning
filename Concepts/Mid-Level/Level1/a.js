// Callback functions and Timers

// callback function is simpaly a function passed as an argument into another function
// so it can callback(invoked) later.

// setTimeout() function schedules a one-time callback after a specific delay.

//Example: Basic

// function greet(name, callback) {
//     console.log("Hello " + name + "!");
//     callback(name);
// }

// function sayGoodbye(name) {
//     console.log("GoodBye " + name + "!");
// }

// greet("Raj", sayGoodbye);


// Example : Real World

// function greet(name, callback) {
//     console.log("Hello " + name + "!");
    
//     setTimeout(callback, 5000);
// }

// greet("Raj", function () {
//     console.log("GoodBye after 2 seconds!");
// });


// Callback-based asynchronous example

// function fetchData(callback) {
//     console.log("Fetching data...");

//     setTimeout(() => {
//         callback("Data received!");
//     }, 3000);
// }

// fetchData((result) => {
//     console.log(result);
// });

// console.log("Doing other work...");


function fetchData(callback) {
    console.log("Pani bharo...");

    setTimeout(() => {
        callback("Pani bhar gya hai..");
    }, 5000);
    
}

fetchData((panibharrahahai) => {
    console.log(panibharrahahai);
});

console.log("Chai banao");

