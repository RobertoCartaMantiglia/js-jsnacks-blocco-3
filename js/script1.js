// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto



const userInput = document.querySelector('input');
console.log(userInput);
const bottone = document.querySelector('button');
console.log(bottone);

bottone.addEventListener('click', function () {
    if (parseInt(userInput.value) < 1 || parseInt(userInput.value) > 10) {
        alert('inserisci un numero tra uno e dieci');
    } else {
        alert('bravissimo!')
    }
})

