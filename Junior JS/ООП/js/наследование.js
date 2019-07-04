//смотреть консоль в браузере
let Track = function (params) {
    this.name = params.name;
    this.url = params.url;
}

Track.prototype.playTrack = function () {
    console.log(`We started playing ${this.name}`)
}

//пример наследования
let youTubeTrack = function(params) {
    Track.apply(this, arguments);
    this.img = params.img;
}

youTubeTrack.prototype = Object.create(Track.prototype);

youTubeTrack.prototype.constructor = youTubeTrack;
//конец примера наследования

let track01 = new Track({
    name: 'Time To Pretend',
    url: 'track01.mp3'
});

let track02 = new Track({
    name: 'Underpresher',
    url: 'track02.mp3'
});

let youTubeTrack01 = new youTubeTrack({
    name: 'Watching anime everytime',
    url: 'youTubeTrack.mp4',
    img: 'img01'
});

let youTubeTrack02 = new youTubeTrack({
    name: 'Hello World',
    url: 'youTubeTrack.mp4',
    img: 'img02'
    
});

console.log(track01);
console.log(track02);

console.log('/////////////////////////////');

console.log(youTubeTrack01);
console.log(youTubeTrack02);

console.log('/////////////////////////////');

track01.playTrack();
track02.playTrack();

console.log('/////////////////////////////');

youTubeTrack01.playTrack();
youTubeTrack02.playTrack();