const Product= require('../models/Product')


class ProductController{

//get /products
    index(req, res,next){
        // res.send('get product')
        let idreq=req.query.id

        if(idreq){
            Product.findById(idreq)
            .then(products=> res.json(products))
            .catch(next)
        }
        else{
            Product.find({})
            .then(products=> res.json(products))
            .catch(next)
        }
       
    }
// get /product/bestseller
    betseller(req, res, next){
        Product.find({}).sort({'daBan':-1}).limit(4)
        .then(products=> res.json(products))
        .catch(next)
    }


    // get /product/newproducts
    newproducts(req, res, next){
        Product.find({}).sort({'UploadAt':-1}).limit(5)
        .then(products=> res.json(products))
        .catch(next)
    }

    // get/search
    search(req, res, next){
        let namesearch=req.query.q
        if(namesearch){
            Product.find({ 'name' :{ $regex : '.*'+ namesearch + '.*', $options: 'i' }})
            .then(products=> res.json(products))
            .catch(next)
        }
        
    }

//post product
    postpro(req, res){
        res.send('post product')

    }
}

module.exports = new ProductController