// Code your solutions in this file

//const gifts = ["Guadalupe", "Ollie", "Aki"];
const gifts = ["teddy bear", "drone", "doll"];
/*function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}*/

//wrapGifts(gifts)
const names = ["Guadalupe", "Ollie", "Aki"];
const events= ["birthday"];
function writeCards(names, events){
    const newArray =[];
    for(const name of names){
        newArray.push(`Thank you, ${name}, for the wonderful ${events} gift!`);
    }
    return newArray;
}
writeCards(names,events);

//count down
function countDown(x){
    while (x>=0) {
        console.log(x);
        x--
    }
    return x;
}
countDown(10);