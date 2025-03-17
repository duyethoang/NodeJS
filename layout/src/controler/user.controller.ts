import { VUser } from "../view/user.view.js";
import { SUser } from "../services/user.service.js";
import { MUser } from "../model/user.model.js";

export class CUser {
    public index(): void{
        let v = new VUser();
        let s = new SUser();
        s.getUser().then(data => {
            v.showUseradmin(data);
            this.resUser();
        })
    }
    public deleteUser = () => {
            window.onload = () => {
                let deleteCate = document.querySelectorAll('.delete');
                deleteCate.forEach(element => {
                    element.addEventListener('click', (e) => {
                        let target = e.target as HTMLButtonElement;
                        let id = target.getAttribute('data-id') as string;
                        let sCate = new SUser();
                        sCate.deleteUser(id);
                        window.location.reload();
                    });
                });
            };
        }
    public addUser=()=>{
            const userForm = document.getElementById("userForm") as HTMLFormElement;
            if (!userForm)  return;
            userForm.addEventListener("submit", async function (e) {
                e.preventDefault();
                const username = (document.getElementById("userName") as HTMLInputElement).value;
                const avatar = (document.getElementById("Avatar") as HTMLInputElement).value;
                const email = (document.getElementById("Email") as HTMLInputElement).value;
                const phone_number = (document.getElementById("userPhone") as HTMLInputElement).value;
                const address = (document.getElementById("address") as HTMLInputElement).value;
                const password = (document.getElementById("PassWord") as HTMLInputElement).value;
                const data = { username, avatar, email,phone_number,address,password };
                try {
                    let sUser = new SUser();
                    await sUser.addUser(data);
                    alert("Đăng ký USER thành công!");
                } catch (error) {
                    console.error("Lỗi khi đăng ký:", error);
                    alert("Có lỗi xảy ra khi đăng ký!");
                }
        })
    }
    public resUser=()=>{
        const userForm = document.getElementById("userFormRes") as HTMLFormElement;
        if (!userForm)  return;
        userForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            const username = (document.getElementById("userName") as HTMLInputElement).value;
            const email = (document.getElementById("Email") as HTMLInputElement).value;
            const password = (document.getElementById("PassWord") as HTMLInputElement).value;
            const data = { username, email,password };
            try {
                let sUser = new SUser();
                await sUser.addUser(data);
                alert("Đăng ký USER thành công!");
            } catch (error) {
                console.error("Lỗi khi đăng ký:", error);
                alert("Có lỗi xảy ra khi đăng ký!");
            }
    })
}

}