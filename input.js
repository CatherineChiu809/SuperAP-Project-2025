function displayValue() {
    // Get a reference to the button (this isn't strictly necessary here)
    const subButton = document.getElementById("sub");

    // Define the function to execute on click
    function handleSubmit(event) {
        event.preventDefault(); // Prevent form submission (default behavior)

        const inputElement = document.getElementById("task");
        const newTask = inputElement.value; // Get the value from the input
        const taskList = document.getElementById("taskList");

        // Append the new task to the task list
        taskList.innerHTML += newTask + "<br>"; // Adds new task with a line break

        // Clear the input field
        inputElement.value = "";
    }

    // Get the form element by its ID and attach the event listener
    const formElement = document.getElementById("taskForm");
    formElement.addEventListener("submit", handleSubmit);
}

// Call displayValue when the DOM is loaded
window.onload = displayValue;