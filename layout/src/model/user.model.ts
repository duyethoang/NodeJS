export class MUser {
    private id : string | number | undefined | null;
    private name: string | undefined | null;
    private avatar: string;
    private email: string|undefined;
    private adress: string;
    private phone_number: number|string;
    private role: string;
    constructor (id : string| number | undefined | null,name: string| undefined | null, avatar: string, email:string|undefined,adress: string,phone_number: number|string,role:string,){
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.email = email;
        this.adress = adress;
        this.phone_number=phone_number;
        this.role = role;
    }

    // id
    get Id() : string|number|null|undefined{
        return this.id
    }
    set Id (id: string|number|null|undefined){
        this.id = id;
    }
    
    get Name() : string|undefined|null{
        return this.name
    }
    set Name (name: string|undefined|null){
        this.name = name;
    }
    get Avatar() : string{
        return this.avatar
    }
    set Avatar (avatar: string){
        this.avatar = avatar;
    }
    get Email() : string|undefined{
        return this.email
    }
    set Email (email: string|undefined){
        this.email = email;
    }
    get Adress() : string{
        return this.adress
    }
    set Adress (adress: string){
        this.adress = adress;
    }
    get Role() : number|string{
        return this.role
    }
    set Role (role: string){
        this.role = role;
    }
    get Phone_number() : number|string{
        return this.phone_number
    }
    set Phone_number (phone_number: number|string){
        this.phone_number = phone_number;
    }
    
}