//смотреть консоль в браузере
let Track = function(name) {
    this.name = name;
}

let PlayList = function(name) {
    this.name = name;
}
//Миксины
let extend = function(target){
    if(!arguments[1]){
        return;
    }
    for(let i = 0; i < arguments.length; i++){
        let sours = arguments[i];
        for(let key in sours){
            if(!target[key] && sours.hasOwnProperty(key)){
                target[key] = sours[key];
            }
        }
    }
}

let nameMixin = {
    getName : function(){
        return this.name;
    }
};

let controlsMixin = {
    play : function () {
        console.log(`${this.name} started playing`);
    }
};

extend(Track.prototype, nameMixin, controlsMixin);

extend(PlayList.prototype, nameMixin, controlsMixin);

//конец миксинов
let superTrack = new Track('JOJO OP');

let superPlayList = new PlayList('anime');

console.log(superTrack);
console.log(superTrack.getName());
superTrack.play();

console.log(superPlayList);
console.log(superPlayList.getName());
superPlayList.play();