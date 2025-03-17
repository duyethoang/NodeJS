// kết nối || tạo collection users
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type: String, require: true},
    email: {type: String, require: true},
    avatar: {type: String, require: false},
    phone_number: {type: String, require: false},
    role: {type: String, require: false, default: "user"},
    password: {type: String, require: true},
    address: {type: String, require: false},
    status: {type: Number, require: false, default:1},
})

module.exports = mongoose.models.user || mongoose.model('user', userSchema)