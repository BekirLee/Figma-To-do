let listsUl = document.querySelector('.listsUl');
let todoInput = document.querySelector('.todoInput')
let todoListForm = document.querySelector('.todoList-form');

let todos = [];

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
    listsUl.innerHTML += `  
    <li class="addedList lists">
        <div class="addedList_checkbox">
                <input type="checkbox" name="" id="" class="mainCheckbox">
                <p class='name' >${todoInput.value}</p>
        </div>
            <div class="otherBtns">
                  <div class="btns">
                     <button>Delete</button>
                     <button>Edit</button>
                 </div>
            </div>
    </li>`;

    todoInput.value = '';
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(todos);
})


// todoInput.addEventListener('keyup', (e) => {
//     if (e.key === 'Enter') {
//         console.log(todo);
//     }
// })


// console.log('hello')