/* 1 -
Write a function that takes an array of numbers and returns the largest (without using Math.max())
EX: largest([3, 5, 2, 8, 1]) // => 8
*/
var numbersArray = [3, 8, 1, 5, 12, 9, 2]

function largestNumber(numbersArray) {
    var largest = 0
    for (let i = 0; i < numbersArray.length; i++) {
        for (let c = 0; c < numbersArray.length; c++) {
            if (largest <= numbersArray[i]) {
                var largest = numbersArray[i]
            } else {
                var largest = numbersArray[c]
            }
        }
    }
    return largest
}

let largestNumberYes = largestNumber(numbersArray)

console.log(largestNumberYes)



/* 2 -
Write a function that takes an array of words and a character and returns each word that has that character present.
EX: lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]
*/



/* 3 -
Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
EX: 
isDivisible(4, 2) // => true
isDivisible(9, 3) // => true
isDivisible(15, 4) // => false
*/



