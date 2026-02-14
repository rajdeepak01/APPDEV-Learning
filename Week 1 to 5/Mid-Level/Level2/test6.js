function walkDog(callback){
    console.log("U walk the dog!");
    callback();
}

function cleanRoom(check){
    console.log("Clean the room!");
    callback();
}

function takeOutTrash(callback) {
    console.log("U take out trash!");
    callback(); 
}

walkDog(() => {
    cleanRoom(()=>{
        takeOutTrash(()=>{
            console.log("You did all the works..");
        });
    });
});