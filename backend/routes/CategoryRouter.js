import express  from "express";
import {toSlug} from '../helper/slug.js'
import multer from 'multer'
let Router = express.Router();

// Adding category to backend
let upload = multer({dest:'uploads/'})

Router.post('/category-create',upload.single('image'),async (req,res)=>{
try{
let [name,image,slug] = req.body


}catch(err){

}
})