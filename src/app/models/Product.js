
const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String},
    price: { type: String, default: '0' },
    ThuongHieu: { type: String},
    GioiTinh:{type: String},
    Decription: { type: String},
    SoLuong: { type: String, default: '0' },
    img: { type: String},
    daBan:{ type: String, default: '0' },

},{
    timestamps:true,
});
Product.plugin(mongooseDelete,{ deletedAt : true, overrideMethods: 'all' });
module.exports= mongoose.model('Product',Product)