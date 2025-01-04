const addButton = document.getElementById('add-task-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function createTaskItem(taskText) {
    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    return listItem;
}

function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText !== '') {
        const taskItem = createTaskItem(taskText);
        todoList.appendChild(taskItem);
        todoInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}

addButton.addEventListener('click', addTask);

todoInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
