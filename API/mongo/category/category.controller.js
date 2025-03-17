// thực hiện thao tác CRUD với collection categories
const productModel = require('../product/product.model');
const categoryModel = require('./category.model');

module.exports = { getAllcate,getDetailcate, upDatecate,deleteCate,addCate }

// Lấy toàn bộ dữ liệu 
async function getAllcate(){
    try{
        let cates = await categoryModel.find();
        cates =cates.map((item)=>{
            return {
                id: item._id,
                name: item.name,
                img: item.img,
                description: item.description,
            };
        })
        return cates;
    }catch (err){
        console.log(err);
        throw new Error('Lỗi lấy dữ liệu danh mục');
    }
}
async function getDetailcate(id) {
    try {
        const resultDetail = await categoryModel.findById(id);
        if (!resultDetail) {
            throw new Error("Không tìm thấy danh mục");
        }
        return {
            id: resultDetail._id,
            name: resultDetail.name,
            img: resultDetail.img,
            description: resultDetail.description,
            link: resultDetail.link
        };
    } catch (error) {
        console.log(error);
        throw new Error("Lỗi lấy dữ liệu danh mục");
    }
}
// thêm categories
async function addCate(data) {
    try {
        const { name, img, description } = data;
        // Kiểm tra xem danh mục đã tồn tại cha
        const findCategory = await categoryModel.findOne({ name });
        if (findCategory) {
            throw new Error("Danh mục đã tồn tại");
        }
        const newCategory = new categoryModel({
            name,
            img,
            description
        });
        const result = await newCategory.save();
        return result;
    } catch (error) {
        console.log(error);
        throw new Error("Lỗi thêm danh mục");
    }
}
//CẬP NHẬT DỮ LIỆU
async function upDatecate(data,id) {
    try {
        const cate = await categoryModel.findById(id)
        if(!cate){
            throw new Error("Danh Muc Không Tồn Tại");
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
        }: cate.category
        const result = await categoryModel.findByIdAndUpdate(id,{name,price,view,sales,description,category:categoryUpdate,img},{new:true} );
        return result;
    } catch (error) {
        console.log(error);
        throw new Error("Lỗi cập nhật dữ liệu");
    }
}
// xoa categories
async function deleteCate(id){
    try{
        const cate = await categoryModel.findById(id);
        if(!cate){
            throw new Error("Không tìm thấy danh mục");
        }
        const pros= await productModel.find({'category.category_id': id})
        if(pros.length>0){
            throw new Error("Danh mục có sản phẩm, ko thể xóa");
        }
        const result = await categoryModel.findByIdAndDelete(id)
        return result;
    }catch(err){
        console.log(err);
        throw new Error('Loi update du lieu san pham');
    }
}