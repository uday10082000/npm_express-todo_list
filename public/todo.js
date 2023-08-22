 // Get elements
 const taskInput = document.getElementById("task-input");
 const addBtn = document.getElementById("add-btn");
 const todoList = document.getElementById("todo-list");
 const totalTasks = document.getElementById("total-tasks");
 let taskId = 0;
 
 // Function to create a new task item
 function createTaskItem(task) {
     const checkbox = document.createElement("input");
     checkbox.type = "checkbox";
     checkbox.addEventListener("change", toggleTaskCompleted);

     const label = document.createElement("label");
     label.innerText = task;

     const deleteBtn = document.createElement("span");
     deleteBtn.classList.add("delete-btn");
     deleteBtn.innerText = "Delete";
     deleteBtn.addEventListener("click", deleteTask);

     const taskItem = document.createElement("div");
     taskItem.classList.add("todo-item");
     taskItem.dataset.id = taskId++;
     taskItem.appendChild(checkbox);
     taskItem.appendChild(label);
     taskItem.appendChild(deleteBtn);

     return taskItem;
 }
 
 // Function to add a new task
 function addTask() {
     const task = taskInput.value.trim();
     if (task !== "") {
         const taskItem = createTaskItem(task);
         todoList.appendChild(taskItem);
         taskInput.value = "";
         updateTotalTasks();
     }
 }
 
 // Function to toggle task completed state
 function toggleTaskCompleted() {
     const taskItem = this.parentNode;
     taskItem.classList.toggle("completed");
 }
 
 // Function to delete a task
 function deleteTask() {
     const taskItem = this.parentNode;
     todoList.removeChild(taskItem);
     updateTotalTasks();
 }
 
 // Function to update total tasks count
 function updateTotalTasks() {
     totalTasks.innerText = todoList.children.length;
 }
 
 // Event listener for add button
 addBtn.addEventListener("click", addTask);
 
 // Event listener for Enter key press on input
 taskInput.addEventListener("keypress", function(event) {
     if (event.key === "Enter") {
         addTask();
     }
 });