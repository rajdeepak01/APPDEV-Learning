function sum(callback1, callback2, a, b) {
    var r = a + b;
    callback1(r);
    callback2(r);
}

function display(result) {
    document.getElementById("firsth4").innerHTML = result;
}

function increment(result) {
    result++;
    document.getElementById("secondh4").innerHTML = result;
}

sum(display, increment, 67, 3);