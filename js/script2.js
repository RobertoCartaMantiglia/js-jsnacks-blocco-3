// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
//Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


const listNumbers = [];
let userNumbers;

let sum = 0;


while(sum < 50) {
    userNumbers = parseInt(prompt("Inserisci un numero"));
    sum += userNumbers;
    listNumbers.push(userNumbers);
}
console.log(listNumbers);
console.log(sum);
