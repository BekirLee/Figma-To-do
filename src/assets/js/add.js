let listsUl = document.querySelector('.listsUl');
let todoInput = document.querySelector('.todoInput')
let todoListForm = document.querySelector('.todoList-form');

let todos = JSON.parse(localStorage.getItem('todos')) || []; // nullish operators


function addList() {
    todoListForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let todo = todoInput.value.trim();

        let taskInfo = {
            name: todo,
            completed: "pending",
        }

        todos.push(taskInfo);

        console.log(todo);
        // console.log('hello');
        // console.log('hello');
        listsUl.innerHTML = '';

        todos.forEach((todo, id) => {
            let isCompleted = todo.completed === 'done' ? 'checked' : '';
            listsUl.innerHTML += `  
        <li class="addedList lists" id='${id}'>
            <div class="addedList_checkbox">
                    <input type="checkbox" name="" id="" class="mainCheckbox" ${isCompleted} onclick="updateTodo(this)"/>
                    <p class='name ${isCompleted}'  >${todo.name}</p>
            </div>
            <div class="otherBtns">
                <div class="btns">
                    <button >Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        </li>`;


        })

        todoInput.value = '';
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log(todos);
    })

}
addList();

function updateTodo(e) {
    let parent = e.parentElement.parentElement;
    let text = e.nextElementSibling;


    // console.log(checkbox);
    if (e.checked) {
        text.style.textDecoration = 'line-through';
        todos[parent.id].completed = 'done';
    }
    else {
        text.style.textDecoration = 'none';
        todos[parent.id].completed = 'pending';
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}



