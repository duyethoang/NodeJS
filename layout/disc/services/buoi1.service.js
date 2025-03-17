import { Product } from "../model/buoi1.model";
export class CartService {
    items = [];
    constructor() {
        this.loadFromDB();
    }
    getCart() {
        return this.items;
    }
    updateQuantity(id, quantity) {
        const product = this.items.find((item) => item.id === id);
        if (product) {
            product.quantity = quantity;
        }
    }
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.getTotalPrice(), 0);
    }
    saveToDB() {
        fetch("data.json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.items)
        });
    }
    async loadFromDB() {
        try {
            const response = await fetch("data.json");
            const data = await response.json();
            this.items = data.map((item) => new Product(item.id, item.name, item.price, item.quantity, item.image));
        }
        catch (error) {
            console.error("Lỗi khi tải dữ liệu từ data.json:", error);
        }
    }
}
