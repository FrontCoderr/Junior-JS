//смотреть консоль в браузере

//let b = a.map(function(currentValue, index, array){
//    return tralala;
//});
let a = [3,4,5];

let c = a.map(function(x,y,z){
    //console.log(z);//ссылка на сам текущий массив
    //console.log(y);//индекс елементов в нутри массива
    return x;//value в массиве
});
//console.log(c);
//умножить все елементы массива на 2

let b = [3,4,5];
d = b.map((x) => {
    return x * 2;
});
console.log(d);