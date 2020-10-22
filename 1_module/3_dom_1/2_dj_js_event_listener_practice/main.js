var squareVar = document.querySelector(".square")


//Blue when hovering over square
squareVar.addEventListener("mouseover", function() {
    squareVar.style.backgroundColor = "#5DADE2"
})

squareVar.addEventListener("mouseout", function() {
    squareVar.style.backgroundColor = "grey"
})


//Red When holding left click over square
squareVar.addEventListener("mousedown", function mouseState() {
    squareVar.style.backgroundColor = "#E63C38"
});

squareVar.addEventListener("mouseup", function mouseState() {
    squareVar.style.backgroundColor = "grey"
});

