// thực hiện thao tác CRUD với collection categories
const productModel = require('./product.model');
const categoryModel = require('../category/category.model');
const mongoose = require("mongoose");

module.exports = { getAllpro ,getProducts,getDetailPro,addPro,updatePro,deletePro,getProductsByCategory,getFeaturedProducts}
// Lấy toàn bộ dữ liệu 
async function getAllpro(){
    try{
        let products = await productModel.find();
        products =products.map((item)=>{
            return {
                id: item._id,
                name: item.name,
                price: item.price,
                description: item.description,
                category: item.category,
                img: item.img,
                sales: item.sales,
                scientific_name: item.scientific_name,
                discount_price: item.discount_price,
                date: item.date,
                product_code: item.product_code
            };
        })
        return products;
    }catch (err){
        console.log(err);
        throw new Error('Lỗi lấy dữ liệu sản phẩm');
    }
} 
async function getFeaturedProducts(){
    return await productModel.find({ featured: true });
}
async function getProducts() {
    try {
        // lấy theo sl dữ liệu
        const result = await productModel.find().limit(4).sort({_id: -1})
        // lấy file name, price, img
        const result1 = await productModel.find({
            //$gt: lớn hơn ; $lt:nhỏ hơn ; $gte: lớn hơn hoặc bằng ; $lte: nhỏ hơn hoặc bằng
            price: {$gt:400000}
        },{name:1, price:1, img:1})
            // select * from products where price > 400000 and sales<10
        const result2 = await productModel.find({
            $and:[
                {price:{$gt: 100000}},
                {sales: {$gt:100}}
            ]
        })
            // select * from products where name like '%mo%'
        const result3=await productModel.find({
            name:{
                $regex: 'm',
                $options: 'o'
            }
        })
        return result;
    } catch (error) {
        console.log(error);
        throw new Error("Lỗi Lấy Dữ Liệu Sản Phẩm");
    }
}
// lấy dư liệu theo id
async function getDetailPro(id) {
    try {
        let resultDetail= await productModel.findById(id)
        if (!resultDetail) {
            throw new Error("Không tìm thấy danh mục");
        }
        return {
            id: resultDetail._id,
            name: resultDetail.name,
            img: resultDetail.img,
            description: resultDetail.description,
            price: resultDetail.price,
            category: resultDetail.category
        };
    } catch (error) {
        console.log(error);
        throw new Error("Lỗi Lấy Dữ Liệu");
    }
}
async function addPro(data) {
    try {
        const {name,price,view,sales,description,category,img}=data;
        const categoryFind=await categoryModel.findById(category);
        if(!categoryFind){
            throw new Error("Danh Mục Không Tồn Tại");
        }
        // tạo ra documment mới
        const newPro=new productModel({
            name,price,view,sales,description,img,
            category:{
                category_id:categoryFind._id,
                categoryName: categoryFind.name
            }
        })
        // lưu database
        const result = await newPro.save();
        return result;
    } catch (error) {
        console.log(error);
        throw new Error("Lỗi thêm dữ liệu sản phẩm");
    }
}
//CẬP NHẬT DỮ LIỆU
async function updatePro(data,id) {
    try {
        const pro = await productModel.findById(id)
        if(!pro){
            throw new Error("Sản Phẩm Không Tồn Tại");
        }
        // lấy data từ form
        const {name,price,view,sales,description,category,img}=data;
        let categoryFind = null
        if(categoryFind){
            categoryFind = await categoryModel.findById(category)
        }
        let categoryUpdate =categoryFind?{
            category_id: categoryFind._id,
            categoryName: categoryFind.name
        }: pro.category
        const result = await productModel.findByIdAndUpdate(id,{name,price,view,sales,description,category:categoryUpdate,img},{new:true} );
        return result;
    } catch (error) {
        console.log(error);
        throw new Error("Lỗi cập nhật dữ liệu");
    }
}
// Xóa Dữ Liệu
async function deletePro(id){
    try{
        const result = await productModel.findByIdAndDelete(id);
        return result;
    }catch(err){
        console.log(err);
        throw new Error('Loi update du lieu san pham');
    }
}
// lấy sản phẩm theo danh mục
async function getProductsByCategory(categoryId) {
    try {
        const products = await productModel.find({
            "category.category_id": new mongoose.Types.ObjectId(categoryId)
        });
        if (!products.length) {
            console.warn("Không tìm thấy sản phẩm nào trong danh mục:", categoryId);
            return [];
        }
        return products;
    } catch (error) {
        console.error("❌ Lỗi khi lấy sản phẩm theo danh mục:", error);
        throw new Error("Lỗi lấy dữ liệu sản phẩm theo danh mục");
    }
}

