const newCon = document.querySelector('.newCon');
const createCardBtn = document.querySelector('#createCard');
const stop = document.querySelector('#stop');

CreateCard = () => {
    let i = 0;
    return () => {
        let card = document.createElement('div');
        card.innerHTML = `
    <h2>Hello World</h2>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.Est vero et atque ?
    `;
        card.classList.add('cardElem');
        newCon.appendChild(card);
        console.log(i);
        if (i === 3) {
            createCardBtn.style.display = 'none';
            stop.innerHTML = 'Нельзя создать больше 3х карточек'
        }
    }
}
const doElem = CreateCard();

createCardBtn.addEventListener('click', doElem);