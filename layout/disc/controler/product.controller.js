import { SProduct } from "../services/product.service.js";
import { VProduct } from "../view/product.view.js";
import { SCategory } from "../services/category.service.js";
export class CProduct {
    index() {
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
            });
        });
    }
    deleteProduct = () => {
        window.onload = () => {
            let deletePro = document.querySelectorAll('.deletePro');
            deletePro.forEach(element => {
                element.addEventListener('click', (e) => {
                    let taget = e.target;
                    let id = taget.getAttribute('data-id');
                    let sPro = new SProduct();
                    sPro.deletePro(id);
                    window.location.reload();
                });
            });
        };
    };
    addPro = () => {
        const productForm = document.getElementById("productForm");
        if (!productForm)
            console.log(1);
        productForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            const name = document.getElementById("productName").value;
            const img = document.getElementById("productImage").value;
            const scientific_name = document.getElementById("scientificName").value;
            const category = document.getElementById("category").value;
            const price = document.getElementById("price").value;
            const discountprice = document.getElementById("discountPrice").value;
            const data = { name, img, scientific_name, category, price, discountprice };
            let sPro = new SProduct();
            sPro.addProduct(data);
        });
    };
}
