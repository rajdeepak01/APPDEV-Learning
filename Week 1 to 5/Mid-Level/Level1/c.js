// setInterval() is a JavaScript function that repeatedly
//  executes a callback function after a fixed time 
// interval until it is stopped.
// Simple interval in Node.js

let saveCount = 0;

const autoSaveId = setInterval(() => {
    saveCount++;
    console.log(`Auto-saving data... (${saveCount})`);

    if (saveCount === 3) {
        clearInterval(autoSaveId);
        console.log("Auto-save stopped");
    }
}, 5000); 
