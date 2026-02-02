const todoForm = document.querySelector('.todo-app__form'); 
const todoInput = document.querySelector('.todo-app__input'); 
const todoList = document.querySelector('.todo-app__list'); 

const todoAdd = document.querySelector('.todo-app__button'); 

todoForm.addEventListener('submit', function(e){ e.preventDefault();
  const taskText = todoInput.value.trim(); 
  if (taskText !== ""){ 
    const listItem = document.createElement("li"); 
    listItem.className = "todo-app__item"; 
    const deleteButton = document.createElement("button"); 
    deleteButton.className = "todo-app__delete"; 
    deleteButton.innerHTML =  '<ion-icon class="icon-check" name="checkmark-outline"></ion-icon>'; 

    const taskSpan = document.createElement('span'); 
    taskSpan.className = 'todo-app__text'; 
    taskSpan.textContent = taskText; 
    listItem.appendChild(deleteButton); 
    listItem.appendChild(taskSpan); 
    todoList.appendChild(listItem); 
    todoInput.value = ""; } 
});

todoList.addEventListener('click', function(e){
 const deleteButton = e.target.closest('.todo-app__delete');
 if (!deleteButton) return;
  deleteButton.classList.add('pressed');
  setTimeout(() => { deleteButton.closest('.todo-app__item').remove(); }, 150);
 });

