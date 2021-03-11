for (i = 1; i <= 100; i++) {
    if (i % 3 != 0){
        if (i % 5 != 0) {
            console.log(i)
        } else (
            console.log("Buzz")
        )
    } else if (i % 3 == 0) {
        if (i % 5 != 0) {
            console.log("Fizz")
        }
        else {
            console.log("FizzBuzz")
        }
    }

}