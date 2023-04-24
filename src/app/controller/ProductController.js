const Product = require("../models/Product");

class ProductController {

// ===========================[GET]===============================
//get /products
index(req, res, next) {
  // res.send('get product')
  let idreq = req.query.id;
  let page = req.query.page;
  if (idreq) {
    Product.findById(idreq)
      .then((products) => res.json(products))
      .catch(next);
  } else if (page) {
    page = parseInt(page);
    const PAGESIZE = 10;
    var skipProd = (page - 1) * PAGESIZE;
    Product.find({})
      .sort({ createdAt: -1 })
      .skip(skipProd)
      .limit(PAGESIZE)
      .then((prod) => res.json(prod))
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

// get/searchTrash
searchTrash(req, res, next) {
  let namesearch = req.query.q;
  if (namesearch) {
    Product.findDeleted({
      name: { $regex: ".*" + namesearch + ".*", $options: "i" },
    })
      .then((products) => res.json(products))
      .catch(next);
  }
}

// [get] /trash
trashProducts(req, res, next) {
  let page = req.query.page;
  if (page) {
    page = parseInt(page);
    const PAGESIZE = 10;
    var skipProd = (page - 1) * PAGESIZE;
    Product.findDeleted({})
      .sort({ createdAt: -1 })
      .skip(skipProd)
      .limit(PAGESIZE)
      .then((prod) => res.json(prod))
      .catch(next);
  } else {
    Product.findDeleted({})
      .then((prod) => res.json(prod))
      .catch(next);
  }
}

// [get] /gioitinh/:gt
getGt(req, res, next) {
  const gt = req.params.gt;
  let page = req.query.page;
  const PAGESIZE = 10;
  if (page) {
    page = parseInt(page);
    var skipProd = (page - 1) * PAGESIZE;
    Product.find({ GioiTinh: gt })
      .sort({ createdAt: -1 })
      .skip(skipProd)
      .limit(PAGESIZE)
      .then((prod) => res.json(prod))
      .catch(next);
  } else {
    Product.find({ GioiTinh: gt })
      .sort({ createdAt: -1 })
      .then((prod) => res.json(prod))
      .catch(next);
  }
}

// ==============================[POST]===============================================
//post /create
create(req, res) {
  const formData = req.body;
  const product = new Product(formData);
  product.img="http://localhost:3000/"+req.file.path;
  product.save().then(() => res.redirect("http://localhost:3001/quanly"));
}
  

// ====================================[PUT]============================================================
 //[put] /:id/edit
 edit(req, res, next) {
  const id = req.params.id;
  const formDataEdit = req.body;
  formDataEdit.img="http://localhost:3000/"+req.file.path;
  Product.updateOne({ _id: id },formDataEdit)
    .then(() => res.redirect("http://localhost:3001/quanly"))
    .catch(next);
}






// ====================================[PATCH]========================================================
//[Patch] /deletebyIDSoft
deletebyIDSoft(req, res, next) {
  const id = req.params.id;
  Product.delete({ _id: id }).then((prod) => res.send(prod));
}


//[patch] /trash/restore
restore(req, res,next){
  const id = req.params.id;
  console.log(id)
  Product.restore({ _id: id })
  .then((prod) => res.send(prod))
    .catch(next);
};






// ===================================[DELETE]=======================================================
  //delete /deletebyID
  deletebyIDForce(req, res, next) {
    const id = req.params.id;
    Product.findOneAndDelete({ _id: id }).then((prod) => res.send(prod));
  }

  
 
  
}

module.exports = new ProductController();
