const SelectForm = document.querySelector('#select_1');

SelectForm.addEventListener('change', () => {
    console.log(SelectForm.value);
});

///////////////////////////////

const radio = document.querySelectorAll('.radio');

for (let i = 0; i < radio.length; i = i + 1) {
    radio[i].addEventListener('change', () => {
        console.log(radio[i].value);
    });
}

///////////////////////////////
let registrForm = document.querySelector('#registrForm');
let userName = document.querySelector('#userName');
let password = document.querySelector('#password');

validate = (e) => {

    e.preventDefault();

    if (!userName.value) {
        userName.style.border = '2px solid red';
        return false;
    }

    if (!password.value) {
        password.style.border = '2px solid red';
        return false;
    }

    return true;
}