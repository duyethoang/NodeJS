var express = require('express');
var router = express.Router();
const categoryController = require('../mongo/category/category.controller');
const multer=require('multer');
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
// 
/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const result = await categoryController.getAllcate();
    if(result){
      return res.status(200).json({status: true, result,message: 'lấy dữ liệu thành công'})
    }else{
      return res.status(404).json({status: false, message: 'Không thể lấy dữ liệu trên server'})
    }
  }catch(err){
    console.error(err);
    return res.status(500).json({status: false, message: 'Lỗi lấy dữ liệu danh mục'})
  }
});

router.get('/:id', async function(req, res, next) {
  try{
    const {id}= req.params
    const result = await categoryController.getDetailcate(id);
    if(result){
      return res.status(200).json({status: true, result,message: 'lấy dữ liệu thành công'})
    }else{
      return res.status(404).json({status: false, message: 'Không thể lấy dữ liệu trên server'})
    }
  }catch(err){
    console.error(err);
    return res.status(500).json({status: false, message: 'Lỗi lấy dữ liệu danh mục'})
  }
});
router.delete('/deleteCate/:id', async(req, res)=>{
  try {
      const {id} = req.params
      const result = await categoryController.deleteCate(id)
      return res.status(200).json({status: true,result: result, massage: "xóa thành công"})
  } catch (error) {
      console.log(err);
      return res.status(500).json({status: false, message:'lỗi xoa dữ liệu'})
  }
})
router.post('/addCate',upload.single('img'),async function(req, res, next){
  try {
    const data= req.body
    // data.img=req.file.originalname
    const result = await categoryController.addCate(data);
      return res.status(200).json({status: true, DATA: result,message: 'thêm dữ liệu thành công'})
  } catch (error) {
    console.error(error);
    return res.status(500).json({status: false, message: 'Lỗi thêm dữ liệu danh mục'})
  }
})
router.put('/updateCate/:id',async function(req, res, next){
  try {
    const {id}=req.params
    const data= req.body
    const result = await categoryController.upDatecate(data,id);
      return res.status(200).json({status: true, DATA: result,message: 'cập nhật dữ liệu thành công'})
  } catch (error) {
    console.error(error);
    return res.status(500).json({status: false, message: 'Lỗi cập nhật dữ liệu danh mục'})
  }
})
module.exports = router;