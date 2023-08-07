import mongoose from "mongoose";

let Category = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    slug:{
        type:String,
        unique:true,

    },
    image:{
        type:String,
        required:true,
    }

},{timestamp:true})

export default mongoose.model('categorys',Category)