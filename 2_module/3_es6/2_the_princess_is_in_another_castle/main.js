// Requirements:
// - Create a class for a player that has the following properties:
//  - 'name' of type 'String'
//  - 'totalCoins' of type 'Number'
//  - 'status' of type 'String' (options are 'Powered Up', 'Big','Small', and 'Dead')
//  - 'hasStar' of type 'Boolean' (Is a star active?)
//  - 'setName' of type 'function' - Has a parameter called 'namePicked' where you pass in "Mario" or "Luigi". Sets name to "Mario" or "Luigi".
//  - 'gotHit' of type 'function' - this is called whenever the player is hit by an enemy. 'gotHit()' will set the status property accordingly.
//      (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
//  - 'gotPowerup' of type 'function' - called when a powerup is received and sets the status accordingly.
//      (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)
//  - 'addCoin' of type 'function' - adds a coin to 'totalCoins'
//  - 'print' of type 'function' - prints to the console the 'name', 'totalCoins', 'status', and 'star' properties.
//      Make sure you make this look nice such as:
//       - Name: Luigi,
//       - Status: Small, etc, etc

/* 
Use that class to create the object.

Create a 'random range function' that returns either 0, 1, or 2.
If the value is 0 call the `gotHit()` function on the object
If the value is 1 call the `gotPowerup()` function on the object
If the value is 2 call the `addCoin()` function

Then call the print method on the object.

Now put the random range function inside a `setInterval` function that ends after the player is dead
*/

class Player {
    constructor(name, totalCoins = 0, status = "Powered Up", hasStar = false) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked) {
        if (namePicked === "Mario") {
            this.name = "Mario"
        } else if (namePicked === "Luigi") {
            this.name = "Luigi"
        }
    }

    gotHit() {
        if (this.hasStar == false) {
            if (this.status == "Powered Up") {
                this.status = "Big"
            } else if (this.status == "Big") {
                this.status = "Small"
            } else {
                this.status = "Dead"
            }
        } else {
            this.status = "Powered Up"
            console.log(" - Your Star protected you!")
        }
    }

    getPowerup() {
        if (this.status == "Powered Up") {
            this.hasStar = true
            console.log(" - You got a Star!")
        } else if (this.status == "Big") {
            this.status = "Powered Up"
        } else {
            this.status = "Big"
        }
    }

    addCoin() {
        this.totalCoins++
        console.log(" - You got a coin!")
    }

    print() {
        if (this.status !== "Dead") {
            if (this.hasStar == false) {
                console.log(
`Name: ${this.name}
Total Coins: ${this.totalCoins}
Status: ${this.status}
You have no Star, sad :(`
                )
            } else {
                console.log(
`Name: ${this.name}
Total Coins: ${this.totalCoins}
Status: ${this.status}
You have a Star! Yes!`
                )
            }
        } else {
            console.log(
`You have died!
Name: ${this.name}
Total Coins: ${this.totalCoins}
Status: ${this.status}
Your final score is: ${this.totalCoins}`
            )
        }
    }
}

const playerOne = new Player("Mario", 0, "Powered Up", false)

function rngesus(min = 0, max = 3) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function playFlow(player) {
    if (player.status !== "Dead") {
        const fate = rngesus()
        if (fate == 0) {
            player.gotHit()
            player.print()
        } else if (fate == 1) {
            player.getPowerup()
            player.print()
        } else {
            player.addCoin()
            player.print()
        }
    } else {
        player.print()
        clearInterval(bestInterval)
    }
}

//bestInterval = setInterval(playFlow(playerOne), 1000)

console.log(playFlow(playerOne))