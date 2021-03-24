
//---------------Variables---------------

const travelForm = document.getElementById("myForm")


//---------------Variables---------------
travelForm.addEventListener("submit", endAlert)


//---------------Functions---------------

function endAlert(event) {
    event.preventDefault()
    let fName = travelForm.firstName.value
    let lName = travelForm.lastName.value
    let age = travelForm.age.value

    alert("First Name: " + fName "\nLast Name: " + lName "\nAge: " + age)
}