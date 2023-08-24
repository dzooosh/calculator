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
        return 'Nope:(';
    }
    return a / b;
}

// const ans = divide(['5', '/', '8']);
// console.log(ans);

// function operate that takes the variables and call above funcions
function operate(operator, fn, sn) {
    // convert string to number
    fn = parseInt(fn);
    sn = parseInt(sn);
    
    let result = 0;
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

// adding global event listener funciton
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
};


const displayValue = document.querySelector('.value');
const button = document.querySelector('.button');
let t1 = document.createElement('h1');
let total, fn, sn = 0;

// populates the display with number buttons
function populate(e) {
    console.log(e.target.textContent);
    let text = e.target.textContent;
    t1.textContent += text;
    displayValue.append(t1);
}
// number and operation buttons
addGlobalEventListener('click', '.button', e => populate(e));

function clear() {
        t1.textContent = '';
};
// clear button 
addGlobalEventListener('click', '#clear', clear);

// equals button
addGlobalEventListener('click', '#equals', e => {
   
});

// delete button
addGlobalEventListener('click', '#delete', e => {
    let del = t1.textContent;
    t1.textContent = del.slice(0, -1);
});

// clear button


// fn operator sn total operator number total