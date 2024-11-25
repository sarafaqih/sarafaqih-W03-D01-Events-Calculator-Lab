/*-------------------------------- Teacher Notes --------------------------------*/

const buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      //console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });
let num1
let operator = null
let num2 = 0
let total =0
  const calculator = document.querySelector('#calculator');
  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    //console.log(event.target.innerText);

    // Example
    if(num1 === undefined){
      if(event.target.classList.contains('number')){
      num1 = Number(event.target.innerText)
      console.log("i am num1 " +num1)
    }
  }
  })
  
        calculator.addEventListener('click', (event) => {
          if(event.target.classList.contains('operator' )){
            operator = event.target.innerText
            console.log("i am num1 "+ num1)

            console.log("i am the operator "+ operator)
            
          }
        })
          calculator.addEventListener('click', (event) => {
            if(event.target.classList.contains('number')){
              num2 = Number(event.target.innerText)
              console.log("i am num2 "+ num2)
  
            }
            
          })
            calculator.addEventListener('click', (event) => {
              if(event.target.classList.contains('equals')){
                if(operator === '*'){
                  total = num1 * num2
                  console.log(`The total is equal ${total}`)
                  num1 = undefined
                  num2=0
                  operator = null
                  total=0

                }
                else if(operator === '/'){
                  total = num1 / num2
                  console.log(`The total is equal ${total}`)
                  num1 = undefined
                  num2=0
                  operator = null
                  total=0

                }
                else if(operator === '-'){
                  total = num1 - num2
                  console.log(`The total is equal ${total}`)
                  num1 = undefined
                  num2=0
                  operator = null
                  total=0

                }
                else if(operator === '+'){
                  total = num1 + num2  
                  console.log(`The total is equal ${total}`)
                  num1 = undefined
                  num2=0
                  operator = null
                  total=0
                }
                else{
                  num1 = undefined
                  num2=0
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
