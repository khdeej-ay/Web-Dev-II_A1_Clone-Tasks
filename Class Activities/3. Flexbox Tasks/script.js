const todoInput = document.getElementById('todoInput');
const addTodo = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

addTodo.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task !== '') {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const taskText = document.createElement('span');
        taskText.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(taskText);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);

        todoInput.value = '';
    }
});

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodo.click();
    }
});