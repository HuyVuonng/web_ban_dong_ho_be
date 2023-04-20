const Product = require("../models/Product");

class ProductController {
  //get /products
  index(req, res, next) {
    // res.send('get product')
    let idreq = req.query.id;

    if (idreq) {
      Product.findById(idreq)
        .then((products) => res.json(products))
        .catch(next);
    } else {
      Product.find({})
        .then((products) => res.json(products))
        .catch(next);
    }
  }
  // get /product/bestseller
  betseller(req, res, next) {
    Product.find({})
      .sort({ daBan: -1 })
      .limit(4)
      .then((products) => res.json(products))
      .catch(next);
  }

  // get /product/newproducts
  newproducts(req, res, next) {
    Product.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .then((products) => res.json(products))
      .catch(next);
  }

  // get/search
  search(req, res, next) {
    let namesearch = req.query.q;
    if (namesearch) {
      Product.find({
        name: { $regex: ".*" + namesearch + ".*", $options: "i" },
      })
        .then((products) => res.json(products))
        .catch(next);
    }
  }

  //post /create
  create(req, res) {
    const formData = req.body;
    const product = new Product(formData);
    product.save().then(() => res.redirect("http://localhost:3001/quanly"));
  }

  //delete /deletebyID
  deletebyID(req, res, next) {
    const id = req.params.id;
    Product.findOneAndDelete({ _id: id }).then((prod) => res.send(prod));
  }
//edit /:id/edit
  edit(req, res, next) {
    const id = req.params.id;
    Product.updateOne({ _id: id }, req.body).then(() => res.redirect("http://localhost:3001/quanly")).catch(next);
  }
  getGt(req, res, next) {
    const gt= req.params.gt
    Product.find({GioiTinh: gt}).sort({ createdAt: -1 }).then((prod) => res.json(prod)).catch(next);
  }


}

module.exports = new ProductController();
