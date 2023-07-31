const textInputDOM = document.getElementById("todo-input");
const btnAddTodoDOM = document.getElementById("add-todo");
const todosDOM = document.getElementById("todos");
const deleteDOM = document.getElementById("delete-todo")
const listDOM = document.querySelector('.list-container')
const btnClearDOM = document.querySelector("#clear-todos")

let todosArr = [];



getData();
function addTodos(e) {
    e.preventDefault()
    if (textInputDOM.value.length > 0 && !textInputDOM.value.replace(/\s/g, '').length || textInputDOM.value === '') {
        openModal()
    } else {
        let li = document.createElement('li');
        let p = document.createElement('span');
        let btn = document.createElement('button');
        p.innerHTML = textInputDOM.value;
        btn.innerHTML = `delete`;
        li.appendChild(p);
        li.appendChild(btn);
        listDOM.prepend(li);
        openModal1()
    }
    textInputDOM.value = '';
    saveData();

}
clearTodos = (e) => {
    e.preventDefault();
    listDOM.innerHTML = ''
    saveData();
}

btnAddTodoDOM.addEventListener('click', addTodos);
btnClearDOM.addEventListener('click', clearTodos);

listDOM.addEventListener('click', function (e) {
    if (e.target.tagName == 'SPAN') {
        e.target.classList.toggle('checked')






    } else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove()
    }

    saveData();
});

function saveData() {
    localStorage.setItem('list', listDOM.innerHTML);
};

function getData() {
    listDOM.innerHTML = localStorage.getItem('list');
};

function openModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    setTimeout(function () {
        closeModal();
    }, 1250);
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    const modal1 = document.getElementById("myModal1");
    modal1.style.display = "none";
};

function openModal1() {
    const modal = document.getElementById("myModal1");
    modal.style.display = "block";

    setTimeout(function () {
        closeModal();
    }, 1250);
}
