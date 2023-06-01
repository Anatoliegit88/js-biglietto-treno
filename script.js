// Ciao ragazzi,
// esercizio di oggi: calcolo del prezzo del biglietto del treno
// cartella/repo js-biglietto-treno
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//dati
const prezzoKm = 0.21;

// km da percorerre
const percorsoPasseggero = parseFloat(prompt("Distanza da percorrere"));

// età del passegero
const etaPasseggero = prompt("Dimmi la tua eta");

// prezzo base
const prezzoBase = percorsoPasseggero * prezzoKm;
console.log(prezzoBase);

// prezzo biglietto
let prezzoSconto = 0;
if (etaPasseggero < 18) {
  prezzoSconto = 20;
} else if (etaPasseggero >= 65) {
  prezzoSconto = 40;
} else {
  prezzoBase;
}
console.log(prezzoSconto);

//calcolo del prezzo scontato
let prezzoFinale = prezzoBase - (prezzoBase * prezzoSconto) / 100;
prezzoFinale = prezzoFinale.toFixed(2);
console.log(prezzoFinale);

document.getElementById(
  "risultato"
).innerHTML = `<h2> Il prezzo base e' ${prezzoBase.toFixed(2)} Euro</h2>
<p> Lo sconto e' di ${prezzoSconto}% </p>
<p>Prezzo per km e' ${prezzoKm} Euro</p>
<h3>Il prezzo finale e' di ${prezzoFinale} Euro </h3>  `;
