//Exercise 23
/* const phrase = prompt("Please enter a phrase")
console.log(`${phrase.toUpperCase()}`) */

//Exercise 24
/* const phrase = prompt("Please type a phrase")

let totalLetter = 0
for (i=0; i<=phrase.length; i++){
    if(phrase[i] == "a"){
        totalLetter ++
    }    
}
console.log(`${totalLetter}`) */

//Exercise 25
/* let phrase = prompt('Please type a phrase')
phrase = phrase.toLowerCase().trim()
phrase = phrase.replace('a', 4)
phrase = phrase.replace('e', 3)
phrase = phrase.replace('i', 1)
phrase = phrase.replace('o', 0)
phrase = phrase.replace(' ', '')
console.log(phrase) */

//Exercise 26
let phrase = prompt("Please type a phrase:");
phrase = phrase.trim().split(" ");
console.log(phrase);
phrase = phrase.map(p => p[0].toUpperCase() + p.slice(1));
phrase = phrase.join(" ");
console.log(phrase);