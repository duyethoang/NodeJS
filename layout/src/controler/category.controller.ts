import { VCategory } from "../view/category.view.js";
import { SCategory } from "../services/category.service.js";
import { MCategory } from "../model/category.model.js";

export class CCategory {
    public index(): void{
        let v = new VCategory();
        let s = new SCategory();
        s.getCategory().then(data => {
            v.showCategory(data);
            v.showCategoryadmin(data);
            this.actionCate();
            this.editCate();
        })
    }
    public actionCate = () => {
        
            let deleteCate = document.querySelectorAll('.deleteCate');
            deleteCate.forEach(element => {
                element.addEventListener('click', (e) => {
                    let target = e.target as HTMLButtonElement;
                    let id = target.getAttribute('data-id') as string;
                    let sCate = new SCategory();
                    sCate.deleteCate(id);
                    window.location.reload();
                });
            });
    }
    public editCate = ()=>{
        window.onload=()=>{
            let editButton = document.querySelectorAll(".updateCate");
            let categoryFormEdit = document.getElementById("categoryForm") as HTMLFormElement;
            editButton.forEach(element=>{
                element.addEventListener('click', async (e)=>{
                    let popUpOverlay = document.querySelector('.popup-overlay') as HTMLElement;
                    let categoryGroup = document.getElementById('categoryPopup') as HTMLElement;
                    popUpOverlay.style.display = 'block';
                    categoryGroup.style.display = 'block';
                    let title = document.getElementById('popup-title') as HTMLElement;
                    let btnCate = document.getElementById('btnCate') as HTMLElement;
                    title.innerText='Update Category';
                    btnCate.innerText = 'Cập Nhật';
                    let target = e.target as HTMLButtonElement;
                    let id = target.getAttribute('data-id') as string;
                    let sCate = new SCategory();
                    let showInfor= await sCate.getCategoryById(id);
                    console.log(showInfor);
                    const categoryNameInput = document.getElementById('categoryName') as HTMLInputElement | null;
                    const categoryImgInput = document.getElementById('categoryImage') as HTMLInputElement | null;
                    const descriptionInput = document.getElementById('Description') as HTMLInputElement | null;
                    if (categoryNameInput) categoryNameInput.value = showInfor.Name ?? "";
                    if (categoryImgInput) categoryImgInput.value = showInfor.Img ?? "";
                    if (descriptionInput) descriptionInput.value = showInfor.Description ?? "";
                    categoryFormEdit.addEventListener('submit',async (e)=>{
                        const name = (document.getElementById("categoryName") as HTMLInputElement).value;
                        const img = (document.getElementById("categoryImage") as HTMLInputElement).value;
                        const description = (document.getElementById("Description") as HTMLInputElement).value;
                        let btnCate = document.getElementById('btnCate') as HTMLButtonElement;
                        if(btnCate.innerText === 'Cập Nhật'){
                            const data = { name, img, description };
                            let sCate = new SCategory();
                            sCate.editCate(data,id);
                        }
                    })

                })
            })
           
        }
    }
    public addCate=()=>{
        const categoryForm = document.getElementById("categoryForm") as HTMLFormElement;
        if (!categoryForm)  console.log(1);
        categoryForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            const name = (document.getElementById("categoryName") as HTMLInputElement).value;
            const img = (document.getElementById("categoryImage") as HTMLInputElement).value;
            const description = (document.getElementById("Description") as HTMLInputElement).value;
            let btnCate = document.getElementById('btnCate') as HTMLButtonElement;
            if(btnCate.innerText === 'Thêm'){
                const data = { name, img, description };
                let sCate = new SCategory();
                sCate.addCate(data);
            }
        })
}
}