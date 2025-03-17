import { VCategory } from "../view/category.view.js";
import { SCategoryBaoVe } from "../services/baove.service.js";
export class CCategory {
    index() {
        let v = new VCategory();
        let s = new SCategoryBaoVe();
        s.getCategory().then(data => {
        });
    }
}
