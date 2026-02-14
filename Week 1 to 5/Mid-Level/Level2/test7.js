/*
Async / Await
async  → function returns a Promise
await  → waits for Promise to resolve
*/

function walkDog() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("You walk the dog 🐕");
        }, 1000);
    });
}

function cleanRoom() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("You clean the room 🧹");
        }, 1000);
    });
}

function takeOutTrash() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("You take out the trash 🗑️");
        }, 1000);
    });
}

async function doAll() {
    try {
        const dog = await walkDog();
        console.log(dog);

        const room = await cleanRoom();
        console.log(room);

        const trash = await takeOutTrash();
        console.log(trash);

        console.log("All tasks completed ✅");
    } catch (error) {
        console.log(error);
    }
}

doAll();