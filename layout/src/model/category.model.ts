export class MCategory {
    private id : string | number | undefined | null;
    private name: string;
    private img: string | undefined | null;
    private description: string|undefined;
    constructor (id : string| number | undefined | null, name: string, img: string| undefined | null,description:string|undefined){
        this.id = id;
        this. name = name;
        this.img = img;
        this.description = description;
    }

    // id
    get Id() : string|number|null|undefined{
        return this.id
    }

    set Id (id: string|number|null|undefined){
        this,id = id;
    }

    // name
    get Name(): string{
        return this.name;
    }

    set Name(name: string){
        this.name = name;
    }

    // img
    get Img():string | undefined | null{
        return this.img;
    }

    set Img(img: string | undefined | null){
        this.img = img;
    }
    get Description() : string|undefined{
        return this.description
    }

    set Description (description: string|undefined){
        this.description = description;
    }
}