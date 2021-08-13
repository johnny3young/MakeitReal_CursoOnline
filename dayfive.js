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
/* let phrase = prompt("Please type a phrase:");
phrase = phrase.trim().split(" ");
console.log(phrase);
phrase = phrase.map(p => p[0].toUpperCase() + p.slice(1));
phrase = phrase.join(" ");
console.log(phrase); */

//Exercise 27
/* const phrase = prompt("Please type a phrase")
console.log(phrase)
const phraseSeparated = phrase.split(' ')
console.log(phraseSeparated)
for(let i=0; i<phraseSeparated.length; i++){
     console.log(phraseSeparated[i])
} */

//Exercise 28
let phrase1 = prompt("Type a first phrase: ")
let phrase2 = prompt("Type a second phrase: ")
let comun = ""
for(let i=0; i<phrase1.length; i++){
  if (phrase2.includes(phrase1[i])) {
  comun+=phrase1[i]+", "}
}
if (comun.length>=1) console.log(`Los caracteres en común son: ` + comun.slice(0, -2))
else console.log("No se encontraron caracteres en común")