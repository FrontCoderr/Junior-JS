//смотреть консоль в браузере
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* 
bind() - это привязка контекста 

*/

////////////////Вариант 1//////////////
const person1 = {
    "name" : "Igor",
    "family" : "Bakmetov",
    "hello": function () {
        console.log(`Привет Я ${this.name} ${this.family}. Мне ${this.age} лет`);
    },
    "age" : 56
};
person1.hello();

const person2 = {
    "name" : "Vladimir",
    "family" : "Vladimirovitch",
    "age" : 34
}
function sayHello() {
    console.log(`Привет Я ${this.name} ${this.family} Мне ${this.age} года`);
}
sayHello.bind(person2)();

////////////////////////////////////////Вариант 2////////////////////////////////////////////

function getPerson(name, family, age) {
    const person = {
        name : name,
        family : family,
        age : age,
        sayHello () {
            console.log(`Ну привет.... Меня зовут ${this.name} ${this.family} Мне ${this.age}`);
        }
    };
    return person;
   
}

const LowerPerson = getPerson('Леха', 'Лепеха', 13);
LowerPerson.sayHello();

////////////////////////////////////////////////////////////////////

//создаем новый объект
function Person(name, family, age) {
    this.name = name
    this.family = family
    this.age = age
}

Person.prototype.sayHello = function() {
    console.log(`Привет меня зовут ${this.name} ${this.family}. Мне ${this.age}`);
};

const person = new Person('Igorexa', 'Developer', 90);
const Secondperson = new Person('Maks', 'Designer', 1090);

Secondperson.sayHello();

console.log(person);

console.log('/////////////////////////////////////////');
//встроенные классы
/*
Array
Object
String
Number
Date
*/

//Классы ES6
class ESPerson{
    constructor(name, family, age){
        this.name = name;
        this.family = family;
        this.age = age;
    }
    //get и set
    get FullName1(){
       return `${this.name} ${this.family}`
    }

    set FullName2(val){
        const match = val.split(' ');
        this.name = match[0];
        this.family = match[1];
    }

    sayHello(){
        console.log(`Привет меня зовут ${this.name} ${this.family}. Мне ${this.age}`);
    }
    goToHome(){

    } 
    static howMuch(){
        console.log('hello');
    }
}

const ESperson = new ESPerson('Front', 'Coder', 46);

console.log(ESperson);

ESperson.sayHello();

console.log(ESperson.howMuch);

//get
console.log(ESperson.FullName1);

//set
console.log(ESperson.FullName2 = 'hello world');