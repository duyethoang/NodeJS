// kết nối || tạo collection categories
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {type: String, require: true},
    img: {type: String, require: false},
    description: {type: String, require: false},
    link: {type: String, require: false}
},{ timestamps: true });

module.exports = mongoose.models.category || mongoose.model('category', categorySchema)