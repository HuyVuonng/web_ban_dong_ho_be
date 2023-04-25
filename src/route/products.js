const express = require("express");
const multer = require("multer");

const router = express.Router();
const productController = require("../app/controller/ProductController");

// định nghĩa nơi lưu trữ và cách lấy file
var storage = multer.diskStorage({
  destination: (req, file, res) => {
    res(null, "./img");
  },
  filename: (req, file, res) => {
    res(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

router.get("/bestseller", productController.betseller);
router.get("/newproducts", productController.newproducts);
router.get("/search", productController.search);
router.get("/searchTrash", productController.searchTrash);
router.get("/trash", productController.trashProducts);
router.get("/gioitinh/:gt", productController.getGt);
router.get("/", productController.index);


router.post("/create", upload.single("img"), productController.create);


router.delete("/deletebyIDForce/:id", productController.deletebyIDForce);

router.patch('/updateQuantity/:id',productController.updateQuantity)
router.patch("/deletebyIDSoft/:id", productController.deletebyIDSoft);
router.patch("/trash/restore/:id", productController.restore);

router.put("/:id/edit", upload.single("img"), productController.edit);


module.exports = router;
