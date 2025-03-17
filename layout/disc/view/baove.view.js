export class VCategoryBaoVe {
    showCategory = (category) => {
        let divCateAll = document.querySelector('#category-grid');
        if (divCateAll) {
            category.forEach(element => {
                divCateAll.innerHTML += `
                    <a href="">
                        <div class="category">${element.Name}</div>
                    </a>
            `;
            });
        }
    };
}
