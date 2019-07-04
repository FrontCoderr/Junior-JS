//смотреть консоль в браузере
let arr = [3,4,5,9];

//every
let a = arr.every((b) => {
    console.log(b);
    return b < 5;
 });
 console.log(a);

 //some
 let b = arr.some((b) => {
     console.log(b);
     return b < 5;
 });
 console.log(b);