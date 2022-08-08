let number1 = '';
let number2 = '';
let operator = '';
let sum = '';
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let operators = ['+', '-', '÷', '*'];
let Calchistory = [];
document.querySelector('.calculator__btns-box').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('cleanAll .btn')) return;
    const info = event.target.textContent;
    if (numbers.includes(info)) {
        if (operator == '') {
            number1 += info;
            currentCalc.textContent = number1 + operator + number2;
        } else {
            number2 += info;
            currentCalc.textContent = number1 + operator + number2;
        }
    }
    if (operators.includes(info)) {
        operator = info;
        currentCalc.textContent = number1 + operator + number2;
    }
    calcButton.onclick = function () {
        if (operator == '+') {
            sum = (+number1) + (+number2)
            currentCalc.textContent = sum;
            Calchistory.unshift(`${number1} ${operator} ${number2} = ${sum}`);
            number1 = sum;
            number2 = '';
            if (sum != '') {
                sum = (+sum) + (number2)
            }
        }
        if (operator == '-') {
            sum = (+number1) - (+number2)
            currentCalc.textContent = sum;
            Calchistory.unshift(`${number1} ${operator} ${number2} = ${sum}`);
            number1 = sum;
            number2 = '';
            if (sum != '') {
                sum = (+sum) - (+number2)
            }
        }
        if (operator == '÷') {
            sum = (+number1) / (+number2)
            currentCalc.textContent = sum;
            Calchistory.unshift(`${number1} ${operator} ${number2} = ${sum}`);
            number1 = sum;
            number2 = '';
            if (sum != '') {
                sum = (+sum) / (+number2)
            }
        }
        if (operator == '*') {
            sum = (+number1) * (+number2)
            currentCalc.textContent = sum;
            Calchistory.unshift(`${number1} ${operator} ${number2} = ${sum}`);
            number1 = sum;
            number2 = '';
            if (sum != '') {
                sum = (+sum) * (+number2)
            }
        }
        console.log(Calchistory)
        newHistory.textContent = Calchistory[0];
        oldHistory.textContent = Calchistory[1];
        
    }
};
CA.onclick = function () {
    number1 = '';
    number2 = '';
    operator = '';
    firstNumberEntered = false;
    sum = '';
    oldHistory.textContent = '';
    newHistory.textContent = '';
    currentCalc.textContent = '';
}
C.onclick = function () {
    number1 = '';
    number2 = '';
    operator = '';
    firstNumberEntered = false;
    sum = '';
    currentCalc.textContent = '';
}