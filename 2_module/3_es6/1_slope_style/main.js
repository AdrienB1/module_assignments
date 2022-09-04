/* Use the <Rest Operator> to help this function return an array of animals, 
no matter how many animals are passed to it: */

function collectAnimals(...animals) {
    return animals
}

console.log(
    collectAnimals(
        "ferret",
        "tiger",
        "great dane",
        "ladybug",
        "perry the platypus"
    )
)

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

/* Write a function that returns a food object with the array names as properties. 
You'll use an ES6 shorthand syntax that becomes useful when a variable name is 
mentioned twice in both the name and value of properties in your object: */

function combineFruit(fruits, sweets, vegetables) {
    return {fruits, sweets, vegetables}
}

console.log(combineFruit(["banana", "orange"], ["scone", "pie"], ["tomato"]))

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

/* Use destructuring to use the property names as variables. 
Destructure the object in the parameter: */

//Hint - This function is expecting two variables to be defined in the parameter list.

const parseSentence = ({location, duration}) => `We're going to have a good time in ${location} for ${duration}`

console.log(
    parseSentence({
        location: "New Zealand",
        duration: "1 month"
    }))

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

/* Use array destructuring to make this code ES6: */

// Hint - const [varIMakeUpRightHereForTheFirstItemInTheArray] = arr
// does the same thing as:
// const varIMakeUpRightHereForTheFirstItemInTheArray = arr[0]

const itemsArray = ["potion", "cool sword", "blue hat"]

function returnFirst(items) {
    const [firstItem] = items /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst(itemsArray))

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

/* Write destructuring code to assign variables that will help us return 
the expected string. Also, change the string to be using Template literals: */

const favoriteActivities = [
    "writing",
    "playing games",
    "drawing",
    "sleeping",
    "eating"
]

function returnFavorites(arr) {
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities))

//<><><><><><><><><><><><><><><><><><><><><><> Blue Square Section <><><><><><><><><><><><><><><><><><><><><><><>

/* Use the Rest and Spread Operator to help take any number of arrays, 
and return one array. You will need to change how the arrays are passed in. 
You may write it assuming you will always recieve three arrays if you would like to. */

function combineAnimals(...animals) {
    const result = animals.reduce((final, arr) => {
            final.push(...arr)
            return final
        }, [])
    return result
}

const realAnimals = ["dog", "cat", "panda bear"]
const magicalAnimals = ["unicorn", "chupacabra"]
const mysteriousAnimals = ["eel"]

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//<><><><><><><><><><><><><><><><><><><><><><> Black Diamond Section <><><><><><><><><><><><><><><><><><><><><><><>

/* Try to make the following function more ES6y: */

function myProduct(...numbers) {
    return numbers.reduce((acc, number) => acc * number, 1)
}

console.log(myProduct(1, 2, 2, 2))

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

/* Make the following function more ES6y. Use at least both the rest and spread operators: */

function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array)
}

//<><><><><><><><><><><><><><><><><><><><><><> Double Black Diamond Section <><><><><><><><><><><><><><><><><><><>

/* Write some destructuring code to help this function out. Use the ES6 shorthand that 
helps make the syntax look less redundant to simplify it: */

function populatePeople(names) {
    return names.map(function (name) {
        name = name.split(" ")
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
