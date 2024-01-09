let listsUl = document.querySelector('.listsUl');
let todoInput = document.querySelector('.todoInput')
let todoListForm = document.querySelector('.todoList-form');
let editId;
let edited = false;

let todos = JSON.parse(localStorage.getItem('todos')) || []; // nullish operators

// function addList() {

todoListForm.addEventListener('submit', (e) => {
    let todo = todoInput.value.trim();
    if (edited) {
        todos[editId].name = todo;
    }
    else {
        let taskInfo = {
            name: todo,
            completed: "pending",
        }

        todos.push(taskInfo);

    }

    console.log(todo);

    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(todos);
    showForm();
    // e.preventDefault();

})

// }

function showForm() {


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
                    <button onclick="deleteTodo(${id})">Delete</button>
                    <button onclick="editTodo(${id},'${todo.name}')">Edit</button>
                </div>
            </div>
        </li>`;


    })

    todoInput.value = '';

}
showForm();

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


function deleteTodo(todoId) {
    todos.splice(todoId, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    showForm();
    console.log(todos);
}

function editTodo(todoId, todoText) {
    edited = true;
    editId = todoId;
    todoInput.value = todoText;
    console.log(todoId, todoText)
}

//! Theme switching side 

const themeIcon = document.querySelector(".shapeIcon");
// const root = document.querySelector(":root");
themeIcon.addEventListener("click", function () {
    // console.log('hello')
    document.body.classList.toggle("active");
    //* Dark Theme on 
    if (document.body.classList.contains("active")) {
        themeIcon.querySelector("img").src = "src/assets/img/Combined Shape.svg";
        localStorage.setItem("theme", "dark");

        root.style.setProperty("$white", "$mercury");
        root.style.setProperty("$mulledWine", "$mulledWine");
    }
    //* Light Theme on
    else {
        themeIcon.querySelector("img").src = "src/assets/img/icons8-sun-50.png";
        localStorage.setItem("theme", "light");
    }
});
