var squareVar = document.querySelector(".square")


//Blue when hovering over square
squareVar.addEventListener("mouseover", function() {
    squareVar.style.backgroundColor = "#5DADE2"
})

//Red When holding left click over square
squareVar.addEventListener("mousedown", function() {
    squareVar.style.backgroundColor = "#E63C38"
});

//Yellow when letting go of left click over the square
squareVar.addEventListener("mouseup", function() {
    squareVar.style.backgroundColor = "#FFF852"
});

//Green on double click
squareVar.addEventListener("dblclick", function() {
    squareVar.style.backgroundColor = "#4BC94D"
});

//Declare html element as a variable
var entireWindow = document.querySelector("html")

//Orange on mouse wheel somewhere in the window
entireWindow.addEventListener("wheel", function() {
    squareVar.style.backgroundColor = "#FF8A3C"
});