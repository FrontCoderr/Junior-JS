//смотреть консоль в браузере

const hotel = {
    "name" : "U doma",
    "stars" : 3,
    "reklama" : function () {
        console.log(this.name + ' best hotel. Stars ' + this.stars);
    },
    "hi" : "hello",
    "how much" : 500,
    "und" : undefined
};

console.log(hotel);
delete hotel.hi;
console.log(hotel);

console.log('///////////////////////////');

let yes = 'und' in hotel;
console.log(yes);

console.log('///////////////////////////');

let SecondYes = hotel.hasOwnProperty('und');
console.log(SecondYes);

console.log('///////////////////////////');

console.log(hotel["how much"]);
hotel.reklama();

console.log('///////////////////////////');

let a = {};
a.hi = "test";
console.log(a);