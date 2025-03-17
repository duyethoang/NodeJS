import { MCategory } from "../model/category.model.js";

export class VCategory {
    public showCategory = (category:MCategory[]) => {
        let divCateAll = document.querySelector('#category-grid');
        if(divCateAll){
        category.forEach(element => {
            divCateAll.innerHTML += `
                    <a href="">
                        <img src="./public/img/category/${element.Img}" alt="${element.Name}">
                        <div class="category">${element.Name}</div>
                    </a>
            `;
        });
    }
    }
    public showCategoryadmin = (category:MCategory[]) => {
        let divCateAll = document.querySelector('#categories-admin');
        if (divCateAll) {
            category.forEach(element => {
            divCateAll.innerHTML += `
                <td>${element.Id}</td>
                <td>${element.Name}</td>
                <td><img src="./public/img/category/${element.Img}" alt="${element.Name}" style="width: 50px; height: 50px; object-fit: cover;" /></td>
                <td>${element.Description}</td>
                <td class="actions">
                    <button class="edit updateCate" data-id="${element.Id}">Edit</button>
                    <button class="delete deleteCate" data-id="${element.Id}">Delete</button>
                </td>
            `;
        });
        } else {
            console.error("Categories not found.");
        }
    }
    
}