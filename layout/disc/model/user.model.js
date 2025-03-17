export class MUser {
    id;
    name;
    avatar;
    email;
    adress;
    phone_number;
    role;
    constructor(id, name, avatar, email, adress, phone_number, role) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.email = email;
        this.adress = adress;
        this.phone_number = phone_number;
        this.role = role;
    }
    // id
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
    get Avatar() {
        return this.avatar;
    }
    set Avatar(avatar) {
        this.avatar = avatar;
    }
    get Email() {
        return this.email;
    }
    set Email(email) {
        this.email = email;
    }
    get Adress() {
        return this.adress;
    }
    set Adress(adress) {
        this.adress = adress;
    }
    get Role() {
        return this.role;
    }
    set Role(role) {
        this.role = role;
    }
    get Phone_number() {
        return this.phone_number;
    }
    set Phone_number(phone_number) {
        this.phone_number = phone_number;
    }
}
