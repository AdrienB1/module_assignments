// Assigns the readline-sync package to a variable
const readLine = require("readline-sync")

/* Pseudo-code plan:

If door optioon is chosen While the "key held" variable equals no, the code will repeat to ask the user what s/he wants to do

If the hole option is chosen, loop will end and give "lose" message. 

If the door option is chosen while the key is not held, they will receive a message telling them to find the key, code will repeat. 

If the key option is chosen, code will ask for hole or door option, kill if hole, win if door.
*/
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
//Initial Info Code

/*
var userName = readLine.question ('Enter your name. ')
console.log ("We are going to play a game, " + userName + ".")
console.log ("The rules are simple; you find yourself locked in a room.")
console.log ("You must escape the room, and in order to do that, you must first find a key for the locked door.")
console.log ("There is also a mysterious hole in the wall, which will kill you if you put your hand in it.")
console.log ("Proceed with caution.")
console.log (" ")

console.log ("You have three choices:")
console.log ("1. Put hand in hole")
console.log ("2. Find the key")
console.log ("3. Open the door")
console.log (" ")
var choiceOne = readLine.question ('What would you like to do? (1, 2, or 3) ')
*/

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
//Attempt 1

/*
if (choiceOne == 1) {
    console.log ("You died.")
} else if (choiceOne == 2) {
    console.log ("You found the key!")
    console.log ("Your options now are: ")
    console.log ("1. Put hand in hole")
    console.log ("3. Find the key")
    var choiceTwo = readLine.question ('What would you like to do next? ')
}
*/

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// Attempt 2

/*
while (keyHeld == false) {
    if (choiceOne == 1) {
        console.log ("You died.")
    } else if (choiceOne == 2) {
        console.log ("You found the key!")
        let keyHeld = true 
        console.log (" ")
        while (keyHeld == True) {
            console.log ("You now have two options:")
            console.log ("1. Put hand in hole")
            console.log ("2. Open the door")
            console.log (" ")
            var choiceTwo = readLine.question ('What would you like to do now? (1, or 2)')
            if (choiceTwo == 1) {
                console.log ("You died.")
            } else if (choiceTwo == 2) {
                console.log ("You Won! Congratulations!")
            } else {
                console.log ("Please enter the number of the desired option.")
            }
        }
    } else if (choiceOne == 3) {
        console.log ("You must first find the key.")
    } else {
        console.log ("Please enter the number of the desired option.")
    }
}
*/

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// Attempt 3

/*
if (choiceOne == 1) {
    console.log ("You put your hand in the hole and are instantly killed. The end. ")
} else if (choiceOne == 2) {
    console.log ("You found the key! ")
    let keyHeld = true
} else if (choiceOne == 3) {
    while (keyHeld = false) {
        console.log ("You try the door, but it is locked. You must find a key. ")
        let choiceTwo = readLine.question ('What would you like to do next? ')
    }
    while (keyHeld == true) {
        console.log ("You unlocked the door with the key and escaped Congratulations, you win!")
        let keyHeld = false
    }
} else {
    console.log ("Please choose the number for the desired option.")
}
*/

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// Attempt 4 (IT WORKS 😄) v

let key = false
var userName = readLine.question("Enter your name. ")
console.log("We are going to play a game, " + userName + ".")
console.log("The rules are simple; you find yourself locked in a room.")
console.log(
    "You must escape the room, and in order to do that, you must first find a key for the locked door."
)
console.log(
    "There is also a mysterious hole in the wall, which will kill you if you put your hand in it."
)
console.log("Proceed with caution.")
console.log(" ")

console.log("You have three choices:")
console.log("1. Put hand in hole")
console.log("2. Find the key")
console.log("3. Open the door")
console.log(" ")

while (key == false) {
    var choiceOne = readLine.question(
        "What would you like to do? (1, 2, or 3) "
    )
    console.log(" ")
    if (choiceOne == 1) {
        console.log(
            "You put your hand in the hole and are instantly killed. The end. "
        )
        console.log(" ")
        break
    } else if (choiceOne == 2) {
        let key = true
        console.log(
            "You take a look around the room, seeing various piles of rubble and dust. "
        )
        console.log(
            "Underneath a scrap of paper in a dim corner, you see a glint. "
        )
        console.log("You found the key! ")
        console.log(" ")
        while ((key == true)) {
            var choiceTwo = readLine.question(
                "Now that you have the key, what would you like to do? "
            )
            console.log(" ")
            if (choiceTwo == 1) {
                console.log(
                    "You, unfortunately, put your hand in the hole and are instantly killed. The end. "
                )
                console.log(" ")
                break
            } else if (choiceTwo == 2) {
                console.log(
                    "You take another look around, and find nothing but rubble and dust. "
                )
                console.log(
                    "You then realize you were holding the key the entire time you were looking. "
                )
                console.log(" ")
            } else if (choiceTwo == 3) {
                console.log("You try the key in the lock, and it works! ")
                console.log(
                    "You open the door and walk out into fresh air and sunlight. "
                )
                console.log(" ")
                console.log("You won!")
                break
            } else {
                console.log(
                    "That input was not understood, please use one of the specified numbers (1, 2, 3) "
                )
                console.log(" ")
                console.log("Your options are: ")
                console.log("1. Put hand in hole ")
                console.log("2. Find the key ")
                console.log("3. Open the door ")
                console.log(" ")
            }
        }
        break
    } else if (choiceOne == 3) {
        console.log("You try the door, but it is locked. You must find a key. ")
        console.log(" ")
    } else {
        console.log(
            "That input was not understood, please use one of the specified numbers (1, 2, 3) "
        )
        console.log(" ")
    }
}
