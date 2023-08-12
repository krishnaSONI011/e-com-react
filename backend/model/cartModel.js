import mongoose from 'mongoose'

let cartShemea = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"User",
        required:true
    },
    product:{
        type:mongoose.ObjectId,
        ref:"Product",
        required:true
    },
    qty:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    }
})
export default mongoose.model("carts",cartShemea);