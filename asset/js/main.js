
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




// prende i dati dell'inputbox tramite il bottone
const btnGenera = document.getElementById("generate");

const cabClass = document.querySelector('.cab').classList;
    cabClass.add("flex-column");

btnGenera.addEventListener('click', function () {

    const userAge = (document.getElementById('age').value)
    const kmTravel = Number(document.getElementById('TravelKm').value)

    console.log(userAge)
    console.log(kmTravel)

    const priceTiket = kmTravel * 0.21
    console.log(priceTiket)

    let discountPrice = priceTiket;

    let tiketTipe = 'standard';

    // va applicato uno sconto del 20% per i minorenni e tipo di biglietto ridotto
    if (userAge == 'minorenne') {
        discountPrice = priceTiket * 0.8
        tiketTipe = 'ridotto'
        // va applicato uno sconto del 40% per gli over 65 e tipo di biglietto ridotto
    } else if (userAge == 'over') {
        discountPrice = priceTiket * 0.6
        tiketTipe = 'ridotto'
    }

    // stampare il tipo di biglietto    
    document.getElementById('type_tiket').innerHTML = tiketTipe

    // stampare il prezzo in forma decimale.
    const endPrice = discountPrice.toFixed(2);
    console.log(endPrice);

    const userName = document.getElementById("user_name").value
    console.log(userName);

    document.getElementById('name_passenger').innerHTML = userName

    const numberCab = Number(Math.floor((Math.random() * 10) + 1))
    document.getElementById('cab_number').innerHTML = ` N° ${numberCab}`

    document.getElementById("price_tiket").innerHTML = endPrice
    
    const capNumber = Math.floor(Math.random()*90000) + 10000; 
    console.log(capNumber)
    document.getElementById("number_cap").innerHTML = capNumber
})


