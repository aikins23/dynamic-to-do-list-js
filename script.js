document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    let tasks = []; // Array to store tasks

    // ------------------------
    // Function to load tasks from Local Storage
    // ------------------------
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            createTaskElement(taskText);
            tasks.push(taskText); // keep array in sync
        });
    }

    // ------------------------
    // Function to create a task element in DOM
    // ------------------------
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Remove task on click
        removeButton.onclick = function() {
            taskList.removeChild(li);

            const index = tasks.indexOf(taskText);
            if (index > -1) {
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    // ------------------------
    // Function to add a new task
    // ------------------------
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert("Please enter a task");
            return;
        }

        createTaskElement(taskText); // Add task to DOM
        tasks.push(taskText);         // Add to tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Update Local Storage

        taskInput.value = ''; // Clear input field
    }

    // ------------------------
    // Event listeners
    // ------------------------
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') addTask();
    });

    // ------------------------
    // Initialize tasks on page load
    // ------------------------
    loadTasks();
});
