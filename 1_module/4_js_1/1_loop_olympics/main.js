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

//---------------------SILVER---------------------

var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

//Write a loop that will print out all the names of the people of the people array

for (i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}

//Write a loop that pushes the names into a names array, and the occupations into an occupations array.

var names = []
var occupations = []

for (i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
}

console.log(names)
console.log(occupations)

//Write a loop that pushes every other name to an array starting with the first person,
//in this case "Harrison Ford", and every other occupation to another array
//starting with, in this case, "Singer".

var names = []
var occupations = []

for (i = 0; i < peopleArray.length; i++) {
    if (i % 2 == 0) {
        names.push(peopleArray[i].name)
    } else {
        occupations.push(peopleArray[i].occupation)
    }
}

console.log(names)
console.log(occupations)

//---------------------GOLD---------------------

//Create an array that mimics a grid like the following using nested for loops:
/*
[[0, 0, 0],
[0, 0, 0], 
[0, 0, 0]]
*/
var gridOne = []

for (var i = 0; i < 3; i++) {
    gridOne.push([])
    for (var j = 0; j < 3; j++) {
        gridOne[i].push(0)
    }
}

console.log(gridOne)

//Create an array that mimics a grid like the following using nested for loops:
/*
[[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]]
*/
var gridTwo = []

for (var i = 0; i < 3; i++) {
    gridTwo.push([])
    for (var j = 0; j < 3; j++) gridTwo[i].push(i)
}

console.log(gridTwo)

//Create an array that mimics a grid like the following using nested for loops:
/*
[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]
*/

var gridThree = []

for (var i = 0; i < 3; i++) {
    gridThree.push([])
    for (var j = 0; j < 3; j++) {
        gridThree[i].push(j)
    }
}

console.log(gridThree)

//Given a grid like the previous ones, write a nested for loop that would change every number to an x.
/*
var grid = [["x", ...], 
            ["x", ...], 
            ["x",...], ...]
*/

var gridFour = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
]


for (var i = 0; i < gridFour.length; i++) {
    for (var j = 0; j < gridFour[i].length; j++) {
        gridFour[i][j] = "x"
    }
}

console.log(gridFour)