document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const tableBody = document.querySelector('#contacts tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${phone}</td>
        `;
        tableBody.appendChild(newRow);

        nameInput.value = '';
        phoneInput.value = '';
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    
    var table = document.getElementById("contacts").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = phone + ' <button class="delete-btn" onclick="deleteContact(this)">X</button>';
    
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
});

function deleteContact(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
