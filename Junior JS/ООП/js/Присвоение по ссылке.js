//смотреть консоль в браузере

let FirstObj = {
    "one" : "hello",
    "name" : 23
}
console.log(FirstObj);

//копирование объекта FirstObj
let b = {
};
for (let key in FirstObj) {
    b[key] = FirstObj[key];
}
b.five = 5;
console.log(b);

//перебор объекта b
for(let key in b){
    console.log(b[key]);
}
///////////

class Test {
    constructor(a){
        this.c = a;
    }
}

let myObj = new Test(5);
myObj.d = 77;
console.log(myObj);

let myObj2 = new Test(6);
console.log(myObj2);