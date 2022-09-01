// <><><><> **`let` and `const`** <><><><>
/*
Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this 
continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). 
You only need to delete `var` and insert `let` and `const` John is the pet owner, 
and his name should be stored differently than the other names.
*/
const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name = ""
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// <><><><><> **ES6 Arrow Functions** <><><><><>
/* 
<><><> **Task 1** <><><>
Re-write this `.map()` using an arrow function:
Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, 
and not starting an object, so the `:` will be an unexpected symbol.
*/
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function (carrot) {
        return { type: "carrot", name: carrot }
    })
}

/* 
<><><> **Task 2** <><><>
Re-write this `.filter()` ’s callback function using an arrow function:
*/
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(function (person) {
        return person.friendly
    })
}

/* 
<><><> **Task 3** <><><> 
Re-write the following functions to be arrow functions:
*/
function doMathSum(a, b) {
    return a + b
}

var produceProduct = function (a, b) {
    return a * b
}

/* 
<><><> **Task 4** <><><>
Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and 
returns a string like the following:

 > Hi Kat Stark, how does it feel to be 40?

`firstName` should default to `"Jane"lastName` should default to `"Doe"age` should default to `100`

**Extra Credit**
Use template literals to build the string
*/

/* 
<><><> **Task 5** <><><>
Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
*/
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
]

function filterForDogs(arr) {
    return arr.filter((animal) => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}





// <><><><><><><><><><><><><><><><><> Helpful Notes <><><><><><><><><><><><><><><><><><><>
// <><><><><> Template Literals <><><><><>
/* 
Using template literals, write a function that takes location and name parameters and outputs a message 
formatted like this:

> Hi Janice!
> Welcome to Hawaii.
> I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

These are designed for making our strings easier to read and write.
*/

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// <><><><><> Templating <><><><><>
/* 
This special syntax is called template literals, string templates, and other similar things.
They utilize the "back tick." This symbol -> `. It's just left of the "1" on your keyboard. 
We put our entire string inside two back ticks, and we use a dollar sign and curly brackets to 
insert JavaScript variables and expressions into.

We used to concatenate strings like so:
> let name = "Jacob";
> let age = 20;
> console.log("hello, my name is " + name + " and I am " + age + " years old.");

but now we can use the following syntax:
> console.log(`hello, my name is ${name} and I am ${age} years old.`);


This is easier to read and write, we can easily identify where the JavaScript variables are, and it takes up less room. 
All those quotes and "+"s in the old way are way to easy to mess up. Start using the ES6 way!

You can also insert JavaScript expressions into the curly brackets.
> console.log(`hello, my name is ${name}. Next year, I will be ${age + 1} years old`);
*/
