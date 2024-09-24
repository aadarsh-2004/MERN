async function fetchAndDisplayUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const userList = document.getElementById('userList');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Name:</strong> ${user.name} <br>
                <strong>Email:</strong> ${user.email} <br>
                <strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}
            `;
            userList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

fetchAndDisplayUsers();
