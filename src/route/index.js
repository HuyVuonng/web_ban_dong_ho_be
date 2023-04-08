const productRouter= require('./products')


function route(app){
    app.use('/products', productRouter)
}

module.exports= route