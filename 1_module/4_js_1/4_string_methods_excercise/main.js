// 1 - Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
var stringOne = "MoBIuS"
function upperLower(stringOne) {
    var first = stringOne.toUpperCase()
    var second = stringOne.toLowerCase()
    var upperLowerString = first + second
    return upperLowerString
}
var resultOne = upperLower(stringOne)
console.log(resultOne)


// 2 - Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
//Hint: You'll need to use Math.floor().
var stringTwo = "Arctic Peeper"
function halfStringLength(stringTwo) {
    var length = stringTwo.length
    var halfLength = length / 2
    var rounded = Math.floor(halfLength)
    return rounded
}
var resultTwo = halfStringLength(stringTwo)
console.log(resultTwo)

// 3 - Write a function that uses slice() and the other functions you've written to return the first half of the given string.



// 4 - Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
//Hint: If your string length is odd, use Math.floor() to round down.



// 5 - Write a function that takes a string as a parameter and capitalizes any character that follows a space.
//(This one is a step up in difficulty and utilizes the .split() string method and .join() array method):


