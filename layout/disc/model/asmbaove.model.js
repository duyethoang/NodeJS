export class MCategory {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
export class MEquipment {
    id;
    name;
    discount;
    img;
    price;
    constructor(id, name, discount, img, price) {
        this.id = id;
        this.name = name;
        this.discount = discount;
        this.img = img;
        this.price = price;
    }
}
