function displayValue() {
    // Get a reference to the button
    let todoList = [];
    const subButton = document.getElementById("sub");

    // Define the function to execute on click
    function handleSubmit(event) {
        event.preventDefault();
        const inputElement = document.getElementById("task");
        const newTask = inputElement.value;
        const newObject = new atask(newTask);
        const taskList = document.getElementById("taskList");
        taskList.innerHTML += newTask + "<br>";
        todoList.push(newObject);
        inputElement.value = "";
    }
    // Attach the event listener
    const formElement = document.getElementById("taskForm");
    formElement.addEventListener("submit", handleSubmit);
}
window.onload = displayValue;