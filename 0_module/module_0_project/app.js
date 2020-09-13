var bigger = document.getElementById("bigger");
var ball = document.getElementById("ball");

bigger.addEventListener("click", function changeSize() {
  ball.style.width = "100px";
  ball.style.width = "100px";
});









var person = {
  name: "grant",
  age: 678,
  favorites: ["a", "a", "b", "b"],
};
console.log(person.favorites[2]);

var firstName = "Ray";

if (firstName === "Ray") {
  console.log("I am Roger");
} else if (firstName === "Roger") {
  console.log("I am Ray");
} else {
  console.log("I am no one!");
}

//for (#1startingPoint; #2stoppingPoint; #4howWeGetThere) {  #3 whatever code to be executed }
for (var i = 23; i > 3; i--) {
  console.log(i);
}
