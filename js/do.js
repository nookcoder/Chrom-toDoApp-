const doForm = document.querySelector('.js-toDo'),
    doInput = doForm.querySelector('input'),
    doList = document.querySelector('.todolist');


const TODOS_LS = "toDos";

let toDos = [];

function delToDo(event){
    const btn = event.target; 
    const li = btn.parentNode; 
    doList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos ; 
    saveToDos(); 
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const num  = toDos.length + 1; 
    delBtn.innerText = 'X'; 
    delBtn.addEventListener('click', delToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = num; 
    doList.appendChild(li);
    const toDoObj = { 
        text : text, 
        id : toDos.length + 1 
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handlSubimt(event){
    event.preventDefault();
    const currentInput = doInput.value ; 
    paintToDo(currentInput);
    doInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const paredToDos = JSON.parse(loadedToDos);
        paredToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}


function init(){
    loadToDos();
    doForm.addEventListener("submit", handlSubimt);
}

init(); 