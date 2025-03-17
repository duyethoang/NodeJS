// thực hiện thao tác CRUD với collection users
const userModel = require('./user.model');
const bcryptjs = require('bcrypt')
module.exports = { getAlluser,resign ,getOneUser,deleteUser,upDateUser,login}

// Lấy toàn bộ dữ liệu 
async function getAlluser(){
    try{
        let users = await userModel.find();
        users =users.map((item)=>{
            return {
                id: item._id,
                name: item.username,
                email: item.email,
                phone_number: item.phone_number,
                address: item.address,
                avatar: item.avatar,
                password: item.password,
                role: item.role,
            };
        })
        return users;
    }catch (err){
        console.log(err);
        throw new Error('Lỗi lấy dữ liệu danh mục');
    }
} 
// đăng kí user mới
async function resign(data) {
    try {
        const {username,email,avatar,role,phone_number,address,password,status} = data
        // kiểm tra email có tồn tại hay ko
        let user = await userModel.findOne({email : email})
        if(user){
            throw new Error("Lỗi, Email đã tồn tại");
        }
        const salt = bcryptjs.genSaltSync(10);
        const hashpassword = bcryptjs.hashSync(password, salt);
        user = new userModel({username,email,avatar,role,phone_number,address,password: hashpassword,status})
        const result = await user.save()
        return result
    } catch (error) {
        console.log(err);
        throw new Error('Lỗi thêm user mới !!');
    }
}
// login
async function login(data) {
    try {
        const {email, password} = data
        // kiểm tra email có tồn tại không
        let user = await userModel.findOne({email: email})
        if (!user) {
            throw new Error("Email chưa được đăng kí");
        }
        let checkpassword = bcryptjs.compareSync(password, user.password)
        if (!checkpassword) {
            throw new Error("Sai mật khẩu");
        }
        //user._doc
        delete user._doc.password
        user = {...user._doc}
        return user
        //
    } catch (error) {
        console.log(err);
        throw new Error("Lỗi đăng nhập");  
    }
}
async function getOneUser(id) {
    try {
        const resultDetail = await userModel.findById(id);
        if (!resultDetail) {
            throw new Error("Không tìm thấy danh mục");
        }
        return {
            id: resultDetail._id,
            name: resultDetail.username,
            img: resultDetail.avatar,
            email: resultDetail.email,
            address: resultDetail.address
        };
    } catch (error) {
        console.log(error);
        throw new Error("Lỗi lấy dữ liệu danh mục");
    }
}
// update
async function upDateUser(data, id) {
    try {
        const user = await userModel.findById(id);
        if (!user) {
            throw new Error("Người dùng không tồn tại");
        }
        const { username, email, avatar, phone_number, role, password, address, status } = data;
        // Cập nhật dữ liệu
        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            {
                username,
                email,
                avatar,
                phone_number,
                role,
                password,
                address,
                status,
            },
            { new: true }
        );
        return updatedUser;
    } catch (error) {
        console.log(error);
        throw new Error(error.message || "Lỗi cập nhật người dùng");
    }
}
// xoa user
async function deleteUser(id){
    try{
        const result = await userModel.findByIdAndDelete(id);
        return result;
    }catch(err){
        console.log(err);
        throw new Error('Loi update du lieu san pham');
    }
}