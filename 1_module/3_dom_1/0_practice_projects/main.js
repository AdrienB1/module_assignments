var foods = document.querySelector("#title")
console.log(foods.innerHTML)

var foodList = document.querySelectorAll(".food")
console.log(foodList)

for (var i = 0; i < foodList.length; i++) {
    console.log(foodList[i].innerHTML)
    foodList[i].innerHTML = "Potato"
}

// foodList[0].innerHTML = "Potato"