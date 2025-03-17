import { MProduct } from "../model/product.model.js";
import { MCategory } from "../model/category.model.js";
export class VProduct {
    public showNewProduct = (products: MProduct[]) => {
        console.log("Danh sách sản phẩm:", products);
        
        if (!products || products.length === 0) {
            console.warn("Không có sản phẩm nào.");
            return;
        }
    
        const formatPrice = (price: number): string => {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
        };
    
        const sortedProducts = [...products].sort((a, b) => {
            if (!a.Date || !b.Date) return 0;
            const dateA = new Date(a.Date.split('/').reverse().join('-'));
            const dateB = new Date(b.Date.split('/').reverse().join('-'));
            return dateB.getTime() - dateA.getTime();
        });
    
        let latestProducts = sortedProducts.slice(0, 8);
        let inforproduct = document.getElementById('product-new');
    
        if (!inforproduct) {
            console.error("Không tìm thấy phần tử #product-new");
            return;
        }
    
        inforproduct.innerHTML = ""; // Xóa dữ liệu cũ trước khi thêm sản phẩm mới
    
        latestProducts.forEach(element => {
            let formattedPrice = formatPrice(element.Price);
            let showInfor = document.createElement('div');
            showInfor.className = 'product';
            showInfor.innerHTML = `
                <a href="#">
                    <img src="./public/img/product/${element.Img}" alt="${element.Name}">
                    <h4>${element.Name}</h4>
                    <p>${formattedPrice}</p>
                </a>
            `;
            inforproduct.appendChild(showInfor);
        });
    
        console.log("Hiển thị sản phẩm mới thành công!");
    };
    
    public showCategoryProducts = (products: MProduct[]) => {
        console.log(`Danh sách sản phẩm cho category_id = 67bb2585c6073fc2ef380620`, products);
        if (!products || products.length === 0) {
            console.warn("Không có sản phẩm nào.");
            return;
        }
        const formatPrice = (price: number): string => {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
        };
        // Lọc sản phẩm có category_id = 1
        const filteredProducts = products.filter(product => product.category.category_id === "67bb2585c6073fc2ef380620");
        if (filteredProducts.length === 0) {
            console.warn(`Không có sản phẩm nào có category_id = 67bb2585c6073fc2ef380620.`);
            return;
        }
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            if (!a.Date || !b.Date) return 0;
            const dateA = new Date(a.Date.split('/').reverse().join('-'));
            const dateB = new Date(b.Date.split('/').reverse().join('-'));
            return dateB.getTime() - dateA.getTime();
        });
        let latestProducts = sortedProducts.slice(0, 4);
        let categoryContainer = document.getElementById(`category-1`);
    
        if (!categoryContainer) {
            console.error(`Không tìm thấy phần tử #category-1`);
            return;
        }
    
        categoryContainer.innerHTML = ""; // Xóa dữ liệu cũ trước khi thêm sản phẩm mới
    
        latestProducts.forEach(element => {
            let formattedPrice = formatPrice(element.Price);
            let showInfor = document.createElement('div');
            showInfor.className = 'product';
            showInfor.innerHTML = `
                <a href="#">
                    <img src="./public/img/product/${element.Img}" alt="${element.Name}">
                    <h4>${element.Name}</h4>
                    <p>${formattedPrice}</p>
                </a>
            `;
            categoryContainer.appendChild(showInfor);
        });
    
        console.log(`Hiển thị sản phẩm có category_id = 67bb2585c6073fc2ef380620 thành công!`);
    };    
    
    public showCategoryProducts_1 = (products: MProduct[]) => {
        console.log(`Danh sách sản phẩm cho category_id = 67bb257fc6073fc2ef38061e`, products);
        if (!products || products.length === 0) {
            console.warn("Không có sản phẩm nào.");
            return;
        }
        const formatPrice = (price: number): string => {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
        };
        // Lọc sản phẩm có category_id = 1
        const filteredProducts = products.filter(product => product.category.category_id === "67bb257fc6073fc2ef38061e");
        if (filteredProducts.length === 0) {
            console.warn(`Không có sản phẩm nào có category_id = 67bb257fc6073fc2ef38061e.`);
            return;
        }
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            if (!a.Date || !b.Date) return 0;
            const dateA = new Date(a.Date.split('/').reverse().join('-'));
            const dateB = new Date(b.Date.split('/').reverse().join('-'));
            return dateB.getTime() - dateA.getTime();
        });
        let latestProducts = sortedProducts.slice(0, 4);
        let categoryContainer = document.getElementById(`category-2`);
    
        if (!categoryContainer) {
            console.error(`Không tìm thấy phần tử #category-2`);
            return;
        }
    
        categoryContainer.innerHTML = ""; // Xóa dữ liệu cũ trước khi thêm sản phẩm mới
    
        latestProducts.forEach(element => {
            let formattedPrice = formatPrice(element.Price);
            let showInfor = document.createElement('div');
            showInfor.className = 'product';
            showInfor.innerHTML = `
                <a href="#">
                    <img src="./public/img/product/${element.Img}" alt="${element.Name}">
                    <h4>${element.Name}</h4>
                    <p>${formattedPrice}</p>
                </a>
            `;
            categoryContainer.appendChild(showInfor);
        });
    
        console.log(`Hiển thị sản phẩm có category_id = 67bb257fc6073fc2ef38061e thành công!`);
    };   

    public showlistcate = (category:MCategory[])=>{
        let cate = document.getElementById("category");
        if(cate){
            category.forEach(e=>{
                cate.innerHTML+=`
                    <option id="categoryId" value="${e.Id}">${e.Name}</option>
                `
            })
        }
    }
    public showProductAdmin = (products:MProduct[]) => {
        let inforCategory = document.getElementById('products-admin');
    const nameCategory: { [key: number]: string } = {
        1: "Cây dễ chăm",
        2: "Cây để bàn",
        3: "Cây phong thủy",
        4: "Cây cao cấp",
        5: "Cây văn phòng"
    };
        
    if (inforCategory) {
        products.forEach(element => {
        inforCategory.innerHTML += `
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.scientific_name}</td>
            <td>${element.category.categoryName}</td>
            <td><img src="./public/img/product/${element.Img}" alt="${element.name}" style="width: 50px; height: 50px; object-fit: cover;" /></td>
            <td>${element.price}</td>
            <td>${element.discount_price}</td>
            <td>#</td>
            <td>${element.Sales}</td>
            <td>${element.date}</td>
            <td class="actions">
                <button class="edit addPro" data-id="${element.id}">Edit</button>
                <button class="delete deletePro" data-id="${element.id}">Delete</button>
            </td>
        `;
    });
    } else {
        console.error("Products not found.");
    }
    }
    
}