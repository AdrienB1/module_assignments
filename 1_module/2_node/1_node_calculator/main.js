const readLine = require("readline-sync")

// playing around v
 
/*
// ------------------------------------------ Add two numbers section ---------------------------------------

// Asks for first number
var addOne = readLine.question ('Please enter any number. ')

// Asks for second number
var addTwo = readLine.question ('What number would you like to add to that? ')

// Adds both numbers and assigns sum to a variable
var firstNumber = (+addOne + +addTwo)

// Logs the sum to the console
console.log ("The sum is " + firstNumber + "!")


// ------------------------------------------ Multiply two numbers section ---------------------------------------

// Asks for first number
var multiplyOne = readLine.question ('Please enter the first number we want to multiply. ')

// Asks for second number
var multiplyTwo = readLine.question ('What number would you like to multiply that by? ')

// Multiplies both numbers and assigns product to a variable
var secondNumber = (multiplyOne * multiplyTwo)

// Logs the product to the console
console.log ("The factor is " + secondNumber + "!")


// ------------------------------------------ Divide two numbers section ---------------------------------------

// Asks for first number
var divideOne = readLine.question ('Please give me the number you would like to divide. ')

// Asks for second number
var divideTwo = readLine.question ('What would you like to divide that by? ')

// Divides first number by second number and assigns the quotient to a variable
var thirdNumber = (divideOne / divideTwo)

// Logs the quotient to the console
console.log ("The Quotient is " + thirdNumber + "!")


*/



// -------------------------------------------------- Actual Calculator --------------------------------------------------

// Asks for both numbers
var num1 = readLine.question ('Please enter your first number. ')
var num2 = readLine.question ('Please enter your second number. ')

// Asks for operation desired and converts to lowercase to ensure conditional can understand it every time
var chosenOperation = readLine.question ('Please enter the operation to perform: add, sub, mul, or div. ')
var chosenOperationConverted = chosenOperation.toLowerCase ()

// Based on the operation chosen, performs the appropriate function, or tells user an incorrect answer was given.
if (chosenOperationConverted == "add") {
    var addedNums = +num1 + +num2
    console.log ("The result is: " + addedNums)
} else if (chosenOperationConverted == "sub") {
    var subNums = +num1 - +num2
    console.log ("The result is: " + subNums)
} else if (chosenOperationConverted == "mul") {
    console.log ("The result is: " + num1 * num2)
} else if (chosenOperationConverted == "div") {
    console.log ("The result is: " + num1 / num2)
} else {
    console.log ("The operation entered was not understood, please try again.")
}