import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"User",
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String
    },
    addressLine2:{
        type:String
    },
    company:{
        type:String
    },
    postal:{
        type:String
    },
    phone:{
        type:String
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
    state:{
        type:String
    }
})
export default mongoose.model("address",AddressSchema)