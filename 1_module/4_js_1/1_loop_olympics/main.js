//---------------------PRELIMINARIES---------------------

//Write a for loop that prints to the console the numbers 0 through 9.

for (i = 0; i <= 9; i++) {
    console.log(i)
}



//Write a for loop that prints to the console 9 through 0.

for (i = 9; i >= 0; i--) {
    console.log(i)
}



//Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi"]

for (i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}



//---------------------BRONZE---------------------

//Write a for loop that will push the numbers 0 through 9 to an array.
var nineSoon = []

for (i = 0; i <= 9; i++) {
    nineSoon.push(i)
}

console.log(nineSoon)



//Write a for loop that prints to the console only even numbers 0 through 100.
var evenNumbers = []

for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        evenNumbers.push(i)
    } else {

    }
}

console.log(evenNumbers)


//Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

var otherFruit = []

for (i = 0; i < fruit.length; i++) {
    if (i % 2 !== 0) {
        otherFruit.push(fruit[i])
    } else {

    }
}

console.log(otherFruit)