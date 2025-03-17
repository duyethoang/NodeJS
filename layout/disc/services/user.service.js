import { MUser } from '../model/user.model.js';
export class SUser {
    root = 'http://localhost:3000/users';
    async getUser() {
        let res = await fetch(this.root);
        let data = await res.json();
        let users = data.result.map((c) => {
            return new MUser(c.id, c.name, c.avatar, c.email, c.address, c.phone_number, c.role);
        });
        return users;
    }
    async deleteUser(id) {
        let res = await fetch(`${this.root}/deleteUser/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
    }
    // thêm, sửa
    async addUser(data) {
        try {
            const response = await fetch(`${this.root}/addUser`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (result.status) {
                alert("Thêm User thành công!");
                window.location.reload();
            }
            else {
                alert("Lỗi: " + result.message);
            }
        }
        catch (error) {
            console.error("Lỗi khi thêm User", error);
            alert("Có lỗi xảy ra!");
        }
    }
}
