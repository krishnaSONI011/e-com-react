import mongoose from "mongoose";

let productShemea = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    price: {
        type: String,
        required:true
    },
    category: {
        type: mongoose.ObjectId,
        ref: "Category",
        required:true,
    },
    image: {
        type: String,
        required:true
    },
    slug: {
        type: String,
        unique: true,
        required:true
    }
}, { timestamps: true })

export default mongoose.model("products",productShemea)