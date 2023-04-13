const express= require('express')
const router= express.Router();
const productController= require('../app/controller/ProductController')


router.get('/bestseller', productController.betseller)
router.get('/newproducts', productController.newproducts)
router.get('/search', productController.search)
router.post('/create', productController.create)


router.get('/', productController.index)

module.exports=router;