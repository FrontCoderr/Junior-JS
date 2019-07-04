const p = document.querySelector('#price');
const description1 = document.querySelector('#description');
const img = document.querySelector('img');
const btn = document.querySelector('button');
const span = document.querySelector('span');

function count1 () {
    let i = 0;
    return function () {
        i++;
        span.innerHTML = i;
    }
}

const count = count1();

btn.addEventListener('click', count);

class Prodcts {
    constructor(name){
        this.name = name;
        this.price = 0;
        this.description = '';
        this.img = '';
    }
    showInfo(){
        p.innerHTML = this.price;
        description1.innerHTML = this.description;
    }
}

class Milk extends Prodcts{
    constructor(name){
        super(name);
        this.img = 'https://www.eg.ru/wp-content/uploads/2018/12/moloko104700.jpg'
        this.price = 100;
        this.description = `Молоко ${this.name} 900мл`;
    }
}

const milk = new Milk('Вожгалы');

milk.showInfo();

let o = {
    d: 1,
    b: 2
}
for (const key in milk) {
    if (milk.hasOwnProperty(key)) {
        console.log(milk[key]);   
    }
}