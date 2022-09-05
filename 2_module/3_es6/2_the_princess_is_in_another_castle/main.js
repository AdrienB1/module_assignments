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