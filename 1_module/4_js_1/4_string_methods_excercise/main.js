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
var stringThree = "The dragon spawned an egg"
function firstHalf(stringThree) {
    var slicedStringFirstHalf = stringThree.slice(0, halfStringLength(stringThree))
    return slicedStringFirstHalf
}
var resultThree = firstHalf(stringThree)
console.log(resultThree)


// 4 - Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
//Hint: If your string length is odd, use Math.floor() to round down.
var stringFour = "Toss a coin to your Witcher"
function halfUpperLower(stringFour) {
    var first = firstHalf(stringFour)
    var second = stringFour.slice(halfStringLength(stringFour), )
    var firstCapital = first.toUpperCase()
    var secondCapital = second.toLowerCase()
    var firstSecondCapital = firstCapital + secondCapital
    return firstSecondCapital
}
var resultFour = halfUpperLower(stringFour)
console.log(resultFour)


// 5 - Write a function that takes a string as a parameter and capitalizes any character that follows a space.
//(This one is a step up in difficulty and utilizes the .split() string method and .join() array method):
var stringFive = "I turned myself into a pickle morty"
function allWordsCapital(stringFive) {
    var newStr
    var stringFiveArray = []
    var stringFiveWithCapitals = []
    if (stringFive.indexOf(" ") != -1) {
        var stringFiveArray = stringFive.split(" ")
        for (var i = 0; i < stringFiveArray.length; i++) {
            stringFiveWithCapitals.push(stringFiveArray[i].charAt(0).toUpperCase() + stringFiveArray[i].slice(1, ))
        }
        newStr = stringFiveWithCapitals.join(" ")
    }
    return newStr
}
var resultFive = allWordsCapital(stringFive)
console.log(resultFive)