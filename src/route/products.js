const express= require('express')
const router= express.Router();
const productController= require('../app/controller/ProductController')


router.post('/postProd', productController.postpro)

router.get('/bestseller', productController.betseller)

router.get('/newproducts', productController.newproducts)
router.get('/search', productController.search)



router.get('/', productController.index)

module.exports=router;