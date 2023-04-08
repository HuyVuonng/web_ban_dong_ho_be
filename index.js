const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const route= require('./route')

app.use(morgan('combined'))

route(app)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})