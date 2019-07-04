const timer = document.querySelector('#date');

setInterval(() => {
    let date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let sec = date.getSeconds();

    time = hours + ':' + minutes + ':' + sec;

    timer.innerHTML = time;
}, 1000);