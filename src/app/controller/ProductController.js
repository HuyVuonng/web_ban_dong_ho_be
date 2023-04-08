const Product= require('../models/Product')


class ProductController{

//get /products
    index(req, res,next){
        // res.send('get product')
        let idreq=req.query.id

        if(idreq){
            Product.find({_id: idreq})
            .then(products=> res.json(products))
            .catch(next)
        }
        else{
            Product.find({})
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