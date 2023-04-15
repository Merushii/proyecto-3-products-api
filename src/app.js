const express = require("express")

require('dotenv').config()

const productRouter = require('./products/products.router')

const db = require('./utils/database')

const app = express()

const PORT = process.env.PORT || 3000


db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))
    

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Server OK', 
        myMessage: process.env.MESSAGE, 
        myPort: process.env.PORT
    })
}) 

app.use('/api/v1/products', productRouter);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})
