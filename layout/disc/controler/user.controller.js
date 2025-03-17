import { VUser } from "../view/user.view.js";
import { SUser } from "../services/user.service.js";
export class CUser {
    index() {
        let v = new VUser();
        let s = new SUser();
        s.getUser().then(data => {
            v.showUseradmin(data);
            this.resUser();
        });
    }
    deleteUser = () => {
        window.onload = () => {
            let deleteCate = document.querySelectorAll('.delete');
            deleteCate.forEach(element => {
                element.addEventListener('click', (e) => {
                    let target = e.target;
                    let id = target.getAttribute('data-id');
                    let sCate = new SUser();
                    sCate.deleteUser(id);
                    window.location.reload();
                });
            });
        };
    };
    addUser = () => {
        const userForm = document.getElementById("userForm");
        if (!userForm)
            return;
        userForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            const username = document.getElementById("userName").value;
            const avatar = document.getElementById("Avatar").value;
            const email = document.getElementById("Email").value;
            const phone_number = document.getElementById("userPhone").value;
            const address = document.getElementById("address").value;
            const password = document.getElementById("PassWord").value;
            const data = { username, avatar, email, phone_number, address, password };
            try {
                let sUser = new SUser();
                await sUser.addUser(data);
                alert("Đăng ký USER thành công!");
            }
            catch (error) {
                console.error("Lỗi khi đăng ký:", error);
                alert("Có lỗi xảy ra khi đăng ký!");
            }
        });
    };
    resUser = () => {
        const userForm = document.getElementById("userFormRes");
        if (!userForm)
            return;
        userForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            const username = document.getElementById("userName").value;
            const email = document.getElementById("Email").value;
            const password = document.getElementById("PassWord").value;
            const data = { username, email, password };
            try {
                let sUser = new SUser();
                await sUser.addUser(data);
                alert("Đăng ký USER thành công!");
            }
            catch (error) {
                console.error("Lỗi khi đăng ký:", error);
                alert("Có lỗi xảy ra khi đăng ký!");
            }
        });
    };
}
