// Initialize customer queue
let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to display the current queue
function displayQueue() {
if (queue.length === 0) {
alert("The queue is currently empty.");
} else {
let queueDisplay = "Current Queue:\n";
for (let i = 0; i < queue.length; i++) {
queueDisplay += (i + 1) + ". " + queue[i] + "\n";
}
alert(queueDisplay);
}
}

// Function to service a customer
function serviceCustomer() {
    if (queue.length === 0) {
        alert("No customers to service.");
        return;
    }
 // Validate the input
    if (isNaN(number) || number < 1 || number > queue.length) {
        alert("Invalid number. Please enter a valid customer number.");
        return;
    }
}

// Main program loop
while (true) {
    // Display menu options
    let choice = prompt("1. Add customer\n2. Service customer\n3. Display queue\n4. Exit");

    // Add customer to queue
    if (choice == 1) {
        let name = prompt("Enter customer name:");
        queue.push(name);
        alert("Customer " + name + " added with number " + queue.length);
        console.log(queue);
    }

    // Service customer
    else if (choice == 2) {
        let number = parseInt(prompt("Enter the customer number to be serviced (1 to " + queue.length + "):"));
  // Get the customer's name and remove them from the queue
        const customerName = queue[number - 1];
    queue.splice(number - 1, 1);
    alert("Servicing customer: " + customerName);
        console.log(queue);
    }

    // Display queue
    else if (choice == 3) {
        displayQueue();
        console.log(queue);
    }

    // Exit program
    else if (choice == 4) {
        alert("Exiting the program.");
        break;
    }

    // Handle invalid input
    else {
        alert("Invalid choice. Please select a valid option.");
    }
}