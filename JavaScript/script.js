
const userTravKilometers = Number.parseFloat( prompt('Type the km to travel'), 10);
const userAge = Number.parseInt( prompt('Type your age'), 10);

//calcolo costo biglietto
const costKilometers = 0.276;
let discount = 0;



//sconto del 21% ai minorenni
if(userAge < 18){
    discount = 21;
} 
//sconto del 42% agli over 65
else if(userAge > 65){
    discount = 42;
}


let costTicket = costKilometers * userTravKilometers;
    costTicket = costTicket - ((costTicket/100) * discount);
    console.log(costTicket.toFixed(2), costTicket);
