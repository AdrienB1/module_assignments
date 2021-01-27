//Adding some event listeners for styling and responsiveness

//Variables I'll Use a lot
var inputBox = document.getElementById("item-input")

//Input box highlight
inputBox.addEventListener("focus", function () {
    inputBox.style.boxShadow = "0 0 5px 1px #044A59"
})

inputBox.addEventListener("blur", function () {
    inputBox.style.boxShadow = "none"
})



