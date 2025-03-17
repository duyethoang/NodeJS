export class MCategoryBaoVe {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // id
    get Id() {
        return this.id;
    }
    set Id(id) {
        this, id = id;
    }
    // name
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
}
export class MProductBaoVe {
    id;
    name;
    img;
    price;
    discount;
    constructor(id, name, img, price, discount) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.discount = discount;
    }
    // id
    get Id() {
        return this.id;
    }
    set Id(id) {
        this, id = id;
    }
    // name
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
    get Img() {
        return this.img;
    }
    set Img(img) {
        this.img = img;
    }
    get Price() {
        return this.price;
    }
    set Price(price) {
        this.price = price;
    }
    get Discount() {
        return this.discount;
    }
    set Discount(discount) {
        this.discount = discount;
    }
}
