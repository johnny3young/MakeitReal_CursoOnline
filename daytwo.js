//Exercises día 2
//Exercise 6
let number = parseFloat(prompt("Please, enter a number to fin out if the number\n is greater than or less than or equal to 10: "));

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
        console.log(`The number is: ${number} and the typeof is ${typeof(number)}`)

        //Validator web
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