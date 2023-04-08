class ProductController{

//get /products
    index(req, res){
        // res.send('get product')
        res.send(req.query)
    }

//post product
    postpro(req, res){
        res.send('post product')

    }
}

module.exports = new ProductController