import express from "express";
import { toSlug } from '../helper/slug.js';
import multer from 'multer';
import categoryModel from '../model/categoryModel.js';
import path from 'path';

let Router = express.Router();

// Create a custom disk storage with a filename function
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        // Use the original filename, but also append a unique identifier to avoid filename conflicts
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

// Set up multer with the custom storage
let upload = multer({ storage: storage });

Router.post('/create-category', upload.single('image'), async (req, res) => {
    try {
        let { name } = req.body;
        if (!name || !req.file) {
            return res.status(400).json({ error: "Please fill in all the details." });
        }

        let slug = await toSlug(name);
        const category = new categoryModel({
            name,
            slug,
            image: req.file.path
        });

        await category.save();

        return res.status(201).json({
            success: true,
            message: "Category created successfully."
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

Router.post("/show-category" , async (req,res)=>{
    try{
        let category = await categoryModel.find({})
        return res.status(200).json({
            success:true,
            category
        })
    }
    catch(err){
        console.error(err)
    }
})

export default Router;
