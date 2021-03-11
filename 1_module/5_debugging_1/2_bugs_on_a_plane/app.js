var myForm = document.getElementById("airlineForm")
var submitButton = document.getElementById("submit")
//var query = document.querySelector

myForm.addEventListener("submit", formAlert)


function formAlert() {
        var firstName = myForm.elements["firstName"].value
        var lastName = myForm.elements["lastName"].value
        var age = myForm.elements["age"].value
        var gender = myForm.elements["gender"].value
        var location = myForm.elements["travelLocation"].value
        var diet = []
        if (myForm.elements["vegan"].checked) {
            diet.push(document.getElementById("vegan").value)
        }
        if (myForm.elements["gluten"].checked) {
            diet.push(document.getElementById("gluten").value)
        }
        if (myForm.elements["paleo"].checked) {
            diet.push(document.getElementById("paleo").value)
        }
        alert(
            "First Name: " +
                firstName +
                "\nLast Name: " +
                lastName +
                "\nAge: " +
                age +
                "\nGender: " +
                gender +
                "\nTravel Location: " +
                location +
                "\nDiet: " +
                diet +
                "\nAwesome, now if you die, it won't be an accident.."
        )
}
