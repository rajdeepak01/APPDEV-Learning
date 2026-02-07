// Sync & Async Function
// Promises
// Async and Await

function log(msg) {
    document.getElementById("output").innerHTML += msg + "<br>";
}

async function placeOrder() {
    log("🧾 Taking order (Sync)");
    await new Promise(resolve => {
        setTimeout(() => {
            log("🍔 Food prepared (Async)");
            resolve();
        }, 3000);
    });
    log("💳 Payment done (Sync)");
    log("😊 Customer leaves happy");
}

