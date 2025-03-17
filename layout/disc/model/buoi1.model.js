export class Category {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
export class Equipment {
    id;
    name;
    categoryId;
    image;
    details;
    constructor(id, name, categoryId, image, details) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.image = image;
        this.details = details;
    }
}
