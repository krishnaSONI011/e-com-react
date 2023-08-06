import express from 'express'
import dotenv from 'dotenv'
import db from './config/db.js'
import UserAuth from './routes/UserAuth.js';
import cors from 'cors'
// config dot env file 

dotenv.config()
    // middleware 
let app = express()
app.use(cors())
app.use(express.json());
//database 
db()
app.use(express.json())
let port = process.env.PORT || 8080;

app.use('/api/auth/', UserAuth)

app.listen(port, () => {
    console.log(`your server running at ${port}`)
})
app.get('/', (req, res) => {
    res.send("Hell")
})