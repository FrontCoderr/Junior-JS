//смотреть консоль в браузере
const div = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const body = document.querySelector('body');

div.addEventListener('click', function (e) {
    //console.log(e);
    if (e.target.id == 'one') {
        console.log('you clicked on first div element');
    }
});


two.addEventListener('click', (e) => {
    console.log('click!!!!!!!!!!!!!!!!!!!!')
    e.stopPropagation(); //останавливает всплытие события
})

three.addEventListener('click', () => {
    three.style.display = 'none'
})

//////////////////////////////////////

const TopBlock = document.querySelector('.top');

noneBlock = (e) => {
    console.log('top block');
    e.stopPropagation();
}

TopBlock.addEventListener('click', noneBlock);