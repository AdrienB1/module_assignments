


// <><><><><><><><><> QUALIFIER <><><><><><><><><> //


///////// H2 creation and placement /////////

// select header and assign it to variable
var headerVar = document.querySelector("#header")

// create H2 and assign it to variable
var newH2 = document.createElement("h2")

// assign text to H2
newH2.innerHTML = "JavaScript Made This!!"

// append newH2 to header parent
headerVar.append(newH2)


///////// H3 creation and placement /////////

// create H3 and assign it to variable
var newH3 = document.createElement("h3")

// assign text to H3
newH3.innerHTML = "wrote the JavaScript"

// append newH3 to header parent
headerVar.append(newH3)

// create span for name
var nameSpan = document.createElement("span")

// put name in nameSpan variable
nameSpan.innerHTML = "Adrien "

// append nameSpan to newH3
newH3.prepend(nameSpan)


///////// header and h2/h3 styles /////////

// header Styles
headerVar.style.height = "80px"
headerVar.style.width = "100%"
headerVar.style.padding = "2px"
headerVar.style.display = "flex"
headerVar.style.justifyContent = "center"
headerVar.style.justifyContent = "space-evenly"
headerVar.style.alignItems = "flex-start"
headerVar.style.alignItems = "center"
headerVar.style.flexDirection = "column"

// H2 styles
newH2.style.margin = "0px"

// H3 styles
newH3.style.margin = "0px"

// nameSpan styles
nameSpan.style.color = "#70B7BA"



// <><><><><><><><><> BRONZE <><><><><><><><><> //


///////// selecting messages /////////

// select message container and assign it to a variable
var messageContainer = document.querySelector(".messages")

// select left messages and assign them to array
var leftMessages = messageContainer.getElementsByClassName("message left")

// select right messages and assign them to array
var rightMessages = messageContainer.getElementsByClassName("message right")

// select all messages and assign them to array
var allMessages = messageContainer.getElementsByClassName("message")


///////// change message content ///////// 

// select first left message and change content
leftMessages[0].innerHTML = "What do you call it when Batman skips church?"

// select first right message and change content
rightMessages[0].innerHTML = "Oh no.. What?"

// select second left message and change content
leftMessages[1].innerHTML = "A Christian Bale! 😄"

// select second right message and change content
rightMessages[1].innerHTML = "Oh my god... How are we friends, lol?"


///////// setting event listener(s) for clear button /////////

// select clear button and assign it to variable
var clearButton = document.getElementById("clear-button")

// change clear button color when hovering over it, revert when not
clearButton.addEventListener("mouseover", function() {
    clearButton.style.color = "white"
    clearButton.style.backgroundColor = "#BA8D70"
})

clearButton.addEventListener("mouseout", function() {
    clearButton.style.color = "black"
    clearButton.style.backgroundColor = "#E6E6E6"
})

// event listener which clears messages upon clicking the clear button, change color to indicate click
clearButton.addEventListener("mousedown", function() {
    clearButton.style.backgroundColor = "#6D4C37"
    for (i = allMessages.length - 1; i >= 0; i--) {
        allMessages[i].remove()
    }
})

clearButton.addEventListener("mouseup", function() {
    clearButton.style.backgroundColor = "#BA8D70"
})



// <><><><><><><><><> SILVER <><><><><><><><><> //


///////// selecting drop down and setting event listeners /////////

