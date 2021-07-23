//Exercises día 1

//Exercise 1
// Ask to type a message
let message = prompt ("Please type a message")

//Show message typed
console.log(message)

//Exercise 2
console.log("Hi "+prompt("Whats is your name? ")+" !")

//Also
let salute = prompt("Hi, What is your name ? ")
console.log ('Hello ' +salute+ ' !')

//Exercise 3
console.log('Type two numbers to add them together')
let numberOne = prompt("1st number: ")
let numberTwo = prompt("1st number: ")
let result = parseInt(numberOne) + parseInt(numberTwo)
console.log('The result is: ' +result)

//Exercise 4
console.log("*** Calculating your born year ***")
let bornYear = prompt("Type you born year please")
let years = parseInt(new Date().getFullYear()) - parseInt(bornYear)
console.log("You have " +years+ " years old")

//Exercise 5
console.log("*** Calculating BMI (Body Mass Index or IMC in spanish) ***")
let weight = prompt("Please type your weight")
let height = prompt ("Please type your height")
let bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height))
console.log("Your BMI is: " + bmi)

//Also
let weight = prompt("Please type your weight");
let height = prompt("Please type your height");
let bmi = parseFloat(weight) / parseFloat(height) ** 2;
console.log("Your BMI is " + bmi);