import express from 'express';
import { toSlug } from '../helper/slug.js';
import multer from 'multer'
import path from 'path'
import categoryModel from '../model/categoryModel.js';
import productModel from '../model/productModel.js';

let Router = express.Router()
// for image to store here 
let storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName)
    }
})


let upload = multer({ storage: storage })

Router.post("/create-product", upload.single('image'), async (req, res) => {
    try {
        let { name, price, category } = req.body
        // eslint-disable-next-line default-case
        switch (true) {
            case !name:
                return res.status(400).json({ err: "Name is required" });
            case !price:
                return res.status(400).json({ err: "Price is required" });
            case !category:
                return res.status(400).json({ err: "Category is required" });
                
        }
        let slug = toSlug(name);
        let category_model = await categoryModel.findOne({ name: category });
        let cate_id = category_model.id
        const products = new productModel({
            name,
            price,
            category: cate_id,
            image: req.file.path,
            slug,
        })
        await products.save()
        return res.status(200).json({
            success: true,
            message: "Product Created!"
        })

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})

Router.post("/get-products/new-drops", async (req, res) => {
    try {
        let products = await productModel.find({}).limit(4).exec();
        return res.status(200).json({
            success:true,
            products
        })
    } catch (err) {
        console.error(err)
    }
})

Router.get('/:slug', async (req,res)=>{
    try{
        let product = await productModel.findOne({ slug:req.params.slug})
        return res.status(200).json({
            success:true,
            product
        })
    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            success:true,
            message:"Product Not Found"
        })
        
    }
})
// Route for single product;

Router.post("/single-product", async (req,res)=>{
    try{
        let {id} = req.body
        let product = await productModel.findById(id)
        return res.status(200).json({
            success:true,
            product
        })
    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            success:true,
            message:"Product Not Found"
        })
        
    }
})
export default Router;
