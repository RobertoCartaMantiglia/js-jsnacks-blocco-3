// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
//Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let numbers = [];
let sum = 0;



while (sum < 50) {
    const userNumbers = parseInt(prompt('inserisci un numero'));
    sum += userNumbers;
    numbers.push(userNumbers);
    console.log(numbers);
}
console.log(sum);