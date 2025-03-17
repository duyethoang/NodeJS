var express = require('express');
var router = express.Router();
var usersController = require('../mongo/users/user.controller')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const result = await usersController.getAlluser();
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
    const result = await usersController.getOneUser(id);
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
router.delete('/deleteUser/:id', async(req, res)=>{
  try {
      const {id} = req.params
      const result = await usersController.deleteUser(id)
      return res.status(200).json({status: true,result, massage: "xóa thành công"})
  } catch (error) {
      console.log(err);
      return res.status(500).json({status: false, message:'lỗi xoa dữ liệu'})
  }
})
router.post('/addUser',async function(req, res, next){
  try {
    const data= req.body
    // data.img=req.file.originalname
    const result = await usersController.resign(data);
      return res.status(200).json({status: true, DATA: result,message: 'thêm dữ liệu thành công'})
  } catch (error) {
    console.error(error);
    return res.status(500).json({status: false, message: 'Lỗi thêm dữ liệu user'})
  }
})
router.get('/login', async function(req, res, next) {
  try{
    const data= req.body
    const result = await usersController.login(data);
    if(result){
      return res.status(200).json({status: true, result,message: 'login thành công'})
    }else{
      return res.status(404).json({status: false, message: 'Không thể lấy dữ liệu trên server'})
    }
  }catch(err){
    console.error(err);
    return res.status(500).json({status: false, message: 'Lỗi lấy dữ liệu danh mục'})
  }
});
router.get('/res', async function(req, res, next) {
  try{
    const data= req.body
    const result = await usersController.login(data);
    if(result){
      return res.status(200).json({status: true, result,message: 'login thành công'})
    }else{
      return res.status(404).json({status: false, message: 'Không thể lấy dữ liệu trên server'})
    }
  }catch(err){
    console.error(err);
    return res.status(500).json({status: false, message: 'Lỗi lấy dữ liệu danh mục'})
  }
});
module.exports = router;
