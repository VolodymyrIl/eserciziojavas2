const { xml } = require("d3-fetch");

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let number1 = 10;
let number2 = 20;
if(number2>number1) {
  console.log("number2>number1")
}




//20

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let number = 4
if(number !== 5) {
  console.log("sono diverso da 5")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let number3= 30
if (number3 % 5)
console.log("divisibile per 5")

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let numero1 = 8
let numero2 = 16
if (numero1=== 8 || y=== 8)
{
console.log("yes")
} else if (numero1 + numero2 === 8 ||numero1 - numero2 ===8) {
  console.log( "yes!")
} else {
  console.log("non si può fare")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
const totalShoppingCart = 80

if(totalShoppingCart > 50) {
  console.log("Te la spediamo gratuitamente!")
} else if (totalShoppingCart <50) {
  console.log("devi pagare dieci denari!")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShooppingCart = 80
let discountedCart = totalShooppingCart- (totalShooppingCart / 100) * 20

console.log("lacifra scontata è di")
console.log(discountedCart)
if(discountedCart > 50) {
  console.log("Te la spediamo gratuitamente!")
} else if (discountedCart <50) {
  console.log("devi pagare dieci denari!")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
//let prima = 10
//let seconda = 15
//let terza = 23
const numerini = [10, 45, 7,]
let order= numerini.sort().reverse()

console.log(order)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
// let x = "Pippo"
//if (typeof x === "string") 
// { console.log("questa condizione è vera")}
//else {
 // console.log("questa condizione è falsa")
//}
let numeros= 8
console.log(typeof numeros);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numerolos = 10
if(numerolos %2 ===0){
  console.log("Il numero è pari")
  
} else {
  console.log("il numero è dispari")
}

/* SCRIVI QUI LA TUA RISPOSTA */

 //ESERCIZIO 10
  //Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 11;
   if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else { 
      console.log("Uguale a 10 o maggiore");
    }

    let vall = 4;
    if(vall<5) { 
      let name1= "Scarafaggio";
      console.log("Meno di 5");
      console.log(name1)
    }
    //
    if(vall<10) {
      console.log("Meno di 10");
      
    }else {
      console.log("Wmilan")
    }
    console.log("Wjuvemerda")
      
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
