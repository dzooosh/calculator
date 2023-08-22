function add(arg) {

    return parseInt(arg[0]) + parseInt(arg[2]);
}

function subtract(arg) {
    return parseInt(arg[0]) - parseInt(arg[2]);
}

function multiply(arg) {
    return parseInt(arg[0]) * parseInt(arg[2]);
}

function divide(arg) {
    if (arg[2] === 0) {
        return 'Forbidden';
    }
    return parseInt(arg[0]) / parseInt(arg[2]);
}

const ans = divide(['5', '/', '8']);
console.log(ans);