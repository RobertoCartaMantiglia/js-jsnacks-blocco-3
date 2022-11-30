/**
 * Crea due tag div con due id diversi.
 * Un div avrà il testo colorato di rosso mentre l'altro di verde.
 * Partendo da un array di numeri,
 * creiamo un nuovo elemento p e lo stampiamo nell'div rosso  se è un numero dispari
 * e nel div verde se è un numero pari.
 *
 *
 */

 // funzione che crei un nuovo elemento <p> </p>
 // restituirlo a chi invoca la funzione
 //
 // ciclo per ogni elemento dell'array
 // se l'elemento è un numero pari, crei nuovo elemento e lo aggiungo al div verde
 // se l'elemento è un numero dispari, creo  nuovo elemento e lo aggiungo al div rosso

 const numeri = [1,33,55,64,33,22,10,44];

 function getNewPElement (content){
    let p = document.createElement("p");
    p.innerText = content;
    return p;
 }

 const divPari = document.getElementById("pari");
 const divDispari = document.getElementById("dispari");


 for (let i=0; i<numeri.length; i++){
    if(numeri[i] % 2 === 0){
        divPari.append(getNewPElement(numeri[i]));
    } else{
        divDispari.append(getNewPElement(numeri[i]));
    }
 }

