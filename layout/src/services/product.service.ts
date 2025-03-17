import { MProduct } from "../model/product.model.js";

export class SProduct {
    root:string = 'http://localhost:3000/'; 
    public async getProduct(){
        let res = await fetch(this.root+"products");
        let data = await res.json();
        console.log(data);
        let products:MProduct[] = data.result.map((c:any) => {
            return new MProduct(c.id,c.name,c.price,c.product_code,c.scientific_name,c.difficulty,c.category, c.discount_price, c.sales,c.description ,c.img,c.waters,c.date)
        })
        return products;
    }

    public async deletePro(id:string){
        let res = await fetch(`${this.root}products/deletePro/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
    }

    public async addProduct(data: object){
        try {
            const response = await fetch(`${this.root}products/addPro`, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (result.status) {
                alert("Thêm danh mục thành công!");
                window.location.reload();
            } else {
                alert("Lỗi: " + result.message);
            }
        } catch (error) {
            console.error("Lỗi khi thêm danh mục", error);
            alert("Có lỗi xảy ra!");
        }
    }
}