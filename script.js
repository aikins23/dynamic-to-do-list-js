document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Array to hold tasks
    let tasks = [];

    // --- Load tasks from Local Storage ---
    tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    tasks.forEach(taskText => {
        createTaskElement(taskText);
    });

    // --- Function to create task element ---
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Remove task on button click
        removeButton.onclick = function() {
            taskList.removeChild(li);

            const index = tasks.indexOf(taskText);
            if (index > -1) {
                tasks.splice(index, 1);                     // remove from array
                localStorage.setItem('tasks', JSON.stringify(tasks)); // update Local Storage
            }
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    // --- Function to add new task ---
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert("Please enter a task");
            return;
        }

        createTaskElement(taskText);       // add to DOM
        tasks.push(taskText);              // add to array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // update Local Storage

        taskInput.value = '';               // clear input
    }

    // --- Event listeners ---
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') addTask();
    });

});
