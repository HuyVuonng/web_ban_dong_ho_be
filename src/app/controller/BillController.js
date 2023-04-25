const Bill = require("../models/Bill");
const url=require("../url")
class BillController {

// [post] /creat
create(req, res, next) {
    const formData= req.body;
    const bill= new Bill(formData)
    bill.save().then(() => res.redirect(url.urlReactJS+"quanly"));
}

}

module.exports = new BillController();