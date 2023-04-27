const Bill = require("../models/Bill");
class BillController {
  // [get] /
  getAllBills(req, res, next) {
    Bill.find({}).sort({ createdAt: -1 })
      .then((bills) => res.json(bills))
      .catch(next);
  }

  // [get] /newBills
  getNewBills(req, res, next) {
    let page = req.query.page;
    if (page) {
      page = parseInt(page);
      const BillInPage = 10;
      var skipProd = (page - 1) * BillInPage;
      Bill.find({ $and: [{ dangGiao: false }, { daGiao: false }] })
        .sort({ createdAt: 1 })
        .skip(skipProd)
        .limit(BillInPage)
        .then((bills) => res.json(bills))
        .catch(next);
    } else {
      Bill.find({ $and: [{ dangGiao: false }, { daGiao: false }] })
        .sort({ createdAt: 1 })
        .then((bills) => res.json(bills))
        .catch(next);
    }
  }

  // [get] /deliveringBills
  getDeliveringBills(req, res, next) {
    let page = req.query.page;
    if (page) {
      page = parseInt(page);
      const BillInPage = 10;
      var skipProd = (page - 1) * BillInPage;
      Bill.find({ $and: [{ dangGiao: true }, { daGiao: false }] })
        .sort({ updatedAt: 1 })
        .skip(skipProd)
        .limit(BillInPage)
        .then((bills) => res.json(bills))
        .catch(next);
    } else {
      Bill.find({ $and: [{ dangGiao: true }, { daGiao: false }] })
        .sort({ updatedAt: 1 })
        .then((bills) => res.json(bills))
        .catch(next);
    }
  }

  // [get] /deliveredBills
  getDeliveredBills(req, res, next) {
    let page = req.query.page;
    if (page) {
      page = parseInt(page);
      const BillInPage = 10;
      var skipProd = (page - 1) * BillInPage;
      Bill.find({ $and: [{ dangGiao: true }, { daGiao: true }] })
        .sort({ updatedAt: -1 })
        .skip(skipProd)
        .limit(BillInPage)
        .then((bills) => res.json(bills))
        .catch(next);
    } else {
      Bill.find({ $and: [{ dangGiao: true }, { daGiao: true }] })
        .sort({ updatedAt: -1 })
        .then((bills) => res.json(bills))
        .catch(next);
    }
  }


// [patch] /newBills/delivering
changToDelivering(req, res, next) {
  const id = req.params.id;
  const formDataEdit = req.body;
  Bill.updateOne({ _id: id },formDataEdit)
  .then((prod) => res.send(prod))
    .catch(next);

}




// [patch] /deliveringBills/delivered
changToDelivered(req, res, next){
  const id = req.params.id;
  const formDataEdit = req.body;
  Bill.updateOne({ _id: id },formDataEdit)
  .then((prod) => res.send(prod))
    .catch(next);

}





  // [post] /creat
  create(req, res, next) {
    const formData = req.body;
    const bill = new Bill(formData);
    bill
      .save()
      .then(() => res.send("Success"))
      .catch(next);
  }




  // [delete] /deleteBill
  deleteBill(req, res, next) {
    const id= req.params.id;
    Bill.findOneAndDelete({ _id: id }).then((prod) => res.send(prod));
  }
}

module.exports = new BillController();
