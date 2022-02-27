let newTask = document.querySelector('#new-task');
let todo = document.getElementById('items');
const form = document.querySelector('form');
let completeUl = document.querySelector('.complete-list ul');


//functions
let createTask = (task) => {
    let listItem = document.createElement('li');
    // console.log(task);
    let checkBox = document.createElement('input');
    let label = document.createElement('label');
    listItem.className = 'item';
    label.innerText = task;
    checkBox.type = 'checkbox';
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    return listItem;
}

// add function
const addTask = (event) => {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    console.log(listItem);
    todo.appendChild(listItem);
    newTask.value = '';
    bindIncomplete(listItem, completeTask);

}

const completeTask = function() {
    let listItem = this.parentNode;
    // console.log(listItem);
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);
    console.log(deleteBtn);
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove('');
    completeUl.appendChild(listItem);
    bindComplete(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindIncomplete = (taskItem,checkboxclick) => {
    let checkBox = taskItem.querySelector('input[type="checkbox"]'); 
    checkBox.onchange = checkboxclick;

}
const bindComplete = (taskItem,deleteBtnClick) => {
    let deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.onclick = deleteBtnClick;
}
form.addEventListener("submit", addTask);
