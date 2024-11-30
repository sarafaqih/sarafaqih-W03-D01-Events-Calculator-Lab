
const buttons = document.querySelectorAll(".button")
const numbers = document.querySelectorAll(".number")
const calculatorDisplayElement = document.querySelector(".display")
calculatorDisplayElement.textContent =0
const calculator = document.querySelector('#calculator');

let num1=null
let operator = null
let num2 = null
let total =0
let setnumber=null

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if(num1===null || operator ===null){
      if(event.target.classList.contains('number')){
        calculatorDisplayElement.textContent = Number(calculatorDisplayElement.textContent + event.target.textContent)
        num1 = calculatorDisplayElement.textContent
      }
    }
      if(event.target.classList.contains('operator')){
        operator = event.target.innerText
        calculatorDisplayElement.textContent = 0
      }
      if(event.target.classList.contains('operatorc')){
        num1 = null
        num2=null
        operator = null
        total=0
        calculatorDisplayElement.textContent = 0

      }
      if(num1 !== null && operator !== null ){
      if(event.target.classList.contains('number')){
        calculatorDisplayElement.textContent = Number(calculatorDisplayElement.textContent + event.target.textContent)
        num2 = calculatorDisplayElement.textContent
      }
    }
    if(event.target.classList.contains('equals')){
      if(operator === '*'){
        total = num1 * num2
        //console.log(`The total is equal ${total}`)
        calculatorDisplayElement.textContent = total
        num1 = null
        num2=null
        operator = null
        total=0

      }
      else if(operator === '/'){
        total = num1 / num2
        // console.log(`The total is equal ${total}`)
        calculatorDisplayElement.textContent = total
        num1 = null
        num2=null
        operator = null
        total=0

      }
      else if(operator === '-'){
        total = num1 - num2
        // console.log(`The total is equal ${total}`)
        calculatorDisplayElement.textContent = total
        num1 = null
        num2=null
        operator = null
        total=0

      }
      else if(operator === '+'){
        total = Number(num1) + Number(num2)
        //console.log(`The total is equal ${total}`)
        calculatorDisplayElement.textContent = total
        num1 = null
        num2=null
        operator = null
      }
      else{
        num1 = null
        num2=null
        operator = null
        total=0

      }
    }

    });
  });