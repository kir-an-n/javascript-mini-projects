const prompt = require("prompt-sync")();

let contacts = [];

function printInfo() {
    console.log("\nContact Management System");
    console.log("-------------------------------");
    console.log("1. Add a Contact");
    console.log("2. Delete a Contact");
    console.log("3. Search Contacts");
    console.log("4. View Contacts");
    console.log("5. Exit");
}

function addContact() {
    const name = prompt("Name: ");
    const email = prompt("Email: ");
    const contact = {
        name: name,
        email: email
    };
    contacts.push(contact);
    console.log("Contact added!");
}

function deleteContact() {
    if (contacts.length === 0) {
        console.log("No contacts to delete.");
        return;
    }

    console.log("\nContact List:");
    for (let i = 0; i < contacts.length; i++) {
        console.log(`${i + 1}: ${contacts[i].name}`);
    }

    const number = parseInt(prompt("Enter the ID to delete: "));
    if (isNaN(number) || number < 1 || number > contacts.length) {
        console.log("Invalid ID.");
        return;
    }

    contacts.splice(number - 1, 1);
    console.log("Contact removed.");
}

function searchContact() {
    if (contacts.length === 0) {
        console.log("No contacts to search.");
        return;
    }

    const query = prompt("Enter name or email to search: ").toLowerCase();
    const results = contacts.filter(contact =>
        contact.name.toLowerCase().includes(query) ||
        contact.email.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        console.log("No matching contacts found.");
    } else {
        console.log("Search Results:");
        listContact(results);
    }
}

function listContact(contactList) {
    if (contactList.length === 0) {
        console.log("No contacts to display.");
        return;
    }

    for (let contact of contactList) {
        console.log("Name:", contact.name);
        console.log("Email:", contact.email);
        console.log("-------------------------");
    }
}

// Main program loop
let keepGoing = true;

while (keepGoing) {
    printInfo();
    const number = prompt("Enter an operation (1-5): ");
    switch (number) {
        case "1":
            addContact();
            break;
        case "2":
            deleteContact();
            break;
        case "3":
            searchContact();
            break;
        case "4":
            listContact(contacts);
            break;
        case "5":
            keepGoing = false;
            console.log("Goodbye!");
            break;
        default:
            console.log("Invalid choice. Please select 1-5.");
    }
}
