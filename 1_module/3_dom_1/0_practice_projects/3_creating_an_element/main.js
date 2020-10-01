var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
myList.prepend(newLi)

/*
 * Challenge:
 * 
 * Add a paragraph after the existing unordered 
 * list with any text you want inside.
 * Do this completely in JavaScript!
 */

var newPara = document.createElement("p")
newPara.textContent = "This paragraph is very meaningful and is honestly my best friend at this point so don't try anything I have his back!"
var bodyVar = document.querySelector(".body")

bodyVar.after(newPara)

