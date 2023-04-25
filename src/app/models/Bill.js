const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bill = new Schema({
    hoTen: { type: String},
    soDienThoai: { type: String},
    email: { type: String},
    thanhPho:{type: String},
    diaChi: { type: String},
    prodBuy: { type: Array},
},{
    timestamps:true,
});
module.exports= mongoose.model('Bill',Bill)