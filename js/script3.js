// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.


// creo 2 array 

let listone = ["primo", "secondo", "terzo", "quarto", "quinto", "sesto"];

let listina = ["primo", "secondo"];

while (listina.length < listone.length){
    listina.push ("add +1");
}

console.log(listone);
console.log(listina);