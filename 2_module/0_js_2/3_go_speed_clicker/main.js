//variables leading to DOM elements
const clickCountDisplay = document.querySelector(".clickCountSpan")
const timerDisplay = document.querySelector(".timeSpan")
const clickSpace = document.querySelector("body")
let savedClicks = 0

//check for saved click count and set after refresh to preserve user data using web storage
if (isNaN(Number(sessionStorage.getItem(savedClicks))) == false) {
    clickCountDisplay.innerHTML = sessionStorage.getItem(savedClicks)
}

//Check whether the content of the click count display is a number,
//if it is, set the font color back to white
if (isNaN(Number(document.querySelector(".clickCountSpan").innerHTML))) {
    clickCountDisplay.style.color = "grey"
    //if it is, set click count to the value of click count display + 1
} else {
    clickCountDisplay.style.color = "black"
}

//reset a glabal "has clicked at least once" variable to false so the timer doesn't start
let hasClicked = false

//track how many times the user has clicked anywhere on the page
clickSpace.addEventListener("click", countClick)

//using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed

//Extra credit: Put a 30 sec. countdown timer on the page that stops clicks from counting after the timer ends
clickSpace.addEventListener("mousedown", timeStart)

//functions

function countClick() {
    //Count Click and save it to session storage
    let ClickCountDisplayValue = clickCountDisplay.innerHTML
    let clickCountCurrent = 0

    //Check whether the content of the click count display is a number, if not, set variable to 0
    if (isNaN(Number(ClickCountDisplayValue))) {
        clickCountCurrent = 0
        //if it is, set click count to the value of click count display
    } else {
        clickCountCurrent = Number(ClickCountDisplayValue)
    }

    //slice countdown to grab just the number (or a number and a space)
    let currentTime = Number(timerDisplay.innerHTML.slice(0, 2))

    //Check whether current time displayed in the timer is above 0
    //if it is, add the most reccent click to trigger this function
    if (currentTime > 0) {
        let clickCountNew = clickCountCurrent + 1
        clickCountDisplay.innerHTML = clickCountNew
        //save new click sum to session storage
        sessionStorage.setItem(savedClicks, clickCountNew)
    }

    //Check whether the content of the click count display is a number,
    //if it is, set the font color to white, if not, do nothing
    if (isNaN(Number(document.querySelector(".clickCountSpan").innerHTML))) {
        clickCountDisplay.style.color = "grey"
        //if it is, set click count to the value of click count display + 1
    } else {
        clickCountDisplay.style.color = "black"
    }
}

function timeStart() {
    //assign needed variables
    const unit = " Seconds Left"
    let time = 30
    //check whether the variable indicating at least one click is true or false
    //if false, run the timer code
    if (hasClicked == false) {
        //set time left color to white and to 30 seconds
        timerDisplay.style.color = "black"
        timerDisplay.innerHTML = time + unit
        //declare a variable that will use set interval to run the timer function every second
        const timerIntervalVar = setInterval(timer, 1000)

        //stop timer function
        function stopTimer() {
            clearInterval(timerIntervalVar)
        }
        //timer function code
        function timer() {
            //check to see if the current timerDisplay value is above 0
            if (time > 0) {
                time = Number(time) - 1
                timerDisplay.innerHTML = time + unit
                if (time == 0) {
                    timerDisplay.style.color = "#D40D12"
                }
            } else {
                stopTimer()
                timerDisplay.innerHTML = "Time's Up!"
            }
        }
    }
    //set has clicked to true so the timer doesn't start over due to any future clicks
    hasClicked = true
}