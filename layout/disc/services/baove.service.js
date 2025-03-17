import { MCategoryBaoVe } from '../model/baove.model';
export class SCategoryBaoVe {
    root = 'http://localhost:3000/category';
    async getCategory() {
        let res = await fetch(this.root);
        let data = await res.json();
        let categories = data.result.map((c) => {
            return new MCategoryBaoVe(c.id, c.name);
        });
        return categories;
    }
}
