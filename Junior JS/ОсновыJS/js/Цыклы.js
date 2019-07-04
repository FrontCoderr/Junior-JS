//смотреть консоль в браузере
const p = document.querySelector('p');

// цикл for
for(let i = 0; i < 9; i = i + 1){
    if (i === 5) continue; //continue - преревыет текущею итерация цыкла
    console.log(i)
}

console.log('//////////////////////////////////////////');

//цикл while
let a = 0;
while (a < 8) {
    console.log(a);
    a++;
}