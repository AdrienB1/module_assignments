

//--------------------Variables------------------------

//Forms
const addForm = document.getElementById("addForm")
const subtractForm = document.getElementById("subtractForm")
const multiplyForm = document.getElementById("multiplyForm")

//Result Fields
const addResultField = document.getElementById("addResult")
const subtractResultField = document.getElementById("subtractResult")
const multiplyResultField = document.getElementById("multiplyResult")

//submit buttons
const addSubmitButton = document.querySelector(".addSubmit")
const subtractSubmitButton = document.querySelector(".subtractSubmit")
const multiplySubmitButton = document.querySelector(".multiplySubmit")

//------input fields------

//all
const allFields = document.querySelectorAll(".numberField")

//addition
const addNumberOne = document.querySelector(".addOne")
const addNumberTwo = document.querySelector(".addTwo")

//subtraction
const subtractNumberOne = document.querySelector(".subtractOne")
const subtractNumberTwo = document.querySelector(".subtractTwo")

//multiplication
const multiplyNumberOne = document.querySelector(".multiplyOne")
const multiplyNumberTwo = document.querySelector(".multiplyTwo")


//----------Addition Code----------

addForm.addEventListener("submit", addFunction)










//--------------------styling event listeners--------------------

//number fields
addNumberOne.addEventListener("focus", focusGlow)
addNumberOne.addEventListener("blur", removeFocusGlow)

addNumberTwo.addEventListener("focus", focusGlow)
addNumberTwo.addEventListener("blur", removeFocusGlow)

subtractNumberOne.addEventListener("focus", focusGlow)
subtractNumberOne.addEventListener("blur", removeFocusGlow)

subtractNumberTwo.addEventListener("focus", focusGlow)
subtractNumberTwo.addEventListener("blur", removeFocusGlow)

multiplyNumberOne.addEventListener("focus", focusGlow)
multiplyNumberOne.addEventListener("blur", removeFocusGlow)

multiplyNumberTwo.addEventListener("focus", focusGlow)
multiplyNumberTwo.addEventListener("blur", removeFocusGlow)

//submit buttons
addSubmitButton.addEventListener("mousedown", e => {
    addSubmitButton.style.backgroundColor = "#90CBFB"
})

addSubmitButton.addEventListener("mouseup", e => {
    addSubmitButton.style.backgroundColor = "#003F63"
})


//--------------------Functions--------------------

function focusGlow() {
    document.activeElement.style.boxShadow = "0 0 4px 1px #110066"
}

function removeFocusGlow() {
    for(i = 0; i < allFields.length; i++) {
        allFields[i].style.boxShadow = "none"
    }
}

function addFunction(event) {
    event.preventDefault()
    let numOne = event.target.numberOne.value
    let numTwo = event.target.numberTwo.value
    let numOneConverted = parseInt(numOne)
    let numTwoConverted = parseInt(numTwo)
    let result = numOneConverted + numTwoConverted
    addResultField.innerHTML = result
}

