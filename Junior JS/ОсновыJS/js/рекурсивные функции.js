//смотреть консоль в браузере
write = (num) => {
    if(num >= 0){
        write(num - 1);
        //console.log(num);
    }   
}
write(10);

Upcount = (a, b) => {
    let result = a + b;
    if (result >= 0) {
        Upcount(a, b - 1);
        //console.log(result);
    }
}
Upcount(5,5);

DownCount = (number) => {
    if (number <= 10) {
        DownCount(number + 1);
        //console.log(number);
    }
}
DownCount(0);

ArrayPusher = (arr = [1, 2, 3, 4]) =>{
    if (arr.length >= 0) {
        ArrayPusher(arr.length - 1);
        console.log(arr.length);
    }
}     
ArrayPusher();