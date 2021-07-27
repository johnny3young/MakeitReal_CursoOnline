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