import express from 'express'
import dotenv from 'dotenv'
import db from './config/db.js'
import UserAuth from './routes/UserAuth.js';
import CategoryRouter from './routes/CategoryRouter.js'
import ProductRouter from './routes/ProductRouter.js'
import CartRouter from './routes/CartRouter.js'
import AddressRouter from './routes/AddressRouter.js'
import cors from 'cors'

// config dot env file 

dotenv.config()
    // middleware 
    let app = express()
    app.use(cors())
    app.use(express.json());
    app.use('/uploads', express.static('uploads'));
//database 
db()
app.use(express.json())
let port = process.env.PORT || 8080;

app.use('/api/auth/', UserAuth);
app.use('/api/category/', CategoryRouter); 
app.use('/api/product/',ProductRouter)
app.use('/api/cart/',CartRouter)
app.use('/api/address',AddressRouter)
app.listen(port, () => {
    console.log(`your server running at ${port}`)
})
app.get('/', (req, res) => {
    res.send("welcome to dark side look like something went worg")
})