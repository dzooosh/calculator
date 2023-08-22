function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if ( b === 0) {
        return 'Forbidden';
    }
    return a / b;
}

// const ans = divide(['5', '/', '8']);
// console.log(ans);

// variables for each part of the calculator operation
// const firstNum;
// const operator;
// const secondNum;

// function operate that takes the variables and call above funcions
function operate(arg) {
    let [fn, operator, sn] = arg;
    // convert string to number
    fn = parseInt(fn);
    sn = parseInt(sn);
    
    let result;
    switch(operator) {
        case '+':
            result = add(fn , sn);
            break;
        case '-':
            result = subtract(fn, sn);
            break;
        case '*':
            result = multiply(fn, sn);
            break;
        case '/':
            result = divide(fn, sn);
            break;
        default:
            result = "invalid operator";
    }

    return result;

}