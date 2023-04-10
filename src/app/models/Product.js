
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String},
    price: { type: String, default: '0' },
    NSX: { type: String},
    decription: { type: String},
    SoLuong: { type: String, default: '0' },
    img: { type: String},
    daBan:{ type: String, default: '0' },
    UploadAt: { type: Date, default:Date.now}

});

module.exports= mongoose.model('Product',Product)