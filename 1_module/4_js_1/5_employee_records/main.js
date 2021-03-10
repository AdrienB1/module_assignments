//You are to create a collection of employee's information for your company. Each employee has the following attributes:
// - Name
// - Job title
// - Salary
// - Status




// 1 - First, you will create an empty array named employees
var employees = []


// 2 - Next, you will create an Employee constructor with the first three attributes defined at the time of 
// instantiation and the fourth will be defaulted to "Full Time".
// This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.
//  --  (e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")
function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function() {
        console.log("--------------------")
        console.log("name: " + this.name)
        console.log("Job Title: " + this.jobTitle)
        console.log("Salary: " + this.salary)
        console.log("Status: " + this.status)
    }
}


// 3 - You will then:
// - Instantiate three employees
var jack = new Employee("Jack Sparrow", "Aquisitions Specialist", "4 loot/hour")

var deku = new Employee("Izuku Midorya", "Hero", "1 exposure/hour")

var tonjuro = new Employee("Tonjuro", "Demon Slayer", "Pro Bono")


// - Override the status attribute of one of them to either "Part Time" or "Contract"
var john = new Employee("John 117", "Master Chief", "2000/hr", "Contract")

// - Call the printEmployeeForm method for each employee
jack.printEmployeeForm()
deku.printEmployeeForm()
tonjuro.printEmployeeForm()
john.printEmployeeForm()


// - Put the generated employees into the employees array using whichever method you prefer.
employees.push(jack, deku, tonjuro, john)
