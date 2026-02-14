// Sync & Async Function
// Promises
// Async and Await

function log(msg) {
    document.getElementById("output").innerHTML += msg + "<br>";
}


// REAL WORLD FLOW
async function placeOrder() {

    // SYNC (instant work)
    log("🧾 Taking order (Sync)");

    // ASYNC using Promise + await (food preparation)
    await new Promise(resolve => {
        setTimeout(() => {
            log("🍔 Food prepared (Async)");
            resolve();
        }, 3000);
    });

    // SYNC (after async finishes)
    log("💳 Payment done (Sync)");
    log("😊 Customer leaves happy");
}