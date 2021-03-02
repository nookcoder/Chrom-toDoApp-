const body = document.querySelector('body');

const IMG_NUM = 3 ; 

function paintImage(number){
    const image = new Image();
    image.src = `images/${number + 1}.jpg`;
    image.classList.add("background");
    body.appendChild(image);
}

function getRandom(){
    const num = Math.floor(Math.random() * IMG_NUM);
    return num ; 
}

function init(){
    const randomNum = getRandom();
    paintImage(randomNum);
}

init();