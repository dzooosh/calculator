// operation for the calculator
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

// function operate that takes the variables and call above funcions
function operate(arg) {
    let [operator, fn, sn] = arg;
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

const displayValue = document.querySelector('.value');
const button = document.querySelector('.button');
const t1 = document.createElement('h1');
let allvalues;

// adding globa event listener
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}

addGlobalEventListener('click', '.button', e => {
    console.log(e.target.textContent);
    let text = e.target.textContent;
    t1.textContent += text;
    displayValue.append(t1);
});

// fn operator sn total operator number total