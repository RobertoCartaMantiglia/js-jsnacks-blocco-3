// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto



let userNumber = parseInt(prompt("scrivi un numero"));

while(userNumber > 10) {
    userNumber = parseInt(prompt("scrivi un numero"));
}
console.log(userNumber);