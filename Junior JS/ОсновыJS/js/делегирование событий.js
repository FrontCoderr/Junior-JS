/////////////////////////////////////
const ul = document.querySelector('#ul');

MyEvent = (e) => {
  const Event = e.target;
  alert(Event.innerHTML);
}

ul.addEventListener('click', MyEvent);

const AddLiBtn = document.querySelector('#AddLi');

AddLiElement = () => {
  let li = document.createElement('li');
  li.innerHTML = 'Новое li'
  ul.appendChild(li);
}

AddLiBtn.addEventListener('click', AddLiElement);

/////////////////////////////////////

const mainBlock = document.querySelector('#main');

BlockClick = (e) => {
  const Event = e.target;
  alert(Event.innerHTML);
}

mainBlock.addEventListener('click', BlockClick);

/////////////////////////////////////

const SecondUL = document.querySelector('#SecondUL');

AddText = (e) => {
  const Event = e.target;
  let li = Event.closest('li'); //closest - находит ближайшего родителя подходящего под этот селектор
  if (li) {
    li.innerHTML = li.innerHTML + '!';
  }
}

SecondUL.addEventListener('click', AddText);

/////////////////////////////////////

const grid = document.querySelector('.grid');

changeBg = (e) => {
  event = e.target;
  if (event.tagName === 'SPAN') {
    event.style.background = 'green';
  }
}

grid.addEventListener('click', changeBg);