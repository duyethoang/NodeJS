async function fetchData(url) {
    const res = await fetch(url);
    return res.json();
}
document.addEventListener("DOMContentLoaded", async () => {
    const Cate = await fetchData("http://localhost:3000/category");
    const Equi = await fetchData("http://localhost:3000/equipment");
    const Menu = document.getElementById("categories");
    const product = document.getElementById("product");
    Cate.forEach((category) => {
        const cate = document.createElement("div");
        cate.textContent = category.name;
        Menu.appendChild(cate);
    });
    Equi.forEach((item) => {
        const pro = document.createElement("div");
        pro.innerHTML = `<img src='${item.img}' alt='${item.name}'/>
                    <p>${item.name}</p>
                    <h3 style="color:red">${item.price}</h3>
    `;
        product?.appendChild(pro);
    });
});
export {};
