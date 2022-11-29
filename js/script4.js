// Prendere due array della stessa lunghezza e generarne un terzo,
// prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


let arrayA = ["a", "b", "c"];
let arrayB = [1, 2, 3];

let arrayC = [];

for (let i=0; i< arrayA.length; i++){
    arrayC.push(arrayA[i], arrayB[i]);
}

