export class MProduct {
    id;
    name;
    price;
    product_code;
    scientific_name;
    difficulty;
    category;
    discount_price;
    sales;
    description;
    img;
    waters;
    date;
    constructor(id, name, price, product_code, scientific_name, difficulty, category, discount_price, sales, description, img, waters, date) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.product_code = product_code;
        this.scientific_name = scientific_name;
        this.difficulty = difficulty;
        this.category = category;
        this.discount_price = discount_price;
        this.sales = sales;
        this.description = description;
        this.img = img;
        this.waters = waters;
        this.date = date;
    }
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = id;
    }
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
    get Price() {
        return this.price;
    }
    set Price(price) {
        this.price = price;
    }
    get Product_code() {
        return this.product_code;
    }
    set Product_code(product_code) {
        this.product_code = product_code;
    }
    get Scientific_name() {
        return this.scientific_name;
    }
    set Scientific_name(scientific_name) {
        this.scientific_name = scientific_name;
    }
    get Difficulty() {
        return this.difficulty;
    }
    set Difficulty(difficulty) {
        this.difficulty = difficulty;
    }
    get Category() {
        return this.category;
    }
    set Category(category) {
        this.category = category;
    }
    get Img() {
        return this.img;
    }
    set Img(img) {
        this.img = img;
    }
    get Discount_price() {
        return this.discount_price;
    }
    set Discount_price(discount_price) {
        this.discount_price = discount_price;
    }
    get Sales() {
        return this.sales;
    }
    set Sales(sales) {
        this.sales = sales;
    }
    set Date(date) {
        this.date = date;
    }
    get Date() {
        return this.date;
    }
}
