export class VUser {
    showUseradmin = (user) => {
        let divCateAll = document.querySelector('#users-admin');
        if (divCateAll) {
            user.forEach(element => {
                divCateAll.innerHTML += `
                    <td>${element.Id}</td>
                    <td>${element.Name}</td>
                    <td><img src="./public/img/user/${element.Avatar}" alt="${element.Name}" style="width: 50px; height: 50px; object-fit: cover;" /></td>
                    <td>${element.Email}</td>
                    <td>${element.Phone_number}</td>
                    <td>${element.Adress}</td>
                    <td>${element.Role}</td>
                    <td class="actions">
                        <button class="edit adduser">Edit</button>
                        <button class="delete" data-id="${element.Id}">Delete</button>
                    </td>
                `;
            });
        }
        else {
            console.error("Users not found.");
        }
    };
}
