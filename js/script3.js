// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.


// creo 2 array 

const listona = ['ciao', 'pasta', 'pizza', 'tazza', 'mazza'];
const listina = ['germoglio', 'fiore'];
console.log(listona);
console.log(listina);

while (listina.length < listona.length) {
    let element = 'macchina';
    listina.push(element);
    console.log(listina);
}