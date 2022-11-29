/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */

let lista = [2, 8, 12, 33];



function getSumNumbers (array){
    let sum = 0;

    for (let i=0; i < array.length; i++){

        const castedElement = parseInt(lista[i], 10);   //castedelement è una variabile che prende i valori interi del array su BASE 10 (... , 10)
       
        if(! Number.isNaN(castedElement)){
            sum = sum +castedElement;
        }
    }   
    return sum;
}
console.log(getSumNumbers(lista));