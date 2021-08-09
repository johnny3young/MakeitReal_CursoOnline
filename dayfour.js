//Exercise 18
/* const names = ["Pedro", "Pablo", "María", "Juan", "Diana"]
const insertFirstName = prompt(`Please type a name for add`)
const insertSecondName = prompt(`Please type other name`)

names.push(insertFirstName)
names.splice(2,1,insertSecondName)
//names[2] = insertSecondName

console.log(names) */

//Exercise 19
/* const number = parseInt(prompt(`Please enter a number`))
let arrayNumber = []

for(i=1; i<=number; i++){
    
    arrayNumber.push(i)
    //console.log(i)

}
arrayNumber.splice(1,1)
console.log(arrayNumber) */

//Exercise 20
/* const matriz = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
]

for (i=0; i<matriz.length; i++){
    console.log(`Grupo ${i+1}`)
    for(k=0; k<matriz[i].length;k++){
        console.log(`  ${matriz[i][k]}`)
    }
} */

//Exercise 21
/* const nums = [1, 23, 5, 6, 40, 12, 2, 67, 24, 9, 39]

for(i=0; i<=nums.length; i++){
    if(nums[i] > 10){
      console.log(`${nums[i]}`)
    }    
}
 */
//Exercise 22
const nums = [1, 1,,1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]

let totalOne = 0
for (i=0; i<=nums.length;i++){  
    if(nums[i] == 1){
        totalOne ++        
    }     
}
console.log(totalOne)