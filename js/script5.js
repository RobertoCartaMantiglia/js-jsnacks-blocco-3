/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico
 *  tra i due argomenti inclusi.
 */

function getRandomNumber (numMin, numMax){
    const randomNumber = Math.floor(Math.random()*(numMax - numMin +1) + numMin);
    return randomNumber;
}

let numeroCasuale = getRandomNumber(0, 10);
console.log(numeroCasuale);