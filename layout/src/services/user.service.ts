import { MUser } from '../model/user.model.js'

export class SUser {
    root:string = 'http://localhost:3000/users'; 
    public async getUser(){
        let res = await fetch(this.root);
        let data = await res.json();
        let users: MUser[] = data.result.map((c:any) => {
            return new MUser(c.id,c.name,c.avatar,c.email,c.address,c.phone_number,c.role)  
        })
        return users;
    }
    public async deleteUser(id:string){
        let res = await fetch(`${this.root}/deleteUser/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
    }
    // thêm, sửa
    public async addUser(data: object){
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
            } else {
                alert("Lỗi: " + result.message);
            }
        } catch (error) {
            console.error("Lỗi khi thêm User", error);
            alert("Có lỗi xảy ra!");
        }
    }
}