//смотреть консоль в браузере

// callback - функция которая передается в параметры другой функции

first = (y) => {
    console.log(1);
    y();
}

second = (a,b) => {
    console.log(a*b);
}

first(() => {
    second(5,7);
});
//second(4,7);

//работа с массивом
arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

f1 = (callback) => {
    let redArr = arr.reduce((accum, currentValue) => {
        console.log('номер из массива ' + currentValue);
    });
    callback();
}

f2 = () => {
    let redArr = arr.reduceRight((accum, currentValue) => {
        console.log('номер из массива с конца ' + currentValue);
    });
}

f1(f2);

//усложнение работы с массивом
fruts = ['яблоко', 'груша', 'арбуз', 'дыня', 'персик']; 

PushElements = (callback) => {
    fruts.push('банан', 'апельсин');
    callback();
}

DeleteElements = (a, b) => {
    fruts.push(a, b);
    fruts.pop();
}

PushElements( () => DeleteElements('виноград', 'мандарин') )

console.log(fruts);

