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
function operate(arg) {
    let fn = arg[0];
    let operator = arg[1];
    let sn = arg[2];
    // convert string to number
    fn = Number(fn);
    sn = Number(sn);
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
        case '÷':
            result = divide(fn, sn);
            break;
            default:
                result = "invalid operator";
            }
    
    return result.toString().slice(0, 12);
    
}

// adding global event listener funciton
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
};

function countOccurence(str, char) {
    let count = 0;

    [...str].forEach(str => {
        if (str === char) count++;
    })
    return count;
}
const displayValue = document.querySelector('.value');
const operations = document.querySelectorAll('.buttons.op')
const buttons = document.querySelectorAll('.button');
const upDisplay = document.querySelector('.exp');
let t1 = document.createElement('h1');
let up = document.createElement('h5');
let total;
let allValue = '0';
let output = '0';
const operatorList = ['+', '-', '÷', '*', '=']
let operator;

up.textContent = '';
t1.textContent = '0';
displayValue.append(t1);

// the operator buttons
operations.forEach(op => {
    op.addEventListener("click", (e) => {
        // once the 2 numbers and operator is detected
        cal = output.split(' ').filter(item => item !== '');
        if (cal.length === 3) {
            console.log(cal)
            total = operate(cal);
            console.log(total);
            t1.textContent = total;
            if (e.target.textContent === '=') {
                output = '';
                allValue = '';
            } else {
                output = total;
                allValue = total;
            }
        }

        //check if a operator has been selected
        if (operatorList.indexOf(allValue.slice(-1)) !== -1) {
            operator = e.target.textContent;
            // operation change if clicked before
            if (allValue.slice(-1) !== operator) {
                allValue = allValue.slice(0, -1);
                allValue += operator;
                output = output.slice(0, -3)
                output += ' ' + operator + ' ';
            }  
        } else {
            operator = e.target.textContent;
            allValue += operator;
            output += " " + operator + " ";
        }
        
    })
});

// number buttons
addGlobalEventListener('click', '.button', e => {
    // if one dot is detected disable the decimal point
    if (countOccurence(t1.textContent, '.') > 1) {
        if (e.target.textContent === '.') {
            allValue += '';
            output += '';
            t1.textContent += '';
        }
    }
    // check if an operator has been clicked and renew number display
    if (operatorList.indexOf(allValue.slice(-1)) !== -1) {
        if (allValue.slice(-1) === "=") {
            allValue = allValue.slice(0, -1);
            output = output.slice(0, -3);
        }else{
            t1.textContent = '';
        }
    }
    // limiting the number length on display
    if (t1.textContent.length <= 11) {
        // checking if the displayvalue == 0 when a number is pressed
        if (t1.textContent === '0') {
            if (e.target.textContent !== '.') {
                t1.textContent = '';
                output = '';
                allValue = '';
            }
        }
        allValue += e.target.textContent;
        output += e.target.textContent;
        t1.textContent += e.target.textContent;
        up.textContent = allValue;
        upDisplay.append(up);
        console.log(allValue);
        console.log(output);
        displayValue.append(t1);
    
    }
});

function clear() {
    t1.textContent = '0';
    allValue = '0';
    output = '0';
    up.textContent = '';
};

// clear button 
addGlobalEventListener('click', '#clear', clear);

// delete button
addGlobalEventListener('click', '#delete', e => {
    let del = t1.textContent;
    t1.textContent = del.slice(0, -1);
    up.textContent = up.textContent.slice(0, -1);
    allValue = allValue.slice(0, -1);
    output = output.slice(0, -1);
});