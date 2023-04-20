const express= require('express')
const router= express.Router();
const productController= require('../app/controller/ProductController')


router.get('/bestseller', productController.betseller)
router.get('/newproducts', productController.newproducts)
router.get('/search', productController.search)
router.post('/create', productController.create)
router.delete('/deletebyID/:id',productController.deletebyID)
router.put('/:id/edit',productController.edit)
router.get('/gioitinh/:gt',productController.getGt)


router.get('/', productController.index)

module.exports=router;