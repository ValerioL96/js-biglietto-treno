
const userTravKilometers = prompt('Type the km to travel');
const userAge = prompt('Type your age');

//calcolo costo biglietto
const costKilometers = 0.276;
const costTicket = costKilometers * userTravKilometers;


//sconto del 21% ai minorenni
if(userAge < 18){
    const discount = (costTicket / 100) * 21;
    console.log(discount);
    document.getElementById("output").innerHTML = (discount + ' ' + '$' + '    ' + 'Underage ticket 21% discount');
} 
//sconto del 42% agli over 65
else if(userAge > 65){
    const discountTwo = (costTicket / 100) * 42;
    console.log(discountTwo);
    document.getElementById("output").innerHTML = (discountTwo + ' ' + '$' + '   ' + 'Seniors ticket 42% discount');
}
//Età compresa tra i 18 e 65 rimane invariata
else{
    console.log(costTicket);
    document.getElementById("output").innerHTML = ( costTicket + ' ' + '$' + '   ' + 'Ticket');
}

