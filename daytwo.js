//Exercises día 2
//Exercise 6

/* let number = parseFloat(prompt("Please, enter a number to fin out if the number\n is greater than or less than or equal to 10: "));
        let msg="";
        if(number>10){
            msg=`${number} is greater than 10`;
        
        } else if (number == 10){
          msg=`${number} is equal than 10`
        }
        else{
            msg=`${number} is less than 10 `
        }
        console.log(msg)
        console.log(`The number is: ${number} and the typeof is ${typeof(number)}`) */


        //Validator por web
        // const data1 = document.querySelector('#data1')
        // const data2 = document.querySelector('#data2')
        // const btn = document.querySelector('#btn')        

        // btn.addEventListener('click', () =>{
          
        //   dato1 = data1.value
        //   dato2 = data2.value
        //   let result = dato1 + dato2

        //   console.log(`The result is: ${result} and the typeof is ${typeof(result)}`)

        // })



//Exercise 7
/* const numberRamdon = Math.floor((Math.random()*10)+1)

const numberUser = parseInt("please type a number between 1 to 10"))
console.log (`The number ramdon is: ${numberRamdon}`)

if (numberUser == numberRamdon){
  console.log(`congratulations that is the number!!!`)
}else{
  console.log(`Sorry, try again!`)
} */

//Exercise 8
const numberTyped = parseInt(prompt(console.log(`Type a number to find out if is multiple to 5`)))
numberTyped % 5 == 0 ? console.log (`Yes, ${numberTyped} is multiple to 5`) : console.log (`No, ${numberTyped} is not multiple to 5`)