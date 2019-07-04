let a = [3,-12,0,4,-7,16];
let c = a.filter((x, y, z) => {
    return x >= 0;
});
console.log(c);
//только нечетные елементы массива
let d = [3, -12, 0, 4, -7, 16];
let g = d.filter((x,index) => {
    return index % 2 == 0;
});
console.log(g);