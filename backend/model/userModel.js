import mongoose from "mongoose";

let UserShema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    phone:{
        type:String,
        required:true,

    },
    lastname:{
        type:String,
        requred:true
    },
    role:{
        type:Number,
        defalut:0
    }

},{timestamps:true})

export default mongoose.model('users',UserShema)