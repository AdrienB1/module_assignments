//arrays and variables used in functions
const enemyBucket = [
    "Henry the Hairless ape",
    "Gordon the Goldfish",
    "Wilson the whimsical wildebeast",
    "Mackey the talking mouse",
    "Pluto the pleased purlovia"
]

var lootArray = [
    "Silver Longsword",
    "Broken Arrow",
    "Health Potion",
    "Invisibility Potion",
    "Left Sock",
    "Fish Bowl",
    "Nice Tree Branch",
    "Bottle of Mead",
    "Shiny Maple Longbow",
    "Used Bag of Holding",
    "Old Baseball",
    "A Pair of Enchanted Running Shoes",
    "Glowstone",
    "Rusty Knife",
    "15 Gold",
    "Tattered Beanie",
    "A box Containing 10 Chicken Nuggets"
]

var playerHealth = 10

var playerInventory = []

//Readline use:
const readLine = require("readline-sync")

//Console must greet player with a fun message
//Console must ask for the player's name and store it
console.log("Hey, you... You're finally awake")
const userName = readLine.question("What is your name? ")
console.log(" ")
console.log(
    "We were knocked out after being teleported by an accidental alchemy explosion."
)
console.log("We seem to be lost within a large forest full of unknown dangers.")
console.log(
    "We can find the way out faster if we split up, please be careful, " +
        userName +
        "!"
)
console.log(" ")

/*
Walking:
The console will ask the user to enter a "w" to walk
Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
*/
var livingPlayer = true
while (livingPlayer == true) {
    var walkingPlayer = readLine
        .question(
            "Press 'w' to walk, or press 'p' or type 'print' to check the player inventory and HP. "
        )
        .toLowerCase()
    console.log(" ")
    if (walkingPlayer == "w") {
        //walking code
        let attackChance = randomEnemyChance(4)
        if (attackChance == 3) {
            //attacked code
            let enemyChosen = randomEnemy(5)
            var enemyHealth = 10
            console.log("A shape jumps out of the underbrush suddenly!")
            console.log("It is " + enemyChosen + "!")
            while (playerHealth > 0 && enemyHealth > 0) {
                let attackOrRun = readLine.question(
                    "Will you attack or run? ('a' or 'r') "
                )
                console.log(" ")
                if (attackOrRun == "a") {
                    //attack code
                    console.log("You strike out at your attacker! ")
                    let damageDealtToEnemy = amountOfDamage(11)
                    var enemyHealth = enemyHealth - damageDealtToEnemy
                    console.log("You dealt " + damageDealtToEnemy + " damage!")
                    console.log(
                        "Your enemy has " + enemyHealth + " HP remaining!"
                    )
                    console.log(" ")
                    if (enemyHealth > 0) {
                        //Enemy Attack
                        console.log(
                            enemyChosen + " survived the hit, and strikes back!"
                        )
                        let damageDealtToPlayer = amountOfDamage(9)
                        var playerHealth = playerHealth - damageDealtToPlayer
                        console.log(
                            "You take " +
                                damageDealtToPlayer +
                                " points of damage."
                        )
                        console.log(
                            "You have " + playerHealth + " HP remaining!"
                        )
                        console.log(" ")
                        if (playerHealth <= 0) {
                            console.log(
                                "Your foe dealt " +
                                    damageDealtToPlayer +
                                    " damage and has bested you!"
                            )
                            console.log(" ")
                            console.log("You have died.")
                            var livingPlayer = false
                            break
                        }
                    } else {
                        //Enemy Dead
                        console.log(
                            "Your foe has fallen! The path forward is now clear."
                        )
                        //heal code
                        var amountHealed = randomHeal(11 - playerHealth)
                        var playerHealth = playerHealth + amountHealed
                        console.log(
                            "You also gained " + amountHealed + " HP back!"
                        )
                        console.log(
                            "You now have " + playerHealth + " HP remaining."
                        )
                        console.log(" ")
                        //Loot Code
                        var itemIndex = randomItemSelection(lootArray.length)
                        var itemWon = lootArray[itemIndex]
                        var lootArray = removeItem(lootArray, itemWon)
                        playerInventory.push(itemWon)
                        console.log("You also found some loot!")
                        console.log(itemWon + " was added to your inventory.")
                    }
                } else if (attackOrRun == "r") {
                    //run code
                    console.log("You attempt to flee!")
                    let runAwaySuccess = runAwayChance(2)
                    if (runAwaySuccess == 0) {
                        console.log("You couldn't get away fast enough! ")
                    } else {
                        console.log(
                            "You ran to safety! The path forward is now clear."
                        )
                        var enemyHealth = 0
                    }
                } else {
                    //if the user does not enter an a or r
                    console.log(
                        "I did not understand, please enter 'a' to attack, or 'r' to run."
                    )
                    console.log(" ")
                }
            }
            //Not Attacked Messages
        } else if (attackChance == 0) {
            console.log("You take a few steps forward, you feel alone.")
            console.log(" ")
        } else if (attackChance == 1) {
            console.log("You move forward a few paces, though you feel uneasy.")
            console.log(" ")
        } else {
            console.log(
                "You step carefully onward, and feel as if you are being watched."
            )
            console.log(" ")
        }
        //Checking Inventory, name, and HP using 'p' or 'print'
    } else if (walkingPlayer == "p") {
        console.log("You check your inventory and HP, you currently have: ")
        console.log(userName + "'s HP: " + playerHealth)
        console.log("------------------------------")
        console.log(playerInventory)
    } else if (walkingPlayer == "print") {
        console.log("You check your inventory and HP, you currently have: ")
        console.log(userName + "'s HP: " + playerHealth)
        console.log("------------------------------")
        console.log(playerInventory)
    } else {
        //if user does not enter 'w'
        console.log(
            "I did not understand, please enter 'w' to walk, or press 'p' or type 'print' to check the player inventory and HP."
        )
        console.log(" ")
    }
}

//Placed this here to reference it during project work

/*
If a wild enemy appears:
The enemy is random (can be chosen out of a minimum of 3 different enemy names)
The user can decide to attack or run
If attacking, a random amount of damage will be delt between a min and max
If running, there will be a 50% chance of escaping
After the player attacks or runs the enemy attacks back for a random damage amount
If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking. Use a while loop to control this flow.
If the enemy kills the player the console prints a cool death message and the game ends
*/

/*
Inventory
When the player kills enemies, they are awarded with items
If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory
*/

// ---------- Functions ----------
function randomEnemyChance(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function randomEnemy(max) {
    let enemy = enemyBucket[randomEnemyChance(max)]
    return enemy
}

function amountOfDamage(max) {
    let damage = randomEnemyChance(max)
    return damage
}

function randomHeal(max) {
    let heal = Math.floor(Math.random() * Math.floor(max))
    return heal
}

function runAwayChance(max) {
    let runChance = randomEnemyChance(max)
    return runChance
}

function randomItemSelection(max) {
    let item = randomEnemyChance(max)
    return item
}

function removeItem(arr, value) {
    var index = arr.indexOf(value)
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr
}
