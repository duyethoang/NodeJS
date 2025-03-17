var express = require('express');
var router = express.Router();
var productController = require('../mongo/product/product.controller')
const multer=require('multer');
const mongoose = require('mongoose');
const productModel = require("../mongo/product/product.model");
const storage=multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./public/images')
  },
  filename: function(req,file,cb){
    cb(null,file.originalname)
  }
})
const checkFile = (req,file,cb)=>{
  if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
    return cb(new Error('Bạn Chỉ Được Upload File Ảnh'))
  }
  return cb(null,true)
}
const upload = multer({storage: storage,fileFilter:checkFile})
/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const result = await productController.getAllpro();
    if(result){
      return res.status(200).json({status: true, result,message: 'lấy dữ liệu thành công'})
    }else{
      return res.status(404).json({status: false, message: 'Không thể lấy dữ liệu trên server'})
    }
  }catch(err){
    console.error(err);
    return res.status(500).json({status: false, message: 'Lỗi lấy dữ liệu sản phẩm'})
  }
});
router.get('/demo',async function(req, res, next){
  try {
    const result = await productController.getProducts();
    if(result){
      return res.status(200).json({status: true, result,message: 'lấy dữ liệu thành công'})
    }else{
      return res.status(404).json({status: false, message: 'Không thể lấy dữ liệu trên server'})
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({status: false, message: 'Lỗi lấy dữ liệu danh mục'})
  }
})
//http://localhost:3000/products/featured
// 2. Lấy danh sách sản phẩm nổi bật
router.get("/featured", async (req, res) => {
  try {
      const products = await productController.getFeaturedProducts();
      if (!products.length) {
          return res.status(404).json({ message: "Không có sản phẩm nổi bật nào" });
      }

      return res.status(200).json({ success: true, products });
  } catch (error) {
      console.error("Lỗi lấy danh sách sản phẩm nổi bật:", error);
      res.status(500).json({ message: "Lỗi server" });
  }
});
// detail
router.get('/:id',async function(req, res, next){
  try {
    const {id}= req.params
    const result = await productController.getDetailPro(id);
    if(result){
      return res.status(200).json({status: true, result,message: 'lấy dữ liệu thành công'})
    }else{
      return res.status(404).json({status: false, message: 'Không thể lấy dữ liệu trên server'})
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({status: false, message: 'Lỗi lấy dữ liệu danh mục'})
  }
})
router.post('/addPro',upload.single('img'),async function(req, res, next){
  try {
    const data= req.body
    // data.img=req.file.originalname
    const result = await productController.addPro(data);
      return res.status(200).json({status: true, DATA: result,message: 'thêm dữ liệu thành công'})
  } catch (error) {
    console.error(error);
    return res.status(500).json({status: false, message: 'Lỗi thêm dữ liệu danh mục'})
  }
})
router.put('/updatePro/:id',upload.single('img'),async function(req, res, next){
  try {
    const {id}=req.params
    const data= req.body
    if(req.file){
    data.img=req.file.originalname
    }else{
      delete data.img
    }
    const result = await productController.updatePro(data,id);
      return res.status(200).json({status: true, DATA: result,message: 'cập nhật dữ liệu thành công'})
  } catch (error) {
    console.error(error);
    return res.status(500).json({status: false, message: 'Lỗi cập nhật dữ liệu danh mục'})
  }
})
router.delete('/deletePro/:id', async(req, res)=>{
  try {
      const {id} = req.params
      const result = await productController.deletePro(id)
      return res.status(200).json({status: true,result: result, massage: "xóa thành công"})
  } catch (error) {
      console.log(err);
      return res.status(500).json({status: false, message:'lỗi xoa dữ liệu'})
  }
})
//http://localhost:3000/products/category/67bb2576c6073fc2ef38061c
// 1. Lấy danh sách sản phẩm theo mã danh mục
router.get('/category/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
      if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).json({ message: "categoryId không hợp lệ" });
    }
    const products = await productController.getProductsByCategory(categoryId);
      return res.status(200).json(products);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
//http://localhost:3000/products/page/1/limit/5
// 3. Lấy danh sách sản phẩm theo trang và giới hạn số lượng
router.get("/page/:page/limit/:limit", async (req, res) => {
  try {
    let { page, limit } = req.params;
    page = parseInt(page);
    limit = parseInt(limit);
    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return res.status(400).json({ message: "Page và Limit phải là số dương" });
    }
    const products = await productModel.find()
      .skip((page - 1) * limit)
      .limit(limit);
    return res.status(200).json({ success: true, page, limit, products });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server" });
  }
});
//http://localhost:3000/products/search?name=Cây
// 4. Tìm kiếm sản phẩm
router.get("/search/search", async (req, res) => {
  const { name } = req.query;
  const products = await productModel.find({ name: new RegExp(name, "i") });
  res.json(products);
});
//http://localhost:3000/products/sorted/5
// 5. Lấy danh sách sản phẩm có sắp xếp giá tăng dần và giới hạn số lượng
router.get("/sorted/:limit", async (req, res) => {
  const products = await productModel.find()
      .sort({ price: 1 })
      .limit(parseInt(req.params.limit));
  res.json(products);
});
//http://localhost:3000/products/related/related/67bb2a1ac6073fc2ef380632
// 6. Lấy danh sách sản phẩm liên quan với sản phẩm hiển thị ở trang chi tiết
router.get("/related/related/:id", async (req, res) => {
  const product = await productModel.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const relatedProducts = await productModel.find({ category: product.category }).limit(5);
  res.json(relatedProducts);
});
//http://localhost:3000/products/delete/deleteName?name=sp33
// 7. Tìm và xóa sản phẩm có điều kiện
router.delete("/delete/deleteName", async (req, res) => {
  const { name } = req.query;
  await productModel.findOneAndDelete({name});
  res.json({ message: "Đã Xóa Sản Phẩm Theo Tên" });
})
module.exports = router;
