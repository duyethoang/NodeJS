 import { SProduct } from "../services/product.service.js";
 import { VProduct } from "../view/product.view.js";
 import { MProduct } from "../model/product.model.js";
import { SCategory } from "../services/category.service.js";
import { VCategory } from "../view/category.view.js";
 
 export class CProduct {
    public index(): void{
        let v = new VProduct();
        // let a = new MProduct();
        let s = new SProduct();
        let sCate = new SCategory();
        s.getProduct().then((data) => {
            console.log(data);
            v.showNewProduct(data);
            v.showProductAdmin(data);
            v.showCategoryProducts(data);
            v.showCategoryProducts_1(data);
            sCate.getCategory().then(data => {
                v.showlistcate(data);
            })
        })
    }

    public deleteProduct =()=>{
        window.onload=()=>{
            let deletePro = document.querySelectorAll('.deletePro');
            deletePro.forEach(element => {
                element.addEventListener('click',(e)=>{
                    let taget = e.target as HTMLButtonElement;
                    let id = taget.getAttribute('data-id') as string;
                    let sPro = new SProduct();
                    sPro.deletePro(id)
                    window.location.reload()    
                })
            });
        }
    }

    public addPro=()=>{
            const productForm = document.getElementById("productForm") as HTMLFormElement;
            if (!productForm)  console.log(1);
            productForm.addEventListener("submit", async function (e) {
                e.preventDefault();
                const name = (document.getElementById("productName") as HTMLInputElement).value;
                const img = (document.getElementById("productImage") as HTMLInputElement).value;
                const scientific_name = (document.getElementById("scientificName") as HTMLInputElement).value;
                const category = (document.getElementById("category") as HTMLInputElement).value;
                const price = (document.getElementById("price") as HTMLInputElement).value;
                const discountprice = (document.getElementById("discountPrice") as HTMLInputElement).value;
                const data = { name, img, scientific_name,category, price,discountprice};
                let sPro = new SProduct();
                sPro.addProduct(data);
        })
    }
}