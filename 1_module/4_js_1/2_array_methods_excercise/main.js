var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


console.log("fruit original: ", fruit);
console.log("vegetables original: ", vegetables);


// 1 - Remove the last item from the vegetable array.
vegetables.pop()
console.log("vegetables 1: ", vegetables);



// 2 - Remove the first item from the fruit array.
fruit.shift()
console.log("Fruit 1: ", fruit)



// 3 - Find the index of "orange."
var indexOfOrange = fruit.indexOf("orange")
console.log("index of Orange: ", indexOfOrange)



// 4 - Add that number to the end of the fruit array.
fruit.push(indexOfOrange)
console.log("Fruit 2: ", fruit)



// 5 - Use the length property to find the length of the vegetable array.
var vegetableLength = vegetables.length
console.log("Vegetables 2: ", vegetableLength)



// 6 - Add that number to the end of the vegetable array.
vegetables.push(vegetableLength)
console.log("vegetables 3: ", vegetables)



// 7 - Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
console.log("Food Array: ", food)



// 8 - Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2)
console.log("Food Spliced: ", food)



// 9 - Reverse your array.
food.reverse()
console.log("Food Reversed: ", food)



// 10 - Turn the array into a string and return it.
var foodString = food.join()
console.log("Food String: ", foodString)