//clall back function : I will call you later
//setTimeout(<arg>,<millisec>) - arg is a function which will be called after sometime (millisecs)

/*
    Read a file - we can print
    Network request - I can after its response
    Intracting with db - Process after my search
*/

function hello(callback) {
    console.log("Hello");
    callback();
}

function GoodBye() {
    console.log("GOOD BYE!!!!!");
    document.getElementById("myh4").innerHTML = "After hello, processed good bye!";


}

hello(GoodBye);