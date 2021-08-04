//Exercise 12
/* const phrase =  prompt(`Please type a phrase`)

for (i = 1; i<=10; i++){
    console.log(`${phrase}`)
} */

//Exercise 13
/* const phrase = prompt(`Please type a phrase`)
const repetitions = prompt(`please type a number time do you want repeat it`)

for (i = 1; i <= repetitions; i++){
    console.log(`${phrase}`)
} */

//Exercise 14
/* const number = prompt(`Please enter a number`)

for (i=1; i <= number; i++){
    console.log(`${i}`)
} */

//Exercise 15
/* const number = prompt(`please enter a number`)
let total = 0
for (i=1; i <= number; i++){
 
    total += i
}
console.log(`${total}`) */

//Exercise 16
/* const numberOne = parseInt(prompt(`Please enter the first number`))
const numberTwo = parseInt(prompt(`Please enter the second number`))

for (i = Math.min(numberOne,numberTwo); i <= Math.max(numberOne,numberTwo); i++){
    console.log(`${i}`)
} */

//Exercise 17
const numberRandom = parseInt((Math.random()*10)+1)
console.log(`${numberRandom}`)

while (true){
  let numberUser = parseInt(prompt(`Please enter a number to find out if is the same`))
  if(numberRandom == numberUser){
    console.log(`Number found!`)
    break
  }else{
    console.log(`Try again`)
  }
}

