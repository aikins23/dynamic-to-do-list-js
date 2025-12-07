document.addEventListener('DOMContentLoaded', function(){
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskInput === ''){
        alert = "Please enter a task";
        return;
    }
        const li = document.createElement('li')
        li.textContent = taskText;

    
        const removeButton = document.createElement('button'); // <button></button>
        removeButton.textContent = "Remove";                  // sets button text
        removeButton.className = 'remove-btn';  
        
        
        removeButton.onclick = function() {
            taskList.removeChild(li);
            
        };
        
        li.appendChild(removeButton);
        taskList.appendChild(li);


        taskInput.value = '';
    }


    // Add task on button click
addButton.addEventListener('click', addTask);

// Add task on pressing Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

    
}




); 