//смотреть консоль в браузере
class Animal{
    constructor(name){
        this.name = name;
        this.sound = '';
    }
    voice () {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);// super - передает данные в конструктор на уровень выше
        this.sound = 'Гав Гав'
    }
}

class Cat extends Animal{
    constructor (name) {
        super(name);
        this.sound = 'Мяу Мяу';
    }
}

const cat = new Cat('Мурзик');
const dog = new Dog('Bobik');

cat.voice();

dog.voice();


//ООП на практике
class Point {
    constructor(){
        this.x = 0;
        this.y = 0;
    }
}

class Circle extends Point{
    constructor(){
        super();
        this.r = 0;
    }
}

class Ring extends Point{
    constructor(){
        super();
        this.R = 0;
    }
}

class Decoration extends Ring{
    constructor(){
        super();
        this.price = 100;
    }
}