// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
//Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


const listNumbers = [];

let userNumbers = parseInt(prompt("Inserisci un numero"));
let sum = 0;


while(listNumbers < 50) {
    userNumbers = parseInt(prompt("Inserisci un numero"));
    sum += userNumbers;
}
console.log(listNumbers);
