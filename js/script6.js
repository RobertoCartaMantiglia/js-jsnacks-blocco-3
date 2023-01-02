/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */

let array = [1, 5, 18, 75];

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += (array[i]);
    }
    console.log(sum);
}
sumArray(array);