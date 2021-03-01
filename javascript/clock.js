const clock = document.querySelector('.js-clock');
const h1 = clock.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const second = date.getSeconds();
    h1.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`}:${min < 10 ? `0${min}` : `${min}`}:${second < 10 ? `0${second}` : `${second}`}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init(); 