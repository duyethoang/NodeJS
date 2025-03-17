import { MCategory } from '../model/category.model.js';
export class SCategory {
    root = 'http://localhost:3000/categories';
    async getCategory() {
        let res = await fetch(this.root);
        let data = await res.json();
        let categories = data.result.map((c) => {
            return new MCategory(c.id, c.name, c.img, c.description);
        });
        return categories;
    }
    async deleteCate(id) {
        let res = await fetch(`${this.root}/deleteCate/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
    }
    // thêm, sửa
    async addCate(data) {
        try {
            const response = await fetch(`${this.root}/addCate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (result.status) {
                alert("Thêm danh mục thành công!");
                window.location.reload();
            }
            else {
                alert("Lỗi: " + result.message);
            }
        }
        catch (error) {
            console.error("Lỗi khi thêm danh mục", error);
            alert("Có lỗi xảy ra!");
        }
    }
    async getCategoryById(id) {
        let response = await fetch(`${this.root}/${id}`);
        let data = await response.json();
        console.log(data);
        let category = new MCategory(data.result.id, data.result.name, data.result.img, data.result.description);
        return category;
    }
    async editCate(data, id) {
        try {
            const response = await fetch(`${this.root}/updateCate/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (result.status) {
                alert("Cập Nhật danh mục thành công!");
                window.location.reload();
            }
            else {
                alert("Lỗi: " + result.message);
            }
        }
        catch (error) {
            console.error("Lỗi khi Cập Nhật danh mục", error);
            alert("Có lỗi xảy ra!");
        }
    }
}
