export class MCategory {
    id;
    name;
    img;
    description;
    constructor(id, name, img, description) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.description = description;
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
    // img
    get Img() {
        return this.img;
    }
    set Img(img) {
        this.img = img;
    }
    get Description() {
        return this.description;
    }
    set Description(description) {
        this.description = description;
    }
}
