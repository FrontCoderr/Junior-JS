//смотреть консоль в браузере
function cs2() {
    let c = 0;
  return function () {
        c++;
        p.innerHTML = c;
    }
}
let count = cs2(); // count - функция!!!!

const btn = document.querySelector('button');
const p = document.querySelector('p');

btn.addEventListener('click', count);
////////////////////


ArrayPusher = () => {
    arr = [1, 2, 3, 4];
    return () =>{
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
}
let Pusher = ArrayPusher();
Pusher();

///////////////////
makeAdder = (x) => {
    return (y) => {
        console.log(3 + 3);
    } 
}
let Adder = makeAdder();
Adder();

///////////////////


makeSize = (size) =>{
    return () => {
        document.body.style.fontSize = size + 'px';
    }
}

let LowerSize = makeSize(12);
let AverageSize = makeSize(24);
let UpperSize = makeSize(48);

document.getElementById('size-12').onclick = LowerSize;
document.getElementById('size-14').onclick = AverageSize;
document.getElementById('size-16').onclick = UpperSize;

/////////////////////

