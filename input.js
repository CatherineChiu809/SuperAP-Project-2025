function displayValue() {
    // Get a reference to the button
    const subButton = document.getElementById("sub");

    // Define the function to execute on click
    function handleSubmit(event) {
        event.preventDefault();
        const inputElement = document.getElementById("task");
        const newTask = inputElement.value;
        const taskList = document.getElementById("taskList");
        taskList.innerHTML += newTask + "<br>";
        inputElement.value = "";
    }
    // Attach the event listener
    const formElement = document.getElementById(taskForm);
    formElement.addEventListener("submit", handleSubmit);
}
window.onload = displayValue;