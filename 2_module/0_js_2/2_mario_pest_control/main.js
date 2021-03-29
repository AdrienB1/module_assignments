// ------------------------------ Variables ------------------------------

//form
const listForm = document.getElementById("listForm")

//total display element
const totalDisplay = document.getElementById("totalDisplay")

//goomba input box
const inputOne = document.getElementById("goombaInputBox")

//bob-omb input box
const inputTwo = document.getElementById("bobombInputBox")

//cheep-cheep input box
const inputThree = document.getElementById("cheepcheepInputBox")

//all input boxes array
const allInputs = document.querySelectorAll(".numberInput")


// ------------------------------ style event listeners ------------------------------

inputOne.addEventListener("focus", inputGlow)
inputOne.addEventListener("blur", removeInputGlow)
inputTwo.addEventListener("focus", inputGlow)
inputTwo.addEventListener("blur", removeInputGlow)
inputThree.addEventListener("focus", inputGlow)
inputThree.addEventListener("blur", removeInputGlow)


// ------------------------------ input and display total event listeners ------------------------------

inputOne.addEventListener("change", mathGuy)
inputTwo.addEventListener("change", mathGuy)
inputThree.addEventListener("change", mathGuy)



// ------------------------------ functions ------------------------------

function inputGlow() {
    document.activeElement.style.boxShadow = "0 0 7px 0.1px #FE0002"
}

function removeInputGlow() {
    for(i = 0; i < allInputs.length; i++) {
        allInputs[i].style.boxShadow = "none"
    }
}

function mathGuy() {
    //check goomba input for number
    if (allInputs[0].value !== "") {
        var gCatch = allInputs[0].value
    } else {
        var gCatch = 0
    }
    //check bobomb input for number
    if (allInputs[1].value !== "") {
        var bCatch = allInputs[1].value
    } else {
        var bCatch = 0
    }
    //check cheep input for number
    if (allInputs[2].value !== "") {
        var cCatch = allInputs[2].value
    } else {
        var cCatch = 0
    }

    let goombaPrice = gCatch * 5
    let bobombPrice = bCatch * 7
    let cheepPrice = cCatch * 11

    let totalEarned = goombaPrice + bobombPrice + cheepPrice

    totalDisplay.innerHTML = totalEarned
}