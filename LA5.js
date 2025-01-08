//Create a simple hash table
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 10; // Simple hash table size of 10
}

// Initialize an empty hash table
let customerHashTable = new Array(10).fill(null);

// Function to add a customer to the hash table
function addCustomer(name) {
    let index = hashFunction(name);
    // Handle collision by finding the next available slot
    while (customerHashTable[index] !== null) {
        index = (index + 1) % customerHashTable.length;
    }
    customerHashTable[index] = name;
    alert("Customer", name," added to number ",(index + 1));
}

// Function to service a customer
function serviceCustomer(number) {
    const index = number - 1; // Convert to zero-based index
    if (index >= 0 && index < customerHashTable.length && customerHashTable[index] !== null) {
        const customerName = customerHashTable[index];
        alert(`Servicing customer: ${customerName}`);
        // Remove the serviced customer from the hash table
        customerHashTable[index] = null;
        console.log("Updated Hash Table: ",customerHashTable);
    } else {
        alert("Invalid number.");
    }
}

// Main program loop to add customers
for (let i = 0; i < 5; i++) {
    const customerName = prompt("Enter customer's name:");
    addCustomer(customerName);
}

// Service customers
while (customerHashTable.some(customer => customer !== null)) {
    // Show current hash table with only numbers
    let hashDisplay = customerHashTable.map((name, index) => name ? `${index + 1}` : null).filter(num => num !== null).join(", ");
    let serviceNumber = parseInt(prompt("Enter the customer number to be serviced:",hashDisplay));
    serviceCustomer(serviceNumber);
}