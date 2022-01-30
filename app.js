console.log("Problem Solving Party!")

//printGreeting
//function call printGreeting with a parameter of 'name' that returns a greeting with the argument interpolated into the greeting.


function printGreeting(name){

  return console.log(`=> Hello there, ${name}!`);

}

// printGreeting("Slimer");


//reverseWordOrder
//function called reverseWordOrder that accepts a single string argument
//returns a string with order of words reversed

//Solutions
//A
function wordOrder(string) {
  let revStr = string.split(' ').reverse().join(' ');
  console.log(revStr)
  return revStr
}

// wordOrder('There is a house, in New Orleans. That is called the Rising Sun');

//B
function wordOrder(string) {
  let revStr = string.split(' ').reverse().join(' ');
  console.log(revStr)
  return revStr
}

// wordOrder('I use Lâncome on my comb');


//calculate
//function that takes 2 numbers and a string as parameters
//string parameters are
  //add - add num1 and num2
  //sub - num1 minus num2
  //mult - num1 * num2
  //div - num1 / num2
  //exp - num2 is exp of num1


//Solution
function calculate(num1,num2,operator){
  let result = null;
  operator.toLowerCase();
  // if to determine operator is not more than 4 digits
  if (operator.length <= 4){
    //if then to determine if the numbers entered are proper data types
    if(typeof num1 === 'number' && typeof num2 === 'number' && operator === 'add', 'sub', 'mult', 'div', 'exp'){
      // if to determine operator is add
      if(operator.includes('add') === true ){
        result = num1 + num2
      }
      //if to determine operator is sub
      if(operator.includes('sub') === true ){
        result = num1 - num2
      }
      //if to remove 'mul' vulnerability
      if(operator.includes('mul') === true){
        operator = 'mult'
      }
      //if to determine operator is mult
      if(operator.includes('mult') === true){
        result = num1 * num2
      }
      
      //if to determine operator is div
      if(operator.includes('div') === true){
        result = num1 / num1
      }
      //if to determine operator is exp
      if(operator.includes('exp') === true){
        result = num1 ** num2
      }
      // else to return error message if data types are wrong
    }else{
      return "Error! Please input two numbers and an operator. Operator options are as follows: add, sub, mult, div, exp."
    }
  }else{
    return "Operator must be one of the following: add, sub, mult, div, exp."
  }
  return result 
}

// console.log(calculate(4,3,'sub'));
// console.log(calculate(4,3,'exp'));

//printConsecutives
// analyzes an anylength array and determines if elements are consecutive
// returns groups of 3 numbers that are consecutive

//Solution

// function printConsecutives
function printConsecutives(arr){
  let aResultArray = []; 
  // Iterate over the array to find values
  for (let i = 0; i < arr.length; i++){
    //Compare each previous value in array to next value
    if(arr[i+1] - arr[i] === 1 && arr[i+2] - arr[i] === 2){
    //point consecutives at aResultArray of result array
    aResultArray[i] = [arr[i], arr[i+1], arr[i+2]]
    //needing to figure out how to duplicate aResultArray here so that the return of each trio of consecutives doesn't overwrite each other
    }else{
      arr.splice(i,i);
    }
  }return aResultArray
}
console.log(printConsecutives([1,2,3,9,8,0,44,45,46,2,9]))

//condition 1
//arr[i + 1]  -  arr[i]      
//arr[0 + 1]  -  arr[0] 
//arr[1]      -  arr[0]
// 2          -    1
// === 1- yes - fulfilled

//condition 2
//arr[i + 2]  -  arr[i]
//arr[0 + 2]  -  arr[0] 
//arr[2]      -  arr[0]
// 3          -    1
// === 2 - yes - fulfilled

// let array = [1,2,3]

// let array2 = array.toString();
// console.log(array2);