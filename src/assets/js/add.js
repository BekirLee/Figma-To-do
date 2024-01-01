let listsUl = document.querySelector('.listsUl');
let todoInput = document.querySelector('.todoInput')
let todoListForm = document.querySelector('.todoList-form');

// function addList() {
todoListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(todoInput.value);
    listsUl.innerHTML += `  
    <li class="addedList">
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

    todoInput.value = ' ';
})

// }

console.log('hello')