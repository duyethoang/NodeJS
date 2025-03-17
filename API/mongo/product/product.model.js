// kết nối || tạo collection categories
const mongoose = require('mongoose');

const Schema = mongoose.Schema
const ObjectId=Schema.ObjectId
const productSchema = new Schema({
    name: {type: String, require: true},
    price: {type: Number, require: true},
    view: {type: Number, default: 0},
    sales: {type: Number, default: 0},
    description: {type: String, require: false},
    category: {
        category_id:{type: ObjectId, require: true},
        categoryName:{type: String, require: true}
    },
    img: {type: String, require: false},
    scientific_name: {type: String, require: false},
    discount_price: {type: Number, require: false},
    date: {type: Date,default: Date.now},
    product_code: {type: String, require: false},
    featured: { type: Boolean, default: false },
})
module.exports = mongoose.models.product || mongoose.model('product', productSchema)