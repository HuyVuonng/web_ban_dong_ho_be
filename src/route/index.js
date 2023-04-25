const productRouter= require('./products')
const billRouter= require('./bill')


function route(app){
    app.use('/products', productRouter)
    app.use('/bills', billRouter)

}

module.exports= route