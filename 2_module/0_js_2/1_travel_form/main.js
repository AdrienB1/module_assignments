//---------------Variables---------------
const travelForm = document.getElementById("myForm")

//---------------Variables---------------
travelForm.addEventListener("submit", endAlert)

//---------------Styling---------------
const textInputs = document.querySelectorAll(".inputBox")

textInputs[0].addEventListener("focus", edgeGlow)
textInputs[0].addEventListener("blur", removeEdgeGlow)

textInputs[1].addEventListener("focus", edgeGlow)
textInputs[1].addEventListener("blur", removeEdgeGlow)

textInputs[2].addEventListener("focus", edgeGlow)
textInputs[2].addEventListener("blur", removeEdgeGlow)

travelForm.location.addEventListener("focus", edgeGlow)
travelForm.location.addEventListener("blur", function() {
    travelForm.location.style.boxShadow = "none"
})

travelForm.submitButton.addEventListener("mouseover", function() {
    travelForm.submitButton.style.backgroundColor = "#F2B885"
    travelForm.submitButton.style.color = "black"
})
travelForm.submitButton.addEventListener("mouseout", function() {
    travelForm.submitButton.style.backgroundColor = "#35478C"
    travelForm.submitButton.style.color = "white"
})
travelForm.submitButton.addEventListener("mousedown", function() {
    travelForm.submitButton.style.backgroundColor = "#F2937E"
})
travelForm.submitButton.addEventListener("mouseup", function() {
    travelForm.submitButton.style.backgroundColor = "#F2B885"
})

//---------------Functions---------------

function edgeGlow() {
    document.activeElement.style.boxShadow = "0 0 4px 1px #F2CD88"
}

function removeEdgeGlow() {
    for(i = 0; i < textInputs.length; i++) {
        textInputs[i].style.boxShadow = "none"
    }
}

function endAlert() {
    let fName = travelForm.firstName.value
    let lName = travelForm.lastName.value
    let age = travelForm.age.value
    let gender = travelForm.gender.value
    let location = travelForm.location.value
    let dietArray = travelForm.diet
    let dietChoices = []

    for (i = 0; i < dietArray.length; i++) {
        if (dietArray[i].checked) {
            dietChoices.push(dietArray[i].value)
        }
    }

    alert(
        "First Name: " +
            fName +
            "\nLast Name: " +
            lName +
            "\nAge: " +
            age +
            "\nGender: " +
            gender +
            "\nDestination: " +
            location +
            "\nDiet:" +
            dietChoices
    )
}
