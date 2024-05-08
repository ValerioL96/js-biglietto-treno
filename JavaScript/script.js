
const userTravKilometers = prompt('Type the km to travel');
const userAge = prompt('Type your age');

//calcolo costo biglietto
const costKilometers = 0.276;
const costTicket = costKilometers * userTravKilometers;

console.log(costTicket);