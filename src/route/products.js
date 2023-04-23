const express= require('express')
const router= express.Router();
const productController= require('../app/controller/ProductController')


router.get('/bestseller', productController.betseller)
router.get('/newproducts', productController.newproducts)
router.get('/search', productController.search)
router.get('/searchTrash', productController.searchTrash)
router.get('/trash', productController.trashProducts)
router.post('/create', productController.create)
router.delete('/deletebyIDForce/:id',productController.deletebyIDForce)
router.patch('/deletebyIDSoft/:id',productController.deletebyIDSoft)
router.patch('/trash/restore/:id',productController.restore)

router.put('/:id/edit',productController.edit)
router.get('/gioitinh/:gt',productController.getGt)


router.get('/', productController.index)

module.exports=router;