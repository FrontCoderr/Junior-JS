const p = document.querySelector('p');

class ProgrammingLang {
    constructor(name){
        this.name = name;
        this.purpose = '';
        this.year = 0;
    }
}

class C extends ProgrammingLang {
    constructor (name){
        super(name);
        this.purpose = `ПО, Игры`;
        this.year = 1985;
    }
}

class Python extends ProgrammingLang{
    constructor(name){
        super(name);
        this.purpose = 'backend on web-site';
        this.year = 1971;
    }
}

const CProg = new C('C');
const python = new Python('Python');
