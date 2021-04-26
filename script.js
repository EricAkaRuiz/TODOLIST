//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-Button");
const todoList = document.querySelector(".todo-List");

//Event listeners
 
todoButton.addEventListener("click", addTodo);

 //Functions

function addTodo(event) {
    //Prevent Form From submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newtodo = document.createElement('li');
    newtodo.innerText = 'hey';
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check MARK Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    //PPEND TO LIST
    todoList.appendChild(todoDiv);
}