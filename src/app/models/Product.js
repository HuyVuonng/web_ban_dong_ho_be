
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String},
    price: { type: String, default: '0' },
    ThuongHieu: { type: String},
    Decription: { type: String},
    SoLuong: { type: String, default: '0' },
    img: { type: String},
    daBan:{ type: String, default: '0' },

},{
    timestamps:true,
});

module.exports= mongoose.model('Product',Product)