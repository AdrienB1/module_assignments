//---------------Variables---------------

const travelForm = document.getElementById("myForm")

//---------------Variables---------------
travelForm.addEventListener("submit", endAlert)

//---------------Functions---------------

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
