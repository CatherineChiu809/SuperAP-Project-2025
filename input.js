function displayValue() {
    // Get the input element and its value


    // Get a reference to the button
    const subButton = document.getElementById("sub");

    // Define the function to execute on click
    function handleClick() {
        console.log("Button was clicked!");
        const inputElement = document.getElementById("task");
        const newTask = inputElement.value;
        document.getElementById("taskList").innerHTML += newTask;
    }
    // Attach the event listener
    myButton.addEventListener("click", handleClick);
}