var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston",
    "Bob Jobbet",
    "Twack Zackson",
    "Pleo Thoodlham",
    "Pilber Milcar",
    "Torque Lewith",
    "Twadson Prawbingle",
    "Rinko Ginglbetter",
    "Draxim Sklounst",
]

var rangersList = document.getElementById("rangers")
var newName = document.createElement("li")
newName.textContent = powerRangers[0]
rangersList.append(newName)

for (i = 1; i < powerRangers.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = powerRangers[i]
    rangersList.append(newName)
}