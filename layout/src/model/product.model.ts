interface Category{
    category_id: string,
    categoryName: string
}
interface IProduct {
    name: string;
    price: number;
    product_code: string;
    scientific_name: string;
    difficulty: string;
    category: Category;
    discount_price: number;
    sales: number;
    description: string;
    img: string;
    waters:string;
    date: string
}

export class MProduct implements IProduct{
    id: string|number|undefined|null;
    name: string;
    price: number;
    product_code: string;
    scientific_name: string;
    difficulty: string;
    category: Category;
    discount_price: number;
    sales: number;
    description: string;
    img: string;
    waters:string;
    date: string

    constructor (id:string|number|undefined|null,name: string,price: number,product_code: string,scientific_name: string,difficulty: string,category: Category, discount_price: number, sales: number,description: string ,img: string,waters:string,date:string){
        this.id =id;
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
        this.date=date
    }

    get Id():string|number|undefined|null{
       return this.id; 
    }

    set Id(id:string|number|undefined|null){
        this.id = id;
    }

    get Name():string{
        return this.name;
    }

    set Name(name:string){
        this.name = name;
    }

    get Price():number{
        return this.price;
    }

    set Price(price: number){
        this.price = price;
    }

    get Product_code():string {
        return this.product_code;
    }

    set Product_code(product_code:string){
        this.product_code = product_code;
    }

    get Scientific_name():string{
        return this.scientific_name;
    }

    set Scientific_name(scientific_name:string){
        this.scientific_name = scientific_name;
    }

    get Difficulty():string{
        return this.difficulty;
    }

    set Difficulty(difficulty:string){
        this.difficulty = difficulty;
    }

    get Category():Category{
        return this.category
    }

    set Category(category:Category){
        this.category = category;
    }

    get Img():string{
        return this.img;
    }

    set Img(img:string){
        this.img = img;
    }

    get Discount_price():number{
        return this.discount_price
    }

    set Discount_price(discount_price:number){
        this.discount_price = discount_price;
    }
    get Sales():number{
        return this.sales
    }

    set Sales(sales:number){
        this.sales = sales;
    }
    set Date(date:string){
        this.date = date;
    }
    get Date():string{
        return this.date;
    }
}
