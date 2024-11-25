
const buttons = document.querySelectorAll(".button")

const calculatorDisplayElement = document.querySelector(".display")

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      //console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });
let num1=null
let operator = null
let num2 = null
let total =0
  const calculator = document.querySelector('#calculator');
  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    //console.log(event.target.innerText);

    // Example
    if(num1 === null){
      if(event.target.classList.contains('number')){
      num1 = Number(event.target.innerText)
      //console.log("i am num1 " +num1)
      calculatorDisplayElement.textContent = num1    
    }
  }
  })
  
        calculator.addEventListener('click', (event) => {
          if(event.target.classList.contains('operator' )){
            operator = event.target.innerText
            //console.log("i am the operator "+ operator)
            calculatorDisplayElement.textContent = 0
            
          }
        })
          calculator.addEventListener('click', (event) => {
            if(event.target.classList.contains('number')){
              num2 = Number(event.target.innerText)
              //console.log("i am num2 "+ num2)
              calculatorDisplayElement.textContent = num2

  
            }
            
          })
            calculator.addEventListener('click', (event) => {
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
                  total = num1 + num2  
                  // console.log(`The total is equal ${total}`)
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
            
              })

              
            
      

    // Example
    // if (event.target.innerText === '*') {
    //   // Do something with this operator
    // }
  //});
  
/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
