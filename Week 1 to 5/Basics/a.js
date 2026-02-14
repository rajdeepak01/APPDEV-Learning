// Variables:

// Var -> Functional Score or global scope.
// let -> Only block scope. cannot redcleared in same scope.
// const -> once decleared cannot changed.

if (true) {
    var x = 10;
    let y = 20;
}

console.log(x);
// console.log(y); error coz outside the block

