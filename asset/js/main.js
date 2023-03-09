
/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 
*/

// strumenti

// prompt
// let / const
// operation
// division
// modulus

const generateBtn = document.getElementById("generate")
console.log (generateBtn)

/* 

// chiedere età e i km da percorrere.
const userAge = parseInt(("Quale è la tua età?"));
const kmTravel = ("Quanti km dovrai percorrere?");

// caricare consol.log
console.log(userAge);
console.log(kmTravel);

// Calclare il prezzo del biglietto.
const priceTiket = kmTravel * 0.21;
console.log(priceTiket);



let discountPrice = priceTiket;

// va applicato uno sconto del 20% per i minorenni
if (userAge < 18) {
    discountPrice = priceTiket * 0.8
// va applicato uno sconto del 40% per gli over 65.
} else if (userAge >= 65) {
    discountPrice = priceTiket * 0.6
};

// stampare il prezzo in forma decimale.
const endPrice = discountPrice.toFixed(2);
console.log(endPrice);


if (isNaN(endPrice)) {
    alert('ciao, devi inserire nei campi dei numeri e non dei testi!!!')
} else {
    document.getElementById("price_tiket").innerHTML = `Questo è il prezzo del biglietto: ${endPrice}€` 
} */