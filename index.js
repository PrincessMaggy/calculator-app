// THEME SWITCHER
(function( d ) {
    'use strict';
    d.getElementById( 'myRange' ).addEventListener( 'change',
       function() {
          switch( this.value ){
             case '1' :
                     d.body.classList.remove( 'theme2' ); 
                     d.body.classList.remove( 'theme3' );
                     d.body.classList.add( 'theme1' );
                     break;
             case '2' :
                     d.body.classList.remove( 'theme1' ); 
                     d.body.classList.remove( 'theme3' );
                     d.body.classList.add( 'theme2' );
                     break;
             case '3' :
                     d.body.classList.remove( 'theme1' ); 
                     d.body.classList.remove( 'theme2' );
                     d.body.classList.add( 'theme3' );
                     break;
           }
       }, false );
 }( document ));









//  CALCULATOR


// THis class stores the data from the buttons
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};


// This function displays the values from buttons
function updateDisplay() {
  const display = document.querySelector('.calculator__display');
  display.value = calculator.displayValue;
}
updateDisplay();



//This function assigns values from the button to the calculator class
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  }
   else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}


// This function handles the decimal operator
function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
  	calculator.displayValue = '0.'
    calculator.waitingForSecondOperand = false;
    return
  }
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}




function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand)  {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}
  



// This function  calculates whatever data is inputted
function calculate(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }
  return secondOperand;
}



// This function resets the calculator when the reset button is pressed.
function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}


// This function deletes the current data on display 
function clearDigit(){
let value = calculator.displayValue;
calculator.displayValue = calculator.displayValue.substr(0, value.length -1);
if(value.length===0){
  calculator.displayValue ='0';
}
}


// All data via the html buttons is accessed through the event.listener method
const keys = document.querySelector('.calculator__keys');
keys.addEventListener('click', (event) => {
  const { target } = event;

  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('key--operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('del')) {
    clearDigit();
    updateDisplay();
    return;
  }

  if (target.classList.contains('all--clear')) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});





// keys.addEventListener('click', event => {
//   const { target } = event;
//   const { value } = target;
//   if (!target.matches('button')) {
//     return;
//   }

//   switch (value) {
//     case '+':
//     case '-':
//     case '*':
//     case '/':
//     case '=':
//       handleOperator(value);
//       break;
//     case '.':
//       inputDecimal(value);
//       break;
//     case 'del':
//       clearDigit();
//       break;
//     case 'all-clear':
//       resetCalculator();
//       break;
//     default:
//       if (Number.isInteger(parseFloat(value))) {
//         inputDigit(value);
//       }
//   }

//   updateDisplay();
// });