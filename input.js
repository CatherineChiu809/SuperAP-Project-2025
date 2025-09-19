function displayValue() {
    let todoList = [];
    const subButton = document.getElementById("sub");

    // defines the function to execute on click
    function handleSubmit(event) {
        event.preventDefault();
        const inputElement = document.getElementById("task");
        const newTask = inputElement.value.trim();
        if (newTask === "") return; //checks if newTask is an empty string
        const taskList = document.getElementById("taskList");
        //makes a container to store checkbox and text
        const taskItem = document.createElement("div");
        //makes a checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        //makes span for each task in the list
        const taskText = document.createElement("span");
        taskText.textContent = " " + newTask;
        //make delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });
        //appends the checkbox, delete button and text to the task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);
        //appends task item to the list
        taskList.appendChild(taskItem);
        //adds to array of tasks
        todoList.push({ task: newTask, done: false });
        //clears input
        inputElement.value = "";
    }
    // calls event listener and runs method
    const formElement = document.getElementById("taskForm");
    formElement.addEventListener("submit", handleSubmit);
}
window.onload = displayValue;