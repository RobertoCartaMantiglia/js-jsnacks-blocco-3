// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.


// creo 2 array 

let listone = ["pomo", "arancio", "limone", "mandarino", "zucchero", "caffé"];

let listina = ["crocchette", "cannella"];

while (listina.length < listone.length){
    listina.push ("plus");
}

console.log(listone);
console.log(listina);