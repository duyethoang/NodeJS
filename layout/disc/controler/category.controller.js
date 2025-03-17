import { VCategory } from "../view/category.view.js";
import { SCategory } from "../services/category.service.js";
export class CCategory {
    index() {
        let v = new VCategory();
        let s = new SCategory();
        s.getCategory().then(data => {
            v.showCategory(data);
            v.showCategoryadmin(data);
            this.actionCate();
            this.editCate();
        });
    }
    actionCate = () => {
        let deleteCate = document.querySelectorAll('.deleteCate');
        deleteCate.forEach(element => {
            element.addEventListener('click', (e) => {
                let target = e.target;
                let id = target.getAttribute('data-id');
                let sCate = new SCategory();
                sCate.deleteCate(id);
                window.location.reload();
            });
        });
    };
    editCate = () => {
        window.onload = () => {
            let editButton = document.querySelectorAll(".updateCate");
            let categoryFormEdit = document.getElementById("categoryForm");
            editButton.forEach(element => {
                element.addEventListener('click', async (e) => {
                    let popUpOverlay = document.querySelector('.popup-overlay');
                    let categoryGroup = document.getElementById('categoryPopup');
                    popUpOverlay.style.display = 'block';
                    categoryGroup.style.display = 'block';
                    let title = document.getElementById('popup-title');
                    let btnCate = document.getElementById('btnCate');
                    title.innerText = 'Update Category';
                    btnCate.innerText = 'Cập Nhật';
                    let target = e.target;
                    let id = target.getAttribute('data-id');
                    let sCate = new SCategory();
                    let showInfor = await sCate.getCategoryById(id);
                    console.log(showInfor);
                    const categoryNameInput = document.getElementById('categoryName');
                    const categoryImgInput = document.getElementById('categoryImage');
                    const descriptionInput = document.getElementById('Description');
                    if (categoryNameInput)
                        categoryNameInput.value = showInfor.Name ?? "";
                    if (categoryImgInput)
                        categoryImgInput.value = showInfor.Img ?? "";
                    if (descriptionInput)
                        descriptionInput.value = showInfor.Description ?? "";
                    categoryFormEdit.addEventListener('submit', async (e) => {
                        const name = document.getElementById("categoryName").value;
                        const img = document.getElementById("categoryImage").value;
                        const description = document.getElementById("Description").value;
                        let btnCate = document.getElementById('btnCate');
                        if (btnCate.innerText === 'Cập Nhật') {
                            const data = { name, img, description };
                            let sCate = new SCategory();
                            sCate.editCate(data, id);
                        }
                    });
                });
            });
        };
    };
    addCate = () => {
        const categoryForm = document.getElementById("categoryForm");
        if (!categoryForm)
            console.log(1);
        categoryForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            const name = document.getElementById("categoryName").value;
            const img = document.getElementById("categoryImage").value;
            const description = document.getElementById("Description").value;
            let btnCate = document.getElementById('btnCate');
            if (btnCate.innerText === 'Thêm') {
                const data = { name, img, description };
                let sCate = new SCategory();
                sCate.addCate(data);
            }
        });
    };
}
