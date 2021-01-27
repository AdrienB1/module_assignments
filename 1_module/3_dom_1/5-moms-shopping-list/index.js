//Adding some event listeners for styling and responsiveness

//Variables I'll Use a lot
var inputBox = document.getElementById("item-input")

var addItemButton = document.querySelector(".addButton")

var editButtons = document.querySelectorAll(".edit-button")

var deleteButtons = document.querySelectorAll(".delete-button")


//Input box highlight
inputBox.addEventListener("focus", function () {
    inputBox.style.boxShadow = "0 0 5px 1px #044A59"
})

inputBox.addEventListener("blur", function () {
    inputBox.style.boxShadow = "none"
})


//Add item button highlight and click
addItemButton.addEventListener("mouseover", function () {
    addItemButton.style.backgroundColor = "#044A59"
})

addItemButton.addEventListener("mouseout", function () {
    addItemButton.style.backgroundColor = "#404040"
})

addItemButton.addEventListener("mousedown", function () {
    addItemButton.style.backgroundColor = "#022E40"
})

addItemButton.addEventListener("mouseup", function () {
    addItemButton.style.backgroundColor = "#044A59"
})


//Add item button highlight and click
editButtons.forEach( item => { item.addEventListener("mouseover", function () {
    item.style.backgroundColor = "#07748C"
})
})

editButtons.forEach( item => { item.addEventListener("mouseout", function () {
    item.style.backgroundColor = "#5D5C5D"
})
})

editButtons.forEach( item => { item.addEventListener("mousedown", function () {
    item.style.backgroundColor = "#044A59"
})
})

editButtons.forEach( item => { item.addEventListener("mouseup", function () {
    item.style.backgroundColor = "#07748C"
})
})


//Edit button highlight and click
deleteButtons.forEach( item => { item.addEventListener("mouseover", function () {
    item.style.backgroundColor = "#F2B705"
})
})

deleteButtons.forEach( item => { item.addEventListener("mouseout", function () {
    item.style.backgroundColor = "#5D5C5D"
})
})

deleteButtons.forEach( item => { item.addEventListener("mousedown", function () {
    item.style.backgroundColor = "#F2CB05"
})
})

deleteButtons.forEach( item => { item.addEventListener("mouseup", function () {
    item.style.backgroundColor = "#F2B705"
})
})