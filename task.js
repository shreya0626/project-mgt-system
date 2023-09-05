// Define the assignedTasks array and taskList in the global scope
const assignedTasks = [];
const taskList = document.getElementById("task-list");
const adminAssignedTasks = [];
// Define the taskForm variable
const taskForm = document.getElementById("task-form");

// Function to display tasks
function displayTasks() {
    // Clear the current task list
    taskList.innerHTML = "";

    // Loop through assignedTasks and display them
    assignedTasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <strong>Task:</strong> ${task.taskName}<br><br>
            <strong>Assigned to:</strong> ${task.assignedTo}<br><br>
            <strong>Status:</strong> ${task.completed ? 'Completed' : 'Incomplete'}<br><br>
            <button onclick="updateTaskStatus(${index})">Mark as Completed</button><br>
        `;
        taskList.appendChild(taskItem);
    });
}

function updateTaskStatus(index) {
    assignedTasks[index].completed = !assignedTasks[index].completed;
    displayTasks(); // Update the task list to reflect the changed status
}
// 
// Event listener for the task form
taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskName = document.getElementById("task-name").value;
    const assignedTo = document.getElementById("assigned-to").value;

    if (taskName.trim() === "" || assignedTo.trim() === "") {
        alert("Please fill out both fields.");
        return;
    }

    // Add the task to the assignedTasks array
    assignedTasks.push({ taskName, assignedTo });

    
    displayTasks();

    // Clear input fields
    document.getElementById("task-name").value = "";
    document.getElementById("assigned-to").value = "";
});




// Event listener for the logout button
document.getElementById("logout-button").addEventListener("click", function () {
    // Redirect back to the login page
    window.location.href = "index.html";
});

// Initial display of tasks
displayTasks();

