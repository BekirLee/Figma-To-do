let listsUl = document.querySelector('.listsUl');
let todoInput = document.querySelector('.todoInput')
let todoListForm = document.querySelector('.todoList-form');

let todos = JSON.parse(localStorage.getItem('todos')) || []; // nullish operators


// function addList() {
todoListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let todo = todoInput.value.trim();

    let taskInfo = {
        name: todo,
        completed: "pending",
    }

    todos.push(taskInfo);

    console.log(todo);
    listsUl.innerHTML = '';

    todos.forEach((todo, id) => {
        listsUl.innerHTML += `  
        <li class="addedList lists" id='${id}'>
            <div class="addedList_checkbox">
                    <input type="checkbox" name="" id="" class="mainCheckbox">
                    <p class='name' >${todo.name}</p>
            </div>
            <div class="otherBtns">
                <div class="btns">
                    <button  onclick="updateTodo(this)" >Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        </li>`;


    })

    todoInput.value = '';
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(todos);
})

function updateTodo(e) {
    // let parentElement = e.parentElement;
    console.log(e);
}
updateTodo()


// let getItemed = localStorage.getItem('todos', JSON.parse(todos));
// console.log(getItemed);

// todoInput.addEventListener('keyup', (e) => {
//     if (e.key === 'Enter') {
//         console.log(todo);
//     }
// })


// console.log('hello')