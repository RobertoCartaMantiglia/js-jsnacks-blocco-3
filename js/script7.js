/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi randomicamente dalla lista, diversi tra loro.
 *
 */
 const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

 const randomList = [];


function getRandomNumber(numMin, numMax) {
    if(numMin===numMax){
        return numMax;
    }
    return Math.floor( Math.random()* (numMax - numMin +1) + numMin);
}

while(randomList.length < 10){
    const randomIndex = getRandomNumber (0, startingList.length - 1);
    const randomElement = startingList[randomIndex];

    if(!randomList.includes(randomElement)){
        randomList.push(randomElement);
    }
  
}
console.log(randomList);