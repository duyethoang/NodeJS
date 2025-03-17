import { CCategory } from "./controler/category.controller.js";
import { CProduct } from "./controler/product.controller.js";
import { CUser } from "./controler/user.controller.js";

let product = new CProduct();
product.index();

let category = new CCategory();
category.index();
category.actionCate();
category.addCate();
category.editCate();

let user = new CUser();
user.resUser();
