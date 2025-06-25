'use strict'

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'

    const dataContainer = document.getElementById('api-data');
    
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Failed request");
        }
        const users = await response.json();


        dataContainer.innerHTML = '';

    const userList = document.createElement('ul');

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.username;

        userList.appendChild(li);
    });

    dataContainer.appendChild(userList)

    } catch(error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.'
        console.error('Not Processed', error);
    }
}


document.addEventListener('DOMContentLoaded', fetchUserData);
