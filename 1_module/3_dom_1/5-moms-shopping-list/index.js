//Adding some event listeners for styling and responsiveness

//Variables I'll Use a lot
var inputBox = document.getElementById("item-input")

var addItemButton = document.querySelector(".addButton")

var editButtons = document.querySelectorAll(".edit-button")

var deleteButtons = document.querySelectorAll(".delete-button")

var listContainer = document.getElementById("list")

var placeHolder = document.querySelector(".placeholderItem")



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




//Create list item and append to list
document.addItem.addEventListener("submit", function (e) {
    e.preventDefault()
    const listItem = createItem(e)

    inputBox.value = ""

    if (placeHolder !== null) {
        placeHolder.remove()
    } else {
        
    }

    listContainer.appendChild(listItem)
})














//Create Item Function
function createItem (e) {
    //create new li
    const listItem = document.createElement("li")

    //create name div and append it in li
    const listItemNameDiv = document.createElement("div")
    listItemNameDiv.setAttribute("class", "text-container")
    listItemNameDiv.innerHTML = document.addItem.itemInput.value
    listItem.appendChild(listItemNameDiv)

    //create button container and append to li
    const buttonHolder = document.createElement("div")
    buttonHolder.setAttribute("class", "button-container")
    listItem.appendChild(buttonHolder)

    //create edit button and append it to button container
    const editButtonNew = document.createElement("button")
    editButtonNew.setAttribute("class", "edit-button")
    editButtonNew.innerHTML = "edit"
    buttonHolder.appendChild(editButtonNew)

    editButtonNew.addEventListener("mouseover", function () {
        editButtonNew.style.backgroundColor = "#07748C"
    })
    
    
    editButtonNew.addEventListener("mouseout", function () {
        editButtonNew.style.backgroundColor = "#5D5C5D"
    })
    
    
    editButtonNew.addEventListener("mousedown", function () {
        editButtonNew.style.backgroundColor = "#044A59"
    })
    
    
    editButtonNew.addEventListener("mouseup", function () {
        editButtonNew.style.backgroundColor = "#07748C"
    })





    //create delete button and append it to button container
    const deleteButtonNew = document.createElement("button")
    deleteButtonNew.setAttribute("class", "delete-button")
    deleteButtonNew.innerHTML = "X"
    buttonHolder.appendChild(deleteButtonNew)

    deleteButtonNew.addEventListener("mouseover", function () {
        deleteButtonNew.style.backgroundColor = "#F2B705"
    })
    
    deleteButtonNew.addEventListener("mouseout", function () {
        deleteButtonNew.style.backgroundColor = "#5D5C5D"
    })
    
    deleteButtonNew.addEventListener("mousedown", function () {
        deleteButtonNew.style.backgroundColor = "#F2CB05"
    })
    
    deleteButtonNew.addEventListener("mouseup", function () {
        deleteButtonNew.style.backgroundColor = "#F2B705"
    })

    
    //delete button functionality
    deleteButtonNew.addEventListener("click", function (){
        listItem.remove()
    })


    return listItem
}